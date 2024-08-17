package vazkii.patchouli.client.book.page;

import com.google.gson.annotations.SerializedName;
import com.mojang.blaze3d.systems.RenderSystem;
import com.mojang.blaze3d.vertex.VertexConsumer;
import com.mojang.math.Axis;
import java.util.Collections;
import java.util.Set;
import java.util.WeakHashMap;
import net.minecraft.client.Minecraft;
import net.minecraft.client.gui.GuiGraphics;
import net.minecraft.client.gui.components.Button;
import net.minecraft.client.gui.screens.Screen;
import net.minecraft.client.renderer.ItemBlockRenderTypes;
import net.minecraft.client.renderer.MultiBufferSource;
import net.minecraft.client.renderer.RenderType;
import net.minecraft.client.renderer.block.BlockRenderDispatcher;
import net.minecraft.client.renderer.blockentity.BlockEntityRenderer;
import net.minecraft.client.renderer.texture.OverlayTexture;
import net.minecraft.core.BlockPos;
import net.minecraft.core.Vec3i;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.util.RandomSource;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.block.entity.BlockEntity;
import net.minecraft.world.level.block.state.BlockState;
import net.minecraft.world.level.material.FluidState;
import org.jetbrains.annotations.NotNull;
import org.joml.Matrix4f;
import org.joml.Vector4f;
import vazkii.patchouli.api.IMultiblock;
import vazkii.patchouli.api.PatchouliAPI;
import vazkii.patchouli.client.base.ClientTicker;
import vazkii.patchouli.client.base.PersistentData;
import vazkii.patchouli.client.book.BookContentsBuilder;
import vazkii.patchouli.client.book.BookEntry;
import vazkii.patchouli.client.book.LiquidBlockVertexConsumer;
import vazkii.patchouli.client.book.gui.GuiBook;
import vazkii.patchouli.client.book.gui.GuiBookEntry;
import vazkii.patchouli.client.book.gui.button.GuiButtonBookEye;
import vazkii.patchouli.client.book.page.abstr.PageWithText;
import vazkii.patchouli.client.handler.MultiblockVisualizationHandler;
import vazkii.patchouli.common.multiblock.AbstractMultiblock;
import vazkii.patchouli.common.multiblock.MultiblockRegistry;
import vazkii.patchouli.common.multiblock.SerializedMultiblock;
import vazkii.patchouli.xplat.IClientXplatAbstractions;

public class PageMultiblock extends PageWithText {

    private static final RandomSource RAND = RandomSource.createNewThreadLocalInstance();

    String name = "";

    @SerializedName("multiblock_id")
    ResourceLocation multiblockId;

    @SerializedName("multiblock")
    SerializedMultiblock serializedMultiblock;

    @SerializedName("enable_visualize")
    boolean showVisualizeButton = true;

    private transient AbstractMultiblock multiblockObj;

    private transient Button visualizeButton;

    private final transient Set<BlockEntity> erroredTiles = Collections.newSetFromMap(new WeakHashMap());

    @Override
    public void build(Level level, BookEntry entry, BookContentsBuilder builder, int pageNum) {
        super.build(level, entry, builder, pageNum);
        if (this.multiblockId != null) {
            IMultiblock mb = (IMultiblock) MultiblockRegistry.MULTIBLOCKS.get(this.multiblockId);
            if (mb instanceof AbstractMultiblock) {
                this.multiblockObj = (AbstractMultiblock) mb;
            }
        }
        if (this.multiblockObj == null && this.serializedMultiblock != null) {
            this.multiblockObj = this.serializedMultiblock.toMultiblock();
        }
        if (this.multiblockObj == null) {
            throw new IllegalArgumentException("No multiblock located for " + this.multiblockId);
        }
    }

    @Override
    public void onDisplayed(GuiBookEntry parent, int left, int top) {
        super.onDisplayed(parent, left, top);
        if (this.showVisualizeButton) {
            this.addButton(this.visualizeButton = new GuiButtonBookEye(parent, 12, 97, this::handleButtonVisualize));
        }
    }

    @Override
    public int getTextHeight() {
        return 115;
    }

    @Override
    public void render(GuiGraphics graphics, int mouseX, int mouseY, float pticks) {
        int x = 5;
        int y = 7;
        RenderSystem.enableBlend();
        graphics.setColor(1.0F, 1.0F, 1.0F, 1.0F);
        GuiBook.drawFromTexture(graphics, this.book, x, y, 405, 149, 106, 106);
        this.parent.drawCenteredStringNoShadow(graphics, this.i18n(this.name), 58, 0, this.book.headerColor);
        if (this.multiblockObj != null) {
            this.renderMultiblock(graphics);
        }
        super.render(graphics, mouseX, mouseY, pticks);
    }

    public void handleButtonVisualize(Button button) {
        ResourceLocation entryKey = this.parent.getEntry().getId();
        PersistentData.Bookmark bookmark = new PersistentData.Bookmark(entryKey, this.pageNum / 2);
        MultiblockVisualizationHandler.setMultiblock(this.multiblockObj, this.i18nText(this.name), bookmark, true);
        this.parent.addBookmarkButtons();
        if (!PersistentData.data.clickedVisualize) {
            PersistentData.data.clickedVisualize = true;
            PersistentData.save();
        }
    }

