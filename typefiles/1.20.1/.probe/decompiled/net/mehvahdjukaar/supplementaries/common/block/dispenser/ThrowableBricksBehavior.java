package net.mehvahdjukaar.supplementaries.common.block.dispenser;

import net.mehvahdjukaar.moonlight.api.util.DispenserHelper;
import net.mehvahdjukaar.supplementaries.common.entities.ThrowableBrickEntity;
import net.minecraft.core.BlockSource;
import net.minecraft.core.Direction;
import net.minecraft.core.Position;
import net.minecraft.sounds.SoundEvents;
import net.minecraft.sounds.SoundSource;
import net.minecraft.world.InteractionResultHolder;
import net.minecraft.world.entity.projectile.Projectile;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.block.DispenserBlock;

class ThrowableBricksBehavior extends DispenserHelper.AdditionalDispenserBehavior {

    protected ThrowableBricksBehavior(Item item) {
        super(item);
    }

    @Override
    protected InteractionResultHolder<ItemStack> customBehavior(BlockSource source, ItemStack stack) {
        Level world = source.getLevel();
        Position dispensePosition = DispenserBlock.getDispensePosition(source);
        Direction direction = (Direction) source.getBlockState().m_61143_(DispenserBlock.FACING);
        Projectile projectileEntity = this.getProjectileEntity(world, dispensePosition, stack);
        projectileEntity.shoot((double) direction.getStepX(), (double) ((float) direction.getStepY() + 0.1F), (double) direction.getStepZ(), this.getProjectileVelocity(), this.getProjectileInaccuracy());
        world.m_7967_(projectileEntity);
        stack.shrink(1);
        return InteractionResultHolder.success(stack);
    }

    @Override
    protected void playSound(BlockSource source, boolean success) {
        source.getLevel().m_6263_(null, source.x() + 0.5, source.y() + 0.5, source.z() + 0.5, SoundEvents.SNOWBALL_THROW, SoundSource.NEUTRAL, 0.5F, 0.4F / (source.getLevel().m_213780_().nextFloat() * 0.4F + 0.8F));
    }

    protected Projectile getProjectileEntity(Level worldIn, Position position, ItemStack stackIn) {
        return new ThrowableBrickEntity(worldIn, position.x(), position.y(), position.z());
    }

    protected float getProjectileInaccuracy() {
        return 7.0F;
    }

    protected float getProjectileVelocity() {
        return 0.9F;
    }
}