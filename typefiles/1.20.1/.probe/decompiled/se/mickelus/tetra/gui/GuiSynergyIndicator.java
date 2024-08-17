package se.mickelus.tetra.gui;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import javax.annotation.ParametersAreNonnullByDefault;
import net.minecraft.ChatFormatting;
import net.minecraft.client.resources.language.I18n;
import net.minecraft.network.chat.Component;
import net.minecraft.world.entity.ai.attributes.AttributeModifier;
import net.minecraft.world.item.ItemStack;
import se.mickelus.mutil.gui.GuiElement;
import se.mickelus.mutil.gui.GuiTexture;
import se.mickelus.mutil.util.CastOptional;
import se.mickelus.tetra.items.modular.IModularItem;
import se.mickelus.tetra.module.ItemModule;
import se.mickelus.tetra.module.data.SynergyData;

@ParametersAreNonnullByDefault
public class GuiSynergyIndicator extends GuiElement {

    private static final int activeCoord = 176;

    private static final int inactiveCoord = 186;

    private static final int emptyCoord = 196;

    protected List<Component> tooltip;

    protected GuiTexture indicator = new GuiTexture(0, 0, this.width, this.height, 176, 0, GuiTextures.workbench);

    protected boolean alwaysShowStats;

    public GuiSynergyIndicator(int x, int y) {
        super(x, y, 10, 10);
        this.addChild(this.indicator);
    }

    public GuiSynergyIndicator(int x, int y, boolean alwaysShowStats) {
        this(x, y);
        this.alwaysShowStats = alwaysShowStats;
    }

    public void update(ItemStack itemStack, ItemModule module) {
        String moduleKey = module.getUnlocalizedName();
        String moduleVariant = module.getVariantData(itemStack).key;
        boolean hasActive = this.alwaysShowStats;
        this.tooltip = new ArrayList();
        this.tooltip.add(Component.translatable("tetra.modular.synergy_indicator.header").withStyle(ChatFormatting.GRAY));
        if (itemStack.getItem() instanceof IModularItem item) {
            Set<SynergyData> activeSynergies = (Set<SynergyData>) Arrays.stream(item.getSynergyData(itemStack)).collect(Collectors.toSet());
            hasActive = hasActive || Arrays.stream(item.getSynergyData(itemStack)).filter(data -> this.shouldShow(data, activeSynergies, moduleKey, moduleVariant)).anyMatch(this::providesStats);
            Arrays.stream(item.getAllSynergyData(itemStack)).filter(data -> this.shouldShow(data, activeSynergies, moduleKey, moduleVariant)).filter(this::providesStats).flatMap(data -> this.getLines(activeSynergies.contains(data), data).stream()).map(Component::m_237113_).collect(Collectors.toCollection(() -> this.tooltip));
        }
        if (this.tooltip.size() <= 1) {
            this.tooltip = Collections.singletonList(Component.translatable("tetra.modular.synergy_indicator.empty").withStyle(ChatFormatting.GRAY));
            this.indicator.setTextureCoordinates(196, 0);
        } else if (!hasActive) {
            this.indicator.setTextureCoordinates(186, 0);
        } else {
            this.indicator.setTextureCoordinates(176, 0);
        }
    }

    public void update(ItemStack itemStack, String slot) {
        CastOptional.cast(itemStack.getItem(), IModularItem.class).map(item -> item.getModuleFromSlot(itemStack, slot)).ifPresent(module -> this.update(itemStack, module));
    }

    private boolean shouldShow(SynergyData data, Set<SynergyData> activeSynergies, String moduleKey, String moduleVariant) {
        if (data.hidden) {
            return false;
        } else if (data.obscured) {
            return activeSynergies.contains(data);
        } else {
            return data.visibilityKey != null && !data.visibilityKey.equals(moduleKey) && !data.visibilityKey.equals(moduleVariant) ? false : this.matchesModule(data, moduleKey) || this.matchesVariant(data, moduleVariant);
        }
    }

    private boolean matchesModule(SynergyData data, String moduleKey) {
        return Arrays.asList(data.modules).contains(moduleKey);
    }

    private boolean matchesVariant(SynergyData data, String moduleVariant) {
        return Arrays.asList(data.moduleVariants).contains(moduleVariant);
    }

    private boolean providesStats(SynergyData data) {
        return data.attributes != null || data.tools != null || data.effects != null || data.durability != 0 || data.durabilityMultiplier != 1.0F || data.integrity != 0 || data.integrityMultiplier != 1.0F || data.magicCapacity != 0;
    }

