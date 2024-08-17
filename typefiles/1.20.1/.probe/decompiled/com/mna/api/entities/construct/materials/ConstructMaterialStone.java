package com.mna.api.entities.construct.materials;

import com.mna.api.entities.construct.ConstructCapability;
import com.mna.api.entities.construct.ConstructMaterial;
import com.mna.api.entities.construct.ConstructSlot;
import com.mna.api.entities.construct.IConstruct;
import java.util.Arrays;
import java.util.List;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.damagesource.DamageSource;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.Items;
import net.minecraft.world.item.Tier;
import net.minecraft.world.item.Tiers;

public class ConstructMaterialStone extends ConstructMaterial {

    public static final ResourceLocation texture = new ResourceLocation("mna", "textures/entity/animated_construct/stone.png");

    @Override
    public int getHealth() {
        return 5;
    }

    @Override
    public float getBuoyancy() {
        return -1.0F;
    }

    @Override
    public float getSpeed() {
        return 0.11F;
    }

    @Override
    public ResourceLocation getTexture() {
        return texture;
    }

    @Override
    public float getExplosionResistance() {
        return -0.1F;
    }

    @Override
    public float getKnockbackResistance() {
        return 0.2F;
    }

    @Override
    public Tier getEquivalentTier() {
        return Tiers.STONE;
    }

    @Override
    public List<ItemStack> getDeathLootMaterialDrops(IConstruct<?> constrcut, DamageSource source) {
        return Arrays.asList(new ItemStack(Items.STONE, 3));
    }

    @Override
    public float getCooldownMultiplierFor(ConstructCapability action) {
        return action != ConstructCapability.MINE && action != ConstructCapability.CHOP_WOOD ? 0.9F : 0.75F;
    }

    @Override
    public int getArmorBonus(ConstructSlot slot) {
        return 3;
    }

    @Override
    public int getToughnessBonus(ConstructSlot slot) {
        return 0;
    }

    @Override
    public float getDamageBonus() {
        return 2.0F;
    }

    @Override
    public int getIntelligenceBonus() {
        return 12;
    }

    @Override
    public int getManaStorage() {
        return 500;
    }

    @Override
    public float getRangedDamageBonus() {
        return 5.0F;
    }

    @Override
    public float getRangedManaCost() {
        return 50.0F;
    }

    @Override
    public ResourceLocation getId() {
        return new ResourceLocation("mna", "stone");
    }

    @Override
    public int getBackpackCapacityBoost() {
        return 8;
    }
}