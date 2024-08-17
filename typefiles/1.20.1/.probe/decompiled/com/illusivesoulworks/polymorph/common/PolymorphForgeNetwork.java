package com.illusivesoulworks.polymorph.common;

import com.illusivesoulworks.polymorph.common.network.client.CPacketBlockEntityListener;
import com.illusivesoulworks.polymorph.common.network.client.CPacketPersistentRecipeSelection;
import com.illusivesoulworks.polymorph.common.network.client.CPacketPlayerRecipeSelection;
import com.illusivesoulworks.polymorph.common.network.client.CPacketStackRecipeSelection;
import com.illusivesoulworks.polymorph.common.network.server.SPacketBlockEntityRecipeSync;
import com.illusivesoulworks.polymorph.common.network.server.SPacketHighlightRecipe;
import com.illusivesoulworks.polymorph.common.network.server.SPacketPlayerRecipeSync;
import com.illusivesoulworks.polymorph.common.network.server.SPacketRecipesList;
import java.util.function.BiConsumer;
import java.util.function.Consumer;
import java.util.function.Function;
import net.minecraft.network.FriendlyByteBuf;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.server.level.ServerPlayer;
import net.minecraftforge.api.distmarker.Dist;
import net.minecraftforge.fml.DistExecutor;
import net.minecraftforge.network.NetworkEvent;
import net.minecraftforge.network.NetworkRegistry;
import net.minecraftforge.network.simple.SimpleChannel;

public class PolymorphForgeNetwork {

    private static final String PTC_VERSION = "1";

    private static SimpleChannel instance;

    private static int id = 0;

    public static SimpleChannel get() {
        return instance;
    }

    public static void setup() {
        instance = NetworkRegistry.ChannelBuilder.named(new ResourceLocation("polymorph", "main")).networkProtocolVersion(() -> "1").clientAcceptedVersions("1"::equals).serverAcceptedVersions("1"::equals).simpleChannel();
        registerS2C(SPacketRecipesList.class, SPacketRecipesList::encode, SPacketRecipesList::decode, SPacketRecipesList::handle);
        registerS2C(SPacketHighlightRecipe.class, SPacketHighlightRecipe::encode, SPacketHighlightRecipe::decode, SPacketHighlightRecipe::handle);
        registerS2C(SPacketPlayerRecipeSync.class, SPacketPlayerRecipeSync::encode, SPacketPlayerRecipeSync::decode, SPacketPlayerRecipeSync::handle);
        registerS2C(SPacketBlockEntityRecipeSync.class, SPacketBlockEntityRecipeSync::encode, SPacketBlockEntityRecipeSync::decode, SPacketBlockEntityRecipeSync::handle);
        registerC2S(CPacketPlayerRecipeSelection.class, CPacketPlayerRecipeSelection::encode, CPacketPlayerRecipeSelection::decode, CPacketPlayerRecipeSelection::handle);
        registerC2S(CPacketPersistentRecipeSelection.class, CPacketPersistentRecipeSelection::encode, CPacketPersistentRecipeSelection::decode, CPacketPersistentRecipeSelection::handle);
        registerC2S(CPacketStackRecipeSelection.class, CPacketStackRecipeSelection::encode, CPacketStackRecipeSelection::decode, CPacketStackRecipeSelection::handle);
        registerC2S(CPacketBlockEntityListener.class, CPacketBlockEntityListener::encode, CPacketBlockEntityListener::decode, CPacketBlockEntityListener::handle);
    }

    public static <M> void registerC2S(Class<M> clazz, BiConsumer<M, FriendlyByteBuf> encoder, Function<FriendlyByteBuf, M> decoder, BiConsumer<M, ServerPlayer> handler) {
        instance.registerMessage(id++, clazz, encoder, decoder, (message, contextSupplier) -> {
            NetworkEvent.Context context = (NetworkEvent.Context) contextSupplier.get();
            context.enqueueWork(() -> {
                ServerPlayer sender = context.getSender();
                if (sender != null) {
                    handler.accept(message, sender);
                }
            });
            context.setPacketHandled(true);
        });
    }

    public static <M> void registerS2C(Class<M> clazz, BiConsumer<M, FriendlyByteBuf> encoder, Function<FriendlyByteBuf, M> decoder, Consumer<M> handler) {
        instance.registerMessage(id++, clazz, encoder, decoder, (message, contextSupplier) -> {
            NetworkEvent.Context context = (NetworkEvent.Context) contextSupplier.get();
            context.enqueueWork(() -> DistExecutor.unsafeRunWhenOn(Dist.CLIENT, () -> () -> handler.accept(message)));
            context.setPacketHandled(true);
        });
    }
}