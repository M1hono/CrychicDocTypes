package snownee.jade.addon.vanilla;

import com.mojang.authlib.GameProfile;
import net.minecraft.client.resources.language.I18n;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.item.Items;
import net.minecraft.world.level.block.entity.SkullBlockEntity;
import org.apache.commons.lang3.StringUtils;
import snownee.jade.api.BlockAccessor;
import snownee.jade.api.IBlockComponentProvider;
import snownee.jade.api.ITooltip;
import snownee.jade.api.Identifiers;
import snownee.jade.api.config.IPluginConfig;
import snownee.jade.api.theme.IThemeHelper;
import snownee.jade.util.CommonProxy;

public enum PlayerHeadProvider implements IBlockComponentProvider {

    INSTANCE;

    @Override
    public void appendTooltip(ITooltip tooltip, BlockAccessor accessor, IPluginConfig config) {
        if (accessor.getBlockEntity() instanceof SkullBlockEntity tile) {
            GameProfile profile = tile.getOwnerProfile();
            if (profile == null) {
                return;
            }
            String name = profile.getName();
            if (name == null) {
                name = CommonProxy.getLastKnownUsername(profile.getId());
            }
            if (name == null || StringUtils.isBlank(name)) {
                return;
            }
            if (!name.contains(" ") && !name.contains("§")) {
                name = I18n.get(Items.PLAYER_HEAD.getDescriptionId() + ".named", name);
            }
            tooltip.remove(Identifiers.CORE_OBJECT_NAME);
            tooltip.add(0, IThemeHelper.get().title(name), Identifiers.CORE_OBJECT_NAME);
        }
    }

    @Override
    public ResourceLocation getUid() {
        return Identifiers.MC_PLAYER_HEAD;
    }
}