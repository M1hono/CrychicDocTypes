package org.violetmoon.quark.content.mobs.item;

import net.minecraft.core.BlockPos;
import net.minecraft.server.level.ServerLevel;
import net.minecraft.sounds.SoundSource;
import net.minecraft.stats.Stats;
import net.minecraft.world.InteractionHand;
import net.minecraft.world.InteractionResultHolder;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.item.CreativeModeTabs;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.Items;
import net.minecraft.world.level.Level;
import net.minecraft.world.phys.Vec3;
import org.jetbrains.annotations.NotNull;
import org.violetmoon.quark.base.handler.QuarkSounds;
import org.violetmoon.quark.content.mobs.entity.SoulBead;
import org.violetmoon.quark.content.mobs.module.WraithModule;
import org.violetmoon.zeta.item.ZetaItem;
import org.violetmoon.zeta.module.ZetaModule;
import org.violetmoon.zeta.registry.CreativeTabManager;

public class SoulBeadItem extends ZetaItem {

    public SoulBeadItem(ZetaModule module) {
        super("soul_bead", module, new Item.Properties());
        CreativeTabManager.addToCreativeTabNextTo(CreativeModeTabs.TOOLS_AND_UTILITIES, this, Items.ENDER_PEARL, true);
    }

    @NotNull
    @Override
    public InteractionResultHolder<ItemStack> use(Level worldIn, Player playerIn, @NotNull InteractionHand handIn) {
        ItemStack itemstack = playerIn.m_21120_(handIn);
        if (!worldIn.isClientSide) {
            BlockPos blockpos = ((ServerLevel) worldIn).findNearestMapStructure(WraithModule.soulBeadTargetTag, playerIn.m_20183_(), 100, false);
            if (blockpos != null) {
                itemstack.shrink(1);
                SoulBead entity = new SoulBead(WraithModule.soulBeadType, worldIn);
                entity.setTarget(blockpos.m_123341_(), blockpos.m_123343_());
                Vec3 look = playerIn.m_20154_();
                entity.m_6034_(playerIn.m_20185_() + look.x * 2.0, playerIn.m_20186_() + 0.25, playerIn.m_20189_() + look.z * 2.0);
                worldIn.m_7967_(entity);
                worldIn.playSound(null, playerIn.m_20185_(), playerIn.m_20186_(), playerIn.m_20189_(), QuarkSounds.ITEM_SOUL_POWDER_SPAWN, SoundSource.PLAYERS, 1.0F, 1.0F);
            }
        } else {
            playerIn.m_6674_(handIn);
        }
        playerIn.awardStat(Stats.ITEM_USED.get(this));
        return InteractionResultHolder.sidedSuccess(itemstack, worldIn.isClientSide);
    }
}