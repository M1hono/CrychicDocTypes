package se.mickelus.tetra.effect;

import com.google.common.cache.Cache;
import com.google.common.cache.CacheBuilder;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.TimeUnit;
import java.util.stream.Stream;
import javax.annotation.ParametersAreNonnullByDefault;
import net.minecraft.world.entity.Entity;
import net.minecraft.world.entity.LivingEntity;
import net.minecraft.world.item.ItemStack;
import net.minecraftforge.event.entity.player.AttackEntityEvent;
import se.mickelus.tetra.items.modular.IModularItem;

@ParametersAreNonnullByDefault
public class ComboPoints {

    private static final Cache<Integer, Integer> cache = CacheBuilder.newBuilder().maximumSize(100L).expireAfterWrite(30L, TimeUnit.SECONDS).build();

    private static int getIdentifier(Entity entity) {
        return entity.level().isClientSide ? -entity.getId() : entity.getId();
    }

    public static void increment(Entity entity) {
        try {
            int identifier = getIdentifier(entity);
            int points = Math.min(5, (Integer) cache.get(identifier, () -> 0) + 1);
            cache.put(identifier, points);
        } catch (ExecutionException var3) {
            var3.printStackTrace();
        }
    }

    public static int get(Entity entity) {
        try {
            return (Integer) cache.get(getIdentifier(entity), () -> 0);
        } catch (ExecutionException var2) {
            var2.printStackTrace();
            return 0;
        }
    }

    public static int getAndReset(Entity entity) {
        try {
            int points = (Integer) cache.get(getIdentifier(entity), () -> 0);
            reset(entity);
            return points;
        } catch (ExecutionException var2) {
            var2.printStackTrace();
            return 0;
        }
    }

    public static void reset(Entity entity) {
        cache.invalidate(getIdentifier(entity));
    }

    public static boolean canSpend(LivingEntity entity) {
        return Stream.of(entity.getMainHandItem(), entity.getOffhandItem()).filter(itemStack -> itemStack.getItem() instanceof IModularItem).anyMatch(itemStack -> canSpend((IModularItem) itemStack.getItem(), itemStack));
    }

    public static boolean canSpend(IModularItem item, ItemStack itemStack) {
        return item.getEffectLevel(itemStack, ItemEffect.abilityCombo) > 0;
    }

    public static void onAttackEntity(AttackEntityEvent event) {
        if (event.getTarget().isAttackable() && canSpend(event.getEntity()) && (double) event.getEntity().getAttackStrengthScale(0.0F) > 0.9) {
            increment(event.getEntity());
        }
    }
}