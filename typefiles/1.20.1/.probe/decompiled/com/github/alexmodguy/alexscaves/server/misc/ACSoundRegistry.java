package com.github.alexmodguy.alexscaves.server.misc;

import net.minecraft.resources.ResourceLocation;
import net.minecraft.sounds.SoundEvent;
import net.minecraftforge.registries.DeferredRegister;
import net.minecraftforge.registries.ForgeRegistries;
import net.minecraftforge.registries.RegistryObject;

public class ACSoundRegistry {

    public static final DeferredRegister<SoundEvent> DEF_REG = DeferredRegister.create(ForgeRegistries.SOUND_EVENTS, "alexscaves");

    public static final RegistryObject<SoundEvent> MAGNETIC_CAVES_MUSIC = createSoundEvent("magnetic_caves_music");

    public static final RegistryObject<SoundEvent> PRIMORDIAL_CAVES_MUSIC = createSoundEvent("primordial_caves_music");

    public static final RegistryObject<SoundEvent> TOXIC_CAVES_MUSIC = createSoundEvent("toxic_caves_music");

    public static final RegistryObject<SoundEvent> ABYSSAL_CHASM_MUSIC = createSoundEvent("abyssal_chasm_music");

    public static final RegistryObject<SoundEvent> FORLORN_HOLLOWS_MUSIC = createSoundEvent("forlorn_hollows_music");

    public static final RegistryObject<SoundEvent> LUXTRUCTOSAURUS_BOSS_MUSIC = createSoundEvent("luxtructosaurus_boss_music");

    public static final RegistryObject<SoundEvent> FUSIONC_MUSIC_DISC = createSoundEvent("fusion_music_disc");

    public static final RegistryObject<SoundEvent> MAGNETIC_CAVES_AMBIENCE = createSoundEvent("magnetic_caves_ambience");

    public static final RegistryObject<SoundEvent> MAGNETIC_CAVES_AMBIENCE_ADDITIONS = createSoundEvent("magnetic_caves_ambience_additions");

    public static final RegistryObject<SoundEvent> MAGNETIC_CAVES_AMBIENCE_MOOD = createSoundEvent("magnetic_caves_ambience_mood");

    public static final RegistryObject<SoundEvent> PRIMORDIAL_CAVES_AMBIENCE = createSoundEvent("primordial_caves_ambience");

    public static final RegistryObject<SoundEvent> PRIMORDIAL_CAVES_AMBIENCE_ADDITIONS = createSoundEvent("primordial_caves_ambience_additions");

    public static final RegistryObject<SoundEvent> PRIMORDIAL_CAVES_AMBIENCE_MOOD = createSoundEvent("primordial_caves_ambience_mood");

    public static final RegistryObject<SoundEvent> TOXIC_CAVES_AMBIENCE = createSoundEvent("toxic_caves_ambience");

    public static final RegistryObject<SoundEvent> TOXIC_CAVES_AMBIENCE_ADDITIONS = createSoundEvent("toxic_caves_ambience_additions");

    public static final RegistryObject<SoundEvent> TOXIC_CAVES_AMBIENCE_MOOD = createSoundEvent("toxic_caves_ambience_mood");

    public static final RegistryObject<SoundEvent> ABYSSAL_CHASM_AMBIENCE = createSoundEvent("abyssal_chasm_ambience");

    public static final RegistryObject<SoundEvent> ABYSSAL_CHASM_AMBIENCE_ADDITIONS = createSoundEvent("abyssal_chasm_ambience_additions");

    public static final RegistryObject<SoundEvent> ABYSSAL_CHASM_AMBIENCE_MOOD = createSoundEvent("abyssal_chasm_ambience_mood");

    public static final RegistryObject<SoundEvent> FORLORN_HOLLOWS_AMBIENCE = createSoundEvent("forlorn_hollows_ambience");

    public static final RegistryObject<SoundEvent> FORLORN_HOLLOWS_AMBIENCE_ADDITIONS = createSoundEvent("forlorn_hollows_ambience_additions");

    public static final RegistryObject<SoundEvent> FORLORN_HOLLOWS_AMBIENCE_MOOD = createSoundEvent("forlorn_hollows_ambience_mood");

    public static final RegistryObject<SoundEvent> SPELUNKERY_TABLE_TABLET_INSERT = createSoundEvent("spelunkery_table_tablet_insert");

    public static final RegistryObject<SoundEvent> SPELUNKERY_TABLE_TABLET_REMOVE = createSoundEvent("spelunkery_table_tablet_remove");

    public static final RegistryObject<SoundEvent> SPELUNKERY_TABLE_PAPER_INSERT = createSoundEvent("spelunkery_table_paper_insert");

    public static final RegistryObject<SoundEvent> SPELUNKERY_TABLE_PAPER_REMOVE = createSoundEvent("spelunkery_table_paper_remove");

    public static final RegistryObject<SoundEvent> SPELUNKERY_TABLE_CODEX_REMOVE = createSoundEvent("spelunkery_table_codex_remove");

    public static final RegistryObject<SoundEvent> SPELUNKERY_TABLE_SUCCESS = createSoundEvent("spelunkery_table_success");

    public static final RegistryObject<SoundEvent> SPELUNKERY_TABLE_SUCCESS_COMPLETE = createSoundEvent("spelunkery_table_success_complete");

    public static final RegistryObject<SoundEvent> SPELUNKERY_TABLE_CRACK = createSoundEvent("spelunkery_table_crack");

    public static final RegistryObject<SoundEvent> SPELUNKERY_TABLE_FAIL = createSoundEvent("spelunkery_table_fail");

    public static final RegistryObject<SoundEvent> SPELUNKERY_TABLE_ATTEMPT_FAIL = createSoundEvent("spelunkery_table_attempt_fail");

    public static final RegistryObject<SoundEvent> NEODYMIUM_STEP = createSoundEvent("neodymium_step");

    public static final RegistryObject<SoundEvent> NEODYMIUM_PLACE = createSoundEvent("neodymium_place");

    public static final RegistryObject<SoundEvent> NEODYMIUM_BREAK = createSoundEvent("neodymium_break");

    public static final RegistryObject<SoundEvent> NEODYMIUM_BREAKING = createSoundEvent("neodymium_breaking");

    public static final RegistryObject<SoundEvent> METAL_SWARF_STEP = createSoundEvent("metal_swarf_step");

    public static final RegistryObject<SoundEvent> METAL_SWARF_PLACE = createSoundEvent("metal_swarf_place");

    public static final RegistryObject<SoundEvent> METAL_SWARF_BREAK = createSoundEvent("metal_swarf_break");

