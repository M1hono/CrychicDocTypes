package se.mickelus.tetra.items.modular.impl.shield;

import com.google.gson.JsonElement;
import com.google.gson.JsonParseException;
import com.mojang.blaze3d.vertex.PoseStack;
import com.mojang.blaze3d.vertex.VertexConsumer;
import com.mojang.datafixers.util.Pair;
import com.mojang.serialization.DataResult;
import com.mojang.serialization.JsonOps;
import java.io.BufferedReader;
import java.io.IOException;
import java.util.NoSuchElementException;
import java.util.Optional;
import javax.annotation.ParametersAreNonnullByDefault;
import net.minecraft.client.Minecraft;
import net.minecraft.client.model.Model;
import net.minecraft.client.model.geom.ModelPart;
import net.minecraft.client.model.geom.PartPose;
import net.minecraft.client.model.geom.builders.CubeListBuilder;
import net.minecraft.client.model.geom.builders.LayerDefinition;
import net.minecraft.client.model.geom.builders.MeshDefinition;
import net.minecraft.client.model.geom.builders.PartDefinition;
import net.minecraft.client.renderer.RenderType;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.server.packs.resources.Resource;
import net.minecraft.server.packs.resources.ResourceManager;
import net.minecraft.util.GsonHelper;
import net.minecraftforge.api.distmarker.Dist;
import net.minecraftforge.api.distmarker.OnlyIn;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import se.mickelus.tetra.data.DataManager;

@ParametersAreNonnullByDefault
@OnlyIn(Dist.CLIENT)
public class ModularShieldModel extends Model {

    private static final Logger logger = LogManager.getLogger();

    private final ModelPart root;

    public ModularShieldModel(ModelPart modelPart) {
        super(RenderType::m_110473_);
        this.root = modelPart;
    }

    private static Optional<Pair<ResourceLocation, ShieldModelData>> getModel(ResourceLocation resourceLocation, Resource resource) {
        try {
            BufferedReader reader = resource.openAsReader();
            Optional var3;
            try {
                var3 = Optional.of(reader).map(r -> GsonHelper.fromJson(DataManager.gson, r, JsonElement.class)).map(json -> ShieldModelData.codec.decode(JsonOps.INSTANCE, json)).map(DataResult::result).filter(Optional::isPresent).map(Optional::get).map(Pair::getFirst).map(model -> new Pair(resourceLocation, model));
            } catch (Throwable var6) {
                if (reader != null) {
                    try {
                        reader.close();
                    } catch (Throwable var5) {
                        var6.addSuppressed(var5);
                    }
                }
                throw var6;
            }
            if (reader != null) {
                reader.close();
            }
            return var3;
        } catch (JsonParseException | IOException var7) {
            logger.warn("Failed to parse model data from '{}': {}", resourceLocation, var7);
            return Optional.empty();
        }
    }

    private static String trimResourceLocation(ResourceLocation rl) {
        return rl.getNamespace() + ":" + rl.getPath().substring(22, rl.getPath().length() - 5);
    }

    public static LayerDefinition createLayer() {
        MeshDefinition mesh = new MeshDefinition();
        PartDefinition parts = mesh.getRoot();
        ResourceManager resourceManager = Minecraft.getInstance().getResourceManager();
        resourceManager.listResources("models/modular/shield", rl -> rl.getPath().endsWith(".json")).entrySet().stream().map(entry -> getModel((ResourceLocation) entry.getKey(), (Resource) entry.getValue())).filter(Optional::isPresent).map(Optional::get).forEach(pair -> ((ShieldModelData) pair.getSecond()).populatePartDefinition(parts.addOrReplaceChild(trimResourceLocation((ResourceLocation) pair.getFirst()), CubeListBuilder.create(), PartPose.ZERO)));
        return LayerDefinition.create(mesh, 32, 32);
    }

    public ModelPart getModel(String modelType) {
        try {
            return this.root.getChild(modelType);
        } catch (NoSuchElementException var3) {
            return null;
        }
    }

    @Override
    public void renderToBuffer(PoseStack matrixStack, VertexConsumer vertexBuilder, int light, int overlay, float red, float green, float blue, float alpha) {
    }
}