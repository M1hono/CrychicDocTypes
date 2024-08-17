package fr.lucreeper74.createmetallurgy.registries;

import com.simibubi.create.foundation.ponder.PonderLocalization;
import com.simibubi.create.foundation.ponder.PonderRegistrationHelper;
import fr.lucreeper74.createmetallurgy.CreateMetallurgy;
import fr.lucreeper74.createmetallurgy.ponders.CastingScenes;
import fr.lucreeper74.createmetallurgy.ponders.FoundryScenes;
import fr.lucreeper74.createmetallurgy.ponders.LightBulbScenes;

public class CMPonders {

    static final PonderRegistrationHelper HELPER = new PonderRegistrationHelper("createmetallurgy");

    public static void register() {
        HELPER.forComponents(CMBlocks.FOUNDRY_BASIN_BLOCK).addStoryBoard("foundry_basin", FoundryScenes::foundryBasin).addStoryBoard("foundry_mixer", FoundryScenes::alloying);
        HELPER.forComponents(CMBlocks.FOUNDRY_MIXER_BLOCK).addStoryBoard("foundry_mixer", FoundryScenes::alloying);
        HELPER.forComponents(CMBlocks.CASTING_BASIN_BLOCK, CMBlocks.CASTING_TABLE_BLOCK).addStoryBoard("casting_blocks", CastingScenes::castingBlocks);
        HELPER.forComponents(CMBlocks.LIGHT_BULBS.toArray()).addStoryBoard("light_bulbs", LightBulbScenes::lightBulbScenes);
    }

    public static void registerLang() {
        PonderLocalization.provideRegistrateLang(CreateMetallurgy.REGISTRATE);
    }
}