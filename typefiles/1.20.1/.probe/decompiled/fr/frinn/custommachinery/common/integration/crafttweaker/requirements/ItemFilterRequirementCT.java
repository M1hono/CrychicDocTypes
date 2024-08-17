package fr.frinn.custommachinery.common.integration.crafttweaker.requirements;

import com.blamejared.crafttweaker.api.annotation.ZenRegister;
import com.blamejared.crafttweaker.api.ingredient.IIngredient;
import fr.frinn.custommachinery.api.integration.crafttweaker.RecipeCTBuilder;
import fr.frinn.custommachinery.common.requirement.ItemFilterRequirement;
import org.openzen.zencode.java.ZenCodeType.Method;
import org.openzen.zencode.java.ZenCodeType.Name;
import org.openzen.zencode.java.ZenCodeType.OptionalString;

@ZenRegister
@Name("mods.custommachinery.requirement.ItemFilter")
public interface ItemFilterRequirementCT<T> extends RecipeCTBuilder<T> {

    @Method
    default T requireItemFilter(IIngredient stack, @OptionalString String slot) {
        return this.addRequirement(new ItemFilterRequirement(stack.asVanillaIngredient(), slot));
    }
}