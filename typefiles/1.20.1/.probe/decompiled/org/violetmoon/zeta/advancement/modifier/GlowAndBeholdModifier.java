package org.violetmoon.zeta.advancement.modifier;

import com.google.common.base.Preconditions;
import com.google.common.collect.ImmutableSet;
import java.util.Set;
import net.minecraft.advancements.Criterion;
import net.minecraft.advancements.critereon.BlockPredicate;
import net.minecraft.advancements.critereon.ItemPredicate;
import net.minecraft.advancements.critereon.ItemUsedOnLocationTrigger;
import net.minecraft.advancements.critereon.LocationPredicate;
import net.minecraft.core.registries.BuiltInRegistries;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.item.Items;
import net.minecraft.world.level.block.Block;
import org.violetmoon.zeta.advancement.AdvancementModifier;
import org.violetmoon.zeta.api.IMutableAdvancement;
import org.violetmoon.zeta.module.ZetaModule;

public class GlowAndBeholdModifier extends AdvancementModifier {

    private static final ResourceLocation TARGET = new ResourceLocation("husbandry/make_a_sign_glow");

    final Set<Block> blocks;

    public GlowAndBeholdModifier(ZetaModule module, Set<Block> buckets) {
        super(module);
        this.blocks = buckets;
        Preconditions.checkArgument(!this.blocks.isEmpty(), "Advancement modifier list cant be empty");
    }

    @Override
    public Set<ResourceLocation> getTargets() {
        return ImmutableSet.of(TARGET);
    }

    @Override
    public boolean apply(ResourceLocation res, IMutableAdvancement adv) {
        Block[] array = (Block[]) this.blocks.toArray(Block[]::new);
        Criterion criterion = new Criterion(ItemUsedOnLocationTrigger.TriggerInstance.itemUsedOnBlock(LocationPredicate.Builder.location().setBlock(BlockPredicate.Builder.block().of(array).build()), ItemPredicate.Builder.item().of(Items.GLOW_INK_SAC)));
        String name = BuiltInRegistries.BLOCK.getKey(array[0]).toString();
        adv.addOrCriterion(name, criterion);
        return true;
    }
}