package org.violetmoon.quark.content.building.client.render.entity;

import com.mojang.blaze3d.vertex.PoseStack;
import com.mojang.datafixers.util.Pair;
import com.mojang.math.Axis;
import java.util.List;
import net.minecraft.client.Minecraft;
import net.minecraft.client.model.geom.ModelLayers;
import net.minecraft.client.model.geom.ModelPart;
import net.minecraft.client.renderer.MultiBufferSource;
import net.minecraft.client.renderer.Sheets;
import net.minecraft.client.renderer.block.BlockRenderDispatcher;
import net.minecraft.client.renderer.blockentity.BannerRenderer;
import net.minecraft.client.renderer.entity.EntityRenderer;
import net.minecraft.client.renderer.entity.EntityRendererProvider;
import net.minecraft.client.renderer.entity.ItemFrameRenderer;
import net.minecraft.client.renderer.entity.ItemRenderer;
import net.minecraft.client.renderer.texture.OverlayTexture;
import net.minecraft.client.resources.model.ModelBakery;
import net.minecraft.client.resources.model.ModelManager;
import net.minecraft.client.resources.model.ModelResourceLocation;
import net.minecraft.core.BlockPos;
import net.minecraft.core.Direction;
import net.minecraft.core.Holder;
import net.minecraft.network.chat.Component;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.entity.EntityType;
import net.minecraft.world.inventory.InventoryMenu;
import net.minecraft.world.item.BannerItem;
import net.minecraft.world.item.DyeColor;
import net.minecraft.world.item.ItemDisplayContext;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.MapItem;
import net.minecraft.world.item.ShieldItem;
import net.minecraft.world.level.block.Blocks;
import net.minecraft.world.level.block.entity.BannerBlockEntity;
import net.minecraft.world.level.block.entity.BannerPattern;
import net.minecraft.world.level.saveddata.maps.MapItemSavedData;
import net.minecraft.world.phys.Vec3;
import net.minecraftforge.client.event.RenderItemInFrameEvent;
import net.minecraftforge.common.MinecraftForge;
import org.jetbrains.annotations.NotNull;
import org.violetmoon.quark.content.building.entity.GlassItemFrame;
import org.violetmoon.quark.content.building.module.GlassItemFrameModule;

public class GlassItemFrameRenderer extends EntityRenderer<GlassItemFrame> {

    private static final ModelResourceLocation LOCATION_MODEL = new ModelResourceLocation(new ResourceLocation("quark", "extra/glass_item_frame"), "inventory");

    private static final List<Direction> SIGN_DIRECTIONS = List.of(Direction.NORTH, Direction.EAST, Direction.SOUTH, Direction.WEST);

    private static final BannerBlockEntity banner = new BannerBlockEntity(BlockPos.ZERO, Blocks.WHITE_BANNER.defaultBlockState());

    private final ModelPart bannerModel;

    private final Minecraft mc = Minecraft.getInstance();

    private final ItemRenderer itemRenderer;

    private final ItemFrameRenderer<?> defaultRenderer;

    public GlassItemFrameRenderer(EntityRendererProvider.Context context) {
        super(context);
        ModelPart part = context.bakeLayer(ModelLayers.BANNER);
        this.bannerModel = part.getChild("flag");
        Minecraft mc = Minecraft.getInstance();
        this.itemRenderer = mc.getItemRenderer();
        this.defaultRenderer = (ItemFrameRenderer<?>) mc.getEntityRenderDispatcher().renderers.get(EntityType.ITEM_FRAME);
    }

    public void render(@NotNull GlassItemFrame frame, float yaw, float partialTicks, @NotNull PoseStack matrix, @NotNull MultiBufferSource buffer, int light) {
        super.render(frame, yaw, partialTicks, matrix, buffer, light);
        matrix.pushPose();
        Direction direction = frame.m_6350_();
        Vec3 Vector3d = this.getRenderOffset(frame, partialTicks);
        matrix.translate(-Vector3d.x(), -Vector3d.y(), -Vector3d.z());
        matrix.translate((double) direction.getStepX() * 0.46875, (double) direction.getStepY() * 0.46875, (double) direction.getStepZ() * 0.46875);
        matrix.mulPose(Axis.XP.rotationDegrees(frame.m_146909_()));
        matrix.mulPose(Axis.YP.rotationDegrees(180.0F - frame.m_146908_()));
        BlockRenderDispatcher blockrendererdispatcher = this.mc.getBlockRenderer();
        ModelManager modelmanager = blockrendererdispatcher.getBlockModelShaper().getModelManager();
        ItemStack itemstack = frame.m_31822_();
        if (frame.m_20088_().get(GlassItemFrame.IS_SHINY)) {
            light = 15728880;
        }
        if (itemstack.isEmpty()) {
            matrix.pushPose();
            matrix.translate(-0.5, -0.5, -0.5);
            blockrendererdispatcher.getModelRenderer().renderModel(matrix.last(), buffer.getBuffer(Sheets.cutoutBlockSheet()), null, modelmanager.getModel(LOCATION_MODEL), 1.0F, 1.0F, 1.0F, light, OverlayTexture.NO_OVERLAY);
            matrix.popPose();
        } else {
            this.renderItemStack(frame, matrix, buffer, light, itemstack);
        }
        matrix.popPose();
    }

