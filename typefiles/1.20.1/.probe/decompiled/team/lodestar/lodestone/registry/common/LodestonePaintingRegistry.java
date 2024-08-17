package team.lodestar.lodestone.registry.common;

import net.minecraft.world.entity.decoration.PaintingVariant;
import net.minecraftforge.eventbus.api.IEventBus;
import net.minecraftforge.registries.DeferredRegister;
import net.minecraftforge.registries.ForgeRegistries;

public class LodestonePaintingRegistry {

    public static final DeferredRegister<PaintingVariant> PAINTING_MOTIVES = DeferredRegister.create(ForgeRegistries.PAINTING_VARIANTS, "lodestone");

    public static void register(IEventBus bus) {
        PAINTING_MOTIVES.register(bus);
        PAINTING_MOTIVES.register("lefunny", () -> new PaintingVariant(64, 64));
        PAINTING_MOTIVES.register("microfunny", () -> new PaintingVariant(16, 16));
    }
}