package com.almostreliable.lootjs;

import com.almostreliable.lootjs.core.ILootAction;
import com.almostreliable.lootjs.core.ILootContextData;
import com.almostreliable.lootjs.core.LootJSParamSets;
import com.almostreliable.lootjs.filters.ResourceLocationFilter;
import com.almostreliable.lootjs.loot.results.LootContextInfo;
import com.almostreliable.lootjs.loot.results.LootInfoCollector;
import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;
import javax.annotation.Nullable;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.level.storage.loot.LootContext;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class LootModificationsAPI {

    public static final List<ResourceLocationFilter> FILTERS = new ArrayList();

    private static final Logger LOGGER = LogManager.getLogger();

    private static final List<ILootAction> actions = new ArrayList();

    public static Consumer<String> DEBUG_ACTION = LOGGER::info;

    public static boolean LOOT_MODIFICATION_LOGGING = false;

    public static boolean DISABLE_WITHER_DROPPING_NETHER_STAR = false;

    public static boolean DISABLE_ZOMBIE_DROPPING_HEAD = false;

    public static boolean DISABLE_SKELETON_DROPPING_HEAD = false;

    public static boolean DISABLE_CREEPER_DROPPING_HEAD = false;

    private LootModificationsAPI() {
    }

    public static void reload() {
        actions.clear();
        LOOT_MODIFICATION_LOGGING = false;
        FILTERS.clear();
        FILTERS.add(new ResourceLocationFilter.ByLocation(new ResourceLocation("minecraft:blocks/fire")));
    }

    public static void invokeActions(List<ItemStack> loot, LootContext context) {
        ILootContextData contextData = context.getParamOrNull(LootJSParamSets.DATA);
        assert contextData != null;
        for (ResourceLocationFilter filter : FILTERS) {
            if (filter.test(LootJSPlatform.INSTANCE.getQueriedLootTableId(context))) {
                return;
            }
        }
        context.getLevel().m_46473_().push("LootModificationsAPI::invokeActions");
        loot.removeIf(ItemStack::m_41619_);
        contextData.setGeneratedLoot(loot);
        LootContextInfo lootContextInfo = LootContextInfo.create(context);
        for (ILootAction modification : actions) {
            modification.applyLootHandler(context, loot);
            contextData.reset();
        }
        handleCollector(context, lootContextInfo);
        context.getLevel().m_46473_().pop();
    }

    private static void handleCollector(LootContext context, @Nullable LootContextInfo lootContextInfo) {
        if (DEBUG_ACTION != null && LOOT_MODIFICATION_LOGGING && lootContextInfo != null) {
            LootInfoCollector collector = context.getParamOrNull(LootJSParamSets.RESULT_COLLECTOR);
            ILootContextData data = context.getParamOrNull(LootJSParamSets.DATA);
            if (collector != null && data != null && !collector.getFirstLayer().isEmpty()) {
                lootContextInfo.updateLoot(data.getGeneratedLoot());
                StringBuilder sb = new StringBuilder().append("\n").append("[ Loot information ]").append("\n");
                lootContextInfo.getCollector().append(sb, 1);
                sb.append("[ Modifications  ]").append("\n");
                collector.append(sb, 1);
                DEBUG_ACTION.accept(sb.toString());
            }
        }
    }

    public static void addModification(ILootAction action) {
        actions.add(action);
    }
}