    @NotNull
    public Vec3 getRenderOffset(GlassItemFrame frame, float partialTicks) {
        return new Vec3((double) ((float) frame.m_6350_().getStepX() * 0.3F), -0.25, (double) ((float) frame.m_6350_().getStepZ() * 0.3F));
    }

    @NotNull
    public ResourceLocation getTextureLocation(@NotNull GlassItemFrame frame) {
        return InventoryMenu.BLOCK_ATLAS;
    }

    protected boolean shouldShowName(@NotNull GlassItemFrame frame) {
        if (Minecraft.renderNames() && !frame.m_31822_().isEmpty() && frame.m_31822_().hasCustomHoverName() && this.f_114476_.crosshairPickEntity == frame) {
            double d0 = this.f_114476_.distanceToSqr(frame);
            float f = frame.m_20163_() ? 32.0F : 64.0F;
            return d0 < (double) (f * f);
        } else {
            return false;
        }
    }

    protected void renderNameTag(@NotNull GlassItemFrame frame, @NotNull Component text, @NotNull PoseStack matrix, @NotNull MultiBufferSource buffer, int light) {
        super.renderNameTag(frame, frame.m_31822_().getHoverName(), matrix, buffer, light);
    }

    protected void renderItemStack(GlassItemFrame itemFrame, PoseStack matrix, MultiBufferSource buff, int light, ItemStack stack) {
        if (!stack.isEmpty()) {
            matrix.pushPose();
            MapItemSavedData mapdata = MapItem.getSavedData(stack, itemFrame.m_9236_());
            if (itemFrame.isOnSign()) {
                GlassItemFrame.SignAttachment attach = itemFrame.getSignAttachment();
                Direction ourDirection = itemFrame.m_6350_().getOpposite();
                int signRotation = itemFrame.getOnSignRotation();
                int ourRotation = SIGN_DIRECTIONS.indexOf(ourDirection) * 4;
                int rotation = signRotation - ourRotation;
                float angle = (float) (-rotation) * 22.5F;
                float scale = 0.32F;
                switch(attach) {
                    case STANDING_BEHIND:
                        angle += 180.0F;
                        break;
                    case WALL_SIGN:
                        angle = 0.0F;
                        matrix.translate(0.0, -0.3, 0.45);
                        break;
                    case HANGING_FROM_WALL:
                        angle = 0.0F;
                        matrix.translate(0.0, -0.52, -0.01);
                }
                matrix.translate(0.0, 0.35, 0.98);
                matrix.scale(scale, scale, scale);
                matrix.mulPose(Axis.YP.rotationDegrees(angle));
                switch(attach) {
                    case HANGING_IN_FRONT:
                        matrix.translate(0.0, -0.52 / (double) scale, -0.075);
                        break;
                    case HANGING_BEHIND:
                        matrix.translate(0.0, -0.52 / (double) scale, 0.3);
                }
                matrix.translate(0.0, 0.0, -0.5);
                matrix.translate(0.0, 0.0, -0.085);
            }
            int rotation = mapdata != null ? itemFrame.m_31823_() % 4 * 2 : itemFrame.m_31823_();
            matrix.mulPose(Axis.ZP.rotationDegrees((float) rotation * 360.0F / 8.0F));
            if (!MinecraftForge.EVENT_BUS.post(new RenderItemInFrameEvent(itemFrame, this.defaultRenderer, matrix, buff, light))) {
                if (mapdata != null) {
                    matrix.mulPose(Axis.ZP.rotationDegrees(180.0F));
                    matrix.scale(0.0078125F, 0.0078125F, 0.0078125F);
                    matrix.translate(-64.0F, -64.0F, 62.5F);
                    Integer mapID = MapItem.getMapId(stack);
                    this.mc.gameRenderer.getMapRenderer().render(matrix, buff, mapID, mapdata, true, light);
                } else {
                    float s = (float) GlassItemFrameModule.itemRenderScale;
                    if (stack.getItem() instanceof BannerItem bannerItem) {
                        banner.fromItem(stack, bannerItem.getColor());
                        List<Pair<Holder<BannerPattern>, DyeColor>> patterns = banner.getPatterns();
                        matrix.pushPose();
                        matrix.translate(1.0E-4F, -0.5001F, 0.55F);
                        matrix.scale(0.799999F, 0.399999F, 0.5F);
                        BannerRenderer.renderPatterns(matrix, buff, light, OverlayTexture.NO_OVERLAY, this.bannerModel, ModelBakery.BANNER_BASE, true, patterns);
                        matrix.popPose();
                    } else {
                        if (stack.getItem() instanceof ShieldItem) {
                            s *= 2.6666667F;
                            matrix.translate(-0.25F, 0.0F, 0.5F);
                            matrix.scale(s, s, s);
                        } else {
                            matrix.translate(0.0F, 0.0F, 0.475F);
                            matrix.scale(s, s, s);
                        }
                        matrix.scale(0.5F, 0.5F, 0.5F);
                        this.itemRenderer.renderStatic(stack, ItemDisplayContext.FIXED, light, OverlayTexture.NO_OVERLAY, matrix, buff, this.mc.level, 0);
                    }
                }
            }
            matrix.popPose();
        }
    }
}