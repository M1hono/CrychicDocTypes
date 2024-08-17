package mezz.jei.common.util;

import mezz.jei.api.helpers.IStackHelper;
import mezz.jei.api.ingredients.subtypes.ISubtypeManager;
import mezz.jei.api.ingredients.subtypes.UidContext;
import mezz.jei.common.platform.Services;
import net.minecraft.core.registries.Registries;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.ItemStack;
import org.jetbrains.annotations.Nullable;

public class StackHelper implements IStackHelper {

    private final ISubtypeManager subtypeManager;

    public StackHelper(ISubtypeManager subtypeManager) {
        this.subtypeManager = subtypeManager;
    }

    @Override
    public boolean isEquivalent(@Nullable ItemStack lhs, @Nullable ItemStack rhs, UidContext context) {
        ErrorUtil.checkNotNull(context, "context");
        if (lhs == rhs) {
            return true;
        } else if (lhs != null && rhs != null) {
            if (lhs.getItem() != rhs.getItem()) {
                return false;
            } else {
                String keyLhs = this.getUniqueIdentifierForStack(lhs, context);
                String keyRhs = this.getUniqueIdentifierForStack(rhs, context);
                return keyLhs.equals(keyRhs);
            }
        } else {
            return false;
        }
    }

    @Override
    public String getUniqueIdentifierForStack(ItemStack stack, UidContext context) {
        String result = getRegistryNameForStack(stack);
        String subtypeInfo = this.subtypeManager.getSubtypeInfo(stack, context);
        if (!subtypeInfo.isEmpty()) {
            result = result + ":" + subtypeInfo;
        }
        return result;
    }

    public static String getRegistryNameForStack(ItemStack stack) {
        ErrorUtil.checkNotEmpty(stack, "stack");
        Item item = stack.getItem();
        return (String) Services.PLATFORM.getRegistry(Registries.ITEM).getRegistryName(item).map(ResourceLocation::toString).orElseThrow(() -> {
            String stackInfo = ErrorUtil.getItemStackInfo(stack);
            return new IllegalStateException("Item has no registry name: " + stackInfo);
        });
    }
}