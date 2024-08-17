package net.mehvahdjukaar.supplementaries.integration;

import java.util.List;
import net.mehvahdjukaar.supplementaries.Supplementaries;
import net.mehvahdjukaar.supplementaries.common.block.tiles.AbstractPresentBlockTile;
import net.mehvahdjukaar.supplementaries.common.block.tiles.SafeBlockTile;
import net.mehvahdjukaar.supplementaries.common.entities.HatStandEntity;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.server.level.ServerLevel;
import net.minecraft.server.level.ServerPlayer;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.level.block.entity.BaseContainerBlockEntity;
import snownee.jade.addon.universal.ItemStorageProvider;
import snownee.jade.api.Accessor;
import snownee.jade.api.EntityAccessor;
import snownee.jade.api.IEntityComponentProvider;
import snownee.jade.api.ITooltip;
import snownee.jade.api.IWailaClientRegistration;
import snownee.jade.api.IWailaCommonRegistration;
import snownee.jade.api.IWailaPlugin;
import snownee.jade.api.WailaPlugin;
import snownee.jade.api.config.IPluginConfig;
import snownee.jade.api.ui.IDisplayHelper;
import snownee.jade.api.ui.IElementHelper;
import snownee.jade.api.view.ClientViewGroup;
import snownee.jade.api.view.IClientExtensionProvider;
import snownee.jade.api.view.IServerExtensionProvider;
import snownee.jade.api.view.ItemView;
import snownee.jade.api.view.ViewGroup;

@WailaPlugin
public class JadeCompat implements IWailaPlugin {

    @Override
    public void register(IWailaCommonRegistration registration) {
        registration.registerItemStorage(new JadeCompat.HideItemsProvider(Supplementaries.res("present")), AbstractPresentBlockTile.class);
        registration.registerItemStorage(new JadeCompat.HideItemsProvider(Supplementaries.res("safe")), SafeBlockTile.class);
    }

    @Override
    public void registerClient(IWailaClientRegistration registration) {
        registration.registerItemStorageClient(new JadeCompat.HideItemsProvider(Supplementaries.res("present")));
        registration.registerItemStorageClient(new JadeCompat.HideItemsProvider(Supplementaries.res("safe")));
        registration.registerEntityComponent(new JadeCompat.HatStandProvider(Supplementaries.res("hat_stand")), HatStandEntity.class);
    }

    public static record HatStandProvider(ResourceLocation id) implements IEntityComponentProvider {

        @Override
        public ResourceLocation getUid() {
            return this.id;
        }

        @Override
        public void appendTooltip(ITooltip tooltip, EntityAccessor accessor, IPluginConfig config) {
            HatStandEntity entity = (HatStandEntity) accessor.getEntity();
            for (ItemStack stack : entity.getArmorSlots()) {
                if (!stack.isEmpty()) {
                    tooltip.add(IElementHelper.get().smallItem(stack));
                    tooltip.append(IDisplayHelper.get().stripColor(stack.getHoverName()));
                }
            }
        }
    }

    public static record HideItemsProvider<T extends BaseContainerBlockEntity>(ResourceLocation id) implements IServerExtensionProvider<T, ItemStack>, IClientExtensionProvider<ItemStack, ItemView> {

        @Override
        public ResourceLocation getUid() {
            return this.id;
        }

        public List<ViewGroup<ItemStack>> getGroups(ServerPlayer player, ServerLevel world, T blockEntity, boolean showDetails) {
            return (blockEntity instanceof SafeBlockTile || blockEntity instanceof AbstractPresentBlockTile) && blockEntity.canOpen(player) ? ItemStorageProvider.INSTANCE.getGroups(player, world, blockEntity, showDetails) : List.of();
        }

        @Override
        public List<ClientViewGroup<ItemView>> getClientGroups(Accessor<?> accessor, List<ViewGroup<ItemStack>> groups) {
            return ClientViewGroup.map(groups, ItemView::new, null);
        }
    }
}