package fr.lucreeper74.createmetallurgy.content.light_bulb.network.address;

import com.mojang.blaze3d.vertex.PoseStack;
import com.simibubi.create.CreateClient;
import com.simibubi.create.foundation.blockEntity.SmartBlockEntity;
import com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour;
import com.simibubi.create.foundation.blockEntity.behaviour.ValueBox;
import com.simibubi.create.foundation.blockEntity.behaviour.ValueBoxRenderer;
import com.simibubi.create.foundation.blockEntity.behaviour.ValueBoxTransform;
import com.simibubi.create.foundation.utility.Lang;
import com.simibubi.create.foundation.utility.VecHelper;
import com.simibubi.create.infrastructure.config.AllConfigs;
import fr.lucreeper74.createmetallurgy.utils.CMLang;
import it.unimi.dsi.fastutil.Pair;
import java.util.ArrayList;
import java.util.List;
import net.minecraft.client.Minecraft;
import net.minecraft.client.multiplayer.ClientLevel;
import net.minecraft.client.renderer.MultiBufferSource;
import net.minecraft.core.BlockPos;
import net.minecraft.network.chat.Component;
import net.minecraft.network.chat.MutableComponent;
import net.minecraft.world.entity.Entity;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.phys.AABB;
import net.minecraft.world.phys.BlockHitResult;
import net.minecraft.world.phys.HitResult;
import net.minecraft.world.phys.Vec3;

public class NetworkAddressRenderer {

    public static void tick() {
        Minecraft mc = Minecraft.getInstance();
        HitResult target = mc.hitResult;
        if (target instanceof BlockHitResult result) {
            ClientLevel world = mc.level;
            BlockPos pos = result.getBlockPos();
            NetworkAddressBehaviour behaviour = BlockEntityBehaviour.get(world, pos, NetworkAddressBehaviour.TYPE);
            if (behaviour != null) {
                Component label = CMLang.translateDirect("logistics.address");
                AABB bb = new AABB(Vec3.ZERO, Vec3.ZERO).inflate(0.25);
                boolean hit = behaviour.testHit(target.getLocation());
                ValueBox box = new ValueBox(label, bb, pos).passive(!hit);
                boolean empty = behaviour.getAddress().getStack().isEmpty();
                if (!empty) {
                    box.wideOutline();
                }
                CreateClient.OUTLINER.showValueBox(Pair.of("address", pos), box.transform(behaviour.slot)).highlightFace(result.getDirection());
                if (hit) {
                    List<MutableComponent> tip = new ArrayList();
                    tip.add(label.copy());
                    tip.add(Lang.translateDirect(empty ? "logistics.filter.click_to_set" : "logistics.filter.click_to_replace"));
                    CreateClient.VALUE_SETTINGS_HANDLER.showHoverTip(tip);
                }
            }
        }
    }

    public static void renderOnBlockEntity(SmartBlockEntity be, PoseStack ms, MultiBufferSource buffer, int light, int overlay) {
        if (be != null && !be.m_58901_()) {
            Minecraft mc = Minecraft.getInstance();
            Entity cameraEntity = mc.cameraEntity;
            float max = AllConfigs.client().filterItemRenderDistance.getF();
            if (be.isVirtual() || cameraEntity == null || !(cameraEntity.position().distanceToSqr(VecHelper.getCenterOf(be.m_58899_())) > (double) (max * max))) {
                NetworkAddressBehaviour behaviour = be.getBehaviour(NetworkAddressBehaviour.TYPE);
                if (behaviour != null) {
                    if (behaviour.testHit(mc.hitResult.getLocation())) {
                        ValueBoxTransform transform = behaviour.slot;
                        ItemStack stack = behaviour.address.getStack();
                        ms.pushPose();
                        transform.transform(be.m_58900_(), ms);
                        ValueBoxRenderer.renderItemIntoValueBox(stack, ms, buffer, light, overlay);
                        ms.popPose();
                    }
                }
            }
        }
    }
}