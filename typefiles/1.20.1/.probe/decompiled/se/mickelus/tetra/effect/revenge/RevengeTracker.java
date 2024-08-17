package se.mickelus.tetra.effect.revenge;

import com.google.common.cache.Cache;
import com.google.common.cache.CacheBuilder;
import java.util.Collection;
import java.util.HashSet;
import java.util.Optional;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.TimeUnit;
import java.util.stream.Stream;
import javax.annotation.ParametersAreNonnullByDefault;
import net.minecraft.server.level.ServerPlayer;
import net.minecraft.world.entity.Entity;
import net.minecraft.world.entity.EntityType;
import net.minecraft.world.entity.LivingEntity;
import net.minecraft.world.item.ItemStack;
import net.minecraftforge.event.entity.living.LivingAttackEvent;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import se.mickelus.tetra.TetraMod;
import se.mickelus.tetra.effect.ItemEffect;
import se.mickelus.tetra.items.modular.IModularItem;

@ParametersAreNonnullByDefault
public class RevengeTracker {

    private static final Logger logger = LogManager.getLogger();

    private static final Cache<Integer, Collection<Integer>> cache = CacheBuilder.newBuilder().maximumSize(100L).expireAfterWrite(30L, TimeUnit.SECONDS).build();

    private static int getIdentifier(Entity entity) {
        return entity.level().isClientSide ? -entity.getId() : entity.getId();
    }

    public static boolean canRevenge(LivingEntity entity) {
        return Stream.of(entity.getMainHandItem(), entity.getOffhandItem()).filter(itemStack -> itemStack.getItem() instanceof IModularItem).anyMatch(itemStack -> canRevenge((IModularItem) itemStack.getItem(), itemStack));
    }

    public static boolean canRevenge(IModularItem item, ItemStack itemStack) {
        return item.getEffectLevel(itemStack, ItemEffect.abilityRevenge) > 0;
    }

    public static boolean canRevenge(Entity entity, Entity enemy) {
        return (Boolean) Optional.ofNullable((Collection) cache.getIfPresent(getIdentifier(entity))).map(enemies -> enemies.contains(enemy.getId())).orElse(false);
    }

    public static void onAttackEntity(LivingAttackEvent event) {
        Entity entity = event.getEntity();
        if (!event.getEntity().m_20193_().isClientSide() && EntityType.PLAYER.equals(entity.getType())) {
            Entity enemy = event.getSource().getEntity();
            if (enemy != null) {
                addEnemy(entity, enemy);
                if (entity instanceof ServerPlayer) {
                    TetraMod.packetHandler.sendTo(new AddRevengePacket(enemy), (ServerPlayer) entity);
                } else {
                    logger.warn("Unable to sync revenge state, server entity of type player is of other heritage. This should not happen");
                }
            }
        }
    }

    public static void removeEnemySynced(ServerPlayer entity, Entity enemy) {
        removeEnemy(entity, enemy.getId());
        TetraMod.packetHandler.sendTo(new RemoveRevengePacket(enemy), entity);
    }

    public static void removeEnemy(Entity entity, Entity enemy) {
        removeEnemy(entity, enemy.getId());
    }

    public static void removeEnemy(Entity entity, int enemyId) {
        Optional.ofNullable((Collection) cache.getIfPresent(getIdentifier(entity))).ifPresent(enemies -> enemies.remove(enemyId));
    }

    public static void addEnemy(Entity entity, Entity enemy) {
        addEnemy(entity, enemy.getId());
    }

    public static void addEnemy(Entity entity, int enemyId) {
        try {
            ((Collection) cache.get(getIdentifier(entity), HashSet::new)).add(enemyId);
        } catch (ExecutionException var3) {
            var3.printStackTrace();
        }
    }
}