    public static final RegistryObject<SoundEvent> METAL_SWARF_BREAKING = createSoundEvent("metal_swarf_breaking");

    public static final RegistryObject<SoundEvent> SCRAP_METAL_STEP = createSoundEvent("scrap_metal_step");

    public static final RegistryObject<SoundEvent> SCRAP_METAL_PLACE = createSoundEvent("scrap_metal_place");

    public static final RegistryObject<SoundEvent> SCRAP_METAL_BREAK = createSoundEvent("scrap_metal_break");

    public static final RegistryObject<SoundEvent> SCRAP_METAL_BREAKING = createSoundEvent("scrap_metal_breaking");

    public static final RegistryObject<SoundEvent> METAL_BARREL_LID = createSoundEvent("metal_barrel_lid");

    public static final RegistryObject<SoundEvent> METAL_SCAFFOLDING_CLIMB = createSoundEvent("metal_scaffolding_climb");

    public static final RegistryObject<SoundEvent> AZURE_NEODYMIUM_PUSH_LOOP = createSoundEvent("azure_neodymium_push_loop");

    public static final RegistryObject<SoundEvent> SCARLET_NEODYMIUM_PULL_LOOP = createSoundEvent("scarlet_neodymium_pull_loop");

    public static final RegistryObject<SoundEvent> HOLOGRAM_STOP = createSoundEvent("hologram_stop");

    public static final RegistryObject<SoundEvent> HOLOGRAM_LOOP = createSoundEvent("hologram_loop");

    public static final RegistryObject<SoundEvent> QUARRY_CRUSH = createSoundEvent("quarry_crush");

    public static final RegistryObject<SoundEvent> AMBER_STEP = createSoundEvent("amber_step");

    public static final RegistryObject<SoundEvent> AMBER_PLACE = createSoundEvent("amber_place");

    public static final RegistryObject<SoundEvent> AMBER_BREAK = createSoundEvent("amber_break");

    public static final RegistryObject<SoundEvent> AMBER_BREAKING = createSoundEvent("amber_breaking");

    public static final RegistryObject<SoundEvent> AMBER_MONOLITH_PLACE = createSoundEvent("amber_monolith_place");

    public static final RegistryObject<SoundEvent> AMBER_MONOLITH_SUMMON = createSoundEvent("amber_monolith_summon");

    public static final RegistryObject<SoundEvent> PEWEN_BRANCH_BREAK = createSoundEvent("pewen_branch_break");

    public static final RegistryObject<SoundEvent> FLOOD_BASALT_STEP = createSoundEvent("flood_basalt_step");

    public static final RegistryObject<SoundEvent> FLOOD_BASALT_PLACE = createSoundEvent("flood_basalt_place");

    public static final RegistryObject<SoundEvent> FLOOD_BASALT_BREAK = createSoundEvent("flood_basalt_break");

    public static final RegistryObject<SoundEvent> FLOOD_BASALT_BREAKING = createSoundEvent("flood_basalt_breaking");

    public static final RegistryObject<SoundEvent> PRIMAL_MAGMA_FISSURE_CLOSE = createSoundEvent("primal_magma_fissure_close");

    public static final RegistryObject<SoundEvent> ACID_BURN = createSoundEvent("acid_burn");

    public static final RegistryObject<SoundEvent> ACID_CORROSION = createSoundEvent("acid_corrosion");

    public static final RegistryObject<SoundEvent> ACID_IDLE = createSoundEvent("acid_idle");

    public static final RegistryObject<SoundEvent> ACID_SWIM = createSoundEvent("acid_swim");

    public static final RegistryObject<SoundEvent> ACID_SUBMERGE = createSoundEvent("acid_submerge");

    public static final RegistryObject<SoundEvent> ACID_UNSUBMERGE = createSoundEvent("acid_unsubmerge");

    public static final RegistryObject<SoundEvent> GEOTHERMAL_VENT_BUBBLE = createSoundEvent("geothermal_vent_bubble");

    public static final RegistryObject<SoundEvent> GEOTHERMAL_VENT_BUBBLE_UNDERWATER = createSoundEvent("geothermal_vent_bubble_underwater");

    public static final RegistryObject<SoundEvent> RADROCK_STEP = createSoundEvent("radrock_step");

    public static final RegistryObject<SoundEvent> RADROCK_PLACE = createSoundEvent("radrock_place");

    public static final RegistryObject<SoundEvent> RADROCK_BREAK = createSoundEvent("radrock_break");

    public static final RegistryObject<SoundEvent> RADROCK_BREAKING = createSoundEvent("radrock_breaking");

    public static final RegistryObject<SoundEvent> SULFUR_STEP = createSoundEvent("sulfur_step");

    public static final RegistryObject<SoundEvent> SULFUR_PLACE = createSoundEvent("sulfur_place");

    public static final RegistryObject<SoundEvent> SULFUR_BREAK = createSoundEvent("sulfur_break");

    public static final RegistryObject<SoundEvent> SULFUR_BREAKING = createSoundEvent("sulfur_breaking");

    public static final RegistryObject<SoundEvent> URANIUM_STEP = createSoundEvent("uranium_step");

    public static final RegistryObject<SoundEvent> URANIUM_PLACE = createSoundEvent("uranium_place");

    public static final RegistryObject<SoundEvent> URANIUM_BREAK = createSoundEvent("uranium_break");

    public static final RegistryObject<SoundEvent> URANIUM_BREAKING = createSoundEvent("uranium_breaking");

    public static final RegistryObject<SoundEvent> URANIUM_HUM = createSoundEvent("uranium_hum");

    public static final RegistryObject<SoundEvent> HAZMAT_BLOCK_STEP = createSoundEvent("hazmat_block_step");

    public static final RegistryObject<SoundEvent> HAZMAT_BLOCK_PLACE = createSoundEvent("hazmat_block_place");

    public static final RegistryObject<SoundEvent> HAZMAT_BLOCK_BREAK = createSoundEvent("hazmat_block_break");

    public static final RegistryObject<SoundEvent> HAZMAT_BLOCK_BREAKING = createSoundEvent("hazmat_block_breaking");

    public static final RegistryObject<SoundEvent> CINDER_BLOCK_STEP = createSoundEvent("cinder_block_step");

    public static final RegistryObject<SoundEvent> CINDER_BLOCK_PLACE = createSoundEvent("cinder_block_place");

    public static final RegistryObject<SoundEvent> CINDER_BLOCK_BREAK = createSoundEvent("cinder_block_break");

