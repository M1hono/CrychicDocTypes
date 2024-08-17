package snownee.lychee.block_crushing;

import java.util.List;
import java.util.Map;
import net.minecraft.util.RandomSource;
import net.minecraft.world.entity.item.FallingBlockEntity;
import net.minecraft.world.entity.item.ItemEntity;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.storage.loot.parameters.LootContextParam;
import net.minecraft.world.level.storage.loot.parameters.LootContextParamSet;
import snownee.lychee.core.ItemShapelessContext;
import snownee.lychee.core.LycheeContext;

public class BlockCrushingContext extends ItemShapelessContext {

    public final FallingBlockEntity fallingBlock;

    protected BlockCrushingContext(RandomSource pRandom, Level level, Map<LootContextParam<?>, Object> pParams, List<ItemEntity> itemEntities, FallingBlockEntity fallingBlock) {
        super(pRandom, level, pParams, itemEntities);
        this.fallingBlock = fallingBlock;
    }

    public static class Builder extends LycheeContext.Builder<BlockCrushingContext> {

        public final List<ItemEntity> itemEntities;

        public final FallingBlockEntity fallingBlock;

        public Builder(Level level, List<ItemEntity> itemEntities, FallingBlockEntity fallingBlock) {
            super(level);
            this.itemEntities = itemEntities;
            this.fallingBlock = fallingBlock;
        }

        public BlockCrushingContext create(LootContextParamSet pParameterSet) {
            this.beforeCreate(pParameterSet);
            return new BlockCrushingContext(this.random, this.level, this.params, this.itemEntities, this.fallingBlock);
        }
    }
}