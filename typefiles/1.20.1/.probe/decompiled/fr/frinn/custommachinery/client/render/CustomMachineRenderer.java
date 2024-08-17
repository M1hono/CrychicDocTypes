package fr.frinn.custommachinery.client.render;

import com.mojang.blaze3d.vertex.PoseStack;
import fr.frinn.custommachinery.common.init.CustomMachineTile;
import fr.frinn.custommachinery.common.integration.config.CMConfig;
import fr.frinn.custommachinery.common.util.PartialBlockState;
import fr.frinn.custommachinery.common.util.ingredient.IIngredient;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;
import net.minecraft.client.renderer.MultiBufferSource;
import net.minecraft.client.renderer.blockentity.BlockEntityRenderer;
import net.minecraft.client.renderer.blockentity.BlockEntityRendererProvider;
import net.minecraft.core.BlockPos;
import net.minecraft.core.Direction;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.level.block.state.properties.BlockStateProperties;
import net.minecraft.world.phys.AABB;

public class CustomMachineRenderer implements BlockEntityRenderer<CustomMachineTile> {

    private static final Map<ResourceLocation, BoxRenderer> boxToRender = new HashMap();

    private static final Map<ResourceLocation, StructureRenderer> blocksToRender = new HashMap();

    public CustomMachineRenderer(BlockEntityRendererProvider.Context context) {
    }

    public void render(CustomMachineTile tile, float partialTicks, PoseStack matrix, MultiBufferSource buffer, int combinedLight, int combinedOverlay) {
        if (tile.m_58904_() != null) {
            ResourceLocation machineId = tile.getId();
            Direction machineFacing = (Direction) tile.m_58900_().m_61143_(BlockStateProperties.HORIZONTAL_FACING);
            if (boxToRender.containsKey(machineId)) {
                BoxRenderer boxRenderer = (BoxRenderer) boxToRender.get(machineId);
                if (boxRenderer.shouldRender()) {
                    boxRenderer.render(matrix, buffer, machineFacing);
                } else {
                    boxToRender.remove(machineId);
                }
            }
            if (blocksToRender.containsKey(machineId)) {
                StructureRenderer structureRenderer = (StructureRenderer) blocksToRender.get(machineId);
                if (structureRenderer.shouldRender()) {
                    structureRenderer.render(matrix, buffer, machineFacing, tile.m_58904_(), tile.m_58899_());
                } else {
                    blocksToRender.remove(machineId);
                }
            }
        }
    }

    public static void addRenderBox(ResourceLocation machine, AABB box) {
        boxToRender.put(machine, new BoxRenderer(CMConfig.get().boxRenderTime, box));
    }

    public static void addRenderBlock(ResourceLocation machine, Function<Direction, Map<BlockPos, IIngredient<PartialBlockState>>> blocks) {
        blocksToRender.put(machine, new StructureRenderer(CMConfig.get().structureRenderTime, blocks));
    }
}