    public static final RegistryObject<SoundEvent> CINDER_BLOCK_BREAKING = createSoundEvent("cinder_block_breaking");

    public static final RegistryObject<SoundEvent> UNREFINED_WASTE_STEP = createSoundEvent("unrefined_waste_step");

    public static final RegistryObject<SoundEvent> UNREFINED_WASTE_PLACE = createSoundEvent("unrefined_waste_place");

    public static final RegistryObject<SoundEvent> UNREFINED_WASTE_BREAK = createSoundEvent("unrefined_waste_break");

    public static final RegistryObject<SoundEvent> UNREFINED_WASTE_BREAKING = createSoundEvent("unrefined_waste_breaking");

    public static final RegistryObject<SoundEvent> NUCLEAR_BOMB_STEP = createSoundEvent("nuclear_bomb_step");

    public static final RegistryObject<SoundEvent> NUCLEAR_BOMB_PLACE = createSoundEvent("nuclear_bomb_place");

    public static final RegistryObject<SoundEvent> NUCLEAR_BOMB_BREAK = createSoundEvent("nuclear_bomb_break");

    public static final RegistryObject<SoundEvent> NUCLEAR_BOMB_BREAKING = createSoundEvent("nuclear_bomb_breaking");

    public static final RegistryObject<SoundEvent> NUCLEAR_BOMB_DEFUSE = createSoundEvent("nuclear_bomb_defuse");

    public static final RegistryObject<SoundEvent> NUCLEAR_FURNACE_ACTIVE = createSoundEvent("nuclear_furnace_active");

    public static final RegistryObject<SoundEvent> NUCLEAR_FURNACE_ACTIVE_SUBCRITICAL = createSoundEvent("nuclear_furnace_active_subcritical");

    public static final RegistryObject<SoundEvent> NUCLEAR_FURNACE_ACTIVE_CRITICAL = createSoundEvent("nuclear_furnace_active_critical");

    public static final RegistryObject<SoundEvent> NUCLEAR_FURNACE_ACTIVE_SUPERCRITICAL = createSoundEvent("nuclear_furnace_active_supercritical");

    public static final RegistryObject<SoundEvent> TUBE_WORM_STEP = createSoundEvent("tube_worm_step");

    public static final RegistryObject<SoundEvent> TUBE_WORM_PLACE = createSoundEvent("tube_worm_place");

    public static final RegistryObject<SoundEvent> TUBE_WORM_BREAK = createSoundEvent("tube_worm_break");

    public static final RegistryObject<SoundEvent> TUBE_WORM_BREAKING = createSoundEvent("tube_worm_breaking");

    public static final RegistryObject<SoundEvent> ABYSSMARINE_GLOW_ON = createSoundEvent("abyssmarine_glow_on");

    public static final RegistryObject<SoundEvent> ABYSSMARINE_GLOW_OFF = createSoundEvent("abyssmarine_glow_off");

    public static final RegistryObject<SoundEvent> DRAIN_START = createSoundEvent("drain_start");

    public static final RegistryObject<SoundEvent> DRAIN_STOP = createSoundEvent("drain_stop");

    public static final RegistryObject<SoundEvent> COPPER_VALVE_CREAK_ON = createSoundEvent("copper_valve_creak_on");

    public static final RegistryObject<SoundEvent> COPPER_VALVE_CREAK_OFF = createSoundEvent("copper_valve_creak_off");

    public static final RegistryObject<SoundEvent> THORNWOOD_BRANCH_BREAK = createSoundEvent("thornwood_branch_break");

    public static final RegistryObject<SoundEvent> PEERING_COPROLITH_STEP = createSoundEvent("peering_coprolith_step");

    public static final RegistryObject<SoundEvent> PEERING_COPROLITH_PLACE = createSoundEvent("peering_coprolith_place");

    public static final RegistryObject<SoundEvent> PEERING_COPROLITH_BREAK = createSoundEvent("peering_coprolith_break");

    public static final RegistryObject<SoundEvent> PEERING_COPROLITH_BREAKING = createSoundEvent("peering_coprolith_breaking");

    public static final RegistryObject<SoundEvent> MOTH_BALL_PLACE = createSoundEvent("moth_ball_place");

    public static final RegistryObject<SoundEvent> BEHOLDER_STEP = createSoundEvent("beholder_step");

    public static final RegistryObject<SoundEvent> BEHOLDER_PLACE = createSoundEvent("beholder_place");

    public static final RegistryObject<SoundEvent> BEHOLDER_BREAK = createSoundEvent("beholder_break");

    public static final RegistryObject<SoundEvent> BEHOLDER_BREAKING = createSoundEvent("beholder_breaking");

    public static final RegistryObject<SoundEvent> BEHOLDER_IDLE = createSoundEvent("beholder_idle");

    public static final RegistryObject<SoundEvent> BEHOLDER_VIEW_IDLE = createSoundEvent("beholder_view_idle");

    public static final RegistryObject<SoundEvent> BEHOLDER_ENTER = createSoundEvent("beholder_enter");

    public static final RegistryObject<SoundEvent> BEHOLDER_EXIT = createSoundEvent("beholder_exit");

    public static final RegistryObject<SoundEvent> TELETOR_IDLE = createSoundEvent("teletor_idle");

    public static final RegistryObject<SoundEvent> TELETOR_HURT = createSoundEvent("teletor_hurt");

    public static final RegistryObject<SoundEvent> TELETOR_DEATH = createSoundEvent("teletor_death");

    public static final RegistryObject<SoundEvent> TELETOR_FLOAT = createSoundEvent("teletor_float");

    public static final RegistryObject<SoundEvent> MAGNETRON_IDLE = createSoundEvent("magnetron_idle");

    public static final RegistryObject<SoundEvent> MAGNETRON_HURT = createSoundEvent("magnetron_hurt");

    public static final RegistryObject<SoundEvent> MAGNETRON_DEATH = createSoundEvent("magnetron_death");

    public static final RegistryObject<SoundEvent> MAGNETRON_ATTACK = createSoundEvent("magnetron_attack");

    public static final RegistryObject<SoundEvent> MAGNETRON_ROLL = createSoundEvent("magnetron_roll");

    public static final RegistryObject<SoundEvent> MAGNETRON_STEP = createSoundEvent("magnetron_step");

    public static final RegistryObject<SoundEvent> MAGNETRON_ASSEMBLE = createSoundEvent("magnetron_assemble");

    public static final RegistryObject<SoundEvent> BOUNDROID_IDLE = createSoundEvent("boundroid_idle");

