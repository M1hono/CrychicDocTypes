/// <reference path="./internal_*.d.ts" />
declare namespace Internal {
    class RecipeIngredientRole extends Internal.Enum<Internal.RecipeIngredientRole> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        toString(): string;
        "compareTo(mezz.jei.api.recipe.RecipeIngredientRole)"(arg0: Internal.RecipeIngredientRole_): number;
        static values(): Internal.RecipeIngredientRole[];
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        static valueOf(arg0: string): Internal.RecipeIngredientRole;
        name(): string;
        compareTo(arg0: Internal.RecipeIngredientRole_): number;
        hashCode(): number;
        getDeclaringClass(): typeof Internal.RecipeIngredientRole;
        ordinal(): number;
        wait(): void;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.RecipeIngredientRole>>;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get declaringClass(): typeof Internal.RecipeIngredientRole
        static readonly CATALYST: (Internal.RecipeIngredientRole) & (Internal.RecipeIngredientRole);
        static readonly OUTPUT: (Internal.RecipeIngredientRole) & (Internal.RecipeIngredientRole);
        static readonly RENDER_ONLY: (Internal.RecipeIngredientRole) & (Internal.RecipeIngredientRole);
        static readonly INPUT: (Internal.RecipeIngredientRole) & (Internal.RecipeIngredientRole);
    }
    type RecipeIngredientRole_ = "output" | "input" | "catalyst" | RecipeIngredientRole | "render_only";
    class AmbersolLightBlock extends Internal.Block {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static testSkylight(arg0: Internal.LevelReader_, arg1: Internal.BlockState_, arg2: BlockPos_): boolean;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        getTopOfColumnLight(arg0: BlockPos_, arg1: Internal.LevelReader_): BlockPos;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        handler$zmd000$onUse(state: Internal.BlockState_, world: Internal.Level_, pos: BlockPos_, player: Internal.Player_, hand: Internal.InteractionHand_, hit: Internal.BlockHitResult_, cir: Internal.CallbackInfoReturnable_<any>): void;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        getTopOfColumn(arg0: BlockPos_, arg1: Internal.LevelReader_, arg2: Internal.Predicate_<Internal.BlockState>): BlockPos;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
        static readonly WATERLOGGED: (Internal.BooleanProperty) & (Internal.BooleanProperty);
    }
    type AmbersolLightBlock_ = AmbersolLightBlock;
    class DyeItem extends Internal.Item implements Internal.SignApplicator {
        constructor(arg0: Internal.DyeColor_, arg1: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        setRarity(arg0: Internal.Rarity_): void;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        moonlight$addAdditionalBehavior(placementOverride: Internal.AdditionalItemPlacement_): void;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        isFireResistant(): boolean;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isComplex(): boolean;
        getDyeColor(): Internal.DyeColor;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        canBeHurtBy(arg0: Internal.DamageSource_): boolean;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        moonlight$getClientAnimationExtension(): any;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getTypeData(): Internal.CompoundTag;
        getDefaultInstance(): Internal.ItemStack;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getItem(): Internal.Item;
        getBarColor(arg0: Internal.ItemStack_): number;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: Internal.DamageSource_): void;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        getDescription(): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        getClass(): typeof any;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        static byId(arg0: number): Internal.Item;
        getRenderPropertiesInternal(): any;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        tryApplyToSign(arg0: Internal.Level_, arg1: Internal.SignBlockEntity_, arg2: boolean, arg3: Internal.Player_): boolean;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        canApplyToSign(arg0: Internal.SignText_, arg1: Internal.Player_): boolean;
        moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        moonlight$setClientAnimationExtension(obj: any): void;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        attachCapability(capabilityBuilder: Internal.CapabilityBuilder_<any, any, any>): void;
        setAttackDamage(attackDamage: number): void;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        toString(): string;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        notify(): void;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        handler$dpg000$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        static byColor(arg0: Internal.DyeColor_): Internal.DyeItem;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        canBeDepleted(): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        getDamage(arg0: Internal.ItemStack_): number;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        wait(arg0: number, arg1: number): void;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vec3f;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        get drinkingSound(): Internal.SoundEvent
        set rarity(arg0: Internal.Rarity_)
        get fireResistant(): boolean
        get complex(): boolean
        get dyeColor(): Internal.DyeColor
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get descriptionId(): string
        get creativeTab(): string
        get typeData(): Internal.CompoundTag
        get defaultInstance(): Internal.ItemStack
        set maxStackSize(arg0: number)
        set burnTime(i: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        get class(): typeof any
        get renderPropertiesInternal(): any
        set itemBuilder(b: Internal.ItemBuilder_)
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        set attackDamage(attackDamage: number)
        get edible(): boolean
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        get eatingSound(): Internal.SoundEvent
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
    }
    type DyeItem_ = DyeItem;
    class Variable extends icyllis.arc3d.compiler.tree.Symbol {
        constructor(position: number, modifiers: Internal.Modifiers_, type: icyllis.arc3d.compiler.tree.Type_, name: string, storage: number, builtin: boolean)
        getClass(): typeof any;
        static convert(context: icyllis.arc3d.compiler.Context_, pos: number, modifiers: Internal.Modifiers_, type: icyllis.arc3d.compiler.tree.Type_, name: string, storage: number): Internal.Variable;
        getEndOffset(): number;
        getModifiers(): Internal.Modifiers;
        getInterfaceBlock(): Internal.InterfaceBlock;
        getVariableDecl(): Internal.VariableDecl;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getStartOffset(): number;
        setVariableDecl(decl: Internal.VariableDecl_): void;
        getKind(): Internal.Node$SymbolKind;
        setName(name: string): void;
        getName(): string;
        isBuiltin(): boolean;
        toString(): string;
        setInterfaceBlock(interfaceBlock: Internal.InterfaceBlock_): void;
        setGlobalVariableDecl(globalDecl: Internal.GlobalVariableDecl_): void;
        notifyAll(): void;
        accept(visitor: Internal.TreeVisitor_): boolean;
        getGlobalVariableDecl(): Internal.GlobalVariableDecl;
        getStorage(): number;
        getType(): icyllis.arc3d.compiler.tree.Type;
        hashCode(): number;
        wait(): void;
        initialValue(): Internal.Expression;
        wait(arg0: number): void;
        static make(pos: number, modifiers: Internal.Modifiers_, type: icyllis.arc3d.compiler.tree.Type_, name: string, storage: number, builtin: boolean): Internal.Variable;
        equals(arg0: any): boolean;
        get class(): typeof any
        get endOffset(): number
        get modifiers(): Internal.Modifiers
        get interfaceBlock(): Internal.InterfaceBlock
        get variableDecl(): Internal.VariableDecl
        get startOffset(): number
        set variableDecl(decl: Internal.VariableDecl_)
        get kind(): Internal.Node$SymbolKind
        set name(name: string)
        get name(): string
        get builtin(): boolean
        set interfaceBlock(interfaceBlock: Internal.InterfaceBlock_)
        set globalVariableDecl(globalDecl: Internal.GlobalVariableDecl_)
        get globalVariableDecl(): Internal.GlobalVariableDecl
        get storage(): number
        get type(): icyllis.arc3d.compiler.tree.Type
        static readonly kGlobal_Storage: (1) & (number);
        static readonly kLocal_Storage: (0) & (number);
        static readonly kParameter_Storage: (2) & (number);
    }
    type Variable_ = Variable;
    class Matrix3d implements Internal.Cloneable, Internal.Externalizable, Internal.Matrix3dc {
        constructor()
        constructor(arg0: Internal.Matrix3fc_)
        constructor(arg0: Internal.Matrix2fc_)
        constructor(arg0: Internal.DoubleBuffer_)
        constructor(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_)
        constructor(arg0: Internal.Matrix4dc_)
        constructor(arg0: Internal.Matrix3dc_)
        constructor(arg0: Internal.Matrix4fc_)
        constructor(arg0: Internal.Matrix2dc_)
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number)
        "transform(org.joml.Vector3f)"(arg0: Vec3f_): Vec3f;
        mapXZnY(arg0: Internal.Matrix3d_): this;
        reflect(arg0: Internal.Quaterniondc_): this;
        rotationX(arg0: number): this;
        mapnZXY(arg0: Internal.Matrix3d_): this;
        mapnYXnZ(arg0: Internal.Matrix3d_): this;
        mapnZnXY(): this;
        setFloats(arg0: number, arg1: Internal.ByteBuffer_): this;
        mapZXnY(): this;
        rotationYXZ(arg0: number, arg1: number, arg2: number): this;
        get(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        setLookAlong(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        mul(arg0: Internal.Matrix3fc_, arg1: Internal.Matrix3d_): this;
        "quadraticFormProduct(org.joml.Vector3dc)"(arg0: Internal.Vector3dc_): number;
        getUnnormalizedRotation(arg0: Quaternionf_): Quaternionf;
        quadraticFormProduct(arg0: Internal.Vector3dc_): number;
        lerp(arg0: Internal.Matrix3dc_, arg1: number, arg2: Internal.Matrix3d_): this;
        rotation(arg0: number, arg1: number, arg2: number, arg3: number): this;
        "set(org.joml.AxisAngle4d)"(arg0: Internal.AxisAngle4d_): this;
        set(arg0: Internal.Matrix4fc_): this;
        set(arg0: number, arg1: number, arg2: number): this;
        mapnZYnX(): this;
        "mul(org.joml.Matrix3dc,org.joml.Matrix3d)"(arg0: Internal.Matrix3dc_, arg1: Internal.Matrix3d_): this;
        "get(double[])"(arg0: number[]): number[];
        scale(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix3d_): this;
        "get(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        mapYZnX(): this;
        transform(arg0: Internal.Vector3d_): Internal.Vector3d;
        scaleLocal(arg0: number, arg1: number, arg2: number): this;
        mapnYnZnX(): this;
        normal(arg0: Internal.Matrix3d_): this;
        "reflection(org.joml.Quaterniondc)"(arg0: Internal.Quaterniondc_): this;
        set(arg0: Internal.Matrix3fc_): this;
        obliqueZ(arg0: number, arg1: number): this;
        rotationY(arg0: number): this;
        equals(arg0: Internal.Matrix3dc_, arg1: number): boolean;
        "scale(double)"(arg0: number): this;
        mapYXnZ(arg0: Internal.Matrix3d_): this;
        mapYnZnX(): this;
        rotateLocal(arg0: number, arg1: number, arg2: number, arg3: number): this;
        scale(arg0: Internal.Vector3dc_, arg1: Internal.Matrix3d_): this;
        mapZnYX(): this;
        mapYnXnZ(arg0: Internal.Matrix3d_): this;
        rotationZYX(arg0: number, arg1: number, arg2: number): this;
        "reflect(org.joml.Quaterniondc,org.joml.Matrix3d)"(arg0: Internal.Quaterniondc_, arg1: Internal.Matrix3d_): this;
        rotate(arg0: Internal.AxisAngle4d_, arg1: Internal.Matrix3d_): this;
        set(arg0: Internal.Matrix2dc_): this;
        mapZXY(arg0: Internal.Matrix3d_): this;
        mapnYnXnZ(arg0: Internal.Matrix3d_): this;
        "mul(org.joml.Matrix3dc)"(arg0: Internal.Matrix3dc_): this;
        "set(org.joml.Matrix2dc)"(arg0: Internal.Matrix2dc_): this;
        setTransposed(arg0: Internal.Matrix3fc_): this;
        set(arg0: Internal.Matrix4x3dc_): this;
        obliqueZ(arg0: number, arg1: number, arg2: Internal.Matrix3d_): this;
        get(arg0: Internal.Matrix3d_): this;
        transform(arg0: Vec3f_): Vec3f;
        lookAlong(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Matrix3d_): this;
        "get(org.joml.Matrix3d)"(arg0: Internal.Matrix3d_): this;
        wait(arg0: number): void;
        "rotateLocal(org.joml.Quaternionfc)"(arg0: Internal.Quaternionfc_): this;
        mapZYnX(): this;
        set(arg0: Internal.FloatBuffer_): this;
        "rotateLocal(org.joml.Quaternionfc,org.joml.Matrix3d)"(arg0: Internal.Quaternionfc_, arg1: Internal.Matrix3d_): this;
        rotationZ(arg0: number): this;
        transformTranspose(arg0: Internal.Vector3d_): Internal.Vector3d;
        "rotate(org.joml.AxisAngle4d)"(arg0: Internal.AxisAngle4d_): this;
        "scaling(org.joml.Vector3dc)"(arg0: Internal.Vector3dc_): this;
        mul(arg0: Internal.Matrix3dc_): this;
        quadraticFormProduct(arg0: Internal.Vector3fc_): number;
        isFinite(): boolean;
        mapYXZ(arg0: Internal.Matrix3d_): this;
        "rotate(double,org.joml.Vector3dc)"(arg0: number, arg1: Internal.Vector3dc_): this;
        rotation(arg0: Internal.Quaternionfc_): this;
        rotateTowards(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Matrix3d_): this;
        reflect(arg0: number, arg1: number, arg2: number): this;
        setSkewSymmetric(arg0: number, arg1: number, arg2: number): this;
        "set(java.nio.FloatBuffer)"(arg0: Internal.FloatBuffer_): this;
        set(arg0: Internal.Matrix4dc_): this;
        "get(int,java.nio.DoubleBuffer)"(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        "setTransposed(org.joml.Matrix3dc)"(arg0: Internal.Matrix3dc_): this;
        mapYnXZ(): this;
        reflect(arg0: Internal.Quaterniondc_, arg1: Internal.Matrix3d_): this;
        setFloats(arg0: Internal.ByteBuffer_): this;
        rotate(arg0: number, arg1: number, arg2: number, arg3: number): this;
        reflection(arg0: number, arg1: number, arg2: number): this;
        set(arg0: Internal.Matrix3dc_): this;
        mapYnZX(arg0: Internal.Matrix3d_): this;
        transform(arg0: Internal.Vector3fc_, arg1: Vec3f_): Vec3f;
        get(arg0: number[], arg1: number): number[];
        mapnYnXZ(arg0: Internal.Matrix3d_): this;
        "scale(org.joml.Vector3dc,org.joml.Matrix3d)"(arg0: Internal.Vector3dc_, arg1: Internal.Matrix3d_): this;
        m02(): number;
        mapZnYX(arg0: Internal.Matrix3d_): this;
        quadraticFormProduct(arg0: number, arg1: number, arg2: number): number;
        mapnZXnY(): this;
        mapYXnZ(): this;
        rotate(arg0: Internal.AxisAngle4f_, arg1: Internal.Matrix3d_): this;
        setTransposed(arg0: Internal.Matrix3dc_): this;
        rotateXYZ(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix3d_): this;
        "rotate(org.joml.Quaterniondc)"(arg0: Internal.Quaterniondc_): this;
        getToAddress(arg0: number): Internal.Matrix3dc;
        equals(arg0: any): boolean;
        mapZYX(arg0: Internal.Matrix3d_): this;
        mapnYnZX(arg0: Internal.Matrix3d_): this;
        scale(arg0: number, arg1: Internal.Matrix3d_): this;
        "set(org.joml.Quaterniondc)"(arg0: Internal.Quaterniondc_): this;
        rotateLocalZ(arg0: number, arg1: Internal.Matrix3d_): this;
        mapXZY(): this;
        "mul(org.joml.Matrix3fc,org.joml.Matrix3d)"(arg0: Internal.Matrix3fc_, arg1: Internal.Matrix3d_): this;
        mapnZXY(): this;
        "set(org.joml.Matrix4x3dc)"(arg0: Internal.Matrix4x3dc_): this;
        m10(arg0: number): this;
        mapXZnY(): this;
        rotation(arg0: Internal.Quaterniondc_): this;
        lerp(arg0: Internal.Matrix3dc_, arg1: number): this;
        mul(arg0: Internal.Matrix3fc_): this;
        negateY(): this;
        mapnXZY(): this;
        setFromAddress(arg0: number): this;
        "get(int,java.nio.FloatBuffer)"(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        rotate(arg0: Internal.Quaternionfc_): this;
        rotate(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix3d_): this;
        mapYZnX(arg0: Internal.Matrix3d_): this;
        setRow(arg0: number, arg1: number, arg2: number, arg3: number): this;
        normal(): this;
        m21(arg0: number): this;
        set(arg0: number, arg1: Internal.FloatBuffer_): this;
        mapnYXnZ(): this;
        mapnZXnY(arg0: Internal.Matrix3d_): this;
        get(arg0: number[], arg1: number): number[];
        rotationXYZ(arg0: number, arg1: number, arg2: number): this;
        "reflect(org.joml.Quaterniondc)"(arg0: Internal.Quaterniondc_): this;
        lookAlong(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        "get(java.nio.FloatBuffer)"(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        rotate(arg0: number, arg1: Internal.Vector3fc_, arg2: Internal.Matrix3d_): this;
        mapYZX(): this;
        mul(arg0: Internal.Matrix3dc_, arg1: Internal.Matrix3d_): this;
        "set(org.joml.Vector3dc,org.joml.Vector3dc,org.joml.Vector3dc)"(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_): this;
        transpose(arg0: Internal.Matrix3d_): this;
        rotateZYX(arg0: number, arg1: number, arg2: number): this;
        mapnYXZ(): this;
        "scale(org.joml.Vector3dc)"(arg0: Internal.Vector3dc_): this;
        negateX(): this;
        rotate(arg0: number, arg1: Internal.Vector3dc_): this;
        normalizedPositiveX(arg0: Internal.Vector3d_): Internal.Vector3d;
        rotateLocal(arg0: Internal.Quaternionfc_): this;
        getTransposedFloats(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        getEulerAnglesZYX(arg0: Internal.Vector3d_): Internal.Vector3d;
        "set(org.joml.Matrix4fc)"(arg0: Internal.Matrix4fc_): this;
        getColumn(arg0: number, arg1: Internal.Vector3d_): Internal.Vector3d;
        getFloats(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        m20(arg0: number): this;
        rotation(arg0: Internal.AxisAngle4d_): this;
        "rotate(org.joml.AxisAngle4d,org.joml.Matrix3d)"(arg0: Internal.AxisAngle4d_, arg1: Internal.Matrix3d_): this;
        "rotate(org.joml.Quaternionfc)"(arg0: Internal.Quaternionfc_): this;
        setColumn(arg0: number, arg1: Internal.Vector3dc_): this;
        notify(): void;
        "set(int,int,double)"(arg0: number, arg1: number, arg2: number): this;
        rotate(arg0: number, arg1: Internal.Vector3dc_, arg2: Internal.Matrix3d_): this;
        "set(int,java.nio.DoubleBuffer)"(arg0: number, arg1: Internal.DoubleBuffer_): this;
        "rotateLocal(org.joml.Quaterniondc)"(arg0: Internal.Quaterniondc_): this;
        "rotate(double,org.joml.Vector3dc,org.joml.Matrix3d)"(arg0: number, arg1: Internal.Vector3dc_, arg2: Internal.Matrix3d_): this;
        getTransposedFloats(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        sub(arg0: Internal.Matrix3dc_, arg1: Internal.Matrix3d_): this;
        mapnYZnX(): this;
        scaling(arg0: Internal.Vector3dc_): this;
        rotateY(arg0: number, arg1: Internal.Matrix3d_): this;
        "rotation(double,org.joml.Vector3fc)"(arg0: number, arg1: Internal.Vector3fc_): this;
        "set(int,java.nio.ByteBuffer)"(arg0: number, arg1: Internal.ByteBuffer_): this;
        rotate(arg0: Internal.Quaterniondc_): this;
        mapnZYX(arg0: Internal.Matrix3d_): this;
        normalizedPositiveY(arg0: Internal.Vector3d_): Internal.Vector3d;
        "rotation(org.joml.Quaterniondc)"(arg0: Internal.Quaterniondc_): this;
        mapnZYX(): this;
        readExternal(arg0: Internal.ObjectInput_): void;
        mapYZX(arg0: Internal.Matrix3d_): this;
        rotateYXZ(arg0: number, arg1: number, arg2: number): this;
        mapnYZnX(arg0: Internal.Matrix3d_): this;
        cofactor(arg0: Internal.Matrix3d_): this;
        getRow(arg0: number, arg1: Internal.Vector3d_): Internal.Vector3d;
        mapXnZY(arg0: Internal.Matrix3d_): this;
        getScale(arg0: Internal.Vector3d_): Internal.Vector3d;
        lookAlong(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix3d_): this;
        mapZnXY(arg0: Internal.Matrix3d_): this;
        mapnYXZ(arg0: Internal.Matrix3d_): this;
        transpose(): this;
        "set(float[])"(arg0: number[]): this;
        rotation(arg0: Internal.AxisAngle4f_): this;
        reflection(arg0: Internal.Quaterniondc_): this;
        getEulerAnglesXYZ(arg0: Internal.Vector3d_): Internal.Vector3d;
        mapZnXY(): this;
        rotation(arg0: number, arg1: Internal.Vector3dc_): this;
        "get(float[])"(arg0: number[]): number[];
        negateX(arg0: Internal.Matrix3d_): this;
        cofactor(): this;
        transform(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        rotateZ(arg0: number, arg1: Internal.Matrix3d_): this;
        "set(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): this;
        mapXnZY(): this;
        getFloats(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        rotate(arg0: number, arg1: Internal.Vector3fc_): this;
        normalizedPositiveZ(arg0: Internal.Vector3d_): Internal.Vector3d;
        get(arg0: number, arg1: number): number;
        "setTransposed(org.joml.Matrix3fc)"(arg0: Internal.Matrix3fc_): this;
        set(arg0: number, arg1: Internal.ByteBuffer_): this;
        hashCode(): number;
        zero(): this;
        positiveX(arg0: Internal.Vector3d_): Internal.Vector3d;
        rotateYXZ(arg0: Internal.Vector3d_): this;
        mapXZY(arg0: Internal.Matrix3d_): this;
        set(arg0: number[]): this;
        "rotate(double,org.joml.Vector3fc,org.joml.Matrix3d)"(arg0: number, arg1: Internal.Vector3fc_, arg2: Internal.Matrix3d_): this;
        "rotate(double,org.joml.Vector3fc)"(arg0: number, arg1: Internal.Vector3fc_): this;
        set(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_): this;
        lookAlong(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        setRow(arg0: number, arg1: Internal.Vector3dc_): this;
        "getUnnormalizedRotation(org.joml.Quaterniond)"(arg0: Internal.Quaterniond_): Internal.Quaterniond;
        mapZnYnX(arg0: Internal.Matrix3d_): this;
        "getTransposed(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        "mul(org.joml.Matrix3fc)"(arg0: Internal.Matrix3fc_): this;
        swap(arg0: Internal.Matrix3d_): this;
        m20(): number;
        "getNormalizedRotation(org.joml.Quaternionf)"(arg0: Quaternionf_): Quaternionf;
        rotate(arg0: Internal.AxisAngle4d_): this;
        mapXnYnZ(): this;
        negateY(arg0: Internal.Matrix3d_): this;
        mapnYnZX(): this;
        scaleLocal(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix3d_): this;
        "rotate(org.joml.Quaternionfc,org.joml.Matrix3d)"(arg0: Internal.Quaternionfc_, arg1: Internal.Matrix3d_): this;
        rotateLocalY(arg0: number): this;
        m02(arg0: number): this;
        rotateYXZ(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix3d_): this;
        "scaling(double)"(arg0: number): this;
        rotateY(arg0: number): this;
        getNormalizedRotation(arg0: Internal.Quaterniond_): Internal.Quaterniond;
        mapnZnYnX(arg0: Internal.Matrix3d_): this;
        positiveY(arg0: Internal.Vector3d_): Internal.Vector3d;
        mapnXZY(arg0: Internal.Matrix3d_): this;
        setRowColumn(arg0: number, arg1: number, arg2: number): this;
        scale(arg0: number, arg1: number, arg2: number): this;
        getClass(): typeof any;
        set(arg0: number, arg1: Internal.DoubleBuffer_): this;
        mapZYX(): this;
        add(arg0: Internal.Matrix3dc_): this;
        transformTranspose(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        mulLocal(arg0: Internal.Matrix3dc_): this;
        rotate(arg0: Internal.Quaternionfc_, arg1: Internal.Matrix3d_): this;
        mapYnZX(): this;
        mapnXnYnZ(): this;
        mapnXnYZ(): this;
        set(arg0: Internal.AxisAngle4d_): this;
        rotateX(arg0: number, arg1: Internal.Matrix3d_): this;
        rotateX(arg0: number): this;
        rotation(arg0: number, arg1: Internal.Vector3fc_): this;
        mulComponentWise(arg0: Internal.Matrix3dc_, arg1: Internal.Matrix3d_): this;
        negateZ(arg0: Internal.Matrix3d_): this;
        "set(double[])"(arg0: number[]): this;
        rotate(arg0: Internal.AxisAngle4f_): this;
        "getTransposed(java.nio.DoubleBuffer)"(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        mulComponentWise(arg0: Internal.Matrix3dc_): this;
        scale(arg0: number): this;
        set(arg0: Internal.ByteBuffer_): this;
        rotateLocalX(arg0: number): this;
        transformTranspose(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): Internal.Vector3d;
        getTransposed(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        mulLocal(arg0: Internal.Matrix3dc_, arg1: Internal.Matrix3d_): this;
        m01(arg0: number): this;
        positiveZ(arg0: Internal.Vector3d_): Internal.Vector3d;
        set(arg0: Internal.Quaterniondc_): this;
        mapnXYnZ(): this;
        mapnXnZY(arg0: Internal.Matrix3d_): this;
        rotateLocal(arg0: Internal.Quaternionfc_, arg1: Internal.Matrix3d_): this;
        getRowColumn(arg0: number, arg1: number): number;
        rotateLocalX(arg0: number, arg1: Internal.Matrix3d_): this;
        "set(org.joml.Matrix4dc)"(arg0: Internal.Matrix4dc_): this;
        m12(arg0: number): this;
        set(arg0: Internal.AxisAngle4f_): this;
        "set(java.nio.DoubleBuffer)"(arg0: Internal.DoubleBuffer_): this;
        mapnYZX(): this;
        mapnXnZnY(): this;
        reflect(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix3d_): this;
        rotateZYX(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix3d_): this;
        "set(org.joml.Matrix3fc)"(arg0: Internal.Matrix3fc_): this;
        mapXnZnY(): this;
        mapZnXnY(arg0: Internal.Matrix3d_): this;
        sub(arg0: Internal.Matrix3dc_): this;
        "scale(double,org.joml.Matrix3d)"(arg0: number, arg1: Internal.Matrix3d_): this;
        set(arg0: Internal.DoubleBuffer_): this;
        m00(arg0: number): this;
        wait(): void;
        get(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        add(arg0: Internal.Matrix3dc_, arg1: Internal.Matrix3d_): this;
        setLookAlong(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        rotateLocalY(arg0: number, arg1: Internal.Matrix3d_): this;
        "rotation(org.joml.AxisAngle4f)"(arg0: Internal.AxisAngle4f_): this;
        m11(arg0: number): this;
        scaling(arg0: number): this;
        "rotation(org.joml.Quaternionfc)"(arg0: Internal.Quaternionfc_): this;
        mapnXnYZ(arg0: Internal.Matrix3d_): this;
        "getTransposed(java.nio.FloatBuffer)"(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        invert(): this;
        scale(arg0: Internal.Vector3dc_): this;
        mapnZYnX(arg0: Internal.Matrix3d_): this;
        negateZ(): this;
        "get(double[],int)"(arg0: number[], arg1: number): number[];
        mapnXnZY(): this;
        getTransposed(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        rotateLocal(arg0: Internal.Quaterniondc_): this;
        transform(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): Internal.Vector3d;
        rotateZ(arg0: number): this;
        set(arg0: number[]): this;
        getNormalizedRotation(arg0: Quaternionf_): Quaternionf;
        m22(arg0: number): this;
        mapnYZX(arg0: Internal.Matrix3d_): this;
        rotateXYZ(arg0: number, arg1: number, arg2: number): this;
        mapnZnXnY(arg0: Internal.Matrix3d_): this;
        "set(org.joml.AxisAngle4f)"(arg0: Internal.AxisAngle4f_): this;
        "rotate(org.joml.Quaterniondc,org.joml.Matrix3d)"(arg0: Internal.Quaterniondc_, arg1: Internal.Matrix3d_): this;
        rotate(arg0: Internal.Quaterniondc_, arg1: Internal.Matrix3d_): this;
        get(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        mapnYnZnX(arg0: Internal.Matrix3d_): this;
        "getTransposed(int,java.nio.DoubleBuffer)"(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        identity(): this;
        mapnZnXY(arg0: Internal.Matrix3d_): this;
        m01(): number;
        "getNormalizedRotation(org.joml.Quaterniond)"(arg0: Internal.Quaterniond_): Internal.Quaterniond;
        "transform(org.joml.Vector3d)"(arg0: Internal.Vector3d_): Internal.Vector3d;
        mapZXnY(arg0: Internal.Matrix3d_): this;
        mapnZnYnX(): this;
        mapXnYnZ(arg0: Internal.Matrix3d_): this;
        mapZnYnX(): this;
        get(arg0: number[]): number[];
        "reflection(org.joml.Vector3dc)"(arg0: Internal.Vector3dc_): this;
        toString(arg0: Internal.NumberFormat_): string;
        "get(int,java.nio.ByteBuffer)"(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        m12(): number;
        "set(org.joml.Matrix3dc)"(arg0: Internal.Matrix3dc_): this;
        "rotation(double,org.joml.Vector3dc)"(arg0: number, arg1: Internal.Vector3dc_): this;
        clone(): any;
        rotateLocal(arg0: Internal.Quaterniondc_, arg1: Internal.Matrix3d_): this;
        writeExternal(arg0: Internal.ObjectOutput_): void;
        getRotation(arg0: Internal.AxisAngle4f_): Internal.AxisAngle4f;
        mapnZnXnY(): this;
        mapnXZnY(): this;
        rotationTowards(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        "rotate(org.joml.AxisAngle4f,org.joml.Matrix3d)"(arg0: Internal.AxisAngle4f_, arg1: Internal.Matrix3d_): this;
        mapnYnXZ(): this;
        getTransposed(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        "get(java.nio.DoubleBuffer)"(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        m00(): number;
        get(arg0: number[]): number[];
        determinant(): number;
        "set(int,java.nio.FloatBuffer)"(arg0: number, arg1: Internal.FloatBuffer_): this;
        toString(): string;
        invert(arg0: Internal.Matrix3d_): this;
        rotateLocal(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix3d_): this;
        notifyAll(): void;
        "set(org.joml.Quaternionfc)"(arg0: Internal.Quaternionfc_): this;
        mapnZnYX(): this;
        getTransposed(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        m11(): number;
        "transform(org.joml.Vector3dc,org.joml.Vector3d)"(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        mapYnXZ(arg0: Internal.Matrix3d_): this;
        "rotate(org.joml.AxisAngle4f)"(arg0: Internal.AxisAngle4f_): this;
        rotationTowards(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        m22(): number;
        mapZnXnY(): this;
        "reflect(org.joml.Vector3dc,org.joml.Matrix3d)"(arg0: Internal.Vector3dc_, arg1: Internal.Matrix3d_): this;
        mapXnZnY(arg0: Internal.Matrix3d_): this;
        mapYXZ(): this;
        reflect(arg0: Internal.Vector3dc_): this;
        get(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        "rotateLocal(org.joml.Quaterniondc,org.joml.Matrix3d)"(arg0: Internal.Quaterniondc_, arg1: Internal.Matrix3d_): this;
        "quadraticFormProduct(org.joml.Vector3fc)"(arg0: Internal.Vector3fc_): number;
        rotateTowards(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix3d_): this;
        "getTransposed(int,java.nio.FloatBuffer)"(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        scaling(arg0: number, arg1: number, arg2: number): this;
        setColumn(arg0: number, arg1: number, arg2: number, arg3: number): this;
        mapnXnZnY(arg0: Internal.Matrix3d_): this;
        m10(): number;
        "get(float[],int)"(arg0: number[], arg1: number): number[];
        get(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        "getTransposed(int,java.nio.ByteBuffer)"(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        reflect(arg0: Internal.Vector3dc_, arg1: Internal.Matrix3d_): this;
        mapnXZnY(arg0: Internal.Matrix3d_): this;
        getTransposed(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        wait(arg0: number, arg1: number): void;
        "rotation(org.joml.AxisAngle4d)"(arg0: Internal.AxisAngle4d_): this;
        rotateTowards(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        mapnYnXnZ(): this;
        m21(): number;
        "set(org.joml.Matrix2fc)"(arg0: Internal.Matrix2fc_): this;
        "transform(org.joml.Vector3fc,org.joml.Vector3f)"(arg0: Internal.Vector3fc_, arg1: Vec3f_): Vec3f;
        getUnnormalizedRotation(arg0: Internal.Quaterniond_): Internal.Quaterniond;
        getTransposed(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        mapZYnX(arg0: Internal.Matrix3d_): this;
        reflection(arg0: Internal.Vector3dc_): this;
        rotateLocalZ(arg0: number): this;
        set(arg0: Internal.Matrix2fc_): this;
        get(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        mapZXY(): this;
        "getUnnormalizedRotation(org.joml.Quaternionf)"(arg0: Quaternionf_): Quaternionf;
        mapYnXnZ(): this;
        mapnXYnZ(arg0: Internal.Matrix3d_): this;
        rotateTowards(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        "get(int,int)"(arg0: number, arg1: number): number;
        set(arg0: Internal.Quaternionfc_): this;
        set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): this;
        mapYnZnX(arg0: Internal.Matrix3d_): this;
        mapnZnYX(arg0: Internal.Matrix3d_): this;
        mapnXnYnZ(arg0: Internal.Matrix3d_): this;
        "reflect(org.joml.Vector3dc)"(arg0: Internal.Vector3dc_): this;
        set "(org.joml.AxisAngle4d)"(arg0: Internal.AxisAngle4d_)
        set "(org.joml.Matrix2dc)"(arg0: Internal.Matrix2dc_)
        set transposed(arg0: Internal.Matrix3fc_)
        get finite(): boolean
        set "(java.nio.FloatBuffer)"(arg0: Internal.FloatBuffer_)
        set "transposed(org.joml.Matrix3dc)"(arg0: Internal.Matrix3dc_)
        set floats(arg0: Internal.ByteBuffer_)
        set transposed(arg0: Internal.Matrix3dc_)
        set "(org.joml.Quaterniondc)"(arg0: Internal.Quaterniondc_)
        set "(org.joml.Matrix4x3dc)"(arg0: Internal.Matrix4x3dc_)
        set fromAddress(arg0: number)
        set "(org.joml.Matrix4fc)"(arg0: Internal.Matrix4fc_)
        set "(float[])"(arg0: number[])
        set "(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_)
        set "transposed(org.joml.Matrix3fc)"(arg0: Internal.Matrix3fc_)
        get class(): typeof any
        set "(double[])"(arg0: number[])
        set "(org.joml.Matrix4dc)"(arg0: Internal.Matrix4dc_)
        set "(java.nio.DoubleBuffer)"(arg0: Internal.DoubleBuffer_)
        set "(org.joml.Matrix3fc)"(arg0: Internal.Matrix3fc_)
        set "(org.joml.AxisAngle4f)"(arg0: Internal.AxisAngle4f_)
        set "(org.joml.Matrix3dc)"(arg0: Internal.Matrix3dc_)
        set "(org.joml.Quaternionfc)"(arg0: Internal.Quaternionfc_)
        set "(org.joml.Matrix2fc)"(arg0: Internal.Matrix2fc_)
        m01: number;
        m12: number;
        m02: number;
        m10: number;
        m21: number;
        m00: number;
        m11: number;
        m22: number;
        m20: number;
    }
    type Matrix3d_ = Matrix3d;
    class BlockPositionSource$Type implements Internal.PositionSourceType<Internal.BlockPositionSource> {
        constructor()
        getClass(): typeof any;
        "write(net.minecraft.network.FriendlyByteBuf,net.minecraft.world.level.gameevent.BlockPositionSource)"(arg0: Internal.FriendlyByteBuf_, arg1: Internal.BlockPositionSource_): void;
        toString(): string;
        notifyAll(): void;
        read(arg0: Internal.FriendlyByteBuf_): Internal.PositionSource;
        "write(net.minecraft.network.FriendlyByteBuf,net.minecraft.world.level.gameevent.PositionSource)"(arg0: Internal.FriendlyByteBuf_, arg1: Internal.PositionSource_): void;
        write(arg0: Internal.FriendlyByteBuf_, arg1: Internal.BlockPositionSource_): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        static register<S extends Internal.PositionSourceType<T>, T extends Internal.PositionSource>(arg0: string, arg1: S): S;
        hashCode(): number;
        static toNetwork<T extends Internal.PositionSource>(arg0: T, arg1: Internal.FriendlyByteBuf_): void;
        wait(): void;
        codec(): Internal.Codec<Internal.BlockPositionSource>;
        static fromNetwork(arg0: Internal.FriendlyByteBuf_): Internal.PositionSource;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        write(arg0: Internal.FriendlyByteBuf_, arg1: Internal.PositionSource_): void;
        get class(): typeof any
    }
    type BlockPositionSource$Type_ = BlockPositionSource$Type;
    interface IntStream extends Internal.BaseStream<number, Internal.IntStream> {
        concat(arg0: Internal.IntStream_, arg1: Internal.IntStream_): this;
        range(arg0: number, arg1: number): this;
        abstract spliterator(): Internal.Spliterator$OfInt;
        abstract min(): Internal.OptionalInt;
        abstract map(arg0: Internal.IntUnaryOperator_): this;
        abstract isParallel(): boolean;
        abstract onClose(arg0: Internal.Runnable_): this;
        builder(): Internal.IntStream$Builder;
        generate(arg0: Internal.IntSupplier_): this;
        abstract sum(): number;
        abstract findFirst(): Internal.OptionalInt;
        abstract max(): Internal.OptionalInt;
        rangeClosed(arg0: number, arg1: number): this;
        dropWhile(arg0: Internal.IntPredicate_): this;
        abstract count(): number;
        abstract findAny(): Internal.OptionalInt;
        abstract reduce(arg0: Internal.IntBinaryOperator_): Internal.OptionalInt;
        mapMulti(arg0: Internal.IntStream$IntMapMultiConsumer_): this;
        of(arg0: number): this;
        abstract mapToLong(arg0: Internal.IntToLongFunction_): Internal.LongStream;
        iterate(arg0: number, arg1: Internal.IntUnaryOperator_): this;
        abstract reduce(arg0: number, arg1: Internal.IntBinaryOperator_): number;
        abstract filter(arg0: Internal.IntPredicate_): this;
        abstract anyMatch(arg0: Internal.IntPredicate_): boolean;
        abstract distinct(): this;
        iterate(arg0: number, arg1: Internal.IntPredicate_, arg2: Internal.IntUnaryOperator_): this;
        abstract peek(arg0: Internal.IntConsumer_): this;
        takeWhile(arg0: Internal.IntPredicate_): this;
        "of(int)"(arg0: number): this;
        abstract collect<R>(arg0: Internal.Supplier_<R>, arg1: Internal.ObjIntConsumer_<R>, arg2: Internal.BiConsumer_<R, R>): R;
        abstract mapToDouble(arg0: Internal.IntToDoubleFunction_): Internal.DoubleStream;
        abstract forEach(arg0: Internal.IntConsumer_): void;
        abstract sorted(): this;
        abstract flatMap(arg0: Internal.IntFunction_<Internal.IntStream>): this;
        abstract toArray(): number[];
        abstract noneMatch(arg0: Internal.IntPredicate_): boolean;
        abstract unordered(): this;
        sequential(): Internal.BaseStream<any, any>;
        empty(): this;
        abstract mapToObj<U>(arg0: Internal.IntFunction_<U>): Internal.Stream<U>;
        "of(int[])"(...arg0: number[]): this;
        iterator(): Internal.Iterator<any>;
        abstract parallel(): this;
        abstract limit(arg0: number): this;
        of(...arg0: number[]): this;
        abstract asDoubleStream(): Internal.DoubleStream;
        abstract allMatch(arg0: Internal.IntPredicate_): boolean;
        abstract asLongStream(): Internal.LongStream;
        abstract forEachOrdered(arg0: Internal.IntConsumer_): void;
        abstract boxed(): Internal.Stream<number>;
        abstract close(): void;
        abstract summaryStatistics(): Internal.IntSummaryStatistics;
        abstract average(): Internal.OptionalDouble;
        abstract skip(arg0: number): this;
        get parallel(): boolean
    }
    type IntStream_ = IntStream;
    interface ClimateProperties {
        abstract getDownfall(): number;
        abstract getTemperatureModifier(): Internal.Biome$TemperatureModifier;
        abstract getTemperature(): number;
        abstract hasPrecipitation(): boolean;
        get downfall(): number
        get temperatureModifier(): Internal.Biome$TemperatureModifier
        get temperature(): number
    }
    type ClimateProperties_ = ClimateProperties;
    class Insets implements Internal.Cloneable, Internal.Serializable {
        constructor(arg0: number, arg1: number, arg2: number, arg3: number)
        clone(): any;
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        set(arg0: number, arg1: number, arg2: number, arg3: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        right: number;
        top: number;
        bottom: number;
        left: number;
    }
    type Insets_ = Insets;
    interface IConfigurable {
        abstract getConfigElement<T>(...arg0: string[]): Internal.Optional<T>;
        abstract getConfigList(...arg0: string[]): Internal.List<Internal.IConfigurable>;
    }
    type IConfigurable_ = IConfigurable;
    class InscriptionTableCraftingUpdateMessage extends Internal.TileEntityClientMessage {
        constructor()
        constructor(arg0: BlockPos_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number)
        getClass(): typeof any;
        isMessageValid(): boolean;
        getPosition(): BlockPos;
        toString(): string;
        notifyAll(): void;
        static fromInscriptionTable(arg0: Internal.InscriptionTableTile_): Internal.InscriptionTableCraftingUpdateMessage;
        Handle(arg0: Internal.Level_, arg1: Internal.Player_): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getTotalCraftTicks(): number;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        static encode(arg0: Internal.InscriptionTableCraftingUpdateMessage_, arg1: Internal.FriendlyByteBuf_): void;
        equals(arg0: any): boolean;
        static decode(arg0: Internal.FriendlyByteBuf_): Internal.InscriptionTableCraftingUpdateMessage;
        getCraftTicksPassed(): number;
        getPaperRemaining(): number;
        getBurnTimeRemaining(): number;
        getInkRemaining(): number;
        get class(): typeof any
        get messageValid(): boolean
        get position(): BlockPos
        get totalCraftTicks(): number
        get craftTicksPassed(): number
        get paperRemaining(): number
        get burnTimeRemaining(): number
        get inkRemaining(): number
    }
    type InscriptionTableCraftingUpdateMessage_ = InscriptionTableCraftingUpdateMessage;
    class BufferLayout {
        constructor(arg0: Internal.List_<Internal.LayoutItem>)
        getClass(): typeof any;
        static builder(): Internal.BufferLayout$Builder;
        toString(): string;
        notifyAll(): void;
        getLayoutItems(): Internal.List<Internal.LayoutItem>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getStride(): number;
        hashCode(): number;
        getAttributeCount(): number;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        get layoutItems(): Internal.List<Internal.LayoutItem>
        get stride(): number
        get attributeCount(): number
    }
    type BufferLayout_ = BufferLayout;
    class AbstractUniform {
        constructor()
        getClass(): typeof any;
        set(arg0: number): void;
        setMat3x2(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        set(arg0: number, arg1: number, arg2: number, arg3: number): void;
        setMat3x3(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
        set(arg0: number, arg1: number, arg2: number): void;
        "set(int,int)"(arg0: number, arg1: number): void;
        "setSafe(float,float,float,float)"(arg0: number, arg1: number, arg2: number, arg3: number): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        "set(float,float)"(arg0: number, arg1: number): void;
        setMat4x2(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        set(arg0: number, arg1: number): void;
        setMat4x4(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number, arg14: number, arg15: number): void;
        "set(int,int,int)"(arg0: number, arg1: number, arg2: number): void;
        "set(int,int,int,int)"(arg0: number, arg1: number, arg2: number, arg3: number): void;
        set(arg0: Vec3f_): void;
        setSafe(arg0: number, arg1: number, arg2: number, arg3: number): void;
        set(arg0: Vec4f_): void;
        "set(org.joml.Matrix4f)"(arg0: Matrix4f_): void;
        set(arg0: number, arg1: number): void;
        set(arg0: number, arg1: number, arg2: number, arg3: number): void;
        "set(float,float,float)"(arg0: number, arg1: number, arg2: number): void;
        setMat2x2(arg0: number, arg1: number, arg2: number, arg3: number): void;
        set(arg0: number, arg1: number, arg2: number): void;
        setMat3x4(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number): void;
        toString(): string;
        setSafe(arg0: number, arg1: number, arg2: number, arg3: number): void;
        notifyAll(): void;
        "set(org.joml.Matrix3f)"(arg0: Matrix3f_): void;
        set(arg0: number): void;
        setMat4x3(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number): void;
        set(arg0: number[]): void;
        "set(org.joml.Vector4f)"(arg0: Vec4f_): void;
        "set(float[])"(arg0: number[]): void;
        "set(org.joml.Vector3f)"(arg0: Vec3f_): void;
        "setSafe(int,int,int,int)"(arg0: number, arg1: number, arg2: number, arg3: number): void;
        hashCode(): number;
        set(arg0: Matrix4f_): void;
        "set(float,float,float,float)"(arg0: number, arg1: number, arg2: number, arg3: number): void;
        set(arg0: Matrix3f_): void;
        setMat2x4(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        wait(): void;
        "set(float)"(arg0: number): void;
        wait(arg0: number): void;
        setMat2x3(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        equals(arg0: any): boolean;
        "set(int)"(arg0: number): void;
        get class(): typeof any
        set "(org.joml.Matrix4f)"(arg0: Matrix4f_)
        set "(org.joml.Matrix3f)"(arg0: Matrix3f_)
        set "(org.joml.Vector4f)"(arg0: Vec4f_)
        set "(float[])"(arg0: number[])
        set "(org.joml.Vector3f)"(arg0: Vec3f_)
        set "(float)"(arg0: number)
        set "(int)"(arg0: number)
    }
    type AbstractUniform_ = AbstractUniform;
    class ContextUtils$EMayInteractContext {
        constructor(level: Internal.Level_, pos: BlockPos_, entity: Internal.Entity_)
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        /**
         * The position where the interaction may occur
        */
        readonly pos: BlockPos;
        /**
         * The level where the interaction may occur
        */
        readonly level: Internal.Level;
        /**
         * The entity involved in the interaction
        */
        readonly entity: Internal.Entity;
    }
    type ContextUtils$EMayInteractContext_ = ContextUtils$EMayInteractContext;
    class WildcardIngredient extends Internal.KubeJSIngredient {
        getDisplayStacks(): Internal.ItemStackSet;
        toJson(json: Internal.JsonObject_): void;
        "test(net.minecraft.world.item.ItemStack)"(stack: Internal.ItemStack_): boolean;
        asStack(): InputItem;
        notify(): void;
        toJson(): Internal.JsonElement;
        /**
         * @deprecated
        */
        static "of(net.minecraft.world.level.ItemLike[])"(...arg0: Internal.ItemLike_[]): Internal.Ingredient;
        isWildcard(): boolean;
        /**
         * @deprecated
        */
        static "of(net.minecraft.tags.TagKey)"(arg0: Internal.TagKey_<Internal.Item>): Internal.Ingredient;
        test(arg0: any): boolean;
        canBeUsedForMatching(): boolean;
        static merge(arg0: Internal.Collection_<Internal.Ingredient>): Internal.Ingredient;
        "or(net.minecraft.world.item.crafting.Ingredient)"(ingredient: Internal.Ingredient_): Internal.Ingredient;
        "and(net.minecraft.world.item.crafting.Ingredient)"(ingredient: Internal.Ingredient_): Internal.Ingredient;
        subtract(subtracted: Internal.Ingredient_): Internal.Ingredient;
        negate(): Internal.Predicate<Internal.ItemStack>;
        write(buf: Internal.FriendlyByteBuf_): void;
        /**
         * @deprecated
        */
        static fromNetwork(arg0: Internal.FriendlyByteBuf_): Internal.Ingredient;
        checkInvalidation(): boolean;
        /**
         * @deprecated
        */
        static of(...arg0: Internal.ItemStack_[]): Internal.Ingredient;
        /**
         * @deprecated
        */
        static of(arg0: Internal.TagKey_<Internal.Item>): Internal.Ingredient;
        toNetwork(arg0: Internal.FriendlyByteBuf_): void;
        withCount(count: number): InputItem;
        getStacks(): Internal.ItemStackSet;
        "toJson()"(): Internal.JsonElement;
        or(arg0: Internal.Predicate_<Internal.ItemStack>): Internal.Predicate<Internal.ItemStack>;
        "or(java.util.function.Predicate)"(arg0: Internal.Predicate_<Internal.ItemStack>): Internal.Predicate<Internal.ItemStack>;
        wait(): void;
        test(stack: Internal.ItemStack_): boolean;
        getSerializer(): Internal.IIngredientSerializer<Internal.Ingredient>;
        /**
         * @deprecated
        */
        static fromJson(arg0: Internal.JsonElement_): Internal.Ingredient;
        asIngredient(): Internal.Ingredient;
        getClass(): typeof any;
        isVanilla(): boolean;
        /**
         * @deprecated
        */
        static of(arg0: Internal.Stream_<Internal.ItemStack>): Internal.Ingredient;
        static invalidateAll(): void;
        isSimple(): boolean;
        static valueFromJson(arg0: Internal.JsonObject_): Internal.Ingredient$Value;
        getItemIds(): Internal.Set<string>;
        isEmpty(): boolean;
        toJson(): Internal.JsonObject;
        or(ingredient: Internal.Ingredient_): Internal.Ingredient;
        wait(arg0: number, arg1: number): void;
        /**
         * @deprecated
        */
        static fromValues(arg0: Internal.Stream_<Internal.Ingredient$Value>): Internal.Ingredient;
        static isEqual<T>(arg0: any): Internal.Predicate<T>;
        /**
         * @deprecated
        */
        static of(): Internal.Ingredient;
        getItemTypes(): Internal.Set<Internal.Item>;
        /**
         * @deprecated
        */
        static of(...arg0: Internal.ItemLike_[]): Internal.Ingredient;
        and(ingredient: Internal.Ingredient_): Internal.Ingredient;
        "test(java.lang.Object)"(arg0: any): boolean;
        /**
         * @deprecated
        */
        static "of(java.util.stream.Stream)"(arg0: Internal.Stream_<Internal.ItemStack>): Internal.Ingredient;
        "and(java.util.function.Predicate)"(arg0: Internal.Predicate_<Internal.ItemStack>): Internal.Predicate<Internal.ItemStack>;
        testItem(item: Internal.Item_): boolean;
        static not<T>(arg0: Internal.Predicate_<T>): Internal.Predicate<T>;
        toString(): string;
        "toJson()"(): Internal.JsonObject;
        self(): Internal.Ingredient;
        notifyAll(): void;
        static fromJson(arg0: Internal.JsonElement_, arg1: boolean): Internal.Ingredient;
        getStackingIds(): Internal.IntList;
        hashCode(): number;
        /**
         * @deprecated
        */
        static "of(net.minecraft.world.item.ItemStack[])"(...arg0: Internal.ItemStack_[]): Internal.Ingredient;
        wait(arg0: number): void;
        getFirst(): Internal.ItemStack;
        equals(arg0: any): boolean;
        and(arg0: Internal.Predicate_<Internal.ItemStack>): Internal.Predicate<Internal.ItemStack>;
        get displayStacks(): Internal.ItemStackSet
        get wildcard(): boolean
        get stacks(): Internal.ItemStackSet
        get serializer(): Internal.IIngredientSerializer<Internal.Ingredient>
        get class(): typeof any
        get vanilla(): boolean
        get simple(): boolean
        get itemIds(): Internal.Set<string>
        get empty(): boolean
        get itemTypes(): Internal.Set<Internal.Item>
        get stackingIds(): Internal.IntList
        get first(): Internal.ItemStack
        static INSTANCE: (Internal.WildcardIngredient) & (Internal.WildcardIngredient);
        static readonly SERIALIZER: Internal.KubeJSIngredientSerializer<Internal.WildcardIngredient>;
    }
    type WildcardIngredient_ = WildcardIngredient;
    interface IMixinPlayerModel {
        abstract getCloakFancyMenu(): Internal.ModelPart;
        get cloakFancyMenu(): Internal.ModelPart
        (): Internal.ModelPart_;
    }
    type IMixinPlayerModel_ = IMixinPlayerModel | (()=> Internal.ModelPart_);
    class GlStateManager$LogicOp extends Internal.Enum<Internal.GlStateManager$LogicOp> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.GlStateManager$LogicOp>>;
        getClass(): typeof any;
        compareTo(arg0: Internal.GlStateManager$LogicOp_): number;
        toString(): string;
        static values(): Internal.GlStateManager$LogicOp[];
        notifyAll(): void;
        notify(): void;
        static valueOf(arg0: string): Internal.GlStateManager$LogicOp;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        "compareTo(com.mojang.blaze3d.platform.GlStateManager$LogicOp)"(arg0: Internal.GlStateManager$LogicOp_): number;
        name(): string;
        hashCode(): number;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        getDeclaringClass(): typeof Internal.GlStateManager$LogicOp;
        get class(): typeof any
        get declaringClass(): typeof Internal.GlStateManager$LogicOp
        static readonly INVERT: (Internal.GlStateManager$LogicOp) & (Internal.GlStateManager$LogicOp);
        static readonly NOOP: (Internal.GlStateManager$LogicOp) & (Internal.GlStateManager$LogicOp);
        static readonly NOR: (Internal.GlStateManager$LogicOp) & (Internal.GlStateManager$LogicOp);
        static readonly EQUIV: (Internal.GlStateManager$LogicOp) & (Internal.GlStateManager$LogicOp);
        static readonly NAND: (Internal.GlStateManager$LogicOp) & (Internal.GlStateManager$LogicOp);
        static readonly SET: (Internal.GlStateManager$LogicOp) & (Internal.GlStateManager$LogicOp);
        static readonly AND: (Internal.GlStateManager$LogicOp) & (Internal.GlStateManager$LogicOp);
        static readonly AND_INVERTED: (Internal.GlStateManager$LogicOp) & (Internal.GlStateManager$LogicOp);
        static readonly OR: (Internal.GlStateManager$LogicOp) & (Internal.GlStateManager$LogicOp);
        static readonly XOR: (Internal.GlStateManager$LogicOp) & (Internal.GlStateManager$LogicOp);
        static readonly OR_INVERTED: (Internal.GlStateManager$LogicOp) & (Internal.GlStateManager$LogicOp);
        static readonly COPY_INVERTED: (Internal.GlStateManager$LogicOp) & (Internal.GlStateManager$LogicOp);
        static readonly COPY: (Internal.GlStateManager$LogicOp) & (Internal.GlStateManager$LogicOp);
        readonly value: number;
        static readonly CLEAR: (Internal.GlStateManager$LogicOp) & (Internal.GlStateManager$LogicOp);
        static readonly OR_REVERSE: (Internal.GlStateManager$LogicOp) & (Internal.GlStateManager$LogicOp);
        static readonly AND_REVERSE: (Internal.GlStateManager$LogicOp) & (Internal.GlStateManager$LogicOp);
    }
    type GlStateManager$LogicOp_ = GlStateManager$LogicOp | "nor" | "and" | "and_reverse" | "copy" | "or" | "or_reverse" | "and_inverted" | "equiv" | "invert" | "clear" | "set" | "copy_inverted" | "nand" | "noop" | "or_inverted" | "xor";
    class StructureLocator$LocatedStruct extends Internal.Record {
        constructor(pos: BlockPos_, structure: Internal.Holder_<Internal.Structure>, start: Internal.StructureStart_)
        constructor(pair: com.mojang.datafixers.util.Pair_<BlockPos, Internal.Holder<Internal.Structure>>)
        getClass(): typeof any;
        hashCode(): number;
        structure(): Internal.Holder<Internal.Structure>;
        toString(): string;
        start(): Internal.StructureStart;
        pos(): BlockPos;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(o: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
    }
    type StructureLocator$LocatedStruct_ = StructureLocator$LocatedStruct;
    interface BorderChangeListener {
        abstract onBorderSetDamageSafeZOne(arg0: Internal.WorldBorder_, arg1: number): void;
        abstract onBorderSizeLerping(arg0: Internal.WorldBorder_, arg1: number, arg2: number, arg3: number): void;
        abstract onBorderCenterSet(arg0: Internal.WorldBorder_, arg1: number, arg2: number): void;
        abstract onBorderSizeSet(arg0: Internal.WorldBorder_, arg1: number): void;
        abstract onBorderSetDamagePerBlock(arg0: Internal.WorldBorder_, arg1: number): void;
        abstract onBorderSetWarningBlocks(arg0: Internal.WorldBorder_, arg1: number): void;
        abstract onBorderSetWarningTime(arg0: Internal.WorldBorder_, arg1: number): void;
    }
    type BorderChangeListener_ = BorderChangeListener;
    class HurtBySensor extends Internal.Sensor<Internal.LivingEntity> {
        constructor()
        getClass(): typeof any;
        toString(): string;
        static isEntityTargetable(arg0: Internal.LivingEntity_, arg1: Internal.LivingEntity_): boolean;
        notifyAll(): void;
        static isEntityAttackableIgnoringLineOfSight(arg0: Internal.LivingEntity_, arg1: Internal.LivingEntity_): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        tick(arg0: Internal.ServerLevel_, arg1: Internal.LivingEntity_): void;
        wait(): void;
        static isEntityAttackable(arg0: Internal.LivingEntity_, arg1: Internal.LivingEntity_): boolean;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        requires(): Internal.Set<Internal.MemoryModuleType<any>>;
        get class(): typeof any
    }
    type HurtBySensor_ = HurtBySensor;
    class Matrix4d implements Internal.Cloneable, Internal.Externalizable, Internal.Matrix4dc {
        constructor()
        constructor(arg0: Internal.Matrix4x3dc_)
        constructor(arg0: Internal.DoubleBuffer_)
        constructor(arg0: Internal.Matrix4dc_)
        constructor(arg0: Internal.Matrix3dc_)
        constructor(arg0: Internal.Matrix4fc_)
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number, arg14: number, arg15: number)
        constructor(arg0: Internal.Matrix4x3fc_)
        constructor(arg0: Internal.Vector4d_, arg1: Internal.Vector4d_, arg2: Internal.Vector4d_, arg3: Internal.Vector4d_)
        "rotateAffine(org.joml.Quaterniondc)"(arg0: Internal.Quaterniondc_): this;
        unprojectInv(arg0: Internal.Vector3dc_, arg1: number[], arg2: Internal.Vector4d_): Internal.Vector4d;
        invertOrtho(arg0: Internal.Matrix4d_): this;
        determinant3x3(): number;
        "transpose3x3(org.joml.Matrix4d)"(arg0: Internal.Matrix4d_): this;
        "perspectiveOffCenter(double,double,double,double,double,double,org.joml.Matrix4d)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        mul(arg0: Internal.Matrix4dc_): this;
        rotateTranslation(arg0: Internal.Quaternionfc_, arg1: Internal.Matrix4d_): this;
        projectedGridRange(arg0: Internal.Matrix4dc_, arg1: number, arg2: number, arg3: Internal.Matrix4d_): this;
        zero(): this;
        translationRotateScale(arg0: Internal.Vector3fc_, arg1: Internal.Quaternionfc_, arg2: Internal.Vector3fc_): this;
        setFrustum(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        rotateAffine(arg0: Internal.Quaterniondc_): this;
        mapnXZnY(arg0: Internal.Matrix4d_): this;
        rotationX(arg0: number): this;
        unproject(arg0: Internal.Vector3dc_, arg1: number[], arg2: Internal.Vector4d_): Internal.Vector4d;
        "getColumn(int,org.joml.Vector4d)"(arg0: number, arg1: Internal.Vector4d_): Internal.Vector4d;
        perspectiveNear(): number;
        transformDirection(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        "get(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        "reflection(org.joml.Quaterniondc,org.joml.Vector3dc)"(arg0: Internal.Quaterniondc_, arg1: Internal.Vector3dc_): this;
        rotateAround(arg0: Internal.Quaterniondc_, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        rotateAroundAffine(arg0: Internal.Quaterniondc_, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        "set(org.joml.AxisAngle4d)"(arg0: Internal.AxisAngle4d_): this;
        normal(arg0: Internal.Matrix3d_): Internal.Matrix3d;
        rotation(arg0: number, arg1: number, arg2: number, arg3: number): this;
        rotate(arg0: Internal.AxisAngle4d_, arg1: Internal.Matrix4d_): this;
        "set(int,java.nio.ByteBuffer)"(arg0: number, arg1: Internal.ByteBuffer_): this;
        unprojectInv(arg0: number, arg1: number, arg2: number, arg3: number[], arg4: Internal.Vector4d_): Internal.Vector4d;
        normalize3x3(arg0: Internal.Matrix3d_): Internal.Matrix3d;
        scaleAround(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        mapnXnZnY(arg0: Internal.Matrix4d_): this;
        obliqueZ(arg0: number, arg1: number, arg2: Internal.Matrix4d_): this;
        mapnYXZ(arg0: Internal.Matrix4d_): this;
        mapZYnX(): this;
        perspectiveRect(arg0: number, arg1: number, arg2: number, arg3: number): this;
        translationRotateScaleMulAffine(arg0: Internal.Vector3fc_, arg1: Internal.Quaterniondc_, arg2: Internal.Vector3fc_, arg3: Internal.Matrix4d_): this;
        "scale(double)"(arg0: number): this;
        translationRotateScale(arg0: Internal.Vector3dc_, arg1: Internal.Quaterniondc_, arg2: number): this;
        "transformProject(org.joml.Vector4dc,org.joml.Vector3d)"(arg0: Internal.Vector4dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        perspectiveOffCenter(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        translateLocal(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4d_): this;
        transformAab(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3d_, arg3: Internal.Vector3d_): this;
        translationRotateTowards(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): this;
        mapYXnZ(arg0: Internal.Matrix4d_): this;
        setLookAlong(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        rotate(arg0: number, arg1: Internal.Vector3dc_, arg2: Internal.Matrix4d_): this;
        mulOrthoAffine(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        mapZnYX(): this;
        mapYXZ(arg0: Internal.Matrix4d_): this;
        setPerspectiveOffCenter(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        "reflect(org.joml.Vector3dc,org.joml.Vector3dc,org.joml.Matrix4d)"(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Matrix4d_): this;
        "rotate(double,org.joml.Vector3dc)"(arg0: number, arg1: Internal.Vector3dc_): this;
        set(arg0: number[], arg1: number): this;
        testAab(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        "perspectiveRect(double,double,double,double,boolean)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): this;
        rotateLocal(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        tile(arg0: number, arg1: number, arg2: number, arg3: number): this;
        transpose3x3(arg0: Internal.Matrix3d_): Internal.Matrix3d;
        isFinite(): boolean;
        shadow(arg0: Internal.Vector4dc_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: Internal.Matrix4d_): this;
        setFloats(arg0: Internal.ByteBuffer_): this;
        rotateTowardsXY(arg0: number, arg1: number): this;
        set(arg0: Internal.FloatBuffer_): this;
        rotationZ(arg0: number): this;
        invertAffine(arg0: Internal.Matrix4d_): this;
        perspectiveInvOrigin(arg0: Internal.Vector3d_): Internal.Vector3d;
        transformTranspose(arg0: Internal.Vector4d_): Internal.Vector4d;
        perspectiveOffCenter(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: Internal.Matrix4d_): this;
        mapnZnXnY(): this;
        "scaling(org.joml.Vector3dc)"(arg0: Internal.Vector3dc_): this;
        rotationTowards(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        mapnYnXZ(arg0: Internal.Matrix4d_): this;
        scale(arg0: Internal.Vector3dc_, arg1: Internal.Matrix4d_): this;
        "frustum(double,double,double,double,double,double,org.joml.Matrix4d)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        set4x3(arg0: Internal.Matrix4x3dc_): this;
        rotation(arg0: Internal.Quaternionfc_): this;
        rotateTowards(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Matrix4d_): this;
        get4x3Transposed(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        rotateAffine(arg0: Internal.Quaternionfc_): this;
        transformProject(arg0: Internal.Vector4d_): Internal.Vector4d;
        "perspectiveLH(double,double,double,double,boolean)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): this;
        rotate(arg0: Internal.AxisAngle4f_, arg1: Internal.Matrix4d_): this;
        mapYZnX(): this;
        fma4x3(arg0: Internal.Matrix4dc_, arg1: number, arg2: Internal.Matrix4d_): this;
        "rotateLocal(org.joml.Quaternionfc,org.joml.Matrix4d)"(arg0: Internal.Quaternionfc_, arg1: Internal.Matrix4d_): this;
        m02(): number;
        scaleLocal(arg0: number, arg1: number, arg2: number): this;
        "translateLocal(org.joml.Vector3dc,org.joml.Matrix4d)"(arg0: Internal.Vector3dc_, arg1: Internal.Matrix4d_): this;
        "rotate(org.joml.Quaterniondc)"(arg0: Internal.Quaterniondc_): this;
        reflect(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        translationRotate(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): this;
        rotate(arg0: number, arg1: number, arg2: number, arg3: number): this;
        perspective(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): this;
        mul(arg0: Matrix4f_): this;
        "orthoSymmetric(double,double,double,double,org.joml.Matrix4d)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        set(arg0: Internal.Matrix3dc_): this;
        rotateAffineZYX(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4d_): this;
        "translationRotateScale(org.joml.Vector3dc,org.joml.Quaterniondc,org.joml.Vector3dc)"(arg0: Internal.Vector3dc_, arg1: Internal.Quaterniondc_, arg2: Internal.Vector3dc_): this;
        m13(): number;
        setFrustum(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        "ortho(double,double,double,double,double,double,boolean)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        orthoSymmetric(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        "mul(org.joml.Matrix4x3fc,org.joml.Matrix4d)"(arg0: Internal.Matrix4x3fc_, arg1: Internal.Matrix4d_): this;
        mapnZXnY(): this;
        setRotationZYX(arg0: number, arg1: number, arg2: number): this;
        negateZ(): this;
        rotate(arg0: number, arg1: Internal.Vector3dc_): this;
        translationRotateScale(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): this;
        mul(arg0: Internal.Matrix3x2fc_, arg1: Internal.Matrix4d_): this;
        orthoSymmetric(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: Internal.Matrix4d_): this;
        mapnXZY(): this;
        mapYZnX(arg0: Internal.Matrix4d_): this;
        setColumn(arg0: number, arg1: Internal.Vector4dc_): this;
        "set(org.joml.Matrix4fc)"(arg0: Internal.Matrix4fc_): this;
        mul(arg0: Internal.Matrix4x3dc_): this;
        m22(arg0: number): this;
        mapnZXnY(arg0: Internal.Matrix4d_): this;
        translate(arg0: Internal.Vector3fc_, arg1: Internal.Matrix4d_): this;
        perspective(arg0: number, arg1: number, arg2: number, arg3: number): this;
        setPerspectiveOffCenter(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        transformProject(arg0: Internal.Vector4dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        "get4x3Transposed(int,java.nio.ByteBuffer)"(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        scale(arg0: number, arg1: Internal.Matrix4d_): this;
        mapXZY(): this;
        setOrthoSymmetric(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): this;
        transformDirection(arg0: Internal.Vector3fc_, arg1: Vec3f_): Vec3f;
        rotate(arg0: number, arg1: Internal.Vector3fc_, arg2: Internal.Matrix4d_): this;
        m33(arg0: number): this;
        add(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        mapZnYX(arg0: Internal.Matrix4d_): this;
        rotateZ(arg0: number, arg1: Internal.Matrix4d_): this;
        getToAddress(arg0: number): Internal.Matrix4dc;
        rotation(arg0: Internal.Quaterniondc_): this;
        mapYXnZ(): this;
        "scale(org.joml.Vector3dc)"(arg0: Internal.Vector3dc_): this;
        "set4x3(org.joml.Matrix4dc)"(arg0: Internal.Matrix4dc_): this;
        perspectiveOffCenter(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        perspectiveOffCenterFov(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: Internal.Matrix4d_): this;
        "get(java.nio.FloatBuffer)"(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        rotateZYX(arg0: number, arg1: number, arg2: number): this;
        setOrtho2D(arg0: number, arg1: number, arg2: number, arg3: number): this;
        translationRotateScale(arg0: Internal.Vector3fc_, arg1: Internal.Quaternionfc_, arg2: number): this;
        orthoLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        setTranslation(arg0: number, arg1: number, arg2: number): this;
        "translation(org.joml.Vector3dc)"(arg0: Internal.Vector3dc_): this;
        "rotate(org.joml.Quaternionfc,org.joml.Matrix4d)"(arg0: Internal.Quaternionfc_, arg1: Internal.Matrix4d_): this;
        reflection(arg0: number, arg1: number, arg2: number, arg3: number): this;
        invertOrtho(): this;
        translationRotate(arg0: Internal.Vector3dc_, arg1: Internal.Quaterniondc_): this;
        normalizedPositiveX(arg0: Internal.Vector3d_): Internal.Vector3d;
        translateLocal(arg0: Internal.Vector3dc_): this;
        getTransposedFloats(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        "get4x3Transposed(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        getColumn(arg0: number, arg1: Internal.Vector3d_): Internal.Vector3d;
        "rotate(double,org.joml.Vector3fc,org.joml.Matrix4d)"(arg0: number, arg1: Internal.Vector3fc_, arg2: Internal.Matrix4d_): this;
        "set(org.joml.Matrix4x3dc)"(arg0: Internal.Matrix4x3dc_): this;
        "set(java.nio.DoubleBuffer)"(arg0: Internal.DoubleBuffer_): this;
        translation(arg0: Internal.Vector3dc_): this;
        mapnYXZ(): this;
        negateX(): this;
        rotate(arg0: number, arg1: Internal.Vector3fc_): this;
        mapYZX(arg0: Internal.Matrix4d_): this;
        "translationRotateScaleInvert(org.joml.Vector3dc,org.joml.Quaterniondc,org.joml.Vector3dc)"(arg0: Internal.Vector3dc_, arg1: Internal.Quaterniondc_, arg2: Internal.Vector3dc_): this;
        withLookAtUp(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4d_): this;
        notify(): void;
        scaleXY(arg0: number, arg1: number, arg2: Internal.Matrix4d_): this;
        lerp(arg0: Internal.Matrix4dc_, arg1: number): this;
        mapXnZY(arg0: Internal.Matrix4d_): this;
        "translationRotateScaleInvert(org.joml.Vector3fc,org.joml.Quaternionfc,double)"(arg0: Internal.Vector3fc_, arg1: Internal.Quaternionfc_, arg2: number): this;
        m20(arg0: number): this;
        set(arg0: number, arg1: Internal.ByteBuffer_): this;
        "translateLocal(org.joml.Vector3dc)"(arg0: Internal.Vector3dc_): this;
        "translationRotateScaleInvert(org.joml.Vector3dc,org.joml.Quaterniondc,double)"(arg0: Internal.Vector3dc_, arg1: Internal.Quaterniondc_, arg2: number): this;
        mapZnXY(arg0: Internal.Matrix4d_): this;
        rotation(arg0: Internal.AxisAngle4d_): this;
        "rotate(org.joml.Quaternionfc)"(arg0: Internal.Quaternionfc_): this;
        frustum(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: Internal.Matrix4d_): this;
        "unprojectInv(org.joml.Vector3dc,int[],org.joml.Vector3d)"(arg0: Internal.Vector3dc_, arg1: number[], arg2: Internal.Vector3d_): Internal.Vector3d;
        setRotationXYZ(arg0: number, arg1: number, arg2: number): this;
        unproject(arg0: number, arg1: number, arg2: number, arg3: number[], arg4: Internal.Vector4d_): Internal.Vector4d;
        getRow(arg0: number, arg1: Internal.Vector3d_): Internal.Vector3d;
        rotateX(arg0: number, arg1: Internal.Matrix4d_): this;
        m31(arg0: number): this;
        "set(int,java.nio.DoubleBuffer)"(arg0: number, arg1: Internal.DoubleBuffer_): this;
        "frustumLH(double,double,double,double,double,double,boolean)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        orthoSymmetricLH(arg0: number, arg1: number, arg2: number, arg3: number): this;
        "rotate(double,org.joml.Vector3dc,org.joml.Matrix4d)"(arg0: number, arg1: Internal.Vector3dc_, arg2: Internal.Matrix4d_): this;
        rotate(arg0: Internal.Quaternionfc_): this;
        scaleAroundLocal(arg0: number, arg1: number, arg2: number, arg3: number): this;
        rotateTranslation(arg0: Internal.Quaterniondc_, arg1: Internal.Matrix4d_): this;
        lookAlong(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        "get(float[])"(arg0: number[]): number[];
        cofactor3x3(): this;
        mapZnXY(): this;
        rotateYXZ(arg0: Internal.Vector3d_): this;
        "translationRotateScale(org.joml.Vector3fc,org.joml.Quaternionfc,double)"(arg0: Internal.Vector3fc_, arg1: Internal.Quaternionfc_, arg2: number): this;
        rotation(arg0: Internal.AxisAngle4f_): this;
        "scale(double,org.joml.Matrix4d)"(arg0: number, arg1: Internal.Matrix4d_): this;
        mapnYnZX(arg0: Internal.Matrix4d_): this;
        getFloats(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        normalizedPositiveZ(arg0: Internal.Vector3d_): Internal.Vector3d;
        translateLocal(arg0: Internal.Vector3fc_): this;
        cofactor3x3(arg0: Internal.Matrix4d_): this;
        get(arg0: number, arg1: number): number;
        transformProject(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        frustumLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: Internal.Matrix4d_): this;
        reflect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        rotation(arg0: number, arg1: Internal.Vector3dc_): this;
        rotateAround(arg0: Internal.Quaterniondc_, arg1: number, arg2: number, arg3: number): this;
        rotationYXZ(arg0: number, arg1: number, arg2: number): this;
        hashCode(): number;
        translation(arg0: Internal.Vector3fc_): this;
        "transformProject(org.joml.Vector3dc,org.joml.Vector3d)"(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        "set(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): this;
        perspectiveRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): this;
        m03(arg0: number): this;
        rotateYXZ(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4d_): this;
        rotateZ(arg0: number): this;
        "cofactor3x3(org.joml.Matrix3d)"(arg0: Internal.Matrix3d_): Internal.Matrix3d;
        billboardCylindrical(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_): this;
        arcball(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        "getNormalizedRotation(org.joml.Quaternionf)"(arg0: Quaternionf_): Quaternionf;
        setPerspectiveOffCenterFovLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        mapZYX(): this;
        orthoSymmetricLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: Internal.Matrix4d_): this;
        ortho(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: Internal.Matrix4d_): this;
        perspectiveOrigin(arg0: Internal.Vector3d_): Internal.Vector3d;
        get3x3(arg0: Internal.Matrix3d_): Internal.Matrix3d;
        mapnXnYnZ(): this;
        getNormalizedRotation(arg0: Internal.Quaterniond_): Internal.Quaterniond;
        negateX(arg0: Internal.Matrix4d_): this;
        invertPerspective(): this;
        testSphere(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        mapnYnZX(): this;
        scaleLocal(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4d_): this;
        orthoSymmetric(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): this;
        perspectiveLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: Internal.Matrix4d_): this;
        setRowColumn(arg0: number, arg1: number, arg2: number): this;
        scale(arg0: number): this;
        rotateLocalX(arg0: number): this;
        translationRotateScaleInvert(arg0: Internal.Vector3fc_, arg1: Internal.Quaternionfc_, arg2: number): this;
        "mul(org.joml.Matrix3x2fc,org.joml.Matrix4d)"(arg0: Internal.Matrix3x2fc_, arg1: Internal.Matrix4d_): this;
        "reflect(org.joml.Quaterniondc,org.joml.Vector3dc)"(arg0: Internal.Quaterniondc_, arg1: Internal.Vector3dc_): this;
        mulLocalAffine(arg0: Internal.Matrix4dc_): this;
        mapnZnYnX(arg0: Internal.Matrix4d_): this;
        translate(arg0: Internal.Vector3dc_, arg1: Internal.Matrix4d_): this;
        scale(arg0: number, arg1: number, arg2: number): this;
        mapnXYnZ(): this;
        "getTransposed(java.nio.DoubleBuffer)"(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        "get4x3Transposed(int,java.nio.DoubleBuffer)"(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        set(arg0: number[], arg1: number): this;
        translate(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4d_): this;
        rotateX(arg0: number): this;
        mapZnYnX(arg0: Internal.Matrix4d_): this;
        m30(): number;
        project(arg0: Internal.Vector3dc_, arg1: number[], arg2: Internal.Vector4d_): Internal.Vector4d;
        positiveZ(arg0: Internal.Vector3d_): Internal.Vector3d;
        "set3x3(org.joml.Matrix4dc)"(arg0: Internal.Matrix4dc_): this;
        mapXnYnZ(): this;
        "reflection(org.joml.Vector3dc,org.joml.Vector3dc)"(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        sub4x3(arg0: Internal.Matrix4dc_): this;
        perspectiveLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): this;
        "orthoSymmetricLH(double,double,double,double,org.joml.Matrix4d)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        "invertPerspectiveView(org.joml.Matrix4dc,org.joml.Matrix4d)"(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        rotateLocal(arg0: Internal.Quaterniondc_): this;
        "set(org.joml.Quaternionfc)"(arg0: Internal.Quaternionfc_): this;
        m01(arg0: number): this;
        mapnYZX(arg0: Internal.Matrix4d_): this;
        reflect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        shadow(arg0: Internal.Vector4d_, arg1: Internal.Matrix4d_): this;
        rotateLocal(arg0: Internal.Quaternionfc_, arg1: Internal.Matrix4d_): this;
        rotationTowardsXY(arg0: number, arg1: number): this;
        frustumAabb(arg0: Internal.Vector3d_, arg1: Internal.Vector3d_): this;
        "transformProject(double,double,double,double,org.joml.Vector3d)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Vector3d_): Internal.Vector3d;
        "set4x3(org.joml.Matrix4x3dc)"(arg0: Internal.Matrix4x3dc_): this;
        rotateLocalX(arg0: number, arg1: Internal.Matrix4d_): this;
        mulPerspectiveAffine(arg0: Internal.Matrix4dc_): this;
        translationRotateTowards(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_): this;
        mapnYZX(): this;
        m12(arg0: number): this;
        rotateAffineZYX(arg0: number, arg1: number, arg2: number): this;
        "rotateAffine(org.joml.Quaternionfc)"(arg0: Internal.Quaternionfc_): this;
        negateZ(arg0: Internal.Matrix4d_): this;
        invert(): this;
        rotateXYZ(arg0: Internal.Vector3d_): this;
        "invertPerspectiveView(org.joml.Matrix4x3dc,org.joml.Matrix4d)"(arg0: Internal.Matrix4x3dc_, arg1: Internal.Matrix4d_): this;
        "perspectiveOffCenterFovLH(double,double,double,double,double,double,org.joml.Matrix4d)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        setPerspectiveRect(arg0: number, arg1: number, arg2: number, arg3: number): this;
        m23(arg0: number): this;
        "perspectiveOffCenterFov(double,double,double,double,double,double,boolean)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        ortho(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        "mulPerspectiveAffine(org.joml.Matrix4dc,org.joml.Matrix4d)"(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        "getTransposed(java.nio.FloatBuffer)"(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        "get(double[],int)"(arg0: number[], arg1: number): number[];
        billboardSpherical(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_): this;
        lookAlong(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        "rotation(org.joml.Quaternionfc)"(arg0: Internal.Quaternionfc_): this;
        orthoSymmetricLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): this;
        getNormalizedRotation(arg0: Quaternionf_): Quaternionf;
        "set(org.joml.Matrix4dc)"(arg0: Internal.Matrix4dc_): this;
        "transformProject(org.joml.Vector3d)"(arg0: Internal.Vector3d_): Internal.Vector3d;
        "mulPerspectiveAffine(org.joml.Matrix4x3dc,org.joml.Matrix4d)"(arg0: Internal.Matrix4x3dc_, arg1: Internal.Matrix4d_): this;
        shadow(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4dc_, arg5: Internal.Matrix4d_): this;
        "shadow(org.joml.Vector4dc,double,double,double,double)"(arg0: Internal.Vector4dc_, arg1: number, arg2: number, arg3: number, arg4: number): this;
        "rotate(org.joml.Quaterniondc,org.joml.Matrix4d)"(arg0: Internal.Quaterniondc_, arg1: Internal.Matrix4d_): this;
        "add4x3(org.joml.Matrix4dc,org.joml.Matrix4d)"(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        isAffine(): boolean;
        invert(arg0: Internal.Matrix4d_): this;
        get4x3Transposed(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        "getTransposed(int,java.nio.DoubleBuffer)"(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        "translateLocal(org.joml.Vector3fc)"(arg0: Internal.Vector3fc_): this;
        mapYnXnZ(): this;
        m01(): number;
        rotateTranslation(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        set3x3(arg0: Internal.Matrix4dc_): this;
        invertFrustum(): this;
        "getNormalizedRotation(org.joml.Quaterniond)"(arg0: Internal.Quaterniond_): Internal.Quaterniond;
        mapYnZnX(arg0: Internal.Matrix4d_): this;
        "set(org.joml.AxisAngle4f)"(arg0: Internal.AxisAngle4f_): this;
        "shadow(double,double,double,double,org.joml.Matrix4dc)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4dc_): this;
        sub(arg0: Internal.Matrix4dc_): this;
        "get(int,java.nio.ByteBuffer)"(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        identity(): this;
        set4x3(arg0: Internal.Matrix4x3fc_): this;
        m12(): number;
        mapnZnXY(arg0: Internal.Matrix4d_): this;
        perspectiveOffCenterFovLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        mapnYnXnZ(): this;
        ortho(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        rotateAffine(arg0: number, arg1: number, arg2: number, arg3: number): this;
        "scale(org.joml.Vector3dc,org.joml.Matrix4d)"(arg0: Internal.Vector3dc_, arg1: Internal.Matrix4d_): this;
        reflection(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        "rotateLocal(org.joml.Quaterniondc,org.joml.Matrix4d)"(arg0: Internal.Quaterniondc_, arg1: Internal.Matrix4d_): this;
        clone(): any;
        mapXnYnZ(arg0: Internal.Matrix4d_): this;
        mapZnYnX(): this;
        mapnZnYX(): this;
        "normal(org.joml.Matrix4d)"(arg0: Internal.Matrix4d_): this;
        getTransposed(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        m23(): number;
        lookAtLH(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_, arg3: Internal.Matrix4d_): this;
        mul0(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        "shadow(double,double,double,double,org.joml.Matrix4dc,org.joml.Matrix4d)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4dc_, arg5: Internal.Matrix4d_): this;
        "set(org.joml.Matrix3dc)"(arg0: Internal.Matrix3dc_): this;
        get(arg0: number[]): number[];
        "mul(org.joml.Matrix4x3dc,org.joml.Matrix4d)"(arg0: Internal.Matrix4x3dc_, arg1: Internal.Matrix4d_): this;
        lookAtLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): this;
        determinant(): number;
        properties(): number;
        "rotation(double,org.joml.Vector3dc)"(arg0: number, arg1: Internal.Vector3dc_): this;
        rotateLocal(arg0: Internal.Quaterniondc_, arg1: Internal.Matrix4d_): this;
        mulLocalAffine(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        "perspectiveOffCenterFovLH(double,double,double,double,double,double,boolean)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        toString(): string;
        translationRotateScaleInvert(arg0: Internal.Vector3dc_, arg1: Internal.Quaterniondc_, arg2: number): this;
        rotationTowards(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        translationRotateInvert(arg0: Internal.Vector3fc_, arg1: Internal.Quaternionfc_): this;
        frustum(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        "perspective(double,double,double,double,boolean)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): this;
        rotateAffine(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        scaleAroundLocal(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        setOrthoLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        setOrthoSymmetricLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): this;
        mapnZnYnX(): this;
        mapnYnXZ(): this;
        mapZYnX(arg0: Internal.Matrix4d_): this;
        mapnYnXnZ(arg0: Internal.Matrix4d_): this;
        transformProject(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Vector3d_): Internal.Vector3d;
        orthoCrop(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        setRow(arg0: number, arg1: Internal.Vector4dc_): this;
        "set(org.joml.Matrix4x3fc)"(arg0: Internal.Matrix4x3fc_): this;
        mapnXYnZ(arg0: Internal.Matrix4d_): this;
        mul4x3ComponentWise(arg0: Internal.Matrix4dc_): this;
        "project(org.joml.Vector3dc,int[],org.joml.Vector3d)"(arg0: Internal.Vector3dc_, arg1: number[], arg2: Internal.Vector3d_): Internal.Vector3d;
        get4x3Transposed(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        mapnZnYX(arg0: Internal.Matrix4d_): this;
        mapnXnYnZ(arg0: Internal.Matrix4d_): this;
        scaleAroundLocal(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number, arg14: number, arg15: number): this;
        "project(double,double,double,int[],org.joml.Vector4d)"(arg0: number, arg1: number, arg2: number, arg3: number[], arg4: Internal.Vector4d_): Internal.Vector4d;
        "rotate(org.joml.AxisAngle4f)"(arg0: Internal.AxisAngle4f_): this;
        rotateTowardsXY(arg0: number, arg1: number, arg2: Internal.Matrix4d_): this;
        project(arg0: number, arg1: number, arg2: number, arg3: number[], arg4: Internal.Vector3d_): Internal.Vector3d;
        "frustum(double,double,double,double,double,double,boolean)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        mapYnZnX(): this;
        "unproject(double,double,double,int[],org.joml.Vector3d)"(arg0: number, arg1: number, arg2: number, arg3: number[], arg4: Internal.Vector3d_): Internal.Vector3d;
        "mul(org.joml.Matrix3x2dc,org.joml.Matrix4d)"(arg0: Internal.Matrix3x2dc_, arg1: Internal.Matrix4d_): this;
        rotateAroundLocal(arg0: Internal.Quaterniondc_, arg1: number, arg2: number, arg3: number): this;
        rotateTowards(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        "perspectiveOffCenterFov(double,double,double,double,double,double,org.joml.Matrix4d)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        m10(): number;
        get(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        "normalize3x3(org.joml.Matrix4d)"(arg0: Internal.Matrix4d_): this;
        mapYnXnZ(arg0: Internal.Matrix4d_): this;
        "translation(org.joml.Vector3fc)"(arg0: Internal.Vector3fc_): this;
        setLookAt(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): this;
        unprojectInvRay(arg0: number, arg1: number, arg2: number[], arg3: Internal.Vector3d_, arg4: Internal.Vector3d_): this;
        rotateLocalZ(arg0: number): this;
        equals(arg0: Internal.Matrix4dc_, arg1: number): boolean;
        setPerspective(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): this;
        mapZXY(): this;
        trapezoidCrop(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): this;
        "perspectiveRect(double,double,double,double,org.joml.Matrix4d)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        scale(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4d_): this;
        scaleLocal(arg0: number): this;
        mapnYnZnX(): this;
        tile(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        reflect(arg0: Internal.Quaterniondc_, arg1: Internal.Vector3dc_): this;
        m21(): number;
        translationRotateScaleMulAffine(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: Internal.Matrix4d_): this;
        mulLocal(arg0: Internal.Matrix4dc_): this;
        perspectiveFar(): number;
        getTransposed(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        translationRotateScale(arg0: Internal.Vector3dc_, arg1: Internal.Quaterniondc_, arg2: Internal.Vector3dc_): this;
        "getRow(int,org.joml.Vector4d)"(arg0: number, arg1: Internal.Vector4d_): Internal.Vector4d;
        mapnYnZnX(arg0: Internal.Matrix4d_): this;
        reflect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        set4x3(arg0: Internal.Matrix4dc_): this;
        static perspectiveOffCenterViewFromRectangle(arg0: Internal.Vector3d_, arg1: Internal.Vector3d_, arg2: Internal.Vector3d_, arg3: Internal.Vector3d_, arg4: number, arg5: boolean, arg6: Internal.Matrix4d_, arg7: Internal.Matrix4d_): void;
        m32(): number;
        reflection(arg0: Internal.Quaterniondc_, arg1: Internal.Vector3dc_): this;
        scaleXY(arg0: number, arg1: number): this;
        set(arg0: number, arg1: number, arg2: number): this;
        unproject(arg0: Internal.Vector3dc_, arg1: number[], arg2: Internal.Vector3d_): Internal.Vector3d;
        mapZXY(arg0: Internal.Matrix4d_): this;
        "translate(org.joml.Vector3fc)"(arg0: Internal.Vector3fc_): this;
        mapnZYnX(): this;
        get(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        get(arg0: Internal.Matrix4d_): this;
        transform(arg0: Internal.Vector4d_): Internal.Vector4d;
        lookAlong(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Matrix4d_): this;
        getUnnormalizedRotation(arg0: Quaternionf_): Quaternionf;
        "rotateLocal(org.joml.Quaternionfc)"(arg0: Internal.Quaternionfc_): this;
        normal(arg0: Internal.Matrix4d_): this;
        origin(arg0: Internal.Vector3d_): Internal.Vector3d;
        "add4x3(org.joml.Matrix4fc)"(arg0: Internal.Matrix4fc_): this;
        pick(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: Internal.Matrix4d_): this;
        arcball(arg0: number, arg1: Internal.Vector3dc_, arg2: number, arg3: number): this;
        unprojectInv(arg0: Internal.Vector3dc_, arg1: number[], arg2: Internal.Vector3d_): Internal.Vector3d;
        normalize3x3(arg0: Internal.Matrix4d_): this;
        obliqueZ(arg0: number, arg1: number): this;
        "get(double[])"(arg0: number[]): number[];
        mapZXnY(): this;
        mul(arg0: Internal.Matrix4x3dc_, arg1: Internal.Matrix4d_): this;
        translation(arg0: number, arg1: number, arg2: number): this;
        get4x3Transposed(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        invertFrustum(arg0: Internal.Matrix4d_): this;
        "normal(org.joml.Matrix3d)"(arg0: Internal.Matrix3d_): Internal.Matrix3d;
        set(arg0: Internal.Matrix4x3dc_): this;
        setPerspectiveLH(arg0: number, arg1: number, arg2: number, arg3: number): this;
        mul4x3ComponentWise(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        sub4x3(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        setFrustumLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        scaleAround(arg0: number, arg1: number, arg2: number, arg3: number): this;
        "add4x3(org.joml.Matrix4fc,org.joml.Matrix4d)"(arg0: Internal.Matrix4fc_, arg1: Internal.Matrix4d_): this;
        lookAt(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: Internal.Matrix4d_): this;
        rotateAffine(arg0: Internal.Quaternionfc_, arg1: Internal.Matrix4d_): this;
        mapXZnY(arg0: Internal.Matrix4d_): this;
        perspectiveOffCenterFov(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        rotationY(arg0: number): this;
        mapnZXY(arg0: Internal.Matrix4d_): this;
        mapnYXnZ(arg0: Internal.Matrix4d_): this;
        mul(arg0: Internal.Matrix3x2dc_): this;
        unprojectInv(arg0: number, arg1: number, arg2: number, arg3: number[], arg4: Internal.Vector3d_): Internal.Vector3d;
        setFloats(arg0: number, arg1: Internal.ByteBuffer_): this;
        "translationRotateScale(org.joml.Vector3fc,org.joml.Quaternionfc,org.joml.Vector3fc)"(arg0: Internal.Vector3fc_, arg1: Internal.Quaternionfc_, arg2: Internal.Vector3fc_): this;
        rotateLocal(arg0: number, arg1: number, arg2: number, arg3: number): this;
        rotateAffineYXZ(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4d_): this;
        translateLocal(arg0: Internal.Vector3dc_, arg1: Internal.Matrix4d_): this;
        perspectiveRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        "getRow(int,org.joml.Vector3d)"(arg0: number, arg1: Internal.Vector3d_): Internal.Vector3d;
        mapXnZnY(arg0: Internal.Matrix4d_): this;
        mapZnXnY(): this;
        scaling(arg0: Internal.Vector3dc_): this;
        rotationZYX(arg0: number, arg1: number, arg2: number): this;
        wait(arg0: number): void;
        invertPerspectiveView(arg0: Internal.Matrix4x3dc_, arg1: Internal.Matrix4d_): this;
        frustumLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        setOrtho(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        setTranslation(arg0: Internal.Vector3dc_): this;
        setPerspectiveOffCenterFov(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        ortho(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        shadow(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: Internal.Matrix4d_): this;
        lookAt(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): this;
        getColumn(arg0: number, arg1: Internal.Vector4d_): Internal.Vector4d;
        m03(): number;
        reflect(arg0: Internal.Quaterniondc_, arg1: Internal.Vector3dc_, arg2: Internal.Matrix4d_): this;
        mapZYX(arg0: Internal.Matrix4d_): this;
        orthoSymmetric(arg0: number, arg1: number, arg2: number, arg3: number): this;
        "rotate(org.joml.AxisAngle4f,org.joml.Matrix4d)"(arg0: Internal.AxisAngle4f_, arg1: Internal.Matrix4d_): this;
        mapYnZX(arg0: Internal.Matrix4d_): this;
        lookAlong(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        "get(int,java.nio.DoubleBuffer)"(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        shadow(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): this;
        "rotate(org.joml.AxisAngle4d)"(arg0: Internal.AxisAngle4d_): this;
        "transformDirection(org.joml.Vector3d)"(arg0: Internal.Vector3d_): Internal.Vector3d;
        "transformDirection(org.joml.Vector3dc,org.joml.Vector3d)"(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        translateLocal(arg0: Internal.Vector3fc_, arg1: Internal.Matrix4d_): this;
        orthoLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        set(arg0: Internal.Matrix4fc_): this;
        add4x3(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        "set(java.nio.FloatBuffer)"(arg0: Internal.FloatBuffer_): this;
        get(arg0: number[], arg1: number): number[];
        rotationAround(arg0: Internal.Quaterniondc_, arg1: number, arg2: number, arg3: number): this;
        "reflect(org.joml.Vector3dc,org.joml.Vector3dc)"(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        mulTranslationAffine(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        withLookAtUp(arg0: Internal.Vector3dc_, arg1: Internal.Matrix4d_): this;
        "transpose3x3(org.joml.Matrix3d)"(arg0: Internal.Matrix3d_): Internal.Matrix3d;
        translationRotateScale(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): this;
        invertPerspective(arg0: Internal.Matrix4d_): this;
        translationRotateScaleInvert(arg0: Internal.Vector3dc_, arg1: Internal.Quaterniondc_, arg2: Internal.Vector3dc_): this;
        mapnZnXY(): this;
        transformAffine(arg0: Internal.Vector4d_): Internal.Vector4d;
        assume(arg0: number): this;
        "transformDirection(double,double,double,org.joml.Vector3f)"(arg0: number, arg1: number, arg2: number, arg3: Vec3f_): Vec3f;
        transformProject(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): Internal.Vector3d;
        frustum(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        reflection(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        equals(arg0: any): boolean;
        setFromAddress(arg0: number): this;
        scale(arg0: Internal.Vector3dc_): this;
        rotateLocal(arg0: Internal.Quaternionfc_): this;
        mul3x3(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): this;
        rotationXYZ(arg0: number, arg1: number, arg2: number): this;
        "mul(org.joml.Matrix4dc)"(arg0: Internal.Matrix4dc_): this;
        arcball(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        translationRotate(arg0: number, arg1: number, arg2: number, arg3: Internal.Quaterniondc_): this;
        mulAffine(arg0: Internal.Matrix4dc_): this;
        rotateLocalZ(arg0: number, arg1: Internal.Matrix4d_): this;
        transformProject(arg0: Internal.Vector3d_): Internal.Vector3d;
        billboardSpherical(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        "get(int,java.nio.FloatBuffer)"(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        mapnZXY(): this;
        "set3x3(org.joml.Matrix3dc)"(arg0: Internal.Matrix3dc_): this;
        m10(arg0: number): this;
        scaleLocal(arg0: number, arg1: Internal.Matrix4d_): this;
        mul3x3(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: Internal.Matrix4d_): this;
        setOrtho(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        get(arg0: number[], arg1: number): number[];
        "perspectiveLH(double,double,double,double,org.joml.Matrix4d)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        "unprojectInv(double,double,double,int[],org.joml.Vector4d)"(arg0: number, arg1: number, arg2: number, arg3: number[], arg4: Internal.Vector4d_): Internal.Vector4d;
        mapXZnY(): this;
        mapnXnYZ(arg0: Internal.Matrix4d_): this;
        translate(arg0: number, arg1: number, arg2: number): this;
        perspective(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        reflect(arg0: number, arg1: number, arg2: number, arg3: number): this;
        negateY(): this;
        set(arg0: Internal.Matrix4dc_): this;
        rotate(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        lookAt(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_): this;
        set(arg0: number, arg1: Internal.FloatBuffer_): this;
        m21(arg0: number): this;
        "rotate(org.joml.AxisAngle4d,org.joml.Matrix4d)"(arg0: Internal.AxisAngle4d_, arg1: Internal.Matrix4d_): this;
        mapnYXnZ(): this;
        rotateAffineXYZ(arg0: number, arg1: number, arg2: number): this;
        "mul(org.joml.Matrix3x2dc)"(arg0: Internal.Matrix3x2dc_): this;
        transpose3x3(): this;
        "translationRotateScale(org.joml.Vector3dc,org.joml.Quaterniondc,double)"(arg0: Internal.Vector3dc_, arg1: Internal.Quaterniondc_, arg2: number): this;
        shadow(arg0: Internal.Vector4dc_, arg1: Internal.Matrix4dc_, arg2: Internal.Matrix4d_): this;
        orthoSymmetricLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        transpose3x3(arg0: Internal.Matrix4d_): this;
        mul(arg0: Internal.Matrix4fc_, arg1: Internal.Matrix4d_): this;
        mulOrthoAffine(arg0: Internal.Matrix4dc_): this;
        rotateZYX(arg0: Internal.Vector3d_): this;
        "orthoSymmetricLH(double,double,double,double,boolean)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): this;
        lerp(arg0: Internal.Matrix4dc_, arg1: number, arg2: Internal.Matrix4d_): this;
        getEulerAnglesZYX(arg0: Internal.Vector3d_): Internal.Vector3d;
        mul0(arg0: Internal.Matrix4dc_): this;
        getFloats(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        m32(arg0: number): this;
        mapYZX(): this;
        transpose(arg0: Internal.Matrix4d_): this;
        transformProject(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        setLookAt(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_): this;
        "rotation(org.joml.Quaterniondc)"(arg0: Internal.Quaterniondc_): this;
        originAffine(arg0: Internal.Vector3d_): Internal.Vector3d;
        lookAtLH(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_): this;
        cofactor3x3(arg0: Internal.Matrix3d_): Internal.Matrix3d;
        mapnZYX(arg0: Internal.Matrix4d_): this;
        rotateYXZ(arg0: number, arg1: number, arg2: number): this;
        getRow(arg0: number, arg1: Internal.Vector4d_): Internal.Vector4d;
        "getColumn(int,org.joml.Vector3d)"(arg0: number, arg1: Internal.Vector3d_): Internal.Vector3d;
        orthoLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: Internal.Matrix4d_): this;
        getTransposedFloats(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        transpose(): this;
        "set(float[])"(arg0: number[]): this;
        unprojectRay(arg0: Internal.Vector2dc_, arg1: number[], arg2: Internal.Vector3d_, arg3: Internal.Vector3d_): this;
        set(arg0: number[]): this;
        normalizedPositiveY(arg0: Internal.Vector3d_): Internal.Vector3d;
        mul(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        setLookAtLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): this;
        readExternal(arg0: Internal.ObjectInput_): void;
        getScale(arg0: Internal.Vector3d_): Internal.Vector3d;
        "unprojectInv(org.joml.Vector3dc,int[],org.joml.Vector4d)"(arg0: Internal.Vector3dc_, arg1: number[], arg2: Internal.Vector4d_): Internal.Vector4d;
        setFrustumLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        "unproject(org.joml.Vector3dc,int[],org.joml.Vector4d)"(arg0: Internal.Vector3dc_, arg1: number[], arg2: Internal.Vector4d_): Internal.Vector4d;
        setPerspectiveLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): this;
        shadow(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4dc_): this;
        "set4x3(org.joml.Matrix4x3fc)"(arg0: Internal.Matrix4x3fc_): this;
        perspectiveRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: Internal.Matrix4d_): this;
        mapnZYX(): this;
        getEulerAnglesXYZ(arg0: Internal.Vector3d_): Internal.Vector3d;
        mapnYZnX(arg0: Internal.Matrix4d_): this;
        normal(): this;
        mul(arg0: Internal.Matrix4x3fc_, arg1: Internal.Matrix4d_): this;
        unproject(arg0: number, arg1: number, arg2: number, arg3: number[], arg4: Internal.Vector3d_): Internal.Vector3d;
        set(arg0: Internal.Matrix4x3fc_): this;
        arcball(arg0: number, arg1: Internal.Vector3dc_, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        "frustumLH(double,double,double,double,double,double,org.joml.Matrix4d)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        transformAffine(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Vector4d_): Internal.Vector4d;
        mul(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number, arg14: number, arg15: number, arg16: Internal.Matrix4d_): this;
        scaleAroundLocal(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        mapXZY(arg0: Internal.Matrix4d_): this;
        frustumLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        mulAffineR(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        "rotateAffine(org.joml.Quaternionfc,org.joml.Matrix4d)"(arg0: Internal.Quaternionfc_, arg1: Internal.Matrix4d_): this;
        orthoLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        mul(arg0: Internal.Matrix3x2fc_): this;
        "set(org.joml.Quaterniondc)"(arg0: Internal.Quaterniondc_): this;
        setOrtho2DLH(arg0: number, arg1: number, arg2: number, arg3: number): this;
        "orthoSymmetric(double,double,double,double,boolean)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): this;
        transformPosition(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        mapnYZnX(): this;
        perspectiveOffCenter(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        "rotateLocal(org.joml.Quaterniondc)"(arg0: Internal.Quaterniondc_): this;
        m30(arg0: number): this;
        positiveX(arg0: Internal.Vector3d_): Internal.Vector3d;
        rotateY(arg0: number, arg1: Internal.Matrix4d_): this;
        mulLocal(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        "rotation(double,org.joml.Vector3fc)"(arg0: number, arg1: Internal.Vector3fc_): this;
        mapXnZY(): this;
        "transformDirection(double,double,double,org.joml.Vector3d)"(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): Internal.Vector3d;
        set(arg0: Internal.ByteBuffer_): this;
        rotateLocalY(arg0: number): this;
        lookAt(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_, arg3: Internal.Matrix4d_): this;
        "scaling(double)"(arg0: number): this;
        set(arg0: number[]): this;
        "getUnnormalizedRotation(org.joml.Quaterniond)"(arg0: Internal.Quaterniond_): Internal.Quaterniond;
        translationRotateScaleInvert(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): this;
        "getTransposed(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        m20(): number;
        "project(double,double,double,int[],org.joml.Vector3d)"(arg0: number, arg1: number, arg2: number, arg3: number[], arg4: Internal.Vector3d_): Internal.Vector3d;
        set(arg0: Internal.Quaterniondc_): this;
        frustum(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        mapnZnXnY(arg0: Internal.Matrix4d_): this;
        "rotate(double,org.joml.Vector3fc)"(arg0: number, arg1: Internal.Vector3fc_): this;
        withLookAtUp(arg0: number, arg1: number, arg2: number): this;
        "unprojectInv(double,double,double,int[],org.joml.Vector3d)"(arg0: number, arg1: number, arg2: number, arg3: number[], arg4: Internal.Vector3d_): Internal.Vector3d;
        perspectiveFov(): number;
        "project(org.joml.Vector3dc,int[],org.joml.Vector4d)"(arg0: Internal.Vector3dc_, arg1: number[], arg2: Internal.Vector4d_): Internal.Vector4d;
        reflect(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Matrix4d_): this;
        rotateY(arg0: number): this;
        positiveY(arg0: Internal.Vector3d_): Internal.Vector3d;
        perspectiveOffCenterFov(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        m31(): number;
        unprojectInvRay(arg0: Internal.Vector2dc_, arg1: number[], arg2: Internal.Vector3d_, arg3: Internal.Vector3d_): this;
        getTranslation(arg0: Internal.Vector3d_): Internal.Vector3d;
        rotate(arg0: Internal.AxisAngle4d_): this;
        getClass(): typeof any;
        rotate(arg0: Internal.Quaterniondc_): this;
        sub(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        determineProperties(): this;
        mapZnXnY(arg0: Internal.Matrix4d_): this;
        mul(arg0: Internal.Matrix3x2dc_, arg1: Internal.Matrix4d_): this;
        transformAffine(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        mapXnZnY(): this;
        "rotateAffine(org.joml.Quaterniondc,org.joml.Matrix4d)"(arg0: Internal.Quaterniondc_, arg1: Internal.Matrix4d_): this;
        "mul(org.joml.Matrix4dc,org.joml.Matrix4d)"(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        m02(arg0: number): this;
        ortho2DLH(arg0: number, arg1: number, arg2: number, arg3: number): this;
        lookAtPerspectiveLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: Internal.Matrix4d_): this;
        translateLocal(arg0: number, arg1: number, arg2: number): this;
        "set(float[],int)"(arg0: number[], arg1: number): this;
        mapnXnZY(arg0: Internal.Matrix4d_): this;
        mapnXnYZ(): this;
        ortho2DLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        translate(arg0: Internal.Vector3dc_): this;
        transform(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        setLookAtLH(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_): this;
        set(arg0: number, arg1: Internal.DoubleBuffer_): this;
        rotate(arg0: Internal.Quaternionfc_, arg1: Internal.Matrix4d_): this;
        mapYnZX(): this;
        getTransposed(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        "rotateTranslation(org.joml.Quaternionfc,org.joml.Matrix4d)"(arg0: Internal.Quaternionfc_, arg1: Internal.Matrix4d_): this;
        perspectiveOffCenterFovLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        m13(arg0: number): this;
        "shadow(org.joml.Vector4dc,double,double,double,double,org.joml.Matrix4d)"(arg0: Internal.Vector4dc_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: Internal.Matrix4d_): this;
        set(arg0: Internal.AxisAngle4d_): this;
        "translateLocal(org.joml.Vector3fc,org.joml.Matrix4d)"(arg0: Internal.Vector3fc_, arg1: Internal.Matrix4d_): this;
        rotation(arg0: number, arg1: Internal.Vector3fc_): this;
        swap(arg0: Internal.Matrix4d_): this;
        negateY(arg0: Internal.Matrix4d_): this;
        "set(double[])"(arg0: number[]): this;
        rotateZYX(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4d_): this;
        perspectiveFrustumSlice(arg0: number, arg1: number, arg2: Internal.Matrix4d_): this;
        mapnXnZnY(): this;
        rotate(arg0: Internal.AxisAngle4f_): this;
        getRowColumn(arg0: number, arg1: number): number;
        frustumLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        set(arg0: Internal.Vector4d_, arg1: Internal.Vector4d_, arg2: Internal.Vector4d_, arg3: Internal.Vector4d_): this;
        perspective(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: Internal.Matrix4d_): this;
        transformTranspose(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        project(arg0: Internal.Vector3dc_, arg1: number[], arg2: Internal.Vector3d_): Internal.Vector3d;
        mul(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number, arg14: number, arg15: number): this;
        "translationRotateScaleInvert(org.joml.Vector3fc,org.joml.Quaternionfc,org.joml.Vector3fc)"(arg0: Internal.Vector3fc_, arg1: Internal.Quaternionfc_, arg2: Internal.Vector3fc_): this;
        setPerspective(arg0: number, arg1: number, arg2: number, arg3: number): this;
        setLookAlong(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        "rotation(org.joml.AxisAngle4f)"(arg0: Internal.AxisAngle4f_): this;
        set(arg0: Internal.AxisAngle4f_): this;
        transformDirection(arg0: Vec3f_): Vec3f;
        wait(): void;
        get(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        mulPerspectiveAffine(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        "add4x3(org.joml.Matrix4dc)"(arg0: Internal.Matrix4dc_): this;
        setOrthoLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        mapnZYnX(arg0: Internal.Matrix4d_): this;
        rotateAffineYXZ(arg0: number, arg1: number, arg2: number): this;
        "rotateTranslation(org.joml.Quaterniondc,org.joml.Matrix4d)"(arg0: Internal.Quaterniondc_, arg1: Internal.Matrix4d_): this;
        "unproject(org.joml.Vector3dc,int[],org.joml.Vector3d)"(arg0: Internal.Vector3dc_, arg1: number[], arg2: Internal.Vector3d_): Internal.Vector3d;
        add(arg0: Internal.Matrix4dc_): this;
        unprojectRay(arg0: number, arg1: number, arg2: number[], arg3: Internal.Vector3d_, arg4: Internal.Vector3d_): this;
        perspectiveOffCenterFovLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: Internal.Matrix4d_): this;
        set(arg0: Internal.DoubleBuffer_): this;
        transformAab(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Vector3d_, arg7: Internal.Vector3d_): this;
        transformPosition(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): Internal.Vector3d;
        rotateAroundLocal(arg0: Internal.Quaterniondc_, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        m00(arg0: number): this;
        mapnXZY(arg0: Internal.Matrix4d_): this;
        get4x3(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        "mul(org.joml.Matrix4x3dc)"(arg0: Internal.Matrix4x3dc_): this;
        "get4x3Transposed(java.nio.DoubleBuffer)"(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        mulComponentWise(arg0: Internal.Matrix4dc_): this;
        rotateXYZ(arg0: number, arg1: number, arg2: number): this;
        normalize3x3(): this;
        withLookAtUp(arg0: Internal.Vector3dc_): this;
        getTransposed(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        "translate(org.joml.Vector3dc)"(arg0: Internal.Vector3dc_): this;
        "get(org.joml.Matrix4d)"(arg0: Internal.Matrix4d_): this;
        lookAtLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: Internal.Matrix4d_): this;
        transformPosition(arg0: Internal.Vector3d_): Internal.Vector3d;
        rotateLocalY(arg0: number, arg1: Internal.Matrix4d_): this;
        scaleAround(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        "translate(org.joml.Vector3dc,org.joml.Matrix4d)"(arg0: Internal.Vector3dc_, arg1: Internal.Matrix4d_): this;
        m11(arg0: number): this;
        scaling(arg0: number): this;
        add4x3(arg0: Internal.Matrix4dc_): this;
        perspectiveOffCenterFov(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        setRotationYXZ(arg0: number, arg1: number, arg2: number): this;
        "orthoLH(double,double,double,double,double,double,boolean)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        invertPerspectiveView(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        mapnXnZY(): this;
        add4x3(arg0: Internal.Matrix4fc_, arg1: Internal.Matrix4d_): this;
        get(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        scaleAround(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        mulComponentWise(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        translationRotateScaleInvert(arg0: Internal.Vector3fc_, arg1: Internal.Quaternionfc_, arg2: Internal.Vector3fc_): this;
        rotateAffine(arg0: Internal.Quaterniondc_, arg1: Internal.Matrix4d_): this;
        rotateXYZ(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4d_): this;
        invertAffine(): this;
        setPerspectiveRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): this;
        shadow(arg0: Internal.Vector4dc_, arg1: number, arg2: number, arg3: number, arg4: number): this;
        rotate(arg0: Internal.Quaterniondc_, arg1: Internal.Matrix4d_): this;
        get(arg0: number[]): number[];
        toString(arg0: Internal.NumberFormat_): string;
        setFromIntrinsic(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): this;
        "transformProject(double,double,double,double,org.joml.Vector4d)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Vector4d_): Internal.Vector4d;
        "normalize3x3(org.joml.Matrix3d)"(arg0: Internal.Matrix3d_): Internal.Matrix3d;
        setOrthoSymmetricLH(arg0: number, arg1: number, arg2: number, arg3: number): this;
        "mul(org.joml.Matrix4f)"(arg0: Matrix4f_): this;
        "orthoLH(double,double,double,double,double,double,org.joml.Matrix4d)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        mulPerspectiveAffine(arg0: Internal.Matrix4x3dc_, arg1: Internal.Matrix4d_): this;
        rotateAffineXYZ(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4d_): this;
        writeExternal(arg0: Internal.ObjectOutput_): void;
        frustumRayDir(arg0: number, arg1: number, arg2: Internal.Vector3d_): Internal.Vector3d;
        "get(java.nio.DoubleBuffer)"(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        mapYnXZ(): this;
        m00(): number;
        "unproject(double,double,double,int[],org.joml.Vector4d)"(arg0: number, arg1: number, arg2: number, arg3: number[], arg4: Internal.Vector4d_): Internal.Vector4d;
        affineSpan(arg0: Internal.Vector3d_, arg1: Internal.Vector3d_, arg2: Internal.Vector3d_, arg3: Internal.Vector3d_): this;
        "transformProject(org.joml.Vector4d)"(arg0: Internal.Vector4d_): Internal.Vector4d;
        "translate(org.joml.Vector3fc,org.joml.Matrix4d)"(arg0: Internal.Vector3fc_, arg1: Internal.Matrix4d_): this;
        mapYnXZ(arg0: Internal.Matrix4d_): this;
        setOrthoSymmetric(arg0: number, arg1: number, arg2: number, arg3: number): this;
        notifyAll(): void;
        mapnXZnY(): this;
        add4x3(arg0: Internal.Matrix4fc_): this;
        transformTranspose(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Vector4d_): Internal.Vector4d;
        setTransposed(arg0: Internal.Matrix4dc_): this;
        getTransposed(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        transformDirection(arg0: Internal.Vector3d_): Internal.Vector3d;
        m11(): number;
        determinantAffine(): number;
        transformDirection(arg0: number, arg1: number, arg2: number, arg3: Vec3f_): Vec3f;
        rotateTowards(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        pick(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[]): this;
        rotateTowards(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        "set(int,java.nio.FloatBuffer)"(arg0: number, arg1: Internal.FloatBuffer_): this;
        fma4x3(arg0: Internal.Matrix4dc_, arg1: number): this;
        m22(): number;
        translationRotateInvert(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): this;
        "reflect(org.joml.Quaterniondc,org.joml.Vector3dc,org.joml.Matrix4d)"(arg0: Internal.Quaterniondc_, arg1: Internal.Vector3dc_, arg2: Internal.Matrix4d_): this;
        set(arg0: Internal.Quaternionfc_): this;
        get(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        "cofactor3x3(org.joml.Matrix4d)"(arg0: Internal.Matrix4d_): this;
        "perspectiveOffCenter(double,double,double,double,double,double,boolean)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        "mul(org.joml.Matrix4fc,org.joml.Matrix4d)"(arg0: Internal.Matrix4fc_, arg1: Internal.Matrix4d_): this;
        "perspective(double,double,double,double,org.joml.Matrix4d)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        "getTransposed(int,java.nio.FloatBuffer)"(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        "ortho(double,double,double,double,double,double,org.joml.Matrix4d)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        "transformDirection(org.joml.Vector3f)"(arg0: Vec3f_): Vec3f;
        setPerspectiveOffCenterFovLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        "rotation(org.joml.AxisAngle4d)"(arg0: Internal.AxisAngle4d_): this;
        m33(): number;
        mapYXZ(): this;
        "get(float[],int)"(arg0: number[], arg1: number): number[];
        "getTransposed(int,java.nio.ByteBuffer)"(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        transformDirection(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): Internal.Vector3d;
        getTransposed(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        testPoint(arg0: number, arg1: number, arg2: number): boolean;
        scaling(arg0: number, arg1: number, arg2: number): this;
        project(arg0: number, arg1: number, arg2: number, arg3: number[], arg4: Internal.Vector4d_): Internal.Vector4d;
        lookAtPerspective(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: Internal.Matrix4d_): this;
        wait(arg0: number, arg1: number): void;
        perspectiveLH(arg0: number, arg1: number, arg2: number, arg3: number): this;
        perspectiveLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        ortho2D(arg0: number, arg1: number, arg2: number, arg3: number): this;
        frustumPlane(arg0: number, arg1: Internal.Vector4d_): Internal.Vector4d;
        getUnnormalizedRotation(arg0: Internal.Quaterniond_): Internal.Quaterniond;
        "transformProject(org.joml.Vector4dc,org.joml.Vector4d)"(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        perspectiveOffCenterFovLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        translate(arg0: Internal.Vector3fc_): this;
        frustumCorner(arg0: number, arg1: Internal.Vector3d_): Internal.Vector3d;
        get(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        "transformDirection(org.joml.Vector3fc,org.joml.Vector3f)"(arg0: Internal.Vector3fc_, arg1: Vec3f_): Vec3f;
        setPerspectiveOffCenterFov(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        transformProject(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Vector4d_): Internal.Vector4d;
        mulAffineR(arg0: Internal.Matrix4dc_): this;
        mulAffine(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        "getUnnormalizedRotation(org.joml.Quaternionf)"(arg0: Quaternionf_): Quaternionf;
        "get(int,int)"(arg0: number, arg1: number): number;
        "mul(org.joml.Matrix3x2fc)"(arg0: Internal.Matrix3x2fc_): this;
        ortho2D(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        set3x3(arg0: Internal.Matrix3dc_): this;
        transform(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Vector4d_): Internal.Vector4d;
        "set(double[],int)"(arg0: number[], arg1: number): this;
        mapZXnY(arg0: Internal.Matrix4d_): this;
        set "(org.joml.AxisAngle4d)"(arg0: Internal.AxisAngle4d_)
        get finite(): boolean
        set floats(arg0: Internal.ByteBuffer_)
        set "(org.joml.Matrix4fc)"(arg0: Internal.Matrix4fc_)
        set "(org.joml.Matrix4x3dc)"(arg0: Internal.Matrix4x3dc_)
        set "(java.nio.DoubleBuffer)"(arg0: Internal.DoubleBuffer_)
        set "(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_)
        set "(org.joml.Quaternionfc)"(arg0: Internal.Quaternionfc_)
        set "(org.joml.Matrix4dc)"(arg0: Internal.Matrix4dc_)
        get affine(): boolean
        set "(org.joml.AxisAngle4f)"(arg0: Internal.AxisAngle4f_)
        set "(org.joml.Matrix3dc)"(arg0: Internal.Matrix3dc_)
        set "(org.joml.Matrix4x3fc)"(arg0: Internal.Matrix4x3fc_)
        set translation(arg0: Internal.Vector3dc_)
        set "(java.nio.FloatBuffer)"(arg0: Internal.FloatBuffer_)
        set fromAddress(arg0: number)
        set "(float[])"(arg0: number[])
        set "(org.joml.Quaterniondc)"(arg0: Internal.Quaterniondc_)
        get class(): typeof any
        set "(double[])"(arg0: number[])
        set transposed(arg0: Internal.Matrix4dc_)
    }
    type Matrix4d_ = Matrix4d;
    abstract class Selection implements Internal.Predicate<BlockPos> {
        constructor()
        getClass(): typeof any;
        abstract test(arg0: BlockPos_): boolean;
        static not<T>(arg0: Internal.Predicate_<T>): Internal.Predicate<T>;
        abstract substract(arg0: Internal.Selection_): this;
        static of(arg0: Internal.BoundingBox_): Internal.Selection;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        negate(): Internal.Predicate<BlockPos>;
        wait(arg0: number, arg1: number): void;
        abstract copy(): this;
        static isEqual<T>(arg0: any): Internal.Predicate<T>;
        abstract forEach(arg0: Internal.Consumer_<BlockPos>): void;
        abstract makeOutline(arg0: Internal.Outliner_, arg1: any): Internal.Outline$OutlineParams;
        and(arg0: Internal.Predicate_<BlockPos>): Internal.Predicate<BlockPos>;
        hashCode(): number;
        abstract getCenter(): Vec3d;
        or(arg0: Internal.Predicate_<BlockPos>): Internal.Predicate<BlockPos>;
        wait(): void;
        makeOutline(arg0: Internal.Outliner_): Internal.Outline$OutlineParams;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        abstract add(arg0: Internal.Selection_): this;
        get class(): typeof any
        get center(): Vec3d
    }
    type Selection_ = Selection;
    interface LongFunction <R> {
        abstract apply(arg0: number): R;
        (arg0: number): R;
    }
    type LongFunction_<R> = ((arg0: number)=> R) | LongFunction<R>;
    interface Saddleable {
        getSaddleSoundEvent(): Internal.SoundEvent;
        abstract equipSaddle(arg0: Internal.SoundSource_): void;
        abstract isSaddled(): boolean;
        abstract isSaddleable(): boolean;
        get saddleSoundEvent(): Internal.SoundEvent
        get saddled(): boolean
        get saddleable(): boolean
    }
    type Saddleable_ = Saddleable;
    class ProtectedBlockProcessor extends Internal.StructureProcessor {
        constructor(arg0: Internal.TagKey_<Internal.Block>)
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        processEntity(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.StructureTemplate$StructureEntityInfo_, arg3: Internal.StructureTemplate$StructureEntityInfo_, arg4: Internal.StructurePlaceSettings_, arg5: Internal.StructureTemplate_): Internal.StructureTemplate$StructureEntityInfo;
        wait(): void;
        process(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: BlockPos_, arg3: Internal.StructureTemplate$StructureBlockInfo_, arg4: Internal.StructureTemplate$StructureBlockInfo_, arg5: Internal.StructurePlaceSettings_, arg6: Internal.StructureTemplate_): Internal.StructureTemplate$StructureBlockInfo;
        wait(arg0: number): void;
        processBlock(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: BlockPos_, arg3: Internal.StructureTemplate$StructureBlockInfo_, arg4: Internal.StructureTemplate$StructureBlockInfo_, arg5: Internal.StructurePlaceSettings_): Internal.StructureTemplate$StructureBlockInfo;
        finalizeProcessing(arg0: Internal.ServerLevelAccessor_, arg1: BlockPos_, arg2: BlockPos_, arg3: Internal.List_<Internal.StructureTemplate$StructureBlockInfo>, arg4: Internal.List_<Internal.StructureTemplate$StructureBlockInfo>, arg5: Internal.StructurePlaceSettings_): Internal.List<Internal.StructureTemplate$StructureBlockInfo>;
        equals(arg0: any): boolean;
        callGetType(): Internal.StructureProcessorType<any>;
        get class(): typeof any
        static readonly CODEC: Internal.Codec<Internal.ProtectedBlockProcessor>;
        readonly cannotReplace: Internal.TagKey<Internal.Block>;
    }
    type ProtectedBlockProcessor_ = ProtectedBlockProcessor;
    class RecipeTypeFunction extends Internal.BaseFunction implements Internal.WrappedJS {
        constructor(event: Internal.RecipesEventJS_, schemaType: Internal.RecipeSchemaType_)
        preventExtensions(): void;
        static getFunctionPrototype(scope: Internal.Scriptable_, cx: Internal.Context_): Internal.Scriptable;
        static "hasProperty(dev.latvian.mods.rhino.Scriptable,java.lang.String,dev.latvian.mods.rhino.Context)"(obj: Internal.Scriptable_, name: string, cx: Internal.Context_): boolean;
        setImmunePrototypeProperty(value: any): void;
        static getArrayPrototype(scope: Internal.Scriptable_, cx: Internal.Context_): Internal.Scriptable;
        static putProperty(obj: Internal.Scriptable_, key: Internal.Symbol_, value: any, cx: Internal.Context_): void;
        "get(dev.latvian.mods.rhino.Context,java.lang.String,dev.latvian.mods.rhino.Scriptable)"(cx: Internal.Context_, name: string, start: Internal.Scriptable_): any;
        static putProperty(obj: Internal.Scriptable_, name: string, value: any, cx: Internal.Context_): void;
        static "putProperty(dev.latvian.mods.rhino.Scriptable,int,java.lang.Object,dev.latvian.mods.rhino.Context)"(obj: Internal.Scriptable_, index: number, value: any, cx: Internal.Context_): void;
        abstract get(arg0: Internal.Context_, arg1: number, arg2: Internal.Scriptable_): any;
        abstract setParentScope(arg0: Internal.Scriptable_): void;
        "setAttributes(dev.latvian.mods.rhino.Context,int,int)"(cx: Internal.Context_, index: number, attributes: number): void;
        "put(dev.latvian.mods.rhino.Context,dev.latvian.mods.rhino.Symbol,dev.latvian.mods.rhino.Scriptable,java.lang.Object)"(cx: Internal.Context_, key: Internal.Symbol_, start: Internal.Scriptable_, value: any): void;
        getTypeOf(): Internal.MemberType;
        abstract getIds(arg0: Internal.Context_): any[];
        static deleteProperty(obj: Internal.Scriptable_, index: number, cx: Internal.Context_): boolean;
        defineOwnProperties(cx: Internal.Context_, props: Internal.ScriptableObject_): void;
        static getTopScopeValue(scope: Internal.Scriptable_, key: any, cx: Internal.Context_): any;
        "delete(dev.latvian.mods.rhino.Context,dev.latvian.mods.rhino.Symbol)"(cx: Internal.Context_, key: Internal.Symbol_): void;
        setAttributes(cx: Internal.Context_, name: string, attributes: number): void;
        associateValue(key: any, value: any): any;
        abstract getParentScope(): Internal.Scriptable;
        setAttributes(cx: Internal.Context_, key: Internal.Symbol_, attributes: number): void;
        static defineClass<T extends Internal.Scriptable>(scope: Internal.Scriptable_, clazz: T, cx: Internal.Context_): void;
        "delete(dev.latvian.mods.rhino.Context,java.lang.String)"(cx: Internal.Context_, name: string): void;
        getLength(): number;
        avoidObjectDetection(): boolean;
        static getClassPrototype(scope: Internal.Scriptable_, className: string, cx: Internal.Context_): Internal.Scriptable;
        put(cx: Internal.Context_, name: string, start: Internal.Scriptable_, value: any): void;
        createRecipe(args: any[]): Internal.RecipeJS;
        static getProperty(obj: Internal.Scriptable_, key: Internal.Symbol_, cx: Internal.Context_): any;
        getClass(): typeof any;
        static hasProperty(obj: Internal.Scriptable_, name: string, cx: Internal.Context_): boolean;
        abstract "delete(dev.latvian.mods.rhino.Context,int)"(arg0: Internal.Context_, arg1: number): void;
        call(arg0: Internal.Context_, arg1: Internal.Scriptable_, arg2: Internal.Scriptable_, arg3: any[]): any;
        hasInstance(cx: Internal.Context_, instance: Internal.Scriptable_): boolean;
        getExternalArrayData(): Internal.ExternalArrayData;
        abstract put(arg0: Internal.Context_, arg1: number, arg2: Internal.Scriptable_, arg3: any): void;
        static "getProperty(dev.latvian.mods.rhino.Scriptable,java.lang.String,dev.latvian.mods.rhino.Context)"(obj: Internal.Scriptable_, name: string, cx: Internal.Context_): any;
        "defineProperty(dev.latvian.mods.rhino.Context,dev.latvian.mods.rhino.Symbol,java.lang.Object,int)"(cx: Internal.Context_, key: Internal.Symbol_, value: any, attributes: number): void;
        "initPrototypeMethod(java.lang.Object,int,java.lang.String,java.lang.String,int,dev.latvian.mods.rhino.Context)"(tag: any, id: number, propertyName: string, functionName: string, arity: number, cx: Internal.Context_): Internal.IdFunctionObject;
        static defineConstProperty(destination: Internal.Scriptable_, propertyName: string, cx: Internal.Context_): void;
        sealObject(cx: Internal.Context_): void;
        initPrototypeMethod(tag: any, id: number, name: string, arity: number, cx: Internal.Context_): Internal.IdFunctionObject;
        abstract has(arg0: Internal.Context_, arg1: number, arg2: Internal.Scriptable_): boolean;
        createObject(cx: Internal.Context_, scope: Internal.Scriptable_): Internal.Scriptable;
        static deleteProperty(obj: Internal.Scriptable_, name: string, cx: Internal.Context_): boolean;
        "get(dev.latvian.mods.rhino.Context,dev.latvian.mods.rhino.Symbol,dev.latvian.mods.rhino.Scriptable)"(cx: Internal.Context_, key: Internal.Symbol_, start: Internal.Scriptable_): any;
        "initPrototypeValue(int,dev.latvian.mods.rhino.Symbol,java.lang.Object,int)"(id: number, key: Internal.Symbol_, value: any, attributes: number): void;
        static defineProperty(destination: Internal.Scriptable_, propertyName: string, value: any, attributes: number, cx: Internal.Context_): void;
        getAttributes(cx: Internal.Context_, index: number): number;
        static "deleteProperty(dev.latvian.mods.rhino.Scriptable,int,dev.latvian.mods.rhino.Context)"(obj: Internal.Scriptable_, index: number, cx: Internal.Context_): boolean;
        getArity(): number;
        toString(): string;
        notifyAll(): void;
        "initPrototypeValue(int,java.lang.String,java.lang.Object,int)"(id: number, name: string, value: any, attributes: number): void;
        setGetterOrSetter(cx: Internal.Context_, name: string, index: number, getterOrSetter: dev.latvian.mods.rhino.Callable_, isSetter: boolean): void;
        enumerationIteratorNext(cx: Internal.Context_, currentId: Internal.Consumer_<any>): boolean;
        static defineClass<T extends Internal.Scriptable>(scope: Internal.Scriptable_, clazz: T, sealed: boolean, mapInheritance: boolean, cx: Internal.Context_): string;
        has(cx: Internal.Context_, key: Internal.Symbol_, start: Internal.Scriptable_): boolean;
        static getProperty(obj: Internal.Scriptable_, name: string, cx: Internal.Context_): any;
        size(): number;
        static "putProperty(dev.latvian.mods.rhino.Scriptable,java.lang.String,java.lang.Object,dev.latvian.mods.rhino.Context)"(obj: Internal.Scriptable_, name: string, value: any, cx: Internal.Context_): void;
        execIdCall(f: Internal.IdFunctionObject_, cx: Internal.Context_, scope: Internal.Scriptable_, thisObj: Internal.Scriptable_, args: any[]): any;
        static getObjectPrototype(scope: Internal.Scriptable_, cx: Internal.Context_): Internal.Scriptable;
        wait(arg0: number): void;
        construct(cx: Internal.Context_, scope: Internal.Scriptable_, args: any[]): Internal.Scriptable;
        initPrototypeValue(id: number, key: Internal.Symbol_, value: any, attributes: number): void;
        defineProperty(cx: Internal.Context_, propertyName: string, value: any, attributes: number): void;
        initPrototypeValue(id: number, name: string, value: any, attributes: number): void;
        setAttributes(cx: Internal.Context_, index: number, attributes: number): void;
        putConst(cx: Internal.Context_, name: string, start: Internal.Scriptable_, value: any): void;
        static "getProperty(dev.latvian.mods.rhino.Scriptable,dev.latvian.mods.rhino.Symbol,dev.latvian.mods.rhino.Context)"(obj: Internal.Scriptable_, key: Internal.Symbol_, cx: Internal.Context_): any;
        defineProperty(cx: Internal.Context_, propertyName: string, delegateTo: any, getter: Internal.WrappedExecutable_, setter: Internal.WrappedExecutable_, attributes: number): void;
        getClassName(): string;
        defineFunctionProperties(cx: Internal.Context_, names: string[], clazz: typeof any, attributes: number): void;
        "delete"(cx: Internal.Context_, name: string): void;
        static putProperty(obj: Internal.Scriptable_, index: number, value: any, cx: Internal.Context_): void;
        abstract "delete"(arg0: Internal.Context_, arg1: number): void;
        "initPrototypeMethod(java.lang.Object,int,dev.latvian.mods.rhino.Symbol,java.lang.String,int,dev.latvian.mods.rhino.Context)"(tag: any, id: number, key: Internal.Symbol_, functionName: string, arity: number, cx: Internal.Context_): Internal.IdFunctionObject;
        static getGeneratorFunctionPrototype(scope: Internal.Scriptable_, cx: Internal.Context_): Internal.Scriptable;
        "put(dev.latvian.mods.rhino.Context,java.lang.String,dev.latvian.mods.rhino.Scriptable,java.lang.Object)"(cx: Internal.Context_, name: string, start: Internal.Scriptable_, value: any): void;
        static defineClass<T extends Internal.Scriptable>(scope: Internal.Scriptable_, clazz: T, sealed: boolean, cx: Internal.Context_): void;
        notify(): void;
        initPrototypeMethod(tag: any, id: number, propertyName: string, functionName: string, arity: number, cx: Internal.Context_): Internal.IdFunctionObject;
        static putConstProperty(obj: Internal.Scriptable_, name: string, value: any, cx: Internal.Context_): void;
        hasPrototypeMap(): boolean;
        static redefineProperty(obj: Internal.Scriptable_, name: string, isConst: boolean, cx: Internal.Context_): void;
        static "putProperty(dev.latvian.mods.rhino.Scriptable,dev.latvian.mods.rhino.Symbol,java.lang.Object,dev.latvian.mods.rhino.Context)"(obj: Internal.Scriptable_, key: Internal.Symbol_, value: any, cx: Internal.Context_): void;
        get(cx: Internal.Context_, key: any): any;
        get(cx: Internal.Context_, name: string, start: Internal.Scriptable_): any;
        abstract getPrototype(arg0: Internal.Context_): Internal.Scriptable;
        static getDefaultValue(object: Internal.Scriptable_, typeHint: typeof any, cx: Internal.Context_): any;
        abstract "put(dev.latvian.mods.rhino.Context,int,dev.latvian.mods.rhino.Scriptable,java.lang.Object)"(arg0: Internal.Context_, arg1: number, arg2: Internal.Scriptable_, arg3: any): void;
        enumerationIteratorHasNext(cx: Internal.Context_, currentId: Internal.Consumer_<any>): boolean;
        static "getProperty(dev.latvian.mods.rhino.Scriptable,int,dev.latvian.mods.rhino.Context)"(obj: Internal.Scriptable_, index: number, cx: Internal.Context_): any;
        abstract "has(dev.latvian.mods.rhino.Context,int,dev.latvian.mods.rhino.Scriptable)"(arg0: Internal.Context_, arg1: number, arg2: Internal.Scriptable_): boolean;
        isConst(name: string): boolean;
        getAttributes(cx: Internal.Context_, key: Internal.Symbol_): number;
        initPrototypeConstructor(f: Internal.IdFunctionObject_, cx: Internal.Context_): void;
        static "deleteProperty(dev.latvian.mods.rhino.Scriptable,java.lang.String,dev.latvian.mods.rhino.Context)"(obj: Internal.Scriptable_, name: string, cx: Internal.Context_): boolean;
        "getAttributes(dev.latvian.mods.rhino.Context,int)"(cx: Internal.Context_, index: number): number;
        isExtensible(): boolean;
        wait(): void;
        abstract setPrototype(arg0: Internal.Scriptable_): void;
        getGetterOrSetter(name: string, index: number, isSetter: boolean): any;
        getAttributes(cx: Internal.Context_, name: string): number;
        activatePrototypeMap(maxPrototypeId: number): void;
        defineProperty(cx: Internal.Context_, key: Internal.Symbol_, value: any, attributes: number): void;
        static getPropertyIds(cx: Internal.Context_, obj: Internal.Scriptable_): any[];
        getAssociatedValue(key: any): any;
        "defineProperty(dev.latvian.mods.rhino.Context,java.lang.String,java.lang.Object,int)"(cx: Internal.Context_, propertyName: string, value: any, attributes: number): void;
        "delete"(cx: Internal.Context_, key: Internal.Symbol_): void;
        initPrototypeMethod(tag: any, id: number, key: Internal.Symbol_, functionName: string, arity: number, cx: Internal.Context_): Internal.IdFunctionObject;
        static "hasProperty(dev.latvian.mods.rhino.Scriptable,int,dev.latvian.mods.rhino.Context)"(obj: Internal.Scriptable_, index: number, cx: Internal.Context_): boolean;
        static getProperty(obj: Internal.Scriptable_, index: number, cx: Internal.Context_): any;
        "has(dev.latvian.mods.rhino.Context,java.lang.String,dev.latvian.mods.rhino.Scriptable)"(cx: Internal.Context_, name: string, start: Internal.Scriptable_): boolean;
        isEmpty(): boolean;
        wait(arg0: number, arg1: number): void;
        has(cx: Internal.Context_, name: string, start: Internal.Scriptable_): boolean;
        defineConst(cx: Internal.Context_, name: string, start: Internal.Scriptable_): void;
        "defineProperty(dev.latvian.mods.rhino.Context,java.lang.String,java.lang.Class,int)"(cx: Internal.Context_, propertyName: string, clazz: typeof any, attributes: number): void;
        defineOwnProperty(cx: Internal.Context_, key: any, desc: Internal.ScriptableObject_): void;
        getFunctionName(): string;
        abstract getDefaultValue(arg0: Internal.Context_, arg1: typeof any): any;
        setExternalArrayData(cx: Internal.Context_, array: Internal.ExternalArrayData_): void;
        "getAttributes(dev.latvian.mods.rhino.Context,java.lang.String)"(cx: Internal.Context_, name: string): number;
        get(cx: Internal.Context_, key: Internal.Symbol_, start: Internal.Scriptable_): any;
        static hasProperty(obj: Internal.Scriptable_, key: Internal.Symbol_, cx: Internal.Context_): boolean;
        getMod(): string;
        "setAttributes(dev.latvian.mods.rhino.Context,java.lang.String,int)"(cx: Internal.Context_, name: string, attributes: number): void;
        isSealed(cx: Internal.Context_): boolean;
        getAllIds(cx: Internal.Context_): any[];
        "has(dev.latvian.mods.rhino.Context,dev.latvian.mods.rhino.Symbol,dev.latvian.mods.rhino.Scriptable)"(cx: Internal.Context_, key: Internal.Symbol_, start: Internal.Scriptable_): boolean;
        defineProperty(cx: Internal.Context_, propertyName: string, clazz: typeof any, attributes: number): void;
        static hasProperty(obj: Internal.Scriptable_, index: number, cx: Internal.Context_): boolean;
        exportAsJSClass(maxPrototypeId: number, scope: Internal.Scriptable_, sealed: boolean, cx: Internal.Context_): Internal.IdFunctionObject;
        abstract "get(dev.latvian.mods.rhino.Context,int,dev.latvian.mods.rhino.Scriptable)"(arg0: Internal.Context_, arg1: number, arg2: Internal.Scriptable_): any;
        static "hasProperty(dev.latvian.mods.rhino.Scriptable,dev.latvian.mods.rhino.Symbol,dev.latvian.mods.rhino.Context)"(obj: Internal.Scriptable_, key: Internal.Symbol_, cx: Internal.Context_): boolean;
        "setAttributes(dev.latvian.mods.rhino.Context,dev.latvian.mods.rhino.Symbol,int)"(cx: Internal.Context_, key: Internal.Symbol_, attributes: number): void;
        hashCode(): number;
        getExternalArrayLength(): any;
        "getAttributes(dev.latvian.mods.rhino.Context,dev.latvian.mods.rhino.Symbol)"(cx: Internal.Context_, key: Internal.Symbol_): number;
        static getTopLevelScope(obj: Internal.Scriptable_): Internal.Scriptable;
        equals(obj: any): boolean;
        put(cx: Internal.Context_, key: Internal.Symbol_, start: Internal.Scriptable_, value: any): void;
        set immunePrototypeProperty(value: any)
        set parentScope(arg0: Internal.Scriptable_)
        get typeOf(): Internal.MemberType
        get parentScope(): Internal.Scriptable
        get length(): number
        get class(): typeof any
        get externalArrayData(): Internal.ExternalArrayData
        get arity(): number
        get className(): string
        get extensible(): boolean
        set prototype(arg0: Internal.Scriptable_)
        get empty(): boolean
        get functionName(): string
        get mod(): string
        get externalArrayLength(): any
        readonly schemaType: Internal.RecipeSchemaType;
        static readonly SKIP_ERROR: (Internal.Pattern) & (Internal.Pattern);
        readonly id: ResourceLocation;
        readonly idString: string;
        readonly event: Internal.RecipesEventJS;
    }
    type RecipeTypeFunction_ = RecipeTypeFunction;
    class LayerDefinition {
        getClass(): typeof any;
        hashCode(): number;
        bakeRoot(): Internal.ModelPart;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        static create(arg0: Internal.MeshDefinition_, arg1: number, arg2: number): Internal.LayerDefinition;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
    }
    type LayerDefinition_ = LayerDefinition;
    class WeightedStateProvider extends Internal.BlockStateProvider {
        constructor(arg0: any_<Internal.BlockState>)
        constructor(arg0: any_<Internal.BlockState>)
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        static simple(arg0: Internal.Block_): Internal.SimpleStateProvider;
        hashCode(): number;
        static simple(arg0: Internal.BlockState_): Internal.SimpleStateProvider;
        wait(): void;
        static "simple(net.minecraft.world.level.block.state.BlockState)"(arg0: Internal.BlockState_): Internal.SimpleStateProvider;
        wait(arg0: number): void;
        getState(arg0: Internal.RandomSource_, arg1: BlockPos_): Internal.BlockState;
        equals(arg0: any): boolean;
        static "simple(net.minecraft.world.level.block.Block)"(arg0: Internal.Block_): Internal.SimpleStateProvider;
        get class(): typeof any
        static readonly CODEC: Internal.Codec<Internal.WeightedStateProvider>;
    }
    type WeightedStateProvider_ = WeightedStateProvider;
    abstract class GpuResource implements Internal.RefCounted {
        getClass(): typeof any;
        static move<T extends Internal.GpuResource>(sp: T): T;
        getLabel(): string;
        static "move(icyllis.arc3d.core.RefCounted)"<T extends Internal.RefCounted>(sp: T): T;
        removeUniqueKey(): void;
        getUniqueID(): Internal.GpuResource$UniqueID;
        notify(): void;
        static "create(icyllis.arc3d.engine.GpuResource)"<T extends Internal.GpuResource>(that: T): T;
        wait(arg0: number, arg1: number): void;
        static "create(icyllis.arc3d.engine.GpuResource,icyllis.arc3d.engine.GpuResource)"<T extends Internal.GpuResource>(sp: T, that: T): T;
        makeBudgeted(budgeted: boolean): void;
        unref(): void;
        static move<T extends Internal.GpuResource>(sp: T, that: T): T;
        unique(): boolean;
        addCommandBufferUsage(): void;
        abstract getMemorySize(): number;
        static "move(icyllis.arc3d.engine.GpuResource,icyllis.arc3d.engine.GpuResource)"<T extends Internal.GpuResource>(sp: T, that: T): T;
        static "move(icyllis.arc3d.engine.GpuResource)"<T extends Internal.GpuResource>(sp: T): T;
        isWrapped(): boolean;
        toString(): string;
        static "move(icyllis.arc3d.core.RefCounted,icyllis.arc3d.core.RefCounted)"<T extends Internal.RefCounted>(sp: T, that: T): T;
        notifyAll(): void;
        ref(): void;
        static create<T extends Internal.GpuResource>(sp: T, that: T): T;
        removeCommandBufferUsage(): void;
        setUniqueKey(key: Internal.IUniqueKey_): void;
        getScratchKey(): Internal.IScratchKey;
        hashCode(): number;
        getBudgetType(): number;
        static "create(icyllis.arc3d.core.RefCounted,icyllis.arc3d.core.RefCounted)"<T extends Internal.RefCounted>(sp: T, that: T): T;
        getUniqueKey(): Internal.IUniqueKey;
        wait(): void;
        isFree(): boolean;
        setLabel(label: string): void;
        wait(arg0: number): void;
        static "create(icyllis.arc3d.core.RefCounted)"<T extends Internal.RefCounted>(that: T): T;
        isDestroyed(): boolean;
        getContext(): Internal.DirectContext;
        static create<T extends Internal.GpuResource>(that: T): T;
        hasRefOrCommandBufferUsage(): boolean;
        equals(arg0: any): boolean;
        removeScratchKey(): void;
        get class(): typeof any
        get label(): string
        get uniqueID(): Internal.GpuResource$UniqueID
        get memorySize(): number
        get wrapped(): boolean
        set uniqueKey(key: Internal.IUniqueKey_)
        get scratchKey(): Internal.IScratchKey
        get budgetType(): number
        get uniqueKey(): Internal.IUniqueKey
        get free(): boolean
        set label(label: string)
        get destroyed(): boolean
        get context(): Internal.DirectContext
    }
    type GpuResource_ = GpuResource;
    class StructureBlockEntity extends Internal.BlockEntity {
        constructor(arg0: BlockPos_, arg1: Internal.BlockState_)
        getSeed(): number;
        requestModelDataUpdate(): void;
        hasStructureName(): boolean;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        /**
         * @deprecated
        */
        setBlockState(arg0: Internal.BlockState_): void;
        getStructureName(): string;
        isStructureLoadable(): boolean;
        load(arg0: Internal.CompoundTag_): void;
        setChanged(): void;
        getMetaData(): string;
        getMode(): Internal.StructureMode;
        saveWithoutMetadata(): Internal.CompoundTag;
        getStructureSize(): Vec3i;
        setRemoved(): void;
        setSeed(arg0: number): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        getType(): Internal.BlockEntityType<any>;
        neruina$getTickingEntryId(): Internal.UUID;
        getRenderBoundingBox(): Internal.AABB;
        getClass(): typeof any;
        saveStructure(arg0: boolean): boolean;
        static getPosFromTag(arg0: Internal.CompoundTag_): BlockPos;
        hasAnyComparatorNearby(): boolean;
        onChunkUnloaded(): void;
        neruina$setErrored(): void;
        saveToItem(arg0: Internal.ItemStack_): void;
        neruina$clearErrored(): void;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        static addEntityType(arg0: Internal.CompoundTag_, arg1: Internal.BlockEntityType_<any>): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        setStructurePos(arg0: BlockPos_): void;
        onComparatorAdded(arg0: Internal.Direction_, arg1: number): void;
        setMode(arg0: Internal.StructureMode_): void;
        clearRemoved(): void;
        setShowBoundingBox(arg0: boolean): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        getStructurePath(): string;
        setIgnoreEntities(arg0: boolean): void;
        getPersistentData(): Internal.CompoundTag;
        setMetaData(arg0: string): void;
        toString(): string;
        triggerEvent(arg0: number, arg1: number): boolean;
        hasLevel(): boolean;
        notifyAll(): void;
        setStructureSize(arg0: Vec3i_): void;
        wait(arg0: number): void;
        neruina$setTickingEntryId(uuid: Internal.UUID_): void;
        reviveCaps(): void;
        getStructurePos(): BlockPos;
        getShowBoundingBox(): boolean;
        getUpdateTag(): Internal.CompoundTag;
        handleUpdateTag(arg0: Internal.CompoundTag_): void;
        setLevel(arg0: Internal.Level_): void;
        notify(): void;
        loadStructure(arg0: Internal.ServerLevel_, arg1: boolean, arg2: Internal.StructureTemplate_): boolean;
        getBlockPos(): BlockPos;
        isRemoved(): boolean;
        loadStructure(arg0: Internal.ServerLevel_, arg1: boolean): boolean;
        onLoad(): void;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        isPowered(): boolean;
        invalidateCaps(): void;
        neruina$isErrored(): boolean;
        getBlockState(): Internal.BlockState;
        usedBy(arg0: Internal.Player_): boolean;
        "setStructureName(java.lang.String)"(arg0: string): void;
        getRotation(): Internal.Rotation;
        static loadStatic(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: Internal.CompoundTag_): Internal.BlockEntity;
        wait(): void;
        setStructureName(arg0: string): void;
        setPowered(arg0: boolean): void;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        setRotation(arg0: Internal.Rotation_): void;
        static createRandom(arg0: number): Internal.RandomSource;
        createdBy(arg0: Internal.LivingEntity_): void;
        setIntegrity(arg0: number): void;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        loadStructure(arg0: Internal.ServerLevel_): boolean;
        saveWithId(): Internal.CompoundTag;
        detectSize(): boolean;
        "setStructureName(net.minecraft.resources.ResourceLocation)"(arg0: ResourceLocation_): void;
        wait(arg0: number, arg1: number): void;
        getLevel(): Internal.Level;
        getMirror(): Internal.Mirror;
        onlyOpCanSetNbt(): boolean;
        getIntegrity(): number;
        setShowAir(arg0: boolean): void;
        serializeNBT(): Internal.Tag;
        saveStructure(): boolean;
        unloadStructure(): void;
        saveWithFullMetadata(): Internal.CompoundTag;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        onDataPacket(arg0: Internal.Connection_, arg1: Internal.ClientboundBlockEntityDataPacket_): void;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        isIgnoreEntities(): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        getUpdatePacket(): Internal.ClientboundBlockEntityDataPacket;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        hashCode(): number;
        getModelData(): Internal.ModelData;
        getShowAir(): boolean;
        equals(arg0: any): boolean;
        setStructureName(arg0: ResourceLocation_): void;
        setMirror(arg0: Internal.Mirror_): void;
        get seed(): number
        /**
         * @deprecated
        */
        set blockState(arg0: Internal.BlockState_)
        get structureName(): string
        get structureLoadable(): boolean
        get metaData(): string
        get mode(): Internal.StructureMode
        get structureSize(): Vec3i
        set seed(arg0: number)
        get type(): Internal.BlockEntityType<any>
        get renderBoundingBox(): Internal.AABB
        get class(): typeof any
        set structurePos(arg0: BlockPos_)
        set mode(arg0: Internal.StructureMode_)
        set showBoundingBox(arg0: boolean)
        get structurePath(): string
        set ignoreEntities(arg0: boolean)
        get persistentData(): Internal.CompoundTag
        set metaData(arg0: string)
        set structureSize(arg0: Vec3i_)
        get structurePos(): BlockPos
        get showBoundingBox(): boolean
        get updateTag(): Internal.CompoundTag
        set level(arg0: Internal.Level_)
        get blockPos(): BlockPos
        get removed(): boolean
        get powered(): boolean
        get blockState(): Internal.BlockState
        set "structureName(java.lang.String)"(arg0: string)
        get rotation(): Internal.Rotation
        set structureName(arg0: string)
        set powered(arg0: boolean)
        set rotation(arg0: Internal.Rotation_)
        set integrity(arg0: number)
        set "structureName(net.minecraft.resources.ResourceLocation)"(arg0: ResourceLocation_)
        get level(): Internal.Level
        get mirror(): Internal.Mirror
        get integrity(): number
        set showAir(arg0: boolean)
        get ignoreEntities(): boolean
        get updatePacket(): Internal.ClientboundBlockEntityDataPacket
        get modelData(): Internal.ModelData
        get showAir(): boolean
        set structureName(arg0: ResourceLocation_)
        set mirror(arg0: Internal.Mirror_)
        static readonly MAX_OFFSET_PER_AXIS: (48) & (number);
        static readonly MAX_SIZE_PER_AXIS: (48) & (number);
        static readonly AUTHOR_TAG: ("author") & (string);
    }
    type StructureBlockEntity_ = StructureBlockEntity;
    class ObjectCompletedEvent$ChapterEvent extends Internal.ObjectCompletedEvent<Internal.Chapter> {
        constructor(d: Internal.QuestProgressEventData_<Internal.Chapter>)
        getObject(): Internal.Chapter;
        getClass(): typeof any;
        getTime(): Internal.Date;
        toString(): string;
        getNotifiedPlayers(): Internal.List<Internal.ServerPlayer>;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getChapter(): Internal.Chapter;
        getOnlineMembers(): Internal.List<Internal.ServerPlayer>;
        hashCode(): number;
        isCancelable(): boolean;
        wait(): void;
        wait(arg0: number): void;
        getData(): Internal.TeamData;
        equals(arg0: any): boolean;
        get object(): Internal.Chapter
        get class(): typeof any
        get time(): Internal.Date
        get notifiedPlayers(): Internal.List<Internal.ServerPlayer>
        get chapter(): Internal.Chapter
        get onlineMembers(): Internal.List<Internal.ServerPlayer>
        get cancelable(): boolean
        get data(): Internal.TeamData
    }
    type ObjectCompletedEvent$ChapterEvent_ = ObjectCompletedEvent$ChapterEvent;
    class CustomFilterItemEventJS extends Internal.EventJS {
        constructor(event: any_)
        getClass(): typeof any;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
        */
        exit(): any;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
        */
        cancel(value: any): any;
        toString(): string;
        addStacks(stacks: Internal.Collection_<Internal.ItemStack>): void;
        notifyAll(): void;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
        */
        exit(value: any): any;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
        */
        success(value: any): any;
        hashCode(): number;
        wait(): void;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
        */
        cancel(): any;
        wait(arg0: number): void;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
        */
        success(): any;
        equals(arg0: any): boolean;
        addStack(stack: Internal.ItemStack_): void;
        get class(): typeof any
    }
    type CustomFilterItemEventJS_ = CustomFilterItemEventJS;
    class ViewportEvent$ComputeCameraAngles extends Internal.ViewportEvent {
        constructor()
        constructor(arg0: Internal.GameRenderer_, arg1: Internal.Camera_, arg2: number, arg3: number, arg4: number, arg5: number)
        setCanceled(arg0: boolean): void;
        getClass(): typeof any;
        setPhase(arg0: Internal.EventPriority_): void;
        getRenderer(): Internal.GameRenderer;
        setYaw(arg0: number): void;
        getCamera(): Internal.Camera;
        isCanceled(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getRoll(): number;
        isCancelable(): boolean;
        setPitch(arg0: number): void;
        getPitch(): number;
        getListenerList(): Internal.ListenerList;
        getPartialTick(): number;
        getResult(): Internal.Event$Result;
        toString(): string;
        notifyAll(): void;
        hasResult(): boolean;
        setResult(arg0: Internal.Event$Result_): void;
        hashCode(): number;
        wait(): void;
        getYaw(): number;
        setRoll(arg0: number): void;
        wait(arg0: number): void;
        getPhase(): Internal.EventPriority;
        equals(arg0: any): boolean;
        set canceled(arg0: boolean)
        get class(): typeof any
        set phase(arg0: Internal.EventPriority_)
        get renderer(): Internal.GameRenderer
        set yaw(arg0: number)
        get camera(): Internal.Camera
        get canceled(): boolean
        get roll(): number
        get cancelable(): boolean
        set pitch(arg0: number)
        get pitch(): number
        get listenerList(): Internal.ListenerList
        get partialTick(): number
        get result(): Internal.Event$Result
        set result(arg0: Internal.Event$Result_)
        get yaw(): number
        set roll(arg0: number)
        get phase(): Internal.EventPriority
    }
    type ViewportEvent$ComputeCameraAngles_ = ViewportEvent$ComputeCameraAngles;
    interface WorldChunkAccessor {
        abstract invokeRemoveBlockEntityTicker(arg0: BlockPos_): void;
        (arg0: BlockPos): void;
    }
    type WorldChunkAccessor_ = WorldChunkAccessor | ((arg0: BlockPos)=> void);
    class PrimalMagmaBlock extends Internal.Block {
        constructor()
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        static isBossActive(arg0: Internal.Level_): boolean;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        handler$zmd000$onUse(state: Internal.BlockState_, world: Internal.Level_, pos: BlockPos_, player: Internal.Player_, hand: Internal.InteractionHand_, hit: Internal.BlockHitResult_, cir: Internal.CallbackInfoReturnable_<any>): void;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        /**
         * @deprecated
        */
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
        static readonly SINK_SHAPE: (Internal.VoxelShapeAlignedCuboid) & (Internal.VoxelShape);
        static readonly ACTIVE: (Internal.BooleanProperty) & (Internal.BooleanProperty);
        static readonly PERMANENT: (Internal.BooleanProperty) & (Internal.BooleanProperty);
    }
    type PrimalMagmaBlock_ = PrimalMagmaBlock;
    class GazingPearlItem extends Internal.Item {
        constructor()
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        setRarity(arg0: Internal.Rarity_): void;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        moonlight$addAdditionalBehavior(placementOverride: Internal.AdditionalItemPlacement_): void;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        isFireResistant(): boolean;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isComplex(): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: Internal.DamageSource_): boolean;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        moonlight$getClientAnimationExtension(): any;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getTypeData(): Internal.CompoundTag;
        getDefaultInstance(): Internal.ItemStack;
        static getPearlColor(arg0: Internal.ItemStack_): number;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getItem(): Internal.Item;
        getBarColor(arg0: Internal.ItemStack_): number;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: Internal.DamageSource_): void;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        getDescription(): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        getClass(): typeof any;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        static byId(arg0: number): Internal.Item;
        getRenderPropertiesInternal(): any;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        moonlight$setClientAnimationExtension(obj: any): void;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        attachCapability(capabilityBuilder: Internal.CapabilityBuilder_<any, any, any>): void;
        setAttackDamage(attackDamage: number): void;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        toString(): string;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        notify(): void;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        handler$dpg000$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        canBeDepleted(): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        getDamage(arg0: Internal.ItemStack_): number;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        wait(arg0: number, arg1: number): void;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vec3f;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        get drinkingSound(): Internal.SoundEvent
        set rarity(arg0: Internal.Rarity_)
        get fireResistant(): boolean
        get complex(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get descriptionId(): string
        get creativeTab(): string
        get typeData(): Internal.CompoundTag
        get defaultInstance(): Internal.ItemStack
        set maxStackSize(arg0: number)
        set burnTime(i: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        get class(): typeof any
        get renderPropertiesInternal(): any
        set itemBuilder(b: Internal.ItemBuilder_)
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        set attackDamage(attackDamage: number)
        get edible(): boolean
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        get eatingSound(): Internal.SoundEvent
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
    }
    type GazingPearlItem_ = GazingPearlItem;
    interface Float2CharFunction extends it.unimi.dsi.fastutil.Function<number, string>, Internal.DoubleToIntFunction {
        andThenInt(arg0: Internal.Char2IntFunction_): Internal.Float2IntFunction;
        andThenObject<T>(arg0: Internal.Char2ObjectFunction_<T>): Internal.Float2ObjectFunction<T>;
        composeObject<T>(arg0: Internal.Object2FloatFunction_<T>): Internal.Object2CharFunction<T>;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: string): string;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: string): string;
        abstract "get(float)"(arg0: number): string;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Character)"(arg0: any, arg1: string): string;
        composeLong(arg0: Internal.Long2FloatFunction_): Internal.Long2CharFunction;
        put(arg0: number, arg1: string): string;
        /**
         * @deprecated
        */
        "put(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        "containsKey(float)"(arg0: number): boolean;
        /**
         * @deprecated
        */
        "get(java.lang.Object)"(arg0: any): string;
        andThenShort(arg0: Internal.Char2ShortFunction_): Internal.Float2ShortFunction;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        composeReference<T>(arg0: Internal.Reference2FloatFunction_<T>): Internal.Reference2CharFunction<T>;
        composeShort(arg0: Internal.Short2FloatFunction_): Internal.Short2CharFunction;
        "remove(float)"(arg0: number): string;
        getOrDefault(arg0: number, arg1: string): string;
        andThenLong(arg0: Internal.Char2LongFunction_): Internal.Float2LongFunction;
        abstract get(arg0: number): string;
        andThenDouble(arg0: Internal.Char2DoubleFunction_): Internal.Float2DoubleFunction;
        /**
         * @deprecated
        */
        remove(arg0: any): any;
        identity<T>(): Internal.Function<T, T>;
        /**
         * @deprecated
        */
        "containsKey(java.lang.Object)"(arg0: any): boolean;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, string>;
        /**
         * @deprecated
        */
        "remove(java.lang.Object)"(arg0: any): any;
        "getOrDefault(float,char)"(arg0: number, arg1: string): string;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        defaultReturnValue(): string;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        composeInt(arg0: Internal.Int2FloatFunction_): Internal.Int2CharFunction;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        andThenChar(arg0: Internal.Char2CharFunction_): this;
        defaultReturnValue(arg0: string): void;
        /**
         * @deprecated
        */
        get(arg0: any): string;
        containsKey(arg0: number): boolean;
        composeByte(arg0: Internal.Byte2FloatFunction_): Internal.Byte2CharFunction;
        andThenByte(arg0: Internal.Char2ByteFunction_): Internal.Float2ByteFunction;
        andThenReference<T>(arg0: Internal.Char2ReferenceFunction_<T>): Internal.Float2ReferenceFunction<T>;
        composeChar(arg0: Internal.Char2FloatFunction_): Internal.Char2CharFunction;
        apply(arg0: number): string;
        remove(arg0: number): string;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<string, T>): Internal.Function<number, T>;
        composeFloat(arg0: Internal.Float2FloatFunction_): this;
        size(): number;
        andThenFloat(arg0: Internal.Char2FloatFunction_): Internal.Float2FloatFunction;
        clear(): void;
        /**
         * @deprecated
        */
        "put(java.lang.Float,java.lang.Character)"(arg0: number, arg1: string): string;
        "put(float,char)"(arg0: number, arg1: string): string;
        composeDouble(arg0: Internal.Double2FloatFunction_): Internal.Double2CharFunction;
        /**
         * @deprecated
        */
        applyAsInt(arg0: number): number;
    }
    type Float2CharFunction_ = Float2CharFunction;
    class ItemNagaFangDagger extends Internal.MowzieToolItem {
        constructor(arg0: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        setRarity(arg0: Internal.Rarity_): void;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        moonlight$addAdditionalBehavior(placementOverride: Internal.AdditionalItemPlacement_): void;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        isFireResistant(): boolean;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isComplex(): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: Internal.DamageSource_): boolean;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        moonlight$getClientAnimationExtension(): any;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getTypeData(): Internal.CompoundTag;
        getDefaultInstance(): Internal.ItemStack;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getItem(): Internal.Item;
        getBarColor(arg0: Internal.ItemStack_): number;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: Internal.DamageSource_): void;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        getDescription(): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        getConfig(): Internal.ConfigHandler$ToolConfig;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        getClass(): typeof any;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        static byId(arg0: number): Internal.Item;
        getRenderPropertiesInternal(): any;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        kjs$getAttributeMap(): Internal.Multimap<any, any>;
        moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        moonlight$setClientAnimationExtension(obj: any): void;
        kjs$getMutableAttributeMap(): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        attachCapability(capabilityBuilder: Internal.CapabilityBuilder_<any, any, any>): void;
        setAttackDamage(attackDamage: number): void;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        toString(): string;
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        getAttackDamage(): number;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        notify(): void;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getAttributesFromConfig(): void;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        handler$zmi000$postMine(stack: Internal.ItemStack_, world: Internal.Level_, state: Internal.BlockState_, pos: BlockPos_, miner: Internal.LivingEntity_, ci: Internal.CallbackInfoReturnable_<any>): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        handler$dpg000$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        canBeDepleted(): boolean;
        getTier(): Internal.Tier;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        getDamage(arg0: Internal.ItemStack_): number;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        wait(arg0: number, arg1: number): void;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vec3f;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        handler$bkg001$hurtItem(stack: Internal.ItemStack_, entity: Internal.LivingEntity_, player: Internal.LivingEntity_, cir: Internal.CallbackInfoReturnable_<any>): void;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        kjs$setAttributeMap(arg0: Internal.Multimap_<any, any>): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        get drinkingSound(): Internal.SoundEvent
        set rarity(arg0: Internal.Rarity_)
        get fireResistant(): boolean
        get complex(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get descriptionId(): string
        get creativeTab(): string
        get typeData(): Internal.CompoundTag
        get defaultInstance(): Internal.ItemStack
        set maxStackSize(arg0: number)
        set burnTime(i: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        get config(): Internal.ConfigHandler$ToolConfig
        get class(): typeof any
        get renderPropertiesInternal(): any
        set itemBuilder(b: Internal.ItemBuilder_)
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        set attackDamage(attackDamage: number)
        get edible(): boolean
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        get attackDamage(): number
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        get attributesFromConfig(): void
        /**
         * @deprecated
        */
        get maxStackSize(): number
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        get eatingSound(): Internal.SoundEvent
        get tier(): Internal.Tier
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
    }
    type ItemNagaFangDagger_ = ItemNagaFangDagger;
    class GameProfile {
        constructor(arg0: Internal.UUID_, arg1: string)
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        isLegacy(): boolean;
        isComplete(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        wait(): void;
        getName(): string;
        getId(): Internal.UUID;
        wait(arg0: number): void;
        getProperties(): Internal.PropertyMap;
        equals(arg0: any): boolean;
        get class(): typeof any
        get legacy(): boolean
        get complete(): boolean
        get name(): string
        get id(): Internal.UUID
        get properties(): Internal.PropertyMap
    }
    type GameProfile_ = GameProfile;
    class Connection extends Internal.SimpleChannelInboundHandler<Internal.Packet<any>> {
        constructor(arg0: Internal.PacketFlow_)
        channelActive(arg0: Internal.ChannelHandlerContext_): void;
        isMemoryConnection(): boolean;
        handleDisconnection(): void;
        notify(): void;
        setListener(arg0: Internal.PacketListener_): void;
        getAverageReceivedPackets(): number;
        getPacketListener(): Internal.PacketListener;
        userEventTriggered(arg0: Internal.ChannelHandlerContext_, arg1: any): void;
        handlerAdded(arg0: Internal.ChannelHandlerContext_): void;
        isConnected(): boolean;
        send(arg0: Internal.Packet_<any>, arg1: Internal.PacketSendListener_): void;
        setupCompression(arg0: number, arg1: boolean): void;
        isEncrypted(): boolean;
        isSharable(): boolean;
        getAverageSentPackets(): number;
        getDirection(): Internal.PacketFlow;
        handlerRemoved(arg0: Internal.ChannelHandlerContext_): void;
        static configureSerialization(arg0: Internal.ChannelPipeline_, arg1: Internal.PacketFlow_): void;
        tick(): void;
        getRemoteAddress(): Internal.SocketAddress;
        channelInactive(arg0: Internal.ChannelHandlerContext_): void;
        setReadOnly(): void;
        wait(): void;
        channelUnregistered(arg0: Internal.ChannelHandlerContext_): void;
        getSending(): Internal.PacketFlow;
        channelRegistered(arg0: Internal.ChannelHandlerContext_): void;
        getClass(): typeof any;
        static connectToLocalServer(arg0: Internal.SocketAddress_): Internal.Connection;
        acceptInboundMessage(arg0: any): boolean;
        static connectToServer(arg0: Internal.InetSocketAddress_, arg1: boolean): Internal.Connection;
        setProtocol(arg0: Internal.ConnectionProtocol_): void;
        wait(arg0: number, arg1: number): void;
        channelWritabilityChanged(arg0: Internal.ChannelHandlerContext_): void;
        setEncryptionKey(arg0: Internal.Cipher_, arg1: Internal.Cipher_): void;
        isConnecting(): boolean;
        channelRead(arg0: Internal.ChannelHandlerContext_, arg1: any): void;
        disconnect(arg0: net.minecraft.network.chat.Component_): void;
        getDisconnectedReason(): net.minecraft.network.chat.Component;
        toString(): string;
        notifyAll(): void;
        channelReadComplete(arg0: Internal.ChannelHandlerContext_): void;
        channel(): io.netty.channel.Channel;
        static connect(arg0: Internal.InetSocketAddress_, arg1: boolean, arg2: Internal.Connection_): Internal.ChannelFuture;
        hashCode(): number;
        getReceiving(): Internal.PacketFlow;
        wait(arg0: number): void;
        exceptionCaught(arg0: Internal.ChannelHandlerContext_, arg1: Internal.Throwable_): void;
        equals(arg0: any): boolean;
        send(arg0: Internal.Packet_<any>): void;
        get memoryConnection(): boolean
        set listener(arg0: Internal.PacketListener_)
        get averageReceivedPackets(): number
        get packetListener(): Internal.PacketListener
        get connected(): boolean
        get encrypted(): boolean
        get sharable(): boolean
        get averageSentPackets(): number
        get direction(): Internal.PacketFlow
        get remoteAddress(): Internal.SocketAddress
        get sending(): Internal.PacketFlow
        get class(): typeof any
        set protocol(arg0: Internal.ConnectionProtocol_)
        get connecting(): boolean
        get disconnectedReason(): net.minecraft.network.chat.Component
        get receiving(): Internal.PacketFlow
        static readonly PACKET_MARKER: (Internal.Log4jMarker) & (org.slf4j.Marker);
        static readonly LOCAL_WORKER_GROUP: Internal.LazyLoadedValue<Internal.DefaultEventLoopGroup>;
        static readonly NETWORK_EPOLL_WORKER_GROUP: Internal.LazyLoadedValue<Internal.EpollEventLoopGroup>;
        static readonly PACKET_SENT_MARKER: (Internal.Log4jMarker) & (org.slf4j.Marker);
        static readonly ATTRIBUTE_PROTOCOL: Internal.AttributeKey<Internal.ConnectionProtocol>;
        static readonly PACKET_RECEIVED_MARKER: (Internal.Log4jMarker) & (org.slf4j.Marker);
        static readonly ROOT_MARKER: (Internal.Log4jMarker) & (org.slf4j.Marker);
        static readonly NETWORK_WORKER_GROUP: Internal.LazyLoadedValue<Internal.NioEventLoopGroup>;
    }
    type Connection_ = Connection;
    interface ICustomItemRendererProvider extends Internal.ItemLike {
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        registerFabricRenderer(): void;
        abstract asItem(): Internal.Item;
        abstract getRendererFactory(): Internal.Supplier<Internal.ItemStackRenderer>;
        get rendererFactory(): Internal.Supplier<Internal.ItemStackRenderer>
    }
    type ICustomItemRendererProvider_ = ICustomItemRendererProvider;
    class TeslaBulbBlock extends Internal.BaseEntityBlock implements Internal.SimpleWaterloggedBlock {
        constructor()
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        getTicker<T extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<T>): Internal.BlockEntityTicker<T>;
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        placeLiquid(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.FluidState_): boolean;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
        setIsRandomlyTicking(arg0: boolean): void;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        handler$zmd000$onUse(state: Internal.BlockState_, world: Internal.Level_, pos: BlockPos_, player: Internal.Player_, hand: Internal.InteractionHand_, hit: Internal.BlockHitResult_, cir: Internal.CallbackInfoReturnable_<any>): void;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        pickupBlock(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        canPlaceLiquid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
        static readonly SHAPE_DOWN: (Internal.VoxelShapeSimpleCube) & (Internal.VoxelShape);
        static readonly WATERLOGGED: (Internal.BooleanProperty) & (Internal.BooleanProperty);
        static readonly DOWN: (Internal.BooleanProperty) & (Internal.BooleanProperty);
        static readonly SHAPE_UP: (Internal.VoxelShapeSimpleCube) & (Internal.VoxelShape);
    }
    type TeslaBulbBlock_ = TeslaBulbBlock;
    class ServerboundResourcePackPacket implements Internal.Packet<Internal.ServerGamePacketListener> {
        constructor(arg0: Internal.ServerboundResourcePackPacket$Action_)
        constructor(arg0: Internal.FriendlyByteBuf_)
        handle(arg0: Internal.PacketListener_): void;
        getClass(): typeof any;
        write(arg0: Internal.FriendlyByteBuf_): void;
        handle(arg0: Internal.ServerGamePacketListener_): void;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        isSkippable(): boolean;
        wait(arg0: number, arg1: number): void;
        "handle(net.minecraft.network.protocol.game.ServerGamePacketListener)"(arg0: Internal.ServerGamePacketListener_): void;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        getAction(): Internal.ServerboundResourcePackPacket$Action;
        equals(arg0: any): boolean;
        "handle(net.minecraft.network.PacketListener)"(arg0: Internal.PacketListener_): void;
        get class(): typeof any
        get skippable(): boolean
        get action(): Internal.ServerboundResourcePackPacket$Action
    }
    type ServerboundResourcePackPacket_ = ServerboundResourcePackPacket;
    class FireworksJS$Explosion {
        constructor()
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        readonly fadeColors: Internal.IntOpenHashSet;
        trail: boolean;
        flicker: boolean;
        readonly colors: Internal.IntOpenHashSet;
        shape: Internal.FireworksJS$Shape;
    }
    type FireworksJS$Explosion_ = FireworksJS$Explosion;
    class WoodBasedItem extends Internal.BlockTypeBasedItem<net.mehvahdjukaar.moonlight.api.set.wood.WoodType> {
        constructor(builder: Internal.Item$Properties_, burnTicks: number)
        constructor(builder: Internal.Item$Properties_, woodType: net.mehvahdjukaar.moonlight.api.set.wood.WoodType_)
        constructor(builder: Internal.Item$Properties_, woodType: net.mehvahdjukaar.moonlight.api.set.wood.WoodType_, burnTicks: number)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        setRarity(arg0: Internal.Rarity_): void;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getBurnTime(itemStack: Internal.ItemStack_, recipeType: Internal.RecipeType_<any>): number;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        moonlight$addAdditionalBehavior(placementOverride: Internal.AdditionalItemPlacement_): void;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        isFireResistant(): boolean;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isComplex(): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        canBeHurtBy(arg0: Internal.DamageSource_): boolean;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        moonlight$getClientAnimationExtension(): any;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getTypeData(): Internal.CompoundTag;
        getDefaultInstance(): Internal.ItemStack;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getItem(): Internal.Item;
        getBarColor(arg0: Internal.ItemStack_): number;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: Internal.DamageSource_): void;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        getDescription(): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        getClass(): typeof any;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        static byId(arg0: number): Internal.Item;
        getRenderPropertiesInternal(): any;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        moonlight$setClientAnimationExtension(obj: any): void;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        attachCapability(capabilityBuilder: Internal.CapabilityBuilder_<any, any, any>): void;
        setAttackDamage(attackDamage: number): void;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        toString(): string;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        getBlockType(): net.mehvahdjukaar.moonlight.api.set.wood.WoodType;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        notify(): void;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        handler$dpg000$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        canBeDepleted(): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        getDamage(arg0: Internal.ItemStack_): number;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        wait(arg0: number, arg1: number): void;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vec3f;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        get drinkingSound(): Internal.SoundEvent
        set rarity(arg0: Internal.Rarity_)
        get fireResistant(): boolean
        get complex(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get descriptionId(): string
        get creativeTab(): string
        get typeData(): Internal.CompoundTag
        get defaultInstance(): Internal.ItemStack
        set maxStackSize(arg0: number)
        set burnTime(i: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        get class(): typeof any
        get renderPropertiesInternal(): any
        set itemBuilder(b: Internal.ItemBuilder_)
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        set attackDamage(attackDamage: number)
        get edible(): boolean
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        get blockType(): net.mehvahdjukaar.moonlight.api.set.wood.WoodType
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        get eatingSound(): Internal.SoundEvent
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
    }
    type WoodBasedItem_ = WoodBasedItem;
    class BigDecimal extends number implements Internal.Comparable<Internal.BigDecimal> {
        constructor(arg0: number, arg1: Internal.MathContext_)
        constructor(arg0: Internal.BigInteger_, arg1: number)
        constructor(arg0: number, arg1: Internal.MathContext_)
        constructor(arg0: string[], arg1: number, arg2: number, arg3: Internal.MathContext_)
        constructor(arg0: number)
        constructor(arg0: number)
        constructor(arg0: Internal.BigInteger_, arg1: Internal.MathContext_)
        constructor(arg0: Internal.BigInteger_)
        constructor(arg0: string[], arg1: Internal.MathContext_)
        constructor(arg0: number)
        constructor(arg0: string[], arg1: number, arg2: number)
        constructor(arg0: Internal.BigInteger_, arg1: number, arg2: Internal.MathContext_)
        constructor(arg0: string, arg1: Internal.MathContext_)
        constructor(arg0: number, arg1: Internal.MathContext_)
        constructor(arg0: string)
        constructor(arg0: string[])
        doubleValue(): number;
        abs(): this;
        pow(arg0: number, arg1: Internal.MathContext_): this;
        min(arg0: Internal.BigDecimal_): this;
        precision(): number;
        subtract(arg0: Internal.BigDecimal_, arg1: Internal.MathContext_): this;
        notify(): void;
        compareTo(arg0: any): number;
        /**
         * @deprecated
        */
        divide(arg0: Internal.BigDecimal_, arg1: number, arg2: number): this;
        "compareTo(java.math.BigDecimal)"(arg0: Internal.BigDecimal_): number;
        "divide(java.math.BigDecimal,java.math.RoundingMode)"(arg0: Internal.BigDecimal_, arg1: Internal.RoundingMode_): this;
        setScale(arg0: number, arg1: Internal.RoundingMode_): this;
        /**
         * @deprecated
        */
        "divide(java.math.BigDecimal,int)"(arg0: Internal.BigDecimal_, arg1: number): this;
        "setScale(int,java.math.RoundingMode)"(arg0: number, arg1: Internal.RoundingMode_): this;
        subtract(arg0: Internal.BigDecimal_): this;
        divideToIntegralValue(arg0: Internal.BigDecimal_, arg1: Internal.MathContext_): this;
        divide(arg0: Internal.BigDecimal_, arg1: number, arg2: Internal.RoundingMode_): this;
        ulp(): this;
        longValue(): number;
        movePointLeft(arg0: number): this;
        static valueOf(arg0: number): Internal.BigDecimal;
        movePointRight(arg0: number): this;
        sqrt(arg0: Internal.MathContext_): this;
        toBigInteger(): Internal.BigInteger;
        round(arg0: Internal.MathContext_): this;
        /**
         * @deprecated
        */
        "setScale(int,int)"(arg0: number, arg1: number): this;
        /**
         * @deprecated
        */
        "divide(java.math.BigDecimal,int,int)"(arg0: Internal.BigDecimal_, arg1: number, arg2: number): this;
        scale(): number;
        shortValue(): number;
        multiply(arg0: Internal.BigDecimal_, arg1: Internal.MathContext_): this;
        wait(): void;
        remainder(arg0: Internal.BigDecimal_, arg1: Internal.MathContext_): this;
        "compareTo(java.lang.Object)"(arg0: any): number;
        toPlainString(): string;
        static valueOf(arg0: number, arg1: number): Internal.BigDecimal;
        "divide(java.math.BigDecimal,int,java.math.RoundingMode)"(arg0: Internal.BigDecimal_, arg1: number, arg2: Internal.RoundingMode_): this;
        getClass(): typeof any;
        divideAndRemainder(arg0: Internal.BigDecimal_, arg1: Internal.MathContext_): Internal.BigDecimal[];
        floatValue(): number;
        divideAndRemainder(arg0: Internal.BigDecimal_): Internal.BigDecimal[];
        plus(arg0: Internal.MathContext_): this;
        scaleByPowerOfTen(arg0: number): this;
        wait(arg0: number, arg1: number): void;
        divide(arg0: Internal.BigDecimal_, arg1: Internal.MathContext_): this;
        add(arg0: Internal.BigDecimal_): this;
        /**
         * @deprecated
        */
        divide(arg0: Internal.BigDecimal_, arg1: number): this;
        intValue(): number;
        compareTo(arg0: Internal.BigDecimal_): number;
        toEngineeringString(): string;
        add(arg0: Internal.BigDecimal_, arg1: Internal.MathContext_): this;
        divide(arg0: Internal.BigDecimal_): this;
        intValueExact(): number;
        "divide(java.math.BigDecimal,java.math.MathContext)"(arg0: Internal.BigDecimal_, arg1: Internal.MathContext_): this;
        abs(arg0: Internal.MathContext_): this;
        plus(): this;
        remainder(arg0: Internal.BigDecimal_): this;
        toString(): string;
        divide(arg0: Internal.BigDecimal_, arg1: Internal.RoundingMode_): this;
        stripTrailingZeros(): this;
        shortValueExact(): number;
        notifyAll(): void;
        longValueExact(): number;
        byteValueExact(): number;
        negate(): this;
        static valueOf(arg0: number): Internal.BigDecimal;
        divideToIntegralValue(arg0: Internal.BigDecimal_): this;
        hashCode(): number;
        negate(arg0: Internal.MathContext_): this;
        static "valueOf(double)"(arg0: number): Internal.BigDecimal;
        toBigIntegerExact(): Internal.BigInteger;
        setScale(arg0: number): this;
        unscaledValue(): Internal.BigInteger;
        multiply(arg0: Internal.BigDecimal_): this;
        wait(arg0: number): void;
        static "valueOf(long)"(arg0: number): Internal.BigDecimal;
        equals(arg0: any): boolean;
        max(arg0: Internal.BigDecimal_): this;
        /**
         * @deprecated
        */
        setScale(arg0: number, arg1: number): this;
        signum(): number;
        pow(arg0: number): this;
        byteValue(): number;
        get class(): typeof any
        set scale(arg0: number)
        /**
         * @deprecated
        */
        static readonly ROUND_UP: (0) & (number);
        /**
         * @deprecated
        */
        static readonly ROUND_DOWN: (1) & (number);
        /**
         * @deprecated
        */
        static readonly ROUND_HALF_UP: (4) & (number);
        /**
         * @deprecated
        */
        static readonly ROUND_HALF_DOWN: (5) & (number);
        static readonly ONE: (1) & (Internal.BigDecimal);
        /**
         * @deprecated
        */
        static readonly ROUND_FLOOR: (3) & (number);
        static readonly ZERO: (0) & (Internal.BigDecimal);
        static readonly TEN: (10) & (Internal.BigDecimal);
        /**
         * @deprecated
        */
        static readonly ROUND_CEILING: (2) & (number);
        /**
         * @deprecated
        */
        static readonly ROUND_HALF_EVEN: (6) & (number);
        /**
         * @deprecated
        */
        static readonly ROUND_UNNECESSARY: (7) & (number);
    }
    type BigDecimal_ = BigDecimal;
    class StandardLevel extends Internal.Enum<Internal.StandardLevel> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        toString(): string;
        getDeclaringClass(): typeof Internal.StandardLevel;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        name(): string;
        static valueOf(name: string): Internal.StandardLevel;
        hashCode(): number;
        intLevel(): number;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        static getStandardLevel(intLevel: number): Internal.StandardLevel;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.StandardLevel>>;
        static values(): Internal.StandardLevel[];
        "compareTo(org.apache.logging.log4j.spi.StandardLevel)"(arg0: Internal.StandardLevel_): number;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        compareTo(arg0: Internal.StandardLevel_): number;
        get class(): typeof any
        get declaringClass(): typeof Internal.StandardLevel
        static readonly TRACE: (Internal.StandardLevel) & (Internal.StandardLevel);
        static readonly WARN: (Internal.StandardLevel) & (Internal.StandardLevel);
        static readonly ERROR: (Internal.StandardLevel) & (Internal.StandardLevel);
        static readonly FATAL: (Internal.StandardLevel) & (Internal.StandardLevel);
        static readonly ALL: (Internal.StandardLevel) & (Internal.StandardLevel);
        static readonly INFO: (Internal.StandardLevel) & (Internal.StandardLevel);
        static readonly DEBUG: (Internal.StandardLevel) & (Internal.StandardLevel);
        static readonly OFF: (Internal.StandardLevel) & (Internal.StandardLevel);
    }
    type StandardLevel_ = StandardLevel | "warn" | "trace" | "error" | "off" | "debug" | "info" | "all" | "fatal";
    class JigsawStructure extends Internal.Structure {
        constructor(arg0: Internal.Structure$StructureSettings_, arg1: Internal.Holder_<Internal.StructureTemplatePool>, arg2: number, arg3: Internal.HeightProvider_, arg4: boolean)
        constructor(arg0: Internal.Structure$StructureSettings_, arg1: Internal.Holder_<Internal.StructureTemplatePool>, arg2: number, arg3: Internal.HeightProvider_, arg4: boolean, arg5: Internal.Heightmap$Types_)
        constructor(arg0: Internal.Structure$StructureSettings_, arg1: Internal.Holder_<Internal.StructureTemplatePool>, arg2: Internal.Optional_<ResourceLocation>, arg3: number, arg4: Internal.HeightProvider_, arg5: boolean, arg6: Internal.Optional_<Internal.Heightmap$Types>, arg7: number)
        static simpleCodec<S extends Internal.Structure>(arg0: Internal.Function_<Internal.Structure$StructureSettings, S>): Internal.Codec<S>;
        getClass(): typeof any;
        findGenerationPoint(arg0: Internal.Structure$GenerationContext_): Internal.Optional<Internal.Structure$GenerationStub>;
        generate(arg0: Internal.RegistryAccess_, arg1: Internal.ChunkGenerator_, arg2: Internal.BiomeSource_, arg3: Internal.RandomState_, arg4: Internal.StructureTemplateManager_, arg5: number, arg6: Internal.ChunkPos_, arg7: number, arg8: Internal.LevelHeightAccessor_, arg9: Internal.Predicate_<Internal.Holder<Internal.Biome>>): Internal.StructureStart;
        toString(): string;
        biomes(): Internal.HolderSet<Internal.Biome>;
        findValidGenerationPoint(arg0: Internal.Structure$GenerationContext_): Internal.Optional<Internal.Structure$GenerationStub>;
        spawnOverrides(): Internal.Map<Internal.MobCategory, Internal.StructureSpawnOverride>;
        step(): Internal.GenerationStep$Decoration;
        notifyAll(): void;
        notify(): void;
        terrainAdaptation(): Internal.TerrainAdjustment;
        wait(arg0: number, arg1: number): void;
        adjustBoundingBox(arg0: Internal.BoundingBox_): Internal.BoundingBox;
        hashCode(): number;
        type(): Internal.StructureType<any>;
        static settingsCodec<S extends Internal.Structure>(arg0: Internal.RecordCodecBuilder$Instance_<S>): Internal.RecordCodecBuilder<S, Internal.Structure$StructureSettings>;
        wait(): void;
        modifiableStructureInfo(): Internal.ModifiableStructureInfo;
        wait(arg0: number): void;
        afterPlace(arg0: Internal.WorldGenLevel_, arg1: Internal.StructureManager_, arg2: Internal.ChunkGenerator_, arg3: Internal.RandomSource_, arg4: Internal.BoundingBox_, arg5: Internal.ChunkPos_, arg6: Internal.PiecesContainer_): void;
        equals(arg0: any): boolean;
        getModifiedStructureSettings(): Internal.Structure$StructureSettings;
        get class(): typeof any
        set tingsCodec(arg0: Internal.RecordCodecBuilder$Instance_<S>)
        get modifiedStructureSettings(): Internal.Structure$StructureSettings
        static readonly CODEC: Internal.Codec<Internal.JigsawStructure>;
        static readonly MAX_TOTAL_STRUCTURE_RANGE: (128) & (number);
    }
    type JigsawStructure_ = JigsawStructure;
    interface Button$OnPress {
        abstract onPress(arg0: Internal.Button_): void;
        (arg0: Internal.Button): void;
    }
    type Button$OnPress_ = Button$OnPress | ((arg0: Internal.Button)=> void);
    interface LongSet extends Internal.LongCollection, Internal.Set<number> {
        abstract remove(arg0: number): boolean;
        /**
         * @deprecated
        */
        stream(): Internal.Stream<number>;
        /**
         * @deprecated
        */
        "forEach(java.util.function.Consumer)"(arg0: Internal.Consumer_<number>): void;
        of(arg0: number, arg1: number, arg2: number): this;
        "removeIf(java.util.function.LongPredicate)"(arg0: Internal.LongPredicate_): boolean;
        removeIf(arg0: Internal.LongPredicate_): boolean;
        "of(long,long,long)"(arg0: number, arg1: number, arg2: number): this;
        abstract retainAll(arg0: Internal.Collection_<any>): boolean;
        toArray<T>(arg0: Internal.IntFunction_<T[]>): T[];
        of(arg0: number): this;
        of<E>(arg0: E, arg1: E): Internal.Set<E>;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): Internal.Set<E>;
        abstract "containsAll(java.util.Collection)"(arg0: Internal.Collection_<any>): boolean;
        of<E>(arg0: E, arg1: E, arg2: E): Internal.Set<E>;
        abstract retainAll(arg0: Internal.LongCollection_): boolean;
        abstract "retainAll(java.util.Collection)"(arg0: Internal.Collection_<any>): boolean;
        forEach(arg0: Internal.LongConsumer_): void;
        "of(java.lang.Object[])"<E>(...arg0: E[]): Internal.Set<E>;
        /**
         * @deprecated
        */
        "contains(java.lang.Object)"(arg0: any): boolean;
        abstract addAll(arg0: Internal.LongCollection_): boolean;
        abstract "remove(long)"(arg0: number): boolean;
        abstract toArray<T>(arg0: T[]): T[];
        /**
         * @deprecated
        */
        remove(arg0: any): boolean;
        abstract "removeAll(java.util.Collection)"(arg0: Internal.Collection_<any>): boolean;
        /**
         * @deprecated
        */
        "remove(java.lang.Object)"(arg0: any): boolean;
        /**
         * @deprecated
        */
        "removeIf(java.util.function.Predicate)"(arg0: Internal.Predicate_<number>): boolean;
        /**
         * @deprecated
        */
        add(arg0: any): boolean;
        "removeIf(it.unimi.dsi.fastutil.longs.LongPredicate)"(arg0: it.unimi.dsi.fastutil.longs.LongPredicate_): boolean;
        of(arg0: number, arg1: number): this;
        spliterator(): Internal.LongSpliterator;
        forEach(arg0: it.unimi.dsi.fastutil.longs.LongConsumer_): void;
        abstract removeAll(arg0: Internal.LongCollection_): boolean;
        abstract containsAll(arg0: Internal.LongCollection_): boolean;
        of<E>(arg0: E): Internal.Set<E>;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): Internal.Set<E>;
        abstract removeAll(arg0: Internal.Collection_<any>): boolean;
        /**
         * @deprecated
        */
        add(arg0: number): boolean;
        longSpliterator(): Internal.LongSpliterator;
        "of(java.lang.Object,java.lang.Object)"<E>(arg0: E, arg1: E): Internal.Set<E>;
        "of(long)"(arg0: number): this;
        abstract "addAll(it.unimi.dsi.fastutil.longs.LongCollection)"(arg0: Internal.LongCollection_): boolean;
        copyOf<E>(arg0: Internal.Collection_<E>): Internal.Set<E>;
        "forEach(java.util.function.LongConsumer)"(arg0: Internal.LongConsumer_): void;
        abstract "toArray(long[])"(arg0: number[]): number[];
        abstract "removeAll(it.unimi.dsi.fastutil.longs.LongCollection)"(arg0: Internal.LongCollection_): boolean;
        longIterator(): Internal.LongIterator;
        abstract add(arg0: number): boolean;
        abstract isEmpty(): boolean;
        abstract "contains(long)"(arg0: number): boolean;
        /**
         * @deprecated
        */
        "add(java.lang.Object)"(arg0: any): boolean;
        /**
         * @deprecated
        */
        toLongArray(arg0: number[]): number[];
        abstract addAll(arg0: Internal.Collection_<number>): boolean;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): Internal.Set<E>;
        abstract "retainAll(it.unimi.dsi.fastutil.longs.LongCollection)"(arg0: Internal.LongCollection_): boolean;
        abstract toArray(arg0: number[]): number[];
        /**
         * @deprecated
        */
        "add(java.lang.Long)"(arg0: number): boolean;
        "of(long,long)"(arg0: number, arg1: number): this;
        abstract containsAll(arg0: Internal.Collection_<any>): boolean;
        /**
         * @deprecated
        */
        forEach(arg0: Internal.Consumer_<number>): void;
        of(...arg0: number[]): this;
        /**
         * @deprecated
        */
        parallelStream(): Internal.Stream<number>;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E): Internal.Set<E>;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): Internal.Set<E>;
        /**
         * @deprecated
        */
        contains(arg0: any): boolean;
        abstract "containsAll(it.unimi.dsi.fastutil.longs.LongCollection)"(arg0: Internal.LongCollection_): boolean;
        abstract "add(long)"(arg0: number): boolean;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): Internal.Set<E>;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): Internal.Set<E>;
        iterator(): Internal.Iterator<any>;
        abstract contains(arg0: number): boolean;
        "of(java.lang.Object,java.lang.Object,java.lang.Object)"<E>(arg0: E, arg1: E, arg2: E): Internal.Set<E>;
        /**
         * @deprecated
        */
        removeIf(arg0: Internal.Predicate_<number>): boolean;
        abstract "toArray(java.lang.Object[])"<T>(arg0: T[]): T[];
        "toArray(java.util.function.IntFunction)"<T>(arg0: Internal.IntFunction_<T[]>): T[];
        abstract toArray(): any[];
        of(): this;
        /**
         * @deprecated
        */
        rem(arg0: number): boolean;
        abstract "addAll(java.util.Collection)"(arg0: Internal.Collection_<number>): boolean;
        "forEach(it.unimi.dsi.fastutil.longs.LongConsumer)"(arg0: it.unimi.dsi.fastutil.longs.LongConsumer_): void;
        abstract toLongArray(): number[];
        abstract hashCode(): number;
        abstract size(): number;
        longParallelStream(): Internal.LongStream;
        of<E>(...arg0: E[]): Internal.Set<E>;
        "of(long[])"(...arg0: number[]): this;
        longStream(): Internal.LongStream;
        abstract clear(): void;
        abstract equals(arg0: any): boolean;
        removeIf(arg0: it.unimi.dsi.fastutil.longs.LongPredicate_): boolean;
        "of(java.lang.Object)"<E>(arg0: E): Internal.Set<E>;
        get empty(): boolean
    }
    type LongSet_ = LongSet;
    class TreeDecorator$Context {
        constructor(arg0: Internal.LevelSimulatedReader_, arg1: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg2: Internal.RandomSource_, arg3: Internal.Set_<BlockPos>, arg4: Internal.Set_<BlockPos>, arg5: Internal.Set_<BlockPos>)
        getClass(): typeof any;
        roots(): Internal.ObjectArrayList<BlockPos>;
        toString(): string;
        leaves(): Internal.ObjectArrayList<BlockPos>;
        random(): Internal.RandomSource;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        setBlock(arg0: BlockPos_, arg1: Internal.BlockState_): void;
        placeVine(arg0: BlockPos_, arg1: Internal.BooleanProperty_): void;
        level(): Internal.LevelSimulatedReader;
        hashCode(): number;
        isAir(arg0: BlockPos_): boolean;
        wait(): void;
        logs(): Internal.ObjectArrayList<BlockPos>;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
    }
    type TreeDecorator$Context_ = TreeDecorator$Context;
    class ClientboundTabListPacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: net.minecraft.network.chat.Component_, arg1: net.minecraft.network.chat.Component_)
        constructor(arg0: Internal.FriendlyByteBuf_)
        handle(arg0: Internal.PacketListener_): void;
        getClass(): typeof any;
        write(arg0: Internal.FriendlyByteBuf_): void;
        toString(): string;
        getHeader(): net.minecraft.network.chat.Component;
        getFooter(): net.minecraft.network.chat.Component;
        notifyAll(): void;
        notify(): void;
        isSkippable(): boolean;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        wait(): void;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        wait(arg0: number): void;
        "handle(net.minecraft.network.protocol.game.ClientGamePacketListener)"(arg0: Internal.ClientGamePacketListener_): void;
        equals(arg0: any): boolean;
        "handle(net.minecraft.network.PacketListener)"(arg0: Internal.PacketListener_): void;
        get class(): typeof any
        get header(): net.minecraft.network.chat.Component
        get footer(): net.minecraft.network.chat.Component
        get skippable(): boolean
    }
    type ClientboundTabListPacket_ = ClientboundTabListPacket;
    class PistonHeadBlock extends Internal.DirectionalBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        handler$zmd000$onUse(state: Internal.BlockState_, world: Internal.Level_, pos: BlockPos_, player: Internal.Player_, hand: Internal.InteractionHand_, hit: Internal.BlockHitResult_, cir: Internal.CallbackInfoReturnable_<any>): void;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
        static readonly TYPE: Internal.EnumProperty<Internal.PistonType>;
        static readonly SHORT: (Internal.BooleanProperty) & (Internal.BooleanProperty);
        static readonly PLATFORM: (4.0) & (number);
    }
    type PistonHeadBlock_ = PistonHeadBlock;
    class InsideWorldBoundsPredicate implements net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate {
        constructor(arg0: Vec3i_)
        static noFluid(arg0: Vec3i_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        and(arg0: Internal.BiPredicate_<Internal.WorldGenLevel, BlockPos>): Internal.BiPredicate<Internal.WorldGenLevel, BlockPos>;
        static "matchesBlocks(java.util.List)"(arg0: Internal.List_<Internal.Block>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static matchesTag(arg0: Vec3i_, arg1: Internal.TagKey_<Internal.Block>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        notify(): void;
        negate(): Internal.BiPredicate<Internal.WorldGenLevel, BlockPos>;
        test(arg0: Internal.WorldGenLevel_, arg1: BlockPos_): boolean;
        static solid(arg0: Vec3i_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static insideWorld(arg0: Vec3i_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        or(arg0: Internal.BiPredicate_<Internal.WorldGenLevel, BlockPos>): Internal.BiPredicate<Internal.WorldGenLevel, BlockPos>;
        static matchesTag(arg0: Internal.TagKey_<Internal.Block>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static alwaysTrue(): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static solid(): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        type(): Internal.BlockPredicateType<any>;
        static allOf(...arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static matchesBlocks(arg0: Vec3i_, arg1: Internal.List_<Internal.Block>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static "matchesBlocks(net.minecraft.world.level.block.Block[])"(...arg0: Internal.Block_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static replaceable(): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static matchesFluids(arg0: Vec3i_, arg1: Internal.List_<Internal.Fluid>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static matchesFluids(arg0: Vec3i_, ...arg1: Internal.Fluid_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        wait(): void;
        static anyOf(...arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static "anyOf(net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate[])"(...arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static hasSturdyFace(arg0: Vec3i_, arg1: Internal.Direction_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        test(arg0: any, arg1: any): boolean;
        static matchesBlocks(...arg0: Internal.Block_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static hasSturdyFace(arg0: Internal.Direction_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        getClass(): typeof any;
        static "matchesFluids(net.minecraft.core.Vec3i,net.minecraft.world.level.material.Fluid[])"(arg0: Vec3i_, ...arg1: Internal.Fluid_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static "allOf(java.util.List)"(arg0: Internal.List_<net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static anyOf(arg0: Internal.List_<net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static "anyOf(java.util.List)"(arg0: Internal.List_<net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static noFluid(): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        wait(arg0: number, arg1: number): void;
        static anyOf(arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_, arg1: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static "matchesBlocks(net.minecraft.core.Vec3i,net.minecraft.world.level.block.Block[])"(arg0: Vec3i_, ...arg1: Internal.Block_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static "allOf(net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate[])"(...arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        "test(net.minecraft.world.level.WorldGenLevel,net.minecraft.core.BlockPos)"(arg0: Internal.WorldGenLevel_, arg1: BlockPos_): boolean;
        static matchesBlocks(arg0: Vec3i_, ...arg1: Internal.Block_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        toString(): string;
        notifyAll(): void;
        static "matchesFluids(net.minecraft.core.Vec3i,java.util.List)"(arg0: Vec3i_, arg1: Internal.List_<Internal.Fluid>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static "matchesBlocks(net.minecraft.core.Vec3i,java.util.List)"(arg0: Vec3i_, arg1: Internal.List_<Internal.Block>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static wouldSurvive(arg0: Internal.BlockState_, arg1: Vec3i_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        hashCode(): number;
        static not(arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static allOf(arg0: Internal.List_<net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static allOf(arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_, arg1: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        wait(arg0: number): void;
        static replaceable(arg0: Vec3i_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        "test(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): boolean;
        static matchesBlocks(arg0: Internal.List_<Internal.Block>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        equals(arg0: any): boolean;
        static matchesFluids(...arg0: Internal.Fluid_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        get class(): typeof any
        static readonly CODEC: Internal.Codec<Internal.InsideWorldBoundsPredicate>;
    }
    type InsideWorldBoundsPredicate_ = InsideWorldBoundsPredicate;
    class ServerConnectionListener {
        constructor(arg0: Internal.MinecraftServer_)
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        tick(): void;
        hashCode(): number;
        wait(): void;
        stop(): void;
        wait(arg0: number): void;
        startMemoryChannel(): Internal.SocketAddress;
        equals(arg0: any): boolean;
        getConnections(): Internal.List<Internal.Connection>;
        getServer(): Internal.MinecraftServer;
        startTcpServerListener(arg0: Internal.InetAddress_, arg1: number): void;
        get class(): typeof any
        get connections(): Internal.List<Internal.Connection>
        get server(): Internal.MinecraftServer
        static readonly SERVER_EPOLL_EVENT_GROUP: Internal.LazyLoadedValue<Internal.EpollEventLoopGroup>;
        running: boolean;
        static readonly SERVER_EVENT_GROUP: Internal.LazyLoadedValue<Internal.NioEventLoopGroup>;
    }
    type ServerConnectionListener_ = ServerConnectionListener;
    class MethodHandles$Lookup {
        getClass(): typeof any;
        /**
         * @deprecated
        */
        hasPrivateAccess(): boolean;
        hasFullPrivilegeAccess(): boolean;
        findVarHandle(arg0: typeof any, arg1: string, arg2: typeof any): Internal.VarHandle;
        unreflectSetter(arg0: Internal.Field_): Internal.MethodHandle;
        findStaticVarHandle(arg0: typeof any, arg1: string, arg2: typeof any): Internal.VarHandle;
        unreflectConstructor(arg0: Internal.Constructor_<any>): Internal.MethodHandle;
        findClass(arg0: string): typeof any;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        unreflect(arg0: Internal.Method_): Internal.MethodHandle;
        findGetter(arg0: typeof any, arg1: string, arg2: typeof any): Internal.MethodHandle;
        findSetter(arg0: typeof any, arg1: string, arg2: typeof any): Internal.MethodHandle;
        findConstructor(arg0: typeof any, arg1: Internal.MethodType_): Internal.MethodHandle;
        dropLookupMode(arg0: number): this;
        defineHiddenClassWithClassData(arg0: number[], arg1: any, arg2: boolean, ...arg3: any_[]): this;
        unreflectSpecial(arg0: Internal.Method_, arg1: typeof any): Internal.MethodHandle;
        "in"(arg0: typeof any): this;
        lookupClass(): typeof any;
        findStaticSetter(arg0: typeof any, arg1: string, arg2: typeof any): Internal.MethodHandle;
        previousLookupClass(): typeof any;
        unreflectVarHandle(arg0: Internal.Field_): Internal.VarHandle;
        toString(): string;
        unreflectGetter(arg0: Internal.Field_): Internal.MethodHandle;
        accessClass(arg0: typeof any): typeof any;
        findSpecial(arg0: typeof any, arg1: string, arg2: Internal.MethodType_, arg3: typeof any): Internal.MethodHandle;
        notifyAll(): void;
        bind(arg0: any, arg1: string, arg2: Internal.MethodType_): Internal.MethodHandle;
        ensureInitialized(arg0: typeof any): typeof any;
        lookupModes(): number;
        hashCode(): number;
        defineClass(arg0: number[]): typeof any;
        findVirtual(arg0: typeof any, arg1: string, arg2: Internal.MethodType_): Internal.MethodHandle;
        wait(): void;
        wait(arg0: number): void;
        findStatic(arg0: typeof any, arg1: string, arg2: Internal.MethodType_): Internal.MethodHandle;
        findStaticGetter(arg0: typeof any, arg1: string, arg2: typeof any): Internal.MethodHandle;
        revealDirect(arg0: Internal.MethodHandle_): Internal.MethodHandleInfo;
        defineHiddenClass(arg0: number[], arg1: boolean, ...arg2: any_[]): this;
        equals(arg0: any): boolean;
        get class(): typeof any
        static readonly PACKAGE: (8) & (number);
        static readonly PUBLIC: (1) & (number);
        static readonly UNCONDITIONAL: (32) & (number);
        static readonly MODULE: (16) & (number);
        static readonly ORIGINAL: (64) & (number);
        static readonly PRIVATE: (2) & (number);
        static readonly PROTECTED: (4) & (number);
    }
    type MethodHandles$Lookup_ = MethodHandles$Lookup;
    interface IntStack extends it.unimi.dsi.fastutil.Stack<number> {
        /**
         * @deprecated
        */
        peek(arg0: number): number;
        /**
         * @deprecated
        */
        push(arg0: number): void;
        /**
         * @deprecated
        */
        top(): any;
        abstract "push(int)"(arg0: number): void;
        /**
         * @deprecated
        */
        pop(): any;
        abstract peekInt(arg0: number): number;
        /**
         * @deprecated
        */
        "push(java.lang.Integer)"(arg0: number): void;
        abstract isEmpty(): boolean;
        abstract push(arg0: number): void;
        abstract topInt(): number;
        /**
         * @deprecated
        */
        "push(java.lang.Object)"(arg0: any): void;
        abstract popInt(): number;
        /**
         * @deprecated
        */
        push(arg0: any): void;
        get empty(): boolean
    }
    type IntStack_ = IntStack;
    class ByteArrayTag extends Internal.CollectionTag<Internal.ByteTag> {
        constructor(arg0: Internal.List_<number>)
        constructor(arg0: number[])
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): Internal.List<E>;
        "set(int,java.lang.Object)"(arg0: number, arg1: any): any;
        getType(): Internal.TagType<Internal.ByteArrayTag>;
        static copyOf<E>(arg0: Internal.Collection_<E>): Internal.List<E>;
        parallelStream(): Internal.Stream<Internal.ByteTag>;
        "add(int,java.lang.Object)"(arg0: number, arg1: any): void;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): Internal.List<E>;
        "accept(net.minecraft.nbt.StreamTagVisitor)"(arg0: Internal.StreamTagVisitor_): Internal.StreamTagVisitor$ValueResult;
        notify(): void;
        "remove(int)"(arg0: number): any;
        add(arg0: number, arg1: any): void;
        sizeInBytes(): number;
        static of<E>(arg0: E): Internal.List<E>;
        add(arg0: Internal.ByteTag_): boolean;
        static of<E>(): Internal.List<E>;
        setTag(arg0: number, arg1: Internal.Tag_): boolean;
        abstract retainAll(arg0: Internal.Collection_<any>): boolean;
        subList(arg0: number, arg1: number): Internal.List<Internal.ByteTag>;
        toArray<T>(arg0: Internal.IntFunction_<T[]>): T[];
        getAsByteArray(): number[];
        removeIf(arg0: Internal.Predicate_<Internal.ByteTag>): boolean;
        write(arg0: Internal.DataOutput_): void;
        replaceAll(arg0: Internal.UnaryOperator_<Internal.ByteTag>): void;
        static of<E>(arg0: E, arg1: E, arg2: E): Internal.List<E>;
        indexOf(arg0: any): number;
        forEach(arg0: Internal.Consumer_<Internal.ByteTag>): void;
        abstract toArray<T>(arg0: T[]): T[];
        "set(int,net.minecraft.nbt.ByteTag)"(arg0: number, arg1: Internal.ByteTag_): Internal.ByteTag;
        abstract remove(arg0: any): boolean;
        abstract "remove(java.lang.Object)"(arg0: any): boolean;
        "add(int,net.minecraft.nbt.ByteTag)"(arg0: number, arg1: Internal.ByteTag_): void;
        add(arg0: number, arg1: Internal.Tag_): void;
        add(arg0: number, arg1: Internal.ByteTag_): void;
        accept(arg0: Internal.TagVisitor_): void;
        static of<E>(arg0: E, arg1: E): Internal.List<E>;
        abstract removeAll(arg0: Internal.Collection_<any>): boolean;
        copy(): Internal.Tag;
        wait(): void;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E): Internal.List<E>;
        accept(arg0: Internal.StreamTagVisitor_): Internal.StreamTagVisitor$ValueResult;
        listIterator(): Internal.ListIterator<Internal.ByteTag>;
        static "of(java.lang.Object[])"<E>(...arg0: E[]): Internal.List<E>;
        set(arg0: number, arg1: any): any;
        abstract addAll(arg0: Internal.Collection_<Internal.ByteTag>): boolean;
        getElementType(): number;
        lastIndexOf(arg0: any): number;
        getClass(): typeof any;
        remove(arg0: number): any;
        addAll(arg0: number, arg1: Internal.Collection_<Internal.ByteTag>): boolean;
        set(arg0: number, arg1: Internal.Tag_): Internal.Tag;
        iterator(): Internal.Iterator<Internal.ByteTag>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): Internal.List<E>;
        addTag(arg0: number, arg1: Internal.Tag_): boolean;
        sort(arg0: Internal.Comparator_<Internal.ByteTag>): void;
        abstract isEmpty(): boolean;
        wait(arg0: number, arg1: number): void;
        "accept(net.minecraft.nbt.TagVisitor)"(arg0: Internal.TagVisitor_): void;
        set(arg0: number, arg1: Internal.ByteTag_): Internal.ByteTag;
        static of<E>(...arg0: E[]): Internal.List<E>;
        abstract containsAll(arg0: Internal.Collection_<any>): boolean;
        acceptAsRoot(arg0: Internal.StreamTagVisitor_): void;
        getId(): number;
        spliterator(): Internal.Spliterator<Internal.ByteTag>;
        "set(int,net.minecraft.nbt.Tag)"(arg0: number, arg1: Internal.Tag_): Internal.Tag;
        abstract contains(arg0: any): boolean;
        stream(): Internal.Stream<Internal.ByteTag>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): Internal.List<E>;
        static "of(java.lang.Object)"<E>(arg0: E): Internal.List<E>;
        toString(): string;
        notifyAll(): void;
        abstract "toArray(java.lang.Object[])"<T>(arg0: T[]): T[];
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): Internal.List<E>;
        "toArray(java.util.function.IntFunction)"<T>(arg0: Internal.IntFunction_<T[]>): T[];
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): Internal.List<E>;
        get(arg0: number): any;
        abstract toArray(): any[];
        "add(int,net.minecraft.nbt.Tag)"(arg0: number, arg1: Internal.Tag_): void;
        hashCode(): number;
        size(): number;
        getAsString(): string;
        clear(): void;
        listIterator(arg0: number): Internal.ListIterator<Internal.ByteTag>;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get type(): Internal.TagType<Internal.ByteArrayTag>
        get asByteArray(): number[]
        get elementType(): number
        get class(): typeof any
        get empty(): boolean
        get id(): number
        get asString(): string
        static readonly TYPE: Internal.TagType<Internal.ByteArrayTag>;
    }
    type ByteArrayTag_ = ByteArrayTag;
    class GenericJigsawStructure extends Internal.Structure {
        constructor(config: Internal.Structure$StructureSettings_, startPool: Internal.Holder_<Internal.StructureTemplatePool>, size: number, minYAllowed: Internal.Optional_<number>, maxYAllowed: Internal.Optional_<number>, allowedYRangeFromStart: Internal.Optional_<number>, startHeight: Internal.HeightProvider_, projectStartToHeightmap: Internal.Optional_<Internal.Heightmap$Types>, cannotSpawnInLiquid: boolean, terrainHeightCheckRadius: Internal.Optional_<number>, allowedTerrainHeightRange: Internal.Optional_<number>, biomeRadius: Internal.Optional_<number>, poolsThatIgnoreBoundaries: Internal.HashSet_<ResourceLocation>, maxDistanceFromCenter: Internal.Optional_<number>, buryingType: Internal.Optional_<Internal.GenericJigsawStructure$BURYING_TYPE>, useBoundingBoxHack: boolean)
        static simpleCodec<S extends Internal.Structure>(arg0: Internal.Function_<Internal.Structure$StructureSettings, S>): Internal.Codec<S>;
        getClass(): typeof any;
        generate(arg0: Internal.RegistryAccess_, arg1: Internal.ChunkGenerator_, arg2: Internal.BiomeSource_, arg3: Internal.RandomState_, arg4: Internal.StructureTemplateManager_, arg5: number, arg6: Internal.ChunkPos_, arg7: number, arg8: Internal.LevelHeightAccessor_, arg9: Internal.Predicate_<Internal.Holder<Internal.Biome>>): Internal.StructureStart;
        toString(): string;
        biomes(): Internal.HolderSet<Internal.Biome>;
        findValidGenerationPoint(arg0: Internal.Structure$GenerationContext_): Internal.Optional<Internal.Structure$GenerationStub>;
        spawnOverrides(): Internal.Map<Internal.MobCategory, Internal.StructureSpawnOverride>;
        step(): Internal.GenerationStep$Decoration;
        notifyAll(): void;
        notify(): void;
        m_214086_(context: Internal.Structure$GenerationContext_): Internal.Optional<Internal.Structure$GenerationStub>;
        terrainAdaptation(): Internal.TerrainAdjustment;
        wait(arg0: number, arg1: number): void;
        adjustBoundingBox(arg0: Internal.BoundingBox_): Internal.BoundingBox;
        hashCode(): number;
        type(): Internal.StructureType<any>;
        static settingsCodec<S extends Internal.Structure>(arg0: Internal.RecordCodecBuilder$Instance_<S>): Internal.RecordCodecBuilder<S, Internal.Structure$StructureSettings>;
        wait(): void;
        modifiableStructureInfo(): Internal.ModifiableStructureInfo;
        wait(arg0: number): void;
        afterPlace(arg0: Internal.WorldGenLevel_, arg1: Internal.StructureManager_, arg2: Internal.ChunkGenerator_, arg3: Internal.RandomSource_, arg4: Internal.BoundingBox_, arg5: Internal.ChunkPos_, arg6: Internal.PiecesContainer_): void;
        equals(arg0: any): boolean;
        getModifiedStructureSettings(): Internal.Structure$StructureSettings;
        get class(): typeof any
        set tingsCodec(arg0: Internal.RecordCodecBuilder$Instance_<S>)
        get modifiedStructureSettings(): Internal.Structure$StructureSettings
        readonly allowedTerrainHeightRange: Internal.Optional<number>;
        static readonly CODEC: Internal.Codec<Internal.GenericJigsawStructure>;
        readonly useBoundingBoxHack: boolean;
        readonly terrainHeightCheckRadius: Internal.Optional<number>;
        readonly startPool: Internal.Holder<Internal.StructureTemplatePool>;
        readonly size: number;
        readonly maxYAllowed: Internal.Optional<number>;
        readonly projectStartToHeightmap: Internal.Optional<Internal.Heightmap$Types>;
        readonly startHeight: Internal.HeightProvider;
        readonly minYAllowed: Internal.Optional<number>;
        readonly buryingType: Internal.Optional<Internal.GenericJigsawStructure$BURYING_TYPE>;
        readonly allowedYRangeFromStart: Internal.Optional<number>;
        readonly cannotSpawnInLiquid: boolean;
        readonly maxDistanceFromCenter: Internal.Optional<number>;
        readonly poolsThatIgnoreBoundaries: Internal.HashSet<ResourceLocation>;
        readonly biomeRadius: Internal.Optional<number>;
    }
    type GenericJigsawStructure_ = GenericJigsawStructure;
    interface IGuiHandlerRegistration {
        abstract addGuiScreenHandler<T extends Internal.Screen>(arg0: T, arg1: Internal.IScreenHandler_<T>): void;
        abstract addGenericGuiContainerHandler<T extends Internal.AbstractContainerScreen<any>>(arg0: T, arg1: Internal.IGuiContainerHandler_<any>): void;
        abstract getJeiHelpers(): Internal.IJeiHelpers;
        abstract addGuiContainerHandler<T extends Internal.AbstractContainerScreen<any>>(arg0: T, arg1: Internal.IGuiContainerHandler_<T>): void;
        abstract addGlobalGuiHandler(arg0: Internal.IGlobalGuiHandler_): void;
        addRecipeClickArea<T extends Internal.AbstractContainerScreen<any>>(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, ...arg5: mezz.jei.api.recipe.RecipeType_<any>[]): void;
        abstract addGhostIngredientHandler<T extends Internal.Screen>(arg0: T, arg1: Internal.IGhostIngredientHandler_<T>): void;
        get jeiHelpers(): Internal.IJeiHelpers
    }
    type IGuiHandlerRegistration_ = IGuiHandlerRegistration;
    class LivingConversionEvent extends Internal.LivingEvent {
        constructor()
        constructor(arg0: Internal.LivingEntity_)
        getResult(): Internal.Event$Result;
        setCanceled(arg0: boolean): void;
        getClass(): typeof any;
        toString(): string;
        setPhase(arg0: Internal.EventPriority_): void;
        notifyAll(): void;
        isCanceled(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hasResult(): boolean;
        setResult(arg0: Internal.Event$Result_): void;
        hashCode(): number;
        isCancelable(): boolean;
        getEntity(): Internal.Entity;
        wait(): void;
        getListenerList(): Internal.ListenerList;
        wait(arg0: number): void;
        getPhase(): Internal.EventPriority;
        equals(arg0: any): boolean;
        get result(): Internal.Event$Result
        set canceled(arg0: boolean)
        get class(): typeof any
        set phase(arg0: Internal.EventPriority_)
        get canceled(): boolean
        set result(arg0: Internal.Event$Result_)
        get cancelable(): boolean
        get entity(): Internal.Entity
        get listenerList(): Internal.ListenerList
        get phase(): Internal.EventPriority
    }
    type LivingConversionEvent_ = LivingConversionEvent;
    class AmphibiousPathNavigation extends Internal.PathNavigation {
        constructor(arg0: Internal.Mob_, arg1: Internal.Level_)
        getClass(): typeof any;
        "createPath(net.minecraft.world.entity.Entity,int)"(arg0: Internal.Entity_, arg1: number): net.minecraft.world.level.pathfinder.Path;
        createPath(arg0: Internal.Stream_<BlockPos>, arg1: number): net.minecraft.world.level.pathfinder.Path;
        moveTo(arg0: Internal.Entity_, arg1: number): boolean;
        canFloat(): boolean;
        createPath(arg0: Internal.Entity_, arg1: number): net.minecraft.world.level.pathfinder.Path;
        recomputePath(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        "createPath(java.util.Set,int)"(arg0: Internal.Set_<BlockPos>, arg1: number): net.minecraft.world.level.pathfinder.Path;
        createPath(arg0: number, arg1: number, arg2: number, arg3: number): net.minecraft.world.level.pathfinder.Path;
        setCanFloat(arg0: boolean): void;
        createPath(arg0: BlockPos_, arg1: number, arg2: number): net.minecraft.world.level.pathfinder.Path;
        isInProgress(): boolean;
        isStuck(): boolean;
        getTargetPos(): BlockPos;
        getPath(): net.minecraft.world.level.pathfinder.Path;
        resetMaxVisitedNodesMultiplier(): void;
        getNodeEvaluator(): Internal.NodeEvaluator;
        moveTo(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        moveTo(arg0: net.minecraft.world.level.pathfinder.Path_, arg1: number): boolean;
        toString(): string;
        "createPath(java.util.stream.Stream,int)"(arg0: Internal.Stream_<BlockPos>, arg1: number): net.minecraft.world.level.pathfinder.Path;
        "moveTo(net.minecraft.world.entity.Entity,double)"(arg0: Internal.Entity_, arg1: number): boolean;
        notifyAll(): void;
        setSpeedModifier(arg0: number): void;
        shouldRecomputePath(arg0: BlockPos_): boolean;
        isDone(): boolean;
        getMaxDistanceToWaypoint(): number;
        tick(): void;
        setMaxVisitedNodesMultiplier(arg0: number): void;
        hashCode(): number;
        createPath(arg0: BlockPos_, arg1: number): net.minecraft.world.level.pathfinder.Path;
        wait(): void;
        stop(): void;
        wait(arg0: number): void;
        canCutCorner(arg0: Internal.BlockPathTypes_): boolean;
        equals(arg0: any): boolean;
        createPath(arg0: Internal.Set_<BlockPos>, arg1: number): net.minecraft.world.level.pathfinder.Path;
        "createPath(net.minecraft.core.BlockPos,int)"(arg0: BlockPos_, arg1: number): net.minecraft.world.level.pathfinder.Path;
        isStableDestination(arg0: BlockPos_): boolean;
        "moveTo(net.minecraft.world.level.pathfinder.Path,double)"(arg0: net.minecraft.world.level.pathfinder.Path_, arg1: number): boolean;
        get class(): typeof any
        set canFloat(arg0: boolean)
        get inProgress(): boolean
        get stuck(): boolean
        get targetPos(): BlockPos
        get path(): net.minecraft.world.level.pathfinder.Path
        get nodeEvaluator(): Internal.NodeEvaluator
        set speedModifier(arg0: number)
        get done(): boolean
        get maxDistanceToWaypoint(): number
        set maxVisitedNodesMultiplier(arg0: number)
    }
    type AmphibiousPathNavigation_ = AmphibiousPathNavigation;
    class TranslationUnit extends icyllis.arc3d.compiler.tree.Node implements Internal.Iterable<Internal.TopLevelElement> {
        constructor(position: number, source: string[], kind: Internal.ShaderKind_, options: Internal.CompileOptions_, isBuiltin: boolean, isModule: boolean, types: Internal.BuiltinTypes_, symbolTable: icyllis.arc3d.compiler.SymbolTable_, uniqueElements: Internal.ArrayList_<Internal.TopLevelElement>)
        getClass(): typeof any;
        getSource(): string[];
        getEndOffset(): number;
        getKind(): Internal.ShaderKind;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getStartOffset(): number;
        forEach(arg0: Internal.Consumer_<Internal.TopLevelElement>): void;
        iterator(): Internal.Iterator<Internal.TopLevelElement>;
        getSymbolTable(): icyllis.arc3d.compiler.SymbolTable;
        isBuiltin(): boolean;
        spliterator(): Internal.Spliterator<Internal.TopLevelElement>;
        toString(): string;
        getOptions(): Internal.CompileOptions;
        notifyAll(): void;
        accept(visitor: Internal.TreeVisitor_): boolean;
        getUniqueElements(): Internal.ArrayList<Internal.TopLevelElement>;
        getSharedElements(): Internal.ArrayList<Internal.TopLevelElement>;
        hashCode(): number;
        getUsage(): Internal.SymbolUsage;
        isModule(): boolean;
        wait(): void;
        wait(arg0: number): void;
        getTypes(): Internal.BuiltinTypes;
        equals(arg0: any): boolean;
        get class(): typeof any
        get source(): string[]
        get endOffset(): number
        get kind(): Internal.ShaderKind
        get startOffset(): number
        get symbolTable(): icyllis.arc3d.compiler.SymbolTable
        get builtin(): boolean
        get options(): Internal.CompileOptions
        get uniqueElements(): Internal.ArrayList<Internal.TopLevelElement>
        get sharedElements(): Internal.ArrayList<Internal.TopLevelElement>
        get usage(): Internal.SymbolUsage
        get module(): boolean
        get types(): Internal.BuiltinTypes
    }
    type TranslationUnit_ = TranslationUnit;
    interface IBellConnections {
        abstract amendments$getConnected(): Internal.IBellConnections$BellConnection;
        abstract amendments$setConnected(arg0: Internal.IBellConnections$BellConnection_): void;
    }
    type IBellConnections_ = IBellConnections;
    abstract class ScreenEvent extends net.minecraftforge.eventbus.api.Event {
        constructor()
        getResult(): Internal.Event$Result;
        setCanceled(arg0: boolean): void;
        getClass(): typeof any;
        toString(): string;
        setPhase(arg0: Internal.EventPriority_): void;
        getScreen(): Internal.Screen;
        notifyAll(): void;
        isCanceled(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hasResult(): boolean;
        setResult(arg0: Internal.Event$Result_): void;
        hashCode(): number;
        isCancelable(): boolean;
        wait(): void;
        getListenerList(): Internal.ListenerList;
        wait(arg0: number): void;
        getPhase(): Internal.EventPriority;
        equals(arg0: any): boolean;
        get result(): Internal.Event$Result
        set canceled(arg0: boolean)
        get class(): typeof any
        set phase(arg0: Internal.EventPriority_)
        get screen(): Internal.Screen
        get canceled(): boolean
        set result(arg0: Internal.Event$Result_)
        get cancelable(): boolean
        get listenerList(): Internal.ListenerList
        get phase(): Internal.EventPriority
    }
    type ScreenEvent_ = ScreenEvent;
    class LavaCauldronBlock extends Internal.AbstractCauldronBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        modifyReturnValue$dbl000$use(original: Internal.InteractionResult_, state: Internal.BlockState_, level: Internal.Level_, pos: BlockPos_, player: Internal.Player_, hand: Internal.InteractionHand_, stack: Internal.ItemStack_): Internal.InteractionResult;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        handler$zmd000$onUse(state: Internal.BlockState_, world: Internal.Level_, pos: BlockPos_, player: Internal.Player_, hand: Internal.InteractionHand_, hit: Internal.BlockHitResult_, cir: Internal.CallbackInfoReturnable_<any>): void;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getId(): string;
        getLootTable(): ResourceLocation;
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        isFull(arg0: Internal.BlockState_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(state: Internal.BlockState_, level: Internal.Level_, pos: BlockPos_, rand: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
    }
    type LavaCauldronBlock_ = LavaCauldronBlock;
    interface View$OnTouchListener {
        abstract onTouch(arg0: icyllis.modernui.view.View_, arg1: Internal.MotionEvent_): boolean;
        (arg0: icyllis.modernui.view.View, arg1: Internal.MotionEvent): boolean;
    }
    type View$OnTouchListener_ = ((arg0: icyllis.modernui.view.View, arg1: Internal.MotionEvent)=> boolean) | View$OnTouchListener;
    interface ToDoubleBiFunction <T, U> {
        abstract applyAsDouble(arg0: T, arg1: U): number;
        (arg0: T, arg1: U): number;
    }
    type ToDoubleBiFunction_<T, U> = ToDoubleBiFunction<T, U> | ((arg0: T, arg1: U)=> number);
    interface BlockBehaviour$OffsetFunction {
        abstract evaluate(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Vec3d;
        (arg0: Internal.BlockState, arg1: Internal.BlockGetter, arg2: BlockPos): Vec3d_;
    }
    type BlockBehaviour$OffsetFunction_ = BlockBehaviour$OffsetFunction | ((arg0: Internal.BlockState, arg1: Internal.BlockGetter, arg2: BlockPos)=> Vec3d_);
    interface IEventListener {
        abstract invoke(arg0: net.minecraftforge.eventbus.api.Event_): void;
        listenerName(): string;
        (arg0: net.minecraftforge.eventbus.api.Event): void;
    }
    type IEventListener_ = IEventListener | ((arg0: net.minecraftforge.eventbus.api.Event)=> void);
    interface RecordBuilder <T> {
        build(arg0: Internal.DataResult_<T>): Internal.DataResult<T>;
        abstract add(arg0: T, arg1: Internal.DataResult_<T>): this;
        abstract withErrorsFrom(arg0: Internal.DataResult_<any>): this;
        abstract "add(com.mojang.serialization.DataResult,com.mojang.serialization.DataResult)"(arg0: Internal.DataResult_<T>, arg1: Internal.DataResult_<T>): this;
        abstract "build(java.lang.Object)"(arg0: T): Internal.DataResult<T>;
        add(arg0: string, arg1: Internal.DataResult_<T>): this;
        abstract build(arg0: T): Internal.DataResult<T>;
        abstract "add(java.lang.Object,java.lang.Object)"(arg0: T, arg1: T): this;
        abstract "add(java.lang.Object,com.mojang.serialization.DataResult)"(arg0: T, arg1: Internal.DataResult_<T>): this;
        "build(com.mojang.serialization.DataResult)"(arg0: Internal.DataResult_<T>): Internal.DataResult<T>;
        abstract setLifecycle(arg0: Internal.Lifecycle_): this;
        add<E>(arg0: string, arg1: E, arg2: Internal.Encoder_<E>): this;
        "add(java.lang.String,java.lang.Object)"(arg0: string, arg1: T): this;
        abstract add(arg0: Internal.DataResult_<T>, arg1: Internal.DataResult_<T>): this;
        abstract add(arg0: T, arg1: T): this;
        "add(java.lang.String,com.mojang.serialization.DataResult)"(arg0: string, arg1: Internal.DataResult_<T>): this;
        abstract ops(): Internal.DynamicOps<T>;
        add(arg0: string, arg1: T): this;
        abstract mapError(arg0: Internal.UnaryOperator_<string>): this;
        set lifecycle(arg0: Internal.Lifecycle_)
    }
    type RecordBuilder_<T> = RecordBuilder<T>;
    class BlockState extends Internal.BlockBehaviour$BlockStateBase implements Internal.BlockStateFTBC, Internal.IForgeBlockState {
        constructor(arg0: Internal.Block_, arg1: Internal.ImmutableMap_<Internal.Property<any>, Internal.Comparable<any>>, arg2: Internal.MapCodec_<Internal.BlockState>)
        getNeighborTable(): Internal.Table<any, any, any>;
        updateNeighbourShapes(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: number): void;
        canOcclude(): boolean;
        isPortalFrame(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        getValues(): Internal.ImmutableMap<Internal.Property<any>, Internal.Comparable<any>>;
        getSoundType(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Entity_): SoundType;
        tick(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: Internal.RandomSource_): void;
        getLightBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): number;
        handler$bmm000$getOffset(level: Internal.BlockGetter_, pos: BlockPos_, offsetFunction: Internal.BlockBehaviour$OffsetFunction_, cir: Internal.CallbackInfoReturnable_<any>): void;
        updateNeighbourShapes(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: number, arg3: number): void;
        "is(net.minecraft.core.HolderSet)"(arg0: Internal.HolderSet_<Internal.Block>): boolean;
        isBed(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.LivingEntity_): boolean;
        is(arg0: Internal.TagKey_<Internal.Block>): boolean;
        canHarvestBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        isConduitFrame(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: BlockPos_): boolean;
        setReplaceable(arg0: boolean): void;
        setValue<T extends Internal.Comparable<T>, V extends T>(arg0: Internal.Property_<T>, arg1: V): this;
        initCache(): void;
        useShapeForLightOcclusion(): boolean;
        isRandomlyTicking(): boolean;
        shouldSpawnParticlesOnBreak(): boolean;
        canSurvive(arg0: Internal.LevelReader_, arg1: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.FluidState_, arg3: BlockPos_): boolean;
        getStateAtViewpoint(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Vec3d_): this;
        isFaceSturdy(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        getSeed(arg0: BlockPos_): number;
        getToolModifiedState(arg0: Internal.UseOnContext_, arg1: Internal.ToolAction_, arg2: boolean): this;
        handler$eop000$cacheStateHead(arg0: Internal.CallbackInfo_): void;
        replacePropertyMap(arg0: Internal.ImmutableMap_<any, any>): void;
        addLandingEffects(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: number): boolean;
        getCollisionShape(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.CollisionContext_): Internal.VoxelShape;
        getClass(): typeof any;
        isViewBlocking(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        getFluidState(): Internal.FluidState;
        getShape(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.VoxelShape;
        "is(net.minecraft.world.level.block.Block)"(arg0: Internal.Block_): boolean;
        onCaughtFire(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.LivingEntity_): void;
        getTags(): Internal.Stream<Internal.TagKey<Internal.Block>>;
        instrument(): Internal.NoteBlockInstrument;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Direction_): boolean;
        hasBlockEntity(): boolean;
        getValue<T extends Internal.Comparable<T>>(arg0: Internal.Property_<T>): T;
        hasAnalogOutputSignal(): boolean;
        supportsExternalFaceHiding(): boolean;
        hasOffsetFunction(): boolean;
        setRequiresTool(arg0: boolean): void;
        getBlockPathType(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Mob_): Internal.BlockPathTypes;
        getRenderShape(): Internal.RenderShape;
        rotate(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.Rotation_): this;
        getPistonPushReaction(): Internal.PushReaction;
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.Direction_): boolean;
        getDrops(arg0: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        isFaceSturdy(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.SupportType_): boolean;
        hasPostProcess(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        /**
         * @deprecated
        */
        isSolid(): boolean;
        toString(): string;
        entityInside(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Entity_): void;
        notifyAll(): void;
        updateIndirectNeighbourShapes(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: number): void;
        isBurning(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        canEntityDestroy(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Entity_): boolean;
        entityCanStandOn(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Entity_): boolean;
        getRespawnPosition(arg0: Internal.EntityType_<any>, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: number, arg4: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        getPathNodeType(): Internal.BlockPathTypes;
        getCollisionShape(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.VoxelShape;
        getNeighborPathNodeType(): Internal.BlockPathTypes;
        isCollisionShapeFullBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        onTreeGrow(arg0: Internal.LevelReader_, arg1: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: Internal.TreeConfiguration_): boolean;
        getLightEmission(arg0: Internal.BlockGetter_, arg1: BlockPos_): number;
        canBeReplaced(arg0: Internal.Fluid_): boolean;
        setNeighborTable(arg0: Internal.Table_<any, any, any>): void;
        wait(arg0: number): void;
        isStickyBlock(): boolean;
        onDestroyedByPlayer(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Player_, arg3: boolean, arg4: Internal.FluidState_): boolean;
        getOptionalValue<T extends Internal.Comparable<T>>(arg0: Internal.Property_<T>): Internal.Optional<T>;
        getFlammability(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Direction_): number;
        randomTick(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: Internal.RandomSource_): void;
        onBlockExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        setStateIndex(arg0: number): void;
        getShape(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.CollisionContext_): Internal.VoxelShape;
        canRedstoneConnectTo(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Entity_): boolean;
        getSignal(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Direction_): number;
        /**
         * @deprecated
        */
        getLightEmission(): number;
        notify(): void;
        getTicker<T extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockEntityType_<T>): Internal.BlockEntityTicker<T>;
        getAdjacentBlockPathType(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Mob_, arg3: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        getExpDrop(arg0: Internal.LevelReader_, arg1: Internal.RandomSource_, arg2: BlockPos_, arg3: number, arg4: number): number;
        getInteractionShape(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.VoxelShape;
        cycle<T extends Internal.Comparable<T>>(arg0: Internal.Property_<T>): this;
        setBedOccupied(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.LivingEntity_, arg3: boolean): void;
        setLightEmission(arg0: number): void;
        isSolidRender(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        getStateIndex(): number;
        isPathfindable(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.PathComputationType_): boolean;
        getVisualShape(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.CollisionContext_): Internal.VoxelShape;
        ignitedByLava(): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.Rotation_): this;
        getStateMap(): Internal.FastMap<any>;
        isLadder(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.LivingEntity_): boolean;
        setDestroySpeed(arg0: number): void;
        is(arg0: Internal.HolderSet_<Internal.Block>): boolean;
        shouldDisplayFluidOverlay(arg0: Internal.BlockAndTintGetter_, arg1: BlockPos_, arg2: Internal.FluidState_): boolean;
        onRemove(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: boolean): void;
        getBedDirection(arg0: Internal.LevelReader_, arg1: BlockPos_): Internal.Direction;
        getMenuProvider(arg0: Internal.Level_, arg1: BlockPos_): Internal.MenuProvider;
        getBlockSupportShape(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.VoxelShape;
        getProperties(): Internal.Collection<Internal.Property<any>>;
        wait(): void;
        canSustainPlant(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.IPlantable_): boolean;
        isSlimeBlock(): boolean;
        spawnAfterBreak(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: Internal.ItemStack_, arg3: boolean): void;
        getBeaconColorMultiplier(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: BlockPos_): number[];
        canStickTo(arg0: Internal.BlockState_): boolean;
        onPlace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: boolean): void;
        getBlock(): Internal.Block;
        redirect$eol000$getNeighborFromFastMap(arg0: Internal.Table_<any, any, any>, arg1: any, arg2: any): any;
        isFlammable(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        liquid(): boolean;
        getOcclusionShape(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.VoxelShape;
        hasProperty<T extends Internal.Comparable<T>>(arg0: Internal.Property_<T>): boolean;
        shouldCheckWeakPower(arg0: Internal.SignalGetter_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        is(arg0: Internal.Block_): boolean;
        isFertile(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        emissiveRendering(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        populateNeighbours(arg0: Internal.Map_<any, any>): void;
        getFTBCIsWater(): boolean;
        trySetValue<T extends Internal.Comparable<T>, V extends T>(arg0: Internal.Property_<T>, arg1: V): this;
        mirror(arg0: Internal.Mirror_): this;
        "canBeReplaced(net.minecraft.world.level.material.Fluid)"(arg0: Internal.Fluid_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        isAir(): boolean;
        getDestroySpeed(arg0: Internal.BlockGetter_, arg1: BlockPos_): number;
        getDirectSignal(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Direction_): number;
        /**
         * @deprecated
        */
        blocksMotion(): boolean;
        wait(arg0: number, arg1: number): void;
        isValidSpawn(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.EntityType_<any>): boolean;
        setStateMap(arg0: Internal.FastMap_<any>): void;
        canDropFromExplosion(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Explosion_): boolean;
        isScaffolding(arg0: Internal.LivingEntity_): boolean;
        getAppearance(arg0: Internal.BlockAndTintGetter_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.BlockState_, arg4: BlockPos_): this;
        hasLargeCollisionShape(): boolean;
        getDestroyProgress(arg0: Internal.Player_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        updateShape(arg0: Internal.Direction_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: BlockPos_): this;
        clearCache(): void;
        isSuffocating(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        getEnchantPowerBonus(arg0: Internal.LevelReader_, arg1: BlockPos_): number;
        onNeighborChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: BlockPos_): void;
        is(arg0: Internal.TagKey_<Internal.Block>, arg1: Internal.Predicate_<Internal.BlockBehaviour$BlockStateBase>): boolean;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Block_, arg3: BlockPos_, arg4: boolean): void;
        "is(net.minecraft.tags.TagKey)"(arg0: Internal.TagKey_<Internal.Block>): boolean;
        getFaceOcclusionShape(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Direction_): Internal.VoxelShape;
        updateIndirectNeighbourShapes(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: number, arg3: number): void;
        isValidSpawn(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.SpawnPlacements$Type_, arg3: Internal.EntityType_<any>): boolean;
        getShadeBrightness(blockGetter: Internal.BlockGetter_, blockPos: BlockPos_): number;
        isRedstoneConductor(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        getAnalogOutputSignal(arg0: Internal.Level_, arg1: BlockPos_): number;
        getVanillaPropertyMap(): Internal.ImmutableMap<any, any>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_, arg3: Internal.BlockHitResult_): Internal.InteractionResult;
        getMapColor(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.MapColor;
        getBlockHolder(): Internal.Holder<Internal.Block>;
        canBeReplaced(): boolean;
        propagatesSkylightDown(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        getWeakChanges(arg0: Internal.LevelReader_, arg1: BlockPos_): boolean;
        isCacheInvalid(): boolean;
        hashCode(): number;
        getOffset(arg0: Internal.BlockGetter_, arg1: BlockPos_): Vec3d;
        getSoundType(): SoundType;
        "canBeReplaced(net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockPlaceContext_): boolean;
        addRunningEffects(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Entity_): boolean;
        entityCanStandOnFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Entity_, arg3: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        requiresCorrectToolForDrops(): boolean;
        triggerEvent(arg0: Internal.Level_, arg1: BlockPos_, arg2: number, arg3: number): boolean;
        getFriction(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Entity_): number;
        canBeReplaced(arg0: Internal.BlockPlaceContext_): boolean;
        isSignalSource(): boolean;
        getCloneItemStack(arg0: Internal.HitResult_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): Internal.ItemStack;
        attack(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Player_): void;
        equals(arg0: any): boolean;
        getExplosionResistance(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Explosion_): number;
        handler$eop000$cacheStateTail(arg0: Internal.CallbackInfo_): void;
        getFireSpreadSpeed(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Direction_): number;
        get neighborTable(): Internal.Table<any, any, any>
        get values(): Internal.ImmutableMap<Internal.Property<any>, Internal.Comparable<any>>
        set replaceable(arg0: boolean)
        get randomlyTicking(): boolean
        get class(): typeof any
        get fluidState(): Internal.FluidState
        get tags(): Internal.Stream<Internal.TagKey<Internal.Block>>
        set requiresTool(arg0: boolean)
        get renderShape(): Internal.RenderShape
        get pistonPushReaction(): Internal.PushReaction
        /**
         * @deprecated
        */
        get solid(): boolean
        get pathNodeType(): Internal.BlockPathTypes
        get neighborPathNodeType(): Internal.BlockPathTypes
        set neighborTable(arg0: Internal.Table_<any, any, any>)
        get stickyBlock(): boolean
        set stateIndex(arg0: number)
        /**
         * @deprecated
        */
        get lightEmission(): number
        set lightEmission(arg0: number)
        get stateIndex(): number
        get stateMap(): Internal.FastMap<any>
        set destroySpeed(arg0: number)
        get properties(): Internal.Collection<Internal.Property<any>>
        get slimeBlock(): boolean
        get block(): Internal.Block
        get FTBCIsWater(): boolean
        get air(): boolean
        set stateMap(arg0: Internal.FastMap_<any>)
        get vanillaPropertyMap(): Internal.ImmutableMap<any, any>
        get blockHolder(): Internal.Holder<Internal.Block>
        get cacheInvalid(): boolean
        get soundType(): SoundType
        get signalSource(): boolean
        static readonly CODEC: Internal.Codec<Internal.BlockState>;
    }
    type BlockState_ = BlockState;
    class Panda extends Internal.Animal {
        constructor(arg0: Internal.EntityType_<Internal.Panda>, arg1: Internal.Level_)
        localvar$bci000$damage(amount: number, source: Internal.DamageSource_): number;
        getUpVector(arg0: number): Vec3d;
        gameEvent(arg0: Internal.GameEvent_, arg1: Internal.Entity_): void;
        static checkMobSpawnRules(arg0: Internal.EntityType_<Internal.Mob>, arg1: Internal.LevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        isSuppressingBounce(): boolean;
        handler$zla000$toTag(tag: Internal.CompoundTag_, ci: Internal.CallbackInfoReturnable_<any>): void;
        setTarget(arg0: Internal.LivingEntity_): void;
        isOnFire(): boolean;
        getPositionCodec(): Internal.VecDeltaCodec;
        handler$ebc000$canFreeze(cir: Internal.CallbackInfoReturnable_<any>): void;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        setMaxUpStep(arg0: number): void;
        /**
         * @deprecated
        */
        updateFluidHeightAndDoFluidPushing(arg0: Internal.TagKey_<Internal.Fluid>, arg1: number): boolean;
        convertTo<T extends Internal.Mob>(arg0: Internal.EntityType_<T>, arg1: boolean): T;
        handler$ebc000$isFreezing(cir: Internal.CallbackInfoReturnable_<any>): void;
        getFallFlyingTicks(): number;
        runCommandSilent(command: string): number;
        setPosition(x: number, y: number, z: number): void;
        chunkPosition(): Internal.ChunkPos;
        dropLeash(arg0: boolean, arg1: boolean): void;
        handler$ebc000$isPushable(cir: Internal.CallbackInfoReturnable_<any>): void;
        handler$ebf000$getMeleeAttackRangeSqr(pEntity: Internal.LivingEntity_, cir: Internal.CallbackInfoReturnable_<any>): void;
        gameEvent(arg0: Internal.GameEvent_): void;
        handler$ebc001$setSprinting(pSprinting: boolean, ci: Internal.CallbackInfo_): void;
        isSneezing(): boolean;
        setXxa(arg0: number): void;
        setSneezeCounter(arg0: number): void;
        setDelayedLeashHolderId(arg0: number): void;
        isShiftKeyDown(): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        setUUID(arg0: Internal.UUID_): void;
        checkBelowWorld(): void;
        onEffectUpdated(arg0: Internal.MobEffectInstance_, arg1: boolean, arg2: Internal.Entity_): void;
        setMotionZ(z: number): void;
        handler$ebc001$move(pType: Internal.MoverType_, pPos: Vec3d_, ci: Internal.CallbackInfo_): void;
        getAttachmentProgress(arg0: number): number;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getAnimation(): Internal.AnimationApplier;
        handler$dke000$ac_getEyePosition(arg0: Internal.CallbackInfoReturnable_<any>): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        canFreeze(): boolean;
        ignoreExplosion(): boolean;
        getBlockY(): number;
        redirect$dnk000$fixSpawnAnimX(instance: Internal.Mob_, v: number): number;
        isSpectator(): boolean;
        setMainHandItem(item: Internal.ItemStack_): void;
        removeEffectNoUpdate(arg0: Internal.MobEffect_): Internal.MobEffectInstance;
        spawnAtLocation(arg0: Internal.ItemLike_, arg1: number): Internal.ItemEntity;
        getPersistentData(): Internal.CompoundTag;
        getHealth(): number;
        getMaxHealth(): number;
        handler$zmo000$playSound(event: Internal.SoundEvent_, f: number, f2: number, ci: Internal.CallbackInfo_): void;
        setPathfindingMalus(arg0: Internal.BlockPathTypes_, arg1: number): void;
        isRegisteredToWorld(): boolean;
        invokeTurnHead(arg0: number, arg1: number): number;
        getRandomZ(arg0: number): number;
        setAggressive(arg0: boolean): void;
        setRemoved(arg0: Internal.Entity$RemovalReason_): void;
        isInWaterRainOrBubble(): boolean;
        getDistanceSq(arg0: number, arg1: number, arg2: number): number;
        handler$ebc000$canChangeDimensions(cir: Internal.CallbackInfoReturnable_<any>): void;
        getRemovalReason(): Internal.Entity$RemovalReason;
        resetFallDistance(): void;
        canSprint(): boolean;
        blockPosition(): BlockPos;
        isEating(): boolean;
        setBoundingBox(arg0: Internal.AABB_): void;
        isAmbientCreature(): boolean;
        handler$fbd011$tick(arg0: Internal.CallbackInfo_): void;
        handler$bad001$canTarget(other: Internal.LivingEntity_, ci: Internal.CallbackInfoReturnable_<any>): void;
        setZza(arg0: number): void;
        getBlock(): Internal.BlockContainerJS;
        setEquipment(slot: Internal.EquipmentSlot_, item: Internal.ItemStack_): void;
        randomTeleport(arg0: number, arg1: number, arg2: number, arg3: boolean): boolean;
        invalidateCaps(): void;
        getName(): net.minecraft.network.chat.Component;
        playAmbientSound(): void;
        onGround(): boolean;
        handler$ebf000$isPersistenceRequired(cir: Internal.CallbackInfoReturnable_<any>): void;
        getControlledVehicle(): Internal.Entity;
        isOnSameTeam(arg0: Internal.Entity_): boolean;
        getArmorValue(): number;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        tick(): void;
        setDimension(arg0: Internal.EntityDimensions_): void;
        getKillCredit(): Internal.LivingEntity;
        handler$ebc000$thunderHit(pLevel: Internal.ServerLevel_, pLightning: Internal.LightningBolt_, ci: Internal.CallbackInfo_): void;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        sinkInFluid(arg0: Internal.FluidType_): void;
        handler$ebc000$lavaHurt(ci: Internal.CallbackInfo_): void;
        hasPermissions(arg0: number): boolean;
        getUnhappyCounter(): number;
        handler$egj000$isInsideWall(arg0: Internal.CallbackInfoReturnable_<any>, arg1: number, arg2: Internal.AABB_): void;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        handler$zlm000$immunizePiglin(player: Internal.Player_, hand: Internal.InteractionHand_, cir: Internal.CallbackInfoReturnable_<any>): void;
        static createMobAttributes(): Internal.AttributeSupplier$Builder;
        isAutoSpinAttack(): boolean;
        getRemainingFireTicks(): number;
        isWeak(): boolean;
        onlyOpCanSetNbt(): boolean;
        isPlayful(): boolean;
        handler$bcn001$baseTick(ci: Internal.CallbackInfo_): void;
        fireImmune(): boolean;
        addMotion(arg0: number, arg1: number, arg2: number): void;
        getMaxFallDistance(): number;
        isHolding(arg0: Internal.Item_): boolean;
        getZ(arg0: number): number;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        static areAllEffectsAmbient(arg0: Internal.Collection_<Internal.MobEffectInstance>): boolean;
        doHurtTarget(arg0: Internal.Entity_): boolean;
        getTicksFrozen(): number;
        isLazy(): boolean;
        getRandomX(arg0: number): number;
        fabrication$tickSourceDependentIFrames(): void;
        spawnAtLocation(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        pick(arg0: number, arg1: number, arg2: boolean): Internal.HitResult;
        handler$ebc000$stopRiding(ci: Internal.CallbackInfo_): void;
        bettermobcombat$getAttackCooldown(): number;
        getVoicePitch(): number;
        setStatusMessage(message: net.minecraft.network.chat.Component_): void;
        setSleepingPos(arg0: BlockPos_): void;
        isDescending(): boolean;
        getAttributeBaseValue(arg0: Internal.Attribute_): number;
        sendEffectToPassengers(arg0: Internal.MobEffectInstance_): void;
        isWorried(): boolean;
        getHeadRotSpeed(): number;
        getYHeadRot(): number;
        getProjectile(arg0: Internal.ItemStack_): Internal.ItemStack;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        syncPacketPositionCodec(arg0: number, arg1: number, arg2: number): void;
        setAbsorptionAmount(arg0: number): void;
        isAffectedByFluids(): boolean;
        shouldRenderAtSqrDistance(arg0: number): boolean;
        handler$dke000$ac_onSyncedDataUpdated(arg0: Internal.EntityDataAccessor_<any>, arg1: Internal.CallbackInfo_): void;
        damageSources(): Internal.DamageSources;
        removeAllGoals(arg0: Internal.Predicate_<Internal.Goal>): void;
        swing(): void;
        recreateFromPacket(arg0: Internal.ClientboundAddEntityPacket_): void;
        canStartSwimming(): boolean;
        setDeltaMovement(arg0: Vec3d_): void;
        fabrication$setNoGravityReversible(reversible: boolean): void;
        getLeashOffset(arg0: number): Vec3d;
        isBaby(): boolean;
        damageEquipment(slot: Internal.EquipmentSlot_): void;
        isGlowing(): boolean;
        "isInFluidType(net.minecraft.world.level.material.FluidState)"(arg0: Internal.FluidState_): boolean;
        getWalkTargetValue(arg0: BlockPos_): number;
        /**
         * @deprecated
        */
        canBreatheUnderwater(): boolean;
        die(arg0: Internal.DamageSource_): void;
        removeAllEffects(): boolean;
        getLeashOffset(): Vec3d;
        hasLineOfSight(arg0: Internal.Entity_): boolean;
        onClimbable(): boolean;
        isAttackable(): boolean;
        getSlot(arg0: number): Internal.SlotAccess;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        getAttackTime(): number;
        handler$ebe000$getMobType(cir: Internal.CallbackInfoReturnable_<any>): void;
        isScared(): boolean;
        stopSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        isUnderWater(): boolean;
        stopRiding(): void;
        getSwimHighSpeedSplashSound(): Internal.SoundEvent;
        getLeashHolder(): Internal.Entity;
        getX(arg0: number): number;
        getSensing(): Internal.Sensing;
        getLegsArmorItem(): Internal.ItemStack;
        captureDrops(arg0: Internal.Collection_<Internal.ItemEntity>): Internal.Collection<Internal.ItemEntity>;
        getSelfAndPassengers(): Internal.Stream<any>;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        getDeltaMovement(): Vec3d;
        canTakeItem(arg0: Internal.ItemStack_): boolean;
        handler$ebe000$makeBrain(pDynamic: Internal.Dynamic_<any>, cir: Internal.CallbackInfoReturnable_<any>): void;
        shouldDropExperience(): boolean;
        hasPassenger(arg0: Internal.Entity_): boolean;
        setSecondsOnFire(arg0: number): void;
        moveTo(arg0: number, arg1: number, arg2: number): void;
        "getDisplayName()"(): net.minecraft.network.chat.Component;
        getLootTable(): ResourceLocation;
        getTicksUsingItem(): number;
        getArrowCount(): number;
        create$callSetLevel(arg0: Internal.Level_): void;
        getMoveControl(): Internal.MoveControl;
        setMotion(arg0: number, arg1: number, arg2: number): void;
        playSound(arg0: Internal.SoundEvent_): void;
        getDefaultMovementSpeed(): number;
        restoreFrom(arg0: Internal.Entity_): void;
        isPeacefulCreature(): boolean;
        setOnGround(arg0: boolean): void;
        handler$bhe001$fromTag(tag: Internal.CompoundTag_, ci: Internal.CallbackInfo_): void;
        addEffect(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_): boolean;
        ate(): void;
        setPos(arg0: number, arg1: number, arg2: number): void;
        handler$ebc000$getMyRidingOffset(cir: Internal.CallbackInfoReturnable_<any>): void;
        notify(): void;
        getFirstTick(): boolean;
        setPersistenceRequired(): void;
        getLastHurtByMobTimestamp(): number;
        getVehicle(): Internal.Entity;
        canFallInLove(): boolean;
        isEffectiveAi(): boolean;
        startRiding(arg0: Internal.Entity_, arg1: boolean): boolean;
        setSpawnCancelled(arg0: boolean): void;
        getStringUuid(): string;
        setAttributes(): void;
        setSwimming(arg0: boolean): void;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        getMainArm(): Internal.HumanoidArm;
        checkSpawnRules(arg0: Internal.LevelAccessor_, arg1: Internal.MobSpawnType_): boolean;
        getRotationVector(): Internal.Vec2;
        getHurtDir(): number;
        isSprinting(): boolean;
        handler$dke000$ac_makeBoundingBox(arg0: Internal.CallbackInfoReturnable_<any>): void;
        isMaxGroupSizeReached(arg0: number): boolean;
        getMotionY(): number;
        getOffhandItem(): Internal.ItemStack;
        canCollideWith(arg0: Internal.Entity_): boolean;
        neruina$isErrored(): boolean;
        getBlockExplosionResistance(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.FluidState_, arg5: number): number;
        handler$dpi000$getAttributeValue_Inject(attribute: Internal.Attribute_, cir: Internal.CallbackInfoReturnable_<any>): void;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        getIsInsidePortal(): boolean;
        setMainGene(arg0: Internal.Panda$Gene_): void;
        clearSleepingPos(): void;
        ac_setDropChance(arg0: Internal.EquipmentSlot_, arg1: number): void;
        canSpawnSprintParticle(): boolean;
        "moveTo(net.minecraft.core.BlockPos,float,float)"(arg0: BlockPos_, arg1: number, arg2: number): void;
        handler$zjk000$move(type: Internal.MoverType_, movement: Vec3d_, ci: Internal.CallbackInfo_): void;
        isBrown(): boolean;
        getLastHurtMob(): Internal.LivingEntity;
        moveRelative(arg0: number, arg1: Vec3d_): void;
        isAddedToWorld(): boolean;
        saveAsPassenger(arg0: Internal.CompoundTag_): boolean;
        sit(arg0: boolean): void;
        getLastDamageSource(): Internal.DamageSource;
        getSoundSource(): Internal.SoundSource;
        setNoActionTime(arg0: number): void;
        setMovementSpeedAddition(speed: number): void;
        equipmentHasChanged(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getPose(): Internal.Pose;
        setLastAttackedTicks(arg0: number): void;
        getAttribute(arg0: Internal.Attribute_): Internal.AttributeInstance;
        setPositionAndRotation(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        canBeAffected(arg0: Internal.MobEffectInstance_): boolean;
        handler$bhe001$toTag(tag: Internal.CompoundTag_, ci: Internal.CallbackInfoReturnable_<any>): void;
        ageUp(arg0: number): void;
        getRestrictCenter(): BlockPos;
        isLeftHanded(): boolean;
        removeVehicle(): void;
        setZ(z: number): void;
        handler$ebf000$canBeLeashed(pPlayer: Internal.Player_, cir: Internal.CallbackInfoReturnable_<any>): void;
        getY(): number;
        hashCode(): number;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        finalizeSpawnChildFromBreeding(arg0: Internal.ServerLevel_, arg1: Internal.Animal_, arg2: Internal.AgeableMob_): void;
        eat(arg0: Internal.Level_, arg1: Internal.ItemStack_): Internal.ItemStack;
        handler$ebc000$onRemovedFromWorld(ci: Internal.CallbackInfo_): void;
        isWithinMeleeAttackRange(arg0: Internal.LivingEntity_): boolean;
        broadcastBreakEvent(arg0: Internal.EquipmentSlot_): void;
        showVehicleHealth(): boolean;
        getDistance(pos: BlockPos_): number;
        isBlocking(): boolean;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        handler$dkl000$ac_livingTick(arg0: Internal.CallbackInfo_): void;
        canChangeDirection(): boolean;
        /**
         * @deprecated
        */
        isPushedByFluid(): boolean;
        handler$bee002$damage(source: Internal.DamageSource_, amount: number, cir: Internal.CallbackInfoReturnable_<any>): void;
        handler$zpc000$brittleShield(source: Internal.DamageSource_, amount: number, cir: Internal.CallbackInfoReturnable_<any>): void;
        getArmorCoverPercentage(): number;
        handleRelativeFrictionAndCalculateMovement(arg0: Vec3d_, arg1: number): Vec3d;
        turn(arg0: number, arg1: number): void;
        getAirSupply(): number;
        moveTo(arg0: BlockPos_, arg1: number, arg2: number): void;
        isPlayer(): boolean;
        isAnimal(): boolean;
        readAdditionalSaveData(arg0: Internal.CompoundTag_): void;
        handler$dbi000$retroDamageIndicators_onSyncedDataUpdated(arg0: Internal.EntityDataAccessor_<any>, arg1: Internal.CallbackInfo_): void;
        getMotionDirection(): Internal.Direction;
        canBeCollidedWith(): boolean;
        lavaHurt(): void;
        handleDamageEvent(arg0: Internal.DamageSource_): void;
        getFabricBalmData(): Internal.CompoundTag;
        canChangeDimensions(): boolean;
        jumpInFluid(arg0: Internal.FluidType_): void;
        getCommandSenderWorld(): Internal.Level;
        getTotalMovementSpeed(): number;
        changeDimension(arg0: Internal.ServerLevel_): Internal.Entity;
        moveInFluid(arg0: Internal.FluidState_, arg1: Vec3d_, arg2: number): boolean;
        handler$zkk000$isableClimbing(cir: Internal.CallbackInfoReturnable_<any>): void;
        attack(hp: number): void;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        handler$bam000$dropLoot(source: Internal.DamageSource_, ci: Internal.CallbackInfo_): void;
        bettercombat$resetAttackStrengthTicker(): void;
        sneeze(arg0: boolean): void;
        getAttributes(): Internal.AttributeMap;
        setMagneticDeltaY(arg0: number): void;
        isSpawnCancelled(): boolean;
        "hasPassenger(java.util.function.Predicate)"(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        getDimensions(arg0: Internal.Pose_): Internal.EntityDimensions;
        fabrication$markWet(): void;
        spawnChildFromBreeding(arg0: Internal.ServerLevel_, arg1: Internal.Animal_): void;
        setInLoveTime(arg0: number): void;
        isSwimming(): boolean;
        setSprinting(arg0: boolean): void;
        mayInteract(arg0: Internal.Level_, arg1: BlockPos_): boolean;
        setPortalCooldown(): void;
        getAttackAnim(arg0: number): number;
        setX(x: number): void;
        getBlockStateOn(): Internal.BlockState;
        getPortalWaitTime(): number;
        wantsToPickUp(arg0: Internal.ItemStack_): boolean;
        getItemBySlot(arg0: Internal.EquipmentSlot_): Internal.ItemStack;
        fabrication$didJustAbsorp(): boolean;
        getFluidJumpThreshold(): number;
        "setPositionAndRotation(double,double,double,float,float)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        isInvisibleTo(arg0: Internal.Player_): boolean;
        stopSleeping(): void;
        setAirSupply(arg0: number): void;
        handler$ebf000$getAmbientSoundInterval(cir: Internal.CallbackInfoReturnable_<any>): void;
        getOnPos(): BlockPos;
        isUndead(): boolean;
        static createLivingAttributes(): Internal.AttributeSupplier$Builder;
        getStepHeight(): number;
        setRegisteredToWorld(arg0: Internal.PathNavigation_): void;
        stopUsingItem(): void;
        isSleeping(): boolean;
        acceptsFailure(): boolean;
        setOnGroundWithKnownMovement(arg0: boolean, arg1: Vec3d_): void;
        handler$ebc000$entityJs$tick(ci: Internal.CallbackInfo_): void;
        updateAnimationsOnTick(): void;
        getFluidFallingAdjustedMovement(arg0: number, arg1: boolean, arg2: Vec3d_): Vec3d;
        setOldPosAndRot(): void;
        localvar$zof000$postShieldDamage(amount: number): number;
        isFree(arg0: number, arg1: number, arg2: number): boolean;
        handler$ebc000$rideTick(ci: Internal.CallbackInfo_): void;
        getDismountPoses(): Internal.ImmutableList<Internal.Pose>;
        getLastHurtMobTimestamp(): number;
        "moveTo(double,double,double)"(arg0: number, arg1: number, arg2: number): void;
        handler$ebc000$shouldRenderAtSqrDistance(pDistance: number, cir: Internal.CallbackInfoReturnable_<any>): void;
        setRemainingFireTicks(arg0: number): void;
        /**
         * @deprecated
        */
        getOnPosLegacy(): BlockPos;
        setPos(arg0: Vec3d_): void;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        handler$ebc000$lerpTo(x: number, y: number, z: number, yaw: number, pitch: number, posRotationIncrements: number, teleport: boolean, ci: Internal.CallbackInfo_): void;
        setCanPickUpLoot(arg0: boolean): void;
        getMainHandItem(): Internal.ItemStack;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        setGeneFromParents(arg0: Internal.Panda_, arg1: Internal.Panda_): void;
        setSilent(arg0: boolean): void;
        captureDrops(): Internal.Collection<Internal.ItemEntity>;
        hasExactlyOnePlayerPassenger(): boolean;
        canBeSeenAsEnemy(): boolean;
        setLeftHanded(arg0: boolean): void;
        getSwimSplashSound(): Internal.SoundEvent;
        getActiveEffects(): Internal.Collection<Internal.MobEffectInstance>;
        isOnPortalCooldown(): boolean;
        canAttack(arg0: Internal.LivingEntity_, arg1: Internal.TargetingConditions_): boolean;
        getAttributeValue(arg0: Internal.Holder_<Internal.Attribute>): number;
        setPitch(arg0: number): void;
        handler$ebc000$isCurrentlyGlowing(cir: Internal.CallbackInfoReturnable_<any>): void;
        isMultipartEntity(): boolean;
        setPosRaw(arg0: number, arg1: number, arg2: number): void;
        handleEntityEvent(arg0: number): void;
        getParts(): Internal.PartEntity<any>[];
        isUsingItem(): boolean;
        isAlwaysTicking(): boolean;
        interactAt(arg0: Internal.Player_, arg1: Vec3d_, arg2: Internal.InteractionHand_): Internal.InteractionResult;
        lerpTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): void;
        onPassengerTurned(arg0: Internal.Entity_): void;
        spawnAtLocation(arg0: Internal.ItemLike_): Internal.ItemEntity;
        handler$edc000$mna$isAffectedByFluids(arg0: Internal.CallbackInfoReturnable_<any>): void;
        getForgePersistentData(): Internal.CompoundTag;
        getRollAmount(arg0: number): number;
        ac_dropCustomDeathLoot(arg0: Internal.DamageSource_, arg1: number, arg2: boolean): void;
        "spawnAtLocation(net.minecraft.world.level.ItemLike,int)"(arg0: Internal.ItemLike_, arg1: number): Internal.ItemEntity;
        setInvulnerable(arg0: boolean): void;
        push(arg0: Internal.Entity_): void;
        isInFluidType(): boolean;
        canMate(arg0: Internal.Animal_): boolean;
        maxUpStep(): number;
        fabrication$isNoGravityReversible(): boolean;
        setGlowing(arg0: boolean): void;
        load(arg0: Internal.CompoundTag_): void;
        "broadcastBreakEvent(net.minecraft.world.entity.EquipmentSlot)"(arg0: Internal.EquipmentSlot_): void;
        setLeashedTo(arg0: Internal.Entity_, arg1: boolean): void;
        isAlive(): boolean;
        handler$bah000$dontBypassSteppingEffects(cir: Internal.CallbackInfoReturnable_<any>): void;
        startSleeping(arg0: BlockPos_): void;
        handler$zmn000$lightCreepersOnExplosion(source: Internal.DamageSource_, amount: number, cir: Internal.CallbackInfoReturnable_<any>): void;
        getBbHeight(): number;
        getMeleeAttackRangeSqr(arg0: Internal.LivingEntity_): number;
        canaryOnBlockCacheSet(arg0: Internal.BlockState_): void;
        getViewVector(arg0: number): Vec3d;
        getTags(): Internal.Set<string>;
        bettermobcombat$getHandItems(): Internal.NonNullList<any>;
        getLastAttacker(): Internal.LivingEntity;
        hasControllingPassenger(): boolean;
        closerThan(arg0: Internal.Entity_, arg1: number, arg2: number): boolean;
        absMoveTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        handler$bfk000$getCustomName(ci: Internal.CallbackInfoReturnable_<any>): void;
        onPathfindingStart(): void;
        getPercentFrozen(): number;
        setPortalCooldown(arg0: number): void;
        setPossessedByWatcher(arg0: boolean): void;
        shouldBlockExplode(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: number): boolean;
        hasGlowingTag(): boolean;
        setPosition(block: Internal.BlockContainerJS_): void;
        handler$zop000$sendToolBreakStatus(hand: Internal.InteractionHand_, ci: Internal.CallbackInfo_): void;
        isLeashed(): boolean;
        getSneezeCounter(): number;
        bettermobcombat$getCurrentItemAttackStrengthDelay(): number;
        handler$zof000$preShieldDamage(source: Internal.DamageSource_, amount: number, cir: Internal.CallbackInfoReturnable_<any>): void;
        addEffect(arg0: Internal.MobEffectInstance_): boolean;
        handler$cdl000$curio$canFreeze(arg0: Internal.CallbackInfoReturnable_<any>): void;
        handler$ebc000$dampensVibrations(cir: Internal.CallbackInfoReturnable_<any>): void;
        ageUp(arg0: number, arg1: boolean): void;
        getViewXRot(arg0: number): number;
        canRiderInteract(): boolean;
        handler$ebc000$showVehicleHealth(cir: Internal.CallbackInfoReturnable_<any>): void;
        handler$bik00e$tick(ci: Internal.CallbackInfo_): void;
        setPose(arg0: Internal.Pose_): void;
        getReachDistance(): number;
        getEntityType(): Internal.EntityType<any>;
        isWaterCreature(): boolean;
        toString(): string;
        getVisualScale(): number;
        getBreedOffspring(arg0: Internal.ServerLevel_, arg1: Internal.AgeableMob_): Internal.AgeableMob;
        setLastHurtByPlayer(arg0: Internal.Player_): void;
        "getServer()"(): Internal.MinecraftServer;
        mobInteract(arg0: Internal.Player_, arg1: Internal.InteractionHand_): Internal.InteractionResult;
        wasExperienceConsumed(): boolean;
        isPushable(): boolean;
        setYBodyRot(arg0: number): void;
        foodEaten(is: Internal.ItemStack_): void;
        onClientRemoval(): void;
        self(): Internal.LivingEntity;
        reviveCaps(): void;
        getDistance(x: number, y: number, z: number): number;
        setMotionY(y: number): void;
        static createAttributes(): Internal.AttributeSupplier$Builder;
        setRotation(yaw: number, pitch: number): void;
        getMagneticDeltaZ(): number;
        handler$dke000$ac_turn(arg0: number, arg1: number, arg2: Internal.CallbackInfo_): void;
        calculateEntityAnimation(arg0: boolean): void;
        forceAddEffect(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_): void;
        setChestArmorItem(item: Internal.ItemStack_): void;
        onAboveBubbleCol(arg0: boolean): void;
        "playSound(net.minecraft.sounds.SoundEvent,float,float)"(arg0: Internal.SoundEvent_, arg1: number, arg2: number): void;
        isPassenger(): boolean;
        hasPose(arg0: Internal.Pose_): boolean;
        isInvulnerableTo(arg0: Internal.DamageSource_): boolean;
        makeStuckInBlock(arg0: Internal.BlockState_, arg1: Vec3d_): void;
        /**
         * @deprecated
        */
        isEyeInFluid(arg0: Internal.TagKey_<Internal.Fluid>): boolean;
        isSensitiveToWater(): boolean;
        skipAttackInteraction(arg0: Internal.Entity_): boolean;
        lerpMotion(arg0: number, arg1: number, arg2: number): void;
        "getAttributeValue(net.minecraft.core.Holder)"(arg0: Internal.Holder_<Internal.Attribute>): number;
        shouldRender(arg0: number, arg1: number, arg2: number): boolean;
        getJumpControl(): Internal.JumpControl;
        getFeetArmorItem(): Internal.ItemStack;
        static getViewScale(): number;
        fabrication$setActualBypassesStepOn(): void;
        getVisualRotationYInDegrees(): number;
        setSpeed(arg0: number): void;
        requiresCustomPersistence(): boolean;
        isDiscrete(): boolean;
        unRide(): void;
        getLevel(): Internal.Level;
        "spawnAtLocation(net.minecraft.world.item.ItemStack)"(arg0: Internal.ItemStack_): Internal.ItemEntity;
        getCombatTracker(): Internal.CombatTracker;
        handler$dke000$ac_getEyePosition_lerp(arg0: number, arg1: Internal.CallbackInfoReturnable_<any>): void;
        updateDynamicGameEventListener(arg0: Internal.BiConsumer_<Internal.DynamicGameEventListener<any>, Internal.ServerLevel>): void;
        canBreed(): boolean;
        handler$ebc000$canCollideWith(pEntity: Internal.Entity_, cir: Internal.CallbackInfoReturnable_<any>): void;
        "onSyncedDataUpdated(net.minecraft.network.syncher.EntityDataAccessor)"(arg0: Internal.EntityDataAccessor_<any>): void;
        isNoAi(): boolean;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.Entity>): boolean;
        setHiddenGene(arg0: Internal.Panda$Gene_): void;
        extinguishFire(): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightForge(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        getChestArmorItem(): Internal.ItemStack;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number): void;
        handler$edi000$mna$canEnterPose(arg0: Internal.Pose_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        tell(message: net.minecraft.network.chat.Component_): void;
        fabrication$setInvisibilityReversible(reversible: boolean): void;
        closerThan(arg0: Internal.Entity_, arg1: number): boolean;
        getDistanceSq(pos: BlockPos_): number;
        indicateDamage(arg0: number, arg1: number): void;
        canBeSeenByAnyone(): boolean;
        isFullyFrozen(): boolean;
        getLastPos(): BlockPos;
        isInWall(): boolean;
        getAllSlots(): Internal.Iterable<Internal.ItemStack>;
        remove(arg0: Internal.Entity$RemovalReason_): void;
        getMagneticDeltaX(): number;
        getScale(): number;
        isSuppressingSlidingDownLadder(): boolean;
        getBlockZ(): number;
        dampensVibrations(): boolean;
        isSilent(): boolean;
        "playSound(net.minecraft.sounds.SoundEvent)"(arg0: Internal.SoundEvent_): void;
        getPitch(): number;
        getPathfindingMalus(arg0: Internal.BlockPathTypes_): number;
        getRandom(): Internal.RandomSource;
        canReplaceEqualItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        rotate(arg0: Internal.Rotation_): number;
        shouldRiderFaceForward(arg0: Internal.Player_): boolean;
        getPassengersAndSelf(): Internal.Stream<any>;
        setMagneticAttachmentFace(arg0: Internal.Direction_): void;
        fabrication$getKillMessage(): string;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        "getAttributeBaseValue(net.minecraft.core.Holder)"(arg0: Internal.Holder_<Internal.Attribute>): number;
        setMagnetHeadRotation(): void;
        handler$dke000$ac_collide(arg0: Vec3d_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        clearRestriction(): void;
        "self()"(): Internal.LivingEntity;
        getAge(): number;
        rayTrace(): Internal.RayTraceResultJS;
        alwaysAccepts(): boolean;
        neruina$getTickingEntryId(): Internal.UUID;
        "isHolding(java.util.function.Predicate)"(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        getPrevMagneticAttachmentFace(): Internal.Direction;
        getNoActionTime(): number;
        isVisuallyCrawling(): boolean;
        handler$ccm000$CMcanAttack(arg0: Internal.LivingEntity_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        isAggressive(): boolean;
        setYya(arg0: number): void;
        setComboCount(arg0: number): void;
        shouldUpdateFluidWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        setDropChance(arg0: Internal.EquipmentSlot_, arg1: number): void;
        handler$bfk000$hasCustomNameAndIsVisible(ci: Internal.CallbackInfoReturnable_<any>): void;
        "broadcastBreakEvent(net.minecraft.world.InteractionHand)"(arg0: Internal.InteractionHand_): void;
        neruina$clearErrored(): void;
        teleportRelative(arg0: number, arg1: number, arg2: number): void;
        isFood(arg0: Internal.ItemStack_): boolean;
        setBaby(arg0: boolean): void;
        getLastHurtByMob(): Internal.LivingEntity;
        isInWaterOrBubble(): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        updateFluidHeightAndDoFluidPushing(): void;
        handler$ebf000$getMainArm(cir: Internal.CallbackInfoReturnable_<any>): void;
        getPortalCooldown(): number;
        modify$bhi000$constructUpdatePacket(equipmentList: Internal.List_<any>): Internal.List<any>;
        getItem(): Internal.ItemStack;
        handler$zpo000$canTarget(other: Internal.LivingEntity_, ci: Internal.CallbackInfoReturnable_<any>): void;
        modifyExpressionValue$edg002$elytraOverride(arg0: boolean): boolean;
        bettermobcombat$getSwingProgress(): number;
        causeFallDamage(arg0: number, arg1: number, arg2: Internal.DamageSource_): boolean;
        releaseUsingItem(): void;
        getPosition(arg0: number): Vec3d;
        removeFreeWill(): void;
        setSlowFallingFlag(arg0: boolean): void;
        removeWhenFarAway(arg0: number): boolean;
        wait(arg0: number): void;
        isIgnoringBlockTriggers(): boolean;
        setRecordPlayingNearby(arg0: BlockPos_, arg1: boolean): void;
        getHandHoldingItemAngle(arg0: Internal.Item_): Vec3d;
        neruina$setTickingEntryId(uuid: Internal.UUID_): void;
        hasItemInSlot(arg0: Internal.EquipmentSlot_): boolean;
        canUpdate(arg0: boolean): void;
        getEyeInFluidType(): Internal.FluidType;
        distanceToSqr(arg0: Vec3d_): number;
        setOnBack(arg0: boolean): void;
        isSteppingCarefully(): boolean;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        "spawnAtLocation(net.minecraft.world.item.ItemStack,float)"(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        addAdditionalSaveData(arg0: Internal.CompoundTag_): void;
        /**
         * @deprecated
        */
        getLightLevelDependentMagicValue(): number;
        getBlockX(): number;
        isFallFlying(): boolean;
        getEncodeId(): string;
        getAnimationStack(): Internal.AnimationStack;
        getY(arg0: number): number;
        canaryOnBlockCacheDeleted(): void;
        getMaxHeadXRot(): number;
        getNbt(): Internal.CompoundTag;
        setInvisible(arg0: boolean): void;
        bettermobcombat$cancelUpswing(): void;
        getEffect(arg0: Internal.MobEffect_): Internal.MobEffectInstance;
        setTotalMovementSpeedMultiplier(speed: number): void;
        setHealth(arg0: number): void;
        attack(arg0: Internal.DamageSource_, arg1: number): boolean;
        onInsideBubbleColumn(arg0: boolean): void;
        getEyePosition(): Vec3d;
        getEyeHeight(): number;
        setDiscardFriction(arg0: boolean): void;
        hasPassenger(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        handler$ebf000$removeWhenFarAway(pDistanceToClosestPlayer: number, cir: Internal.CallbackInfoReturnable_<any>): void;
        handler$ebf001$getControllingPassenger(cir: Internal.CallbackInfoReturnable_<any>): void;
        getYaw(): number;
        isPossessedByWatcher(): boolean;
        swing(arg0: Internal.InteractionHand_, arg1: boolean): void;
        getUsedItemHand(): Internal.InteractionHand;
        setDefaultMovementSpeed(speed: number): void;
        onEffectAdded(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_): void;
        canAttackType(arg0: Internal.EntityType_<any>): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        canEntityBeSeen(entity: Internal.LivingEntity_): boolean;
        getBrain(): Internal.Brain<any>;
        setCustomNameVisible(arg0: boolean): void;
        isAlliedTo(arg0: Internal.Team_): boolean;
        getControllingPassenger(): Internal.LivingEntity;
        canFireProjectileWeapon(arg0: Internal.ProjectileWeaponItem_): boolean;
        handler$zmp000$onDeath(src: Internal.DamageSource_, ci: Internal.CallbackInfo_): void;
        getScriptType(): Internal.ScriptType;
        shouldDiscardFriction(): boolean;
        startRiding(arg0: Internal.Entity_): boolean;
        saveWithoutId(arg0: Internal.CompoundTag_): Internal.CompoundTag;
        getForward(): Vec3d;
        serializeNBT(): Internal.Tag;
        getComboCount(): number;
        setFeetArmorItem(item: Internal.ItemStack_): void;
        getId(): number;
        canBeHitByProjectile(): boolean;
        postMagnetJump(): void;
        setUnhappyCounter(arg0: number): void;
        getEyeY(): number;
        handler$ebg000$getWalkTargetValue(pPos: BlockPos_, pLevel: Internal.LevelReader_, cir: Internal.CallbackInfoReturnable_<any>): void;
        skipDropExperience(): void;
        getBoundingBox(): Internal.AABB;
        isInWaterOrRain(): boolean;
        isSitting(): boolean;
        handler$zjm000$damage(source: Internal.DamageSource_, amount: number, cir: Internal.CallbackInfoReturnable_<any>): void;
        setItemSlot(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): void;
        bettermobcombat$hasActiveAttackAnimation(): boolean;
        equals(arg0: any): boolean;
        getViewYRot(arg0: number): number;
        getLastArmorItem(arg0: Internal.EquipmentSlot_): Internal.ItemStack;
        dismountsUnderwater(): boolean;
        handler$cpe000$l2library_overrideClientGlow_isCurrentlyGlowing(arg0: Internal.CallbackInfoReturnable_<any>): void;
        handler$ebf000$doHurtTarget(pEntity: Internal.Entity_, cir: Internal.CallbackInfoReturnable_<any>): void;
        isAffectedByPotions(): boolean;
        addTag(arg0: string): boolean;
        playerTouch(arg0: Internal.Player_): void;
        getCitadelEntityData(): Internal.CompoundTag;
        getEyeHeight(arg0: Internal.Pose_): number;
        getAddEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>;
        getCurrentAttack(): Internal.AttackHand;
        playerAnimator_getAnimation(arg0: ResourceLocation_): Internal.IAnimation;
        static getEquipmentForSlot(arg0: Internal.EquipmentSlot_, arg1: number): Internal.Item;
        isWithinRestriction(arg0: BlockPos_): boolean;
        getTeam(): Internal.Team;
        getMainGene(): Internal.Panda$Gene;
        setTicksFrozen(arg0: number): void;
        getUseItem(): Internal.ItemStack;
        getMyRidingOffset(): number;
        dismountTo(arg0: number, arg1: number, arg2: number): void;
        hasCustomName(): boolean;
        getSwimAmount(arg0: number): number;
        isLiving(): boolean;
        getX(): number;
        stopAttackAnimation(arg0: number): void;
        isVehicle(): boolean;
        stepOnMagnetBlock(arg0: BlockPos_): void;
        handler$ebc000$playerTouch(pPlayer: Internal.Player_, ci: Internal.CallbackInfo_): void;
        spawnAtLocation(arg0: Internal.ItemStack_): Internal.ItemEntity;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        setIsInPowderSnow(arg0: boolean): void;
        thunderHit(arg0: Internal.ServerLevel_, arg1: Internal.LightningBolt_): void;
        doEnchantDamageEffects(arg0: Internal.LivingEntity_, arg1: Internal.Entity_): void;
        setCustomName(arg0: net.minecraft.network.chat.Component_): void;
        canaryOnEquipmentChanged(): void;
        getTeamId(): string;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        setStingerCount(arg0: number): void;
        handler$ebc000$isAttackable(cir: Internal.CallbackInfoReturnable_<any>): void;
        playerAnimator_getAnimation(): Internal.AnimationApplier;
        getMaxHeadYRot(): number;
        isCustomNameVisible(): boolean;
        isSupportedBy(arg0: BlockPos_): boolean;
        getPistonPushReaction(): Internal.PushReaction;
        shouldRiderSit(): boolean;
        isRolling(): boolean;
        lookAt(arg0: Internal.EntityAnchorArgument$Anchor_, arg1: Vec3d_): void;
        getLootTableSeed(): number;
        isInFluidType(arg0: Internal.FluidType_): boolean;
        collide(arg0: Vec3d_): Vec3d;
        getFluidMotionScale(arg0: Internal.FluidType_): number;
        getMotionX(): number;
        "onSyncedDataUpdated(java.util.List)"(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        canBeLeashed(arg0: Internal.Player_): boolean;
        hasIndirectPassenger(arg0: Internal.Entity_): boolean;
        getEntityData(): Internal.SynchedEntityData;
        handler$zla000$baseTick(ci: Internal.CallbackInfo_): void;
        handleInsidePortal(arg0: BlockPos_): void;
        getPotionEffects(): Internal.EntityPotionEffectsJS;
        absMoveTo(arg0: number, arg1: number, arg2: number): void;
        updateFluidHeightAndDoFluidPushing(arg0: Internal.Predicate_<Internal.FluidState>): void;
        isOnRails(): boolean;
        getStingerCount(): number;
        getFallSounds(): Internal.LivingEntity$Fallsounds;
        getAttributeTotalValue(attribute: Internal.Attribute_): number;
        getDimensionChangingDelay(): number;
        setYaw(arg0: number): void;
        getPickRadius(): number;
        isPathFinding(): boolean;
        isWeaponSwingInProgress(): boolean;
        handler$ebc000$getControllingPassenger(cir: Internal.CallbackInfoReturnable_<any>): void;
        isRemoved(): boolean;
        handler$ebc001$isInvulnerableTo(pSource: Internal.DamageSource_, cir: Internal.CallbackInfoReturnable_<any>): void;
        teleportToWithTicket(arg0: number, arg1: number, arg2: number): void;
        spawnAnim(): void;
        getJumpBoostPower(): number;
        resetMagnetHeadRotation(): void;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        self(): Internal.Entity;
        refreshDimensions(): void;
        handler$ebc000$push(pEntity: Internal.Entity_, ci: Internal.CallbackInfo_): void;
        "spawnAtLocation(net.minecraft.world.level.ItemLike)"(arg0: Internal.ItemLike_): Internal.ItemEntity;
        "isHolding(net.minecraft.world.item.Item)"(arg0: Internal.Item_): boolean;
        "getAttributeValue(net.minecraft.world.entity.ai.attributes.Attribute)"(arg0: Internal.Attribute_): number;
        handler$edi000$mna$playSound(arg0: Internal.SoundEvent_, arg1: number, arg2: number, arg3: Internal.CallbackInfo_): void;
        bettermobcombat$getUpswingTicks(): number;
        handler$dke001$ac_tick(arg0: Internal.CallbackInfo_): void;
        setShiftKeyDown(arg0: boolean): void;
        getEyePosition(arg0: number): Vec3d;
        getPassengers(): Internal.EntityArrayList;
        canPerformAction(): boolean;
        getLieOnBackAmount(arg0: number): number;
        handler$ebf000$ate(ci: Internal.CallbackInfo_): void;
        getMaxHeightFluidType(): Internal.FluidType;
        getZ(): number;
        teleportTo(arg0: number, arg1: number, arg2: number): void;
        isOnBack(): boolean;
        triggerSacrificeIn(arg0: number): void;
        getAttributeBaseValue(arg0: Internal.Holder_<Internal.Attribute>): number;
        getServer(): Internal.MinecraftServer;
        getExperienceReward(): number;
        getFirstPassenger(): Internal.Entity;
        heal(arg0: number): void;
        getSpawnType(): Internal.MobSpawnType;
        setLastHurtMob(arg0: Internal.Entity_): void;
        setLastHurtByMob(arg0: Internal.LivingEntity_): void;
        interact(arg0: Internal.Player_, arg1: Internal.InteractionHand_): Internal.InteractionResult;
        getDismountLocationForPassenger(arg0: Internal.LivingEntity_): Vec3d;
        checkSlowFallDistance(): void;
        canStandOnFluid(arg0: Internal.FluidState_): boolean;
        setFabricBalmData(arg0: Internal.CompoundTag_): void;
        touchingUnloadedChunk(): boolean;
        modifyAttribute(attribute: Internal.Attribute_, identifier: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        getLookAngle(): Vec3d;
        handler$ebf001$mobInteract(pPlayer: Internal.Player_, pHand: Internal.InteractionHand_, cir: Internal.CallbackInfoReturnable_<any>): void;
        getAmbientSoundInterval(): number;
        playAttackAnimation(arg0: string, arg1: Internal.AnimatedHand_, arg2: number, arg3: number): void;
        setArrowCount(arg0: number): void;
        getMotionZ(): number;
        isPersistenceRequired(): boolean;
        isInvisible(): boolean;
        is(arg0: Internal.Entity_): boolean;
        getBedOrientation(): Internal.Direction;
        ejectPassengers(): void;
        removeEffect(arg0: Internal.MobEffect_): boolean;
        getProfile(): Internal.GameProfile;
        setInLove(arg0: Internal.Player_): void;
        handler$ebc000$onAddedToWorld(ci: Internal.CallbackInfo_): void;
        isDeadOrDying(): boolean;
        setHeadArmorItem(item: Internal.ItemStack_): void;
        static setViewScale(arg0: number): void;
        take(arg0: Internal.Entity_, arg1: number): void;
        setLevelCallback(arg0: Internal.EntityInLevelCallback_): void;
        getLookControl(): Internal.LookControl;
        eat(arg0: boolean): void;
        handler$edc000$mna$canStandOnFluid(arg0: Internal.FluidState_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        playSound(arg0: Internal.SoundEvent_, arg1: number, arg2: number): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        canAttack(arg0: Internal.LivingEntity_): boolean;
        static getSpeedUpSecondsWhenFeeding(arg0: number): number;
        getLastHandItem(arg0: Internal.EquipmentSlot_): Internal.ItemStack;
        getOffHandItem(): Internal.ItemStack;
        startSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        isOnScoreboardTeam(teamId: string): boolean;
        startUsingItem(arg0: Internal.InteractionHand_): void;
        position(): Vec3d;
        static getEquipmentSlotForItem(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getEquipment(slot: Internal.EquipmentSlot_): Internal.ItemStack;
        modifyExpressionValue$edg000$eytraValidOverride(arg0: boolean): boolean;
        displayFireAnimation(): boolean;
        getRopeHoldPosition(arg0: number): Vec3d;
        copyPosition(arg0: Internal.Entity_): void;
        onAddedToWorld(): void;
        "hasPassenger(net.minecraft.world.entity.Entity)"(arg0: Internal.Entity_): boolean;
        isCrouching(): boolean;
        "getAttributeBaseValue(net.minecraft.world.entity.ai.attributes.Attribute)"(arg0: Internal.Attribute_): number;
        onLeaveCombat(): void;
        setY(y: number): void;
        getAttributeValue(arg0: Internal.Attribute_): number;
        getFeetBlockState(): Internal.BlockState;
        handler$bdj000$setSprinting(ci: Internal.CallbackInfo_): void;
        isWithinRestriction(): boolean;
        changeDimension(arg0: Internal.ServerLevel_, arg1: Internal.ITeleporter_): Internal.Entity;
        positionRider(arg0: Internal.Entity_): void;
        baseTick(): void;
        broadcastToPlayer(arg0: Internal.ServerPlayer_): boolean;
        setSharedFlag(arg0: number, arg1: boolean): void;
        getSleepingPos(): Internal.Optional<BlockPos>;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightAccess(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        damageHeldItem(): void;
        getCustomName(): net.minecraft.network.chat.Component;
        getClass(): typeof any;
        "self()"(): Internal.Entity;
        isVisuallySwimming(): boolean;
        localvar$zoi000$fabrication$treatLavaAsGround(onGround: boolean): boolean;
        getMaxAirSupply(): number;
        canTrample(arg0: Internal.BlockState_, arg1: BlockPos_, arg2: number): boolean;
        handler$ebe000$brainProvider(cir: Internal.CallbackInfoReturnable_<any>): void;
        neruina$setErrored(): void;
        setItemInHand(arg0: Internal.InteractionHand_, arg1: Internal.ItemStack_): void;
        entityJs$getTypeId(): string;
        setMaxHealth(hp: number): void;
        getFacing(): Internal.Direction;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>, arg1: boolean): boolean;
        handler$ebc000$getMaxFallDistance(cir: Internal.CallbackInfoReturnable_<any>): void;
        bettermobcombat$startUpswing(arg0: Internal.WeaponAttributes_): void;
        isPassengerOfSameVehicle(arg0: Internal.Entity_): boolean;
        getBoundingBoxForCulling(): Internal.AABB;
        setAge(arg0: number): void;
        getTarget(): Internal.LivingEntity;
        static collideBoundingBox(arg0: Internal.Entity_, arg1: Vec3d_, arg2: Internal.AABB_, arg3: Internal.Level_, arg4: Internal.List_<any>): Vec3d;
        restrictTo(arg0: BlockPos_, arg1: number): void;
        isInLove(): boolean;
        trackingPosition(): Vec3d;
        setMagneticDeltaX(arg0: number): void;
        getNameTagOffsetY(): number;
        isInvulnerable(): boolean;
        isInLava(): boolean;
        awardKillScore(arg0: Internal.Entity_, arg1: number, arg2: Internal.DamageSource_): void;
        isInWater(): boolean;
        finalizeSpawn(arg0: Internal.ServerLevelAccessor_, arg1: Internal.DifficultyInstance_, arg2: Internal.MobSpawnType_, arg3: Internal.SpawnGroupData_, arg4: Internal.CompoundTag_): Internal.SpawnGroupData;
        handler$ebc000$causeFallDamage(pFallDistance: number, pMultiplier: number, pSource: Internal.DamageSource_, cir: Internal.CallbackInfoReturnable_<any>): void;
        handler$ebf000$canHoldItem(pStack: Internal.ItemStack_, cir: Internal.CallbackInfoReturnable_<any>): void;
        hasEffect(arg0: Internal.MobEffect_): boolean;
        swing(arg0: Internal.InteractionHand_): void;
        getHeldItem(hand: Internal.InteractionHand_): Internal.ItemStack;
        handler$zlp000$isAffectedByDaylight(ci: Internal.CallbackInfoReturnable_<any>): void;
        getRootVehicle(): Internal.Entity;
        onPathfindingDone(): void;
        save(arg0: Internal.CompoundTag_): boolean;
        getLocalBoundsForPose(arg0: Internal.Pose_): Internal.AABB;
        isNoGravity(): boolean;
        curePotionEffects(arg0: Internal.ItemStack_): boolean;
        onItemPickup(arg0: Internal.ItemEntity_): void;
        setCitadelEntityData(arg0: Internal.CompoundTag_): void;
        setMagneticDeltaZ(arg0: number): void;
        getSitAmount(arg0: number): number;
        handler$dkl000$ac_calculateEntityAnimation(arg0: boolean, arg1: Internal.CallbackInfo_): void;
        resetLove(): void;
        updateSwimming(): void;
        isHolding(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        getSpeed(): number;
        abstract getCachedFeetBlockState(): Internal.BlockState;
        hasSlowFallingFlag(): boolean;
        shouldInformAdmins(): boolean;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        bettercombat$getAttackStrengthScale(arg0: number): number;
        rideTick(): void;
        wait(): void;
        getUuid(): Internal.UUID;
        setOffHandItem(item: Internal.ItemStack_): void;
        spawn(): void;
        setNoAi(arg0: boolean): void;
        teleportTo(arg0: Internal.ServerLevel_, arg1: number, arg2: number, arg3: number, arg4: Internal.Set_<Internal.RelativeMovement>, arg5: number, arg6: number): boolean;
        shouldShowName(): boolean;
        getArmorSlots(): Internal.Iterable<Internal.ItemStack>;
        canPickUpLoot(): boolean;
        handler$ebf000$setTarget(pTarget: Internal.LivingEntity_, ci: Internal.CallbackInfo_): void;
        kill(): void;
        onEnterCombat(): void;
        updateNavigationRegistration(): void;
        animateHurt(arg0: number): void;
        static resetForwardDirectionOfRelativePortalPosition(arg0: Vec3d_): Vec3d;
        brainProvider(): Internal.Brain$Provider<any>;
        hasRestriction(): boolean;
        getHeadArmorItem(): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getDimensionsForge(arg0: Internal.Pose_): Internal.EntityDimensions;
        handler$ebc000$mayInteract(pLevel: Internal.Level_, pPos: BlockPos_, cir: Internal.CallbackInfoReturnable_<any>): void;
        deserializeNBT(arg0: Internal.Tag_): void;
        handler$zjb000$getLandingPos(cir: Internal.CallbackInfoReturnable_<any>): void;
        localvar$dpi000$takeKnockback_HEAD_changeStrength(knockbackStrength: number): number;
        revive(): void;
        localvar$cch000$fluidCollision(arg0: Vec3d_): Vec3d;
        getBbWidth(): number;
        handler$ebc000$canTrample(state: Internal.BlockState_, pos: BlockPos_, fallDistance: number, cir: Internal.CallbackInfoReturnable_<any>): void;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
        getLastAttackedTicks(): number;
        addDeltaMovement(arg0: Vec3d_): void;
        handler$zla000$fromTag(tag: Internal.CompoundTag_, ci: Internal.CallbackInfo_): void;
        canDrownInFluidType(arg0: Internal.FluidType_): boolean;
        "getName()"(): net.minecraft.network.chat.Component;
        mirror(arg0: Internal.Mirror_): number;
        canUpdate(): boolean;
        knockback(arg0: number, arg1: number, arg2: number): void;
        getTicksRequiredToFreeze(): number;
        handler$bdk000$setSprinting(sprinting: boolean, ci: Internal.CallbackInfo_): void;
        getVisibilityPercent(arg0: Internal.Entity_): number;
        getMaxSpawnClusterSize(): number;
        wrapOperation$boc000$onTravel(instance: Internal.LivingEntity_, state: Internal.FluidState_, original: Internal.Operation_<any>): boolean;
        handler$bcn000$isWet(ci: Internal.CallbackInfoReturnable_<any>): void;
        setKnockbackMultiplier_BetterCombat(value: number): void;
        getUsername(): string;
        getInLoveTime(): number;
        move(arg0: Internal.MoverType_, arg1: Vec3d_): void;
        onRemovedFromWorld(): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        isPickable(): boolean;
        setYHeadRot(arg0: number): void;
        setJumping(arg0: boolean): void;
        getPickResult(): Internal.ItemStack;
        handler$zop000$sendEquipmentBreakStatus(slot: Internal.EquipmentSlot_, ci: Internal.CallbackInfo_): void;
        "getMainHandItem()"(): Internal.ItemStack;
        getAbsorptionAmount(): number;
        getRandomY(): number;
        onEffectRemoved(arg0: Internal.MobEffectInstance_): void;
        getDisplayName(): net.minecraft.network.chat.Component;
        handler$dke000$ac_isInWater(arg0: Internal.CallbackInfoReturnable_<any>): void;
        getMobType(): Internal.MobType;
        travel(arg0: Vec3d_): void;
        getItemInHand(arg0: Internal.InteractionHand_): Internal.ItemStack;
        isValidSacrifice(arg0: number): boolean;
        shouldBeSaved(): boolean;
        getFluidTypeHeight(arg0: Internal.FluidType_): number;
        handler$edc000$mna$jumpInLiquid(arg0: Internal.TagKey_<any>, arg1: Internal.CallbackInfo_): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.Entity>): boolean;
        removeTag(arg0: string): boolean;
        isHoldingInAnyHand(i: Internal.Ingredient_): boolean;
        /**
         * @deprecated
        */
        getFluidHeight(arg0: Internal.TagKey_<Internal.Fluid>): number;
        canSpawnSoulSpeedParticle(): boolean;
        getHiddenGene(): Internal.Panda$Gene;
        readCapsFrom(arg0: Internal.CompoundTag_): void;
        notifyAll(): void;
        aiStep(): void;
        getPassengersRidingOffset(): number;
        setAttributeBaseValue(attribute: Internal.Attribute_, value: number): void;
        "isInFluidType(java.util.function.BiPredicate)"(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        distanceToEntitySqr(arg0: Internal.Entity_): number;
        handler$ebc000$onClientRemoval(ci: Internal.CallbackInfo_): void;
        isFrame(): boolean;
        broadcastBreakEvent(arg0: Internal.InteractionHand_): void;
        setLegsArmorItem(item: Internal.ItemStack_): void;
        discard(): void;
        localvar$bhp000$adjustDamage(amount: number, source: Internal.DamageSource_): number;
        sendSystemMessage(arg0: net.minecraft.network.chat.Component_): void;
        acceptsSuccess(): boolean;
        setNoGravity(arg0: boolean): void;
        getUseItemRemainingTicks(): number;
        getIndirectPassengers(): Internal.Iterable<any>;
        attackable(): boolean;
        createCommandSourceStack(): Internal.CommandSourceStack;
        getNavigation(): Internal.PathNavigation;
        isControlledByLocalInstance(): boolean;
        isMonster(): boolean;
        getLoveCause(): Internal.ServerPlayer;
        getLastClimbablePos(): Internal.Optional<BlockPos>;
        handler$dfk000$pre_getAttributeValue(arg0: Internal.Attribute_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getEatingSound(arg0: Internal.ItemStack_): Internal.SoundEvent;
        getPerceivedTargetDistanceSquareForMeleeAttack(arg0: Internal.LivingEntity_): number;
        onSyncedDataUpdated(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        setId(arg0: number): void;
        getHorizontalFacing(): Internal.Direction;
        getType(): string;
        static checkAnimalSpawnRules(arg0: Internal.EntityType_<Internal.Animal>, arg1: Internal.LevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
        isDamageSourceBlocked(arg0: Internal.DamageSource_): boolean;
        getLightProbePosition(arg0: number): Vec3d;
        ac_getEquipmentDropChance(arg0: Internal.EquipmentSlot_): number;
        setVisualScale(arg0: number): void;
        getActiveEffectsMap(): Internal.Map<Internal.MobEffect, Internal.MobEffectInstance>;
        onEquipItem(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_): void;
        checkDespawn(): void;
        handler$edd000$mna$onClimbable(arg0: Internal.CallbackInfoReturnable_<any>): void;
        getWalkTargetValue(arg0: BlockPos_, arg1: Internal.LevelReader_): number;
        lookAt(arg0: Internal.Entity_, arg1: number, arg2: number): void;
        setHeldItem(hand: Internal.InteractionHand_, item: Internal.ItemStack_): void;
        equipItemIfPossible(arg0: Internal.ItemStack_): Internal.ItemStack;
        onSyncedDataUpdated(arg0: Internal.EntityDataAccessor_<any>): void;
        getMagneticAttachmentFace(): Internal.Direction;
        lerpHeadTo(arg0: number, arg1: number): void;
        fabrication$isInvisibilityReversible(): boolean;
        canDisableShield(): boolean;
        setMotionX(x: number): void;
        getHandSlots(): Internal.Iterable<Internal.ItemStack>;
        distanceToEntity(arg0: Internal.Entity_): number;
        canarySetClimbingMobCachingSectionUpdateBehavior(arg0: boolean): void;
        getMagneticDeltaY(): number;
        roll(arg0: boolean): void;
        wait(arg0: number, arg1: number): void;
        getTeamColor(): number;
        setNbt(nbt: Internal.CompoundTag_): void;
        "isInFluidType(net.minecraftforge.fluids.FluidType)"(arg0: Internal.FluidType_): boolean;
        checkSpawnObstruction(arg0: Internal.LevelReader_): boolean;
        handler$bbo001$damage(ds: Internal.DamageSource_, amount: number, cir: Internal.CallbackInfoReturnable_<any>): void;
        extinguish(): void;
        getRestrictRadius(): number;
        moveTo(arg0: Vec3d_): void;
        isColliding(arg0: BlockPos_, arg1: Internal.BlockState_): boolean;
        "swing(net.minecraft.world.InteractionHand)"(arg0: Internal.InteractionHand_): void;
        handler$bbo000$playHurtSound(src: Internal.DamageSource_, ci: Internal.CallbackInfo_): void;
        getRegisteredNavigation(): Internal.PathNavigation;
        getVariant(): Internal.Panda$Gene;
        isInvertedHealAndHarm(): boolean;
        canHoldItem(arg0: Internal.ItemStack_): boolean;
        killedEntity(arg0: Internal.ServerLevel_, arg1: Internal.LivingEntity_): boolean;
        getClassification(arg0: boolean): Internal.MobCategory;
        isFreezing(): boolean;
        runCommand(command: string): number;
        setGuaranteedDrop(arg0: Internal.EquipmentSlot_): void;
        setSharedFlagOnFire(arg0: boolean): void;
        playerAnimator_setAnimation(arg0: ResourceLocation_, arg1: Internal.IAnimation_): Internal.IAnimation;
        set defaultMovementSpeedMultiplier(speed: number)
        get suppressingBounce(): boolean
        set target(arg0: Internal.LivingEntity_)
        get onFire(): boolean
        get positionCodec(): Internal.VecDeltaCodec
        set maxUpStep(arg0: number)
        get fallFlyingTicks(): number
        get sneezing(): boolean
        set xxa(arg0: number)
        set sneezeCounter(arg0: number)
        set delayedLeashHolderId(arg0: number)
        get shiftKeyDown(): boolean
        set UUID(arg0: Internal.UUID_)
        set motionZ(z: number)
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        get animation(): Internal.AnimationApplier
        get blockY(): number
        get spectator(): boolean
        set mainHandItem(item: Internal.ItemStack_)
        get persistentData(): Internal.CompoundTag
        get health(): number
        get maxHealth(): number
        get registeredToWorld(): boolean
        set aggressive(arg0: boolean)
        set removed(arg0: Internal.Entity$RemovalReason_)
        get inWaterRainOrBubble(): boolean
        get removalReason(): Internal.Entity$RemovalReason
        get eating(): boolean
        set boundingBox(arg0: Internal.AABB_)
        get ambientCreature(): boolean
        set zza(arg0: number)
        get block(): Internal.BlockContainerJS
        get name(): net.minecraft.network.chat.Component
        get controlledVehicle(): Internal.Entity
        get armorValue(): number
        set dimension(arg0: Internal.EntityDimensions_)
        get killCredit(): Internal.LivingEntity
        get unhappyCounter(): number
        get autoSpinAttack(): boolean
        get remainingFireTicks(): number
        get weak(): boolean
        get playful(): boolean
        get maxFallDistance(): number
        get ticksFrozen(): number
        get lazy(): boolean
        get voicePitch(): number
        set statusMessage(message: net.minecraft.network.chat.Component_)
        set sleepingPos(arg0: BlockPos_)
        get descending(): boolean
        get worried(): boolean
        get headRotSpeed(): number
        get YHeadRot(): number
        set absorptionAmount(arg0: number)
        get affectedByFluids(): boolean
        set deltaMovement(arg0: Vec3d_)
        get baby(): boolean
        get glowing(): boolean
        get leashOffset(): Vec3d
        get attackable(): boolean
        get attackTime(): number
        get scared(): boolean
        get underWater(): boolean
        get swimHighSpeedSplashSound(): Internal.SoundEvent
        get leashHolder(): Internal.Entity
        get sensing(): Internal.Sensing
        get legsArmorItem(): Internal.ItemStack
        get selfAndPassengers(): Internal.Stream<any>
        get deltaMovement(): Vec3d
        set secondsOnFire(arg0: number)
        get "displayName()"(): net.minecraft.network.chat.Component
        get lootTable(): ResourceLocation
        get ticksUsingItem(): number
        get arrowCount(): number
        get moveControl(): Internal.MoveControl
        get defaultMovementSpeed(): number
        get peacefulCreature(): boolean
        set onGround(arg0: boolean)
        get firstTick(): boolean
        get lastHurtByMobTimestamp(): number
        get vehicle(): Internal.Entity
        get effectiveAi(): boolean
        set spawnCancelled(arg0: boolean)
        get stringUuid(): string
        set swimming(arg0: boolean)
        get mainArm(): Internal.HumanoidArm
        get rotationVector(): Internal.Vec2
        get hurtDir(): number
        get sprinting(): boolean
        get motionY(): number
        get offhandItem(): Internal.ItemStack
        get isInsidePortal(): boolean
        set mainGene(arg0: Internal.Panda$Gene_)
        get brown(): boolean
        get lastHurtMob(): Internal.LivingEntity
        get addedToWorld(): boolean
        get lastDamageSource(): Internal.DamageSource
        get soundSource(): Internal.SoundSource
        set noActionTime(arg0: number)
        set movementSpeedAddition(speed: number)
        get pose(): Internal.Pose
        set lastAttackedTicks(arg0: number)
        get restrictCenter(): BlockPos
        get leftHanded(): boolean
        set z(z: number)
        get y(): number
        get blocking(): boolean
        /**
         * @deprecated
        */
        get pushedByFluid(): boolean
        get armorCoverPercentage(): number
        get airSupply(): number
        get player(): boolean
        get animal(): boolean
        get motionDirection(): Internal.Direction
        get fabricBalmData(): Internal.CompoundTag
        get commandSenderWorld(): Internal.Level
        get totalMovementSpeed(): number
        get attributes(): Internal.AttributeMap
        set magneticDeltaY(arg0: number)
        get spawnCancelled(): boolean
        set inLoveTime(arg0: number)
        get swimming(): boolean
        set sprinting(arg0: boolean)
        set x(x: number)
        get blockStateOn(): Internal.BlockState
        get portalWaitTime(): number
        get fluidJumpThreshold(): number
        set airSupply(arg0: number)
        get onPos(): BlockPos
        get undead(): boolean
        get stepHeight(): number
        set registeredToWorld(arg0: Internal.PathNavigation_)
        get sleeping(): boolean
        get dismountPoses(): Internal.ImmutableList<Internal.Pose>
        get lastHurtMobTimestamp(): number
        set remainingFireTicks(arg0: number)
        /**
         * @deprecated
        */
        get onPosLegacy(): BlockPos
        set pos(arg0: Vec3d_)
        set canPickUpLoot(arg0: boolean)
        get mainHandItem(): Internal.ItemStack
        set silent(arg0: boolean)
        set leftHanded(arg0: boolean)
        get swimSplashSound(): Internal.SoundEvent
        get activeEffects(): Internal.Collection<Internal.MobEffectInstance>
        get onPortalCooldown(): boolean
        set pitch(arg0: number)
        get multipartEntity(): boolean
        get parts(): Internal.PartEntity<any>[]
        get usingItem(): boolean
        get alwaysTicking(): boolean
        get forgePersistentData(): Internal.CompoundTag
        set invulnerable(arg0: boolean)
        get inFluidType(): boolean
        set glowing(arg0: boolean)
        get alive(): boolean
        get bbHeight(): number
        get tags(): Internal.Set<string>
        get lastAttacker(): Internal.LivingEntity
        get percentFrozen(): number
        set portalCooldown(arg0: number)
        set possessedByWatcher(arg0: boolean)
        set position(block: Internal.BlockContainerJS_)
        get leashed(): boolean
        get sneezeCounter(): number
        set pose(arg0: Internal.Pose_)
        get reachDistance(): number
        get entityType(): Internal.EntityType<any>
        get waterCreature(): boolean
        get visualScale(): number
        set lastHurtByPlayer(arg0: Internal.Player_)
        get "server()"(): Internal.MinecraftServer
        get pushable(): boolean
        set YBodyRot(arg0: number)
        set motionY(y: number)
        get magneticDeltaZ(): number
        set chestArmorItem(item: Internal.ItemStack_)
        get passenger(): boolean
        get sensitiveToWater(): boolean
        get jumpControl(): Internal.JumpControl
        get feetArmorItem(): Internal.ItemStack
        get viewScale(): number
        get visualRotationYInDegrees(): number
        set speed(arg0: number)
        get discrete(): boolean
        get level(): Internal.Level
        get combatTracker(): Internal.CombatTracker
        get noAi(): boolean
        set hiddenGene(arg0: Internal.Panda$Gene_)
        get chestArmorItem(): Internal.ItemStack
        get fullyFrozen(): boolean
        get lastPos(): BlockPos
        get inWall(): boolean
        get allSlots(): Internal.Iterable<Internal.ItemStack>
        get magneticDeltaX(): number
        get scale(): number
        get suppressingSlidingDownLadder(): boolean
        get blockZ(): number
        get silent(): boolean
        get pitch(): number
        get random(): Internal.RandomSource
        get passengersAndSelf(): Internal.Stream<any>
        set magneticAttachmentFace(arg0: Internal.Direction_)
        get age(): number
        get prevMagneticAttachmentFace(): Internal.Direction
        get noActionTime(): number
        get visuallyCrawling(): boolean
        get aggressive(): boolean
        set yya(arg0: number)
        set comboCount(arg0: number)
        set baby(arg0: boolean)
        get lastHurtByMob(): Internal.LivingEntity
        get inWaterOrBubble(): boolean
        get portalCooldown(): number
        get item(): Internal.ItemStack
        set slowFallingFlag(arg0: boolean)
        get ignoringBlockTriggers(): boolean
        get eyeInFluidType(): Internal.FluidType
        set onBack(arg0: boolean)
        get steppingCarefully(): boolean
        /**
         * @deprecated
        */
        get lightLevelDependentMagicValue(): number
        get blockX(): number
        get fallFlying(): boolean
        get encodeId(): string
        get animationStack(): Internal.AnimationStack
        get maxHeadXRot(): number
        get nbt(): Internal.CompoundTag
        set invisible(arg0: boolean)
        set totalMovementSpeedMultiplier(speed: number)
        set health(arg0: number)
        get eyePosition(): Vec3d
        get eyeHeight(): number
        set discardFriction(arg0: boolean)
        get yaw(): number
        get possessedByWatcher(): boolean
        get usedItemHand(): Internal.InteractionHand
        set defaultMovementSpeed(speed: number)
        get brain(): Internal.Brain<any>
        set customNameVisible(arg0: boolean)
        get controllingPassenger(): Internal.LivingEntity
        get scriptType(): Internal.ScriptType
        get forward(): Vec3d
        get comboCount(): number
        set feetArmorItem(item: Internal.ItemStack_)
        get id(): number
        set unhappyCounter(arg0: number)
        get eyeY(): number
        get boundingBox(): Internal.AABB
        get inWaterOrRain(): boolean
        get sitting(): boolean
        get affectedByPotions(): boolean
        get citadelEntityData(): Internal.CompoundTag
        get addEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>
        get currentAttack(): Internal.AttackHand
        get team(): Internal.Team
        get mainGene(): Internal.Panda$Gene
        set ticksFrozen(arg0: number)
        get useItem(): Internal.ItemStack
        get myRidingOffset(): number
        get living(): boolean
        get x(): number
        get vehicle(): boolean
        set isInPowderSnow(arg0: boolean)
        set customName(arg0: net.minecraft.network.chat.Component_)
        get teamId(): string
        set stingerCount(arg0: number)
        get maxHeadYRot(): number
        get customNameVisible(): boolean
        get pistonPushReaction(): Internal.PushReaction
        get rolling(): boolean
        get lootTableSeed(): number
        get motionX(): number
        get entityData(): Internal.SynchedEntityData
        get potionEffects(): Internal.EntityPotionEffectsJS
        get onRails(): boolean
        get stingerCount(): number
        get fallSounds(): Internal.LivingEntity$Fallsounds
        get dimensionChangingDelay(): number
        set yaw(arg0: number)
        get pickRadius(): number
        get pathFinding(): boolean
        get weaponSwingInProgress(): boolean
        get removed(): boolean
        get jumpBoostPower(): number
        set shiftKeyDown(arg0: boolean)
        get passengers(): Internal.EntityArrayList
        get maxHeightFluidType(): Internal.FluidType
        get z(): number
        get onBack(): boolean
        get server(): Internal.MinecraftServer
        get experienceReward(): number
        get firstPassenger(): Internal.Entity
        get spawnType(): Internal.MobSpawnType
        set lastHurtMob(arg0: Internal.Entity_)
        set lastHurtByMob(arg0: Internal.LivingEntity_)
        set fabricBalmData(arg0: Internal.CompoundTag_)
        get lookAngle(): Vec3d
        get ambientSoundInterval(): number
        set arrowCount(arg0: number)
        get motionZ(): number
        get persistenceRequired(): boolean
        get invisible(): boolean
        get bedOrientation(): Internal.Direction
        get profile(): Internal.GameProfile
        set inLove(arg0: Internal.Player_)
        get deadOrDying(): boolean
        set headArmorItem(item: Internal.ItemStack_)
        set viewScale(arg0: number)
        set levelCallback(arg0: Internal.EntityInLevelCallback_)
        get lookControl(): Internal.LookControl
        get offHandItem(): Internal.ItemStack
        get crouching(): boolean
        set y(y: number)
        get feetBlockState(): Internal.BlockState
        get withinRestriction(): boolean
        get sleepingPos(): Internal.Optional<BlockPos>
        get customName(): net.minecraft.network.chat.Component
        get class(): typeof any
        get visuallySwimming(): boolean
        get maxAirSupply(): number
        set maxHealth(hp: number)
        get facing(): Internal.Direction
        get boundingBoxForCulling(): Internal.AABB
        set age(arg0: number)
        get target(): Internal.LivingEntity
        get inLove(): boolean
        set magneticDeltaX(arg0: number)
        get nameTagOffsetY(): number
        get invulnerable(): boolean
        get inLava(): boolean
        get inWater(): boolean
        get rootVehicle(): Internal.Entity
        get noGravity(): boolean
        set citadelEntityData(arg0: Internal.CompoundTag_)
        set magneticDeltaZ(arg0: number)
        get speed(): number
        get cachedFeetBlockState(): Internal.BlockState
        get uuid(): Internal.UUID
        set offHandItem(item: Internal.ItemStack_)
        set noAi(arg0: boolean)
        get armorSlots(): Internal.Iterable<Internal.ItemStack>
        get headArmorItem(): Internal.ItemStack
        get bbWidth(): number
        get lastAttackedTicks(): number
        get "name()"(): net.minecraft.network.chat.Component
        get ticksRequiredToFreeze(): number
        get maxSpawnClusterSize(): number
        set knockbackMultiplier_BetterCombat(value: number)
        get username(): string
        get inLoveTime(): number
        get pickable(): boolean
        set YHeadRot(arg0: number)
        set jumping(arg0: boolean)
        get pickResult(): Internal.ItemStack
        get "mainHandItem()"(): Internal.ItemStack
        get absorptionAmount(): number
        get randomY(): number
        get displayName(): net.minecraft.network.chat.Component
        get mobType(): Internal.MobType
        get hiddenGene(): Internal.Panda$Gene
        get passengersRidingOffset(): number
        get frame(): boolean
        set legsArmorItem(item: Internal.ItemStack_)
        set noGravity(arg0: boolean)
        get useItemRemainingTicks(): number
        get indirectPassengers(): Internal.Iterable<any>
        get navigation(): Internal.PathNavigation
        get controlledByLocalInstance(): boolean
        get monster(): boolean
        get loveCause(): Internal.ServerPlayer
        get lastClimbablePos(): Internal.Optional<BlockPos>
        set id(arg0: number)
        get horizontalFacing(): Internal.Direction
        get type(): string
        set visualScale(arg0: number)
        get activeEffectsMap(): Internal.Map<Internal.MobEffect, Internal.MobEffectInstance>
        get magneticAttachmentFace(): Internal.Direction
        set motionX(x: number)
        get handSlots(): Internal.Iterable<Internal.ItemStack>
        get magneticDeltaY(): number
        get teamColor(): number
        set nbt(nbt: Internal.CompoundTag_)
        get restrictRadius(): number
        get registeredNavigation(): Internal.PathNavigation
        get variant(): Internal.Panda$Gene
        get invertedHealAndHarm(): boolean
        get freezing(): boolean
        set guaranteedDrop(arg0: Internal.EquipmentSlot_)
        set sharedFlagOnFire(arg0: boolean)
        static readonly TOTAL_ROLL_STEPS: (32) & (number);
        rollCounter: number;
    }
    type Panda_ = Panda;
    class ClientboundSetPlayerTeamPacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        handle(arg0: Internal.PacketListener_): void;
        getClass(): typeof any;
        getTeamAction(): Internal.ClientboundSetPlayerTeamPacket$Action;
        write(arg0: Internal.FriendlyByteBuf_): void;
        toString(): string;
        getPlayerAction(): Internal.ClientboundSetPlayerTeamPacket$Action;
        notifyAll(): void;
        notify(): void;
        isSkippable(): boolean;
        wait(arg0: number, arg1: number): void;
        getPlayers(): Internal.Collection<string>;
        static createAddOrModifyPacket(arg0: Internal.PlayerTeam_, arg1: boolean): Internal.ClientboundSetPlayerTeamPacket;
        hashCode(): number;
        static createPlayerPacket(arg0: Internal.PlayerTeam_, arg1: string, arg2: Internal.ClientboundSetPlayerTeamPacket$Action_): Internal.ClientboundSetPlayerTeamPacket;
        static createRemovePacket(arg0: Internal.PlayerTeam_): Internal.ClientboundSetPlayerTeamPacket;
        wait(): void;
        getName(): string;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        wait(arg0: number): void;
        "handle(net.minecraft.network.protocol.game.ClientGamePacketListener)"(arg0: Internal.ClientGamePacketListener_): void;
        getParameters(): Internal.Optional<Internal.ClientboundSetPlayerTeamPacket$Parameters>;
        equals(arg0: any): boolean;
        "handle(net.minecraft.network.PacketListener)"(arg0: Internal.PacketListener_): void;
        get class(): typeof any
        get teamAction(): Internal.ClientboundSetPlayerTeamPacket$Action
        get playerAction(): Internal.ClientboundSetPlayerTeamPacket$Action
        get skippable(): boolean
        get players(): Internal.Collection<string>
        get name(): string
        get parameters(): Internal.Optional<Internal.ClientboundSetPlayerTeamPacket$Parameters>
    }
    type ClientboundSetPlayerTeamPacket_ = ClientboundSetPlayerTeamPacket;
    class SpectatorPage {
        constructor(arg0: Internal.List_<Internal.SpectatorMenuItem>, arg1: number)
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        getSelectedSlot(): number;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getItem(arg0: number): Internal.SpectatorMenuItem;
        get class(): typeof any
        get selectedSlot(): number
        static readonly NO_SELECTION: (-1) & (number);
    }
    type SpectatorPage_ = SpectatorPage;
    abstract class ForgeFlowingFluid extends Internal.FlowingFluid {
        getClass(): typeof any;
        getStateDefinition(): Internal.StateDefinition<Internal.Fluid, Internal.FluidState>;
        tick(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.FluidState_): void;
        getHeight(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        getFlow(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.FluidState_): Vec3d;
        abstract isSource(arg0: Internal.FluidState_): boolean;
        getOwnHeight(arg0: Internal.FluidState_): number;
        isEmpty(): boolean;
        notify(): void;
        getFluidType(): Internal.FluidType;
        wait(arg0: number, arg1: number): void;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Fluid>;
        getShape(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        defaultFluidState(): Internal.FluidState;
        getTickDelay(arg0: Internal.LevelReader_): number;
        canConvertToSource(arg0: Internal.FluidState_, arg1: Internal.Level_, arg2: BlockPos_): boolean;
        arch$holder(): Internal.Holder<Internal.Fluid>;
        arch$registryName(): ResourceLocation;
        abstract getAmount(arg0: Internal.FluidState_): number;
        getSource(arg0: boolean): Internal.FluidState;
        toString(): string;
        getExplosionResistance(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        getFlowing(): Internal.Fluid;
        notifyAll(): void;
        getBlockPathType(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: boolean): Internal.BlockPathTypes;
        getBucket(): Internal.Item;
        isSame(arg0: Internal.Fluid_): boolean;
        move(arg0: Internal.FluidState_, arg1: Internal.LivingEntity_, arg2: Vec3d_, arg3: number): boolean;
        canExtinguish(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        shouldUpdateWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_, arg2: Internal.Entity_): boolean;
        getAdjacentBlockPathType(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        hashCode(): number;
        handler$dkg000$ac_spreadTo(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Direction_, arg4: Internal.FluidState_, arg5: Internal.CallbackInfo_): void;
        canHydrate(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: BlockPos_): boolean;
        wait(): void;
        getFlowing(arg0: number, arg1: boolean): Internal.FluidState;
        wait(arg0: number): void;
        getSource(): Internal.Fluid;
        supportsBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        equals(arg0: any): boolean;
        handler$dkg000$ac_canHoldFluid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_, arg4: Internal.CallbackInfoReturnable_<any>): void;
        /**
         * @deprecated
        */
        is(arg0: Internal.TagKey_<Internal.Fluid>): boolean;
        get class(): typeof any
        get stateDefinition(): Internal.StateDefinition<Internal.Fluid, Internal.FluidState>
        get empty(): boolean
        get fluidType(): Internal.FluidType
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        get flowing(): Internal.Fluid
        get bucket(): Internal.Item
        get source(): Internal.Fluid
    }
    type ForgeFlowingFluid_ = ForgeFlowingFluid;
    class RenderBlockScreenEffectEvent$OverlayType extends Internal.Enum<Internal.RenderBlockScreenEffectEvent$OverlayType> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        getDeclaringClass(): typeof Internal.RenderBlockScreenEffectEvent$OverlayType;
        "compareTo(net.minecraftforge.client.event.RenderBlockScreenEffectEvent$OverlayType)"(arg0: Internal.RenderBlockScreenEffectEvent$OverlayType_): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        name(): string;
        compareTo(arg0: Internal.RenderBlockScreenEffectEvent$OverlayType_): number;
        hashCode(): number;
        static valueOf(arg0: string): Internal.RenderBlockScreenEffectEvent$OverlayType;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.RenderBlockScreenEffectEvent$OverlayType>>;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        static values(): Internal.RenderBlockScreenEffectEvent$OverlayType[];
        get class(): typeof any
        get declaringClass(): typeof Internal.RenderBlockScreenEffectEvent$OverlayType
        static readonly FIRE: (Internal.RenderBlockScreenEffectEvent$OverlayType) & (Internal.RenderBlockScreenEffectEvent$OverlayType);
        static readonly BLOCK: (Internal.RenderBlockScreenEffectEvent$OverlayType) & (Internal.RenderBlockScreenEffectEvent$OverlayType);
        static readonly WATER: (Internal.RenderBlockScreenEffectEvent$OverlayType) & (Internal.RenderBlockScreenEffectEvent$OverlayType);
    }
    type RenderBlockScreenEffectEvent$OverlayType_ = "block" | RenderBlockScreenEffectEvent$OverlayType | "fire" | "water";
    class HangingSignTileExtension {
        constructor(state: Internal.BlockState_)
        getClass(): typeof any;
        saveAdditional(tag: Internal.CompoundTag_): void;
        getLeftAttachment(): net.mehvahdjukaar.amendments.reg.ModBlockProperties$PostType;
        toString(): string;
        setBackItem(backItem: Internal.ItemStack_): void;
        getBackItem(): Internal.ItemStack;
        notifyAll(): void;
        getFrontItem(): Internal.ItemStack;
        getRightAttachment(): net.mehvahdjukaar.amendments.reg.ModBlockProperties$PostType;
        notify(): void;
        getClientAnimation(): Internal.SwingAnimation;
        wait(arg0: number, arg1: number): void;
        canSwing(): boolean;
        hashCode(): number;
        load(tag: Internal.CompoundTag_): void;
        wait(): void;
        updateShape(state: Internal.BlockState_, direction: Internal.Direction_, neighborState: Internal.BlockState_, level: Internal.LevelAccessor_, pos: BlockPos_, neighborPos: BlockPos_): void;
        wait(arg0: number): void;
        setFrontItem(frontItem: Internal.ItemStack_): void;
        equals(arg0: any): boolean;
        clientTick(level: Internal.Level_, pos: BlockPos_, state: Internal.BlockState_): void;
        updateAttachments(level: Internal.Level_, pos: BlockPos_, state: Internal.BlockState_): void;
        get class(): typeof any
        get leftAttachment(): net.mehvahdjukaar.amendments.reg.ModBlockProperties$PostType
        set backItem(backItem: Internal.ItemStack_)
        get backItem(): Internal.ItemStack
        get frontItem(): Internal.ItemStack
        get rightAttachment(): net.mehvahdjukaar.amendments.reg.ModBlockProperties$PostType
        get clientAnimation(): Internal.SwingAnimation
        set frontItem(frontItem: Internal.ItemStack_)
    }
    type HangingSignTileExtension_ = HangingSignTileExtension;
    class EntityArgument$Info$Template implements Internal.ArgumentTypeInfo$Template<Internal.EntityArgument> {
        getClass(): typeof any;
        instantiate(arg0: Internal.CommandBuildContext_): Internal.ArgumentType<any>;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        type(): Internal.ArgumentTypeInfo<Internal.EntityArgument, any>;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
    }
    type EntityArgument$Info$Template_ = EntityArgument$Info$Template;
    class RegistryBuilder <T> {
        constructor()
        add(arg0: Internal.IForgeRegistry$AddCallback_<T>): this;
        getDefault(): ResourceLocation;
        static of<T>(arg0: string): Internal.RegistryBuilder<T>;
        disableSync(): this;
        onBake(arg0: Internal.IForgeRegistry$BakeCallback_<T>): this;
        "add(net.minecraftforge.registries.IForgeRegistry$CreateCallback)"(arg0: Internal.IForgeRegistry$CreateCallback_<T>): this;
        set(arg0: Internal.IForgeRegistry$MissingFactory_<T>): this;
        notify(): void;
        getAllowOverrides(): boolean;
        "add(net.minecraftforge.registries.IForgeRegistry$AddCallback)"(arg0: Internal.IForgeRegistry$AddCallback_<T>): this;
        addCallback(arg0: any): this;
        onValidate(arg0: Internal.IForgeRegistry$ValidateCallback_<T>): this;
        setDefaultKey(arg0: ResourceLocation_): this;
        getMinId(): number;
        add(arg0: Internal.IForgeRegistry$ClearCallback_<T>): this;
        getSync(): boolean;
        add(arg0: Internal.IForgeRegistry$ValidateCallback_<T>): this;
        getAdd(): Internal.IForgeRegistry$AddCallback<T>;
        setName(arg0: ResourceLocation_): this;
        onClear(arg0: Internal.IForgeRegistry$ClearCallback_<T>): this;
        getMissingFactory(): Internal.IForgeRegistry$MissingFactory<T>;
        onAdd(arg0: Internal.IForgeRegistry$AddCallback_<T>): this;
        getAllowModifications(): boolean;
        hasTags(): this;
        getMaxId(): number;
        wait(): void;
        allowModification(): this;
        add(arg0: Internal.IForgeRegistry$BakeCallback_<T>): this;
        disableOverrides(): this;
        legacyName(arg0: string): this;
        getClass(): typeof any;
        static of<T>(arg0: ResourceLocation_): Internal.RegistryBuilder<T>;
        getClear(): Internal.IForgeRegistry$ClearCallback<T>;
        getBake(): Internal.IForgeRegistry$BakeCallback<T>;
        wait(arg0: number, arg1: number): void;
        "legacyName(net.minecraft.resources.ResourceLocation)"(arg0: ResourceLocation_): this;
        onCreate(arg0: Internal.IForgeRegistry$CreateCallback_<T>): this;
        "add(net.minecraftforge.registries.IForgeRegistry$ValidateCallback)"(arg0: Internal.IForgeRegistry$ValidateCallback_<T>): this;
        disableSaving(): this;
        getSaveToDisc(): boolean;
        getValidate(): Internal.IForgeRegistry$ValidateCallback<T>;
        getCreate(): Internal.IForgeRegistry$CreateCallback<T>;
        setIDRange(arg0: number, arg1: number): this;
        static "of(java.lang.String)"<T>(arg0: string): Internal.RegistryBuilder<T>;
        static "of(net.minecraft.resources.ResourceLocation)"<T>(arg0: ResourceLocation_): Internal.RegistryBuilder<T>;
        add(arg0: Internal.IForgeRegistry$CreateCallback_<T>): this;
        "add(net.minecraftforge.registries.IForgeRegistry$ClearCallback)"(arg0: Internal.IForgeRegistry$ClearCallback_<T>): this;
        missing(arg0: Internal.IForgeRegistry$MissingFactory_<T>): this;
        toString(): string;
        notifyAll(): void;
        getLegacyNames(): Internal.Set<ResourceLocation>;
        "legacyName(java.lang.String)"(arg0: string): this;
        hashCode(): number;
        "add(net.minecraftforge.registries.IForgeRegistry$BakeCallback)"(arg0: Internal.IForgeRegistry$BakeCallback_<T>): this;
        wait(arg0: number): void;
        legacyName(arg0: ResourceLocation_): this;
        equals(arg0: any): boolean;
        static of<T>(): Internal.RegistryBuilder<T>;
        setMaxID(arg0: number): this;
        get "default"(): ResourceLocation
        get allowOverrides(): boolean
        set defaultKey(arg0: ResourceLocation_)
        get minId(): number
        get sync(): boolean
        get add(): Internal.IForgeRegistry$AddCallback<T>
        set name(arg0: ResourceLocation_)
        get missingFactory(): Internal.IForgeRegistry$MissingFactory<T>
        get allowModifications(): boolean
        get maxId(): number
        get class(): typeof any
        get clear(): Internal.IForgeRegistry$ClearCallback<T>
        get bake(): Internal.IForgeRegistry$BakeCallback<T>
        get saveToDisc(): boolean
        get validate(): Internal.IForgeRegistry$ValidateCallback<T>
        get create(): Internal.IForgeRegistry$CreateCallback<T>
        get legacyNames(): Internal.Set<ResourceLocation>
        set maxID(arg0: number)
    }
    type RegistryBuilder_<T> = RegistryBuilder<T>;
    interface ClampedItemPropertyFunction extends Internal.ItemPropertyFunction {
        /**
         * @deprecated
        */
        call(arg0: Internal.ItemStack_, arg1: Internal.ClientLevel_, arg2: Internal.LivingEntity_, arg3: number): number;
        abstract unclampedCall(arg0: Internal.ItemStack_, arg1: Internal.ClientLevel_, arg2: Internal.LivingEntity_, arg3: number): number;
        (arg0: Internal.ItemStack, arg1: Internal.ClientLevel, arg2: Internal.LivingEntity, arg3: number): number;
    }
    type ClampedItemPropertyFunction_ = ((arg0: Internal.ItemStack, arg1: Internal.ClientLevel, arg2: Internal.LivingEntity, arg3: number)=> number) | ClampedItemPropertyFunction;
    class StructureTemplate implements Internal.TemplateAccessor {
        constructor()
        placeInWorld(arg0: Internal.ServerLevelAccessor_, arg1: BlockPos_, arg2: BlockPos_, arg3: Internal.StructurePlaceSettings_, arg4: Internal.RandomSource_, arg5: number): boolean;
        getAuthor(): string;
        getClass(): typeof any;
        static transformedVec3d(arg0: Internal.StructurePlaceSettings_, arg1: Vec3d_): Vec3d;
        notify(): void;
        save(arg0: Internal.CompoundTag_): Internal.CompoundTag;
        filterBlocks(arg0: BlockPos_, arg1: Internal.StructurePlaceSettings_, arg2: Internal.Block_): Internal.List<Internal.StructureTemplate$StructureBlockInfo>;
        wait(arg0: number, arg1: number): void;
        getSize(): Vec3i;
        static calculateRelativePosition(arg0: Internal.StructurePlaceSettings_, arg1: BlockPos_): BlockPos;
        getZeroPositionWithTransform(arg0: BlockPos_, arg1: Internal.Mirror_, arg2: Internal.Rotation_): BlockPos;
        calculateConnectedPosition(arg0: Internal.StructurePlaceSettings_, arg1: BlockPos_, arg2: Internal.StructurePlaceSettings_, arg3: BlockPos_): BlockPos;
        load(arg0: Internal.HolderGetter_<Internal.Block>, arg1: Internal.CompoundTag_): void;
        setAuthor(arg0: string): void;
        toString(): string;
        /**
         * @deprecated
        */
        static processBlockInfos(arg0: Internal.ServerLevelAccessor_, arg1: BlockPos_, arg2: BlockPos_, arg3: Internal.StructurePlaceSettings_, arg4: Internal.List_<Internal.StructureTemplate$StructureBlockInfo>): Internal.List<Internal.StructureTemplate$StructureBlockInfo>;
        notifyAll(): void;
        static transform(arg0: Vec3d_, arg1: Internal.Mirror_, arg2: Internal.Rotation_, arg3: BlockPos_): Vec3d;
        static processEntityInfos(arg0: Internal.StructureTemplate_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.StructurePlaceSettings_, arg4: Internal.List_<Internal.StructureTemplate$StructureEntityInfo>): Internal.List<Internal.StructureTemplate$StructureEntityInfo>;
        static "transform(net.minecraft.core.BlockPos,net.minecraft.world.level.block.Mirror,net.minecraft.world.level.block.Rotation,net.minecraft.core.BlockPos)"(arg0: BlockPos_, arg1: Internal.Mirror_, arg2: Internal.Rotation_, arg3: BlockPos_): BlockPos;
        getSize(arg0: Internal.Rotation_): Vec3i;
        getBoundingBox(arg0: BlockPos_, arg1: Internal.Rotation_, arg2: BlockPos_, arg3: Internal.Mirror_): Internal.BoundingBox;
        static processBlockInfos(arg0: Internal.ServerLevelAccessor_, arg1: BlockPos_, arg2: BlockPos_, arg3: Internal.StructurePlaceSettings_, arg4: Internal.List_<Internal.StructureTemplate$StructureBlockInfo>, arg5: Internal.StructureTemplate_): Internal.List<Internal.StructureTemplate$StructureBlockInfo>;
        hashCode(): number;
        static updateShapeAtEdge(arg0: Internal.LevelAccessor_, arg1: number, arg2: Internal.DiscreteVoxelShape_, arg3: number, arg4: number, arg5: number): void;
        mss_getPalettes(): Internal.List<any>;
        static transform(arg0: BlockPos_, arg1: Internal.Mirror_, arg2: Internal.Rotation_, arg3: BlockPos_): BlockPos;
        static getZeroPositionWithTransform(arg0: BlockPos_, arg1: Internal.Mirror_, arg2: Internal.Rotation_, arg3: number, arg4: number): BlockPos;
        filterBlocks(arg0: BlockPos_, arg1: Internal.StructurePlaceSettings_, arg2: Internal.Block_, arg3: boolean): Internal.ObjectArrayList<Internal.StructureTemplate$StructureBlockInfo>;
        static "transform(net.minecraft.world.phys.Vec3,net.minecraft.world.level.block.Mirror,net.minecraft.world.level.block.Rotation,net.minecraft.core.BlockPos)"(arg0: Vec3d_, arg1: Internal.Mirror_, arg2: Internal.Rotation_, arg3: BlockPos_): Vec3d;
        getBoundingBox(arg0: Internal.StructurePlaceSettings_, arg1: BlockPos_): Internal.BoundingBox;
        wait(): void;
        wait(arg0: number): void;
        fillFromWorld(arg0: Internal.Level_, arg1: BlockPos_, arg2: Vec3i_, arg3: boolean, arg4: Internal.Block_): void;
        equals(arg0: any): boolean;
        get author(): string
        get class(): typeof any
        get size(): Vec3i
        set author(arg0: string)
        static readonly BLOCK_TAG_POS: ("pos") & (string);
        static readonly ENTITY_TAG_POS: ("pos") & (string);
        static readonly BLOCKS_TAG: ("blocks") & (string);
        static readonly ENTITY_TAG_BLOCKPOS: ("blockPos") & (string);
        static readonly BLOCK_TAG_STATE: ("state") & (string);
        static readonly PALETTE_TAG: ("palette") & (string);
        static readonly ENTITIES_TAG: ("entities") & (string);
        readonly entityInfoList: Internal.List<Internal.StructureTemplate$StructureEntityInfo>;
        static readonly PALETTE_LIST_TAG: ("palettes") & (string);
        static readonly ENTITY_TAG_NBT: ("nbt") & (string);
        static readonly BLOCK_TAG_NBT: ("nbt") & (string);
        static readonly SIZE_TAG: ("size") & (string);
        readonly palettes: Internal.List<Internal.StructureTemplate$Palette>;
    }
    type StructureTemplate_ = StructureTemplate;
    class BiomeSpecialEffects {
        getWaterColor(): number;
        getClass(): typeof any;
        getGrassColorModifier(): Internal.BiomeSpecialEffects$GrassColorModifier;
        toString(): string;
        getAmbientLoopSoundEvent(): Internal.Optional<Internal.Holder<Internal.SoundEvent>>;
        notifyAll(): void;
        getFoliageColorOverride(): Internal.Optional<number>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getAmbientAdditionsSettings(): Internal.Optional<Internal.AmbientAdditionsSettings>;
        getAmbientParticleSettings(): Internal.Optional<Internal.AmbientParticleSettings>;
        hashCode(): number;
        getBackgroundMusic(): Internal.Optional<Internal.Music>;
        getWaterFogColor(): number;
        wait(): void;
        getGrassColorOverride(): Internal.Optional<number>;
        wait(arg0: number): void;
        getFogColor(): number;
        equals(arg0: any): boolean;
        getSkyColor(): number;
        getAmbientMoodSettings(): Internal.Optional<Internal.AmbientMoodSettings>;
        get waterColor(): number
        get class(): typeof any
        get grassColorModifier(): Internal.BiomeSpecialEffects$GrassColorModifier
        get ambientLoopSoundEvent(): Internal.Optional<Internal.Holder<Internal.SoundEvent>>
        get foliageColorOverride(): Internal.Optional<number>
        get ambientAdditionsSettings(): Internal.Optional<Internal.AmbientAdditionsSettings>
        get ambientParticleSettings(): Internal.Optional<Internal.AmbientParticleSettings>
        get backgroundMusic(): Internal.Optional<Internal.Music>
        get waterFogColor(): number
        get grassColorOverride(): Internal.Optional<number>
        get fogColor(): number
        get skyColor(): number
        get ambientMoodSettings(): Internal.Optional<Internal.AmbientMoodSettings>
        ambientParticleSettings: Internal.Optional<Internal.AmbientParticleSettings>;
        grassColorOverride: Internal.Optional<number>;
        ambientMoodSettings: Internal.Optional<Internal.AmbientMoodSettings>;
        waterColor: number;
        ambientLoopSoundEvent: Internal.Optional<Internal.Holder<Internal.SoundEvent>>;
        fogColor: number;
        ambientAdditionsSettings: Internal.Optional<Internal.AmbientAdditionsSettings>;
        backgroundMusic: Internal.Optional<Internal.Music>;
        grassColorModifier: Internal.BiomeSpecialEffects$GrassColorModifier;
        waterFogColor: number;
        static readonly CODEC: Internal.Codec<Internal.BiomeSpecialEffects>;
        foliageColorOverride: Internal.Optional<number>;
        skyColor: number;
    }
    type BiomeSpecialEffects_ = BiomeSpecialEffects;
    class RenderTypeGroup extends Internal.Record {
        constructor(arg0: Internal.RenderType_, arg1: Internal.RenderType_)
        constructor(block: Internal.RenderType_, entity: Internal.RenderType_, entityFabulous: Internal.RenderType_)
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        isEmpty(): boolean;
        notify(): void;
        block(): Internal.RenderType;
        wait(arg0: number, arg1: number): void;
        entityFabulous(): Internal.RenderType;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        entity(): Internal.RenderType;
        get class(): typeof any
        get empty(): boolean
        static EMPTY: (Internal.RenderTypeGroup) & (Internal.RenderTypeGroup);
    }
    type RenderTypeGroup_ = RenderTypeGroup;
    class FilteredText extends Internal.Record {
        constructor(arg0: string, arg1: Internal.FilterMask_)
        static passThrough(arg0: string): Internal.FilteredText;
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        static fullyFiltered(arg0: string): Internal.FilteredText;
        filteredOrEmpty(): string;
        notify(): void;
        mask(): Internal.FilterMask;
        filtered(): string;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        wait(): void;
        raw(): string;
        wait(arg0: number): void;
        isFiltered(): boolean;
        equals(arg0: any): boolean;
        get class(): typeof any
        get filtered(): boolean
        static readonly EMPTY: (Internal.FilteredText) & (Internal.FilteredText);
    }
    type FilteredText_ = FilteredText;
    interface ClassGroupFilterableList <T> {
        abstract getAllOfGroupType(arg0: Internal.EntityClassGroup_): Internal.Collection<T>;
        (arg0: Internal.EntityClassGroup): Internal.Collection_<T>;
    }
    type ClassGroupFilterableList_<T> = ClassGroupFilterableList<T> | ((arg0: Internal.EntityClassGroup)=> Internal.Collection_<T>);
    class AzaleaBlock extends Internal.BushBlock implements Internal.BonemealableBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        performBonemeal(arg0: Internal.ServerLevel_, arg1: Internal.RandomSource_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        getPlant(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.BlockState;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        isBonemealSuccess(arg0: Internal.Level_, arg1: Internal.RandomSource_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        handler$zmd000$onUse(state: Internal.BlockState_, world: Internal.Level_, pos: BlockPos_, player: Internal.Player_, hand: Internal.InteractionHand_, hit: Internal.BlockHitResult_, cir: Internal.CallbackInfoReturnable_<any>): void;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        isValidBonemealTarget(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: boolean): boolean;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        getPlantType(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.PlantType;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
    }
    type AzaleaBlock_ = AzaleaBlock;
    interface IVecOrigin {
        abstract offXLast(): number;
        "transformPointToFakeWorld(org.joml.Vector3d)"(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract rotY(): number;
        transformPointToWorld(arg0: team.creative.creativecore.common.util.math.vec.Vec3d_): void;
        abstract rotXLast(): number;
        abstract offY(arg0: number): void;
        abstract rotY(arg0: number): void;
        "transformPointToWorld(net.minecraft.core.BlockPos)"(arg0: BlockPos_): BlockPos;
        transformPointToFakeWorld(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract rot(arg0: number, arg1: number, arg2: number): void;
        abstract offY(): number;
        getOBB(arg0: Internal.ABB_): Internal.ABB;
        abstract center(): team.creative.creativecore.common.util.math.vec.Vec3d;
        abstract copy(): this;
        transformPointToWorld(arg0: BlockPos_): BlockPos;
        "transformPointToFakeWorld(team.creative.creativecore.common.util.math.vec.Vec3d)"(arg0: team.creative.creativecore.common.util.math.vec.Vec3d_): void;
        abstract translation(): team.creative.creativecore.common.util.math.vec.Vec3d;
        hasChanged(): boolean;
        translationCombined(arg0: Internal.Axis_): number;
        transformPointToFakeWorld(arg0: team.creative.creativecore.common.util.math.vec.Vec3d_): void;
        abstract tick(): void;
        abstract rotYLast(): number;
        transformPointToWorld(arg0: Vec3d_): Vec3d;
        abstract getParent(): this;
        "transformPointToFakeWorld(net.minecraft.core.BlockPos)"(arg0: BlockPos_): BlockPos;
        set(arg0: Internal.IVecOrigin_): void;
        "transformPointToWorld(net.minecraft.world.phys.Vec3)"(arg0: Vec3d_): Vec3d;
        getOBB(arg0: Internal.AABB_): Internal.ABB;
        onlyRotateWithoutCenter(arg0: team.creative.creativecore.common.util.math.vec.Vec3d_): void;
        abstract rotZ(): number;
        "transformPointToFakeWorld(net.minecraft.world.phys.Vec3)"(arg0: Vec3d_): Vec3d;
        getAABB(arg0: Internal.AABB_): Internal.ABB;
        abstract offZ(arg0: number): void;
        abstract rotZLast(): number;
        abstract offX(arg0: number): void;
        abstract rotZ(arg0: number): void;
        abstract rotX(arg0: number): void;
        setupRendering(arg0: Internal.PoseStack_, arg1: number, arg2: number, arg3: number, arg4: number): void;
        abstract off(arg0: number, arg1: number, arg2: number): void;
        getAABB(arg0: Internal.ABB_): Internal.ABB;
        abstract offZLast(): number;
        "transformPointToWorld(team.creative.creativecore.common.util.math.vec.Vec3d)"(arg0: team.creative.creativecore.common.util.math.vec.Vec3d_): void;
        abstract offZ(): number;
        abstract rotationInv(): team.creative.creativecore.common.util.math.matrix.Matrix3;
        abstract offX(): number;
        abstract rotation(): team.creative.creativecore.common.util.math.matrix.Matrix3;
        abstract rotX(): number;
        setupRenderingInternal(arg0: Internal.PoseStack_, arg1: number, arg2: number, arg3: number, arg4: number): void;
        "getOBB(team.creative.creativecore.common.util.math.box.ABB)"(arg0: Internal.ABB_): Internal.ABB;
        "getOBB(net.minecraft.world.phys.AABB)"(arg0: Internal.AABB_): Internal.ABB;
        transformPointToFakeWorld(arg0: BlockPos_): BlockPos;
        "getAABB(team.creative.creativecore.common.util.math.box.ABB)"(arg0: Internal.ABB_): Internal.ABB;
        transformPointToWorld(arg0: Internal.Vector3d_): Internal.Vector3d;
        transformPointToFakeWorld(arg0: Vec3d_): Vec3d;
        "transformPointToWorld(org.joml.Vector3d)"(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract setCenter(arg0: team.creative.creativecore.common.util.math.vec.Vec3d_): void;
        abstract isRotated(): boolean;
        abstract offYLast(): number;
        "getAABB(net.minecraft.world.phys.AABB)"(arg0: Internal.AABB_): Internal.ABB;
        get parent(): Internal.IVecOrigin
        set center(arg0: team.creative.creativecore.common.util.math.vec.Vec3d_)
        get rotated(): boolean
    }
    type IVecOrigin_ = IVecOrigin;
    abstract class BaseEntityBlock extends Internal.Block implements Internal.EntityBlock {
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        abstract newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        getTicker<T extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<T>): Internal.BlockEntityTicker<T>;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        handler$zmd000$onUse(state: Internal.BlockState_, world: Internal.Level_, pos: BlockPos_, player: Internal.Player_, hand: Internal.InteractionHand_, hit: Internal.BlockHitResult_, cir: Internal.CallbackInfoReturnable_<any>): void;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        /**
         * @deprecated
        */
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
    }
    type BaseEntityBlock_ = BaseEntityBlock;
    class BorderStatus extends Internal.Enum<Internal.BorderStatus> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        compareTo(arg0: Internal.BorderStatus_): number;
        toString(): string;
        notifyAll(): void;
        getDeclaringClass(): typeof Internal.BorderStatus;
        static valueOf(arg0: string): Internal.BorderStatus;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        name(): string;
        getColor(): number;
        hashCode(): number;
        ordinal(): number;
        wait(): void;
        "compareTo(net.minecraft.world.level.border.BorderStatus)"(arg0: Internal.BorderStatus_): number;
        wait(arg0: number): void;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.BorderStatus>>;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        static values(): Internal.BorderStatus[];
        get class(): typeof any
        get declaringClass(): typeof Internal.BorderStatus
        get color(): number
        static readonly STATIONARY: (Internal.BorderStatus) & (Internal.BorderStatus);
        static readonly SHRINKING: (Internal.BorderStatus) & (Internal.BorderStatus);
        static readonly GROWING: (Internal.BorderStatus) & (Internal.BorderStatus);
    }
    type BorderStatus_ = "shrinking" | "stationary" | BorderStatus | "growing";
    class TwistingVinesFeature extends Feature<Internal.TwistingVinesConfig> {
        constructor(arg0: Internal.Codec_<Internal.TwistingVinesConfig>)
        getClass(): typeof any;
        toString(): string;
        static checkNeighbors(arg0: Internal.Function_<BlockPos, Internal.BlockState>, arg1: BlockPos_, arg2: Internal.Predicate_<Internal.BlockState>): boolean;
        notifyAll(): void;
        notify(): void;
        static isAdjacentToAir(arg0: Internal.Function_<BlockPos, Internal.BlockState>, arg1: BlockPos_): boolean;
        wait(arg0: number, arg1: number): void;
        static placeWeepingVinesColumn(arg0: Internal.LevelAccessor_, arg1: Internal.RandomSource_, arg2: Internal.BlockPos$MutableBlockPos_, arg3: number, arg4: number, arg5: number): void;
        static isGrassOrDirt(arg0: Internal.LevelSimulatedReader_, arg1: BlockPos_): boolean;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        place(arg0: Internal.FeaturePlaceContext_<Internal.TwistingVinesConfig>): boolean;
        configuredCodec(): Internal.Codec<Internal.ConfiguredFeature<Internal.TwistingVinesConfig, Feature<Internal.TwistingVinesConfig>>>;
        static isDirt(arg0: Internal.BlockState_): boolean;
        equals(arg0: any): boolean;
        static isReplaceable(arg0: Internal.TagKey_<Internal.Block>): Internal.Predicate<Internal.BlockState>;
        place(arg0: Internal.TwistingVinesConfig_, arg1: Internal.WorldGenLevel_, arg2: Internal.ChunkGenerator_, arg3: Internal.RandomSource_, arg4: BlockPos_): boolean;
        get class(): typeof any
    }
    type TwistingVinesFeature_ = TwistingVinesFeature;
    abstract class ViewRoot implements Internal.ViewParent, Internal.AttachInfo$Callbacks {
        requestTransitionStart(transition: Internal.LayoutTransition_): void;
        getLayoutDirection(): number;
        getParent(): Internal.ViewParent;
        clearChildFocus(child: icyllis.modernui.view.View_): void;
        focusSearch(focused: icyllis.modernui.view.View_, direction: number): icyllis.modernui.view.View;
        onNestedFling(target: icyllis.modernui.view.View_, velocityX: number, velocityY: number, consumed: boolean): boolean;
        loadSystemProperties(debugLayoutSupplier: Internal.BooleanSupplier_): void;
        requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
        requestChildFocus(child: icyllis.modernui.view.View_, focused: icyllis.modernui.view.View_): void;
        notify(): void;
        static isViewDescendantOf(child: icyllis.modernui.view.View_, parent: icyllis.modernui.view.View_): boolean;
        abstract performHapticFeedback(arg0: number, arg1: boolean): boolean;
        bringChildToFront(child: icyllis.modernui.view.View_): void;
        getView(): icyllis.modernui.view.View;
        requestLayout(): void;
        isLayoutRequested(): boolean;
        focusableViewAvailable(v: icyllis.modernui.view.View_): void;
        createContextMenu(menu: Internal.ContextMenu_): void;
        onNestedPreScroll(target: icyllis.modernui.view.View_, dx: number, dy: number, consumed: number[], type: number): void;
        onNestedScroll(target: icyllis.modernui.view.View_, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number, type: number, consumed: number[]): void;
        startActionModeForChild(originalView: icyllis.modernui.view.View_, callback: Internal.ActionMode$Callback_, type: number): Internal.ActionMode;
        keyboardNavigationClusterSearch(currentCluster: icyllis.modernui.view.View_, direction: number): icyllis.modernui.view.View;
        getTextAlignment(): number;
        onStopNestedScroll(target: icyllis.modernui.view.View_, type: number): void;
        isTextDirectionResolved(): boolean;
        setView(view: icyllis.modernui.view.View_): void;
        dispatchInvalidateOnAnimation(view: icyllis.modernui.view.View_): void;
        wait(): void;
        canResolveTextAlignment(): boolean;
        abstract playSoundEffect(arg0: number): void;
        onStartNestedScroll(child: icyllis.modernui.view.View_, target: icyllis.modernui.view.View_, axes: number, type: number): boolean;
        getClass(): typeof any;
        enqueueInputEvent(event: icyllis.modernui.view.InputEvent_): void;
        childDrawableStateChanged(child: icyllis.modernui.view.View_): void;
        getTextDirection(): number;
        cancelInvalidate(view: icyllis.modernui.view.View_): void;
        onNestedScrollAccepted(child: icyllis.modernui.view.View_, target: icyllis.modernui.view.View_, axes: number, type: number): void;
        wait(arg0: number, arg1: number): void;
        setFrame(width: number, height: number): void;
        dispatchInvalidateDelayed(view: icyllis.modernui.view.View_, delayMilliseconds: number): void;
        getNestedScrollAxes(): number;
        canResolveTextDirection(): boolean;
        showContextMenuForChild(originalView: icyllis.modernui.view.View_, x: number, y: number): boolean;
        canResolveLayoutDirection(): boolean;
        onNestedPreFling(target: icyllis.modernui.view.View_, velocityX: number, velocityY: number): boolean;
        toString(): string;
        notifyAll(): void;
        childHasTransientStateChanged(child: icyllis.modernui.view.View_, hasTransientState: boolean): void;
        isLayoutDirectionResolved(): boolean;
        hashCode(): number;
        requestChildRectangleOnScreen(child: icyllis.modernui.view.View_, rectangle: Internal.Rect_, immediate: boolean): boolean;
        wait(arg0: number): void;
        getChildVisibleRect(child: icyllis.modernui.view.View_, r: Internal.Rect_, offset: icyllis.modernui.graphics.Point_): boolean;
        isTextAlignmentResolved(): boolean;
        equals(arg0: any): boolean;
        get layoutDirection(): number
        get parent(): Internal.ViewParent
        get view(): icyllis.modernui.view.View
        get layoutRequested(): boolean
        get textAlignment(): number
        get textDirectionResolved(): boolean
        set view(view: icyllis.modernui.view.View_)
        get class(): typeof any
        get textDirection(): number
        get nestedScrollAxes(): number
        get layoutDirectionResolved(): boolean
        get textAlignmentResolved(): boolean
        readonly mChoreographer: Internal.Choreographer;
        readonly mHandler: Internal.Handler;
    }
    type ViewRoot_ = ViewRoot;
    interface FileFilter {
        abstract accept(arg0: Internal.File_): boolean;
        (arg0: Internal.File): boolean;
    }
    type FileFilter_ = FileFilter | ((arg0: Internal.File)=> boolean);
    class BaseEntityJS extends Internal.Entity implements Internal.IAnimatableJSNL {
        constructor(builder: Internal.BaseEntityJSBuilder_, pEntityType: Internal.EntityType_<any>, pLevel: Internal.Level_)
        isInWall(): boolean;
        getAllSlots(): Internal.Iterable<Internal.ItemStack>;
        getUpVector(arg0: number): Vec3d;
        gameEvent(arg0: Internal.GameEvent_, arg1: Internal.Entity_): void;
        remove(arg0: Internal.Entity$RemovalReason_): void;
        getMagneticDeltaX(): number;
        isSuppressingBounce(): boolean;
        getBlockZ(): number;
        handler$zla000$toTag(tag: Internal.CompoundTag_, ci: Internal.CallbackInfoReturnable_<any>): void;
        dampensVibrations(): boolean;
        isSilent(): boolean;
        "playSound(net.minecraft.sounds.SoundEvent)"(arg0: Internal.SoundEvent_): void;
        getPitch(): number;
        isOnFire(): boolean;
        rotate(arg0: Internal.Rotation_): number;
        getPositionCodec(): Internal.VecDeltaCodec;
        getPassengersAndSelf(): Internal.Stream<any>;
        handler$ebc000$canFreeze(cir: Internal.CallbackInfoReturnable_<any>): void;
        setMagneticAttachmentFace(arg0: Internal.Direction_): void;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        fabrication$getKillMessage(): string;
        setMaxUpStep(arg0: number): void;
        /**
         * @deprecated
        */
        updateFluidHeightAndDoFluidPushing(arg0: Internal.TagKey_<Internal.Fluid>, arg1: number): boolean;
        handler$ebc000$isFreezing(cir: Internal.CallbackInfoReturnable_<any>): void;
        runCommandSilent(command: string): number;
        setPosition(x: number, y: number, z: number): void;
        chunkPosition(): Internal.ChunkPos;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        handler$ebc000$isPushable(cir: Internal.CallbackInfoReturnable_<any>): void;
        handler$dke000$ac_collide(arg0: Vec3d_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        gameEvent(arg0: Internal.GameEvent_): void;
        handler$ebc001$setSprinting(pSprinting: boolean, ci: Internal.CallbackInfo_): void;
        alwaysAccepts(): boolean;
        neruina$getTickingEntryId(): Internal.UUID;
        isShiftKeyDown(): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        setUUID(arg0: Internal.UUID_): void;
        getPrevMagneticAttachmentFace(): Internal.Direction;
        checkBelowWorld(): void;
        isVisuallyCrawling(): boolean;
        shouldUpdateFluidWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        setMotionZ(z: number): void;
        handler$ebc001$move(pType: Internal.MoverType_, pPos: Vec3d_, ci: Internal.CallbackInfo_): void;
        getAttachmentProgress(arg0: number): number;
        handler$bfk000$hasCustomNameAndIsVisible(ci: Internal.CallbackInfoReturnable_<any>): void;
        handler$dke000$ac_getEyePosition(arg0: Internal.CallbackInfoReturnable_<any>): void;
        neruina$clearErrored(): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        canFreeze(): boolean;
        ignoreExplosion(): boolean;
        teleportRelative(arg0: number, arg1: number, arg2: number): void;
        getBlockY(): number;
        isSpectator(): boolean;
        isInWaterOrBubble(): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        updateFluidHeightAndDoFluidPushing(): void;
        spawnAtLocation(arg0: Internal.ItemLike_, arg1: number): Internal.ItemEntity;
        getPersistentData(): Internal.CompoundTag;
        getPortalCooldown(): number;
        handler$zmo000$playSound(event: Internal.SoundEvent_, f: number, f2: number, ci: Internal.CallbackInfo_): void;
        getItem(): Internal.ItemStack;
        causeFallDamage(distance: number, damageMultiplier: number, damageSource: Internal.DamageSource_): boolean;
        getRandomZ(arg0: number): number;
        getPosition(arg0: number): Vec3d;
        setRemoved(arg0: Internal.Entity$RemovalReason_): void;
        isInWaterRainOrBubble(): boolean;
        getDistanceSq(arg0: number, arg1: number, arg2: number): number;
        handler$ebc000$canChangeDimensions(cir: Internal.CallbackInfoReturnable_<any>): void;
        getRemovalReason(): Internal.Entity$RemovalReason;
        wait(arg0: number): void;
        isIgnoringBlockTriggers(): boolean;
        getHandHoldingItemAngle(arg0: Internal.Item_): Vec3d;
        neruina$setTickingEntryId(uuid: Internal.UUID_): void;
        canUpdate(arg0: boolean): void;
        getEyeInFluidType(): Internal.FluidType;
        distanceToSqr(arg0: Vec3d_): number;
        resetFallDistance(): void;
        canSprint(): boolean;
        blockPosition(): BlockPos;
        isSteppingCarefully(): boolean;
        setBoundingBox(arg0: Internal.AABB_): void;
        isAmbientCreature(): boolean;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        "spawnAtLocation(net.minecraft.world.item.ItemStack,float)"(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        /**
         * @deprecated
        */
        getLightLevelDependentMagicValue(): number;
        getBlockX(): number;
        getEncodeId(): string;
        triggerAnim<D>(relatedEntity: Internal.Entity_, instanceId: number, controllerName: string, animName: string): void;
        getY(arg0: number): number;
        canaryOnBlockCacheDeleted(): void;
        getBlock(): Internal.BlockContainerJS;
        getNbt(): Internal.CompoundTag;
        setInvisible(arg0: boolean): void;
        invalidateCaps(): void;
        getName(): net.minecraft.network.chat.Component;
        animatableCacheOverride(): Internal.AnimatableInstanceCache;
        onGround(): boolean;
        getControlledVehicle(): Internal.Entity;
        isOnSameTeam(arg0: Internal.Entity_): boolean;
        attack(pSource: Internal.DamageSource_, pAmount: number): boolean;
        onInsideBubbleColumn(arg0: boolean): void;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        tick(): void;
        getEyePosition(): Vec3d;
        setDimension(arg0: Internal.EntityDimensions_): void;
        getEyeHeight(): number;
        hasPassenger(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        getYaw(): number;
        handler$ebc000$thunderHit(pLevel: Internal.ServerLevel_, pLightning: Internal.LightningBolt_, ci: Internal.CallbackInfo_): void;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        handler$ebc000$lavaHurt(ci: Internal.CallbackInfo_): void;
        hasPermissions(arg0: number): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        handler$egj000$isInsideWall(arg0: Internal.CallbackInfoReturnable_<any>, arg1: number, arg2: Internal.AABB_): void;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        setCustomNameVisible(arg0: boolean): void;
        isAlliedTo(arg0: Internal.Team_): boolean;
        getBoneResetTime(): number;
        getControllingPassenger(): Internal.LivingEntity;
        getRemainingFireTicks(): number;
        getScriptType(): Internal.ScriptType;
        onlyOpCanSetNbt(): boolean;
        startRiding(arg0: Internal.Entity_): boolean;
        saveWithoutId(arg0: Internal.CompoundTag_): Internal.CompoundTag;
        getForward(): Vec3d;
        handler$bcn001$baseTick(ci: Internal.CallbackInfo_): void;
        serializeNBT(): Internal.Tag;
        fireImmune(): boolean;
        addMotion(arg0: number, arg1: number, arg2: number): void;
        getMaxFallDistance(): number;
        getZ(arg0: number): number;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        getId(): number;
        canBeHitByProjectile(): boolean;
        postMagnetJump(): void;
        getTicksFrozen(): number;
        getRandomX(arg0: number): number;
        getEyeY(): number;
        spawnAtLocation(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        pick(arg0: number, arg1: number, arg2: boolean): Internal.HitResult;
        handler$ebc000$stopRiding(ci: Internal.CallbackInfo_): void;
        setStatusMessage(message: net.minecraft.network.chat.Component_): void;
        getBoundingBox(): Internal.AABB;
        isInWaterOrRain(): boolean;
        isDescending(): boolean;
        setItemSlot(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): void;
        getYHeadRot(): number;
        equals(arg0: any): boolean;
        getViewYRot(arg0: number): number;
        dismountsUnderwater(): boolean;
        handler$cpe000$l2library_overrideClientGlow_isCurrentlyGlowing(arg0: Internal.CallbackInfoReturnable_<any>): void;
        playerTouch(player: Internal.Player_): void;
        addTag(arg0: string): boolean;
        getEyeHeight(arg0: Internal.Pose_): number;
        getAddEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>;
        syncPacketPositionCodec(arg0: number, arg1: number, arg2: number): void;
        getTeam(): Internal.Team;
        shouldRenderAtSqrDistance(distance: number): boolean;
        handler$dke000$ac_onSyncedDataUpdated(arg0: Internal.EntityDataAccessor_<any>, arg1: Internal.CallbackInfo_): void;
        damageSources(): Internal.DamageSources;
        setTicksFrozen(arg0: number): void;
        recreateFromPacket(arg0: Internal.ClientboundAddEntityPacket_): void;
        getMyRidingOffset(): number;
        canStartSwimming(): boolean;
        dismountTo(arg0: number, arg1: number, arg2: number): void;
        setDeltaMovement(arg0: Vec3d_): void;
        fabrication$setNoGravityReversible(reversible: boolean): void;
        getLeashOffset(arg0: number): Vec3d;
        hasCustomName(): boolean;
        isLiving(): boolean;
        isGlowing(): boolean;
        getX(): number;
        "isInFluidType(net.minecraft.world.level.material.FluidState)"(arg0: Internal.FluidState_): boolean;
        isVehicle(): boolean;
        stepOnMagnetBlock(arg0: BlockPos_): void;
        getLeashOffset(): Vec3d;
        isAttackable(): boolean;
        handler$ebc000$playerTouch(pPlayer: Internal.Player_, ci: Internal.CallbackInfo_): void;
        spawnAtLocation(arg0: Internal.ItemStack_): Internal.ItemEntity;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        thunderHit(p_19927_: Internal.ServerLevel_, p_19928_: Internal.LightningBolt_): void;
        setIsInPowderSnow(arg0: boolean): void;
        doEnchantDamageEffects(arg0: Internal.LivingEntity_, arg1: Internal.Entity_): void;
        setCustomName(arg0: net.minecraft.network.chat.Component_): void;
        getSlot(arg0: number): Internal.SlotAccess;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        getTeamId(): string;
        stopSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        isUnderWater(): boolean;
        handler$ebc000$isAttackable(cir: Internal.CallbackInfoReturnable_<any>): void;
        stopRiding(): void;
        getSwimHighSpeedSplashSound(): Internal.SoundEvent;
        isCustomNameVisible(): boolean;
        isSupportedBy(arg0: BlockPos_): boolean;
        getPistonPushReaction(): Internal.PushReaction;
        getX(arg0: number): number;
        shouldPlayAnimsWhileGamePaused(): boolean;
        shouldRiderSit(): boolean;
        lookAt(arg0: Internal.EntityAnchorArgument$Anchor_, arg1: Vec3d_): void;
        captureDrops(arg0: Internal.Collection_<Internal.ItemEntity>): Internal.Collection<Internal.ItemEntity>;
        getSelfAndPassengers(): Internal.Stream<any>;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        getDeltaMovement(): Vec3d;
        isInFluidType(arg0: Internal.FluidType_): boolean;
        collide(arg0: Vec3d_): Vec3d;
        getFluidMotionScale(arg0: Internal.FluidType_): number;
        getMotionX(): number;
        "onSyncedDataUpdated(java.util.List)"(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        hasPassenger(arg0: Internal.Entity_): boolean;
        hasIndirectPassenger(arg0: Internal.Entity_): boolean;
        getEntityData(): Internal.SynchedEntityData;
        handler$zla000$baseTick(ci: Internal.CallbackInfo_): void;
        setSecondsOnFire(arg0: number): void;
        moveTo(arg0: number, arg1: number, arg2: number): void;
        "getDisplayName()"(): net.minecraft.network.chat.Component;
        handleInsidePortal(arg0: BlockPos_): void;
        create$callSetLevel(arg0: Internal.Level_): void;
        setMotion(arg0: number, arg1: number, arg2: number): void;
        playSound(arg0: Internal.SoundEvent_): void;
        absMoveTo(arg0: number, arg1: number, arg2: number): void;
        updateFluidHeightAndDoFluidPushing(arg0: Internal.Predicate_<Internal.FluidState>): void;
        isOnRails(): boolean;
        restoreFrom(arg0: Internal.Entity_): void;
        getDimensionChangingDelay(): number;
        isPeacefulCreature(): boolean;
        setOnGround(arg0: boolean): void;
        handler$bhe001$fromTag(tag: Internal.CompoundTag_, ci: Internal.CallbackInfo_): void;
        setYaw(arg0: number): void;
        setPos(arg0: number, arg1: number, arg2: number): void;
        handler$ebc000$getMyRidingOffset(cir: Internal.CallbackInfoReturnable_<any>): void;
        getPickRadius(): number;
        notify(): void;
        getFirstTick(): boolean;
        getVehicle(): Internal.Entity;
        isEffectiveAi(): boolean;
        startRiding(arg0: Internal.Entity_, arg1: boolean): boolean;
        getStringUuid(): string;
        handler$ebc000$getControllingPassenger(cir: Internal.CallbackInfoReturnable_<any>): void;
        isRemoved(): boolean;
        setSwimming(arg0: boolean): void;
        handler$ebc001$isInvulnerableTo(pSource: Internal.DamageSource_, cir: Internal.CallbackInfoReturnable_<any>): void;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        teleportToWithTicket(arg0: number, arg1: number, arg2: number): void;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        getRotationVector(): Internal.Vec2;
        refreshDimensions(): void;
        handler$ebc000$push(pEntity: Internal.Entity_, ci: Internal.CallbackInfo_): void;
        self(): Internal.Entity;
        isSprinting(): boolean;
        handler$dke000$ac_makeBoundingBox(arg0: Internal.CallbackInfoReturnable_<any>): void;
        "spawnAtLocation(net.minecraft.world.level.ItemLike)"(arg0: Internal.ItemLike_): Internal.ItemEntity;
        handler$edi000$mna$playSound(arg0: Internal.SoundEvent_, arg1: number, arg2: number, arg3: Internal.CallbackInfo_): void;
        getMotionY(): number;
        canCollideWith(pEntity: Internal.Entity_): boolean;
        handler$dke001$ac_tick(arg0: Internal.CallbackInfo_): void;
        neruina$isErrored(): boolean;
        setShiftKeyDown(arg0: boolean): void;
        getEyePosition(arg0: number): Vec3d;
        getPassengers(): Internal.EntityArrayList;
        getBlockExplosionResistance(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.FluidState_, arg5: number): number;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        getMaxHeightFluidType(): Internal.FluidType;
        getZ(): number;
        getIsInsidePortal(): boolean;
        canSpawnSprintParticle(): boolean;
        "moveTo(net.minecraft.core.BlockPos,float,float)"(arg0: BlockPos_, arg1: number, arg2: number): void;
        handler$zjk000$move(type: Internal.MoverType_, movement: Vec3d_, ci: Internal.CallbackInfo_): void;
        teleportTo(arg0: number, arg1: number, arg2: number): void;
        getServer(): Internal.MinecraftServer;
        moveRelative(arg0: number, arg1: Vec3d_): void;
        isAddedToWorld(): boolean;
        getFirstPassenger(): Internal.Entity;
        saveAsPassenger(arg0: Internal.CompoundTag_): boolean;
        interact(arg0: Internal.Player_, arg1: Internal.InteractionHand_): Internal.InteractionResult;
        getDismountLocationForPassenger(arg0: Internal.LivingEntity_): Vec3d;
        checkSlowFallDistance(): void;
        setFabricBalmData(arg0: Internal.CompoundTag_): void;
        getSoundSource(): Internal.SoundSource;
        getPose(): Internal.Pose;
        touchingUnloadedChunk(): boolean;
        getLookAngle(): Vec3d;
        setPositionAndRotation(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        handler$bhe001$toTag(tag: Internal.CompoundTag_, ci: Internal.CallbackInfoReturnable_<any>): void;
        entityName(): string;
        getMotionZ(): number;
        removeVehicle(): void;
        isInvisible(): boolean;
        is(arg0: Internal.Entity_): boolean;
        setZ(z: number): void;
        getY(): number;
        ejectPassengers(): void;
        hashCode(): number;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        handler$ebc000$onRemovedFromWorld(ci: Internal.CallbackInfo_): void;
        getProfile(): Internal.GameProfile;
        handler$ebc000$onAddedToWorld(ci: Internal.CallbackInfo_): void;
        static setViewScale(arg0: number): void;
        setLevelCallback(arg0: Internal.EntityInLevelCallback_): void;
        showVehicleHealth(): boolean;
        getDistance(pos: BlockPos_): number;
        playSound(arg0: Internal.SoundEvent_, arg1: number, arg2: number): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        canChangeDirection(): boolean;
        getTick(entity: any): number;
        startSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        isOnScoreboardTeam(teamId: string): boolean;
        /**
         * @deprecated
        */
        isPushedByFluid(): boolean;
        position(): Vec3d;
        displayFireAnimation(): boolean;
        turn(arg0: number, arg1: number): void;
        getAirSupply(): number;
        getRopeHoldPosition(arg0: number): Vec3d;
        copyPosition(arg0: Internal.Entity_): void;
        onAddedToWorld(): void;
        "hasPassenger(net.minecraft.world.entity.Entity)"(arg0: Internal.Entity_): boolean;
        isCrouching(): boolean;
        moveTo(arg0: BlockPos_, arg1: number, arg2: number): void;
        isPlayer(): boolean;
        isAnimal(): boolean;
        getMotionDirection(): Internal.Direction;
        canBeCollidedWith(): boolean;
        setY(y: number): void;
        lavaHurt(): void;
        getFeetBlockState(): Internal.BlockState;
        handleDamageEvent(arg0: Internal.DamageSource_): void;
        handler$bdj000$setSprinting(ci: Internal.CallbackInfo_): void;
        getFabricBalmData(): Internal.CompoundTag;
        canChangeDimensions(): boolean;
        changeDimension(arg0: Internal.ServerLevel_, arg1: Internal.ITeleporter_): Internal.Entity;
        getCommandSenderWorld(): Internal.Level;
        positionRider(arg0: Internal.Entity_): void;
        baseTick(): void;
        broadcastToPlayer(arg0: Internal.ServerPlayer_): boolean;
        changeDimension(arg0: Internal.ServerLevel_): Internal.Entity;
        setSharedFlag(arg0: number, arg1: boolean): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightAccess(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        getCustomName(): net.minecraft.network.chat.Component;
        getClass(): typeof any;
        getMaxAirSupply(): number;
        isVisuallySwimming(): boolean;
        canTrample(state: Internal.BlockState_, pos: BlockPos_, fallDistance: number): boolean;
        attack(hp: number): void;
        neruina$setErrored(): void;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        entityJs$getTypeId(): string;
        getFacing(): Internal.Direction;
        setMagneticDeltaY(arg0: number): void;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>, arg1: boolean): boolean;
        handler$ebc000$getMaxFallDistance(cir: Internal.CallbackInfoReturnable_<any>): void;
        "hasPassenger(java.util.function.Predicate)"(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        getDimensions(arg0: Internal.Pose_): Internal.EntityDimensions;
        fabrication$markWet(): void;
        isPassengerOfSameVehicle(arg0: Internal.Entity_): boolean;
        getBoundingBoxForCulling(): Internal.AABB;
        isSwimming(): boolean;
        mayInteract(p_146843_: Internal.Level_, p_146844_: BlockPos_): boolean;
        setSprinting(sprinting: boolean): void;
        static collideBoundingBox(arg0: Internal.Entity_, arg1: Vec3d_, arg2: Internal.AABB_, arg3: Internal.Level_, arg4: Internal.List_<any>): Vec3d;
        setPortalCooldown(): void;
        setX(x: number): void;
        trackingPosition(): Vec3d;
        setMagneticDeltaX(arg0: number): void;
        getNameTagOffsetY(): number;
        isInvulnerable(): boolean;
        isInLava(): boolean;
        awardKillScore(arg0: Internal.Entity_, arg1: number, arg2: Internal.DamageSource_): void;
        getBlockStateOn(): Internal.BlockState;
        getPortalWaitTime(): number;
        isInWater(): boolean;
        getFluidJumpThreshold(): number;
        handler$ebc000$causeFallDamage(pFallDistance: number, pMultiplier: number, pSource: Internal.DamageSource_, cir: Internal.CallbackInfoReturnable_<any>): void;
        "setPositionAndRotation(double,double,double,float,float)"(x: number, y: number, z: number, yaw: number, pitch: number): void;
        isInvisibleTo(arg0: Internal.Player_): boolean;
        setAirSupply(arg0: number): void;
        getRootVehicle(): Internal.Entity;
        getOnPos(): BlockPos;
        save(arg0: Internal.CompoundTag_): boolean;
        isNoGravity(): boolean;
        getStepHeight(): number;
        getBuilder(): Internal.BaseEntityBuilder<any>;
        acceptsFailure(): boolean;
        setMagneticDeltaZ(arg0: number): void;
        getAnimData<D>(arg0: Internal.SerializableDataTicket_<D>): D;
        setOnGroundWithKnownMovement(arg0: boolean, arg1: Vec3d_): void;
        handler$ebc000$entityJs$tick(ci: Internal.CallbackInfo_): void;
        setOldPosAndRot(): void;
        isFree(arg0: number, arg1: number, arg2: number): boolean;
        updateSwimming(): void;
        handler$ebc000$rideTick(ci: Internal.CallbackInfo_): void;
        "moveTo(double,double,double)"(arg0: number, arg1: number, arg2: number): void;
        handler$ebc000$shouldRenderAtSqrDistance(pDistance: number, cir: Internal.CallbackInfoReturnable_<any>): void;
        setRemainingFireTicks(arg0: number): void;
        getCachedFeetBlockState(): Internal.BlockState;
        shouldInformAdmins(): boolean;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        rideTick(): void;
        /**
         * @deprecated
        */
        getOnPosLegacy(): BlockPos;
        setPos(arg0: Vec3d_): void;
        wait(): void;
        getUuid(): Internal.UUID;
        handler$ebc000$lerpTo(x: number, y: number, z: number, yaw: number, pitch: number, posRotationIncrements: number, teleport: boolean, ci: Internal.CallbackInfo_): void;
        spawn(): void;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        teleportTo(arg0: Internal.ServerLevel_, arg1: number, arg2: number, arg3: number, arg4: Internal.Set_<Internal.RelativeMovement>, arg5: number, arg6: number): boolean;
        shouldShowName(): boolean;
        getArmorSlots(): Internal.Iterable<Internal.ItemStack>;
        setSilent(arg0: boolean): void;
        captureDrops(): Internal.Collection<Internal.ItemEntity>;
        hasExactlyOnePlayerPassenger(): boolean;
        kill(): void;
        getSwimSplashSound(): Internal.SoundEvent;
        isOnPortalCooldown(): boolean;
        animateHurt(arg0: number): void;
        setPitch(arg0: number): void;
        handler$ebc000$isCurrentlyGlowing(cir: Internal.CallbackInfoReturnable_<any>): void;
        isMultipartEntity(): boolean;
        setPosRaw(arg0: number, arg1: number, arg2: number): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getDimensionsForge(arg0: Internal.Pose_): Internal.EntityDimensions;
        handleEntityEvent(arg0: number): void;
        getParts(): Internal.PartEntity<any>[];
        handler$ebc000$mayInteract(pLevel: Internal.Level_, pPos: BlockPos_, cir: Internal.CallbackInfoReturnable_<any>): void;
        isAlwaysTicking(): boolean;
        interactAt(arg0: Internal.Player_, arg1: Vec3d_, arg2: Internal.InteractionHand_): Internal.InteractionResult;
        deserializeNBT(arg0: Internal.Tag_): void;
        handler$zjb000$getLandingPos(cir: Internal.CallbackInfoReturnable_<any>): void;
        lerpTo(x: number, y: number, z: number, yaw: number, pitch: number, posRotationIncrements: number, teleport: boolean): void;
        onPassengerTurned(arg0: Internal.Entity_): void;
        spawnAtLocation(arg0: Internal.ItemLike_): Internal.ItemEntity;
        revive(): void;
        localvar$cch000$fluidCollision(arg0: Vec3d_): Vec3d;
        getBbWidth(): number;
        handler$ebc000$canTrample(state: Internal.BlockState_, pos: BlockPos_, fallDistance: number, cir: Internal.CallbackInfoReturnable_<any>): void;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
        getForgePersistentData(): Internal.CompoundTag;
        addDeltaMovement(arg0: Vec3d_): void;
        handler$zla000$fromTag(tag: Internal.CompoundTag_, ci: Internal.CallbackInfo_): void;
        "spawnAtLocation(net.minecraft.world.level.ItemLike,int)"(arg0: Internal.ItemLike_, arg1: number): Internal.ItemEntity;
        registerControllers(data: Internal.AnimatableManager$ControllerRegistrar_): void;
        setInvulnerable(arg0: boolean): void;
        "getName()"(): net.minecraft.network.chat.Component;
        push(arg0: Internal.Entity_): void;
        isInFluidType(): boolean;
        mirror(arg0: Internal.Mirror_): number;
        canUpdate(): boolean;
        getTicksRequiredToFreeze(): number;
        /**
         * @deprecated
        */
        maxUpStep(): number;
        fabrication$isNoGravityReversible(): boolean;
        setGlowing(arg0: boolean): void;
        load(arg0: Internal.CompoundTag_): void;
        isAlive(): boolean;
        handler$bah000$dontBypassSteppingEffects(cir: Internal.CallbackInfoReturnable_<any>): void;
        handler$bcn000$isWet(ci: Internal.CallbackInfoReturnable_<any>): void;
        getBbHeight(): number;
        canaryOnBlockCacheSet(arg0: Internal.BlockState_): void;
        getUsername(): string;
        move(pType: Internal.MoverType_, pPos: Vec3d_): void;
        getViewVector(arg0: number): Vec3d;
        getTags(): Internal.Set<string>;
        onRemovedFromWorld(): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        isPickable(): boolean;
        setYHeadRot(arg0: number): void;
        hasControllingPassenger(): boolean;
        closerThan(arg0: Internal.Entity_, arg1: number, arg2: number): boolean;
        absMoveTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        handler$bfk000$getCustomName(ci: Internal.CallbackInfoReturnable_<any>): void;
        getPercentFrozen(): number;
        getPickResult(): Internal.ItemStack;
        getRandomY(): number;
        setPortalCooldown(arg0: number): void;
        setAnimData<D>(arg0: Internal.SerializableDataTicket_<D>, arg1: D): void;
        getDisplayName(): net.minecraft.network.chat.Component;
        shouldBlockExplode(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: number): boolean;
        hasGlowingTag(): boolean;
        handler$dke000$ac_isInWater(arg0: Internal.CallbackInfoReturnable_<any>): void;
        setPosition(block: Internal.BlockContainerJS_): void;
        handler$ebc000$dampensVibrations(cir: Internal.CallbackInfoReturnable_<any>): void;
        getAnimatableInstanceCache(): Internal.AnimatableInstanceCache;
        shouldBeSaved(): boolean;
        getFluidTypeHeight(arg0: Internal.FluidType_): number;
        getViewXRot(arg0: number): number;
        canRiderInteract(): boolean;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.Entity>): boolean;
        handler$ebc000$showVehicleHealth(cir: Internal.CallbackInfoReturnable_<any>): void;
        removeTag(arg0: string): boolean;
        setPose(arg0: Internal.Pose_): void;
        /**
         * @deprecated
        */
        getFluidHeight(arg0: Internal.TagKey_<Internal.Fluid>): number;
        abstract getEntityType(): Internal.EntityType<any>;
        isWaterCreature(): boolean;
        toString(): string;
        readCapsFrom(arg0: Internal.CompoundTag_): void;
        getVisualScale(): number;
        notifyAll(): void;
        getPassengersRidingOffset(): number;
        "isInFluidType(java.util.function.BiPredicate)"(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        distanceToEntitySqr(arg0: Internal.Entity_): number;
        handler$ebc000$onClientRemoval(ci: Internal.CallbackInfo_): void;
        "getServer()"(): Internal.MinecraftServer;
        isFrame(): boolean;
        isPushable(): boolean;
        setYBodyRot(arg0: number): void;
        discard(): void;
        onClientRemoval(): void;
        sendSystemMessage(arg0: net.minecraft.network.chat.Component_): void;
        acceptsSuccess(): boolean;
        reviveCaps(): void;
        getDistance(x: number, y: number, z: number): number;
        setMotionY(y: number): void;
        setNoGravity(arg0: boolean): void;
        getIndirectPassengers(): Internal.Iterable<any>;
        setRotation(yaw: number, pitch: number): void;
        triggerAnim(controllerName: string, animName: string): void;
        getMagneticDeltaZ(): number;
        createCommandSourceStack(): Internal.CommandSourceStack;
        isControlledByLocalInstance(): boolean;
        isMonster(): boolean;
        handler$dke000$ac_turn(arg0: number, arg1: number, arg2: Internal.CallbackInfo_): void;
        onSyncedDataUpdated(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        setId(arg0: number): void;
        getHorizontalFacing(): Internal.Direction;
        getType(): string;
        getLightProbePosition(arg0: number): Vec3d;
        setVisualScale(arg0: number): void;
        onAboveBubbleCol(arg0: boolean): void;
        "playSound(net.minecraft.sounds.SoundEvent,float,float)"(arg0: Internal.SoundEvent_, arg1: number, arg2: number): void;
        isPassenger(): boolean;
        hasPose(arg0: Internal.Pose_): boolean;
        checkDespawn(): void;
        isInvulnerableTo(p_20122_: Internal.DamageSource_): boolean;
        makeStuckInBlock(arg0: Internal.BlockState_, arg1: Vec3d_): void;
        /**
         * @deprecated
        */
        isEyeInFluid(arg0: Internal.TagKey_<Internal.Fluid>): boolean;
        skipAttackInteraction(arg0: Internal.Entity_): boolean;
        lerpMotion(arg0: number, arg1: number, arg2: number): void;
        shouldRender(arg0: number, arg1: number, arg2: number): boolean;
        getMagneticAttachmentFace(): Internal.Direction;
        onSyncedDataUpdated(arg0: Internal.EntityDataAccessor_<any>): void;
        lerpHeadTo(arg0: number, arg1: number): void;
        fabrication$isInvisibilityReversible(): boolean;
        static getViewScale(): number;
        fabrication$setActualBypassesStepOn(): void;
        setMotionX(x: number): void;
        getHandSlots(): Internal.Iterable<Internal.ItemStack>;
        distanceToEntity(arg0: Internal.Entity_): number;
        canarySetClimbingMobCachingSectionUpdateBehavior(arg0: boolean): void;
        getVisualRotationYInDegrees(): number;
        getMagneticDeltaY(): number;
        wait(arg0: number, arg1: number): void;
        isDiscrete(): boolean;
        getTeamColor(): number;
        setNbt(nbt: Internal.CompoundTag_): void;
        unRide(): void;
        getLevel(): Internal.Level;
        "spawnAtLocation(net.minecraft.world.item.ItemStack)"(arg0: Internal.ItemStack_): Internal.ItemEntity;
        "isInFluidType(net.minecraftforge.fluids.FluidType)"(arg0: Internal.FluidType_): boolean;
        handler$dke000$ac_getEyePosition_lerp(arg0: number, arg1: Internal.CallbackInfoReturnable_<any>): void;
        extinguish(): void;
        updateDynamicGameEventListener(arg0: Internal.BiConsumer_<Internal.DynamicGameEventListener<any>, Internal.ServerLevel>): void;
        moveTo(arg0: Vec3d_): void;
        isColliding(arg0: BlockPos_, arg1: Internal.BlockState_): boolean;
        handler$ebc000$canCollideWith(pEntity: Internal.Entity_, cir: Internal.CallbackInfoReturnable_<any>): void;
        "onSyncedDataUpdated(net.minecraft.network.syncher.EntityDataAccessor)"(arg0: Internal.EntityDataAccessor_<any>): void;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.Entity>): boolean;
        extinguishFire(): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightForge(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        handler$edi000$mna$canEnterPose(arg0: Internal.Pose_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        tell(message: net.minecraft.network.chat.Component_): void;
        fabrication$setInvisibilityReversible(reversible: boolean): void;
        closerThan(arg0: Internal.Entity_, arg1: number): boolean;
        getTypeId(): string;
        getDistanceSq(pos: BlockPos_): number;
        killedEntity(arg0: Internal.ServerLevel_, arg1: Internal.LivingEntity_): boolean;
        getClassification(arg0: boolean): Internal.MobCategory;
        isFreezing(): boolean;
        isFullyFrozen(): boolean;
        runCommand(command: string): number;
        setSharedFlagOnFire(arg0: boolean): void;
        get inWall(): boolean
        get allSlots(): Internal.Iterable<Internal.ItemStack>
        get magneticDeltaX(): number
        get suppressingBounce(): boolean
        get blockZ(): number
        get silent(): boolean
        get pitch(): number
        get onFire(): boolean
        get positionCodec(): Internal.VecDeltaCodec
        get passengersAndSelf(): Internal.Stream<any>
        set magneticAttachmentFace(arg0: Internal.Direction_)
        set maxUpStep(arg0: number)
        get shiftKeyDown(): boolean
        set UUID(arg0: Internal.UUID_)
        get prevMagneticAttachmentFace(): Internal.Direction
        get visuallyCrawling(): boolean
        set motionZ(z: number)
        get blockY(): number
        get spectator(): boolean
        get inWaterOrBubble(): boolean
        get persistentData(): Internal.CompoundTag
        get portalCooldown(): number
        get item(): Internal.ItemStack
        set removed(arg0: Internal.Entity$RemovalReason_)
        get inWaterRainOrBubble(): boolean
        get removalReason(): Internal.Entity$RemovalReason
        get ignoringBlockTriggers(): boolean
        get eyeInFluidType(): Internal.FluidType
        get steppingCarefully(): boolean
        set boundingBox(arg0: Internal.AABB_)
        get ambientCreature(): boolean
        /**
         * @deprecated
        */
        get lightLevelDependentMagicValue(): number
        get blockX(): number
        get encodeId(): string
        get block(): Internal.BlockContainerJS
        get nbt(): Internal.CompoundTag
        set invisible(arg0: boolean)
        get name(): net.minecraft.network.chat.Component
        get controlledVehicle(): Internal.Entity
        get eyePosition(): Vec3d
        set dimension(arg0: Internal.EntityDimensions_)
        get eyeHeight(): number
        get yaw(): number
        set customNameVisible(arg0: boolean)
        get boneResetTime(): number
        get controllingPassenger(): Internal.LivingEntity
        get remainingFireTicks(): number
        get scriptType(): Internal.ScriptType
        get forward(): Vec3d
        get maxFallDistance(): number
        get id(): number
        get ticksFrozen(): number
        get eyeY(): number
        set statusMessage(message: net.minecraft.network.chat.Component_)
        get boundingBox(): Internal.AABB
        get inWaterOrRain(): boolean
        get descending(): boolean
        get YHeadRot(): number
        get addEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>
        get team(): Internal.Team
        set ticksFrozen(arg0: number)
        get myRidingOffset(): number
        set deltaMovement(arg0: Vec3d_)
        get living(): boolean
        get glowing(): boolean
        get x(): number
        get vehicle(): boolean
        get leashOffset(): Vec3d
        get attackable(): boolean
        set isInPowderSnow(arg0: boolean)
        set customName(arg0: net.minecraft.network.chat.Component_)
        get teamId(): string
        get underWater(): boolean
        get swimHighSpeedSplashSound(): Internal.SoundEvent
        get customNameVisible(): boolean
        get pistonPushReaction(): Internal.PushReaction
        get selfAndPassengers(): Internal.Stream<any>
        get deltaMovement(): Vec3d
        get motionX(): number
        get entityData(): Internal.SynchedEntityData
        set secondsOnFire(arg0: number)
        get "displayName()"(): net.minecraft.network.chat.Component
        get onRails(): boolean
        get dimensionChangingDelay(): number
        get peacefulCreature(): boolean
        set onGround(arg0: boolean)
        set yaw(arg0: number)
        get pickRadius(): number
        get firstTick(): boolean
        get vehicle(): Internal.Entity
        get effectiveAi(): boolean
        get stringUuid(): string
        get removed(): boolean
        set swimming(arg0: boolean)
        get rotationVector(): Internal.Vec2
        get sprinting(): boolean
        get motionY(): number
        set shiftKeyDown(arg0: boolean)
        get passengers(): Internal.EntityArrayList
        get maxHeightFluidType(): Internal.FluidType
        get z(): number
        get isInsidePortal(): boolean
        get server(): Internal.MinecraftServer
        get addedToWorld(): boolean
        get firstPassenger(): Internal.Entity
        set fabricBalmData(arg0: Internal.CompoundTag_)
        get soundSource(): Internal.SoundSource
        get pose(): Internal.Pose
        get lookAngle(): Vec3d
        get motionZ(): number
        get invisible(): boolean
        set z(z: number)
        get y(): number
        get profile(): Internal.GameProfile
        set viewScale(arg0: number)
        set levelCallback(arg0: Internal.EntityInLevelCallback_)
        /**
         * @deprecated
        */
        get pushedByFluid(): boolean
        get airSupply(): number
        get crouching(): boolean
        get player(): boolean
        get animal(): boolean
        get motionDirection(): Internal.Direction
        set y(y: number)
        get feetBlockState(): Internal.BlockState
        get fabricBalmData(): Internal.CompoundTag
        get commandSenderWorld(): Internal.Level
        get customName(): net.minecraft.network.chat.Component
        get class(): typeof any
        get maxAirSupply(): number
        get visuallySwimming(): boolean
        get facing(): Internal.Direction
        set magneticDeltaY(arg0: number)
        get boundingBoxForCulling(): Internal.AABB
        get swimming(): boolean
        set sprinting(sprinting: boolean)
        set x(x: number)
        set magneticDeltaX(arg0: number)
        get nameTagOffsetY(): number
        get invulnerable(): boolean
        get inLava(): boolean
        get blockStateOn(): Internal.BlockState
        get portalWaitTime(): number
        get inWater(): boolean
        get fluidJumpThreshold(): number
        set airSupply(arg0: number)
        get rootVehicle(): Internal.Entity
        get onPos(): BlockPos
        get noGravity(): boolean
        get stepHeight(): number
        get builder(): Internal.BaseEntityBuilder<any>
        set magneticDeltaZ(arg0: number)
        set remainingFireTicks(arg0: number)
        get cachedFeetBlockState(): Internal.BlockState
        /**
         * @deprecated
        */
        get onPosLegacy(): BlockPos
        set pos(arg0: Vec3d_)
        get uuid(): Internal.UUID
        get armorSlots(): Internal.Iterable<Internal.ItemStack>
        set silent(arg0: boolean)
        get swimSplashSound(): Internal.SoundEvent
        get onPortalCooldown(): boolean
        set pitch(arg0: number)
        get multipartEntity(): boolean
        get parts(): Internal.PartEntity<any>[]
        get alwaysTicking(): boolean
        get bbWidth(): number
        get forgePersistentData(): Internal.CompoundTag
        set invulnerable(arg0: boolean)
        get "name()"(): net.minecraft.network.chat.Component
        get inFluidType(): boolean
        get ticksRequiredToFreeze(): number
        set glowing(arg0: boolean)
        get alive(): boolean
        get bbHeight(): number
        get username(): string
        get tags(): Internal.Set<string>
        get pickable(): boolean
        set YHeadRot(arg0: number)
        get percentFrozen(): number
        get pickResult(): Internal.ItemStack
        get randomY(): number
        set portalCooldown(arg0: number)
        get displayName(): net.minecraft.network.chat.Component
        set position(block: Internal.BlockContainerJS_)
        get animatableInstanceCache(): Internal.AnimatableInstanceCache
        set pose(arg0: Internal.Pose_)
        get entityType(): Internal.EntityType<any>
        get waterCreature(): boolean
        get visualScale(): number
        get passengersRidingOffset(): number
        get "server()"(): Internal.MinecraftServer
        get frame(): boolean
        get pushable(): boolean
        set YBodyRot(arg0: number)
        set motionY(y: number)
        set noGravity(arg0: boolean)
        get indirectPassengers(): Internal.Iterable<any>
        get magneticDeltaZ(): number
        get controlledByLocalInstance(): boolean
        get monster(): boolean
        set id(arg0: number)
        get horizontalFacing(): Internal.Direction
        get type(): string
        set visualScale(arg0: number)
        get passenger(): boolean
        get magneticAttachmentFace(): Internal.Direction
        get viewScale(): number
        set motionX(x: number)
        get handSlots(): Internal.Iterable<Internal.ItemStack>
        get visualRotationYInDegrees(): number
        get magneticDeltaY(): number
        get discrete(): boolean
        get teamColor(): number
        set nbt(nbt: Internal.CompoundTag_)
        get level(): Internal.Level
        get typeId(): string
        get freezing(): boolean
        get fullyFrozen(): boolean
        set sharedFlagOnFire(arg0: boolean)
    }
    type BaseEntityJS_ = BaseEntityJS;
    abstract class CommandNode <S> implements Internal.Comparable<Internal.CommandNode<S>> {
        getClass(): typeof any;
        getRelevantNodes(arg0: Internal.StringReader_): Internal.Collection<Internal.CommandNode<S>>;
        abstract parse(arg0: Internal.StringReader_, arg1: Internal.CommandContextBuilder_<S>): void;
        canUse(arg0: S): boolean;
        abstract listSuggestions(arg0: Internal.CommandContext_<S>, arg1: Internal.SuggestionsBuilder_): Internal.CompletableFuture<Internal.Suggestions>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        "compareTo(com.mojang.brigadier.tree.CommandNode)"(arg0: Internal.CommandNode_<S>): number;
        compareTo(arg0: any): number;
        getRedirectModifier(): Internal.RedirectModifier<S>;
        getRequirement(): Internal.Predicate<S>;
        abstract getExamples(): Internal.Collection<string>;
        addChild(arg0: Internal.CommandNode_<S>): void;
        abstract getName(): string;
        getRedirect(): this;
        findAmbiguities(arg0: Internal.AmbiguityConsumer_<S>): void;
        getChildren(): Internal.Collection<Internal.CommandNode<S>>;
        toString(): string;
        abstract createBuilder(): Internal.ArgumentBuilder<S, any>;
        notifyAll(): void;
        abstract getUsageText(): string;
        hashCode(): number;
        wait(): void;
        compareTo(arg0: Internal.CommandNode_<S>): number;
        wait(arg0: number): void;
        getChild(arg0: string): this;
        isFork(): boolean;
        getCommand(): Internal.Command<S>;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get redirectModifier(): Internal.RedirectModifier<S>
        get requirement(): Internal.Predicate<S>
        get examples(): Internal.Collection<string>
        get name(): string
        get redirect(): Internal.CommandNode<S>
        get children(): Internal.Collection<Internal.CommandNode<S>>
        get usageText(): string
        get fork(): boolean
        get command(): Internal.Command<S>
    }
    type CommandNode_<S> = CommandNode<S>;
    abstract class UnmodifiableIterator <E> implements Internal.Iterator<E> {
        getClass(): typeof any;
        toString(): string;
        forEachRemaining(arg0: Internal.Consumer_<E>): void;
        notifyAll(): void;
        abstract next(): E;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        /**
         * @deprecated
        */
        remove(): void;
        wait(): void;
        wait(arg0: number): void;
        abstract hasNext(): boolean;
        equals(arg0: any): boolean;
        get class(): typeof any
    }
    type UnmodifiableIterator_<E> = UnmodifiableIterator<E>;
    interface Long2ObjectMap <V> extends Internal.Map<number, V>, Internal.Long2ObjectFunction<V> {
        "replace(java.lang.Long,java.lang.Object,java.lang.Object)"(arg0: number, arg1: V, arg2: V): boolean;
        "computeIfPresent(java.lang.Long,java.util.function.BiFunction)"(arg0: number, arg1: Internal.BiFunction_<number, V, V>): V;
        "merge(long,java.lang.Object,java.util.function.BiFunction)"(arg0: number, arg1: V, arg2: Internal.BiFunction_<V, V, V>): V;
        abstract containsValue(arg0: any): boolean;
        remove(arg0: number): V;
        "apply(java.lang.Long)"(arg0: number): V;
        composeReference<T>(arg0: Internal.Reference2LongFunction_<T>): Internal.Reference2ObjectFunction<T, V>;
        "remove(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): boolean;
        composeDouble(arg0: Internal.Double2LongFunction_): Internal.Double2ObjectFunction<V>;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): Internal.Map<K, V>;
        "computeIfAbsent(long,it.unimi.dsi.fastutil.longs.Long2ObjectFunction)"(arg0: number, arg1: Internal.Long2ObjectFunction_<V>): V;
        andThenObject<T>(arg0: Internal.Object2ObjectFunction_<V, T>): Internal.Long2ObjectFunction<T>;
        andThenLong(arg0: Internal.Object2LongFunction_<V>): Internal.Long2LongFunction;
        "computeIfAbsent(java.lang.Long,java.util.function.Function)"(arg0: number, arg1: Internal.Function_<number, V>): V;
        /**
         * @deprecated
        */
        get(arg0: any): V;
        "computeIfPresent(long,java.util.function.BiFunction)"(arg0: number, arg1: Internal.BiFunction_<number, V, V>): V;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        andThenFloat(arg0: Internal.Object2FloatFunction_<V>): Internal.Long2FloatFunction;
        values(): Internal.Collection<any>;
        composeLong(arg0: Internal.Long2LongFunction_): Internal.Long2ObjectFunction<V>;
        andThenShort(arg0: Internal.Object2ShortFunction_<V>): Internal.Long2ShortFunction;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): Internal.Map<K, V>;
        merge(arg0: number, arg1: V, arg2: Internal.BiFunction_<V, V, V>): V;
        abstract "get(long)"(arg0: number): V;
        "replace(java.lang.Long,java.lang.Object)"(arg0: number, arg1: V): V;
        ofEntries<K, V>(...arg0: Internal.Map$Entry_<K, V>[]): Internal.Map<K, V>;
        abstract defaultReturnValue(): V;
        of<K, V>(arg0: K, arg1: V): Internal.Map<K, V>;
        /**
         * @deprecated
        */
        "containsKey(java.lang.Object)"(arg0: any): boolean;
        compute(arg0: number, arg1: Internal.BiFunction_<number, V, V>): V;
        "getOrDefault(long,java.lang.Object)"(arg0: number, arg1: V): V;
        composeShort(arg0: Internal.Short2LongFunction_): Internal.Short2ObjectFunction<V>;
        of<K, V>(): Internal.Map<K, V>;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: V): V;
        "compute(java.lang.Long,java.util.function.BiFunction)"(arg0: number, arg1: Internal.BiFunction_<number, V, V>): V;
        andThenByte(arg0: Internal.Object2ByteFunction_<V>): Internal.Long2ByteFunction;
        put(arg0: number, arg1: V): V;
        composeFloat(arg0: Internal.Float2LongFunction_): Internal.Float2ObjectFunction<V>;
        compute(arg0: number, arg1: Internal.BiFunction_<number, V, V>): V;
        /**
         * @deprecated
        */
        remove(arg0: any): V;
        "remove(long)"(arg0: number): V;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): Internal.Map<K, V>;
        "merge(java.lang.Long,java.lang.Object,java.util.function.BiFunction)"(arg0: number, arg1: V, arg2: Internal.BiFunction_<V, V, V>): V;
        remove(arg0: any, arg1: any): boolean;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): Internal.Map<K, V>;
        merge(arg0: number, arg1: V, arg2: Internal.BiFunction_<V, V, V>): V;
        "computeIfAbsent(long,java.util.function.LongFunction)"(arg0: number, arg1: Internal.LongFunction_<V>): V;
        abstract size(): number;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, V>;
        "remove(long,java.lang.Object)"(arg0: number, arg1: any): boolean;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): Internal.Map<K, V>;
        clear(): void;
        composeChar(arg0: Internal.Char2LongFunction_): Internal.Char2ObjectFunction<V>;
        replace(arg0: number, arg1: V): V;
        abstract long2ObjectEntrySet(): Internal.ObjectSet<Internal.Long2ObjectMap$Entry<V>>;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): Internal.Map<K, V>;
        andThenReference<T>(arg0: Internal.Object2ReferenceFunction_<V, T>): Internal.Long2ReferenceFunction<T>;
        replace(arg0: number, arg1: V): V;
        andThen<V>(arg0: Internal.Function_<V, V>): Internal.Function<number, V>;
        "putIfAbsent(java.lang.Long,java.lang.Object)"(arg0: number, arg1: V): V;
        "replace(long,java.lang.Object,java.lang.Object)"(arg0: number, arg1: V, arg2: V): boolean;
        composeByte(arg0: Internal.Byte2LongFunction_): Internal.Byte2ObjectFunction<V>;
        /**
         * @deprecated
        */
        "put(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        "apply(long)"(arg0: number): V;
        keySet(): Internal.Set<any>;
        "putIfAbsent(long,java.lang.Object)"(arg0: number, arg1: V): V;
        computeIfPresent(arg0: number, arg1: Internal.BiFunction_<number, V, V>): V;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: V): V;
        andThenInt(arg0: Internal.Object2IntFunction_<V>): Internal.Long2IntFunction;
        "compute(long,java.util.function.BiFunction)"(arg0: number, arg1: Internal.BiFunction_<number, V, V>): V;
        copyOf<K, V>(arg0: Internal.Map_<K, V>): Internal.Map<K, V>;
        computeIfAbsent(arg0: number, arg1: Internal.LongFunction_<V>): V;
        /**
         * @deprecated
        */
        "put(java.lang.Long,java.lang.Object)"(arg0: number, arg1: V): V;
        computeIfPresent(arg0: number, arg1: Internal.BiFunction_<number, V, V>): V;
        apply(arg0: number): V;
        abstract putAll(arg0: Internal.Map_<number, V>): void;
        /**
         * @deprecated
        */
        entrySet(): Internal.ObjectSet<Internal.Map$Entry<number, V>>;
        abstract containsKey(arg0: number): boolean;
        composeObject<T>(arg0: Internal.Object2LongFunction_<T>): Internal.Object2ObjectFunction<T, V>;
        "replace(long,java.lang.Object)"(arg0: number, arg1: V): V;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): Internal.Map<K, V>;
        composeInt(arg0: Internal.Int2LongFunction_): Internal.Int2ObjectFunction<V>;
        putIfAbsent(arg0: number, arg1: V): V;
        getOrDefault(arg0: number, arg1: V): V;
        identity<T>(): Internal.Function<T, T>;
        remove(arg0: number, arg1: any): boolean;
        abstract defaultReturnValue(arg0: V): void;
        forEach(arg0: Internal.BiConsumer_<number, V>): void;
        "put(long,java.lang.Object)"(arg0: number, arg1: V): V;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Object)"(arg0: any, arg1: V): V;
        abstract "containsKey(long)"(arg0: number): boolean;
        replace(arg0: number, arg1: V, arg2: V): boolean;
        computeIfAbsent(arg0: number, arg1: Internal.Function_<number, V>): V;
        /**
         * @deprecated
        */
        computeIfAbsentPartial(arg0: number, arg1: Internal.Long2ObjectFunction_<V>): V;
        abstract isEmpty(): boolean;
        entry<K, V>(arg0: K, arg1: V): Internal.Map$Entry<K, V>;
        replace(arg0: number, arg1: V, arg2: V): boolean;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        computeIfAbsent(arg0: number, arg1: Internal.Long2ObjectFunction_<V>): V;
        apply(arg0: number): V;
        replaceAll(arg0: Internal.BiFunction_<number, V, V>): void;
        /**
         * @deprecated
        */
        "get(java.lang.Object)"(arg0: any): V;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): Internal.Map<K, V>;
        andThenDouble(arg0: Internal.Object2DoubleFunction_<V>): Internal.Long2DoubleFunction;
        abstract get(arg0: number): V;
        abstract hashCode(): number;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): Internal.Map<K, V>;
        andThenChar(arg0: Internal.Object2CharFunction_<V>): Internal.Long2CharFunction;
        abstract equals(arg0: any): boolean;
        putIfAbsent(arg0: number, arg1: V): V;
        /**
         * @deprecated
        */
        "remove(java.lang.Object)"(arg0: any): V;
        get empty(): boolean
    }
    type Long2ObjectMap_<V> = Long2ObjectMap<V>;
    class ClickEvent implements Internal.JsonSerializable {
        constructor(arg0: Internal.ClickEvent$Action_, arg1: string)
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        getValue(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        toJson(): Internal.JsonElement;
        wait(arg0: number, arg1: number): void;
        getAction(): Internal.ClickEvent$Action;
        get class(): typeof any
        get value(): string
        get action(): Internal.ClickEvent$Action
    }
    type ClickEvent_ = ClickEvent;
    interface INoCreativeTab {
    }
    type INoCreativeTab_ = INoCreativeTab;
    abstract class ChargeableConstructPart extends Internal.ItemConstructPart implements Internal.IShowHud {
        constructor(arg0: Internal.ConstructMaterial_, arg1: Internal.ConstructSlot_, arg2: number)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        moonlight$addAdditionalBehavior(placementOverride: Internal.AdditionalItemPlacement_): void;
        isFireResistant(): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        getArmor(): number;
        moonlight$getClientAnimationExtension(): any;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getTypeData(): Internal.CompoundTag;
        getDefaultInstance(): Internal.ItemStack;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getItem(): Internal.Item;
        getBarColor(arg0: Internal.ItemStack_): number;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        getClass(): typeof any;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        static byId(arg0: number): Internal.Item;
        getRenderPropertiesInternal(): any;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        moonlight$setClientAnimationExtension(obj: any): void;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        getToughness(): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        attachCapability(capabilityBuilder: Internal.CapabilityBuilder_<any, any, any>): void;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        getSlot(): Internal.ConstructSlot;
        canBeInLoot(arg0: Internal.LootContext_): boolean;
        getKnockbackBonus(): number;
        getTier(arg0: Internal.Level_, arg1: Internal.ItemStack_): number;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        getActionSpeed(arg0: Internal.ConstructCapability_): number;
        isFoil(arg0: Internal.ItemStack_): boolean;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        resolveTier(arg0: Internal.Level_, arg1: Internal.ItemStack_): number;
        setCachedTier(arg0: number): void;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        isMutex(arg0: number): boolean;
        getCachedTier(): number;
        handler$dpg000$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        getBonusSpeed(): number;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        getAttackSpeedModifier(): number;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vec3f;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        getChargeDuration(arg0: Internal.ItemStack_): number;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        abstract onChargeReleased(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): void;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        setRarity(arg0: Internal.Rarity_): void;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        abstract getChargeCost(): number;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isComplex(): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        getEnabledCapabilities(): Internal.ConstructCapability[];
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: Internal.DamageSource_): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getManaCapacity(): number;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        getDescriptionId(): string;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        setBurnTime(i: number): void;
        getIntelligenceBonus(): number;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: Internal.DamageSource_): void;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        getDescription(): net.minecraft.network.chat.Component;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setAttackDamage(attackDamage: number): void;
        getBackpackCapacityBoost(): number;
        getModelTypeMutex(): number;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        toString(): string;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        getAttackDamage(): number;
        notify(): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        getFluidCapacity(): number;
        setSneakBypass(): com.mna.api.items.TieredItem;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        canBeDepleted(): boolean;
        getDamage(arg0: Internal.ItemStack_): number;
        getMaterial(): Internal.ConstructMaterial;
        wait(arg0: number, arg1: number): void;
        getPerceptionDistanceBonus(): number;
        getInventorySizeBonus(): number;
        getRangedAttackDamage(): number;
        getMod(): string;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        get drinkingSound(): Internal.SoundEvent
        get fireResistant(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get armor(): number
        get typeData(): Internal.CompoundTag
        get defaultInstance(): Internal.ItemStack
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get class(): typeof any
        get renderPropertiesInternal(): any
        get toughness(): number
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        get edible(): boolean
        get slot(): Internal.ConstructSlot
        get knockbackBonus(): number
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        set cachedTier(arg0: number)
        get cachedTier(): number
        get bonusSpeed(): number
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        get attackSpeedModifier(): number
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
        set rarity(arg0: Internal.Rarity_)
        get chargeCost(): number
        get complex(): boolean
        get enabledCapabilities(): Internal.ConstructCapability[]
        get manaCapacity(): number
        get descriptionId(): string
        get creativeTab(): string
        set burnTime(i: number)
        get intelligenceBonus(): number
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
        get backpackCapacityBoost(): number
        get modelTypeMutex(): number
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        get attackDamage(): number
        /**
         * @deprecated
        */
        get maxStackSize(): number
        get fluidCapacity(): number
        get eatingSound(): Internal.SoundEvent
        get material(): Internal.ConstructMaterial
        get perceptionDistanceBonus(): number
        get inventorySizeBonus(): number
        get rangedAttackDamage(): number
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
    }
    type ChargeableConstructPart_ = ChargeableConstructPart;
    interface Object2ObjectMap$Entry <K, V> extends Internal.Map$Entry<K, V> {
        abstract getKey(): K;
        comparingByValue<K, V extends Internal.Comparable<any>>(): Internal.Comparator<Internal.Map$Entry<K, V>>;
        abstract hashCode(): number;
        copyOf<K, V>(arg0: Internal.Map$Entry_<K, V>): Internal.Map$Entry<K, V>;
        comparingByKey<K, V>(arg0: Internal.Comparator_<K>): Internal.Comparator<Internal.Map$Entry<K, V>>;
        abstract getValue(): V;
        comparingByKey<K extends Internal.Comparable<any>, V>(): Internal.Comparator<Internal.Map$Entry<K, V>>;
        comparingByValue<K, V>(arg0: Internal.Comparator_<V>): Internal.Comparator<Internal.Map$Entry<K, V>>;
        abstract equals(arg0: any): boolean;
        abstract setValue(arg0: V): V;
        get key(): K
        get value(): V
        set value(arg0: V)
    }
    type Object2ObjectMap$Entry_<K, V> = Object2ObjectMap$Entry<K, V>;
    class ByteTag extends Internal.NumericTag {
        getClass(): typeof any;
        static checkSpecialEquality(o: any, o1: any, shallow: boolean): boolean;
        "accept(net.minecraft.nbt.StreamTagVisitor)"(arg0: Internal.StreamTagVisitor_): Internal.StreamTagVisitor$ValueResult;
        notify(): void;
        static "valueOf(byte)"(arg0: number): Internal.ByteTag;
        wait(arg0: number, arg1: number): void;
        "accept(net.minecraft.nbt.TagVisitor)"(arg0: Internal.TagVisitor_): void;
        sizeInBytes(): number;
        getAsFloat(): number;
        getAsLong(): number;
        acceptAsRoot(arg0: Internal.StreamTagVisitor_): void;
        static valueOf(arg0: boolean): Internal.ByteTag;
        getType(): Internal.TagType<Internal.ByteTag>;
        write(arg0: Internal.DataOutput_): void;
        static "valueOf(boolean)"(arg0: boolean): Internal.ByteTag;
        getId(): number;
        static valueOf(arg0: number): Internal.ByteTag;
        toString(): string;
        notifyAll(): void;
        specialEquals(o: any, shallow: boolean): boolean;
        getAsDouble(): number;
        accept(arg0: Internal.TagVisitor_): void;
        hashCode(): number;
        getAsInt(): number;
        getAsString(): string;
        getAsByte(): number;
        getAsNumber(): number;
        wait(): void;
        wait(arg0: number): void;
        getAsShort(): number;
        equals(arg0: any): boolean;
        accept(arg0: Internal.StreamTagVisitor_): Internal.StreamTagVisitor$ValueResult;
        copy(): this;
        get class(): typeof any
        get asFloat(): number
        get asLong(): number
        get type(): Internal.TagType<Internal.ByteTag>
        get id(): number
        get asDouble(): number
        get asInt(): number
        get asString(): string
        get asByte(): number
        get asNumber(): number
        get asShort(): number
        static readonly ONE: (Internal.ByteTag) & (Internal.ByteTag);
        static readonly ZERO: (Internal.ByteTag) & (Internal.ByteTag);
        static readonly TYPE: Internal.TagType<Internal.ByteTag>;
    }
    type ByteTag_ = ByteTag;
    class SpinParticleDataBuilder extends Internal.GenericParticleDataBuilder {
        getClass(): typeof any;
        setCoefficient(arg0: number): Internal.GenericParticleDataBuilder;
        randomSpinOffset(arg0: Internal.RandomSource_): this;
        toString(): string;
        setEasing(arg0: Internal.Easing_): Internal.GenericParticleDataBuilder;
        notifyAll(): void;
        setSpinOffset(arg0: number): this;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        build(): Internal.SpinParticleData;
        wait(): void;
        wait(arg0: number): void;
        setEasing(arg0: Internal.Easing_, arg1: Internal.Easing_): Internal.GenericParticleDataBuilder;
        equals(arg0: any): boolean;
        get class(): typeof any
        set coefficient(arg0: number)
        set easing(arg0: Internal.Easing_)
        set spinOffset(arg0: number)
    }
    type SpinParticleDataBuilder_ = SpinParticleDataBuilder;
    class ModCheck extends Internal.Record {
        constructor(arg0: Internal.ModCheck$Confidence_, arg1: string)
        shouldReportAsModified(): boolean;
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        confidence(): Internal.ModCheck$Confidence;
        hashCode(): number;
        fullDescription(): string;
        wait(): void;
        wait(arg0: number): void;
        static identify(arg0: string, arg1: Internal.Supplier_<string>, arg2: string, arg3: typeof any): Internal.ModCheck;
        equals(arg0: any): boolean;
        description(): string;
        merge(arg0: Internal.ModCheck_): this;
        get class(): typeof any
    }
    type ModCheck_ = ModCheck;
    interface ItemBuilder$FinishUsingCallback {
        abstract finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        (arg0: Internal.ItemStack, arg1: Internal.Level, arg2: Internal.LivingEntity): Internal.ItemStack_;
    }
    type ItemBuilder$FinishUsingCallback_ = ItemBuilder$FinishUsingCallback | ((arg0: Internal.ItemStack, arg1: Internal.Level, arg2: Internal.LivingEntity)=> Internal.ItemStack_);
    class GlowLichenBlock extends Internal.MultifaceBlock implements Internal.SimpleWaterloggedBlock, Internal.BonemealableBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        performBonemeal(arg0: Internal.ServerLevel_, arg1: Internal.RandomSource_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        static unpack(arg0: number): Internal.Set<Internal.Direction>;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        isBonemealSuccess(arg0: Internal.Level_, arg1: Internal.RandomSource_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        static getFaceProperty(arg0: Internal.Direction_): Internal.BooleanProperty;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        placeLiquid(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.FluidState_): boolean;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
        setIsRandomlyTicking(arg0: boolean): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        getSpreader(): Internal.MultifaceSpreader;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        handler$zmd000$onUse(state: Internal.BlockState_, world: Internal.Level_, pos: BlockPos_, player: Internal.Player_, hand: Internal.InteractionHand_, hit: Internal.BlockHitResult_, cir: Internal.CallbackInfoReturnable_<any>): void;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        isValidStateForPlacement(arg0: Internal.BlockGetter_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canAttachTo(arg0: Internal.BlockGetter_, arg1: Internal.Direction_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        pickupBlock(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        static pack(arg0: Internal.Collection_<Internal.Direction>): number;
        static availableFaces(arg0: Internal.BlockState_): Internal.Set<Internal.Direction>;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        isValidBonemealTarget(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: boolean): boolean;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        static emission(arg0: number): Internal.ToIntFunction<Internal.BlockState>;
        notifyAll(): void;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        getStateForPlacement(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): Internal.BlockState;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        static hasFace(arg0: Internal.BlockState_, arg1: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        canPlaceLiquid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        get spreader(): Internal.MultifaceSpreader
        set soundType(arg0: SoundType_)
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
    }
    type GlowLichenBlock_ = GlowLichenBlock;
    class JobAttributes implements Internal.Cloneable {
        constructor()
        constructor(arg0: number, arg1: Internal.JobAttributes$DefaultSelectionType_, arg2: Internal.JobAttributes$DestinationType_, arg3: Internal.JobAttributes$DialogType_, arg4: string, arg5: number, arg6: number, arg7: Internal.JobAttributes$MultipleDocumentHandlingType_, arg8: number[][], arg9: string, arg10: Internal.JobAttributes$SidesType_)
        constructor(arg0: Internal.JobAttributes_)
        clone(): any;
        getClass(): typeof any;
        setMaxPage(arg0: number): void;
        setPrinter(arg0: string): void;
        getSides(): Internal.JobAttributes$SidesType;
        getPageRanges(): number[][];
        setFileName(arg0: string): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        setSides(arg0: Internal.JobAttributes$SidesType_): void;
        getCopies(): number;
        setToPage(arg0: number): void;
        setCopiesToDefault(): void;
        setMultipleDocumentHandlingToDefault(): void;
        getFileName(): string;
        getDefaultSelection(): Internal.JobAttributes$DefaultSelectionType;
        setDefaultSelection(arg0: Internal.JobAttributes$DefaultSelectionType_): void;
        set(arg0: Internal.JobAttributes_): void;
        setFromPage(arg0: number): void;
        getDestination(): Internal.JobAttributes$DestinationType;
        setDialog(arg0: Internal.JobAttributes$DialogType_): void;
        setSidesToDefault(): void;
        setCopies(arg0: number): void;
        toString(): string;
        setMinPage(arg0: number): void;
        notifyAll(): void;
        getFromPage(): number;
        getToPage(): number;
        getMultipleDocumentHandling(): Internal.JobAttributes$MultipleDocumentHandlingType;
        setPageRanges(arg0: number[][]): void;
        getMinPage(): number;
        hashCode(): number;
        getMaxPage(): number;
        setDestination(arg0: Internal.JobAttributes$DestinationType_): void;
        setMultipleDocumentHandling(arg0: Internal.JobAttributes$MultipleDocumentHandlingType_): void;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        getDialog(): Internal.JobAttributes$DialogType;
        getPrinter(): string;
        get class(): typeof any
        set maxPage(arg0: number)
        set printer(arg0: string)
        get sides(): Internal.JobAttributes$SidesType
        get pageRanges(): number[][]
        set fileName(arg0: string)
        set sides(arg0: Internal.JobAttributes$SidesType_)
        get copies(): number
        set toPage(arg0: number)
        get fileName(): string
        get defaultSelection(): Internal.JobAttributes$DefaultSelectionType
        set defaultSelection(arg0: Internal.JobAttributes$DefaultSelectionType_)
        set fromPage(arg0: number)
        get destination(): Internal.JobAttributes$DestinationType
        set dialog(arg0: Internal.JobAttributes$DialogType_)
        set copies(arg0: number)
        set minPage(arg0: number)
        get fromPage(): number
        get toPage(): number
        get multipleDocumentHandling(): Internal.JobAttributes$MultipleDocumentHandlingType
        set pageRanges(arg0: number[][])
        get minPage(): number
        get maxPage(): number
        set destination(arg0: Internal.JobAttributes$DestinationType_)
        set multipleDocumentHandling(arg0: Internal.JobAttributes$MultipleDocumentHandlingType_)
        get dialog(): Internal.JobAttributes$DialogType
        get printer(): string
    }
    type JobAttributes_ = JobAttributes;
    class PlayerDataStorage {
        constructor(arg0: Internal.LevelStorageSource$LevelStorageAccess_, arg1: Internal.DataFixer_)
        load(arg0: Internal.Player_): Internal.CompoundTag;
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        getSeenPlayers(): string[];
        getPlayerDataFolder(): Internal.File;
        wait(): void;
        save(arg0: Internal.Player_): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        get seenPlayers(): string[]
        get playerDataFolder(): Internal.File
    }
    type PlayerDataStorage_ = PlayerDataStorage;
    interface Int2IntFunction extends Internal.IntUnaryOperator, it.unimi.dsi.fastutil.Function<number, number> {
        remove(arg0: number): number;
        defaultReturnValue(): number;
        /**
         * @deprecated
        */
        "andThen(java.util.function.Function)"<T>(arg0: Internal.Function_<number, T>): Internal.Function<number, T>;
        containsKey(arg0: number): boolean;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<number, T>): Internal.Function<number, T>;
        "compose(java.util.function.IntUnaryOperator)"(arg0: Internal.IntUnaryOperator_): Internal.IntUnaryOperator;
        /**
         * @deprecated
        */
        "compose(java.util.function.Function)"<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, number>;
        /**
         * @deprecated
        */
        "put(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        composeReference<T>(arg0: Internal.Reference2IntFunction_<T>): Internal.Reference2IntFunction<T>;
        getOrDefault(arg0: number, arg1: number): number;
        compose(arg0: Internal.IntUnaryOperator_): Internal.IntUnaryOperator;
        applyAsInt(arg0: number): number;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: number): number;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: number): number;
        andThenObject<T>(arg0: Internal.Int2ObjectFunction_<T>): Internal.Int2ObjectFunction<T>;
        andThenLong(arg0: Internal.Int2LongFunction_): Internal.Int2LongFunction;
        andThenReference<T>(arg0: Internal.Int2ReferenceFunction_<T>): Internal.Int2ReferenceFunction<T>;
        "containsKey(int)"(arg0: number): boolean;
        andThenShort(arg0: Internal.Int2ShortFunction_): Internal.Int2ShortFunction;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Integer)"(arg0: any, arg1: number): number;
        composeByte(arg0: Internal.Byte2IntFunction_): Internal.Byte2IntFunction;
        "put(int,int)"(arg0: number, arg1: number): number;
        /**
         * @deprecated
        */
        "containsKey(java.lang.Object)"(arg0: any): boolean;
        composeLong(arg0: Internal.Long2IntFunction_): Internal.Long2IntFunction;
        andThenFloat(arg0: Internal.Int2FloatFunction_): Internal.Int2FloatFunction;
        composeFloat(arg0: Internal.Float2IntFunction_): Internal.Float2IntFunction;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        apply(arg0: number): number;
        /**
         * @deprecated
        */
        "put(java.lang.Integer,java.lang.Integer)"(arg0: number, arg1: number): number;
        composeObject<T>(arg0: Internal.Object2IntFunction_<T>): Internal.Object2IntFunction<T>;
        andThen(arg0: Internal.IntUnaryOperator_): Internal.IntUnaryOperator;
        "andThen(java.util.function.IntUnaryOperator)"(arg0: Internal.IntUnaryOperator_): Internal.IntUnaryOperator;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        andThenByte(arg0: Internal.Int2ByteFunction_): Internal.Int2ByteFunction;
        composeChar(arg0: Internal.Char2IntFunction_): Internal.Char2IntFunction;
        "getOrDefault(int,int)"(arg0: number, arg1: number): number;
        andThenDouble(arg0: Internal.Int2DoubleFunction_): Internal.Int2DoubleFunction;
        /**
         * @deprecated
        */
        remove(arg0: any): number;
        composeDouble(arg0: Internal.Double2IntFunction_): Internal.Double2IntFunction;
        composeInt(arg0: Internal.Int2IntFunction_): this;
        andThenInt(arg0: Internal.Int2IntFunction_): this;
        andThenChar(arg0: Internal.Int2CharFunction_): Internal.Int2CharFunction;
        put(arg0: number, arg1: number): number;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, number>;
        size(): number;
        defaultReturnValue(arg0: number): void;
        composeShort(arg0: Internal.Short2IntFunction_): Internal.Short2IntFunction;
        clear(): void;
        abstract get(arg0: number): number;
        "remove(int)"(arg0: number): number;
        /**
         * @deprecated
        */
        "remove(java.lang.Object)"(arg0: any): number;
        abstract "get(int)"(arg0: number): number;
        /**
         * @deprecated
        */
        get(arg0: any): any;
        identity(): this;
        /**
         * @deprecated
        */
        "get(java.lang.Object)"(arg0: any): any;
    }
    type Int2IntFunction_ = Int2IntFunction;
    class EndPortalBlock extends Internal.BaseEntityBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        getTicker<T extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<T>): Internal.BlockEntityTicker<T>;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        handler$zmd000$onUse(state: Internal.BlockState_, world: Internal.Level_, pos: BlockPos_, player: Internal.Player_, hand: Internal.InteractionHand_, hit: Internal.BlockHitResult_, cir: Internal.CallbackInfoReturnable_<any>): void;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        arch$holder(): Internal.Holder<Internal.Block>;
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
    }
    type EndPortalBlock_ = EndPortalBlock;
    class MemoryStack extends Internal.Pointer$Default implements Internal.AutoCloseable {
        push(): this;
        nclong(arg0: number): number;
        ndouble(arg0: number): number;
        ASCIISafe(arg0: Internal.CharSequence_): Internal.ByteBuffer;
        static stackCLongs(arg0: number, arg1: number): Internal.CLongBuffer;
        getSize(): number;
        static stackMallocInt(arg0: number): Internal.IntBuffer;
        ASCIISafe(arg0: Internal.CharSequence_, arg1: boolean): Internal.ByteBuffer;
        UTF16(arg0: Internal.CharSequence_, arg1: boolean): Internal.ByteBuffer;
        static stackPointers(arg0: number, arg1: number, arg2: number, arg3: number): Internal.PointerBuffer;
        ints(arg0: number): Internal.IntBuffer;
        static stackLongs(arg0: number): Internal.LongBuffer;
        "pointers(long,long)"(arg0: number, arg1: number): Internal.PointerBuffer;
        "doubles(double[])"(...arg0: number[]): Internal.DoubleBuffer;
        UTF16(arg0: Internal.CharSequence_): Internal.ByteBuffer;
        static create(arg0: Internal.ByteBuffer_): Internal.MemoryStack;
        "floats(float[])"(...arg0: number[]): Internal.FloatBuffer;
        static stackCallocShort(arg0: number): Internal.ShortBuffer;
        ASCII(arg0: Internal.CharSequence_, arg1: boolean): Internal.ByteBuffer;
        doubles(arg0: number, arg1: number): Internal.DoubleBuffer;
        npointer(arg0: Internal.Buffer_): number;
        pointers(arg0: Internal.Buffer_, arg1: Internal.Buffer_, arg2: Internal.Buffer_): Internal.PointerBuffer;
        mallocInt(arg0: number): Internal.IntBuffer;
        bytes(...arg0: number[]): Internal.ByteBuffer;
        pointers(...arg0: number[]): Internal.PointerBuffer;
        static stackDoubles(arg0: number): Internal.DoubleBuffer;
        getClass(): typeof any;
        static "stackShorts(short[])"(...arg0: number[]): Internal.ShortBuffer;
        "shorts(short[])"(...arg0: number[]): Internal.ShortBuffer;
        static stackDoubles(arg0: number, arg1: number, arg2: number): Internal.DoubleBuffer;
        longs(arg0: number, arg1: number, arg2: number): Internal.LongBuffer;
        getFrameIndex(): number;
        clongs(arg0: number, arg1: number, arg2: number, arg3: number): Internal.CLongBuffer;
        pointers(arg0: Internal.Pointer_): Internal.PointerBuffer;
        "pointers(long)"(arg0: number): Internal.PointerBuffer;
        UTF16Safe(arg0: Internal.CharSequence_, arg1: boolean): Internal.ByteBuffer;
        UTF8Safe(arg0: Internal.CharSequence_): Internal.ByteBuffer;
        static stackCLongs(arg0: number): Internal.CLongBuffer;
        static stackBytes(arg0: number, arg1: number): Internal.ByteBuffer;
        static stackMallocShort(arg0: number): Internal.ShortBuffer;
        "npointer(long)"(arg0: number): number;
        UTF8Safe(arg0: Internal.CharSequence_, arg1: boolean): Internal.ByteBuffer;
        static stackCallocCLong(arg0: number): Internal.CLongBuffer;
        static "stackDoubles(double)"(arg0: number): Internal.DoubleBuffer;
        address(): number;
        ints(...arg0: number[]): Internal.IntBuffer;
        "ints(int[])"(...arg0: number[]): Internal.IntBuffer;
        npointer(arg0: Internal.Pointer_): number;
        static stackInts(arg0: number, arg1: number, arg2: number, arg3: number): Internal.IntBuffer;
        static stackDoubles(arg0: number, arg1: number): Internal.DoubleBuffer;
        static stackPointers(...arg0: Internal.Pointer_[]): Internal.PointerBuffer;
        getPointer(): number;
        UTF8(arg0: Internal.CharSequence_, arg1: boolean): Internal.ByteBuffer;
        static stackShorts(arg0: number, arg1: number, arg2: number, arg3: number): Internal.ShortBuffer;
        longs(arg0: number, arg1: number, arg2: number, arg3: number): Internal.LongBuffer;
        floats(arg0: number, arg1: number, arg2: number): Internal.FloatBuffer;
        static stackPointers(arg0: number, arg1: number, arg2: number): Internal.PointerBuffer;
        static "stackDoubles(double[])"(...arg0: number[]): Internal.DoubleBuffer;
        wait(arg0: number): void;
        static stackASCIISafe(arg0: Internal.CharSequence_, arg1: boolean): Internal.ByteBuffer;
        bytes(arg0: number): Internal.ByteBuffer;
        mallocFloat(arg0: number): Internal.FloatBuffer;
        pointers(arg0: number): Internal.PointerBuffer;
        callocShort(arg0: number): Internal.ShortBuffer;
        static nstackMalloc(arg0: number, arg1: number): number;
        getPointerAddress(): number;
        static "stackPointers(org.lwjgl.system.Pointer,org.lwjgl.system.Pointer,org.lwjgl.system.Pointer)"(arg0: Internal.Pointer_, arg1: Internal.Pointer_, arg2: Internal.Pointer_): Internal.PointerBuffer;
        mallocLong(arg0: number): Internal.LongBuffer;
        static stackCallocLong(arg0: number): Internal.LongBuffer;
        static stackShorts(...arg0: number[]): Internal.ShortBuffer;
        pointers(arg0: Internal.Pointer_, arg1: Internal.Pointer_, arg2: Internal.Pointer_, arg3: Internal.Pointer_): Internal.PointerBuffer;
        "pointers(org.lwjgl.system.Pointer)"(arg0: Internal.Pointer_): Internal.PointerBuffer;
        "pointers(org.lwjgl.system.Pointer,org.lwjgl.system.Pointer,org.lwjgl.system.Pointer)"(arg0: Internal.Pointer_, arg1: Internal.Pointer_, arg2: Internal.Pointer_): Internal.PointerBuffer;
        static stackCallocInt(arg0: number): Internal.IntBuffer;
        "clongs(long[])"(...arg0: number[]): Internal.CLongBuffer;
        nUTF16(arg0: Internal.CharSequence_, arg1: boolean): number;
        static stackASCII(arg0: Internal.CharSequence_): Internal.ByteBuffer;
        callocFloat(arg0: number): Internal.FloatBuffer;
        static stackLongs(arg0: number, arg1: number, arg2: number): Internal.LongBuffer;
        pointers(arg0: Internal.Pointer_, arg1: Internal.Pointer_): Internal.PointerBuffer;
        nUTF16Safe(arg0: Internal.CharSequence_, arg1: boolean): number;
        getAddress(): number;
        ints(arg0: number, arg1: number): Internal.IntBuffer;
        static stackCLongs(...arg0: number[]): Internal.CLongBuffer;
        longs(...arg0: number[]): Internal.LongBuffer;
        static "stackPointers(long[])"(...arg0: number[]): Internal.PointerBuffer;
        npointer(arg0: number): number;
        mallocPointer(arg0: number): Internal.PointerBuffer;
        floats(arg0: number, arg1: number): Internal.FloatBuffer;
        static stackFloats(arg0: number, arg1: number, arg2: number, arg3: number): Internal.FloatBuffer;
        static "stackLongs(long[])"(...arg0: number[]): Internal.LongBuffer;
        static stackPointers(arg0: Internal.Pointer_): Internal.PointerBuffer;
        ints(arg0: number, arg1: number, arg2: number): Internal.IntBuffer;
        static stackPointers(arg0: Internal.Pointer_, arg1: Internal.Pointer_, arg2: Internal.Pointer_, arg3: Internal.Pointer_): Internal.PointerBuffer;
        static stackGet(): Internal.MemoryStack;
        callocInt(arg0: number): Internal.IntBuffer;
        doubles(arg0: number): Internal.DoubleBuffer;
        "pointers(java.nio.Buffer,java.nio.Buffer,java.nio.Buffer,java.nio.Buffer)"(arg0: Internal.Buffer_, arg1: Internal.Buffer_, arg2: Internal.Buffer_, arg3: Internal.Buffer_): Internal.PointerBuffer;
        mallocDouble(arg0: number): Internal.DoubleBuffer;
        wait(): void;
        UTF8(arg0: Internal.CharSequence_): Internal.ByteBuffer;
        floats(arg0: number, arg1: number, arg2: number, arg3: number): Internal.FloatBuffer;
        static stackMallocLong(arg0: number): Internal.LongBuffer;
        nint(arg0: number): number;
        static stackFloats(arg0: number, arg1: number): Internal.FloatBuffer;
        static stackMallocCLong(arg0: number): Internal.CLongBuffer;
        "npointer(java.nio.Buffer)"(arg0: Internal.Buffer_): number;
        clongs(arg0: number): Internal.CLongBuffer;
        static stackUTF8Safe(arg0: Internal.CharSequence_, arg1: boolean): Internal.ByteBuffer;
        static "create(int)"(arg0: number): Internal.MemoryStack;
        "pointers(org.lwjgl.system.Pointer,org.lwjgl.system.Pointer)"(arg0: Internal.Pointer_, arg1: Internal.Pointer_): Internal.PointerBuffer;
        static stackBytes(arg0: number, arg1: number, arg2: number, arg3: number): Internal.ByteBuffer;
        pointers(arg0: number, arg1: number): Internal.PointerBuffer;
        static stackMalloc(arg0: number): Internal.ByteBuffer;
        static "stackCLongs(long)"(arg0: number): Internal.CLongBuffer;
        longs(arg0: number): Internal.LongBuffer;
        static stackCallocPointer(arg0: number): Internal.PointerBuffer;
        nshort(arg0: number): number;
        static stackUTF8Safe(arg0: Internal.CharSequence_): Internal.ByteBuffer;
        static stackUTF16(arg0: Internal.CharSequence_): Internal.ByteBuffer;
        static stackInts(arg0: number, arg1: number, arg2: number): Internal.IntBuffer;
        "pointers(java.nio.Buffer[])"(...arg0: Internal.Buffer_[]): Internal.PointerBuffer;
        static "stackInts(int[])"(...arg0: number[]): Internal.IntBuffer;
        static "stackPointers(org.lwjgl.system.Pointer[])"(...arg0: Internal.Pointer_[]): Internal.PointerBuffer;
        pop(): this;
        doubles(arg0: number, arg1: number, arg2: number, arg3: number): Internal.DoubleBuffer;
        static "stackBytes(byte[])"(...arg0: number[]): Internal.ByteBuffer;
        static "stackBytes(byte)"(arg0: number): Internal.ByteBuffer;
        static stackLongs(arg0: number, arg1: number, arg2: number, arg3: number): Internal.LongBuffer;
        mallocShort(arg0: number): Internal.ShortBuffer;
        shorts(arg0: number, arg1: number, arg2: number, arg3: number): Internal.ShortBuffer;
        doubles(...arg0: number[]): Internal.DoubleBuffer;
        static create(): Internal.MemoryStack;
        static stackFloats(arg0: number, arg1: number, arg2: number): Internal.FloatBuffer;
        static "stackFloats(float[])"(...arg0: number[]): Internal.FloatBuffer;
        equals(arg0: any): boolean;
        ASCII(arg0: Internal.CharSequence_): Internal.ByteBuffer;
        bytes(arg0: number, arg1: number): Internal.ByteBuffer;
        static "stackFloats(float)"(arg0: number): Internal.FloatBuffer;
        clongs(...arg0: number[]): Internal.CLongBuffer;
        shorts(arg0: number, arg1: number, arg2: number): Internal.ShortBuffer;
        static stackCallocDouble(arg0: number): Internal.DoubleBuffer;
        ncalloc(arg0: number, arg1: number, arg2: number): number;
        floats(...arg0: number[]): Internal.FloatBuffer;
        pointers(arg0: Internal.Buffer_, arg1: Internal.Buffer_, arg2: Internal.Buffer_, arg3: Internal.Buffer_): Internal.PointerBuffer;
        calloc(arg0: number, arg1: number): Internal.ByteBuffer;
        static stackFloats(arg0: number): Internal.FloatBuffer;
        static nstackMalloc(arg0: number): number;
        static stackPush(): Internal.MemoryStack;
        bytes(arg0: number, arg1: number, arg2: number, arg3: number): Internal.ByteBuffer;
        malloc(arg0: number, arg1: number): Internal.ByteBuffer;
        longs(arg0: number, arg1: number): Internal.LongBuffer;
        pointers(arg0: number, arg1: number, arg2: number, arg3: number): Internal.PointerBuffer;
        static stackCallocFloat(arg0: number): Internal.FloatBuffer;
        "bytes(byte)"(arg0: number): Internal.ByteBuffer;
        static stackInts(arg0: number): Internal.IntBuffer;
        "ints(int)"(arg0: number): Internal.IntBuffer;
        static stackCLongs(arg0: number, arg1: number, arg2: number): Internal.CLongBuffer;
        ints(arg0: number, arg1: number, arg2: number, arg3: number): Internal.IntBuffer;
        static stackMallocFloat(arg0: number): Internal.FloatBuffer;
        "pointers(java.nio.Buffer,java.nio.Buffer,java.nio.Buffer)"(arg0: Internal.Buffer_, arg1: Internal.Buffer_, arg2: Internal.Buffer_): Internal.PointerBuffer;
        static "stackPointers(long,long)"(arg0: number, arg1: number): Internal.PointerBuffer;
        shorts(arg0: number): Internal.ShortBuffer;
        static "stackPointers(long,long,long)"(arg0: number, arg1: number, arg2: number): Internal.PointerBuffer;
        nUTF8Safe(arg0: Internal.CharSequence_, arg1: boolean): number;
        static stackUTF16Safe(arg0: Internal.CharSequence_, arg1: boolean): Internal.ByteBuffer;
        static stackShorts(arg0: number): Internal.ShortBuffer;
        static stackUTF16(arg0: Internal.CharSequence_, arg1: boolean): Internal.ByteBuffer;
        pointers(...arg0: Internal.Buffer_[]): Internal.PointerBuffer;
        callocDouble(arg0: number): Internal.DoubleBuffer;
        static stackCalloc(arg0: number): Internal.ByteBuffer;
        static stackCLongs(arg0: number, arg1: number, arg2: number, arg3: number): Internal.CLongBuffer;
        nlong(arg0: number): number;
        callocCLong(arg0: number): Internal.CLongBuffer;
        static stackFloats(...arg0: number[]): Internal.FloatBuffer;
        static stackShorts(arg0: number, arg1: number, arg2: number): Internal.ShortBuffer;
        static stackUTF16Safe(arg0: Internal.CharSequence_): Internal.ByteBuffer;
        static ncreate(arg0: number, arg1: number): Internal.MemoryStack;
        static "create(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): Internal.MemoryStack;
        static stackUTF8(arg0: Internal.CharSequence_, arg1: boolean): Internal.ByteBuffer;
        clongs(arg0: number, arg1: number, arg2: number): Internal.CLongBuffer;
        static stackBytes(...arg0: number[]): Internal.ByteBuffer;
        nmalloc(arg0: number, arg1: number): number;
        "pointers(org.lwjgl.system.Pointer,org.lwjgl.system.Pointer,org.lwjgl.system.Pointer,org.lwjgl.system.Pointer)"(arg0: Internal.Pointer_, arg1: Internal.Pointer_, arg2: Internal.Pointer_, arg3: Internal.Pointer_): Internal.PointerBuffer;
        static nstackCalloc(arg0: number, arg1: number, arg2: number): number;
        static "stackShorts(short)"(arg0: number): Internal.ShortBuffer;
        nASCII(arg0: Internal.CharSequence_, arg1: boolean): number;
        static stackPointers(arg0: number, arg1: number): Internal.PointerBuffer;
        toString(): string;
        notifyAll(): void;
        "pointers(long,long,long,long)"(arg0: number, arg1: number, arg2: number, arg3: number): Internal.PointerBuffer;
        static "stackPointers(org.lwjgl.system.Pointer)"(arg0: Internal.Pointer_): Internal.PointerBuffer;
        mallocCLong(arg0: number): Internal.CLongBuffer;
        "longs(long)"(arg0: number): Internal.LongBuffer;
        setPointer(arg0: number): void;
        static "stackCLongs(long[])"(...arg0: number[]): Internal.CLongBuffer;
        bytes(arg0: number, arg1: number, arg2: number): Internal.ByteBuffer;
        "clongs(long)"(arg0: number): Internal.CLongBuffer;
        static stackPop(): Internal.MemoryStack;
        clongs(arg0: number, arg1: number): Internal.CLongBuffer;
        static "stackInts(int)"(arg0: number): Internal.IntBuffer;
        static stackDoubles(...arg0: number[]): Internal.DoubleBuffer;
        static stackASCIISafe(arg0: Internal.CharSequence_): Internal.ByteBuffer;
        pointers(arg0: number, arg1: number, arg2: number): Internal.PointerBuffer;
        pointers(arg0: Internal.Buffer_): Internal.PointerBuffer;
        calloc(arg0: number): Internal.ByteBuffer;
        notify(): void;
        pointers(...arg0: Internal.Pointer_[]): Internal.PointerBuffer;
        static stackASCII(arg0: Internal.CharSequence_, arg1: boolean): Internal.ByteBuffer;
        static stackBytes(arg0: number): Internal.ByteBuffer;
        "longs(long[])"(...arg0: number[]): Internal.LongBuffer;
        static stackBytes(arg0: number, arg1: number, arg2: number): Internal.ByteBuffer;
        callocPointer(arg0: number): Internal.PointerBuffer;
        static stackPointers(arg0: Internal.Pointer_, arg1: Internal.Pointer_, arg2: Internal.Pointer_): Internal.PointerBuffer;
        "pointers(org.lwjgl.system.Pointer[])"(...arg0: Internal.Pointer_[]): Internal.PointerBuffer;
        static "stackPointers(long)"(arg0: number): Internal.PointerBuffer;
        static stackPointers(arg0: Internal.Pointer_, arg1: Internal.Pointer_): Internal.PointerBuffer;
        static stackShorts(arg0: number, arg1: number): Internal.ShortBuffer;
        pointers(arg0: Internal.Buffer_, arg1: Internal.Buffer_): Internal.PointerBuffer;
        static stackPointers(...arg0: number[]): Internal.PointerBuffer;
        malloc(arg0: number): Internal.ByteBuffer;
        static "stackPointers(org.lwjgl.system.Pointer,org.lwjgl.system.Pointer,org.lwjgl.system.Pointer,org.lwjgl.system.Pointer)"(arg0: Internal.Pointer_, arg1: Internal.Pointer_, arg2: Internal.Pointer_, arg3: Internal.Pointer_): Internal.PointerBuffer;
        "pointers(java.nio.Buffer)"(arg0: Internal.Buffer_): Internal.PointerBuffer;
        static stackMallocDouble(arg0: number): Internal.DoubleBuffer;
        shorts(arg0: number, arg1: number): Internal.ShortBuffer;
        static stackInts(arg0: number, arg1: number): Internal.IntBuffer;
        static create(arg0: number): Internal.MemoryStack;
        static stackDoubles(arg0: number, arg1: number, arg2: number, arg3: number): Internal.DoubleBuffer;
        static stackLongs(arg0: number, arg1: number): Internal.LongBuffer;
        "floats(float)"(arg0: number): Internal.FloatBuffer;
        static "stackLongs(long)"(arg0: number): Internal.LongBuffer;
        callocLong(arg0: number): Internal.LongBuffer;
        static "stackPointers(long,long,long,long)"(arg0: number, arg1: number, arg2: number, arg3: number): Internal.PointerBuffer;
        doubles(arg0: number, arg1: number, arg2: number): Internal.DoubleBuffer;
        floats(arg0: number): Internal.FloatBuffer;
        "pointers(long[])"(...arg0: number[]): Internal.PointerBuffer;
        static "stackPointers(org.lwjgl.system.Pointer,org.lwjgl.system.Pointer)"(arg0: Internal.Pointer_, arg1: Internal.Pointer_): Internal.PointerBuffer;
        wait(arg0: number, arg1: number): void;
        nUTF8(arg0: Internal.CharSequence_, arg1: boolean): number;
        "doubles(double)"(arg0: number): Internal.DoubleBuffer;
        "pointers(java.nio.Buffer,java.nio.Buffer)"(arg0: Internal.Buffer_, arg1: Internal.Buffer_): Internal.PointerBuffer;
        nASCIISafe(arg0: Internal.CharSequence_, arg1: boolean): number;
        pointers(arg0: Internal.Pointer_, arg1: Internal.Pointer_, arg2: Internal.Pointer_): Internal.PointerBuffer;
        "bytes(byte[])"(...arg0: number[]): Internal.ByteBuffer;
        nmalloc(arg0: number): number;
        "shorts(short)"(arg0: number): Internal.ShortBuffer;
        static stackLongs(...arg0: number[]): Internal.LongBuffer;
        "pointers(long,long,long)"(arg0: number, arg1: number, arg2: number): Internal.PointerBuffer;
        static stackPointers(arg0: number): Internal.PointerBuffer;
        static stackInts(...arg0: number[]): Internal.IntBuffer;
        UTF16Safe(arg0: Internal.CharSequence_): Internal.ByteBuffer;
        static stackMallocPointer(arg0: number): Internal.PointerBuffer;
        hashCode(): number;
        shorts(...arg0: number[]): Internal.ShortBuffer;
        nbyte(arg0: number): number;
        static stackUTF8(arg0: Internal.CharSequence_): Internal.ByteBuffer;
        nfloat(arg0: number): number;
        close(): void;
        "npointer(org.lwjgl.system.Pointer)"(arg0: Internal.Pointer_): number;
        get size(): number
        get class(): typeof any
        get frameIndex(): number
        get pointer(): number
        get pointerAddress(): number
        get address(): number
        set pointer(arg0: number)
    }
    type MemoryStack_ = MemoryStack;
    class LocalTime implements Internal.Comparable<Internal.LocalTime>, Internal.Temporal, Internal.TemporalAdjuster, Internal.Serializable {
        getHour(): number;
        minusMinutes(arg0: number): this;
        static parse(arg0: Internal.CharSequence_, arg1: Internal.DateTimeFormatter_): Internal.LocalTime;
        minusSeconds(arg0: number): this;
        notify(): void;
        compareTo(arg0: any): number;
        isBefore(arg0: Internal.LocalTime_): boolean;
        getMinute(): number;
        static parse(arg0: Internal.CharSequence_): Internal.LocalTime;
        toSecondOfDay(): number;
        plusHours(arg0: number): this;
        "with"(arg0: Internal.TemporalAdjuster_): Internal.Temporal;
        "compareTo(java.time.LocalTime)"(arg0: Internal.LocalTime_): number;
        minus(arg0: Internal.TemporalAmount_): this;
        "with"(arg0: Internal.TemporalField_, arg1: number): Internal.Temporal;
        isSupported(arg0: Internal.TemporalField_): boolean;
        format(arg0: Internal.DateTimeFormatter_): string;
        "isSupported(java.time.temporal.TemporalField)"(arg0: Internal.TemporalField_): boolean;
        static "now(java.time.ZoneId)"(arg0: Internal.ZoneId_): Internal.LocalTime;
        isAfter(arg0: Internal.LocalTime_): boolean;
        withMinute(arg0: number): this;
        plusNanos(arg0: number): this;
        static ofInstant(arg0: Internal.Instant_, arg1: Internal.ZoneId_): Internal.LocalTime;
        range(arg0: Internal.TemporalField_): Internal.ValueRange;
        get(arg0: Internal.TemporalField_): number;
        wait(): void;
        minusHours(arg0: number): this;
        compareTo(arg0: Internal.LocalTime_): number;
        toEpochSecond(arg0: Internal.LocalDate_, arg1: Internal.ZoneOffset_): number;
        withNano(arg0: number): this;
        "compareTo(java.lang.Object)"(arg0: any): number;
        "isSupported(java.time.temporal.TemporalUnit)"(arg0: Internal.TemporalUnit_): boolean;
        static from(arg0: Internal.TemporalAccessor_): Internal.LocalTime;
        getClass(): typeof any;
        plus(arg0: Internal.TemporalAmount_): this;
        plus(arg0: number, arg1: Internal.TemporalUnit_): this;
        plusMinutes(arg0: number): this;
        plusSeconds(arg0: number): this;
        wait(arg0: number, arg1: number): void;
        static ofNanoOfDay(arg0: number): Internal.LocalTime;
        static now(arg0: Internal.ZoneId_): Internal.LocalTime;
        getLong(arg0: Internal.TemporalField_): number;
        withSecond(arg0: number): this;
        atDate(arg0: Internal.LocalDate_): Internal.LocalDateTime;
        static of(arg0: number, arg1: number, arg2: number, arg3: number): Internal.LocalTime;
        minus(arg0: number, arg1: Internal.TemporalUnit_): this;
        toNanoOfDay(): number;
        static ofSecondOfDay(arg0: number): Internal.LocalTime;
        toString(): string;
        truncatedTo(arg0: Internal.TemporalUnit_): this;
        static now(arg0: Internal.Clock_): Internal.LocalTime;
        adjustInto(arg0: Internal.Temporal_): Internal.Temporal;
        notifyAll(): void;
        static "now(java.time.Clock)"(arg0: Internal.Clock_): Internal.LocalTime;
        static of(arg0: number, arg1: number): Internal.LocalTime;
        query<R>(arg0: Internal.TemporalQuery_<R>): R;
        minusNanos(arg0: number): this;
        atOffset(arg0: Internal.ZoneOffset_): Internal.OffsetTime;
        static now(): Internal.LocalTime;
        until(arg0: Internal.Temporal_, arg1: Internal.TemporalUnit_): number;
        isSupported(arg0: Internal.TemporalUnit_): boolean;
        getNano(): number;
        getSecond(): number;
        hashCode(): number;
        wait(arg0: number): void;
        static of(arg0: number, arg1: number, arg2: number): Internal.LocalTime;
        equals(arg0: any): boolean;
        withHour(arg0: number): this;
        get hour(): number
        get minute(): number
        get class(): typeof any
        get nano(): number
        get second(): number
        static readonly MAX: (Internal.LocalTime) & (Internal.LocalTime);
        static readonly NOON: (Internal.LocalTime) & (Internal.LocalTime);
        static readonly MIDNIGHT: (Internal.LocalTime) & (Internal.LocalTime);
        static readonly MIN: (Internal.LocalTime) & (Internal.LocalTime);
    }
    type LocalTime_ = LocalTime;
    class DoubleSkullBlock extends Internal.SkullBlock implements Internal.IRotatable {
        constructor(properties: Internal.BlockBehaviour$Properties_)
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        getRenderShape(pState: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        modifyReturnValue$dck000$amendments$addPlacementWaterlogging(original: Internal.BlockState_, context: Internal.BlockPlaceContext_): Internal.BlockState;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        getCloneItemStack(state: Internal.BlockState_, hitResult: Internal.HitResult_, world: Internal.BlockGetter_, pos: BlockPos_, player: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        newBlockEntity(pPos: BlockPos_, pState: Internal.BlockState_): Internal.BlockEntity;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        static get(arg0: Internal.ItemStack_): Internal.Equipable;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        getDrops(pState: Internal.BlockState_, builder: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        getFluidState(state: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        getTicker<T extends Internal.BlockEntity>(level: Internal.Level_, state: Internal.BlockState_, type: Internal.BlockEntityType_<T>): Internal.BlockEntityTicker<T>;
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getType(): Internal.SkullBlock$Type;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        placeLiquid(level: Internal.LevelAccessor_, pos: BlockPos_, state: Internal.BlockState_, fluidState: Internal.FluidState_): boolean;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(pState: Internal.BlockState_, dir: Internal.Direction_, pNeighborState: Internal.BlockState_, pLevel: Internal.LevelAccessor_, pCurrentPos: BlockPos_, pNeighborPos: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
        setIsRandomlyTicking(arg0: boolean): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        swapWithEquipmentSlot(arg0: Internal.Item_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        getSoundType(state: Internal.BlockState_): SoundType;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        handler$zmd000$onUse(state: Internal.BlockState_, world: Internal.Level_, pos: BlockPos_, player: Internal.Player_, hand: Internal.InteractionHand_, hit: Internal.BlockHitResult_, cir: Internal.CallbackInfoReturnable_<any>): void;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        pickupBlock(level: Internal.LevelAccessor_, pos: BlockPos_, state: Internal.BlockState_): Internal.ItemStack;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        rotateOverAxis(state: Internal.BlockState_, world: Internal.LevelAccessor_, pos: BlockPos_, rot: Internal.Rotation_, axis: Internal.Direction_, hit: Vec3d_): Internal.Optional<Internal.Direction>;
        getEquipmentSlot(): Internal.EquipmentSlot;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(state: Internal.BlockState_, world: Internal.LevelReader_, pos: BlockPos_, entity: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getEquipSound(): Internal.SoundEvent;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        arch$holder(): Internal.Holder<Internal.Block>;
        getRotatedState(state: Internal.BlockState_, world: Internal.LevelAccessor_, pos: BlockPos_, rotation: Internal.Rotation_, axis: Internal.Direction_, hit: Vec3d_): Internal.Optional<Internal.BlockState>;
        getCloneItemStack(level: Internal.BlockGetter_, pos: BlockPos_, state: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        canPlaceLiquid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(pState: Internal.BlockState_, pLevel: Internal.BlockGetter_, pPos: BlockPos_, pContext: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        onRotated(newState: Internal.BlockState_, oldState: Internal.BlockState_, world: Internal.LevelAccessor_, pos: BlockPos_, rotation: Internal.Rotation_, axis: Internal.Direction_, hit: Vec3d_): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get type(): Internal.SkullBlock$Type
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        get equipmentSlot(): Internal.EquipmentSlot
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        get equipSound(): Internal.SoundEvent
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
    }
    type DoubleSkullBlock_ = DoubleSkullBlock;
    class WallBlock extends Internal.Block implements Internal.SimpleWaterloggedBlock, Internal.WallBlockAccessor {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        callUpdateShape(arg0: Internal.LevelReader_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean, arg5: boolean, arg6: boolean, arg7: boolean): Internal.BlockState;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        placeLiquid(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.FluidState_): boolean;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static callIsConnected_$md$aded12$0(arg0: Internal.BlockState_, arg1: Internal.Property_<any>): boolean;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        handler$zmd000$onUse(state: Internal.BlockState_, world: Internal.Level_, pos: BlockPos_, player: Internal.Player_, hand: Internal.InteractionHand_, hit: Internal.BlockHitResult_, cir: Internal.CallbackInfoReturnable_<any>): void;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        callTopUpdate(arg0: Internal.LevelReader_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.BlockState_): Internal.BlockState;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        pickupBlock(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        static callIsConnected(arg0: Internal.BlockState_, arg1: Internal.Property_<Internal.WallSide>): boolean;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        canPlaceLiquid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
        static readonly SOUTH_WALL: Internal.EnumProperty<Internal.WallSide>;
        static readonly NORTH_WALL: Internal.EnumProperty<Internal.WallSide>;
        static readonly EAST_WALL: Internal.EnumProperty<Internal.WallSide>;
        static readonly UP: (Internal.BooleanProperty) & (Internal.BooleanProperty);
        static readonly WATERLOGGED: (Internal.BooleanProperty) & (Internal.BooleanProperty);
        static readonly WEST_WALL: Internal.EnumProperty<Internal.WallSide>;
    }
    type WallBlock_ = WallBlock;
    class ModuleDescriptor$Requires$Modifier extends Internal.Enum<Internal.ModuleDescriptor$Requires$Modifier> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.ModuleDescriptor$Requires$Modifier>>;
        toString(): string;
        static valueOf(arg0: string): Internal.ModuleDescriptor$Requires$Modifier;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        name(): string;
        hashCode(): number;
        static values(): Internal.ModuleDescriptor$Requires$Modifier[];
        getDeclaringClass(): typeof Internal.ModuleDescriptor$Requires$Modifier;
        ordinal(): number;
        wait(): void;
        compareTo(arg0: Internal.ModuleDescriptor$Requires$Modifier_): number;
        "compareTo(java.lang.module.ModuleDescriptor$Requires$Modifier)"(arg0: Internal.ModuleDescriptor$Requires$Modifier_): number;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get declaringClass(): typeof Internal.ModuleDescriptor$Requires$Modifier
        static readonly STATIC: (Internal.ModuleDescriptor$Requires$Modifier) & (Internal.ModuleDescriptor$Requires$Modifier);
        static readonly MANDATED: (Internal.ModuleDescriptor$Requires$Modifier) & (Internal.ModuleDescriptor$Requires$Modifier);
        static readonly TRANSITIVE: (Internal.ModuleDescriptor$Requires$Modifier) & (Internal.ModuleDescriptor$Requires$Modifier);
        static readonly SYNTHETIC: (Internal.ModuleDescriptor$Requires$Modifier) & (Internal.ModuleDescriptor$Requires$Modifier);
    }
    type ModuleDescriptor$Requires$Modifier_ = ModuleDescriptor$Requires$Modifier | "static" | "mandated" | "transitive" | "synthetic";
    class BoilingWaterCauldronBlock extends Internal.LayeredCauldronBlock {
        constructor(properties: Internal.BlockBehaviour$Properties_, fillPredicate: Internal.Predicate_<Internal.Biome$Precipitation>, interactions: Internal.Map_<Internal.Item, Internal.CauldronInteraction>)
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        entityInside(state: Internal.BlockState_, level: Internal.Level_, pos: BlockPos_, entity: Internal.Entity_): void;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        static lowerFillLevel(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(state: Internal.BlockState_, direction: Internal.Direction_, neighborState: Internal.BlockState_, level: Internal.LevelAccessor_, currentPos: BlockPos_, neighborPos: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        static getWaterColor(state: Internal.BlockState_, level: Internal.BlockAndTintGetter_, pos: BlockPos_, i: number): number;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        modifyReturnValue$dbl000$use(original: Internal.InteractionResult_, state: Internal.BlockState_, level: Internal.Level_, pos: BlockPos_, player: Internal.Player_, hand: Internal.InteractionHand_, stack: Internal.ItemStack_): Internal.InteractionResult;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        handler$zmd000$onUse(state: Internal.BlockState_, world: Internal.Level_, pos: BlockPos_, player: Internal.Player_, hand: Internal.InteractionHand_, hit: Internal.BlockHitResult_, cir: Internal.CallbackInfoReturnable_<any>): void;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(level: Internal.Level_, state: Internal.BlockState_, pos: BlockPos_, entity: Internal.Entity_, fallDistance: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getId(): string;
        getLootTable(): ResourceLocation;
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        isFull(arg0: Internal.BlockState_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(state: Internal.BlockState_, level: Internal.Level_, pos: BlockPos_, random: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
        static readonly BOILING: (Internal.BooleanProperty) & (Internal.BooleanProperty);
    }
    type BoilingWaterCauldronBlock_ = BoilingWaterCauldronBlock;
    abstract class FocusTraversalPolicy {
        getClass(): typeof any;
        toString(): string;
        abstract getComponentAfter(arg0: Internal.Container_, arg1: Internal.Component_): Internal.Component;
        abstract getComponentBefore(arg0: Internal.Container_, arg1: Internal.Component_): Internal.Component;
        abstract getDefaultComponent(arg0: Internal.Container_): Internal.Component;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        abstract getLastComponent(arg0: Internal.Container_): Internal.Component;
        wait(): void;
        getInitialComponent(arg0: Internal.Window_): Internal.Component;
        wait(arg0: number): void;
        abstract getFirstComponent(arg0: Internal.Container_): Internal.Component;
        equals(arg0: any): boolean;
        get class(): typeof any
    }
    type FocusTraversalPolicy_ = FocusTraversalPolicy;
    class FloorCandleSkullBlock extends Internal.AbstractCandleSkullBlock implements Internal.IRecolorable {
        constructor(properties: Internal.BlockBehaviour$Properties_)
        constructor(properties: Internal.BlockBehaviour$Properties_, particle: Internal.Supplier_<Internal.ParticleType<Internal.ParticleOptions>>)
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        "extinguish(net.minecraft.world.entity.Entity,net.minecraft.world.level.block.state.BlockState,net.minecraft.core.BlockPos,net.minecraft.world.level.LevelAccessor)"(player: Internal.Entity_, state: Internal.BlockState_, pos: BlockPos_, world: Internal.LevelAccessor_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        isLitUp(state: Internal.BlockState_, level: Internal.BlockGetter_, pos: BlockPos_): boolean;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        getRenderShape(pState: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        setLitUp(state: Internal.BlockState_, world: Internal.LevelAccessor_, pos: BlockPos_, lit: boolean): void;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        getCloneItemStack(state: Internal.BlockState_, hitResult: Internal.HitResult_, world: Internal.BlockGetter_, pos: BlockPos_, player: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        newBlockEntity(pPos: BlockPos_, pState: Internal.BlockState_): Internal.BlockEntity;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        getDrops(state: Internal.BlockState_, builder: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        tryRecolor(level: Internal.Level_, blockPos: BlockPos_, blockState: Internal.BlockState_, dyeColor: Internal.DyeColor_): boolean;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        isLitUp(state: Internal.BlockState_): boolean;
        static isLit(arg0: Internal.BlockState_): boolean;
        interactWithProjectile(level: Internal.Level_, state: Internal.BlockState_, projectile: Internal.Projectile_, pos: BlockPos_): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        playExtinguishSound(world: Internal.LevelAccessor_, pos: BlockPos_): void;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        getTicker<T extends Internal.BlockEntity>(level: Internal.Level_, state: Internal.BlockState_, type: Internal.BlockEntityType_<T>): Internal.BlockEntityTicker<T>;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        use(state: Internal.BlockState_, level: Internal.Level_, pos: BlockPos_, player: Internal.Player_, hand: Internal.InteractionHand_, pHit: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        isDefaultColor(level: Internal.Level_, blockPos: BlockPos_, blockState: Internal.BlockState_): boolean;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        extinguish(player: Internal.Entity_, state: Internal.BlockState_, pos: BlockPos_, world: Internal.LevelAccessor_): boolean;
        wait(): void;
        static extinguish(arg0: Internal.Player_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        rotate(state: Internal.BlockState_, rotation: Internal.Rotation_): Internal.BlockState;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        isPathfindable(pState: Internal.BlockState_, pLevel: Internal.BlockGetter_, pPos: BlockPos_, pType: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        canBeExtinguishedBy(item: Internal.ItemStack_): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        handler$zmd000$onUse(state: Internal.BlockState_, world: Internal.Level_, pos: BlockPos_, player: Internal.Player_, hand: Internal.InteractionHand_, hit: Internal.BlockHitResult_, cir: Internal.CallbackInfoReturnable_<any>): void;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        lightUp(player: Internal.Entity_, state: Internal.BlockState_, pos: BlockPos_, world: Internal.LevelAccessor_, fireSourceType: Internal.ILightable$FireSourceType_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        static "extinguish(net.minecraft.world.entity.player.Player,net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.LevelAccessor,net.minecraft.core.BlockPos)"(arg0: Internal.Player_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): void;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        toggleLitState(state: Internal.BlockState_, lit: boolean): Internal.BlockState;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        arch$holder(): Internal.Holder<Internal.Block>;
        tryWash(level: Internal.Level_, pos: BlockPos_, state: Internal.BlockState_): boolean;
        getCloneItemStack(level: Internal.BlockGetter_, pos: BlockPos_, state: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        interactWithPlayer(state: Internal.BlockState_, level: Internal.Level_, pos: BlockPos_, player: Internal.Player_, handIn: Internal.InteractionHand_): Internal.InteractionResult;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        mirror(state: Internal.BlockState_, mirror: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(state: Internal.BlockState_, level: Internal.Level_, blockPos: BlockPos_, randomSource: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(pState: Internal.BlockState_, pLevel: Internal.BlockGetter_, pPos: BlockPos_, pContext: Internal.CollisionContext_): Internal.VoxelShape;
        spawnSmokeParticles(state: Internal.BlockState_, pos: BlockPos_, level: Internal.LevelAccessor_): void;
        playLightUpSound(world: Internal.LevelAccessor_, pos: BlockPos_, type: Internal.ILightable$FireSourceType_): void;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
        static readonly ROTATION: (Internal.IntegerProperty) & (Internal.IntegerProperty);
    }
    type FloorCandleSkullBlock_ = FloorCandleSkullBlock;
    interface TaskType$GuiProvider {
        abstract openCreationGui(arg0: Internal.Panel_, arg1: Internal.Quest_, arg2: Internal.Consumer_<Internal.Task>): void;
        (arg0: Internal.Panel, arg1: Internal.Quest, arg2: Internal.Consumer<Internal.Task>): void;
    }
    type TaskType$GuiProvider_ = TaskType$GuiProvider | ((arg0: Internal.Panel, arg1: Internal.Quest, arg2: Internal.Consumer<Internal.Task>)=> void);
    class Void_Assault_SHoulder_Weapon extends Internal.Item {
        constructor(arg0: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        setRarity(arg0: Internal.Rarity_): void;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        moonlight$addAdditionalBehavior(placementOverride: Internal.AdditionalItemPlacement_): void;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        static getPowerForTime(arg0: number): number;
        isFireResistant(): boolean;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isComplex(): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: Internal.DamageSource_): boolean;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        getDescriptionId(): string;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        moonlight$getClientAnimationExtension(): any;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getTypeData(): Internal.CompoundTag;
        getDefaultInstance(): Internal.ItemStack;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getItem(): Internal.Item;
        getBarColor(arg0: Internal.ItemStack_): number;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: Internal.DamageSource_): void;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        getDescription(): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        getClass(): typeof any;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        static byId(arg0: number): Internal.Item;
        getRenderPropertiesInternal(): any;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        moonlight$setClientAnimationExtension(obj: any): void;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        attachCapability(capabilityBuilder: Internal.CapabilityBuilder_<any, any, any>): void;
        setAttackDamage(attackDamage: number): void;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        toString(): string;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        notify(): void;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        handler$dpg000$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        canBeDepleted(): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        getDamage(arg0: Internal.ItemStack_): number;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        wait(arg0: number, arg1: number): void;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vec3f;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        get drinkingSound(): Internal.SoundEvent
        set rarity(arg0: Internal.Rarity_)
        get fireResistant(): boolean
        get complex(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get descriptionId(): string
        get creativeTab(): string
        get typeData(): Internal.CompoundTag
        get defaultInstance(): Internal.ItemStack
        set maxStackSize(arg0: number)
        set burnTime(i: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        get class(): typeof any
        get renderPropertiesInternal(): any
        set itemBuilder(b: Internal.ItemBuilder_)
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        set attackDamage(attackDamage: number)
        get edible(): boolean
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        get eatingSound(): Internal.SoundEvent
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
    }
    type Void_Assault_SHoulder_Weapon_ = Void_Assault_SHoulder_Weapon;
    class GuiFlowFitX extends Internal.GuiStackX {
        constructor()
        getClass(): typeof any;
        toString(): string;
        preferredHeight(arg0: Internal.List_<Internal.GuiChildControl>, arg1: number, arg2: number, arg3: number): number;
        flowX(arg0: Internal.List_<Internal.GuiChildControl>, arg1: number, arg2: Internal.Align_, arg3: number, arg4: number, arg5: boolean): void;
        notifyAll(): void;
        static areChildrenExpandableY(arg0: Internal.List_<Internal.GuiChildControl>): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        static areChildrenExpandableX(arg0: Internal.List_<Internal.GuiChildControl>): boolean;
        preferredWidth(arg0: Internal.List_<Internal.GuiChildControl>, arg1: number, arg2: number): number;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        minWidth(arg0: Internal.List_<Internal.GuiChildControl>, arg1: number, arg2: number): number;
        flowY(arg0: Internal.List_<Internal.GuiChildControl>, arg1: number, arg2: Internal.VAlign_, arg3: number, arg4: number, arg5: number, arg6: boolean): void;
        equals(arg0: any): boolean;
        minHeight(arg0: Internal.List_<Internal.GuiChildControl>, arg1: number, arg2: number, arg3: number): number;
        get class(): typeof any
    }
    type GuiFlowFitX_ = GuiFlowFitX;
    abstract class NavigatableSimiScreen extends Internal.AbstractSimiScreen {
        constructor()
        charTyped(arg0: string, arg1: number): boolean;
        onFilesDrop(arg0: Internal.List_<Internal.Path>): void;
        "setFocused(net.minecraft.client.gui.components.events.GuiEventListener)"(arg0: Internal.GuiEventListener_): void;
        narrationEnabled(): void;
        setFocused(arg0: boolean): void;
        renderDirtBackground(arg0: Internal.GuiGraphics_): void;
        setTooltipForNextRenderPass(arg0: Internal.List_<Internal.FormattedCharSequence>): void;
        mouseClicked(arg0: number, arg1: number, arg2: number): boolean;
        renderWithTooltip(arg0: Internal.GuiGraphics_, arg1: number, arg2: number, arg3: number): void;
        keyReleased(arg0: number, arg1: number, arg2: number): boolean;
        static isCut(arg0: number): boolean;
        getChildrenKonkrete(): Internal.List<any>;
        addRenderableWidget<T extends Internal.GuiEventListener & Internal.Renderable & Internal.NarratableEntry>(arg0: T): T;
        getNarratablesFancyMenu(): Internal.List<any>;
        getFocused(): Internal.GuiEventListener;
        "setTooltipForNextRenderPass(java.util.List,net.minecraft.client.gui.screens.inventory.tooltip.ClientTooltipPositioner,boolean)"(arg0: Internal.List_<Internal.FormattedCharSequence>, arg1: Internal.ClientTooltipPositioner_, arg2: boolean): void;
        nextFocusPath(arg0: Internal.FocusNavigationEvent_): Internal.ComponentPath;
        setFontKonkrete(arg0: net.minecraft.client.gui.Font_): void;
        centerScalingOn(arg0: number, arg1: number): void;
        createArrowEvent(arg0: Internal.ScreenDirection_): Internal.FocusNavigationEvent$ArrowNavigation;
        handleComponentClicked(arg0: Internal.Style_): boolean;
        keyPressed(arg0: number, arg1: number, arg2: number): boolean;
        controlling$getRenderables(): Internal.List<any>;
        static findNarratableWidget(arg0: Internal.List_<Internal.NarratableEntry>, arg1: Internal.NarratableEntry_): Internal.Screen$NarratableSearchResult;
        removed(): void;
        children(): Internal.List<Internal.GuiEventListener>;
        render(arg0: Internal.GuiGraphics_, arg1: number, arg2: number, arg3: number): void;
        addRenderableOnly<T extends Internal.Renderable>(arg0: T): T;
        static isSelectAll(arg0: number): boolean;
        isDragging(): boolean;
        getChildAt(arg0: number, arg1: number): Internal.Optional<Internal.GuiEventListener>;
        shouldCloseOnEsc(): boolean;
        getClass(): typeof any;
        isFocused(): boolean;
        balm_getRenderables(): Internal.List<any>;
        getTabOrderGroup(): number;
        setFocused(arg0: Internal.GuiEventListener_): void;
        getRenderables(): Internal.List<any>;
        init(arg0: Internal.Minecraft_, arg1: number, arg2: number): void;
        getBackgroundMusic(): Internal.Music;
        getNarrationMessage(): net.minecraft.network.chat.Component;
        constant$bel000$modifyBottomBgColor(color: number): number;
        getRenderablesKonkrete(): Internal.List<any>;
        toString(): string;
        notifyAll(): void;
        static isPaste(arg0: number): boolean;
        static hasControlDown(): boolean;
        afterKeyboardAction(): void;
        getCurrentFocusPath(): Internal.ComponentPath;
        balm_getChildren(): Internal.List<any>;
        isEquivalentTo(arg0: Internal.NavigatableSimiScreen_): boolean;
        wait(arg0: number): void;
        static wrapScreenError(arg0: Internal.Runnable_, arg1: string, arg2: string): void;
        afterMouseAction(): void;
        getMinecraft(): Internal.Minecraft;
        static getTooltipFromItem(arg0: Internal.Minecraft_, arg1: Internal.ItemStack_): Internal.List<net.minecraft.network.chat.Component>;
        getChildrenFancyMenu(): Internal.List<any>;
        notify(): void;
        shareContextWith(arg0: Internal.NavigatableSimiScreen_): void;
        afterMouseMove(): void;
        mouseMoved(arg0: number, arg1: number): void;
        getRectangle(): Internal.ScreenRectangle;
        getRenderablesFancyMenu(): Internal.List<any>;
        static isCopy(arg0: number): boolean;
        magicalSpecialHackyFocus(arg0: Internal.GuiEventListener_): void;
        get_initialized_FancyMenu(): boolean;
        tick(): void;
        isPauseScreen(): boolean;
        setDragging(arg0: boolean): void;
        wait(): void;
        constant$bel000$modifyTopBgColor(color: number): number;
        getTitle(): net.minecraft.network.chat.Component;
        isMouseOver(arg0: number, arg1: number): boolean;
        removeOnInitChildrenFancyMenu(): Internal.List<any>;
        getNarratables(): Internal.List<any>;
        static hasAltDown(): boolean;
        renderBackground(arg0: Internal.GuiGraphics_): void;
        mouseScrolled(arg0: number, arg1: number, arg2: number): boolean;
        wait(arg0: number, arg1: number): void;
        onClose(): void;
        invokeRemoveWidgetFancyMenu(arg0: Internal.GuiEventListener_): void;
        addWidget<T extends Internal.GuiEventListener & Internal.NarratableEntry>(arg0: T): T;
        static hasShiftDown(): boolean;
        balm_getNarratables(): Internal.List<any>;
        mouseDragged(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
        "setTooltipForNextRenderPass(net.minecraft.client.gui.components.Tooltip,net.minecraft.client.gui.screens.inventory.tooltip.ClientTooltipPositioner,boolean)"(arg0: Internal.Tooltip_, arg1: Internal.ClientTooltipPositioner_, arg2: boolean): void;
        centerScalingOnMouse(): void;
        resize(arg0: Internal.Minecraft_, arg1: number, arg2: number): void;
        mouseReleased(arg0: number, arg1: number, arg2: number): boolean;
        "setFocused(boolean)"(arg0: boolean): void;
        setTooltipForNextRenderPass(arg0: Internal.List_<Internal.FormattedCharSequence>, arg1: Internal.ClientTooltipPositioner_, arg2: boolean): void;
        hashCode(): number;
        added(): void;
        handleDelayedNarration(): void;
        equals(arg0: any): boolean;
        createTabEvent(): Internal.FocusNavigationEvent$TabNavigation;
        triggerImmediateNarration(arg0: boolean): void;
        setTooltipForNextRenderPass(arg0: Internal.Tooltip_, arg1: Internal.ClientTooltipPositioner_, arg2: boolean): void;
        set "focused(net.minecraft.client.gui.components.events.GuiEventListener)"(arg0: Internal.GuiEventListener_)
        set focused(arg0: boolean)
        set tooltipForNextRenderPass(arg0: Internal.List_<Internal.FormattedCharSequence>)
        get childrenKonkrete(): Internal.List<any>
        get narratablesFancyMenu(): Internal.List<any>
        get focused(): Internal.GuiEventListener
        set fontKonkrete(arg0: net.minecraft.client.gui.Font_)
        get dragging(): boolean
        get class(): typeof any
        get focused(): boolean
        get tabOrderGroup(): number
        set focused(arg0: Internal.GuiEventListener_)
        get renderables(): Internal.List<any>
        get backgroundMusic(): Internal.Music
        get narrationMessage(): net.minecraft.network.chat.Component
        get renderablesKonkrete(): Internal.List<any>
        get currentFocusPath(): Internal.ComponentPath
        get minecraft(): Internal.Minecraft
        get childrenFancyMenu(): Internal.List<any>
        get rectangle(): Internal.ScreenRectangle
        get renderablesFancyMenu(): Internal.List<any>
        get _initialized_FancyMenu(): boolean
        get pauseScreen(): boolean
        set dragging(arg0: boolean)
        get title(): net.minecraft.network.chat.Component
        get narratables(): Internal.List<any>
        set "focused(boolean)"(arg0: boolean)
        static readonly THINK_BACK: ("ponder.think_back") & (string);
        readonly transition: Internal.LerpedFloat;
    }
    type NavigatableSimiScreen_ = NavigatableSimiScreen;
    interface ISubtypeRegistration {
        abstract "useNbtForSubtypes(net.minecraft.world.item.Item[])"(...arg0: Internal.Item_[]): void;
        abstract useNbtForSubtypes(...arg0: Internal.Item_[]): void;
        registerSubtypeInterpreter(arg0: Internal.Item_, arg1: Internal.IIngredientSubtypeInterpreter_<Internal.ItemStack>): void;
        abstract registerSubtypeInterpreter<B, I>(arg0: Internal.IIngredientTypeWithSubtypes_<B, I>, arg1: B, arg2: Internal.IIngredientSubtypeInterpreter_<I>): void;
        abstract useNbtForSubtypes(...arg0: Internal.Fluid_[]): void;
        abstract "useNbtForSubtypes(net.minecraft.world.level.material.Fluid[])"(...arg0: Internal.Fluid_[]): void;
    }
    type ISubtypeRegistration_ = ISubtypeRegistration;
    class ThornwoodRootsFeature extends Feature<Internal.NoneFeatureConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.NoneFeatureConfiguration>)
        getClass(): typeof any;
        toString(): string;
        static checkNeighbors(arg0: Internal.Function_<BlockPos, Internal.BlockState>, arg1: BlockPos_, arg2: Internal.Predicate_<Internal.BlockState>): boolean;
        notifyAll(): void;
        place(arg0: Internal.NoneFeatureConfiguration_, arg1: Internal.WorldGenLevel_, arg2: Internal.ChunkGenerator_, arg3: Internal.RandomSource_, arg4: BlockPos_): boolean;
        notify(): void;
        static isAdjacentToAir(arg0: Internal.Function_<BlockPos, Internal.BlockState>, arg1: BlockPos_): boolean;
        wait(arg0: number, arg1: number): void;
        place(arg0: Internal.FeaturePlaceContext_<Internal.NoneFeatureConfiguration>): boolean;
        static isGrassOrDirt(arg0: Internal.LevelSimulatedReader_, arg1: BlockPos_): boolean;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        static isDirt(arg0: Internal.BlockState_): boolean;
        equals(arg0: any): boolean;
        static isReplaceable(arg0: Internal.TagKey_<Internal.Block>): Internal.Predicate<Internal.BlockState>;
        configuredCodec(): Internal.Codec<Internal.ConfiguredFeature<Internal.NoneFeatureConfiguration, Feature<Internal.NoneFeatureConfiguration>>>;
        get class(): typeof any
    }
    type ThornwoodRootsFeature_ = ThornwoodRootsFeature;
    interface INBTSerializable <T extends Internal.Tag> {
        abstract serializeNBT(): T;
        abstract deserializeNBT(arg0: T): void;
    }
    type INBTSerializable_<T extends Internal.Tag> = INBTSerializable<T>;
    class VolcanicCoreBlock extends Internal.BaseEntityBlock {
        constructor()
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        getTicker<T extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<T>): Internal.BlockEntityTicker<T>;
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        handler$zmd000$onUse(state: Internal.BlockState_, world: Internal.Level_, pos: BlockPos_, player: Internal.Player_, hand: Internal.InteractionHand_, hit: Internal.BlockHitResult_, cir: Internal.CallbackInfoReturnable_<any>): void;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        /**
         * @deprecated
        */
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
    }
    type VolcanicCoreBlock_ = VolcanicCoreBlock;
    interface ArtifactHandler {
        abstract getExtension(): string;
        abstract isAddedToClasspath(): boolean;
        abstract isIncludesDependencies(): boolean;
        abstract getClassifier(): string;
        abstract getPackaging(): string;
        abstract getLanguage(): string;
        abstract getDirectory(): string;
        get extension(): string
        get addedToClasspath(): boolean
        get includesDependencies(): boolean
        get classifier(): string
        get packaging(): string
        get language(): string
        get directory(): string
        readonly ROLE: ("org.apache.maven.artifact.handler.ArtifactHandler") & (string);
    }
    type ArtifactHandler_ = ArtifactHandler;
}
declare namespace com.ibm.icu.text {
    abstract class NumberFormat extends Internal.UFormat {
        constructor()
        static "getPercentInstance(com.ibm.icu.util.ULocale)"(arg0: Internal.ULocale_): com.ibm.icu.text.NumberFormat;
        format(arg0: Internal.BigDecimal_): string;
        abstract "format(java.math.BigInteger,java.lang.StringBuffer,java.text.FieldPosition)"(arg0: Internal.BigInteger_, arg1: Internal.StringBuffer_, arg2: Internal.FieldPosition_): Internal.StringBuffer;
        setMaximumIntegerDigits(arg0: number): void;
        format(arg0: com.ibm.icu.math.BigDecimal_): string;
        static getPercentInstance(): com.ibm.icu.text.NumberFormat;
        setRoundingMode(arg0: number): void;
        static getAvailableLocales(): Internal.Locale[];
        setParseIntegerOnly(arg0: boolean): void;
        setParseStrict(arg0: boolean): void;
        "format(java.lang.Object,java.lang.StringBuffer,java.text.FieldPosition)"(arg0: any, arg1: Internal.StringBuffer_, arg2: Internal.FieldPosition_): Internal.StringBuffer;
        static "getNumberInstance(com.ibm.icu.util.ULocale)"(arg0: Internal.ULocale_): com.ibm.icu.text.NumberFormat;
        setGroupingUsed(arg0: boolean): void;
        setContext(arg0: Internal.DisplayContext_): void;
        formatToCharacterIterator(arg0: any): Internal.AttributedCharacterIterator;
        setCurrency(arg0: com.ibm.icu.util.Currency_): void;
        abstract "format(com.ibm.icu.math.BigDecimal,java.lang.StringBuffer,java.text.FieldPosition)"(arg0: com.ibm.icu.math.BigDecimal_, arg1: Internal.StringBuffer_, arg2: Internal.FieldPosition_): Internal.StringBuffer;
        static getNumberInstance(): com.ibm.icu.text.NumberFormat;
        "format(java.math.BigInteger)"(arg0: Internal.BigInteger_): string;
        getMaximumIntegerDigits(): number;
        isGroupingUsed(): boolean;
        abstract "format(long,java.lang.StringBuffer,java.text.FieldPosition)"(arg0: number, arg1: Internal.StringBuffer_, arg2: Internal.FieldPosition_): Internal.StringBuffer;
        isParseIntegerOnly(): boolean;
        setMinimumIntegerDigits(arg0: number): void;
        static getIntegerInstance(): com.ibm.icu.text.NumberFormat;
        static getInstance(arg0: Internal.ULocale_): com.ibm.icu.text.NumberFormat;
        setMinimumFractionDigits(arg0: number): void;
        format(arg0: Internal.CurrencyAmount_, arg1: Internal.StringBuffer_, arg2: Internal.FieldPosition_): Internal.StringBuffer;
        "format(java.math.BigDecimal)"(arg0: Internal.BigDecimal_): string;
        static getNumberInstance(arg0: Internal.ULocale_): com.ibm.icu.text.NumberFormat;
        getContext(arg0: Internal.DisplayContext$Type_): Internal.DisplayContext;
        "format(long)"(arg0: number): string;
        clone(): any;
        getClass(): typeof any;
        static getAvailableULocales(): Internal.ULocale[];
        abstract format(arg0: com.ibm.icu.math.BigDecimal_, arg1: Internal.StringBuffer_, arg2: Internal.FieldPosition_): Internal.StringBuffer;
        /**
         * @deprecated
        */
        static getPatternForStyle(arg0: Internal.ULocale_, arg1: number): string;
        parseObject(arg0: string): any;
        parseObject(arg0: string, arg1: Internal.ParsePosition_): any;
        static unregister(arg0: any): boolean;
        getCurrency(): com.ibm.icu.util.Currency;
        format(arg0: Internal.CurrencyAmount_): string;
        "format(com.ibm.icu.util.CurrencyAmount)"(arg0: Internal.CurrencyAmount_): string;
        abstract "format(double,java.lang.StringBuffer,java.text.FieldPosition)"(arg0: number, arg1: Internal.StringBuffer_, arg2: Internal.FieldPosition_): Internal.StringBuffer;
        abstract format(arg0: Internal.BigDecimal_, arg1: Internal.StringBuffer_, arg2: Internal.FieldPosition_): Internal.StringBuffer;
        getMaximumFractionDigits(): number;
        toString(): string;
        "format(java.lang.Object)"(arg0: any): string;
        static getPercentInstance(arg0: Internal.ULocale_): com.ibm.icu.text.NumberFormat;
        static getCurrencyInstance(arg0: Internal.ULocale_): com.ibm.icu.text.NumberFormat;
        notifyAll(): void;
        /**
         * @deprecated
        */
        static getPatternForStyleAndNumberingSystem(arg0: Internal.ULocale_, arg1: string, arg2: number): string;
        static "getScientificInstance(java.util.Locale)"(arg0: Internal.Locale_): com.ibm.icu.text.NumberFormat;
        format(arg0: any): string;
        static getInstance(arg0: Internal.ULocale_, arg1: number): com.ibm.icu.text.NumberFormat;
        parseCurrency(arg0: Internal.CharSequence_, arg1: Internal.ParsePosition_): Internal.CurrencyAmount;
        getRoundingMode(): number;
        "format(com.ibm.icu.util.CurrencyAmount,java.lang.StringBuffer,java.text.FieldPosition)"(arg0: Internal.CurrencyAmount_, arg1: Internal.StringBuffer_, arg2: Internal.FieldPosition_): Internal.StringBuffer;
        isParseStrict(): boolean;
        getMinimumFractionDigits(): number;
        abstract "format(java.math.BigDecimal,java.lang.StringBuffer,java.text.FieldPosition)"(arg0: Internal.BigDecimal_, arg1: Internal.StringBuffer_, arg2: Internal.FieldPosition_): Internal.StringBuffer;
        abstract format(arg0: Internal.BigInteger_, arg1: Internal.StringBuffer_, arg2: Internal.FieldPosition_): Internal.StringBuffer;
        getLocale(arg0: Internal.ULocale$Type_): Internal.ULocale;
        wait(arg0: number): void;
        abstract format(arg0: number, arg1: Internal.StringBuffer_, arg2: Internal.FieldPosition_): Internal.StringBuffer;
        static "getScientificInstance(com.ibm.icu.util.ULocale)"(arg0: Internal.ULocale_): com.ibm.icu.text.NumberFormat;
        static "getInstance(java.util.Locale,int)"(arg0: Internal.Locale_, arg1: number): com.ibm.icu.text.NumberFormat;
        static "getCurrencyInstance(com.ibm.icu.util.ULocale)"(arg0: Internal.ULocale_): com.ibm.icu.text.NumberFormat;
        format(arg0: any, arg1: Internal.StringBuffer_, arg2: Internal.FieldPosition_): Internal.StringBuffer;
        abstract parse(arg0: string, arg1: Internal.ParsePosition_): number;
        static getScientificInstance(): com.ibm.icu.text.NumberFormat;
        parse(arg0: string): number;
        notify(): void;
        format(arg0: Internal.BigInteger_): string;
        static getInstance(arg0: Internal.Locale_, arg1: number): com.ibm.icu.text.NumberFormat;
        static "getIntegerInstance(com.ibm.icu.util.ULocale)"(arg0: Internal.ULocale_): com.ibm.icu.text.NumberFormat;
        setMaximumFractionDigits(arg0: number): void;
        static "getNumberInstance(java.util.Locale)"(arg0: Internal.Locale_): com.ibm.icu.text.NumberFormat;
        "format(double)"(arg0: number): string;
        static getNumberInstance(arg0: Internal.Locale_): com.ibm.icu.text.NumberFormat;
        static "getInstance(java.util.Locale)"(arg0: Internal.Locale_): com.ibm.icu.text.NumberFormat;
        static "getInstance(com.ibm.icu.util.ULocale)"(arg0: Internal.ULocale_): com.ibm.icu.text.NumberFormat;
        static "getCurrencyInstance(java.util.Locale)"(arg0: Internal.Locale_): com.ibm.icu.text.NumberFormat;
        abstract format(arg0: number, arg1: Internal.StringBuffer_, arg2: Internal.FieldPosition_): Internal.StringBuffer;
        static getPercentInstance(arg0: Internal.Locale_): com.ibm.icu.text.NumberFormat;
        static getInstance(): com.ibm.icu.text.NumberFormat;
        wait(): void;
        "format(com.ibm.icu.math.BigDecimal)"(arg0: com.ibm.icu.math.BigDecimal_): string;
        static getCurrencyInstance(arg0: Internal.Locale_): com.ibm.icu.text.NumberFormat;
        static "getPercentInstance(java.util.Locale)"(arg0: Internal.Locale_): com.ibm.icu.text.NumberFormat;
        format(arg0: number): string;
        static getInstance(arg0: number): com.ibm.icu.text.NumberFormat;
        wait(arg0: number, arg1: number): void;
        format(arg0: number): string;
        static registerFactory(arg0: Internal.NumberFormat$NumberFormatFactory_): any;
        getMinimumIntegerDigits(): number;
        static getScientificInstance(arg0: Internal.ULocale_): com.ibm.icu.text.NumberFormat;
        static getIntegerInstance(arg0: Internal.ULocale_): com.ibm.icu.text.NumberFormat;
        static getInstance(arg0: Internal.Locale_): com.ibm.icu.text.NumberFormat;
        static getIntegerInstance(arg0: Internal.Locale_): com.ibm.icu.text.NumberFormat;
        static "getInstance(com.ibm.icu.util.ULocale,int)"(arg0: Internal.ULocale_, arg1: number): com.ibm.icu.text.NumberFormat;
        static "getIntegerInstance(java.util.Locale)"(arg0: Internal.Locale_): com.ibm.icu.text.NumberFormat;
        static "getInstance(int)"(arg0: number): com.ibm.icu.text.NumberFormat;
        hashCode(): number;
        static getScientificInstance(arg0: Internal.Locale_): com.ibm.icu.text.NumberFormat;
        static getCurrencyInstance(): com.ibm.icu.text.NumberFormat;
        equals(arg0: any): boolean;
        set maximumIntegerDigits(arg0: number)
        get percentInstance(): com.ibm.icu.text.NumberFormat
        set roundingMode(arg0: number)
        get availableLocales(): Internal.Locale[]
        set parseIntegerOnly(arg0: boolean)
        set parseStrict(arg0: boolean)
        set groupingUsed(arg0: boolean)
        set context(arg0: Internal.DisplayContext_)
        set currency(arg0: com.ibm.icu.util.Currency_)
        get numberInstance(): com.ibm.icu.text.NumberFormat
        get maximumIntegerDigits(): number
        get groupingUsed(): boolean
        get parseIntegerOnly(): boolean
        set minimumIntegerDigits(arg0: number)
        get integerInstance(): com.ibm.icu.text.NumberFormat
        set minimumFractionDigits(arg0: number)
        get class(): typeof any
        get availableULocales(): Internal.ULocale[]
        get currency(): com.ibm.icu.util.Currency
        get maximumFractionDigits(): number
        get roundingMode(): number
        get parseStrict(): boolean
        get minimumFractionDigits(): number
        get scientificInstance(): com.ibm.icu.text.NumberFormat
        set maximumFractionDigits(arg0: number)
        get instance(): com.ibm.icu.text.NumberFormat
        get minimumIntegerDigits(): number
        get currencyInstance(): com.ibm.icu.text.NumberFormat
        static readonly PERCENTSTYLE: (2) & (number);
        static readonly ACCOUNTINGCURRENCYSTYLE: (7) & (number);
        static readonly CASHCURRENCYSTYLE: (8) & (number);
        static readonly ISOCURRENCYSTYLE: (5) & (number);
        static readonly INTEGER_FIELD: (0) & (number);
        static readonly INTEGERSTYLE: (4) & (number);
        static readonly SCIENTIFICSTYLE: (3) & (number);
        static readonly PLURALCURRENCYSTYLE: (6) & (number);
        static readonly STANDARDCURRENCYSTYLE: (9) & (number);
        static readonly FRACTION_FIELD: (1) & (number);
        static readonly NUMBERSTYLE: (0) & (number);
        static readonly CURRENCYSTYLE: (1) & (number);
    }
    type NumberFormat_ = NumberFormat;
}
