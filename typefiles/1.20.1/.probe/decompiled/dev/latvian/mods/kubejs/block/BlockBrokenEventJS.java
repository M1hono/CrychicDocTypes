package dev.latvian.mods.kubejs.block;

import dev.architectury.utils.value.IntValue;
import dev.latvian.mods.kubejs.level.BlockContainerJS;
import dev.latvian.mods.kubejs.player.PlayerEventJS;
import dev.latvian.mods.kubejs.typings.Info;
import net.minecraft.core.BlockPos;
import net.minecraft.server.level.ServerPlayer;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.block.state.BlockState;
import org.jetbrains.annotations.Nullable;

@Info("Invoked when a block is destroyed by a player.\n")
public class BlockBrokenEventJS extends PlayerEventJS {

    private final ServerPlayer entity;

    private final Level level;

    private final BlockPos pos;

    private final BlockState state;

    @Nullable
    private final IntValue xp;

    public BlockBrokenEventJS(ServerPlayer entity, Level level, BlockPos pos, BlockState state, @Nullable IntValue xp) {
        this.entity = entity;
        this.level = level;
        this.pos = pos;
        this.state = state;
        this.xp = xp;
    }

    @Info("The player that broke the block.")
    public ServerPlayer getEntity() {
        return this.entity;
    }

    @Info("The block that was broken.")
    public BlockContainerJS getBlock() {
        return new BlockContainerJS(this.level, this.pos) {

            @Override
            public BlockState getBlockState() {
                return BlockBrokenEventJS.this.state;
            }
        };
    }

    @Info("The experience dropped by the block. Always `0` on Fabric.")
    public int getXp() {
        return this.xp == null ? 0 : this.xp.getAsInt();
    }

    @Info("Sets the experience dropped by the block. Only works on Forge.")
    public void setXp(int xp) {
        if (this.xp != null) {
            this.xp.accept(xp);
        }
    }
}