    public static final RegistryObject<SoundEvent> BOUNDROID_HURT = createSoundEvent("boundroid_hurt");

    public static final RegistryObject<SoundEvent> BOUNDROID_DEATH = createSoundEvent("boundroid_death");

    public static final RegistryObject<SoundEvent> BOUNDROID_DAZED = createSoundEvent("boundroid_dazed");

    public static final RegistryObject<SoundEvent> BOUNDROID_SLAM = createSoundEvent("boundroid_slam");

    public static final RegistryObject<SoundEvent> BOUNDROID_CHAIN_LOOP = createSoundEvent("boundroid_chain_loop");

    public static final RegistryObject<SoundEvent> FERROUSLIME_HURT = createSoundEvent("ferrouslime_hurt");

    public static final RegistryObject<SoundEvent> FERROUSLIME_DEATH = createSoundEvent("ferrouslime_death");

    public static final RegistryObject<SoundEvent> FERROUSLIME_COMBINE = createSoundEvent("ferrouslime_combine");

    public static final RegistryObject<SoundEvent> FERROUSLIME_MOVE_LOOP = createSoundEvent("ferrouslime_move_loop");

    public static final RegistryObject<SoundEvent> NOTOR_IDLE = createSoundEvent("notor_idle");

    public static final RegistryObject<SoundEvent> NOTOR_HURT = createSoundEvent("notor_hurt");

    public static final RegistryObject<SoundEvent> NOTOR_DEATH = createSoundEvent("notor_death");

    public static final RegistryObject<SoundEvent> NOTOR_FLYING = createSoundEvent("notor_flying");

    public static final RegistryObject<SoundEvent> SUBTERRANODON_IDLE = createSoundEvent("subterranodon_idle");

    public static final RegistryObject<SoundEvent> SUBTERRANODON_HURT = createSoundEvent("subterranodon_hurt");

    public static final RegistryObject<SoundEvent> SUBTERRANODON_DEATH = createSoundEvent("subterranodon_death");

    public static final RegistryObject<SoundEvent> SUBTERRANODON_FLAP = createSoundEvent("subterranodon_flap");

    public static final RegistryObject<SoundEvent> SUBTERRANODON_ATTACK = createSoundEvent("subterranodon_attack");

    public static final RegistryObject<SoundEvent> VALLUMRAPTOR_IDLE = createSoundEvent("vallumraptor_idle");

    public static final RegistryObject<SoundEvent> VALLUMRAPTOR_HURT = createSoundEvent("vallumraptor_hurt");

    public static final RegistryObject<SoundEvent> VALLUMRAPTOR_DEATH = createSoundEvent("vallumraptor_death");

    public static final RegistryObject<SoundEvent> VALLUMRAPTOR_CALL = createSoundEvent("vallumraptor_call");

    public static final RegistryObject<SoundEvent> VALLUMRAPTOR_ATTACK = createSoundEvent("vallumraptor_attack");

    public static final RegistryObject<SoundEvent> VALLUMRAPTOR_SCRATCH = createSoundEvent("vallumraptor_scratch");

    public static final RegistryObject<SoundEvent> VALLUMRAPTOR_SLEEP = createSoundEvent("vallumraptor_sleep");

    public static final RegistryObject<SoundEvent> GROTTOCERATOPS_IDLE = createSoundEvent("grottoceratops_idle");

    public static final RegistryObject<SoundEvent> GROTTOCERATOPS_HURT = createSoundEvent("grottoceratops_hurt");

    public static final RegistryObject<SoundEvent> GROTTOCERATOPS_DEATH = createSoundEvent("grottoceratops_death");

    public static final RegistryObject<SoundEvent> GROTTOCERATOPS_CALL = createSoundEvent("grottoceratops_call");

    public static final RegistryObject<SoundEvent> GROTTOCERATOPS_ATTACK = createSoundEvent("grottoceratops_attack");

    public static final RegistryObject<SoundEvent> GROTTOCERATOPS_GRAZE = createSoundEvent("grottoceratops_graze");

    public static final RegistryObject<SoundEvent> GROTTOCERATOPS_STEP = createSoundEvent("grottoceratops_step");

    public static final RegistryObject<SoundEvent> TRILOCARIS_HURT = createSoundEvent("trilocaris_hurt");

    public static final RegistryObject<SoundEvent> TRILOCARIS_DEATH = createSoundEvent("trilocaris_death");

    public static final RegistryObject<SoundEvent> TRILOCARIS_STEP = createSoundEvent("trilocaris_step");

    public static final RegistryObject<SoundEvent> TREMORSAURUS_IDLE = createSoundEvent("tremorsaurus_idle");

    public static final RegistryObject<SoundEvent> TREMORSAURUS_HURT = createSoundEvent("tremorsaurus_hurt");

    public static final RegistryObject<SoundEvent> TREMORSAURUS_DEATH = createSoundEvent("tremorsaurus_death");

    public static final RegistryObject<SoundEvent> TREMORSAURUS_BITE = createSoundEvent("tremorsaurus_bite");

    public static final RegistryObject<SoundEvent> TREMORSAURUS_ROAR = createSoundEvent("tremorsaurus_roar");

    public static final RegistryObject<SoundEvent> TREMORSAURUS_THROW = createSoundEvent("tremorsaurus_throw");

    public static final RegistryObject<SoundEvent> TREMORSAURUS_STOMP = createSoundEvent("tremorsaurus_stomp");

    public static final RegistryObject<SoundEvent> RELICHEIRUS_IDLE = createSoundEvent("relicheirus_idle");

    public static final RegistryObject<SoundEvent> RELICHEIRUS_HURT = createSoundEvent("relicheirus_hurt");

    public static final RegistryObject<SoundEvent> RELICHEIRUS_DEATH = createSoundEvent("relicheirus_death");

    public static final RegistryObject<SoundEvent> RELICHEIRUS_SCRATCH = createSoundEvent("relicheirus_scratch");

    public static final RegistryObject<SoundEvent> RELICHEIRUS_STEP = createSoundEvent("relicheirus_step");

    public static final RegistryObject<SoundEvent> RELICHEIRUS_TOPPLE = createSoundEvent("relicheirus_topple");

    public static final RegistryObject<SoundEvent> LUXTRUCTOSAURUS_IDLE = createSoundEvent("luxtructosaurus_idle");

    public static final RegistryObject<SoundEvent> LUXTRUCTOSAURUS_HURT = createSoundEvent("luxtructosaurus_hurt");

    public static final RegistryObject<SoundEvent> LUXTRUCTOSAURUS_DEATH = createSoundEvent("luxtructosaurus_death");

