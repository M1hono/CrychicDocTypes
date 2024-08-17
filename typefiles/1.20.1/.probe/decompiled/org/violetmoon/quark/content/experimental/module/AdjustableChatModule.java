package org.violetmoon.quark.content.experimental.module;

import org.violetmoon.zeta.client.event.play.ZRenderGuiOverlay;
import org.violetmoon.zeta.config.Config;
import org.violetmoon.zeta.event.bus.PlayEvent;
import org.violetmoon.zeta.module.ZetaLoadModule;
import org.violetmoon.zeta.module.ZetaModule;

@ZetaLoadModule(category = "experimental", enabledByDefault = false)
public class AdjustableChatModule extends ZetaModule {

    @Config
    public static int horizontalShift = 0;

    @Config
    public static int verticalShift = 0;

    @ZetaLoadModule(clientReplacement = true)
    public static class Client extends AdjustableChatModule {

        @PlayEvent
        public void pre(ZRenderGuiOverlay.ChatPanel.Pre event) {
            event.getGuiGraphics().pose().translate((float) horizontalShift, (float) verticalShift, 0.0F);
        }

        @PlayEvent
        public void post(ZRenderGuiOverlay.ChatPanel.Post event) {
            event.getGuiGraphics().pose().translate((float) (-horizontalShift), (float) (-verticalShift), 0.0F);
        }
    }
}