package org.embeddedt.modernfix.forge.init;

import com.google.common.collect.ImmutableList;
import com.mojang.brigadier.builder.LiteralArgumentBuilder;
import java.util.List;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.item.Item;
import net.minecraftforge.api.distmarker.Dist;
import net.minecraftforge.common.MinecraftForge;
import net.minecraftforge.event.OnDatapackSyncEvent;
import net.minecraftforge.event.RegisterCommandsEvent;
import net.minecraftforge.event.server.ServerStartedEvent;
import net.minecraftforge.event.server.ServerStoppedEvent;
import net.minecraftforge.eventbus.api.EventPriority;
import net.minecraftforge.eventbus.api.SubscribeEvent;
import net.minecraftforge.fml.DistExecutor;
import net.minecraftforge.fml.ModList;
import net.minecraftforge.fml.ModLoader;
import net.minecraftforge.fml.ModLoadingContext;
import net.minecraftforge.fml.ModLoadingStage;
import net.minecraftforge.fml.ModLoadingWarning;
import net.minecraftforge.fml.IExtensionPoint.DisplayTest;
import net.minecraftforge.fml.common.Mod;
import net.minecraftforge.fml.config.ModConfig.Type;
import net.minecraftforge.fml.event.lifecycle.FMLCommonSetupEvent;
import net.minecraftforge.fml.javafmlmod.FMLJavaModLoadingContext;
import net.minecraftforge.fml.loading.FMLLoader;
import net.minecraftforge.registries.ForgeRegistries;
import net.minecraftforge.registries.RegisterEvent;
import net.minecraftforge.server.ServerLifecycleHooks;
import org.apache.commons.lang3.tuple.Pair;
import org.embeddedt.modernfix.ModernFix;
import org.embeddedt.modernfix.core.ModernFixMixinPlugin;
import org.embeddedt.modernfix.entity.EntityDataIDSyncHandler;
import org.embeddedt.modernfix.forge.ModernFixConfig;
import org.embeddedt.modernfix.forge.classloading.ClassLoadHack;
import org.embeddedt.modernfix.forge.classloading.ModFileScanDataDeduplicator;
import org.embeddedt.modernfix.forge.config.ConfigFixer;
import org.embeddedt.modernfix.forge.config.NightConfigFixer;
import org.embeddedt.modernfix.forge.packet.PacketHandler;
import org.embeddedt.modernfix.forge.registry.ObjectHolderClearer;

@Mod("modernfix")
public class ModernFixForge {

    private static ModernFix commonMod;

    public static boolean launchDone = false;

    private static final List<Pair<List<String>, String>> MOD_WARNINGS = ImmutableList.of(Pair.of(ImmutableList.of("ferritecore"), "modernfix.no_ferritecore"));

    public ModernFixForge() {
        commonMod = new ModernFix();
        MinecraftForge.EVENT_BUS.register(this);
        FMLJavaModLoadingContext.get().getModEventBus().addListener(this::commonSetup);
        FMLJavaModLoadingContext.get().getModEventBus().addListener(this::registerItems);
        DistExecutor.unsafeRunWhenOn(Dist.CLIENT, () -> () -> MinecraftForge.EVENT_BUS.register(new ModernFixClientForge()));
        ModLoadingContext.get().registerExtensionPoint(DisplayTest.class, () -> new DisplayTest(() -> "OHNOES\ud83d\ude31\ud83d\ude31\ud83d\ude31\ud83d\ude31\ud83d\ude31\ud83d\ude31\ud83d\ude31\ud83d\ude31\ud83d\ude31\ud83d\ude31\ud83d\ude31\ud83d\ude31\ud83d\ude31\ud83d\ude31\ud83d\ude31\ud83d\ude31\ud83d\ude31", (a, b) -> true));
        ModLoadingContext.get().registerConfig(Type.COMMON, ModernFixConfig.COMMON_CONFIG);
        PacketHandler.register();
        ModFileScanDataDeduplicator.deduplicate();
        ClassLoadHack.loadModClasses();
        ConfigFixer.replaceConfigHandlers();
    }

    @SubscribeEvent
    public void onCommandRegister(RegisterCommandsEvent event) {
        for (String name : new String[] { "mfsrc" }) {
            event.getDispatcher().register((LiteralArgumentBuilder) ((LiteralArgumentBuilder) LiteralArgumentBuilder.literal(name).requires(source -> source.hasPermission(3))).executes(context -> {
                NightConfigFixer.runReloads();
                return 1;
            }));
        }
    }

    @SubscribeEvent
    public void onDatapackSync(OnDatapackSyncEvent event) {
        if (event.getPlayer() != null) {
            if (!ServerLifecycleHooks.getCurrentServer().isDedicatedServer() && event.getPlayerList().getPlayerCount() == 0) {
                return;
            }
            EntityDataIDSyncHandler.onDatapackSyncEvent(event.getPlayer());
        }
    }

    private void registerItems(RegisterEvent event) {
        if (Boolean.getBoolean("modernfix.largeRegistryTest")) {
            event.register(ForgeRegistries.Keys.ITEMS, helper -> {
                Item.Properties props = new Item.Properties();
                for (int i = 0; i < 1000000; i++) {
                    helper.register(new ResourceLocation("modernfix", "item_" + i), new Item(props));
                }
            });
        }
    }

    @SubscribeEvent
    public void commonSetup(FMLCommonSetupEvent event) {
        if (ModernFixMixinPlugin.instance.isOptionEnabled("feature.warn_missing_perf_mods.Warnings")) {
            event.enqueueWork(() -> {
                boolean atLeastOneWarning = false;
                for (Pair<List<String>, String> warning : MOD_WARNINGS) {
                    boolean isPresent = !FMLLoader.isProduction() || ((List) warning.getLeft()).stream().anyMatch(name -> ModList.get().isLoaded(name));
                    if (!isPresent) {
                        atLeastOneWarning = true;
                        ModLoader.get().addWarning(new ModLoadingWarning(ModLoadingContext.get().getActiveContainer().getModInfo(), ModLoadingStage.COMMON_SETUP, (String) warning.getRight(), new Object[0]));
                    }
                }
                if (atLeastOneWarning) {
                    ModLoader.get().addWarning(new ModLoadingWarning(ModLoadingContext.get().getActiveContainer().getModInfo(), ModLoadingStage.COMMON_SETUP, "modernfix.perf_mod_warning", new Object[0]));
                }
            });
        }
        ObjectHolderClearer.clearThrowables();
    }

    @SubscribeEvent(priority = EventPriority.LOWEST)
    public void onServerDead(ServerStoppedEvent event) {
        commonMod.onServerDead(event.getServer());
    }

    @SubscribeEvent(priority = EventPriority.LOWEST)
    public void onServerStarted(ServerStartedEvent event) {
        commonMod.onServerStarted();
    }
}