    public static final RegistryObject<SoundEvent> LUXTRUCTOSAURUS_SNORT = createSoundEvent("luxtructosaurus_snort");

    public static final RegistryObject<SoundEvent> LUXTRUCTOSAURUS_STEP = createSoundEvent("luxtructosaurus_step");

    public static final RegistryObject<SoundEvent> LUXTRUCTOSAURUS_STOMP = createSoundEvent("luxtructosaurus_stomp");

    public static final RegistryObject<SoundEvent> LUXTRUCTOSAURUS_ROAR = createSoundEvent("luxtructosaurus_roar");

    public static final RegistryObject<SoundEvent> LUXTRUCTOSAURUS_ATTACK_STOMP = createSoundEvent("luxtructosaurus_attack_stomp");

    public static final RegistryObject<SoundEvent> LUXTRUCTOSAURUS_KICK = createSoundEvent("luxtructosaurus_kick");

    public static final RegistryObject<SoundEvent> LUXTRUCTOSAURUS_TAIL = createSoundEvent("luxtructosaurus_tail");

    public static final RegistryObject<SoundEvent> LUXTRUCTOSAURUS_BREATH = createSoundEvent("luxtructosaurus_breath");

    public static final RegistryObject<SoundEvent> LUXTRUCTOSAURUS_SUMMON = createSoundEvent("luxtructosaurus_summon");

    public static final RegistryObject<SoundEvent> LUXTRUCTOSAURUS_JUMP = createSoundEvent("luxtructosaurus_jump");

    public static final RegistryObject<SoundEvent> ATLATITAN_IDLE = createSoundEvent("atlatitan_idle");

    public static final RegistryObject<SoundEvent> ATLATITAN_HURT = createSoundEvent("atlatitan_hurt");

    public static final RegistryObject<SoundEvent> ATLATITAN_DEATH = createSoundEvent("atlatitan_death");

    public static final RegistryObject<SoundEvent> ATLATITAN_STEP = createSoundEvent("atlatitan_step");

    public static final RegistryObject<SoundEvent> ATLATITAN_STOMP = createSoundEvent("atlatitan_stomp");

    public static final RegistryObject<SoundEvent> ATLATITAN_KICK = createSoundEvent("atlatitan_kick");

    public static final RegistryObject<SoundEvent> ATLATITAN_TAIL = createSoundEvent("atlatitan_tail");

    public static final RegistryObject<SoundEvent> NUCLEEPER_IDLE = createSoundEvent("nucleeper_idle");

    public static final RegistryObject<SoundEvent> NUCLEEPER_HURT = createSoundEvent("nucleeper_hurt");

    public static final RegistryObject<SoundEvent> NUCLEEPER_DEATH = createSoundEvent("nucleeper_death");

    public static final RegistryObject<SoundEvent> NUCLEEPER_STEP = createSoundEvent("nucleeper_step");

    public static final RegistryObject<SoundEvent> NUCLEEPER_CHARGE = createSoundEvent("nucleeper_charge");

    public static final RegistryObject<SoundEvent> RADGILL_HURT = createSoundEvent("radgill_hurt");

    public static final RegistryObject<SoundEvent> RADGILL_FLOP = createSoundEvent("radgill_flop");

    public static final RegistryObject<SoundEvent> BRAINIAC_IDLE = createSoundEvent("brainiac_idle");

    public static final RegistryObject<SoundEvent> BRAINIAC_HURT = createSoundEvent("brainiac_hurt");

    public static final RegistryObject<SoundEvent> BRAINIAC_DEATH = createSoundEvent("brainiac_death");

    public static final RegistryObject<SoundEvent> BRAINIAC_ATTACK = createSoundEvent("brainiac_attack");

    public static final RegistryObject<SoundEvent> BRAINIAC_LICK = createSoundEvent("brainiac_lick");

    public static final RegistryObject<SoundEvent> BRAINIAC_THROW = createSoundEvent("brainiac_throw");

    public static final RegistryObject<SoundEvent> BRAINIAC_STEP = createSoundEvent("brainiac_step");

    public static final RegistryObject<SoundEvent> GAMMAROACH_IDLE = createSoundEvent("gammaroach_idle");

    public static final RegistryObject<SoundEvent> GAMMAROACH_HURT = createSoundEvent("gammaroach_hurt");

    public static final RegistryObject<SoundEvent> GAMMAROACH_DEATH = createSoundEvent("gammaroach_death");

    public static final RegistryObject<SoundEvent> GAMMAROACH_ATTACK = createSoundEvent("gammaroach_attack");

    public static final RegistryObject<SoundEvent> GAMMAROACH_SPRAY = createSoundEvent("gammaroach_spray");

    public static final RegistryObject<SoundEvent> GAMMAROACH_STEP = createSoundEvent("gammaroach_step");

    public static final RegistryObject<SoundEvent> RAYCAT_IDLE = createSoundEvent("raycat_idle");

    public static final RegistryObject<SoundEvent> RAYCAT_TAME_IDLE = createSoundEvent("raycat_tame_idle");

    public static final RegistryObject<SoundEvent> RAYCAT_HURT = createSoundEvent("raycat_hurt");

    public static final RegistryObject<SoundEvent> RAYCAT_EAT = createSoundEvent("raycat_eat");

    public static final RegistryObject<SoundEvent> RAYCAT_ABSORB = createSoundEvent("raycat_absorb");

    public static final RegistryObject<SoundEvent> TREMORZILLA_IDLE = createSoundEvent("tremorzilla_idle");

    public static final RegistryObject<SoundEvent> TREMORZILLA_HURT = createSoundEvent("tremorzilla_hurt");

    public static final RegistryObject<SoundEvent> TREMORZILLA_DEATH = createSoundEvent("tremorzilla_death");

    public static final RegistryObject<SoundEvent> TREMORZILLA_STOMP = createSoundEvent("tremorzilla_stomp");

    public static final RegistryObject<SoundEvent> TREMORZILLA_BEAM_START = createSoundEvent("tremorzilla_beam_start");

    public static final RegistryObject<SoundEvent> TREMORZILLA_BEAM_END = createSoundEvent("tremorzilla_beam_end");

    public static final RegistryObject<SoundEvent> TREMORZILLA_BEAM_LOOP = createSoundEvent("tremorzilla_beam_loop");

    public static final RegistryObject<SoundEvent> TREMORZILLA_CHARGE_NORMAL = createSoundEvent("tremorzilla_charge_normal");

    public static final RegistryObject<SoundEvent> TREMORZILLA_CHARGE_COMPLETE = createSoundEvent("tremorzilla_charge_complete");

