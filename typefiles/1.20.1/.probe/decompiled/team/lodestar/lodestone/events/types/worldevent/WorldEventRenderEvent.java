package team.lodestar.lodestone.events.types.worldevent;

import com.mojang.blaze3d.vertex.PoseStack;
import net.minecraft.client.renderer.MultiBufferSource;
import team.lodestar.lodestone.systems.worldevent.WorldEventInstance;
import team.lodestar.lodestone.systems.worldevent.WorldEventRenderer;

public class WorldEventRenderEvent extends WorldEventInstanceEvent {

    private final WorldEventRenderer<WorldEventInstance> renderer;

    private final PoseStack poseStack;

    private final MultiBufferSource multiBufferSource;

    private final float partialTicks;

    public WorldEventRenderEvent(WorldEventInstance worldEvent, WorldEventRenderer<WorldEventInstance> renderer, PoseStack poseStack, MultiBufferSource multiBufferSource, float partialTicks) {
        super(worldEvent, null);
        this.renderer = renderer;
        this.poseStack = poseStack;
        this.multiBufferSource = multiBufferSource;
        this.partialTicks = partialTicks;
    }

    public WorldEventRenderer<WorldEventInstance> getRenderer() {
        return this.renderer;
    }

    public PoseStack getPoseStack() {
        return this.poseStack;
    }

    public MultiBufferSource getMultiBufferSource() {
        return this.multiBufferSource;
    }

    public float getPartialTicks() {
        return this.partialTicks;
    }

    public boolean isCancelable() {
        return false;
    }
}