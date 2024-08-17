package se.mickelus.tetra.data.provider;

import javax.annotation.ParametersAreNonnullByDefault;
import net.minecraft.core.Direction;
import net.minecraft.data.PackOutput;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.level.block.Block;
import net.minecraft.world.level.block.state.BlockState;
import net.minecraft.world.level.block.state.properties.BlockStateProperties;
import net.minecraftforge.client.model.generators.BlockStateProvider;
import net.minecraftforge.client.model.generators.ConfiguredModel;
import net.minecraftforge.client.model.generators.ModelFile;
import net.minecraftforge.client.model.generators.VariantBlockStateBuilder;
import net.minecraftforge.common.data.ExistingFileHelper;
import net.minecraftforge.registries.ForgeRegistries;
import se.mickelus.tetra.blocks.forged.ForgedVentBlock;

@ParametersAreNonnullByDefault
public class TetraBlockStateProvider extends BlockStateProvider {

    public TetraBlockStateProvider(PackOutput packOutput, String modid, ExistingFileHelper exFileHelper) {
        super(packOutput, modid, exFileHelper);
    }

    @Override
    protected void registerStatesAndModels() {
        this.setupMultiBlockSchematics();
    }

    private ConfiguredModel[] directionalBlock(BlockState state, ModelFile model) {
        Direction dir = (Direction) state.m_61143_(BlockStateProperties.FACING);
        return ConfiguredModel.builder().modelFile(model).rotationX(dir == Direction.DOWN ? 180 : (dir.getAxis().isHorizontal() ? 90 : 0)).rotationY(dir.getAxis().isVertical() ? 0 : (int) dir.toYRot() % 360).build();
    }

    private void setupVent() {
        VariantBlockStateBuilder builder = this.getVariantBuilder(ForgedVentBlock.instance);
        builder.partialState().with(ForgedVentBlock.propRotation, 0).with(ForgedVentBlock.propBroken, false).addModels(new ConfiguredModel(this.models().getExistingFile(new ResourceLocation("tetra", "block/forged_vent0"))));
        builder.partialState().with(ForgedVentBlock.propRotation, 1).with(ForgedVentBlock.propBroken, false).addModels(new ConfiguredModel(this.models().getExistingFile(new ResourceLocation("tetra", "block/forged_vent1"))));
        builder.partialState().with(ForgedVentBlock.propRotation, 2).with(ForgedVentBlock.propBroken, false).addModels(new ConfiguredModel(this.models().getExistingFile(new ResourceLocation("tetra", "block/forged_vent2"))));
        builder.partialState().with(ForgedVentBlock.propRotation, 3).with(ForgedVentBlock.propBroken, false).addModels(new ConfiguredModel(this.models().getExistingFile(new ResourceLocation("tetra", "block/forged_vent3"))));
        builder.partialState().with(ForgedVentBlock.propRotation, 0).with(ForgedVentBlock.propBroken, true).addModels(new ConfiguredModel(this.models().getExistingFile(new ResourceLocation("tetra", "block/forged_vent0_broken"))));
        builder.partialState().with(ForgedVentBlock.propRotation, 1).with(ForgedVentBlock.propBroken, true).addModels(new ConfiguredModel(this.models().getExistingFile(new ResourceLocation("tetra", "block/forged_vent1_broken"))));
        builder.partialState().with(ForgedVentBlock.propRotation, 2).with(ForgedVentBlock.propBroken, true).addModels(new ConfiguredModel(this.models().getExistingFile(new ResourceLocation("tetra", "block/forged_vent2_broken"))));
        builder.partialState().with(ForgedVentBlock.propRotation, 3).with(ForgedVentBlock.propBroken, true).addModels(new ConfiguredModel(this.models().getExistingFile(new ResourceLocation("tetra", "block/forged_vent3_broken"))));
    }

    private void setupMultiBlockSchematics() {
        this.setupMultiBlockSchematics("stonecutter", 3, 2, true);
        this.setupMultiBlockSchematics("earthpiercer", 2, 2, true);
        this.setupMultiBlockSchematics("extractor", 3, 3, true);
    }

    private void setupMultiBlockSchematics(String identifier, int width, int height, boolean ruinable) {
        for (int h = 0; h < width; h++) {
            for (int v = 0; v < height; v++) {
                this.setupMultiBlockSchematic(identifier, "block/forged_schematic/", h, v);
                if (ruinable) {
                    this.setupMultiBlockSchematic(identifier + "_ruined", "block/forged_schematic/", h, v);
                }
            }
        }
    }

    private void setupMultiBlockSchematic(String identifier, String modelPrefix, int h, int v) {
        String id = String.format("%s_%d_%d", identifier, h, v);
        ResourceLocation rl = new ResourceLocation("tetra", id);
        ResourceLocation front = new ResourceLocation("tetra", modelPrefix + id);
        Block block = ForgeRegistries.BLOCKS.getValue(rl);
        ModelFile model = this.getSchematicModel(id, front, new ResourceLocation("tetra", modelPrefix + "side"), new ResourceLocation("tetra", modelPrefix + "back"));
        this.horizontalBlock(block, model, 90);
        this.simpleBlockItem(block, model);
    }

    private ModelFile getSchematicModel(String name, ResourceLocation front, ResourceLocation side, ResourceLocation back) {
        return this.models().withExistingParent(name, "tetra:block/multi_schematic_base").texture("particle", front).texture("side", side).texture("front", front).texture("back", back);
    }
}