    public static final RegistryObject<SoundEvent> TREMORZILLA_ROAR = createSoundEvent("tremorzilla_roar");

    public static final RegistryObject<SoundEvent> TREMORZILLA_EAT = createSoundEvent("tremorzilla_eat");

    public static final RegistryObject<SoundEvent> TREMORZILLA_BITE = createSoundEvent("tremorzilla_bite");

    public static final RegistryObject<SoundEvent> TREMORZILLA_SCRATCH_ATTACK = createSoundEvent("tremorzilla_scratch_attack");

    public static final RegistryObject<SoundEvent> TREMORZILLA_STOMP_ATTACK = createSoundEvent("tremorzilla_stomp_attack");

    public static final RegistryObject<SoundEvent> TREMORZILLA_TAIL_ATTACK = createSoundEvent("tremorzilla_tail_attack");

    public static final RegistryObject<SoundEvent> LANTERNFISH_HURT = createSoundEvent("lanternfish_hurt");

    public static final RegistryObject<SoundEvent> LANTERNFISH_FLOP = createSoundEvent("lanternfish_flop");

    public static final RegistryObject<SoundEvent> SEA_PIG_IDLE = createSoundEvent("sea_pig_idle");

    public static final RegistryObject<SoundEvent> SEA_PIG_HURT = createSoundEvent("sea_pig_hurt");

    public static final RegistryObject<SoundEvent> SEA_PIG_DEATH = createSoundEvent("sea_pig_death");

    public static final RegistryObject<SoundEvent> SEA_PIG_EAT = createSoundEvent("sea_pig_eat");

    public static final RegistryObject<SoundEvent> HULLBREAKER_IDLE = createSoundEvent("hullbreaker_idle");

    public static final RegistryObject<SoundEvent> HULLBREAKER_HURT = createSoundEvent("hullbreaker_hurt");

    public static final RegistryObject<SoundEvent> HULLBREAKER_DEATH = createSoundEvent("hullbreaker_death");

    public static final RegistryObject<SoundEvent> HULLBREAKER_LAND_IDLE = createSoundEvent("hullbreaker_land_idle");

    public static final RegistryObject<SoundEvent> HULLBREAKER_LAND_HURT = createSoundEvent("hullbreaker_land_hurt");

    public static final RegistryObject<SoundEvent> HULLBREAKER_LAND_DEATH = createSoundEvent("hullbreaker_land_death");

    public static final RegistryObject<SoundEvent> HULLBREAKER_ATTACK = createSoundEvent("hullbreaker_attack");

    public static final RegistryObject<SoundEvent> GOSSAMER_WORM_IDLE = createSoundEvent("gossamer_worm_idle");

    public static final RegistryObject<SoundEvent> GOSSAMER_WORM_HURT = createSoundEvent("gossamer_worm_hurt");

    public static final RegistryObject<SoundEvent> GOSSAMER_WORM_DEATH = createSoundEvent("gossamer_worm_death");

    public static final RegistryObject<SoundEvent> DEEP_ONE_IDLE = createSoundEvent("deep_one_idle");

    public static final RegistryObject<SoundEvent> DEEP_ONE_HURT = createSoundEvent("deep_one_hurt");

    public static final RegistryObject<SoundEvent> DEEP_ONE_DEATH = createSoundEvent("deep_one_death");

    public static final RegistryObject<SoundEvent> DEEP_ONE_ADMIRE = createSoundEvent("deep_one_admire");

    public static final RegistryObject<SoundEvent> DEEP_ONE_HOSTILE = createSoundEvent("deep_one_hostile");

    public static final RegistryObject<SoundEvent> DEEP_ONE_ATTACK = createSoundEvent("deep_one_attack");

    public static final RegistryObject<SoundEvent> DEEP_ONE_KNIGHT_IDLE = createSoundEvent("deep_one_knight_idle");

    public static final RegistryObject<SoundEvent> DEEP_ONE_KNIGHT_HURT = createSoundEvent("deep_one_knight_hurt");

    public static final RegistryObject<SoundEvent> DEEP_ONE_KNIGHT_DEATH = createSoundEvent("deep_one_knight_death");

    public static final RegistryObject<SoundEvent> DEEP_ONE_KNIGHT_ADMIRE = createSoundEvent("deep_one_knight_admire");

    public static final RegistryObject<SoundEvent> DEEP_ONE_KNIGHT_HOSTILE = createSoundEvent("deep_one_knight_hostile");

    public static final RegistryObject<SoundEvent> DEEP_ONE_KNIGHT_ATTACK = createSoundEvent("deep_one_knight_attack");

    public static final RegistryObject<SoundEvent> DEEP_ONE_MAGE_IDLE = createSoundEvent("deep_one_mage_idle");

    public static final RegistryObject<SoundEvent> DEEP_ONE_MAGE_HURT = createSoundEvent("deep_one_mage_hurt");

    public static final RegistryObject<SoundEvent> DEEP_ONE_MAGE_DEATH = createSoundEvent("deep_one_mage_death");

    public static final RegistryObject<SoundEvent> DEEP_ONE_MAGE_ADMIRE = createSoundEvent("deep_one_mage_admire");

    public static final RegistryObject<SoundEvent> DEEP_ONE_MAGE_HOSTILE = createSoundEvent("deep_one_mage_hostile");

    public static final RegistryObject<SoundEvent> DEEP_ONE_MAGE_ATTACK = createSoundEvent("deep_one_mage_attack");

    public static final RegistryObject<SoundEvent> MINE_GUARDIAN_IDLE = createSoundEvent("mine_guardian_idle");

    public static final RegistryObject<SoundEvent> MINE_GUARDIAN_HURT = createSoundEvent("mine_guardian_hurt");

    public static final RegistryObject<SoundEvent> MINE_GUARDIAN_DEATH = createSoundEvent("mine_guardian_death");

    public static final RegistryObject<SoundEvent> MINE_GUARDIAN_EXPLODE = createSoundEvent("mine_guardian_explode");

    public static final RegistryObject<SoundEvent> MINE_GUARDIAN_LAND_IDLE = createSoundEvent("mine_guardian_land_idle");

    public static final RegistryObject<SoundEvent> MINE_GUARDIAN_LAND_HURT = createSoundEvent("mine_guardian_land_hurt");

    public static final RegistryObject<SoundEvent> MINE_GUARDIAN_LAND_DEATH = createSoundEvent("mine_guardian_land_death");

    public static final RegistryObject<SoundEvent> MINE_GUARDIAN_LAND_EXPLODE = createSoundEvent("mine_guardian_land_explode");

