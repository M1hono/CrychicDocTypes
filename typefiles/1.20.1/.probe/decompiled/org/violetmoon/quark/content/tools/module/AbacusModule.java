package org.violetmoon.quark.content.tools.module;

import com.mojang.blaze3d.platform.Window;
import com.mojang.blaze3d.vertex.PoseStack;
import com.mojang.blaze3d.vertex.VertexConsumer;
import java.util.List;
import net.minecraft.client.Camera;
import net.minecraft.client.Minecraft;
import net.minecraft.client.gui.GuiGraphics;
import net.minecraft.client.renderer.RenderType;
import net.minecraft.client.renderer.item.ItemProperties;
import net.minecraft.core.BlockPos;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.util.Mth;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.phys.AABB;
import net.minecraft.world.phys.BlockHitResult;
import net.minecraft.world.phys.HitResult;
import net.minecraft.world.phys.Vec3;
import net.minecraft.world.phys.shapes.Shapes;
import net.minecraft.world.phys.shapes.VoxelShape;
import org.joml.Matrix4f;
import org.violetmoon.quark.base.config.type.RGBAColorConfig;
import org.violetmoon.quark.content.tools.item.AbacusItem;
import org.violetmoon.zeta.client.event.load.ZClientSetup;
import org.violetmoon.zeta.client.event.play.ZHighlightBlock;
import org.violetmoon.zeta.client.event.play.ZRenderGuiOverlay;
import org.violetmoon.zeta.config.Config;
import org.violetmoon.zeta.event.bus.LoadEvent;
import org.violetmoon.zeta.event.bus.PlayEvent;
import org.violetmoon.zeta.event.load.ZRegister;
import org.violetmoon.zeta.module.ZetaLoadModule;
import org.violetmoon.zeta.module.ZetaModule;
import org.violetmoon.zeta.util.Hint;

@ZetaLoadModule(category = "tools")
public class AbacusModule extends ZetaModule {

    @Hint
    public Item abacus;

    @Config
    RGBAColorConfig highlightColor = RGBAColorConfig.forColor(0.0, 0.0, 0.0, 0.4);

    @LoadEvent
    public void register(ZRegister event) {
        this.abacus = new AbacusItem(this);
    }

    @ZetaLoadModule(clientReplacement = true)
    public static class Client extends AbacusModule {

        @LoadEvent
        public void clientSetup(ZClientSetup e) {
            e.enqueueWork(() -> ItemProperties.register(this.abacus, new ResourceLocation("count"), AbacusItem.Client.ITEM_PROPERTY_FUNCTION));
        }

        @PlayEvent
        public void onHUDRender(ZRenderGuiOverlay.Crosshair event) {
            Minecraft mc = Minecraft.getInstance();
            Player player = mc.player;
            GuiGraphics guiGraphics = event.getGuiGraphics();
            if (player != null) {
                ItemStack stack = player.m_21205_();
                if (!(stack.getItem() instanceof AbacusItem)) {
                    stack = player.m_21206_();
                }
                if (stack.getItem() instanceof AbacusItem) {
                    int distance = AbacusItem.Client.getCount(stack, player);
                    if (distance > -1) {
                        Window window = event.getWindow();
                        int x = window.getGuiScaledWidth() / 2 + 10;
                        int y = window.getGuiScaledHeight() / 2 - 7;
                        guiGraphics.renderItem(stack, x, y);
                        String distStr = distance < AbacusItem.MAX_COUNT ? Integer.toString(distance + 1) : AbacusItem.MAX_COUNT + "+";
                        guiGraphics.drawString(mc.font, distStr, x + 17, y + 5, 16777215, true);
                    }
                }
            }
        }

        @PlayEvent
        public void onHighlightBlock(ZHighlightBlock event) {
            VertexConsumer bufferIn = event.getMultiBufferSource().getBuffer(RenderType.lines());
            Minecraft mc = Minecraft.getInstance();
            Player player = mc.player;
            if (player != null) {
                ItemStack stack = player.m_21205_();
                if (!(stack.getItem() instanceof AbacusItem)) {
                    stack = player.m_21206_();
                }
                if (stack.getItem() instanceof AbacusItem) {
                    int distance = AbacusItem.Client.getCount(stack, player);
                    if (distance > -1 && distance <= AbacusItem.MAX_COUNT) {
                        BlockPos target = AbacusItem.getBlockPos(stack);
                        if (target != null) {
                            Camera info = event.getCamera();
                            Vec3 view = info.getPosition();
                            VoxelShape shape = Shapes.create(new AABB(target));
                            HitResult result = mc.hitResult;
                            if (result != null && result.getType() == HitResult.Type.BLOCK) {
                                BlockPos source = ((BlockHitResult) result).getBlockPos();
                                int diffX = source.m_123341_() - target.m_123341_();
                                int diffY = source.m_123342_() - target.m_123342_();
                                int diffZ = source.m_123343_() - target.m_123343_();
                                if (diffX != 0) {
                                    shape = Shapes.or(shape, Shapes.create(new AABB(target).expandTowards((double) diffX, 0.0, 0.0)));
                                }
                                if (diffY != 0) {
                                    shape = Shapes.or(shape, Shapes.create(new AABB(target.offset(diffX, 0, 0)).expandTowards(0.0, (double) diffY, 0.0)));
                                }
                                if (diffZ != 0) {
                                    shape = Shapes.or(shape, Shapes.create(new AABB(target.offset(diffX, diffY, 0)).expandTowards(0.0, 0.0, (double) diffZ)));
                                }
                            }
                            if (shape != null) {
                                List<AABB> list = shape.toAabbs();
                                PoseStack poseStack = event.getPoseStack();
                                double xIn = -view.x;
                                double yIn = -view.y;
                                double zIn = -view.z;
                                for (AABB aabb : list) {
                                    float r = (float) this.highlightColor.getElement(0);
                                    float g = (float) this.highlightColor.getElement(1);
                                    float b = (float) this.highlightColor.getElement(2);
                                    float a = (float) this.highlightColor.getElement(3);
                                    VoxelShape individual = Shapes.create(aabb.move(0.0, 0.0, 0.0));
                                    PoseStack.Pose pose = poseStack.last();
                                    Matrix4f matrix4f = pose.pose();
                                    individual.forAllEdges((minX, minY, minZ, maxX, maxY, maxZ) -> {
                                        float f = (float) (maxX - minX);
                                        float f1 = (float) (maxY - minY);
                                        float f2 = (float) (maxZ - minZ);
                                        float f3 = Mth.sqrt(f * f + f1 * f1 + f2 * f2);
                                        f /= f3;
                                        f1 /= f3;
                                        f2 /= f3;
                                        bufferIn.vertex(matrix4f, (float) (minX + xIn), (float) (minY + yIn), (float) (minZ + zIn)).color(r, g, b, a).normal(pose.normal(), f, f1, f2).endVertex();
                                        bufferIn.vertex(matrix4f, (float) (maxX + xIn), (float) (maxY + yIn), (float) (maxZ + zIn)).color(r, g, b, a).normal(pose.normal(), f, f1, f2).endVertex();
                                    });
                                }
                                event.setCanceled(true);
                            }
                        }
                    }
                }
            }
        }
    }
}