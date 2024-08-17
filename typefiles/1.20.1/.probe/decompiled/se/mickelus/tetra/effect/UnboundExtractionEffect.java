package se.mickelus.tetra.effect;

import com.google.common.collect.ImmutableList;
import java.util.Collection;
import java.util.LinkedList;
import java.util.List;
import java.util.Optional;
import javax.annotation.ParametersAreNonnullByDefault;
import net.minecraft.core.BlockPos;
import net.minecraft.core.Direction;
import net.minecraft.core.Vec3i;
import net.minecraft.core.particles.ParticleTypes;
import net.minecraft.server.level.ServerLevel;
import net.minecraft.server.level.ServerPlayer;
import net.minecraft.util.Mth;
import net.minecraft.world.entity.LivingEntity;
import net.minecraft.world.entity.ai.attributes.AttributeInstance;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.level.ClipContext;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.block.Block;
import net.minecraft.world.level.block.state.BlockState;
import net.minecraft.world.phys.BlockHitResult;
import net.minecraft.world.phys.HitResult;
import net.minecraft.world.phys.Vec3;
import net.minecraftforge.common.ForgeMod;
import net.minecraftforge.common.ToolAction;
import se.mickelus.mutil.util.CastOptional;
import se.mickelus.mutil.util.RotationHelper;
import se.mickelus.tetra.ServerScheduler;
import se.mickelus.tetra.items.modular.ItemModularHandheld;
import se.mickelus.tetra.items.modular.ModularItem;
import se.mickelus.tetra.util.ToolActionHelper;

@ParametersAreNonnullByDefault
public class UnboundExtractionEffect {

    public static void breakBlocks(ItemModularHandheld item, ItemStack itemStack, int effectLevel, ServerLevel world, BlockState state, BlockPos pos, LivingEntity entity) {
        Player player = (Player) CastOptional.cast(entity, Player.class).orElse(null);
        if (player != null && effectLevel > 0) {
            Vec3 entityPosition = entity.m_20299_(0.0F);
            double lookDistance = (Double) Optional.ofNullable(entity.getAttribute(ForgeMod.BLOCK_REACH.get())).map(AttributeInstance::m_22135_).orElse(5.0);
            Vec3 lookingPosition = entity.m_20154_().scale(lookDistance).add(entityPosition);
            BlockHitResult rayTrace = world.m_45547_(new ClipContext(entityPosition, lookingPosition, ClipContext.Block.COLLIDER, ClipContext.Fluid.NONE, entity));
            Direction direction = rayTrace.getType() == HitResult.Type.BLOCK ? rayTrace.getDirection().getOpposite() : Direction.orderedByNearest(entity)[0];
            float referenceHardness = state.m_60800_(world, pos);
            ToolAction referenceTool = (ToolAction) ToolActionHelper.getAppropriateTools(state).stream().filter(tool -> item.canPerformAction(itemStack, tool)).findFirst().orElse(null);
            if (referenceTool != null && item.getToolLevel(itemStack, referenceTool) > 0) {
                double critMultiplier = CritEffect.rollMultiplier(entity.getRandom(), item, itemStack);
                if (critMultiplier != 1.0) {
                    effectLevel = (int) ((double) effectLevel * critMultiplier);
                    world.sendParticles(ParticleTypes.ENCHANTED_HIT, (double) ((float) pos.m_123341_() + 0.5F), (double) ((float) pos.m_123342_() + 0.5F), (double) ((float) pos.m_123343_() + 0.5F), 15, 0.2, 0.2, 0.2, 0.0);
                }
                Vec3i limiter = getLimiter(item, direction, player.m_6350_(), itemStack);
                List<BlockPos> positions = new LinkedList(getRegularOffsets(pos, pos, limiter));
                List<BlockPos> backupPositions = new LinkedList(getBackupOffsets(pos, pos, limiter));
                int blockCount = effectLevel;
                ServerScheduler.schedule(player.m_217043_().nextInt(3), () -> breakRecursive(world, player, item, itemStack, direction, pos, limiter, positions, backupPositions, referenceHardness, referenceTool, (float) blockCount));
                item.applyDamage(effectLevel, itemStack, entity);
                item.tickProgression(entity, itemStack, Mth.ceil((double) effectLevel / 2.0));
            }
        }
    }

    private static void breakRecursive(Level world, Player player, ItemModularHandheld item, ItemStack itemStack, Direction direction, BlockPos origin, Vec3i limiter, List<BlockPos> positions, List<BlockPos> backupPositions, float refHardness, ToolAction refTool, float remaining) {
        while (positions.size() > 0 || backupPositions.size() > 0) {
            BlockPos target = positions.size() > 0 ? (BlockPos) positions.remove(player.m_217043_().nextInt(positions.size())) : (BlockPos) backupPositions.remove(player.m_217043_().nextInt(backupPositions.size()));
            if (breakBlock(world, player, item, itemStack, target, refHardness, refTool)) {
                if (remaining > 0.0F) {
                    positions.addAll(getRegularOffsets(target, origin, limiter));
                    backupPositions.addAll(getBackupOffsets(target, origin, limiter));
                    ServerScheduler.schedule(player.m_217043_().nextInt(3), () -> breakRecursive(world, player, item, itemStack, direction, origin, limiter, positions, backupPositions, refHardness, refTool, remaining - 1.0F));
                }
                return;
            }
        }
    }

