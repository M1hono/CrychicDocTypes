package snownee.jade.util;

import com.google.common.base.Strings;
import com.google.common.collect.Maps;
import java.util.Map;
import java.util.Optional;
import net.minecraft.client.resources.language.I18n;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.server.packs.resources.ResourceManager;
import net.minecraft.server.packs.resources.ResourceManagerReloadListener;
import net.minecraft.world.entity.Entity;
import net.minecraft.world.entity.decoration.Painting;
import net.minecraft.world.entity.decoration.PaintingVariant;
import net.minecraft.world.entity.item.FallingBlockEntity;
import net.minecraft.world.entity.item.ItemEntity;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.level.block.Block;
import snownee.jade.api.callback.JadeItemModNameCallback;
import snownee.jade.impl.WailaClientRegistration;

public class ModIdentification implements ResourceManagerReloadListener {

    public static final ModIdentification INSTANCE = new ModIdentification();

    private static final Map<String, Optional<String>> NAMES = Maps.newConcurrentMap();

    public static void invalidateCache() {
        NAMES.clear();
    }

    public static Optional<String> getModName(String namespace) {
        return (Optional<String>) NAMES.computeIfAbsent(namespace, $ -> {
            Optional<String> optional = ClientProxy.getModName($);
            if (optional.isPresent()) {
                return optional;
            } else {
                String key = "jade.modName." + $;
                return I18n.exists(key) ? Optional.of(I18n.get(key)) : Optional.empty();
            }
        });
    }

    public static String getModName(ResourceLocation id) {
        return (String) getModName(id.getNamespace()).orElse(id.getNamespace());
    }

    public static String getModName(Block block) {
        return getModName(CommonProxy.getId(block));
    }

    public static String getModName(ItemStack stack) {
        for (JadeItemModNameCallback callback : WailaClientRegistration.INSTANCE.itemModNameCallback.callbacks()) {
            String s = callback.gatherItemModName(stack);
            if (!Strings.isNullOrEmpty(s)) {
                return s;
            }
        }
        String id = CommonProxy.getModIdFromItem(stack);
        return (String) getModName(id).orElse(id);
    }

    public static String getModName(Entity entity) {
        if (entity instanceof Painting) {
            PaintingVariant motive = ((Painting) entity).getVariant().value();
            return getModName(CommonProxy.getId(motive));
        } else if (entity instanceof ItemEntity) {
            return getModName(((ItemEntity) entity).getItem());
        } else {
            return entity instanceof FallingBlockEntity ? getModName(((FallingBlockEntity) entity).getBlockState().m_60734_()) : getModName(CommonProxy.getId(entity.getType()));
        }
    }

    @Override
    public void onResourceManagerReload(ResourceManager manager) {
        invalidateCache();
    }
}