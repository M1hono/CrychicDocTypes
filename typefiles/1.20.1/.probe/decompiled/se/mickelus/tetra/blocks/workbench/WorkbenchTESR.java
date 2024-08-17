package se.mickelus.tetra.blocks.workbench;

import com.mojang.blaze3d.vertex.PoseStack;
import com.mojang.math.Axis;
import javax.annotation.ParametersAreNonnullByDefault;
import net.minecraft.client.Minecraft;
import net.minecraft.client.renderer.LevelRenderer;
import net.minecraft.client.renderer.MultiBufferSource;
import net.minecraft.client.renderer.blockentity.BlockEntityRenderer;
import net.minecraft.client.renderer.blockentity.BlockEntityRendererProvider;
import net.minecraft.client.renderer.entity.ItemRenderer;
import net.minecraft.client.resources.model.BakedModel;
import net.minecraft.world.item.ItemDisplayContext;
import net.minecraft.world.item.ItemStack;
import net.minecraftforge.api.distmarker.Dist;
import net.minecraftforge.api.distmarker.OnlyIn;
import se.mickelus.tetra.items.modular.impl.shield.ModularShieldItem;

@ParametersAreNonnullByDefault
@OnlyIn(Dist.CLIENT)
public class WorkbenchTESR implements BlockEntityRenderer<WorkbenchTile> {

    private final ItemRenderer itemRenderer = Minecraft.getInstance().getItemRenderer();

    public WorkbenchTESR(BlockEntityRendererProvider.Context context) {
    }

    public void render(WorkbenchTile workbenchTile, float partialTicks, PoseStack matrixStack, MultiBufferSource buffer, int combinedLight, int combinedOverlay) {
        ItemStack itemStack = workbenchTile.getTargetItemStack();
        if (itemStack != null && !itemStack.isEmpty()) {
            matrixStack.pushPose();
            int renderId = (int) workbenchTile.m_58899_().asLong();
            BakedModel model = this.itemRenderer.getModel(itemStack, workbenchTile.m_58904_(), null, renderId);
            if (itemStack.getItem() instanceof ModularShieldItem) {
                matrixStack.translate(0.375, 0.9125, 0.5);
                matrixStack.mulPose(Axis.XP.rotationDegrees(90.0F));
            } else if (model.isGui3d()) {
                matrixStack.translate(0.5, 1.125, 0.5);
                matrixStack.scale(0.5F, 0.5F, 0.5F);
            } else {
                matrixStack.translate(0.5, 1.0125, 0.5);
                matrixStack.mulPose(Axis.XP.rotationDegrees(90.0F));
                matrixStack.scale(0.5F, 0.5F, 0.5F);
            }
            Minecraft.getInstance().getItemRenderer().renderStatic(itemStack, ItemDisplayContext.FIXED, LevelRenderer.getLightColor(workbenchTile.m_58904_(), workbenchTile.m_58899_().above()), combinedOverlay, matrixStack, buffer, workbenchTile.m_58904_(), renderId);
            matrixStack.popPose();
        }
    }
}