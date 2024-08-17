package snownee.kiwi.item;

import com.google.common.collect.Sets;
import java.util.List;
import java.util.Set;
import javax.annotation.Nullable;
import net.minecraft.core.BlockPos;
import net.minecraft.nbt.CompoundTag;
import net.minecraft.network.chat.Component;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.flag.FeatureFlagSet;
import net.minecraft.world.item.BlockItem;
import net.minecraft.world.item.CreativeModeTab;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.TooltipFlag;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.block.Block;
import net.minecraft.world.level.block.entity.BlockEntity;
import net.minecraft.world.level.block.entity.BlockEntityType;
import net.minecraft.world.level.block.state.BlockState;
import net.minecraftforge.api.distmarker.Dist;
import net.minecraftforge.api.distmarker.OnlyIn;
import snownee.kiwi.KiwiClientConfig;
import snownee.kiwi.block.IKiwiBlock;
import snownee.kiwi.loader.Platform;

public class ModBlockItem extends BlockItem implements ItemCategoryFiller {

    public static final Set<BlockEntityType<?>> INSTANT_UPDATE_TILES = Platform.isPhysicalClient() ? Sets.newHashSet() : null;

    public ModBlockItem(Block block, Item.Properties builder) {
        super(block, builder);
    }

    @Override
    protected boolean updateCustomBlockEntityTag(BlockPos pos, Level worldIn, Player player, ItemStack stack, BlockState state) {
        if (worldIn.isClientSide) {
            BlockEntity tile = worldIn.getBlockEntity(pos);
            if (tile != null && INSTANT_UPDATE_TILES.contains(tile.getType())) {
                CompoundTag data = m_186336_(stack);
                if (data != null) {
                    data = data.copy();
                    tile.load(data);
                    tile.setChanged();
                }
            }
        }
        return super.updateCustomBlockEntityTag(pos, worldIn, player, stack, state);
    }

    @OnlyIn(Dist.CLIENT)
    @Override
    public void appendHoverText(ItemStack stack, @Nullable Level worldIn, List<Component> tooltip, TooltipFlag flagIn) {
        super.appendHoverText(stack, worldIn, tooltip, flagIn);
        if (!KiwiClientConfig.globalTooltip) {
            ModItem.addTip(stack, tooltip, flagIn);
        }
    }

    @Override
    public Component getName(ItemStack pStack) {
        Block block = this.m_40614_();
        return (Component) (block instanceof IKiwiBlock ? ((IKiwiBlock) block).getName(pStack) : super.m_7626_(pStack));
    }

    @Override
    public void fillItemCategory(CreativeModeTab tab, FeatureFlagSet flags, boolean hasPermissions, List<ItemStack> items) {
        if (this.m_40614_() instanceof ItemCategoryFiller filler) {
            filler.fillItemCategory(tab, flags, hasPermissions, items);
        } else {
            items.add(new ItemStack(this));
        }
    }
}