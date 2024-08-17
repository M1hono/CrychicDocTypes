package se.mickelus.tetra.items.modular.impl.holo.gui.craft;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import javax.annotation.ParametersAreNonnullByDefault;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.item.ItemStack;
import net.minecraftforge.common.ToolActions;
import se.mickelus.mutil.gui.GuiAlignment;
import se.mickelus.mutil.gui.GuiAttachment;
import se.mickelus.mutil.gui.GuiElement;
import se.mickelus.tetra.TetraToolActions;
import se.mickelus.tetra.gui.stats.AbilityStats;
import se.mickelus.tetra.gui.stats.GuiStats;
import se.mickelus.tetra.gui.stats.bar.GuiStatBarTool;
import se.mickelus.tetra.gui.stats.bar.GuiStatBase;
import se.mickelus.tetra.items.modular.IModularItem;

@ParametersAreNonnullByDefault
public class HoloStatsGui extends GuiElement {

    private static final List<GuiStatBase> bars = new ArrayList(Arrays.asList(GuiStats.integrity, GuiStats.attackDamageNormalized, GuiStats.drawStrength, GuiStats.abilityDamage, GuiStats.attackSpeedNormalized, GuiStats.drawSpeedNormalized, GuiStats.abilityCooldownNormalized, GuiStats.reach, GuiStats.attackRange, GuiStats.durability, GuiStats.armor, GuiStats.toughness, GuiStats.shieldbreaker, GuiStats.blocking, GuiStats.blockingReflect, GuiStats.bashing, GuiStats.throwable, GuiStats.ricochet, GuiStats.piercing, GuiStats.jab, GuiStats.quickslot, GuiStats.potionStorage, GuiStats.storage, GuiStats.quiver, GuiStats.booster, GuiStats.suspendSelf, GuiStats.sweeping, GuiStats.sweepingRange, GuiStats.bleeding, GuiStats.backstab, GuiStats.armorPenetration, GuiStats.crushing, GuiStats.skewering, GuiStats.howling, GuiStats.knockback, AbilityStats.execute, GuiStats.severing, GuiStats.stun, AbilityStats.lunge, AbilityStats.slam, AbilityStats.puncture, AbilityStats.pry, AbilityStats.overpower, AbilityStats.reap, GuiStats.looting, GuiStats.fiery, GuiStats.smite, GuiStats.arthropod, GuiStats.unbreaking, GuiStats.mending, GuiStats.silkTouch, GuiStats.fortune, GuiStats.infinity, GuiStats.flame, GuiStats.punch, GuiStats.quickStrike, GuiStats.counterweight, GuiStats.softStrike, GuiStats.fierySelf, GuiStats.enderReverb, GuiStats.sculkTaint, GuiStats.criticalStrike, GuiStats.medialLimit, GuiStats.lateralLimit, GuiStats.axialLimit, GuiStats.earthbind, GuiStats.reaching, GuiStats.janking, GuiStats.releaseLatch, GuiStats.overbowed, GuiStats.multishot, GuiStats.zoom, GuiStats.spread, GuiStats.focus, GuiStats.velocity, GuiStats.intuit, GuiStats.magicCapacity, GuiStats.stability, GuiStats.workable, new GuiStatBarTool(0, 0, 59, TetraToolActions.hammer, true, false), new GuiStatBarTool(0, 0, 59, TetraToolActions.cut, true, false), new GuiStatBarTool(0, 0, 59, ToolActions.AXE_DIG, true, false), new GuiStatBarTool(0, 0, 59, ToolActions.PICKAXE_DIG, true, false), new GuiStatBarTool(0, 0, 59, ToolActions.SHOVEL_DIG, true, false), new GuiStatBarTool(0, 0, 59, TetraToolActions.pry, true, false), new GuiStatBarTool(0, 0, 59, ToolActions.HOE_DIG, true, false)));

    private final GuiElement barGroup = new GuiElement(0, 0, this.width, this.height);

    public HoloStatsGui(int x, int y) {
        super(x, y, 320, 52);
        this.addChild(this.barGroup);
    }

    public static void addBar(GuiStatBase statBar) {
        bars.add(statBar);
    }

    public void update(ItemStack itemStack, ItemStack previewStack, String slot, String improvement, Player player) {
        boolean shouldShow = !itemStack.isEmpty() && itemStack.getItem() instanceof IModularItem;
        this.setVisible(shouldShow);
        if (shouldShow) {
            this.barGroup.clearChildren();
            bars.stream().filter(bar -> bar.shouldShow(player, itemStack, previewStack, slot, improvement)).forEach(bar -> {
                bar.update(player, itemStack, previewStack, slot, improvement);
                this.realignBar(bar, this.barGroup.getNumChildren());
                this.barGroup.addChild(bar);
            });
        }
    }

    private void realignBar(GuiStatBase bar, int index) {
        bar.setAttachment(GuiAttachment.topLeft);
        bar.setAlignment(GuiAlignment.left);
        bar.setX(index % 5 * 68);
        bar.setY(17 * (index / 5));
    }

    public void realignBars() {
        for (int i = 0; i < this.barGroup.getNumChildren(); i++) {
            this.realignBar((GuiStatBase) this.barGroup.getChild(i), i);
        }
    }
}