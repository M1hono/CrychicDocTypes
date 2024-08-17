package com.illusivesoulworks.polymorph.platform;

import com.illusivesoulworks.polymorph.api.common.base.IPolymorphPacketDistributor;
import com.illusivesoulworks.polymorph.api.common.capability.IBlockEntityRecipeData;
import com.illusivesoulworks.polymorph.api.common.capability.IPlayerRecipeData;
import com.illusivesoulworks.polymorph.api.common.capability.IStackRecipeData;
import com.illusivesoulworks.polymorph.common.PolymorphForgeCapabilities;
import com.illusivesoulworks.polymorph.common.PolymorphForgePacketDistributor;
import com.illusivesoulworks.polymorph.common.integration.PolymorphIntegrations;
import com.illusivesoulworks.polymorph.platform.services.IPlatform;
import java.nio.file.Path;
import java.util.Optional;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.crafting.Recipe;
import net.minecraft.world.level.block.entity.BlockEntity;
import net.minecraftforge.common.crafting.IShapedRecipe;
import net.minecraftforge.fml.ModList;
import net.minecraftforge.fml.loading.FMLLoader;
import net.minecraftforge.fml.loading.FMLPaths;

public class ForgePlatform implements IPlatform {

    private static final IPolymorphPacketDistributor PACKET_DISTRIBUTOR = new PolymorphForgePacketDistributor();

    @Override
    public PolymorphIntegrations.Loader getLoader() {
        return PolymorphIntegrations.Loader.FORGE;
    }

    @Override
    public Path getGameDir() {
        return FMLPaths.GAMEDIR.get();
    }

    @Override
    public Path getConfigDir() {
        return FMLPaths.CONFIGDIR.get();
    }

    @Override
    public boolean isModLoaded(String id) {
        return ModList.get().isLoaded(id);
    }

    @Override
    public boolean isModFileLoaded(String id) {
        return FMLLoader.getLoadingModList().getModFileById(id) != null;
    }

    @Override
    public boolean isShaped(Recipe<?> recipe) {
        return recipe instanceof IShapedRecipe;
    }

    @Override
    public boolean isSameShape(Recipe<?> recipe1, Recipe<?> recipe2) {
        if (this.isShaped(recipe1) && this.isShaped(recipe2)) {
            IShapedRecipe<?> shaped = (IShapedRecipe<?>) recipe1;
            IShapedRecipe<?> otherShaped = (IShapedRecipe<?>) recipe2;
            return shaped.getRecipeHeight() == otherShaped.getRecipeHeight() && shaped.getRecipeWidth() == otherShaped.getRecipeWidth();
        } else {
            return true;
        }
    }

    @Override
    public Optional<? extends IPlayerRecipeData> getRecipeData(Player player) {
        return player.getCapability(PolymorphForgeCapabilities.PLAYER_RECIPE_DATA).resolve();
    }

    @Override
    public Optional<? extends IBlockEntityRecipeData> getRecipeData(BlockEntity blockEntity) {
        return blockEntity.getCapability(PolymorphForgeCapabilities.BLOCK_ENTITY_RECIPE_DATA).resolve();
    }

    @Override
    public Optional<? extends IStackRecipeData> getRecipeData(ItemStack stack) {
        return stack.getCapability(PolymorphForgeCapabilities.STACK_RECIPE_DATA).resolve();
    }

    @Override
    public IPolymorphPacketDistributor getPacketDistributor() {
        return PACKET_DISTRIBUTOR;
    }
}