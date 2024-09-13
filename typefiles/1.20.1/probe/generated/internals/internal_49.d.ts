/// <reference path="./internal_*.d.ts" />
declare namespace org.apache.logging.log4j.core.config {
    class Node {
        constructor()
        constructor(parent: org.apache.logging.log4j.core.config.Node_, name: string, type: Internal.PluginType_<any>)
        constructor(node: org.apache.logging.log4j.core.config.Node_)
        isInstanceOf(clazz: typeof any): boolean;
        getClass(): typeof any;
        hasChildren(): boolean;
        toString(): string;
        getValue(): string;
        setParent(parent: org.apache.logging.log4j.core.config.Node_): void;
        notifyAll(): void;
        getChildren(): Internal.List<org.apache.logging.log4j.core.config.Node>;
        notify(): void;
        getObject<T>(clazz: T): T;
        wait(arg0: number, arg1: number): void;
        isRoot(): boolean;
        hashCode(): number;
        setValue(value: string): void;
        wait(): void;
        getName(): string;
        setObject(obj: any): void;
        wait(arg0: number): void;
        getObject<T>(): T;
        getParent(): this;
        equals(arg0: any): boolean;
        getType(): Internal.PluginType<any>;
        getAttributes(): Internal.Map<string, string>;
        get class(): typeof any
        get value(): string
        set parent(parent: org.apache.logging.log4j.core.config.Node_)
        get children(): Internal.List<org.apache.logging.log4j.core.config.Node>
        get root(): boolean
        set value(value: string)
        get name(): string
        set object(obj: any)
        get object(): T
        get parent(): org.apache.logging.log4j.core.config.Node
        get type(): Internal.PluginType<any>
        get attributes(): Internal.Map<string, string>
        static readonly CATEGORY: ("Core") & (string);
    }
    type Node_ = Node;
}
declare namespace Internal {
    interface ThreadContext$ContextStack extends Internal.Collection<string>, Internal.Serializable {
        abstract peek(): string;
        spliterator(): Internal.Spliterator<string>;
        abstract asList(): Internal.List<string>;
        forEach(arg0: Internal.Consumer_<string>): void;
        abstract getImmutableStackOrNull(): this;
        abstract isEmpty(): boolean;
        abstract pop(): string;
        abstract copy(): this;
        abstract retainAll(arg0: Internal.Collection_<any>): boolean;
        abstract containsAll(arg0: Internal.Collection_<any>): boolean;
        parallelStream(): Internal.Stream<string>;
        toArray<T>(arg0: Internal.IntFunction_<T[]>): T[];
        abstract iterator(): Internal.Iterator<string>;
        abstract contains(arg0: any): boolean;
        abstract getDepth(): number;
        abstract toArray<T>(arg0: T[]): T[];
        abstract "toArray(java.lang.Object[])"<T>(arg0: T[]): T[];
        abstract remove(arg0: any): boolean;
        "toArray(java.util.function.IntFunction)"<T>(arg0: Internal.IntFunction_<T[]>): T[];
        stream(): Internal.Stream<string>;
        abstract toArray(): any[];
        removeIf(arg0: Internal.Predicate_<string>): boolean;
        abstract push(message: string): void;
        abstract add(arg0: string): boolean;
        abstract hashCode(): number;
        abstract size(): number;
        abstract removeAll(arg0: Internal.Collection_<any>): boolean;
        abstract addAll(arg0: Internal.Collection_<string>): boolean;
        abstract clear(): void;
        abstract trim(depth: number): void;
        abstract equals(arg0: any): boolean;
        get immutableStackOrNull(): Internal.ThreadContext$ContextStack
        get empty(): boolean
        get depth(): number
    }
    type ThreadContext$ContextStack_ = ThreadContext$ContextStack;
    abstract class GuiFlow {
        constructor()
        getClass(): typeof any;
        toString(): string;
        abstract preferredHeight(arg0: Internal.List_<Internal.GuiChildControl>, arg1: number, arg2: number, arg3: number): number;
        abstract flowX(arg0: Internal.List_<Internal.GuiChildControl>, arg1: number, arg2: Internal.Align_, arg3: number, arg4: number, arg5: boolean): void;
        notifyAll(): void;
        static areChildrenExpandableY(arg0: Internal.List_<Internal.GuiChildControl>): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        static areChildrenExpandableX(arg0: Internal.List_<Internal.GuiChildControl>): boolean;
        abstract preferredWidth(arg0: Internal.List_<Internal.GuiChildControl>, arg1: number, arg2: number): number;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        abstract minWidth(arg0: Internal.List_<Internal.GuiChildControl>, arg1: number, arg2: number): number;
        abstract flowY(arg0: Internal.List_<Internal.GuiChildControl>, arg1: number, arg2: Internal.VAlign_, arg3: number, arg4: number, arg5: number, arg6: boolean): void;
        equals(arg0: any): boolean;
        abstract minHeight(arg0: Internal.List_<Internal.GuiChildControl>, arg1: number, arg2: number, arg3: number): number;
        get class(): typeof any
        static readonly FIT_X: (Internal.GuiFlowFitX) & (Internal.GuiFlowFitX);
        static readonly STACK_X: (Internal.GuiStackX) & (Internal.GuiStackX);
        static readonly STACK_Y: (Internal.GuiStackY) & (Internal.GuiStackY);
    }
    type GuiFlow_ = GuiFlow;
    class PaintScreenEventJS extends Internal.PaintEventJS implements Internal.UnitVariables {
        constructor(m: Internal.Minecraft_, s: Internal.Screen_, graphics: Internal.GuiGraphics_, painter: Internal.Painter_, mx: number, my: number, d: number)
        constructor(m: Internal.Minecraft_, graphics: Internal.GuiGraphics_, painter: Internal.Painter_, d: number)
        alignY(y: number, h: number, alignY: Internal.AlignMode_): number;
        getMatrix(): Matrix4f;
        getVariables(): Internal.VariableSet;
        translate(x: number, y: number, z: number): void;
        notify(): void;
        begin(type: Internal.VertexFormat$Mode_, format: Internal.VertexFormat_): void;
        bindTextureForSetup(tex: ResourceLocation_): void;
        scale(scale: number): void;
        multiply(q: Quaternionf_): void;
        /**
         * Checks if the player has the specified game stage
        */
        hasGameStage(stage: string): boolean;
        setShaderColor(r: number, g: number, b: number, a: number): void;
        vertex(m: Matrix4f_, x: number, y: number, z: number, col: number, u: number, v: number): void;
        getEntity(): Internal.Entity;
        end(): void;
        push(): void;
        wait(): void;
        vertex(m: Matrix4f_, x: number, y: number, z: number, col: number): void;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
        */
        cancel(): any;
        rawText(text: Internal.FormattedCharSequence_, x: number, y: number, color: number, shadow: boolean): void;
        beginQuads(texture: boolean): void;
        multiplyWithMatrix(m: Matrix4f_): void;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
        */
        success(): any;
        getServer(): Internal.MinecraftServer;
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
        blend(enabled: boolean): void;
        /**
         * Removes the specified game stage from the player
        */
        removeGameStage(stage: string): void;
        wait(arg0: number, arg1: number): void;
        alignX(x: number, w: number, alignX: Internal.AlignMode_): number;
        rectangle(x: number, y: number, z: number, w: number, h: number, color: number): void;
        beginQuads(format: Internal.VertexFormat_): void;
        getLevel(): Internal.Level;
        "beginQuads(com.mojang.blaze3d.vertex.VertexFormat)"(format: Internal.VertexFormat_): void;
        text(text: net.minecraft.network.chat.Component_, x: number, y: number, color: number, shadow: boolean): void;
        pop(): void;
        translate(x: number, y: number): void;
        getPlayer(): Internal.LocalPlayer;
        scale(x: number, y: number): void;
        rectangle(x: number, y: number, z: number, w: number, h: number, color: number, u0: number, v0: number, u1: number, v1: number): void;
        scale(x: number, y: number, z: number): void;
        "beginQuads(boolean)"(texture: boolean): void;
        setShaderTexture(tex: ResourceLocation_): void;
        toString(): string;
        setPositionColorShader(): void;
        notifyAll(): void;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
        */
        exit(value: any): any;
        rotateDeg(angle: number): void;
        /**
         * Adds the specified game stage to the player
        */
        addGameStage(stage: string): void;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
        */
        success(value: any): any;
        hashCode(): number;
        setPositionColorTextureShader(): void;
        wait(arg0: number): void;
        setShaderInstance(shader: Internal.Supplier_<Internal.ShaderInstance>): void;
        equals(arg0: any): boolean;
        rotateRad(angle: number): void;
        resetShaderColor(): void;
        get matrix(): Matrix4f
        get variables(): Internal.VariableSet
        get entity(): Internal.Entity
        get server(): Internal.MinecraftServer
        get class(): typeof any
        get level(): Internal.Level
        get player(): Internal.LocalPlayer
        set shaderTexture(tex: ResourceLocation_)
        set shaderInstance(shader: Internal.Supplier_<Internal.ShaderInstance>)
        readonly width: number;
        readonly mouseY: number;
        readonly inventory: boolean;
        readonly height: number;
        readonly painter: Internal.Painter;
        readonly mouseX: number;
    }
    type PaintScreenEventJS_ = PaintScreenEventJS;
    class ModParticle$5 extends Internal.ParticleType<Internal.MaledictusRingParticle$MaledictusRingData> {
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        getDeserializer(): Internal.ParticleOptions$Deserializer<Internal.MaledictusRingParticle$MaledictusRingData>;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        getOverrideLimiter(): boolean;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        codec(): Internal.Codec<Internal.MaledictusRingParticle$MaledictusRingData>;
        get class(): typeof any
        get deserializer(): Internal.ParticleOptions$Deserializer<Internal.MaledictusRingParticle$MaledictusRingData>
        get overrideLimiter(): boolean
    }
    type ModParticle$5_ = ModParticle$5;
    class ConstructPartReinforcedLegs extends Internal.ItemConstructPart {
        constructor(arg0: Internal.ConstructMaterial_)
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
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
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
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
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
    type ConstructPartReinforcedLegs_ = ConstructPartReinforcedLegs;
    class ModParticle$4 extends Internal.ParticleType<Internal.RingParticle$RingData> {
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        getDeserializer(): Internal.ParticleOptions$Deserializer<Internal.RingParticle$RingData>;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        getOverrideLimiter(): boolean;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        codec(): Internal.Codec<Internal.RingParticle$RingData>;
        get class(): typeof any
        get deserializer(): Internal.ParticleOptions$Deserializer<Internal.RingParticle$RingData>
        get overrideLimiter(): boolean
    }
    type ModParticle$4_ = ModParticle$4;
    interface IPlatformFluidHelper <T> {
        abstract bucketVolume(): number;
        abstract getFluidIngredientType(): Internal.IIngredientTypeWithSubtypes<Internal.Fluid, T>;
        abstract create(arg0: Internal.Fluid_, arg1: number): T;
        abstract create(arg0: Internal.Fluid_, arg1: number, arg2: Internal.CompoundTag_): T;
        get fluidIngredientType(): Internal.IIngredientTypeWithSubtypes<Internal.Fluid, T>
    }
    type IPlatformFluidHelper_<T> = IPlatformFluidHelper<T>;
    interface ReputationEventType {
        register(arg0: string): this;
        readonly VILLAGER_KILLED: Internal.ReputationEventType;
        readonly VILLAGER_HURT: Internal.ReputationEventType;
        readonly TRADE: Internal.ReputationEventType;
        readonly GOLEM_KILLED: Internal.ReputationEventType;
        readonly ZOMBIE_VILLAGER_CURED: Internal.ReputationEventType;
    }
    type ReputationEventType_ = ReputationEventType;
    class CustomMachineRecipeBuilderJS extends Internal.AbstractRecipeJSBuilder<Internal.CustomMachineRecipeBuilder> implements Internal.FluidRequirementJS, Internal.LightRequirementJS, Internal.EnergyRequirementJS, Internal.EnergyPerTickRequirementJS, Internal.DurabilityRequirementJS, Internal.DropRequirementJS, Internal.FunctionRequirementJS, Internal.ExperienceRequirementJS, Internal.ExperiencePerTickRequirementJS, Internal.ItemRequirementJS, Internal.ItemFilterRequirementJS, Internal.PositionRequirementJS, Internal.ItemTransformRequirementJS, Internal.FluidPerTickRequirementJS, Internal.RedstoneRequirementJS, Internal.BlockRequirementJS, Internal.SkyRequirementJS, Internal.TimeRequirementJS, Internal.DimensionRequirementJS, Internal.CommandRequirementJS, Internal.EffectRequirementJS, Internal.FuelRequirementJS, Internal.LootTableRequirementJS, Internal.BiomeRequirementJS, Internal.WeatherRequirementJS, Internal.ChunkloadRequirementJS, Internal.ButtonRequirementJS, Internal.EntityRequirementJS, Internal.StructureRequirementJS {
        constructor()
        giveEffectEachTick(effect: string, time: number, radius: number, levelOrFilter: any): Internal.RecipeJSBuilder;
        requireFunctionOnEnd(function_: Internal.RecipeFunction_): Internal.RecipeJSBuilder;
        transformItem(input: Internal.ItemStack_, output: Internal.ItemStack_, inputSlot: string, outputSlot: string): Internal.RecipeJSBuilder;
        transformItemTag(tag: string, inputAmount: number, inputNBT: Internal.CompoundTag_): Internal.RecipeJSBuilder;
        requireEnergy(amount: number): Internal.RecipeJSBuilder;
        biomeWhitelist(biomes: string[]): Internal.RecipeJSBuilder;
        customIngredientAction(filter: Internal.IngredientActionFilter_, id: string): Internal.RecipeJS;
        repairItem(stack: Internal.ItemStack_, amount: number, slot: string): Internal.RecipeJSBuilder;
        remove(): void;
        damageItem(stack: Internal.ItemStack_, amount: number, slot: string): Internal.RecipeJSBuilder;
        requireFuel(): Internal.RecipeJSBuilder;
        inputItemHasPriority(from: any): boolean;
        runCommandEachTick(command: string): Internal.RecipeJSBuilder;
        requireStructure(pattern: string[][], keys: Internal.Map_<string, string>, action: Internal.StructureRequirement$Action_): Internal.RecipeJSBuilder;
        getOriginalRecipe(): Internal.Recipe<any>;
        requireFluidPerTick(stack: Internal.FluidStackJS_, tank: string): Internal.RecipeJSBuilder;
        destroyAndPlaceBlockOnEnd(block: string, startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number, amount: number, filter: string[]): Internal.RecipeJSBuilder;
        group(g: string): Internal.RecipeJS;
        transformItemTag(tag: string, inputAmount: number, inputNBT: Internal.CompoundTag_, output: Internal.ItemStack_): Internal.RecipeJSBuilder;
        requireFluidPerTick(stack: Internal.FluidStackJS_): Internal.RecipeJSBuilder;
        requireFunctionOnStart(function_: Internal.RecipeFunction_): Internal.RecipeJSBuilder;
        consumeDropOnEnd(item: Internal.ItemStack_, amount: number, radius: number): Internal.RecipeJSBuilder;
        id(_id: ResourceLocation_): Internal.RecipeJS;
        /**
         * @deprecated
        */
        getType(): ResourceLocation;
        runCommandEachTick(command: string, permissionLevel: number, log: boolean): Internal.RecipeJSBuilder;
        produceEnergyPerTick(amount: number): Internal.RecipeJSBuilder;
        consumeDropsOnEnd(items: Internal.ItemStack_[], amount: number, radius: number, whitelist: boolean): Internal.RecipeJSBuilder;
        runCommandOnEnd(command: string, permissionLevel: number): Internal.RecipeJSBuilder;
        setValue<T>(key: Internal.RecipeKey_<T>, value: T): Internal.RecipeJS;
        transformItem(input: Internal.ItemStack_, output: Internal.ItemStack_): Internal.RecipeJSBuilder;
        getFromToString(): string;
        getClass(): typeof any;
        outputFluidHasPriority(from: any): boolean;
        writeInputItem(value: InputItem_): Internal.JsonElement;
        destroyBlockOnStart(filter: string[], whitelist: boolean, startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number): Internal.RecipeJSBuilder;
        outputValues(): Internal.RecipeComponentValue<any>[];
        /**
         * @deprecated
        */
        getSchema(): Internal.RecipeSchema;
        breakAndPlaceBlockOnEnd(block: string, startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number, amount: number, filter: string[]): Internal.RecipeJSBuilder;
        requireFluidTag(tag: string, amount: number, thing: any): Internal.RecipeJSBuilder;
        damageItemTag(tag: string, amount: number): Internal.RecipeJSBuilder;
        requireEntitiesHealth(amount: number, radius: number, filter: string[], whitelist: boolean): Internal.RecipeJSBuilder;
        requireItemFilter(ingredient: Internal.Ingredient_, slot: string): Internal.RecipeJSBuilder;
        ingredientAction(filter: Internal.IngredientActionFilter_, action: Internal.IngredientAction_): Internal.RecipeJS;
        dropItemOnEnd(stack: Internal.ItemStack_): Internal.RecipeJSBuilder;
        serialize(): void;
        runCommandOnEnd(command: string): Internal.RecipeJSBuilder;
        keepIngredient(filter: Internal.IngredientActionFilter_): Internal.RecipeJS;
        requireBlock(filter: string[], whitelist: boolean, startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number, amount: number, comparator: string): Internal.RecipeJSBuilder;
        mustSeeSky(): Internal.RecipeJSBuilder;
        requireLevelPerTick(levels: number): Internal.RecipeJSBuilder;
        placeBlockOnStart(block: string, startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number): Internal.RecipeJSBuilder;
        damageIngredient(filter: Internal.IngredientActionFilter_): Internal.RecipeJS;
        "runCommandOnStart(java.lang.String,int)"(command: string, permissionLevel: number): Internal.RecipeJSBuilder;
        save(): void;
        readOutputItem(from: any): OutputItem;
        checkAnyDrop(amount: number, radius: number): Internal.RecipeJSBuilder;
        runCommandEachTick(command: string, permissionLevel: number): Internal.RecipeJSBuilder;
        breakAndPlaceBlockOnEnd(block: string, startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number, amount: number, filter: string[], whitelist: boolean): Internal.RecipeJSBuilder;
        produceXp(xp: number): Internal.RecipeJSBuilder;
        wait(arg0: number): void;
        addRequirement(requirement: Internal.IRequirement_<any>): Internal.AbstractRecipeJSBuilder<Internal.CustomMachineRecipeBuilder>;
        requireFluidTagPerTick(tag: string, amount: number, nbt: Internal.Map_<any, any>, tank: string): Internal.RecipeJSBuilder;
        requireXp(xp: number): Internal.RecipeJSBuilder;
        produceItem(stack: Internal.ItemStack_, slot: string): Internal.RecipeJSBuilder;
        placeBlockOnEnd(block: string, startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number): Internal.RecipeJSBuilder;
        produceXpPerTick(xp: number): Internal.RecipeJSBuilder;
        breakAndPlaceBlockOnStart(block: string, startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number, amount: number): Internal.RecipeJSBuilder;
        "runCommandOnEnd(java.lang.String,boolean)"(command: string, log: boolean): Internal.RecipeJSBuilder;
        requireFluidTag(tag: string, amount: number, nbt: Internal.Map_<any, any>, tank: string): Internal.RecipeJSBuilder;
        writeOutputFluid(value: Internal.OutputFluid_): Internal.JsonElement;
        "giveEffectOnEnd(java.lang.String,int,int,java.lang.String[])"(effect: string, time: number, radius: number, filter: string[]): Internal.RecipeJSBuilder;
        dimensionBlacklist(dimensions: string[]): Internal.RecipeJSBuilder;
        checkDrop(item: Internal.ItemStack_, amount: number, radius: number): Internal.RecipeJSBuilder;
        produceFluid(stack: Internal.FluidStackJS_): Internal.RecipeJSBuilder;
        readInputItem(from: any): InputItem;
        get(key: string): any;
        damageItemNoBreak(stack: Internal.ItemStack_, amount: number, slot: string): Internal.RecipeJSBuilder;
        produceItem(stack: Internal.ItemStack_): Internal.RecipeJSBuilder;
        runCommandEachTick(command: string, log: boolean): Internal.RecipeJSBuilder;
        getOriginalRecipeResult(): Internal.ItemStack;
        requireItemTag(tag: string, amount: number, thing: any): Internal.RecipeJSBuilder;
        transformItem(input: Internal.ItemStack_, output: Internal.ItemStack_, inputSlot: string, outputSlot: string, nbt: Internal.Function_<Internal.Map<any, any>, any>): Internal.RecipeJSBuilder;
        requireFluidTag(tag: string, amount: number): Internal.RecipeJSBuilder;
        wait(): void;
        destroyAndPlaceBlockOnStart(block: string, startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number, amount: number, filter: string[], whitelist: boolean): Internal.RecipeJSBuilder;
        set(key: string, value: any): Internal.RecipeJS;
        produceLevel(levels: number): Internal.RecipeJSBuilder;
        destroyStructure(pattern: string[][], keys: Internal.Map_<string, string>): Internal.RecipeJSBuilder;
        requireFunctionEachTick(function_: Internal.RecipeFunction_): Internal.RecipeJSBuilder;
        placeStructure(pattern: string[][], keys: Internal.Map_<string, string>, drops: boolean): Internal.RecipeJSBuilder;
        requireBlockLight(level: string): Internal.RecipeJSBuilder;
        "runCommandOnEnd(java.lang.String,int)"(command: string, permissionLevel: number): Internal.RecipeJSBuilder;
        requireItemTag(tag: string, amount: number, nbt: Internal.Map_<any, any>, slot: string): Internal.RecipeJSBuilder;
        deserialize(merge: boolean): void;
        "giveEffectOnEnd(java.lang.String,int,int,int)"(effect: string, time: number, radius: number, level: number): Internal.RecipeJSBuilder;
        damageItemTagNoBreak(tag: string, amount: number, nbt: Internal.Map_<any, any>, slot: string): Internal.RecipeJSBuilder;
        requireLevel(levels: number): Internal.RecipeJSBuilder;
        requireItemTag(tag: string): Internal.RecipeJSBuilder;
        breakBlockOnStart(filter: string[], whitelist: boolean, startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number): Internal.RecipeJSBuilder;
        checkDrops(items: Internal.ItemStack_[], amount: number, radius: number, whitelist: boolean): Internal.RecipeJSBuilder;
        chunkload(): Internal.RecipeJSBuilder;
        destroyAndPlaceBlockOnStart(block: string, startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number, amount: number): Internal.RecipeJSBuilder;
        jei(): Internal.AbstractRecipeJSBuilder<Internal.CustomMachineRecipeBuilder>;
        getValue<T>(key: Internal.RecipeKey_<T>): T;
        transformItemTag(tag: string): Internal.RecipeJSBuilder;
        requireFluidTagPerTick(tag: string, amount: number, thing: any): Internal.RecipeJSBuilder;
        hasOutput(match: Internal.ReplacementMatch_): boolean;
        damageItemNoBreak(stack: Internal.ItemStack_, amount: number): Internal.RecipeJSBuilder;
        produceEnergy(amount: number): Internal.RecipeJSBuilder;
        consumeAnyDropOnStart(amount: number, radius: number): Internal.RecipeJSBuilder;
        consumeIngredient(filter: Internal.IngredientActionFilter_): Internal.RecipeJS;
        writeInputFluid(value: Internal.InputFluid_): Internal.JsonElement;
        breakAndPlaceBlockOnStart(block: string, startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number, amount: number, filter: string[], whitelist: boolean): Internal.RecipeJSBuilder;
        runCommandOnEnd(command: string, log: boolean): Internal.RecipeJSBuilder;
        requireSkyLight(level: string): Internal.RecipeJSBuilder;
        appearance(consumer: Internal.Consumer_<Internal.MachineAppearanceBuilderJS>): this;
        breakStructure(pattern: string[][], keys: Internal.Map_<string, string>): Internal.RecipeJSBuilder;
        chance(chance: number): Internal.AbstractRecipeJSBuilder<Internal.CustomMachineRecipeBuilder>;
        consumeEntityHealthOnEnd(amount: number, radius: number, filter: string[], whitelist: boolean): Internal.RecipeJSBuilder;
        /**
         * @deprecated
        */
        setGroup(group: string): void;
        breakBlockOnStart(filter: string[], whitelist: boolean, startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number, amount: number): Internal.RecipeJSBuilder;
        placeBlockOnStart(block: string, startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number, amount: number): Internal.RecipeJSBuilder;
        /**
         * @deprecated
        */
        getOrCreateId(): ResourceLocation;
        hasInput(match: Internal.ReplacementMatch_): boolean;
        damageItemTagNoBreak(tag: string, amount: number, thing: any): Internal.RecipeJSBuilder;
        replaceOutput(match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): boolean;
        equals(arg0: any): boolean;
        requireFluid(stack: Internal.FluidStackJS_): Internal.RecipeJSBuilder;
        /**
         * @deprecated
        */
        getGroup(): string;
        giveEffectOnEnd(effect: string, time: number, radius: number, level: number, filter: string[]): Internal.RecipeJSBuilder;
        requireWeather(weather: string): Internal.RecipeJSBuilder;
        consumeDropsOnStart(items: Internal.ItemStack_[], amount: number, radius: number): Internal.RecipeJSBuilder;
        getSerializationTypeFunction(): Internal.RecipeTypeFunction;
        breakAndPlaceBlockOnEnd(block: string, startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number, amount: number): Internal.RecipeJSBuilder;
        destroyBlockOnEnd(filter: string[], whitelist: boolean, startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number, amount: number): Internal.RecipeJSBuilder;
        requireFuel(amount: number): Internal.RecipeJSBuilder;
        delay(delay: number): Internal.AbstractRecipeJSBuilder<Internal.CustomMachineRecipeBuilder>;
        breakAndPlaceBlockOnStart(block: string, startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number): Internal.RecipeJSBuilder;
        readOutputFluid(from: any): Internal.OutputFluid;
        placeBlockOnEnd(block: string, startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number, amount: number): Internal.RecipeJSBuilder;
        requireTime(time: string): Internal.RecipeJSBuilder;
        hasChanged(): boolean;
        requireItemFilter(ingredient: Internal.Ingredient_): Internal.RecipeJSBuilder;
        initValues(created: boolean): void;
        createRecipe(): Internal.Recipe<any>;
        modifyResult(callback: Internal.ModifyRecipeResultCallback_): Internal.RecipeJS;
        replaceInput(match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): boolean;
        killEntitiesOnStart(amount: number, radius: number, filter: string[], whitelist: boolean): Internal.RecipeJSBuilder;
        requireBlock(filter: string[], whitelist: boolean, startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number, amount: number): Internal.RecipeJSBuilder;
        inputFluidHasPriority(from: any): boolean;
        requireFunctionToStart(function_: Internal.RecipeFunction_): Internal.RecipeJSBuilder;
        readInputFluid(from: any): Internal.InputFluid;
        requireRedstone(power: string): Internal.RecipeJSBuilder;
        consumeDropOnStart(item: Internal.ItemStack_, amount: number, radius: number): Internal.RecipeJSBuilder;
        runCommandOnStart(command: string, permissionLevel: number, log: boolean): Internal.RecipeJSBuilder;
        destroyAndPlaceBlockOnEnd(block: string, startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number): Internal.RecipeJSBuilder;
        giveEffectEachTick(effect: string, time: number, radius: number): Internal.RecipeJSBuilder;
        "runCommandOnStart(java.lang.String,boolean)"(command: string, log: boolean): Internal.RecipeJSBuilder;
        consumeEntityHealthOnStart(amount: number, radius: number, filter: string[], whitelist: boolean): Internal.RecipeJSBuilder;
        destroyBlockOnEnd(filter: string[], whitelist: boolean, startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number): Internal.RecipeJSBuilder;
        requireItemTag(tag: string, amount: number): Internal.RecipeJSBuilder;
        destroyAndPlaceBlockOnStart(block: string, startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number): Internal.RecipeJSBuilder;
        error(error: string, ...args: any[]): Internal.RecipeJSBuilder;
        damageItemTagNoBreak(tag: string, amount: number): Internal.RecipeJSBuilder;
        produceFluidPerTick(stack: Internal.FluidStackJS_): Internal.RecipeJSBuilder;
        giveEffectOnEnd(effect: string, time: number, radius: number): Internal.RecipeJSBuilder;
        giveEffectOnEnd(effect: string, time: number, radius: number, level: number): Internal.RecipeJSBuilder;
        damageItem(stack: Internal.ItemStack_, amount: number): Internal.RecipeJSBuilder;
        toString(): string;
        destroyBlockOnStart(filter: string[], whitelist: boolean, startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number, amount: number): Internal.RecipeJSBuilder;
        notifyAll(): void;
        runCommandOnStart(command: string, log: boolean): Internal.RecipeJSBuilder;
        chunkload(radius: number): Internal.RecipeJSBuilder;
        requireEntities(amount: number, radius: number, filter: string[], whitelist: boolean): Internal.RecipeJSBuilder;
        getId(): string;
        afterLoaded(): void;
        killEntitiesOnEnd(amount: number, radius: number, filter: string[], whitelist: boolean): Internal.RecipeJSBuilder;
        produceFluidPerTick(stack: Internal.FluidStackJS_, tank: string): Internal.RecipeJSBuilder;
        repairItemTag(tag: string, amount: number): Internal.RecipeJSBuilder;
        requireEnergyPerTick(amount: number): Internal.RecipeJSBuilder;
        blockRequirement(mode: Internal.RequirementIOMode_, action: Internal.BlockRequirement$ACTION_, block: string, startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number, amount: number, comparator: string, stringFilter: string[], whitelist: boolean): Internal.RecipeJSBuilder;
        resetOnError(): this;
        requireButtonPressed(id: string): Internal.RecipeJSBuilder;
        convertJavaToJs(cx: Internal.Context_, scope: Internal.Scriptable_, staticType: typeof any): Internal.Scriptable;
        transformItem(input: Internal.ItemStack_): Internal.RecipeJSBuilder;
        inputValues(): Internal.RecipeComponentValue<any>[];
        notify(): void;
        replaceIngredient(filter: Internal.IngredientActionFilter_, item: Internal.ItemStack_): Internal.RecipeJS;
        requireBlock(filter: string[], whitelist: boolean, startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number): Internal.RecipeJSBuilder;
        makeBuilder(): Internal.CustomMachineRecipeBuilder;
        requireItem(stack: Internal.ItemStack_, slot: string): Internal.RecipeJSBuilder;
        destroyAndPlaceBlockOnStart(block: string, startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number, amount: number, filter: string[]): Internal.RecipeJSBuilder;
        stage(s: string): Internal.RecipeJS;
        breakAndPlaceBlockOnEnd(block: string, startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number): Internal.RecipeJSBuilder;
        requireFluidTagPerTick(tag: string, amount: number): Internal.RecipeJSBuilder;
        dropItemOnStart(stack: Internal.ItemStack_): Internal.RecipeJSBuilder;
        transformItemTag(tag: string, inputAmount: number, inputNBT: Internal.CompoundTag_, output: Internal.ItemStack_, inputSlot: string, outputSlot: string, nbt: Internal.Function_<Internal.Map<any, any>, any>): Internal.RecipeJSBuilder;
        "runCommandEachTick(java.lang.String,int)"(command: string, permissionLevel: number): Internal.RecipeJSBuilder;
        gui(...elements: Internal.JsonObject_[]): this;
        runCommandOnStart(command: string, permissionLevel: number): Internal.RecipeJSBuilder;
        consumeDropsOnEnd(items: Internal.ItemStack_[], amount: number, radius: number): Internal.RecipeJSBuilder;
        repairItem(stack: Internal.ItemStack_, amount: number): Internal.RecipeJSBuilder;
        runCommandOnStart(command: string): Internal.RecipeJSBuilder;
        outputItemHasPriority(from: any): boolean;
        priority(priority: number): Internal.AbstractRecipeJSBuilder<Internal.CustomMachineRecipeBuilder>;
        lootTableOutput(lootTable: string): Internal.RecipeJSBuilder;
        requireXpPerTick(xp: number): Internal.RecipeJSBuilder;
        info(consumer: Internal.Consumer_<Internal.DisplayInfoTemplate>): Internal.AbstractRecipeJSBuilder<Internal.CustomMachineRecipeBuilder>;
        consumeAnyDropOnEnd(amount: number, radius: number): Internal.RecipeJSBuilder;
        requirePosition(xString: string, yString: string, zString: string): Internal.RecipeJSBuilder;
        giveEffectEachTick(effect: string, time: number, radius: number, level: number, filter: string[]): Internal.RecipeJSBuilder;
        consumeDropsOnStart(items: Internal.ItemStack_[], amount: number, radius: number, whitelist: boolean): Internal.RecipeJSBuilder;
        getAllValueMap(): Internal.Map<string, Internal.RecipeComponentValue<any>>;
        checkDrops(items: Internal.ItemStack_[], amount: number, radius: number): Internal.RecipeJSBuilder;
        hide(): Internal.AbstractRecipeJSBuilder<Internal.CustomMachineRecipeBuilder>;
        destroyAndPlaceBlockOnEnd(block: string, startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number, amount: number, filter: string[], whitelist: boolean): Internal.RecipeJSBuilder;
        requireItem(stack: Internal.ItemStack_): Internal.RecipeJSBuilder;
        dimensionWhitelist(dimensions: string[]): Internal.RecipeJSBuilder;
        damageItemTag(tag: string, amount: number, thing: any): Internal.RecipeJSBuilder;
        lootTableOutput(lootTable: string, luck: number): Internal.RecipeJSBuilder;
        produceLevelPerTick(levels: number): Internal.RecipeJSBuilder;
        requireButtonReleased(id: string): Internal.RecipeJSBuilder;
        wait(arg0: number, arg1: number): void;
        requireWeatherOnMachine(weather: string): Internal.RecipeJSBuilder;
        writeOutputItem(value: OutputItem_): Internal.JsonElement;
        damageItemTag(tag: string, amount: number, nbt: Internal.Map_<any, any>, slot: string): Internal.RecipeJSBuilder;
        breakAndPlaceBlockOnStart(block: string, startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number, amount: number, filter: string[]): Internal.RecipeJSBuilder;
        getPath(): string;
        getMod(): string;
        destroyAndPlaceBlockOnEnd(block: string, startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number, amount: number): Internal.RecipeJSBuilder;
        breakBlockOnEnd(filter: string[], whitelist: boolean, startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number): Internal.RecipeJSBuilder;
        biomeBlacklist(biomes: string[]): Internal.RecipeJSBuilder;
        requireStructure(pattern: string[][], keys: Internal.Map_<string, string>): Internal.RecipeJSBuilder;
        "runCommandEachTick(java.lang.String,boolean)"(command: string, log: boolean): Internal.RecipeJSBuilder;
        transformItemTag(tag: string, inputAmount: number, inputNBT: Internal.CompoundTag_, output: Internal.ItemStack_, inputSlot: string, outputSlot: string): Internal.RecipeJSBuilder;
        produceFluid(stack: Internal.FluidStackJS_, tank: string): Internal.RecipeJSBuilder;
        runCommandOnEnd(command: string, permissionLevel: number, log: boolean): Internal.RecipeJSBuilder;
        hashCode(): number;
        merge(j: Internal.JsonObject_): Internal.RecipeJS;
        damageIngredient(filter: Internal.IngredientActionFilter_, damage: number): Internal.RecipeJS;
        getOriginalRecipeIngredients(): Internal.List<Internal.Ingredient>;
        requireFluid(stack: Internal.FluidStackJS_, tank: string): Internal.RecipeJSBuilder;
        repairItemTag(tag: string, amount: number, thing: any): Internal.RecipeJSBuilder;
        giveEffectOnEnd(effect: string, time: number, radius: number, filter: string[]): Internal.RecipeJSBuilder;
        breakBlockOnEnd(filter: string[], whitelist: boolean, startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number, amount: number): Internal.RecipeJSBuilder;
        repairItemTag(tag: string, amount: number, nbt: Internal.Map_<any, any>, slot: string): Internal.RecipeJSBuilder;
        get originalRecipe(): Internal.Recipe<any>
        /**
         * @deprecated
        */
        get type(): ResourceLocation
        get fromToString(): string
        get class(): typeof any
        /**
         * @deprecated
        */
        get schema(): Internal.RecipeSchema
        get originalRecipeResult(): Internal.ItemStack
        /**
         * @deprecated
        */
        set group(group: string)
        /**
         * @deprecated
        */
        get orCreateId(): ResourceLocation
        /**
         * @deprecated
        */
        get group(): string
        get serializationTypeFunction(): Internal.RecipeTypeFunction
        get id(): string
        get allValueMap(): Internal.Map<string, Internal.RecipeComponentValue<any>>
        get path(): string
        get mod(): string
        get originalRecipeIngredients(): Internal.List<Internal.Ingredient>
    }
    type CustomMachineRecipeBuilderJS_ = CustomMachineRecipeBuilderJS;
    class LightningRodBlock extends Internal.RodBlock implements Internal.SimpleWaterloggedBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
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
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        onLightningStrike(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
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
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
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
        static readonly RANGE: (128) & (number);
        static readonly WATERLOGGED: (Internal.BooleanProperty) & (Internal.BooleanProperty);
        static readonly POWERED: (Internal.BooleanProperty) & (Internal.BooleanProperty);
    }
    type LightningRodBlock_ = LightningRodBlock;
    class FireworkRocketItem extends Internal.Item {
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
        static setDuration(arg0: Internal.ItemStack_, arg1: number): void;
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
        getDefaultInstance(): Internal.ItemStack;
        getTypeData(): Internal.CompoundTag;
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
        get defaultInstance(): Internal.ItemStack
        get typeData(): Internal.CompoundTag
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
        static readonly TAG_EXPLOSION_COLORS: ("Colors") & (string);
        static readonly TAG_EXPLOSION_TYPE: ("Type") & (string);
        static readonly TAG_EXPLOSION_FADECOLORS: ("FadeColors") & (string);
        static readonly TAG_FLIGHT: ("Flight") & (string);
        static readonly TAG_EXPLOSION_FLICKER: ("Flicker") & (string);
        static readonly ROCKET_PLACEMENT_OFFSET: (0.15) & (number);
        static readonly TAG_EXPLOSIONS: ("Explosions") & (string);
        static readonly TAG_FIREWORKS: ("Fireworks") & (string);
        static readonly TAG_EXPLOSION_TRAIL: ("Trail") & (string);
        static readonly CRAFTABLE_DURATIONS: number[];
        static readonly TAG_EXPLOSION: ("Explosion") & (string);
    }
    type FireworkRocketItem_ = FireworkRocketItem;
    interface IntUnaryOperator {
        compose(arg0: Internal.IntUnaryOperator_): this;
        identity(): this;
        abstract applyAsInt(arg0: number): number;
        andThen(arg0: Internal.IntUnaryOperator_): this;
        (arg0: number): number;
    }
    type IntUnaryOperator_ = IntUnaryOperator | ((arg0: number)=> number);
    class RecipeSchemaType {
        constructor(namespace: Internal.RecipeNamespace_, id: ResourceLocation_, schema: Internal.RecipeSchema_)
        getClass(): typeof any;
        getSerializer(): Internal.RecipeSerializer<any>;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        get serializer(): Internal.RecipeSerializer<any>
        readonly schema: Internal.RecipeSchema;
        parent: Internal.RecipeSchemaType;
        readonly namespace: Internal.RecipeNamespace;
        readonly id: ResourceLocation;
    }
    type RecipeSchemaType_ = RecipeSchemaType;
    interface ItemColorsExtended {
        abstract sodium$getColorProvider(arg0: Internal.ItemStack_): Internal.ItemColor;
        (arg0: Internal.ItemStack): Internal.ItemColor_;
    }
    type ItemColorsExtended_ = ((arg0: Internal.ItemStack)=> Internal.ItemColor_) | ItemColorsExtended;
    interface AccessorKeyMapping {
        getAllKeyMappings(): Internal.Map<string, Internal.KeyMapping>;
        get allKeyMappings(): Internal.Map<string, Internal.KeyMapping>
    }
    type AccessorKeyMapping_ = AccessorKeyMapping;
    class AsyncLoggerConfig extends Internal.LoggerConfig {
        log(event: Internal.LogEvent_): void;
        removeFilter(filter: Internal.Filter_): void;
        /**
         * @deprecated
        */
        static "createLogger(java.lang.String,org.apache.logging.log4j.Level,java.lang.String,java.lang.String,org.apache.logging.log4j.core.config.AppenderRef[],org.apache.logging.log4j.core.config.Property[],org.apache.logging.log4j.core.config.Configuration,org.apache.logging.log4j.core.Filter)"(additivity: string, level: org.apache.logging.log4j.Level_, loggerName: string, includeLocation: string, refs: Internal.AppenderRef_[], properties: org.apache.logging.log4j.core.config.Property_[], config: org.apache.logging.log4j.core.config.Configuration_, filter: Internal.Filter_): Internal.LoggerConfig;
        notify(): void;
        isPropertiesRequireLookup(): boolean;
        static newAsyncBuilder<B extends Internal.AsyncLoggerConfig$Builder<B>>(): B;
        getLevel(): org.apache.logging.log4j.Level;
        getAppenderRefs(): Internal.List<Internal.AppenderRef>;
        isFiltered(event: Internal.LogEvent_): boolean;
        addAppender(appender: Internal.Appender_, level: org.apache.logging.log4j.Level_, filter: Internal.Filter_): void;
        setLevel(level: org.apache.logging.log4j.Level_): void;
        initialize(): void;
        setLogEventFactory(logEventFactory: Internal.LogEventFactory_): void;
        getReliabilityStrategy(): Internal.ReliabilityStrategy;
        start(): void;
        /**
         * @deprecated
        */
        getProperties(): Internal.Map<org.apache.logging.log4j.core.config.Property, boolean>;
        wait(): void;
        stop(): void;
        isStopping(): boolean;
        getPropertyList(): Internal.List<org.apache.logging.log4j.core.config.Property>;
        getClass(): typeof any;
        getAppenders(): Internal.Map<string, Internal.Appender>;
        getExplicitLevel(): org.apache.logging.log4j.Level;
        /**
         * @deprecated
        */
        static createLogger(additivity: boolean, level: org.apache.logging.log4j.Level_, loggerName: string, includeLocation: string, refs: Internal.AppenderRef_[], properties: org.apache.logging.log4j.core.config.Property_[], config: org.apache.logging.log4j.core.config.Configuration_, filter: Internal.Filter_): Internal.LoggerConfig;
        hasFilter(): boolean;
        isStarting(): boolean;
        /**
         * @deprecated
        */
        static createLogger(additivity: string, level: org.apache.logging.log4j.Level_, loggerName: string, includeLocation: string, refs: Internal.AppenderRef_[], properties: org.apache.logging.log4j.core.config.Property_[], config: org.apache.logging.log4j.core.config.Configuration_, filter: Internal.Filter_): Internal.LoggerConfig;
        isStarted(): boolean;
        removeAppender(name: string): void;
        getLogEventFactory(): Internal.LogEventFactory;
        wait(arg0: number, arg1: number): void;
        getFilter(): Internal.Filter;
        getState(): Internal.LifeCycle$State;
        log(loggerName: string, fqcn: string, location: Internal.StackTraceElement_, marker: org.apache.logging.log4j.Marker_, level: org.apache.logging.log4j.Level_, data: org.apache.logging.log4j.message.Message_, t: Internal.Throwable_): void;
        requiresLocation(): boolean;
        isInitialized(): boolean;
        static newBuilder<B extends Internal.LoggerConfig$Builder<B>>(): B;
        getName(): string;
        log(loggerName: string, fqcn: string, marker: org.apache.logging.log4j.Marker_, level: org.apache.logging.log4j.Level_, data: org.apache.logging.log4j.message.Message_, t: Internal.Throwable_): void;
        addFilter(filter: Internal.Filter_): void;
        stop(timeout: number, timeUnit: Internal.TimeUnit_): boolean;
        /**
         * @deprecated
        */
        static createLogger(additivity: string, levelName: string, loggerName: string, includeLocation: string, refs: Internal.AppenderRef_[], properties: org.apache.logging.log4j.core.config.Property_[], config: org.apache.logging.log4j.core.config.Configuration_, filter: Internal.Filter_): Internal.LoggerConfig;
        createRingBufferAdmin(contextName: string): Internal.RingBufferAdmin;
        isStopped(): boolean;
        /**
         * @deprecated
        */
        static "createLogger(boolean,org.apache.logging.log4j.Level,java.lang.String,java.lang.String,org.apache.logging.log4j.core.config.AppenderRef[],org.apache.logging.log4j.core.config.Property[],org.apache.logging.log4j.core.config.Configuration,org.apache.logging.log4j.core.Filter)"(additivity: boolean, level: org.apache.logging.log4j.Level_, loggerName: string, includeLocation: string, refs: Internal.AppenderRef_[], properties: org.apache.logging.log4j.core.config.Property_[], config: org.apache.logging.log4j.core.config.Configuration_, filter: Internal.Filter_): Internal.LoggerConfig;
        toString(): string;
        setParent(parent: Internal.LoggerConfig_): void;
        notifyAll(): void;
        setAdditive(additive: boolean): void;
        getParent(): Internal.LoggerConfig;
        getPropertyArray(): org.apache.logging.log4j.core.config.Property[];
        /**
         * @deprecated
        */
        static "createLogger(java.lang.String,java.lang.String,java.lang.String,java.lang.String,org.apache.logging.log4j.core.config.AppenderRef[],org.apache.logging.log4j.core.config.Property[],org.apache.logging.log4j.core.config.Configuration,org.apache.logging.log4j.core.Filter)"(additivity: string, levelName: string, loggerName: string, includeLocation: string, refs: Internal.AppenderRef_[], properties: org.apache.logging.log4j.core.config.Property_[], config: org.apache.logging.log4j.core.config.Configuration_, filter: Internal.Filter_): Internal.LoggerConfig;
        isIncludeLocation(): boolean;
        isAdditive(): boolean;
        hashCode(): number;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get propertiesRequireLookup(): boolean
        get level(): org.apache.logging.log4j.Level
        get appenderRefs(): Internal.List<Internal.AppenderRef>
        set level(level: org.apache.logging.log4j.Level_)
        set logEventFactory(logEventFactory: Internal.LogEventFactory_)
        get reliabilityStrategy(): Internal.ReliabilityStrategy
        /**
         * @deprecated
        */
        get properties(): Internal.Map<org.apache.logging.log4j.core.config.Property, boolean>
        get stopping(): boolean
        get propertyList(): Internal.List<org.apache.logging.log4j.core.config.Property>
        get class(): typeof any
        get appenders(): Internal.Map<string, Internal.Appender>
        get explicitLevel(): org.apache.logging.log4j.Level
        get starting(): boolean
        get started(): boolean
        get logEventFactory(): Internal.LogEventFactory
        get filter(): Internal.Filter
        get state(): Internal.LifeCycle$State
        get initialized(): boolean
        get name(): string
        get stopped(): boolean
        set parent(parent: Internal.LoggerConfig_)
        set additive(additive: boolean)
        get parent(): Internal.LoggerConfig
        get propertyArray(): org.apache.logging.log4j.core.config.Property[]
        get includeLocation(): boolean
        get additive(): boolean
    }
    type AsyncLoggerConfig_ = AsyncLoggerConfig;
    interface NonNullSupplier <T> {
        abstract get(): T;
        (): T;
    }
    type NonNullSupplier_<T> = NonNullSupplier<T> | (()=> T);
    interface Config$Entry extends Internal.UnmodifiableConfig$Entry {
        getChar(): string;
        getShortOrElse(arg0: number): number;
        abstract setValue<T>(arg0: any): T;
        getByte(): number;
        abstract getKey(): string;
        abstract getRawValue<T>(): T;
        getIntOrElse(arg0: number): number;
        getLongOrElse(arg0: number): number;
        getOptionalLong(): Internal.OptionalLong;
        getLong(): number;
        getByteOrElse(arg0: number): number;
        getShort(): number;
        getValue<T>(): T;
        isNull(): boolean;
        getOrElse<T>(arg0: T): T;
        getOptional<T>(): Internal.Optional<T>;
        getOptionalInt(): Internal.OptionalInt;
        getInt(): number;
        getCharOrElse(arg0: string): string;
        get "char"(): string
        set value(arg0: any)
        get "byte"(): number
        get key(): string
        get rawValue(): T
        get optionalLong(): Internal.OptionalLong
        get "long"(): number
        get "short"(): number
        get value(): T
        get "null"(): boolean
        get optional(): Internal.Optional<T>
        get optionalInt(): Internal.OptionalInt
        get "int"(): number
    }
    type Config$Entry_ = Config$Entry;
    class SignPostBlock extends Internal.FenceMimicBlock implements Internal.EntityBlock, Internal.IRotatable {
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
        rotate(state: Internal.BlockState_, world: Internal.LevelAccessor_, pos: BlockPos_, rot: Internal.Rotation_): Internal.BlockState;
        getRenderShape(state: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        getCloneItemStack(state: Internal.BlockState_, target: Internal.HitResult_, world: Internal.BlockGetter_, pos: BlockPos_, player: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        newBlockEntity(pPos: BlockPos_, pState: Internal.BlockState_): Internal.BlockEntity;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        getDrops(state: Internal.BlockState_, builder: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
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
        getTicker<T extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<T>): Internal.BlockEntityTicker<T>;
        getMenuProvider(state: Internal.BlockState_, worldIn: Internal.Level_, pos: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        use(state: Internal.BlockState_, level: Internal.Level_, pos: BlockPos_, player: Internal.Player_, handIn: Internal.InteractionHand_, hit: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        getCollisionShape(state: Internal.BlockState_, worldIn: Internal.BlockGetter_, pos: BlockPos_, context: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(context: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        placeLiquid(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.FluidState_): boolean;
        wait(): void;
        getMaxHorizontalOffset(): number;
        getDestroyProgress(state: Internal.BlockState_, player: Internal.Player_, worldIn: Internal.BlockGetter_, pos: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(state: Internal.BlockState_, facing: Internal.Direction_, facingState: Internal.BlockState_, world: Internal.LevelAccessor_, currentPos: BlockPos_, facingPos: BlockPos_): Internal.BlockState;
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
        getExplosionResistance(state: Internal.BlockState_, world: Internal.BlockGetter_, pos: BlockPos_, explosion: Internal.Explosion_): number;
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
        isPathfindable(state: Internal.BlockState_, worldIn: Internal.BlockGetter_, pos: BlockPos_, type: Internal.PathComputationType_): boolean;
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
        rotateOverAxis(state: Internal.BlockState_, world: Internal.LevelAccessor_, pos: BlockPos_, rot: Internal.Rotation_, axis: Internal.Direction_, hit: Vec3d_): Internal.Optional<Internal.Direction>;
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
        setPlacedBy(worldIn: Internal.Level_, pos: BlockPos_, state: Internal.BlockState_, placer: Internal.LivingEntity_, stack: Internal.ItemStack_): void;
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
        getShape(state: Internal.BlockState_, world: Internal.BlockGetter_, pos: BlockPos_, context: Internal.CollisionContext_): Internal.VoxelShape;
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
    }
    type SignPostBlock_ = SignPostBlock;
    class DirectionalPoint {
        constructor(arg0: BlockPos_, arg1: Internal.Direction_, arg2: string)
        getClass(): typeof any;
        save(): Internal.CompoundTag;
        isValid(): boolean;
        getPosition(): BlockPos;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        static of(arg0: Internal.CompoundTag_): Internal.DirectionalPoint;
        equals(arg0: any): boolean;
        getBlock(): string;
        getDirection(): Internal.Direction;
        get class(): typeof any
        get valid(): boolean
        get position(): BlockPos
        get block(): string
        get direction(): Internal.Direction
    }
    type DirectionalPoint_ = DirectionalPoint;
    interface SearchRegistry$TreeBuilderSupplier <T> extends Internal.Function<Internal.List<T>, Internal.RefreshableSearchTree<T>> {
        compose<V>(arg0: Internal.Function_<V, Internal.List<T>>): Internal.Function<V, Internal.RefreshableSearchTree<T>>;
        andThen<V>(arg0: Internal.Function_<Internal.RefreshableSearchTree<T>, V>): Internal.Function<Internal.List<T>, V>;
        identity<T>(): Internal.Function<T, T>;
        abstract apply(arg0: Internal.List_<T>): Internal.RefreshableSearchTree<T>;
        (arg0: Internal.List<T>): Internal.RefreshableSearchTree_<T>;
    }
    type SearchRegistry$TreeBuilderSupplier_<T> = SearchRegistry$TreeBuilderSupplier<T> | ((arg0: Internal.List<T>)=> Internal.RefreshableSearchTree_<T>);
    interface Reference2ByteFunction <K> extends Internal.ToIntFunction<K>, it.unimi.dsi.fastutil.Function<K, number> {
        andThenFloat(arg0: Internal.Byte2FloatFunction_): Internal.Reference2FloatFunction<K>;
        getOrDefault(arg0: any, arg1: number): number;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<number, T>): Internal.Function<K, T>;
        andThenDouble(arg0: Internal.Byte2DoubleFunction_): Internal.Reference2DoubleFunction<K>;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Byte)"(arg0: any, arg1: number): number;
        put(arg0: K, arg1: number): number;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        andThenInt(arg0: Internal.Byte2IntFunction_): Internal.Reference2IntFunction<K>;
        /**
         * @deprecated
        */
        "put(java.lang.Object,java.lang.Byte)"(arg0: K, arg1: number): number;
        "put(java.lang.Object,byte)"(arg0: K, arg1: number): number;
        /**
         * @deprecated
        */
        put(arg0: K, arg1: number): number;
        /**
         * @deprecated
        */
        "put(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        andThenShort(arg0: Internal.Byte2ShortFunction_): Internal.Reference2ShortFunction<K>;
        composeDouble(arg0: Internal.Double2ReferenceFunction_<K>): Internal.Double2ByteFunction;
        composeFloat(arg0: Internal.Float2ReferenceFunction_<K>): Internal.Float2ByteFunction;
        compose<V>(arg0: Internal.Function_<V, K>): Internal.Function<V, number>;
        containsKey(arg0: any): boolean;
        defaultReturnValue(arg0: number): void;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        andThenChar(arg0: Internal.Byte2CharFunction_): Internal.Reference2CharFunction<K>;
        andThenObject<T>(arg0: Internal.Byte2ObjectFunction_<T>): Internal.Reference2ObjectFunction<K, T>;
        removeByte(arg0: any): number;
        apply(arg0: K): number;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        defaultReturnValue(): number;
        andThenByte(arg0: Internal.Byte2ByteFunction_): this;
        andThenReference<T>(arg0: Internal.Byte2ReferenceFunction_<T>): Internal.Reference2ReferenceFunction<K, T>;
        composeChar(arg0: Internal.Char2ReferenceFunction_<K>): Internal.Char2ByteFunction;
        composeObject<T>(arg0: Internal.Object2ReferenceFunction_<T, K>): Internal.Object2ByteFunction<T>;
        andThenLong(arg0: Internal.Byte2LongFunction_): Internal.Reference2LongFunction<K>;
        composeLong(arg0: Internal.Long2ReferenceFunction_<K>): Internal.Long2ByteFunction;
        applyAsInt(arg0: K): number;
        composeInt(arg0: Internal.Int2ReferenceFunction_<K>): Internal.Int2ByteFunction;
        "getOrDefault(java.lang.Object,byte)"(arg0: any, arg1: number): number;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: number): number;
        abstract getByte(arg0: any): number;
        size(): number;
        composeReference<T>(arg0: Internal.Reference2ReferenceFunction_<T, K>): Internal.Reference2ByteFunction<T>;
        composeByte(arg0: Internal.Byte2ReferenceFunction_<K>): Internal.Byte2ByteFunction;
        composeShort(arg0: Internal.Short2ReferenceFunction_<K>): Internal.Short2ByteFunction;
        clear(): void;
        /**
         * @deprecated
        */
        remove(arg0: any): any;
        /**
         * @deprecated
        */
        get(arg0: any): any;
        identity<T>(): Internal.Function<T, T>;
        (arg0: any): number;
    }
    type Reference2ByteFunction_<K> = ((arg0: any)=> number) | Reference2ByteFunction<K>;
    class ConstructPartGrabberArmLeft extends Internal.ItemConstructPart {
        constructor(arg0: Internal.ConstructMaterial_, arg1: number)
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
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
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
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
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
    type ConstructPartGrabberArmLeft_ = ConstructPartGrabberArmLeft;
    class FlagItem extends Internal.WoodBasedBlockItem implements Internal.IColored, Internal.ICustomItemRendererProvider {
        constructor(block: Internal.Block_, properties: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        setRarity(arg0: Internal.Rarity_): void;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        static setBlockEntityData(arg0: Internal.ItemStack_, arg1: Internal.BlockEntityType_<any>, arg2: Internal.CompoundTag_): void;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getBurnTime(itemStack: Internal.ItemStack_, recipeType: Internal.RecipeType_<any>): number;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        abstract moonlight$addAdditionalBehavior(arg0: Internal.AdditionalItemPlacement_): void;
        onDestroyed(arg0: Internal.ItemEntity_): void;
        isFireResistant(): boolean;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isComplex(): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        appendHoverText(stack: Internal.ItemStack_, world: Internal.Level_, tooltip: Internal.List_<net.minecraft.network.chat.Component>, flag: Internal.TooltipFlag_): void;
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
        getColor(): Internal.DyeColor;
        abstract moonlight$getClientAnimationExtension(): any;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        abstract asItem(): Internal.Item;
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
        abstract moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        abstract moonlight$setClientAnimationExtension(arg0: any): void;
        supportsBlankColor(): boolean;
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
        static getBlockEntityData(arg0: Internal.ItemStack_): Internal.CompoundTag;
        toString(): string;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        changeItemColor(color: Internal.DyeColor_): Internal.Item;
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
        removeFromBlockToItemMap(arg0: Internal.Map_<Internal.Block, Internal.Item>, arg1: Internal.Item_): void;
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
        static updateCustomBlockEntityTag(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.ItemStack_): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        place(arg0: Internal.BlockPlaceContext_): Internal.InteractionResult;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        handler$dpg000$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        getBlock(): Internal.Block;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        updatePlacementContext(arg0: Internal.BlockPlaceContext_): Internal.BlockPlaceContext;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        registerBlocks(arg0: Internal.Map_<Internal.Block, Internal.Item>, arg1: Internal.Item_): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        registerFabricRenderer(): void;
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
        getRendererFactory(): Internal.Supplier<Internal.ItemStackRenderer>;
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
        get color(): Internal.DyeColor
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
        get block(): Internal.Block
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        get eatingSound(): Internal.SoundEvent
        set nameKey(arg0: string)
        get rendererFactory(): Internal.Supplier<Internal.ItemStackRenderer>
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
    type FlagItem_ = FlagItem;
    class Target extends Internal.Node {
        constructor(arg0: number, arg1: number, arg2: number)
        constructor(arg0: Internal.Node_)
        getClass(): typeof any;
        "distanceToSqr(net.minecraft.core.BlockPos)"(arg0: BlockPos_): number;
        distanceTo(arg0: BlockPos_): number;
        static createFromStream(arg0: Internal.FriendlyByteBuf_): Internal.Node;
        "distanceTo(net.minecraft.world.level.pathfinder.Node)"(arg0: Internal.Node_): number;
        distanceToXZ(arg0: Internal.Node_): number;
        distanceTo(arg0: Internal.Node_): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        static createFromStream(arg0: Internal.FriendlyByteBuf_): Internal.Target;
        asBlockPos(): BlockPos;
        "distanceManhattan(net.minecraft.world.level.pathfinder.Node)"(arg0: Internal.Node_): number;
        distanceManhattan(arg0: Internal.Node_): number;
        getBestNode(): Internal.Node;
        cloneAndMove(arg0: number, arg1: number, arg2: number): Internal.Node;
        setReached(): void;
        static "createFromStream(net.minecraft.network.FriendlyByteBuf)"(arg0: Internal.FriendlyByteBuf_): Internal.Node;
        updateBest(arg0: number, arg1: Internal.Node_): void;
        distanceToSqr(arg0: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        distanceToSqr(arg0: Internal.Node_): number;
        static createHash(arg0: number, arg1: number, arg2: number): number;
        distanceManhattan(arg0: BlockPos_): number;
        asVec3(): Vec3d;
        writeToStream(arg0: Internal.FriendlyByteBuf_): void;
        "distanceToSqr(net.minecraft.world.level.pathfinder.Node)"(arg0: Internal.Node_): number;
        "distanceManhattan(net.minecraft.core.BlockPos)"(arg0: BlockPos_): number;
        hashCode(): number;
        isReached(): boolean;
        wait(): void;
        static "createFromStream(net.minecraft.network.FriendlyByteBuf)"(arg0: Internal.FriendlyByteBuf_): Internal.Target;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        inOpenSet(): boolean;
        "distanceTo(net.minecraft.core.BlockPos)"(arg0: BlockPos_): number;
        get class(): typeof any
        get bestNode(): Internal.Node
        get reached(): boolean
    }
    type Target_ = Target;
    class Vector3i implements Internal.Vector3ic, Internal.Cloneable, Internal.Externalizable {
        constructor(arg0: Internal.Vector2dc_, arg1: number, arg2: number)
        constructor()
        constructor(arg0: number, arg1: number, arg2: number, arg3: number)
        constructor(arg0: number, arg1: number, arg2: number)
        constructor(arg0: Internal.Vector2fc_, arg1: number, arg2: number)
        constructor(arg0: Internal.ByteBuffer_)
        constructor(arg0: number)
        constructor(arg0: number[])
        constructor(arg0: number, arg1: Internal.ByteBuffer_)
        constructor(arg0: number, arg1: number, arg2: number, arg3: number)
        constructor(arg0: number, arg1: Internal.IntBuffer_)
        constructor(arg0: Internal.Vector3fc_, arg1: number)
        constructor(arg0: Internal.IntBuffer_)
        constructor(arg0: Internal.Vector3dc_, arg1: number)
        constructor(arg0: Internal.Vector2ic_, arg1: number)
        constructor(arg0: Internal.Vector3ic_)
        "div(int,org.joml.Vector3i)"(arg0: number, arg1: Internal.Vector3i_): this;
        x(): number;
        get(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        sub(arg0: number, arg1: number, arg2: number): this;
        "div(float)"(arg0: number): this;
        add(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3i_): this;
        "set(int,java.nio.ByteBuffer)"(arg0: number, arg1: Internal.ByteBuffer_): this;
        "set(int,java.nio.IntBuffer)"(arg0: number, arg1: Internal.IntBuffer_): this;
        set(arg0: Internal.Vector2ic_, arg1: number): this;
        add(arg0: Internal.Vector3ic_): this;
        "set(org.joml.Vector2ic,int)"(arg0: Internal.Vector2ic_, arg1: number): this;
        get(arg0: number, arg1: Internal.IntBuffer_): Internal.IntBuffer;
        mul(arg0: number, arg1: number, arg2: number): this;
        absolute(arg0: Internal.Vector3i_): this;
        distance(arg0: number, arg1: number, arg2: number): number;
        div(arg0: number, arg1: Internal.Vector3i_): this;
        distanceSquared(arg0: number, arg1: number, arg2: number): number;
        set(arg0: number): this;
        "mul(org.joml.Vector3ic,org.joml.Vector3i)"(arg0: Internal.Vector3ic_, arg1: Internal.Vector3i_): this;
        div(arg0: number): this;
        toString(arg0: Internal.NumberFormat_): string;
        getToAddress(arg0: number): Internal.Vector3ic;
        "get(int,java.nio.ByteBuffer)"(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        "get(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        "set(org.joml.Vector3fc,int)"(arg0: Internal.Vector3fc_, arg1: number): this;
        mul(arg0: number): this;
        min(arg0: Internal.Vector3ic_): this;
        "set(java.nio.IntBuffer)"(arg0: Internal.IntBuffer_): this;
        "mul(int)"(arg0: number): this;
        clone(): any;
        getClass(): typeof any;
        set(arg0: Internal.Vector3dc_): this;
        writeExternal(arg0: Internal.ObjectOutput_): void;
        maxComponent(): number;
        min(arg0: Internal.Vector3ic_, arg1: Internal.Vector3i_): this;
        mul(arg0: Internal.Vector3ic_): this;
        negate(): this;
        set(arg0: number, arg1: number, arg2: number): this;
        set(arg0: number, arg1: Internal.ByteBuffer_): this;
        zero(): this;
        mul(arg0: Internal.Vector3ic_, arg1: Internal.Vector3i_): this;
        "set(org.joml.Vector3dc,int)"(arg0: Internal.Vector3dc_, arg1: number): this;
        set(arg0: Internal.Vector3dc_, arg1: number): this;
        static length(arg0: number, arg1: number, arg2: number): number;
        sub(arg0: Internal.Vector3ic_): this;
        toString(): string;
        set(arg0: number, arg1: Internal.IntBuffer_): this;
        notifyAll(): void;
        set(arg0: number[]): this;
        equals(arg0: number, arg1: number, arg2: number): boolean;
        static distance(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
        "set(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): this;
        wait(arg0: number): void;
        get(arg0: number): number;
        div(arg0: number): this;
        static lengthSquared(arg0: number, arg1: number, arg2: number): number;
        "get(int)"(arg0: number): number;
        z(): number;
        "mul(int,org.joml.Vector3i)"(arg0: number, arg1: Internal.Vector3i_): this;
        notify(): void;
        add(arg0: Internal.Vector3ic_, arg1: Internal.Vector3i_): this;
        set(arg0: Internal.Vector3ic_): this;
        max(arg0: Internal.Vector3ic_): this;
        "set(int[])"(arg0: number[]): this;
        setComponent(arg0: number, arg1: number): this;
        readExternal(arg0: Internal.ObjectInput_): void;
        gridDistance(arg0: Internal.Vector3ic_): number;
        "div(int)"(arg0: number): this;
        set(arg0: Internal.Vector3fc_, arg1: number): this;
        sub(arg0: Internal.Vector3ic_, arg1: Internal.Vector3i_): this;
        "get(java.nio.IntBuffer)"(arg0: Internal.IntBuffer_): Internal.IntBuffer;
        absolute(): this;
        static distanceSquared(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
        lengthSquared(): number;
        distance(arg0: Internal.Vector3ic_): number;
        wait(): void;
        length(): number;
        get(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        gridDistance(arg0: number, arg1: number, arg2: number): number;
        "set(org.joml.Vector3ic)"(arg0: Internal.Vector3ic_): this;
        minComponent(): number;
        "set(int)"(arg0: number): this;
        y(): number;
        div(arg0: number, arg1: Internal.Vector3i_): this;
        set(arg0: Internal.ByteBuffer_): this;
        mul(arg0: number, arg1: Internal.Vector3i_): this;
        sub(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3i_): this;
        negate(arg0: Internal.Vector3i_): this;
        wait(arg0: number, arg1: number): void;
        "div(float,org.joml.Vector3i)"(arg0: number, arg1: Internal.Vector3i_): this;
        add(arg0: number, arg1: number, arg2: number): this;
        "set(org.joml.Vector3dc)"(arg0: Internal.Vector3dc_): this;
        get(arg0: Internal.IntBuffer_): Internal.IntBuffer;
        distanceSquared(arg0: Internal.Vector3ic_): number;
        max(arg0: Internal.Vector3ic_, arg1: Internal.Vector3i_): this;
        "get(int,java.nio.IntBuffer)"(arg0: number, arg1: Internal.IntBuffer_): Internal.IntBuffer;
        set(arg0: Internal.IntBuffer_): this;
        hashCode(): number;
        "mul(org.joml.Vector3ic)"(arg0: Internal.Vector3ic_): this;
        setFromAddress(arg0: number): this;
        mul(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3i_): this;
        equals(arg0: any): boolean;
        set "(java.nio.IntBuffer)"(arg0: Internal.IntBuffer_)
        get class(): typeof any
        set "(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_)
        set "(int[])"(arg0: number[])
        set "(org.joml.Vector3ic)"(arg0: Internal.Vector3ic_)
        set "(int)"(arg0: number)
        set "(org.joml.Vector3dc)"(arg0: Internal.Vector3dc_)
        set fromAddress(arg0: number)
        z: number;
        x: number;
        y: number;
    }
    type Vector3i_ = Vector3i;
    class NetherForestVegetationFeature extends Feature<Internal.NetherForestVegetationConfig> {
        constructor(arg0: Internal.Codec_<Internal.NetherForestVegetationConfig>)
        getClass(): typeof any;
        toString(): string;
        static checkNeighbors(arg0: Internal.Function_<BlockPos, Internal.BlockState>, arg1: BlockPos_, arg2: Internal.Predicate_<Internal.BlockState>): boolean;
        notifyAll(): void;
        place(arg0: Internal.NetherForestVegetationConfig_, arg1: Internal.WorldGenLevel_, arg2: Internal.ChunkGenerator_, arg3: Internal.RandomSource_, arg4: BlockPos_): boolean;
        notify(): void;
        static isAdjacentToAir(arg0: Internal.Function_<BlockPos, Internal.BlockState>, arg1: BlockPos_): boolean;
        wait(arg0: number, arg1: number): void;
        configuredCodec(): Internal.Codec<Internal.ConfiguredFeature<Internal.NetherForestVegetationConfig, Feature<Internal.NetherForestVegetationConfig>>>;
        static isGrassOrDirt(arg0: Internal.LevelSimulatedReader_, arg1: BlockPos_): boolean;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        static isDirt(arg0: Internal.BlockState_): boolean;
        equals(arg0: any): boolean;
        static isReplaceable(arg0: Internal.TagKey_<Internal.Block>): Internal.Predicate<Internal.BlockState>;
        place(arg0: Internal.FeaturePlaceContext_<Internal.NetherForestVegetationConfig>): boolean;
        get class(): typeof any
    }
    type NetherForestVegetationFeature_ = NetherForestVegetationFeature;
    interface Short2IntFunction extends it.unimi.dsi.fastutil.Function<number, number>, Internal.IntUnaryOperator {
        abstract get(arg0: number): number;
        put(arg0: number, arg1: number): number;
        andThenChar(arg0: Internal.Int2CharFunction_): Internal.Short2CharFunction;
        defaultReturnValue(): number;
        "getOrDefault(short,int)"(arg0: number, arg1: number): number;
        composeReference<T>(arg0: Internal.Reference2ShortFunction_<T>): Internal.Reference2IntFunction<T>;
        "compose(java.util.function.IntUnaryOperator)"(arg0: Internal.IntUnaryOperator_): Internal.IntUnaryOperator;
        /**
         * @deprecated
        */
        "put(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        andThenDouble(arg0: Internal.Int2DoubleFunction_): Internal.Short2DoubleFunction;
        "containsKey(short)"(arg0: number): boolean;
        "remove(short)"(arg0: number): number;
        andThenInt(arg0: Internal.Int2IntFunction_): this;
        compose(arg0: Internal.IntUnaryOperator_): Internal.IntUnaryOperator;
        /**
         * @deprecated
        */
        applyAsInt(arg0: number): number;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        /**
         * @deprecated
        */
        "put(java.lang.Short,java.lang.Integer)"(arg0: number, arg1: number): number;
        remove(arg0: number): number;
        andThenObject<T>(arg0: Internal.Int2ObjectFunction_<T>): Internal.Short2ObjectFunction<T>;
        /**
         * @deprecated
        */
        "get(java.lang.Object)"(arg0: any): number;
        containsKey(arg0: number): boolean;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: number): number;
        getOrDefault(arg0: number, arg1: number): number;
        andThenReference<T>(arg0: Internal.Int2ReferenceFunction_<T>): Internal.Short2ReferenceFunction<T>;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Integer)"(arg0: any, arg1: number): number;
        "put(short,int)"(arg0: number, arg1: number): number;
        composeInt(arg0: Internal.Int2ShortFunction_): Internal.Int2IntFunction;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, number>;
        andThenLong(arg0: Internal.Int2LongFunction_): Internal.Short2LongFunction;
        composeObject<T>(arg0: Internal.Object2ShortFunction_<T>): Internal.Object2IntFunction<T>;
        /**
         * @deprecated
        */
        remove(arg0: any): any;
        /**
         * @deprecated
        */
        "containsKey(java.lang.Object)"(arg0: any): boolean;
        /**
         * @deprecated
        */
        "remove(java.lang.Object)"(arg0: any): any;
        composeShort(arg0: Internal.Short2ShortFunction_): this;
        apply(arg0: number): number;
        /**
         * @deprecated
        */
        get(arg0: any): number;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        composeChar(arg0: Internal.Char2ShortFunction_): Internal.Char2IntFunction;
        andThenFloat(arg0: Internal.Int2FloatFunction_): Internal.Short2FloatFunction;
        andThen(arg0: Internal.IntUnaryOperator_): Internal.IntUnaryOperator;
        "andThen(java.util.function.IntUnaryOperator)"(arg0: Internal.IntUnaryOperator_): Internal.IntUnaryOperator;
        /**
         * @deprecated
        */
        "andThen(java.util.function.Function)"<T>(arg0: Internal.Function_<number, T>): Internal.Function<number, T>;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        identity(): Internal.IntUnaryOperator;
        abstract "get(short)"(arg0: number): number;
        composeByte(arg0: Internal.Byte2ShortFunction_): Internal.Byte2IntFunction;
        andThenShort(arg0: Internal.Int2ShortFunction_): Internal.Short2ShortFunction;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: number): number;
        andThenByte(arg0: Internal.Int2ByteFunction_): Internal.Short2ByteFunction;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<number, T>): Internal.Function<number, T>;
        size(): number;
        defaultReturnValue(arg0: number): void;
        clear(): void;
        /**
         * @deprecated
        */
        "compose(java.util.function.Function)"<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, number>;
        composeLong(arg0: Internal.Long2ShortFunction_): Internal.Long2IntFunction;
        composeFloat(arg0: Internal.Float2ShortFunction_): Internal.Float2IntFunction;
        composeDouble(arg0: Internal.Double2ShortFunction_): Internal.Double2IntFunction;
    }
    type Short2IntFunction_ = Short2IntFunction;
    class Vector3d implements Internal.Cloneable, Internal.Externalizable, Internal.Vector3dc {
        constructor()
        constructor(arg0: Internal.DoubleBuffer_)
        constructor(arg0: number[])
        constructor(arg0: number, arg1: Internal.DoubleBuffer_)
        constructor(arg0: Internal.ByteBuffer_)
        constructor(arg0: number, arg1: Internal.ByteBuffer_)
        constructor(arg0: Internal.Vector3fc_)
        constructor(arg0: Internal.Vector3dc_)
        constructor(arg0: Internal.Vector2dc_, arg1: number)
        constructor(arg0: number, arg1: number, arg2: number)
        constructor(arg0: Internal.Vector2fc_, arg1: number)
        constructor(arg0: Internal.Vector2ic_, arg1: number)
        constructor(arg0: number)
        constructor(arg0: number[])
        constructor(arg0: Internal.Vector3ic_)
        reflect(arg0: number, arg1: number, arg2: number): this;
        "mulTranspose(org.joml.Matrix3dc)"(arg0: Internal.Matrix3dc_): this;
        "get(org.joml.Vector3d)"(arg0: Internal.Vector3d_): this;
        "mulAdd(org.joml.Vector3dc,org.joml.Vector3dc,org.joml.Vector3d)"(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3d_): this;
        "get(int)"(arg0: number): number;
        set(arg0: number, arg1: number, arg2: number): this;
        get(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        add(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): this;
        mulTransposeDirection(arg0: Internal.Matrix4fc_, arg1: Internal.Vector3d_): this;
        "sub(org.joml.Vector3dc)"(arg0: Internal.Vector3dc_): this;
        "mulDirection(org.joml.Matrix4x3dc)"(arg0: Internal.Matrix4x3dc_): this;
        round(arg0: Internal.Vector3d_): this;
        rotateX(arg0: number, arg1: Internal.Vector3d_): this;
        fma(arg0: Internal.Vector3dc_, arg1: Internal.Vector3fc_, arg2: Internal.Vector3d_): this;
        mul(arg0: Internal.Vector3dc_): this;
        round(): this;
        "fma(org.joml.Vector3dc,org.joml.Vector3dc,org.joml.Vector3d)"(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3d_): this;
        x(): number;
        mul(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): this;
        "mulTransposePosition(org.joml.Matrix4dc,org.joml.Vector3d)"(arg0: Internal.Matrix4dc_, arg1: Internal.Vector3d_): this;
        "add(org.joml.Vector3dc,org.joml.Vector3d)"(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): this;
        "mulPosition(org.joml.Matrix4dc)"(arg0: Internal.Matrix4dc_): this;
        add(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): this;
        mulPositionW(arg0: Internal.Matrix4fc_): number;
        static distance(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
        div(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): this;
        mulDirection(arg0: Internal.Matrix4fc_, arg1: Internal.Vector3d_): this;
        "get(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        "fma(double,org.joml.Vector3fc)"(arg0: number, arg1: Internal.Vector3fc_): this;
        "mulPositionW(org.joml.Matrix4dc)"(arg0: Internal.Matrix4dc_): number;
        "div(org.joml.Vector3dc,org.joml.Vector3d)"(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): this;
        mulAdd(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3d_): this;
        smoothStep(arg0: Internal.Vector3dc_, arg1: number, arg2: Internal.Vector3d_): this;
        mulTranspose(arg0: Internal.Matrix3dc_, arg1: Internal.Vector3d_): this;
        getClass(): typeof any;
        half(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): this;
        orthogonalize(arg0: Internal.Vector3dc_): this;
        fma(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        negate(): this;
        add(arg0: Internal.Vector3fc_): this;
        angleSigned(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
        ceil(): this;
        "mul(org.joml.Vector3dc)"(arg0: Internal.Vector3dc_): this;
        "mulDirection(org.joml.Matrix4dc)"(arg0: Internal.Matrix4dc_): this;
        half(arg0: Internal.Vector3dc_): this;
        setComponent(arg0: number, arg1: number): this;
        "mul(double)"(arg0: number): this;
        "sub(org.joml.Vector3fc,org.joml.Vector3d)"(arg0: Internal.Vector3fc_, arg1: Internal.Vector3d_): this;
        "set(double)"(arg0: number): this;
        "fma(org.joml.Vector3dc,org.joml.Vector3dc)"(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        rotateY(arg0: number, arg1: Internal.Vector3d_): this;
        getToAddress(arg0: number): Internal.Vector3dc;
        mul(arg0: Internal.Matrix3fc_, arg1: Internal.Vector3d_): this;
        "mulPositionW(org.joml.Matrix4fc)"(arg0: Internal.Matrix4fc_): number;
        set(arg0: number[]): this;
        get(arg0: number): number;
        y(): number;
        sub(arg0: Internal.Vector3fc_, arg1: Internal.Vector3d_): this;
        "mulTranspose(org.joml.Matrix3fc,org.joml.Vector3d)"(arg0: Internal.Matrix3fc_, arg1: Internal.Vector3d_): this;
        hermite(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_, arg3: number, arg4: Internal.Vector3d_): this;
        "mulTranspose(org.joml.Matrix3fc)"(arg0: Internal.Matrix3fc_): this;
        "div(double,org.joml.Vector3d)"(arg0: number, arg1: Internal.Vector3d_): this;
        negate(arg0: Internal.Vector3d_): this;
        fma(arg0: number, arg1: Internal.Vector3dc_, arg2: Internal.Vector3d_): this;
        set(arg0: Internal.DoubleBuffer_): this;
        "mulPosition(org.joml.Matrix4fc,org.joml.Vector3d)"(arg0: Internal.Matrix4fc_, arg1: Internal.Vector3d_): this;
        mul(arg0: Internal.Matrix3x2fc_): this;
        "set(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): this;
        "div(org.joml.Vector3d)"(arg0: Internal.Vector3d_): this;
        mulPositionW(arg0: Internal.Matrix4dc_, arg1: Internal.Vector3d_): number;
        equals(arg0: number, arg1: number, arg2: number): boolean;
        wait(arg0: number): void;
        "mulDirection(org.joml.Matrix4x3fc)"(arg0: Internal.Matrix4x3fc_): this;
        max(arg0: Internal.Vector3dc_): this;
        mul(arg0: Internal.Matrix3fc_): this;
        orthogonalize(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): this;
        ceil(arg0: Internal.Vector3d_): this;
        dot(arg0: Internal.Vector3dc_): number;
        distanceSquared(arg0: Internal.Vector3dc_): number;
        cross(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): this;
        "mulPosition(org.joml.Matrix4dc,org.joml.Vector3d)"(arg0: Internal.Matrix4dc_, arg1: Internal.Vector3d_): this;
        z(): number;
        isFinite(): boolean;
        mul(arg0: Internal.Vector3fc_): this;
        "fma(double,org.joml.Vector3fc,org.joml.Vector3d)"(arg0: number, arg1: Internal.Vector3fc_, arg2: Internal.Vector3d_): this;
        mul(arg0: Internal.Matrix3dc_, arg1: Internal.Vector3d_): this;
        mulDirection(arg0: Internal.Matrix4dc_): this;
        mul(arg0: Internal.Vector3fc_, arg1: Internal.Vector3d_): this;
        "mulDirection(org.joml.Matrix4x3dc,org.joml.Vector3d)"(arg0: Internal.Matrix4x3dc_, arg1: Internal.Vector3d_): this;
        mulAdd(arg0: number, arg1: Internal.Vector3dc_, arg2: Internal.Vector3d_): this;
        "mul(org.joml.Matrix3dc,org.joml.Vector3f)"(arg0: Internal.Matrix3dc_, arg1: Vec3f_): Vec3f;
        half(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): this;
        mul(arg0: Internal.Matrix3x2fc_, arg1: Internal.Vector3d_): this;
        "mulTransposeDirection(org.joml.Matrix4fc,org.joml.Vector3d)"(arg0: Internal.Matrix4fc_, arg1: Internal.Vector3d_): this;
        "get(int,java.nio.DoubleBuffer)"(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        absolute(): this;
        "fma(double,org.joml.Vector3dc,org.joml.Vector3d)"(arg0: number, arg1: Internal.Vector3dc_, arg2: Internal.Vector3d_): this;
        fma(arg0: number, arg1: Internal.Vector3dc_): this;
        mulPosition(arg0: Internal.Matrix4fc_, arg1: Internal.Vector3d_): this;
        mulPositionW(arg0: Internal.Matrix4dc_): number;
        "mul(double,org.joml.Vector3d)"(arg0: number, arg1: Internal.Vector3d_): this;
        distanceSquared(arg0: number, arg1: number, arg2: number): number;
        normalize(): this;
        mulDirection(arg0: Internal.Matrix4x3fc_, arg1: Internal.Vector3d_): this;
        angleCos(arg0: Internal.Vector3dc_): number;
        "mul(org.joml.Matrix3fc)"(arg0: Internal.Matrix3fc_): this;
        angle(arg0: Internal.Vector3dc_): number;
        wait(): void;
        get(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        sub(arg0: Internal.Vector3fc_): this;
        minComponent(): number;
        "mul(org.joml.Vector3dc,org.joml.Vector3d)"(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): this;
        set(arg0: Internal.Vector2dc_, arg1: number): this;
        "add(org.joml.Vector3fc,org.joml.Vector3d)"(arg0: Internal.Vector3fc_, arg1: Internal.Vector3d_): this;
        set(arg0: Internal.Vector3fc_): this;
        add(arg0: Internal.Vector3dc_): this;
        normalize(arg0: Internal.Vector3d_): this;
        set(arg0: Internal.ByteBuffer_): this;
        div(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): this;
        cross(arg0: Internal.Vector3dc_): this;
        getf(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        min(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): this;
        "mulTransposeDirection(org.joml.Matrix4fc)"(arg0: Internal.Matrix4fc_): this;
        mulTransposePosition(arg0: Internal.Matrix4fc_, arg1: Internal.Vector3d_): this;
        "div(org.joml.Vector3fc,org.joml.Vector3d)"(arg0: Internal.Vector3fc_, arg1: Internal.Vector3d_): this;
        "mul(org.joml.Vector3fc)"(arg0: Internal.Vector3fc_): this;
        mulPosition(arg0: Internal.Matrix4x3fc_, arg1: Internal.Vector3d_): this;
        "mulAdd(double,org.joml.Vector3dc)"(arg0: number, arg1: Internal.Vector3dc_): this;
        "set(org.joml.Vector3dc)"(arg0: Internal.Vector3dc_): this;
        mul(arg0: Internal.Matrix3dc_, arg1: Vec3f_): Vec3f;
        mulTranspose(arg0: Internal.Matrix3dc_): this;
        mulProject(arg0: Internal.Matrix4dc_): this;
        mulProject(arg0: Internal.Matrix4dc_, arg1: Internal.Vector3d_): this;
        "set(float[])"(arg0: number[]): this;
        mulProject(arg0: Internal.Matrix4dc_, arg1: number, arg2: Internal.Vector3d_): this;
        rotationTo(arg0: Internal.Vector3dc_, arg1: Internal.Quaterniond_): Internal.Quaterniond;
        set(arg0: number, arg1: Internal.DoubleBuffer_): this;
        "get(int,org.joml.Vector3i)"(arg0: number, arg1: Internal.Vector3i_): Internal.Vector3i;
        "mulProject(org.joml.Matrix4dc)"(arg0: Internal.Matrix4dc_): this;
        mulAdd(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        mul(arg0: Internal.Matrix3x2dc_): this;
        mulDirection(arg0: Internal.Matrix4dc_, arg1: Internal.Vector3d_): this;
        "mulPosition(org.joml.Matrix4fc)"(arg0: Internal.Matrix4fc_): this;
        sub(arg0: number, arg1: number, arg2: number): this;
        "sub(org.joml.Vector3dc,org.joml.Vector3d)"(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): this;
        "fma(org.joml.Vector3dc,org.joml.Vector3fc,org.joml.Vector3d)"(arg0: Internal.Vector3dc_, arg1: Internal.Vector3fc_, arg2: Internal.Vector3d_): this;
        mul(arg0: number, arg1: Internal.Vector3d_): this;
        lerp(arg0: Internal.Vector3dc_, arg1: number, arg2: Internal.Vector3d_): this;
        equals(arg0: any): boolean;
        setFromAddress(arg0: number): this;
        set(arg0: Internal.Vector2ic_, arg1: number): this;
        "mulTransposeDirection(org.joml.Matrix4dc,org.joml.Vector3d)"(arg0: Internal.Matrix4dc_, arg1: Internal.Vector3d_): this;
        min(arg0: Internal.Vector3dc_): this;
        "mulTransposePosition(org.joml.Matrix4fc,org.joml.Vector3d)"(arg0: Internal.Matrix4fc_, arg1: Internal.Vector3d_): this;
        "mulProject(org.joml.Matrix4fc)"(arg0: Internal.Matrix4fc_): this;
        sub(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): this;
        mulTransposeDirection(arg0: Internal.Matrix4fc_): this;
        rotate(arg0: Internal.Quaterniondc_): this;
        get(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        cross(arg0: number, arg1: number, arg2: number): this;
        "mul(org.joml.Matrix3dc)"(arg0: Internal.Matrix3dc_): this;
        "get(org.joml.Vector3f)"(arg0: Vec3f_): Vec3f;
        "mulPosition(org.joml.Matrix4x3dc)"(arg0: Internal.Matrix4x3dc_): this;
        half(arg0: number, arg1: number, arg2: number): this;
        "set(int,java.nio.ByteBuffer)"(arg0: number, arg1: Internal.ByteBuffer_): this;
        "set(org.joml.Vector2fc,double)"(arg0: Internal.Vector2fc_, arg1: number): this;
        "fma(org.joml.Vector3fc,org.joml.Vector3fc,org.joml.Vector3d)"(arg0: Internal.Vector3fc_, arg1: Internal.Vector3fc_, arg2: Internal.Vector3d_): this;
        distance(arg0: number, arg1: number, arg2: number): number;
        sub(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): this;
        "mul(org.joml.Vector3fc,org.joml.Vector3d)"(arg0: Internal.Vector3fc_, arg1: Internal.Vector3d_): this;
        "get(int,java.nio.FloatBuffer)"(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        mulDirection(arg0: Internal.Matrix4fc_): this;
        mulPosition(arg0: Internal.Matrix4dc_): this;
        mul(arg0: number, arg1: number, arg2: number): this;
        normalize(arg0: number, arg1: Internal.Vector3d_): this;
        "fma(org.joml.Vector3fc,org.joml.Vector3fc)"(arg0: Internal.Vector3fc_, arg1: Internal.Vector3fc_): this;
        fma(arg0: number, arg1: Internal.Vector3fc_): this;
        toString(arg0: Internal.NumberFormat_): string;
        "get(int,java.nio.ByteBuffer)"(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        "div(org.joml.Vector3fc)"(arg0: Internal.Vector3fc_): this;
        fma(arg0: Internal.Vector3fc_, arg1: Internal.Vector3fc_, arg2: Internal.Vector3d_): this;
        orthogonalizeUnit(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): this;
        "set(int,java.nio.DoubleBuffer)"(arg0: number, arg1: Internal.DoubleBuffer_): this;
        normalize(arg0: number): this;
        sub(arg0: Internal.Vector3dc_): this;
        mulPositionW(arg0: Internal.Matrix4fc_, arg1: Internal.Vector3d_): number;
        "add(org.joml.Vector3fc)"(arg0: Internal.Vector3fc_): this;
        "set(org.joml.Vector2dc,double)"(arg0: Internal.Vector2dc_, arg1: number): this;
        "mulAdd(double,org.joml.Vector3dc,org.joml.Vector3d)"(arg0: number, arg1: Internal.Vector3dc_, arg2: Internal.Vector3d_): this;
        clone(): any;
        "mulPosition(org.joml.Matrix4x3fc,org.joml.Vector3d)"(arg0: Internal.Matrix4x3fc_, arg1: Internal.Vector3d_): this;
        dot(arg0: number, arg1: number, arg2: number): number;
        absolute(arg0: Internal.Vector3d_): this;
        set(arg0: Internal.Vector3dc_): this;
        writeExternal(arg0: Internal.ObjectOutput_): void;
        maxComponent(): number;
        getf(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        "get(java.nio.FloatBuffer)"(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        "mulTransposePosition(org.joml.Matrix4dc)"(arg0: Internal.Matrix4dc_): this;
        orthogonalizeUnit(arg0: Internal.Vector3dc_): this;
        "mulAdd(org.joml.Vector3dc,org.joml.Vector3dc)"(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        div(arg0: number): this;
        set(arg0: number[]): this;
        rotateZ(arg0: number): this;
        add(arg0: Internal.Vector3fc_, arg1: Internal.Vector3d_): this;
        static lengthSquared(arg0: number, arg1: number, arg2: number): number;
        floor(arg0: Internal.Vector3d_): this;
        "get(java.nio.DoubleBuffer)"(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        "add(org.joml.Vector3dc)"(arg0: Internal.Vector3dc_): this;
        mul(arg0: number): this;
        mulTranspose(arg0: Internal.Matrix3fc_): this;
        set(arg0: number, arg1: Internal.ByteBuffer_): this;
        floor(): this;
        zero(): this;
        mulProject(arg0: Internal.Matrix4fc_): this;
        mulTransposePosition(arg0: Internal.Matrix4dc_): this;
        reflect(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): this;
        mulTransposeDirection(arg0: Internal.Matrix4dc_, arg1: Internal.Vector3d_): this;
        lengthSquared(): number;
        mulAdd(arg0: Internal.Vector3fc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3d_): this;
        toString(): string;
        "mulDirection(org.joml.Matrix4fc,org.joml.Vector3d)"(arg0: Internal.Matrix4fc_, arg1: Internal.Vector3d_): this;
        notifyAll(): void;
        mulDirection(arg0: Internal.Matrix4x3dc_): this;
        mulPosition(arg0: Internal.Matrix4dc_, arg1: Internal.Vector3d_): this;
        mulDirection(arg0: Internal.Matrix4x3dc_, arg1: Internal.Vector3d_): this;
        "mul(org.joml.Matrix3x2fc,org.joml.Vector3d)"(arg0: Internal.Matrix3x2fc_, arg1: Internal.Vector3d_): this;
        mulPosition(arg0: Internal.Matrix4x3fc_): this;
        rotateAxis(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Vector3d_): this;
        "mulPosition(org.joml.Matrix4x3fc)"(arg0: Internal.Matrix4x3fc_): this;
        "mulPositionW(org.joml.Matrix4fc,org.joml.Vector3d)"(arg0: Internal.Matrix4fc_, arg1: Internal.Vector3d_): number;
        reflect(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): this;
        "mul(org.joml.Matrix3x2fc)"(arg0: Internal.Matrix3x2fc_): this;
        max(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): this;
        mulTranspose(arg0: Internal.Matrix3fc_, arg1: Internal.Vector3d_): this;
        reflect(arg0: Internal.Vector3dc_): this;
        "normalize(double)"(arg0: number): this;
        set(arg0: Internal.Vector3ic_): this;
        "mulDirection(org.joml.Matrix4dc,org.joml.Vector3d)"(arg0: Internal.Matrix4dc_, arg1: Internal.Vector3d_): this;
        div(arg0: Internal.Vector3fc_): this;
        rotateAxis(arg0: number, arg1: number, arg2: number, arg3: number): this;
        fma(arg0: Internal.Vector3fc_, arg1: Internal.Vector3fc_): this;
        mulTransposeDirection(arg0: Internal.Matrix4dc_): this;
        div(arg0: Internal.Vector3fc_, arg1: Internal.Vector3d_): this;
        lerp(arg0: Internal.Vector3dc_, arg1: number): this;
        "mul(org.joml.Matrix3x2dc,org.joml.Vector3d)"(arg0: Internal.Matrix3x2dc_, arg1: Internal.Vector3d_): this;
        set(arg0: number): this;
        angleSigned(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): number;
        notify(): void;
        rotateY(arg0: number): this;
        "mul(org.joml.Matrix3x2dc)"(arg0: Internal.Matrix3x2dc_): this;
        equals(arg0: Internal.Vector3dc_, arg1: number): boolean;
        add(arg0: number, arg1: number, arg2: number): this;
        mulTransposePosition(arg0: Internal.Matrix4dc_, arg1: Internal.Vector3d_): this;
        rotateZ(arg0: number, arg1: Internal.Vector3d_): this;
        static length(arg0: number, arg1: number, arg2: number): number;
        static distanceSquared(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
        "mul(org.joml.Matrix3dc,org.joml.Vector3d)"(arg0: Internal.Matrix3dc_, arg1: Internal.Vector3d_): this;
        "fma(double,org.joml.Vector3dc)"(arg0: number, arg1: Internal.Vector3dc_): this;
        mulProject(arg0: Internal.Matrix4fc_, arg1: Internal.Vector3d_): this;
        get(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        set(arg0: Internal.Vector2fc_, arg1: number): this;
        "mulPosition(org.joml.Matrix4x3dc,org.joml.Vector3d)"(arg0: Internal.Matrix4x3dc_, arg1: Internal.Vector3d_): this;
        "mulTransposePosition(org.joml.Matrix4fc)"(arg0: Internal.Matrix4fc_): this;
        readExternal(arg0: Internal.ObjectInput_): void;
        "mulAdd(org.joml.Vector3fc,org.joml.Vector3dc,org.joml.Vector3d)"(arg0: Internal.Vector3fc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3d_): this;
        mulPosition(arg0: Internal.Matrix4fc_): this;
        "mulProject(org.joml.Matrix4dc,org.joml.Vector3d)"(arg0: Internal.Matrix4dc_, arg1: Internal.Vector3d_): this;
        get(arg0: Internal.Vector3d_): this;
        get(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        "set(org.joml.Vector3fc)"(arg0: Internal.Vector3fc_): this;
        "set(org.joml.Vector3ic)"(arg0: Internal.Vector3ic_): this;
        length(): number;
        "sub(org.joml.Vector3fc)"(arg0: Internal.Vector3fc_): this;
        fma(arg0: number, arg1: Internal.Vector3fc_, arg2: Internal.Vector3d_): this;
        "mulDirection(org.joml.Matrix4x3fc,org.joml.Vector3d)"(arg0: Internal.Matrix4x3fc_, arg1: Internal.Vector3d_): this;
        "mulTranspose(org.joml.Matrix3dc,org.joml.Vector3d)"(arg0: Internal.Matrix3dc_, arg1: Internal.Vector3d_): this;
        "normalize(org.joml.Vector3d)"(arg0: Internal.Vector3d_): this;
        rotate(arg0: Internal.Quaterniondc_, arg1: Internal.Vector3d_): this;
        mul(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): this;
        "mulProject(org.joml.Matrix4fc,org.joml.Vector3d)"(arg0: Internal.Matrix4fc_, arg1: Internal.Vector3d_): this;
        div(arg0: number, arg1: number, arg2: number): this;
        "mulTransposeDirection(org.joml.Matrix4dc)"(arg0: Internal.Matrix4dc_): this;
        rotateX(arg0: number): this;
        wait(arg0: number, arg1: number): void;
        "mulDirection(org.joml.Matrix4fc)"(arg0: Internal.Matrix4fc_): this;
        "mulPositionW(org.joml.Matrix4dc,org.joml.Vector3d)"(arg0: Internal.Matrix4dc_, arg1: Internal.Vector3d_): number;
        fma(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3d_): this;
        mulTransposePosition(arg0: Internal.Matrix4fc_): this;
        get(arg0: number, arg1: Internal.Vector3i_): Internal.Vector3i;
        get(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        mul(arg0: Internal.Matrix3x2dc_, arg1: Internal.Vector3d_): this;
        mulAdd(arg0: number, arg1: Internal.Vector3dc_): this;
        div(arg0: Internal.Vector3d_): this;
        mulPosition(arg0: Internal.Matrix4x3dc_, arg1: Internal.Vector3d_): this;
        "set(org.joml.Vector2ic,double)"(arg0: Internal.Vector2ic_, arg1: number): this;
        cross(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): this;
        "div(double)"(arg0: number): this;
        mulDirection(arg0: Internal.Matrix4x3fc_): this;
        mulPosition(arg0: Internal.Matrix4x3dc_): this;
        hashCode(): number;
        get(arg0: Vec3f_): Vec3f;
        distance(arg0: Internal.Vector3dc_): number;
        "set(java.nio.DoubleBuffer)"(arg0: Internal.DoubleBuffer_): this;
        div(arg0: number, arg1: Internal.Vector3d_): this;
        rotationTo(arg0: number, arg1: number, arg2: number, arg3: Internal.Quaterniond_): Internal.Quaterniond;
        "mul(org.joml.Matrix3fc,org.joml.Vector3d)"(arg0: Internal.Matrix3fc_, arg1: Internal.Vector3d_): this;
        "set(double[])"(arg0: number[]): this;
        mul(arg0: Internal.Matrix3dc_): this;
        get class(): typeof any
        set "(double)"(arg0: number)
        set "(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_)
        get finite(): boolean
        set "(org.joml.Vector3dc)"(arg0: Internal.Vector3dc_)
        set "(float[])"(arg0: number[])
        set fromAddress(arg0: number)
        set "(org.joml.Vector3fc)"(arg0: Internal.Vector3fc_)
        set "(org.joml.Vector3ic)"(arg0: Internal.Vector3ic_)
        set "(java.nio.DoubleBuffer)"(arg0: Internal.DoubleBuffer_)
        set "(double[])"(arg0: number[])
        z: number;
        x: number;
        y: number;
    }
    type Vector3d_ = Vector3d;
    class GuiControlClickEvent extends Internal.GuiControlEvent<any> {
        constructor(arg0: Internal.GuiControl_, arg1: number, arg2: boolean)
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        cancelable(): boolean;
        isCanceled(): boolean;
        wait(arg0: number): void;
        cancel(): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        get canceled(): boolean
        readonly button: number;
        readonly doubleClick: boolean;
    }
    type GuiControlClickEvent_ = GuiControlClickEvent;
    abstract class Panel extends Internal.Widget {
        constructor(panel: Internal.Panel_)
        getScrollStep(): number;
        static getClipboardString(): string;
        mousePressed(button: Internal.MouseButton_): boolean;
        getY(): number;
        closeGui(openPrevScreen: boolean): void;
        scrollPanel(scroll: number): boolean;
        mouseDragged(button: number, dragX: number, dragY: number): boolean;
        add(widget: Internal.Widget_): void;
        isDefaultScrollVertical(): boolean;
        setPos(x: number, y: number): void;
        keyPressed(key: dev.ftb.mods.ftblibrary.ui.input.Key_): boolean;
        isGhostIngredientTarget(ingredient: any): boolean;
        getPartialTicks(): number;
        setScrollX(scroll: number): void;
        getWidth(): number;
        getDrawLayer(): Internal.Widget$DrawLayer;
        isMouseOverAnyWidget(): boolean;
        keyReleased(key: dev.ftb.mods.ftblibrary.ui.input.Key_): void;
        getMouseX(): number;
        "compareTo(dev.ftb.mods.ftblibrary.ui.Widget)"(widget: Internal.Widget_): number;
        static isShiftKeyDown(): boolean;
        "compareTo(java.lang.Object)"(arg0: any): number;
        static setClipboardString(string: string): void;
        getClass(): typeof any;
        setScrollStep(s: number): void;
        handleClick(scheme: string, path: string): boolean;
        getX(): number;
        getParent(): this;
        run(): void;
        updateMouseOver(mouseX: number, mouseY: number): void;
        getPosY(): number;
        static isMouseButtonDown(button: Internal.MouseButton_): boolean;
        setOnlyRenderWidgetsInside(value: boolean): void;
        setScrollY(scroll: number): void;
        getWidget(index: number): Internal.Widget;
        setPosAndSize(x: number, y: number, w: number, h: number): Internal.Widget;
        setWidth(v: number): void;
        getHeight(): number;
        getContentHeight(): number;
        charTyped(c: string, modifiers: Internal.KeyModifiers_): boolean;
        toString(): string;
        setSize(w: number, h: number): void;
        isOffset(): boolean;
        getCursor(): Internal.CursorType;
        notifyAll(): void;
        mouseReleased(button: Internal.MouseButton_): void;
        collidesWith(x: number, y: number, w: number, h: number): boolean;
        openGuiLater(): void;
        getScrollX(): number;
        getOnlyInteractWithWidgetsInside(): boolean;
        checkMouseOver(mouseX: number, mouseY: number): boolean;
        getScreen(): com.mojang.blaze3d.platform.Window;
        drawWidget(graphics: Internal.GuiGraphics_, theme: Internal.Theme_, widget: Internal.Widget_, x: number, y: number, w: number, h: number): void;
        handleClick(click: string): boolean;
        wait(arg0: number): void;
        setHeight(v: number): void;
        addMouseOverText(list: Internal.TooltipList_): void;
        shouldDraw(): boolean;
        compareTo(widget: Internal.Widget_): number;
        notify(): void;
        compareTo(arg0: any): number;
        getWidgets(): Internal.List<Internal.Widget>;
        getPosX(): number;
        closeGui(): void;
        openGui(): void;
        getWidgetType(): Internal.WidgetType;
        abstract alignWidgets(): void;
        setX(v: number): void;
        clearWidgets(): void;
        setOnlyInteractWithWidgetsInside(value: boolean): void;
        getScrollY(): number;
        getGui(): Internal.BaseScreen;
        tick(): void;
        wait(): void;
        refreshWidgets(): void;
        getTitle(): net.minecraft.network.chat.Component;
        openAfter(runnable: Internal.Runnable_): Internal.Runnable;
        getContentWidth(): number;
        draw(graphics: Internal.GuiGraphics_, theme: Internal.Theme_, x: number, y: number, w: number, h: number): void;
        drawBackground(graphics: Internal.GuiGraphics_, theme: Internal.Theme_, x: number, y: number, w: number, h: number): void;
        closeContextMenu(): void;
        mouseScrolled(scroll: number): boolean;
        getIngredientUnderMouse(): Internal.Optional<Internal.PositionedIngredient>;
        shouldAddMouseOverText(): boolean;
        wait(arg0: number, arg1: number): void;
        isEnabled(): boolean;
        setOffset(flag: boolean): void;
        movePanelScroll(dx: number, dy: number): boolean;
        setY(v: number): void;
        static isCtrlKeyDown(): boolean;
        static isKeyDown(key: number): boolean;
        abstract addWidgets(): void;
        isMouseOver(): boolean;
        playClickSound(): void;
        mouseDoubleClicked(button: Internal.MouseButton_): boolean;
        onClosed(): void;
        acceptGhostIngredient(ingredient: any): void;
        drawOffsetBackground(graphics: Internal.GuiGraphics_, theme: Internal.Theme_, x: number, y: number, w: number, h: number): void;
        getMouseY(): number;
        hashCode(): number;
        getOnlyRenderWidgetsInside(): boolean;
        setDrawLayer(drawLayer: Internal.Widget$DrawLayer_): void;
        addAll(list: Internal.Iterable_<Internal.Widget>): void;
        align(layout: Internal.WidgetLayout_): number;
        equals(arg0: any): boolean;
        get scrollStep(): number
        get clipboardString(): string
        get y(): number
        get defaultScrollVertical(): boolean
        get partialTicks(): number
        set scrollX(scroll: number)
        get width(): number
        get drawLayer(): Internal.Widget$DrawLayer
        get mouseOverAnyWidget(): boolean
        get mouseX(): number
        get shiftKeyDown(): boolean
        set clipboardString(string: string)
        get class(): typeof any
        set scrollStep(s: number)
        get x(): number
        get parent(): Internal.Panel
        get posY(): number
        set onlyRenderWidgetsInside(value: boolean)
        set scrollY(scroll: number)
        set width(v: number)
        get height(): number
        get contentHeight(): number
        get offset(): boolean
        get cursor(): Internal.CursorType
        get scrollX(): number
        get onlyInteractWithWidgetsInside(): boolean
        get screen(): com.mojang.blaze3d.platform.Window
        set height(v: number)
        get widgets(): Internal.List<Internal.Widget>
        get posX(): number
        get widgetType(): Internal.WidgetType
        set x(v: number)
        set onlyInteractWithWidgetsInside(value: boolean)
        get scrollY(): number
        get gui(): Internal.BaseScreen
        get title(): net.minecraft.network.chat.Component
        get contentWidth(): number
        get ingredientUnderMouse(): Internal.Optional<Internal.PositionedIngredient>
        get enabled(): boolean
        set offset(flag: boolean)
        set y(v: number)
        get ctrlKeyDown(): boolean
        get mouseOver(): boolean
        get mouseY(): number
        get onlyRenderWidgetsInside(): boolean
        set drawLayer(drawLayer: Internal.Widget$DrawLayer_)
    }
    type Panel_ = Panel;
    /**
     * @deprecated
    */
    class OutputInt {
        constructor()
        constructor(arg0: number)
        getClass(): typeof any;
        hashCode(): number;
        /**
         * @deprecated
        */
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        /**
         * @deprecated
        */
        value: number;
    }
    type OutputInt_ = OutputInt;
    class ThinBoneBlock extends Internal.RotatedPillarBlock implements Internal.SimpleWaterloggedBlock {
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
        static rotatePillar(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
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
        static readonly SHAPE_Z: (Internal.VoxelShapeAlignedCuboid) & (Internal.VoxelShape);
        static readonly SHAPE_X: (Internal.VoxelShapeAlignedCuboid) & (Internal.VoxelShape);
        static readonly SHAPE_Y: (Internal.VoxelShapeAlignedCuboid) & (Internal.VoxelShape);
        static readonly WATERLOGGED: (Internal.BooleanProperty) & (Internal.BooleanProperty);
        readonly shapeMap: Internal.Map<Internal.BlockState, Internal.VoxelShape>;
        static readonly OFFSET: (Internal.IntegerProperty) & (Internal.IntegerProperty);
    }
    type ThinBoneBlock_ = ThinBoneBlock;
    interface IMixinQuest {
        abstract isRepeatable(): boolean;
        abstract getIncompatibleQuests(): Internal.List<Internal.QuestObject>;
        abstract getMinRequiredTasks(): number;
        get repeatable(): boolean
        get incompatibleQuests(): Internal.List<Internal.QuestObject>
        get minRequiredTasks(): number
    }
    type IMixinQuest_ = IMixinQuest;
    class ItemRunicMalus extends Internal.ItemBagBase implements Internal.IRelic, Internal.GeoItem {
        constructor()
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        requiresModifierKey(): boolean;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        moonlight$addAdditionalBehavior(placementOverride: Internal.AdditionalItemPlacement_): void;
        getTick(arg0: any): number;
        isFireResistant(): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        isPerspectiveAware(): boolean;
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
        setAnimData<D>(arg0: Internal.Entity_, arg1: number, arg2: Internal.SerializableDataTicket_<D>, arg3: D): void;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        "triggerAnim(net.minecraft.world.entity.Entity,long,java.lang.String,java.lang.String)"<D>(arg0: Internal.Entity_, arg1: number, arg2: string, arg3: string): void;
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
        getHoverAddition(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): net.minecraft.network.chat.Component;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        attachCapability(capabilityBuilder: Internal.CapabilityBuilder_<any, any, any>): void;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        isFoil(arg0: Internal.ItemStack_): boolean;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        triggerAnim<D>(arg0: Internal.Entity_, arg1: number, arg2: string, arg3: string): void;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        triggerAnim<D>(arg0: number, arg1: string, arg2: string, arg3: Internal.PacketDistributor$PacketTarget_): void;
        animatableCacheOverride(): Internal.AnimatableInstanceCache;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        getProvider(arg0: Internal.ItemStack_): Internal.MenuProvider;
        handler$dpg000$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        static registerSyncedAnimatable(arg0: Internal.GeoAnimatable_): void;
        setFireResistant(arg0: boolean): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        getBoneResetTime(): number;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vec3f;
        addItemWithGuiTooltip(arg0: Internal.ItemStack_): boolean;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        syncAnimData<D>(arg0: number, arg1: Internal.SerializableDataTicket_<D>, arg2: D, arg3: Internal.PacketDistributor$PacketTarget_): void;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        static getOrAssignId(arg0: Internal.ItemStack_, arg1: Internal.ServerLevel_): number;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        static "getId(net.minecraft.world.item.Item)"(arg0: Internal.Item_): number;
        registerControllers(arg0: Internal.AnimatableManager$ControllerRegistrar_): void;
        equals(arg0: any): boolean;
        "triggerAnim(long,java.lang.String,java.lang.String,net.minecraftforge.network.PacketDistributor$PacketTarget)"<D>(arg0: number, arg1: string, arg2: string, arg3: Internal.PacketDistributor$PacketTarget_): void;
        setRarity(arg0: Internal.Rarity_): void;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isComplex(): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        filterGroup(): Internal.ItemFilterGroup;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: Internal.DamageSource_): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        fillByteBuffer(arg0: Internal.FriendlyByteBuf_): void;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        setBurnTime(i: number): void;
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
        getAnimatableInstanceCache(): Internal.AnimatableInstanceCache;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getAnimData<D>(arg0: number, arg1: Internal.SerializableDataTicket_<D>): D;
        shouldPlayAnimsWhileGamePaused(): boolean;
        setAttackDamage(attackDamage: number): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        static getId(arg0: Internal.ItemStack_): number;
        toString(): string;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        openGuiIfModifierPressed(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Level_): boolean;
        static "getId(net.minecraft.world.item.ItemStack)"(arg0: Internal.ItemStack_): number;
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
        notify(): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        static getRunes(arg0: Internal.ItemStack_): Internal.NonNullList<Internal.ItemStack>;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        canBeDepleted(): boolean;
        getDamage(arg0: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
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
        get perspectiveAware(): boolean
        get typeData(): Internal.CompoundTag
        get defaultInstance(): Internal.ItemStack
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get class(): typeof any
        get renderPropertiesInternal(): any
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        get edible(): boolean
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        get boneResetTime(): number
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
        set rarity(arg0: Internal.Rarity_)
        get complex(): boolean
        get descriptionId(): string
        get creativeTab(): string
        set burnTime(i: number)
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        set itemBuilder(b: Internal.ItemBuilder_)
        get animatableInstanceCache(): Internal.AnimatableInstanceCache
        set attackDamage(attackDamage: number)
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
        /**
         * @deprecated
        */
        get maxStackSize(): number
        get eatingSound(): Internal.SoundEvent
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
        static readonly INVENTORY_SIZE: (6) & (number);
    }
    type ItemRunicMalus_ = ItemRunicMalus;
    class ClientboundSetEntityMotionPacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: number, arg1: Vec3d_)
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: Internal.Entity_)
        handle(arg0: Internal.PacketListener_): void;
        getClass(): typeof any;
        write(arg0: Internal.FriendlyByteBuf_): void;
        getXa(): number;
        getZa(): number;
        getYa(): number;
        toString(): string;
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
        getId(): number;
        get class(): typeof any
        get xa(): number
        get za(): number
        get ya(): number
        get skippable(): boolean
        get id(): number
    }
    type ClientboundSetEntityMotionPacket_ = ClientboundSetEntityMotionPacket;
    interface Serializable {
    }
    type Serializable_ = Serializable;
    interface Short2FloatFunction extends Internal.IntToDoubleFunction, it.unimi.dsi.fastutil.Function<number, number> {
        composeInt(arg0: Internal.Int2ShortFunction_): Internal.Int2FloatFunction;
        /**
         * @deprecated
        */
        applyAsDouble(arg0: number): number;
        composeLong(arg0: Internal.Long2ShortFunction_): Internal.Long2FloatFunction;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, number>;
        defaultReturnValue(arg0: number): void;
        andThenInt(arg0: Internal.Float2IntFunction_): Internal.Short2IntFunction;
        composeDouble(arg0: Internal.Double2ShortFunction_): Internal.Double2FloatFunction;
        /**
         * @deprecated
        */
        "put(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<number, T>): Internal.Function<number, T>;
        "containsKey(short)"(arg0: number): boolean;
        "getOrDefault(short,float)"(arg0: number, arg1: number): number;
        composeReference<T>(arg0: Internal.Reference2ShortFunction_<T>): Internal.Reference2FloatFunction<T>;
        getOrDefault(arg0: number, arg1: number): number;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        abstract "get(short)"(arg0: number): number;
        "remove(short)"(arg0: number): number;
        abstract get(arg0: number): number;
        composeObject<T>(arg0: Internal.Object2ShortFunction_<T>): Internal.Object2FloatFunction<T>;
        containsKey(arg0: number): boolean;
        "put(short,float)"(arg0: number, arg1: number): number;
        composeShort(arg0: Internal.Short2ShortFunction_): this;
        andThenLong(arg0: Internal.Float2LongFunction_): Internal.Short2LongFunction;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: number): number;
        andThenReference<T>(arg0: Internal.Float2ReferenceFunction_<T>): Internal.Short2ReferenceFunction<T>;
        /**
         * @deprecated
        */
        remove(arg0: any): any;
        /**
         * @deprecated
        */
        "put(java.lang.Short,java.lang.Float)"(arg0: number, arg1: number): number;
        composeByte(arg0: Internal.Byte2ShortFunction_): Internal.Byte2FloatFunction;
        identity<T>(): Internal.Function<T, T>;
        /**
         * @deprecated
        */
        "containsKey(java.lang.Object)"(arg0: any): boolean;
        /**
         * @deprecated
        */
        "remove(java.lang.Object)"(arg0: any): any;
        /**
         * @deprecated
        */
        get(arg0: any): number;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        andThenShort(arg0: Internal.Float2ShortFunction_): Internal.Short2ShortFunction;
        remove(arg0: number): number;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        andThenByte(arg0: Internal.Float2ByteFunction_): Internal.Short2ByteFunction;
        apply(arg0: number): number;
        composeFloat(arg0: Internal.Float2ShortFunction_): Internal.Float2FloatFunction;
        andThenFloat(arg0: Internal.Float2FloatFunction_): this;
        /**
         * @deprecated
        */
        "get(java.lang.Object)"(arg0: any): number;
        defaultReturnValue(): number;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: number): number;
        andThenDouble(arg0: Internal.Float2DoubleFunction_): Internal.Short2DoubleFunction;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Float)"(arg0: any, arg1: number): number;
        andThenChar(arg0: Internal.Float2CharFunction_): Internal.Short2CharFunction;
        andThenObject<T>(arg0: Internal.Float2ObjectFunction_<T>): Internal.Short2ObjectFunction<T>;
        composeChar(arg0: Internal.Char2ShortFunction_): Internal.Char2FloatFunction;
        size(): number;
        put(arg0: number, arg1: number): number;
        clear(): void;
    }
    type Short2FloatFunction_ = Short2FloatFunction;
    class SpellPartTags extends Internal.Enum<Internal.SpellPartTags> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getDeclaringClass(): typeof Internal.SpellPartTags;
        getClass(): typeof any;
        toString(): string;
        "compareTo(com.mna.api.spells.SpellPartTags)"(arg0: Internal.SpellPartTags_): number;
        notifyAll(): void;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.SpellPartTags>>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        name(): string;
        static valueOf(arg0: string): Internal.SpellPartTags;
        hashCode(): number;
        ordinal(): number;
        wait(): void;
        static values(): Internal.SpellPartTags[];
        wait(arg0: number): void;
        compareTo(arg0: Internal.SpellPartTags_): number;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        get declaringClass(): typeof Internal.SpellPartTags
        get class(): typeof any
        static readonly SELF: (Internal.SpellPartTags) & (Internal.SpellPartTags);
        static readonly UTILITY: (Internal.SpellPartTags) & (Internal.SpellPartTags);
        static readonly NEUTRAL: (Internal.SpellPartTags) & (Internal.SpellPartTags);
        static readonly DONOTUSE: (Internal.SpellPartTags) & (Internal.SpellPartTags);
        static readonly HARMFUL: (Internal.SpellPartTags) & (Internal.SpellPartTags);
        static readonly FRIENDLY: (Internal.SpellPartTags) & (Internal.SpellPartTags);
    }
    type SpellPartTags_ = SpellPartTags | "neutral" | "friendly" | "utility" | "self" | "harmful" | "donotuse";
    class Vector2i implements Internal.Vector2ic, Internal.Cloneable, Internal.Externalizable {
        constructor()
        constructor(arg0: number, arg1: number, arg2: number)
        constructor(arg0: number, arg1: number, arg2: number)
        constructor(arg0: Internal.ByteBuffer_)
        constructor(arg0: number)
        constructor(arg0: number[])
        constructor(arg0: number, arg1: Internal.ByteBuffer_)
        constructor(arg0: number, arg1: number)
        constructor(arg0: number, arg1: Internal.IntBuffer_)
        constructor(arg0: Internal.Vector2fc_, arg1: number)
        constructor(arg0: Internal.IntBuffer_)
        constructor(arg0: Internal.Vector2dc_, arg1: number)
        constructor(arg0: Internal.Vector2ic_)
        absolute(arg0: Internal.Vector2i_): this;
        mul(arg0: number): this;
        x(): number;
        get(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        gridDistance(arg0: Internal.Vector2ic_): number;
        div(arg0: number): this;
        "set(org.joml.Vector2ic)"(arg0: Internal.Vector2ic_): this;
        set(arg0: Internal.Vector2dc_, arg1: number): this;
        "set(org.joml.Vector2dc)"(arg0: Internal.Vector2dc_): this;
        "sub(int,int)"(arg0: number, arg1: number): this;
        "mul(int)"(arg0: number): this;
        set(arg0: Internal.Vector2ic_): this;
        get(arg0: number, arg1: Internal.IntBuffer_): Internal.IntBuffer;
        max(arg0: Internal.Vector2ic_): this;
        "set(int)"(arg0: number): this;
        add(arg0: number, arg1: number, arg2: Internal.Vector2i_): this;
        negate(arg0: Internal.Vector2i_): this;
        negate(): this;
        "div(float)"(arg0: number): this;
        toString(arg0: Internal.NumberFormat_): string;
        "get(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        "get(int,java.nio.ByteBuffer)"(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        static distance(arg0: number, arg1: number, arg2: number, arg3: number): number;
        "set(int,java.nio.ByteBuffer)"(arg0: number, arg1: Internal.ByteBuffer_): this;
        sub(arg0: Internal.Vector2ic_, arg1: Internal.Vector2i_): this;
        clone(): any;
        getClass(): typeof any;
        set(arg0: number, arg1: Internal.IntBuffer_): this;
        writeExternal(arg0: Internal.ObjectOutput_): void;
        maxComponent(): number;
        div(arg0: number): this;
        sub(arg0: number, arg1: number, arg2: Internal.Vector2i_): this;
        set(arg0: number): this;
        absolute(): this;
        distance(arg0: Internal.Vector2ic_): number;
        "set(org.joml.Vector2fc,int)"(arg0: Internal.Vector2fc_, arg1: number): this;
        add(arg0: number, arg1: number): this;
        set(arg0: Internal.Vector2fc_, arg1: number): this;
        toString(): string;
        notifyAll(): void;
        getToAddress(arg0: number): Internal.Vector2ic;
        "add(int,int)"(arg0: number, arg1: number): this;
        max(arg0: Internal.Vector2ic_, arg1: Internal.Vector2i_): this;
        set(arg0: number, arg1: Internal.ByteBuffer_): this;
        wait(arg0: number): void;
        get(arg0: number): number;
        "get(int)"(arg0: number): number;
        zero(): this;
        sub(arg0: number, arg1: number): this;
        "set(int[])"(arg0: number[]): this;
        setComponent(arg0: number, arg1: number): this;
        "set(org.joml.Vector2dc,int)"(arg0: Internal.Vector2dc_, arg1: number): this;
        mul(arg0: number, arg1: number): this;
        set(arg0: number[]): this;
        "div(int)"(arg0: number): this;
        notify(): void;
        "set(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): this;
        add(arg0: Internal.Vector2ic_): this;
        distanceSquared(arg0: number, arg1: number): number;
        "set(int,int)"(arg0: number, arg1: number): this;
        readExternal(arg0: Internal.ObjectInput_): void;
        "mul(org.joml.Vector2ic)"(arg0: Internal.Vector2ic_): this;
        div(arg0: number, arg1: Internal.Vector2i_): this;
        mul(arg0: number, arg1: Internal.Vector2i_): this;
        gridDistance(arg0: number, arg1: number): number;
        "get(java.nio.IntBuffer)"(arg0: Internal.IntBuffer_): Internal.IntBuffer;
        "div(int,org.joml.Vector2i)"(arg0: number, arg1: Internal.Vector2i_): this;
        mul(arg0: number, arg1: number, arg2: Internal.Vector2i_): this;
        lengthSquared(): number;
        "sub(org.joml.Vector2ic,org.joml.Vector2i)"(arg0: Internal.Vector2ic_, arg1: Internal.Vector2i_): this;
        wait(): void;
        length(): number;
        get(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        distanceSquared(arg0: Internal.Vector2ic_): number;
        min(arg0: Internal.Vector2ic_): this;
        minComponent(): number;
        "div(float,org.joml.Vector2i)"(arg0: number, arg1: Internal.Vector2i_): this;
        set(arg0: Internal.Vector2dc_): this;
        y(): number;
        div(arg0: number, arg1: Internal.Vector2i_): this;
        mul(arg0: Internal.Vector2ic_): this;
        set(arg0: Internal.IntBuffer_): this;
        wait(arg0: number, arg1: number): void;
        "mul(org.joml.Vector2ic,org.joml.Vector2i)"(arg0: Internal.Vector2ic_, arg1: Internal.Vector2i_): this;
        add(arg0: Internal.Vector2ic_, arg1: Internal.Vector2i_): this;
        get(arg0: Internal.IntBuffer_): Internal.IntBuffer;
        equals(arg0: number, arg1: number): boolean;
        set(arg0: number, arg1: number): this;
        setFromAddress(arg0: number): this;
        "set(java.nio.IntBuffer)"(arg0: Internal.IntBuffer_): this;
        "mul(int,int)"(arg0: number, arg1: number): this;
        sub(arg0: Internal.Vector2ic_): this;
        mul(arg0: Internal.Vector2ic_, arg1: Internal.Vector2i_): this;
        static lengthSquared(arg0: number, arg1: number): number;
        static length(arg0: number, arg1: number): number;
        distance(arg0: number, arg1: number): number;
        set(arg0: Internal.ByteBuffer_): this;
        "get(int,java.nio.IntBuffer)"(arg0: number, arg1: Internal.IntBuffer_): Internal.IntBuffer;
        hashCode(): number;
        static distanceSquared(arg0: number, arg1: number, arg2: number, arg3: number): number;
        "mul(int,org.joml.Vector2i)"(arg0: number, arg1: Internal.Vector2i_): this;
        "set(int,java.nio.IntBuffer)"(arg0: number, arg1: Internal.IntBuffer_): this;
        min(arg0: Internal.Vector2ic_, arg1: Internal.Vector2i_): this;
        equals(arg0: any): boolean;
        "add(org.joml.Vector2ic,org.joml.Vector2i)"(arg0: Internal.Vector2ic_, arg1: Internal.Vector2i_): this;
        set "(org.joml.Vector2ic)"(arg0: Internal.Vector2ic_)
        set "(org.joml.Vector2dc)"(arg0: Internal.Vector2dc_)
        set "(int)"(arg0: number)
        get class(): typeof any
        set "(int[])"(arg0: number[])
        set "(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_)
        set fromAddress(arg0: number)
        set "(java.nio.IntBuffer)"(arg0: Internal.IntBuffer_)
        x: number;
        y: number;
    }
    type Vector2i_ = Vector2i;
    interface ShortIterator extends Internal.PrimitiveIterator<number, Internal.ShortConsumer> {
        /**
         * @deprecated
        */
        "forEachRemaining(java.util.function.Consumer)"(arg0: Internal.Consumer_<number>): void;
        forEachRemaining(arg0: any): void;
        /**
         * @deprecated
        */
        forEachRemaining(arg0: Internal.Consumer_<number>): void;
        /**
         * @deprecated
        */
        next(): any;
        skip(arg0: number): number;
        forEachRemaining(arg0: Internal.IntConsumer_): void;
        abstract nextShort(): number;
        forEachRemaining(arg0: Internal.ShortConsumer_): void;
        remove(): void;
        "forEachRemaining(it.unimi.dsi.fastutil.shorts.ShortConsumer)"(arg0: Internal.ShortConsumer_): void;
        "forEachRemaining(java.lang.Object)"(arg0: any): void;
        "forEachRemaining(java.util.function.IntConsumer)"(arg0: Internal.IntConsumer_): void;
        abstract hasNext(): boolean;
    }
    type ShortIterator_ = ShortIterator;
    interface ITextureAtlasSpriteLoader {
        abstract loadContents(arg0: ResourceLocation_, arg1: Internal.Resource_, arg2: Internal.FrameSize_, arg3: Internal.NativeImage_, arg4: Internal.AnimationMetadataSection_, arg5: Internal.ForgeTextureMetadata_): Internal.SpriteContents;
        abstract makeSprite(arg0: ResourceLocation_, arg1: Internal.SpriteContents_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): Internal.TextureAtlasSprite;
    }
    type ITextureAtlasSpriteLoader_ = ITextureAtlasSpriteLoader;
    class Vector2f implements Internal.Vector2fc, Internal.Cloneable, Internal.Externalizable {
        constructor()
        constructor(arg0: Internal.FloatBuffer_)
        constructor(arg0: Internal.Vector2fc_)
        constructor(arg0: number, arg1: Internal.FloatBuffer_)
        constructor(arg0: number, arg1: number)
        constructor(arg0: number[])
        constructor(arg0: number)
        constructor(arg0: Internal.ByteBuffer_)
        constructor(arg0: Internal.Vector2ic_)
        constructor(arg0: number, arg1: Internal.ByteBuffer_)
        round(): this;
        min(arg0: Internal.Vector2fc_): this;
        div(arg0: Internal.Vector2fc_): this;
        get(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        get(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        mul(arg0: Internal.Vector2fc_): this;
        "set(org.joml.Vector2ic)"(arg0: Internal.Vector2ic_): this;
        set(arg0: Internal.Vector2ic_): this;
        ceil(arg0: Internal.Vector2f_): this;
        "set(java.nio.FloatBuffer)"(arg0: Internal.FloatBuffer_): this;
        negate(): this;
        "get(int,java.nio.FloatBuffer)"(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        "normalize(org.joml.Vector2f)"(arg0: Internal.Vector2f_): this;
        "set(org.joml.Vector2dc)"(arg0: Internal.Vector2dc_): this;
        "mul(float,org.joml.Vector2f)"(arg0: number, arg1: Internal.Vector2f_): this;
        mul(arg0: number, arg1: number, arg2: Internal.Vector2f_): this;
        add(arg0: number, arg1: number): this;
        "div(float)"(arg0: number): this;
        toString(arg0: Internal.NumberFormat_): string;
        perpendicular(): this;
        "get(int,java.nio.ByteBuffer)"(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        "get(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        lengthSquared(): number;
        fma(arg0: number, arg1: Internal.Vector2fc_): this;
        div(arg0: number, arg1: number, arg2: Internal.Vector2f_): this;
        lerp(arg0: Internal.Vector2fc_, arg1: number, arg2: Internal.Vector2f_): this;
        "mul(org.joml.Vector2fc)"(arg0: Internal.Vector2fc_): this;
        get(arg0: number): number;
        set(arg0: number): this;
        mulPosition(arg0: Internal.Matrix3x2fc_): this;
        set(arg0: Internal.FloatBuffer_): this;
        fma(arg0: Internal.Vector2fc_, arg1: Internal.Vector2fc_, arg2: Internal.Vector2f_): this;
        "div(float,org.joml.Vector2f)"(arg0: number, arg1: Internal.Vector2f_): this;
        "set(float)"(arg0: number): this;
        sub(arg0: Internal.Vector2fc_): this;
        normalize(arg0: number, arg1: Internal.Vector2f_): this;
        "set(int,java.nio.ByteBuffer)"(arg0: number, arg1: Internal.ByteBuffer_): this;
        clone(): any;
        getClass(): typeof any;
        set(arg0: number, arg1: number): this;
        writeExternal(arg0: Internal.ObjectOutput_): void;
        maxComponent(): number;
        set(arg0: Internal.Vector2fc_): this;
        "get(java.nio.FloatBuffer)"(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        floor(): this;
        "set(float,float)"(arg0: number, arg1: number): this;
        absolute(): this;
        mul(arg0: number, arg1: Internal.Vector2f_): this;
        distance(arg0: Internal.Vector2fc_): number;
        mulTranspose(arg0: Internal.Matrix2fc_, arg1: Internal.Vector2f_): this;
        setComponent(arg0: number, arg1: number): this;
        "set(double,double)"(arg0: number, arg1: number): this;
        div(arg0: number): this;
        mul(arg0: number): this;
        "get(org.joml.Vector2d)"(arg0: Internal.Vector2d_): Internal.Vector2d;
        "get(org.joml.Vector2f)"(arg0: Internal.Vector2f_): this;
        add(arg0: Internal.Vector2fc_, arg1: Internal.Vector2f_): this;
        "equals(float,float)"(arg0: number, arg1: number): boolean;
        div(arg0: number, arg1: number): this;
        length(): number;
        toString(): string;
        dot(arg0: Internal.Vector2fc_): number;
        max(arg0: Internal.Vector2fc_): this;
        static distanceSquared(arg0: number, arg1: number, arg2: number, arg3: number): number;
        div(arg0: number, arg1: Internal.Vector2f_): this;
        notifyAll(): void;
        mul(arg0: Internal.Vector2fc_, arg1: Internal.Vector2f_): this;
        distanceSquared(arg0: number, arg1: number): number;
        "mul(org.joml.Matrix2dc,org.joml.Vector2f)"(arg0: Internal.Matrix2dc_, arg1: Internal.Vector2f_): this;
        fma(arg0: number, arg1: Internal.Vector2fc_, arg2: Internal.Vector2f_): this;
        "get(int,org.joml.Vector2i)"(arg0: number, arg1: Internal.Vector2i_): Internal.Vector2i;
        set(arg0: number, arg1: Internal.ByteBuffer_): this;
        "div(org.joml.Vector2fc)"(arg0: Internal.Vector2fc_): this;
        set(arg0: number[]): this;
        wait(arg0: number): void;
        min(arg0: Internal.Vector2fc_, arg1: Internal.Vector2f_): this;
        div(arg0: Internal.Vector2fc_, arg1: Internal.Vector2f_): this;
        mul(arg0: Internal.Matrix2dc_): this;
        "normalize(float)"(arg0: number): this;
        "set(double)"(arg0: number): this;
        zero(): this;
        sub(arg0: number, arg1: number, arg2: Internal.Vector2f_): this;
        mulPosition(arg0: Internal.Matrix3x2fc_, arg1: Internal.Vector2f_): this;
        "mul(float,float)"(arg0: number, arg1: number): this;
        "fma(org.joml.Vector2fc,org.joml.Vector2fc)"(arg0: Internal.Vector2fc_, arg1: Internal.Vector2fc_): this;
        mul(arg0: Internal.Matrix2dc_, arg1: Internal.Vector2f_): this;
        "div(float,float)"(arg0: number, arg1: number): this;
        "fma(float,org.joml.Vector2fc)"(arg0: number, arg1: Internal.Vector2fc_): this;
        negate(arg0: Internal.Vector2f_): this;
        notify(): void;
        fma(arg0: Internal.Vector2fc_, arg1: Internal.Vector2fc_): this;
        "set(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): this;
        isFinite(): boolean;
        get(arg0: Internal.Vector2d_): Internal.Vector2d;
        mul(arg0: number, arg1: number): this;
        add(arg0: number, arg1: number, arg2: Internal.Vector2f_): this;
        static length(arg0: number, arg1: number): number;
        "mul(org.joml.Matrix2dc)"(arg0: Internal.Matrix2dc_): this;
        x(): number;
        set(arg0: number): this;
        ceil(): this;
        normalize(arg0: number): this;
        normalize(arg0: Internal.Vector2f_): this;
        readExternal(arg0: Internal.ObjectInput_): void;
        normalize(): this;
        set(arg0: number, arg1: number): this;
        floor(arg0: Internal.Vector2f_): this;
        sub(arg0: Internal.Vector2fc_, arg1: Internal.Vector2f_): this;
        set(arg0: number, arg1: Internal.FloatBuffer_): this;
        sub(arg0: number, arg1: number): this;
        get(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        static lengthSquared(arg0: number, arg1: number): number;
        wait(): void;
        get(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        "sub(org.joml.Vector2fc,org.joml.Vector2f)"(arg0: Internal.Vector2fc_, arg1: Internal.Vector2f_): this;
        "get(int)"(arg0: number): number;
        angle(arg0: Internal.Vector2fc_): number;
        minComponent(): number;
        "add(float,float)"(arg0: number, arg1: number): this;
        "set(float[])"(arg0: number[]): this;
        add(arg0: Internal.Vector2fc_): this;
        lerp(arg0: Internal.Vector2fc_, arg1: number): this;
        get(arg0: number, arg1: Internal.Vector2i_): Internal.Vector2i;
        set(arg0: Internal.Vector2dc_): this;
        "fma(float,org.joml.Vector2fc,org.joml.Vector2f)"(arg0: number, arg1: Internal.Vector2fc_, arg2: Internal.Vector2f_): this;
        equals(arg0: number, arg1: number): boolean;
        wait(arg0: number, arg1: number): void;
        mulTranspose(arg0: Internal.Matrix2fc_): this;
        get(arg0: Internal.Vector2f_): this;
        equals(arg0: Internal.Vector2fc_, arg1: number): boolean;
        getToAddress(arg0: number): Internal.Vector2fc;
        "sub(float,float)"(arg0: number, arg1: number): this;
        mul(arg0: Internal.Matrix2fc_, arg1: Internal.Vector2f_): this;
        setFromAddress(arg0: number): this;
        mulDirection(arg0: Internal.Matrix3x2fc_, arg1: Internal.Vector2f_): this;
        "mul(org.joml.Matrix2fc,org.joml.Vector2f)"(arg0: Internal.Matrix2fc_, arg1: Internal.Vector2f_): this;
        mulDirection(arg0: Internal.Matrix3x2fc_): this;
        y(): number;
        "equals(org.joml.Vector2fc,float)"(arg0: Internal.Vector2fc_, arg1: number): boolean;
        absolute(arg0: Internal.Vector2f_): this;
        "add(org.joml.Vector2fc,org.joml.Vector2f)"(arg0: Internal.Vector2fc_, arg1: Internal.Vector2f_): this;
        "set(int,java.nio.FloatBuffer)"(arg0: number, arg1: Internal.FloatBuffer_): this;
        "mul(float)"(arg0: number): this;
        set(arg0: Internal.ByteBuffer_): this;
        "set(org.joml.Vector2fc)"(arg0: Internal.Vector2fc_): this;
        "fma(org.joml.Vector2fc,org.joml.Vector2fc,org.joml.Vector2f)"(arg0: Internal.Vector2fc_, arg1: Internal.Vector2fc_, arg2: Internal.Vector2f_): this;
        hashCode(): number;
        max(arg0: Internal.Vector2fc_, arg1: Internal.Vector2f_): this;
        static distance(arg0: number, arg1: number, arg2: number, arg3: number): number;
        round(arg0: Internal.Vector2f_): this;
        distanceSquared(arg0: Internal.Vector2fc_): number;
        "mul(org.joml.Vector2fc,org.joml.Vector2f)"(arg0: Internal.Vector2fc_, arg1: Internal.Vector2f_): this;
        mul(arg0: Internal.Matrix2fc_): this;
        distance(arg0: number, arg1: number): number;
        "mul(org.joml.Matrix2fc)"(arg0: Internal.Matrix2fc_): this;
        equals(arg0: any): boolean;
        "div(org.joml.Vector2fc,org.joml.Vector2f)"(arg0: Internal.Vector2fc_, arg1: Internal.Vector2f_): this;
        set "(org.joml.Vector2ic)"(arg0: Internal.Vector2ic_)
        set "(java.nio.FloatBuffer)"(arg0: Internal.FloatBuffer_)
        set "(org.joml.Vector2dc)"(arg0: Internal.Vector2dc_)
        set "(float)"(arg0: number)
        get class(): typeof any
        set "(double)"(arg0: number)
        set "(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_)
        get finite(): boolean
        set "(float[])"(arg0: number[])
        set fromAddress(arg0: number)
        set "(org.joml.Vector2fc)"(arg0: Internal.Vector2fc_)
        y: number;
        x: number;
    }
    type Vector2f_ = Vector2f;
    interface DropTargetListener extends Internal.EventListener {
        abstract dragExit(arg0: Internal.DropTargetEvent_): void;
        abstract drop(arg0: Internal.DropTargetDropEvent_): void;
        abstract dragEnter(arg0: Internal.DropTargetDragEvent_): void;
        abstract dragOver(arg0: Internal.DropTargetDragEvent_): void;
        abstract dropActionChanged(arg0: Internal.DropTargetDragEvent_): void;
    }
    type DropTargetListener_ = DropTargetListener;
    class Vector2d implements Internal.Cloneable, Internal.Vector2dc, Internal.Externalizable {
        constructor()
        constructor(arg0: Internal.Vector2fc_)
        constructor(arg0: Internal.DoubleBuffer_)
        constructor(arg0: Internal.Vector2dc_)
        constructor(arg0: number[])
        constructor(arg0: number, arg1: Internal.DoubleBuffer_)
        constructor(arg0: Internal.ByteBuffer_)
        constructor(arg0: number)
        constructor(arg0: number[])
        constructor(arg0: Internal.Vector2ic_)
        constructor(arg0: number, arg1: Internal.ByteBuffer_)
        constructor(arg0: number, arg1: number)
        div(arg0: Internal.Vector2fc_): this;
        equals(arg0: Internal.Vector2dc_, arg1: number): boolean;
        "mulTranspose(org.joml.Matrix2fc)"(arg0: Internal.Matrix2fc_): this;
        round(): this;
        set(arg0: Internal.Vector2ic_): this;
        "mul(org.joml.Matrix2fc)"(arg0: Internal.Matrix2fc_): this;
        "fma(double,org.joml.Vector2dc)"(arg0: number, arg1: Internal.Vector2dc_): this;
        "get(int)"(arg0: number): number;
        get(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        add(arg0: number, arg1: number, arg2: Internal.Vector2d_): this;
        "sub(org.joml.Vector2fc)"(arg0: Internal.Vector2fc_): this;
        set(arg0: Internal.DoubleBuffer_): this;
        fma(arg0: Internal.Vector2dc_, arg1: Internal.Vector2dc_, arg2: Internal.Vector2d_): this;
        "fma(double,org.joml.Vector2dc,org.joml.Vector2d)"(arg0: number, arg1: Internal.Vector2dc_, arg2: Internal.Vector2d_): this;
        distance(arg0: Internal.Vector2fc_): number;
        mul(arg0: Internal.Matrix2fc_, arg1: Internal.Vector2d_): this;
        angle(arg0: Internal.Vector2dc_): number;
        lerp(arg0: Internal.Vector2dc_, arg1: number): this;
        mul(arg0: number, arg1: Internal.Vector2d_): this;
        "set(org.joml.Vector2ic)"(arg0: Internal.Vector2ic_): this;
        div(arg0: number, arg1: Internal.Vector2d_): this;
        x(): number;
        negate(): this;
        "fma(org.joml.Vector2dc,org.joml.Vector2dc,org.joml.Vector2d)"(arg0: Internal.Vector2dc_, arg1: Internal.Vector2dc_, arg2: Internal.Vector2d_): this;
        dot(arg0: Internal.Vector2dc_): number;
        "set(org.joml.Vector2dc)"(arg0: Internal.Vector2dc_): this;
        fma(arg0: number, arg1: Internal.Vector2dc_): this;
        toString(arg0: Internal.NumberFormat_): string;
        lerp(arg0: Internal.Vector2dc_, arg1: number, arg2: Internal.Vector2d_): this;
        "get(int,java.nio.ByteBuffer)"(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        "get(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        setComponent(arg0: number, arg1: number): this;
        "mul(double)"(arg0: number): this;
        perpendicular(): this;
        round(arg0: Internal.Vector2d_): this;
        "normalize(org.joml.Vector2d)"(arg0: Internal.Vector2d_): this;
        static distanceSquared(arg0: number, arg1: number, arg2: number, arg3: number): number;
        floor(): this;
        sub(arg0: Internal.Vector2fc_): this;
        sub(arg0: number, arg1: number, arg2: Internal.Vector2d_): this;
        div(arg0: Internal.Vector2fc_, arg1: Internal.Vector2d_): this;
        "mul(double,double)"(arg0: number, arg1: number): this;
        "set(int,java.nio.ByteBuffer)"(arg0: number, arg1: Internal.ByteBuffer_): this;
        clone(): any;
        set(arg0: number, arg1: number): this;
        getClass(): typeof any;
        add(arg0: Internal.Vector2dc_): this;
        writeExternal(arg0: Internal.ObjectOutput_): void;
        maxComponent(): number;
        "add(org.joml.Vector2dc,org.joml.Vector2d)"(arg0: Internal.Vector2dc_, arg1: Internal.Vector2d_): this;
        set(arg0: Internal.Vector2fc_): this;
        absolute(): this;
        negate(arg0: Internal.Vector2d_): this;
        mulTranspose(arg0: Internal.Matrix2dc_, arg1: Internal.Vector2d_): this;
        static length(arg0: number, arg1: number): number;
        normalize(): this;
        "div(org.joml.Vector2dc,org.joml.Vector2d)"(arg0: Internal.Vector2dc_, arg1: Internal.Vector2d_): this;
        "get(java.nio.DoubleBuffer)"(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        mulDirection(arg0: Internal.Matrix3x2dc_): this;
        mulTranspose(arg0: Internal.Matrix2dc_): this;
        "div(double,double)"(arg0: number, arg1: number): this;
        "set(double,double)"(arg0: number, arg1: number): this;
        add(arg0: Internal.Vector2dc_, arg1: Internal.Vector2d_): this;
        "get(org.joml.Vector2d)"(arg0: Internal.Vector2d_): this;
        "get(org.joml.Vector2f)"(arg0: Internal.Vector2f_): Internal.Vector2f;
        get(arg0: number): number;
        "normalize(double)"(arg0: number): this;
        ceil(arg0: Internal.Vector2d_): this;
        y(): number;
        "mul(org.joml.Vector2dc)"(arg0: Internal.Vector2dc_): this;
        lengthSquared(): number;
        set(arg0: number[]): this;
        toString(): string;
        distanceSquared(arg0: Internal.Vector2fc_): number;
        notifyAll(): void;
        mul(arg0: Internal.Vector2dc_, arg1: Internal.Vector2d_): this;
        "distanceSquared(org.joml.Vector2fc)"(arg0: Internal.Vector2fc_): number;
        floor(arg0: Internal.Vector2d_): this;
        "set(double)"(arg0: number): this;
        "add(org.joml.Vector2fc)"(arg0: Internal.Vector2fc_): this;
        fma(arg0: Internal.Vector2dc_, arg1: Internal.Vector2dc_): this;
        distance(arg0: number, arg1: number): number;
        "get(int,org.joml.Vector2i)"(arg0: number, arg1: Internal.Vector2i_): Internal.Vector2i;
        set(arg0: number, arg1: Internal.ByteBuffer_): this;
        "div(org.joml.Vector2fc)"(arg0: Internal.Vector2fc_): this;
        zero(): this;
        wait(arg0: number): void;
        "distance(org.joml.Vector2dc)"(arg0: Internal.Vector2dc_): number;
        set(arg0: number[]): this;
        min(arg0: Internal.Vector2dc_, arg1: Internal.Vector2d_): this;
        mul(arg0: Internal.Matrix2dc_): this;
        "mul(org.joml.Matrix2dc,org.joml.Vector2d)"(arg0: Internal.Matrix2dc_, arg1: Internal.Vector2d_): this;
        div(arg0: Internal.Vector2dc_, arg1: Internal.Vector2d_): this;
        mulPosition(arg0: Internal.Matrix3x2dc_, arg1: Internal.Vector2d_): this;
        set(arg0: number, arg1: Internal.DoubleBuffer_): this;
        div(arg0: number, arg1: number): this;
        min(arg0: Internal.Vector2dc_): this;
        static distance(arg0: number, arg1: number, arg2: number, arg3: number): number;
        "div(org.joml.Vector2d)"(arg0: Internal.Vector2d_): this;
        "equals(org.joml.Vector2dc,double)"(arg0: Internal.Vector2dc_, arg1: number): boolean;
        notify(): void;
        "distanceSquared(org.joml.Vector2dc)"(arg0: Internal.Vector2dc_): number;
        mulTranspose(arg0: Internal.Matrix2fc_, arg1: Internal.Vector2d_): this;
        isFinite(): boolean;
        mul(arg0: Internal.Vector2dc_): this;
        "set(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): this;
        get(arg0: Internal.Vector2d_): this;
        distance(arg0: Internal.Vector2dc_): number;
        getToAddress(arg0: number): Internal.Vector2dc;
        "mulTranspose(org.joml.Matrix2fc,org.joml.Vector2d)"(arg0: Internal.Matrix2fc_, arg1: Internal.Vector2d_): this;
        add(arg0: Internal.Vector2fc_, arg1: Internal.Vector2d_): this;
        get(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        "set(double[])"(arg0: number[]): this;
        equals(arg0: number, arg1: number): boolean;
        absolute(arg0: Internal.Vector2d_): this;
        "mul(org.joml.Vector2dc,org.joml.Vector2d)"(arg0: Internal.Vector2dc_, arg1: Internal.Vector2d_): this;
        "get(int,java.nio.DoubleBuffer)"(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        "mul(org.joml.Matrix2dc)"(arg0: Internal.Matrix2dc_): this;
        ceil(): this;
        readExternal(arg0: Internal.ObjectInput_): void;
        "sub(org.joml.Vector2dc)"(arg0: Internal.Vector2dc_): this;
        "add(org.joml.Vector2dc)"(arg0: Internal.Vector2dc_): this;
        set(arg0: number): this;
        div(arg0: number): this;
        sub(arg0: Internal.Vector2dc_, arg1: Internal.Vector2d_): this;
        mul(arg0: number, arg1: number): this;
        mul(arg0: number): this;
        wait(): void;
        length(): number;
        get(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        sub(arg0: Internal.Vector2dc_): this;
        mulPosition(arg0: Internal.Matrix3x2dc_): this;
        "set(float[])"(arg0: number[]): this;
        "sub(org.joml.Vector2fc,org.joml.Vector2d)"(arg0: Internal.Vector2fc_, arg1: Internal.Vector2d_): this;
        static lengthSquared(arg0: number, arg1: number): number;
        minComponent(): number;
        set(arg0: Internal.Vector2dc_): this;
        "distance(org.joml.Vector2fc)"(arg0: Internal.Vector2fc_): number;
        get(arg0: number, arg1: Internal.Vector2i_): Internal.Vector2i;
        add(arg0: Internal.Vector2fc_): this;
        add(arg0: number, arg1: number): this;
        mul(arg0: Internal.Matrix2dc_, arg1: Internal.Vector2d_): this;
        div(arg0: Internal.Vector2d_): this;
        normalize(arg0: number, arg1: Internal.Vector2d_): this;
        div(arg0: number, arg1: number, arg2: Internal.Vector2d_): this;
        wait(arg0: number, arg1: number): void;
        "equals(double,double)"(arg0: number, arg1: number): boolean;
        "div(double)"(arg0: number): this;
        "sub(org.joml.Vector2dc,org.joml.Vector2d)"(arg0: Internal.Vector2dc_, arg1: Internal.Vector2d_): this;
        "sub(double,double)"(arg0: number, arg1: number): this;
        mulTranspose(arg0: Internal.Matrix2fc_): this;
        "mul(org.joml.Matrix2fc,org.joml.Vector2d)"(arg0: Internal.Matrix2fc_, arg1: Internal.Vector2d_): this;
        "set(int,java.nio.DoubleBuffer)"(arg0: number, arg1: Internal.DoubleBuffer_): this;
        get(arg0: Internal.Vector2f_): Internal.Vector2f;
        "set(java.nio.DoubleBuffer)"(arg0: Internal.DoubleBuffer_): this;
        normalize(arg0: number): this;
        mulDirection(arg0: Internal.Matrix3x2dc_, arg1: Internal.Vector2d_): this;
        setFromAddress(arg0: number): this;
        "mul(double,org.joml.Vector2d)"(arg0: number, arg1: Internal.Vector2d_): this;
        "add(org.joml.Vector2fc,org.joml.Vector2d)"(arg0: Internal.Vector2fc_, arg1: Internal.Vector2d_): this;
        "fma(org.joml.Vector2dc,org.joml.Vector2dc)"(arg0: Internal.Vector2dc_, arg1: Internal.Vector2dc_): this;
        fma(arg0: number, arg1: Internal.Vector2dc_, arg2: Internal.Vector2d_): this;
        get(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        mul(arg0: number, arg1: number, arg2: Internal.Vector2d_): this;
        distanceSquared(arg0: number, arg1: number): number;
        "mulTranspose(org.joml.Matrix2dc,org.joml.Vector2d)"(arg0: Internal.Matrix2dc_, arg1: Internal.Vector2d_): this;
        distanceSquared(arg0: Internal.Vector2dc_): number;
        normalize(arg0: Internal.Vector2d_): this;
        sub(arg0: number, arg1: number): this;
        "add(double,double)"(arg0: number, arg1: number): this;
        set(arg0: Internal.ByteBuffer_): this;
        hashCode(): number;
        max(arg0: Internal.Vector2dc_, arg1: Internal.Vector2d_): this;
        sub(arg0: Internal.Vector2fc_, arg1: Internal.Vector2d_): this;
        "set(org.joml.Vector2fc)"(arg0: Internal.Vector2fc_): this;
        "div(double,org.joml.Vector2d)"(arg0: number, arg1: Internal.Vector2d_): this;
        max(arg0: Internal.Vector2dc_): this;
        mul(arg0: Internal.Matrix2fc_): this;
        "mulTranspose(org.joml.Matrix2dc)"(arg0: Internal.Matrix2dc_): this;
        equals(arg0: any): boolean;
        "div(org.joml.Vector2fc,org.joml.Vector2d)"(arg0: Internal.Vector2fc_, arg1: Internal.Vector2d_): this;
        set "(org.joml.Vector2ic)"(arg0: Internal.Vector2ic_)
        set "(org.joml.Vector2dc)"(arg0: Internal.Vector2dc_)
        get class(): typeof any
        set "(double)"(arg0: number)
        get finite(): boolean
        set "(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_)
        set "(double[])"(arg0: number[])
        set "(float[])"(arg0: number[])
        set "(java.nio.DoubleBuffer)"(arg0: Internal.DoubleBuffer_)
        set fromAddress(arg0: number)
        set "(org.joml.Vector2fc)"(arg0: Internal.Vector2fc_)
        x: number;
        y: number;
    }
    type Vector2d_ = Vector2d;
    class LootParams$Builder {
        constructor(arg0: Internal.ServerLevel_)
        getClass(): typeof any;
        getOptionalParameter<T>(arg0: Internal.LootContextParam_<T>): T;
        getLevel(): Internal.ServerLevel;
        toString(): string;
        notifyAll(): void;
        withOptionalParameter<T>(arg0: Internal.LootContextParam_<T>, arg1: T): this;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        getParameter<T>(arg0: Internal.LootContextParam_<T>): T;
        handler$cmc000$addTypeOnCreate(paramSet: Internal.LootContextParamSet_, cir: Internal.CallbackInfoReturnable_<any>): void;
        wait(): void;
        withParameter<T>(arg0: Internal.LootContextParam_<T>, arg1: T): this;
        withDynamicDrop(arg0: ResourceLocation_, arg1: Internal.LootParams$DynamicDrop_): this;
        wait(arg0: number): void;
        withLuck(arg0: number): this;
        create(arg0: Internal.LootContextParamSet_): Internal.LootParams;
        equals(arg0: any): boolean;
        get class(): typeof any
        get level(): Internal.ServerLevel
        luck: number;
    }
    type LootParams$Builder_ = LootParams$Builder;
    class JarBoatBlock extends Internal.HorizontalDirectionalBlock implements Internal.EntityBlock {
        constructor(builder: Internal.BlockBehaviour$Properties_)
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
        newBlockEntity(pPos: BlockPos_, pState: Internal.BlockState_): Internal.BlockEntity;
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
        getTicker<T extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<T>): Internal.BlockEntityTicker<T>;
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
        getStateForPlacement(context: Internal.BlockPlaceContext_): Internal.BlockState;
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
        isPathfindable(state: Internal.BlockState_, worldIn: Internal.BlockGetter_, pos: BlockPos_, type: Internal.PathComputationType_): boolean;
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
        getShape(state: Internal.BlockState_, world: Internal.BlockGetter_, pos: BlockPos_, context: Internal.CollisionContext_): Internal.VoxelShape;
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
    type JarBoatBlock_ = JarBoatBlock;
    class ConfigurationSource {
        constructor(stream: Internal.InputStream_, file: Internal.File_)
        constructor(stream: Internal.InputStream_, url: Internal.URL_)
        constructor(stream: Internal.InputStream_, url: Internal.URL_, lastModified: number)
        constructor(source: Internal.Source_, data: number[], lastModified: number)
        constructor(stream: Internal.InputStream_)
        constructor(stream: Internal.InputStream_, path: Internal.Path_)
        getInputStream(): Internal.InputStream;
        getClass(): typeof any;
        getURL(): Internal.URL;
        toString(): string;
        notifyAll(): void;
        getLocation(): string;
        setData(data: number[]): void;
        static fromResource(resource: string, loader: Internal.ClassLoader_): Internal.ConfigurationSource;
        /**
         * @deprecated
        */
        setSource(source: Internal.Source_): void;
        getURI(): Internal.URI;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        resetInputStream(): this;
        getFile(): Internal.File;
        getLastModified(): number;
        hashCode(): number;
        static fromUri(configLocation: Internal.URI_): Internal.ConfigurationSource;
        wait(): void;
        wait(arg0: number): void;
        setModifiedMillis(modifiedMillis: number): void;
        equals(arg0: any): boolean;
        get inputStream(): Internal.InputStream
        get class(): typeof any
        get URL(): Internal.URL
        get location(): string
        set data(data: number[])
        /**
         * @deprecated
        */
        set source(source: Internal.Source_)
        get URI(): Internal.URI
        get file(): Internal.File
        get lastModified(): number
        set modifiedMillis(modifiedMillis: number)
        static readonly NULL_SOURCE: (Internal.ConfigurationSource) & (Internal.ConfigurationSource);
        static readonly COMPOSITE_SOURCE: (Internal.ConfigurationSource) & (Internal.ConfigurationSource);
    }
    type ConfigurationSource_ = ConfigurationSource;
    abstract class AbstractContainerMenu {
        findSlot(arg0: net.minecraft.world.Container_, arg1: number): Internal.OptionalInt;
        getItems(): Internal.NonNullList<Internal.ItemStack>;
        abstract quickMoveStack(arg0: Internal.Player_, arg1: number): Internal.ItemStack;
        broadcastFullState(): void;
        setRemoteCarried(arg0: Internal.ItemStack_): void;
        notify(): void;
        incrementStateId(): number;
        isValidSlotIndex(arg0: number): boolean;
        broadcastChanges(): void;
        handler$bge000$onSlotClick(slotIndex: number, button: number, actionType: Internal.ClickType_, player: Internal.Player_, ci: Internal.CallbackInfo_): void;
        setData(arg0: number, arg1: number): void;
        getSlot(arg0: number): Internal.Slot;
        slotsChanged(arg0: net.minecraft.world.Container_): void;
        removeSlotListener(arg0: net.minecraft.world.inventory.ContainerListener_): void;
        setRemoteSlot(arg0: number, arg1: Internal.ItemStack_): void;
        getCarried(): Internal.ItemStack;
        wait(): void;
        getType(): Internal.MenuType<any>;
        setSynchronizer(arg0: Internal.ContainerSynchronizer_): void;
        static isValidQuickcraftType(arg0: number, arg1: Internal.Player_): boolean;
        getClass(): typeof any;
        static getRedstoneSignalFromBlockEntity(arg0: Internal.BlockEntity_): number;
        canTakeItemForPickAll(arg0: Internal.ItemStack_, arg1: Internal.Slot_): boolean;
        setItem(arg0: number, arg1: number, arg2: Internal.ItemStack_): void;
        addDataSlot(arg0: Internal.DataSlot_): Internal.DataSlot;
        static getRedstoneSignalFromContainer(arg0: net.minecraft.world.Container_): number;
        sendAllDataToRemote(): void;
        setCarried(arg0: Internal.ItemStack_): void;
        static getQuickCraftPlaceCount(arg0: Internal.Set_<Internal.Slot>, arg1: number, arg2: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        resumeRemoteUpdates(): void;
        static getQuickcraftHeader(arg0: number): number;
        static canItemQuickReplace(arg0: Internal.Slot_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        addSlotListener(arg0: net.minecraft.world.inventory.ContainerListener_): void;
        toString(): string;
        clickMenuButton(arg0: Internal.Player_, arg1: number): boolean;
        static getQuickcraftMask(arg0: number, arg1: number): number;
        notifyAll(): void;
        static getQuickcraftType(arg0: number): number;
        setRemoteSlotNoCopy(arg0: number, arg1: Internal.ItemStack_): void;
        clicked(arg0: number, arg1: number, arg2: Internal.ClickType_, arg3: Internal.Player_): void;
        abstract stillValid(arg0: Internal.Player_): boolean;
        suppressRemoteUpdates(): void;
        hashCode(): number;
        initializeContents(arg0: number, arg1: Internal.List_<Internal.ItemStack>, arg2: Internal.ItemStack_): void;
        getStateId(): number;
        wait(arg0: number): void;
        handler$cpi000$l2backpack$canItemQuickReplace(arg0: number, arg1: number, arg2: Internal.ClickType_, arg3: Internal.Player_, arg4: Internal.CallbackInfo_): void;
        equals(arg0: any): boolean;
        transferState(arg0: Internal.AbstractContainerMenu_): void;
        canDragTo(arg0: Internal.Slot_): boolean;
        removed(arg0: Internal.Player_): void;
        get items(): Internal.NonNullList<Internal.ItemStack>
        set remoteCarried(arg0: Internal.ItemStack_)
        get carried(): Internal.ItemStack
        get type(): Internal.MenuType<any>
        set synchronizer(arg0: Internal.ContainerSynchronizer_)
        get class(): typeof any
        set carried(arg0: Internal.ItemStack_)
        get stateId(): number
        static readonly QUICKCRAFT_TYPE_CLONE: (2) & (number);
        readonly containerListeners: Internal.List<net.minecraft.world.inventory.ContainerListener>;
        readonly dataSlots: Internal.List<Internal.DataSlot>;
        static readonly SLOT_CLICKED_OUTSIDE: (-999) & (number);
        readonly slots: Internal.NonNullList<Internal.Slot>;
        static readonly CARRIED_SLOT_SIZE: (2147483647) & (number);
        static readonly QUICKCRAFT_TYPE_GREEDY: (1) & (number);
        remoteSlots: Internal.NonNullList<Internal.ItemStack>;
        static readonly QUICKCRAFT_HEADER_CONTINUE: (1) & (number);
        static readonly QUICKCRAFT_HEADER_START: (0) & (number);
        static readonly QUICKCRAFT_HEADER_END: (2) & (number);
        quickcraftStatus: number;
        readonly quickcraftSlots: Internal.Set<Internal.Slot>;
        quickcraftType: number;
        static readonly QUICKCRAFT_TYPE_CHARITABLE: (0) & (number);
        containerId: number;
        readonly lastSlots: Internal.NonNullList<Internal.ItemStack>;
    }
    type AbstractContainerMenu_ = AbstractContainerMenu;
    abstract class NumberConfig <T extends number> extends Internal.ConfigFromString<T> {
        constructor(mn: T, mx: T)
        getColor(v: T): Internal.Color4I;
        onClicked(clicked: Internal.Widget_, button: Internal.MouseButton_, callback: Internal.ConfigCallback_): void;
        getTooltip(): string;
        notify(): void;
        compareTo(arg0: any): number;
        "getColor(java.lang.Object)"(arg0: any): Internal.Color4I;
        "getStringForGUI(java.lang.Number)"(v: T): net.minecraft.network.chat.Component;
        getStringForGUI(): net.minecraft.network.chat.Component;
        applyValue(): void;
        getIcon(v: T): Internal.Icon;
        canScroll(): boolean;
        setCanEdit(e: boolean): Internal.ConfigValue<T>;
        "getColor(java.lang.Number)"(v: T): Internal.Color4I;
        getColor(arg0: any): Internal.Color4I;
        abstract parse(arg0: Internal.Consumer_<T>, arg1: string): boolean;
        scrollValue(currentValue: T, forward: boolean): Internal.Optional<T>;
        setValue(value: T): void;
        wait(): void;
        copy(value: T): T;
        getNameKey(): string;
        setDefaultValue(defaultValue: T): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        getClass(): typeof any;
        setOrder(o: number): Internal.ConfigValue<T>;
        getStringForGUI(v: T): net.minecraft.network.chat.Component;
        addInfo(list: Internal.TooltipList_): void;
        getDefaultValue(): T;
        wait(arg0: number, arg1: number): void;
        compareTo(o: Internal.ConfigValue_<T>): number;
        getIcon(): Internal.Icon;
        setIcon(i: Internal.Icon_): Internal.ConfigValue<T>;
        getName(): string;
        getGroup(): Internal.ConfigGroup;
        getStringForGUI(arg0: any): net.minecraft.network.chat.Component;
        getColor(): Internal.Color4I;
        "getStringForGUI(java.lang.Object)"(arg0: any): net.minecraft.network.chat.Component;
        getPath(): string;
        setNameKey(key: string): Internal.ConfigValue<T>;
        toString(): string;
        notifyAll(): void;
        init(group: Internal.ConfigGroup_, id: string, value: T, setter: Internal.Consumer_<T>, defaultValue: T): Internal.ConfigValue<T>;
        static info(key: string, value: any): net.minecraft.network.chat.Component;
        "compareTo(dev.ftb.mods.ftblibrary.config.ConfigValue)"(o: Internal.ConfigValue_<T>): number;
        getStringFromValue(v: T): string;
        withScrollIncrement(increment: T): this;
        hashCode(): number;
        getValue(): T;
        isEqual(v1: T, v2: T): boolean;
        wait(arg0: number): void;
        getCanEdit(): boolean;
        fader(v: boolean): this;
        setCurrentValue(v: T): boolean;
        equals(arg0: any): boolean;
        get tooltip(): string
        get stringForGUI(): net.minecraft.network.chat.Component
        set canEdit(e: boolean)
        set value(value: T)
        get nameKey(): string
        set defaultValue(defaultValue: T)
        get class(): typeof any
        set order(o: number)
        get defaultValue(): T
        get icon(): Internal.Icon
        set icon(i: Internal.Icon_)
        get name(): string
        get group(): Internal.ConfigGroup
        get color(): Internal.Color4I
        get path(): string
        set nameKey(key: string)
        get value(): T
        get canEdit(): boolean
        set currentValue(v: T)
        static readonly COLOR: (Internal.Color4I) & (Internal.Color4I);
        readonly min: T;
        readonly max: T;
        fader: boolean;
    }
    type NumberConfig_<T extends number> = NumberConfig<T>;
    class Behavior$Status extends Internal.Enum<Internal.Behavior$Status> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        static values(): Internal.Behavior$Status[];
        toString(): string;
        notifyAll(): void;
        static valueOf(arg0: string): Internal.Behavior$Status;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.Behavior$Status>>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        name(): string;
        getDeclaringClass(): typeof Internal.Behavior$Status;
        hashCode(): number;
        ordinal(): number;
        wait(): void;
        compareTo(arg0: Internal.Behavior$Status_): number;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        "compareTo(net.minecraft.world.entity.ai.behavior.Behavior$Status)"(arg0: Internal.Behavior$Status_): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get declaringClass(): typeof Internal.Behavior$Status
        static readonly RUNNING: (Internal.Behavior$Status) & (Internal.Behavior$Status);
        static readonly STOPPED: (Internal.Behavior$Status) & (Internal.Behavior$Status);
    }
    type Behavior$Status_ = "stopped" | Behavior$Status | "running";
    class LocalDateTime implements Internal.ChronoLocalDateTime<Internal.LocalDate>, Internal.Temporal, Internal.TemporalAdjuster, Internal.Serializable {
        getMonth(): Internal.Month;
        toLocalTime(): Internal.LocalTime;
        atZone(arg0: Internal.ZoneId_): Internal.ChronoZonedDateTime<any>;
        withHour(arg0: number): this;
        getDayOfMonth(): number;
        static now(): Internal.LocalDateTime;
        static ofInstant(arg0: Internal.Instant_, arg1: Internal.ZoneId_): Internal.LocalDateTime;
        plus(arg0: Internal.TemporalAmount_): this;
        "compareTo(java.time.chrono.ChronoLocalDateTime)"(arg0: Internal.ChronoLocalDateTime_<any>): number;
        plusHours(arg0: number): this;
        "isSupported(java.time.temporal.TemporalField)"(arg0: Internal.TemporalField_): boolean;
        truncatedTo(arg0: Internal.TemporalUnit_): this;
        getYear(): number;
        range(arg0: Internal.TemporalField_): Internal.ValueRange;
        withDayOfMonth(arg0: number): this;
        get(arg0: Internal.TemporalField_): number;
        static of(arg0: number, arg1: Internal.Month_, arg2: number, arg3: number, arg4: number): Internal.LocalDateTime;
        static of(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): Internal.LocalDateTime;
        "compareTo(java.lang.Object)"(arg0: any): number;
        compareTo(arg0: Internal.ChronoLocalDateTime_<any>): number;
        plus(arg0: number, arg1: Internal.TemporalUnit_): this;
        static timeLineOrder(): Internal.Comparator<Internal.ChronoLocalDateTime<any>>;
        getMonthValue(): number;
        getClass(): typeof any;
        withDayOfYear(arg0: number): this;
        minusYears(arg0: number): this;
        plusDays(arg0: number): this;
        static "of(int,int,int,int,int,int,int)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): Internal.LocalDateTime;
        plusWeeks(arg0: number): this;
        withYear(arg0: number): this;
        static of(arg0: number, arg1: Internal.Month_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): Internal.LocalDateTime;
        getLong(arg0: Internal.TemporalField_): number;
        plusYears(arg0: number): this;
        minus(arg0: number, arg1: Internal.TemporalUnit_): Internal.Temporal;
        toString(): string;
        notifyAll(): void;
        minusHours(arg0: number): this;
        minusDays(arg0: number): this;
        toInstant(arg0: Internal.ZoneOffset_): Internal.Instant;
        getNano(): number;
        getSecond(): number;
        static from(arg0: Internal.TemporalAccessor_): Internal.LocalDateTime;
        withMinute(arg0: number): this;
        wait(arg0: number): void;
        toEpochSecond(arg0: Internal.ZoneOffset_): number;
        plusNanos(arg0: number): this;
        minusSeconds(arg0: number): this;
        getHour(): number;
        minusMonths(arg0: number): this;
        withSecond(arg0: number): this;
        getDayOfWeek(): Internal.DayOfWeek;
        notify(): void;
        compareTo(arg0: any): number;
        getMinute(): number;
        static of(arg0: number, arg1: Internal.Month_, arg2: number, arg3: number, arg4: number, arg5: number): Internal.LocalDateTime;
        static of(arg0: Internal.LocalDate_, arg1: Internal.LocalTime_): Internal.LocalDateTime;
        "with"(arg0: Internal.TemporalAdjuster_): Internal.Temporal;
        plusMonths(arg0: number): this;
        minusNanos(arg0: number): this;
        isSupported(arg0: Internal.TemporalField_): boolean;
        format(arg0: Internal.DateTimeFormatter_): string;
        getChronology(): Internal.Chronology;
        plusSeconds(arg0: number): this;
        isBefore(arg0: Internal.ChronoLocalDateTime_<any>): boolean;
        static now(arg0: Internal.Clock_): Internal.LocalDateTime;
        atOffset(arg0: Internal.ZoneOffset_): Internal.OffsetDateTime;
        static "of(int,int,int,int,int,int)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.LocalDateTime;
        static "of(int,java.time.Month,int,int,int,int)"(arg0: number, arg1: Internal.Month_, arg2: number, arg3: number, arg4: number, arg5: number): Internal.LocalDateTime;
        isAfter(arg0: Internal.ChronoLocalDateTime_<any>): boolean;
        "with"(arg0: Internal.TemporalField_, arg1: number): this;
        wait(): void;
        static "now(java.time.Clock)"(arg0: Internal.Clock_): Internal.LocalDateTime;
        minusMinutes(arg0: number): this;
        withMonth(arg0: number): this;
        static "of(int,java.time.Month,int,int,int,int,int)"(arg0: number, arg1: Internal.Month_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): Internal.LocalDateTime;
        "isSupported(java.time.temporal.TemporalUnit)"(arg0: Internal.TemporalUnit_): boolean;
        minusWeeks(arg0: number): this;
        static ofEpochSecond(arg0: number, arg1: number, arg2: Internal.ZoneOffset_): Internal.LocalDateTime;
        static parse(arg0: Internal.CharSequence_, arg1: Internal.DateTimeFormatter_): Internal.LocalDateTime;
        minus(arg0: Internal.TemporalAmount_): this;
        static parse(arg0: Internal.CharSequence_): Internal.LocalDateTime;
        wait(arg0: number, arg1: number): void;
        static "of(int,java.time.Month,int,int,int)"(arg0: number, arg1: Internal.Month_, arg2: number, arg3: number, arg4: number): Internal.LocalDateTime;
        toLocalDate(): Internal.ChronoLocalDate;
        static now(arg0: Internal.ZoneId_): Internal.LocalDateTime;
        static of(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.LocalDateTime;
        isEqual(arg0: Internal.ChronoLocalDateTime_<any>): boolean;
        plusMinutes(arg0: number): this;
        adjustInto(arg0: Internal.Temporal_): Internal.Temporal;
        withNano(arg0: number): this;
        getDayOfYear(): number;
        query<R>(arg0: Internal.TemporalQuery_<R>): R;
        until(arg0: Internal.Temporal_, arg1: Internal.TemporalUnit_): number;
        isSupported(arg0: Internal.TemporalUnit_): boolean;
        hashCode(): number;
        static "of(int,int,int,int,int)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): Internal.LocalDateTime;
        static "now(java.time.ZoneId)"(arg0: Internal.ZoneId_): Internal.LocalDateTime;
        equals(arg0: any): boolean;
        static of(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): Internal.LocalDateTime;
        get month(): Internal.Month
        get dayOfMonth(): number
        get year(): number
        get monthValue(): number
        get class(): typeof any
        get nano(): number
        get second(): number
        get hour(): number
        get dayOfWeek(): Internal.DayOfWeek
        get minute(): number
        get chronology(): Internal.Chronology
        get dayOfYear(): number
        static readonly MAX: (Internal.LocalDateTime) & (Internal.LocalDateTime);
        static readonly MIN: (Internal.LocalDateTime) & (Internal.LocalDateTime);
    }
    type LocalDateTime_ = LocalDateTime;
    class PlayerInteractEvent$LeftClickBlock extends Internal.PlayerInteractEvent {
        constructor()
        constructor(arg0: Internal.Player_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.PlayerInteractEvent$LeftClickBlock$Action_)
        constructor(arg0: Internal.Player_, arg1: BlockPos_, arg2: Internal.Direction_)
        setCanceled(arg0: boolean): void;
        getClass(): typeof any;
        setPhase(arg0: Internal.EventPriority_): void;
        getUseBlock(): Internal.Event$Result;
        isCanceled(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        setUseItem(arg0: Internal.Event$Result_): void;
        getLevel(): Internal.Level;
        getPos(): BlockPos;
        isCancelable(): boolean;
        getListenerList(): Internal.ListenerList;
        getHand(): Internal.InteractionHand;
        getFace(): Internal.Direction;
        getResult(): Internal.Event$Result;
        toString(): string;
        getCancellationResult(): Internal.InteractionResult;
        getEntity(): Internal.LivingEntity;
        notifyAll(): void;
        getSide(): Internal.LogicalSide;
        setUseBlock(arg0: Internal.Event$Result_): void;
        getUseItem(): Internal.Event$Result;
        hasResult(): boolean;
        setResult(arg0: Internal.Event$Result_): void;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        getAction(): Internal.PlayerInteractEvent$LeftClickBlock$Action;
        getPhase(): Internal.EventPriority;
        setCancellationResult(arg0: Internal.InteractionResult_): void;
        equals(arg0: any): boolean;
        getItemStack(): Internal.ItemStack;
        set canceled(arg0: boolean)
        get class(): typeof any
        set phase(arg0: Internal.EventPriority_)
        get useBlock(): Internal.Event$Result
        get canceled(): boolean
        set useItem(arg0: Internal.Event$Result_)
        get level(): Internal.Level
        get pos(): BlockPos
        get cancelable(): boolean
        get listenerList(): Internal.ListenerList
        get hand(): Internal.InteractionHand
        get face(): Internal.Direction
        get result(): Internal.Event$Result
        get cancellationResult(): Internal.InteractionResult
        get entity(): Internal.LivingEntity
        get side(): Internal.LogicalSide
        set useBlock(arg0: Internal.Event$Result_)
        get useItem(): Internal.Event$Result
        set result(arg0: Internal.Event$Result_)
        get action(): Internal.PlayerInteractEvent$LeftClickBlock$Action
        get phase(): Internal.EventPriority
        set cancellationResult(arg0: Internal.InteractionResult_)
        get itemStack(): Internal.ItemStack
    }
    type PlayerInteractEvent$LeftClickBlock_ = PlayerInteractEvent$LeftClickBlock;
    class ClientboundSetSubtitleTextPacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: net.minecraft.network.chat.Component_)
        constructor(arg0: Internal.FriendlyByteBuf_)
        handle(arg0: Internal.PacketListener_): void;
        getClass(): typeof any;
        write(arg0: Internal.FriendlyByteBuf_): void;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        isSkippable(): boolean;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        wait(): void;
        getText(): net.minecraft.network.chat.Component;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        wait(arg0: number): void;
        "handle(net.minecraft.network.protocol.game.ClientGamePacketListener)"(arg0: Internal.ClientGamePacketListener_): void;
        equals(arg0: any): boolean;
        "handle(net.minecraft.network.PacketListener)"(arg0: Internal.PacketListener_): void;
        get class(): typeof any
        get skippable(): boolean
        get text(): net.minecraft.network.chat.Component
    }
    type ClientboundSetSubtitleTextPacket_ = ClientboundSetSubtitleTextPacket;
    interface Supplier <T> {
        abstract get(): T;
        (): T;
    }
    type Supplier_<T> = Supplier<T> | (()=> T);
    class RegistryAccess$1FrozenAccess extends Internal.RegistryAccess$ImmutableRegistryAccess implements Internal.RegistryAccess$Frozen {
        getClass(): typeof any;
        toString(): string;
        static create(arg0: Internal.Stream_<Internal.HolderLookup$RegistryLookup<any>>): Internal.HolderLookup$Provider;
        registry<E>(arg0: Internal.ResourceKey_<Internal.Registry<E>>): Internal.Optional<Internal.Registry<E>>;
        registryOrThrow<E>(arg0: Internal.ResourceKey_<Internal.Registry<E>>): Internal.Registry<E>;
        notifyAll(): void;
        registries(): Internal.Stream<Internal.RegistryAccess$RegistryEntry<any>>;
        freeze(): Internal.RegistryAccess$Frozen;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        static fromRegistryOfRegistries(arg0: Internal.Registry_<Internal.Registry<any>>): Internal.RegistryAccess$Frozen;
        lookup<T>(arg0: Internal.ResourceKey_<Internal.Registry<T>>): Internal.Optional<Internal.HolderLookup$RegistryLookup<T>>;
        hashCode(): number;
        allRegistriesLifecycle(): Internal.Lifecycle;
        wait(): void;
        lookupOrThrow<T>(arg0: Internal.ResourceKey_<Internal.Registry<T>>): Internal.HolderLookup$RegistryLookup<T>;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        asGetterLookup(): Internal.HolderGetter$Provider;
        get class(): typeof any
    }
    type RegistryAccess$1FrozenAccess_ = RegistryAccess$1FrozenAccess;
    class ServerPlayer extends Internal.Player implements Internal.TaggablePlayer, Internal.ServerPlayerKJS {
        constructor(arg0: Internal.MinecraftServer_, arg1: Internal.ServerLevel_, arg2: Internal.GameProfile_)
        getStats(): Internal.PlayerStatsJS;
        handler$zld000$getCurrentExperience(ci: Internal.CallbackInfoReturnable_<any>): void;
        getUpVector(arg0: number): Vec3d;
        gameEvent(arg0: Internal.GameEvent_, arg1: Internal.Entity_): void;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        isSuppressingBounce(): boolean;
        handler$zla000$toTag(tag: Internal.CompoundTag_, ci: Internal.CallbackInfoReturnable_<any>): void;
        setServerLevel(arg0: Internal.ServerLevel_): void;
        isOnFire(): boolean;
        onUpdateAbilities(): void;
        getPositionCodec(): Internal.VecDeltaCodec;
        handler$ebc000$canFreeze(cir: Internal.CallbackInfoReturnable_<any>): void;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        sendMerchantOffers(arg0: number, arg1: Internal.MerchantOffers_, arg2: number, arg3: number, arg4: boolean, arg5: boolean): void;
        setMaxUpStep(arg0: number): void;
        /**
         * @deprecated
        */
        updateFluidHeightAndDoFluidPushing(arg0: Internal.TagKey_<Internal.Fluid>, arg1: number): boolean;
        handler$ebc000$isFreezing(cir: Internal.CallbackInfoReturnable_<any>): void;
        getEntityReach(): number;
        getFallFlyingTicks(): number;
        runCommandSilent(command: string): number;
        setPosition(x: number, y: number, z: number): void;
        chunkPosition(): Internal.ChunkPos;
        handler$ebc000$isPushable(cir: Internal.CallbackInfoReturnable_<any>): void;
        gameEvent(arg0: Internal.GameEvent_): void;
        handler$ebc001$setSprinting(pSprinting: boolean, ci: Internal.CallbackInfo_): void;
        setSelectedSlot(index: number): void;
        isShiftKeyDown(): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        setUUID(arg0: Internal.UUID_): void;
        checkBelowWorld(): void;
        onEffectUpdated(arg0: Internal.MobEffectInstance_, arg1: boolean, arg2: Internal.Entity_): void;
        getCooldown(): number;
        crit(arg0: Internal.Entity_): void;
        setMotionZ(z: number): void;
        "getInventory()"(): Internal.InventoryKJS;
        awardStat(arg0: ResourceLocation_, arg1: number): void;
        sweepAttack(): void;
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
        tryToStartFallFlying(): boolean;
        getShoulderEntityLeft(): Internal.CompoundTag;
        attack(arg0: Internal.Entity_): void;
        isSpectator(): boolean;
        stopFallFlying(): void;
        setMainHandItem(item: Internal.ItemStack_): void;
        removeEffectNoUpdate(arg0: Internal.MobEffect_): Internal.MobEffectInstance;
        spawnAtLocation(arg0: Internal.ItemLike_, arg1: number): Internal.ItemEntity;
        getPersistentData(): Internal.CompoundTag;
        serverLevel(): Internal.ServerLevel;
        getHealth(): number;
        getMaxHealth(): number;
        handler$zmo000$playSound(event: Internal.SoundEvent_, f: number, f2: number, ci: Internal.CallbackInfo_): void;
        setForcedPose(arg0: Internal.Pose_): void;
        invokeTurnHead(arg0: number, arg1: number): number;
        getRandomZ(arg0: number): number;
        fabrication$isCrawling(): boolean;
        setRemoved(arg0: Internal.Entity$RemovalReason_): void;
        handler$zbc000$getExitPortal(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: boolean, arg3: Internal.WorldBorder_, arg4: Internal.CallbackInfoReturnable_<any>): void;
        isInWaterRainOrBubble(): boolean;
        getDistanceSq(arg0: number, arg1: number, arg2: number): number;
        handler$ebc000$canChangeDimensions(cir: Internal.CallbackInfoReturnable_<any>): void;
        getRemovalReason(): Internal.Entity$RemovalReason;
        isMiningBlock(): boolean;
        resetFallDistance(): void;
        canSprint(): boolean;
        blockPosition(): BlockPos;
        "awardStat(net.minecraft.stats.Stat)"(arg0: Internal.Stat_<any>): void;
        setBoundingBox(arg0: Internal.AABB_): void;
        isAmbientCreature(): boolean;
        handler$bad001$canTarget(other: Internal.LivingEntity_, ci: Internal.CallbackInfoReturnable_<any>): void;
        setExperiencePoints(arg0: number): void;
        handler$beb000$getHurtSound(src: Internal.DamageSource_, ci: Internal.CallbackInfoReturnable_<any>): void;
        closeMenu(): void;
        getBlock(): Internal.BlockContainerJS;
        setEquipment(slot: Internal.EquipmentSlot_, item: Internal.ItemStack_): void;
        isCloseEnough(arg0: Internal.Entity_, arg1: number): boolean;
        randomTeleport(arg0: number, arg1: number, arg2: number, arg3: boolean): boolean;
        invalidateCaps(): void;
        getName(): net.minecraft.network.chat.Component;
        setMouseItem(item: Internal.ItemStack_): void;
        onGround(): boolean;
        getTabListHeader(): net.minecraft.network.chat.Component;
        sendData(channel: string, data: Internal.CompoundTag_): void;
        redirect$dpj000$getMainHandStack_Redirect(instance: Internal.Player_): Internal.ItemStack;
        getControlledVehicle(): Internal.Entity;
        isOnSameTeam(arg0: Internal.Entity_): boolean;
        getArmorValue(): number;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        tick(): void;
        getPrevX(): number;
        setDimension(arg0: Internal.EntityDimensions_): void;
        setRespawnPosition(arg0: Internal.ResourceKey_<Internal.Level>, arg1: BlockPos_, arg2: number, arg3: boolean, arg4: boolean): void;
        give(item: Internal.ItemStack_): void;
        getKillCredit(): Internal.LivingEntity;
        handler$ebc000$thunderHit(pLevel: Internal.ServerLevel_, pLightning: Internal.LightningBolt_, ci: Internal.CallbackInfo_): void;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        getDigSpeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        "teleportTo(net.minecraft.server.level.ServerLevel,double,double,double,float,float)"(arg0: Internal.ServerLevel_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        sinkInFluid(arg0: Internal.FluidType_): void;
        handler$ebc000$lavaHurt(ci: Internal.CallbackInfo_): void;
        hasPermissions(arg0: number): boolean;
        getTabListDisplayName(): net.minecraft.network.chat.Component;
        refreshTabListName(): void;
        handler$egj000$isInsideWall(arg0: Internal.CallbackInfoReturnable_<any>, arg1: number, arg2: Internal.AABB_): void;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        getRecipeBook(): Internal.ServerRecipeBook;
        getRespawnPosition(): BlockPos;
        isAutoSpinAttack(): boolean;
        getRemainingFireTicks(): number;
        fabrication$isItemDespawnAware(): boolean;
        onlyOpCanSetNbt(): boolean;
        handler$bcn001$baseTick(ci: Internal.CallbackInfo_): void;
        fireImmune(): boolean;
        addMotion(arg0: number, arg1: number, arg2: number): void;
        getMaxFallDistance(): number;
        isHolding(arg0: Internal.Item_): boolean;
        getZ(arg0: number): number;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        setGameMode(arg0: Internal.GameType_): boolean;
        canReach(arg0: Vec3d_, arg1: number): boolean;
        static areAllEffectsAmbient(arg0: Internal.Collection_<Internal.MobEffectInstance>): boolean;
        doHurtTarget(arg0: Internal.Entity_): boolean;
        nextContainerCounter(): void;
        getTicksFrozen(): number;
        getRandomX(arg0: number): number;
        fabrication$tickSourceDependentIFrames(): void;
        spawnAtLocation(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        pick(arg0: number, arg1: number, arg2: boolean): Internal.HitResult;
        handler$ebc000$stopRiding(ci: Internal.CallbackInfo_): void;
        setStatusMessage(message: net.minecraft.network.chat.Component_): void;
        getVoicePitch(): number;
        setSleepingPos(arg0: BlockPos_): void;
        isDescending(): boolean;
        setPlayerInput(arg0: number, arg1: number, arg2: boolean, arg3: boolean): void;
        getAttributeBaseValue(arg0: Internal.Attribute_): number;
        sendEffectToPassengers(arg0: Internal.MobEffectInstance_): void;
        getYHeadRot(): number;
        openCommandBlock(arg0: Internal.CommandBlockEntity_): void;
        getProjectile(arg0: Internal.ItemStack_): Internal.ItemStack;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        syncPacketPositionCodec(arg0: number, arg1: number, arg2: number): void;
        setAbsorptionAmount(arg0: number): void;
        handler$zmk000$writeCustomDataToTag(tag: Internal.CompoundTag_, ci: Internal.CallbackInfo_): void;
        isAffectedByFluids(): boolean;
        shouldRenderAtSqrDistance(arg0: number): boolean;
        handler$dke000$ac_onSyncedDataUpdated(arg0: Internal.EntityDataAccessor_<any>, arg1: Internal.CallbackInfo_): void;
        damageSources(): Internal.DamageSources;
        swing(): void;
        recreateFromPacket(arg0: Internal.ClientboundAddEntityPacket_): void;
        handler$zmk002$tick(ci: Internal.CallbackInfo_): void;
        canStartSwimming(): boolean;
        setDeltaMovement(arg0: Vec3d_): void;
        fabrication$setNoGravityReversible(reversible: boolean): void;
        getAbilities(): Internal.Abilities;
        getLeashOffset(arg0: number): Vec3d;
        isBaby(): boolean;
        openGUI(gui: Internal.Consumer_<Internal.KubeJSGUI>): void;
        damageEquipment(slot: Internal.EquipmentSlot_): void;
        isGlowing(): boolean;
        "isInFluidType(net.minecraft.world.level.material.FluidState)"(arg0: Internal.FluidState_): boolean;
        /**
         * Used to trigger animations off the server player with customizable animation data.
         * 
         * Example Usage:
         * ```javascript
         * event.player.triggerAnimation("animationjs:waving", 1, "linear", true, false);
         * ```
         * @param animationID ResourceLocation: The name of the animation specified in the json
         * @param transitionLength int: Duration of the transition length in milliseconds
         * @param easeID String: ID of the easing function to use for animation easing from the {@link dev.kosmx.playerAnim.core.util.Ease} class
         * @param firstPersonEnabled boolean: Whether the animation should be visible in first-person view
         * @param important boolean: Whether the animation is important and should override other animations
        */
        triggerAnimation(animationID: any, transitionLength: number, easeID: string, firstPersonEnabled: boolean, important: boolean): void;
        getPrevZ(): number;
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
        isChangingDimension(): boolean;
        setReducedDebugInfo(arg0: boolean): void;
        getSlot(arg0: number): Internal.SlotAccess;
        fabrication$getReqVer(): number;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        handler$ebe000$getMobType(cir: Internal.CallbackInfoReturnable_<any>): void;
        notify(title: net.minecraft.network.chat.Component_, text: net.minecraft.network.chat.Component_): void;
        stopSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        isUnderWater(): boolean;
        stopRiding(): void;
        getSwimHighSpeedSplashSound(): Internal.SoundEvent;
        handler$dpj000$getEquippedStack_Pre(slot: Internal.EquipmentSlot_, cir: Internal.CallbackInfoReturnable_<any>): void;
        handler$bhm003$copyFrom(oldPlayer: Internal.ServerPlayer_, alive: boolean, ci: Internal.CallbackInfo_): void;
        addXPLevels(l: number): void;
        getX(arg0: number): number;
        getLegsArmorItem(): Internal.ItemStack;
        captureDrops(arg0: Internal.Collection_<Internal.ItemEntity>): Internal.Collection<Internal.ItemEntity>;
        getSelfAndPassengers(): Internal.Stream<any>;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        getDeltaMovement(): Vec3d;
        canTakeItem(arg0: Internal.ItemStack_): boolean;
        handler$ebe000$makeBrain(pDynamic: Internal.Dynamic_<any>, cir: Internal.CallbackInfoReturnable_<any>): void;
        abstract updateMovementBoolean(): void;
        shouldDropExperience(): boolean;
        hasPassenger(arg0: Internal.Entity_): boolean;
        sendData(channel: string): void;
        updateOptions(arg0: Internal.ServerboundClientInformationPacket_): void;
        setSecondsOnFire(arg0: number): void;
        moveTo(arg0: number, arg1: number, arg2: number): void;
        "getDisplayName()"(): net.minecraft.network.chat.Component;
        openMenu(arg0: Internal.MenuProvider_): Internal.OptionalInt;
        fabrication$setReqVer(reqVer: number): void;
        getLootTable(): ResourceLocation;
        getTicksUsingItem(): number;
        "awardStat(net.minecraft.resources.ResourceLocation,int)"(arg0: ResourceLocation_, arg1: number): void;
        getArrowCount(): number;
        create$callSetLevel(arg0: Internal.Level_): void;
        "attack(net.minecraft.world.entity.Entity)"(arg0: Internal.Entity_): void;
        setMotion(arg0: number, arg1: number, arg2: number): void;
        playSound(arg0: Internal.SoundEvent_): void;
        doCloseContainer(): void;
        setXp(xp: number): void;
        getDefaultMovementSpeed(): number;
        restoreFrom(arg0: Internal.Entity_): void;
        "canReach(net.minecraft.core.BlockPos,double)"(arg0: BlockPos_, arg1: number): boolean;
        fabrication$hasTag(tag: string): boolean;
        handler$bdf001$copyFrom(oldPlayer: Internal.ServerPlayer_, alive: boolean, ci: Internal.CallbackInfo_): void;
        isPeacefulCreature(): boolean;
        setOnGround(arg0: boolean): void;
        handler$bhe001$fromTag(tag: Internal.CompoundTag_, ci: Internal.CallbackInfo_): void;
        handler$big000$getDisplayName(ci: Internal.CallbackInfoReturnable_<any>): void;
        addEffect(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_): boolean;
        setPos(arg0: number, arg1: number, arg2: number): void;
        handler$ebc000$getMyRidingOffset(cir: Internal.CallbackInfoReturnable_<any>): void;
        getInventory(): Internal.Inventory;
        hasDisconnected(): boolean;
        notify(): void;
        isLocalPlayer(): boolean;
        getFirstTick(): boolean;
        getLastHurtByMobTimestamp(): number;
        getVehicle(): Internal.Entity;
        isEffectiveAi(): boolean;
        startRiding(arg0: Internal.Entity_, arg1: boolean): boolean;
        getStringUuid(): string;
        getLastSectionPos(): Internal.SectionPos;
        setSwimming(arg0: boolean): void;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        getMainArm(): Internal.HumanoidArm;
        getRotationVector(): Internal.Vec2;
        getHurtDir(): number;
        isSprinting(): boolean;
        handler$dke000$ac_makeBoundingBox(arg0: Internal.CallbackInfoReturnable_<any>): void;
        getMotionY(): number;
        getOffhandItem(): Internal.ItemStack;
        getCurrentItemAttackStrengthDelay(): number;
        canCollideWith(arg0: Internal.Entity_): boolean;
        neruina$isErrored(): boolean;
        addExhaustion(exhaustion: number): void;
        getBlockExplosionResistance(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.FluidState_, arg5: number): number;
        handler$dpi000$getAttributeValue_Inject(attribute: Internal.Attribute_, cir: Internal.CallbackInfoReturnable_<any>): void;
        magicCrit(arg0: Internal.Entity_): void;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        increaseScore(arg0: number): void;
        getIsInsidePortal(): boolean;
        clearSleepingPos(): void;
        abstract ac_setDropChance(arg0: Internal.EquipmentSlot_, arg1: number): void;
        canSpawnSprintParticle(): boolean;
        doTick(): void;
        "moveTo(net.minecraft.core.BlockPos,float,float)"(arg0: BlockPos_, arg1: number, arg2: number): void;
        handler$zjk000$move(type: Internal.MoverType_, movement: Vec3d_, ci: Internal.CallbackInfo_): void;
        getLastHurtMob(): Internal.LivingEntity;
        lookAt(arg0: Internal.EntityAnchorArgument$Anchor_, arg1: Internal.Entity_, arg2: Internal.EntityAnchorArgument$Anchor_): void;
        moveRelative(arg0: number, arg1: Vec3d_): void;
        isAddedToWorld(): boolean;
        saveAsPassenger(arg0: Internal.CompoundTag_): boolean;
        getIpAddress(): string;
        handler$bbk008$tick(ci: Internal.CallbackInfo_): void;
        isSecondaryUseActive(): boolean;
        getSoundSource(): Internal.SoundSource;
        getLastDamageSource(): Internal.DamageSource;
        setNoActionTime(arg0: number): void;
        setMovementSpeedAddition(speed: number): void;
        getLastActionTime(): number;
        equipmentHasChanged(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getPose(): Internal.Pose;
        setLastAttackedTicks(arg0: number): void;
        getAttribute(arg0: Internal.Attribute_): Internal.AttributeInstance;
        setPositionAndRotation(x: number, y: number, z: number, yaw: number, pitch: number): void;
        canBeAffected(arg0: Internal.MobEffectInstance_): boolean;
        kick(reason: net.minecraft.network.chat.Component_): void;
        handler$bhe001$toTag(tag: Internal.CompoundTag_, ci: Internal.CallbackInfoReturnable_<any>): void;
        isModelPartShown(arg0: Internal.PlayerModelPart_): boolean;
        removeVehicle(): void;
        setZ(z: number): void;
        getY(): number;
        hashCode(): number;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        eat(arg0: Internal.Level_, arg1: Internal.ItemStack_): Internal.ItemStack;
        handler$ebc000$onRemovedFromWorld(ci: Internal.CallbackInfo_): void;
        broadcastBreakEvent(arg0: Internal.EquipmentSlot_): void;
        showVehicleHealth(): boolean;
        getDistance(pos: BlockPos_): number;
        isBlocking(): boolean;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        handler$dkl000$ac_livingTick(arg0: Internal.CallbackInfo_): void;
        getSpawnLocation(): Internal.BlockContainerJS;
        canChangeDirection(): boolean;
        getScore(): number;
        isPushedByFluid(): boolean;
        handler$zpc000$brittleShield(source: Internal.DamageSource_, amount: number, cir: Internal.CallbackInfoReturnable_<any>): void;
        setSpawnLocation(c: Internal.BlockContainerJS_): void;
        getArmorCoverPercentage(): number;
        captureInventory(autoRestore: boolean): net.minecraft.world.Container;
        handleRelativeFrictionAndCalculateMovement(arg0: Vec3d_, arg1: number): Vec3d;
        turn(arg0: number, arg1: number): void;
        getFoodData(): Internal.FoodData;
        getAirSupply(): number;
        resetRecipes(arg0: Internal.Collection_<Internal.Recipe<any>>): number;
        getTabListFooter(): net.minecraft.network.chat.Component;
        isPlayer(): boolean;
        moveTo(arg0: BlockPos_, arg1: number, arg2: number): void;
        isAnimal(): boolean;
        readAdditionalSaveData(arg0: Internal.CompoundTag_): void;
        handler$dbi000$retroDamageIndicators_onSyncedDataUpdated(arg0: Internal.EntityDataAccessor_<any>, arg1: Internal.CallbackInfo_): void;
        getMotionDirection(): Internal.Direction;
        canBeCollidedWith(): boolean;
        lavaHurt(): void;
        disconnect(): void;
        handleDamageEvent(arg0: Internal.DamageSource_): void;
        getFabricBalmData(): Internal.CompoundTag;
        canChangeDimensions(): boolean;
        jumpInFluid(arg0: Internal.FluidType_): void;
        getCommandSenderWorld(): Internal.Level;
        getWardenSpawnTracker(): Internal.Optional<Internal.WardenSpawnTracker>;
        kick(): void;
        getTotalMovementSpeed(): number;
        changeDimension(arg0: Internal.ServerLevel_): Internal.Entity;
        moveInFluid(arg0: Internal.FluidState_, arg1: Vec3d_, arg2: number): boolean;
        modifyExpressionValue$edf001$elytraOverride(arg0: boolean): boolean;
        startFallFlying(): void;
        /**
         * Is the player currently in motion
        */
        isMoving(): boolean;
        handler$zkk000$isableClimbing(cir: Internal.CallbackInfoReturnable_<any>): void;
        canEat(arg0: boolean): boolean;
        attack(hp: number): void;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        openChestGUI(title: net.minecraft.network.chat.Component_, rows: number, gui: Internal.Consumer_<Internal.ChestMenuData>): void;
        handler$zmk000$readCustomDataFromTag(tag: Internal.CompoundTag_, ci: Internal.CallbackInfo_): void;
        handler$bam000$dropLoot(source: Internal.DamageSource_, ci: Internal.CallbackInfo_): void;
        "getInventory()"(): Internal.Inventory;
        getCraftingGrid(): Internal.InventoryKJS;
        getAttributes(): Internal.AttributeMap;
        isCreative(): boolean;
        setMagneticDeltaY(arg0: number): void;
        "hasPassenger(java.util.function.Predicate)"(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        getDimensions(arg0: Internal.Pose_): Internal.EntityDimensions;
        fabrication$markWet(): void;
        isSwimming(): boolean;
        mayInteract(arg0: Internal.Level_, arg1: BlockPos_): boolean;
        setSprinting(arg0: boolean): void;
        setPortalCooldown(): void;
        getAttackAnim(arg0: number): number;
        setX(x: number): void;
        getPortalWaitTime(): number;
        getBlockStateOn(): Internal.BlockState;
        setSleepCounter(arg0: number): void;
        getItemBySlot(arg0: Internal.EquipmentSlot_): Internal.ItemStack;
        fabrication$didJustAbsorp(): boolean;
        handler$dpj000$post_Tick(ci: Internal.CallbackInfo_): void;
        getFluidJumpThreshold(): number;
        "setPositionAndRotation(double,double,double,float,float)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        isInvisibleTo(arg0: Internal.Player_): boolean;
        /**
         * Determines if a playerAnimator animation is currently playing
        */
        isPlayingAnimation(): boolean;
        stopSleeping(): void;
        setAirSupply(arg0: number): void;
        handler$edm000$mna$hurtArmor(arg0: Internal.DamageSource_, arg1: number, arg2: Internal.CallbackInfo_): void;
        getOnPos(): BlockPos;
        isUndead(): boolean;
        static createLivingAttributes(): Internal.AttributeSupplier$Builder;
        getStepHeight(): number;
        stopUsingItem(): void;
        isSleeping(): boolean;
        acceptsFailure(): boolean;
        restoreFrom(arg0: Internal.ServerPlayer_, arg1: boolean): void;
        setOnGroundWithKnownMovement(arg0: boolean, arg1: Vec3d_): void;
        handler$ebc000$entityJs$tick(ci: Internal.CallbackInfo_): void;
        getFluidFallingAdjustedMovement(arg0: number, arg1: boolean, arg2: Vec3d_): Vec3d;
        setOldPosAndRot(): void;
        localvar$zof000$postShieldDamage(amount: number): number;
        isFree(arg0: number, arg1: number, arg2: number): boolean;
        handler$ebc000$rideTick(ci: Internal.CallbackInfo_): void;
        getLanguage(): string;
        getDismountPoses(): Internal.ImmutableList<Internal.Pose>;
        getLastHurtMobTimestamp(): number;
        "moveTo(double,double,double)"(arg0: number, arg1: number, arg2: number): void;
        handler$ebc000$shouldRenderAtSqrDistance(pDistance: number, cir: Internal.CallbackInfoReturnable_<any>): void;
        setRemainingFireTicks(arg0: number): void;
        /**
         * @deprecated
        */
        getOnPosLegacy(): BlockPos;
        setIsMoving(b: boolean): void;
        awardStat(arg0: ResourceLocation_): void;
        setPos(arg0: Vec3d_): void;
        revokeAdvancement(id: ResourceLocation_): void;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        handler$ebc000$lerpTo(x: number, y: number, z: number, yaw: number, pitch: number, posRotationIncrements: number, teleport: boolean, ci: Internal.CallbackInfo_): void;
        getStandingEyeHeight(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        getMainHandItem(): Internal.ItemStack;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        setSilent(arg0: boolean): void;
        captureDrops(): Internal.Collection<Internal.ItemEntity>;
        hasExactlyOnePlayerPassenger(): boolean;
        canBeSeenAsEnemy(): boolean;
        openMinecartCommandBlock(arg0: Internal.BaseCommandBlock_): void;
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
        handler$znl000$canConsume(ignoreHunger: boolean, cir: Internal.CallbackInfoReturnable_<any>): void;
        isAdvancementDone(id: ResourceLocation_): boolean;
        interactAt(arg0: Internal.Player_, arg1: Vec3d_, arg2: Internal.InteractionHand_): Internal.InteractionResult;
        lerpTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): void;
        onPassengerTurned(arg0: Internal.Entity_): void;
        spawnAtLocation(arg0: Internal.ItemLike_): Internal.ItemEntity;
        blockActionRestricted(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.GameType_): boolean;
        handler$edc000$mna$isAffectedByFluids(arg0: Internal.CallbackInfoReturnable_<any>): void;
        getForgePersistentData(): Internal.CompoundTag;
        abstract ac_dropCustomDeathLoot(arg0: Internal.DamageSource_, arg1: number, arg2: boolean): void;
        isHurt(): boolean;
        "spawnAtLocation(net.minecraft.world.level.ItemLike,int)"(arg0: Internal.ItemLike_, arg1: number): Internal.ItemEntity;
        setInvulnerable(arg0: boolean): void;
        push(arg0: Internal.Entity_): void;
        isInFluidType(): boolean;
        jumpFromGround(): void;
        maxUpStep(): number;
        fabrication$isNoGravityReversible(): boolean;
        setGlowing(arg0: boolean): void;
        load(arg0: Internal.CompoundTag_): void;
        getAdvancements(): Internal.PlayerAdvancements;
        /**
         * Used to stop a certain player animation.
         * 
         * Example Usage:
         * ```javascript
         * event.stopAnimation("animationjs:waving")
         * ```
         * @param animationName ResourceLocation: The name of the animation specified in the json
        */
        stopAnimation(animationName: any): void;
        "broadcastBreakEvent(net.minecraft.world.entity.EquipmentSlot)"(arg0: Internal.EquipmentSlot_): void;
        giveExperiencePoints(arg0: number): void;
        isAlive(): boolean;
        addFood(f: number, m: number): void;
        handler$bah000$dontBypassSteppingEffects(cir: Internal.CallbackInfoReturnable_<any>): void;
        startSleeping(arg0: BlockPos_): void;
        handler$zmn000$lightCreepersOnExplosion(source: Internal.DamageSource_, amount: number, cir: Internal.CallbackInfoReturnable_<any>): void;
        getBbHeight(): number;
        getForcedPose(): Internal.Pose;
        canaryOnBlockCacheSet(arg0: Internal.BlockState_): void;
        resetStat(arg0: Internal.Stat_<any>): void;
        getViewVector(arg0: number): Vec3d;
        getTags(): Internal.Set<string>;
        getXpLevel(): number;
        getLastAttacker(): Internal.LivingEntity;
        hasControllingPassenger(): boolean;
        isOp(): boolean;
        closerThan(arg0: Internal.Entity_, arg1: number, arg2: number): boolean;
        absMoveTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        canChatInColor(): boolean;
        openItemGui(arg0: Internal.ItemStack_, arg1: Internal.InteractionHand_): void;
        handler$bfk000$getCustomName(ci: Internal.CallbackInfoReturnable_<any>): void;
        paint(renderer: Internal.CompoundTag_): void;
        handler$bao000$isInvulnerableTo(ds: Internal.DamageSource_, ci: Internal.CallbackInfoReturnable_<any>): void;
        getPercentFrozen(): number;
        getBlockReach(): number;
        setPortalCooldown(arg0: number): void;
        setPossessedByWatcher(arg0: boolean): void;
        shouldBlockExplode(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: number): boolean;
        hasGlowingTag(): boolean;
        setPosition(block: Internal.BlockContainerJS_): void;
        handler$zop000$sendToolBreakStatus(hand: Internal.InteractionHand_, ci: Internal.CallbackInfo_): void;
        handler$zof000$preShieldDamage(source: Internal.DamageSource_, amount: number, cir: Internal.CallbackInfoReturnable_<any>): void;
        addEffect(arg0: Internal.MobEffectInstance_): boolean;
        handler$cdl000$curio$canFreeze(arg0: Internal.CallbackInfoReturnable_<any>): void;
        handler$ebc000$dampensVibrations(cir: Internal.CallbackInfoReturnable_<any>): void;
        getLastDeathLocation(): Internal.Optional<Internal.GlobalPos>;
        awardStat(arg0: Internal.Stat_<any>, arg1: number): void;
        setXpLevel(l: number): void;
        getViewXRot(arg0: number): number;
        canRiderInteract(): boolean;
        handler$ebc000$showVehicleHealth(cir: Internal.CallbackInfoReturnable_<any>): void;
        setPose(arg0: Internal.Pose_): void;
        canReach(arg0: Internal.Entity_, arg1: number): boolean;
        getReachDistance(): number;
        getEntityType(): Internal.EntityType<any>;
        isWaterCreature(): boolean;
        toString(): string;
        getVisualScale(): number;
        setLastHurtByPlayer(arg0: Internal.Player_): void;
        "getServer()"(): Internal.MinecraftServer;
        "canReach(net.minecraft.world.entity.Entity,double)"(arg0: Internal.Entity_, arg1: number): boolean;
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
        notify(builder: Notification_): void;
        awardStat(arg0: Internal.Stat_<any>): void;
        handler$dke000$ac_turn(arg0: number, arg1: number, arg2: Internal.CallbackInfo_): void;
        calculateEntityAnimation(arg0: boolean): void;
        forceAddEffect(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_): void;
        setChestArmorItem(item: Internal.ItemStack_): void;
        getRespawnAngle(): number;
        handler$bhm000$onSpawn(ci: Internal.CallbackInfo_): void;
        onAboveBubbleCol(arg0: boolean): void;
        "playSound(net.minecraft.sounds.SoundEvent,float,float)"(arg0: Internal.SoundEvent_, arg1: number, arg2: number): void;
        isPassenger(): boolean;
        ban(banner: string, reason: string, expiresInMillis: number): void;
        hasPose(arg0: Internal.Pose_): boolean;
        /**
         * @deprecated
        */
        getDestroySpeed(arg0: Internal.BlockState_): number;
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
        trackEnteredOrExitedLavaOnVehicle(): void;
        isReducedDebugInfo(): boolean;
        getFeetArmorItem(): Internal.ItemStack;
        sendSystemMessage(arg0: net.minecraft.network.chat.Component_, arg1: boolean): void;
        static getViewScale(): number;
        fabrication$setActualBypassesStepOn(): void;
        self(): Internal.Player;
        getVisualRotationYInDegrees(): number;
        triggerRecipeCrafted(arg0: Internal.Recipe_<any>, arg1: Internal.List_<Internal.ItemStack>): void;
        handler$baj006$tick(ci: Internal.CallbackInfo_): void;
        setSpeed(arg0: number): void;
        resetLastActionTime(): void;
        isDiscrete(): boolean;
        unRide(): void;
        getLevel(): Internal.Level;
        "spawnAtLocation(net.minecraft.world.item.ItemStack)"(arg0: Internal.ItemStack_): Internal.ItemEntity;
        getCombatTracker(): Internal.CombatTracker;
        handler$dke000$ac_getEyePosition_lerp(arg0: number, arg1: Internal.CallbackInfoReturnable_<any>): void;
        updateDynamicGameEventListener(arg0: Internal.BiConsumer_<Internal.DynamicGameEventListener<any>, Internal.ServerLevel>): void;
        hasCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        handler$ebc000$canCollideWith(pEntity: Internal.Entity_, cir: Internal.CallbackInfoReturnable_<any>): void;
        "onSyncedDataUpdated(net.minecraft.network.syncher.EntityDataAccessor)"(arg0: Internal.EntityDataAccessor_<any>): void;
        setPrevZ(d: number): void;
        sendInventoryUpdate(): void;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.Entity>): boolean;
        extinguishFire(): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightForge(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        getChestArmorItem(): Internal.ItemStack;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number): void;
        handler$edi000$mna$canEnterPose(arg0: Internal.Pose_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        setTabListHeader(arg0: net.minecraft.network.chat.Component_): void;
        tell(message: net.minecraft.network.chat.Component_): void;
        fabrication$setInvisibilityReversible(reversible: boolean): void;
        closerThan(arg0: Internal.Entity_, arg1: number): boolean;
        getDistanceSq(pos: BlockPos_): number;
        indicateDamage(arg0: number, arg1: number): void;
        canBeSeenByAnyone(): boolean;
        respawn(): void;
        fabrication$setCrawling(b: boolean): void;
        isFullyFrozen(): boolean;
        fabrication$getSuppressedSlots(): Internal.Set<any>;
        handler$zle000$copyFrom(oldPlayer: Internal.ServerPlayer_, alive: boolean, ci: Internal.CallbackInfo_): void;
        getLastPos(): BlockPos;
        isInWall(): boolean;
        getAllSlots(): Internal.Iterable<Internal.ItemStack>;
        handler$baj002$writeCustomDataToTag(tag: Internal.CompoundTag_, ci: Internal.CallbackInfo_): void;
        remove(arg0: Internal.Entity$RemovalReason_): void;
        interactOn(arg0: Internal.Entity_, arg1: Internal.InteractionHand_): Internal.InteractionResult;
        getMagneticDeltaX(): number;
        getScale(): number;
        isSuppressingSlidingDownLadder(): boolean;
        getBlockZ(): number;
        dampensVibrations(): boolean;
        isSilent(): boolean;
        "playSound(net.minecraft.sounds.SoundEvent)"(arg0: Internal.SoundEvent_): void;
        getPitch(): number;
        getRandom(): Internal.RandomSource;
        rotate(arg0: Internal.Rotation_): number;
        shouldRiderFaceForward(arg0: Internal.Player_): boolean;
        getPassengersAndSelf(): Internal.Stream<any>;
        setMagneticAttachmentFace(arg0: Internal.Direction_): void;
        fabrication$getKillMessage(): string;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        playNotifySound(arg0: Internal.SoundEvent_, arg1: Internal.SoundSource_, arg2: number, arg3: number): void;
        "getAttributeBaseValue(net.minecraft.core.Holder)"(arg0: Internal.Holder_<Internal.Attribute>): number;
        setMagnetHeadRotation(): void;
        handler$dke000$ac_collide(arg0: Vec3d_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        "self()"(): Internal.LivingEntity;
        rayTrace(): Internal.RayTraceResultJS;
        alwaysAccepts(): boolean;
        neruina$getTickingEntryId(): Internal.UUID;
        "isHolding(java.util.function.Predicate)"(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        getPrevMagneticAttachmentFace(): Internal.Direction;
        getNoActionTime(): number;
        isVisuallyCrawling(): boolean;
        handler$ccm000$CMcanAttack(arg0: Internal.LivingEntity_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        setComboCount(comboCount: number): void;
        shouldUpdateFluidWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        initInventoryMenu(): void;
        handler$bfk000$hasCustomNameAndIsVisible(ci: Internal.CallbackInfoReturnable_<any>): void;
        "broadcastBreakEvent(net.minecraft.world.InteractionHand)"(arg0: Internal.InteractionHand_): void;
        neruina$clearErrored(): void;
        teleportRelative(arg0: number, arg1: number, arg2: number): void;
        setPrevX(d: number): void;
        modify$dpj000$getHand(hand: Internal.InteractionHand_): Internal.InteractionHand;
        getLastHurtByMob(): Internal.LivingEntity;
        isInWaterOrBubble(): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        updateFluidHeightAndDoFluidPushing(): void;
        getPortalCooldown(): number;
        modify$bhi000$constructUpdatePacket(equipmentList: Internal.List_<any>): Internal.List<any>;
        getItem(): Internal.ItemStack;
        handler$zpo000$canTarget(other: Internal.LivingEntity_, ci: Internal.CallbackInfoReturnable_<any>): void;
        modifyExpressionValue$edg002$elytraOverride(arg0: boolean): boolean;
        causeFallDamage(arg0: number, arg1: number, arg2: Internal.DamageSource_): boolean;
        hasContainerOpen(): boolean;
        releaseUsingItem(): void;
        getPosition(arg0: number): Vec3d;
        "awardStat(net.minecraft.resources.ResourceLocation)"(arg0: ResourceLocation_): void;
        setSlowFallingFlag(arg0: boolean): void;
        wait(arg0: number): void;
        isIgnoringBlockTriggers(): boolean;
        setRecordPlayingNearby(arg0: BlockPos_, arg1: boolean): void;
        getHandHoldingItemAngle(arg0: Internal.Item_): Vec3d;
        neruina$setTickingEntryId(uuid: Internal.UUID_): void;
        setCreativeMode(mode: boolean): void;
        hasItemInSlot(arg0: Internal.EquipmentSlot_): boolean;
        sendServerStatus(arg0: Internal.ServerStatus_): void;
        canUpdate(arg0: boolean): void;
        fabrication$getTags(): Internal.Set<any>;
        getEyeInFluidType(): Internal.FluidType;
        distanceToSqr(arg0: Vec3d_): number;
        handler$bgn006$writeCustomDataToTag(tag: Internal.CompoundTag_, ci: Internal.CallbackInfo_): void;
        isSteppingCarefully(): boolean;
        getInventoryChangeListener(): Internal.KubeJSInventoryListener;
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
        getNbt(): Internal.CompoundTag;
        setInvisible(arg0: boolean): void;
        getStages(): Internal.Stages;
        boostElytraFlight(): void;
        /**
         * Used to trigger animations off the server player with customizable animation data.
         * 
         * Example Usage:
         * ```javascript
         * event.triggerAnimation("animationjs:waving", 1, "linear", true, false, ["playeranimatorapi:mirroronalthand"], parts => {
         * 	parts.leftArm.setEnabled(false)
         * });
         * ```
         * @param animationID ResourceLocation: The name of the animation specified in the json
         * @param transitionLength int: Duration of the transition length in milliseconds
         * @param easeID String: ID of the easing function to use for animation easing from the {@link dev.kosmx.playerAnim.core.util.Ease} class
         * @param firstPersonEnabled boolean: Whether the animation should be visible in first-person view
         * @param important boolean: Whether the animation is important and should override other animations
         * @param modifiers List<String>: List of modifiers to apply to the animation, can also be null
         * @param partsConsumer Consumer<PlayerParts>: Consumer to modify player parts such as part visibility, rotation ect.
        */
        triggerAnimation(animationID: any, transitionLength: number, easeID: string, firstPersonEnabled: boolean, important: boolean, modifiers: Internal.List_<any>, partsConsumer: Internal.Consumer_<any>): void;
        getEffect(arg0: Internal.MobEffect_): Internal.MobEffectInstance;
        setTotalMovementSpeedMultiplier(speed: number): void;
        setHealth(arg0: number): void;
        attack(arg0: Internal.DamageSource_, arg1: number): boolean;
        onInsideBubbleColumn(arg0: boolean): void;
        initMenu(arg0: Internal.AbstractContainerMenu_): void;
        getEyePosition(): Vec3d;
        getEyeHeight(): number;
        getLuck(): number;
        setDiscardFriction(arg0: boolean): void;
        hasPassenger(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        getYaw(): number;
        isPossessedByWatcher(): boolean;
        swing(arg0: Internal.InteractionHand_, arg1: boolean): void;
        hasChangedDimension(): void;
        getUsedItemHand(): Internal.InteractionHand;
        setDefaultMovementSpeed(speed: number): void;
        onEffectAdded(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_): void;
        canAttackType(arg0: Internal.EntityType_<any>): boolean;
        getRespawnDimension(): Internal.ResourceKey<Internal.Level>;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        canEntityBeSeen(entity: Internal.LivingEntity_): boolean;
        getBrain(): Internal.Brain<any>;
        setCustomNameVisible(arg0: boolean): void;
        isAlliedTo(arg0: Internal.Team_): boolean;
        updateTutorialInventoryAction(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.ClickAction_): void;
        handler$zmp000$onDeath(src: Internal.DamageSource_, ci: Internal.CallbackInfo_): void;
        getControllingPassenger(): Internal.LivingEntity;
        handler$zlh000$writeCustomDataToNbt(pos: BlockPos_, cir: Internal.CallbackInfoReturnable_<any>): void;
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
        getXpNeededForNextLevel(): number;
        resetAttackStrengthTicker(): void;
        getEyeY(): number;
        getScoreboard(): Internal.Scoreboard;
        skipDropExperience(): void;
        getPrevY(): number;
        getBoundingBox(): Internal.AABB;
        isInWaterOrRain(): boolean;
        openInventoryGUI(inventory: Internal.InventoryKJS_, title: net.minecraft.network.chat.Component_): void;
        getSaturation(): number;
        handler$zjm000$damage(source: Internal.DamageSource_, amount: number, cir: Internal.CallbackInfoReturnable_<any>): void;
        setItemSlot(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): void;
        disableShield(arg0: boolean): void;
        equals(arg0: any): boolean;
        getViewYRot(arg0: number): number;
        getLastArmorItem(arg0: Internal.EquipmentSlot_): Internal.ItemStack;
        dismountsUnderwater(): boolean;
        handler$cpe000$l2library_overrideClientGlow_isCurrentlyGlowing(arg0: Internal.CallbackInfoReturnable_<any>): void;
        isAffectedByPotions(): boolean;
        addTag(arg0: string): boolean;
        playerTouch(arg0: Internal.Player_): void;
        getAddEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>;
        getCitadelEntityData(): Internal.CompoundTag;
        getEyeHeight(arg0: Internal.Pose_): number;
        "self()"(): Internal.Player;
        getCurrentAttack(): Internal.AttackHand;
        playerAnimator_getAnimation(id: ResourceLocation_): Internal.IAnimation;
        getTeam(): Internal.Team;
        setTicksFrozen(arg0: number): void;
        getUseItem(): Internal.ItemStack;
        getMyRidingOffset(): number;
        dismountTo(arg0: number, arg1: number, arg2: number): void;
        canReach(arg0: BlockPos_, arg1: number): boolean;
        hasCustomName(): boolean;
        getEnchantmentSeed(): number;
        getSwimAmount(arg0: number): number;
        isLiving(): boolean;
        getX(): number;
        isVehicle(): boolean;
        stepOnMagnetBlock(arg0: BlockPos_): void;
        addItem(arg0: Internal.ItemStack_): boolean;
        handler$ebc000$playerTouch(pPlayer: Internal.Player_, ci: Internal.CallbackInfo_): void;
        handler$zji000$interact(e: Internal.Entity_, hand: Internal.InteractionHand_, ci: Internal.CallbackInfoReturnable_<any>): void;
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
        /**
         * Used to trigger animations off a server player. This can be
         * called from any server player object.
         * 
         * Example Usage:
         * ```javascript
         * event.player.triggerAnimation("animationjs:waving")
         * ```
         * @param animationName ResourceLocation: The name of the animation specified in the json
        */
        triggerAnimation(animationName: any): void;
        handler$ebc000$isAttackable(cir: Internal.CallbackInfoReturnable_<any>): void;
        isScoping(): boolean;
        /**
         * Used to trigger animations off a server player. This can be
         * called from any server player object with the extra option for animations to overlap themselves.
         * 
         * Example Usage:
         * ```javascript
         * event.player.triggerAnimation("animationjs:waving", true)
         * ```
         * @param animationName ResourceLocation: The name of the animation specified in the json
         * @param canOverlapSelf Boolean: Whether the animation can overlap itself if it's already playing
        */
        triggerAnimation(animationName: any, canOverlapSelf: boolean): void;
        playerAnimator_getAnimation(): Internal.AnimationApplier;
        setFoodLevel(foodLevel: number): void;
        isCustomNameVisible(): boolean;
        isSupportedBy(arg0: BlockPos_): boolean;
        setTabListFooter(arg0: net.minecraft.network.chat.Component_): void;
        getPistonPushReaction(): Internal.PushReaction;
        shouldRiderSit(): boolean;
        lookAt(arg0: Internal.EntityAnchorArgument$Anchor_, arg1: Vec3d_): void;
        getChatVisibility(): Internal.ChatVisiblity;
        getLootTableSeed(): number;
        isInFluidType(arg0: Internal.FluidType_): boolean;
        collide(arg0: Vec3d_): Vec3d;
        getMotionX(): number;
        getFluidMotionScale(arg0: Internal.FluidType_): number;
        "onSyncedDataUpdated(java.util.List)"(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        hasIndirectPassenger(arg0: Internal.Entity_): boolean;
        getEntityData(): Internal.SynchedEntityData;
        handler$zla000$baseTick(ci: Internal.CallbackInfo_): void;
        getShoulderEntityRight(): Internal.CompoundTag;
        handler$bbk003$writeCustomDataToTag(tag: Internal.CompoundTag_, ci: Internal.CallbackInfo_): void;
        handleInsidePortal(arg0: BlockPos_): void;
        sendTexturePack(arg0: string, arg1: string, arg2: boolean, arg3: net.minecraft.network.chat.Component_): void;
        getPotionEffects(): Internal.EntityPotionEffectsJS;
        getOpenInventory(): Internal.AbstractContainerMenu;
        resetSentInfo(): void;
        fabrication$setItemDespawnAware(aware: boolean): void;
        absMoveTo(arg0: number, arg1: number, arg2: number): void;
        updateFluidHeightAndDoFluidPushing(arg0: Internal.Predicate_<Internal.FluidState>): void;
        isOnRails(): boolean;
        getStingerCount(): number;
        getFallSounds(): Internal.LivingEntity$Fallsounds;
        getDimensionChangingDelay(): number;
        getAttributeTotalValue(attribute: Internal.Attribute_): number;
        setYaw(arg0: number): void;
        redirect$dpj000$setStackInHand_Redirect(instance: Internal.Player_, handArg: Internal.InteractionHand_, itemStack: Internal.ItemStack_): void;
        getPickRadius(): number;
        trackStartFallingPosition(): void;
        awardRecipes(arg0: Internal.Collection_<Internal.Recipe<any>>): number;
        handler$ebc000$getControllingPassenger(cir: Internal.CallbackInfoReturnable_<any>): void;
        isRemoved(): boolean;
        handler$bii000$isBlockBreakingRestricted(world: Internal.Level_, pos: BlockPos_, mode: Internal.GameType_, ci: Internal.CallbackInfoReturnable_<any>): void;
        handler$ebc001$isInvulnerableTo(pSource: Internal.DamageSource_, cir: Internal.CallbackInfoReturnable_<any>): void;
        teleportToWithTicket(arg0: number, arg1: number, arg2: number): void;
        getJumpBoostPower(): number;
        resetMagnetHeadRotation(): void;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        getCamera(): Internal.Entity;
        refreshDimensions(): void;
        handler$ebc000$push(pEntity: Internal.Entity_, ci: Internal.CallbackInfo_): void;
        "getAttributeValue(net.minecraft.world.entity.ai.attributes.Attribute)"(arg0: Internal.Attribute_): number;
        "spawnAtLocation(net.minecraft.world.level.ItemLike)"(arg0: Internal.ItemLike_): Internal.ItemEntity;
        "isHolding(net.minecraft.world.item.Item)"(arg0: Internal.Item_): boolean;
        handler$edi000$mna$playSound(arg0: Internal.SoundEvent_, arg1: number, arg2: number, arg3: Internal.CallbackInfo_): void;
        handler$dke001$ac_tick(arg0: Internal.CallbackInfo_): void;
        setShiftKeyDown(arg0: boolean): void;
        getEyePosition(arg0: number): Vec3d;
        getPassengers(): Internal.EntityArrayList;
        getEnderChestInventory(): Internal.PlayerEnderChestContainer;
        getMaxHeightFluidType(): Internal.FluidType;
        getZ(): number;
        trackChunk(arg0: Internal.ChunkPos_, arg1: Internal.Packet_<any>): void;
        handler$zbd000$changeDimensionHead(arg0: Internal.ServerLevel_, arg1: Internal.ITeleporter_, arg2: Internal.CallbackInfoReturnable_<any>): void;
        isSleepingLongEnough(): boolean;
        teleportTo(arg0: number, arg1: number, arg2: number): void;
        getAttributeBaseValue(arg0: Internal.Holder_<Internal.Attribute>): number;
        getServer(): Internal.MinecraftServer;
        getExperienceReward(): number;
        getFirstPassenger(): Internal.Entity;
        heal(arg0: number): void;
        getGameProfile(): Internal.GameProfile;
        handler$bgn002$copyFrom(oldPlayer: Internal.ServerPlayer_, alive: boolean, ci: Internal.CallbackInfo_): void;
        setLastHurtMob(arg0: Internal.Entity_): void;
        setLastHurtByMob(arg0: Internal.LivingEntity_): void;
        interact(arg0: Internal.Player_, arg1: Internal.InteractionHand_): Internal.InteractionResult;
        getDismountLocationForPassenger(arg0: Internal.LivingEntity_): Vec3d;
        fabrication$updateSwimming(old: boolean): boolean;
        checkSlowFallDistance(): void;
        canStandOnFluid(arg0: Internal.FluidState_): boolean;
        setFabricBalmData(arg0: Internal.CompoundTag_): void;
        touchingUnloadedChunk(): boolean;
        modifyAttribute(attribute: Internal.Attribute_, identifier: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        getLookAngle(): Vec3d;
        getData(): Internal.AttachedData<any>;
        setArrowCount(arg0: number): void;
        getMotionZ(): number;
        isInvisible(): boolean;
        is(arg0: Internal.Entity_): boolean;
        "awardStat(net.minecraft.stats.Stat,int)"(arg0: Internal.Stat_<any>, arg1: number): void;
        getAttackStrengthScale(arg0: number): number;
        getBedOrientation(): Internal.Direction;
        ejectPassengers(): void;
        removeEffect(arg0: Internal.MobEffect_): boolean;
        "canReach(net.minecraft.world.phys.Vec3,double)"(arg0: Vec3d_, arg1: number): boolean;
        getProfile(): Internal.GameProfile;
        openTextEdit(arg0: Internal.SignBlockEntity_, arg1: boolean): void;
        mayBuild(): boolean;
        handler$ebc000$onAddedToWorld(ci: Internal.CallbackInfo_): void;
        isDeadOrDying(): boolean;
        setHeadArmorItem(item: Internal.ItemStack_): void;
        static setViewScale(arg0: number): void;
        take(arg0: Internal.Entity_, arg1: number): void;
        setLevelCallback(arg0: Internal.EntityInLevelCallback_): void;
        handler$zmk000$remove(source: Internal.DamageSource_, amount: number, cir: Internal.CallbackInfoReturnable_<any>): void;
        playSound(arg0: Internal.SoundEvent_, arg1: number, arg2: number): void;
        handler$edc000$mna$canStandOnFluid(arg0: Internal.FluidState_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        canAttack(arg0: Internal.LivingEntity_): boolean;
        handler$dgl000$l2library_openMenu_recordTitle(arg0: Internal.MenuProvider_, arg1: Internal.CallbackInfoReturnable_<any>): void;
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
        loadGameTypes(arg0: Internal.CompoundTag_): void;
        isCrouching(): boolean;
        "getAttributeBaseValue(net.minecraft.world.entity.ai.attributes.Attribute)"(arg0: Internal.Attribute_): number;
        onLeaveCombat(): void;
        setY(y: number): void;
        getAttributeValue(arg0: Internal.Attribute_): number;
        getFeetBlockState(): Internal.BlockState;
        handler$bdj000$setSprinting(ci: Internal.CallbackInfo_): void;
        allowsListing(): boolean;
        changeDimension(arg0: Internal.ServerLevel_, arg1: Internal.ITeleporter_): Internal.Entity;
        positionRider(arg0: Internal.Entity_): void;
        broadcastToPlayer(arg0: Internal.ServerPlayer_): boolean;
        baseTick(): void;
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
        isVisuallySwimming(): boolean;
        localvar$zoi000$fabrication$treatLavaAsGround(onGround: boolean): boolean;
        getMaxAirSupply(): number;
        canTrample(arg0: Internal.BlockState_, arg1: BlockPos_, arg2: number): boolean;
        handler$ebe000$brainProvider(cir: Internal.CallbackInfoReturnable_<any>): void;
        handler$bhj007$readCustomDataFromTag(tag: Internal.CompoundTag_, ci: Internal.CallbackInfo_): void;
        neruina$setErrored(): void;
        getFoodLevel(): number;
        setItemInHand(arg0: Internal.InteractionHand_, arg1: Internal.ItemStack_): void;
        entityJs$getTypeId(): string;
        setMaxHealth(hp: number): void;
        getFacing(): Internal.Direction;
        setSaturation(saturation: number): void;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>, arg1: boolean): boolean;
        handler$ebc000$getMaxFallDistance(cir: Internal.CallbackInfoReturnable_<any>): void;
        openJigsawBlock(arg0: Internal.JigsawBlockEntity_): void;
        isPassengerOfSameVehicle(arg0: Internal.Entity_): boolean;
        getBoundingBoxForCulling(): Internal.AABB;
        static collideBoundingBox(arg0: Internal.Entity_, arg1: Vec3d_, arg2: Internal.AABB_, arg3: Internal.Level_, arg4: Internal.List_<any>): Vec3d;
        trackingPosition(): Vec3d;
        setMagneticDeltaX(arg0: number): void;
        getNameTagOffsetY(): number;
        isInvulnerable(): boolean;
        setCooldown(i: number): void;
        isInLava(): boolean;
        awardKillScore(arg0: Internal.Entity_, arg1: number, arg2: Internal.DamageSource_): void;
        isInWater(): boolean;
        getXp(): number;
        handler$bii000$canPlaceOn(pos: BlockPos_, dir: Internal.Direction_, stack: Internal.ItemStack_, ci: Internal.CallbackInfoReturnable_<any>): void;
        handler$ebc000$causeFallDamage(pFallDistance: number, pMultiplier: number, pSource: Internal.DamageSource_, cir: Internal.CallbackInfoReturnable_<any>): void;
        swing(arg0: Internal.InteractionHand_): void;
        hasEffect(arg0: Internal.MobEffect_): boolean;
        getHeldItem(hand: Internal.InteractionHand_): Internal.ItemStack;
        getRootVehicle(): Internal.Entity;
        save(arg0: Internal.CompoundTag_): boolean;
        getLocalBoundsForPose(arg0: Internal.Pose_): Internal.AABB;
        isNoGravity(): boolean;
        curePotionEffects(arg0: Internal.ItemStack_): boolean;
        setMainArm(arg0: Internal.HumanoidArm_): void;
        getSuffixes(): Internal.Collection<Internal.MutableComponent>;
        onItemPickup(arg0: Internal.ItemEntity_): void;
        setCitadelEntityData(arg0: Internal.CompoundTag_): void;
        setMagneticDeltaZ(arg0: number): void;
        handler$dkl000$ac_calculateEntityAnimation(arg0: boolean, arg1: Internal.CallbackInfo_): void;
        updateSwimming(): void;
        isHolding(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        handler$bbk003$readCustomDataFromTag(tag: Internal.CompoundTag_, ci: Internal.CallbackInfo_): void;
        getSpeed(): number;
        abstract getCachedFeetBlockState(): Internal.BlockState;
        hasSlowFallingFlag(): boolean;
        shouldInformAdmins(): boolean;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        rideTick(): void;
        getInventory(): Internal.InventoryKJS;
        wait(): void;
        getUuid(): Internal.UUID;
        setOffHandItem(item: Internal.ItemStack_): void;
        shouldFilterMessageTo(arg0: Internal.ServerPlayer_): boolean;
        spawn(): void;
        teleportTo(arg0: Internal.ServerLevel_, arg1: number, arg2: number, arg3: number, arg4: Internal.Set_<Internal.RelativeMovement>, arg5: number, arg6: number): boolean;
        shouldShowName(): boolean;
        setScore(arg0: number): void;
        getArmorSlots(): Internal.Iterable<Internal.ItemStack>;
        kill(): void;
        onEnterCombat(): void;
        openStructureBlock(arg0: Internal.StructureBlockEntity_): void;
        drop(arg0: Internal.ItemStack_, arg1: boolean): Internal.ItemEntity;
        animateHurt(arg0: number): void;
        static resetForwardDirectionOfRelativePortalPosition(arg0: Vec3d_): Vec3d;
        brainProvider(): Internal.Brain$Provider<any>;
        getHeadArmorItem(): Internal.ItemStack;
        checkMovementStatistics(arg0: number, arg1: number, arg2: number): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getDimensionsForge(arg0: Internal.Pose_): Internal.EntityDimensions;
        handler$ebc000$mayInteract(pLevel: Internal.Level_, pPos: BlockPos_, cir: Internal.CallbackInfoReturnable_<any>): void;
        setTabListHeaderFooter(arg0: net.minecraft.network.chat.Component_, arg1: net.minecraft.network.chat.Component_): void;
        deserializeNBT(arg0: Internal.Tag_): void;
        handler$zjb000$getLandingPos(cir: Internal.CallbackInfoReturnable_<any>): void;
        localvar$dpi000$takeKnockback_HEAD_changeStrength(knockbackStrength: number): number;
        revive(): void;
        setCamera(arg0: Internal.Entity_): void;
        localvar$cch000$fluidCollision(arg0: Vec3d_): Vec3d;
        unlockAdvancement(id: ResourceLocation_): void;
        refreshDisplayName(): void;
        getBbWidth(): number;
        handler$ebc000$canTrample(state: Internal.BlockState_, pos: BlockPos_, fallDistance: number, cir: Internal.CallbackInfoReturnable_<any>): void;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
        getLastAttackedTicks(): number;
        addDeltaMovement(arg0: Vec3d_): void;
        handler$zla000$fromTag(tag: Internal.CompoundTag_, ci: Internal.CallbackInfo_): void;
        canDrownInFluidType(arg0: Internal.FluidType_): boolean;
        "getName()"(): net.minecraft.network.chat.Component;
        mirror(arg0: Internal.Mirror_): number;
        isFake(): boolean;
        canUpdate(): boolean;
        "attack(float)"(hp: number): void;
        mayUseItemAt(arg0: BlockPos_, arg1: Internal.Direction_, arg2: Internal.ItemStack_): boolean;
        knockback(arg0: number, arg1: number, arg2: number): void;
        getChatSession(): Internal.RemoteChatSession;
        getTicksRequiredToFreeze(): number;
        handler$bdk000$setSprinting(sprinting: boolean, ci: Internal.CallbackInfo_): void;
        setExperienceLevels(arg0: number): void;
        "teleportTo(net.minecraft.resources.ResourceLocation,double,double,double,float,float)"(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        getVisibilityPercent(arg0: Internal.Entity_): number;
        wrapOperation$boc000$onTravel(instance: Internal.LivingEntity_, state: Internal.FluidState_, original: Internal.Operation_<any>): boolean;
        handler$bcn000$isWet(ci: Internal.CallbackInfoReturnable_<any>): void;
        fabrication$clearTags(): void;
        setKnockbackMultiplier_BetterCombat(value: number): void;
        teleportTo(arg0: Internal.ServerLevel_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        getUsername(): string;
        move(arg0: Internal.MoverType_, arg1: Vec3d_): void;
        doCheckFallDamage(arg0: number, arg1: number, arg2: number, arg3: boolean): void;
        onRemovedFromWorld(): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        isPickable(): boolean;
        setYHeadRot(arg0: number): void;
        isRespawnForced(): boolean;
        setJumping(arg0: boolean): void;
        awardRecipesByKey(arg0: ResourceLocation_[]): void;
        getPickResult(): Internal.ItemStack;
        setChatSession(arg0: Internal.RemoteChatSession_): void;
        handler$zop000$sendEquipmentBreakStatus(slot: Internal.EquipmentSlot_, ci: Internal.CallbackInfo_): void;
        "getMainHandItem()"(): Internal.ItemStack;
        getAbsorptionAmount(): number;
        getRandomY(): number;
        onEffectRemoved(arg0: Internal.MobEffectInstance_): void;
        getDisplayName(): net.minecraft.network.chat.Component;
        displayClientMessage(arg0: net.minecraft.network.chat.Component_, arg1: boolean): void;
        handler$dke000$ac_isInWater(arg0: Internal.CallbackInfoReturnable_<any>): void;
        getMobType(): Internal.MobType;
        travel(arg0: Vec3d_): void;
        getItemInHand(arg0: Internal.InteractionHand_): Internal.ItemStack;
        shouldBeSaved(): boolean;
        getFluidTypeHeight(arg0: Internal.FluidType_): number;
        drop(arg0: Internal.ItemStack_, arg1: boolean, arg2: boolean): Internal.ItemEntity;
        causeFoodExhaustion(arg0: number): void;
        setEntityOnShoulder(arg0: Internal.CompoundTag_): boolean;
        handler$edc000$mna$jumpInLiquid(arg0: Internal.TagKey_<any>, arg1: Internal.CallbackInfo_): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.Entity>): boolean;
        giveExperienceLevels(arg0: number): void;
        removeTag(arg0: string): boolean;
        setLastDeathLocation(arg0: Internal.Optional_<Internal.GlobalPos>): void;
        isHoldingInAnyHand(i: Internal.Ingredient_): boolean;
        /**
         * @deprecated
        */
        getFluidHeight(arg0: Internal.TagKey_<Internal.Fluid>): number;
        canSpawnSoulSpeedParticle(): boolean;
        readCapsFrom(arg0: Internal.CompoundTag_): void;
        notifyAll(): void;
        getStatsCounter(): Internal.ServerStatsCounter;
        aiStep(): void;
        getPassengersRidingOffset(): number;
        getSelectedSlot(): number;
        setAttributeBaseValue(attribute: Internal.Attribute_, value: number): void;
        canHarmPlayer(arg0: Internal.Player_): boolean;
        "isInFluidType(java.util.function.BiPredicate)"(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        distanceToEntitySqr(arg0: Internal.Entity_): number;
        handler$ebc000$onClientRemoval(ci: Internal.CallbackInfo_): void;
        isFrame(): boolean;
        broadcastBreakEvent(arg0: Internal.InteractionHand_): void;
        setLegsArmorItem(item: Internal.ItemStack_): void;
        startAutoSpinAttack(arg0: number): void;
        discard(): void;
        localvar$bhp000$adjustDamage(amount: number, source: Internal.DamageSource_): number;
        sendSystemMessage(arg0: net.minecraft.network.chat.Component_): void;
        drop(arg0: boolean): boolean;
        acceptsSuccess(): boolean;
        handler$zbd000$changeDimensionTail(arg0: Internal.ServerLevel_, arg1: Internal.ITeleporter_, arg2: Internal.CallbackInfoReturnable_<any>): void;
        setNoGravity(arg0: boolean): void;
        getUseItemRemainingTicks(): number;
        onEnchantmentPerformed(arg0: Internal.ItemStack_, arg1: number): void;
        getIndirectPassengers(): Internal.Iterable<any>;
        attackable(): boolean;
        createCommandSourceStack(): Internal.CommandSourceStack;
        isControlledByLocalInstance(): boolean;
        isMonster(): boolean;
        getSleepTimer(): number;
        handler$bgn006$readCustomDataFromTag(tag: Internal.CompoundTag_, ci: Internal.CallbackInfo_): void;
        getLastClimbablePos(): Internal.Optional<BlockPos>;
        handler$dfk000$pre_getAttributeValue(arg0: Internal.Attribute_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getEatingSound(arg0: Internal.ItemStack_): Internal.SoundEvent;
        onSyncedDataUpdated(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        setId(arg0: number): void;
        getHorizontalFacing(): Internal.Direction;
        getType(): string;
        isDamageSourceBlocked(arg0: Internal.DamageSource_): boolean;
        sendChatMessage(arg0: Internal.OutgoingChatMessage_, arg1: boolean, arg2: Internal.ChatType$Bound_): void;
        getLightProbePosition(arg0: number): Vec3d;
        setLastSectionPos(arg0: Internal.SectionPos_): void;
        abstract ac_getEquipmentDropChance(arg0: Internal.EquipmentSlot_): number;
        setVisualScale(arg0: number): void;
        setPrevY(d: number): void;
        getActiveEffectsMap(): Internal.Map<Internal.MobEffect, Internal.MobEffectInstance>;
        onEquipItem(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_): void;
        getTextFilter(): Internal.TextFilter;
        giveInHand(item: Internal.ItemStack_): void;
        addXP(xp: number): void;
        handler$edd000$mna$onClimbable(arg0: Internal.CallbackInfoReturnable_<any>): void;
        checkDespawn(): void;
        canUseGameMasterBlocks(): boolean;
        setHeldItem(hand: Internal.InteractionHand_, item: Internal.ItemStack_): void;
        stopSleepInBed(arg0: boolean, arg1: boolean): void;
        onSyncedDataUpdated(arg0: Internal.EntityDataAccessor_<any>): void;
        getMagneticAttachmentFace(): Internal.Direction;
        lerpHeadTo(arg0: number, arg1: number): void;
        isTextFilteringEnabled(): boolean;
        handler$bag005$tick(ci: Internal.CallbackInfo_): void;
        fabrication$isInvisibilityReversible(): boolean;
        canDisableShield(): boolean;
        setMotionX(x: number): void;
        getHandSlots(): Internal.Iterable<Internal.ItemStack>;
        distanceToEntity(arg0: Internal.Entity_): number;
        canarySetClimbingMobCachingSectionUpdateBehavior(arg0: boolean): void;
        getMagneticDeltaY(): number;
        wait(arg0: number, arg1: number): void;
        getTeamColor(): number;
        setNbt(nbt: Internal.CompoundTag_): void;
        "isInFluidType(net.minecraftforge.fluids.FluidType)"(arg0: Internal.FluidType_): boolean;
        getPrefixes(): Internal.Collection<Internal.MutableComponent>;
        handler$bbo001$damage(ds: Internal.DamageSource_, amount: number, cir: Internal.CallbackInfoReturnable_<any>): void;
        extinguish(): void;
        getCooldowns(): Internal.ItemCooldowns;
        moveTo(arg0: Vec3d_): void;
        fabrication$setTag(tag: string, enabled: boolean): void;
        isColliding(arg0: BlockPos_, arg1: Internal.BlockState_): boolean;
        handler$bhj007$writeCustomDataToTag(tag: Internal.CompoundTag_, ci: Internal.CallbackInfo_): void;
        "swing(net.minecraft.world.InteractionHand)"(hand: Internal.InteractionHand_): void;
        static findRespawnPositionAndUseSpawnBlock(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number, arg3: boolean, arg4: boolean): Internal.Optional<Vec3d>;
        handler$bbo000$playHurtSound(src: Internal.DamageSource_, ci: Internal.CallbackInfo_): void;
        openHorseInventory(arg0: Internal.AbstractHorse_, arg1: net.minecraft.world.Container_): void;
        untrackChunk(arg0: Internal.ChunkPos_): void;
        isInvertedHealAndHarm(): boolean;
        getMouseItem(): Internal.ItemStack;
        killedEntity(arg0: Internal.ServerLevel_, arg1: Internal.LivingEntity_): boolean;
        getClassification(arg0: boolean): Internal.MobCategory;
        isFreezing(): boolean;
        runCommand(command: string): number;
        setSharedFlagOnFire(arg0: boolean): void;
        handler$baj002$readCustomDataFromTag(tag: Internal.CompoundTag_, ci: Internal.CallbackInfo_): void;
        startSleepInBed(arg0: BlockPos_): Internal.Either<Internal.Player$BedSleepingProblem, net.minecraft.util.Unit>;
        playerAnimator_setAnimation(id: ResourceLocation_, animation: Internal.IAnimation_): Internal.IAnimation;
        addItemCooldown(item: Internal.Item_, ticks: number): void;
        get stats(): Internal.PlayerStatsJS
        set defaultMovementSpeedMultiplier(speed: number)
        get suppressingBounce(): boolean
        set serverLevel(arg0: Internal.ServerLevel_)
        get onFire(): boolean
        get positionCodec(): Internal.VecDeltaCodec
        set maxUpStep(arg0: number)
        get entityReach(): number
        get fallFlyingTicks(): number
        set selectedSlot(index: number)
        get shiftKeyDown(): boolean
        set UUID(arg0: Internal.UUID_)
        get cooldown(): number
        set motionZ(z: number)
        get "inventory()"(): Internal.InventoryKJS
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        get animation(): Internal.AnimationApplier
        get blockY(): number
        get shoulderEntityLeft(): Internal.CompoundTag
        get spectator(): boolean
        set mainHandItem(item: Internal.ItemStack_)
        get persistentData(): Internal.CompoundTag
        get health(): number
        get maxHealth(): number
        set forcedPose(arg0: Internal.Pose_)
        set removed(arg0: Internal.Entity$RemovalReason_)
        get inWaterRainOrBubble(): boolean
        get removalReason(): Internal.Entity$RemovalReason
        get miningBlock(): boolean
        set boundingBox(arg0: Internal.AABB_)
        get ambientCreature(): boolean
        set experiencePoints(arg0: number)
        get block(): Internal.BlockContainerJS
        get name(): net.minecraft.network.chat.Component
        set mouseItem(item: Internal.ItemStack_)
        get tabListHeader(): net.minecraft.network.chat.Component
        get controlledVehicle(): Internal.Entity
        get armorValue(): number
        get prevX(): number
        set dimension(arg0: Internal.EntityDimensions_)
        get killCredit(): Internal.LivingEntity
        get tabListDisplayName(): net.minecraft.network.chat.Component
        get recipeBook(): Internal.ServerRecipeBook
        get respawnPosition(): BlockPos
        get autoSpinAttack(): boolean
        get remainingFireTicks(): number
        get maxFallDistance(): number
        set gameMode(arg0: Internal.GameType_)
        get ticksFrozen(): number
        set statusMessage(message: net.minecraft.network.chat.Component_)
        get voicePitch(): number
        set sleepingPos(arg0: BlockPos_)
        get descending(): boolean
        get YHeadRot(): number
        set absorptionAmount(arg0: number)
        get affectedByFluids(): boolean
        set deltaMovement(arg0: Vec3d_)
        get abilities(): Internal.Abilities
        get baby(): boolean
        get glowing(): boolean
        get prevZ(): number
        get leashOffset(): Vec3d
        get attackable(): boolean
        get changingDimension(): boolean
        set reducedDebugInfo(arg0: boolean)
        get underWater(): boolean
        get swimHighSpeedSplashSound(): Internal.SoundEvent
        get legsArmorItem(): Internal.ItemStack
        get selfAndPassengers(): Internal.Stream<any>
        get deltaMovement(): Vec3d
        set secondsOnFire(arg0: number)
        get "displayName()"(): net.minecraft.network.chat.Component
        get lootTable(): ResourceLocation
        get ticksUsingItem(): number
        get arrowCount(): number
        set xp(xp: number)
        get defaultMovementSpeed(): number
        get peacefulCreature(): boolean
        set onGround(arg0: boolean)
        get inventory(): Internal.Inventory
        get localPlayer(): boolean
        get firstTick(): boolean
        get lastHurtByMobTimestamp(): number
        get vehicle(): Internal.Entity
        get effectiveAi(): boolean
        get stringUuid(): string
        get lastSectionPos(): Internal.SectionPos
        set swimming(arg0: boolean)
        get mainArm(): Internal.HumanoidArm
        get rotationVector(): Internal.Vec2
        get hurtDir(): number
        get sprinting(): boolean
        get motionY(): number
        get offhandItem(): Internal.ItemStack
        get currentItemAttackStrengthDelay(): number
        get isInsidePortal(): boolean
        get lastHurtMob(): Internal.LivingEntity
        get addedToWorld(): boolean
        get ipAddress(): string
        get secondaryUseActive(): boolean
        get soundSource(): Internal.SoundSource
        get lastDamageSource(): Internal.DamageSource
        set noActionTime(arg0: number)
        set movementSpeedAddition(speed: number)
        get lastActionTime(): number
        get pose(): Internal.Pose
        set lastAttackedTicks(arg0: number)
        set z(z: number)
        get y(): number
        get blocking(): boolean
        get spawnLocation(): Internal.BlockContainerJS
        get score(): number
        get pushedByFluid(): boolean
        set spawnLocation(c: Internal.BlockContainerJS_)
        get armorCoverPercentage(): number
        get foodData(): Internal.FoodData
        get airSupply(): number
        get tabListFooter(): net.minecraft.network.chat.Component
        get player(): boolean
        get animal(): boolean
        get motionDirection(): Internal.Direction
        get fabricBalmData(): Internal.CompoundTag
        get commandSenderWorld(): Internal.Level
        get wardenSpawnTracker(): Internal.Optional<Internal.WardenSpawnTracker>
        get totalMovementSpeed(): number
        /**
         * Is the player currently in motion
        */
        get moving(): boolean
        get "inventory()"(): Internal.Inventory
        get craftingGrid(): Internal.InventoryKJS
        get attributes(): Internal.AttributeMap
        get creative(): boolean
        set magneticDeltaY(arg0: number)
        get swimming(): boolean
        set sprinting(arg0: boolean)
        set x(x: number)
        get portalWaitTime(): number
        get blockStateOn(): Internal.BlockState
        set sleepCounter(arg0: number)
        get fluidJumpThreshold(): number
        /**
         * Determines if a playerAnimator animation is currently playing
        */
        get playingAnimation(): boolean
        set airSupply(arg0: number)
        get onPos(): BlockPos
        get undead(): boolean
        get stepHeight(): number
        get sleeping(): boolean
        get language(): string
        get dismountPoses(): Internal.ImmutableList<Internal.Pose>
        get lastHurtMobTimestamp(): number
        set remainingFireTicks(arg0: number)
        /**
         * @deprecated
        */
        get onPosLegacy(): BlockPos
        set isMoving(b: boolean)
        set pos(arg0: Vec3d_)
        get mainHandItem(): Internal.ItemStack
        set silent(arg0: boolean)
        get swimSplashSound(): Internal.SoundEvent
        get activeEffects(): Internal.Collection<Internal.MobEffectInstance>
        get onPortalCooldown(): boolean
        set pitch(arg0: number)
        get multipartEntity(): boolean
        get parts(): Internal.PartEntity<any>[]
        get usingItem(): boolean
        get alwaysTicking(): boolean
        get forgePersistentData(): Internal.CompoundTag
        get hurt(): boolean
        set invulnerable(arg0: boolean)
        get inFluidType(): boolean
        set glowing(arg0: boolean)
        get advancements(): Internal.PlayerAdvancements
        get alive(): boolean
        get bbHeight(): number
        get forcedPose(): Internal.Pose
        get tags(): Internal.Set<string>
        get xpLevel(): number
        get lastAttacker(): Internal.LivingEntity
        get op(): boolean
        get percentFrozen(): number
        get blockReach(): number
        set portalCooldown(arg0: number)
        set possessedByWatcher(arg0: boolean)
        set position(block: Internal.BlockContainerJS_)
        get lastDeathLocation(): Internal.Optional<Internal.GlobalPos>
        set xpLevel(l: number)
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
        get respawnAngle(): number
        get passenger(): boolean
        get sensitiveToWater(): boolean
        get reducedDebugInfo(): boolean
        get feetArmorItem(): Internal.ItemStack
        get viewScale(): number
        get visualRotationYInDegrees(): number
        set speed(arg0: number)
        get discrete(): boolean
        get level(): Internal.Level
        get combatTracker(): Internal.CombatTracker
        set prevZ(d: number)
        get chestArmorItem(): Internal.ItemStack
        set tabListHeader(arg0: net.minecraft.network.chat.Component_)
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
        get prevMagneticAttachmentFace(): Internal.Direction
        get noActionTime(): number
        get visuallyCrawling(): boolean
        set comboCount(comboCount: number)
        set prevX(d: number)
        get lastHurtByMob(): Internal.LivingEntity
        get inWaterOrBubble(): boolean
        get portalCooldown(): number
        get item(): Internal.ItemStack
        set slowFallingFlag(arg0: boolean)
        get ignoringBlockTriggers(): boolean
        set creativeMode(mode: boolean)
        get eyeInFluidType(): Internal.FluidType
        get steppingCarefully(): boolean
        get inventoryChangeListener(): Internal.KubeJSInventoryListener
        /**
         * @deprecated
        */
        get lightLevelDependentMagicValue(): number
        get blockX(): number
        get fallFlying(): boolean
        get encodeId(): string
        get animationStack(): Internal.AnimationStack
        get nbt(): Internal.CompoundTag
        set invisible(arg0: boolean)
        get stages(): Internal.Stages
        set totalMovementSpeedMultiplier(speed: number)
        set health(arg0: number)
        get eyePosition(): Vec3d
        get eyeHeight(): number
        get luck(): number
        set discardFriction(arg0: boolean)
        get yaw(): number
        get possessedByWatcher(): boolean
        get usedItemHand(): Internal.InteractionHand
        set defaultMovementSpeed(speed: number)
        get respawnDimension(): Internal.ResourceKey<Internal.Level>
        get brain(): Internal.Brain<any>
        set customNameVisible(arg0: boolean)
        get controllingPassenger(): Internal.LivingEntity
        get scriptType(): Internal.ScriptType
        get forward(): Vec3d
        get comboCount(): number
        set feetArmorItem(item: Internal.ItemStack_)
        get id(): number
        get xpNeededForNextLevel(): number
        get eyeY(): number
        get scoreboard(): Internal.Scoreboard
        get prevY(): number
        get boundingBox(): Internal.AABB
        get inWaterOrRain(): boolean
        get saturation(): number
        get affectedByPotions(): boolean
        get addEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>
        get citadelEntityData(): Internal.CompoundTag
        get currentAttack(): Internal.AttackHand
        get team(): Internal.Team
        set ticksFrozen(arg0: number)
        get useItem(): Internal.ItemStack
        get myRidingOffset(): number
        get enchantmentSeed(): number
        get living(): boolean
        get x(): number
        get vehicle(): boolean
        set isInPowderSnow(arg0: boolean)
        set customName(arg0: net.minecraft.network.chat.Component_)
        get teamId(): string
        set stingerCount(arg0: number)
        get scoping(): boolean
        set foodLevel(foodLevel: number)
        get customNameVisible(): boolean
        set tabListFooter(arg0: net.minecraft.network.chat.Component_)
        get pistonPushReaction(): Internal.PushReaction
        get chatVisibility(): Internal.ChatVisiblity
        get lootTableSeed(): number
        get motionX(): number
        get entityData(): Internal.SynchedEntityData
        get shoulderEntityRight(): Internal.CompoundTag
        get potionEffects(): Internal.EntityPotionEffectsJS
        get openInventory(): Internal.AbstractContainerMenu
        get onRails(): boolean
        get stingerCount(): number
        get fallSounds(): Internal.LivingEntity$Fallsounds
        get dimensionChangingDelay(): number
        set yaw(arg0: number)
        get pickRadius(): number
        get removed(): boolean
        get jumpBoostPower(): number
        get camera(): Internal.Entity
        set shiftKeyDown(arg0: boolean)
        get passengers(): Internal.EntityArrayList
        get enderChestInventory(): Internal.PlayerEnderChestContainer
        get maxHeightFluidType(): Internal.FluidType
        get z(): number
        get sleepingLongEnough(): boolean
        get server(): Internal.MinecraftServer
        get experienceReward(): number
        get firstPassenger(): Internal.Entity
        get gameProfile(): Internal.GameProfile
        set lastHurtMob(arg0: Internal.Entity_)
        set lastHurtByMob(arg0: Internal.LivingEntity_)
        set fabricBalmData(arg0: Internal.CompoundTag_)
        get lookAngle(): Vec3d
        get data(): Internal.AttachedData<any>
        set arrowCount(arg0: number)
        get motionZ(): number
        get invisible(): boolean
        get bedOrientation(): Internal.Direction
        get profile(): Internal.GameProfile
        get deadOrDying(): boolean
        set headArmorItem(item: Internal.ItemStack_)
        set viewScale(arg0: number)
        set levelCallback(arg0: Internal.EntityInLevelCallback_)
        get offHandItem(): Internal.ItemStack
        get crouching(): boolean
        set y(y: number)
        get feetBlockState(): Internal.BlockState
        get sleepingPos(): Internal.Optional<BlockPos>
        get customName(): net.minecraft.network.chat.Component
        get class(): typeof any
        get visuallySwimming(): boolean
        get maxAirSupply(): number
        get foodLevel(): number
        set maxHealth(hp: number)
        get facing(): Internal.Direction
        set saturation(saturation: number)
        get boundingBoxForCulling(): Internal.AABB
        set magneticDeltaX(arg0: number)
        get nameTagOffsetY(): number
        get invulnerable(): boolean
        set cooldown(i: number)
        get inLava(): boolean
        get inWater(): boolean
        get xp(): number
        get rootVehicle(): Internal.Entity
        get noGravity(): boolean
        set mainArm(arg0: Internal.HumanoidArm_)
        get suffixes(): Internal.Collection<Internal.MutableComponent>
        set citadelEntityData(arg0: Internal.CompoundTag_)
        set magneticDeltaZ(arg0: number)
        get speed(): number
        get cachedFeetBlockState(): Internal.BlockState
        get inventory(): Internal.InventoryKJS
        get uuid(): Internal.UUID
        set offHandItem(item: Internal.ItemStack_)
        set score(arg0: number)
        get armorSlots(): Internal.Iterable<Internal.ItemStack>
        get headArmorItem(): Internal.ItemStack
        set camera(arg0: Internal.Entity_)
        get bbWidth(): number
        get lastAttackedTicks(): number
        get "name()"(): net.minecraft.network.chat.Component
        get fake(): boolean
        get chatSession(): Internal.RemoteChatSession
        get ticksRequiredToFreeze(): number
        set experienceLevels(arg0: number)
        set knockbackMultiplier_BetterCombat(value: number)
        get username(): string
        get pickable(): boolean
        set YHeadRot(arg0: number)
        get respawnForced(): boolean
        set jumping(arg0: boolean)
        get pickResult(): Internal.ItemStack
        set chatSession(arg0: Internal.RemoteChatSession_)
        get "mainHandItem()"(): Internal.ItemStack
        get absorptionAmount(): number
        get randomY(): number
        get displayName(): net.minecraft.network.chat.Component
        get mobType(): Internal.MobType
        set entityOnShoulder(arg0: Internal.CompoundTag_)
        set lastDeathLocation(arg0: Internal.Optional_<Internal.GlobalPos>)
        get statsCounter(): Internal.ServerStatsCounter
        get passengersRidingOffset(): number
        get selectedSlot(): number
        get frame(): boolean
        set legsArmorItem(item: Internal.ItemStack_)
        set noGravity(arg0: boolean)
        get useItemRemainingTicks(): number
        get indirectPassengers(): Internal.Iterable<any>
        get controlledByLocalInstance(): boolean
        get monster(): boolean
        get sleepTimer(): number
        get lastClimbablePos(): Internal.Optional<BlockPos>
        set id(arg0: number)
        get horizontalFacing(): Internal.Direction
        get type(): string
        set lastSectionPos(arg0: Internal.SectionPos_)
        set visualScale(arg0: number)
        set prevY(d: number)
        get activeEffectsMap(): Internal.Map<Internal.MobEffect, Internal.MobEffectInstance>
        get textFilter(): Internal.TextFilter
        get magneticAttachmentFace(): Internal.Direction
        get textFilteringEnabled(): boolean
        set motionX(x: number)
        get handSlots(): Internal.Iterable<Internal.ItemStack>
        get magneticDeltaY(): number
        get teamColor(): number
        set nbt(nbt: Internal.CompoundTag_)
        get prefixes(): Internal.Collection<Internal.MutableComponent>
        get cooldowns(): Internal.ItemCooldowns
        get invertedHealAndHarm(): boolean
        get mouseItem(): Internal.ItemStack
        get freezing(): boolean
        set sharedFlagOnFire(arg0: boolean)
        latency: number;
        containerCounter: number;
        wonGame: boolean;
        readonly gameMode: Internal.ServerPlayerGameMode;
        readonly server: Internal.MinecraftServer;
        connection: Internal.ServerGamePacketListenerImpl;
    }
    type ServerPlayer_ = ServerPlayer;
    interface OverlayInsertItem {
        abstract mayClientTake(): boolean;
        serverTrigger(arg0: Internal.ItemStack_, arg1: Internal.ServerPlayer_): void;
        sendInsertPacket(arg0: number, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.DrawerInteractToServer$Callback_, arg4: number): void;
        abstract attemptInsert(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.ServerPlayer_): void;
        abstract takeItem(arg0: Internal.ItemStack_, arg1: Internal.ServerPlayer_): Internal.ItemStack;
        abstract clientInsert(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: number, arg3: Internal.Slot_, arg4: boolean, arg5: number, arg6: Internal.DrawerInteractToServer$Callback_, arg7: number): boolean;
    }
    type OverlayInsertItem_ = OverlayInsertItem;
    interface IForgeFluidState {
        getAdjacentBlockPathType(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Mob_, arg3: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        canExtinguish(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        canHydrate(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: BlockPos_): boolean;
        move(arg0: Internal.LivingEntity_, arg1: Vec3d_, arg2: number): boolean;
        shouldUpdateWhileBoating(arg0: Internal.Boat_, arg1: Internal.Entity_): boolean;
        supportsBoating(arg0: Internal.Boat_): boolean;
        canConvertToSource(arg0: Internal.Level_, arg1: BlockPos_): boolean;
        getBlockPathType(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Mob_, arg3: boolean): Internal.BlockPathTypes;
        getFluidType(): Internal.FluidType;
        getExplosionResistance(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Explosion_): number;
        get fluidType(): Internal.FluidType
    }
    type IForgeFluidState_ = IForgeFluidState;
    class LargeCarvedTopNoBeardAdaptation extends Internal.EnhancedTerrainAdaptation {
        constructor()
        getClass(): typeof any;
        getKernelDistance(): number;
        type(): Internal.EnhancedTerrainAdaptationType<any>;
        toString(): string;
        getKernelSize(): number;
        getKernelRadius(): number;
        computeDensityFactor(arg0: number, arg1: number, arg2: number, arg3: number): number;
        notifyAll(): void;
        beards(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getKernel(): number[];
        hashCode(): number;
        carves(): boolean;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        get kernelDistance(): number
        get kernelSize(): number
        get kernelRadius(): number
        get kernel(): number[]
        static readonly CODEC: Internal.Codec<Internal.LargeCarvedTopNoBeardAdaptation>;
    }
    type LargeCarvedTopNoBeardAdaptation_ = LargeCarvedTopNoBeardAdaptation;
    class Structure$StructureSettings extends Internal.Record {
        constructor(biomes: Internal.HolderSet_<Internal.Biome>, spawnOverrides: Internal.Map_<Internal.MobCategory, Internal.StructureSpawnOverride>, step: Internal.GenerationStep$Decoration_, terrainAdaptation: Internal.TerrainAdjustment_)
        getClass(): typeof any;
        toString(): string;
        biomes(): Internal.HolderSet<Internal.Biome>;
        spawnOverrides(): Internal.Map<Internal.MobCategory, Internal.StructureSpawnOverride>;
        step(): Internal.GenerationStep$Decoration;
        notifyAll(): void;
        notify(): void;
        terrainAdaptation(): Internal.TerrainAdjustment;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        static readonly CODEC: Internal.MapCodec<Internal.Structure$StructureSettings>;
    }
    type Structure$StructureSettings_ = Structure$StructureSettings;
    class BookCloningRecipe extends Internal.CustomRecipe {
        constructor(arg0: ResourceLocation_, arg1: Internal.CraftingBookCategory_)
        getClass(): typeof any;
        getGroup(): string;
        getToastSymbol(): Internal.ItemStack;
        matches(arg0: Internal.CraftingContainer_, arg1: Internal.Level_): boolean;
        getSchema(): Internal.RecipeSchema;
        "assemble(net.minecraft.world.Container,net.minecraft.core.RegistryAccess)"(arg0: net.minecraft.world.Container_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        "matches(net.minecraft.world.inventory.CraftingContainer,net.minecraft.world.level.Level)"(arg0: Internal.CraftingContainer_, arg1: Internal.Level_): boolean;
        getRemainingItems(arg0: Internal.CraftingContainer_): Internal.NonNullList<Internal.ItemStack>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        assemble(arg0: Internal.CraftingContainer_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        category(): Internal.CraftingBookCategory;
        assemble(arg0: net.minecraft.world.Container_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        getSerializer(): Internal.RecipeSerializer<any>;
        getId(): ResourceLocation;
        matches(arg0: net.minecraft.world.Container_, arg1: Internal.Level_): boolean;
        getMod(): string;
        getIngredients(): Internal.NonNullList<Internal.Ingredient>;
        isSpecial(): boolean;
        hasOutput(match: Internal.ReplacementMatch_): boolean;
        getResultItem(arg0: Internal.RegistryAccess_): Internal.ItemStack;
        toString(): string;
        "getRemainingItems(net.minecraft.world.inventory.CraftingContainer)"(arg0: Internal.CraftingContainer_): Internal.NonNullList<Internal.ItemStack>;
        getRemainingItems(arg0: net.minecraft.world.Container_): Internal.NonNullList<any>;
        "assemble(net.minecraft.world.inventory.CraftingContainer,net.minecraft.core.RegistryAccess)"(arg0: Internal.CraftingContainer_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        notifyAll(): void;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        "matches(net.minecraft.world.Container,net.minecraft.world.level.Level)"(arg0: net.minecraft.world.Container_, arg1: Internal.Level_): boolean;
        showNotification(): boolean;
        replaceInput(match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): boolean;
        getType(): ResourceLocation;
        setGroup(group: string): void;
        hashCode(): number;
        "getRemainingItems(net.minecraft.world.Container)"(arg0: net.minecraft.world.Container_): Internal.NonNullList<any>;
        getOrCreateId(): ResourceLocation;
        hasInput(match: Internal.ReplacementMatch_): boolean;
        wait(): void;
        isIncomplete(): boolean;
        wait(arg0: number): void;
        replaceOutput(match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): boolean;
        equals(arg0: any): boolean;
        get class(): typeof any
        get group(): string
        get toastSymbol(): Internal.ItemStack
        get schema(): Internal.RecipeSchema
        get serializer(): Internal.RecipeSerializer<any>
        get id(): ResourceLocation
        get mod(): string
        get ingredients(): Internal.NonNullList<Internal.Ingredient>
        get special(): boolean
        get type(): ResourceLocation
        set group(group: string)
        get orCreateId(): ResourceLocation
        get incomplete(): boolean
    }
    type BookCloningRecipe_ = BookCloningRecipe;
    class InterModEnqueueEvent extends Internal.ParallelDispatchEvent {
        constructor()
        constructor(arg0: Internal.ModContainer_, arg1: Internal.ModLoadingStage_)
        getIMCStream(): Internal.Stream<Internal.InterModComms$IMCMessage>;
        setCanceled(arg0: boolean): void;
        getClass(): typeof any;
        setPhase(arg0: Internal.EventPriority_): void;
        isCanceled(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        "enqueueWork(java.util.function.Supplier)"<T>(arg0: Internal.Supplier_<T>): Internal.CompletableFuture<T>;
        getIMCStream(arg0: Internal.Predicate_<string>): Internal.Stream<Internal.InterModComms$IMCMessage>;
        isCancelable(): boolean;
        getListenerList(): Internal.ListenerList;
        description(): string;
        getResult(): Internal.Event$Result;
        toString(): string;
        enqueueWork<T>(arg0: Internal.Supplier_<T>): Internal.CompletableFuture<T>;
        notifyAll(): void;
        "enqueueWork(java.lang.Runnable)"(arg0: Internal.Runnable_): Internal.CompletableFuture<void>;
        hasResult(): boolean;
        setResult(arg0: Internal.Event$Result_): void;
        hashCode(): number;
        enqueueWork(arg0: Internal.Runnable_): Internal.CompletableFuture<void>;
        wait(): void;
        wait(arg0: number): void;
        getPhase(): Internal.EventPriority;
        equals(arg0: any): boolean;
        get IMCStream(): Internal.Stream<Internal.InterModComms$IMCMessage>
        set canceled(arg0: boolean)
        get class(): typeof any
        set phase(arg0: Internal.EventPriority_)
        get canceled(): boolean
        get cancelable(): boolean
        get listenerList(): Internal.ListenerList
        get result(): Internal.Event$Result
        set result(arg0: Internal.Event$Result_)
        get phase(): Internal.EventPriority
    }
    type InterModEnqueueEvent_ = InterModEnqueueEvent;
    interface KSerializer <T> extends Internal.DeserializationStrategy<T>, Internal.SerializationStrategy<T> {
        abstract getDescriptor(): Internal.SerialDescriptor;
        abstract deserialize(arg0: Internal.Decoder_): T;
        abstract serialize(arg0: kotlinx.serialization.encoding.Encoder_, arg1: T): void;
        get descriptor(): Internal.SerialDescriptor
    }
    type KSerializer_<T> = KSerializer<T>;
    class RingBufferAdmin implements Internal.RingBufferAdminMBean {
        getClass(): typeof any;
        hashCode(): number;
        abstract getBufferSize(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        abstract getRemainingCapacity(): number;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        get bufferSize(): number
        get remainingCapacity(): number
    }
    type RingBufferAdmin_ = RingBufferAdmin;
    class AbuseReport {
        constructor(arg0: string, arg1: string, arg2: Internal.ReportEvidence_, arg3: Internal.ReportedEntity_, arg4: Internal.Instant_)
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
        createdTime: Internal.Instant;
        reportedEntity: Internal.ReportedEntity;
        opinionComments: string;
        evidence: Internal.ReportEvidence;
        reason: string;
    }
    type AbuseReport_ = AbuseReport;
    class EntityPotionEffectsJS {
        constructor(e: Internal.LivingEntity_)
        getClass(): typeof any;
        toString(): string;
        add(mobEffect: Internal.MobEffect_, duration: number, amplifier: number, ambient: boolean, showParticles: boolean): void;
        add(mobEffect: Internal.MobEffect_, duration: number): void;
        notifyAll(): void;
        isActive(mobEffect: Internal.MobEffect_): boolean;
        add(mobEffect: Internal.MobEffect_, duration: number, amplifier: number): void;
        getMap(): Internal.Map<Internal.MobEffect, Internal.MobEffectInstance>;
        notify(): void;
        isApplicable(effect: Internal.MobEffectInstance_): boolean;
        wait(arg0: number, arg1: number): void;
        add(mobEffect: Internal.MobEffect_): void;
        getActive(mobEffect: Internal.MobEffect_): Internal.MobEffectInstance;
        hashCode(): number;
        wait(): void;
        clear(): void;
        wait(arg0: number): void;
        getActive(): Internal.Collection<Internal.MobEffectInstance>;
        equals(arg0: any): boolean;
        getDuration(mobEffect: Internal.MobEffect_): number;
        get class(): typeof any
        get map(): Internal.Map<Internal.MobEffect, Internal.MobEffectInstance>
        get active(): Internal.Collection<Internal.MobEffectInstance>
    }
    type EntityPotionEffectsJS_ = EntityPotionEffectsJS;
    class FillInBubblesWithWaterFeature extends Feature<Internal.NoneFeatureConfiguration> {
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
    type FillInBubblesWithWaterFeature_ = FillInBubblesWithWaterFeature;
    class MappingRecipeComponent <T> implements Internal.RecipeComponentWithParent<T> {
        constructor(parent: Internal.RecipeComponent_<T>, mappingTo: Internal.UnaryOperator_<any>, mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>)
        getClass(): typeof any;
        and<O>(other: Internal.RecipeComponent_<O>): Internal.AndRecipeComponent<T, O>;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read
        */
        mapIn(mappingTo: Internal.UnaryOperator_<any>): this;
        parentComponent(): Internal.RecipeComponent<T>;
        isOutput(recipe: Internal.RecipeJS_, value: T, match: Internal.ReplacementMatch_): boolean;
        key(name: string): Internal.RecipeKey<T>;
        read(recipe: Internal.RecipeJS_, from: any): T;
        orSelf(): Internal.RecipeComponent<T>;
        checkEmpty(key: Internal.RecipeKey_<T>, value: T): string;
        role(): Internal.ComponentRole;
        notify(): void;
        componentClass(): typeof any;
        wait(arg0: number, arg1: number): void;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read, and the mappingFrom function after the component writes to json, before that json is saved
        */
        map(mappingTo: Internal.UnaryOperator_<any>, mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): this;
        replaceInput(recipe: Internal.RecipeJS_, original: T, match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): T;
        checkValueHasChanged(oldValue: T, newValue: T): boolean;
        readFromJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<T>, json: Internal.JsonObject_): void;
        constructorDescription(ctx: Internal.DescriptionContext_): Internal.TypeDescJS;
        componentType(): string;
        static builder(): Internal.RecipeComponentBuilder;
        toString(): string;
        hasPriority(recipe: Internal.RecipeJS_, from: any): boolean;
        replaceOutput(recipe: Internal.RecipeJS_, original: T, match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): T;
        notifyAll(): void;
        /**
         * Returns a new RecipeComponent that maps the keys in a JsonObject according to the provided map, both before the json gets passed to the component and after the component returns a written json object.
         * The mappings should be provided in the format `{recipe: "component"}` where recipe is the key as in the recipe, and component is the key as how the RecipeComponent expects it.
         * Any keys not included in the provided map will be ignored, and any keys in the provided map that are not in either the input object or output object will be ignored.
         * Note that if the input or output is not a JsonObject (ie its an ItemStack, or it is a JsonPrimitive) then that will pass through this without being modified.
         * If you wish to handle those situations use the actual map function
        */
        simpleMap(mappings: any): Internal.SimpleMappingRecipeComponent<T>;
        asArrayOrSelf(): Internal.ArrayRecipeComponent<T>;
        isInput(recipe: Internal.RecipeJS_, value: T, match: Internal.ReplacementMatch_): boolean;
        static builder(...key: Internal.RecipeKey_<any>[]): Internal.RecipeComponentBuilder;
        /**
         * Returns a new RecipeComponent that applies the mappingFrom function after the component writes to json, before that json is saved
        */
        mapOut(mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): this;
        asMap<K>(key: Internal.RecipeComponent_<K>): Internal.RecipeComponent<Internal.TinyMap<K, T>>;
        asArray(): Internal.ArrayRecipeComponent<T>;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        asPatternKey(): Internal.RecipeComponent<Internal.TinyMap<string, T>>;
        write(recipe: Internal.RecipeJS_, value: T): Internal.JsonElement;
        writeToJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<T>, json: Internal.JsonObject_): void;
        readFromMap(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<T>, map: Internal.Map_<any, any>): void;
        equals(arg0: any): boolean;
        or<O>(other: Internal.RecipeComponent_<O>): Internal.OrRecipeComponent<T, O>;
        get class(): typeof any
    }
    type MappingRecipeComponent_<T> = MappingRecipeComponent<T>;
    class ScreenEvent$Init$Post extends Internal.ScreenEvent$Init {
        constructor()
        constructor(arg0: Internal.Screen_, arg1: Internal.List_<Internal.GuiEventListener>, arg2: Internal.Consumer_<Internal.GuiEventListener>, arg3: Internal.Consumer_<Internal.GuiEventListener>)
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
        getListenersList(): Internal.List<Internal.GuiEventListener>;
        isCancelable(): boolean;
        removeListener(arg0: Internal.GuiEventListener_): void;
        wait(): void;
        getListenerList(): Internal.ListenerList;
        addListener(arg0: Internal.GuiEventListener_): void;
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
        get listenersList(): Internal.List<Internal.GuiEventListener>
        get cancelable(): boolean
        get listenerList(): Internal.ListenerList
        get phase(): Internal.EventPriority
    }
    type ScreenEvent$Init$Post_ = ScreenEvent$Init$Post;
    class ScriptType extends Internal.Enum<Internal.ScriptType> implements Internal.ScriptTypePredicate, Internal.ScriptTypeHolder {
        getValidTypes(): Internal.List<Internal.ScriptType>;
        getClass(): typeof any;
        compareTo(arg0: Internal.ScriptType_): number;
        isStartup(): boolean;
        or(arg0: Internal.Predicate_<Internal.ScriptType>): Internal.Predicate<Internal.ScriptType>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        static isEqual<T>(arg0: any): Internal.Predicate<T>;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.ScriptType>>;
        kjs$getScriptType(): this;
        test(arg0: any): boolean;
        getLogFile(): Internal.Path;
        isServer(): boolean;
        "test(java.lang.Object)"(arg0: any): boolean;
        "test(dev.latvian.mods.kubejs.script.ScriptType)"(type: Internal.ScriptType_): boolean;
        "compareTo(dev.latvian.mods.kubejs.script.ScriptType)"(arg0: Internal.ScriptType_): number;
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        and(arg0: Internal.Predicate_<Internal.ScriptType>): Internal.Predicate<Internal.ScriptType>;
        static not<T>(arg0: Internal.Predicate_<T>): Internal.Predicate<T>;
        test(type: Internal.ScriptType_): boolean;
        isClient(): boolean;
        static valueOf(name: string): Internal.ScriptType;
        negate(): Internal.Predicate<any>;
        toString(): string;
        notifyAll(): void;
        name(): string;
        hashCode(): number;
        static getCurrent(cx: Internal.Context_): Internal.ScriptType;
        ordinal(): number;
        wait(): void;
        getDeclaringClass(): typeof Internal.ScriptType;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        static values(): Internal.ScriptType[];
        get validTypes(): Internal.List<Internal.ScriptType>
        get class(): typeof any
        get startup(): boolean
        get logFile(): Internal.Path
        get server(): boolean
        get client(): boolean
        get declaringClass(): typeof Internal.ScriptType
        readonly name: string;
        static readonly VALUES: Internal.ScriptType[];
        readonly nameStrip: string;
        static readonly STARTUP: (Internal.ScriptType) & (Internal.ScriptType);
        readonly console: Internal.ConsoleJS;
        readonly path: Internal.Path;
        static readonly SERVER: (Internal.ScriptType) & (Internal.ScriptType);
        static readonly CLIENT: (Internal.ScriptType) & (Internal.ScriptType);
    }
    type ScriptType_ = ScriptType | "startup" | "server" | "client";
    class PermissionType <T> {
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        typeToken(): T;
        equals(arg0: any): boolean;
        typeName(): string;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
    }
    type PermissionType_<T> = PermissionType<T>;
    class Conditional {
        constructor()
        constructor(arg0: string, arg1: Internal.Conditional_)
        constructor(arg0: string, ...arg1: Internal.ChatFormatting_[])
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        toStringTextComponent(): Internal.MutableComponent;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        static readonly belowLooting: (Internal.Conditional) & (Internal.Conditional);
        static readonly rareDrop: (Internal.Conditional) & (Internal.Conditional);
        static readonly slimeBall: (Internal.Conditional) & (Internal.Conditional);
        static readonly raining: (Internal.Conditional) & (Internal.Conditional);
        static readonly thundering: (Internal.Conditional) & (Internal.Conditional);
        static readonly gameDifficulty: (Internal.Conditional) & (Internal.Conditional);
        static readonly notPlayerKill: (Internal.Conditional) & (Internal.Conditional);
        static readonly dry: (Internal.Conditional) & (Internal.Conditional);
        static readonly notMoonPhase: (Internal.Conditional) & (Internal.Conditional);
        static readonly beforeWorldTime: (Internal.Conditional) & (Internal.Conditional);
        static readonly pastWorldDifficulty: (Internal.Conditional) & (Internal.Conditional);
        static readonly equipmentDrop: (Internal.Conditional) & (Internal.Conditional);
        static readonly inBiome: (Internal.Conditional) & (Internal.Conditional);
        static readonly onBlock: (Internal.Conditional) & (Internal.Conditional);
        static readonly moonPhase: (Internal.Conditional) & (Internal.Conditional);
        static readonly pastWorldTime: (Internal.Conditional) & (Internal.Conditional);
        static readonly hasPotion: (Internal.Conditional) & (Internal.Conditional);
        static readonly beforeTime: (Internal.Conditional) & (Internal.Conditional);
        static readonly reverse: ({[key: Internal.Conditional]: Internal.Conditional, [key: Internal.Conditional]: Internal.Conditional, [key: Internal.Conditional]: Internal.Conditional, [key: Internal.Conditional]: Internal.Conditional, [key: Internal.Conditional]: Internal.Conditional, [key: Internal.Conditional]: Internal.Conditional, [key: Internal.Conditional]: Internal.Conditional, [key: Internal.Conditional]: Internal.Conditional, [key: Internal.Conditional]: Internal.Conditional, [key: Internal.Conditional]: Internal.Conditional, [key: Internal.Conditional]: Internal.Conditional, [key: Internal.Conditional]: Internal.Conditional, [key: Internal.Conditional]: Internal.Conditional, [key: Internal.Conditional]: Internal.Conditional, [key: Internal.Conditional]: Internal.Conditional, [key: Internal.Conditional]: Internal.Conditional, [key: Internal.Conditional]: Internal.Conditional, [key: Internal.Conditional]: Internal.Conditional, [key: Internal.Conditional]: Internal.Conditional, [key: Internal.Conditional]: Internal.Conditional, [key: Internal.Conditional]: Internal.Conditional, [key: Internal.Conditional]: Internal.Conditional, [key: Internal.Conditional]: Internal.Conditional, [key: Internal.Conditional]: Internal.Conditional, [key: Internal.Conditional]: Internal.Conditional, [key: Internal.Conditional]: Internal.Conditional, [key: Internal.Conditional]: Internal.Conditional, [key: Internal.Conditional]: Internal.Conditional, [key: Internal.Conditional]: Internal.Conditional, [key: Internal.Conditional]: Internal.Conditional, [key: Internal.Conditional]: Internal.Conditional, [key: Internal.Conditional]: Internal.Conditional, [key: Internal.Conditional]: Internal.Conditional, [key: Internal.Conditional]: Internal.Conditional, [key: Internal.Conditional]: Internal.Conditional, [key: Internal.Conditional]: Internal.Conditional, [key: Internal.Conditional]: Internal.Conditional, [key: Internal.Conditional]: Internal.Conditional}) & (Internal.Map<Internal.Conditional, Internal.Conditional>);
        static readonly beforeWorldDifficulty: (Internal.Conditional) & (Internal.Conditional);
        static readonly playerOnline: (Internal.Conditional) & (Internal.Conditional);
        static readonly affectedByLooting: (Internal.Conditional) & (Internal.Conditional);
        static readonly notInBiome: (Internal.Conditional) & (Internal.Conditional);
        static readonly killedBy: (Internal.Conditional) & (Internal.Conditional);
        static readonly playerOffline: (Internal.Conditional) & (Internal.Conditional);
        static readonly notThundering: (Internal.Conditional) & (Internal.Conditional);
        static readonly pastTime: (Internal.Conditional) & (Internal.Conditional);
        static readonly affectedByFortune: (Internal.Conditional) & (Internal.Conditional);
        static readonly notBurning: (Internal.Conditional) & (Internal.Conditional);
        static readonly notWet: (Internal.Conditional) & (Internal.Conditional);
        static readonly notGameDifficulty: (Internal.Conditional) & (Internal.Conditional);
        static readonly above: (Internal.Conditional) & (Internal.Conditional);
        static readonly silkTouch: (Internal.Conditional) & (Internal.Conditional);
        static readonly below: (Internal.Conditional) & (Internal.Conditional);
        static readonly beyond: (Internal.Conditional) & (Internal.Conditional);
        static readonly magmaCream: (Internal.Conditional) & (Internal.Conditional);
        static readonly powered: (Internal.Conditional) & (Internal.Conditional);
        static readonly inDimension: (Internal.Conditional) & (Internal.Conditional);
        static readonly nearer: (Internal.Conditional) & (Internal.Conditional);
        static readonly burning: (Internal.Conditional) & (Internal.Conditional);
        static readonly notKilledBy: (Internal.Conditional) & (Internal.Conditional);
        static readonly hasNoPotion: (Internal.Conditional) & (Internal.Conditional);
        static readonly wet: (Internal.Conditional) & (Internal.Conditional);
        static readonly notOnBlock: (Internal.Conditional) & (Internal.Conditional);
        static readonly notInDimension: (Internal.Conditional) & (Internal.Conditional);
        static readonly aboveLooting: (Internal.Conditional) & (Internal.Conditional);
        static readonly playerKill: (Internal.Conditional) & (Internal.Conditional);
    }
    type Conditional_ = Conditional;
    class ServerFunctionLibrary implements Internal.PreparableReloadListener {
        constructor(arg0: number, arg1: Internal.CommandDispatcher_<Internal.CommandSourceStack>)
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        getFunctions(): Internal.Map<ResourceLocation, Internal.CommandFunction>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getAvailableTags(): Internal.Iterable<ResourceLocation>;
        getTag(arg0: ResourceLocation_): Internal.Collection<Internal.CommandFunction>;
        hashCode(): number;
        wait(): void;
        getName(): string;
        getFunction(arg0: ResourceLocation_): Internal.Optional<Internal.CommandFunction>;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        reload(arg0: Internal.PreparableReloadListener$PreparationBarrier_, arg1: Internal.ResourceManager_, arg2: Internal.ProfilerFiller_, arg3: Internal.ProfilerFiller_, arg4: Internal.Executor_, arg5: Internal.Executor_): Internal.CompletableFuture<void>;
        get class(): typeof any
        get functions(): Internal.Map<ResourceLocation, Internal.CommandFunction>
        get availableTags(): Internal.Iterable<ResourceLocation>
        get name(): string
    }
    type ServerFunctionLibrary_ = ServerFunctionLibrary;
    class Vector4i implements Internal.Cloneable, Internal.Vector4ic, Internal.Externalizable {
        constructor()
        constructor(arg0: Internal.Vector4dc_, arg1: number)
        constructor(arg0: number, arg1: number, arg2: number, arg3: number)
        constructor(arg0: Internal.ByteBuffer_)
        constructor(arg0: number)
        constructor(arg0: number[])
        constructor(arg0: number, arg1: Internal.ByteBuffer_)
        constructor(arg0: Internal.Vector3fc_, arg1: number, arg2: number)
        constructor(arg0: number, arg1: Internal.IntBuffer_)
        constructor(arg0: Internal.IntBuffer_)
        constructor(arg0: Internal.Vector2ic_, arg1: number, arg2: number)
        constructor(arg0: Internal.Vector4fc_, arg1: number)
        constructor(arg0: Internal.Vector3ic_, arg1: number)
        constructor(arg0: Internal.Vector4ic_)
        set(arg0: number, arg1: Internal.IntBuffer_): this;
        x(): number;
        set(arg0: number, arg1: number, arg2: number, arg3: number): this;
        div(arg0: number, arg1: Internal.Vector4i_): this;
        set(arg0: number): this;
        get(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        distance(arg0: Internal.Vector4ic_): number;
        set(arg0: Internal.Vector4ic_): this;
        "set(java.nio.IntBuffer)"(arg0: Internal.IntBuffer_): this;
        "div(float,org.joml.Vector4i)"(arg0: number, arg1: Internal.Vector4i_): this;
        get(arg0: number, arg1: Internal.IntBuffer_): Internal.IntBuffer;
        max(arg0: Internal.Vector4ic_): this;
        "div(org.joml.Vector4ic,org.joml.Vector4i)"(arg0: Internal.Vector4ic_, arg1: Internal.Vector4i_): this;
        toString(arg0: Internal.NumberFormat_): string;
        set(arg0: Internal.Vector4dc_, arg1: number): this;
        "get(int,java.nio.ByteBuffer)"(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        "get(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        distance(arg0: number, arg1: number, arg2: number, arg3: number): number;
        set(arg0: number, arg1: Internal.ByteBuffer_): this;
        "set(int,java.nio.IntBuffer)"(arg0: number, arg1: Internal.IntBuffer_): this;
        add(arg0: Internal.Vector4ic_, arg1: Internal.Vector4i_): this;
        clone(): any;
        w(): number;
        getClass(): typeof any;
        "set(int[])"(arg0: number[]): this;
        "set(org.joml.Vector4ic)"(arg0: Internal.Vector4ic_): this;
        static distance(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): number;
        writeExternal(arg0: Internal.ObjectOutput_): void;
        setComponent(arg0: number, arg1: number): this;
        maxComponent(): number;
        gridDistance(arg0: Internal.Vector4ic_): number;
        set(arg0: number[]): this;
        div(arg0: number): this;
        "div(int)"(arg0: number): this;
        max(arg0: Internal.Vector4ic_, arg1: Internal.Vector4i_): this;
        add(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Vector4i_): this;
        sub(arg0: Internal.Vector4ic_, arg1: Internal.Vector4i_): this;
        "set(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): this;
        mul(arg0: number): this;
        dot(arg0: Internal.Vector4ic_): number;
        sub(arg0: number, arg1: number, arg2: number, arg3: number): this;
        negate(): this;
        toString(): string;
        notifyAll(): void;
        set(arg0: Internal.Vector3ic_, arg1: number): this;
        sub(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Vector4i_): this;
        wait(arg0: number): void;
        "set(org.joml.Vector4dc,int)"(arg0: Internal.Vector4dc_, arg1: number): this;
        get(arg0: number): number;
        "get(int)"(arg0: number): number;
        add(arg0: Internal.Vector4ic_): this;
        "mul(org.joml.Vector4ic,org.joml.Vector4i)"(arg0: Internal.Vector4ic_, arg1: Internal.Vector4i_): this;
        add(arg0: number, arg1: number, arg2: number, arg3: number): this;
        z(): number;
        mul(arg0: Internal.Vector4ic_, arg1: Internal.Vector4i_): this;
        set(arg0: Internal.IntBuffer_): this;
        notify(): void;
        absolute(): this;
        "set(org.joml.Vector4fc,int)"(arg0: Internal.Vector4fc_, arg1: number): this;
        static lengthSquared(arg0: number, arg1: number, arg2: number, arg3: number): number;
        div(arg0: Internal.Vector4ic_, arg1: Internal.Vector4i_): this;
        setFromAddress(arg0: number): this;
        div(arg0: number): this;
        min(arg0: Internal.Vector4ic_, arg1: Internal.Vector4i_): this;
        set(arg0: Internal.ByteBuffer_): this;
        readExternal(arg0: Internal.ObjectInput_): void;
        "get(java.nio.IntBuffer)"(arg0: Internal.IntBuffer_): Internal.IntBuffer;
        distanceSquared(arg0: number, arg1: number, arg2: number, arg3: number): number;
        lengthSquared(): number;
        wait(): void;
        length(): number;
        get(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        "set(org.joml.Vector3ic,int)"(arg0: Internal.Vector3ic_, arg1: number): this;
        min(arg0: Internal.Vector4ic_): this;
        minComponent(): number;
        distanceSquared(arg0: Internal.Vector4ic_): number;
        zero(): this;
        absolute(arg0: Internal.Vector4i_): this;
        div(arg0: Internal.Vector4ic_): this;
        y(): number;
        set(arg0: Internal.Vector4dc_): this;
        static distanceSquared(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): number;
        mul(arg0: Internal.Vector4ic_): this;
        wait(arg0: number, arg1: number): void;
        get(arg0: Internal.IntBuffer_): Internal.IntBuffer;
        static length(arg0: number, arg1: number, arg2: number, arg3: number): number;
        "mul(int,org.joml.Vector4i)"(arg0: number, arg1: Internal.Vector4i_): this;
        "mul(org.joml.Vector4ic)"(arg0: Internal.Vector4ic_): this;
        "mul(int)"(arg0: number): this;
        gridDistance(arg0: number, arg1: number, arg2: number, arg3: number): number;
        set(arg0: Internal.Vector2ic_, arg1: number, arg2: number): this;
        equals(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        "set(int)"(arg0: number): this;
        "div(org.joml.Vector4ic)"(arg0: Internal.Vector4ic_): this;
        div(arg0: number, arg1: Internal.Vector4i_): this;
        mul(arg0: number, arg1: Internal.Vector4i_): this;
        negate(arg0: Internal.Vector4i_): this;
        "get(int,java.nio.IntBuffer)"(arg0: number, arg1: Internal.IntBuffer_): Internal.IntBuffer;
        "div(float)"(arg0: number): this;
        "div(int,org.joml.Vector4i)"(arg0: number, arg1: Internal.Vector4i_): this;
        getToAddress(arg0: number): Internal.Vector4ic;
        hashCode(): number;
        "set(int,java.nio.ByteBuffer)"(arg0: number, arg1: Internal.ByteBuffer_): this;
        equals(arg0: any): boolean;
        sub(arg0: Internal.Vector4ic_): this;
        "set(org.joml.Vector4dc)"(arg0: Internal.Vector4dc_): this;
        set(arg0: Internal.Vector4fc_, arg1: number): this;
        set "(java.nio.IntBuffer)"(arg0: Internal.IntBuffer_)
        get class(): typeof any
        set "(int[])"(arg0: number[])
        set "(org.joml.Vector4ic)"(arg0: Internal.Vector4ic_)
        set "(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_)
        set fromAddress(arg0: number)
        set "(int)"(arg0: number)
        set "(org.joml.Vector4dc)"(arg0: Internal.Vector4dc_)
        z: number;
        x: number;
        y: number;
        w: number;
    }
    type Vector4i_ = Vector4i;
    class BlockComponent extends Internal.Record implements Internal.RecipeComponent<Internal.Block> {
        constructor(crole: Internal.ComponentRole_)
        readFromJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<Internal.Block>, json: Internal.JsonObject_): void;
        or<O>(other: Internal.RecipeComponent_<O>): Internal.OrRecipeComponent<Internal.Block, O>;
        notify(): void;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read
        */
        mapIn(mappingTo: Internal.UnaryOperator_<any>): Internal.MappingRecipeComponent<Internal.Block>;
        key(name: string): Internal.RecipeKey<Internal.Block>;
        /**
         * Returns a new RecipeComponent that applies the mappingFrom function after the component writes to json, before that json is saved
        */
        mapOut(mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): Internal.MappingRecipeComponent<Internal.Block>;
        checkEmpty(arg0: Internal.RecipeKey_<any>, arg1: any): string;
        checkEmpty(key: Internal.RecipeKey_<Internal.Block>, value: Internal.Block_): string;
        "isOutput(dev.latvian.mods.kubejs.recipe.RecipeJS,java.lang.Object,dev.latvian.mods.kubejs.recipe.ReplacementMatch)"(arg0: Internal.RecipeJS_, arg1: any, arg2: Internal.ReplacementMatch_): boolean;
        writeToJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<Internal.Block>, json: Internal.JsonObject_): void;
        readFromMap(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<Internal.Block>, map: Internal.Map_<any, any>): void;
        "isOutput(dev.latvian.mods.kubejs.recipe.RecipeJS,net.minecraft.world.level.block.Block,dev.latvian.mods.kubejs.recipe.ReplacementMatch)"(recipe: Internal.RecipeJS_, value: Internal.Block_, match: Internal.ReplacementMatch_): boolean;
        hasPriority(recipe: Internal.RecipeJS_, from: any): boolean;
        crole(): Internal.ComponentRole;
        checkValueHasChanged(oldValue: Internal.Block_, newValue: Internal.Block_): boolean;
        asPatternKey(): Internal.RecipeComponent<Internal.TinyMap<string, Internal.Block>>;
        write(recipe: Internal.RecipeJS_, value: Internal.Block_): Internal.JsonPrimitive;
        "checkEmpty(dev.latvian.mods.kubejs.recipe.RecipeKey,net.minecraft.world.level.block.Block)"(key: Internal.RecipeKey_<Internal.Block>, value: Internal.Block_): string;
        wait(): void;
        "write(dev.latvian.mods.kubejs.recipe.RecipeJS,java.lang.Object)"(arg0: Internal.RecipeJS_, arg1: any): Internal.JsonElement;
        read(recipe: Internal.RecipeJS_, from: any): Internal.Block;
        replaceOutput(recipe: Internal.RecipeJS_, original: Internal.Block_, match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): Internal.Block;
        isInput(arg0: Internal.RecipeJS_, arg1: any, arg2: Internal.ReplacementMatch_): boolean;
        asArray(): Internal.ArrayRecipeComponent<Internal.Block>;
        getClass(): typeof any;
        asMap<K>(key: Internal.RecipeComponent_<K>): Internal.RecipeComponent<Internal.TinyMap<K, Internal.Block>>;
        write(arg0: Internal.RecipeJS_, arg1: any): Internal.JsonElement;
        isInput(recipe: Internal.RecipeJS_, value: Internal.Block_, match: Internal.ReplacementMatch_): boolean;
        role(): Internal.ComponentRole;
        componentClass(): typeof any;
        wait(arg0: number, arg1: number): void;
        replaceInput(recipe: Internal.RecipeJS_, original: Internal.Block_, match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): Internal.Block;
        "write(dev.latvian.mods.kubejs.recipe.RecipeJS,net.minecraft.world.level.block.Block)"(recipe: Internal.RecipeJS_, value: Internal.Block_): Internal.JsonPrimitive;
        "isInput(dev.latvian.mods.kubejs.recipe.RecipeJS,net.minecraft.world.level.block.Block,dev.latvian.mods.kubejs.recipe.ReplacementMatch)"(recipe: Internal.RecipeJS_, value: Internal.Block_, match: Internal.ReplacementMatch_): boolean;
        constructorDescription(ctx: Internal.DescriptionContext_): Internal.TypeDescJS;
        orSelf(): Internal.RecipeComponent<Internal.Block>;
        componentType(): string;
        static builder(): Internal.RecipeComponentBuilder;
        toString(): string;
        asArrayOrSelf(): Internal.ArrayRecipeComponent<Internal.Block>;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read, and the mappingFrom function after the component writes to json, before that json is saved
        */
        map(mappingTo: Internal.UnaryOperator_<any>, mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): Internal.MappingRecipeComponent<Internal.Block>;
        notifyAll(): void;
        /**
         * Returns a new RecipeComponent that maps the keys in a JsonObject according to the provided map, both before the json gets passed to the component and after the component returns a written json object.
         * The mappings should be provided in the format `{recipe: "component"}` where recipe is the key as in the recipe, and component is the key as how the RecipeComponent expects it.
         * Any keys not included in the provided map will be ignored, and any keys in the provided map that are not in either the input object or output object will be ignored.
         * Note that if the input or output is not a JsonObject (ie its an ItemStack, or it is a JsonPrimitive) then that will pass through this without being modified.
         * If you wish to handle those situations use the actual map function
        */
        simpleMap(mappings: any): Internal.SimpleMappingRecipeComponent<Internal.Block>;
        static builder(...key: Internal.RecipeKey_<any>[]): Internal.RecipeComponentBuilder;
        "checkEmpty(dev.latvian.mods.kubejs.recipe.RecipeKey,java.lang.Object)"(arg0: Internal.RecipeKey_<any>, arg1: any): string;
        isOutput(arg0: Internal.RecipeJS_, arg1: any, arg2: Internal.ReplacementMatch_): boolean;
        hashCode(): number;
        "isInput(dev.latvian.mods.kubejs.recipe.RecipeJS,java.lang.Object,dev.latvian.mods.kubejs.recipe.ReplacementMatch)"(arg0: Internal.RecipeJS_, arg1: any, arg2: Internal.ReplacementMatch_): boolean;
        isOutput(recipe: Internal.RecipeJS_, value: Internal.Block_, match: Internal.ReplacementMatch_): boolean;
        and<O>(other: Internal.RecipeComponent_<O>): Internal.AndRecipeComponent<Internal.Block, O>;
        wait(arg0: number): void;
        equals(o: any): boolean;
        get class(): typeof any
        static readonly OUTPUT: (Internal.BlockComponent) & (Internal.RecipeComponent<Internal.Block>);
        static readonly INPUT: (Internal.BlockComponent) & (Internal.RecipeComponent<Internal.Block>);
        static readonly BLOCK: (Internal.BlockComponent) & (Internal.RecipeComponent<Internal.Block>);
    }
    type BlockComponent_ = BlockComponent;
    class ItemScythe extends Internal.ItemStaff {
        constructor(arg0: number)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        static castSpellOnChannelTick(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number, arg3: Internal.BiPredicate_<Internal.Player, Internal.ItemStack>): void;
        requiresModifierKey(): boolean;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        moonlight$addAdditionalBehavior(placementOverride: Internal.AdditionalItemPlacement_): void;
        isChargeSpell(arg0: Internal.ItemStack_): boolean;
        isFireResistant(): boolean;
        containsSpell(arg0: Internal.ItemStack_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        moonlight$getClientAnimationExtension(): any;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getTypeData(): Internal.CompoundTag;
        getDefaultInstance(): Internal.ItemStack;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getSpellCompound(arg0: Internal.ItemStack_, arg1: Internal.Player_): Internal.CompoundTag;
        setMaxStackSize(arg0: number): void;
        getBarWidth(arg0: Internal.ItemStack_): number;
        canAcceptSpell(arg0: Internal.ItemStack_): boolean;
        setMaxDamage(arg0: number): void;
        getBarColor(arg0: Internal.ItemStack_): number;
        getItem(): Internal.Item;
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
        static setCustomIcon(arg0: Internal.ItemStack_, arg1: number): void;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        attachCapability(capabilityBuilder: Internal.CapabilityBuilder_<any, any, any>): void;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        static castSpellOnRightClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: Internal.InteractionHand_, arg4: Internal.Function_<Internal.ItemStack, boolean>): Internal.InteractionResult;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        getTier(arg0: Internal.Level_, arg1: Internal.ItemStack_): number;
        canAcceptSpell(arg0: Internal.ItemStack_, arg1: Internal.ISpellDefinition_): boolean;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
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
        getProvider(arg0: Internal.ItemStack_): Internal.MenuProvider;
        getCachedTier(): number;
        handler$dpg000$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vec3f;
        addItemWithGuiTooltip(arg0: Internal.ItemStack_): boolean;
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
        setTranscribedSpell(arg0: Internal.ItemStack_): void;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
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
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isComplex(): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: Internal.DamageSource_): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        getDescriptionId(): string;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setSpell(arg0: Internal.ItemStack_, arg1: Internal.ISpellDefinition_): Internal.ItemStack;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        fillByteBuffer(arg0: Internal.FriendlyByteBuf_): void;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        static buildRandomSpellStaff(arg0: number, arg1: number, arg2: boolean, arg3: Internal.ServerLevel_): Internal.ItemStack;
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
        openGuiIfModifierPressed(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Level_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        notify(): void;
        static createWTFBoomStack(): Internal.ItemStack;
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
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getSpell(arg0: Internal.ItemStack_): Internal.ISpellDefinition;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        static castSpellOnUse(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: Internal.InteractionHand_, arg4: Internal.Function_<Internal.ItemStack, boolean>): Internal.InteractionResultHolder<Internal.ItemStack>;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        canBeDepleted(): boolean;
        getDamage(arg0: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        isTranscribedSpell(arg0: Internal.ItemStack_): boolean;
        getSpell(arg0: Internal.ItemStack_, arg1: Internal.Player_): Internal.ISpellDefinition;
        getMod(): string;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        static getCustomIcon(arg0: Internal.ItemStack_): number;
        castFromCurioSlot(arg0: Internal.ItemStack_, arg1: Internal.Player_): void;
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
        get typeData(): Internal.CompoundTag
        get defaultInstance(): Internal.ItemStack
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get class(): typeof any
        get renderPropertiesInternal(): any
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        get edible(): boolean
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        set cachedTier(arg0: number)
        get cachedTier(): number
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        set transcribedSpell(arg0: Internal.ItemStack_)
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
        set rarity(arg0: Internal.Rarity_)
        get complex(): boolean
        get descriptionId(): string
        get creativeTab(): string
        set burnTime(i: number)
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
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
        /**
         * @deprecated
        */
        get maxStackSize(): number
        get eatingSound(): Internal.SoundEvent
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
    }
    type ItemScythe_ = ItemScythe;
    class GetServerGroupsCallbackJS <IN, OUT> {
        constructor(player: Internal.ServerPlayer_, world: Internal.ServerLevel_, target: IN, showDetails: boolean)
        getClass(): typeof any;
        addGroup(groupBuilderConsumer: Internal.Consumer_<Internal.ViewGroupBuilder<OUT>>): this;
        getLevel(): Internal.ServerLevel;
        toString(): string;
        "addGroup(pie.ilikepiefoo.compat.jade.builder.ViewGroupBuilder)"(group: Internal.ViewGroupBuilder_<OUT>): this;
        notifyAll(): void;
        clearGroups(): this;
        addGroup(group: Internal.List_<OUT>): this;
        getTarget(): IN;
        notify(): void;
        "addGroup(java.util.function.Consumer)"(groupBuilderConsumer: Internal.Consumer_<Internal.ViewGroupBuilder<OUT>>): this;
        getGroups(): Internal.List<Internal.ViewGroupBuilder<OUT>>;
        showDetails(): boolean;
        wait(arg0: number, arg1: number): void;
        addGroup(group: Internal.ViewGroupBuilder_<OUT>): this;
        getPlayer(): Internal.ServerPlayer;
        hashCode(): number;
        addGroups(groups: Internal.List_<Internal.ViewGroupBuilder<OUT>>): this;
        wait(): void;
        wait(arg0: number): void;
        "addGroup(java.util.List)"(group: Internal.List_<OUT>): this;
        equals(arg0: any): boolean;
        getWorld(): Internal.ServerLevel;
        get class(): typeof any
        get level(): Internal.ServerLevel
        get target(): IN
        get groups(): Internal.List<Internal.ViewGroupBuilder<OUT>>
        get player(): Internal.ServerPlayer
        get world(): Internal.ServerLevel
        readonly world: Internal.ServerLevel;
        readonly target: IN;
        readonly showDetails: boolean;
        readonly player: Internal.ServerPlayer;
    }
    type GetServerGroupsCallbackJS_<IN, OUT> = GetServerGroupsCallbackJS<IN, OUT>;
    interface IntSet extends Internal.Set<number>, Internal.IntCollection {
        /**
         * @deprecated
        */
        stream(): Internal.Stream<number>;
        abstract "contains(int)"(arg0: number): boolean;
        abstract addAll(arg0: Internal.Collection_<number>): boolean;
        of(arg0: number, arg1: number): this;
        of(): this;
        abstract contains(arg0: number): boolean;
        abstract retainAll(arg0: Internal.Collection_<any>): boolean;
        intStream(): Internal.IntStream;
        toArray<T>(arg0: Internal.IntFunction_<T[]>): T[];
        of<E>(arg0: E, arg1: E): Internal.Set<E>;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): Internal.Set<E>;
        abstract "containsAll(java.util.Collection)"(arg0: Internal.Collection_<any>): boolean;
        intParallelStream(): Internal.IntStream;
        of<E>(arg0: E, arg1: E, arg2: E): Internal.Set<E>;
        abstract "remove(int)"(arg0: number): boolean;
        abstract removeAll(arg0: Internal.IntCollection_): boolean;
        abstract "removeAll(it.unimi.dsi.fastutil.ints.IntCollection)"(arg0: Internal.IntCollection_): boolean;
        spliterator(): Internal.IntSpliterator;
        abstract "retainAll(java.util.Collection)"(arg0: Internal.Collection_<any>): boolean;
        intIterator(): Internal.IntIterator;
        abstract "add(int)"(arg0: number): boolean;
        removeIf(arg0: Internal.IntPredicate_): boolean;
        "of(java.lang.Object[])"<E>(...arg0: E[]): Internal.Set<E>;
        /**
         * @deprecated
        */
        "contains(java.lang.Object)"(arg0: any): boolean;
        abstract remove(arg0: number): boolean;
        abstract addAll(arg0: Internal.IntCollection_): boolean;
        abstract retainAll(arg0: Internal.IntCollection_): boolean;
        /**
         * @deprecated
        */
        "removeIf(java.util.function.Predicate)"(arg0: Internal.Predicate_<number>): boolean;
        abstract add(arg0: number): boolean;
        abstract toArray<T>(arg0: T[]): T[];
        abstract "toArray(int[])"(arg0: number[]): number[];
        abstract containsAll(arg0: Internal.IntCollection_): boolean;
        /**
         * @deprecated
        */
        toIntArray(arg0: number[]): number[];
        /**
         * @deprecated
        */
        remove(arg0: any): boolean;
        abstract "removeAll(java.util.Collection)"(arg0: Internal.Collection_<any>): boolean;
        "of(int,int,int)"(arg0: number, arg1: number, arg2: number): this;
        /**
         * @deprecated
        */
        "remove(java.lang.Object)"(arg0: any): boolean;
        of(arg0: number): this;
        /**
         * @deprecated
        */
        add(arg0: any): boolean;
        of<E>(arg0: E): Internal.Set<E>;
        /**
         * @deprecated
        */
        "add(java.lang.Integer)"(arg0: number): boolean;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): Internal.Set<E>;
        abstract removeAll(arg0: Internal.Collection_<any>): boolean;
        "of(int)"(arg0: number): this;
        "of(java.lang.Object,java.lang.Object)"<E>(arg0: E, arg1: E): Internal.Set<E>;
        "of(int,int)"(arg0: number, arg1: number): this;
        copyOf<E>(arg0: Internal.Collection_<E>): Internal.Set<E>;
        abstract "retainAll(it.unimi.dsi.fastutil.ints.IntCollection)"(arg0: Internal.IntCollection_): boolean;
        /**
         * @deprecated
        */
        "forEach(java.util.function.Consumer)"(arg0: Internal.Consumer_<number>): void;
        /**
         * @deprecated
        */
        add(arg0: number): boolean;
        abstract isEmpty(): boolean;
        /**
         * @deprecated
        */
        "add(java.lang.Object)"(arg0: any): boolean;
        abstract toIntArray(): number[];
        forEach(arg0: Internal.IntConsumer_): void;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): Internal.Set<E>;
        abstract containsAll(arg0: Internal.Collection_<any>): boolean;
        abstract toArray(arg0: number[]): number[];
        "of(int[])"(...arg0: number[]): this;
        of(arg0: number, arg1: number, arg2: number): this;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E): Internal.Set<E>;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): Internal.Set<E>;
        /**
         * @deprecated
        */
        contains(arg0: any): boolean;
        abstract "addAll(it.unimi.dsi.fastutil.ints.IntCollection)"(arg0: Internal.IntCollection_): boolean;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): Internal.Set<E>;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): Internal.Set<E>;
        iterator(): Internal.Iterator<any>;
        forEach(arg0: it.unimi.dsi.fastutil.ints.IntConsumer_): void;
        "removeIf(it.unimi.dsi.fastutil.ints.IntPredicate)"(arg0: it.unimi.dsi.fastutil.ints.IntPredicate_): boolean;
        "forEach(it.unimi.dsi.fastutil.ints.IntConsumer)"(arg0: it.unimi.dsi.fastutil.ints.IntConsumer_): void;
        "removeIf(java.util.function.IntPredicate)"(arg0: Internal.IntPredicate_): boolean;
        "of(java.lang.Object,java.lang.Object,java.lang.Object)"<E>(arg0: E, arg1: E, arg2: E): Internal.Set<E>;
        /**
         * @deprecated
        */
        forEach(arg0: Internal.Consumer_<number>): void;
        /**
         * @deprecated
        */
        parallelStream(): Internal.Stream<number>;
        abstract "toArray(java.lang.Object[])"<T>(arg0: T[]): T[];
        "toArray(java.util.function.IntFunction)"<T>(arg0: Internal.IntFunction_<T[]>): T[];
        /**
         * @deprecated
        */
        removeIf(arg0: Internal.Predicate_<number>): boolean;
        removeIf(arg0: it.unimi.dsi.fastutil.ints.IntPredicate_): boolean;
        abstract toArray(): any[];
        intSpliterator(): Internal.IntSpliterator;
        of(...arg0: number[]): this;
        abstract hashCode(): number;
        abstract size(): number;
        abstract "addAll(java.util.Collection)"(arg0: Internal.Collection_<number>): boolean;
        of<E>(...arg0: E[]): Internal.Set<E>;
        /**
         * @deprecated
        */
        rem(arg0: number): boolean;
        abstract clear(): void;
        abstract "containsAll(it.unimi.dsi.fastutil.ints.IntCollection)"(arg0: Internal.IntCollection_): boolean;
        abstract equals(arg0: any): boolean;
        "forEach(java.util.function.IntConsumer)"(arg0: Internal.IntConsumer_): void;
        "of(java.lang.Object)"<E>(arg0: E): Internal.Set<E>;
        get empty(): boolean
    }
    type IntSet_ = IntSet;
    class Vector4d implements Internal.Cloneable, Internal.Externalizable, Internal.Vector4dc {
        constructor()
        constructor(arg0: Internal.DoubleBuffer_)
        constructor(arg0: number[])
        constructor(arg0: number, arg1: Internal.DoubleBuffer_)
        constructor(arg0: Internal.ByteBuffer_)
        constructor(arg0: number, arg1: Internal.ByteBuffer_)
        constructor(arg0: Internal.Vector3dc_, arg1: number)
        constructor(arg0: Internal.Vector4fc_)
        constructor(arg0: number, arg1: number, arg2: number, arg3: number)
        constructor(arg0: Internal.Vector3fc_, arg1: number)
        constructor(arg0: Internal.Vector4dc_)
        constructor(arg0: Internal.Vector3ic_, arg1: number)
        constructor(arg0: number)
        constructor(arg0: number[])
        constructor(arg0: Internal.Vector2ic_, arg1: number, arg2: number)
        constructor(arg0: Internal.Vector2dc_, arg1: number, arg2: number)
        constructor(arg0: Internal.Vector4ic_)
        constructor(arg0: Internal.Vector2fc_, arg1: number, arg2: number)
        set(arg0: Internal.Vector4ic_): this;
        "get(int)"(arg0: number): number;
        "fma(org.joml.Vector4dc,org.joml.Vector4dc,org.joml.Vector4d)"(arg0: Internal.Vector4dc_, arg1: Internal.Vector4dc_, arg2: Internal.Vector4d_): this;
        get(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        negate(arg0: Internal.Vector4d_): this;
        "set(org.joml.Vector2ic,double,double)"(arg0: Internal.Vector2ic_, arg1: number, arg2: number): this;
        "set(java.nio.DoubleBuffer)"(arg0: Internal.DoubleBuffer_): this;
        mul(arg0: Internal.Vector4fc_): this;
        getToAddress(arg0: number): Internal.Vector4dc;
        equals(arg0: Internal.Vector4dc_, arg1: number): boolean;
        x(): number;
        min(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): this;
        fma(arg0: number, arg1: Internal.Vector4dc_): this;
        set(arg0: Internal.Vector3ic_, arg1: number): this;
        set(arg0: number, arg1: number, arg2: number): this;
        rotateX(arg0: number): this;
        mulAffine(arg0: Internal.Matrix4dc_, arg1: Internal.Vector4d_): this;
        "get(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        mulAdd(arg0: number, arg1: Internal.Vector4dc_, arg2: Internal.Vector4d_): this;
        mul(arg0: Internal.Matrix4x3fc_): this;
        add(arg0: number, arg1: number, arg2: number, arg3: number): this;
        mulProject(arg0: Internal.Matrix4dc_): this;
        distanceSquared(arg0: number, arg1: number, arg2: number, arg3: number): number;
        "fma(org.joml.Vector4dc,org.joml.Vector4dc)"(arg0: Internal.Vector4dc_, arg1: Internal.Vector4dc_): this;
        "mul(org.joml.Matrix4dc,org.joml.Vector4d)"(arg0: Internal.Matrix4dc_, arg1: Internal.Vector4d_): this;
        "mulAdd(org.joml.Vector4dc,org.joml.Vector4dc,org.joml.Vector4d)"(arg0: Internal.Vector4dc_, arg1: Internal.Vector4dc_, arg2: Internal.Vector4d_): this;
        set(arg0: number[]): this;
        lerp(arg0: Internal.Vector4dc_, arg1: number): this;
        round(): this;
        getClass(): typeof any;
        "mulAdd(double,org.joml.Vector4dc)"(arg0: number, arg1: Internal.Vector4dc_): this;
        static length(arg0: number, arg1: number, arg2: number, arg3: number): number;
        distance(arg0: Internal.Vector4dc_): number;
        set(arg0: Internal.Vector2ic_, arg1: number, arg2: number): this;
        sub(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Vector4d_): this;
        "set(org.joml.Vector2dc,double,double)"(arg0: Internal.Vector2dc_, arg1: number, arg2: number): this;
        get(arg0: Internal.Vector4d_): this;
        angle(arg0: Internal.Vector4dc_): number;
        fma(arg0: Internal.Vector4dc_, arg1: Internal.Vector4dc_): this;
        mulTranspose(arg0: Internal.Matrix4dc_): this;
        "set(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): this;
        get(arg0: number): number;
        y(): number;
        "mul(org.joml.Matrix4x3fc)"(arg0: Internal.Matrix4x3fc_): this;
        "sub(org.joml.Vector4fc)"(arg0: Internal.Vector4fc_): this;
        negate(): this;
        ceil(): this;
        dot(arg0: Internal.Vector4dc_): number;
        "set(org.joml.Vector3dc,double)"(arg0: Internal.Vector3dc_, arg1: number): this;
        set(arg0: Internal.DoubleBuffer_): this;
        "div(org.joml.Vector4dc)"(arg0: Internal.Vector4dc_): this;
        round(arg0: Internal.Vector4d_): this;
        mul(arg0: Internal.Matrix4x3dc_, arg1: Internal.Vector4d_): this;
        setComponent(arg0: number, arg1: number): this;
        rotateX(arg0: number, arg1: Internal.Vector4d_): this;
        "sub(org.joml.Vector4fc,org.joml.Vector4d)"(arg0: Internal.Vector4fc_, arg1: Internal.Vector4d_): this;
        "add(org.joml.Vector4dc)"(arg0: Internal.Vector4dc_): this;
        wait(arg0: number): void;
        hermite(arg0: Internal.Vector4dc_, arg1: Internal.Vector4dc_, arg2: Internal.Vector4dc_, arg3: number, arg4: Internal.Vector4d_): this;
        "get(org.joml.Vector4f)"(arg0: Vec4f_): Vec4f;
        "mul(double)"(arg0: number): this;
        absolute(): this;
        "div(org.joml.Vector4dc,org.joml.Vector4d)"(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): this;
        rotateAxis(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Vector4d_): this;
        div(arg0: Internal.Vector4dc_): this;
        min(arg0: Internal.Vector4dc_): this;
        static lengthSquared(arg0: number, arg1: number, arg2: number, arg3: number): number;
        normalize(): this;
        z(): number;
        isFinite(): boolean;
        "div(double,org.joml.Vector4d)"(arg0: number, arg1: Internal.Vector4d_): this;
        "add(org.joml.Vector4dc,org.joml.Vector4d)"(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): this;
        setFromAddress(arg0: number): this;
        "normalize(double)"(arg0: number): this;
        mul(arg0: Internal.Matrix4fc_, arg1: Internal.Vector4d_): this;
        "get(int,java.nio.DoubleBuffer)"(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        "add(org.joml.Vector4fc,org.joml.Vector4d)"(arg0: Internal.Vector4fc_, arg1: Internal.Vector4d_): this;
        set(arg0: Internal.ByteBuffer_): this;
        mulTranspose(arg0: Internal.Matrix4dc_, arg1: Internal.Vector4d_): this;
        set(arg0: Internal.Vector2dc_, arg1: number, arg2: number): this;
        wait(): void;
        get(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        mulProject(arg0: Internal.Matrix4dc_, arg1: Internal.Vector4d_): this;
        zero(): this;
        minComponent(): number;
        set(arg0: number, arg1: Internal.DoubleBuffer_): this;
        max(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): this;
        add(arg0: Internal.Vector4fc_): this;
        "fma(double,org.joml.Vector4dc,org.joml.Vector4d)"(arg0: number, arg1: Internal.Vector4dc_, arg2: Internal.Vector4d_): this;
        lerp(arg0: Internal.Vector4dc_, arg1: number, arg2: Internal.Vector4d_): this;
        fma(arg0: number, arg1: Internal.Vector4dc_, arg2: Internal.Vector4d_): this;
        getf(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        set(arg0: Internal.Vector3dc_, arg1: number): this;
        "fma(double,org.joml.Vector4dc)"(arg0: number, arg1: Internal.Vector4dc_): this;
        "mul(org.joml.Matrix4x3dc,org.joml.Vector4d)"(arg0: Internal.Matrix4x3dc_, arg1: Internal.Vector4d_): this;
        mulProject(arg0: Internal.Matrix4dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        sub(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): this;
        mul(arg0: number, arg1: Internal.Vector4d_): this;
        "mul(org.joml.Vector4dc,org.joml.Vector4d)"(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): this;
        "set(int,java.nio.ByteBuffer)"(arg0: number, arg1: Internal.ByteBuffer_): this;
        rotate(arg0: Internal.Quaterniondc_): this;
        "add(org.joml.Vector4fc)"(arg0: Internal.Vector4fc_): this;
        "mulAdd(org.joml.Vector4dc,org.joml.Vector4dc)"(arg0: Internal.Vector4dc_, arg1: Internal.Vector4dc_): this;
        mulAdd(arg0: Internal.Vector4dc_, arg1: Internal.Vector4dc_, arg2: Internal.Vector4d_): this;
        "set(float[])"(arg0: number[]): this;
        equals(arg0: any): boolean;
        "mul(org.joml.Matrix4dc)"(arg0: Internal.Matrix4dc_): this;
        add(arg0: Internal.Vector4fc_, arg1: Internal.Vector4d_): this;
        mulAdd(arg0: Internal.Vector4dc_, arg1: Internal.Vector4dc_): this;
        static distance(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): number;
        get(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        normalize(arg0: number, arg1: Internal.Vector4d_): this;
        "div(double)"(arg0: number): this;
        set(arg0: Internal.Vector3fc_, arg1: number): this;
        "set(int,java.nio.DoubleBuffer)"(arg0: number, arg1: Internal.DoubleBuffer_): this;
        sub(arg0: Internal.Vector4fc_, arg1: Internal.Vector4d_): this;
        mul(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): this;
        angleCos(arg0: Internal.Vector4dc_): number;
        normalize(arg0: number): this;
        "sub(org.joml.Vector4dc,org.joml.Vector4d)"(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): this;
        "mul(org.joml.Matrix4fc,org.joml.Vector4d)"(arg0: Internal.Matrix4fc_, arg1: Internal.Vector4d_): this;
        div(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): this;
        add(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Vector4d_): this;
        "get(int,java.nio.FloatBuffer)"(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        normalize(arg0: Internal.Vector4d_): this;
        dot(arg0: number, arg1: number, arg2: number, arg3: number): number;
        distanceSquared(arg0: Internal.Vector4dc_): number;
        toString(arg0: Internal.NumberFormat_): string;
        "get(int,java.nio.ByteBuffer)"(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        set(arg0: number, arg1: Internal.ByteBuffer_): this;
        floor(arg0: Internal.Vector4d_): this;
        mul(arg0: Internal.Matrix4x3fc_, arg1: Internal.Vector4d_): this;
        "mul(org.joml.Vector4dc)"(arg0: Internal.Vector4dc_): this;
        sub(arg0: Internal.Vector4fc_): this;
        "mul(double,org.joml.Vector4d)"(arg0: number, arg1: Internal.Vector4d_): this;
        normalize3(): this;
        clone(): any;
        set(arg0: Internal.Vector4fc_): this;
        writeExternal(arg0: Internal.ObjectOutput_): void;
        maxComponent(): number;
        getf(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        "get(java.nio.FloatBuffer)"(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        "mul(org.joml.Vector4fc,org.joml.Vector4d)"(arg0: Internal.Vector4fc_, arg1: Internal.Vector4d_): this;
        "set(org.joml.Vector4ic)"(arg0: Internal.Vector4ic_): this;
        add(arg0: Internal.Vector4dc_): this;
        "get(java.nio.DoubleBuffer)"(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        "get(int,org.joml.Vector4i)"(arg0: number, arg1: Internal.Vector4i_): Internal.Vector4i;
        "mulProject(org.joml.Matrix4dc,org.joml.Vector4d)"(arg0: Internal.Matrix4dc_, arg1: Internal.Vector4d_): this;
        "set(org.joml.Vector3ic,double)"(arg0: Internal.Vector3ic_, arg1: number): this;
        "mul(org.joml.Matrix4fc)"(arg0: Internal.Matrix4fc_): this;
        "set(org.joml.Vector2fc,double,double)"(arg0: Internal.Vector2fc_, arg1: number, arg2: number): this;
        lengthSquared(): number;
        absolute(arg0: Internal.Vector4d_): this;
        toString(): string;
        mulAffineTranspose(arg0: Internal.Matrix4dc_, arg1: Internal.Vector4d_): this;
        "set(org.joml.Vector4fc)"(arg0: Internal.Vector4fc_): this;
        notifyAll(): void;
        "mul(org.joml.Matrix4x3fc,org.joml.Vector4d)"(arg0: Internal.Matrix4x3fc_, arg1: Internal.Vector4d_): this;
        div(arg0: number): this;
        mul(arg0: Internal.Matrix4dc_): this;
        "get(org.joml.Vector4d)"(arg0: Internal.Vector4d_): this;
        equals(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        mulAdd(arg0: number, arg1: Internal.Vector4dc_): this;
        floor(): this;
        mul(arg0: number): this;
        get(arg0: number, arg1: Internal.Vector4i_): Internal.Vector4i;
        distance(arg0: number, arg1: number, arg2: number, arg3: number): number;
        "sub(org.joml.Vector4dc)"(arg0: Internal.Vector4dc_): this;
        notify(): void;
        "set(org.joml.Vector3fc,double)"(arg0: Internal.Vector3fc_, arg1: number): this;
        set(arg0: Internal.Vector2fc_, arg1: number, arg2: number): this;
        "normalize(org.joml.Vector4d)"(arg0: Internal.Vector4d_): this;
        get(arg0: Vec4f_): Vec4f;
        fma(arg0: Internal.Vector4dc_, arg1: Internal.Vector4dc_, arg2: Internal.Vector4d_): this;
        mul(arg0: Internal.Vector4dc_): this;
        "mul(org.joml.Vector4fc)"(arg0: Internal.Vector4fc_): this;
        get(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        ceil(arg0: Internal.Vector4d_): this;
        "mulAdd(double,org.joml.Vector4dc,org.joml.Vector4d)"(arg0: number, arg1: Internal.Vector4dc_, arg2: Internal.Vector4d_): this;
        readExternal(arg0: Internal.ObjectInput_): void;
        set(arg0: number[]): this;
        "mulProject(org.joml.Matrix4dc,org.joml.Vector3d)"(arg0: Internal.Matrix4dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        rotateZ(arg0: number): this;
        "set(double)"(arg0: number): this;
        set(arg0: number, arg1: number, arg2: number, arg3: number): this;
        mul(arg0: Internal.Matrix4x3dc_): this;
        rotateY(arg0: number, arg1: Internal.Vector4d_): this;
        get(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        static distanceSquared(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): number;
        length(): number;
        sub(arg0: Internal.Vector4dc_): this;
        "mul(org.joml.Matrix4x3dc)"(arg0: Internal.Matrix4x3dc_): this;
        add(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): this;
        normalize3(arg0: Internal.Vector4d_): this;
        smoothStep(arg0: Internal.Vector4dc_, arg1: number, arg2: Internal.Vector4d_): this;
        set(arg0: Internal.Vector4dc_): this;
        mul(arg0: Internal.Vector4fc_, arg1: Internal.Vector4d_): this;
        wait(arg0: number, arg1: number): void;
        sub(arg0: number, arg1: number, arg2: number, arg3: number): this;
        "set(double,double,double)"(arg0: number, arg1: number, arg2: number): this;
        div(arg0: number, arg1: Internal.Vector4d_): this;
        w(): number;
        "set(double[])"(arg0: number[]): this;
        mul(arg0: Internal.Matrix4dc_, arg1: Internal.Vector4d_): this;
        rotateAxis(arg0: number, arg1: number, arg2: number, arg3: number): this;
        get(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        rotate(arg0: Internal.Quaterniondc_, arg1: Internal.Vector4d_): this;
        rotateY(arg0: number): this;
        set(arg0: number): this;
        hashCode(): number;
        rotateZ(arg0: number, arg1: Internal.Vector4d_): this;
        "set(org.joml.Vector4dc)"(arg0: Internal.Vector4dc_): this;
        max(arg0: Internal.Vector4dc_): this;
        mul(arg0: Internal.Matrix4fc_): this;
        set "(java.nio.DoubleBuffer)"(arg0: Internal.DoubleBuffer_)
        get class(): typeof any
        set "(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_)
        get finite(): boolean
        set fromAddress(arg0: number)
        set "(float[])"(arg0: number[])
        set "(org.joml.Vector4ic)"(arg0: Internal.Vector4ic_)
        set "(org.joml.Vector4fc)"(arg0: Internal.Vector4fc_)
        set "(double)"(arg0: number)
        set "(double[])"(arg0: number[])
        set "(org.joml.Vector4dc)"(arg0: Internal.Vector4dc_)
        z: number;
        w: number;
        x: number;
        y: number;
    }
    type Vector4d_ = Vector4d;
    class Blocks$1 extends Internal.UnbreakableBeacon {
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
        getColor(): Internal.DyeColor;
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
        get color(): Internal.DyeColor
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
    type Blocks$1_ = Blocks$1;
    class Blocks$2 extends Internal.UnbreakableBeacon {
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
        getColor(): Internal.DyeColor;
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
        get color(): Internal.DyeColor
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
    type Blocks$2_ = Blocks$2;
    class Blocks$3 extends Internal.UnbreakableBeacon {
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
        getColor(): Internal.DyeColor;
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
        get color(): Internal.DyeColor
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
    type Blocks$3_ = Blocks$3;
    class BakedGlyph {
        constructor(arg0: any_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number)
        getClass(): typeof any;
        renderType(arg0: Internal.Font$DisplayMode_): Internal.RenderType;
        toString(): string;
        notifyAll(): void;
        handler$ckb000$render(italic: boolean, x: number, y: number, matrix: Matrix4f_, vertexConsumer: Internal.VertexConsumer_, red: number, green: number, blue: number, alpha: number, light: number, ci: Internal.CallbackInfo_): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        wait(): void;
        renderEffect(arg0: Internal.BakedGlyph$Effect_, arg1: Matrix4f_, arg2: Internal.VertexConsumer_, arg3: number): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        render(arg0: boolean, arg1: number, arg2: number, arg3: Matrix4f_, arg4: Internal.VertexConsumer_, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        get class(): typeof any
    }
    type BakedGlyph_ = BakedGlyph;
    interface VertexBufferHelper {
        abstract restoreBinding(): void;
        abstract saveBinding(): void;
    }
    type VertexBufferHelper_ = VertexBufferHelper;
    class Key$StorageKey implements icyllis.arc3d.engine.Key {
        constructor(b: Internal.KeyBuilder_)
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(o: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
    }
    type Key$StorageKey_ = Key$StorageKey;
    class Blocks$4 extends Internal.UnbreakableBeacon {
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
        getColor(): Internal.DyeColor;
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
        get color(): Internal.DyeColor
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
    type Blocks$4_ = Blocks$4;
    class Blocks$5 extends Internal.UnbreakableBeacon {
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
        getColor(): Internal.DyeColor;
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
        get color(): Internal.DyeColor
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
    type Blocks$5_ = Blocks$5;
    class IntTag extends Internal.NumericTag {
        getClass(): typeof any;
        static checkSpecialEquality(o: any, o1: any, shallow: boolean): boolean;
        "accept(net.minecraft.nbt.StreamTagVisitor)"(arg0: Internal.StreamTagVisitor_): Internal.StreamTagVisitor$ValueResult;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        "accept(net.minecraft.nbt.TagVisitor)"(arg0: Internal.TagVisitor_): void;
        sizeInBytes(): number;
        getAsFloat(): number;
        getAsLong(): number;
        acceptAsRoot(arg0: Internal.StreamTagVisitor_): void;
        write(arg0: Internal.DataOutput_): void;
        getId(): number;
        toString(): string;
        notifyAll(): void;
        specialEquals(o: any, shallow: boolean): boolean;
        static valueOf(arg0: number): Internal.IntTag;
        getAsDouble(): number;
        getType(): Internal.TagType<Internal.IntTag>;
        accept(arg0: Internal.TagVisitor_): void;
        hashCode(): number;
        getAsInt(): number;
        getAsString(): string;
        getAsByte(): number;
        getAsNumber(): number;
        copy(): Internal.Tag;
        wait(): void;
        wait(arg0: number): void;
        getAsShort(): number;
        equals(arg0: any): boolean;
        accept(arg0: Internal.StreamTagVisitor_): Internal.StreamTagVisitor$ValueResult;
        get class(): typeof any
        get asFloat(): number
        get asLong(): number
        get id(): number
        get asDouble(): number
        get type(): Internal.TagType<Internal.IntTag>
        get asInt(): number
        get asString(): string
        get asByte(): number
        get asNumber(): number
        get asShort(): number
        static readonly TYPE: Internal.TagType<Internal.IntTag>;
    }
    type IntTag_ = IntTag;
    abstract class BaseScreen extends Internal.Panel {
        constructor()
        getScrollStep(): number;
        static getClipboardString(): string;
        mousePressed(button: Internal.MouseButton_): boolean;
        getY(): number;
        closeGui(openPrevScreen: boolean): void;
        scrollPanel(scroll: number): boolean;
        getTheme(): Internal.Theme;
        mouseDragged(button: number, dragX: number, dragY: number): boolean;
        add(widget: Internal.Widget_): void;
        drawDefaultBackground(graphics: Internal.GuiGraphics_): boolean;
        isDefaultScrollVertical(): boolean;
        setPos(x: number, y: number): void;
        keyPressed(key: dev.ftb.mods.ftblibrary.ui.input.Key_): boolean;
        isGhostIngredientTarget(ingredient: any): boolean;
        getPartialTicks(): number;
        setScrollX(scroll: number): void;
        openContextMenu(menuItems: Internal.List_<Internal.ContextMenuItem>): dev.ftb.mods.ftblibrary.ui.ContextMenu;
        getWidth(): number;
        getDrawLayer(): Internal.Widget$DrawLayer;
        closeModalPanel(panel: Internal.ModalPanel_): void;
        getContextMenu(): Internal.Optional<Internal.ModalPanel>;
        isMouseOverAnyWidget(): boolean;
        onPostInit(): void;
        keyReleased(key: dev.ftb.mods.ftblibrary.ui.input.Key_): void;
        getMouseX(): number;
        "compareTo(dev.ftb.mods.ftblibrary.ui.Widget)"(widget: Internal.Widget_): number;
        static isShiftKeyDown(): boolean;
        "compareTo(java.lang.Object)"(arg0: any): number;
        static setClipboardString(string: string): void;
        shouldCloseOnEsc(): boolean;
        getClass(): typeof any;
        setScrollStep(s: number): void;
        handleClick(scheme: string, path: string): boolean;
        getX(): number;
        getParent(): Internal.Panel;
        run(): void;
        updateMouseOver(mouseX: number, mouseY: number): void;
        getPosY(): number;
        static isMouseButtonDown(button: Internal.MouseButton_): boolean;
        setOnlyRenderWidgetsInside(value: boolean): void;
        popModalPanel(): Internal.ModalPanel;
        setScrollY(scroll: number): void;
        getWidget(index: number): Internal.Widget;
        setPosAndSize(x: number, y: number, w: number, h: number): Internal.Widget;
        setWidth(v: number): void;
        getHeight(): number;
        openYesNoFull(title: net.minecraft.network.chat.Component_, desc: net.minecraft.network.chat.Component_, callback: Internal.BooleanConsumer_): void;
        charTyped(c: string, modifiers: Internal.KeyModifiers_): boolean;
        getContentHeight(): number;
        toString(): string;
        setSize(w: number, h: number): void;
        isOffset(): boolean;
        getCursor(): Internal.CursorType;
        notifyAll(): void;
        mouseReleased(button: Internal.MouseButton_): void;
        collidesWith(x: number, y: number, w: number, h: number): boolean;
        openGuiLater(): void;
        getScrollX(): number;
        getPrevScreen(): Internal.Screen;
        getOnlyInteractWithWidgetsInside(): boolean;
        checkMouseOver(mouseX: number, mouseY: number): boolean;
        isMouseOver(x: number, y: number, w: number, h: number): boolean;
        getScreen(): com.mojang.blaze3d.platform.Window;
        doesGuiPauseGame(): boolean;
        openYesNo(title: net.minecraft.network.chat.Component_, desc: net.minecraft.network.chat.Component_, callback: Internal.Runnable_): void;
        drawWidget(graphics: Internal.GuiGraphics_, theme: Internal.Theme_, widget: Internal.Widget_, x: number, y: number, w: number, h: number): void;
        openContextMenu(newContextMenu: dev.ftb.mods.ftblibrary.ui.ContextMenu_): void;
        handleClick(click: string): boolean;
        wait(arg0: number): void;
        setHeight(v: number): void;
        addMouseOverText(list: Internal.TooltipList_): void;
        shouldDraw(): boolean;
        compareTo(widget: Internal.Widget_): number;
        "openContextMenu(java.util.List)"(menuItems: Internal.List_<Internal.ContextMenuItem>): dev.ftb.mods.ftblibrary.ui.ContextMenu;
        updateGui(mx: number, my: number, pt: number): void;
        notify(): void;
        compareTo(arg0: any): number;
        getWidgets(): Internal.List<Internal.Widget>;
        getPosX(): number;
        closeGui(): void;
        openGui(): void;
        "openContextMenu(dev.ftb.mods.ftblibrary.ui.ContextMenu)"(newContextMenu: dev.ftb.mods.ftblibrary.ui.ContextMenu_): void;
        getWidgetType(): Internal.WidgetType;
        alignWidgets(): void;
        setX(v: number): void;
        clearWidgets(): void;
        setOnlyInteractWithWidgetsInside(value: boolean): void;
        anyModalPanelOpen(): boolean;
        getScrollY(): number;
        setFocusedWidget(widget: Internal.Widget_): void;
        onInit(): boolean;
        getGui(): this;
        tick(): void;
        pushModalPanel(modalPanel: Internal.ModalPanel_): void;
        onClosedByKey(key: dev.ftb.mods.ftblibrary.ui.input.Key_): boolean;
        wait(): void;
        refreshWidgets(): void;
        getTitle(): net.minecraft.network.chat.Component;
        openAfter(runnable: Internal.Runnable_): Internal.Runnable;
        draw(graphics: Internal.GuiGraphics_, theme: Internal.Theme_, x: number, y: number, w: number, h: number): void;
        getContentWidth(): number;
        closeContextMenu(): void;
        drawBackground(graphics: Internal.GuiGraphics_, theme: Internal.Theme_, x: number, y: number, w: number, h: number): void;
        mouseScrolled(scroll: number): boolean;
        shouldAddMouseOverText(): boolean;
        getIngredientUnderMouse(): Internal.Optional<Internal.PositionedIngredient>;
        wait(arg0: number, arg1: number): void;
        isEnabled(): boolean;
        setOffset(flag: boolean): void;
        movePanelScroll(dx: number, dy: number): boolean;
        setY(v: number): void;
        static isCtrlKeyDown(): boolean;
        static isKeyDown(key: number): boolean;
        abstract addWidgets(): void;
        isMouseOver(): boolean;
        playClickSound(): void;
        mouseDoubleClicked(button: Internal.MouseButton_): boolean;
        onClosed(): void;
        acceptGhostIngredient(ingredient: any): void;
        getMouseY(): number;
        drawOffsetBackground(graphics: Internal.GuiGraphics_, theme: Internal.Theme_, x: number, y: number, w: number, h: number): void;
        isMouseOver(widget: Internal.Widget_): boolean;
        hashCode(): number;
        getOnlyRenderWidgetsInside(): boolean;
        setDrawLayer(drawLayer: Internal.Widget$DrawLayer_): void;
        drawForeground(graphics: Internal.GuiGraphics_, theme: Internal.Theme_, x: number, y: number, w: number, h: number): void;
        addAll(list: Internal.Iterable_<Internal.Widget>): void;
        initGui(): void;
        align(layout: Internal.WidgetLayout_): number;
        onBack(): void;
        equals(arg0: any): boolean;
        get scrollStep(): number
        get clipboardString(): string
        get y(): number
        get theme(): Internal.Theme
        get defaultScrollVertical(): boolean
        get partialTicks(): number
        set scrollX(scroll: number)
        get width(): number
        get drawLayer(): Internal.Widget$DrawLayer
        get contextMenu(): Internal.Optional<Internal.ModalPanel>
        get mouseOverAnyWidget(): boolean
        get mouseX(): number
        get shiftKeyDown(): boolean
        set clipboardString(string: string)
        get class(): typeof any
        set scrollStep(s: number)
        get x(): number
        get parent(): Internal.Panel
        get posY(): number
        set onlyRenderWidgetsInside(value: boolean)
        set scrollY(scroll: number)
        set width(v: number)
        get height(): number
        get contentHeight(): number
        get offset(): boolean
        get cursor(): Internal.CursorType
        get scrollX(): number
        get prevScreen(): Internal.Screen
        get onlyInteractWithWidgetsInside(): boolean
        get screen(): com.mojang.blaze3d.platform.Window
        set height(v: number)
        get widgets(): Internal.List<Internal.Widget>
        get posX(): number
        get widgetType(): Internal.WidgetType
        set x(v: number)
        set onlyInteractWithWidgetsInside(value: boolean)
        get scrollY(): number
        set focusedWidget(widget: Internal.Widget_)
        get gui(): Internal.BaseScreen
        get title(): net.minecraft.network.chat.Component
        get contentWidth(): number
        get ingredientUnderMouse(): Internal.Optional<Internal.PositionedIngredient>
        get enabled(): boolean
        set offset(flag: boolean)
        set y(v: number)
        get ctrlKeyDown(): boolean
        get mouseOver(): boolean
        get mouseY(): number
        get onlyRenderWidgetsInside(): boolean
        set drawLayer(drawLayer: Internal.Widget$DrawLayer_)
    }
    type BaseScreen_ = BaseScreen;
    interface GenerationProperties {
        abstract getFeatures(arg0: Internal.GenerationStep$Decoration_): Internal.Iterable<Internal.Holder<Internal.PlacedFeature>>;
        abstract getCarvers(arg0: Internal.GenerationStep$Carving_): Internal.Iterable<Internal.Holder<Internal.ConfiguredWorldCarver<any>>>;
        abstract getFeatures(): Internal.List<Internal.Iterable<Internal.Holder<Internal.PlacedFeature>>>;
        get features(): Internal.List<Internal.Iterable<Internal.Holder<Internal.PlacedFeature>>>
    }
    type GenerationProperties_ = GenerationProperties;
    abstract class AbstractLong2ObjectMap <V> extends Internal.AbstractLong2ObjectFunction<V> implements Internal.Serializable, Internal.Long2ObjectMap<V> {
        "replace(java.lang.Long,java.lang.Object,java.lang.Object)"(arg0: number, arg1: V, arg2: V): boolean;
        "computeIfPresent(java.lang.Long,java.util.function.BiFunction)"(arg0: number, arg1: Internal.BiFunction_<number, V, V>): V;
        "merge(long,java.lang.Object,java.util.function.BiFunction)"(arg0: number, arg1: V, arg2: Internal.BiFunction_<V, V, V>): V;
        containsValue(arg0: any): boolean;
        remove(arg0: number): V;
        "apply(java.lang.Long)"(arg0: number): V;
        composeReference<T>(arg0: Internal.Reference2LongFunction_<T>): Internal.Reference2ObjectFunction<T, V>;
        "remove(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): boolean;
        composeDouble(arg0: Internal.Double2LongFunction_): Internal.Double2ObjectFunction<V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): Internal.Map<K, V>;
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
        composeLong(arg0: Internal.Long2LongFunction_): Internal.Long2ObjectFunction<V>;
        andThenShort(arg0: Internal.Object2ShortFunction_<V>): Internal.Long2ShortFunction;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): Internal.Map<K, V>;
        merge(arg0: number, arg1: V, arg2: Internal.BiFunction_<V, V, V>): V;
        abstract "get(long)"(arg0: number): V;
        "replace(java.lang.Long,java.lang.Object)"(arg0: number, arg1: V): V;
        static ofEntries<K, V>(...arg0: Internal.Map$Entry_<K, V>[]): Internal.Map<K, V>;
        abstract defaultReturnValue(): V;
        static of<K, V>(arg0: K, arg1: V): Internal.Map<K, V>;
        /**
         * @deprecated
        */
        "containsKey(java.lang.Object)"(arg0: any): boolean;
        getClass(): typeof any;
        compute(arg0: number, arg1: Internal.BiFunction_<number, V, V>): V;
        "getOrDefault(long,java.lang.Object)"(arg0: number, arg1: V): V;
        composeShort(arg0: Internal.Short2LongFunction_): Internal.Short2ObjectFunction<V>;
        static of<K, V>(): Internal.Map<K, V>;
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
        toString(): string;
        notifyAll(): void;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): Internal.Map<K, V>;
        "merge(java.lang.Long,java.lang.Object,java.util.function.BiFunction)"(arg0: number, arg1: V, arg2: Internal.BiFunction_<V, V, V>): V;
        remove(arg0: any, arg1: any): boolean;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): Internal.Map<K, V>;
        merge(arg0: number, arg1: V, arg2: Internal.BiFunction_<V, V, V>): V;
        "computeIfAbsent(long,java.util.function.LongFunction)"(arg0: number, arg1: Internal.LongFunction_<V>): V;
        abstract size(): number;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, V>;
        "remove(long,java.lang.Object)"(arg0: number, arg1: any): boolean;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): Internal.Map<K, V>;
        clear(): void;
        composeChar(arg0: Internal.Char2LongFunction_): Internal.Char2ObjectFunction<V>;
        wait(arg0: number): void;
        replace(arg0: number, arg1: V): V;
        abstract long2ObjectEntrySet(): Internal.ObjectSet<Internal.Long2ObjectMap$Entry<V>>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): Internal.Map<K, V>;
        andThenReference<T>(arg0: Internal.Object2ReferenceFunction_<V, T>): Internal.Long2ReferenceFunction<T>;
        replace(arg0: number, arg1: V): V;
        andThen<V>(arg0: Internal.Function_<V, V>): Internal.Function<number, V>;
        "putIfAbsent(java.lang.Long,java.lang.Object)"(arg0: number, arg1: V): V;
        "replace(long,java.lang.Object,java.lang.Object)"(arg0: number, arg1: V, arg2: V): boolean;
        composeByte(arg0: Internal.Byte2LongFunction_): Internal.Byte2ObjectFunction<V>;
        notify(): void;
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
        static copyOf<K, V>(arg0: Internal.Map_<K, V>): Internal.Map<K, V>;
        computeIfAbsent(arg0: number, arg1: Internal.LongFunction_<V>): V;
        /**
         * @deprecated
        */
        "put(java.lang.Long,java.lang.Object)"(arg0: number, arg1: V): V;
        computeIfPresent(arg0: number, arg1: Internal.BiFunction_<number, V, V>): V;
        apply(arg0: number): V;
        putAll(arg0: Internal.Map_<number, V>): void;
        /**
         * @deprecated
        */
        entrySet(): Internal.ObjectSet<Internal.Map$Entry<number, V>>;
        containsKey(arg0: number): boolean;
        composeObject<T>(arg0: Internal.Object2LongFunction_<T>): Internal.Object2ObjectFunction<T, V>;
        "replace(long,java.lang.Object)"(arg0: number, arg1: V): V;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): Internal.Map<K, V>;
        composeInt(arg0: Internal.Int2LongFunction_): Internal.Int2ObjectFunction<V>;
        wait(): void;
        putIfAbsent(arg0: number, arg1: V): V;
        getOrDefault(arg0: number, arg1: V): V;
        static identity<T>(): Internal.Function<T, T>;
        remove(arg0: number, arg1: any): boolean;
        abstract defaultReturnValue(arg0: V): void;
        forEach(arg0: Internal.BiConsumer_<number, V>): void;
        "put(long,java.lang.Object)"(arg0: number, arg1: V): V;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Object)"(arg0: any, arg1: V): V;
        "containsKey(long)"(arg0: number): boolean;
        replace(arg0: number, arg1: V, arg2: V): boolean;
        computeIfAbsent(arg0: number, arg1: Internal.Function_<number, V>): V;
        isEmpty(): boolean;
        /**
         * @deprecated
        */
        computeIfAbsentPartial(arg0: number, arg1: Internal.Long2ObjectFunction_<V>): V;
        static entry<K, V>(arg0: K, arg1: V): Internal.Map$Entry<K, V>;
        wait(arg0: number, arg1: number): void;
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
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): Internal.Map<K, V>;
        andThenDouble(arg0: Internal.Object2DoubleFunction_<V>): Internal.Long2DoubleFunction;
        values(): Internal.ObjectCollection<V>;
        abstract get(arg0: number): V;
        hashCode(): number;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): Internal.Map<K, V>;
        equals(arg0: any): boolean;
        andThenChar(arg0: Internal.Object2CharFunction_<V>): Internal.Long2CharFunction;
        putIfAbsent(arg0: number, arg1: V): V;
        /**
         * @deprecated
        */
        "remove(java.lang.Object)"(arg0: any): V;
        get class(): typeof any
        get empty(): boolean
    }
    type AbstractLong2ObjectMap_<V> = AbstractLong2ObjectMap<V>;
    class EffectBulwark extends Internal.SimpleBeneficialEffect {
        constructor()
        getDisplayName(): net.minecraft.network.chat.Component;
        getClass(): typeof any;
        addAttributeModifier(arg0: Internal.Attribute_, arg1: string, arg2: number, arg3: Internal.AttributeModifier$Operation_): Internal.MobEffect;
        addAttributeModifiers(arg0: Internal.LivingEntity_, arg1: Internal.AttributeMap_, arg2: number): void;
        isInstantenous(): boolean;
        applyInstantenousEffect(arg0: Internal.Entity_, arg1: Internal.Entity_, arg2: Internal.LivingEntity_, arg3: number, arg4: number): void;
        notify(): void;
        isBeneficial(): boolean;
        wait(arg0: number, arg1: number): void;
        getEffectRendererInternal(): any;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientMobEffectExtensions>): void;
        getColor(): number;
        removeAttributeModifiers(arg0: Internal.LivingEntity_, arg1: Internal.AttributeMap_, arg2: number): void;
        applyEffectTick(arg0: Internal.LivingEntity_, arg1: number): void;
        getAttributeModifierValue(arg0: number, arg1: Internal.AttributeModifier_): number;
        getSortOrder(arg0: Internal.MobEffectInstance_): number;
        getDescriptionId(): string;
        static getIdFromNullable(arg0: Internal.MobEffect_): number;
        getCategory(): Internal.MobEffectCategory;
        toString(): string;
        getCurativeItems(): Internal.List<Internal.ItemStack>;
        notifyAll(): void;
        setFactorDataFactory(arg0: Internal.Supplier_<Internal.MobEffectInstance$FactorData>): Internal.MobEffect;
        createFactorData(): Internal.Optional<Internal.MobEffectInstance$FactorData>;
        static byId(arg0: number): Internal.MobEffect;
        hashCode(): number;
        getAttributeModifiers(): Internal.Map<Internal.Attribute, Internal.AttributeModifier>;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        isDurationEffectTick(arg0: number, arg1: number): boolean;
        static getId(arg0: Internal.MobEffect_): number;
        get displayName(): net.minecraft.network.chat.Component
        get class(): typeof any
        get instantenous(): boolean
        get beneficial(): boolean
        get effectRendererInternal(): any
        get color(): number
        get descriptionId(): string
        get category(): Internal.MobEffectCategory
        get curativeItems(): Internal.List<Internal.ItemStack>
        set factorDataFactory(arg0: Internal.Supplier_<Internal.MobEffectInstance$FactorData>)
        get attributeModifiers(): Internal.Map<Internal.Attribute, Internal.AttributeModifier>
    }
    type EffectBulwark_ = EffectBulwark;
    class EntityComponentProviderBuilder extends Internal.ToggleableProviderBuilder {
        constructor(uniqueIdentifier: ResourceLocation_)
        getClass(): typeof any;
        setEnabledByDefault(enabledByDefault: boolean): Internal.ToggleableProviderBuilder;
        tooltipRetriever(tooltipRetriever: Internal.EntityComponentProviderBuilder$TooltipRetriever_): this;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        setTooltipRetriever(tooltipRetriever: Internal.EntityComponentProviderBuilder$TooltipRetriever_): this;
        isRequired(): boolean;
        setRequired(isRequired: boolean): Internal.ToggleableProviderBuilder;
        required(): Internal.ToggleableProviderBuilder;
        icon(iconRetriever: Internal.EntityComponentProviderBuilder$IconRetriever_): this;
        toString(): string;
        setIconRetriever(iconRetriever: Internal.EntityComponentProviderBuilder$IconRetriever_): this;
        notifyAll(): void;
        getTooltipRetriever(): Internal.EntityComponentProviderBuilder$TooltipRetriever;
        iconRetriever(iconRetriever: Internal.EntityComponentProviderBuilder$IconRetriever_): this;
        isEnabledByDefault(): boolean;
        setDefaultPriority(priority: number): Internal.JadeProviderBuilder;
        getDefaultPriority(): number;
        tooltip(tooltipRetriever: Internal.EntityComponentProviderBuilder$TooltipRetriever_): this;
        hashCode(): number;
        wait(): void;
        getUniqueIdentifier(): ResourceLocation;
        getIconRetriever(): Internal.EntityComponentProviderBuilder$IconRetriever;
        wait(arg0: number): void;
        enabledByDefault(): Internal.ToggleableProviderBuilder;
        equals(arg0: any): boolean;
        get class(): typeof any
        set enabledByDefault(enabledByDefault: boolean)
        set tooltipRetriever(tooltipRetriever: Internal.EntityComponentProviderBuilder$TooltipRetriever_)
        get required(): boolean
        set required(isRequired: boolean)
        set iconRetriever(iconRetriever: Internal.EntityComponentProviderBuilder$IconRetriever_)
        get tooltipRetriever(): Internal.EntityComponentProviderBuilder$TooltipRetriever
        get enabledByDefault(): boolean
        set defaultPriority(priority: number)
        get defaultPriority(): number
        get uniqueIdentifier(): ResourceLocation
        get iconRetriever(): Internal.EntityComponentProviderBuilder$IconRetriever
    }
    type EntityComponentProviderBuilder_ = EntityComponentProviderBuilder;
    class SinglePoolElement extends Internal.StructurePoolElement implements com.finndog.mss.mixins.structures.SinglePoolElementAccessor, Internal.SinglePoolElementAccessor {
        getBoundingBox(arg0: Internal.StructureTemplateManager_, arg1: BlockPos_, arg2: Internal.Rotation_): Internal.BoundingBox;
        getClass(): typeof any;
        notify(): void;
        getGroundLevelDelta(): number;
        wait(arg0: number, arg1: number): void;
        place(arg0: Internal.StructureTemplateManager_, arg1: Internal.WorldGenLevel_, arg2: Internal.StructureManager_, arg3: Internal.ChunkGenerator_, arg4: BlockPos_, arg5: BlockPos_, arg6: Internal.Rotation_, arg7: Internal.BoundingBox_, arg8: Internal.RandomSource_, arg9: boolean): boolean;
        callGetTemplate(arg0: Internal.StructureTemplateManager_): Internal.StructureTemplate;
        mss_getProcessors(): Internal.Holder<any>;
        getDataMarkers(arg0: Internal.StructureTemplateManager_, arg1: BlockPos_, arg2: Internal.Rotation_, arg3: boolean): Internal.List<Internal.StructureTemplate$StructureBlockInfo>;
        getProjection(): Internal.StructureTemplatePool$Projection;
        static empty(): Internal.Function<Internal.StructureTemplatePool$Projection, Internal.EmptyPoolElement>;
        static list(arg0: Internal.List_<Internal.Function<Internal.StructureTemplatePool$Projection, Internal.StructurePoolElement>>): Internal.Function<Internal.StructureTemplatePool$Projection, Internal.ListPoolElement>;
        static legacy(arg0: string, arg1: Internal.Holder_<Internal.StructureProcessorList>): Internal.Function<Internal.StructureTemplatePool$Projection, Internal.LegacySinglePoolElement>;
        getType(): Internal.StructurePoolElementType<any>;
        toString(): string;
        getTemplate(arg0: Internal.StructureTemplateManager_): Internal.StructureTemplate;
        getShuffledJigsawBlocks(arg0: Internal.StructureTemplateManager_, arg1: BlockPos_, arg2: Internal.Rotation_, arg3: Internal.RandomSource_): Internal.List<Internal.StructureTemplate$StructureBlockInfo>;
        static single(arg0: string): Internal.Function<Internal.StructureTemplatePool$Projection, Internal.SinglePoolElement>;
        notifyAll(): void;
        handleDataMarker(arg0: Internal.LevelAccessor_, arg1: Internal.StructureTemplate$StructureBlockInfo_, arg2: BlockPos_, arg3: Internal.Rotation_, arg4: Internal.RandomSource_, arg5: Internal.BoundingBox_): void;
        getSize(arg0: Internal.StructureTemplateManager_, arg1: Internal.Rotation_): Vec3i;
        setProjection(arg0: Internal.StructureTemplatePool$Projection_): Internal.StructurePoolElement;
        hashCode(): number;
        mss_getTemplate(): Internal.Either<any, any>;
        static legacy(arg0: string): Internal.Function<Internal.StructureTemplatePool$Projection, Internal.LegacySinglePoolElement>;
        wait(): void;
        wait(arg0: number): void;
        static single(arg0: string, arg1: Internal.Holder_<Internal.StructureProcessorList>): Internal.Function<Internal.StructureTemplatePool$Projection, Internal.SinglePoolElement>;
        equals(arg0: any): boolean;
        static feature(arg0: Internal.Holder_<Internal.PlacedFeature>): Internal.Function<Internal.StructureTemplatePool$Projection, Internal.FeaturePoolElement>;
        get class(): typeof any
        get groundLevelDelta(): number
        get projection(): Internal.StructureTemplatePool$Projection
        get type(): Internal.StructurePoolElementType<any>
        set projection(arg0: Internal.StructureTemplatePool$Projection_)
        static readonly CODEC: Internal.Codec<Internal.SinglePoolElement>;
    }
    type SinglePoolElement_ = SinglePoolElement;
    class AnimationApplier extends dev.kosmx.playerAnim.core.impl.AnimationProcessor {
        constructor(animation: Internal.IAnimation_)
        getClass(): typeof any;
        getFirstPersonMode(): Internal.FirstPersonMode;
        updatePart(partName: string, part: Internal.ModelPart_): void;
        toString(): string;
        notifyAll(): void;
        getBend(modelName: string): Internal.Pair<number, number>;
        isActive(): boolean;
        isFirstPersonAnimationDisabled(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        tick(): void;
        getFirstPersonConfiguration(): Internal.FirstPersonConfiguration;
        hashCode(): number;
        setTickDelta(tickDelta: number): void;
        wait(): void;
        wait(arg0: number): void;
        get3DTransform(modelName: string, type: Internal.TransformType_, value0: Internal.Vec3f_): Internal.Vec3f;
        equals(arg0: any): boolean;
        get class(): typeof any
        get firstPersonMode(): Internal.FirstPersonMode
        get active(): boolean
        get firstPersonAnimationDisabled(): boolean
        get firstPersonConfiguration(): Internal.FirstPersonConfiguration
        set tickDelta(tickDelta: number)
    }
    type AnimationApplier_ = AnimationApplier;
    class TaggedChoice$TaggedChoiceType <K> extends com.mojang.datafixers.types.Type<com.mojang.datafixers.util.Pair<K, any>> {
        constructor(arg0: string, arg1: com.mojang.datafixers.types.Type_<K>, arg2: Internal.Object2ObjectMap_<K, com.mojang.datafixers.types.Type<any>>)
        getKeyType(): com.mojang.datafixers.types.Type<K>;
        getSetType<FT, FR>(arg0: Internal.OpticFinder_<FT>, arg1: com.mojang.datafixers.types.Type_<FR>): com.mojang.datafixers.types.Type<any>;
        ifSame<B>(arg0: com.mojang.datafixers.types.Type_<B>, arg1: B): Internal.Optional<com.mojang.datafixers.util.Pair<K, any>>;
        static elementResult<K, FT, FR>(arg0: K, arg1: Internal.TaggedChoice$TaggedChoiceType_<K>, arg2: Internal.RewriteResult_<FT, FR>): Internal.RewriteResult<com.mojang.datafixers.util.Pair<K, any>, com.mojang.datafixers.util.Pair<K, any>>;
        codec(): Internal.Codec<com.mojang.datafixers.util.Pair<K, any>>;
        notify(): void;
        readTyped<T>(arg0: Internal.Dynamic_<T>): Internal.DataResult<com.mojang.datafixers.util.Pair<Internal.Typed<com.mojang.datafixers.util.Pair<K, any>>, T>>;
        findTypeInChildren<FT, FR>(arg0: com.mojang.datafixers.types.Type_<FT>, arg1: com.mojang.datafixers.types.Type_<FR>, arg2: Internal.Type$TypeMatcher_<FT, FR>, arg3: boolean): Internal.Either<Internal.TypedOptic<com.mojang.datafixers.util.Pair<K, any>, any, FT, FR>, Internal.Type$FieldNotFoundException>;
        ifSame<B>(arg0: Internal.Typed_<B>): Internal.Optional<com.mojang.datafixers.util.Pair<K, any>>;
        static unbox<A>(arg0: Internal.App_<Internal.Type$Mu, A>): com.mojang.datafixers.types.Type<A>;
        findTypeCached<FT, FR>(arg0: com.mojang.datafixers.types.Type_<FT>, arg1: com.mojang.datafixers.types.Type_<FR>, arg2: Internal.Type$TypeMatcher_<FT, FR>, arg3: boolean): Internal.Either<Internal.TypedOptic<com.mojang.datafixers.util.Pair<K, any>, any, FT, FR>, Internal.Type$FieldNotFoundException>;
        "ifSame(com.mojang.datafixers.types.Type,com.mojang.datafixers.RewriteResult)"<B>(arg0: com.mojang.datafixers.types.Type_<B>, arg1: Internal.RewriteResult_<B, any>): Internal.Optional<Internal.RewriteResult<com.mojang.datafixers.util.Pair<K, any>, any>>;
        rewrite(arg0: Internal.TypeRewriteRule_, arg1: Internal.PointFreeRule_): Internal.Optional<Internal.RewriteResult<com.mojang.datafixers.util.Pair<K, any>, any>>;
        read<T>(arg0: Internal.DynamicOps_<T>, arg1: Internal.TypeRewriteRule_, arg2: Internal.PointFreeRule_, arg3: T): Internal.DataResult<com.mojang.datafixers.util.Pair<Internal.Optional<any>, T>>;
        write<T>(arg0: Internal.DynamicOps_<T>, arg1: com.mojang.datafixers.util.Pair_<K, any>): Internal.DataResult<T>;
        pointTyped(arg0: Internal.DynamicOps_<any>): Internal.Optional<Internal.Typed<com.mojang.datafixers.util.Pair<K, any>>>;
        rewriteOrNop(arg0: Internal.TypeRewriteRule_): Internal.RewriteResult<com.mojang.datafixers.util.Pair<K, any>, any>;
        ifSame<B>(arg0: com.mojang.datafixers.types.Type_<B>, arg1: Internal.RewriteResult_<B, any>): Internal.Optional<Internal.RewriteResult<com.mojang.datafixers.util.Pair<K, any>, any>>;
        wait(): void;
        point(arg0: Internal.DynamicOps_<any>, arg1: K, arg2: any): Internal.Optional<Internal.Typed<com.mojang.datafixers.util.Pair<K, any>>>;
        readTyped<T>(arg0: Internal.DynamicOps_<T>, arg1: T): Internal.DataResult<com.mojang.datafixers.util.Pair<Internal.Typed<com.mojang.datafixers.util.Pair<K, any>>, T>>;
        buildTemplate(): Internal.TypeTemplate;
        getClass(): typeof any;
        findChoiceType(arg0: string, arg1: number): Internal.Optional<Internal.TaggedChoice$TaggedChoiceType<any>>;
        read<T>(arg0: Internal.Dynamic_<T>): Internal.DataResult<com.mojang.datafixers.util.Pair<com.mojang.datafixers.util.Pair<K, any>, Internal.Dynamic<T>>>;
        all(arg0: Internal.TypeRewriteRule_, arg1: boolean, arg2: boolean): Internal.RewriteResult<com.mojang.datafixers.util.Pair<K, any>, any>;
        wait(arg0: number, arg1: number): void;
        readAndWrite<T>(arg0: Internal.DynamicOps_<T>, arg1: com.mojang.datafixers.types.Type_<any>, arg2: Internal.TypeRewriteRule_, arg3: Internal.PointFreeRule_, arg4: T): Internal.DataResult<T>;
        findField(arg0: string): Internal.OpticFinder<any>;
        getName(): string;
        equals(arg0: any, arg1: boolean, arg2: boolean): boolean;
        "ifSame(com.mojang.datafixers.types.Type,java.lang.Object)"<B>(arg0: com.mojang.datafixers.types.Type_<B>, arg1: B): Internal.Optional<com.mojang.datafixers.util.Pair<K, any>>;
        writeDynamic<T>(arg0: Internal.DynamicOps_<T>, arg1: com.mojang.datafixers.util.Pair_<K, any>): Internal.DataResult<Internal.Dynamic<T>>;
        static opticView<S, T, A, B>(arg0: com.mojang.datafixers.types.Type_<S>, arg1: Internal.RewriteResult_<A, B>, arg2: Internal.TypedOptic_<S, T, A, B>): Internal.RewriteResult<S, T>;
        finder(): Internal.OpticFinder<com.mojang.datafixers.util.Pair<K, any>>;
        toString(): string;
        everywhere(arg0: Internal.TypeRewriteRule_, arg1: Internal.PointFreeRule_, arg2: boolean, arg3: boolean): Internal.Optional<Internal.RewriteResult<com.mojang.datafixers.util.Pair<K, any>, any>>;
        notifyAll(): void;
        point(arg0: Internal.DynamicOps_<any>): Internal.Optional<com.mojang.datafixers.util.Pair<K, any>>;
        findCheckedType(arg0: number): Internal.Optional<com.mojang.datafixers.types.Type<any>>;
        hasType(arg0: K): boolean;
        hashCode(): number;
        findFieldTypeOpt(arg0: string): Internal.Optional<com.mojang.datafixers.types.Type<any>>;
        findType<FT, FR>(arg0: com.mojang.datafixers.types.Type_<FT>, arg1: com.mojang.datafixers.types.Type_<FR>, arg2: Internal.Type$TypeMatcher_<FT, FR>, arg3: boolean): Internal.Either<Internal.TypedOptic<com.mojang.datafixers.util.Pair<K, any>, any, FT, FR>, Internal.Type$FieldNotFoundException>;
        findFieldType(arg0: string): com.mojang.datafixers.types.Type<any>;
        wait(arg0: number): void;
        types(): Internal.Map<K, com.mojang.datafixers.types.Type<any>>;
        one(arg0: Internal.TypeRewriteRule_): Internal.Optional<Internal.RewriteResult<com.mojang.datafixers.util.Pair<K, any>, any>>;
        equals(arg0: any): boolean;
        updateMu(arg0: Internal.RecursiveTypeFamily_): com.mojang.datafixers.types.Type<any>;
        template(): Internal.TypeTemplate;
        get keyType(): com.mojang.datafixers.types.Type<K>
        get class(): typeof any
        get name(): string
    }
    type TaggedChoice$TaggedChoiceType_<K> = TaggedChoice$TaggedChoiceType<K>;
    class CustomCraftRecipeBuilder extends Internal.AbstractRecipeBuilder<Internal.CustomCraftRecipe> {
        constructor(machine: ResourceLocation_, output: Internal.ItemStack_)
        constructor(recipe: Internal.CustomCraftRecipe_)
        getJeiPriority(): number;
        getClass(): typeof any;
        toString(): string;
        getRequirements(): Internal.List<Internal.IRequirement<any>>;
        build(arg0: ResourceLocation_): Internal.IMachineRecipe;
        notifyAll(): void;
        isHidden(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getJeiRequirements(): Internal.List<Internal.IRequirement<any>>;
        withJeiPriority(arg0: number): Internal.IRecipeBuilder<any>;
        getMachine(): ResourceLocation;
        hashCode(): number;
        withJeiRequirement(arg0: Internal.IRequirement_<any>): Internal.IRecipeBuilder<any>;
        getPriority(): number;
        wait(): void;
        withPriority(arg0: number): Internal.IRecipeBuilder<any>;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        hide(): Internal.AbstractRecipeBuilder<Internal.CustomCraftRecipe>;
        withRequirement(arg0: Internal.IRequirement_<any>): Internal.IRecipeBuilder<any>;
        get jeiPriority(): number
        get class(): typeof any
        get requirements(): Internal.List<Internal.IRequirement<any>>
        get hidden(): boolean
        get jeiRequirements(): Internal.List<Internal.IRequirement<any>>
        get machine(): ResourceLocation
        get priority(): number
        static readonly CODEC: Internal.NamedCodec<Internal.CustomCraftRecipeBuilder>;
    }
    type CustomCraftRecipeBuilder_ = CustomCraftRecipeBuilder;
    class CarvingMaskPlacement extends Internal.PlacementModifier {
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        getPositions(arg0: Internal.PlacementContext_, arg1: Internal.RandomSource_, arg2: BlockPos_): Internal.Stream<BlockPos>;
        static forStep(arg0: Internal.GenerationStep$Carving_): Internal.CarvingMaskPlacement;
        wait(): void;
        type(): Internal.PlacementModifierType<any>;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        static readonly CODEC: Internal.Codec<Internal.CarvingMaskPlacement>;
    }
    type CarvingMaskPlacement_ = CarvingMaskPlacement;
    class ZombieEvent$SummonAidEvent extends Internal.ZombieEvent {
        constructor()
        constructor(arg0: Internal.Zombie_, arg1: Internal.Level_, arg2: number, arg3: number, arg4: number, arg5: Internal.LivingEntity_, arg6: number)
        setCanceled(arg0: boolean): void;
        getClass(): typeof any;
        getX(): number;
        getY(): number;
        setPhase(arg0: Internal.EventPriority_): void;
        isCanceled(): boolean;
        getSummonChance(): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getLevel(): Internal.Level;
        isCancelable(): boolean;
        getCustomSummonedAid(): Internal.Zombie;
        getListenerList(): Internal.ListenerList;
        getZ(): number;
        setCustomSummonedAid(arg0: Internal.Zombie_): void;
        getResult(): Internal.Event$Result;
        toString(): string;
        notifyAll(): void;
        hasResult(): boolean;
        setResult(arg0: Internal.Event$Result_): void;
        hashCode(): number;
        getEntity(): Internal.Entity;
        wait(): void;
        getAttacker(): Internal.LivingEntity;
        wait(arg0: number): void;
        getPhase(): Internal.EventPriority;
        equals(arg0: any): boolean;
        set canceled(arg0: boolean)
        get class(): typeof any
        get x(): number
        get y(): number
        set phase(arg0: Internal.EventPriority_)
        get canceled(): boolean
        get summonChance(): number
        get level(): Internal.Level
        get cancelable(): boolean
        get customSummonedAid(): Internal.Zombie
        get listenerList(): Internal.ListenerList
        get z(): number
        set customSummonedAid(arg0: Internal.Zombie_)
        get result(): Internal.Event$Result
        set result(arg0: Internal.Event$Result_)
        get entity(): Internal.Entity
        get attacker(): Internal.LivingEntity
        get phase(): Internal.EventPriority
    }
    type ZombieEvent$SummonAidEvent_ = ZombieEvent$SummonAidEvent;
    interface FPFragmentBuilder extends Internal.ShaderBuilder {
        abstract codeAppend(arg0: string): void;
        abstract codePrependf(arg0: string, ...arg1: any[]): void;
        abstract codeAppendf(arg0: string, ...arg1: any[]): void;
        abstract getMangledName(arg0: string): string;
    }
    type FPFragmentBuilder_ = FPFragmentBuilder;
    class Direction8 extends Internal.Enum<Internal.Direction8> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        toString(): string;
        compareTo(arg0: Internal.Direction8_): number;
        "compareTo(net.minecraft.core.Direction8)"(arg0: Internal.Direction8_): number;
        notifyAll(): void;
        static valueOf(arg0: string): Internal.Direction8;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.Direction8>>;
        name(): string;
        getDirections(): Internal.Set<Internal.Direction>;
        hashCode(): number;
        getStepX(): number;
        getStepZ(): number;
        getDeclaringClass(): typeof Internal.Direction8;
        ordinal(): number;
        wait(): void;
        static values(): Internal.Direction8[];
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get directions(): Internal.Set<Internal.Direction>
        get stepX(): number
        get stepZ(): number
        get declaringClass(): typeof Internal.Direction8
        static readonly NORTH_EAST: (Internal.Direction8) & (Internal.Direction8);
        static readonly EAST: (Internal.Direction8) & (Internal.Direction8);
        static readonly NORTH_WEST: (Internal.Direction8) & (Internal.Direction8);
        static readonly SOUTH_EAST: (Internal.Direction8) & (Internal.Direction8);
        static readonly SOUTH_WEST: (Internal.Direction8) & (Internal.Direction8);
        static readonly NORTH: (Internal.Direction8) & (Internal.Direction8);
        static readonly SOUTH: (Internal.Direction8) & (Internal.Direction8);
        static readonly WEST: (Internal.Direction8) & (Internal.Direction8);
    }
    type Direction8_ = "north_west" | "west" | "north_east" | "east" | "south_west" | "south" | "north" | Direction8 | "south_east";
    class BookCategory extends Internal.AbstractReadStateHolder implements Internal.Comparable<Internal.BookCategory> {
        constructor(arg0: Internal.JsonObject_, arg1: ResourceLocation_, arg2: Internal.Book_)
        getClass(): typeof any;
        addEntry(arg0: Internal.BookEntry_): void;
        build(arg0: Internal.BookContentsBuilder_): void;
        getDescription(): string;
        isSecret(): boolean;
        markReadStateDirty(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        canAdd(): boolean;
        addChildCategory(arg0: Internal.BookCategory_): void;
        getId(): ResourceLocation;
        isRootCategory(): boolean;
        getName(): Internal.MutableComponent;
        "compareTo(vazkii.patchouli.client.book.BookCategory)"(arg0: Internal.BookCategory_): number;
        updateLockStatus(arg0: boolean): void;
        toString(): string;
        compareTo(arg0: Internal.BookCategory_): number;
        notifyAll(): void;
        shouldHide(): boolean;
        getEntries(): Internal.List<Internal.BookEntry>;
        getBook(): Internal.Book;
        getIcon(): Internal.BookIcon;
        isLocked(): boolean;
        getParentCategory(): this;
        hashCode(): number;
        wait(): void;
        getReadState(): Internal.EntryDisplayState;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        static mostImportantState(arg0: Internal.Stream_<Internal.EntryDisplayState>): Internal.EntryDisplayState;
        get class(): typeof any
        get description(): string
        get secret(): boolean
        get id(): ResourceLocation
        get rootCategory(): boolean
        get name(): Internal.MutableComponent
        get entries(): Internal.List<Internal.BookEntry>
        get book(): Internal.Book
        get icon(): Internal.BookIcon
        get locked(): boolean
        get parentCategory(): Internal.BookCategory
        get readState(): Internal.EntryDisplayState
    }
    type BookCategory_ = BookCategory;
    class SpectralStonecutterBlock extends Internal.StonecutterBlock implements Internal.SimpleWaterloggedBlock, Internal.ITranslucentBlock, Internal.EntityBlock {
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
        static readonly CONTAINER_TITLE: (Internal.MutableComponent) & (net.minecraft.network.chat.Component);
    }
    type SpectralStonecutterBlock_ = SpectralStonecutterBlock;
    abstract class AbstractByteBufAllocator implements Internal.ByteBufAllocator {
        compositeDirectBuffer(arg0: number): Internal.CompositeByteBuf;
        getClass(): typeof any;
        compositeHeapBuffer(arg0: number): Internal.CompositeByteBuf;
        compositeBuffer(): Internal.CompositeByteBuf;
        ioBuffer(): Internal.ByteBuf;
        heapBuffer(arg0: number): Internal.ByteBuf;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        calculateNewCapacity(arg0: number, arg1: number): number;
        directBuffer(arg0: number, arg1: number): Internal.ByteBuf;
        buffer(): Internal.ByteBuf;
        toString(): string;
        compositeDirectBuffer(): Internal.CompositeByteBuf;
        heapBuffer(arg0: number, arg1: number): Internal.ByteBuf;
        notifyAll(): void;
        heapBuffer(): Internal.ByteBuf;
        ioBuffer(arg0: number): Internal.ByteBuf;
        compositeBuffer(arg0: number): Internal.CompositeByteBuf;
        directBuffer(): Internal.ByteBuf;
        abstract isDirectBufferPooled(): boolean;
        hashCode(): number;
        directBuffer(arg0: number): Internal.ByteBuf;
        buffer(arg0: number, arg1: number): Internal.ByteBuf;
        ioBuffer(arg0: number, arg1: number): Internal.ByteBuf;
        wait(): void;
        wait(arg0: number): void;
        compositeHeapBuffer(): Internal.CompositeByteBuf;
        equals(arg0: any): boolean;
        buffer(arg0: number): Internal.ByteBuf;
        get class(): typeof any
        get directBufferPooled(): boolean
    }
    type AbstractByteBufAllocator_ = AbstractByteBufAllocator;
    interface IScrollGridWidgetFactory <R> extends Internal.ISlottedWidgetFactory<R> {
        abstract setPosition(arg0: number, arg1: number): void;
        abstract getArea(): Internal.ScreenRectangle;
        abstract createWidgetForSlots(arg0: Internal.IRecipeExtrasBuilder_, arg1: R, arg2: Internal.List_<Internal.IRecipeSlotDrawable>): void;
        get area(): Internal.ScreenRectangle
    }
    type IScrollGridWidgetFactory_<R> = IScrollGridWidgetFactory<R>;
    interface DoubleToIntFunction {
        abstract applyAsInt(arg0: number): number;
        (arg0: number): number;
    }
    type DoubleToIntFunction_ = ((arg0: number)=> number) | DoubleToIntFunction;
    class RenderContext implements Internal.Cloneable {
        constructor(arg0: Internal.AffineTransform_, arg1: Internal.Shape_)
        constructor(arg0: Internal.AffineTransform_)
        constructor(arg0: Internal.AffineTransform_, arg1: Internal.RenderingHints_)
        constructor(arg0: Internal.AffineTransform_, arg1: Internal.Shape_, arg2: Internal.RenderingHints_)
        clone(): any;
        getClass(): typeof any;
        toString(): string;
        preConcatenateTransform(arg0: Internal.AffineTransform_): void;
        concatenateTransform(arg0: Internal.AffineTransform_): void;
        /**
         * @deprecated
        */
        concetenateTransform(arg0: Internal.AffineTransform_): void;
        setAreaOfInterest(arg0: Internal.Shape_): void;
        notifyAll(): void;
        getTransform(): Internal.AffineTransform;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        setTransform(arg0: Internal.AffineTransform_): void;
        /**
         * @deprecated
        */
        preConcetenateTransform(arg0: Internal.AffineTransform_): void;
        getAreaOfInterest(): Internal.Shape;
        hashCode(): number;
        setRenderingHints(arg0: Internal.RenderingHints_): void;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        getRenderingHints(): Internal.RenderingHints;
        get class(): typeof any
        set areaOfInterest(arg0: Internal.Shape_)
        get transform(): Internal.AffineTransform
        set transform(arg0: Internal.AffineTransform_)
        get areaOfInterest(): Internal.Shape
        set renderingHints(arg0: Internal.RenderingHints_)
        get renderingHints(): Internal.RenderingHints
    }
    type RenderContext_ = RenderContext;
    abstract class ViewportEvent extends net.minecraftforge.eventbus.api.Event {
        constructor()
        constructor(arg0: Internal.GameRenderer_, arg1: Internal.Camera_, arg2: number)
        getResult(): Internal.Event$Result;
        setCanceled(arg0: boolean): void;
        getClass(): typeof any;
        toString(): string;
        setPhase(arg0: Internal.EventPriority_): void;
        getRenderer(): Internal.GameRenderer;
        notifyAll(): void;
        getCamera(): Internal.Camera;
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
        getPartialTick(): number;
        equals(arg0: any): boolean;
        get result(): Internal.Event$Result
        set canceled(arg0: boolean)
        get class(): typeof any
        set phase(arg0: Internal.EventPriority_)
        get renderer(): Internal.GameRenderer
        get camera(): Internal.Camera
        get canceled(): boolean
        set result(arg0: Internal.Event$Result_)
        get cancelable(): boolean
        get listenerList(): Internal.ListenerList
        get phase(): Internal.EventPriority
        get partialTick(): number
    }
    type ViewportEvent_ = ViewportEvent;
    interface Paint extends Internal.Transparency {
        abstract createContext(arg0: Internal.ColorModel_, arg1: Internal.Rectangle_, arg2: Internal.Rectangle2D_, arg3: Internal.AffineTransform_, arg4: Internal.RenderingHints_): Internal.PaintContext;
        abstract getTransparency(): number;
        get transparency(): number
    }
    type Paint_ = Paint;
    class ScatteredOreFeature extends Feature<Internal.OreConfiguration> {
        getClass(): typeof any;
        place(arg0: Internal.FeaturePlaceContext_<Internal.OreConfiguration>): boolean;
        configuredCodec(): Internal.Codec<Internal.ConfiguredFeature<Internal.OreConfiguration, Feature<Internal.OreConfiguration>>>;
        toString(): string;
        static checkNeighbors(arg0: Internal.Function_<BlockPos, Internal.BlockState>, arg1: BlockPos_, arg2: Internal.Predicate_<Internal.BlockState>): boolean;
        notifyAll(): void;
        notify(): void;
        static isAdjacentToAir(arg0: Internal.Function_<BlockPos, Internal.BlockState>, arg1: BlockPos_): boolean;
        wait(arg0: number, arg1: number): void;
        static isGrassOrDirt(arg0: Internal.LevelSimulatedReader_, arg1: BlockPos_): boolean;
        hashCode(): number;
        place(arg0: Internal.OreConfiguration_, arg1: Internal.WorldGenLevel_, arg2: Internal.ChunkGenerator_, arg3: Internal.RandomSource_, arg4: BlockPos_): boolean;
        wait(): void;
        wait(arg0: number): void;
        static isDirt(arg0: Internal.BlockState_): boolean;
        equals(arg0: any): boolean;
        static isReplaceable(arg0: Internal.TagKey_<Internal.Block>): Internal.Predicate<Internal.BlockState>;
        get class(): typeof any
    }
    type ScatteredOreFeature_ = ScatteredOreFeature;
    interface FileNotFoundAction {
        copyData(arg0: Internal.InputStream_): this;
        "copyData(java.nio.file.Path)"(arg0: Internal.Path_): this;
        "copyData(java.net.URL)"(arg0: Internal.URL_): this;
        "copyData(java.io.File)"(arg0: Internal.File_): this;
        copyData(arg0: Internal.URL_): this;
        abstract run(arg0: Internal.Path_, arg1: Internal.ConfigFormat_<any>): boolean;
        copyData(arg0: Internal.File_): this;
        copyResource(arg0: string): this;
        "copyData(java.io.InputStream)"(arg0: Internal.InputStream_): this;
        copyData(arg0: Internal.Path_): this;
        (arg0: Internal.Path, arg1: Internal.ConfigFormat<any>): boolean;
        readonly THROW_ERROR: Internal.FileNotFoundAction;
        readonly READ_NOTHING: Internal.FileNotFoundAction;
        readonly CREATE_EMPTY: Internal.FileNotFoundAction;
    }
    type FileNotFoundAction_ = FileNotFoundAction | ((arg0: Internal.Path, arg1: Internal.ConfigFormat<any>)=> boolean);
    class ContextUtils$PlayerRenderContext {
        constructor(renderer: Internal.PlayerRenderer_, entity: Internal.AbstractClientPlayer_, entityYaw: number, partialTicks: number, poseStack: Internal.PoseStack_, buffer: Internal.MultiBufferSource_, packedLight: number)
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
        readonly packedLight: number;
        readonly buffer: Internal.MultiBufferSource;
        readonly partialTicks: number;
        readonly renderer: Internal.PlayerRenderer;
        readonly poseStack: Internal.PoseStack;
        readonly entity: Internal.AbstractClientPlayer;
        readonly entityYaw: number;
    }
    type ContextUtils$PlayerRenderContext_ = ContextUtils$PlayerRenderContext;
    interface IWaxable {
        abstract setWaxed(arg0: boolean): void;
        tryWaxing(level: Internal.Level_, pos: BlockPos_, player: Internal.Player_, hand: Internal.InteractionHand_): Internal.InteractionResult;
        abstract isWaxed(): boolean;
        set waxed(arg0: boolean)
        get waxed(): boolean
    }
    type IWaxable_ = IWaxable;
    abstract class ItemAndPatternRecipe extends Internal.AMRecipeBase implements Internal.IItemAndPatternRecipe {
        constructor(arg0: ResourceLocation_)
        getGroup(): string;
        getToastSymbol(): Internal.ItemStack;
        "matches(net.minecraft.world.inventory.CraftingContainer,net.minecraft.world.level.Level)"(arg0: Internal.CraftingContainer_, arg1: Internal.Level_): boolean;
        setRequiredPatterns(arg0: ResourceLocation_[]): void;
        runValidation(): void;
        notify(): void;
        getRemainingItems(arg0: Internal.CraftingContainer_): Internal.NonNullList<Internal.ItemStack>;
        assemble(arg0: Internal.CraftingContainer_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        getId(): ResourceLocation;
        getOutputQuantity(): number;
        getResultItem(): Internal.ItemStack;
        getByproducts(): Internal.ImmutableList<Internal.RecipeByproduct>;
        getRequiredPatterns(): ResourceLocation[];
        isSpecial(): boolean;
        "assemble(net.minecraft.world.inventory.CraftingContainer,net.minecraft.core.RegistryAccess)"(arg0: Internal.CraftingContainer_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        showNotification(): boolean;
        replaceInput(match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): boolean;
        getType(): ResourceLocation;
        wait(): void;
        isIncomplete(): boolean;
        parseExtraJson(arg0: Internal.JsonObject_): void;
        abstract getGuiRepresentationStack(): Internal.ItemStack;
        getClass(): typeof any;
        matches(arg0: Internal.CraftingContainer_, arg1: Internal.Level_): boolean;
        getSchema(): Internal.RecipeSchema;
        getFactionRequirement(): Internal.IFaction;
        getRequiredItems(): ResourceLocation[];
        "assemble(net.minecraft.world.Container,net.minecraft.core.RegistryAccess)"(arg0: net.minecraft.world.Container_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        wait(arg0: number, arg1: number): void;
        category(): Internal.CraftingBookCategory;
        assemble(arg0: net.minecraft.world.Container_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        abstract getSerializer(): Internal.RecipeSerializer<any>;
        getOutput(): ResourceLocation;
        matches(arg0: net.minecraft.world.Container_, arg1: Internal.Level_): boolean;
        getMod(): string;
        getIngredients(): Internal.NonNullList<Internal.Ingredient>;
        setRequiredFaction(arg0: ResourceLocation_): void;
        hasOutput(match: Internal.ReplacementMatch_): boolean;
        setOutput(arg0: ResourceLocation_): void;
        getResultItem(arg0: Internal.RegistryAccess_): Internal.ItemStack;
        toString(): string;
        getTier(): number;
        notifyAll(): void;
        setOutputQuantity(arg0: number): void;
        parseJSON(arg0: Internal.JsonObject_): void;
        rollByproducts(arg0: Internal.RandomSource_): Internal.ArrayList<Internal.ItemStack>;
        "matches(net.minecraft.world.Container,net.minecraft.world.level.Level)"(arg0: net.minecraft.world.Container_, arg1: Internal.Level_): boolean;
        setGroup(group: string): void;
        hashCode(): number;
        setRequiredItems(arg0: ResourceLocation_[]): void;
        getOrCreateId(): ResourceLocation;
        hasInput(match: Internal.ReplacementMatch_): boolean;
        wait(arg0: number): void;
        abstract getRegistryId(): ResourceLocation;
        replaceOutput(match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): boolean;
        equals(arg0: any): boolean;
        get group(): string
        get toastSymbol(): Internal.ItemStack
        set requiredPatterns(arg0: ResourceLocation_[])
        get id(): ResourceLocation
        get outputQuantity(): number
        get resultItem(): Internal.ItemStack
        get byproducts(): Internal.ImmutableList<Internal.RecipeByproduct>
        get requiredPatterns(): ResourceLocation[]
        get special(): boolean
        get type(): ResourceLocation
        get incomplete(): boolean
        get guiRepresentationStack(): Internal.ItemStack
        get class(): typeof any
        get schema(): Internal.RecipeSchema
        get factionRequirement(): Internal.IFaction
        get requiredItems(): ResourceLocation[]
        get serializer(): Internal.RecipeSerializer<any>
        get output(): ResourceLocation
        get mod(): string
        get ingredients(): Internal.NonNullList<Internal.Ingredient>
        set requiredFaction(arg0: ResourceLocation_)
        set output(arg0: ResourceLocation_)
        get tier(): number
        set outputQuantity(arg0: number)
        set group(group: string)
        set requiredItems(arg0: ResourceLocation_[])
        get orCreateId(): ResourceLocation
        get registryId(): ResourceLocation
    }
    type ItemAndPatternRecipe_ = ItemAndPatternRecipe;
    interface VerticalAnchor {
        aboveBottom(arg0: number): this;
        absolute(arg0: number): this;
        belowTop(arg0: number): this;
        bottom(): this;
        top(): this;
        abstract resolveY(arg0: Internal.WorldGenerationContext_): number;
        (arg0: Internal.WorldGenerationContext): number;
        readonly BOTTOM: (Internal.VerticalAnchor$AboveBottom) & (Internal.VerticalAnchor);
        readonly CODEC: Internal.Codec<Internal.VerticalAnchor>;
        readonly TOP: (Internal.VerticalAnchor$BelowTop) & (Internal.VerticalAnchor);
    }
    type VerticalAnchor_ = ((arg0: Internal.WorldGenerationContext)=> number) | VerticalAnchor;
    class AnimationController$State extends Internal.Enum<Internal.AnimationController$State> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        static values(): Internal.AnimationController$State[];
        toString(): string;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        name(): string;
        hashCode(): number;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.AnimationController$State>>;
        getDeclaringClass(): typeof Internal.AnimationController$State;
        static valueOf(arg0: string): Internal.AnimationController$State;
        compareTo(arg0: Internal.AnimationController$State_): number;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        "compareTo(software.bernie.geckolib.core.animation.AnimationController$State)"(arg0: Internal.AnimationController$State_): number;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get declaringClass(): typeof Internal.AnimationController$State
        static readonly TRANSITIONING: (Internal.AnimationController$State) & (Internal.AnimationController$State);
        static readonly PAUSED: (Internal.AnimationController$State) & (Internal.AnimationController$State);
        static readonly RUNNING: (Internal.AnimationController$State) & (Internal.AnimationController$State);
        static readonly STOPPED: (Internal.AnimationController$State) & (Internal.AnimationController$State);
    }
    type AnimationController$State_ = "transitioning" | "paused" | AnimationController$State | "stopped" | "running";
    class BillboardParticleBehavior implements Internal.LodestoneParticleBehavior {
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        getComponent(arg0: Internal.LodestoneBehaviorComponent_): Internal.LodestoneBehaviorComponent;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        render(arg0: Internal.LodestoneWorldParticle_, arg1: Internal.VertexConsumer_, arg2: Internal.Camera_, arg3: number): void;
        get class(): typeof any
    }
    type BillboardParticleBehavior_ = BillboardParticleBehavior;
    abstract class Toolkit {
        getMenuShortcutKeyMaskEx(): number;
        getSystemSelection(): Internal.Clipboard;
        abstract "getImage(java.lang.String)"(arg0: string): Internal.Image;
        static getProperty(arg0: string, arg1: string): string;
        notify(): void;
        "createImage(byte[])"(arg0: number[]): Internal.Image;
        abstract mapInputMethodHighlight(arg0: Internal.InputMethodHighlight_): Internal.Map<Internal.TextAttribute, any>;
        createCustomCursor(arg0: Internal.Image_, arg1: Internal.Point_, arg2: string): Internal.Cursor;
        isDynamicLayoutActive(): boolean;
        getBestCursorSize(arg0: number, arg1: number): Internal.Dimension;
        abstract "createImage(java.lang.String)"(arg0: string): Internal.Image;
        getPropertyChangeListeners(): Internal.PropertyChangeListener[];
        abstract createImage(arg0: number[], arg1: number, arg2: number): Internal.Image;
        isAlwaysOnTopSupported(): boolean;
        abstract createImage(arg0: Internal.ImageProducer_): Internal.Image;
        areExtraMouseButtonsEnabled(): boolean;
        abstract "getImage(java.net.URL)"(arg0: Internal.URL_): Internal.Image;
        getLockingKeyState(arg0: number): boolean;
        abstract checkImage(arg0: Internal.Image_, arg1: number, arg2: number, arg3: Internal.ImageObserver_): number;
        setLockingKeyState(arg0: number, arg1: boolean): void;
        createImage(arg0: number[]): Internal.Image;
        removeAWTEventListener(arg0: Internal.AWTEventListener_): void;
        wait(): void;
        abstract createImage(arg0: string): Internal.Image;
        getScreenInsets(arg0: Internal.GraphicsConfiguration_): Internal.Insets;
        getClass(): typeof any;
        removePropertyChangeListener(arg0: string, arg1: Internal.PropertyChangeListener_): void;
        abstract getImage(arg0: Internal.URL_): Internal.Image;
        abstract "createImage(java.net.URL)"(arg0: Internal.URL_): Internal.Image;
        abstract getImage(arg0: string): Internal.Image;
        abstract createImage(arg0: Internal.URL_): Internal.Image;
        getMaximumCursorColors(): number;
        wait(arg0: number, arg1: number): void;
        /**
         * @deprecated
        */
        abstract getFontMetrics(arg0: Internal.Font_): Internal.FontMetrics;
        getDesktopProperty(arg0: string): any;
        getAWTEventListeners(): Internal.AWTEventListener[];
        addPropertyChangeListener(arg0: string, arg1: Internal.PropertyChangeListener_): void;
        /**
         * @deprecated
        */
        abstract getFontList(): string[];
        abstract isModalExclusionTypeSupported(arg0: Internal.Dialog$ModalExclusionType_): boolean;
        abstract getColorModel(): Internal.ColorModel;
        getSystemEventQueue(): Internal.EventQueue;
        abstract sync(): void;
        getAWTEventListeners(arg0: number): Internal.AWTEventListener[];
        abstract getPrintJob(arg0: Internal.Frame_, arg1: string, arg2: Internal.Properties_): Internal.PrintJob;
        abstract isModalityTypeSupported(arg0: Internal.Dialog$ModalityType_): boolean;
        getPropertyChangeListeners(arg0: string): Internal.PropertyChangeListener[];
        toString(): string;
        isFrameStateSupported(arg0: number): boolean;
        abstract getScreenResolution(): number;
        notifyAll(): void;
        addAWTEventListener(arg0: Internal.AWTEventListener_, arg1: number): void;
        createDragGestureRecognizer<T extends Internal.DragGestureRecognizer>(arg0: T, arg1: Internal.DragSource_, arg2: Internal.Component_, arg3: number, arg4: Internal.DragGestureListener_): T;
        abstract beep(): void;
        abstract getScreenSize(): Internal.Dimension;
        /**
         * @deprecated
        */
        getMenuShortcutKeyMask(): number;
        static getDefaultToolkit(): Internal.Toolkit;
        hashCode(): number;
        setDynamicLayout(arg0: boolean): void;
        getPrintJob(arg0: Internal.Frame_, arg1: string, arg2: Internal.JobAttributes_, arg3: Internal.PageAttributes_): Internal.PrintJob;
        abstract prepareImage(arg0: Internal.Image_, arg1: number, arg2: number, arg3: Internal.ImageObserver_): boolean;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        abstract "createImage(java.awt.image.ImageProducer)"(arg0: Internal.ImageProducer_): Internal.Image;
        abstract getSystemClipboard(): Internal.Clipboard;
        get menuShortcutKeyMaskEx(): number
        get systemSelection(): Internal.Clipboard
        get dynamicLayoutActive(): boolean
        get propertyChangeListeners(): Internal.PropertyChangeListener[]
        get alwaysOnTopSupported(): boolean
        get class(): typeof any
        get maximumCursorColors(): number
        get AWTEventListeners(): Internal.AWTEventListener[]
        /**
         * @deprecated
        */
        get fontList(): string[]
        get colorModel(): Internal.ColorModel
        get systemEventQueue(): Internal.EventQueue
        get screenResolution(): number
        get screenSize(): Internal.Dimension
        /**
         * @deprecated
        */
        get menuShortcutKeyMask(): number
        get defaultToolkit(): Internal.Toolkit
        set dynamicLayout(arg0: boolean)
        get systemClipboard(): Internal.Clipboard
    }
    type Toolkit_ = Toolkit;
    interface BlockEntityInstancingController <T extends Internal.BlockEntity> {
        abstract shouldSkipRender(arg0: T): boolean;
        abstract createInstance(arg0: Internal.MaterialManager_, arg1: T): Internal.BlockEntityInstance<T>;
    }
    type BlockEntityInstancingController_<T extends Internal.BlockEntity> = BlockEntityInstancingController<T>;
    interface IForgeRegistry$ValidateCallback <V> {
        abstract onValidate(arg0: Internal.IForgeRegistryInternal_<V>, arg1: Internal.RegistryManager_, arg2: number, arg3: ResourceLocation_, arg4: V): void;
        (arg0: Internal.IForgeRegistryInternal<V>, arg1: Internal.RegistryManager, arg2: number, arg3: ResourceLocation, arg4: V): void;
    }
    type IForgeRegistry$ValidateCallback_<V> = ((arg0: Internal.IForgeRegistryInternal<V>, arg1: Internal.RegistryManager, arg2: number, arg3: ResourceLocation, arg4: V)=> void) | IForgeRegistry$ValidateCallback<V>;
    class FactionAmuletItem extends Internal.ChargeableItem implements Internal.ICurioItem, Internal.IForgeItem {
        constructor(arg0: Internal.Item$Properties_)
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        getMaxIre(): number;
        getDrinkingSound(): Internal.SoundEvent;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        canSync(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        moonlight$addAdditionalBehavior(placementOverride: Internal.AdditionalItemPlacement_): void;
        isFireResistant(): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        canUnequip(arg0: string, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_): boolean;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        canWalkOnPowderedSnow(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): boolean;
        moonlight$getClientAnimationExtension(): any;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        asItem(): Internal.Item;
        getTypeData(): Internal.CompoundTag;
        getDefaultInstance(): Internal.ItemStack;
        curioTick(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getLootingBonus(arg0: string, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): number;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getBarColor(arg0: Internal.ItemStack_): number;
        getItem(): Internal.Item;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        canEquip(arg0: string, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_): boolean;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        getClass(): typeof any;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        showAttributesTooltip(arg0: string, arg1: Internal.ItemStack_): boolean;
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
        onEquipFromUse(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): void;
        canUnequip(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): boolean;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        writeSyncData(arg0: Internal.ItemStack_): Internal.CompoundTag;
        attachCapability(capabilityBuilder: Internal.CapabilityBuilder_<any, any, any>): void;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        "getAttributeModifiers(java.lang.String,net.minecraft.world.item.ItemStack)"(arg0: string, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        readSyncData(arg0: Internal.CompoundTag_, arg1: Internal.ItemStack_): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        canSync(arg0: string, arg1: number, arg2: Internal.LivingEntity_, arg3: Internal.ItemStack_): boolean;
        getTier(arg0: Internal.Level_, arg1: Internal.ItemStack_): number;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getFortuneBonus(arg0: string, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): number;
        getMinIre(): number;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onEquip(arg0: string, arg1: number, arg2: Internal.LivingEntity_, arg3: Internal.ItemStack_): void;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        curioTick(arg0: string, arg1: number, arg2: Internal.LivingEntity_, arg3: Internal.ItemStack_): void;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        isEquippedAndHasMana(arg0: Internal.LivingEntity_, arg1: number, arg2: boolean): boolean;
        isEnderMask(arg0: Internal.SlotContext_, arg1: Internal.EnderMan_, arg2: Internal.ItemStack_): boolean;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        getUseDuration(arg0: Internal.ItemStack_): number;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        canRightClickEquip(arg0: Internal.ItemStack_): boolean;
        getEquipSound(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): Internal.ICurio$SoundInfo;
        resolveTier(arg0: Internal.Level_, arg1: Internal.ItemStack_): number;
        setCachedTier(arg0: number): void;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        getFaction(): Internal.IFaction;
        getMana(arg0: Internal.ItemStack_): number;
        getCachedTier(): number;
        handler$dpg000$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        refundMana(arg0: Internal.ItemStack_, arg1: number, arg2: Internal.Player_): number;
        getMaxMana(): number;
        setFireResistant(arg0: boolean): void;
        "makesPiglinsNeutral(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.LivingEntity)"(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        curioBreak(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        setNameKey(arg0: string): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vec3f;
        "isEnderMask(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.player.Player,net.minecraft.world.entity.monster.EnderMan)"(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
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
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        "curioBreak(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.LivingEntity)"(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): void;
        consumeMana(arg0: Internal.ItemStack_, arg1: number, arg2: Internal.Player_): boolean;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        getDropRule(arg0: Internal.SlotContext_, arg1: Internal.DamageSource_, arg2: number, arg3: boolean, arg4: Internal.ItemStack_): Internal.ICurio$DropRule;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        "canWalkOnPowderedSnow(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.LivingEntity)"(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        setRarity(arg0: Internal.Rarity_): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onUnequip(arg0: string, arg1: number, arg2: Internal.LivingEntity_, arg3: Internal.ItemStack_): void;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        usedByPlayer(arg0: Internal.Player_): void;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isComplex(): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: Internal.DamageSource_): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getDropRule(arg0: Internal.LivingEntity_, arg1: Internal.ItemStack_): Internal.ICurio$DropRule;
        getAttributesTooltip(arg0: Internal.List_<net.minecraft.network.chat.Component>, arg1: Internal.ItemStack_): Internal.List<net.minecraft.network.chat.Component>;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        playRightClickEquipSound(arg0: Internal.LivingEntity_, arg1: Internal.ItemStack_): void;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        hasCurioCapability(arg0: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        getAttributeModifiers(arg0: Internal.SlotContext_, arg1: Internal.UUID_, arg2: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        "curioBreak(top.theillusivec4.curios.api.SlotContext,net.minecraft.world.item.ItemStack)"(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): void;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: Internal.DamageSource_): void;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getItemBuilder(): Internal.ItemBuilder;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        getDescription(): net.minecraft.network.chat.Component;
        "makesPiglinsNeutral(top.theillusivec4.curios.api.SlotContext,net.minecraft.world.item.ItemStack)"(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): boolean;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getTagsTooltip(arg0: Internal.List_<net.minecraft.network.chat.Component>, arg1: Internal.ItemStack_): Internal.List<net.minecraft.network.chat.Component>;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setAttackDamage(attackDamage: number): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        toString(): string;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        curioBreak(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): void;
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
        abstract isRepairable(arg0: Internal.ItemStack_): boolean;
        notify(): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        curioAnimate(arg0: string, arg1: number, arg2: Internal.LivingEntity_, arg3: Internal.ItemStack_): void;
        readSyncData(arg0: Internal.SlotContext_, arg1: Internal.CompoundTag_, arg2: Internal.ItemStack_): void;
        getLootingLevel(arg0: Internal.SlotContext_, arg1: Internal.DamageSource_, arg2: Internal.LivingEntity_, arg3: number, arg4: Internal.ItemStack_): number;
        writeSyncData(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): Internal.CompoundTag;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canEquipFromUse(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        getFortuneLevel(arg0: Internal.SlotContext_, arg1: Internal.LootContext_, arg2: Internal.ItemStack_): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        applyEffect(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Level_, arg3: number, arg4: number, arg5: boolean): boolean;
        setSneakBypass(): com.mna.api.items.TieredItem;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        onUnequip(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_): void;
        onEquip(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        "canEquip(java.lang.String,net.minecraft.world.entity.LivingEntity,net.minecraft.world.item.ItemStack)"(arg0: string, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_): boolean;
        canBeDepleted(): boolean;
        "canWalkOnPowderedSnow(top.theillusivec4.curios.api.SlotContext,net.minecraft.world.item.ItemStack)"(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): boolean;
        getDamage(arg0: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        getSlotsTooltip(arg0: Internal.List_<net.minecraft.network.chat.Component>, arg1: Internal.ItemStack_): Internal.List<net.minecraft.network.chat.Component>;
        "isEnderMask(top.theillusivec4.curios.api.SlotContext,net.minecraft.world.entity.monster.EnderMan,net.minecraft.world.item.ItemStack)"(arg0: Internal.SlotContext_, arg1: Internal.EnderMan_, arg2: Internal.ItemStack_): boolean;
        getMod(): string;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        makesPiglinsNeutral(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): boolean;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getAttributeModifiers(arg0: string, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        "canEquip(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.entity.Entity)"(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        canEquip(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): boolean;
        get maxIre(): number
        get drinkingSound(): Internal.SoundEvent
        get fireResistant(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get typeData(): Internal.CompoundTag
        get defaultInstance(): Internal.ItemStack
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get class(): typeof any
        get renderPropertiesInternal(): any
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        get edible(): boolean
        get minIre(): number
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        set cachedTier(arg0: number)
        get faction(): Internal.IFaction
        get cachedTier(): number
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        get maxMana(): number
        set fireResistant(arg0: boolean)
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
        set rarity(arg0: Internal.Rarity_)
        get complex(): boolean
        get descriptionId(): string
        get creativeTab(): string
        set burnTime(i: number)
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
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
        /**
         * @deprecated
        */
        get maxStackSize(): number
        get eatingSound(): Internal.SoundEvent
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
    }
    type FactionAmuletItem_ = FactionAmuletItem;
    class CuriosApi {
        constructor()
        notify(): void;
        static getSlot(arg0: string, arg1: Internal.Level_): Internal.Optional<Internal.ISlotType>;
        static getPlayerSlots(arg0: boolean): Internal.Map<string, Internal.ISlotType>;
        /**
         * @deprecated
        */
        static getSlots(): Internal.Map<string, Internal.ISlotType>;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        static getSlotHelper(): Internal.ISlotHelper;
        static getCuriosInventory(arg0: Internal.LivingEntity_): Internal.LazyOptional<Internal.ICuriosItemHandler>;
        static "getPlayerSlots(net.minecraft.world.entity.player.Player)"(arg0: Internal.Player_): Internal.Map<string, Internal.ISlotType>;
        static broadcastCurioBreakEvent(arg0: Internal.SlotContext_): void;
        static "getSlots(net.minecraft.world.level.Level)"(arg0: Internal.Level_): Internal.Map<string, Internal.ISlotType>;
        static registerCurioPredicate(arg0: ResourceLocation_, arg1: Internal.Predicate_<Internal.SlotResult>): void;
        static getSlotIcon(arg0: string): ResourceLocation;
        static "getSlots(boolean)"(arg0: boolean): Internal.Map<string, Internal.ISlotType>;
        /**
         * @deprecated
        */
        static getIconHelper(): Internal.IIconHelper;
        /**
         * @deprecated
        */
        static getCuriosHelper(): Internal.ICuriosHelper;
        static "getItemStackSlots(net.minecraft.world.item.ItemStack,boolean)"(arg0: Internal.ItemStack_, arg1: boolean): Internal.Map<string, Internal.ISlotType>;
        static getCurio(arg0: Internal.ItemStack_): Internal.LazyOptional<Internal.ICurio>;
        static "getSlot(java.lang.String,net.minecraft.world.level.Level)"(arg0: string, arg1: Internal.Level_): Internal.Optional<Internal.ISlotType>;
        static registerCurio(arg0: Internal.Item_, arg1: Internal.ICurioItem_): void;
        /**
         * @deprecated
        */
        static setCuriosHelper(arg0: Internal.ICuriosHelper_): void;
        static getAttributeModifiers(arg0: Internal.SlotContext_, arg1: Internal.UUID_, arg2: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        /**
         * @deprecated
        */
        static setIconHelper(arg0: Internal.IIconHelper_): void;
        static getEntitySlots(arg0: Internal.EntityType_<any>, arg1: Internal.Level_): Internal.Map<string, Internal.ISlotType>;
        static getCurioPredicate(arg0: ResourceLocation_): Internal.Optional<Internal.Predicate<Internal.SlotResult>>;
        wait(): void;
        static getEntitySlots(arg0: Internal.EntityType_<any>, arg1: boolean): Internal.Map<string, Internal.ISlotType>;
        static addSlotModifier(arg0: Internal.ItemStack_, arg1: string, arg2: string, arg3: Internal.UUID_, arg4: number, arg5: Internal.AttributeModifier$Operation_, arg6: string): void;
        static isStackValid(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): boolean;
        static "getEntitySlots(net.minecraft.world.entity.EntityType,boolean)"(arg0: Internal.EntityType_<any>, arg1: boolean): Internal.Map<string, Internal.ISlotType>;
        getClass(): typeof any;
        static getSlot(arg0: string, arg1: boolean): Internal.Optional<Internal.ISlotType>;
        static "getEntitySlots(net.minecraft.world.entity.EntityType,net.minecraft.world.level.Level)"(arg0: Internal.EntityType_<any>, arg1: Internal.Level_): Internal.Map<string, Internal.ISlotType>;
        static getPlayerSlots(arg0: Internal.Player_): Internal.Map<string, Internal.ISlotType>;
        /**
         * @deprecated
        */
        static getSlot(arg0: string): Internal.Optional<Internal.ISlotType>;
        static "getPlayerSlots(boolean)"(arg0: boolean): Internal.Map<string, Internal.ISlotType>;
        wait(arg0: number, arg1: number): void;
        static "getSlot(java.lang.String,boolean)"(arg0: string, arg1: boolean): Internal.Optional<Internal.ISlotType>;
        static "getPlayerSlots(net.minecraft.world.level.Level)"(arg0: Internal.Level_): Internal.Map<string, Internal.ISlotType>;
        static getCurioPredicates(): Internal.Map<ResourceLocation, Internal.Predicate<Internal.SlotResult>>;
        static createCurioProvider(arg0: Internal.ICurio_): Internal.ICapabilityProvider;
        static "getItemStackSlots(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.LivingEntity)"(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.Map<string, Internal.ISlotType>;
        /**
         * @deprecated
        */
        static getItemStackSlots(arg0: Internal.ItemStack_): Internal.Map<string, Internal.ISlotType>;
        toString(): string;
        static getSlots(arg0: Internal.Level_): Internal.Map<string, Internal.ISlotType>;
        static getItemStackSlots(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.Map<string, Internal.ISlotType>;
        notifyAll(): void;
        static getSlotUuid(arg0: Internal.SlotContext_): Internal.UUID;
        static "getItemStackSlots(net.minecraft.world.item.ItemStack,net.minecraft.world.level.Level)"(arg0: Internal.ItemStack_, arg1: Internal.Level_): Internal.Map<string, Internal.ISlotType>;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        static setSlotHelper(arg0: Internal.ISlotHelper_): void;
        static getItemStackSlots(arg0: Internal.ItemStack_, arg1: Internal.Level_): Internal.Map<string, Internal.ISlotType>;
        static testCurioPredicates(arg0: Internal.Set_<ResourceLocation>, arg1: Internal.SlotResult_): boolean;
        static getPlayerSlots(arg0: Internal.Level_): Internal.Map<string, Internal.ISlotType>;
        hashCode(): number;
        static addModifier(arg0: Internal.ItemStack_, arg1: Internal.Attribute_, arg2: string, arg3: Internal.UUID_, arg4: number, arg5: Internal.AttributeModifier$Operation_, arg6: string): void;
        /**
         * @deprecated
        */
        static getEntitySlots(arg0: Internal.EntityType_<any>): Internal.Map<string, Internal.ISlotType>;
        wait(arg0: number): void;
        static getSlots(arg0: boolean): Internal.Map<string, Internal.ISlotType>;
        static addSlotModifier(arg0: Internal.Multimap_<Internal.Attribute, Internal.AttributeModifier>, arg1: string, arg2: Internal.UUID_, arg3: number, arg4: Internal.AttributeModifier$Operation_): void;
        static getItemStackSlots(arg0: Internal.ItemStack_, arg1: boolean): Internal.Map<string, Internal.ISlotType>;
        /**
         * @deprecated
        */
        static "getEntitySlots(net.minecraft.world.entity.EntityType)"(arg0: Internal.EntityType_<any>): Internal.Map<string, Internal.ISlotType>;
        equals(arg0: any): boolean;
        static getEntitySlots(arg0: Internal.LivingEntity_): Internal.Map<string, Internal.ISlotType>;
        /**
         * @deprecated
        */
        static getPlayerSlots(): Internal.Map<string, Internal.ISlotType>;
        static "getEntitySlots(net.minecraft.world.entity.LivingEntity)"(arg0: Internal.LivingEntity_): Internal.Map<string, Internal.ISlotType>;
        /**
         * @deprecated
        */
        get slots(): Internal.Map<string, Internal.ISlotType>
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        get slotHelper(): Internal.ISlotHelper
        /**
         * @deprecated
        */
        get iconHelper(): Internal.IIconHelper
        /**
         * @deprecated
        */
        get curiosHelper(): Internal.ICuriosHelper
        /**
         * @deprecated
        */
        set curiosHelper(arg0: Internal.ICuriosHelper_)
        /**
         * @deprecated
        */
        set iconHelper(arg0: Internal.IIconHelper_)
        get class(): typeof any
        get curioPredicates(): Internal.Map<ResourceLocation, Internal.Predicate<Internal.SlotResult>>
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        set slotHelper(arg0: Internal.ISlotHelper_)
        /**
         * @deprecated
        */
        get playerSlots(): Internal.Map<string, Internal.ISlotType>
        static readonly MODID: ("curios") & (string);
    }
    type CuriosApi_ = CuriosApi;
    interface CanaryDefaultedList {
        abstract changedInteractionConditions(): void;
        (): void;
    }
    type CanaryDefaultedList_ = (()=> void) | CanaryDefaultedList;
    abstract class GeometryProcessor extends Internal.Processor {
        getClass(): typeof any;
        numTextureSamplers(): number;
        numVertexAttributes(): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        numInstanceLocations(): number;
        vertexAttributes(): Internal.Iterable<Internal.GeometryProcessor$Attribute>;
        numInstanceAttributes(): number;
        abstract makeProgramImpl(arg0: Internal.ShaderCaps_): Internal.GeometryProcessor$ProgramImpl;
        toString(): string;
        vertexStride(): number;
        numVertexLocations(): number;
        textureSamplerState(i: number): number;
        notifyAll(): void;
        abstract primitiveType(): number;
        appendAttributesToKey(b: Internal.KeyBuilder_): void;
        instanceAttributes(): Internal.Iterable<Internal.GeometryProcessor$Attribute>;
        abstract name(): string;
        hashCode(): number;
        hasInstanceAttributes(): boolean;
        textureSamplerSwizzle(i: number): number;
        instanceStride(): number;
        wait(): void;
        classID(): number;
        hasVertexAttributes(): boolean;
        wait(arg0: number): void;
        abstract appendToKey(arg0: Internal.KeyBuilder_): void;
        equals(arg0: any): boolean;
        get class(): typeof any
    }
    type GeometryProcessor_ = GeometryProcessor;
    abstract class FieldNamingPolicy extends Internal.Enum<Internal.FieldNamingPolicy> implements Internal.FieldNamingStrategy {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        abstract translateName(arg0: Internal.Field_): string;
        getDeclaringClass(): typeof Internal.FieldNamingPolicy;
        toString(): string;
        compareTo(arg0: Internal.FieldNamingPolicy_): number;
        notifyAll(): void;
        static values(): Internal.FieldNamingPolicy[];
        "compareTo(com.google.gson.FieldNamingPolicy)"(arg0: Internal.FieldNamingPolicy_): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        name(): string;
        hashCode(): number;
        static valueOf(arg0: string): Internal.FieldNamingPolicy;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.FieldNamingPolicy>>;
        get class(): typeof any
        get declaringClass(): typeof Internal.FieldNamingPolicy
        static readonly UPPER_CASE_WITH_UNDERSCORES: Internal.FieldNamingPolicy;
        static readonly IDENTITY: Internal.FieldNamingPolicy;
        static readonly UPPER_CAMEL_CASE: Internal.FieldNamingPolicy;
        static readonly LOWER_CASE_WITH_UNDERSCORES: Internal.FieldNamingPolicy;
        static readonly LOWER_CASE_WITH_DASHES: Internal.FieldNamingPolicy;
        static readonly UPPER_CAMEL_CASE_WITH_SPACES: Internal.FieldNamingPolicy;
        static readonly LOWER_CASE_WITH_DOTS: Internal.FieldNamingPolicy;
    }
    type FieldNamingPolicy_ = "lower_case_with_underscores" | "lower_case_with_dashes" | "identity" | "upper_camel_case_with_spaces" | "lower_case_with_dots" | "upper_case_with_underscores" | FieldNamingPolicy | "upper_camel_case";
}
declare namespace dev.latvian.mods.kubejs {
    class BuilderBase {
        translationKey(key: Special.LangKey): dev.latvian.mods.kubejs.BuilderBase<T>;
    }
    type BuilderBase_ = BuilderBase;
}
