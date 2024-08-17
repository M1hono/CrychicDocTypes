package net.mehvahdjukaar.dummmmmmy.common;

import java.util.function.Consumer;
import net.mehvahdjukaar.dummmmmmy.Dummmmmmy;
import net.minecraft.core.BlockPos;
import net.minecraft.core.Direction;
import net.minecraft.server.level.ServerLevel;
import net.minecraft.sounds.SoundEvents;
import net.minecraft.sounds.SoundSource;
import net.minecraft.util.Mth;
import net.minecraft.world.InteractionResult;
import net.minecraft.world.entity.EntityType;
import net.minecraft.world.entity.MobSpawnType;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.context.BlockPlaceContext;
import net.minecraft.world.item.context.UseOnContext;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.gameevent.GameEvent;
import net.minecraft.world.phys.AABB;
import net.minecraft.world.phys.Vec3;

public class TargetDummyItem extends Item {

    public TargetDummyItem(Item.Properties builder) {
        super(builder);
    }

    @Override
    public InteractionResult useOn(UseOnContext context) {
        Direction direction = context.getClickedFace();
        if (direction == Direction.DOWN) {
            return InteractionResult.FAIL;
        } else {
            Level level = context.getLevel();
            BlockPlaceContext placeContext = new BlockPlaceContext(context);
            BlockPos blockpos = placeContext.getClickedPos();
            BlockPos above = blockpos.above();
            if (placeContext.canPlace() && level.getBlockState(above).m_60629_(placeContext)) {
                EntityType<TargetDummyEntity> type = (EntityType<TargetDummyEntity>) Dummmmmmy.TARGET_DUMMY.get();
                Vec3 vec3 = Vec3.atBottomCenterOf(blockpos);
                AABB aABB = type.getDimensions().makeBoundingBox(vec3.x(), vec3.y(), vec3.z());
                if (level.m_45756_(null, aABB) && level.m_45933_(null, aABB).isEmpty()) {
                    ItemStack itemstack = context.getItemInHand();
                    if (level instanceof ServerLevel serverLevel) {
                        level.removeBlock(blockpos, false);
                        level.removeBlock(above, false);
                        Consumer<TargetDummyEntity> consumer = EntityType.createDefaultStackConfig(serverLevel, itemstack, context.getPlayer());
                        TargetDummyEntity dummy = type.create(serverLevel, itemstack.getTag(), consumer, blockpos, MobSpawnType.SPAWN_EGG, false, false);
                        if (dummy == null) {
                            return InteractionResult.FAIL;
                        }
                        float rotation = (float) Mth.floor(((double) Mth.wrapDegrees(context.getRotation() - 180.0F) + 11.25) / 22.5) * 22.5F;
                        dummy.m_7678_(vec3.x, vec3.y, vec3.z, rotation, 0.0F);
                        level.m_7967_(dummy);
                        level.playSound(null, dummy.m_20185_(), dummy.m_20186_(), dummy.m_20189_(), SoundEvents.BAMBOO_PLACE, SoundSource.BLOCKS, 0.75F, 0.8F);
                        dummy.m_146852_(GameEvent.ENTITY_PLACE, context.getPlayer());
                    }
                    itemstack.shrink(1);
                    return InteractionResult.SUCCESS;
                }
            }
            return InteractionResult.FAIL;
        }
    }
}