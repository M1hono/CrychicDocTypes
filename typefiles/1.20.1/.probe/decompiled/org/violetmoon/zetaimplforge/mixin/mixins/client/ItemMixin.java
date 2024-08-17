package org.violetmoon.zetaimplforge.mixin.mixins.client;

import net.minecraft.client.model.HumanoidModel;
import net.minecraft.client.renderer.BlockEntityWithoutLevelRenderer;
import net.minecraft.world.entity.EquipmentSlot;
import net.minecraft.world.entity.LivingEntity;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.ItemStack;
import net.minecraftforge.client.extensions.common.IClientItemExtensions;
import org.jetbrains.annotations.NotNull;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.Shadow;
import org.violetmoon.zeta.client.HumanoidArmorModelGetter;
import org.violetmoon.zetaimplforge.client.IZetaForgeItemStuff;

@Mixin({ Item.class })
public class ItemMixin implements IZetaForgeItemStuff {

    @Shadow(remap = false)
    private Object renderProperties;

    @Override
    public void zeta$setBlockEntityWithoutLevelRenderer(final BlockEntityWithoutLevelRenderer bewlr) {
        if (this.renderProperties != null) {
            throw new IllegalStateException("Cannot set both BlockEntityWithoutLevelRenderer and HumanoidArmorModel because zeta's api is bad");
        } else {
            this.renderProperties = new IClientItemExtensions() {

                @Override
                public BlockEntityWithoutLevelRenderer getCustomRenderer() {
                    return bewlr;
                }
            };
        }
    }

    @Override
    public void zeta$setHumanoidArmorModel(final HumanoidArmorModelGetter getter) {
        if (this.renderProperties != null) {
            throw new IllegalStateException("Cannot set both BlockEntityWithoutLevelRenderer and HumanoidArmorModel because zeta's api is bad");
        } else {
            this.renderProperties = new IClientItemExtensions() {

                @NotNull
                @Override
                public HumanoidModel<?> getHumanoidArmorModel(LivingEntity livingEntity, ItemStack itemStack, EquipmentSlot equipmentSlot, HumanoidModel<?> original) {
                    return getter.getHumanoidArmorModel(livingEntity, itemStack, equipmentSlot, original);
                }
            };
        }
    }
}