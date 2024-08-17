package com.mna.spells.shapes;

import com.mna.api.spells.attributes.Attribute;
import com.mna.api.spells.attributes.AttributeValuePair;
import com.mna.api.spells.base.IModifiedSpellPart;
import com.mna.api.spells.base.ISpellDefinition;
import com.mna.api.spells.parts.Shape;
import com.mna.api.spells.targeting.SpellSource;
import com.mna.api.spells.targeting.SpellTarget;
import com.mna.entities.sorcery.targeting.SpellBeam;
import java.util.Arrays;
import java.util.List;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.level.Level;

public class ShapeBeam extends Shape {

    public ShapeBeam(ResourceLocation guiIcon) {
        super(guiIcon, new AttributeValuePair(Attribute.DURATION, 3.0F, 1.0F, 10.0F, 0.5F), new AttributeValuePair(Attribute.WIDTH, 3.0F, 1.0F, 9.0F, 1.0F), new AttributeValuePair(Attribute.HEIGHT, 2.0F, 1.0F, 9.0F, 1.0F), new AttributeValuePair(Attribute.DEPTH, 1.0F, 1.0F, 3.0F, 1.0F), new AttributeValuePair(Attribute.RANGE, 8.0F, 8.0F, 16.0F, 1.0F));
    }

    @Override
    public List<SpellTarget> Target(SpellSource source, Level world, IModifiedSpellPart<Shape> modificationData, ISpellDefinition recipe) {
        if (!world.isClientSide) {
            SpellBeam projectile = new SpellBeam(source.getCaster(), recipe, world);
            world.m_7967_(projectile);
        }
        return Arrays.asList(new SpellTarget(source.getCaster()));
    }

    @Override
    public boolean spawnsTargetEntity() {
        return true;
    }

    @Override
    public boolean isChanneled() {
        return true;
    }

    @Override
    public float initialComplexity() {
        return 30.0F;
    }

    @Override
    public int requiredXPForRote() {
        return 12000;
    }
}