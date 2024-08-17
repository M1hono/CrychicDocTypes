package org.violetmoon.zeta.advancement.modifier;

import com.google.common.collect.ImmutableSet;
import java.util.Set;
import net.minecraft.advancements.Criterion;
import net.minecraft.advancements.critereon.EnterBlockTrigger;
import net.minecraft.core.registries.BuiltInRegistries;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.level.block.Block;
import org.violetmoon.zeta.advancement.AdvancementModifier;
import org.violetmoon.zeta.api.IMutableAdvancement;
import org.violetmoon.zeta.module.ZetaModule;

public class ASeedyPlaceModifier extends AdvancementModifier {

    private static final ResourceLocation TARGET = new ResourceLocation("husbandry/plant_seed");

    final Set<Block> seeds;

    public ASeedyPlaceModifier(ZetaModule module, Set<Block> seeds) {
        super(module);
        this.seeds = seeds;
    }

    @Override
    public Set<ResourceLocation> getTargets() {
        return ImmutableSet.of(TARGET);
    }

    @Override
    public boolean apply(ResourceLocation res, IMutableAdvancement adv) {
        for (Block block : this.seeds) {
            Criterion criterion = new Criterion(EnterBlockTrigger.TriggerInstance.entersBlock(block));
            String name = BuiltInRegistries.BLOCK.getKey(block).toString();
            adv.addOrCriterion(name, criterion);
        }
        return true;
    }
}