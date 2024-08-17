package org.violetmoon.zeta.block;

import net.minecraft.world.level.block.state.BlockBehaviour;
import net.minecraft.world.level.block.state.properties.NoteBlockInstrument;
import net.minecraft.world.level.material.MapColor;
import net.minecraft.world.level.material.PushReaction;

public class OldMaterials {

    public static BlockBehaviour.Properties decoration() {
        return BlockBehaviour.Properties.of().pushReaction(PushReaction.DESTROY);
    }

    public static BlockBehaviour.Properties piston() {
        return BlockBehaviour.Properties.of().mapColor(MapColor.STONE).pushReaction(PushReaction.BLOCK);
    }

    public static BlockBehaviour.Properties glass() {
        return BlockBehaviour.Properties.of().instrument(NoteBlockInstrument.HAT);
    }

    public static BlockBehaviour.Properties stone() {
        return BlockBehaviour.Properties.of().mapColor(MapColor.STONE).instrument(NoteBlockInstrument.BASEDRUM);
    }

    public static BlockBehaviour.Properties wood() {
        return BlockBehaviour.Properties.of().mapColor(MapColor.WOOD).ignitedByLava().instrument(NoteBlockInstrument.BASS);
    }

    public static BlockBehaviour.Properties wool() {
        return BlockBehaviour.Properties.of().mapColor(MapColor.WOOL).ignitedByLava();
    }

    public static BlockBehaviour.Properties grass() {
        return BlockBehaviour.Properties.of().mapColor(MapColor.GRASS);
    }

    public static BlockBehaviour.Properties replaceablePlant() {
        return BlockBehaviour.Properties.of().mapColor(MapColor.PLANT).replaceable().ignitedByLava().pushReaction(PushReaction.DESTROY);
    }
}