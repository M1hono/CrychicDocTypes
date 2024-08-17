package org.violetmoon.zeta.advancement.modifier;

import com.google.common.base.Preconditions;
import com.google.common.collect.ImmutableSet;
import java.util.Set;
import net.minecraft.advancements.Criterion;
import net.minecraft.advancements.critereon.EntityPredicate;
import net.minecraft.advancements.critereon.FishingRodHookedTrigger;
import net.minecraft.advancements.critereon.ItemPredicate;
import net.minecraft.core.registries.BuiltInRegistries;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.level.ItemLike;
import org.violetmoon.zeta.advancement.AdvancementModifier;
import org.violetmoon.zeta.api.IMutableAdvancement;
import org.violetmoon.zeta.module.ZetaModule;

public class FishyBusinessModifier extends AdvancementModifier {

    private static final ResourceLocation TARGET = new ResourceLocation("husbandry/fishy_business");

    final Set<ItemLike> fishes;

    public FishyBusinessModifier(ZetaModule module, Set<ItemLike> fishes) {
        super(module);
        this.fishes = fishes;
        Preconditions.checkArgument(!fishes.isEmpty(), "Advancement modifier list cant be empty");
    }

    @Override
    public Set<ResourceLocation> getTargets() {
        return ImmutableSet.of(TARGET);
    }

    @Override
    public boolean apply(ResourceLocation res, IMutableAdvancement adv) {
        ItemLike[] array = (ItemLike[]) this.fishes.toArray(ItemLike[]::new);
        Criterion criterion = new Criterion(FishingRodHookedTrigger.TriggerInstance.fishedItem(ItemPredicate.ANY, EntityPredicate.ANY, ItemPredicate.Builder.item().of(array).build()));
        String name = BuiltInRegistries.ITEM.getKey(array[0].asItem()).toString();
        adv.addOrCriterion(name, criterion);
        return true;
    }
}