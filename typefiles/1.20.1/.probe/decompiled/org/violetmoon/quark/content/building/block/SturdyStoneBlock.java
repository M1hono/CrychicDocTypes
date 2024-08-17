package org.violetmoon.quark.content.building.block;

import net.minecraft.world.item.CreativeModeTabs;
import net.minecraft.world.level.block.Blocks;
import net.minecraft.world.level.block.SoundType;
import net.minecraft.world.level.block.state.BlockState;
import net.minecraft.world.level.material.PushReaction;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;
import org.violetmoon.zeta.block.OldMaterials;
import org.violetmoon.zeta.block.ZetaBlock;
import org.violetmoon.zeta.module.ZetaModule;

public class SturdyStoneBlock extends ZetaBlock {

    public SturdyStoneBlock(@Nullable ZetaModule module) {
        super("sturdy_stone", module, OldMaterials.stone().requiresCorrectToolForDrops().strength(4.0F, 10.0F).sound(SoundType.STONE));
        if (module != null) {
            this.setCreativeTab(CreativeModeTabs.BUILDING_BLOCKS, Blocks.STONE_BRICKS, true);
        }
    }

    @NotNull
    public PushReaction getPistonPushReaction(@NotNull BlockState state) {
        return PushReaction.BLOCK;
    }
}