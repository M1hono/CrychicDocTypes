package de.keksuccino.fancymenu.customization.deep.layers.titlescreen;

import de.keksuccino.fancymenu.customization.deep.DeepScreenCustomizationLayer;
import de.keksuccino.fancymenu.customization.deep.layers.titlescreen.branding.TitleScreenBrandingBuilder;
import de.keksuccino.fancymenu.customization.deep.layers.titlescreen.logo.TitleScreenLogoBuilder;
import de.keksuccino.fancymenu.customization.deep.layers.titlescreen.realmsnotification.TitleScreenRealmsNotificationBuilder;
import de.keksuccino.fancymenu.customization.deep.layers.titlescreen.splash.TitleScreenSplashBuilder;
import de.keksuccino.fancymenu.platform.Services;
import net.minecraft.client.gui.screens.TitleScreen;

public class TitleScreenLayer extends DeepScreenCustomizationLayer {

    public final TitleScreenLogoBuilder logo = new TitleScreenLogoBuilder(this);

    public final TitleScreenBrandingBuilder branding = new TitleScreenBrandingBuilder(this);

    public final TitleScreenRealmsNotificationBuilder realmsNotification = new TitleScreenRealmsNotificationBuilder(this);

    public final TitleScreenSplashBuilder splash = new TitleScreenSplashBuilder(this);

    public TitleScreenLayer() {
        super(TitleScreen.class.getName());
        this.registerBuilder(this.logo);
        this.registerBuilder(this.branding);
        this.registerBuilder(this.splash);
        this.registerBuilder(this.realmsNotification);
        Services.COMPAT.registerTitleScreenDeepCustomizationLayerElements(this);
    }
}