    private void renderMultiblock(GuiGraphics graphics) {
        this.multiblockObj.setWorld(this.mc.level);
        Vec3i size = this.multiblockObj.getSize();
        int sizeX = size.getX();
        int sizeY = size.getY();
        int sizeZ = size.getZ();
        float maxX = 90.0F;
        float maxY = 90.0F;
        float diag = (float) Math.sqrt((double) (sizeX * sizeX + sizeZ * sizeZ));
        float scaleX = maxX / diag;
        float scaleY = maxY / (float) sizeY;
        float scale = -Math.min(scaleX, scaleY);
        int xPos = 58;
        int yPos = 60;
        graphics.pose().pushPose();
        graphics.pose().translate((float) xPos, (float) yPos, 100.0F);
        graphics.pose().scale(scale, scale, scale);
        graphics.pose().translate(-((float) sizeX) / 2.0F, -((float) sizeY) / 2.0F, 0.0F);
        Vector4f eye = new Vector4f(0.0F, 0.0F, -100.0F, 1.0F);
        Matrix4f rotMat = new Matrix4f();
        rotMat.identity();
        graphics.pose().mulPose(Axis.XP.rotationDegrees(-30.0F));
        rotMat.rotation(Axis.XP.rotationDegrees(30.0F));
        float offX = (float) (-sizeX) / 2.0F;
        float offZ = (float) (-sizeZ) / 2.0F + 1.0F;
        float time = (float) this.parent.ticksInBook * 0.5F;
        if (!Screen.hasShiftDown()) {
            time += ClientTicker.partialTicks;
        }
        graphics.pose().translate(-offX, 0.0F, -offZ);
        graphics.pose().mulPose(Axis.YP.rotationDegrees(time));
        rotMat.rotation(Axis.YP.rotationDegrees(-time));
        graphics.pose().mulPose(Axis.YP.rotationDegrees(45.0F));
        rotMat.rotation(Axis.YP.rotationDegrees(-45.0F));
        graphics.pose().translate(offX, 0.0F, offZ);
        eye.mul(rotMat);
        this.renderElements(graphics, this.multiblockObj, BlockPos.betweenClosed(BlockPos.ZERO, new BlockPos(sizeX - 1, sizeY - 1, sizeZ - 1)), eye);
        graphics.pose().popPose();
    }

    private void renderElements(GuiGraphics graphics, AbstractMultiblock mb, Iterable<? extends BlockPos> blocks, Vector4f eye) {
        graphics.pose().pushPose();
        graphics.setColor(1.0F, 1.0F, 1.0F, 1.0F);
        graphics.pose().translate(0.0F, 0.0F, -1.0F);
        MultiBufferSource.BufferSource buffers = Minecraft.getInstance().renderBuffers().bufferSource();
        this.doWorldRenderPass(graphics, mb, blocks, buffers, eye);
        this.doTileEntityRenderPass(graphics, mb, blocks, buffers, eye);
        buffers.endBatch();
        graphics.pose().popPose();
    }

    private void doWorldRenderPass(GuiGraphics graphics, AbstractMultiblock mb, Iterable<? extends BlockPos> blocks, @NotNull MultiBufferSource.BufferSource buffers, Vector4f eye) {
        for (BlockPos pos : blocks) {
            BlockState bs = mb.m_8055_(pos);
            graphics.pose().pushPose();
            graphics.pose().translate((float) pos.m_123341_(), (float) pos.m_123342_(), (float) pos.m_123343_());
            FluidState fluidState = bs.m_60819_();
            BlockRenderDispatcher blockRenderer = Minecraft.getInstance().getBlockRenderer();
            if (!fluidState.isEmpty()) {
                RenderType layer = ItemBlockRenderTypes.getRenderLayer(fluidState);
                VertexConsumer buffer = buffers.getBuffer(layer);
                blockRenderer.renderLiquid(pos, mb, new LiquidBlockVertexConsumer(buffer, graphics.pose(), pos), bs, fluidState);
            }
            IClientXplatAbstractions.INSTANCE.renderForMultiblock(bs, pos, mb, graphics.pose(), buffers, RAND);
            graphics.pose().popPose();
        }
    }

    private void doTileEntityRenderPass(GuiGraphics graphics, AbstractMultiblock mb, Iterable<? extends BlockPos> blocks, MultiBufferSource buffers, Vector4f eye) {
        for (BlockPos pos : blocks) {
            BlockEntity te = mb.getBlockEntity(pos);
            if (te != null && !this.erroredTiles.contains(te)) {
                te.setLevel(this.mc.level);
                te.setBlockState(mb.m_8055_(pos));
                graphics.pose().pushPose();
                graphics.pose().translate((float) pos.m_123341_(), (float) pos.m_123342_(), (float) pos.m_123343_());
                try {
                    BlockEntityRenderer<BlockEntity> renderer = Minecraft.getInstance().getBlockEntityRenderDispatcher().getRenderer(te);
                    if (renderer != null) {
                        renderer.render(te, ClientTicker.partialTicks, graphics.pose(), buffers, 15728880, OverlayTexture.NO_OVERLAY);
                    }
                } catch (Exception var13) {
                    this.erroredTiles.add(te);
                    PatchouliAPI.LOGGER.error("An exception occured rendering tile entity", var13);
                } finally {
                    graphics.pose().popPose();
                }
            }
        }
    }
}