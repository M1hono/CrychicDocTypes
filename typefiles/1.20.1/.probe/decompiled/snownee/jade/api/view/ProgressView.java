package snownee.jade.api.view;

import java.util.Objects;
import net.minecraft.nbt.CompoundTag;
import net.minecraft.network.chat.Component;
import org.jetbrains.annotations.Nullable;
import snownee.jade.api.ui.IProgressStyle;
import snownee.jade.impl.ui.SlimProgressStyle;

public class ProgressView {

    public IProgressStyle style;

    public float progress;

    @Nullable
    public Component text;

    public ProgressView(IProgressStyle style) {
        this.style = style;
        Objects.requireNonNull(style);
    }

    public static ProgressView read(CompoundTag tag) {
        ProgressView progressView = new ProgressView(new SlimProgressStyle());
        progressView.progress = tag.getFloat("Progress");
        return progressView;
    }

    public static CompoundTag create(float progress) {
        CompoundTag tag = new CompoundTag();
        tag.putFloat("Progress", progress);
        return tag;
    }
}