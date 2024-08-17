package snownee.kiwi.recipe;

import com.google.gson.JsonObject;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.util.GsonHelper;
import net.minecraftforge.common.crafting.conditions.ICondition;
import net.minecraftforge.common.crafting.conditions.IConditionSerializer;
import snownee.kiwi.Kiwi;

public class ModuleLoadedCondition implements ICondition {

    public static final ResourceLocation ID = Kiwi.id("is_loaded");

    final ResourceLocation module;

    public ModuleLoadedCondition(ResourceLocation module) {
        this.module = module;
    }

    @Override
    public ResourceLocation getID() {
        return ID;
    }

    @Override
    public boolean test(ICondition.IContext ctx) {
        return Kiwi.isLoaded(this.module);
    }

    public static enum Serializer implements IConditionSerializer<ModuleLoadedCondition> {

        INSTANCE;

        public void write(JsonObject json, ModuleLoadedCondition condition) {
            json.addProperty("module", condition.module.toString());
        }

        public ModuleLoadedCondition read(JsonObject json) {
            ResourceLocation module = new ResourceLocation(GsonHelper.getAsString(json, "module"));
            return new ModuleLoadedCondition(module);
        }

        @Override
        public ResourceLocation getID() {
            return ModuleLoadedCondition.ID;
        }
    }
}