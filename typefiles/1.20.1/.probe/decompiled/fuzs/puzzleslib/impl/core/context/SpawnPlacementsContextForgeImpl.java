package fuzs.puzzleslib.impl.core.context;

import fuzs.puzzleslib.api.core.v1.context.SpawnPlacementsContext;
import java.util.Objects;
import net.minecraft.world.entity.EntityType;
import net.minecraft.world.entity.Mob;
import net.minecraft.world.entity.SpawnPlacements;
import net.minecraft.world.level.levelgen.Heightmap;
import net.minecraftforge.event.entity.SpawnPlacementRegisterEvent;

public record SpawnPlacementsContextForgeImpl(SpawnPlacementRegisterEvent evt) implements SpawnPlacementsContext {

    @Override
    public <T extends Mob> void registerSpawnPlacement(EntityType<T> entityType, SpawnPlacements.Type location, Heightmap.Types heightmap, SpawnPlacements.SpawnPredicate<T> spawnPredicate) {
        Objects.requireNonNull(entityType, "entity type is null");
        Objects.requireNonNull(location, "location is null");
        Objects.requireNonNull(heightmap, "heightmap is null");
        Objects.requireNonNull(spawnPredicate, "spawnPredicate is null");
        this.evt.register(entityType, location, heightmap, spawnPredicate, SpawnPlacementRegisterEvent.Operation.REPLACE);
    }
}