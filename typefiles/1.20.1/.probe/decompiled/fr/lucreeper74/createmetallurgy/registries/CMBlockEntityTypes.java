package fr.lucreeper74.createmetallurgy.registries;

import com.tterrag.registrate.util.entry.BlockEntityEntry;
import com.tterrag.registrate.util.nullness.NonNullSupplier;
import fr.lucreeper74.createmetallurgy.CreateMetallurgy;
import fr.lucreeper74.createmetallurgy.content.belt_grinder.BeltGrinderBlockEntity;
import fr.lucreeper74.createmetallurgy.content.belt_grinder.BeltGrinderInstance;
import fr.lucreeper74.createmetallurgy.content.belt_grinder.BeltGrinderRenderer;
import fr.lucreeper74.createmetallurgy.content.casting.CastingBlockRenderer;
import fr.lucreeper74.createmetallurgy.content.casting.basin.CastingBasinBlockEntity;
import fr.lucreeper74.createmetallurgy.content.casting.table.CastingTableBlockEntity;
import fr.lucreeper74.createmetallurgy.content.foundry_basin.FoundryBasinBlockEntity;
import fr.lucreeper74.createmetallurgy.content.foundry_basin.FoundryBasinRenderer;
import fr.lucreeper74.createmetallurgy.content.foundry_lid.FoundryLidBlockEntity;
import fr.lucreeper74.createmetallurgy.content.foundry_lid.FoundryLidRenderer;
import fr.lucreeper74.createmetallurgy.content.foundry_mixer.FoundryMixerBlockEntity;
import fr.lucreeper74.createmetallurgy.content.foundry_mixer.FoundryMixerInstance;
import fr.lucreeper74.createmetallurgy.content.foundry_mixer.FoundryMixerRenderer;
import fr.lucreeper74.createmetallurgy.content.glassed_foundry_lid.GlassedFoundryLidBlockEntity;
import fr.lucreeper74.createmetallurgy.content.light_bulb.LightBulbBlockEntity;
import fr.lucreeper74.createmetallurgy.content.light_bulb.LightBulbRenderer;

public class CMBlockEntityTypes {

    public static final BlockEntityEntry<FoundryBasinBlockEntity> FOUNDRY_BASIN = CreateMetallurgy.REGISTRATE.blockEntity("foundry_basin", FoundryBasinBlockEntity::new).validBlocks(new NonNullSupplier[] { CMBlocks.FOUNDRY_BASIN_BLOCK }).renderer(() -> FoundryBasinRenderer::new).register();

    public static final BlockEntityEntry<CastingBasinBlockEntity> CASTING_BASIN = CreateMetallurgy.REGISTRATE.blockEntity("casting_basin", CastingBasinBlockEntity::new).validBlocks(new NonNullSupplier[] { CMBlocks.CASTING_BASIN_BLOCK }).renderer(() -> CastingBlockRenderer::new).register();

    public static final BlockEntityEntry<CastingTableBlockEntity> CASTING_TABLE = CreateMetallurgy.REGISTRATE.blockEntity("casting_table", CastingTableBlockEntity::new).validBlocks(new NonNullSupplier[] { CMBlocks.CASTING_TABLE_BLOCK }).renderer(() -> CastingBlockRenderer::new).register();

    public static final BlockEntityEntry<FoundryLidBlockEntity> FOUNDRY_LID = CreateMetallurgy.REGISTRATE.blockEntity("foundry_top", FoundryLidBlockEntity::new).validBlocks(new NonNullSupplier[] { CMBlocks.FOUNDRY_LID_BLOCK }).renderer(() -> FoundryLidRenderer::new).register();

    public static final BlockEntityEntry<GlassedFoundryLidBlockEntity> GLASSED_ALLOYER_TOP = CreateMetallurgy.REGISTRATE.blockEntity("glassed_foundry_top", GlassedFoundryLidBlockEntity::new).validBlocks(new NonNullSupplier[] { CMBlocks.GLASSED_FOUNDRY_LID_BLOCK }).register();

    public static final BlockEntityEntry<FoundryMixerBlockEntity> FOUNDRY_MIXER = CreateMetallurgy.REGISTRATE.blockEntity("foundry_mixer", FoundryMixerBlockEntity::new).instance(() -> FoundryMixerInstance::new).validBlocks(new NonNullSupplier[] { CMBlocks.FOUNDRY_MIXER_BLOCK }).renderer(() -> FoundryMixerRenderer::new).register();

    public static final BlockEntityEntry<BeltGrinderBlockEntity> BELT_GRINDER = CreateMetallurgy.REGISTRATE.blockEntity("mechanical_belt_grinder", BeltGrinderBlockEntity::new).instance(() -> BeltGrinderInstance::new).validBlocks(new NonNullSupplier[] { CMBlocks.BELT_GRINDER_BLOCK }).renderer(() -> BeltGrinderRenderer::new).register();

    public static final BlockEntityEntry<LightBulbBlockEntity> LIGHT_BULB = CreateMetallurgy.REGISTRATE.blockEntity("light_bulb", LightBulbBlockEntity::new).validBlocks(CMBlocks.LIGHT_BULBS.toArray()).renderer(() -> LightBulbRenderer::new).register();

    public static void register() {
    }
}