    private List<String> getLines(boolean isActive, SynergyData data) {
        String header = this.getHeaderLine(isActive, data);
        if (!isActive && !this.alwaysShowStats) {
            return Collections.singletonList(header);
        } else {
            List<String> result = this.getStatLines(data);
            result.add(0, header);
            return result;
        }
    }

    private String getHeaderLine(boolean isActive, SynergyData data) {
        return (isActive ? ChatFormatting.GREEN + "» " + ChatFormatting.WHITE : ChatFormatting.BOLD + "  " + ChatFormatting.DARK_GRAY) + (String) Stream.concat(Arrays.stream(data.moduleVariants).map(key -> I18n.get("tetra.variant." + key)), Arrays.stream(data.modules).map(key -> I18n.get("tetra.module." + key + ".name"))).collect(Collectors.joining(" + "));
    }

    private List<String> getStatLines(SynergyData data) {
        List<String> result = new ArrayList();
        if (data.attributes != null) {
            data.attributes.forEach((attribute, modifier) -> {
                double amount = modifier.getAmount();
                if (modifier.getOperation() == AttributeModifier.Operation.ADDITION) {
                    result.add(this.getValueDouble(amount, 0.0) + I18n.get(attribute.getDescriptionId()));
                } else {
                    result.add(this.getValueMultiplier(amount + 1.0) + I18n.get(attribute.getDescriptionId()));
                }
            });
        }
        if (data.durability != 0) {
            result.add(this.getValueInteger(data.durability, 0) + I18n.get("tetra.stats.durability"));
        }
        if (data.durabilityMultiplier != 1.0F) {
            result.add(this.getValueMultiplier((double) data.durabilityMultiplier) + I18n.get("tetra.stats.durability"));
        }
        if (data.integrity != 0) {
            result.add(this.getValueInteger(data.integrity, 0) + I18n.get("tetra.stats.integrity"));
        }
        if (data.integrityMultiplier != 1.0F) {
            result.add(this.getValueMultiplier((double) data.integrityMultiplier) + I18n.get("tetra.stats.integrity"));
        }
        if (data.effects != null) {
            data.effects.getLevelMap().forEach((itemEffect, level) -> result.add(this.getValueInteger(level, 0) + I18n.get("tetra.stats." + itemEffect.getKey()) + " " + I18n.get("tetra.stats.level_suffix")));
            data.effects.efficiencyMap.forEach((itemEffect, efficiency) -> result.add(this.getValueDouble((double) efficiency.floatValue(), 0.0) + I18n.get("tetra.stats." + itemEffect.getKey()) + " " + I18n.get("tetra.stats.strength_suffix")));
        }
        if (data.tools != null) {
            data.tools.getLevelMap().forEach((tool, level) -> result.add(this.getValueInteger(level, 0) + I18n.get("tetra.tool." + tool.name()) + " " + I18n.get("tetra.stats.tier_suffix")));
            data.tools.efficiencyMap.forEach((tool, efficiency) -> result.add(this.getValueDouble((double) efficiency.floatValue(), 0.0) + I18n.get("tetra.tool." + tool.name()) + " " + I18n.get("tetra.stats.efficiency_suffix")));
        }
        if (data.magicCapacity != 0) {
            result.add(this.getValueDouble((double) data.integrity, 0.0) + I18n.get("tetra.stats.magicCapacity"));
        }
        for (int i = 0; i < result.size(); i++) {
            if (i == result.size() - 1) {
                result.set(i, ChatFormatting.GRAY + "  └ " + (String) result.get(i));
            } else {
                result.set(i, ChatFormatting.GRAY + "  ├ " + (String) result.get(i));
            }
        }
        return result;
    }

    public String getValueInteger(int value, int flippingPoint) {
        return value > flippingPoint ? ChatFormatting.GREEN + String.format("%+d ", value) + ChatFormatting.RESET : ChatFormatting.RED + String.format("%+d ", value) + ChatFormatting.RESET;
    }

    public String getValueMultiplier(double value) {
        return value > 1.0 ? ChatFormatting.GREEN + String.format("%.02fx ", value) + ChatFormatting.RESET : ChatFormatting.RED + String.format("%.02fx ", value) + ChatFormatting.RESET;
    }

    public String getValueDouble(double value, double flippingPoint) {
        return value > flippingPoint ? ChatFormatting.GREEN + String.format("%+.02f ", value) + ChatFormatting.RESET : ChatFormatting.RED + String.format("%+.02f ", value) + ChatFormatting.RESET;
    }

    @Override
    public List<Component> getTooltipLines() {
        return this.hasFocus() ? this.tooltip : super.getTooltipLines();
    }
}