    public static final RegistryObject<SoundEvent> MINE_GUARDIAN_SCAN = createSoundEvent("mine_guardian_scan");

    public static final RegistryObject<SoundEvent> MINE_GUARDIAN_FLOP = createSoundEvent("mine_guardian_flop");

    public static final RegistryObject<SoundEvent> TRIPODFISH_HURT = createSoundEvent("tripodfish_hurt");

    public static final RegistryObject<SoundEvent> TRIPODFISH_FLOP = createSoundEvent("tripodfish_flop");

    public static final RegistryObject<SoundEvent> GLOOMOTH_HURT = createSoundEvent("gloomoth_hurt");

    public static final RegistryObject<SoundEvent> GLOOMOTH_DEATH = createSoundEvent("gloomoth_death");

    public static final RegistryObject<SoundEvent> GLOOMOTH_FLAP = createSoundEvent("gloomoth_flap");

    public static final RegistryObject<SoundEvent> UNDERZEALOT_IDLE = createSoundEvent("underzealot_idle");

    public static final RegistryObject<SoundEvent> UNDERZEALOT_HURT = createSoundEvent("underzealot_hurt");

    public static final RegistryObject<SoundEvent> UNDERZEALOT_DEATH = createSoundEvent("underzealot_death");

    public static final RegistryObject<SoundEvent> UNDERZEALOT_ATTACK = createSoundEvent("underzealot_attack");

    public static final RegistryObject<SoundEvent> UNDERZEALOT_CHANT = createSoundEvent("underzealot_chant");

    public static final RegistryObject<SoundEvent> UNDERZEALOT_DIG = createSoundEvent("underzealot_dig");

    public static final RegistryObject<SoundEvent> UNDERZEALOT_TRANSFORMATION = createSoundEvent("underzealot_transformation");

    public static final RegistryObject<SoundEvent> WATCHER_IDLE = createSoundEvent("watcher_idle");

    public static final RegistryObject<SoundEvent> WATCHER_HURT = createSoundEvent("watcher_hurt");

    public static final RegistryObject<SoundEvent> WATCHER_DEATH = createSoundEvent("watcher_death");

    public static final RegistryObject<SoundEvent> WATCHER_ATTACK = createSoundEvent("watcher_attack");

    public static final RegistryObject<SoundEvent> WATCHER_SCARE = createSoundEvent("watcher_scare");

    public static final RegistryObject<SoundEvent> WATCHER_SPAWN = createSoundEvent("watcher_spawn");

    public static final RegistryObject<SoundEvent> CORRODENT_IDLE = createSoundEvent("corrodent_idle");

    public static final RegistryObject<SoundEvent> CORRODENT_HURT = createSoundEvent("corrodent_hurt");

    public static final RegistryObject<SoundEvent> CORRODENT_DEATH = createSoundEvent("corrodent_death");

    public static final RegistryObject<SoundEvent> CORRODENT_ATTACK = createSoundEvent("corrodent_attack");

    public static final RegistryObject<SoundEvent> CORRODENT_TEETH = createSoundEvent("corrodent_teeth");

    public static final RegistryObject<SoundEvent> CORRODENT_DIG_LOOP = createSoundEvent("corrodent_dig_loop");

    public static final RegistryObject<SoundEvent> CORRODENT_DIG_STOP = createSoundEvent("corrodent_dig_stop");

    public static final RegistryObject<SoundEvent> VESPER_IDLE = createSoundEvent("vesper_idle");

    public static final RegistryObject<SoundEvent> VESPER_HURT = createSoundEvent("vesper_hurt");

    public static final RegistryObject<SoundEvent> VESPER_DEATH = createSoundEvent("vesper_death");

    public static final RegistryObject<SoundEvent> VESPER_QUIET_IDLE = createSoundEvent("vesper_quiet_idle");

    public static final RegistryObject<SoundEvent> VESPER_FLAP = createSoundEvent("vesper_flap");

    public static final RegistryObject<SoundEvent> VESPER_SCREAM = createSoundEvent("vesper_scream");

    public static final RegistryObject<SoundEvent> FORSAKEN_IDLE = createSoundEvent("forsaken_idle");

    public static final RegistryObject<SoundEvent> FORSAKEN_HURT = createSoundEvent("forsaken_hurt");

    public static final RegistryObject<SoundEvent> FORSAKEN_DEATH = createSoundEvent("forsaken_death");

    public static final RegistryObject<SoundEvent> FORSAKEN_SCREECH = createSoundEvent("forsaken_screech");

    public static final RegistryObject<SoundEvent> FORSAKEN_AOE = createSoundEvent("forsaken_aoe");

    public static final RegistryObject<SoundEvent> FORSAKEN_LEAP = createSoundEvent("forsaken_leap");

    public static final RegistryObject<SoundEvent> FORSAKEN_GRAB = createSoundEvent("forsaken_grab");

    public static final RegistryObject<SoundEvent> FORSAKEN_BITE = createSoundEvent("forsaken_bite");

    public static final RegistryObject<SoundEvent> FORSAKEN_STEP = createSoundEvent("forsaken_step");

    public static final RegistryObject<SoundEvent> FORSAKEN_SPAWN = createSoundEvent("forsaken_spawn");

    public static final RegistryObject<SoundEvent> CAVE_BOOK_OPEN = createSoundEvent("cave_book_open");

    public static final RegistryObject<SoundEvent> CAVE_BOOK_CLOSE = createSoundEvent("cave_book_close");

    public static final RegistryObject<SoundEvent> CAVE_BOOK_TURN = createSoundEvent("cave_book_turn");

    public static final RegistryObject<SoundEvent> GALENA_GAUNTLET_STOP = createSoundEvent("galena_gauntlet_stop");

    public static final RegistryObject<SoundEvent> GALENA_GAUNTLET_USE_LOOP = createSoundEvent("galena_gauntlet_use_loop");

    public static final RegistryObject<SoundEvent> SEEKING_ARROW_HIT = createSoundEvent("seeking_arrow_hit");

    public static final RegistryObject<SoundEvent> SEEKING_ARROW_LOCKON = createSoundEvent("seeking_arrow_lockon");

    public static final RegistryObject<SoundEvent> RESITOR_SHIELD_AZURE_LOOP = createSoundEvent("resistor_shield_azure_loop");

    public static final RegistryObject<SoundEvent> RESITOR_SHIELD_SCARLET_LOOP = createSoundEvent("resistor_shield_scarlet_loop");

