package se.mickelus.tetra.blocks.multischematic;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import net.minecraft.client.Minecraft;
import net.minecraft.client.gui.screens.Screen;
import net.minecraft.world.InteractionHand;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.level.ItemLike;
import net.minecraftforge.client.event.InputEvent;
import net.minecraftforge.eventbus.api.SubscribeEvent;
import se.mickelus.mutil.util.CastOptional;
import se.mickelus.tetra.TetraMod;

public class MultiblockSchematicScrollHandler {

    private static final Map<String, List<StackedMultiblockSchematicItem>> schematics = new HashMap();

    private static double scrollDelta;

    @SubscribeEvent
    public static void onMouseScroll(InputEvent.MouseScrollingEvent event) {
        Player player = Minecraft.getInstance().player;
        if (player != null && player.isCreative() && Screen.hasAltDown() && player.m_21205_().getItem() instanceof StackedMultiblockSchematicItem) {
            scrollDelta = Math.signum(scrollDelta) == Math.signum(event.getScrollDelta()) ? scrollDelta + event.getScrollDelta() : event.getScrollDelta();
            if (Math.abs(scrollDelta) > 1.0) {
                TetraMod.packetHandler.sendToServer(new MultiblockSchematicScrollPacket(scrollDelta > 0.0));
                scrollDelta = 0.0;
            }
            event.setCanceled(true);
        }
    }

    public static void shiftSchematic(Player player, boolean isIncrease) {
        if (player.isCreative()) {
            CastOptional.cast(player.m_21205_().getItem(), StackedMultiblockSchematicItem.class).ifPresent(item -> {
                List<StackedMultiblockSchematicItem> parts = (List<StackedMultiblockSchematicItem>) schematics.get(item.schematicBlock.schematic);
                int index = parts.indexOf(item) + (isIncrease ? 1 : -1);
                if (index >= 0 && index < parts.size()) {
                    player.m_21008_(InteractionHand.MAIN_HAND, new ItemStack((ItemLike) parts.get(index)));
                }
            });
        }
    }

    public static void setupSchematic(String identifier, int partCount) {
        ArrayList<StackedMultiblockSchematicItem> list = new ArrayList(partCount);
        for (int i = 0; i < partCount; i++) {
            list.add(i, null);
        }
        schematics.put(identifier, list);
    }

    public static void addSchematic(String identifier, int index, StackedMultiblockSchematicItem item) {
        ((List) schematics.get(identifier)).set(index, item);
    }
}