package net.mehvahdjukaar.amendments.common.tile;

import com.mojang.datafixers.util.Pair;
import java.util.List;
import java.util.function.Supplier;
import net.mehvahdjukaar.amendments.reg.ModRegistry;
import net.minecraft.core.BlockPos;
import net.minecraft.core.Holder;
import net.minecraft.nbt.CompoundTag;
import net.minecraft.nbt.ListTag;
import net.minecraft.network.chat.Component;
import net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket;
import net.minecraft.world.Nameable;
import net.minecraft.world.item.DyeColor;
import net.minecraft.world.level.block.AbstractBannerBlock;
import net.minecraft.world.level.block.entity.BannerBlockEntity;
import net.minecraft.world.level.block.entity.BannerPattern;
import net.minecraft.world.level.block.entity.BlockEntity;
import net.minecraft.world.level.block.entity.BlockEntityType;
import net.minecraft.world.level.block.state.BlockState;
import org.jetbrains.annotations.Nullable;

public class CeilingBannerBlockTile extends BlockEntity implements Nameable {

    @Nullable
    private Component name;

    @Nullable
    private DyeColor baseColor;

    @Nullable
    private ListTag itemPatterns;

    @Nullable
    private List<Pair<Holder<BannerPattern>, DyeColor>> patterns;

    public CeilingBannerBlockTile(BlockPos pos, BlockState state) {
        this(pos, state, DyeColor.WHITE);
    }

    public CeilingBannerBlockTile(BlockPos pos, BlockState state, DyeColor color) {
        super((BlockEntityType<?>) ModRegistry.CEILING_BANNER_TILE.get(), pos, state);
        this.baseColor = color;
    }

    @Override
    public Component getName() {
        return (Component) (this.name != null ? this.name : Component.translatable("block.minecraft.banner"));
    }

    @Nullable
    @Override
    public Component getCustomName() {
        return this.name;
    }

    public void setCustomName(Component component) {
        this.name = component;
    }

    @Override
    public void saveAdditional(CompoundTag tag) {
        super.saveAdditional(tag);
        if (this.itemPatterns != null) {
            tag.put("Patterns", this.itemPatterns);
        }
        if (this.name != null) {
            tag.putString("CustomName", Component.Serializer.toJson(this.name));
        }
    }

    @Override
    public void load(CompoundTag pTag) {
        super.load(pTag);
        if (pTag.contains("CustomName", 8)) {
            this.name = Component.Serializer.fromJson(pTag.getString("CustomName"));
        }
        if (this.m_58898_()) {
            this.baseColor = ((AbstractBannerBlock) this.m_58900_().m_60734_()).getColor();
        } else {
            this.baseColor = null;
        }
        this.itemPatterns = pTag.getList("Patterns", 10);
        this.patterns = null;
    }

    @Nullable
    public ClientboundBlockEntityDataPacket getUpdatePacket() {
        return ClientboundBlockEntityDataPacket.create(this);
    }

    @Override
    public CompoundTag getUpdateTag() {
        return this.m_187482_();
    }

    public List<Pair<Holder<BannerPattern>, DyeColor>> getPatterns() {
        if (this.patterns == null) {
            this.patterns = BannerBlockEntity.createPatterns(this.baseColor, this.itemPatterns);
        }
        return this.patterns;
    }

    public DyeColor getBaseColor(Supplier<BlockState> blockStateSupplier) {
        if (this.baseColor == null) {
            this.baseColor = ((AbstractBannerBlock) ((BlockState) blockStateSupplier.get()).m_60734_()).getColor();
        }
        return this.baseColor;
    }
}