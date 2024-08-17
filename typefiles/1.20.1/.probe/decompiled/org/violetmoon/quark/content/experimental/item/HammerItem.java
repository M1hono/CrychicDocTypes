package org.violetmoon.quark.content.experimental.item;

import net.minecraft.core.BlockPos;
import net.minecraft.sounds.SoundSource;
import net.minecraft.world.InteractionResult;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.item.CreativeModeTabs;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.context.BlockPlaceContext;
import net.minecraft.world.item.context.UseOnContext;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.block.Block;
import net.minecraft.world.level.block.state.BlockState;
import org.jetbrains.annotations.NotNull;
import org.violetmoon.quark.content.experimental.module.VariantSelectorModule;
import org.violetmoon.quark.content.tweaks.module.LockRotationModule;
import org.violetmoon.zeta.item.ZetaItem;
import org.violetmoon.zeta.module.ZetaModule;
import org.violetmoon.zeta.registry.CreativeTabManager;

public class HammerItem extends ZetaItem {

    public HammerItem(ZetaModule module) {
        super("hammer", module, new Item.Properties().stacksTo(1));
        CreativeTabManager.addToCreativeTab(CreativeModeTabs.TOOLS_AND_UTILITIES, this);
    }

    @NotNull
    @Override
    public InteractionResult useOn(UseOnContext context) {
        Player player = context.getPlayer();
        Level level = context.getLevel();
        BlockPos pos = context.getClickedPos();
        BlockState state = level.getBlockState(pos);
        Block block = state.m_60734_();
        if (player != null) {
            String variant = VariantSelectorModule.getSavedVariant(player);
            Block variantBlock = VariantSelectorModule.getVariantBlockFromAny(block, variant);
            if (variantBlock != null) {
                level.removeBlock(pos, false);
                BlockPlaceContext bpc = new HammerItem.YungsBetterBlockPlaceContext(context);
                BlockState place = variantBlock.getStateForPlacement(bpc);
                place = LockRotationModule.fixBlockRotation(place, bpc);
                if (place != null && !place.equals(state) && !level.isClientSide) {
                    level.removeBlock(pos, false);
                    level.setBlock(pos, place, 3);
                    player.m_6674_(context.getHand());
                    level.playSound(null, pos, place.m_60827_().getPlaceSound(), SoundSource.BLOCKS, 1.0F, 1.0F);
                } else {
                    level.setBlock(pos, state, 0);
                }
                return InteractionResult.sidedSuccess(level.isClientSide);
            }
        }
        return InteractionResult.PASS;
    }

    private static class YungsBetterBlockPlaceContext extends BlockPlaceContext {

        public YungsBetterBlockPlaceContext(UseOnContext ctx) {
            super(ctx);
        }

        @NotNull
        @Override
        public BlockPos getClickedPos() {
            boolean oldRepl = this.f_43628_;
            this.f_43628_ = true;
            BlockPos pos = super.getClickedPos();
            this.f_43628_ = oldRepl;
            return pos;
        }
    }
}