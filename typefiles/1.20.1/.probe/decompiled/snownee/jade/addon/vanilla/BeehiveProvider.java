package snownee.jade.addon.vanilla;

import net.minecraft.nbt.CompoundTag;
import net.minecraft.network.chat.Component;
import net.minecraft.network.chat.MutableComponent;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.level.block.BeehiveBlock;
import net.minecraft.world.level.block.entity.BeehiveBlockEntity;
import net.minecraft.world.level.block.state.BlockState;
import snownee.jade.api.BlockAccessor;
import snownee.jade.api.IBlockComponentProvider;
import snownee.jade.api.IServerDataProvider;
import snownee.jade.api.ITooltip;
import snownee.jade.api.Identifiers;
import snownee.jade.api.config.IPluginConfig;
import snownee.jade.api.theme.IThemeHelper;

public enum BeehiveProvider implements IBlockComponentProvider, IServerDataProvider<BlockAccessor> {

    INSTANCE;

    @Override
    public void appendTooltip(ITooltip tooltip, BlockAccessor accessor, IPluginConfig config) {
        BlockState state = accessor.getBlockState();
        int level = (Integer) state.m_61143_(BeehiveBlock.HONEY_LEVEL);
        IThemeHelper t = IThemeHelper.get();
        MutableComponent value = Component.translatable("jade.fraction", level, 5);
        tooltip.add(Component.translatable("jade.beehive.honey", level == 5 ? t.success(value) : t.info(value)));
        if (accessor.getServerData().contains("Full")) {
            boolean full = accessor.getServerData().getBoolean("Full");
            int bees = accessor.getServerData().getByte("Bees");
            tooltip.add(Component.translatable("jade.beehive.bees", full ? t.success(bees) : t.info(bees)));
        }
    }

    public void appendServerData(CompoundTag tag, BlockAccessor blockAccessor) {
        tag.getAllKeys().clear();
        BeehiveBlockEntity beehive = (BeehiveBlockEntity) blockAccessor.getBlockEntity();
        tag.putByte("Bees", (byte) beehive.getOccupantCount());
        tag.putBoolean("Full", beehive.isFull());
    }

    @Override
    public ResourceLocation getUid() {
        return Identifiers.MC_BEEHIVE;
    }
}