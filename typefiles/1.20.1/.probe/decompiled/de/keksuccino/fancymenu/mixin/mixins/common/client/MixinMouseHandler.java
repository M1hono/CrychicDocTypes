package de.keksuccino.fancymenu.mixin.mixins.common.client;

import de.keksuccino.fancymenu.customization.gameintro.GameIntroOverlay;
import de.keksuccino.fancymenu.events.screen.ScreenMouseScrollEvent;
import de.keksuccino.fancymenu.util.event.acara.EventHandler;
import net.minecraft.client.Minecraft;
import net.minecraft.client.MouseHandler;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.Shadow;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.At.Shift;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfo;

@Mixin({ MouseHandler.class })
public class MixinMouseHandler {

    @Shadow
    private double xpos;

    @Shadow
    private double ypos;

    private final Minecraft mc = Minecraft.getInstance();

    @Inject(method = { "onScroll" }, at = { @At(value = "INVOKE", target = "Lnet/minecraft/client/gui/screens/Screen;mouseScrolled(DDD)Z") }, cancellable = true)
    private void beforeMouseScrollScreenFancyMenu(long $$0, double $$1, double $$2, CallbackInfo info) {
        double offset = $$2;
        if (Minecraft.ON_OSX && $$2 == 0.0) {
            offset = $$1;
        }
        double scrollDelta = (this.mc.options.discreteMouseScroll().get() ? Math.signum(offset) : offset) * this.mc.options.mouseWheelSensitivity().get();
        double mX = this.xpos * (double) this.mc.getWindow().getGuiScaledWidth() / (double) this.mc.getWindow().getScreenWidth();
        double mY = this.ypos * (double) this.mc.getWindow().getGuiScaledHeight() / (double) this.mc.getWindow().getScreenHeight();
        ScreenMouseScrollEvent.Pre e = new ScreenMouseScrollEvent.Pre(this.mc.screen, mX, mY, scrollDelta);
        EventHandler.INSTANCE.postEvent(e);
        if (e.isCanceled()) {
            info.cancel();
        }
    }

    @Inject(method = { "onScroll" }, at = { @At(value = "INVOKE", target = "Lnet/minecraft/client/gui/screens/Screen;mouseScrolled(DDD)Z", shift = Shift.AFTER) })
    private void afterMouseScrollScreenFancyMenu(long $$0, double $$1, double $$2, CallbackInfo info) {
        double offset = $$2;
        if (Minecraft.ON_OSX && $$2 == 0.0) {
            offset = $$1;
        }
        double scrollDelta = (this.mc.options.discreteMouseScroll().get() ? Math.signum(offset) : offset) * this.mc.options.mouseWheelSensitivity().get();
        double mX = this.xpos * (double) this.mc.getWindow().getGuiScaledWidth() / (double) this.mc.getWindow().getScreenWidth();
        double mY = this.ypos * (double) this.mc.getWindow().getGuiScaledHeight() / (double) this.mc.getWindow().getScreenHeight();
        ScreenMouseScrollEvent.Post e = new ScreenMouseScrollEvent.Post(this.mc.screen, mX, mY, scrollDelta);
        EventHandler.INSTANCE.postEvent(e);
    }

    @Inject(method = { "onPress" }, at = { @At("HEAD") })
    private void headOnPressFancyMenu(long window, int button, int $$2, int $$3, CallbackInfo info) {
        if (window == Minecraft.getInstance().getWindow().getWindow()) {
            boolean clicked = $$2 == 1;
            if (clicked && Minecraft.getInstance().getOverlay() instanceof GameIntroOverlay o) {
                o.mouseClicked(button);
            }
        }
    }
}