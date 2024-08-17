package com.illusivesoulworks.polymorph.common;

import com.illusivesoulworks.polymorph.api.common.base.IPolymorphPacketDistributor;
import com.illusivesoulworks.polymorph.api.common.base.IRecipePair;
import com.illusivesoulworks.polymorph.common.network.client.CPacketBlockEntityListener;
import com.illusivesoulworks.polymorph.common.network.client.CPacketPersistentRecipeSelection;
import com.illusivesoulworks.polymorph.common.network.client.CPacketPlayerRecipeSelection;
import com.illusivesoulworks.polymorph.common.network.client.CPacketStackRecipeSelection;
import com.illusivesoulworks.polymorph.common.network.server.SPacketBlockEntityRecipeSync;
import com.illusivesoulworks.polymorph.common.network.server.SPacketHighlightRecipe;
import com.illusivesoulworks.polymorph.common.network.server.SPacketPlayerRecipeSync;
import com.illusivesoulworks.polymorph.common.network.server.SPacketRecipesList;
import java.util.SortedSet;
import net.minecraft.core.BlockPos;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.server.level.ServerPlayer;
import net.minecraftforge.network.PacketDistributor;

public class PolymorphForgePacketDistributor implements IPolymorphPacketDistributor {

    @Override
    public void sendPlayerRecipeSelectionC2S(ResourceLocation resourceLocation) {
        PolymorphForgeNetwork.get().send(PacketDistributor.SERVER.noArg(), new CPacketPlayerRecipeSelection(resourceLocation));
    }

    @Override
    public void sendPersistentRecipeSelectionC2S(ResourceLocation resourceLocation) {
        PolymorphForgeNetwork.get().send(PacketDistributor.SERVER.noArg(), new CPacketPersistentRecipeSelection(resourceLocation));
    }

    @Override
    public void sendStackRecipeSelectionC2S(ResourceLocation resourceLocation) {
        PolymorphForgeNetwork.get().send(PacketDistributor.SERVER.noArg(), new CPacketStackRecipeSelection(resourceLocation));
    }

    @Override
    public void sendRecipesListS2C(ServerPlayer player) {
        this.sendRecipesListS2C(player, null);
    }

    @Override
    public void sendRecipesListS2C(ServerPlayer player, SortedSet<IRecipePair> recipesList) {
        this.sendRecipesListS2C(player, recipesList, null);
    }

    @Override
    public void sendRecipesListS2C(ServerPlayer player, SortedSet<IRecipePair> recipesList, ResourceLocation selected) {
        PolymorphForgeNetwork.get().send(PacketDistributor.PLAYER.with(() -> player), new SPacketRecipesList(recipesList, selected));
    }

    @Override
    public void sendHighlightRecipeS2C(ServerPlayer player, ResourceLocation pResourceLocation) {
        PolymorphForgeNetwork.get().send(PacketDistributor.PLAYER.with(() -> player), new SPacketHighlightRecipe(pResourceLocation));
    }

    @Override
    public void sendPlayerSyncS2C(ServerPlayer player, SortedSet<IRecipePair> recipesList, ResourceLocation selected) {
        PolymorphForgeNetwork.get().send(PacketDistributor.PLAYER.with(() -> player), new SPacketPlayerRecipeSync(recipesList, selected));
    }

    @Override
    public void sendBlockEntitySyncS2C(BlockPos blockPos, ResourceLocation selected) {
        PolymorphForgeNetwork.get().send(PacketDistributor.ALL.noArg(), new SPacketBlockEntityRecipeSync(blockPos, selected));
    }

    @Override
    public void sendBlockEntityListenerC2S(boolean add) {
        PolymorphForgeNetwork.get().send(PacketDistributor.SERVER.noArg(), new CPacketBlockEntityListener(add));
    }
}