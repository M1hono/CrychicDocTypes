package de.keksuccino.fancymenu.customization.element.elements.playerentity.textures;

import com.mojang.authlib.minecraft.MinecraftProfileTexture;
import com.mojang.authlib.minecraft.MinecraftProfileTexture.Type;
import de.keksuccino.fancymenu.customization.placeholder.PlaceholderParser;
import de.keksuccino.fancymenu.util.file.type.FileMediaType;
import de.keksuccino.fancymenu.util.file.type.types.FileTypes;
import de.keksuccino.fancymenu.util.minecraftuser.v2.MinecraftUsers;
import de.keksuccino.fancymenu.util.resource.ResourceHandlers;
import de.keksuccino.fancymenu.util.resource.ResourceSource;
import de.keksuccino.fancymenu.util.resource.ResourceSourceType;
import de.keksuccino.fancymenu.util.resource.ResourceSupplier;
import de.keksuccino.fancymenu.util.resource.resources.texture.ITexture;
import de.keksuccino.fancymenu.util.resource.resources.texture.SimpleTexture;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import net.minecraft.resources.ResourceLocation;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

public class CapeResourceSupplier extends ResourceSupplier<ITexture> {

    private static final Logger LOGGER = LogManager.getLogger();

    public static final ResourceLocation DEFAULT_CAPE_LOCATION = new ResourceLocation("fancymenu", "textures/player_entity/default_cape_texture.png");

    public static final SimpleTexture DEFAULT_CAPE = SimpleTexture.location(DEFAULT_CAPE_LOCATION);

    protected static final Map<String, String> CACHED_PLAYER_NAME_CAPE_URLS = new HashMap();

    protected boolean sourceIsPlayerName;

    @Nullable
    protected volatile String playerNameCapeUrl;

    protected volatile boolean startedFindingPlayerNameCapeUrl = false;

    @Nullable
    protected String lastGetterPlayerName;

    protected volatile boolean hasNoCape = false;

    public CapeResourceSupplier(@NotNull String source, boolean sourceIsPlayerName) {
        super(ITexture.class, FileMediaType.IMAGE, source);
        this.sourceIsPlayerName = sourceIsPlayerName;
    }

    @NotNull
    public ITexture get() {
        String playerNameCapeUrlCached = this.playerNameCapeUrl;
        String getterPlayerName = PlaceholderParser.replacePlaceholders(this.source, false);
        if (this.sourceIsPlayerName) {
            if (!getterPlayerName.equals(this.lastGetterPlayerName)) {
                this.startedFindingPlayerNameCapeUrl = false;
                this.current = null;
                this.playerNameCapeUrl = null;
                playerNameCapeUrlCached = null;
            }
            this.lastGetterPlayerName = getterPlayerName;
            if (playerNameCapeUrlCached == null && !this.startedFindingPlayerNameCapeUrl) {
                if (CACHED_PLAYER_NAME_CAPE_URLS.containsKey(getterPlayerName)) {
                    this.startedFindingPlayerNameCapeUrl = true;
                    this.playerNameCapeUrl = (String) CACHED_PLAYER_NAME_CAPE_URLS.get(getterPlayerName);
                    playerNameCapeUrlCached = this.playerNameCapeUrl;
                } else {
                    this.findPlayerNameCapeUrl(getterPlayerName);
                }
            }
            if (playerNameCapeUrlCached == null) {
                return DEFAULT_CAPE;
            }
        }
        if (this.current != null && this.current.isClosed()) {
            this.current = null;
        }
        String getterSource = PlaceholderParser.replacePlaceholders(this.source, false);
        if (this.sourceIsPlayerName && playerNameCapeUrlCached == null) {
            return DEFAULT_CAPE;
        } else {
            if (this.sourceIsPlayerName) {
                getterSource = ResourceSourceType.WEB.getSourcePrefix() + playerNameCapeUrlCached;
            }
            if (!getterSource.equals(this.lastGetterSource)) {
                this.current = null;
            }
            this.lastGetterSource = getterSource;
            if (this.current == null) {
                ResourceSource resourceSource = ResourceSource.of(getterSource);
                if (this.sourceIsPlayerName && !CACHED_PLAYER_NAME_CAPE_URLS.containsKey(getterPlayerName)) {
                    CACHED_PLAYER_NAME_CAPE_URLS.put(getterPlayerName, playerNameCapeUrlCached);
                }
                try {
                    if (this.sourceIsPlayerName) {
                        this.current = ResourceHandlers.getImageHandler().hasResource(resourceSource.getSourceWithPrefix()) ? ResourceHandlers.getImageHandler().get(resourceSource) : FileTypes.PNG_IMAGE.getCodec().readWeb(resourceSource.getSourceWithoutPrefix());
                        if (this.current != null) {
                            ResourceHandlers.getImageHandler().registerIfKeyAbsent(resourceSource.getSourceWithPrefix(), this.current);
                        } else {
                            LOGGER.error("[FANCYMENU] CapeResourceSupplier failed to get cape by player name! PNG codec returned NULL: " + resourceSource);
                            this.current = DEFAULT_CAPE;
                        }
                    } else {
                        this.current = ResourceHandlers.getImageHandler().get(resourceSource);
                    }
                } catch (Exception var6) {
                    LOGGER.error("[FANCYMENU] CapeResourceSupplier failed to get cape: " + resourceSource + " (" + this.source + ")", var6);
                }
            }
            return (ITexture) (this.current != null ? this.current : DEFAULT_CAPE);
        }
    }

    @NotNull
    public ResourceLocation getCapeLocation() {
        ResourceLocation loc = this.get().getResourceLocation();
        return loc != null ? loc : DEFAULT_CAPE_LOCATION;
    }

    public boolean hasNoCape() {
        return this.hasNoCape;
    }

    protected void findPlayerNameCapeUrl(@NotNull String getterPlayerName) {
        Objects.requireNonNull(getterPlayerName);
        this.startedFindingPlayerNameCapeUrl = true;
        new Thread(() -> {
            String capeUrl = null;
            MinecraftProfileTexture texture = MinecraftUsers.getProfileTexture(getterPlayerName, Type.CAPE);
            if (texture != null && texture != MinecraftUsers.MISSING_CAPE_TEXTURE) {
                capeUrl = texture.getUrl();
                if (capeUrl == null) {
                    LOGGER.error("[FANCYMENU] CapeResourceSupplier failed to get URL of player cape: " + getterPlayerName, new IOException());
                }
            } else {
                this.hasNoCape = true;
            }
            if (this.startedFindingPlayerNameCapeUrl) {
                this.playerNameCapeUrl = capeUrl;
            }
        }).start();
    }

    @Override
    public void setSource(@NotNull String source) {
        throw new RuntimeException("You can't update the source of CapeResourceSuppliers.");
    }

    @NotNull
    @Override
    public ResourceSourceType getSourceType() {
        return this.sourceIsPlayerName ? ResourceSourceType.WEB : super.getSourceType();
    }

    @NotNull
    @Override
    public String getSourceWithoutPrefix() {
        return this.sourceIsPlayerName ? this.source : super.getSourceWithoutPrefix();
    }

    @NotNull
    @Override
    public String getSourceWithPrefix() {
        return this.sourceIsPlayerName ? this.source : super.getSourceWithPrefix();
    }
}