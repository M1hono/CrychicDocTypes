package org.embeddedt.modernfix.common.mixin.perf.dynamic_structure_manager;

import com.google.common.cache.Cache;
import com.google.common.cache.CacheBuilder;
import com.mojang.datafixers.DataFixer;
import java.util.Map;
import java.util.Optional;
import net.minecraft.core.HolderGetter;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.server.packs.resources.ResourceManager;
import net.minecraft.world.level.block.Block;
import net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate;
import net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplateManager;
import net.minecraft.world.level.storage.LevelStorageSource;
import org.spongepowered.asm.mixin.Final;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.Mutable;
import org.spongepowered.asm.mixin.Shadow;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfo;

@Mixin({ StructureTemplateManager.class })
public class StructureManagerMixin {

    @Shadow
    @Final
    @Mutable
    private Map<ResourceLocation, Optional<StructureTemplate>> structureRepository;

    @Inject(method = { "<init>" }, at = { @At("RETURN") })
    private void makeStructuresSafe(ResourceManager arg, LevelStorageSource.LevelStorageAccess arg2, DataFixer dataFixer, HolderGetter<Block> arg3, CallbackInfo ci) {
        Cache<ResourceLocation, Optional<StructureTemplate>> structureCache = CacheBuilder.newBuilder().softValues().build();
        this.structureRepository = structureCache.asMap();
    }
}