    private static Vec3i getLimiter(ModularItem item, Direction direction, Direction horizontalDirection, ItemStack itemStack) {
        int lateralLimit = item.getEffectLevel(itemStack, ItemEffect.extractionLateralLimit);
        int medialLimit = item.getEffectLevel(itemStack, ItemEffect.extractionMedialLimit);
        int axialLimit = item.getEffectLevel(itemStack, ItemEffect.extractionAxialLimit);
        Vec3i axialVec;
        Vec3i medialVec;
        Vec3i lateralVec;
        if (direction.getAxis() == Direction.Axis.Y) {
            axialVec = new Vec3i(0, 1, 0);
            medialVec = new Vec3i(Math.abs(horizontalDirection.getStepX()), 0, Math.abs(horizontalDirection.getStepZ()));
            lateralVec = new Vec3i(medialVec.getZ(), 0, medialVec.getX());
        } else {
            axialVec = new Vec3i(Math.abs(direction.getStepX()), 0, Math.abs(direction.getStepZ()));
            medialVec = new Vec3i(0, 1, 0);
            lateralVec = new Vec3i(axialVec.getZ(), 0, axialVec.getX());
        }
        Vec3i result = new Vec3i(axialVec.getX() * axialLimit + medialLimit * medialVec.getX() + lateralVec.getX() * lateralLimit, axialVec.getY() * axialLimit + medialLimit * medialVec.getY() + lateralVec.getY() * lateralLimit, axialVec.getZ() * axialLimit + medialLimit * medialVec.getZ() + lateralVec.getZ() * lateralLimit);
        return new Vec3i(result.getX() > 0 ? result.getX() : Integer.MIN_VALUE, result.getY() > 0 ? result.getY() : Integer.MIN_VALUE, result.getZ() > 0 ? result.getZ() : Integer.MIN_VALUE);
    }

    private static boolean isPossible(BlockPos target, BlockPos origin, Vec3i limiter) {
        return isPossible(target.m_123341_(), origin.m_123341_(), limiter.getX()) && isPossible(target.m_123342_(), origin.m_123342_(), limiter.getY()) && isPossible(target.m_123343_(), origin.m_123343_(), limiter.getZ());
    }

    private static boolean isPossible(int target, int origin, int limiter) {
        return limiter == Integer.MIN_VALUE ? true : Math.abs(target - origin) < limiter;
    }

    private static void breakInner(Level world, Player player, ItemModularHandheld item, ItemStack itemStack, Direction direction, BlockPos pos, float refHardness, ToolAction refTool) {
        Vec3i axis1 = RotationHelper.shiftAxis(direction.getNormal());
        Vec3i axis2 = RotationHelper.shiftAxis(axis1);
        breakBlock(world, player, item, itemStack, pos.offset(axis1), refHardness, refTool);
        breakBlock(world, player, item, itemStack, pos.subtract(axis1), refHardness, refTool);
        breakBlock(world, player, item, itemStack, pos.offset(axis2), refHardness, refTool);
        breakBlock(world, player, item, itemStack, pos.subtract(axis2), refHardness, refTool);
    }

    private static void breakOuter(Level world, Player player, ItemModularHandheld item, ItemStack itemStack, Direction direction, BlockPos pos, float refHardness, ToolAction refTool) {
        Vec3i axis1 = RotationHelper.shiftAxis(direction.getNormal());
        Vec3i axis2 = RotationHelper.shiftAxis(axis1);
        breakBlock(world, player, item, itemStack, pos.offset(axis1).offset(axis2), refHardness, refTool);
        breakBlock(world, player, item, itemStack, pos.subtract(axis1).subtract(axis2), refHardness, refTool);
        breakBlock(world, player, item, itemStack, pos.offset(axis1).subtract(axis2), refHardness, refTool);
        breakBlock(world, player, item, itemStack, pos.subtract(axis1).offset(axis2), refHardness, refTool);
    }

    private static boolean breakBlock(Level world, Player player, ItemModularHandheld item, ItemStack itemStack, BlockPos pos, float refHardness, ToolAction refTool) {
        BlockState offsetState = world.getBlockState(pos);
        float blockHardness = offsetState.m_60800_(world, pos);
        if (ToolActionHelper.playerCanDestroyBlock(player, offsetState, pos, itemStack) && blockHardness != -1.0F && blockHardness <= refHardness && ToolActionHelper.isEffectiveOn(refTool, offsetState) && EffectHelper.breakBlock(world, player, itemStack, pos, offsetState, true, false)) {
            EffectHelper.sendEventToPlayer((ServerPlayer) player, 2001, pos, Block.getId(offsetState));
            item.applyBlockBreakEffects(itemStack, world, offsetState, pos, player);
            return true;
        } else {
            return false;
        }
    }

    private static Collection<BlockPos> getRegularOffsets(BlockPos pos, BlockPos origin, Vec3i limiter) {
        return ImmutableList.of(pos.above(), pos.below(), pos.north(), pos.west(), pos.south(), pos.east()).stream().filter(posInner -> isPossible(posInner, origin, limiter)).toList();
    }

    private static Collection<BlockPos> getBackupOffsets(BlockPos pos, BlockPos origin, Vec3i limiter) {
        return ImmutableList.of(pos.above().west().south(), pos.above().west().north(), pos.above().east().south(), pos.above().east().north(), pos.above().west(), pos.above().north(), pos.above().east(), pos.above().south(), pos.west().south(), pos.west().north(), pos.east().south(), pos.east().north(), new BlockPos[] { pos.below().west().south(), pos.below().west().north(), pos.below().east().south(), pos.below().east().north(), pos.below().west(), pos.below().north(), pos.below().east(), pos.below().south() }).stream().filter(posInner -> isPossible(posInner, origin, limiter)).toList();
    }
}