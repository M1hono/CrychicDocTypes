package top.theillusivec4.curios.mixin;

import java.util.Map.Entry;
import net.minecraft.core.NonNullList;
import net.minecraft.nbt.CompoundTag;
import net.minecraft.nbt.ListTag;
import net.minecraft.tags.ItemTags;
import net.minecraft.tags.TagKey;
import net.minecraft.world.entity.Entity;
import net.minecraft.world.entity.LivingEntity;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.level.storage.loot.LootContext;
import net.minecraft.world.level.storage.loot.parameters.LootContextParams;
import net.minecraftforge.items.IItemHandler;
import net.minecraftforge.items.IItemHandlerModifiable;
import net.minecraftforge.registries.ForgeRegistries;
import net.minecraftforge.registries.tags.ITagManager;
import top.theillusivec4.curios.api.CuriosApi;
import top.theillusivec4.curios.api.SlotContext;
import top.theillusivec4.curios.api.type.inventory.ICurioStacksHandler;
import top.theillusivec4.curios.api.type.inventory.IDynamicStackHandler;

public class CuriosUtilMixinHooks {

    private static final ITagManager<Item> ITEM_TAGS = ForgeRegistries.ITEMS.tags();

    public static boolean canNeutralizePiglins(LivingEntity livingEntity) {
        return (Boolean) CuriosApi.getCuriosInventory(livingEntity).map(handler -> {
            for (Entry<String, ICurioStacksHandler> entry : handler.getCurios().entrySet()) {
                IDynamicStackHandler stacks = ((ICurioStacksHandler) entry.getValue()).getStacks();
                for (int i = 0; i < stacks.getSlots(); i++) {
                    int index = i;
                    NonNullList<Boolean> renderStates = ((ICurioStacksHandler) entry.getValue()).getRenders();
                    boolean canNeutralize = (Boolean) CuriosApi.getCurio(stacks.getStackInSlot(i)).map(curio -> curio.makesPiglinsNeutral(new SlotContext((String) entry.getKey(), livingEntity, index, false, renderStates.size() > index && renderStates.get(index)))).orElse(false);
                    if (canNeutralize) {
                        return true;
                    }
                }
            }
            return false;
        }).orElse(false);
    }

    public static boolean canWalkOnPowderSnow(LivingEntity livingEntity) {
        return (Boolean) CuriosApi.getCuriosInventory(livingEntity).map(handler -> {
            for (Entry<String, ICurioStacksHandler> entry : handler.getCurios().entrySet()) {
                IDynamicStackHandler stacks = ((ICurioStacksHandler) entry.getValue()).getStacks();
                for (int i = 0; i < stacks.getSlots(); i++) {
                    int index = i;
                    NonNullList<Boolean> renderStates = ((ICurioStacksHandler) entry.getValue()).getRenders();
                    boolean canWalk = (Boolean) CuriosApi.getCurio(stacks.getStackInSlot(i)).map(curio -> curio.canWalkOnPowderedSnow(new SlotContext((String) entry.getKey(), livingEntity, index, false, renderStates.size() > index && renderStates.get(index)))).orElse(false);
                    if (canWalk) {
                        return true;
                    }
                }
            }
            return false;
        }).orElse(false);
    }

    public static int getFortuneLevel(Player player) {
        return (Integer) CuriosApi.getCuriosInventory(player).map(handler -> handler.getFortuneLevel(null)).orElse(0);
    }

    public static int getFortuneLevel(LootContext lootContext) {
        Entity entity = lootContext.getParamOrNull(LootContextParams.THIS_ENTITY);
        return entity instanceof LivingEntity livingEntity ? (Integer) CuriosApi.getCuriosInventory(livingEntity).map(handler -> handler.getFortuneLevel(lootContext)).orElse(0) : 0;
    }

    public static boolean isFreezeImmune(LivingEntity livingEntity) {
        return (Boolean) CuriosApi.getCuriosInventory(livingEntity).map(curios -> {
            IItemHandlerModifiable handler = curios.getEquippedCurios();
            for (int i = 0; i < handler.getSlots(); i++) {
                ItemStack stack = handler.getStackInSlot(i);
                if (ITEM_TAGS != null && ITEM_TAGS.getTag(ItemTags.FREEZE_IMMUNE_WEARABLES).contains(stack.getItem())) {
                    return true;
                }
            }
            return false;
        }).orElse(false);
    }

    public static CompoundTag mergeCuriosInventory(CompoundTag compoundTag, Entity entity) {
        if (entity instanceof LivingEntity livingEntity) {
            ListTag list = compoundTag.getList("Inventory", 10);
            return (CompoundTag) CuriosApi.getCuriosInventory(livingEntity).map(inv -> {
                IItemHandler handler = inv.getEquippedCurios();
                for (int i = 0; i < handler.getSlots(); i++) {
                    ItemStack stack = handler.getStackInSlot(i);
                    if (!stack.isEmpty()) {
                        CompoundTag tag = new CompoundTag();
                        tag.putByte("Slot", (byte) (4444 + i));
                        stack.save(tag);
                        list.add(tag);
                    }
                }
                return compoundTag;
            }).orElse(compoundTag);
        } else {
            return compoundTag;
        }
    }

    public static boolean containsStack(Player player, ItemStack stack) {
        return (Boolean) CuriosApi.getCuriosInventory(player).map(inv -> inv.findFirstCurio(stack2 -> !stack2.isEmpty() && ItemStack.isSameItemSameTags(stack, stack2)).isPresent()).orElse(false);
    }

    public static boolean containsTag(Player player, TagKey<Item> tagKey) {
        return (Boolean) CuriosApi.getCuriosInventory(player).map(inv -> inv.findFirstCurio(stack2 -> !stack2.isEmpty() && stack2.is(tagKey)).isPresent()).orElse(false);
    }
}