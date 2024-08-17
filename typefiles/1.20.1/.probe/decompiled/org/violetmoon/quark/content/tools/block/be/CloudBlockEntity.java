package org.violetmoon.quark.content.tools.block.be;

import net.minecraft.core.BlockPos;
import net.minecraft.core.particles.ParticleTypes;
import net.minecraft.nbt.CompoundTag;
import net.minecraft.network.protocol.Packet;
import net.minecraft.network.protocol.game.ClientGamePacketListener;
import net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.block.state.BlockState;
import org.violetmoon.quark.content.tools.module.BottledCloudModule;
import org.violetmoon.zeta.block.be.ZetaBlockEntity;

public class CloudBlockEntity extends ZetaBlockEntity {

    private static final String TAG_LIVE_TIME = "liveTime";

    public int liveTime = -10000;

    public CloudBlockEntity(BlockPos pos, BlockState state) {
        super(BottledCloudModule.blockEntityType, pos, state);
    }

    public static void tick(Level level, BlockPos pos, BlockState state, CloudBlockEntity be) {
        if (be.liveTime < -1000) {
            be.liveTime = 200;
        }
        if (be.liveTime > 0) {
            be.liveTime--;
            if (level.isClientSide && be.liveTime % 20 == 0) {
                for (int i = 0; i < 10 - (200 - be.liveTime) / 20; i++) {
                    level.addParticle(ParticleTypes.CLOUD, (double) be.f_58858_.m_123341_() + Math.random(), (double) be.f_58858_.m_123342_() + Math.random(), (double) be.f_58858_.m_123343_() + Math.random(), 0.0, 0.0, 0.0);
                }
            }
        } else if (!level.isClientSide) {
            level.removeBlock(pos, false);
        }
    }

    @Override
    public Packet<ClientGamePacketListener> getUpdatePacket() {
        return ClientboundBlockEntityDataPacket.create(this);
    }

    @Override
    public void writeSharedNBT(CompoundTag cmp) {
        cmp.putInt("liveTime", this.liveTime);
    }

    @Override
    public void readSharedNBT(CompoundTag cmp) {
        this.liveTime = cmp.getInt("liveTime");
    }
}