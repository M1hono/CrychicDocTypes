package mezz.jei.forge.input;

import com.mojang.blaze3d.platform.InputConstants;
import java.util.function.Consumer;
import mezz.jei.common.input.keys.IJeiKeyMappingInternal;
import net.minecraft.client.KeyMapping;
import net.minecraft.network.chat.Component;

public class ForgeJeiKeyMapping implements IJeiKeyMappingInternal {

    private final KeyMapping keyMapping;

    public ForgeJeiKeyMapping(KeyMapping keyMapping) {
        this.keyMapping = keyMapping;
    }

    @Override
    public boolean isActiveAndMatches(InputConstants.Key key) {
        return this.keyMapping.isActiveAndMatches(key);
    }

    @Override
    public boolean isUnbound() {
        return this.keyMapping.isUnbound();
    }

    @Override
    public Component getTranslatedKeyMessage() {
        return this.keyMapping.getTranslatedKeyMessage();
    }

    public IJeiKeyMappingInternal register(Consumer<KeyMapping> registerMethod) {
        registerMethod.accept(this.keyMapping);
        return this;
    }
}