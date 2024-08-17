package net.mehvahdjukaar.supplementaries.common.items;

import java.util.List;
import java.util.Optional;
import java.util.function.Supplier;
import net.mehvahdjukaar.moonlight.api.client.ICustomItemRendererProvider;
import net.mehvahdjukaar.moonlight.api.client.ItemStackRenderer;
import net.mehvahdjukaar.supplementaries.client.BlackboardManager;
import net.mehvahdjukaar.supplementaries.client.renderers.items.BlackboardItemRenderer;
import net.minecraft.ChatFormatting;
import net.minecraft.nbt.CompoundTag;
import net.minecraft.network.chat.Component;
import net.minecraft.world.inventory.tooltip.TooltipComponent;
import net.minecraft.world.item.BlockItem;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.TooltipFlag;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.block.Block;
import org.jetbrains.annotations.Nullable;

public class BlackboardItem extends BlockItem implements ICustomItemRendererProvider {

    public BlackboardItem(Block blockIn, Item.Properties builder) {
        super(blockIn, builder);
    }

    @Override
    public void appendHoverText(ItemStack pStack, @Nullable Level pLevel, List<Component> pTooltip, TooltipFlag pFlag) {
        super.appendHoverText(pStack, pLevel, pTooltip, pFlag);
        CompoundTag tag = pStack.getTagElement("BlockEntityTag");
        if (tag != null && tag.contains("Waxed")) {
            pTooltip.add(Component.translatable("message.supplementaries.blackboard").withStyle(ChatFormatting.GRAY));
        }
    }

    @Override
    public Optional<TooltipComponent> getTooltipImage(ItemStack pStack) {
        CompoundTag cmp = pStack.getTagElement("BlockEntityTag");
        return cmp != null && cmp.contains("Pixels") ? Optional.of(BlackboardManager.Key.of(cmp.getLongArray("Pixels"))) : Optional.empty();
    }

    @Override
    public Supplier<ItemStackRenderer> getRendererFactory() {
        return BlackboardItemRenderer::new;
    }
}