package org.violetmoon.quark.content.building.module;

import net.minecraft.core.BlockPos;
import net.minecraft.core.BlockSource;
import net.minecraft.core.Direction;
import net.minecraft.core.dispenser.OptionalDispenseItemBehavior;
import net.minecraft.sounds.SoundSource;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.block.Block;
import net.minecraft.world.level.block.DispenserBlock;
import net.minecraft.world.level.block.SoundType;
import net.minecraft.world.level.block.state.BlockBehaviour;
import net.minecraft.world.level.block.state.BlockState;
import net.minecraft.world.level.material.MapColor;
import org.jetbrains.annotations.NotNull;
import org.violetmoon.quark.content.building.block.RopeBlock;
import org.violetmoon.zeta.config.Config;
import org.violetmoon.zeta.event.bus.LoadEvent;
import org.violetmoon.zeta.event.load.ZConfigChanged;
import org.violetmoon.zeta.event.load.ZRegister;
import org.violetmoon.zeta.module.ZetaLoadModule;
import org.violetmoon.zeta.module.ZetaModule;
import org.violetmoon.zeta.util.Hint;

@ZetaLoadModule(category = "building", antiOverlap = { "supplementaries" })
public class RopeModule extends ZetaModule {

    @Hint
    public static Block rope;

    @Config(description = "Set to true to allow ropes to move Tile Entities even if Pistons Push TEs is disabled.\nNote that ropes will still use the same blacklist.")
    public static boolean forceEnableMoveTileEntities = false;

    @Config
    public static boolean enableDispenserBehavior = true;

    @LoadEvent
    public final void register(ZRegister event) {
        rope = new RopeBlock("rope", this, BlockBehaviour.Properties.of().mapColor(MapColor.COLOR_BROWN).ignitedByLava().strength(0.5F).sound(SoundType.WOOL));
    }

    @LoadEvent
    public final void configChanged(ZConfigChanged event) {
        if (enableDispenserBehavior) {
            DispenserBlock.DISPENSER_REGISTRY.put(rope.asItem(), new RopeModule.BehaviourRope());
        } else {
            DispenserBlock.DISPENSER_REGISTRY.remove(rope.asItem());
        }
    }

    public static class BehaviourRope extends OptionalDispenseItemBehavior {

        @NotNull
        @Override
        protected ItemStack execute(BlockSource source, @NotNull ItemStack stack) {
            Direction facing = (Direction) source.getBlockState().m_61143_(DispenserBlock.FACING);
            BlockPos pos = source.getPos().relative(facing);
            Level world = source.getLevel();
            this.m_123573_(false);
            BlockState state = world.getBlockState(pos);
            if (state.m_60734_() == RopeModule.rope) {
                if (((RopeBlock) RopeModule.rope).pullDown(world, pos)) {
                    this.m_123573_(true);
                    stack.shrink(1);
                    return stack;
                }
            } else if (world.m_46859_(pos) && RopeModule.rope.defaultBlockState().m_60710_(world, pos)) {
                SoundType soundtype = RopeModule.rope.getSoundType(state, world, pos, null);
                world.setBlockAndUpdate(pos, RopeModule.rope.defaultBlockState());
                world.playSound(null, pos, soundtype.getPlaceSound(), SoundSource.BLOCKS, (soundtype.getVolume() + 1.0F) / 2.0F, soundtype.getPitch() * 0.8F);
                this.m_123573_(true);
                stack.shrink(1);
                return stack;
            }
            return stack;
        }
    }
}