package net.mehvahdjukaar.supplementaries.client.renderers.entities.models;

import java.util.List;
import java.util.Optional;
import java.util.Map.Entry;
import net.minecraft.client.animation.AnimationChannel;
import net.minecraft.client.animation.AnimationDefinition;
import net.minecraft.client.animation.Keyframe;
import net.minecraft.client.model.EntityModel;
import net.minecraft.client.model.geom.ModelPart;
import net.minecraft.util.Mth;
import net.minecraft.world.entity.AnimationState;
import org.joml.Vector3f;

public class GenericAnimationStuff {

    private static final Vector3f ANIMATION_VECTOR_CACHE = new Vector3f();

    public static <M extends EntityModel<?> & IRootModel> void animate(M model, AnimationState pAnimationState, AnimationDefinition pAnimationDefinition, float pAgeInTicks) {
        animate(model, pAnimationState, pAnimationDefinition, pAgeInTicks, 1.0F);
    }

    public static <M extends EntityModel<?> & IRootModel> void animate(M model, AnimationState pAnimationState, AnimationDefinition pAnimationDefinition, float pAgeInTicks, float pSpeed) {
        pAnimationState.updateTime(pAgeInTicks, pSpeed);
        pAnimationState.ifStarted(a -> animate(model, pAnimationDefinition, a.getAccumulatedTime(), 1.0F));
    }

    public static <M extends EntityModel<?> & IRootModel> void animate(M model, AnimationDefinition animationDefinition, long accumulatedTime, float scale) {
        float time = getElapsedSeconds(animationDefinition, accumulatedTime);
        for (Entry<String, List<AnimationChannel>> stringListEntry : animationDefinition.boneAnimations().entrySet()) {
            Optional<ModelPart> optional = getAnyDescendantWithName(model, (String) stringListEntry.getKey());
            List<AnimationChannel> list = (List<AnimationChannel>) stringListEntry.getValue();
            optional.ifPresent(modelPart -> list.forEach(animationChannel -> {
                Keyframe[] keyframes = animationChannel.keyframes();
                int frameInd = Math.max(0, Mth.binarySearch(0, keyframes.length, ix -> time <= keyframes[ix].timestamp()) - 1);
                int nextFrameInd = Math.min(keyframes.length - 1, frameInd + 1);
                Keyframe frame = keyframes[frameInd];
                Keyframe nextFrame = keyframes[nextFrameInd];
                float timeDelta = time - frame.timestamp();
                float delta;
                if (nextFrameInd != frameInd) {
                    delta = Mth.clamp(timeDelta / (nextFrame.timestamp() - frame.timestamp()), 0.0F, 1.0F);
                } else {
                    delta = 0.0F;
                }
                nextFrame.interpolation().apply(ANIMATION_VECTOR_CACHE, delta, keyframes, frameInd, nextFrameInd, scale);
                animationChannel.target().apply(modelPart, ANIMATION_VECTOR_CACHE);
            }));
        }
    }

    private static float getElapsedSeconds(AnimationDefinition animationDefinition, long accumulatedTime) {
        float f = (float) accumulatedTime / 1000.0F;
        return animationDefinition.looping() ? f % animationDefinition.lengthInSeconds() : f;
    }

    private static <M extends EntityModel<?> & IRootModel> Optional<ModelPart> getAnyDescendantWithName(M model, String string) {
        return string.equals("root") ? Optional.of(model.getRoot()) : model.getRoot().getAllParts().filter(arg -> arg.hasChild(string)).findFirst().map(arg -> arg.getChild(string));
    }
}