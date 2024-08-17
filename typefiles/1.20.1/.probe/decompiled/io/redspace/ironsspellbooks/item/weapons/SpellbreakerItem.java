package io.redspace.ironsspellbooks.item.weapons;

import io.redspace.ironsspellbooks.api.item.weapons.MagicSwordItem;
import io.redspace.ironsspellbooks.api.registry.AttributeRegistry;
import io.redspace.ironsspellbooks.api.registry.SpellDataRegistryHolder;
import io.redspace.ironsspellbooks.util.ItemPropertiesHelper;
import java.util.Map;
import java.util.UUID;
import net.minecraft.world.entity.ai.attributes.AttributeModifier;
import net.minecraft.world.item.Rarity;
import net.minecraft.world.item.Tiers;

public class SpellbreakerItem extends MagicSwordItem {

    public SpellbreakerItem(SpellDataRegistryHolder[] imbuedSpells) {
        super(Tiers.DIAMOND, 9.0, -2.0, imbuedSpells, Map.of(AttributeRegistry.COOLDOWN_REDUCTION.get(), new AttributeModifier(UUID.fromString("412b5a66-2b43-4c18-ab05-6de0bb4d64d3"), "Weapon Modifier", 0.15, AttributeModifier.Operation.MULTIPLY_BASE)), ItemPropertiesHelper.hidden(1).rarity(Rarity.EPIC));
    }
}