    public static final RegistryObject<SoundEvent> RESITOR_SHIELD_SLAM = createSoundEvent("resistor_shield_slam");

    public static final RegistryObject<SoundEvent> RESITOR_SHIELD_SPIN = createSoundEvent("resistor_shield_spin");

    public static final RegistryObject<SoundEvent> LIMESTONE_SPEAR_THROW = createSoundEvent("limestone_spear_throw");

    public static final RegistryObject<SoundEvent> LIMESTONE_SPEAR_HIT = createSoundEvent("limestone_spear_hit");

    public static final RegistryObject<SoundEvent> PRIMITIVE_CLUB_HIT = createSoundEvent("primitive_club_hit");

    public static final RegistryObject<SoundEvent> PRIMITIVE_CLUB_MISS = createSoundEvent("primitive_club_miss");

    public static final RegistryObject<SoundEvent> TECTONIC_SHARD_TRANSFORM = createSoundEvent("tectonic_shard_transform");

    public static final RegistryObject<SoundEvent> EXTINCTION_SPEAR_THROW = createSoundEvent("extinction_spear_throw");

    public static final RegistryObject<SoundEvent> EXTINCTION_SPEAR_HIT = createSoundEvent("extinction_spear_hit");

    public static final RegistryObject<SoundEvent> EXTINCTION_SPEAR_SUMMON = createSoundEvent("extinction_spear_summon");

    public static final RegistryObject<SoundEvent> RAYGUN_LOOP = createSoundEvent("raygun_loop");

    public static final RegistryObject<SoundEvent> RAYGUN_RELOAD = createSoundEvent("raygun_reload");

    public static final RegistryObject<SoundEvent> RAYGUN_EMPTY = createSoundEvent("raygun_empty");

    public static final RegistryObject<SoundEvent> RAYGUN_START = createSoundEvent("raygun_start");

    public static final RegistryObject<SoundEvent> MAGIC_CONCH_CAST = createSoundEvent("magic_conch_cast");

    public static final RegistryObject<SoundEvent> MAGIC_CONCH_SUMMON = createSoundEvent("magic_conch_summon");

    public static final RegistryObject<SoundEvent> SEA_STAFF_CAST = createSoundEvent("sea_staff_cast");

    public static final RegistryObject<SoundEvent> SEA_STAFF_WOOSH = createSoundEvent("sea_staff_woosh");

    public static final RegistryObject<SoundEvent> SEA_STAFF_HIT = createSoundEvent("sea_staff_hit");

    public static final RegistryObject<SoundEvent> SEA_STAFF_BUBBLE = createSoundEvent("sea_staff_bubble");

    public static final RegistryObject<SoundEvent> ORTHOLANCE_WAVE = createSoundEvent("ortholance_wave");

    public static final RegistryObject<SoundEvent> DESOLATE_DAGGER_SUMMON = createSoundEvent("desolate_dagger_summon");

    public static final RegistryObject<SoundEvent> DESOLATE_DAGGER_HIT = createSoundEvent("desolate_dagger_hit");

    public static final RegistryObject<SoundEvent> TOTEM_OF_POSSESSION_USE = createSoundEvent("totem_of_possession_use");

    public static final RegistryObject<SoundEvent> DREADBOW_RELEASE = createSoundEvent("dreadbow_release");

    public static final RegistryObject<SoundEvent> DREADBOW_RAIN = createSoundEvent("dreadbow_rain");

    public static final RegistryObject<SoundEvent> TEPHRA_WHISTLE = createSoundEvent("tephra_whistle");

    public static final RegistryObject<SoundEvent> TEPHRA_HIT = createSoundEvent("tephra_hit");

    public static final RegistryObject<SoundEvent> NUCLEAR_EXPLOSION = createSoundEvent("nuclear_explosion");

    public static final RegistryObject<SoundEvent> LARGE_NUCLEAR_EXPLOSION = createSoundEvent("large_nuclear_explosion");

    public static final RegistryObject<SoundEvent> NUCLEAR_EXPLOSION_RUMBLE = createSoundEvent("nuclear_explosion_rumble");

    public static final RegistryObject<SoundEvent> NUCLEAR_EXPLOSION_RINGING = createSoundEvent("nuclear_explosion_ringing");

    public static final RegistryObject<SoundEvent> DARK_CLOUD_APPEAR = createSoundEvent("dark_cloud_appear");

    public static final RegistryObject<SoundEvent> DARK_CLOUD_DISAPPEAR = createSoundEvent("dark_cloud_disappear");

    public static final RegistryObject<SoundEvent> DARK_CLOUD_IDLE = createSoundEvent("dark_cloud_idle");

    public static final RegistryObject<SoundEvent> DARKNESS_INCARNATE_ENTER = createSoundEvent("darkness_incarnate_enter");

    public static final RegistryObject<SoundEvent> DARKNESS_INCARNATE_EXIT = createSoundEvent("darkness_incarnate_exit");

    public static final RegistryObject<SoundEvent> DARKNESS_INCARNATE_IDLE = createSoundEvent("darkness_incarnate_idle");

    public static final RegistryObject<SoundEvent> SUBMARINE_PLACE = createSoundEvent("submarine_place");

    public static final RegistryObject<SoundEvent> SUBMARINE_HIT = createSoundEvent("submarine_hit");

    public static final RegistryObject<SoundEvent> SUBMARINE_CREAK = createSoundEvent("submarine_creak");

    public static final RegistryObject<SoundEvent> SUBMARINE_REPAIR = createSoundEvent("submarine_repair");

    public static final RegistryObject<SoundEvent> SUBMARINE_DESTROY = createSoundEvent("submarine_destroy");

    public static final RegistryObject<SoundEvent> SUBMARINE_LIGHT_ON = createSoundEvent("submarine_light_on");

    public static final RegistryObject<SoundEvent> SUBMARINE_LIGHT_OFF = createSoundEvent("submarine_light_off");

    public static final RegistryObject<SoundEvent> SUBMARINE_MOVE_LOOP = createSoundEvent("submarine_move_loop");

    public static final RegistryObject<SoundEvent> SUBMARINE_SONAR = createSoundEvent("submarine_sonar");

    public static final RegistryObject<SoundEvent> DISAPPOINTMENT = createSoundEvent("disappointment");

    public static final RegistryObject<SoundEvent> NUCLEAR_SIREN = createSoundEvent("nuclear_siren");

    private static RegistryObject<SoundEvent> createSoundEvent(String soundName) {
        return DEF_REG.register(soundName, () -> SoundEvent.createVariableRangeEvent(new ResourceLocation("alexscaves", soundName)));
    }
}