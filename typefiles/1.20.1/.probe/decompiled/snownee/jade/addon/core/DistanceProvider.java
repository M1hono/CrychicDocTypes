package snownee.jade.addon.core;

import java.text.DecimalFormat;
import net.minecraft.client.gui.screens.Screen;
import net.minecraft.client.resources.language.I18n;
import net.minecraft.core.BlockPos;
import net.minecraft.core.Vec3i;
import net.minecraft.network.chat.Component;
import net.minecraft.resources.ResourceLocation;
import snownee.jade.api.Accessor;
import snownee.jade.api.BlockAccessor;
import snownee.jade.api.EntityAccessor;
import snownee.jade.api.IBlockComponentProvider;
import snownee.jade.api.IEntityComponentProvider;
import snownee.jade.api.ITooltip;
import snownee.jade.api.Identifiers;
import snownee.jade.api.config.IPluginConfig;
import snownee.jade.api.theme.IThemeHelper;
import snownee.jade.api.ui.IElementHelper;
import snownee.jade.impl.theme.ThemeHelper;

public enum DistanceProvider implements IBlockComponentProvider, IEntityComponentProvider {

    INSTANCE;

    public static final DecimalFormat fmt = new DecimalFormat("#.#");

    private static final int[] colors = new int[] { 15702682, 10868391, 9489145, 11545143, 1673044, 678090 };

    public static String distance(Accessor<?> accessor) {
        return fmt.format(accessor.getPlayer().m_146892_().distanceTo(accessor.getHitResult().getLocation()));
    }

    public static void xyz(ITooltip tooltip, Vec3i pos) {
        Component display = Component.translatable("jade.blockpos", display(pos.getX(), 0), display(pos.getY(), 1), display(pos.getZ(), 2));
        String narrate = I18n.get("narration.jade.blockpos", narrate(pos.getX()), narrate(pos.getY()), narrate(pos.getZ()));
        tooltip.add(IElementHelper.get().text(display).message(narrate));
    }

    public static Component display(int i, int colorIndex) {
        if (IThemeHelper.get().isLightColorScheme()) {
            colorIndex += 3;
        }
        return Component.literal(Integer.toString(i)).withStyle(ThemeHelper.colorStyle(colors[colorIndex]));
    }

    public static String narrate(int i) {
        return i >= 0 ? Integer.toString(i) : I18n.get("narration.jade.negative", -i);
    }

    @Override
    public void appendTooltip(ITooltip tooltip, BlockAccessor accessor, IPluginConfig config) {
        this.append(tooltip, accessor, accessor.getPosition(), config);
    }

    @Override
    public void appendTooltip(ITooltip tooltip, EntityAccessor accessor, IPluginConfig config) {
        this.append(tooltip, accessor, accessor.getEntity().blockPosition(), config);
    }

    public void append(ITooltip tooltip, Accessor<?> accessor, BlockPos pos, IPluginConfig config) {
        boolean distance = config.get(Identifiers.CORE_DISTANCE);
        String distanceVal = distance ? distance(accessor) : null;
        String distanceMsg = distance ? I18n.get("narration.jade.distance", distanceVal) : null;
        if (config.get(Identifiers.CORE_COORDINATES)) {
            if (config.get(Identifiers.CORE_REL_COORDINATES) && Screen.hasControlDown()) {
                xyz(tooltip, pos.subtract(BlockPos.containing(accessor.getPlayer().m_146892_())));
            } else {
                xyz(tooltip, pos);
            }
            if (distance) {
                tooltip.append(IElementHelper.get().text(Component.translatable("jade.distance1", distanceVal)).message(distanceMsg));
            }
        } else if (distance) {
            tooltip.add(IElementHelper.get().text(Component.translatable("jade.distance2", distanceVal)).message(distanceMsg));
        }
    }

    @Override
    public ResourceLocation getUid() {
        return Identifiers.CORE_DISTANCE;
    }

    @Override
    public boolean isRequired() {
        return true;
    }

    @Override
    public int getDefaultPriority() {
        return -4600;
    }
}