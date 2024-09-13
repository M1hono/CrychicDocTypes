/// <reference path="./internal_*.d.ts" />
declare namespace Internal {
    class SimpleCommandExceptionType implements Internal.CommandExceptionType {
        constructor(arg0: com.mojang.brigadier.Message_)
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        createWithContext(arg0: Internal.ImmutableStringReader_): Internal.CommandSyntaxException;
        create(): Internal.CommandSyntaxException;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
    }
    type SimpleCommandExceptionType_ = SimpleCommandExceptionType;
    class UnicodeSet$SpanCondition extends Internal.Enum<Internal.UnicodeSet$SpanCondition> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        static valueOf(arg0: string): Internal.UnicodeSet$SpanCondition;
        toString(): string;
        notifyAll(): void;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.UnicodeSet$SpanCondition>>;
        compareTo(arg0: Internal.UnicodeSet$SpanCondition_): number;
        notify(): void;
        getDeclaringClass(): typeof Internal.UnicodeSet$SpanCondition;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        name(): string;
        hashCode(): number;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        "compareTo(com.ibm.icu.text.UnicodeSet$SpanCondition)"(arg0: Internal.UnicodeSet$SpanCondition_): number;
        static values(): Internal.UnicodeSet$SpanCondition[];
        get class(): typeof any
        get declaringClass(): typeof Internal.UnicodeSet$SpanCondition
        static readonly NOT_CONTAINED: (Internal.UnicodeSet$SpanCondition) & (Internal.UnicodeSet$SpanCondition);
        static readonly CONDITION_COUNT: (Internal.UnicodeSet$SpanCondition) & (Internal.UnicodeSet$SpanCondition);
        static readonly SIMPLE: (Internal.UnicodeSet$SpanCondition) & (Internal.UnicodeSet$SpanCondition);
        static readonly CONTAINED: (Internal.UnicodeSet$SpanCondition) & (Internal.UnicodeSet$SpanCondition);
    }
    type UnicodeSet$SpanCondition_ = "contained" | "condition_count" | "not_contained" | "simple" | UnicodeSet$SpanCondition;
    class FlatLevelGeneratorPreset extends Internal.Record {
        constructor(arg0: Internal.Holder_<Internal.Item>, arg1: Internal.FlatLevelGeneratorSettings_)
        getClass(): typeof any;
        settings(): Internal.FlatLevelGeneratorSettings;
        hashCode(): number;
        toString(): string;
        displayItem(): Internal.Holder<Internal.Item>;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        static readonly CODEC: Internal.Codec<Internal.Holder<Internal.FlatLevelGeneratorPreset>>;
        static readonly DIRECT_CODEC: Internal.Codec<Internal.FlatLevelGeneratorPreset>;
    }
    type FlatLevelGeneratorPreset_ = FlatLevelGeneratorPreset | Special.FlatLevelGeneratorPreset;
    class EquipmentBag extends Internal.AbstractBag {
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
        getContent(arg0: Internal.ItemStack_): Internal.NonNullList<Internal.ItemStack>;
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
        getRowSize(): number;
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
        getInvCap(arg0: Internal.ItemStack_, arg1: Internal.ServerPlayer_): Internal.IItemHandler;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        clientInsert(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: number, arg3: Internal.Slot_, arg4: boolean, arg5: number, arg6: Internal.DrawerInteractToServer$Callback_, arg7: number): boolean;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        attachCapability(capabilityBuilder: Internal.CapabilityBuilder_<any, any, any>): void;
        setAttackDamage(attackDamage: number): void;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        isEdible(): boolean;
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
        mayClientTake(): boolean;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        serverTrigger(arg0: Internal.ItemStack_, arg1: Internal.ServerPlayer_): void;
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
        mergeStack(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): void;
        getSize(arg0: Internal.ItemStack_): number;
        setAttackSpeed(attackSpeed: number): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        static isFilled(arg0: Internal.ItemStack_): boolean;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        canAbsorb(arg0: Internal.Slot_, arg1: Internal.ItemStack_): boolean;
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
        getInvSize(arg0: Internal.ItemStack_): number;
        handler$dpg000$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        takeItem(arg0: Internal.ItemStack_, arg1: Internal.ServerPlayer_): Internal.ItemStack;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        remainingSpace(arg0: Internal.ItemStack_): number;
        setFireResistant(arg0: boolean): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        canBeDepleted(): boolean;
        getInvItems(arg0: Internal.ItemStack_, arg1: Internal.Player_): Internal.List<Internal.ItemStack>;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        getDamage(arg0: Internal.ItemStack_): number;
        attemptInsert(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.ServerPlayer_): void;
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
        setContent(arg0: Internal.ItemStack_, arg1: Internal.NonNullList_<Internal.ItemStack>): void;
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
        sendInsertPacket(arg0: number, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.DrawerInteractToServer$Callback_, arg4: number): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        click(arg0: Internal.Player_, arg1: Internal.ItemStack_, arg2: boolean, arg3: boolean, arg4: boolean, arg5: Internal.IItemHandler_): void;
        equals(arg0: any): boolean;
        isValidContent(arg0: Internal.ItemStack_): boolean;
        get drinkingSound(): Internal.SoundEvent
        set rarity(arg0: Internal.Rarity_)
        get fireResistant(): boolean
        get complex(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get descriptionId(): string
        get rowSize(): number
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
    type EquipmentBag_ = EquipmentBag;
    interface ConstantDesc {
        abstract resolveConstantDesc(arg0: Internal.MethodHandles$Lookup_): any;
        (arg0: Internal.MethodHandles$Lookup): any;
    }
    type ConstantDesc_ = ((arg0: Internal.MethodHandles$Lookup)=> any) | ConstantDesc;
    class ChunkRenderDispatcher$ChunkTaskResult extends Internal.Enum<Internal.ChunkRenderDispatcher$ChunkTaskResult> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        "compareTo(net.minecraft.client.renderer.chunk.ChunkRenderDispatcher$ChunkTaskResult)"(arg0: Internal.ChunkRenderDispatcher$ChunkTaskResult_): number;
        toString(): string;
        notifyAll(): void;
        static valueOf(arg0: string): Internal.ChunkRenderDispatcher$ChunkTaskResult;
        compareTo(arg0: Internal.ChunkRenderDispatcher$ChunkTaskResult_): number;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.ChunkRenderDispatcher$ChunkTaskResult>>;
        notify(): void;
        getDeclaringClass(): typeof Internal.ChunkRenderDispatcher$ChunkTaskResult;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        name(): string;
        hashCode(): number;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        static values(): Internal.ChunkRenderDispatcher$ChunkTaskResult[];
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get declaringClass(): typeof Internal.ChunkRenderDispatcher$ChunkTaskResult
        static readonly SUCCESSFUL: Internal.ChunkRenderDispatcher$ChunkTaskResult;
        static readonly CANCELLED: Internal.ChunkRenderDispatcher$ChunkTaskResult;
    }
    type ChunkRenderDispatcher$ChunkTaskResult_ = "successful" | ChunkRenderDispatcher$ChunkTaskResult | "cancelled";
    class ServerboundMoveVehiclePacket implements Internal.Packet<Internal.ServerGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: Internal.Entity_)
        handle(arg0: Internal.PacketListener_): void;
        getClass(): typeof any;
        write(arg0: Internal.FriendlyByteBuf_): void;
        handle(arg0: Internal.ServerGamePacketListener_): void;
        toString(): string;
        notifyAll(): void;
        getXRot(): number;
        notify(): void;
        isSkippable(): boolean;
        wait(arg0: number, arg1: number): void;
        getX(): number;
        "handle(net.minecraft.network.protocol.game.ServerGamePacketListener)"(arg0: Internal.ServerGamePacketListener_): void;
        getY(): number;
        getZ(): number;
        hashCode(): number;
        getYRot(): number;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        "handle(net.minecraft.network.PacketListener)"(arg0: Internal.PacketListener_): void;
        get class(): typeof any
        get XRot(): number
        get skippable(): boolean
        get x(): number
        get y(): number
        get z(): number
        get YRot(): number
    }
    type ServerboundMoveVehiclePacket_ = ServerboundMoveVehiclePacket;
    class HolySmiteEnchantment extends Internal.Enchantment {
        constructor(arg0: Internal.Enchantment$Rarity_)
        getClass(): typeof any;
        getFullname(arg0: number): net.minecraft.network.chat.Component;
        getDamageProtection(arg0: number, arg1: Internal.DamageSource_): number;
        getRarity(): Internal.Enchantment$Rarity;
        isCompatibleWith(arg0: Internal.Enchantment_): boolean;
        isTradeable(): boolean;
        isTreasureOnly(): boolean;
        handler$zjf001$isAcceptableItem(stack: Internal.ItemStack_, ci: Internal.CallbackInfoReturnable_<any>): void;
        handler$zog001$getRepairCost(cir: Internal.CallbackInfoReturnable_<any>): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        handler$bhd004$isAcceptableItem(stack: Internal.ItemStack_, ci: Internal.CallbackInfoReturnable_<any>): void;
        handler$zjc000$isAcceptableItem(stack: Internal.ItemStack_, ci: Internal.CallbackInfoReturnable_<any>): void;
        getMaxCost(arg0: number): number;
        isDiscoverable(): boolean;
        getMinCost(arg0: number): number;
        handler$zoa003$isAcceptableItem(stack: Internal.ItemStack_, ci: Internal.CallbackInfoReturnable_<any>): void;
        static byId(arg0: number): Internal.Enchantment;
        getDescriptionId(): string;
        doPostHurt(arg0: Internal.LivingEntity_, arg1: Internal.Entity_, arg2: number): void;
        handler$dem000$l2complements$isDiscoverable$enchantedBookFilter(arg0: Internal.CallbackInfoReturnable_<any>): void;
        handler$dem000$l2complements$isTradeable$enchantedBookFilter(arg0: Internal.CallbackInfoReturnable_<any>): void;
        handler$zjp001$getMaxLevel(cir: Internal.CallbackInfoReturnable_<any>): void;
        toString(): string;
        getMaxLevel(): number;
        doPostAttack(arg0: Internal.LivingEntity_, arg1: Internal.Entity_, arg2: number): void;
        notifyAll(): void;
        getMinLevel(): number;
        getSlotItems(arg0: Internal.LivingEntity_): Internal.Map<Internal.EquipmentSlot, Internal.ItemStack>;
        /**
         * @deprecated
        */
        getDamageBonus(arg0: number, arg1: Internal.MobType_): number;
        hashCode(): number;
        isCurse(): boolean;
        allowedInCreativeTab(arg0: Internal.Item_, arg1: Internal.Set_<Internal.EnchantmentCategory>): boolean;
        wait(): void;
        getDamageBonus(arg0: number, arg1: Internal.MobType_, arg2: Internal.ItemStack_): number;
        wait(arg0: number): void;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_): boolean;
        equals(arg0: any): boolean;
        canEnchant(arg0: Internal.ItemStack_): boolean;
        isAllowedOnBooks(): boolean;
        get class(): typeof any
        get rarity(): Internal.Enchantment$Rarity
        get tradeable(): boolean
        get treasureOnly(): boolean
        get discoverable(): boolean
        get descriptionId(): string
        get maxLevel(): number
        get minLevel(): number
        get curse(): boolean
        get allowedOnBooks(): boolean
    }
    type HolySmiteEnchantment_ = HolySmiteEnchantment;
    class TextureStitchEvent extends net.minecraftforge.eventbus.api.Event implements Internal.IModBusEvent {
        constructor()
        constructor(arg0: Internal.TextureAtlas_)
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
        wait(): void;
        getListenerList(): Internal.ListenerList;
        wait(arg0: number): void;
        getPhase(): Internal.EventPriority;
        getAtlas(): Internal.TextureAtlas;
        equals(arg0: any): boolean;
        get result(): Internal.Event$Result
        set canceled(arg0: boolean)
        get class(): typeof any
        set phase(arg0: Internal.EventPriority_)
        get canceled(): boolean
        set result(arg0: Internal.Event$Result_)
        get cancelable(): boolean
        get listenerList(): Internal.ListenerList
        get phase(): Internal.EventPriority
        get atlas(): Internal.TextureAtlas
    }
    type TextureStitchEvent_ = TextureStitchEvent;
    abstract class ScreenEvent$MouseButtonReleased extends Internal.ScreenEvent$MouseInput {
        constructor()
        constructor(arg0: Internal.Screen_, arg1: number, arg2: number, arg3: number)
        getResult(): Internal.Event$Result;
        setCanceled(arg0: boolean): void;
        getClass(): typeof any;
        toString(): string;
        getButton(): number;
        setPhase(arg0: Internal.EventPriority_): void;
        getMouseX(): number;
        getScreen(): Internal.Screen;
        notifyAll(): void;
        getMouseY(): number;
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
        get button(): number
        set phase(arg0: Internal.EventPriority_)
        get mouseX(): number
        get screen(): Internal.Screen
        get mouseY(): number
        get canceled(): boolean
        set result(arg0: Internal.Event$Result_)
        get cancelable(): boolean
        get listenerList(): Internal.ListenerList
        get phase(): Internal.EventPriority
    }
    type ScreenEvent$MouseButtonReleased_ = ScreenEvent$MouseButtonReleased;
    class WindChimeTyableBlock extends Internal.WindChimeBlock {
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
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
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
        playChimeSound(arg0: Internal.Level_, arg1: BlockPos_): void;
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
        changeState(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.BlockState;
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
        setChiming(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        playTieSound(arg0: Internal.Level_, arg1: BlockPos_): void;
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
        static readonly SILENCED: (Internal.BooleanProperty) & (Internal.BooleanProperty);
    }
    type WindChimeTyableBlock_ = WindChimeTyableBlock;
    class ManaweaveProjectorBlock extends Internal.WaterloggableBlock implements Internal.ICutoutBlock, Internal.EntityBlock {
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
        static readonly EMPTY: (0) & (number);
        static readonly FULL: (4) & (number);
        static readonly HALF: (2) & (number);
        static readonly THREE_QUARTERS: (3) & (number);
        static readonly QUARTER: (1) & (number);
        static readonly PROJECTING: (Internal.BooleanProperty) & (Internal.BooleanProperty);
        static readonly FILL_LEVEL: (Internal.IntegerProperty) & (Internal.IntegerProperty);
    }
    type ManaweaveProjectorBlock_ = ManaweaveProjectorBlock;
    class ObjectiveCriteria {
        getClass(): typeof any;
        getDefaultRenderType(): Internal.ObjectiveCriteria$RenderType;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        static byName(arg0: string): Internal.Optional<Internal.ObjectiveCriteria>;
        hashCode(): number;
        wait(): void;
        getName(): string;
        wait(arg0: number): void;
        isReadOnly(): boolean;
        equals(arg0: any): boolean;
        static getCustomCriteriaNames(): Internal.Set<string>;
        get class(): typeof any
        get defaultRenderType(): Internal.ObjectiveCriteria$RenderType
        get name(): string
        get readOnly(): boolean
        get customCriteriaNames(): Internal.Set<string>
        static readonly TRIGGER: (Internal.ObjectiveCriteria) & (Internal.ObjectiveCriteria);
        static readonly HEALTH: (Internal.ObjectiveCriteria) & (Internal.ObjectiveCriteria);
        static readonly KILL_COUNT_PLAYERS: (Internal.ObjectiveCriteria) & (Internal.ObjectiveCriteria);
        static readonly TEAM_KILL: Internal.ObjectiveCriteria[];
        static readonly AIR: (Internal.ObjectiveCriteria) & (Internal.ObjectiveCriteria);
        static readonly ARMOR: (Internal.ObjectiveCriteria) & (Internal.ObjectiveCriteria);
        static readonly DUMMY: (Internal.ObjectiveCriteria) & (Internal.ObjectiveCriteria);
        static readonly EXPERIENCE: (Internal.ObjectiveCriteria) & (Internal.ObjectiveCriteria);
        static readonly KILL_COUNT_ALL: (Internal.ObjectiveCriteria) & (Internal.ObjectiveCriteria);
        static readonly DEATH_COUNT: (Internal.ObjectiveCriteria) & (Internal.ObjectiveCriteria);
        static readonly KILLED_BY_TEAM: Internal.ObjectiveCriteria[];
        static readonly LEVEL: (Internal.ObjectiveCriteria) & (Internal.ObjectiveCriteria);
        static readonly FOOD: (Internal.ObjectiveCriteria) & (Internal.ObjectiveCriteria);
    }
    type ObjectiveCriteria_ = ObjectiveCriteria;
    class StraightTrunkPlacer extends Internal.TrunkPlacer {
        constructor(arg0: number, arg1: number, arg2: number)
        placeTrunk(arg0: Internal.LevelSimulatedReader_, arg1: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg2: Internal.RandomSource_, arg3: number, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): Internal.List<Internal.FoliagePlacer$FoliageAttachment>;
        getClass(): typeof any;
        hashCode(): number;
        isFree(arg0: Internal.LevelSimulatedReader_, arg1: BlockPos_): boolean;
        toString(): string;
        getTreeHeight(arg0: Internal.RandomSource_): number;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        static readonly CODEC: Internal.Codec<Internal.StraightTrunkPlacer>;
    }
    type StraightTrunkPlacer_ = StraightTrunkPlacer;
    class ScreenTickEvent extends net.minecraftforge.eventbus.api.Event {
        constructor()
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
        get listenerList(): Internal.ListenerList
        get phase(): Internal.EventPriority
    }
    type ScreenTickEvent_ = ScreenTickEvent;
    class DocumentConstructor extends Internal.AbstractDocument<Internal.DocumentConstructor> {
        constructor()
        constructor(params: Internal.List_<Internal.PropertyParam>)
        static fromJava(info: Internal.ConstructorInfo_): Internal.DocumentConstructor;
        getClass(): typeof any;
        merge(other: Internal.DocumentConstructor_): this;
        getParams(): Internal.List<Internal.PropertyParam>;
        getMergedComment(): Internal.PropertyComment;
        toString(): string;
        applyProperties(): Internal.AbstractDocumentBase<any>;
        notifyAll(): void;
        serialize(): Internal.JsonObject;
        isHidden(): boolean;
        copy(): this;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        findPropertiesOf<E extends Internal.AbstractProperty<any>>(property: E): Internal.List<E>;
        fulfillsConditions(): boolean;
        findProperty<P extends Internal.AbstractProperty<P>>(property: P): Internal.Optional<P>;
        addPropertyJson(json: Internal.JsonObject_): Internal.AbstractDocumentBase<Internal.DocumentConstructor>;
        hashCode(): number;
        findProperties(predicate: Internal.Predicate_<Internal.AbstractProperty<any>>): Internal.List<Internal.AbstractProperty<any>>;
        wait(): void;
        wait(arg0: number): void;
        deserialize(object: Internal.JsonObject_): void;
        equals(o: any): boolean;
        hasProperty<P extends Internal.AbstractProperty<P>>(property: P): boolean;
        get class(): typeof any
        get params(): Internal.List<Internal.PropertyParam>
        get mergedComment(): Internal.PropertyComment
        get hidden(): boolean
    }
    type DocumentConstructor_ = DocumentConstructor;
    class ClientboundDisguisedChatPacket extends Internal.Record implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: net.minecraft.network.chat.Component_, arg1: Internal.ChatType$BoundNetwork_)
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
        message(): net.minecraft.network.chat.Component;
        wait(): void;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        chatType(): Internal.ChatType$BoundNetwork;
        wait(arg0: number): void;
        "handle(net.minecraft.network.protocol.game.ClientGamePacketListener)"(arg0: Internal.ClientGamePacketListener_): void;
        equals(arg0: any): boolean;
        "handle(net.minecraft.network.PacketListener)"(arg0: Internal.PacketListener_): void;
        get class(): typeof any
        get skippable(): boolean
    }
    type ClientboundDisguisedChatPacket_ = ClientboundDisguisedChatPacket;
    class ClientboundSetTitlesAnimationPacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: number, arg1: number, arg2: number)
        constructor(arg0: Internal.FriendlyByteBuf_)
        handle(arg0: Internal.PacketListener_): void;
        getClass(): typeof any;
        write(arg0: Internal.FriendlyByteBuf_): void;
        getFadeIn(): number;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        isSkippable(): boolean;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        getFadeOut(): number;
        wait(): void;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        wait(arg0: number): void;
        "handle(net.minecraft.network.protocol.game.ClientGamePacketListener)"(arg0: Internal.ClientGamePacketListener_): void;
        getStay(): number;
        equals(arg0: any): boolean;
        "handle(net.minecraft.network.PacketListener)"(arg0: Internal.PacketListener_): void;
        get class(): typeof any
        get fadeIn(): number
        get skippable(): boolean
        get fadeOut(): number
        get stay(): number
    }
    type ClientboundSetTitlesAnimationPacket_ = ClientboundSetTitlesAnimationPacket;
    interface EnergyPerTickRequirementJS extends Internal.RecipeJSBuilder {
        produceEnergyPerTick(amount: number): Internal.RecipeJSBuilder;
        abstract error(arg0: string, ...arg1: any[]): Internal.RecipeJSBuilder;
        requireEnergyPerTick(amount: number): Internal.RecipeJSBuilder;
        abstract addRequirement(arg0: Internal.IRequirement_<any>): Internal.RecipeJSBuilder;
    }
    type EnergyPerTickRequirementJS_ = EnergyPerTickRequirementJS;
    interface IdFunctionCall {
        abstract execIdCall(arg0: Internal.IdFunctionObject_, arg1: Internal.Context_, arg2: Internal.Scriptable_, arg3: Internal.Scriptable_, arg4: any[]): any;
        (arg0: Internal.IdFunctionObject, arg1: Internal.Context, arg2: Internal.Scriptable, arg3: Internal.Scriptable, arg4: any[]): any;
    }
    type IdFunctionCall_ = ((arg0: Internal.IdFunctionObject, arg1: Internal.Context, arg2: Internal.Scriptable, arg3: Internal.Scriptable, arg4: any[])=> any) | IdFunctionCall;
    class Type$Mu implements Internal.K1 {
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
    }
    type Type$Mu_ = Type$Mu;
    interface TriConsumer <K, V, S> {
        abstract accept(k: K, v: V, s: S): void;
        (k: K, v: V, s: S): void;
    }
    type TriConsumer_<K, V, S> = TriConsumer<K, V, S> | ((k: K, v: V, s: S)=> void);
    interface AttributeView {
        abstract name(): string;
        (): string;
    }
    type AttributeView_ = AttributeView | (()=> string);
    class GenericParticleData {
        getClass(): typeof any;
        toString(): string;
        overrideValueMultiplier(arg0: number): this;
        getValue(arg0: number, arg1: number): number;
        notifyAll(): void;
        bake(): this;
        static create(arg0: number): Internal.GenericParticleDataBuilder;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        static create(arg0: number, arg1: number): Internal.GenericParticleDataBuilder;
        isTrinary(): boolean;
        multiplyValue(arg0: number): this;
        hashCode(): number;
        static constrictTransparency(arg0: Internal.GenericParticleData_): Internal.GenericParticleData;
        wait(): void;
        copy(): this;
        getProgress(arg0: number, arg1: number): number;
        wait(arg0: number): void;
        multiplyCoefficient(arg0: number): this;
        equals(arg0: any): boolean;
        static create(arg0: number, arg1: number, arg2: number): Internal.GenericParticleDataBuilder;
        overrideCoefficientMultiplier(arg0: number): this;
        get class(): typeof any
        get trinary(): boolean
        readonly coefficient: number;
        valueMultiplier: number;
        coefficientMultiplier: number;
        readonly startingValue: number;
        readonly middleToEndEasing: Internal.Easing;
        readonly endingValue: number;
        readonly startToMiddleEasing: Internal.Easing;
        readonly middleValue: number;
    }
    type GenericParticleData_ = GenericParticleData;
    class AddSmiteEvent extends Internal.PlayerEvent {
        constructor()
        constructor(arg0: Internal.Player_)
        getResult(): Internal.Event$Result;
        setCanceled(arg0: boolean): void;
        getClass(): typeof any;
        toString(): string;
        setPhase(arg0: Internal.EventPriority_): void;
        getEntity(): Internal.LivingEntity;
        notifyAll(): void;
        isCanceled(): boolean;
        setDuration(arg0: number): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hasResult(): boolean;
        setResult(arg0: Internal.Event$Result_): void;
        hashCode(): number;
        isCancelable(): boolean;
        wait(): void;
        getListenerList(): Internal.ListenerList;
        wait(arg0: number): void;
        addDuration(arg0: number): void;
        getPhase(): Internal.EventPriority;
        equals(arg0: any): boolean;
        getDuration(): number;
        get result(): Internal.Event$Result
        set canceled(arg0: boolean)
        get class(): typeof any
        set phase(arg0: Internal.EventPriority_)
        get entity(): Internal.LivingEntity
        get canceled(): boolean
        set duration(arg0: number)
        set result(arg0: Internal.Event$Result_)
        get cancelable(): boolean
        get listenerList(): Internal.ListenerList
        get phase(): Internal.EventPriority
        get duration(): number
    }
    type AddSmiteEvent_ = AddSmiteEvent;
    class ClientboundLoginPacket extends Internal.Record implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: number, arg1: boolean, arg2: Internal.GameType_, arg3: Internal.GameType_, arg4: Internal.Set_<Internal.ResourceKey<Internal.Level>>, arg5: Internal.RegistryAccess$Frozen_, arg6: Internal.ResourceKey_<Internal.DimensionType>, arg7: Internal.ResourceKey_<Internal.Level>, arg8: number, arg9: number, arg10: number, arg11: number, arg12: boolean, arg13: boolean, arg14: boolean, arg15: boolean, arg16: Internal.Optional_<Internal.GlobalPos>, arg17: number)
        playerId(): number;
        getClass(): typeof any;
        portalCooldown(): number;
        notify(): void;
        isSkippable(): boolean;
        wait(arg0: number, arg1: number): void;
        previousGameType(): Internal.GameType;
        showDeathScreen(): boolean;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        "handle(net.minecraft.network.protocol.game.ClientGamePacketListener)"(arg0: Internal.ClientGamePacketListener_): void;
        hardcore(): boolean;
        handle(arg0: Internal.PacketListener_): void;
        write(arg0: Internal.FriendlyByteBuf_): void;
        dimensionType(): Internal.ResourceKey<Internal.DimensionType>;
        dimension(): Internal.ResourceKey<Internal.Level>;
        toString(): string;
        seed(): number;
        notifyAll(): void;
        lastDeathLocation(): Internal.Optional<Internal.GlobalPos>;
        chunkRadius(): number;
        maxPlayers(): number;
        gameType(): Internal.GameType;
        hashCode(): number;
        reducedDebugInfo(): boolean;
        simulationDistance(): number;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        registryHolder(): Internal.RegistryAccess$Frozen;
        levels(): Internal.Set<Internal.ResourceKey<Internal.Level>>;
        isFlat(): boolean;
        "handle(net.minecraft.network.PacketListener)"(arg0: Internal.PacketListener_): void;
        isDebug(): boolean;
        get class(): typeof any
        get skippable(): boolean
        get flat(): boolean
        get debug(): boolean
    }
    type ClientboundLoginPacket_ = ClientboundLoginPacket;
    class PackCompatibility extends Internal.Enum<Internal.PackCompatibility> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        getConfirmation(): net.minecraft.network.chat.Component;
        toString(): string;
        compareTo(arg0: Internal.PackCompatibility_): number;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        "compareTo(net.minecraft.server.packs.repository.PackCompatibility)"(arg0: Internal.PackCompatibility_): number;
        name(): string;
        static valueOf(arg0: string): Internal.PackCompatibility;
        hashCode(): number;
        getDeclaringClass(): typeof Internal.PackCompatibility;
        isCompatible(): boolean;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.PackCompatibility>>;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        static values(): Internal.PackCompatibility[];
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        getDescription(): net.minecraft.network.chat.Component;
        static forFormat(arg0: number, arg1: Internal.PackType_): Internal.PackCompatibility;
        get class(): typeof any
        get confirmation(): net.minecraft.network.chat.Component
        get declaringClass(): typeof Internal.PackCompatibility
        get compatible(): boolean
        get description(): net.minecraft.network.chat.Component
        static readonly TOO_OLD: (Internal.PackCompatibility) & (Internal.PackCompatibility);
        static readonly COMPATIBLE: (Internal.PackCompatibility) & (Internal.PackCompatibility);
        static readonly TOO_NEW: (Internal.PackCompatibility) & (Internal.PackCompatibility);
    }
    type PackCompatibility_ = "compatible" | PackCompatibility | "too_old" | "too_new";
    interface Builder <T> {
        isValid(): boolean;
        getErrorPrefix(): string;
        abstract build(): T;
        get valid(): boolean
        get errorPrefix(): string
        (): T;
    }
    type Builder_<T> = Builder<T> | (()=> T);
    class ModFileScanData$ClassData extends Internal.Record {
        constructor(clazz: org.objectweb.asm.Type_, parent: org.objectweb.asm.Type_, interfaces: Internal.Set_<org.objectweb.asm.Type>)
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        clazz(): org.objectweb.asm.Type;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        parent(): org.objectweb.asm.Type;
        interfaces(): Internal.Set<org.objectweb.asm.Type>;
        get class(): typeof any
    }
    type ModFileScanData$ClassData_ = ModFileScanData$ClassData;
    class SpectralWebBlock extends Internal.WebBlock implements Internal.SimpleWaterloggedBlock, Internal.ITranslucentBlock, Internal.EntityBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        isShearable(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: BlockPos_): boolean;
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
        onSheared(arg0: Internal.Player_, arg1: Internal.ItemStack_, arg2: Internal.Level_, arg3: BlockPos_, arg4: number): Internal.List<Internal.ItemStack>;
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
    type SpectralWebBlock_ = SpectralWebBlock;
    class SurfaceProvider {
        getClass(): typeof any;
        createTextureFromPixels(pixelMap: Internal.PixelMap_, pixelRef: Internal.PixelRef_, dstColorType: number, surfaceFlags: number): Internal.TextureProxy;
        toString(): string;
        createRenderTexture(format: Internal.BackendFormat_, width: number, height: number, sampleCount: number, surfaceFlags: number): Internal.RenderTextureProxy;
        notifyAll(): void;
        wrapRenderableBackendTexture(texture: Internal.BackendTexture_, sampleCount: number, ownership: boolean, cacheable: boolean, releaseCallback: Internal.Runnable_): Internal.RenderTextureProxy;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        createTexture(format: Internal.BackendFormat_, width: number, height: number, surfaceFlags: number): Internal.TextureProxy;
        adoptUniqueKeyFromSurface(proxy: Internal.TextureProxy_, texture: Internal.GpuTexture_): void;
        isDeferredProvider(): boolean;
        processInvalidUniqueKey(key: any, proxy: Internal.TextureProxy_, invalidateResource: boolean): void;
        hashCode(): number;
        wait(): void;
        createLazyTexture(format: Internal.BackendFormat_, width: number, height: number, surfaceFlags: number, callback: Internal.SurfaceProxy$LazyInstantiateCallback_): Internal.TextureProxy;
        wait(arg0: number): void;
        wrapBackendRenderTarget(backendRenderTarget: Internal.BackendRenderTarget_, rcReleaseCB: Internal.Runnable_): Internal.RenderTargetProxy;
        equals(arg0: any): boolean;
        assignUniqueKeyToProxy(key: Internal.IUniqueKey_, proxy: Internal.TextureProxy_): boolean;
        get class(): typeof any
        get deferredProvider(): boolean
    }
    type SurfaceProvider_ = SurfaceProvider;
    class ClientboundUpdateEnabledFeaturesPacket extends Internal.Record implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.Set_<ResourceLocation>)
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
        features(): Internal.Set<ResourceLocation>;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        wait(arg0: number): void;
        "handle(net.minecraft.network.protocol.game.ClientGamePacketListener)"(arg0: Internal.ClientGamePacketListener_): void;
        equals(arg0: any): boolean;
        "handle(net.minecraft.network.PacketListener)"(arg0: Internal.PacketListener_): void;
        get class(): typeof any
        get skippable(): boolean
    }
    type ClientboundUpdateEnabledFeaturesPacket_ = ClientboundUpdateEnabledFeaturesPacket;
    class NBTCarryRecipe$Serializer implements Internal.RecipeSerializer<Internal.NBTCarryRecipe> {
        constructor()
        getClass(): typeof any;
        "fromNetwork(net.minecraft.resources.ResourceLocation,net.minecraft.network.FriendlyByteBuf)"(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.NBTCarryRecipe;
        "fromNetwork(net.minecraft.resources.ResourceLocation,net.minecraft.network.FriendlyByteBuf)"(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.Recipe<any>;
        toString(): string;
        "toNetwork(net.minecraft.network.FriendlyByteBuf,net.minecraft.world.item.crafting.Recipe)"(arg0: Internal.FriendlyByteBuf_, arg1: Internal.Recipe_<any>): void;
        notifyAll(): void;
        fromNetwork(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.NBTCarryRecipe;
        toNetwork(arg0: Internal.FriendlyByteBuf_, arg1: Internal.Recipe_<any>): void;
        notify(): void;
        "fromJson(net.minecraft.resources.ResourceLocation,com.google.gson.JsonObject)"(arg0: ResourceLocation_, arg1: Internal.JsonObject_): Internal.Recipe<any>;
        wait(arg0: number, arg1: number): void;
        static register<S extends Internal.RecipeSerializer<T>, T extends Internal.Recipe<any>>(arg0: string, arg1: S): S;
        hashCode(): number;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_): Internal.Recipe<any>;
        toNetwork(arg0: Internal.FriendlyByteBuf_, arg1: Internal.NBTCarryRecipe_): void;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_): Internal.NBTCarryRecipe;
        wait(): void;
        wait(arg0: number): void;
        "fromJson(net.minecraft.resources.ResourceLocation,com.google.gson.JsonObject)"(arg0: ResourceLocation_, arg1: Internal.JsonObject_): Internal.NBTCarryRecipe;
        equals(arg0: any): boolean;
        fromNetwork(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.Recipe<any>;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_, arg2: Internal.ICondition$IContext_): Internal.NBTCarryRecipe;
        "toNetwork(net.minecraft.network.FriendlyByteBuf,team.lodestar.lodestone.recipe.NBTCarryRecipe)"(arg0: Internal.FriendlyByteBuf_, arg1: Internal.NBTCarryRecipe_): void;
        get class(): typeof any
    }
    type NBTCarryRecipe$Serializer_ = NBTCarryRecipe$Serializer;
    class ItemInHandRenderer {
        constructor(arg0: Internal.Minecraft_, arg1: Internal.EntityRenderDispatcher_, arg2: Internal.ItemRenderer_)
        getClass(): typeof any;
        renderHandsWithItems(arg0: number, arg1: Internal.PoseStack_, arg2: Internal.MultiBufferSource$BufferSource_, arg3: Internal.LocalPlayer_, arg4: number): void;
        toString(): string;
        itemUsed(arg0: Internal.InteractionHand_): void;
        notifyAll(): void;
        handler$doo000$moonlight$renderSpecial(player: Internal.AbstractClientPlayer_, partialTicks: number, pitch: number, hand: Internal.InteractionHand_, swingProgress: number, stack: Internal.ItemStack_, equippedProgress: number, poseStack: Internal.PoseStack_, buffer: Internal.MultiBufferSource_, combinedLight: number, ci: Internal.CallbackInfo_, arm: Internal.HumanoidArm_): void;
        applyItemArmTransform(arg0: Internal.PoseStack_, arg1: Internal.HumanoidArm_, arg2: number): void;
        localvar$bem000$renderItemTransformMode(orig: Internal.ItemDisplayContext_, entity: Internal.LivingEntity_, stack: Internal.ItemStack_, orig2: Internal.ItemDisplayContext_, leftHanded: boolean, matrices: Internal.PoseStack_): Internal.ItemDisplayContext;
        notify(): void;
        renderItem(arg0: Internal.LivingEntity_, arg1: Internal.ItemStack_, arg2: Internal.ItemDisplayContext_, arg3: boolean, arg4: Internal.PoseStack_, arg5: Internal.MultiBufferSource_, arg6: number): void;
        wait(arg0: number, arg1: number): void;
        tick(): void;
        handler$doo000$moonlight$animateItem(player: Internal.AbstractClientPlayer_, partialTicks: number, pitch: number, hand: Internal.InteractionHand_, swingProgress: number, stack: Internal.ItemStack_, handHeight: number, poseStack: Internal.PoseStack_, buffer: Internal.MultiBufferSource_, combinedLight: number, ci: Internal.CallbackInfo_): void;
        renderArmWithItem(arg0: Internal.AbstractClientPlayer_, arg1: number, arg2: number, arg3: Internal.InteractionHand_, arg4: number, arg5: Internal.ItemStack_, arg6: number, arg7: Internal.PoseStack_, arg8: Internal.MultiBufferSource_, arg9: number): void;
        renderPlayerArm(arg0: Internal.PoseStack_, arg1: Internal.MultiBufferSource_, arg2: number, arg3: number, arg4: number, arg5: Internal.HumanoidArm_): void;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        applyItemArmAttackTransform(arg0: Internal.PoseStack_, arg1: Internal.HumanoidArm_, arg2: number): void;
        get class(): typeof any
    }
    type ItemInHandRenderer_ = ItemInHandRenderer;
    class GameLoadTimesEvent$Measurement extends Internal.Record {
        constructor(arg0: number)
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        millis(): number;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        static readonly CODEC: Internal.Codec<Internal.GameLoadTimesEvent$Measurement>;
    }
    type GameLoadTimesEvent$Measurement_ = GameLoadTimesEvent$Measurement;
    class BlockModelShaper {
        constructor(arg0: Internal.ModelManager_)
        getClass(): typeof any;
        toString(): string;
        getModelManager(): Internal.ModelManager;
        notifyAll(): void;
        /**
         * @deprecated
        */
        getParticleIcon(arg0: Internal.BlockState_): Internal.TextureAtlasSprite;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        static stateToModelLocation(arg0: Internal.BlockState_): Internal.ModelResourceLocation;
        replaceCache(arg0: Internal.Map_<Internal.BlockState, Internal.BakedModel>): void;
        hashCode(): number;
        static stateToModelLocation(arg0: ResourceLocation_, arg1: Internal.BlockState_): Internal.ModelResourceLocation;
        getBlockModel(arg0: Internal.BlockState_): Internal.BakedModel;
        wait(): void;
        wait(arg0: number): void;
        static statePropertiesToString(arg0: Internal.Map_<Internal.Property<any>, Internal.Comparable<any>>): string;
        equals(arg0: any): boolean;
        getTexture(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.TextureAtlasSprite;
        get class(): typeof any
        get modelManager(): Internal.ModelManager
    }
    type BlockModelShaper_ = BlockModelShaper;
    class AbyssalRuinsStructure extends Internal.Structure {
        constructor(arg0: Internal.Structure$StructureSettings_)
        static simpleCodec<S extends Internal.Structure>(arg0: Internal.Function_<Internal.Structure$StructureSettings, S>): Internal.Codec<S>;
        getClass(): typeof any;
        generate(arg0: Internal.RegistryAccess_, arg1: Internal.ChunkGenerator_, arg2: Internal.BiomeSource_, arg3: Internal.RandomState_, arg4: Internal.StructureTemplateManager_, arg5: number, arg6: Internal.ChunkPos_, arg7: number, arg8: Internal.LevelHeightAccessor_, arg9: Internal.Predicate_<Internal.Holder<Internal.Biome>>): Internal.StructureStart;
        toString(): string;
        biomes(): Internal.HolderSet<Internal.Biome>;
        findValidGenerationPoint(arg0: Internal.Structure$GenerationContext_): Internal.Optional<Internal.Structure$GenerationStub>;
        step(): Internal.GenerationStep$Decoration;
        spawnOverrides(): Internal.Map<Internal.MobCategory, Internal.StructureSpawnOverride>;
        notifyAll(): void;
        notify(): void;
        m_214086_(arg0: Internal.Structure$GenerationContext_): Internal.Optional<Internal.Structure$GenerationStub>;
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
        static readonly CODEC: Internal.Codec<Internal.AbyssalRuinsStructure>;
    }
    type AbyssalRuinsStructure_ = AbyssalRuinsStructure;
    class LeadItem extends Internal.Item {
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
        static bindPlayerMobs(arg0: Internal.Player_, arg1: Internal.Level_, arg2: BlockPos_): Internal.InteractionResult;
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
    type LeadItem_ = LeadItem;
    class BlockBehaviour$Properties implements Internal.ICopiedBlockProperties {
        constructor()
        /**
         * @deprecated
        */
        dropsLike(arg0: Internal.Block_): this;
        lootFrom(arg0: Internal.Supplier_<Internal.Block>): this;
        ignitedByLava(): this;
        explosionResistance(arg0: number): this;
        notify(): void;
        friction(arg0: number): this;
        isRedstoneConductor(arg0: Internal.BlockBehaviour$StatePredicate_): this;
        static of(): Internal.BlockBehaviour$Properties;
        mapColor(arg0: Internal.MapColor_): this;
        lightLevel(arg0: Internal.ToIntFunction_<Internal.BlockState>): this;
        offsetType(arg0: Internal.BlockBehaviour$OffsetType_): this;
        jumpFactor(arg0: number): this;
        noCollission(): this;
        noOcclusion(): this;
        noParticlesOnBreak(): this;
        sound(arg0: SoundType_): this;
        "mapColor(net.minecraft.world.item.DyeColor)"(arg0: Internal.DyeColor_): this;
        /**
         * @deprecated
        */
        forceSolidOff(): this;
        wait(): void;
        replaceable(): this;
        noLootTable(): this;
        hasPostProcess(arg0: Internal.BlockBehaviour$StatePredicate_): this;
        getClass(): typeof any;
        destroyTime(arg0: number): this;
        randomTicks(): this;
        static copy(arg0: Internal.BlockBehaviour_): Internal.BlockBehaviour$Properties;
        speedFactor(arg0: number): this;
        instabreak(): this;
        emissiveRendering(arg0: Internal.BlockBehaviour$StatePredicate_): this;
        isViewBlocking(arg0: Internal.BlockBehaviour$StatePredicate_): this;
        wait(arg0: number, arg1: number): void;
        requiresCorrectToolForDrops(): this;
        "mapColor(net.minecraft.world.level.material.MapColor)"(arg0: Internal.MapColor_): this;
        getBaseBlock(): Internal.Block;
        mapColor(arg0: Internal.DyeColor_): this;
        air(): this;
        requiredFeatures(...arg0: Internal.FeatureFlag_[]): this;
        mapColor(arg0: Internal.Function_<Internal.BlockState, Internal.MapColor>): this;
        toString(): string;
        isValidSpawn(arg0: Internal.BlockBehaviour$StateArgumentPredicate_<Internal.EntityType<any>>): this;
        notifyAll(): void;
        liquid(): this;
        "mapColor(java.util.function.Function)"(arg0: Internal.Function_<Internal.BlockState, Internal.MapColor>): this;
        instrument(arg0: Internal.NoteBlockInstrument_): this;
        dynamicShape(): this;
        pushReaction(arg0: Internal.PushReaction_): this;
        setBaseBlock(arg0: Internal.Block_): void;
        hashCode(): number;
        strength(arg0: number): this;
        forceSolidOn(): this;
        wait(arg0: number): void;
        strength(arg0: number, arg1: number): this;
        equals(arg0: any): boolean;
        isSuffocating(arg0: Internal.BlockBehaviour$StatePredicate_): this;
        get class(): typeof any
        get baseBlock(): Internal.Block
        set baseBlock(arg0: Internal.Block_)
        forceSolidOn: boolean;
        baseBlock: Internal.Block;
        isViewBlocking: Internal.BlockBehaviour$StatePredicate;
        hasCollision: boolean;
        lightEmission: Internal.ToIntFunction<Internal.BlockState>;
        ignitedByLava: boolean;
        requiredFeatures: Internal.FeatureFlagSet;
        dynamicShape: boolean;
        offsetFunction: Internal.Optional<Internal.BlockBehaviour$OffsetFunction>;
        friction: number;
        /**
         * @deprecated
        */
        forceSolidOff: boolean;
        replaceable: boolean;
        /**
         * @deprecated
        */
        liquid: boolean;
        isRandomlyTicking: boolean;
        canOcclude: boolean;
        emissiveRendering: Internal.BlockBehaviour$StatePredicate;
        soundType: SoundType;
        isValidSpawn: Internal.BlockBehaviour$StateArgumentPredicate<Internal.EntityType<any>>;
        lootTableSupplier: Internal.Supplier<ResourceLocation>;
        destroyTime: number;
        jumpFactor: number;
        explosionResistance: number;
        drops: ResourceLocation;
        mapColor: Internal.Function<Internal.BlockState, Internal.MapColor>;
        requiresCorrectToolForDrops: boolean;
        isAir: boolean;
        instrument: Internal.NoteBlockInstrument;
        pushReaction: Internal.PushReaction;
        speedFactor: number;
        spawnParticlesOnBreak: boolean;
        hasPostProcess: Internal.BlockBehaviour$StatePredicate;
        isRedstoneConductor: Internal.BlockBehaviour$StatePredicate;
        isSuffocating: Internal.BlockBehaviour$StatePredicate;
    }
    type BlockBehaviour$Properties_ = BlockBehaviour$Properties;
    class Log4jLogger implements org.slf4j.spi.LocationAwareLogger, Internal.Serializable {
        constructor(markerFactory: any_, logger: Internal.ExtendedLogger_, name: string)
        error(format: string): void;
        warn(marker: org.slf4j.Marker_, s: string, o: any, o1: any): void;
        error(marker: org.slf4j.Marker_, s: string): void;
        "debug(java.lang.String,java.lang.Object)"(format: string, o: any): void;
        trace(marker: org.slf4j.Marker_, s: string, o: any): void;
        error(format: string, ...args: any[]): void;
        "info(org.slf4j.Marker,java.lang.String)"(marker: org.slf4j.Marker_, s: string): void;
        atTrace(): Internal.LoggingEventBuilder;
        "error(org.slf4j.Marker,java.lang.String)"(marker: org.slf4j.Marker_, s: string): void;
        "info(java.lang.String,java.lang.Throwable)"(format: string, t: Internal.Throwable_): void;
        info(marker: org.slf4j.Marker_, s: string, ...objects: any[]): void;
        "error(java.lang.String,java.lang.Object[])"(format: string, ...args: any[]): void;
        warn(format: string, t: Internal.Throwable_): void;
        atDebug(): Internal.LoggingEventBuilder;
        info(format: string, o: any): void;
        "warn(java.lang.String,java.lang.Throwable)"(format: string, t: Internal.Throwable_): void;
        "info(org.slf4j.Marker,java.lang.String,java.lang.Object[])"(marker: org.slf4j.Marker_, s: string, ...objects: any[]): void;
        "error(org.slf4j.Marker,java.lang.String,java.lang.Object)"(marker: org.slf4j.Marker_, s: string, o: any): void;
        isWarnEnabled(marker: org.slf4j.Marker_): boolean;
        isTraceEnabled(): boolean;
        log(marker: org.slf4j.Marker_, fqcn: string, level: number, message: string, params: any[], throwable: Internal.Throwable_): void;
        "warn(java.lang.String,java.lang.Object[])"(format: string, ...args: any[]): void;
        debug(format: string, arg1: any, arg2: any): void;
        "warn(java.lang.String,java.lang.Object,java.lang.Object)"(format: string, arg1: any, arg2: any): void;
        debug(marker: org.slf4j.Marker_, s: string, o: any): void;
        getClass(): typeof any;
        trace(format: string, o: any): void;
        error(marker: org.slf4j.Marker_, s: string, o: any, o1: any): void;
        atWarn(): Internal.LoggingEventBuilder;
        makeLoggingEventBuilder(level: org.slf4j.event.Level_): Internal.LoggingEventBuilder;
        "warn(org.slf4j.Marker,java.lang.String,java.lang.Throwable)"(marker: org.slf4j.Marker_, s: string, throwable: Internal.Throwable_): void;
        info(marker: org.slf4j.Marker_, s: string, throwable: Internal.Throwable_): void;
        warn(format: string, ...args: any[]): void;
        "warn(org.slf4j.Marker,java.lang.String)"(marker: org.slf4j.Marker_, s: string): void;
        isErrorEnabled(): boolean;
        "error(java.lang.String,java.lang.Throwable)"(format: string, t: Internal.Throwable_): void;
        warn(marker: org.slf4j.Marker_, s: string, o: any): void;
        isWarnEnabled(): boolean;
        error(marker: org.slf4j.Marker_, s: string, throwable: Internal.Throwable_): void;
        "trace(java.lang.String,java.lang.Object,java.lang.Object)"(format: string, arg1: any, arg2: any): void;
        error(format: string, arg1: any, arg2: any): void;
        getName(): string;
        debug(format: string, o: any): void;
        isErrorEnabled(marker: org.slf4j.Marker_): boolean;
        info(marker: org.slf4j.Marker_, s: string, o: any): void;
        "warn(java.lang.String,java.lang.Object)"(format: string, o: any): void;
        info(format: string, arg1: any, arg2: any): void;
        isInfoEnabled(): boolean;
        atInfo(): Internal.LoggingEventBuilder;
        debug(format: string, t: Internal.Throwable_): void;
        toString(): string;
        info(format: string, ...args: any[]): void;
        notifyAll(): void;
        error(marker: org.slf4j.Marker_, s: string, ...objects: any[]): void;
        "trace(org.slf4j.Marker,java.lang.String,java.lang.Throwable)"(marker: org.slf4j.Marker_, s: string, throwable: Internal.Throwable_): void;
        "debug(java.lang.String,java.lang.Object[])"(format: string, ...args: any[]): void;
        isInfoEnabled(marker: org.slf4j.Marker_): boolean;
        "debug(java.lang.String,java.lang.Object,java.lang.Object)"(format: string, arg1: any, arg2: any): void;
        "error(org.slf4j.Marker,java.lang.String,java.lang.Object[])"(marker: org.slf4j.Marker_, s: string, ...objects: any[]): void;
        wait(arg0: number): void;
        trace(format: string, t: Internal.Throwable_): void;
        "info(java.lang.String,java.lang.Object)"(format: string, o: any): void;
        atLevel(arg0: org.slf4j.event.Level_): Internal.LoggingEventBuilder;
        "trace(java.lang.String,java.lang.Object[])"(format: string, ...args: any[]): void;
        trace(format: string, ...args: any[]): void;
        "debug(org.slf4j.Marker,java.lang.String,java.lang.Object)"(marker: org.slf4j.Marker_, s: string, o: any): void;
        warn(format: string, arg1: any, arg2: any): void;
        isTraceEnabled(marker: org.slf4j.Marker_): boolean;
        info(format: string, t: Internal.Throwable_): void;
        debug(format: string): void;
        "warn(org.slf4j.Marker,java.lang.String,java.lang.Object[])"(marker: org.slf4j.Marker_, s: string, ...objects: any[]): void;
        "info(org.slf4j.Marker,java.lang.String,java.lang.Object)"(marker: org.slf4j.Marker_, s: string, o: any): void;
        "error(java.lang.String,java.lang.Object)"(format: string, o: any): void;
        "info(org.slf4j.Marker,java.lang.String,java.lang.Throwable)"(marker: org.slf4j.Marker_, s: string, throwable: Internal.Throwable_): void;
        notify(): void;
        warn(format: string, o: any): void;
        trace(marker: org.slf4j.Marker_, s: string): void;
        warn(marker: org.slf4j.Marker_, s: string, ...objects: any[]): void;
        info(format: string): void;
        isEnabledForLevel(level: org.slf4j.event.Level_): boolean;
        debug(format: string, ...args: any[]): void;
        debug(marker: org.slf4j.Marker_, s: string): void;
        warn(marker: org.slf4j.Marker_, s: string, throwable: Internal.Throwable_): void;
        "info(java.lang.String,java.lang.Object[])"(format: string, ...args: any[]): void;
        "trace(org.slf4j.Marker,java.lang.String,java.lang.Object)"(marker: org.slf4j.Marker_, s: string, o: any): void;
        error(marker: org.slf4j.Marker_, s: string, o: any): void;
        "error(org.slf4j.Marker,java.lang.String,java.lang.Throwable)"(marker: org.slf4j.Marker_, s: string, throwable: Internal.Throwable_): void;
        trace(format: string): void;
        info(marker: org.slf4j.Marker_, s: string): void;
        wait(): void;
        "debug(java.lang.String,java.lang.Throwable)"(format: string, t: Internal.Throwable_): void;
        "info(java.lang.String,java.lang.Object,java.lang.Object)"(format: string, arg1: any, arg2: any): void;
        info(marker: org.slf4j.Marker_, s: string, o: any, o1: any): void;
        trace(format: string, arg1: any, arg2: any): void;
        debug(marker: org.slf4j.Marker_, s: string, o: any, o1: any): void;
        isDebugEnabled(): boolean;
        trace(marker: org.slf4j.Marker_, s: string, o: any, o1: any): void;
        error(format: string, o: any): void;
        warn(format: string): void;
        debug(marker: org.slf4j.Marker_, s: string, throwable: Internal.Throwable_): void;
        wait(arg0: number, arg1: number): void;
        trace(marker: org.slf4j.Marker_, s: string, ...objects: any[]): void;
        warn(marker: org.slf4j.Marker_, s: string): void;
        "warn(org.slf4j.Marker,java.lang.String,java.lang.Object)"(marker: org.slf4j.Marker_, s: string, o: any): void;
        "debug(org.slf4j.Marker,java.lang.String,java.lang.Throwable)"(marker: org.slf4j.Marker_, s: string, throwable: Internal.Throwable_): void;
        "error(java.lang.String,java.lang.Object,java.lang.Object)"(format: string, arg1: any, arg2: any): void;
        trace(marker: org.slf4j.Marker_, s: string, throwable: Internal.Throwable_): void;
        "trace(java.lang.String,java.lang.Throwable)"(format: string, t: Internal.Throwable_): void;
        atError(): Internal.LoggingEventBuilder;
        "trace(org.slf4j.Marker,java.lang.String,java.lang.Object[])"(marker: org.slf4j.Marker_, s: string, ...objects: any[]): void;
        isDebugEnabled(marker: org.slf4j.Marker_): boolean;
        "trace(org.slf4j.Marker,java.lang.String)"(marker: org.slf4j.Marker_, s: string): void;
        "debug(org.slf4j.Marker,java.lang.String,java.lang.Object[])"(marker: org.slf4j.Marker_, s: string, ...objects: any[]): void;
        hashCode(): number;
        debug(marker: org.slf4j.Marker_, s: string, ...objects: any[]): void;
        "trace(java.lang.String,java.lang.Object)"(format: string, o: any): void;
        "debug(org.slf4j.Marker,java.lang.String)"(marker: org.slf4j.Marker_, s: string): void;
        equals(arg0: any): boolean;
        error(format: string, t: Internal.Throwable_): void;
        get traceEnabled(): boolean
        get class(): typeof any
        get errorEnabled(): boolean
        get warnEnabled(): boolean
        get name(): string
        get infoEnabled(): boolean
        get debugEnabled(): boolean
        static readonly FQCN: ("org.apache.logging.slf4j.Log4jLogger") & (string);
    }
    type Log4jLogger_ = Log4jLogger;
    interface KFunction <R> extends kotlin.Function<R>, Internal.KCallable<R> {
        abstract isFinal(): boolean;
        abstract call(...arg0: any[]): R;
        abstract getAnnotations(): Internal.List<Internal.Annotation>;
        abstract isAbstract(): boolean;
        abstract isInline(): boolean;
        abstract isExternal(): boolean;
        abstract getParameters(): Internal.List<Internal.KParameter>;
        abstract getReturnType(): Internal.KType;
        abstract isInfix(): boolean;
        abstract callBy(arg0: Internal.Map_<Internal.KParameter, any>): R;
        abstract isOpen(): boolean;
        abstract getName(): string;
        abstract isSuspend(): boolean;
        abstract isOperator(): boolean;
        abstract getTypeParameters(): Internal.List<Internal.KTypeParameter>;
        abstract getVisibility(): Internal.KVisibility;
        get "final"(): boolean
        get annotations(): Internal.List<Internal.Annotation>
        get "abstract"(): boolean
        get inline(): boolean
        get external(): boolean
        get parameters(): Internal.List<Internal.KParameter>
        get returnType(): Internal.KType
        get infix(): boolean
        get open(): boolean
        get name(): string
        get suspend(): boolean
        get operator(): boolean
        get typeParameters(): Internal.List<Internal.KTypeParameter>
        get visibility(): Internal.KVisibility
    }
    type KFunction_<R> = KFunction<R>;
    interface SurfaceProxy$LazyInstantiateCallback extends Internal.AutoCloseable {
        abstract onLazyInstantiate(arg0: icyllis.arc3d.engine.ResourceProvider_, arg1: Internal.BackendFormat_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: string): Internal.SurfaceProxy$LazyCallbackResult;
        close(): void;
        (arg0: icyllis.arc3d.engine.ResourceProvider, arg1: Internal.BackendFormat, arg2: number, arg3: number, arg4: number, arg5: number, arg6: string): Internal.SurfaceProxy$LazyCallbackResult_;
    }
    type SurfaceProxy$LazyInstantiateCallback_ = SurfaceProxy$LazyInstantiateCallback | ((arg0: icyllis.arc3d.engine.ResourceProvider, arg1: Internal.BackendFormat, arg2: number, arg3: number, arg4: number, arg5: number, arg6: string)=> Internal.SurfaceProxy$LazyCallbackResult_);
    abstract class AbstractDocumentBase <T extends Internal.AbstractDocumentBase<T>> implements Internal.ISerde {
        constructor()
        getClass(): typeof any;
        merge(other: T): T;
        abstract applyProperties(): T;
        toString(): string;
        abstract copy(): T;
        notifyAll(): void;
        isHidden(): boolean;
        serialize(): Internal.JsonObject;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        findPropertiesOf<E extends Internal.AbstractProperty<any>>(property: E): Internal.List<E>;
        fulfillsConditions(): boolean;
        findProperty<P extends Internal.AbstractProperty<P>>(property: P): Internal.Optional<P>;
        hashCode(): number;
        findProperties(predicate: Internal.Predicate_<Internal.AbstractProperty<any>>): Internal.List<Internal.AbstractProperty<any>>;
        addPropertyJson(json: Internal.JsonObject_): this;
        wait(): void;
        wait(arg0: number): void;
        deserialize(object: Internal.JsonObject_): void;
        hasProperty<P extends Internal.AbstractProperty<P>>(property: P): boolean;
        equals(arg0: any): boolean;
        get class(): typeof any
        get hidden(): boolean
        static readonly DOCUMENT_TYPE_REGISTRY: ({[key: typeof any]: "type:array", [key: typeof any]: "type:class", [key: typeof any]: "type:parameterized", [key: typeof any]: "type:variable", [key: typeof any]: "type:primitive", [key: typeof any]: "type:intersection", [key: typeof any]: "type:union", [key: typeof any]: "type:object", [key: typeof any]: "type:jsArray", [key: typeof any]: "type:typeof", [key: typeof any]: "type:lambda", [key: typeof any]: "property:comment", [key: typeof any]: "property:hide", [key: typeof any]: "property:mod", [key: typeof any]: "property:modify", [key: typeof any]: "property:returns", [key: typeof any]: "property:param", [key: typeof any]: "property:assign", [key: typeof any]: "property:extra", [key: typeof any]: "property:underscored", [key: typeof any]: "document:class", [key: typeof any]: "document:method", [key: typeof any]: "document:field", [key: typeof any]: "document:constructor", [key: typeof any]: "value:number", [key: typeof any]: "value:boolean", [key: typeof any]: "value:string", [key: typeof any]: "value:character", [key: typeof any]: "value:fallback", [key: typeof any]: "value:null", [key: typeof any]: "value:map", [key: typeof any]: "value:list"}) & (Internal.BiMap<Internal.AbstractDocumentBase<any>, string>);
    }
    type AbstractDocumentBase_<T extends Internal.AbstractDocumentBase<T>> = AbstractDocumentBase<T>;
    class Climate$ParameterPoint extends Internal.Record {
        constructor(arg0: Internal.Climate$Parameter_, arg1: Internal.Climate$Parameter_, arg2: Internal.Climate$Parameter_, arg3: Internal.Climate$Parameter_, arg4: Internal.Climate$Parameter_, arg5: Internal.Climate$Parameter_, arg6: number)
        weirdness(): Internal.Climate$Parameter;
        depth(): Internal.Climate$Parameter;
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        continentalness(): Internal.Climate$Parameter;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        offset(): number;
        hashCode(): number;
        erosion(): Internal.Climate$Parameter;
        wait(): void;
        wait(arg0: number): void;
        temperature(): Internal.Climate$Parameter;
        equals(arg0: any): boolean;
        humidity(): Internal.Climate$Parameter;
        get class(): typeof any
        static readonly CODEC: Internal.Codec<Internal.Climate$ParameterPoint>;
    }
    type Climate$ParameterPoint_ = Climate$ParameterPoint;
    class SculkShriekerBlock extends Internal.BaseEntityBlock implements Internal.SimpleWaterloggedBlock {
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
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
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
        static readonly WATERLOGGED: (Internal.BooleanProperty) & (Internal.BooleanProperty);
        static readonly SHRIEKING: (Internal.BooleanProperty) & (Internal.BooleanProperty);
        static readonly CAN_SUMMON: (Internal.BooleanProperty) & (Internal.BooleanProperty);
        static readonly TOP_Y: (0.5) & (number);
    }
    type SculkShriekerBlock_ = SculkShriekerBlock;
    class Bitmap implements Internal.AutoCloseable {
        getClass(): typeof any;
        getRowStride(): number;
        setColorInfo(newColorType: number, newAlphaType: number): void;
        saveDialog(format: Internal.Bitmap$SaveFormat_, quality: number, name: string): boolean;
        getPixelMap(): Internal.PixelMap;
        saveToFile(format: Internal.Bitmap$SaveFormat_, quality: number, file: Internal.File_): void;
        isPremultiplied(): boolean;
        getPixelARGB(x: number, y: number): number;
        static createBitmap(width: number, height: number, format: Internal.Bitmap$Format_): Internal.Bitmap;
        static flipVertically(bitmap: Internal.Bitmap_): void;
        saveToStream(format: Internal.Bitmap$SaveFormat_, quality: number, stream: Internal.OutputStream_): void;
        hasAlpha(): boolean;
        notify(): void;
        isClosed(): boolean;
        wait(arg0: number, arg1: number): void;
        getColorType(): number;
        saveToChannel(format: Internal.Bitmap$SaveFormat_, quality: number, channel: Internal.WritableByteChannel_): void;
        saveToPath(format: Internal.Bitmap$SaveFormat_, quality: number, path: Internal.Path_): void;
        getAddress(): number;
        getSize(): number;
        getAlphaType(): number;
        getFormat(): Internal.Bitmap$Format;
        getHeight(): number;
        isImmutable(): boolean;
        toString(): string;
        getWidth(): number;
        getInfo(): Internal.ImageInfo;
        notifyAll(): void;
        getColorSpace(): icyllis.arc3d.core.ColorSpace;
        getPixelRef(): Internal.PixelRef;
        static openDialogGet(format: Internal.Bitmap$SaveFormat_, title: Internal.CharSequence_, defaultPathAndFile: Internal.CharSequence_): string;
        static saveDialogGet(format: Internal.Bitmap$SaveFormat_, title: Internal.CharSequence_, name: string): string;
        setImmutable(): void;
        isRecycled(): boolean;
        hashCode(): number;
        recycle(): void;
        setColorSpace(newColorSpace: icyllis.arc3d.core.ColorSpace_): void;
        wait(): void;
        close(): void;
        wait(arg0: number): void;
        static openDialogGets(format: Internal.Bitmap$SaveFormat_, title: Internal.CharSequence_, defaultPathAndFile: Internal.CharSequence_): string[];
        equals(arg0: any): boolean;
        getChannels(): number;
        get class(): typeof any
        get rowStride(): number
        get pixelMap(): Internal.PixelMap
        get premultiplied(): boolean
        get closed(): boolean
        get colorType(): number
        get address(): number
        get size(): number
        get alphaType(): number
        get format(): Internal.Bitmap$Format
        get height(): number
        get immutable(): boolean
        get width(): number
        get info(): Internal.ImageInfo
        get colorSpace(): icyllis.arc3d.core.ColorSpace
        get pixelRef(): Internal.PixelRef
        get recycled(): boolean
        set colorSpace(newColorSpace: icyllis.arc3d.core.ColorSpace_)
        get channels(): number
        static readonly MARKER: (Internal.MarkerManager$Log4jMarker) & (org.apache.logging.log4j.Marker);
        static readonly DATE_FORMAT: (com.ibm.icu.text.SimpleDateFormat) & (com.ibm.icu.text.DateFormat);
    }
    type Bitmap_ = Bitmap;
    interface CommonLevelAccessor extends Internal.LevelSimulatedRW, Internal.LevelReader, Internal.EntityGetter {
        getNearestPlayer(arg0: Internal.TargetingConditions_, arg1: Internal.LivingEntity_): Internal.Player;
        abstract getShade(arg0: Internal.Direction_, arg1: boolean): number;
        getSignal(arg0: BlockPos_, arg1: Internal.Direction_): number;
        isUnobstructed(arg0: Internal.Entity_, arg1: Internal.VoxelShape_): boolean;
        getMaxSection(): number;
        getBrightness(arg0: Internal.LightLayer_, arg1: BlockPos_): number;
        getSectionYFromSectionIndex(arg0: number): number;
        "getNearestPlayer(net.minecraft.world.entity.ai.targeting.TargetingConditions,net.minecraft.world.entity.LivingEntity,double,double,double)"(arg0: Internal.TargetingConditions_, arg1: Internal.LivingEntity_, arg2: number, arg3: number, arg4: number): Internal.Player;
        abstract players(): Internal.List<Internal.Player>;
        abstract getBiomeManager(): Internal.BiomeManager;
        isEmptyBlock(arg0: BlockPos_): boolean;
        getMaxLocalRawBrightness(arg0: BlockPos_, arg1: number): number;
        abstract removeBlock(arg0: BlockPos_, arg1: boolean): boolean;
        getBlockCollisions(arg0: Internal.Entity_, arg1: Internal.AABB_): Internal.Iterable<Internal.VoxelShape>;
        isOutsideBuildHeight(arg0: BlockPos_): boolean;
        /**
         * @deprecated
        */
        hasChunksAt(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        getHeightmapPos(arg0: Internal.Heightmap$Types_, arg1: BlockPos_): BlockPos;
        abstract setBlock(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: number, arg3: number): boolean;
        abstract isClientSide(): boolean;
        getEntities(arg0: Internal.Entity_, arg1: Internal.AABB_): Internal.List<Internal.Entity>;
        getEntitiesOfClass<T extends Internal.Entity>(arg0: T, arg1: Internal.AABB_): Internal.List<T>;
        "getNearestPlayer(net.minecraft.world.entity.ai.targeting.TargetingConditions,net.minecraft.world.entity.LivingEntity)"(arg0: Internal.TargetingConditions_, arg1: Internal.LivingEntity_): Internal.Player;
        getBlockStates(arg0: Internal.AABB_): Internal.Stream<Internal.BlockState>;
        getPathfindingCostFromLightLevels(arg0: BlockPos_): number;
        abstract dimensionType(): Internal.DimensionType;
        abstract getSkyDarken(): number;
        getMinBuildHeight(): number;
        getLoadedChunk(arg0: number, arg1: number): Internal.ChunkAccess;
        abstract "getEntities(net.minecraft.world.level.entity.EntityTypeTest,net.minecraft.world.phys.AABB,java.util.function.Predicate)"<T extends Internal.Entity>(arg0: Internal.EntityTypeTest_<Internal.Entity, T>, arg1: Internal.AABB_, arg2: Internal.Predicate_<T>): Internal.List<T>;
        getNearestPlayer(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): Internal.Player;
        abstract destroyBlock(arg0: BlockPos_, arg1: boolean, arg2: Internal.Entity_, arg3: number): boolean;
        /**
         * @deprecated
        */
        hasChunkAt(arg0: number, arg1: number): boolean;
        /**
         * @deprecated
        */
        abstract getSeaLevel(): number;
        getSectionIndex(arg0: number): number;
        getDirectSignalTo(arg0: BlockPos_): number;
        getNearestPlayer(arg0: Internal.TargetingConditions_, arg1: number, arg2: number, arg3: number): Internal.Player;
        getMaxBuildHeight(): number;
        /**
         * @deprecated
        */
        hasChunksAt(arg0: BlockPos_, arg1: BlockPos_): boolean;
        destroyBlock(arg0: BlockPos_, arg1: boolean): boolean;
        "getNearestPlayer(double,double,double,double,java.util.function.Predicate)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Predicate_<Internal.Entity>): Internal.Player;
        getChunk(arg0: number, arg1: number): Internal.ChunkAccess;
        addFreshEntity(arg0: Internal.Entity_): boolean;
        hasSignal(arg0: BlockPos_, arg1: Internal.Direction_): boolean;
        "isOutsideBuildHeight(int)"(arg0: number): boolean;
        getCollisions(arg0: Internal.Entity_, arg1: Internal.AABB_): Internal.Iterable<Internal.VoxelShape>;
        destroyBlock(arg0: BlockPos_, arg1: boolean, arg2: Internal.Entity_): boolean;
        getHeight(): number;
        getChunk(arg0: BlockPos_): Internal.ChunkAccess;
        abstract isFluidAtPosition(arg0: BlockPos_, arg1: Internal.Predicate_<Internal.FluidState>): boolean;
        abstract getWorldBorder(): Internal.WorldBorder;
        getMaxLocalRawBrightness(arg0: BlockPos_): number;
        isUnobstructed(arg0: Internal.BlockState_, arg1: BlockPos_, arg2: Internal.CollisionContext_): boolean;
        "isOutsideBuildHeight(net.minecraft.core.BlockPos)"(arg0: BlockPos_): boolean;
        /**
         * @deprecated
        */
        hasChunkAt(arg0: BlockPos_): boolean;
        getBiome(arg0: BlockPos_): Internal.Holder<Internal.Biome>;
        "getNearestPlayer(net.minecraft.world.entity.Entity,double)"(arg0: Internal.Entity_, arg1: number): Internal.Player;
        "noCollision(net.minecraft.world.phys.AABB)"(arg0: Internal.AABB_): boolean;
        /**
         * @deprecated
        */
        getLightLevelDependentMagicValue(arg0: BlockPos_): number;
        hasNearbyAlivePlayer(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        abstract "getEntities(net.minecraft.world.entity.Entity,net.minecraft.world.phys.AABB,java.util.function.Predicate)"(arg0: Internal.Entity_, arg1: Internal.AABB_, arg2: Internal.Predicate_<Internal.Entity>): Internal.List<Internal.Entity>;
        getEntitiesOfClass<T extends Internal.Entity>(arg0: T, arg1: Internal.AABB_, arg2: Internal.Predicate_<T>): Internal.List<T>;
        getNearestPlayer(arg0: Internal.TargetingConditions_, arg1: Internal.LivingEntity_, arg2: number, arg3: number, arg4: number): Internal.Player;
        getControlInputSignal(arg0: BlockPos_, arg1: Internal.Direction_, arg2: boolean): number;
        getBlockTint(arg0: BlockPos_, arg1: Internal.ColorResolver_): number;
        getMinSection(): number;
        findFreePosition(arg0: Internal.Entity_, arg1: Internal.VoxelShape_, arg2: Vec3d_, arg3: number, arg4: number, arg5: number): Internal.Optional<Vec3d>;
        abstract getBlockState(arg0: BlockPos_): Internal.BlockState;
        clipWithInteractionOverride(arg0: Vec3d_, arg1: Vec3d_, arg2: BlockPos_, arg3: Internal.VoxelShape_, arg4: Internal.BlockState_): Internal.BlockHitResult;
        getNearestPlayer(arg0: Internal.Entity_, arg1: number): Internal.Player;
        hasNeighborSignal(arg0: BlockPos_): boolean;
        getLightEmission(arg0: BlockPos_): number;
        getBlockFloorHeight(arg0: BlockPos_): number;
        getBlockStatesIfLoaded(arg0: Internal.AABB_): Internal.Stream<Internal.BlockState>;
        getShade(arg0: number, arg1: number, arg2: number, arg3: boolean): number;
        create(arg0: number, arg1: number): Internal.LevelHeightAccessor;
        clip(arg0: Internal.ClipContext_): Internal.BlockHitResult;
        /**
         * @deprecated
        */
        hasChunksAt(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        getBlockEntity<T extends Internal.BlockEntity>(arg0: BlockPos_, arg1: Internal.BlockEntityType_<T>): Internal.Optional<T>;
        getRawBrightness(arg0: BlockPos_, arg1: number): number;
        canSeeSky(arg0: BlockPos_): boolean;
        abstract enabledFeatures(): Internal.FeatureFlagSet;
        isUnobstructed(arg0: Internal.Entity_): boolean;
        getNearestEntity<T extends Internal.LivingEntity>(arg0: Internal.List_<T>, arg1: Internal.TargetingConditions_, arg2: Internal.LivingEntity_, arg3: number, arg4: number, arg5: number): T;
        abstract getUncachedNoiseBiome(arg0: number, arg1: number, arg2: number): Internal.Holder<Internal.Biome>;
        abstract getEntities(arg0: Internal.Entity_, arg1: Internal.AABB_, arg2: Internal.Predicate_<Internal.Entity>): Internal.List<Internal.Entity>;
        getPlayerByUUID(arg0: Internal.UUID_): Internal.Player;
        canSeeSkyFromBelowWater(arg0: BlockPos_): boolean;
        holderLookup<T>(arg0: Internal.ResourceKey_<Internal.Registry<T>>): Internal.HolderLookup<T>;
        abstract getHeight(arg0: Internal.Heightmap$Types_, arg1: number, arg2: number): number;
        getSectionsCount(): number;
        abstract isStateAtPosition(arg0: BlockPos_, arg1: Internal.Predicate_<Internal.BlockState>): boolean;
        "noCollision(net.minecraft.world.entity.Entity)"(arg0: Internal.Entity_): boolean;
        getNearbyPlayers(arg0: Internal.TargetingConditions_, arg1: Internal.LivingEntity_, arg2: Internal.AABB_): Internal.List<Internal.Player>;
        getSectionIndexFromSectionY(arg0: number): number;
        setBlock(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: number): boolean;
        getChunk(arg0: number, arg1: number, arg2: Internal.ChunkStatus_): Internal.ChunkAccess;
        noCollision(arg0: Internal.Entity_): boolean;
        abstract getEntities<T extends Internal.Entity>(arg0: Internal.EntityTypeTest_<Internal.Entity, T>, arg1: Internal.AABB_, arg2: Internal.Predicate_<T>): Internal.List<T>;
        getBestNeighborSignal(arg0: BlockPos_): number;
        /**
         * @deprecated
        */
        abstract hasChunk(arg0: number, arg1: number): boolean;
        getNearbyEntities<T extends Internal.LivingEntity>(arg0: T, arg1: Internal.TargetingConditions_, arg2: Internal.LivingEntity_, arg3: Internal.AABB_): Internal.List<T>;
        "getNearestPlayer(double,double,double,double,boolean)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): Internal.Player;
        noCollision(arg0: Internal.AABB_): boolean;
        isWaterAt(arg0: BlockPos_): boolean;
        getDirectSignal(arg0: BlockPos_, arg1: Internal.Direction_): number;
        getEntityCollisions(arg0: Internal.Entity_, arg1: Internal.AABB_): Internal.List<Internal.VoxelShape>;
        abstract getLightEngine(): Internal.LevelLightEngine;
        getBlockFloorHeight(arg0: Internal.VoxelShape_, arg1: Internal.Supplier_<Internal.VoxelShape>): number;
        collidesWithSuffocatingBlock(arg0: Internal.Entity_, arg1: Internal.AABB_): boolean;
        abstract getBlockEntity(arg0: BlockPos_): Internal.BlockEntity;
        getNoiseBiome(arg0: number, arg1: number, arg2: number): Internal.Holder<Internal.Biome>;
        getModelDataManager(): Internal.ModelDataManager;
        noCollision(arg0: Internal.Entity_, arg1: Internal.AABB_): boolean;
        isOutsideBuildHeight(arg0: number): boolean;
        getNearestPlayer(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Predicate_<Internal.Entity>): Internal.Player;
        isBlockInLine(arg0: Internal.ClipBlockStateContext_): Internal.BlockHitResult;
        abstract getFluidState(arg0: BlockPos_): Internal.FluidState;
        abstract getChunk(arg0: number, arg1: number, arg2: Internal.ChunkStatus_, arg3: boolean): Internal.ChunkAccess;
        abstract registryAccess(): Internal.RegistryAccess;
        findSupportingBlock(arg0: Internal.Entity_, arg1: Internal.AABB_): Internal.Optional<BlockPos>;
        getExistingBlockEntity(arg0: BlockPos_): Internal.BlockEntity;
        getChunkForCollisions(arg0: number, arg1: number): Internal.BlockGetter;
        containsAnyLiquid(arg0: Internal.AABB_): boolean;
        getMaxLightLevel(): number;
        getNearestEntity<T extends Internal.LivingEntity>(arg0: T, arg1: Internal.TargetingConditions_, arg2: Internal.LivingEntity_, arg3: number, arg4: number, arg5: number, arg6: Internal.AABB_): T;
        isAreaLoaded(arg0: BlockPos_, arg1: number): boolean;
        traverseBlocks<T, C>(arg0: Vec3d_, arg1: Vec3d_, arg2: C, arg3: Internal.BiFunction_<C, BlockPos, T>, arg4: Internal.Function_<C, T>): T;
        get maxSection(): number
        get biomeManager(): Internal.BiomeManager
        get clientSide(): boolean
        get skyDarken(): number
        get minBuildHeight(): number
        /**
         * @deprecated
        */
        get seaLevel(): number
        get maxBuildHeight(): number
        get height(): number
        get worldBorder(): Internal.WorldBorder
        get minSection(): number
        get sectionsCount(): number
        get lightEngine(): Internal.LevelLightEngine
        get modelDataManager(): Internal.ModelDataManager
        get maxLightLevel(): number
    }
    type CommonLevelAccessor_ = CommonLevelAccessor;
    class SecureJar$Status extends Internal.Enum<Internal.SecureJar$Status> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        toString(): string;
        "compareTo(cpw.mods.jarhandling.SecureJar$Status)"(arg0: Internal.SecureJar$Status_): number;
        notifyAll(): void;
        compareTo(arg0: Internal.SecureJar$Status_): number;
        notify(): void;
        getDeclaringClass(): typeof Internal.SecureJar$Status;
        wait(arg0: number, arg1: number): void;
        static values(): Internal.SecureJar$Status[];
        compareTo(arg0: any): number;
        name(): string;
        hashCode(): number;
        static valueOf(arg0: string): Internal.SecureJar$Status;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.SecureJar$Status>>;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get declaringClass(): typeof Internal.SecureJar$Status
        static readonly VERIFIED: (Internal.SecureJar$Status) & (Internal.SecureJar$Status);
        static readonly NONE: (Internal.SecureJar$Status) & (Internal.SecureJar$Status);
        static readonly INVALID: (Internal.SecureJar$Status) & (Internal.SecureJar$Status);
        static readonly UNVERIFIED: (Internal.SecureJar$Status) & (Internal.SecureJar$Status);
    }
    type SecureJar$Status_ = "unverified" | SecureJar$Status | "invalid" | "verified" | "none";
    interface Attackable {
        abstract getLastAttacker(): Internal.LivingEntity;
        get lastAttacker(): Internal.LivingEntity
        (): Internal.LivingEntity_;
    }
    type Attackable_ = (()=> Internal.LivingEntity_) | Attackable;
    interface View$OnLayoutChangeListener {
        abstract onLayoutChange(arg0: icyllis.modernui.view.View_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
        (arg0: icyllis.modernui.view.View, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
    }
    type View$OnLayoutChangeListener_ = View$OnLayoutChangeListener | ((arg0: icyllis.modernui.view.View, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number)=> void);
    abstract class DynamicLike <T> {
        constructor(arg0: Internal.DynamicOps_<T>)
        asMapOpt<K, V>(arg0: Internal.Function_<Internal.Dynamic<T>, K>, arg1: Internal.Function_<Internal.Dynamic<T>, V>): Internal.DataResult<Internal.Map<K, V>>;
        createIntList(arg0: Internal.IntStream_): Internal.Dynamic<any>;
        createBoolean(arg0: boolean): Internal.Dynamic<T>;
        "readMap(com.mojang.serialization.Decoder,java.util.function.Function)"<K, V>(arg0: com.mojang.serialization.Decoder_<K>, arg1: Internal.Function_<K, com.mojang.serialization.Decoder<V>>): Internal.DataResult<Internal.List<com.mojang.datafixers.util.Pair<K, V>>>;
        abstract getGeneric(arg0: T): Internal.DataResult<T>;
        readMap<K, V>(arg0: com.mojang.serialization.Decoder_<K>, arg1: com.mojang.serialization.Decoder_<V>): Internal.DataResult<Internal.List<com.mojang.datafixers.util.Pair<K, V>>>;
        getOps(): Internal.DynamicOps<T>;
        notify(): void;
        asNumber(arg0: number): number;
        createNumeric(arg0: number): Internal.Dynamic<T>;
        asIntStream(): Internal.IntStream;
        abstract asString(): Internal.DataResult<string>;
        createDouble(arg0: number): Internal.Dynamic<T>;
        asByte(arg0: number): number;
        readList<E>(arg0: Internal.Function_<Internal.Dynamic<any>, Internal.DataResult<E>>): Internal.DataResult<Internal.List<E>>;
        asMap<K, V>(arg0: Internal.Function_<Internal.Dynamic<T>, K>, arg1: Internal.Function_<Internal.Dynamic<T>, V>): Internal.Map<K, V>;
        getElementGeneric(arg0: T, arg1: T): T;
        getElement(arg0: string, arg1: T): T;
        abstract getElement(arg0: string): Internal.DataResult<T>;
        asLong(arg0: number): number;
        asShort(arg0: number): number;
        emptyMap(): Internal.Dynamic<T>;
        asDouble(arg0: number): number;
        asFloat(arg0: number): number;
        abstract asNumber(): Internal.DataResult<number>;
        readMap<K, V>(arg0: com.mojang.serialization.Decoder_<K>, arg1: Internal.Function_<K, com.mojang.serialization.Decoder<V>>): Internal.DataResult<Internal.List<com.mojang.datafixers.util.Pair<K, V>>>;
        asString(arg0: string): string;
        wait(): void;
        createFloat(arg0: number): Internal.Dynamic<T>;
        read<A>(arg0: com.mojang.serialization.Decoder_<A>): Internal.DataResult<A>;
        abstract decode<A>(arg0: com.mojang.serialization.Decoder_<A>): Internal.DataResult<com.mojang.datafixers.util.Pair<A, T>>;
        asStream(): Internal.Stream<Internal.Dynamic<T>>;
        "readList(java.util.function.Function)"<E>(arg0: Internal.Function_<Internal.Dynamic<any>, Internal.DataResult<E>>): Internal.DataResult<Internal.List<E>>;
        abstract get(arg0: string): Internal.OptionalDynamic<T>;
        createByte(arg0: number): Internal.Dynamic<T>;
        getClass(): typeof any;
        emptyList(): Internal.Dynamic<T>;
        abstract asLongStreamOpt(): Internal.DataResult<Internal.LongStream>;
        createList(arg0: Internal.Stream_<Internal.Dynamic<any>>): Internal.Dynamic<T>;
        wait(arg0: number, arg1: number): void;
        createMap(arg0: Internal.Map_<Internal.Dynamic<any>, Internal.Dynamic<any>>): Internal.Dynamic<T>;
        readMap<R>(arg0: Internal.DataResult_<R>, arg1: Internal.Function3_<R, Internal.Dynamic<T>, Internal.Dynamic<T>, Internal.DataResult<R>>): Internal.DataResult<R>;
        abstract asIntStreamOpt(): Internal.DataResult<Internal.IntStream>;
        asByteBuffer(): Internal.ByteBuffer;
        createLongList(arg0: Internal.LongStream_): Internal.Dynamic<any>;
        readList<E>(arg0: com.mojang.serialization.Decoder_<E>): Internal.DataResult<Internal.List<E>>;
        asInt(arg0: number): number;
        createShort(arg0: number): Internal.Dynamic<T>;
        createString(arg0: string): Internal.Dynamic<T>;
        asBoolean(arg0: boolean): boolean;
        abstract getElementGeneric(arg0: T): Internal.DataResult<T>;
        toString(): string;
        notifyAll(): void;
        asList<U>(arg0: Internal.Function_<Internal.Dynamic<T>, U>): Internal.List<U>;
        createByteList(arg0: Internal.ByteBuffer_): Internal.Dynamic<any>;
        abstract asByteBufferOpt(): Internal.DataResult<Internal.ByteBuffer>;
        hashCode(): number;
        "readList(com.mojang.serialization.Decoder)"<E>(arg0: com.mojang.serialization.Decoder_<E>): Internal.DataResult<Internal.List<E>>;
        asLongStream(): Internal.LongStream;
        asListOpt<U>(arg0: Internal.Function_<Internal.Dynamic<T>, U>): Internal.DataResult<Internal.List<U>>;
        abstract asStreamOpt(): Internal.DataResult<Internal.Stream<Internal.Dynamic<T>>>;
        abstract asMapOpt(): Internal.DataResult<Internal.Stream<com.mojang.datafixers.util.Pair<Internal.Dynamic<T>, Internal.Dynamic<T>>>>;
        wait(arg0: number): void;
        createLong(arg0: number): Internal.Dynamic<T>;
        createInt(arg0: number): Internal.Dynamic<T>;
        "readMap(com.mojang.serialization.Decoder,com.mojang.serialization.Decoder)"<K, V>(arg0: com.mojang.serialization.Decoder_<K>, arg1: com.mojang.serialization.Decoder_<V>): Internal.DataResult<Internal.List<com.mojang.datafixers.util.Pair<K, V>>>;
        equals(arg0: any): boolean;
        "readMap(com.mojang.serialization.DataResult,com.mojang.datafixers.util.Function3)"<R>(arg0: Internal.DataResult_<R>, arg1: Internal.Function3_<R, Internal.Dynamic<T>, Internal.Dynamic<T>, Internal.DataResult<R>>): Internal.DataResult<R>;
        get ops(): Internal.DynamicOps<T>
        get class(): typeof any
    }
    type DynamicLike_<T> = DynamicLike<T>;
    class ItemNameBlockItem extends Internal.BlockItem {
        constructor(arg0: Internal.Block_, arg1: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        setRarity(arg0: Internal.Rarity_): void;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        static setBlockEntityData(arg0: Internal.ItemStack_, arg1: Internal.BlockEntityType_<any>, arg2: Internal.CompoundTag_): void;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
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
        abstract moonlight$getClientAnimationExtension(): any;
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
        abstract moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        abstract moonlight$setClientAnimationExtension(arg0: any): void;
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
        get block(): Internal.Block
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
    type ItemNameBlockItem_ = ItemNameBlockItem;
    class FeatureFlagSet {
        getClass(): typeof any;
        toString(): string;
        static of(arg0: Internal.FeatureFlag_, ...arg1: Internal.FeatureFlag_[]): Internal.FeatureFlagSet;
        isSubsetOf(arg0: Internal.FeatureFlagSet_): boolean;
        notifyAll(): void;
        notify(): void;
        join(arg0: Internal.FeatureFlagSet_): this;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        static of(): Internal.FeatureFlagSet;
        contains(arg0: Internal.FeatureFlag_): boolean;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        static of(arg0: Internal.FeatureFlag_): Internal.FeatureFlagSet;
        get class(): typeof any
        static readonly MAX_CONTAINER_SIZE: (64) & (number);
    }
    type FeatureFlagSet_ = FeatureFlagSet;
    class CoralClawFeature extends Internal.CoralFeature {
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
    type CoralClawFeature_ = CoralClawFeature;
    class BedBlockEntity extends Internal.BlockEntity {
        constructor(arg0: BlockPos_, arg1: Internal.BlockState_)
        constructor(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: Internal.DyeColor_)
        getUpdateTag(): Internal.CompoundTag;
        handleUpdateTag(arg0: Internal.CompoundTag_): void;
        requestModelDataUpdate(): void;
        setLevel(arg0: Internal.Level_): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        notify(): void;
        /**
         * @deprecated
        */
        setBlockState(arg0: Internal.BlockState_): void;
        getBlockPos(): BlockPos;
        isRemoved(): boolean;
        load(arg0: Internal.CompoundTag_): void;
        setChanged(): void;
        onLoad(): void;
        saveWithoutMetadata(): Internal.CompoundTag;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        getColor(): Internal.DyeColor;
        invalidateCaps(): void;
        neruina$isErrored(): boolean;
        getBlockState(): Internal.BlockState;
        setRemoved(): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        getType(): Internal.BlockEntityType<any>;
        static loadStatic(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: Internal.CompoundTag_): Internal.BlockEntity;
        neruina$getTickingEntryId(): Internal.UUID;
        wait(): void;
        setColor(arg0: Internal.DyeColor_): void;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        getRenderBoundingBox(): Internal.AABB;
        getClass(): typeof any;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        saveWithId(): Internal.CompoundTag;
        static getPosFromTag(arg0: Internal.CompoundTag_): BlockPos;
        hasAnyComparatorNearby(): boolean;
        onChunkUnloaded(): void;
        neruina$setErrored(): void;
        saveToItem(arg0: Internal.ItemStack_): void;
        neruina$clearErrored(): void;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        static addEntityType(arg0: Internal.CompoundTag_, arg1: Internal.BlockEntityType_<any>): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        wait(arg0: number, arg1: number): void;
        onComparatorAdded(arg0: Internal.Direction_, arg1: number): void;
        getLevel(): Internal.Level;
        onlyOpCanSetNbt(): boolean;
        clearRemoved(): void;
        getUpdatePacket(): Internal.Packet<any>;
        serializeNBT(): Internal.Tag;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        saveWithFullMetadata(): Internal.CompoundTag;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        onDataPacket(arg0: Internal.Connection_, arg1: Internal.ClientboundBlockEntityDataPacket_): void;
        getPersistentData(): Internal.CompoundTag;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        toString(): string;
        triggerEvent(arg0: number, arg1: number): boolean;
        hasLevel(): boolean;
        notifyAll(): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        hashCode(): number;
        getModelData(): Internal.ModelData;
        wait(arg0: number): void;
        neruina$setTickingEntryId(uuid: Internal.UUID_): void;
        equals(arg0: any): boolean;
        reviveCaps(): void;
        get updateTag(): Internal.CompoundTag
        set level(arg0: Internal.Level_)
        /**
         * @deprecated
        */
        set blockState(arg0: Internal.BlockState_)
        get blockPos(): BlockPos
        get removed(): boolean
        get color(): Internal.DyeColor
        get blockState(): Internal.BlockState
        get type(): Internal.BlockEntityType<any>
        set color(arg0: Internal.DyeColor_)
        get renderBoundingBox(): Internal.AABB
        get class(): typeof any
        get level(): Internal.Level
        get updatePacket(): Internal.Packet<any>
        get persistentData(): Internal.CompoundTag
        get modelData(): Internal.ModelData
    }
    type BedBlockEntity_ = BedBlockEntity;
    interface IScratchKey {
        abstract hashCode(): number;
        abstract equals(arg0: any): boolean;
    }
    type IScratchKey_ = IScratchKey;
    class WildFlaxBlock extends Internal.BushBlock implements Internal.BonemealableBlock {
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
        performBonemeal(worldIn: Internal.ServerLevel_, random: Internal.RandomSource_, pos: BlockPos_, state: Internal.BlockState_): void;
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
        isBonemealSuccess(worldIn: Internal.Level_, rand: Internal.RandomSource_, pos: BlockPos_, state: Internal.BlockState_): boolean;
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
        getFlammability(state: Internal.BlockState_, world: Internal.BlockGetter_, pos: BlockPos_, face: Internal.Direction_): number;
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
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(state: Internal.BlockState_, useContext: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        isValidBonemealTarget(worldIn: Internal.LevelReader_, pos: BlockPos_, state: Internal.BlockState_, isClient: boolean): boolean;
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
        getFireSpreadSpeed(state: Internal.BlockState_, world: Internal.BlockGetter_, pos: BlockPos_, face: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        canBeReplaced(state: Internal.BlockState_, useContext: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(state: Internal.BlockState_, worldIn: Internal.BlockGetter_, pos: BlockPos_, context: Internal.CollisionContext_): Internal.VoxelShape;
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
    type WildFlaxBlock_ = WildFlaxBlock;
    class ModifiableBiomeInfo {
        constructor(arg0: Internal.ModifiableBiomeInfo$BiomeInfo_)
        getModifiedBiomeInfo(): Internal.ModifiableBiomeInfo$BiomeInfo;
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        applyBiomeModifiers(arg0: Internal.Holder_<Internal.Biome>, arg1: Internal.List_<Internal.BiomeModifier>): void;
        wait(): void;
        get(): Internal.ModifiableBiomeInfo$BiomeInfo;
        getOriginalBiomeInfo(): Internal.ModifiableBiomeInfo$BiomeInfo;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get modifiedBiomeInfo(): Internal.ModifiableBiomeInfo$BiomeInfo
        get class(): typeof any
        get originalBiomeInfo(): Internal.ModifiableBiomeInfo$BiomeInfo
    }
    type ModifiableBiomeInfo_ = ModifiableBiomeInfo;
    class HoverEvent$EntityTooltipInfo {
        constructor(arg0: Internal.EntityType_<any>, arg1: Internal.UUID_, arg2: net.minecraft.network.chat.Component_)
        static create(arg0: Internal.JsonElement_): Internal.HoverEvent$EntityTooltipInfo;
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        serialize(): Internal.JsonElement;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        wait(): void;
        getTooltipLines(): Internal.List<net.minecraft.network.chat.Component>;
        wait(arg0: number): void;
        static "create(net.minecraft.network.chat.Component)"(arg0: net.minecraft.network.chat.Component_): Internal.HoverEvent$EntityTooltipInfo;
        static "create(com.google.gson.JsonElement)"(arg0: Internal.JsonElement_): Internal.HoverEvent$EntityTooltipInfo;
        equals(arg0: any): boolean;
        static create(arg0: net.minecraft.network.chat.Component_): Internal.HoverEvent$EntityTooltipInfo;
        get class(): typeof any
        get tooltipLines(): Internal.List<net.minecraft.network.chat.Component>
        readonly id: Internal.UUID;
        readonly name: net.minecraft.network.chat.Component;
        readonly type: Internal.EntityType<any>;
    }
    type HoverEvent$EntityTooltipInfo_ = HoverEvent$EntityTooltipInfo;
    class ForgeRegistry <V> implements Internal.IForgeRegistryInternal<V>, Internal.IForgeRegistryModifiable<V> {
        "getDelegateOrThrow(java.lang.Object)"(value: any): Internal.Holder$Reference<any>;
        iterator(): Internal.Iterator<V>;
        getValues(): Internal.Collection<V>;
        spliterator(): Internal.Spliterator<V>;
        "getID(java.lang.Object)"(arg0: V): number;
        "getDelegate(net.minecraft.resources.ResourceKey)"(arg0: Internal.ResourceKey_<V>): Internal.Optional<Internal.Holder$Reference<V>>;
        getDelegateOrThrow(value: any): Internal.Holder$Reference<any>;
        notify(): void;
        loadIds(arg0: Internal.Object2IntMap_<ResourceLocation>, arg1: Internal.Map_<ResourceLocation, string>, arg2: Internal.Object2IntMap_<ResourceLocation>, arg3: Internal.Map_<ResourceLocation, Internal.IdMappingEvent$IdRemapping>, arg4: Internal.ForgeRegistry_<V>, arg5: ResourceLocation_): void;
        getDelegateOrThrow(rkey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        "getDelegateOrThrow(net.minecraft.resources.ResourceKey)"(rkey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getDelegateOrThrow(location: ResourceLocation_): Internal.Holder$Reference<any>;
        register(arg0: number, arg1: ResourceLocation_, arg2: V): void;
        getCodec(): Internal.Codec<V>;
        "register(net.minecraft.resources.ResourceLocation,java.lang.Object)"(arg0: ResourceLocation_, arg1: V): void;
        "getHolder(net.minecraft.resources.ResourceLocation)"(arg0: ResourceLocation_): Internal.Optional<Internal.Holder<V>>;
        "getHolder(net.minecraft.resources.ResourceKey)"(arg0: Internal.ResourceKey_<V>): Internal.Optional<Internal.Holder<V>>;
        getRaw(arg0: ResourceLocation_): V;
        "register(java.lang.String,java.lang.Object)"(arg0: string, arg1: V): void;
        "getValue(int)"(arg0: number): V;
        freeze(): void;
        "getDelegateOrThrow(net.minecraft.resources.ResourceLocation)"(location: ResourceLocation_): Internal.Holder$Reference<any>;
        setSlaveMap(arg0: ResourceLocation_, arg1: any): void;
        tags(): Internal.ITagManager<V>;
        getRegistryKey(): Internal.ResourceKey<Internal.Registry<V>>;
        unfreeze(): void;
        bake(): void;
        getValue(arg0: ResourceLocation_): V;
        wait(): void;
        getEntries(): Internal.Set<Internal.Map$Entry<Internal.ResourceKey<V>, V>>;
        getKey(arg0: V): ResourceLocation;
        getKey(arg0: number): Internal.ResourceKey<V>;
        getResourceKey(arg0: V): Internal.Optional<Internal.ResourceKey<V>>;
        getClass(): typeof any;
        addAlias(arg0: ResourceLocation_, arg1: ResourceLocation_): void;
        getHolder(arg0: V): Internal.Optional<Internal.Holder<V>>;
        getHolder(arg0: Internal.ResourceKey_<V>): Internal.Optional<Internal.Holder<V>>;
        getID(arg0: V): number;
        isEmpty(): boolean;
        register(arg0: ResourceLocation_, arg1: V): void;
        getSlaveMap<T>(arg0: ResourceLocation_, arg1: T): T;
        getDelegate(arg0: V): Internal.Optional<Internal.Holder$Reference<V>>;
        wait(arg0: number, arg1: number): void;
        getValue(arg0: number): V;
        containsKey(arg0: ResourceLocation_): boolean;
        forEach(arg0: Internal.Consumer_<V>): void;
        "getValue(net.minecraft.resources.ResourceLocation)"(arg0: ResourceLocation_): V;
        "getDelegate(java.lang.Object)"(arg0: V): Internal.Optional<Internal.Holder$Reference<V>>;
        getHolder(arg0: ResourceLocation_): Internal.Optional<Internal.Holder<V>>;
        getDelegate(arg0: Internal.ResourceKey_<V>): Internal.Optional<Internal.Holder$Reference<V>>;
        "getDelegate(net.minecraft.resources.ResourceLocation)"(arg0: ResourceLocation_): Internal.Optional<Internal.Holder$Reference<V>>;
        "getKey(int)"(arg0: number): Internal.ResourceKey<V>;
        "getID(net.minecraft.resources.ResourceLocation)"(arg0: ResourceLocation_): number;
        getDefaultKey(): ResourceLocation;
        getDelegate(arg0: ResourceLocation_): Internal.Optional<Internal.Holder$Reference<V>>;
        getID(arg0: ResourceLocation_): number;
        toString(): string;
        "getHolder(java.lang.Object)"(arg0: V): Internal.Optional<Internal.Holder<V>>;
        notifyAll(): void;
        remove(arg0: ResourceLocation_): V;
        getKeys(): Internal.Set<ResourceLocation>;
        register(arg0: string, arg1: V): void;
        containsValue(arg0: V): boolean;
        "getKey(java.lang.Object)"(arg0: V): ResourceLocation;
        isLocked(): boolean;
        hashCode(): number;
        getMissingEvent(arg0: ResourceLocation_, arg1: Internal.Object2IntMap_<ResourceLocation>): Internal.MissingMappingsEvent;
        clear(): void;
        getRegistryName(): ResourceLocation;
        wait(arg0: number): void;
        makeSnapshot(): Internal.ForgeRegistry$Snapshot;
        equals(arg0: any): boolean;
        get values(): Internal.Collection<V>
        get codec(): Internal.Codec<V>
        get registryKey(): Internal.ResourceKey<Internal.Registry<V>>
        get entries(): Internal.Set<Internal.Map$Entry<Internal.ResourceKey<V>, V>>
        get class(): typeof any
        get empty(): boolean
        get defaultKey(): ResourceLocation
        get keys(): Internal.Set<ResourceLocation>
        get locked(): boolean
        get registryName(): ResourceLocation
        static readonly REGISTRIES: (Internal.MarkerManager$Log4jMarker) & (org.apache.logging.log4j.Marker);
    }
    type ForgeRegistry_<V> = ForgeRegistry<V>;
    interface TextFilter {
        abstract processMessageBundle(arg0: Internal.List_<string>): Internal.CompletableFuture<Internal.List<Internal.FilteredText>>;
        abstract leave(): void;
        abstract processStreamMessage(arg0: string): Internal.CompletableFuture<Internal.FilteredText>;
        abstract join(): void;
        readonly DUMMY: Internal.TextFilter;
    }
    type TextFilter_ = TextFilter;
    class CampfireCookingRecipe extends Internal.AbstractCookingRecipe {
        constructor(arg0: ResourceLocation_, arg1: string, arg2: Internal.CookingBookCategory_, arg3: Internal.Ingredient_, arg4: Internal.ItemStack_, arg5: number, arg6: number)
        getClass(): typeof any;
        category(): Internal.CookingBookCategory;
        getGroup(): string;
        getToastSymbol(): Internal.ItemStack;
        getSchema(): Internal.RecipeSchema;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getSerializer(): Internal.RecipeSerializer<any>;
        assemble(arg0: net.minecraft.world.Container_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        getId(): ResourceLocation;
        matches(arg0: net.minecraft.world.Container_, arg1: Internal.Level_): boolean;
        getMod(): string;
        getRemainingItems(arg0: net.minecraft.world.Container_): Internal.NonNullList<Internal.ItemStack>;
        getIngredients(): Internal.NonNullList<Internal.Ingredient>;
        getExperience(): number;
        isSpecial(): boolean;
        hasOutput(match: Internal.ReplacementMatch_): boolean;
        getResultItem(arg0: Internal.RegistryAccess_): Internal.ItemStack;
        toString(): string;
        notifyAll(): void;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        showNotification(): boolean;
        replaceInput(match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): boolean;
        getCookingTime(): number;
        getType(): ResourceLocation;
        setGroup(group: string): void;
        hashCode(): number;
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
        get experience(): number
        get special(): boolean
        get cookingTime(): number
        get type(): ResourceLocation
        set group(group: string)
        get orCreateId(): ResourceLocation
        get incomplete(): boolean
    }
    type CampfireCookingRecipe_ = CampfireCookingRecipe;
    class MeshDefinition {
        constructor()
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        getRoot(): Internal.PartDefinition;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        get root(): Internal.PartDefinition
    }
    type MeshDefinition_ = MeshDefinition;
    class SunHints$Key extends Internal.RenderingHints$Key {
        constructor(arg0: number, arg1: string)
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        isCompatibleValue(arg0: any): boolean;
        getIndex(): number;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        get index(): number
    }
    type SunHints$Key_ = SunHints$Key;
    interface TemporalAccessor {
        range(arg0: Internal.TemporalField_): Internal.ValueRange;
        get(arg0: Internal.TemporalField_): number;
        abstract getLong(arg0: Internal.TemporalField_): number;
        query<R>(arg0: Internal.TemporalQuery_<R>): R;
        abstract isSupported(arg0: Internal.TemporalField_): boolean;
    }
    type TemporalAccessor_ = TemporalAccessor;
    interface ToLongBiFunction <T, U> {
        abstract applyAsLong(arg0: T, arg1: U): number;
        (arg0: T, arg1: U): number;
    }
    type ToLongBiFunction_<T, U> = ToLongBiFunction<T, U> | ((arg0: T, arg1: U)=> number);
    interface Functor <F extends Internal.K1, Mu extends Internal.Functor$Mu> extends Internal.Kind1<F, Mu> {
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>, arg3: Internal.App_<F, T4>, arg4: Internal.App_<F, T5>, arg5: Internal.App_<F, T6>, arg6: Internal.App_<F, T7>, arg7: Internal.App_<F, T8>, arg8: Internal.App_<F, T9>, arg9: Internal.App_<F, T10>, arg10: Internal.App_<F, T11>): Internal.Products$P11<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>;
        group<T1, T2, T3, T4, T5, T6>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>, arg3: Internal.App_<F, T4>, arg4: Internal.App_<F, T5>, arg5: Internal.App_<F, T6>): Internal.Products$P6<F, T1, T2, T3, T4, T5, T6>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>, arg3: Internal.App_<F, T4>, arg4: Internal.App_<F, T5>, arg5: Internal.App_<F, T6>, arg6: Internal.App_<F, T7>, arg7: Internal.App_<F, T8>, arg8: Internal.App_<F, T9>, arg9: Internal.App_<F, T10>, arg10: Internal.App_<F, T11>, arg11: Internal.App_<F, T12>, arg12: Internal.App_<F, T13>, arg13: Internal.App_<F, T14>, arg14: Internal.App_<F, T15>): Internal.Products$P15<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15>;
        abstract map<T, R>(arg0: Internal.Function_<T, R>, arg1: Internal.App_<F, T>): Internal.App<F, R>;
        group<T1, T2>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>): Internal.Products$P2<F, T1, T2>;
        group<T1, T2, T3, T4, T5, T6, T7, T8>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>, arg3: Internal.App_<F, T4>, arg4: Internal.App_<F, T5>, arg5: Internal.App_<F, T6>, arg6: Internal.App_<F, T7>, arg7: Internal.App_<F, T8>): Internal.Products$P8<F, T1, T2, T3, T4, T5, T6, T7, T8>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>, arg3: Internal.App_<F, T4>, arg4: Internal.App_<F, T5>, arg5: Internal.App_<F, T6>, arg6: Internal.App_<F, T7>, arg7: Internal.App_<F, T8>, arg8: Internal.App_<F, T9>, arg9: Internal.App_<F, T10>): Internal.Products$P10<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>;
        group<T1, T2, T3, T4, T5, T6, T7>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>, arg3: Internal.App_<F, T4>, arg4: Internal.App_<F, T5>, arg5: Internal.App_<F, T6>, arg6: Internal.App_<F, T7>): Internal.Products$P7<F, T1, T2, T3, T4, T5, T6, T7>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>, arg3: Internal.App_<F, T4>, arg4: Internal.App_<F, T5>, arg5: Internal.App_<F, T6>, arg6: Internal.App_<F, T7>, arg7: Internal.App_<F, T8>, arg8: Internal.App_<F, T9>, arg9: Internal.App_<F, T10>, arg10: Internal.App_<F, T11>, arg11: Internal.App_<F, T12>, arg12: Internal.App_<F, T13>): Internal.Products$P13<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>, arg3: Internal.App_<F, T4>, arg4: Internal.App_<F, T5>, arg5: Internal.App_<F, T6>, arg6: Internal.App_<F, T7>, arg7: Internal.App_<F, T8>, arg8: Internal.App_<F, T9>): Internal.Products$P9<F, T1, T2, T3, T4, T5, T6, T7, T8, T9>;
        group<T1, T2, T3, T4>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>, arg3: Internal.App_<F, T4>): Internal.Products$P4<F, T1, T2, T3, T4>;
        group<T1, T2, T3, T4, T5>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>, arg3: Internal.App_<F, T4>, arg4: Internal.App_<F, T5>): Internal.Products$P5<F, T1, T2, T3, T4, T5>;
        group<T1>(arg0: Internal.App_<F, T1>): Internal.Products$P1<F, T1>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>, arg3: Internal.App_<F, T4>, arg4: Internal.App_<F, T5>, arg5: Internal.App_<F, T6>, arg6: Internal.App_<F, T7>, arg7: Internal.App_<F, T8>, arg8: Internal.App_<F, T9>, arg9: Internal.App_<F, T10>, arg10: Internal.App_<F, T11>, arg11: Internal.App_<F, T12>, arg12: Internal.App_<F, T13>, arg13: Internal.App_<F, T14>): Internal.Products$P14<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>, arg3: Internal.App_<F, T4>, arg4: Internal.App_<F, T5>, arg5: Internal.App_<F, T6>, arg6: Internal.App_<F, T7>, arg7: Internal.App_<F, T8>, arg8: Internal.App_<F, T9>, arg9: Internal.App_<F, T10>, arg10: Internal.App_<F, T11>, arg11: Internal.App_<F, T12>): Internal.Products$P12<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>;
        unbox<F extends Internal.K1, Mu extends Internal.Functor$Mu>(arg0: Internal.App_<Mu, F>): this;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>, arg3: Internal.App_<F, T4>, arg4: Internal.App_<F, T5>, arg5: Internal.App_<F, T6>, arg6: Internal.App_<F, T7>, arg7: Internal.App_<F, T8>, arg8: Internal.App_<F, T9>, arg9: Internal.App_<F, T10>, arg10: Internal.App_<F, T11>, arg11: Internal.App_<F, T12>, arg12: Internal.App_<F, T13>, arg13: Internal.App_<F, T14>, arg14: Internal.App_<F, T15>, arg15: Internal.App_<F, T16>): Internal.Products$P16<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16>;
        group<T1, T2, T3>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>): Internal.Products$P3<F, T1, T2, T3>;
        (arg0: Internal.Function<T, R>, arg1: Internal.App<F, T>): Internal.App_<F, R>;
    }
    type Functor_<F extends Internal.K1, Mu extends Internal.Functor$Mu> = ((arg0: Internal.Function<T, R>, arg1: Internal.App<F, T>)=> Internal.App_<F, R>) | Functor<F, Mu>;
    class BlockPosTracker implements Internal.PositionTracker {
        constructor(arg0: BlockPos_)
        constructor(arg0: Vec3d_)
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        isVisibleBy(arg0: Internal.LivingEntity_): boolean;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        currentPosition(): Vec3d;
        currentBlockPosition(): BlockPos;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
    }
    type BlockPosTracker_ = BlockPosTracker;
    interface ArtifactFilter {
        abstract include(arg0: Internal.Artifact_): boolean;
        (arg0: Internal.Artifact): boolean;
    }
    type ArtifactFilter_ = ArtifactFilter | ((arg0: Internal.Artifact)=> boolean);
    class DoubleBlockCombiner$BlockType extends Internal.Enum<Internal.DoubleBlockCombiner$BlockType> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        static values(): Internal.DoubleBlockCombiner$BlockType[];
        toString(): string;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.DoubleBlockCombiner$BlockType>>;
        name(): string;
        hashCode(): number;
        ordinal(): number;
        wait(): void;
        getDeclaringClass(): typeof Internal.DoubleBlockCombiner$BlockType;
        wait(arg0: number): void;
        static valueOf(arg0: string): Internal.DoubleBlockCombiner$BlockType;
        "compareTo(net.minecraft.world.level.block.DoubleBlockCombiner$BlockType)"(arg0: Internal.DoubleBlockCombiner$BlockType_): number;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        compareTo(arg0: Internal.DoubleBlockCombiner$BlockType_): number;
        get class(): typeof any
        get declaringClass(): typeof Internal.DoubleBlockCombiner$BlockType
        static readonly SINGLE: (Internal.DoubleBlockCombiner$BlockType) & (Internal.DoubleBlockCombiner$BlockType);
        static readonly FIRST: (Internal.DoubleBlockCombiner$BlockType) & (Internal.DoubleBlockCombiner$BlockType);
        static readonly SECOND: (Internal.DoubleBlockCombiner$BlockType) & (Internal.DoubleBlockCombiner$BlockType);
    }
    type DoubleBlockCombiner$BlockType_ = DoubleBlockCombiner$BlockType | "single" | "second" | "first";
    class ItemContingencyCharm$ContingencyEvent extends Internal.Enum<Internal.ItemContingencyCharm$ContingencyEvent> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        static values(): Internal.ItemContingencyCharm$ContingencyEvent[];
        "compareTo(com.mna.items.artifice.charms.ItemContingencyCharm$ContingencyEvent)"(arg0: Internal.ItemContingencyCharm$ContingencyEvent_): number;
        toString(): string;
        getDeclaringClass(): typeof Internal.ItemContingencyCharm$ContingencyEvent;
        static valueOf(arg0: string): Internal.ItemContingencyCharm$ContingencyEvent;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.ItemContingencyCharm$ContingencyEvent>>;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        name(): string;
        hashCode(): number;
        compareTo(arg0: Internal.ItemContingencyCharm$ContingencyEvent_): number;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get declaringClass(): typeof Internal.ItemContingencyCharm$ContingencyEvent
        static readonly DEATH: (Internal.ItemContingencyCharm$ContingencyEvent) & (Internal.ItemContingencyCharm$ContingencyEvent);
        static readonly FACTION_RAID: (Internal.ItemContingencyCharm$ContingencyEvent) & (Internal.ItemContingencyCharm$ContingencyEvent);
        static readonly LOW_CASTING_RESOURCE: (Internal.ItemContingencyCharm$ContingencyEvent) & (Internal.ItemContingencyCharm$ContingencyEvent);
        static readonly LOW_HEALTH: (Internal.ItemContingencyCharm$ContingencyEvent) & (Internal.ItemContingencyCharm$ContingencyEvent);
        static readonly DAMAGE: (Internal.ItemContingencyCharm$ContingencyEvent) & (Internal.ItemContingencyCharm$ContingencyEvent);
        static readonly SUFFOCATION: (Internal.ItemContingencyCharm$ContingencyEvent) & (Internal.ItemContingencyCharm$ContingencyEvent);
        static readonly FALL: (Internal.ItemContingencyCharm$ContingencyEvent) & (Internal.ItemContingencyCharm$ContingencyEvent);
    }
    type ItemContingencyCharm$ContingencyEvent_ = "faction_raid" | ItemContingencyCharm$ContingencyEvent | "suffocation" | "death" | "fall" | "damage" | "low_casting_resource" | "low_health";
    class ClientboundLightUpdatePacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.ChunkPos_, arg1: Internal.LevelLightEngine_, arg2: Internal.BitSet_, arg3: Internal.BitSet_)
        constructor(arg0: Internal.FriendlyByteBuf_)
        handle(arg0: Internal.PacketListener_): void;
        getClass(): typeof any;
        write(arg0: Internal.FriendlyByteBuf_): void;
        getX(): number;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        getLightData(): Internal.ClientboundLightUpdatePacketData;
        isSkippable(): boolean;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        wait(): void;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        wait(arg0: number): void;
        "handle(net.minecraft.network.protocol.game.ClientGamePacketListener)"(arg0: Internal.ClientGamePacketListener_): void;
        getZ(): number;
        equals(arg0: any): boolean;
        "handle(net.minecraft.network.PacketListener)"(arg0: Internal.PacketListener_): void;
        get class(): typeof any
        get x(): number
        get lightData(): Internal.ClientboundLightUpdatePacketData
        get skippable(): boolean
        get z(): number
    }
    type ClientboundLightUpdatePacket_ = ClientboundLightUpdatePacket;
    abstract class AbstractObject2IntMap <K> extends Internal.AbstractObject2IntFunction<K> implements Internal.Object2IntMap<K>, Internal.Serializable {
        composeObject<T>(arg0: Internal.Object2ObjectFunction_<T, K>): Internal.Object2IntFunction<T>;
        /**
         * @deprecated
        */
        mergeInt(arg0: K, arg1: number, arg2: Internal.BiFunction_<number, number, number>): number;
        /**
         * @deprecated
        */
        containsValue(arg0: any): boolean;
        /**
         * @deprecated
        */
        "remove(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): boolean;
        /**
         * @deprecated
        */
        "merge(java.lang.Object,java.lang.Object,java.util.function.BiFunction)"(arg0: any, arg1: any, arg2: Internal.BiFunction_<any, any, any>): any;
        composeChar(arg0: Internal.Char2ObjectFunction_<K>): Internal.Char2IntFunction;
        apply(arg0: K): number;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): Internal.Map<K, V>;
        /**
         * @deprecated
        */
        "mergeInt(java.lang.Object,int,java.util.function.BiFunction)"(arg0: K, arg1: number, arg2: Internal.BiFunction_<number, number, number>): number;
        /**
         * @deprecated
        */
        "replace(java.lang.Object,java.lang.Object,java.lang.Object)"(arg0: any, arg1: any, arg2: any): boolean;
        /**
         * @deprecated
        */
        putIfAbsent(arg0: K, arg1: number): number;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        /**
         * @deprecated
        */
        computeIntIfAbsentPartial(arg0: K, arg1: Internal.Object2IntFunction_<K>): number;
        values(): Internal.Collection<any>;
        replace(arg0: K, arg1: number, arg2: number): boolean;
        andThenInt(arg0: Internal.Int2IntFunction_): Internal.Object2IntFunction<K>;
        computeIfAbsent(arg0: K, arg1: Internal.Object2IntFunction_<K>): number;
        composeInt(arg0: Internal.Int2ObjectFunction_<K>): Internal.Int2IntFunction;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: number): number;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): Internal.Map<K, V>;
        replaceAll(arg0: Internal.BiFunction_<K, number, number>): void;
        replace(arg0: K, arg1: number): number;
        applyAsInt(arg0: K): number;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Integer)"(arg0: any, arg1: number): number;
        static ofEntries<K, V>(...arg0: Internal.Map$Entry_<K, V>[]): Internal.Map<K, V>;
        andThenByte(arg0: Internal.Int2ByteFunction_): Internal.Object2ByteFunction<K>;
        compute(arg0: K, arg1: Internal.BiFunction_<K, number, number>): number;
        /**
         * @deprecated
        */
        remove(arg0: any): any;
        getOrDefault(arg0: any, arg1: number): number;
        "remove(java.lang.Object,int)"(arg0: any, arg1: number): boolean;
        /**
         * @deprecated
        */
        putIfAbsent(arg0: any, arg1: any): any;
        static of<K, V>(arg0: K, arg1: V): Internal.Map<K, V>;
        put(arg0: K, arg1: number): number;
        getClass(): typeof any;
        andThenFloat(arg0: Internal.Int2FloatFunction_): Internal.Object2FloatFunction<K>;
        composeReference<T>(arg0: Internal.Reference2ObjectFunction_<T, K>): Internal.Reference2IntFunction<T>;
        static of<K, V>(): Internal.Map<K, V>;
        /**
         * @deprecated
        */
        "putIfAbsent(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        /**
         * @deprecated
        */
        replace(arg0: K, arg1: number): number;
        /**
         * @deprecated
        */
        "replace(java.lang.Object,java.lang.Integer,java.lang.Integer)"(arg0: K, arg1: number, arg2: number): boolean;
        /**
         * @deprecated
        */
        "replace(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        /**
         * @deprecated
        */
        "merge(java.lang.Object,java.lang.Integer,java.util.function.BiFunction)"(arg0: K, arg1: number, arg2: Internal.BiFunction_<number, number, number>): number;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        computeIfAbsent(arg0: K, arg1: Internal.ToIntFunction_<K>): number;
        /**
         * @deprecated
        */
        replace(arg0: K, arg1: number, arg2: number): boolean;
        "put(java.lang.Object,int)"(arg0: K, arg1: number): number;
        /**
         * @deprecated
        */
        "put(java.lang.Object,java.lang.Integer)"(arg0: K, arg1: number): number;
        toString(): string;
        /**
         * @deprecated
        */
        put(arg0: K, arg1: number): number;
        "merge(java.lang.Object,int,java.util.function.BiFunction)"(arg0: K, arg1: number, arg2: Internal.BiFunction_<number, number, number>): number;
        notifyAll(): void;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): Internal.Map<K, V>;
        /**
         * @deprecated
        */
        remove(arg0: any, arg1: any): boolean;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): Internal.Map<K, V>;
        putAll(arg0: Internal.Map_<K, number>): void;
        abstract size(): number;
        abstract object2IntEntrySet(): Internal.ObjectSet<Internal.Object2IntMap$Entry<K>>;
        composeFloat(arg0: Internal.Float2ObjectFunction_<K>): Internal.Float2IntFunction;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): Internal.Map<K, V>;
        clear(): void;
        compose<V>(arg0: Internal.Function_<V, K>): Internal.Function<V, number>;
        wait(arg0: number): void;
        andThenChar(arg0: Internal.Int2CharFunction_): Internal.Object2CharFunction<K>;
        computeIfPresent(arg0: K, arg1: Internal.BiFunction_<K, number, number>): number;
        composeShort(arg0: Internal.Short2ObjectFunction_<K>): Internal.Short2IntFunction;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): Internal.Map<K, V>;
        forEach(arg0: Internal.BiConsumer_<K, number>): void;
        "computeIfAbsent(java.lang.Object,it.unimi.dsi.fastutil.objects.Object2IntFunction)"(arg0: K, arg1: Internal.Object2IntFunction_<K>): number;
        "mergeInt(java.lang.Object,int,java.util.function.IntBinaryOperator)"(arg0: K, arg1: number, arg2: Internal.IntBinaryOperator_): number;
        abstract defaultReturnValue(): number;
        removeInt(arg0: any): number;
        "putIfAbsent(java.lang.Object,int)"(arg0: K, arg1: number): number;
        andThenObject<T>(arg0: Internal.Int2ObjectFunction_<T>): Internal.Object2ObjectFunction<K, T>;
        notify(): void;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<number, T>): Internal.Function<K, T>;
        /**
         * @deprecated
        */
        "put(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        "computeIfAbsent(java.lang.Object,java.util.function.ToIntFunction)"(arg0: K, arg1: Internal.ToIntFunction_<K>): number;
        keySet(): Internal.Set<any>;
        composeLong(arg0: Internal.Long2ObjectFunction_<K>): Internal.Long2IntFunction;
        abstract getInt(arg0: any): number;
        /**
         * @deprecated
        */
        replace(arg0: any, arg1: any, arg2: any): boolean;
        static copyOf<K, V>(arg0: Internal.Map_<K, V>): Internal.Map<K, V>;
        "mergeInt(java.lang.Object,int,it.unimi.dsi.fastutil.ints.IntBinaryOperator)"(arg0: K, arg1: number, arg2: it.unimi.dsi.fastutil.ints.IntBinaryOperator_): number;
        "containsValue(int)"(arg0: number): boolean;
        andThenDouble(arg0: Internal.Int2DoubleFunction_): Internal.Object2DoubleFunction<K>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): Internal.Map<K, V>;
        wait(): void;
        static identity<T>(): Internal.Function<T, T>;
        /**
         * @deprecated
        */
        computeIntIfAbsent(arg0: K, arg1: Internal.ToIntFunction_<K>): number;
        andThenLong(arg0: Internal.Int2LongFunction_): Internal.Object2LongFunction<K>;
        /**
         * @deprecated
        */
        get(arg0: any): number;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        "getOrDefault(java.lang.Object,int)"(arg0: any, arg1: number): number;
        isEmpty(): boolean;
        mergeInt(arg0: K, arg1: number, arg2: Internal.IntBinaryOperator_): number;
        "replace(java.lang.Object,int)"(arg0: K, arg1: number): number;
        static entry<K, V>(arg0: K, arg1: V): Internal.Map$Entry<K, V>;
        wait(arg0: number, arg1: number): void;
        merge(arg0: K, arg1: number, arg2: Internal.BiFunction_<number, number, number>): number;
        /**
         * @deprecated
        */
        merge(arg0: K, arg1: number, arg2: Internal.BiFunction_<number, number, number>): number;
        andThenShort(arg0: Internal.Int2ShortFunction_): Internal.Object2ShortFunction<K>;
        containsKey(arg0: any): boolean;
        /**
         * @deprecated
        */
        "putIfAbsent(java.lang.Object,java.lang.Integer)"(arg0: K, arg1: number): number;
        /**
         * @deprecated
        */
        entrySet(): Internal.ObjectSet<Internal.Map$Entry<K, number>>;
        containsValue(arg0: number): boolean;
        "replace(java.lang.Object,int,int)"(arg0: K, arg1: number, arg2: number): boolean;
        computeInt(arg0: K, arg1: Internal.BiFunction_<K, number, number>): number;
        remove(arg0: any, arg1: number): boolean;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): Internal.Map<K, V>;
        /**
         * @deprecated
        */
        "replace(java.lang.Object,java.lang.Integer)"(arg0: K, arg1: number): number;
        computeIntIfPresent(arg0: K, arg1: Internal.BiFunction_<K, number, number>): number;
        composeByte(arg0: Internal.Byte2ObjectFunction_<K>): Internal.Byte2IntFunction;
        composeDouble(arg0: Internal.Double2ObjectFunction_<K>): Internal.Double2IntFunction;
        mergeInt(arg0: K, arg1: number, arg2: it.unimi.dsi.fastutil.ints.IntBinaryOperator_): number;
        hashCode(): number;
        putIfAbsent(arg0: K, arg1: number): number;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): Internal.Map<K, V>;
        abstract defaultReturnValue(arg0: number): void;
        andThenReference<T>(arg0: Internal.Int2ReferenceFunction_<T>): Internal.Object2ReferenceFunction<K, T>;
        "computeIfAbsent(java.lang.Object,java.util.function.Function)"(arg0: K, arg1: Internal.Function_<K, number>): number;
        /**
         * @deprecated
        */
        replace(arg0: any, arg1: any): any;
        /**
         * @deprecated
        */
        "containsValue(java.lang.Object)"(arg0: any): boolean;
        /**
         * @deprecated
        */
        merge(arg0: any, arg1: any, arg2: Internal.BiFunction_<any, any, any>): any;
        equals(arg0: any): boolean;
        computeIfAbsent(arg0: K, arg1: Internal.Function_<K, number>): number;
        get class(): typeof any
        get empty(): boolean
    }
    type AbstractObject2IntMap_<K> = AbstractObject2IntMap<K>;
    class WorldDataConfiguration extends Internal.Record {
        constructor(arg0: Internal.DataPackConfig_, arg1: Internal.FeatureFlagSet_)
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        enabledFeatures(): Internal.FeatureFlagSet;
        wait(): void;
        expandFeatures(arg0: Internal.FeatureFlagSet_): this;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        dataPacks(): Internal.DataPackConfig;
        get class(): typeof any
        static readonly ENABLED_FEATURES_ID: ("enabled_features") & (string);
        static readonly CODEC: Internal.Codec<Internal.WorldDataConfiguration>;
        static readonly DEFAULT: (Internal.WorldDataConfiguration) & (Internal.WorldDataConfiguration);
    }
    type WorldDataConfiguration_ = WorldDataConfiguration;
    interface ShortComparator extends Internal.Comparator<number> {
        abstract compare(arg0: number, arg1: number): number;
        thenComparingInt(arg0: Internal.ToIntFunction_<number>): Internal.Comparator<number>;
        thenComparing(arg0: Internal.ShortComparator_): this;
        "thenComparing(it.unimi.dsi.fastutil.shorts.ShortComparator)"(arg0: Internal.ShortComparator_): this;
        naturalOrder<T extends Internal.Comparable<any>>(): Internal.Comparator<T>;
        thenComparing<U extends Internal.Comparable<any>>(arg0: Internal.Function_<number, U>): Internal.Comparator<number>;
        comparingInt<T>(arg0: Internal.ToIntFunction_<T>): Internal.Comparator<T>;
        nullsLast<T>(arg0: Internal.Comparator_<T>): Internal.Comparator<T>;
        /**
         * @deprecated
        */
        compare(arg0: any, arg1: any): number;
        thenComparing(arg0: Internal.Comparator_<number>): Internal.Comparator<number>;
        reversed(): this;
        "thenComparing(java.util.function.Function)"<U extends Internal.Comparable<any>>(arg0: Internal.Function_<number, U>): Internal.Comparator<number>;
        comparing<T, U extends Internal.Comparable<any>>(arg0: Internal.Function_<T, U>): Internal.Comparator<T>;
        reverseOrder<T extends Internal.Comparable<any>>(): Internal.Comparator<T>;
        /**
         * @deprecated
        */
        "compare(java.lang.Short,java.lang.Short)"(arg0: number, arg1: number): number;
        thenComparing<U>(arg0: Internal.Function_<number, U>, arg1: Internal.Comparator_<U>): Internal.Comparator<number>;
        thenComparingDouble(arg0: Internal.ToDoubleFunction_<number>): Internal.Comparator<number>;
        "thenComparing(java.util.Comparator)"(arg0: Internal.Comparator_<number>): Internal.Comparator<number>;
        thenComparingLong(arg0: Internal.ToLongFunction_<number>): Internal.Comparator<number>;
        /**
         * @deprecated
        */
        "compare(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): number;
        nullsFirst<T>(arg0: Internal.Comparator_<T>): Internal.Comparator<T>;
        comparingLong<T>(arg0: Internal.ToLongFunction_<T>): Internal.Comparator<T>;
        comparingDouble<T>(arg0: Internal.ToDoubleFunction_<T>): Internal.Comparator<T>;
        abstract "compare(short,short)"(arg0: number, arg1: number): number;
        /**
         * @deprecated
        */
        compare(arg0: number, arg1: number): number;
        abstract equals(arg0: any): boolean;
        comparing<T, U>(arg0: Internal.Function_<T, U>, arg1: Internal.Comparator_<U>): Internal.Comparator<T>;
    }
    type ShortComparator_ = ShortComparator;
    class SmokerBlock extends Internal.AbstractFurnaceBlock {
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
    type SmokerBlock_ = SmokerBlock;
    class MapAtlasTexture implements Internal.AutoCloseable {
        constructor(id: number)
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        getNextMapLocation(): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        wait(): void;
        close(): void;
        wait(arg0: number): void;
        getIdentifier(): ResourceLocation;
        equals(arg0: any): boolean;
        getId(): number;
        getTexture(): Internal.DynamicTexture;
        handler$boh000$forceMipMapOff(id: number, ci: Internal.CallbackInfo_): void;
        get class(): typeof any
        get nextMapLocation(): number
        get identifier(): ResourceLocation
        get id(): number
        get texture(): Internal.DynamicTexture
        static readonly MAPS_PER_ATLAS: (1024) & (number);
        static readonly ATLAS_SIZE: (4096) & (number);
        static readonly MAP_SIZE: (128) & (number);
    }
    type MapAtlasTexture_ = MapAtlasTexture;
    class NumberComponent$DoubleRange extends Internal.Record implements Internal.NumberComponent<number> {
        constructor(min: number, max: number)
        writeToJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<number>, json: Internal.JsonObject_): void;
        notify(): void;
        /**
         * Returns a new RecipeComponent that applies the mappingFrom function after the component writes to json, before that json is saved
        */
        mapOut(mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): Internal.MappingRecipeComponent<number>;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read, and the mappingFrom function after the component writes to json, before that json is saved
        */
        map(mappingTo: Internal.UnaryOperator_<any>, mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): Internal.MappingRecipeComponent<number>;
        hasPriority(recipe: Internal.RecipeJS_, from: any): boolean;
        checkValueHasChanged(oldValue: number, newValue: number): boolean;
        orSelf(): Internal.RecipeComponent<number>;
        read(arg0: Internal.RecipeJS_, arg1: any): any;
        checkEmpty(key: Internal.RecipeKey_<number>, value: number): string;
        static intRange(min: number, max: number): Internal.NumberComponent$IntRange;
        asArray(): Internal.ArrayRecipeComponent<number>;
        wait(): void;
        "write(dev.latvian.mods.kubejs.recipe.RecipeJS,java.lang.Double)"(recipe: Internal.RecipeJS_, value: number): Internal.JsonPrimitive;
        "write(dev.latvian.mods.kubejs.recipe.RecipeJS,java.lang.Object)"(arg0: Internal.RecipeJS_, arg1: any): Internal.JsonElement;
        and<O>(other: Internal.RecipeComponent_<O>): Internal.AndRecipeComponent<number, O>;
        getClass(): typeof any;
        static floatRange(min: number, max: number): Internal.NumberComponent$FloatRange;
        readFromMap(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<number>, map: Internal.Map_<any, any>): void;
        isOutput(recipe: Internal.RecipeJS_, value: number, match: Internal.ReplacementMatch_): boolean;
        write(arg0: Internal.RecipeJS_, arg1: any): Internal.JsonElement;
        replaceInput(recipe: Internal.RecipeJS_, original: number, match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): number;
        role(): Internal.ComponentRole;
        asArrayOrSelf(): Internal.ArrayRecipeComponent<number>;
        componentClass(): typeof any;
        wait(arg0: number, arg1: number): void;
        max(max: number): this;
        static doubleRange(min: number, max: number): Internal.NumberComponent$DoubleRange;
        /**
         * Returns a new RecipeComponent that maps the keys in a JsonObject according to the provided map, both before the json gets passed to the component and after the component returns a written json object.
         * The mappings should be provided in the format `{recipe: "component"}` where recipe is the key as in the recipe, and component is the key as how the RecipeComponent expects it.
         * Any keys not included in the provided map will be ignored, and any keys in the provided map that are not in either the input object or output object will be ignored.
         * Note that if the input or output is not a JsonObject (ie its an ItemStack, or it is a JsonPrimitive) then that will pass through this without being modified.
         * If you wish to handle those situations use the actual map function
        */
        simpleMap(mappings: any): Internal.SimpleMappingRecipeComponent<number>;
        static longRange(min: number, max: number): Internal.NumberComponent$LongRange;
        asPatternKey(): Internal.RecipeComponent<Internal.TinyMap<string, number>>;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read
        */
        mapIn(mappingTo: Internal.UnaryOperator_<any>): Internal.MappingRecipeComponent<number>;
        constructorDescription(ctx: Internal.DescriptionContext_): Internal.TypeDescJS;
        componentType(): string;
        static builder(): Internal.RecipeComponentBuilder;
        write(recipe: Internal.RecipeJS_, value: number): Internal.JsonPrimitive;
        or<O>(other: Internal.RecipeComponent_<O>): Internal.OrRecipeComponent<number, O>;
        toString(): string;
        readFromJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<number>, json: Internal.JsonObject_): void;
        notifyAll(): void;
        min(): number;
        static builder(...key: Internal.RecipeKey_<any>[]): Internal.RecipeComponentBuilder;
        asMap<K>(key: Internal.RecipeComponent_<K>): Internal.RecipeComponent<Internal.TinyMap<K, number>>;
        isInput(recipe: Internal.RecipeJS_, value: number, match: Internal.ReplacementMatch_): boolean;
        key(name: string): Internal.RecipeKey<number>;
        hashCode(): number;
        max(): number;
        replaceOutput(recipe: Internal.RecipeJS_, original: number, match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): number;
        wait(arg0: number): void;
        equals(o: any): boolean;
        min(min: number): this;
        get class(): typeof any
    }
    type NumberComponent$DoubleRange_ = NumberComponent$DoubleRange;
    class ClientboundSystemChatPacket extends Internal.Record implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: net.minecraft.network.chat.Component_, arg1: boolean)
        handle(arg0: Internal.PacketListener_): void;
        getClass(): typeof any;
        write(arg0: Internal.FriendlyByteBuf_): void;
        toString(): string;
        overlay(): boolean;
        notifyAll(): void;
        notify(): void;
        isSkippable(): boolean;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        content(): net.minecraft.network.chat.Component;
        wait(): void;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        wait(arg0: number): void;
        "handle(net.minecraft.network.protocol.game.ClientGamePacketListener)"(arg0: Internal.ClientGamePacketListener_): void;
        equals(arg0: any): boolean;
        "handle(net.minecraft.network.PacketListener)"(arg0: Internal.PacketListener_): void;
        get class(): typeof any
        get skippable(): boolean
    }
    type ClientboundSystemChatPacket_ = ClientboundSystemChatPacket;
    abstract class AMRecipeBase extends Internal.CustomRecipe implements Internal.IMARecipe {
        constructor(arg0: ResourceLocation_)
        getClass(): typeof any;
        getGroup(): string;
        getToastSymbol(): Internal.ItemStack;
        abstract matches(arg0: Internal.CraftingContainer_, arg1: Internal.Level_): boolean;
        getSchema(): Internal.RecipeSchema;
        getFactionRequirement(): Internal.IFaction;
        notify(): void;
        getRemainingItems(arg0: Internal.CraftingContainer_): Internal.NonNullList<Internal.ItemStack>;
        wait(arg0: number, arg1: number): void;
        abstract assemble(arg0: Internal.CraftingContainer_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        category(): Internal.CraftingBookCategory;
        abstract getSerializer(): Internal.RecipeSerializer<any>;
        getId(): ResourceLocation;
        getByproducts(): Internal.ImmutableList<Internal.RecipeByproduct>;
        abstract getResultItem(): Internal.ItemStack;
        getMod(): string;
        getIngredients(): Internal.NonNullList<Internal.Ingredient>;
        setRequiredFaction(arg0: ResourceLocation_): void;
        isSpecial(): boolean;
        hasOutput(match: Internal.ReplacementMatch_): boolean;
        getResultItem(arg0: Internal.RegistryAccess_): Internal.ItemStack;
        toString(): string;
        getTier(): number;
        notifyAll(): void;
        parseJSON(arg0: Internal.JsonObject_): void;
        rollByproducts(arg0: Internal.RandomSource_): Internal.ArrayList<Internal.ItemStack>;
        abstract canCraftInDimensions(arg0: number, arg1: number): boolean;
        showNotification(): boolean;
        replaceInput(match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): boolean;
        getType(): ResourceLocation;
        setGroup(group: string): void;
        hashCode(): number;
        getOrCreateId(): ResourceLocation;
        hasInput(match: Internal.ReplacementMatch_): boolean;
        wait(): void;
        isIncomplete(): boolean;
        wait(arg0: number): void;
        abstract getRegistryId(): ResourceLocation;
        replaceOutput(match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): boolean;
        abstract getGuiRepresentationStack(): Internal.ItemStack;
        equals(arg0: any): boolean;
        get class(): typeof any
        get group(): string
        get toastSymbol(): Internal.ItemStack
        get schema(): Internal.RecipeSchema
        get factionRequirement(): Internal.IFaction
        get serializer(): Internal.RecipeSerializer<any>
        get id(): ResourceLocation
        get byproducts(): Internal.ImmutableList<Internal.RecipeByproduct>
        get resultItem(): Internal.ItemStack
        get mod(): string
        get ingredients(): Internal.NonNullList<Internal.Ingredient>
        set requiredFaction(arg0: ResourceLocation_)
        get special(): boolean
        get tier(): number
        get type(): ResourceLocation
        set group(group: string)
        get orCreateId(): ResourceLocation
        get incomplete(): boolean
        get registryId(): ResourceLocation
        get guiRepresentationStack(): Internal.ItemStack
    }
    type AMRecipeBase_ = AMRecipeBase;
    interface MeshDrawTarget {
        abstract makeIndexSpace(arg0: Internal.Mesh_): number;
        abstract makeVertexWriter(arg0: Internal.Mesh_): Internal.ByteBuffer;
        abstract makeInstanceSpace(arg0: Internal.Mesh_): number;
        abstract makeIndexWriter(arg0: Internal.Mesh_): Internal.ByteBuffer;
        abstract makeVertexSpace(arg0: Internal.Mesh_): number;
        abstract makeInstanceWriter(arg0: Internal.Mesh_): Internal.ByteBuffer;
    }
    type MeshDrawTarget_ = MeshDrawTarget;
    class NoteBlockEvent$Note extends Internal.Enum<Internal.NoteBlockEvent$Note> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        "compareTo(net.minecraftforge.event.level.NoteBlockEvent$Note)"(arg0: Internal.NoteBlockEvent$Note_): number;
        toString(): string;
        notifyAll(): void;
        static valueOf(arg0: string): Internal.NoteBlockEvent$Note;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        name(): string;
        hashCode(): number;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.NoteBlockEvent$Note>>;
        static values(): Internal.NoteBlockEvent$Note[];
        ordinal(): number;
        wait(): void;
        getDeclaringClass(): typeof Internal.NoteBlockEvent$Note;
        wait(arg0: number): void;
        compareTo(arg0: Internal.NoteBlockEvent$Note_): number;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get declaringClass(): typeof Internal.NoteBlockEvent$Note
        static readonly G: (Internal.NoteBlockEvent$Note) & (Internal.NoteBlockEvent$Note);
        static readonly F_SHARP: (Internal.NoteBlockEvent$Note) & (Internal.NoteBlockEvent$Note);
        static readonly D_SHARP: (Internal.NoteBlockEvent$Note) & (Internal.NoteBlockEvent$Note);
        static readonly A_SHARP: (Internal.NoteBlockEvent$Note) & (Internal.NoteBlockEvent$Note);
        static readonly B: (Internal.NoteBlockEvent$Note) & (Internal.NoteBlockEvent$Note);
        static readonly A: (Internal.NoteBlockEvent$Note) & (Internal.NoteBlockEvent$Note);
        static readonly C_SHARP: (Internal.NoteBlockEvent$Note) & (Internal.NoteBlockEvent$Note);
        static readonly D: (Internal.NoteBlockEvent$Note) & (Internal.NoteBlockEvent$Note);
        static readonly G_SHARP: (Internal.NoteBlockEvent$Note) & (Internal.NoteBlockEvent$Note);
        static readonly C: (Internal.NoteBlockEvent$Note) & (Internal.NoteBlockEvent$Note);
        static readonly F: (Internal.NoteBlockEvent$Note) & (Internal.NoteBlockEvent$Note);
        static readonly E: (Internal.NoteBlockEvent$Note) & (Internal.NoteBlockEvent$Note);
    }
    type NoteBlockEvent$Note_ = "d" | "c" | "b" | "a" | "a_sharp" | "c_sharp" | NoteBlockEvent$Note | "f_sharp" | "d_sharp" | "g_sharp" | "g" | "f" | "e";
    interface MouseWheelListener extends Internal.EventListener {
        abstract mouseWheelMoved(arg0: Internal.MouseWheelEvent_): void;
        (arg0: Internal.MouseWheelEvent): void;
    }
    type MouseWheelListener_ = ((arg0: Internal.MouseWheelEvent)=> void) | MouseWheelListener;
    class EnhancedDispatchCodec <K, V> extends Internal.NamedMapCodec<V> {
        static either<F, S>(first: Internal.NamedCodec_<F>, second: Internal.NamedCodec_<S>): Internal.NamedCodec<Internal.Either<F, S>>;
        static of<A>(codec: Internal.Codec_<A>): Internal.NamedCodec<A>;
        static unit<A>(defaultValue: A): Internal.NamedCodec<A>;
        static "unit(java.lang.Object,java.lang.String)"<A>(defaultValue: A, name: string): Internal.NamedCodec<A>;
        static validateDoubleStreamSize(stream: Internal.DoubleStream_, size: number): Internal.DataResult<number[]>;
        static "enumMap(java.lang.Class,fr.frinn.custommachinery.api.codec.NamedCodec,java.lang.String)"<K extends Internal.Enum<K>, V>(keyEnumClass: K, valueCodec: Internal.NamedCodec_<V>, name: string): Internal.NamedMapCodec<Internal.Map<K, V>>;
        static of<A>(codec: Internal.Codec_<A>, name: string): Internal.NamedCodec<A>;
        decoder(): com.mojang.serialization.Decoder<V>;
        compressedBuilder<T>(arg0: Internal.DynamicOps_<T>): Internal.RecordBuilder<T>;
        static longRange(minInclusive: number, maxInclusive: number): Internal.NamedCodec<number>;
        "orElse(java.util.function.UnaryOperator,java.lang.Object)"(onError: Internal.UnaryOperator_<string>, value: V): Internal.NamedMapCodec<V>;
        dispatch<E>(type: Internal.Function_<E, V>, valueCodecGetter: Internal.Function_<V, Internal.NamedCodec<E>>, name: string): Internal.NamedMapCodec<E>;
        mapCodec(): Internal.MapCodec<V>;
        orElse(value: V): Internal.NamedMapCodec<V>;
        xmap<S>(to: Internal.Function_<V, S>, from: Internal.Function_<S, V>, name: string): Internal.NamedCodec<S>;
        "orElse(java.util.function.Consumer,java.lang.Object)"(onError: Internal.Consumer_<string>, value: V): Internal.NamedMapCodec<V>;
        "orElseGet(java.util.function.UnaryOperator,java.util.function.Supplier)"(onError: Internal.UnaryOperator_<string>, value: Internal.Supplier_<V>): Internal.NamedMapCodec<V>;
        abstract compressor<T>(arg0: Internal.DynamicOps_<T>): Internal.KeyCompressor<T>;
        decode<T>(ops: Internal.DynamicOps_<T>, input: T): Internal.DataResult<com.mojang.datafixers.util.Pair<V, T>>;
        static enumMap<K extends Internal.Enum<K>, V>(keyEnumClass: K, valueCodec: Internal.NamedCodec_<V>, defaultValue: V): Internal.NamedMapCodec<Internal.Map<K, V>>;
        static checkRange<N extends number & Internal.Comparable<N>>(minInclusive: N, maxInclusive: N): Internal.Function<N, Internal.DataResult<N>>;
        static enumCodec<E extends Internal.Enum<E>>(enumClass: E, name: string): Internal.NamedCodec<E>;
        orElseGet(value: Internal.Supplier_<V>): Internal.NamedMapCodec<V>;
        decode<T>(ops: Internal.DynamicOps_<T>, input: Internal.MapLike_<T>): Internal.DataResult<V>;
        getClass(): typeof any;
        static intRange(minInclusive: number, maxInclusive: number): Internal.NamedCodec<number>;
        fromNetwork(buf: Internal.FriendlyByteBuf_): V;
        ap<E>(arg0: Internal.MapDecoder_<Internal.Function<V, E>>): Internal.MapDecoder<E>;
        static unboundedMap<K, V>(keyCodec: Internal.NamedCodec_<K>, valueCodec: Internal.NamedCodec_<V>, name: string): Internal.UnboundedMapCodec<K, V>;
        static enumMap<K extends Internal.Enum<K>, V>(keyEnumClass: K, valueCodec: Internal.NamedCodec_<V>, defaultValue: V, name: string): Internal.NamedMapCodec<Internal.Map<K, V>>;
        static floatRange(minInclusive: number, maxInclusive: number): Internal.NamedCodec<number>;
        comap<B>(arg0: Internal.Function_<B, V>): Internal.MapEncoder<B>;
        listOf(): Internal.NamedCodec<Internal.List<V>>;
        forGetter<O>(getter: Internal.Function_<O, V>): Internal.NamedRecordCodec<O, V>;
        static of<K, V>(typeKey: string, keyCodec: Internal.NamedCodec_<K>, type: Internal.Function_<V, Internal.DataResult<K>>, decoder: Internal.Function_<K, Internal.DataResult<Internal.NamedCodec<V>>>, name: string): Internal.EnhancedDispatchCodec<K, V>;
        toString(): string;
        static list<A>(codec: Internal.NamedCodec_<A>): Internal.NamedCodec<Internal.List<A>>;
        "encode(com.mojang.serialization.DynamicOps,java.lang.Object,java.lang.Object)"<T>(ops: Internal.DynamicOps_<T>, input: V, prefix: T): Internal.DataResult<T>;
        static unit<A>(defaultValue: Internal.Supplier_<A>, name: string): Internal.NamedCodec<A>;
        notifyAll(): void;
        keys<T>(ops: Internal.DynamicOps_<T>): Internal.Stream<T>;
        compressedDecode<T>(arg0: Internal.DynamicOps_<T>, arg1: T): Internal.DataResult<V>;
        comapFlatMap<S>(to: Internal.Function_<V, Internal.DataResult<S>>, from: Internal.Function_<S, V>, name: string): Internal.NamedCodec<S>;
        static "unit(java.util.function.Supplier,java.lang.String)"<A>(defaultValue: Internal.Supplier_<A>, name: string): Internal.NamedCodec<A>;
        codec(): Internal.Codec<V>;
        wait(arg0: number): void;
        static enumMap<K extends Internal.Enum<K>, V>(keyEnumClass: K, valueCodec: Internal.NamedCodec_<V>): Internal.NamedMapCodec<Internal.Map<K, V>>;
        fieldOf(fieldName: string): Internal.NamedMapCodec<V>;
        static enumCodec<E extends Internal.Enum<E>>(enumClass: E): Internal.NamedCodec<E>;
        "encode(java.lang.Object,com.mojang.serialization.DynamicOps,com.mojang.serialization.RecordBuilder)"<T>(input: V, ops: Internal.DynamicOps_<T>, prefix: Internal.RecordBuilder_<T>): Internal.RecordBuilder<T>;
        notify(): void;
        "orElseGet(java.util.function.Consumer,java.util.function.Supplier)"(onError: Internal.Consumer_<string>, value: Internal.Supplier_<V>): Internal.NamedMapCodec<V>;
        orElse(onError: Internal.Consumer_<string>, value: V): Internal.NamedMapCodec<V>;
        encodeStart<T>(ops: Internal.DynamicOps_<T>, input: V): Internal.DataResult<T>;
        encode<T>(ops: Internal.DynamicOps_<T>, input: V, prefix: T): Internal.DataResult<T>;
        flatComap<B>(arg0: Internal.Function_<B, Internal.DataResult<V>>): Internal.MapEncoder<B>;
        static record<O>(builder: Internal.Function_<Internal.NamedRecordCodec$Instance<O>, Internal.App<Internal.NamedRecordCodec$Mu<O>, O>>, name: string): Internal.NamedMapCodec<O>;
        flatComapMap<S>(to: Internal.Function_<V, S>, from: Internal.Function_<S, Internal.DataResult<V>>, name: string): Internal.NamedCodec<S>;
        "decode(com.mojang.serialization.DynamicOps,com.mojang.serialization.MapLike)"<T>(ops: Internal.DynamicOps_<T>, input: Internal.MapLike_<T>): Internal.DataResult<V>;
        "optionalFieldOf(java.lang.String,java.util.function.Supplier)"(fieldName: string, defaultValue: Internal.Supplier_<V>): Internal.NamedMapCodec<V>;
        aliases(...aliases: string[]): Internal.NamedMapCodec<V>;
        static makeCompressedBuilder<T>(arg0: Internal.DynamicOps_<T>, arg1: Internal.KeyCompressor_<T>): Internal.RecordBuilder<T>;
        static doubleRange(minInclusive: number, maxInclusive: number): Internal.NamedCodec<number>;
        flatXmap<S>(to: Internal.Function_<V, Internal.DataResult<S>>, from: Internal.Function_<S, Internal.DataResult<V>>, name: string): Internal.NamedCodec<S>;
        optionalFieldOf(fieldName: string, defaultValue: V): Internal.NamedMapCodec<V>;
        static fromJson<T>(parser: Internal.Function_<Internal.JsonElement, T>, encoder: Internal.Function_<T, Internal.JsonElement>, name: string): Internal.NamedCodec<T>;
        "decode(com.mojang.serialization.DynamicOps,java.lang.Object)"<T>(ops: Internal.DynamicOps_<T>, input: T): Internal.DataResult<com.mojang.datafixers.util.Pair<V, T>>;
        name(): string;
        static of<A>(decoder: Internal.MapDecoder_<A>, encoder: Internal.MapEncoder_<A>, name: string): Internal.NamedMapCodec<A>;
        static "enumMap(java.lang.Class,fr.frinn.custommachinery.api.codec.NamedCodec,java.lang.Object)"<K extends Internal.Enum<K>, V>(keyEnumClass: K, valueCodec: Internal.NamedCodec_<V>, defaultValue: V): Internal.NamedMapCodec<Internal.Map<K, V>>;
        wait(): void;
        listOf(name: string): Internal.NamedCodec<Internal.List<V>>;
        encode<T>(input: V, ops: Internal.DynamicOps_<T>, prefix: Internal.RecordBuilder_<T>): Internal.RecordBuilder<T>;
        orElse(onError: Internal.UnaryOperator_<string>, value: V): Internal.NamedMapCodec<V>;
        wait(arg0: number, arg1: number): void;
        optionalFieldOf(fieldName: string, defaultValue: Internal.Supplier_<V>): Internal.NamedMapCodec<V>;
        "optionalFieldOf(java.lang.String,java.lang.Object)"(fieldName: string, defaultValue: V): Internal.NamedMapCodec<V>;
        static list<A>(codec: Internal.NamedCodec_<A>, name: string): Internal.NamedCodec<Internal.List<A>>;
        orElseGet(onError: Internal.Consumer_<string>, value: Internal.Supplier_<V>): Internal.NamedMapCodec<V>;
        map<B>(arg0: Internal.Function_<V, B>): Internal.MapDecoder<B>;
        optionalFieldOf(fieldName: string): Internal.NamedMapCodec<Internal.Optional<V>>;
        static either<F, S>(first: Internal.NamedCodec_<F>, second: Internal.NamedCodec_<S>, name: string): Internal.NamedCodec<Internal.Either<F, S>>;
        flatMap<B>(arg0: Internal.Function_<V, Internal.DataResult<B>>): Internal.MapDecoder<B>;
        mapResult(function_: Internal.MapCodec$ResultFunction_<V>): Internal.NamedMapCodec<V>;
        static pair<F, S>(first: Internal.NamedCodec_<F>, second: Internal.NamedCodec_<S>): Internal.PairCodec<F, S>;
        static getJson<U>(dynamic: Internal.Dynamic_<any>): Internal.JsonElement;
        static enumMap<K extends Internal.Enum<K>, V>(keyEnumClass: K, valueCodec: Internal.NamedCodec_<V>, name: string): Internal.NamedMapCodec<Internal.Map<K, V>>;
        read<T>(ops: Internal.DynamicOps_<T>, input: T): Internal.DataResult<V>;
        withLifecycle(lifecycle: Internal.Lifecycle_): Internal.NamedMapCodec<V>;
        static forStrings(arg0: Internal.Supplier_<Internal.Stream<string>>): Internal.Keyable;
        static unit<A>(defaultValue: A, name: string): Internal.NamedCodec<A>;
        static registrar<A>(registrar: Internal.Registrar_<A>): Internal.NamedCodec<A>;
        hashCode(): number;
        dispatch<E>(typeKey: string, type: Internal.Function_<E, V>, valueCodecGetter: Internal.Function_<V, Internal.NamedCodec<E>>, name: string): Internal.NamedMapCodec<E>;
        orElseGet(onError: Internal.UnaryOperator_<string>, value: Internal.Supplier_<V>): Internal.NamedMapCodec<V>;
        toNetwork(input: V, buf: Internal.FriendlyByteBuf_): void;
        encoder(): Internal.Encoder<V>;
        copy(input: V): V;
        equals(arg0: any): boolean;
        static lazy<A>(supplier: Internal.Supplier_<Internal.NamedCodec<A>>, name: string): Internal.NamedCodec<A>;
        get class(): typeof any
    }
    type EnhancedDispatchCodec_<K, V> = EnhancedDispatchCodec<K, V>;
    class EnderManEntityJS extends Internal.EnderMan implements Internal.IAnimatableJS {
        constructor(builder: Internal.EnderManJSBuilder_, pEntityType: Internal.EntityType_<Internal.EnderMan>, pLevel: Internal.Level_)
        getUpVector(arg0: number): Vec3d;
        gameEvent(arg0: Internal.GameEvent_, arg1: Internal.Entity_): void;
        static checkMobSpawnRules(arg0: Internal.EntityType_<Internal.Mob>, arg1: Internal.LevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        isSuppressingBounce(): boolean;
        handler$zla000$toTag(tag: Internal.CompoundTag_, ci: Internal.CallbackInfoReturnable_<any>): void;
        setTarget(target: Internal.LivingEntity_): void;
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
        setXxa(arg0: number): void;
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
        forgetCurrentTargetAndRefreshUniversalAnger(): void;
        canFreeze(): boolean;
        ignoreExplosion(): boolean;
        getBlockY(): number;
        redirect$dnk000$fixSpawnAnimX(instance: Internal.Mob_, v: number): number;
        addPersistentAngerSaveData(arg0: Internal.CompoundTag_): void;
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
        tickPart(partName: string, offsetX: number, offsetY: number, offsetZ: number): void;
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
        animatableCacheOverride(): Internal.AnimatableInstanceCache;
        playAmbientSound(): void;
        onGround(): boolean;
        handler$ebf000$isPersistenceRequired(cir: Internal.CallbackInfoReturnable_<any>): void;
        getControlledVehicle(): Internal.Entity;
        isOnSameTeam(pEntity: Internal.Entity_): boolean;
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
        handler$egj000$isInsideWall(arg0: Internal.CallbackInfoReturnable_<any>, arg1: number, arg2: Internal.AABB_): void;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        handler$zlm000$immunizePiglin(player: Internal.Player_, hand: Internal.InteractionHand_, cir: Internal.CallbackInfoReturnable_<any>): void;
        static createMobAttributes(): Internal.AttributeSupplier$Builder;
        isAutoSpinAttack(): boolean;
        getRemainingFireTicks(): number;
        onlyOpCanSetNbt(): boolean;
        handler$bcn001$baseTick(ci: Internal.CallbackInfo_): void;
        fireImmune(): boolean;
        addMotion(arg0: number, arg1: number, arg2: number): void;
        getMaxFallDistance(): number;
        isHolding(arg0: Internal.Item_): boolean;
        getZ(arg0: number): number;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        static areAllEffectsAmbient(arg0: Internal.Collection_<Internal.MobEffectInstance>): boolean;
        doHurtTarget(pEntity: Internal.Entity_): boolean;
        getTicksFrozen(): number;
        getRandomX(arg0: number): number;
        fabrication$tickSourceDependentIFrames(): void;
        isCreepy(): boolean;
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
        recreateFromPacket(pPacket: Internal.ClientboundAddEntityPacket_): void;
        canStartSwimming(): boolean;
        setDeltaMovement(arg0: Vec3d_): void;
        fabrication$setNoGravityReversible(reversible: boolean): void;
        getLeashOffset(arg0: number): Vec3d;
        isBaby(): boolean;
        damageEquipment(slot: Internal.EquipmentSlot_): void;
        isGlowing(): boolean;
        "isInFluidType(net.minecraft.world.level.material.FluidState)"(arg0: Internal.FluidState_): boolean;
        canBreatheUnderwater(): boolean;
        getWalkTargetValue(arg0: BlockPos_): number;
        die(damageSource: Internal.DamageSource_): void;
        removeAllEffects(): boolean;
        getLeashOffset(): Vec3d;
        hasLineOfSight(entity: Internal.Entity_): boolean;
        onClimbable(): boolean;
        isAttackable(): boolean;
        getSlot(arg0: number): Internal.SlotAccess;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        getAttackTime(): number;
        handler$ebe000$getMobType(cir: Internal.CallbackInfoReturnable_<any>): void;
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
        canTakeItem(itemStack: Internal.ItemStack_): boolean;
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
        isEffectiveAi(): boolean;
        startRiding(arg0: Internal.Entity_, arg1: boolean): boolean;
        setSpawnCancelled(arg0: boolean): void;
        getStringUuid(): string;
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
        canFireProjectileWeaponPredicate(projectileWeapon: Internal.ProjectileWeaponItem_): boolean;
        getOffhandItem(): Internal.ItemStack;
        canCollideWith(pEntity: Internal.Entity_): boolean;
        neruina$isErrored(): boolean;
        getBlockExplosionResistance(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.FluidState_, arg5: number): number;
        handler$dpi000$getAttributeValue_Inject(attribute: Internal.Attribute_, cir: Internal.CallbackInfoReturnable_<any>): void;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        getIsInsidePortal(): boolean;
        clearSleepingPos(): void;
        ac_setDropChance(arg0: Internal.EquipmentSlot_, arg1: number): void;
        canSpawnSprintParticle(): boolean;
        "moveTo(net.minecraft.core.BlockPos,float,float)"(arg0: BlockPos_, arg1: number, arg2: number): void;
        handler$zjk000$move(type: Internal.MoverType_, movement: Vec3d_, ci: Internal.CallbackInfo_): void;
        getLastHurtMob(): Internal.LivingEntity;
        moveRelative(arg0: number, arg1: Vec3d_): void;
        isAddedToWorld(): boolean;
        saveAsPassenger(arg0: Internal.CompoundTag_): boolean;
        getSoundSource(): Internal.SoundSource;
        getLastDamageSource(): Internal.DamageSource;
        setNoActionTime(arg0: number): void;
        setMovementSpeedAddition(speed: number): void;
        equipmentHasChanged(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getPose(): Internal.Pose;
        setLastAttackedTicks(arg0: number): void;
        getAttribute(arg0: Internal.Attribute_): Internal.AttributeInstance;
        getRemainingPersistentAngerTime(): number;
        setPositionAndRotation(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        canBeAffected(effectInstance: Internal.MobEffectInstance_): boolean;
        handler$bhe001$toTag(tag: Internal.CompoundTag_, ci: Internal.CallbackInfoReturnable_<any>): void;
        entityName(): string;
        getRestrictCenter(): BlockPos;
        isLeftHanded(): boolean;
        removeVehicle(): void;
        setZ(z: number): void;
        handler$ebf000$canBeLeashed(pPlayer: Internal.Player_, cir: Internal.CallbackInfoReturnable_<any>): void;
        getY(): number;
        hashCode(): number;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        eat(level: Internal.Level_, itemStack: Internal.ItemStack_): Internal.ItemStack;
        handler$ebc000$onRemovedFromWorld(ci: Internal.CallbackInfo_): void;
        isWithinMeleeAttackRange(arg0: Internal.LivingEntity_): boolean;
        static checkMonsterSpawnRules(arg0: Internal.EntityType_<Internal.Monster>, arg1: Internal.ServerLevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
        broadcastBreakEvent(arg0: Internal.EquipmentSlot_): void;
        showVehicleHealth(): boolean;
        getDistance(pos: BlockPos_): number;
        isBlocking(): boolean;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        handler$dkl000$ac_livingTick(arg0: Internal.CallbackInfo_): void;
        canChangeDirection(): boolean;
        getTick(entity: any): number;
        /**
         * @deprecated
        */
        isPushedByFluid(): boolean;
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
        /**
         * Calls a triggerable animation to be played anywhere.
        */
        triggerAnimation(controllerName: string, animName: string): void;
        bettercombat$resetAttackStrengthTicker(): void;
        getAttributes(): Internal.AttributeMap;
        setMagneticDeltaY(arg0: number): void;
        teleport(): boolean;
        isSpawnCancelled(): boolean;
        "hasPassenger(java.util.function.Predicate)"(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        getDimensions(arg0: Internal.Pose_): Internal.EntityDimensions;
        fabrication$markWet(): void;
        isSwimming(): boolean;
        mayInteract(p_146843_: Internal.Level_, p_146844_: BlockPos_): boolean;
        setSprinting(sprinting: boolean): void;
        setPortalCooldown(): void;
        getAttackAnim(arg0: number): number;
        setX(x: number): void;
        getBlockStateOn(): Internal.BlockState;
        getPortalWaitTime(): number;
        getItemBySlot(slot: Internal.EquipmentSlot_): Internal.ItemStack;
        wantsToPickUp(arg0: Internal.ItemStack_): boolean;
        fabrication$didJustAbsorp(): boolean;
        getFluidJumpThreshold(): number;
        "setPositionAndRotation(double,double,double,float,float)"(x: number, y: number, z: number, yaw: number, pitch: number): void;
        isInvisibleTo(arg0: Internal.Player_): boolean;
        stopSleeping(): void;
        setAirSupply(arg0: number): void;
        handler$ebf000$getAmbientSoundInterval(cir: Internal.CallbackInfoReturnable_<any>): void;
        getOnPos(): BlockPos;
        isUndead(): boolean;
        static createLivingAttributes(): Internal.AttributeSupplier$Builder;
        getStepHeight(): number;
        setRegisteredToWorld(arg0: Internal.PathNavigation_): void;
        isSleeping(): boolean;
        stopUsingItem(): void;
        acceptsFailure(): boolean;
        getAnimData<D>(arg0: Internal.SerializableDataTicket_<D>): D;
        setOnGroundWithKnownMovement(arg0: boolean, arg1: Vec3d_): void;
        handler$ebc000$entityJs$tick(ci: Internal.CallbackInfo_): void;
        updateAnimationsOnTick(): void;
        getFluidFallingAdjustedMovement(arg0: number, arg1: boolean, arg2: Vec3d_): Vec3d;
        setOldPosAndRot(): void;
        static createMonsterAttributes(): Internal.AttributeSupplier$Builder;
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
        setSilent(arg0: boolean): void;
        captureDrops(): Internal.Collection<Internal.ItemEntity>;
        hasExactlyOnePlayerPassenger(): boolean;
        canBeSeenAsEnemy(): boolean;
        setLeftHanded(arg0: boolean): void;
        getSwimSplashSound(): Internal.SoundEvent;
        getActiveEffects(): Internal.Collection<Internal.MobEffectInstance>;
        isOnPortalCooldown(): boolean;
        canAttack(arg0: Internal.LivingEntity_, arg1: Internal.TargetingConditions_): boolean;
        performRangedAttack(pTarget: Internal.LivingEntity_, pDistanceFactor: number): void;
        getAttributeValue(arg0: Internal.Holder_<Internal.Attribute>): number;
        setPitch(arg0: number): void;
        handler$ebc000$isCurrentlyGlowing(cir: Internal.CallbackInfoReturnable_<any>): void;
        isMultipartEntity(): boolean;
        setPosRaw(arg0: number, arg1: number, arg2: number): void;
        getParts(): Internal.PartEntity<any>[];
        handleEntityEvent(arg0: number): void;
        isUsingItem(): boolean;
        isAlwaysTicking(): boolean;
        interactAt(arg0: Internal.Player_, arg1: Vec3d_, arg2: Internal.InteractionHand_): Internal.InteractionResult;
        lerpTo(x: number, y: number, z: number, yaw: number, pitch: number, posRotationIncrements: number, teleport: boolean): void;
        onPassengerTurned(arg0: Internal.Entity_): void;
        spawnAtLocation(arg0: Internal.ItemLike_): Internal.ItemEntity;
        handler$edc000$mna$isAffectedByFluids(arg0: Internal.CallbackInfoReturnable_<any>): void;
        getForgePersistentData(): Internal.CompoundTag;
        ac_dropCustomDeathLoot(arg0: Internal.DamageSource_, arg1: number, arg2: boolean): void;
        "spawnAtLocation(net.minecraft.world.level.ItemLike,int)"(arg0: Internal.ItemLike_, arg1: number): Internal.ItemEntity;
        registerControllers(data: Internal.AnimatableManager$ControllerRegistrar_): void;
        getBuilder(): Internal.BaseLivingEntityBuilder<any>;
        setInvulnerable(arg0: boolean): void;
        push(arg0: Internal.Entity_): void;
        isInFluidType(): boolean;
        maxUpStep(): number;
        fabrication$isNoGravityReversible(): boolean;
        setGlowing(arg0: boolean): void;
        load(arg0: Internal.CompoundTag_): void;
        "broadcastBreakEvent(net.minecraft.world.entity.EquipmentSlot)"(arg0: Internal.EquipmentSlot_): void;
        setLeashedTo(arg0: Internal.Entity_, arg1: boolean): void;
        isAlive(): boolean;
        handler$bah000$dontBypassSteppingEffects(cir: Internal.CallbackInfoReturnable_<any>): void;
        startSleeping(blockPos: BlockPos_): void;
        handler$zmn000$lightCreepersOnExplosion(source: Internal.DamageSource_, amount: number, cir: Internal.CallbackInfoReturnable_<any>): void;
        getBbHeight(): number;
        getMeleeAttackRangeSqr(entity: Internal.LivingEntity_): number;
        canaryOnBlockCacheSet(arg0: Internal.BlockState_): void;
        getViewVector(arg0: number): Vec3d;
        getTags(): Internal.Set<string>;
        bettermobcombat$getHandItems(): Internal.NonNullList<any>;
        readPersistentAngerSaveData(arg0: Internal.Level_, arg1: Internal.CompoundTag_): void;
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
        bettermobcombat$getCurrentItemAttackStrengthDelay(): number;
        handler$zof000$preShieldDamage(source: Internal.DamageSource_, amount: number, cir: Internal.CallbackInfoReturnable_<any>): void;
        addEffect(arg0: Internal.MobEffectInstance_): boolean;
        handler$cdl000$curio$canFreeze(arg0: Internal.CallbackInfoReturnable_<any>): void;
        handler$ebc000$dampensVibrations(cir: Internal.CallbackInfoReturnable_<any>): void;
        getAnimatableInstanceCache(): Internal.AnimatableInstanceCache;
        getViewXRot(arg0: number): number;
        canRiderInteract(): boolean;
        handler$ebc000$showVehicleHealth(cir: Internal.CallbackInfoReturnable_<any>): void;
        handler$bik00e$tick(ci: Internal.CallbackInfo_): void;
        setPose(arg0: Internal.Pose_): void;
        getReachDistance(): number;
        abstract getEntityType(): Internal.EntityType<any>;
        isWaterCreature(): boolean;
        toString(): string;
        getVisualScale(): number;
        abstract setLastHurtByPlayer(arg0: Internal.Player_): void;
        "getServer()"(): Internal.MinecraftServer;
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
        isAngry(): boolean;
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
        isInvulnerableTo(p_20122_: Internal.DamageSource_): boolean;
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
        isAngryAt(arg0: Internal.LivingEntity_): boolean;
        updateDynamicGameEventListener(arg0: Internal.BiConsumer_<Internal.DynamicGameEventListener<any>, Internal.ServerLevel>): void;
        handler$ebc000$canCollideWith(pEntity: Internal.Entity_, cir: Internal.CallbackInfoReturnable_<any>): void;
        "onSyncedDataUpdated(net.minecraft.network.syncher.EntityDataAccessor)"(arg0: Internal.EntityDataAccessor_<any>): void;
        isNoAi(): boolean;
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
        tell(message: net.minecraft.network.chat.Component_): void;
        fabrication$setInvisibilityReversible(reversible: boolean): void;
        closerThan(arg0: Internal.Entity_, arg1: number): boolean;
        getTypeId(): string;
        getDistanceSq(pos: BlockPos_): number;
        indicateDamage(arg0: number, arg1: number): void;
        canBeSeenByAnyone(): boolean;
        updatePersistentAnger(arg0: Internal.ServerLevel_, arg1: boolean): void;
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
        "playSound(net.minecraft.sounds.SoundEvent)"(id: Internal.SoundEvent_): void;
        getPitch(): number;
        getPathfindingMalus(arg0: Internal.BlockPathTypes_): number;
        getRandom(): Internal.RandomSource;
        canReplaceEqualItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        rotate(arg0: Internal.Rotation_): number;
        shouldRiderFaceForward(player: Internal.Player_): boolean;
        getPassengersAndSelf(): Internal.Stream<any>;
        setMagneticAttachmentFace(arg0: Internal.Direction_): void;
        fabrication$getKillMessage(): string;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        "getAttributeBaseValue(net.minecraft.core.Holder)"(arg0: Internal.Holder_<Internal.Attribute>): number;
        setMagnetHeadRotation(): void;
        handler$dke000$ac_collide(arg0: Vec3d_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        clearRestriction(): void;
        "self()"(): Internal.LivingEntity;
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
        setBaby(arg0: boolean): void;
        abstract getLastHurtByMob(): Internal.LivingEntity;
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
        causeFallDamage(distance: number, damageMultiplier: number, damageSource: Internal.DamageSource_): boolean;
        bettermobcombat$getSwingProgress(): number;
        releaseUsingItem(): void;
        getPosition(arg0: number): Vec3d;
        removeFreeWill(): void;
        setSlowFallingFlag(arg0: boolean): void;
        removeWhenFarAway(pDistanceToClosestPlayer: number): boolean;
        wait(arg0: number): void;
        setCarriedBlock(arg0: Internal.BlockState_): void;
        isIgnoringBlockTriggers(): boolean;
        setRecordPlayingNearby(arg0: BlockPos_, arg1: boolean): void;
        getHandHoldingItemAngle(arg0: Internal.Item_): Vec3d;
        neruina$setTickingEntryId(uuid: Internal.UUID_): void;
        hasItemInSlot(arg0: Internal.EquipmentSlot_): boolean;
        canUpdate(arg0: boolean): void;
        getEyeInFluidType(): Internal.FluidType;
        distanceToSqr(arg0: Vec3d_): number;
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
        setRemainingPersistentAngerTime(arg0: number): void;
        triggerAnim<D>(relatedEntity: Internal.Entity_, instanceId: number, controllerName: string, animName: string): void;
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
        onEffectAdded(effectInstance: Internal.MobEffectInstance_, entity: Internal.Entity_): void;
        canAttackType(entityType: Internal.EntityType_<any>): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        canEntityBeSeen(entity: Internal.LivingEntity_): boolean;
        getBrain(): Internal.Brain<any>;
        m_5639_(fallDistance: number, pDamageMultiplier: number): number;
        setCustomNameVisible(arg0: boolean): void;
        isAlliedTo(arg0: Internal.Team_): boolean;
        setThisJumping(value: boolean): void;
        getBoneResetTime(): number;
        getControllingPassenger(): Internal.LivingEntity;
        canFireProjectileWeapon(projectileWeapon: Internal.ProjectileWeaponItem_): boolean;
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
        getEyeY(): number;
        handler$ebg000$getWalkTargetValue(pPos: BlockPos_, pLevel: Internal.LevelReader_, cir: Internal.CallbackInfoReturnable_<any>): void;
        skipDropExperience(): void;
        getBoundingBox(): Internal.AABB;
        isInWaterOrRain(): boolean;
        handler$zjm000$damage(source: Internal.DamageSource_, amount: number, cir: Internal.CallbackInfoReturnable_<any>): void;
        setItemSlot(slot: Internal.EquipmentSlot_, stack: Internal.ItemStack_): void;
        bettermobcombat$hasActiveAttackAnimation(): boolean;
        equals(arg0: any): boolean;
        getViewYRot(arg0: number): number;
        getLastArmorItem(arg0: Internal.EquipmentSlot_): Internal.ItemStack;
        dismountsUnderwater(): boolean;
        handler$cpe000$l2library_overrideClientGlow_isCurrentlyGlowing(arg0: Internal.CallbackInfoReturnable_<any>): void;
        handler$ebf000$doHurtTarget(pEntity: Internal.Entity_, cir: Internal.CallbackInfoReturnable_<any>): void;
        isAffectedByPotions(): boolean;
        playerTouch(p_20081_: Internal.Player_): void;
        addTag(arg0: string): boolean;
        getCitadelEntityData(): Internal.CompoundTag;
        getEyeHeight(arg0: Internal.Pose_): number;
        getAddEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>;
        getCurrentAttack(): Internal.AttackHand;
        playerAnimator_getAnimation(arg0: ResourceLocation_): Internal.IAnimation;
        static getEquipmentForSlot(arg0: Internal.EquipmentSlot_, arg1: number): Internal.Item;
        isWithinRestriction(arg0: BlockPos_): boolean;
        getTeam(): Internal.Team;
        ableToJump(): boolean;
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
        thunderHit(p_19927_: Internal.ServerLevel_, p_19928_: Internal.LightningBolt_): void;
        setIsInPowderSnow(arg0: boolean): void;
        doEnchantDamageEffects(arg0: Internal.LivingEntity_, arg1: Internal.Entity_): void;
        setCustomName(arg0: net.minecraft.network.chat.Component_): void;
        handler$zlg000$playAngrySound(ci: Internal.CallbackInfo_): void;
        canaryOnEquipmentChanged(): void;
        getTeamId(): string;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        setStingerCount(arg0: number): void;
        handler$ebc000$isAttackable(cir: Internal.CallbackInfoReturnable_<any>): void;
        playerAnimator_getAnimation(): Internal.AnimationApplier;
        getMaxHeadYRot(): number;
        isCustomNameVisible(): boolean;
        isSupportedBy(arg0: BlockPos_): boolean;
        shouldPlayAnimsWhileGamePaused(): boolean;
        getPistonPushReaction(): Internal.PushReaction;
        shouldRiderSit(): boolean;
        lookAt(arg0: Internal.EntityAnchorArgument$Anchor_, arg1: Vec3d_): void;
        getLootTableSeed(): number;
        isInFluidType(arg0: Internal.FluidType_): boolean;
        collide(arg0: Vec3d_): Vec3d;
        getFluidMotionScale(arg0: Internal.FluidType_): number;
        getMotionX(): number;
        "onSyncedDataUpdated(java.util.List)"(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        jump(): void;
        canBeLeashed(pPlayer: Internal.Player_): boolean;
        hasIndirectPassenger(arg0: Internal.Entity_): boolean;
        getEntityData(): Internal.SynchedEntityData;
        handler$zla000$baseTick(ci: Internal.CallbackInfo_): void;
        handleInsidePortal(arg0: BlockPos_): void;
        getPotionEffects(): Internal.EntityPotionEffectsJS;
        isAngryAtAllPlayers(arg0: Internal.Level_): boolean;
        m_6475_(pDamageSource: Internal.DamageSource_, pDamageAmount: number): void;
        absMoveTo(arg0: number, arg1: number, arg2: number): void;
        updateFluidHeightAndDoFluidPushing(arg0: Internal.Predicate_<Internal.FluidState>): void;
        isOnRails(): boolean;
        getStingerCount(): number;
        playerDied(arg0: Internal.Player_): void;
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
        getJumpBoostPower(): number;
        spawnAnim(): void;
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
        playStareSound(): void;
        handler$dke001$ac_tick(arg0: Internal.CallbackInfo_): void;
        setShiftKeyDown(arg0: boolean): void;
        getEyePosition(arg0: number): Vec3d;
        getPassengers(): Internal.EntityArrayList;
        handler$ebf000$ate(ci: Internal.CallbackInfo_): void;
        getMaxHeightFluidType(): Internal.FluidType;
        getZ(): number;
        teleportTo(arg0: number, arg1: number, arg2: number): void;
        triggerSacrificeIn(arg0: number): void;
        getAttributeBaseValue(arg0: Internal.Holder_<Internal.Attribute>): number;
        getServer(): Internal.MinecraftServer;
        getExperienceReward(): number;
        getFirstPassenger(): Internal.Entity;
        heal(amount: number): void;
        getSpawnType(): Internal.MobSpawnType;
        setLastHurtMob(arg0: Internal.Entity_): void;
        abstract setLastHurtByMob(arg0: Internal.LivingEntity_): void;
        interact(arg0: Internal.Player_, arg1: Internal.InteractionHand_): Internal.InteractionResult;
        getDismountLocationForPassenger(arg0: Internal.LivingEntity_): Vec3d;
        checkSlowFallDistance(): void;
        canStandOnFluid(fluidState: Internal.FluidState_): boolean;
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
        handler$zlg000$getAmbientSound(cir: Internal.CallbackInfoReturnable_<any>): void;
        removeEffect(arg0: Internal.MobEffect_): boolean;
        getProfile(): Internal.GameProfile;
        handler$ebc000$onAddedToWorld(ci: Internal.CallbackInfo_): void;
        isDeadOrDying(): boolean;
        setHeadArmorItem(item: Internal.ItemStack_): void;
        static setViewScale(arg0: number): void;
        take(arg0: Internal.Entity_, arg1: number): void;
        setLevelCallback(arg0: Internal.EntityInLevelCallback_): void;
        getLookControl(): Internal.LookControl;
        isPreventingPlayerRest(arg0: Internal.Player_): boolean;
        handler$edc000$mna$canStandOnFluid(arg0: Internal.FluidState_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        playSound(arg0: Internal.SoundEvent_, arg1: number, arg2: number): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        canAttack(entity: Internal.LivingEntity_): boolean;
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
        "getAttributeBaseValue(net.minecraft.world.entity.ai.attributes.Attribute)"(attribute: Internal.Attribute_): number;
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
        canTrample(state: Internal.BlockState_, pos: BlockPos_, fallDistance: number): boolean;
        handler$ebe000$brainProvider(cir: Internal.CallbackInfoReturnable_<any>): void;
        neruina$setErrored(): void;
        setItemInHand(arg0: Internal.InteractionHand_, arg1: Internal.ItemStack_): void;
        entityJs$getTypeId(): string;
        setMaxHealth(hp: number): void;
        getFacing(): Internal.Direction;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>, arg1: boolean): boolean;
        handler$ebc000$getMaxFallDistance(cir: Internal.CallbackInfoReturnable_<any>): void;
        bettermobcombat$startUpswing(arg0: Internal.WeaponAttributes_): void;
        hasBeenStaredAt(): boolean;
        isPassengerOfSameVehicle(arg0: Internal.Entity_): boolean;
        getBoundingBoxForCulling(): Internal.AABB;
        abstract getTarget(): Internal.LivingEntity;
        static collideBoundingBox(arg0: Internal.Entity_, arg1: Vec3d_, arg2: Internal.AABB_, arg3: Internal.Level_, arg4: Internal.List_<any>): Vec3d;
        restrictTo(arg0: BlockPos_, arg1: number): void;
        trackingPosition(): Vec3d;
        setMagneticDeltaX(arg0: number): void;
        getNameTagOffsetY(): number;
        isInvulnerable(): boolean;
        isInLava(): boolean;
        awardKillScore(arg0: Internal.Entity_, arg1: number, arg2: Internal.DamageSource_): void;
        isInWater(): boolean;
        canFireProjectileWeapons(projectileWeapon: Internal.ProjectileWeaponItem_): boolean;
        /**
         * @deprecated
        */
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
        startPersistentAngerTimer(): void;
        onItemPickup(p_21054_: Internal.ItemEntity_): void;
        setCitadelEntityData(arg0: Internal.CompoundTag_): void;
        setMagneticDeltaZ(arg0: number): void;
        handler$dkl000$ac_calculateEntityAnimation(arg0: boolean, arg1: Internal.CallbackInfo_): void;
        updateSwimming(): void;
        isHolding(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        getSpeed(): number;
        abstract getCachedFeetBlockState(): Internal.BlockState;
        hasSlowFallingFlag(): boolean;
        shouldInformAdmins(): boolean;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        rideTick(): void;
        bettercombat$getAttackStrengthScale(arg0: number): number;
        wait(): void;
        setBeingStaredAt(): void;
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
        static checkAnyLightMonsterSpawnRules(arg0: Internal.EntityType_<Internal.Monster>, arg1: Internal.LevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
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
        getVisibilityPercent(p_20969_: Internal.Entity_): number;
        getMaxSpawnClusterSize(): number;
        wrapOperation$boc000$onTravel(instance: Internal.LivingEntity_, state: Internal.FluidState_, original: Internal.Operation_<any>): boolean;
        handler$bcn000$isWet(ci: Internal.CallbackInfoReturnable_<any>): void;
        canJump(): boolean;
        setKnockbackMultiplier_BetterCombat(value: number): void;
        getUsername(): string;
        move(arg0: Internal.MoverType_, arg1: Vec3d_): void;
        onRemovedFromWorld(): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        onJump(): void;
        isPickable(): boolean;
        stopBeingAngry(): void;
        setYHeadRot(arg0: number): void;
        setJumping(arg0: boolean): void;
        getPickResult(): Internal.ItemStack;
        handler$zop000$sendEquipmentBreakStatus(slot: Internal.EquipmentSlot_, ci: Internal.CallbackInfo_): void;
        "getMainHandItem()"(): Internal.ItemStack;
        getAbsorptionAmount(): number;
        getCarriedBlock(): Internal.BlockState;
        setAnimData<D>(arg0: Internal.SerializableDataTicket_<D>, arg1: D): void;
        getRandomY(): number;
        onEffectRemoved(arg0: Internal.MobEffectInstance_): void;
        getDisplayName(): net.minecraft.network.chat.Component;
        handler$dke000$ac_isInWater(arg0: Internal.CallbackInfoReturnable_<any>): void;
        getMobType(): Internal.MobType;
        travel(pTravelVector: Vec3d_): void;
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
        getPersistentAngerTarget(): Internal.UUID;
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
        m_6071_(pPlayer: Internal.Player_, pHand: Internal.InteractionHand_): Internal.InteractionResult;
        discard(): void;
        localvar$bhp000$adjustDamage(amount: number, source: Internal.DamageSource_): number;
        sendSystemMessage(arg0: net.minecraft.network.chat.Component_): void;
        acceptsSuccess(): boolean;
        setNoGravity(arg0: boolean): void;
        getUseItemRemainingTicks(): number;
        getIndirectPassengers(): Internal.Iterable<any>;
        attackable(): boolean;
        triggerAnim(controllerName: string, animName: string): void;
        createCommandSourceStack(): Internal.CommandSourceStack;
        getNavigation(): Internal.PathNavigation;
        isControlledByLocalInstance(): boolean;
        isMonster(): boolean;
        shouldJump(): boolean;
        getLastClimbablePos(): Internal.Optional<BlockPos>;
        handler$dfk000$pre_getAttributeValue(arg0: Internal.Attribute_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getEatingSound(itemStack: Internal.ItemStack_): Internal.SoundEvent;
        setId(entityId: number): void;
        getPerceivedTargetDistanceSquareForMeleeAttack(arg0: Internal.LivingEntity_): number;
        onSyncedDataUpdated(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        getHorizontalFacing(): Internal.Direction;
        getType(): string;
        isDamageSourceBlocked(arg0: Internal.DamageSource_): boolean;
        getLightProbePosition(arg0: number): Vec3d;
        ac_getEquipmentDropChance(arg0: Internal.EquipmentSlot_): number;
        setVisualScale(arg0: number): void;
        getActiveEffectsMap(): Internal.Map<Internal.MobEffect, Internal.MobEffectInstance>;
        onEquipItem(slot: Internal.EquipmentSlot_, previous: Internal.ItemStack_, current: Internal.ItemStack_): void;
        static isDarkEnoughToSpawn(arg0: Internal.ServerLevelAccessor_, arg1: BlockPos_, arg2: Internal.RandomSource_): boolean;
        checkDespawn(): void;
        handler$edd000$mna$onClimbable(arg0: Internal.CallbackInfoReturnable_<any>): void;
        getWalkTargetValue(pos: BlockPos_, levelReader: Internal.LevelReader_): number;
        lookAt(arg0: Internal.Entity_, arg1: number, arg2: number): void;
        setHeldItem(hand: Internal.InteractionHand_, item: Internal.ItemStack_): void;
        equipItemIfPossible(arg0: Internal.ItemStack_): Internal.ItemStack;
        onSyncedDataUpdated(arg0: Internal.EntityDataAccessor_<any>): void;
        getMagneticAttachmentFace(): Internal.Direction;
        setPersistentAngerTarget(arg0: Internal.UUID_): void;
        lerpHeadTo(arg0: number, arg1: number): void;
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
        checkSpawnObstruction(arg0: Internal.LevelReader_): boolean;
        handler$bbo001$damage(ds: Internal.DamageSource_, amount: number, cir: Internal.CallbackInfoReturnable_<any>): void;
        extinguish(): void;
        getRestrictRadius(): number;
        moveTo(arg0: Vec3d_): void;
        isColliding(arg0: BlockPos_, arg1: Internal.BlockState_): boolean;
        "swing(net.minecraft.world.InteractionHand)"(hand: Internal.InteractionHand_): void;
        handler$bbo000$playHurtSound(src: Internal.DamageSource_, ci: Internal.CallbackInfo_): void;
        getRegisteredNavigation(): Internal.PathNavigation;
        isInvertedHealAndHarm(): boolean;
        canHoldItem(stack: Internal.ItemStack_): boolean;
        killedEntity(arg0: Internal.ServerLevel_, arg1: Internal.LivingEntity_): boolean;
        getClassification(arg0: boolean): Internal.MobCategory;
        isFreezing(): boolean;
        runCommand(command: string): number;
        setGuaranteedDrop(arg0: Internal.EquipmentSlot_): void;
        setSharedFlagOnFire(arg0: boolean): void;
        playerAnimator_setAnimation(arg0: ResourceLocation_, arg1: Internal.IAnimation_): Internal.IAnimation;
        set defaultMovementSpeedMultiplier(speed: number)
        get suppressingBounce(): boolean
        set target(target: Internal.LivingEntity_)
        get onFire(): boolean
        get positionCodec(): Internal.VecDeltaCodec
        set maxUpStep(arg0: number)
        get fallFlyingTicks(): number
        set xxa(arg0: number)
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
        set boundingBox(arg0: Internal.AABB_)
        get ambientCreature(): boolean
        set zza(arg0: number)
        get block(): Internal.BlockContainerJS
        get name(): net.minecraft.network.chat.Component
        get controlledVehicle(): Internal.Entity
        get armorValue(): number
        set dimension(arg0: Internal.EntityDimensions_)
        get killCredit(): Internal.LivingEntity
        get autoSpinAttack(): boolean
        get remainingFireTicks(): number
        get maxFallDistance(): number
        get ticksFrozen(): number
        get creepy(): boolean
        get voicePitch(): number
        set statusMessage(message: net.minecraft.network.chat.Component_)
        set sleepingPos(arg0: BlockPos_)
        get descending(): boolean
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
        get lastHurtMob(): Internal.LivingEntity
        get addedToWorld(): boolean
        get soundSource(): Internal.SoundSource
        get lastDamageSource(): Internal.DamageSource
        set noActionTime(arg0: number)
        set movementSpeedAddition(speed: number)
        get pose(): Internal.Pose
        set lastAttackedTicks(arg0: number)
        get remainingPersistentAngerTime(): number
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
        get swimming(): boolean
        set sprinting(sprinting: boolean)
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
        get builder(): Internal.BaseLivingEntityBuilder<any>
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
        get animatableInstanceCache(): Internal.AnimatableInstanceCache
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
        get angry(): boolean
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
        get chestArmorItem(): Internal.ItemStack
        get typeId(): string
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
        get aggressive(): boolean
        set yya(arg0: number)
        set comboCount(arg0: number)
        set baby(arg0: boolean)
        get lastHurtByMob(): Internal.LivingEntity
        get inWaterOrBubble(): boolean
        get portalCooldown(): number
        get item(): Internal.ItemStack
        set slowFallingFlag(arg0: boolean)
        set carriedBlock(arg0: Internal.BlockState_)
        get ignoringBlockTriggers(): boolean
        get eyeInFluidType(): Internal.FluidType
        get steppingCarefully(): boolean
        /**
         * @deprecated
        */
        get lightLevelDependentMagicValue(): number
        get blockX(): number
        get fallFlying(): boolean
        get encodeId(): string
        set remainingPersistentAngerTime(arg0: number)
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
        set thisJumping(value: boolean)
        get boneResetTime(): number
        get controllingPassenger(): Internal.LivingEntity
        get scriptType(): Internal.ScriptType
        get forward(): Vec3d
        get comboCount(): number
        set feetArmorItem(item: Internal.ItemStack_)
        get id(): number
        get eyeY(): number
        get boundingBox(): Internal.AABB
        get inWaterOrRain(): boolean
        get affectedByPotions(): boolean
        get citadelEntityData(): Internal.CompoundTag
        get addEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>
        get currentAttack(): Internal.AttackHand
        get team(): Internal.Team
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
        get target(): Internal.LivingEntity
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
        get pickable(): boolean
        set YHeadRot(arg0: number)
        set jumping(arg0: boolean)
        get pickResult(): Internal.ItemStack
        get "mainHandItem()"(): Internal.ItemStack
        get absorptionAmount(): number
        get carriedBlock(): Internal.BlockState
        get randomY(): number
        get displayName(): net.minecraft.network.chat.Component
        get mobType(): Internal.MobType
        get persistentAngerTarget(): Internal.UUID
        get passengersRidingOffset(): number
        get frame(): boolean
        set legsArmorItem(item: Internal.ItemStack_)
        set noGravity(arg0: boolean)
        get useItemRemainingTicks(): number
        get indirectPassengers(): Internal.Iterable<any>
        get navigation(): Internal.PathNavigation
        get controlledByLocalInstance(): boolean
        get monster(): boolean
        get lastClimbablePos(): Internal.Optional<BlockPos>
        set id(entityId: number)
        get horizontalFacing(): Internal.Direction
        get type(): string
        set visualScale(arg0: number)
        get activeEffectsMap(): Internal.Map<Internal.MobEffect, Internal.MobEffectInstance>
        get magneticAttachmentFace(): Internal.Direction
        set persistentAngerTarget(arg0: Internal.UUID_)
        set motionX(x: number)
        get handSlots(): Internal.Iterable<Internal.ItemStack>
        get magneticDeltaY(): number
        get teamColor(): number
        set nbt(nbt: Internal.CompoundTag_)
        get restrictRadius(): number
        get registeredNavigation(): Internal.PathNavigation
        get invertedHealAndHarm(): boolean
        get freezing(): boolean
        set guaranteedDrop(arg0: Internal.EquipmentSlot_)
        set sharedFlagOnFire(arg0: boolean)
        readonly partEntities: any[];
    }
    type EnderManEntityJS_ = EnderManEntityJS;
    class ParticleTypes$1 extends Internal.ParticleType<T> {
        getClass(): typeof any;
        getDeserializer(): Internal.ParticleOptions$Deserializer<T>;
        hashCode(): number;
        toString(): string;
        codec(): Internal.Codec<T>;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        getOverrideLimiter(): boolean;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        get deserializer(): Internal.ParticleOptions$Deserializer<T>
        get overrideLimiter(): boolean
    }
    type ParticleTypes$1_ = ParticleTypes$1;
    class AttackDamageMobEffect extends Internal.MobEffect {
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
    type AttackDamageMobEffect_ = AttackDamageMobEffect;
    interface CarvingMask$Mask {
        abstract test(arg0: number, arg1: number, arg2: number): boolean;
        (arg0: number, arg1: number, arg2: number): boolean;
    }
    type CarvingMask$Mask_ = ((arg0: number, arg1: number, arg2: number)=> boolean) | CarvingMask$Mask;
    interface FluidPerTickRequirementJS extends Internal.RecipeJSBuilder {
        requireFluidPerTick(stack: Internal.FluidStackJS_, tank: string): Internal.RecipeJSBuilder;
        requireFluidTagPerTick(tag: string, amount: number, nbt: Internal.Map_<any, any>, tank: string): Internal.RecipeJSBuilder;
        produceFluidPerTick(stack: Internal.FluidStackJS_, tank: string): Internal.RecipeJSBuilder;
        requireFluidTagPerTick(tag: string, amount: number, thing: any): Internal.RecipeJSBuilder;
        abstract error(arg0: string, ...arg1: any[]): Internal.RecipeJSBuilder;
        abstract addRequirement(arg0: Internal.IRequirement_<any>): Internal.RecipeJSBuilder;
        requireFluidPerTick(stack: Internal.FluidStackJS_): Internal.RecipeJSBuilder;
        produceFluidPerTick(stack: Internal.FluidStackJS_): Internal.RecipeJSBuilder;
        requireFluidTagPerTick(tag: string, amount: number): Internal.RecipeJSBuilder;
    }
    type FluidPerTickRequirementJS_ = FluidPerTickRequirementJS;
    interface NarrationSupplier {
        abstract updateNarration(arg0: Internal.NarrationElementOutput_): void;
        (arg0: Internal.NarrationElementOutput): void;
    }
    type NarrationSupplier_ = ((arg0: Internal.NarrationElementOutput)=> void) | NarrationSupplier;
    class JsonObject extends Internal.JsonElement {
        constructor()
        deepCopy(): this;
        notify(): void;
        getAsLong(): number;
        isJsonArray(): boolean;
        add(arg0: string, arg1: Internal.JsonElement_): void;
        "addProperty(java.lang.String,java.lang.Character)"(arg0: string, arg1: string): void;
        addProperty(arg0: string, arg1: string): void;
        entrySet(): Internal.Set<Internal.Map$Entry<string, Internal.JsonElement>>;
        getAsJsonArray(arg0: string): Internal.JsonArray;
        /**
         * @deprecated
        */
        getAsCharacter(): string;
        getAsByte(): number;
        wait(): void;
        asMap(): Internal.Map<string, Internal.JsonElement>;
        getAsShort(): number;
        getClass(): typeof any;
        keySet(): Internal.Set<string>;
        getAsBigDecimal(): Internal.BigDecimal;
        get(arg0: string): Internal.JsonElement;
        "addProperty(java.lang.String,java.lang.Number)"(arg0: string, arg1: number): void;
        wait(arg0: number, arg1: number): void;
        getAsJsonPrimitive(): Internal.JsonPrimitive;
        "addProperty(java.lang.String,java.lang.String)"(arg0: string, arg1: string): void;
        getAsFloat(): number;
        getAsJsonObject(arg0: string): this;
        isJsonObject(): boolean;
        getAsJsonArray(): Internal.JsonArray;
        remove(arg0: string): Internal.JsonElement;
        addProperty(arg0: string, arg1: number): void;
        "addProperty(java.lang.String,java.lang.Boolean)"(arg0: string, arg1: boolean): void;
        getAsBoolean(): boolean;
        toString(): string;
        isJsonNull(): boolean;
        isJsonPrimitive(): boolean;
        getAsJsonPrimitive(arg0: string): Internal.JsonPrimitive;
        notifyAll(): void;
        getAsBigInteger(): Internal.BigInteger;
        getAsDouble(): number;
        addProperty(arg0: string, arg1: string): void;
        hashCode(): number;
        size(): number;
        getAsInt(): number;
        getAsString(): string;
        has(arg0: string): boolean;
        getAsNumber(): number;
        getAsJsonObject(): this;
        wait(arg0: number): void;
        addProperty(arg0: string, arg1: boolean): void;
        equals(arg0: any): boolean;
        getAsJsonNull(): Internal.JsonNull;
        get asLong(): number
        get jsonArray(): boolean
        /**
         * @deprecated
        */
        get asCharacter(): string
        get asByte(): number
        get asShort(): number
        get class(): typeof any
        get asBigDecimal(): Internal.BigDecimal
        get asJsonPrimitive(): Internal.JsonPrimitive
        get asFloat(): number
        get jsonObject(): boolean
        get asJsonArray(): Internal.JsonArray
        get asBoolean(): boolean
        get jsonNull(): boolean
        get jsonPrimitive(): boolean
        get asBigInteger(): Internal.BigInteger
        get asDouble(): number
        get asInt(): number
        get asString(): string
        get asNumber(): number
        get asJsonObject(): Internal.JsonObject
        get asJsonNull(): Internal.JsonNull
    }
    type JsonObject_ = JsonObject;
    class MASandFlowerBlock extends Internal.MAFlowerBlock {
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
        abstract getPlant(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.BlockState;
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
    type MASandFlowerBlock_ = MASandFlowerBlock;
    class FallingBlockEntity extends Internal.Entity implements Internal.FallingBlockEntityAccessor {
        constructor(arg0: Internal.EntityType_<Internal.FallingBlockEntity>, arg1: Internal.Level_)
        constructor(arg0: Internal.Level_, arg1: number, arg2: number, arg3: number, arg4: Internal.BlockState_)
        isInWall(): boolean;
        getAllSlots(): Internal.Iterable<Internal.ItemStack>;
        getUpVector(arg0: number): Vec3d;
        gameEvent(arg0: Internal.GameEvent_, arg1: Internal.Entity_): void;
        remove(arg0: Internal.Entity$RemovalReason_): void;
        getMagneticDeltaX(): number;
        isSuppressingBounce(): boolean;
        getBlockZ(): number;
        handler$zla000$toTag(tag: Internal.CompoundTag_, ci: Internal.CallbackInfoReturnable_<any>): void;
        setBlockState(arg0: Internal.BlockState_): void;
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
        ignoreExplosion(): boolean;
        canFreeze(): boolean;
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
        handler$cmk000$handleLand(ci: Internal.CallbackInfo_, block: Internal.Block_, blockPos2: BlockPos_, bl: boolean, bl2: boolean, d: number, blockState: Internal.BlockState_): void;
        getPortalCooldown(): number;
        handler$zmo000$playSound(event: Internal.SoundEvent_, f: number, f2: number, ci: Internal.CallbackInfo_): void;
        getItem(): Internal.ItemStack;
        causeFallDamage(arg0: number, arg1: number, arg2: Internal.DamageSource_): boolean;
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
        getY(arg0: number): number;
        canaryOnBlockCacheDeleted(): void;
        getBlock(): Internal.BlockContainerJS;
        getNbt(): Internal.CompoundTag;
        setInvisible(arg0: boolean): void;
        invalidateCaps(): void;
        getName(): net.minecraft.network.chat.Component;
        onGround(): boolean;
        getControlledVehicle(): Internal.Entity;
        isOnSameTeam(arg0: Internal.Entity_): boolean;
        attack(arg0: Internal.DamageSource_, arg1: number): boolean;
        onInsideBubbleColumn(arg0: boolean): void;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        tick(): void;
        getEyePosition(): Vec3d;
        setDimension(arg0: Internal.EntityDimensions_): void;
        getEyeHeight(): number;
        hasPassenger(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        getYaw(): number;
        handler$ebc000$thunderHit(pLevel: Internal.ServerLevel_, pLightning: Internal.LightningBolt_, ci: Internal.CallbackInfo_): void;
        setHurtsEntities(arg0: number, arg1: number): void;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        handler$ebc000$lavaHurt(ci: Internal.CallbackInfo_): void;
        hasPermissions(arg0: number): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        handler$egj000$isInsideWall(arg0: Internal.CallbackInfoReturnable_<any>, arg1: number, arg2: Internal.AABB_): void;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        setCustomNameVisible(arg0: boolean): void;
        isAlliedTo(arg0: Internal.Team_): boolean;
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
        addTag(arg0: string): boolean;
        playerTouch(arg0: Internal.Player_): void;
        getAddEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>;
        getEyeHeight(arg0: Internal.Pose_): number;
        setFallBlockingTime(): void;
        syncPacketPositionCodec(arg0: number, arg1: number, arg2: number): void;
        getTeam(): Internal.Team;
        shouldRenderAtSqrDistance(arg0: number): boolean;
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
        modify$blf000$supplementaries$concreteFix(original: BlockPos_): BlockPos;
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
        setIsInPowderSnow(arg0: boolean): void;
        thunderHit(arg0: Internal.ServerLevel_, arg1: Internal.LightningBolt_): void;
        doEnchantDamageEffects(arg0: Internal.LivingEntity_, arg1: Internal.Entity_): void;
        setCustomName(arg0: net.minecraft.network.chat.Component_): void;
        getSlot(arg0: number): Internal.SlotAccess;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        getTeamId(): string;
        stopSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        isUnderWater(): boolean;
        handler$ebc000$isAttackable(cir: Internal.CallbackInfoReturnable_<any>): void;
        getSwimHighSpeedSplashSound(): Internal.SoundEvent;
        stopRiding(): void;
        isCustomNameVisible(): boolean;
        isSupportedBy(arg0: BlockPos_): boolean;
        getPistonPushReaction(): Internal.PushReaction;
        getX(arg0: number): number;
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
        getStartPos(): BlockPos;
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
        canCollideWith(arg0: Internal.Entity_): boolean;
        handler$dke001$ac_tick(arg0: Internal.CallbackInfo_): void;
        neruina$isErrored(): boolean;
        setShiftKeyDown(arg0: boolean): void;
        getEyePosition(arg0: number): Vec3d;
        callOnBrokenAfterFall(arg0: Internal.Block_, arg1: BlockPos_): void;
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
        setStartPos(arg0: BlockPos_): void;
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
        getFeetBlockState(): Internal.BlockState;
        lavaHurt(): void;
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
        disableDrop(): void;
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
        canTrample(arg0: Internal.BlockState_, arg1: BlockPos_, arg2: number): boolean;
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
        mayInteract(arg0: Internal.Level_, arg1: BlockPos_): boolean;
        static collideBoundingBox(arg0: Internal.Entity_, arg1: Vec3d_, arg2: Internal.AABB_, arg3: Internal.Level_, arg4: Internal.List_<any>): Vec3d;
        setSprinting(arg0: boolean): void;
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
        "setPositionAndRotation(double,double,double,float,float)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        isInvisibleTo(arg0: Internal.Player_): boolean;
        setAirSupply(arg0: number): void;
        getRootVehicle(): Internal.Entity;
        getOnPos(): BlockPos;
        save(arg0: Internal.CompoundTag_): boolean;
        isNoGravity(): boolean;
        getStepHeight(): number;
        acceptsFailure(): boolean;
        setMagneticDeltaZ(arg0: number): void;
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
        hasFallBlocking(): boolean;
        getUuid(): Internal.UUID;
        handler$ebc000$lerpTo(x: number, y: number, z: number, yaw: number, pitch: number, posRotationIncrements: number, teleport: boolean, ci: Internal.CallbackInfo_): void;
        spawn(): void;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        teleportTo(arg0: Internal.ServerLevel_, arg1: number, arg2: number, arg3: number, arg4: Internal.Set_<Internal.RelativeMovement>, arg5: number, arg6: number): boolean;
        shouldShowName(): boolean;
        getArmorSlots(): Internal.Iterable<Internal.ItemStack>;
        setSilent(arg0: boolean): void;
        handler$dkf002$ac_tick(arg0: Internal.CallbackInfo_): void;
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
        lerpTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): void;
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
        move(arg0: Internal.MoverType_, arg1: Vec3d_): void;
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
        getDisplayName(): net.minecraft.network.chat.Component;
        shouldBlockExplode(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: number): boolean;
        hasGlowingTag(): boolean;
        handler$dke000$ac_isInWater(arg0: Internal.CallbackInfoReturnable_<any>): void;
        setPosition(block: Internal.BlockContainerJS_): void;
        handler$ebc000$dampensVibrations(cir: Internal.CallbackInfoReturnable_<any>): void;
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
        getEntityType(): Internal.EntityType<any>;
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
        getBlockState(): Internal.BlockState;
        "playSound(net.minecraft.sounds.SoundEvent,float,float)"(arg0: Internal.SoundEvent_, arg1: number, arg2: number): void;
        isPassenger(): boolean;
        hasPose(arg0: Internal.Pose_): boolean;
        checkDespawn(): void;
        isInvulnerableTo(arg0: Internal.DamageSource_): boolean;
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
        getDistanceSq(pos: BlockPos_): number;
        killedEntity(arg0: Internal.ServerLevel_, arg1: Internal.LivingEntity_): boolean;
        getClassification(arg0: boolean): Internal.MobCategory;
        isFreezing(): boolean;
        isFullyFrozen(): boolean;
        runCommand(command: string): number;
        setSharedFlagOnFire(arg0: boolean): void;
        static fall(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.FallingBlockEntity;
        get inWall(): boolean
        get allSlots(): Internal.Iterable<Internal.ItemStack>
        get magneticDeltaX(): number
        get suppressingBounce(): boolean
        get blockZ(): number
        set blockState(arg0: Internal.BlockState_)
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
        get startPos(): BlockPos
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
        set startPos(arg0: BlockPos_)
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
        set sprinting(arg0: boolean)
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
        get blockState(): Internal.BlockState
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
        get freezing(): boolean
        get fullyFrozen(): boolean
        set sharedFlagOnFire(arg0: boolean)
        time: number;
        dropItem: boolean;
        blockData: Internal.CompoundTag;
        blockState: Internal.BlockState;
        cancelDrop: boolean;
    }
    type FallingBlockEntity_ = FallingBlockEntity;
    class SuperByteBufferCache$Compartment <T> {
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
    }
    type SuperByteBufferCache$Compartment_<T> = SuperByteBufferCache$Compartment<T>;
    class PathfindingRenderer implements Internal.DebugRenderer$SimpleDebugRenderer {
        constructor()
        getClass(): typeof any;
        addPath(arg0: number, arg1: net.minecraft.world.level.pathfinder.Path_, arg2: number): void;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        static renderPath(arg0: Internal.PoseStack_, arg1: Internal.MultiBufferSource_, arg2: net.minecraft.world.level.pathfinder.Path_, arg3: number, arg4: boolean, arg5: boolean, arg6: number, arg7: number, arg8: number): void;
        hashCode(): number;
        render(arg0: Internal.PoseStack_, arg1: Internal.MultiBufferSource_, arg2: number, arg3: number, arg4: number): void;
        wait(): void;
        clear(): void;
        wait(arg0: number): void;
        static renderPathLine(arg0: Internal.PoseStack_, arg1: Internal.VertexConsumer_, arg2: net.minecraft.world.level.pathfinder.Path_, arg3: number, arg4: number, arg5: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
    }
    type PathfindingRenderer_ = PathfindingRenderer;
    class DirectVertexConsumer implements Internal.VertexConsumer {
        constructor(arg0: Internal.ByteBuffer_, arg1: Internal.VertexFormat_, arg2: number)
        uv2(arg0: number): Internal.VertexConsumer;
        getClass(): typeof any;
        endVertex(): void;
        color(arg0: number, arg1: number, arg2: number, arg3: number): Internal.VertexConsumer;
        color(arg0: number): Internal.VertexConsumer;
        hasOverlay(): boolean;
        normal(arg0: number, arg1: number, arg2: number): Internal.VertexConsumer;
        misc(arg0: Internal.VertexFormatElement_, ...arg1: number[]): Internal.VertexConsumer;
        "color(float,float,float,float)"(arg0: number, arg1: number, arg2: number, arg3: number): Internal.VertexConsumer;
        memSetZero(): void;
        putBulkData(arg0: Internal.PoseStack$Pose_, arg1: Internal.BakedQuad_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: boolean): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        overlayCoords(arg0: number): Internal.VertexConsumer;
        vertex(arg0: number, arg1: number, arg2: number): Internal.VertexConsumer;
        "putBulkData(com.mojang.blaze3d.vertex.PoseStack$Pose,net.minecraft.client.renderer.block.model.BakedQuad,float[],float,float,float,int[],int,boolean)"(arg0: Internal.PoseStack$Pose_, arg1: Internal.BakedQuad_, arg2: number[], arg3: number, arg4: number, arg5: number, arg6: number[], arg7: number, arg8: boolean): void;
        color(arg0: number, arg1: number, arg2: number, arg3: number): Internal.VertexConsumer;
        putBulkData(arg0: Internal.PoseStack$Pose_, arg1: Internal.BakedQuad_, arg2: number[], arg3: number, arg4: number, arg5: number, arg6: number[], arg7: number, arg8: boolean): void;
        putBulkData(arg0: Internal.PoseStack$Pose_, arg1: Internal.BakedQuad_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        "color(int,int,int,int)"(arg0: number, arg1: number, arg2: number, arg3: number): Internal.VertexConsumer;
        overlayCoords(arg0: number, arg1: number): Internal.VertexConsumer;
        applyBakedLighting(arg0: number, arg1: Internal.ByteBuffer_): number;
        toString(): string;
        notifyAll(): void;
        defaultColor(arg0: number, arg1: number, arg2: number, arg3: number): void;
        uv2(arg0: number, arg1: number): Internal.VertexConsumer;
        normal(arg0: Matrix3f_, arg1: number, arg2: number, arg3: number): Internal.VertexConsumer;
        hashCode(): number;
        "putBulkData(com.mojang.blaze3d.vertex.PoseStack$Pose,net.minecraft.client.renderer.block.model.BakedQuad,float,float,float,float,int,int,boolean)"(arg0: Internal.PoseStack$Pose_, arg1: Internal.BakedQuad_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: boolean): void;
        applyBakedNormals(arg0: Vec3f_, arg1: Internal.ByteBuffer_, arg2: Matrix3f_): void;
        vertex(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number): void;
        wait(): void;
        wait(arg0: number): void;
        vertex(arg0: Matrix4f_, arg1: number, arg2: number, arg3: number): Internal.VertexConsumer;
        split(arg0: number): this;
        uv(arg0: number, arg1: number): Internal.VertexConsumer;
        putBulkData(arg0: Internal.PoseStack$Pose_, arg1: Internal.BakedQuad_, arg2: number[], arg3: number, arg4: number, arg5: number, arg6: number, arg7: number[], arg8: number, arg9: boolean): void;
        equals(arg0: any): boolean;
        unsetDefaultColor(): void;
        get class(): typeof any
        readonly format: Internal.VertexFormat;
        readonly startPos: number;
    }
    type DirectVertexConsumer_ = DirectVertexConsumer;
    class ConfigValues$Feature extends Internal.Enum<Internal.ConfigValues$Feature> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        "compareTo(com.unascribed.fabrication.support.ConfigValues$Feature)"(arg0: Internal.ConfigValues$Feature_): number;
        static parse(s: string): Internal.ConfigValues$Feature;
        toString(): string;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.ConfigValues$Feature>>;
        notifyAll(): void;
        static valueOf(name: string): Internal.ConfigValues$Feature;
        compareTo(arg0: Internal.ConfigValues$Feature_): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        getDeclaringClass(): typeof Internal.ConfigValues$Feature;
        resolve(def: boolean): boolean;
        name(): string;
        hashCode(): number;
        ordinal(): number;
        wait(): void;
        resolveSemantically(def: boolean): Internal.ConfigValues$ResolvedFeature;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        static values(): Internal.ConfigValues$Feature[];
        get class(): typeof any
        get declaringClass(): typeof Internal.ConfigValues$Feature
        static readonly UNSET: (Internal.ConfigValues$Feature) & (Internal.ConfigValues$Feature);
        static readonly vals_true_false: string[];
        static readonly TRUE: (Internal.ConfigValues$Feature) & (Internal.ConfigValues$Feature);
        static readonly BANNED: (Internal.ConfigValues$Feature) & (Internal.ConfigValues$Feature);
        static readonly FALSE: (Internal.ConfigValues$Feature) & (Internal.ConfigValues$Feature);
        static readonly vals_unset_true_false_banned: string[];
        static readonly vals_unset_true_false: string[];
    }
    type ConfigValues$Feature_ = "banned" | "unset" | ConfigValues$Feature | "false" | "true";
    interface ISubtypeManager {
        getSubtypeInfo(arg0: Internal.ItemStack_, arg1: Internal.UidContext_): string;
        abstract hasSubtypes<T, B>(arg0: Internal.IIngredientTypeWithSubtypes_<B, T>, arg1: T): boolean;
        abstract getSubtypeInfo<T>(arg0: Internal.IIngredientTypeWithSubtypes_<any, T>, arg1: T, arg2: Internal.UidContext_): string;
    }
    type ISubtypeManager_ = ISubtypeManager;
    class ExpressionStatement extends Internal.Statement {
        constructor(expression: Internal.Expression_)
        getClass(): typeof any;
        static make(expr: Internal.Expression_): Internal.Statement;
        getEndOffset(): number;
        toString(): string;
        static convert(context: icyllis.arc3d.compiler.Context_, expr: Internal.Expression_): Internal.Statement;
        getKind(): Internal.Node$StatementKind;
        notifyAll(): void;
        isEmpty(): boolean;
        accept(visitor: Internal.TreeVisitor_): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getStartOffset(): number;
        hashCode(): number;
        getExpression(): Internal.Expression;
        wait(): void;
        setExpression(expression: Internal.Expression_): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        get endOffset(): number
        get kind(): Internal.Node$StatementKind
        get empty(): boolean
        get startOffset(): number
        get expression(): Internal.Expression
        set expression(expression: Internal.Expression_)
    }
    type ExpressionStatement_ = ExpressionStatement;
    class OutlineBufferSource implements Internal.OutlineBufferSourceAccessor, Internal.MultiBufferSource {
        constructor(arg0: Internal.MultiBufferSource$BufferSource_)
        getClass(): typeof any;
        static immediateWithBuffers(layerBuffers: Internal.Map_<any, any>, fallbackBuffer: Internal.BufferBuilder_): Internal.MultiBufferSource$BufferSource;
        static immediate(arg0: Internal.BufferBuilder_): Internal.MultiBufferSource$BufferSource;
        toString(): string;
        notifyAll(): void;
        getBuffer(arg0: Internal.RenderType_): Internal.VertexConsumer;
        getOutlineBufferSource(): Internal.MultiBufferSource$BufferSource;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        endOutlineBatch(): void;
        equals(arg0: any): boolean;
        setColor(arg0: number, arg1: number, arg2: number, arg3: number): void;
        get class(): typeof any
        get outlineBufferSource(): Internal.MultiBufferSource$BufferSource
    }
    type OutlineBufferSource_ = OutlineBufferSource;
    abstract class ActionMode {
        constructor()
        getClass(): typeof any;
        getTag(): any;
        setTag(tag: any): void;
        setType(type: number): void;
        getTitleOptionalHint(): boolean;
        invalidateContentRect(): void;
        abstract setTitle(arg0: Internal.CharSequence_): void;
        abstract getSubtitle(): Internal.CharSequence;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        abstract getCustomView(): icyllis.modernui.view.View;
        getType(): number;
        abstract finish(): void;
        isTitleOptional(): boolean;
        hide(duration: number): void;
        abstract getTitle(): Internal.CharSequence;
        isUiFocusable(): boolean;
        setTitleOptionalHint(titleOptional: boolean): void;
        toString(): string;
        notifyAll(): void;
        abstract invalidate(): void;
        abstract setSubtitle(arg0: Internal.CharSequence_): void;
        abstract setCustomView(arg0: icyllis.modernui.view.View_): void;
        hashCode(): number;
        abstract getMenu(): icyllis.modernui.view.Menu;
        wait(): void;
        wait(arg0: number): void;
        onWindowFocusChanged(hasWindowFocus: boolean): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        get tag(): any
        set tag(tag: any)
        set type(type: number)
        get titleOptionalHint(): boolean
        set title(arg0: Internal.CharSequence_)
        get subtitle(): Internal.CharSequence
        get customView(): icyllis.modernui.view.View
        get type(): number
        get titleOptional(): boolean
        get title(): Internal.CharSequence
        get uiFocusable(): boolean
        set titleOptionalHint(titleOptional: boolean)
        set subtitle(arg0: Internal.CharSequence_)
        set customView(arg0: icyllis.modernui.view.View_)
        get menu(): icyllis.modernui.view.Menu
        static readonly DEFAULT_HIDE_DURATION: (-1) & (number);
        static readonly TYPE_FLOATING: (1) & (number);
        static readonly TYPE_PRIMARY: (0) & (number);
    }
    type ActionMode_ = ActionMode;
    abstract class AbstractCollection <E> implements Internal.Collection<E> {
        getClass(): typeof any;
        add(arg0: E): boolean;
        parallelStream(): Internal.Stream<E>;
        isEmpty(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        retainAll(arg0: Internal.Collection_<any>): boolean;
        containsAll(arg0: Internal.Collection_<any>): boolean;
        toArray<T>(arg0: Internal.IntFunction_<T[]>): T[];
        contains(arg0: any): boolean;
        addAll(arg0: Internal.Collection_<E>): boolean;
        toString(): string;
        forEach(arg0: Internal.Consumer_<E>): void;
        notifyAll(): void;
        toArray<T>(arg0: T[]): T[];
        "toArray(java.lang.Object[])"<T>(arg0: T[]): T[];
        remove(arg0: any): boolean;
        "toArray(java.util.function.IntFunction)"<T>(arg0: Internal.IntFunction_<T[]>): T[];
        toArray(): any[];
        abstract iterator(): Internal.Iterator<E>;
        abstract size(): number;
        abstract hashCode(): number;
        stream(): Internal.Stream<E>;
        removeAll(arg0: Internal.Collection_<any>): boolean;
        wait(): void;
        clear(): void;
        removeIf(arg0: Internal.Predicate_<E>): boolean;
        wait(arg0: number): void;
        spliterator(): Internal.Spliterator<E>;
        abstract equals(arg0: any): boolean;
        get class(): typeof any
        get empty(): boolean
    }
    type AbstractCollection_<E> = AbstractCollection<E>;
    interface BlockGetter extends Internal.LevelHeightAccessor, Internal.IForgeBlockGetter {
        getMinSection(): number;
        abstract getBlockState(arg0: BlockPos_): Internal.BlockState;
        clipWithInteractionOverride(arg0: Vec3d_, arg1: Vec3d_, arg2: BlockPos_, arg3: Internal.VoxelShape_, arg4: Internal.BlockState_): Internal.BlockHitResult;
        getSectionIndex(arg0: number): number;
        getMaxSection(): number;
        getMaxBuildHeight(): number;
        getLightEmission(arg0: BlockPos_): number;
        getBlockFloorHeight(arg0: BlockPos_): number;
        getSectionYFromSectionIndex(arg0: number): number;
        create(arg0: number, arg1: number): Internal.LevelHeightAccessor;
        "isOutsideBuildHeight(int)"(arg0: number): boolean;
        clip(arg0: Internal.ClipContext_): Internal.BlockHitResult;
        getBlockFloorHeight(arg0: Internal.VoxelShape_, arg1: Internal.Supplier_<Internal.VoxelShape>): number;
        abstract getBlockEntity(arg0: BlockPos_): Internal.BlockEntity;
        abstract getHeight(): number;
        getBlockEntity<T extends Internal.BlockEntity>(arg0: BlockPos_, arg1: Internal.BlockEntityType_<T>): Internal.Optional<T>;
        isOutsideBuildHeight(arg0: BlockPos_): boolean;
        getModelDataManager(): Internal.ModelDataManager;
        isOutsideBuildHeight(arg0: number): boolean;
        isBlockInLine(arg0: Internal.ClipBlockStateContext_): Internal.BlockHitResult;
        abstract getFluidState(arg0: BlockPos_): Internal.FluidState;
        "isOutsideBuildHeight(net.minecraft.core.BlockPos)"(arg0: BlockPos_): boolean;
        getBlockStates(arg0: Internal.AABB_): Internal.Stream<Internal.BlockState>;
        getExistingBlockEntity(arg0: BlockPos_): Internal.BlockEntity;
        abstract getMinBuildHeight(): number;
        getSectionsCount(): number;
        getMaxLightLevel(): number;
        getSectionIndexFromSectionY(arg0: number): number;
        traverseBlocks<T, C>(arg0: Vec3d_, arg1: Vec3d_, arg2: C, arg3: Internal.BiFunction_<C, BlockPos, T>, arg4: Internal.Function_<C, T>): T;
        get minSection(): number
        get maxSection(): number
        get maxBuildHeight(): number
        get height(): number
        get modelDataManager(): Internal.ModelDataManager
        get minBuildHeight(): number
        get sectionsCount(): number
        get maxLightLevel(): number
    }
    type BlockGetter_ = BlockGetter;
    class NoticeBoardBlock extends Internal.Block implements Internal.EntityBlock {
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
        neighborChanged(state: Internal.BlockState_, world: Internal.Level_, pos: BlockPos_, pBlock: Internal.Block_, pFromPos: BlockPos_, pIsMoving: boolean): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        getMenuProvider(state: Internal.BlockState_, worldIn: Internal.Level_, pos: BlockPos_): Internal.MenuProvider;
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
        use(state: Internal.BlockState_, worldIn: Internal.Level_, pos: BlockPos_, player: Internal.Player_, handIn: Internal.InteractionHand_, hit: Internal.BlockHitResult_): Internal.InteractionResult;
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
        updateShape(state: Internal.BlockState_, facing: Internal.Direction_, facingState: Internal.BlockState_, level: Internal.LevelAccessor_, currentPos: BlockPos_, facingPos: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        rotate(state: Internal.BlockState_, rot: Internal.Rotation_): Internal.BlockState;
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
        onRemove(state: Internal.BlockState_, level: Internal.Level_, pos: BlockPos_, newState: Internal.BlockState_, isMoving: boolean): void;
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
        setPlacedBy(worldIn: Internal.Level_, pos: BlockPos_, state: Internal.BlockState_, placer: Internal.LivingEntity_, stack: Internal.ItemStack_): void;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        hasAnalogOutputSignal(state: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        getAnalogOutputSignal(blockState: Internal.BlockState_, world: Internal.Level_, pos: BlockPos_): number;
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
        mirror(state: Internal.BlockState_, mirrorIn: Internal.Mirror_): Internal.BlockState;
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
        static readonly HAS_BOOK: (Internal.BooleanProperty) & (Internal.BooleanProperty);
        static readonly FACING: (Internal.DirectionProperty) & (Internal.DirectionProperty);
        static readonly CULLED: (Internal.BooleanProperty) & (Internal.BooleanProperty);
        static readonly POWERED: (Internal.BooleanProperty) & (Internal.BooleanProperty);
    }
    type NoticeBoardBlock_ = NoticeBoardBlock;
    interface UmvuthanaMask {
    }
    type UmvuthanaMask_ = UmvuthanaMask;
    interface ComponentListener extends Internal.EventListener {
        abstract componentShown(arg0: Internal.ComponentEvent_): void;
        abstract componentHidden(arg0: Internal.ComponentEvent_): void;
        abstract componentResized(arg0: Internal.ComponentEvent_): void;
        abstract componentMoved(arg0: Internal.ComponentEvent_): void;
    }
    type ComponentListener_ = ComponentListener;
    class GuardianJSBuilder extends Internal.PathfinderMobBuilder<Internal.GuardianEntityJS> {
        constructor(i: ResourceLocation_)
        /**
         * Sets whether the entity should despawn in peaceful difficulty.
         * 
         * @param shouldDespawnInPeaceful A boolean indicating whether the entity should despawn in peaceful difficulty.
         * 
         * Example usage:
         * ```javascript
         * mobBuilder.shouldDespawnInPeaceful(true);
         * ```
        */
        shouldDespawnInPeaceful(shouldDespawnInPeaceful: boolean): Internal.MobBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets a function to determine whether the entity is currently flapping.
         * The provided Function accepts a {@link LivingEntity} parameter,
         * representing the entity whose flapping status is being determined.
         * It returns a Boolean indicating whether the entity is flapping.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.isFlapping(entity => {
         *     // Define logic to determine whether the entity is currently flapping
         *     // Use information about the LivingEntity provided by the context.
         *     return // Some Boolean value indicating whether the entity is flapping;
         * });
         * ```
        */
        isFlapping(b: Internal.Function_<Internal.LivingEntity, any>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets a callback function to be executed when the entity performs a flap action.
         * The provided Consumer accepts a {@link LivingEntity} parameter,
         * representing the entity that is flapping.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onFlap(entity => {
         *     // Define custom logic for handling the entity's flap action
         *     // Use information about the LivingEntity provided by the context.
         * });
         * ```
        */
        onFlap(consumer: Internal.Consumer_<Internal.LivingEntity>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets a callback function to be executed when the living entity falls and takes damage.
         * The provided Consumer accepts a {@link ContextUtils.EntityFallDamageContext} parameter,
         * representing the context of the entity falling and taking fall damage.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onLivingFall(context => {
         *     // Define custom logic for handling when the living entity falls and takes damage
         *     // Use information about the EntityFallDamageContext provided by the context.
         * });
         * ```
        */
        onLivingFall(c: Internal.Consumer_<Internal.ContextUtils$EntityFallDamageContext>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * @param onHurtTarget A Consumer to execute when the mob attacks its target
         * 
         * Example usage:
         * ```javascript
         * mobBuilder.onHurtTarget(context => {
         *     const {entity, targetEntity} = context
         *     //Execute code when the target is hurt
         * });
         * ```
        */
        onHurtTarget(onHurtTarget: Internal.Consumer_<Internal.ContextUtils$LineOfSightContext>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets the update interval for the entity.
         * Defaults to 1 tick.
         * Example usage:
         * ```javascript
         * entityBuilder.updateInterval(20); // Set the update interval to 20 ticks
         * ```
        */
        updateInterval(i: number): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets whether the entity can jump.
         * 
         * @param canJump A boolean indicating whether the entity can jump.
         * 
         * Example usage:
         * ```javascript
         * mobBuilder.canJump(true);
         * ```
        */
        canJump(canJump: boolean): Internal.MobBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets a callback function to be executed when the entity enters combat.
         * The provided Consumer accepts a {@link LivingEntity} parameter,
         * representing the entity that has entered combat.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onEnterCombat(entity => {
         *     // Define custom logic for handling the entity entering combat
         *     // Use information about the LivingEntity provided by the context.
         * });
         * ```
        */
        onEnterCombat(c: Internal.Consumer_<Internal.LivingEntity>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets a callback function to be executed when the entity is hit by thunder.
         * The provided Consumer accepts a {@link ContextUtils.ThunderHitContext} parameter,
         * representing the context of the entity being hit by thunder.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.thunderHit(context => {
         *     // Define custom logic for handling the entity being hit by thunder
         *     // Use information about the ThunderHitContext provided by the context.
         * });
         * ```
        */
        thunderHit(consumer: Internal.Consumer_<Internal.ContextUtils$ThunderHitContext>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets a callback function to be executed when the entity receives healing.
         * The provided Consumer accepts a {@link ContextUtils.EntityHealContext} parameter,
         * representing the context of the entity receiving healing.
         * Very similar to {@link ForgeEventFactory.onLivingHeal}
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onLivingHeal(context => {
         *     // Define custom logic for handling when the entity receives healing
         *     // Use information about the EntityHealContext provided by the context.
         * });
         * ```
        */
        onLivingHeal(callback: Internal.Consumer_<Internal.ContextUtils$EntityHealContext>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets a callback function to be executed when the entity's air supply increases.
         * The provided Consumer accepts a {@link LivingEntity} parameter,
         * representing the entity whose air supply is being increased.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onIncreaseAirSupply(entity => {
         *     // Define custom logic for handling when the entity's air supply increases
         *     // Use information about the LivingEntity provided by the context.
         * });
         * ```
        */
        onIncreaseAirSupply(onIncreaseAirSupply: Internal.Consumer_<Internal.LivingEntity>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets a function to determine if the entity can be leashed.
         * 
         * @param canBeLeashed A Function accepting a ContextUtils.PlayerEntityContext parameter
         * 
         * Example usage:
         * ```javascript
         * mobBuilder.canBeLeashed(context => {
         *     return true // Return true if the entity can be leashed, false otherwise.
         * });
         * ```
        */
        canBeLeashed(canBeLeashed: Internal.Function_<Internal.ContextUtils$PlayerEntityContext, any>): Internal.MobBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets the death sound for the entity.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.setDeathSound("minecraft:entity.generic.death");
         * ```
        */
        setDeathSound(sound: any): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets a callback function to be executed when the entity dies.
         * The provided Consumer accepts a {@link ContextUtils.DeathContext} parameter,
         * representing the context of the entity's death.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onDeath(context => {
         *     // Define custom logic for handling the entity's death
         *     // Use information about the DeathContext provided by the context.
         * });
         * ```
        */
        onDeath(consumer: Internal.Consumer_<Internal.ContextUtils$DeathContext>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets the sound to play when the entity is ambient using either a string representation or a ResourceLocation object.
         * 
         * Example usage:
         * ```javascript
         * mobBuilder.setAmbientSound("minecraft:entity.zombie.ambient");
         * ```
        */
        setAmbientSound(ambientSound: any): Internal.MobBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets a callback function to be executed when the entity is hurt by lava.
         * The provided Consumer accepts a {@link LivingEntity} parameter,
         * representing the entity that is affected by lava.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.lavaHurt(entity => {
         *     // Define custom logic for handling the entity being hurt by lava
         *     // Use information about the LivingEntity provided by the context.
         * });
         * ```
        */
        lavaHurt(consumer: Internal.Consumer_<Internal.LivingEntity>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets the jump boost power for the entity.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.jumpBoostPower(entity => {
         *     return //some float value
         * });
         * ```
        */
        jumpBoostPower(jumpBoostPower: Internal.Function_<Internal.LivingEntity, any>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets a callback function to be executed when the entity automatically attacks on touch.
         * The provided Consumer accepts a {@link ContextUtils.AutoAttackContext} parameter,
         * representing the context of the auto-attack when the entity touches another entity.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.doAutoAttackOnTouch(context => {
         *     // Define custom logic for handling when the entity automatically attacks on touch
         *     // Use information about the AutoAttackContext provided by the context.
         * });
         * ```
        */
        doAutoAttackOnTouch(doAutoAttackOnTouch: Internal.Consumer_<Internal.ContextUtils$AutoAttackContext>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets a function to determine the visibility percentage of the entity.
         * The provided Function accepts a {@link ContextUtils.VisualContext} parameter,
         * representing both the entity whose visibility percentage is being determined
         * and the the builder entity who is being looked at.
         * It returns a Double representing the visibility percentage.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.visibilityPercent(context => {
         *     // Define logic to calculate and return the visibility percentage for the targetEntity
         *     // Use information about the Entity provided by the context.
         *     return // Some Double value representing the visibility percentage;
         * });
         * ```
        */
        visibilityPercent(visibilityPercent: Internal.Function_<Internal.ContextUtils$VisualContext, any>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets a callback function to be executed when the entity is removed on the client side.
         * The provided Consumer accepts a {@link LivingEntity} parameter,
         * representing the entity that is being removed on the client side.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onClientRemoval(entity => {
         *     // Define custom logic for handling the removal of the entity on the client side
         *     // Use information about the LivingEntity provided by the context.
         * });
         * ```
        */
        onClientRemoval(consumer: Internal.Consumer_<Internal.LivingEntity>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets a callback function to be executed when the entity stops sleeping.
         * The provided Consumer accepts a {@link LivingEntity} parameter,
         * representing the entity that has stopped sleeping.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onStopSleeping(entity => {
         *     // Define custom logic for handling the entity stopping sleeping
         *     // Use information about the LivingEntity provided by the context.
         * });
         * ```
        */
        onStopSleeping(runnable: Internal.Consumer_<Internal.LivingEntity>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets a callback function to be executed when an effect is added to the entity.
         * The provided Consumer accepts a {@link ContextUtils.OnEffectContext} parameter,
         * representing the context of the effect being added to the entity.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onEffectAdded(context => {
         *     // Define custom logic for handling when an effect is added to the entity
         *     // Use information about the OnEffectContext provided by the context.
         * });
         * ```
        */
        onEffectAdded(consumer: Internal.Consumer_<Internal.ContextUtils$OnEffectContext>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets a predicate function to determine whether the entity is currently glowing.
         * The provided Predicate accepts a {@link LivingEntity} parameter,
         * representing the entity that may be checked for its glowing state.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.isCurrentlyGlowing(entity => {
         *     // Define the conditions to check if the entity is currently glowing
         *     // Use information about the LivingEntity provided by the context.
         *     const isGlowing = // Some boolean condition to check if the entity is glowing;
         *     return isGlowing;
         * });
         * ```
        */
        isCurrentlyGlowing(predicate: Internal.Function_<Internal.LivingEntity, any>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets the display name for this object, e.g. `Stone`.
         * 
         * This will be overridden by a lang file if it exists.
        */
        displayName(name: net.minecraft.network.chat.Component_): Internal.BuilderBase<Internal.EntityType<T>>;
        /**
         * Sets the sound resource location for the entity's eating sound using either a string representation or a ResourceLocation object.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.eatingSound("minecraft:entity.zombie.ambient");
         * ```
        */
        eatingSound(sound: any): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Defines logic to render the entity.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.render(context => {
         *     // Define logic to render the entity
         *     if (context.entity.isBaby()) {
         *         context.poseStack.scale(0.5, 0.5, 0.5);
         *     }
         * });
         * ```
        */
        render(render: Internal.Consumer_<Internal.ContextUtils$RenderContext<Internal.GuardianEntityJS>>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Boolean determining if the entity will turn sideways on death.
         * Defaults to true.
         * Example usage:
         * ```javascript
         * entityBuilder.defaultDeathPose(false);
         * ```
        */
        defaultDeathPose(defaultDeathPose: boolean): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets the interval in ticks between ambient sounds for the mob entity.
         * 
         * @param ambientSoundInterval The interval in ticks between ambient sounds.
         * Defaults to 120.
         * 
         * Example usage:
         * ```javascript
         * mobBuilder.ambientSoundInterval(100);
         * ```
        */
        ambientSoundInterval(ambientSoundInterval: number): Internal.MobBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets the follow leash speed for the entity.
         * 
         * @param speed The follow leash speed.
         * 
         * Example usage:
         * ```javascript
         * mobBuilder.followLeashSpeed(1.5);
         * ```
        */
        followLeashSpeed(speed: number): Internal.PathfinderMobBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets a function to determine the experience reward for killing the entity.
         * The provided Function accepts a {@link LivingEntity} parameter,
         * representing the entity whose experience reward is being determined.
         * It returns an Integer representing the experience reward.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.experienceReward(killedEntity => {
         *     // Define logic to calculate and return the experience reward for the killedEntity
         *     // Use information about the LivingEntity provided by the context.
         *     return // Some Integer value representing the experience reward;
         * });
         * ```
        */
        experienceReward(experienceReward: Internal.Function_<Internal.LivingEntity, any>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        transformObject(obj: Internal.EntityType_<T>): Internal.EntityType<T>;
        /**
         * Sets whether the entity is pushable.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.isPushable(true);
         * ```
        */
        isPushable(b: boolean): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets a function to determine the PathNavigation of the entity.
         * 
         * @param createNavigation A Function accepting an EntityLevelContext parameter
         * 
         * Example usage:
         * ```javascript
         * mobBuilder.createNavigation(context => {
         *     const {entity, level} = context
         *     return EntityJSUtils.createWallClimberNavigation(entity, level) // Return some path navigation
         * });
         * ```
        */
        createNavigation(createNavigation: Internal.Function_<Internal.ContextUtils$EntityLevelContext, any>): Internal.MobBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets a predicate function to determine whether the entity should drop experience upon death.
         * The provided Predicate accepts a {@link LivingEntity} parameter,
         * representing the entity whose experience drop is being determined.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.shouldDropExperience(entity => {
         *     // Define conditions to check if the entity should drop experience upon death
         *     // Use information about the LivingEntity provided by the context.
         *     return // Some boolean condition indicating if the entity should drop experience;
         * });
         * ```
        */
        shouldDropExperience(p: Internal.Function_<Internal.LivingEntity, any>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets the callback function to be executed when the entity ticks while leashed.
         * 
         * @param consumer A Consumer accepting a {@link ContextUtils.PlayerEntityContext} parameter,
         *                 defining the behavior to be executed when the entity ticks while leashed.
         * 
         * Example usage:
         * ```javascript
         * mobBuilder.tickLeash(context => {
         *     // Custom logic to handle the entity's behavior while leashed.
         *     // Access information about the player and entity using the provided context.
         * });
         * ```
        */
        tickLeash(consumer: Internal.Consumer_<Internal.ContextUtils$PlayerEntityContext>): Internal.MobBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets a function to determine the model resource for the entity.
         * The provided Function accepts a parameter of type T (the entity),
         * allowing changing the model based on information about the entity.
         * The default behavior returns <namespace>:geo/entity/<path>.geo.json.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.modelResource(entity => {
         *     // Define logic to determine the model resource for the entity
         *     // Use information about the entity provided by the context.
         *     return "kubejs:geo/entity/wyrm.geo.json" // Some ResourceLocation representing the model resource;
         * });
         * ```
        */
        modelResource(function_: Internal.Function_<Internal.GuardianEntityJS, any>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets whether persistence is required for the entity.
         * 
         * @param isPersistenceRequired A boolean indicating whether persistence is required.
         * 
         * Example usage:
         * ```javascript
         * mobBuilder.isPersistenceRequired(true);
         * ```
        */
        isPersistenceRequired(isPersistenceRequired: boolean): Internal.MobBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets the water slowdown factor for the entity. Defaults to 0.8.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.setWaterSlowDown(0.6);
         * ```
        */
        setWaterSlowDown(slowdownFactor: number): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets a consumer to handle the interaction with the entity.
         * The provided Consumer accepts a {@link ContextUtils.MobInteractContext} parameter,
         * representing the context of the interaction
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onInteract(context => {
         *     // Define custom logic for the interaction with the entity
         *     // Use information about the MobInteractContext provided by the context.
         *     if (context.player.isShiftKeyDown()) return
         *     context.player.startRiding(context.entity);
         * });
         * ```
        */
        onInteract(c: Internal.Consumer_<Internal.ContextUtils$MobInteractContext>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets the mob category for the entity.
         * Available options: 'monster', 'creature', 'ambient', 'water_creature', 'misc'.
         * Defaults to 'misc'.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.mobCategory('monster');
         * ```
        */
        mobCategory(category: string): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Combined method of formattedDisplayName().displayName(name).
        */
        formattedDisplayName(name: net.minecraft.network.chat.Component_): Internal.BuilderBase<Internal.EntityType<T>>;
        generateLang(lang: Internal.LangEventJS_): void;
        /**
         * Sets whether to reposition the entity after loading.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.repositionEntityAfterLoad(true);
         * ```
        */
        repositionEntityAfterLoad(customRepositionEntityAfterLoad: boolean): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Consumer determining travel logic for the entity.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.travel(context => {
         *     const {entity, vec3} = context
         *     // Use the vec3 and entity to determine the travel logic of the entity
         * });
         * ```
        */
        travel(travel: Internal.Consumer_<Internal.ContextUtils$Vec3Context>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        getClass(): typeof any;
        /**
         * Sets a function to determine the texture resource for the entity.
         * The provided Function accepts a parameter of type T (the entity),
         * allowing changing the texture based on information about the entity.
         * The default behavior returns <namespace>:textures/entity/<path>.png.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.textureResource(entity => {
         *     // Define logic to determine the texture resource for the entity
         *     // Use information about the entity provided by the context.
         *     return "kubejs:textures/entity/wyrm.png" // Some ResourceLocation representing the texture resource;
         * });
         * ```
        */
        textureResource(function_: Internal.Function_<Internal.GuardianEntityJS, any>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets the scale of the model.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.modelSize(2,2);
         * ```
        */
        modelSize(scaleHeight: number, scaleWidth: number): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets a predicate to determine whether the entity is affected by fluids.
         * The provided Predicate accepts a {@link LivingEntity} parameter,
         * representing the entity whose interaction with fluids is being determined.
         * It returns a Boolean indicating whether the entity is affected by fluids.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.isAffectedByFluids(entity => {
         *     // Define logic to determine whether the entity is affected by fluids
         *     // Use information about the LivingEntity provided by the context.
         *     return // Some Boolean value indicating whether the entity is affected by fluids;
         * });
         * ```
        */
        isAffectedByFluids(b: Internal.Function_<Internal.LivingEntity, any>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets a callback function to be executed when the entity is blocked by a shield.
         * The provided Consumer accepts a {@link ContextUtils.LivingEntityContext} parameter,
         * representing the entity that is blocked by a shield.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onBlockedByShield(context => {
         *     // Define custom logic for handling when the entity is blocked by a shield
         *     // Use information about the LivingEntity provided by the context.
         * });
         * ```
        */
        onBlockedByShield(onBlockedByShield: Internal.Consumer_<Internal.ContextUtils$LivingEntityContext>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets a predicate function to determine whether the entity has line of sight to another entity.
         * The provided Function accepts a {@link LineOfSightContext} parameter,
         * representing the entity to check for line of sight.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.hasLineOfSight(context => {
         *     // Define conditions to check if the entity has line of sight to the target entity
         *     // Use information about the Entity provided by the context.
         *     return // Some boolean condition indicating if there is line of sight;
         * });
         * ```
        */
        hasLineOfSight(f: Internal.Function_<Internal.ContextUtils$LineOfSightContext, any>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets a consumer to handle custom lerping logic for the living entity.
         * 
         * @param lerpTo The consumer to handle the custom lerping logic.
         * 
         * The consumer should take a LerpToContext as a parameter, providing information about the lerping operation, including the target position, yaw, pitch, increment count, teleport flag, and the entity itself.
         * 
         * Example usage:
         * ```javascript
         * baseLivingEntityBuilder.lerpTo(context => {
         *     // Custom lerping logic for the living entity
         *     const { x, y, z, yaw, pitch, posRotationIncrements, teleport, entity } = context;
         *     // Perform custom lerping operations using the provided context
         *     // For example, you can smoothly move the entity from its current position to the target position
         *     entity.setPositionAndRotation(x, y, z, yaw, pitch);
         * });
         * ```
        */
        lerpTo(lerpTo: Internal.Consumer_<Internal.ContextUtils$LerpToContext>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets a callback function to be executed when the entity performs an eating action.
         * 
         * @param ate A Consumer accepting a LivingEntity parameter,
         *            defining the behavior to be executed when the entity eats.
         * 
         * Example usage:
         * ```javascript
         * mobBuilder.ate(entity => {
         *     // Custom logic to handle the entity's eating action
         *     // Access information about the entity using the provided parameter.
         * });
         * ```
        */
        ate(ate: Internal.Consumer_<Internal.LivingEntity>): Internal.MobBuilder<Internal.GuardianEntityJS>;
        /**
         * @param positionRider A consumer determining the position of rider/riders.
         * 
         *     Example usage:
         *     ```javascript
         *     entityBuilder.positionRider(context => {
         *         const {entity, passenger, moveFunction} = context
         *     });
         *     ```
        */
        positionRider(builderConsumer: Internal.Consumer_<Internal.ContextUtils$PositionRiderContext>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Function determining if the entity may collide with another entity
         * using the ContextUtils.CollidingEntityContext which has this entity and the
         * one colliding with this entity.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.canCollideWith(context => {
         *     return true //Some Boolean value determining whether the entity may collide with another
         * });
         * ```
        */
        canCollideWith(canCollideWith: Internal.Function_<Internal.ContextUtils$CollidingEntityContext, any>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets a predicate function to determine whether the entity can be affected by an effect.
         * The provided Predicate accepts a {@link ContextUtils.OnEffectContext} parameter,
         * representing the context of the effect that may affect the entity.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.canBeAffected(context => {
         *     // Define conditions to check if the entity can be affected by the effect
         *     // Use information about the OnEffectContext provided by the context.
         *     return // Some boolean condition indicating if the entity can be affected by an effect;
         * });
         * ```
        */
        canBeAffected(predicate: Internal.Function_<Internal.ContextUtils$OnEffectContext, any>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets the list of block names to which the entity is immune.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.immuneTo("minecraft:stone", "minecraft:dirt");
         * ```
        */
        immuneTo(...blockNames: string[]): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets a function to determine the next step distance for the entity.
         * The provided Function accepts a {@link Entity} parameter,
         * representing the entity whose next step distance is being determined.
         * It returns a Float representing the next step distance.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.nextStep(entity => {
         *     // Define logic to calculate and return the next step distance for the entity
         *     // Use information about the Entity provided by the context.
         *     return // Some Float value representing the next step distance;
         * });
         * ```
        */
        nextStep(nextStep: Internal.Function_<Internal.Entity, any>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets a callback function to be executed during the living entity's AI step.
         * The provided Consumer accepts a {@link LivingEntity} parameter,
         * allowing customization of the AI behavior.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.aiStep(entity => {
         *     // Custom logic to be executed during the living entity's AI step
         *     // Access and modify information about the entity using the provided context.
         * });
         * ```
        */
        aiStep(aiStep: Internal.Consumer_<Internal.LivingEntity>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Adds a spawner for this entity to the provided biome(s)
         * @param biomes A list of biomes that the entity should spawn in. If using a tag, only one value may be provided
         * @param weight The spawn weight the entity should have
         * @param minCount The minimum number of entities that can spawn at a time
         * @param maxCount The maximum number of entities that can spawn at a time
        */
        biomeSpawn(biomes: Internal.List_<string>, weight: number, minCount: number, maxCount: number): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets a callback function to be executed when the entity's air supply decreases.
         * The provided Consumer accepts a {@link LivingEntity} parameter,
         * representing the entity whose air supply is being decreased.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onDecreaseAirSupply(entity => {
         *     // Define custom logic for handling when the entity's air supply decreases
         *     // Use information about the LivingEntity provided by the context.
         * });
         * ```
        */
        onDecreaseAirSupply(onDecreaseAirSupply: Internal.Consumer_<Internal.LivingEntity>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets the overall sound volume for the entity.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.setSoundVolume(0.5);
         * ```
        */
        setSoundVolume(volume: number): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets the swim sound for the entity using a string representation.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.setSwimSound("minecraft:entity.generic.swim");
         * ```
        */
        setSwimSound(sound: any): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets a callback function to be executed when the entity starts sleeping.
         * The provided Consumer accepts a {@link ContextUtils.EntityBlockPosContext} parameter,
         * representing the context of the entity starting to sleep at a specific block position.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onStartSleeping(context => {
         *     // Define custom logic for handling the entity starting to sleep
         *     // Use information about the EntityBlockPosContext provided by the context.
         * });
         * ```
        */
        onStartSleeping(consumer: Internal.Consumer_<Internal.ContextUtils$EntityBlockPosContext>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets the spawn placement of the entity type
         * entityBuilder.spawnPlacement('on_ground', 'world_surface', (entitypredicate, levelaccessor, spawntype, blockpos, randomsource) => {
         *     if (levelaccessor.getLevel().getBiome(blockpos) == 'minecraft:plains') return true;
         *     return false
         * })
         * @param placementType The placement type of the spawn, accepts 'on_ground', 'in_water', 'no_restrictions', 'in_lava'
         * @param heightMap The height map used for the spawner
         * @param spawnPredicate The predicate that determines if the entity will spawn
        */
        spawnPlacement(placementType: Internal.SpawnPlacements$Type_, heightMap: Internal.Heightmap$Types_, spawnPredicate: Internal.SpawnPlacements$SpawnPredicate_<Internal.GuardianEntityJS>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets a predicate function to determine whether the entity is affected by potions.
         * The provided Predicate accepts a {@link LivingEntity} parameter,
         * representing the entity that may be checked for its susceptibility to potions.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.isAffectedByPotions(entity => {
         *     // Define conditions to check if the entity is affected by potions
         *     // Use information about the LivingEntity provided by the context.
         *     return // Some boolean condition indicating if the entity is affected by potions;
         * });
         * ```
        */
        isAffectedByPotions(predicate: Internal.Function_<Internal.LivingEntity, any>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets a predicate function to determine whether the entity is invulnerable to a specific type of damage.
         * The provided Predicate accepts a {@link ContextUtils.DamageContext} parameter,
         * representing the context of the damage, and returns a boolean indicating invulnerability.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.isInvulnerableTo(context => {
         *     // Define conditions for the entity to be invulnerable to the specific type of damage
         *     // Use information about the DamageContext provided by the context.
         *     return true // Some boolean condition indicating if the entity has invulnerability to the damage type;
         * });
         * ```
        */
        isInvulnerableTo(predicate: Internal.Function_<Internal.ContextUtils$DamageContext, any>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets a function to determine whether the entity can disable its target's shield.
         * The provided Predicate accepts a {@link LivingEntity} parameter.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.canDisableShield(entity => {
         *     // Define the conditions to check if the entity can disable its shield
         *     // Use information about the LivingEntity provided by the context.
         *     return true;
         * });
         * ```
        */
        canDisableShield(predicate: Internal.Function_<Internal.LivingEntity, any>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets a function to determine the block speed factor of the entity.
         * The provided Function accepts a {@link LivingEntity} parameter,
         * representing the entity whose block speed factor is being determined.
         * It returns a Float representing the block speed factor.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.blockSpeedFactor(entity => {
         *     // Define logic to calculate and return the block speed factor for the entity
         *     // Use information about the LivingEntity provided by the context.
         *     return // Some Float value representing the block speed factor;
         * });
         * ```
        */
        blockSpeedFactor(callback: Internal.Function_<Internal.LivingEntity, any>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets a predicate to determine whether the entity can fire a projectile weapon.
         * 
         * @param canFireProjectileWeaponPredicate A Predicate accepting a
         *            ContextUtils.EntityProjectileWeaponContext parameter,
         *            defining the condition under which the entity can fire a projectile weapon.
         * 
         * Example usage:
         * ```javascript
         * mobBuilder.canFireProjectileWeaponPredicate(context => {
         *     // Custom logic to determine whether the entity can fire a projectile weapon
         *     // Access information about the entity and the projectile weapon using the provided context.
         *     return context.projectileWeapon.id == 'minecraft:bow'; // Replace with your specific condition.
         * });
         * ```
        */
        canFireProjectileWeaponPredicate(canFireProjectileWeaponPredicate: Internal.Function_<Internal.ContextUtils$EntityProjectileWeaponContext, any>): Internal.MobBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets a callback function to be executed when the entity picks up an item.
         * The provided Consumer accepts a {@link ContextUtils.EntityItemEntityContext} parameter,
         * representing the context of the entity picking up an item with another entity.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onItemPickup(context => {
         *     // Define custom logic for handling the entity picking up an item
         *     // Use information about the EntityItemEntityContext provided by the context.
         * });
         * ```
        */
        onItemPickup(consumer: Internal.Consumer_<Internal.ContextUtils$EntityItemEntityContext>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        toString(): string;
        notifyAll(): void;
        /**
         * Sets a predicate function to determine whether the entity can attack another entity.
         * The provided Predicate accepts a {@link ContextUtils.LivingEntityContext} parameter,
         * representing the entity that may be attacked.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.canAttack(context => {
         *     // Define conditions to check if the entity can attack the targetEntity
         *     // Use information about the LivingEntity provided by the context.
         *     return // Some boolean condition indicating if the entity can attack the targetEntity;
         * });
         * ```
        */
        canAttack(customCanAttack: Internal.Function_<Internal.ContextUtils$LivingEntityContext, any>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Determines if the entity should serialize its data. Defaults to true.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.saves(false);
         * ```
        */
        saves(shouldSave: boolean): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets the block jump factor for the entity.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.setBlockJumpFactor(entity => {
         *     //Set the jump factor for the entity through context
         *     return 1 //some float value;
         * });
         * ```
        */
        setBlockJumpFactor(blockJumpFactor: Internal.Function_<Internal.LivingEntity, any>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets a predicate function to determine whether the entity can trample or step on something.
         * The provided Predicate accepts a {@link ContextUtils.CanTrampleContext} parameter,
         * representing the context of the potential trampling action, and returns a boolean.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.canTrample(context => {
         *     // Define conditions for the entity to be allowed to trample
         *     // Use information about the CanTrampleContext provided by the context.
         *     return false // Some boolean condition indicating if the entity can trample;
         * });
         * ```
        */
        canTrample(predicate: Internal.Function_<Internal.ContextUtils$CanTrampleContext, any>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets a function to determine the standing eye height of the entity.
         * The provided Function accepts a {@link ContextUtils.EntityPoseDimensionsContext} parameter,
         * representing the context of the entity's pose and dimensions when standing.
         * It returns a Float representing the standing eye height.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.setStandingEyeHeight(context => {
         *     // Define logic to calculate and return the standing eye height for the entity
         *     // Use information about the EntityPoseDimensionsContext provided by the context.
         *     return // Some Float value representing the standing eye height;
         * });
         * ```
        */
        setStandingEyeHeight(setStandingEyeHeight: Internal.Function_<Internal.ContextUtils$EntityPoseDimensionsContext, any>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Adds an animation controller to the entity with the specified parameters.
         * 
         * @param name The name of the animation controller.
         * @param translationTicksLength The length of translation ticks for the animation.
         * @param predicate The animation predicate defining the conditions for the animation to be played.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.addAnimationController('exampleController', 5, event => {
         *     // Define conditions for the animation to be played based on the entity.
         *     if (event.entity.hurtTime > 0) {
         *         event.thenLoop('spawn');
         *     } else {
         *         event.thenPlayAndHold('idle');
         *     }
         *     return true; // Some boolean condition indicating if the animation should be played;
         * });
         * ```
        */
        addAnimationController(name: string, translationTicksLength: number, predicate: Internal.BaseLivingEntityBuilder$IAnimationPredicateJS_<Internal.GuardianEntityJS>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets a callback function to be executed when an effect is removed from the entity.
         * The provided Consumer accepts a {@link ContextUtils.OnEffectContext} parameter,
         * representing the context of the effect being removed from the entity.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onEffectRemoved(context => {
         *     // Define custom logic for handling when an effect is removed from the entity
         *     // Use information about the OnEffectContext provided by the context.
         * });
         * ```
        */
        onEffectRemoved(consumer: Internal.Consumer_<Internal.ContextUtils$OnEffectContext>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets the main arm of the entity. Defaults to 'right'.
         * 
         * @param arm The main arm of the entity. Accepts values "left" or "right".
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.mainArm("left");
         * ```
        */
        mainArm(arm: any): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        wait(arg0: number): void;
        /**
         * Adds an extra render layer to the mob.
         * @param newGeoLayer The builder Consumer for the new render layer.
         * 
         *     Example usage:
         *     ```javascript
         *     entityBuilder.newGeoLayer(builder => {
         *         builder.textureResource(entity => {
         *             return "kubejs:textures/entity/sasuke.png"
         *         })
         *     });
         *     ```
        */
        newGeoLayer(builderConsumer: Internal.Consumer_<Internal.GeoLayerJSBuilder<Internal.GuardianEntityJS>>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets a callback function to be executed when the entity equips an item.
         * The provided Consumer accepts a {@link ContextUtils.EntityEquipmentContext} parameter,
         * representing the context of the entity equipping an item.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onEquipItem(context => {
         *     // Define custom logic for handling when the entity equips an item
         *     // Use information about the EntityEquipmentContext provided by the context.
         * });
         * ```
        */
        onEquipItem(onEquipItem: Internal.Consumer_<Internal.ContextUtils$EntityEquipmentContext>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        newID(pre: string, post: string): ResourceLocation;
        /**
         * Sets a predicate to determine if the entity should be removed when far away from the player.
         * 
         * @param removeWhenFarAway A Function accepting a ContextUtils.EntityDistanceToPlayerContext parameter,
         *                          defining the condition for the entity to be removed when far away.
         * 
         * Example usage:
         * ```javascript
         * mobBuilder.removeWhenFarAway(context => {
         *     // Custom logic to determine if the entity should be removed when far away
         *     // Return true if the entity should be removed based on the provided context.
         * });
         * ```
        */
        removeWhenFarAway(removeWhenFarAway: Internal.Function_<Internal.ContextUtils$EntityDistanceToPlayerContext, any>): Internal.MobBuilder<Internal.GuardianEntityJS>;
        /**
         * Adds a tag to this object, e.g. `minecraft:stone`.
        */
        tag(tag: ResourceLocation_): Internal.BuilderBase<Internal.EntityType<T>>;
        /**
         * Sets a callback function to be executed when the entity drops custom loot upon death.
         * The provided Consumer accepts a {@link ContextUtils.EntityLootContext} parameter,
         * representing the context of the entity's death and loot dropping.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.dropCustomDeathLoot(context => {
         *     // Define custom logic for handling the entity dropping custom loot upon death
         *     // Use information about the EntityLootContext provided by the context.
         * });
         * ```
        */
        dropCustomDeathLoot(consumer: Internal.Consumer_<Internal.ContextUtils$EntityLootContext>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        getTranslationKeyGroup(): string;
        /**
         * Sets a predicate to determine whether the entity should drop loot upon death.
         * The provided Predicate accepts a {@link LivingEntity} parameter,
         * representing the entity whose loot dropping behavior is being determined.
         * It returns a Boolean indicating whether the entity should drop loot.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.shouldDropLoot(entity => {
         *     // Define logic to determine whether the entity should drop loot
         *     // Use information about the LivingEntity provided by the context.
         *     return // Some Boolean value indicating whether the entity should drop loot;
         * });
         * ```
        */
        shouldDropLoot(b: Internal.Function_<Internal.LivingEntity, any>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        notify(): void;
        /**
         * Sets a predicate function to determine whether the entity is attackable.
         * The provided Predicate accepts a {@link LivingEntity} parameter,
         * representing the entity that may be checked for its attackability.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.isAttackable(entity => {
         *     // Define conditions to check if the entity is attackable
         *     // Use information about the LivingEntity provided by the context.
         *     return // Some boolean condition indicating if the entity is attackable;
         * });
         * ```
        */
        isAttackable(predicate: Internal.Function_<Internal.LivingEntity, any>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets a predicate function to determine whether the entity is on a climbable surface.
         * The provided Predicate accepts a {@link LivingEntity} parameter,
         * representing the entity that may be checked for being on a climbable surface.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onClimbable(entity => {
         *     // Define conditions to check if the entity is on a climbable surface
         *     // Use information about the LivingEntity provided by the context.
         *     return // Some boolean condition indicating if the entity is on a climbable surface;
         * });
         * ```
        */
        onClimbable(predicate: Internal.Function_<Internal.LivingEntity, any>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Function determining if the entity is allied with a potential target.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.isAlliedTo(context => {
         *     const {entity, target} = context
         *     return target.type == 'minecraft:blaze'
         * });
         * ```
        */
        isAlliedTo(isAlliedTo: Internal.Function_<Internal.ContextUtils$LineOfSightContext, any>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets a predicate to determine if the entity has inverted heal and harm behavior.
         * 
         * @param invertedHealAndHarm The predicate to check for inverted heal and harm behavior.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.invertedHealAndHarm(entity => {
         *     // Custom logic to determine if the entity has inverted heal and harm behavior
         *     return true; // Replace with your custom boolean condition
         * });
         * ```
        */
        invertedHealAndHarm(invertedHealAndHarm: Internal.Function_<Internal.LivingEntity, any>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Function which sets the offset for riding on the mob entity.
         * 
         * @param myRidingOffset The offset value for riding on the mob.
         * Defaults to 0.0.
         * 
         * Example usage:
         * ```javascript
         * mobBuilder.myRidingOffset(entity => {
         *     //Use the provided context about the entity to determine the riding offset of the passengers
         *     return 5 //Some double value;
         * })
         * ```
        */
        myRidingOffset(myRidingOffset: Internal.Function_<Internal.LivingEntity, any>): Internal.MobBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets a predicate function to determine whether the entity can stand on a fluid.
         * The provided Predicate accepts a {@link ContextUtils.EntityFluidStateContext} parameter,
         * representing the context of the entity potentially standing on a fluid.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.canStandOnFluid(context => {
         *     // Define conditions for the entity to be able to stand on a fluid
         *     // Use information about the EntityFluidStateContext provided by the context.
         *     return // Some boolean condition indicating if the entity can stand on the fluid;
         * });
         * ```
        */
        canStandOnFluid(predicate: Internal.Function_<Internal.ContextUtils$EntityFluidStateContext, any>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Adds a triggerable AnimationController to the entity callable off the entity's methods anywhere.
         * @param name The name of the controller
         * @param translationTicksLength How many ticks it takes to transition between different animations
         * @param triggerableAnimationID The unique identifier of the triggerable animation(sets it apart from other triggerable animations)
         * @param triggerableAnimationName The name of the animation defined in the animations.json
         * @param loopType The loop type for the triggerable animation, either 'LOOP' or 'PLAY_ONCE' or 'HOLD_ON_LAST_FRAME' or 'DEFAULT'
        */
        addTriggerableAnimationController(name: string, translationTicksLength: number, triggerableAnimationName: string, triggerableAnimationID: string, loopType: string): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Indicates that no egg item should be created for this entity type
        */
        noEggItem(): Internal.MobBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets a callback function to be executed when the entity stops riding.
         * The provided Consumer accepts a {@link LivingEntity} parameter,
         * representing the entity that has stopped being ridden.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onStopRiding(entity => {
         *     // Define custom logic for handling when the entity stops being ridden
         *     // Use information about the LivingEntity provided by the context.
         * });
         * ```
        */
        onStopRiding(callback: Internal.Consumer_<Internal.LivingEntity>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets a function to determine the custom hurt sound of the entity.
         * The provided Function accepts a {@link ContextUtils.HurtContext} parameter,
         * ```javascript
         * entityBuilder.setHurtSound(context => {
         *     // Custom logic to determine the hurt sound for the entity
         *     // You can use information from the HurtContext to customize the sound based on the context
         *     const { entity, damageSource } = context;
         *     // Determine the hurt sound based on the type of damage source
         *     switch (damageSource.getType()) {
         *         case "fire":
         *             return "minecraft:entity.generic.burn";
         *         case "fall":
         *             return "minecraft:entity.generic.hurt";
         *         case "drown":
         *             return "minecraft:entity.generic.hurt";
         *         case "explosion":
         *             return "minecraft:entity.generic.explode";
         *         default:
         *             return "minecraft:entity.generic.explode";
         *     }
         * })
         * ```
        */
        setHurtSound(sound: Internal.Function_<Internal.ContextUtils$HurtContext, any>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Defines in what condition the entity will start freezing.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.isFreezing(entity => {
         *     return true;
         * });
         * ```
        */
        isFreezing(isFreezing: Internal.Function_<Internal.LivingEntity, any>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets the client tracking range for the entity.
         * Defaults to 5.
         * Example usage:
         * ```javascript
         * entityBuilder.clientTrackingRange(64); // Set the client tracking range to 64 blocks
         * ```
        */
        clientTrackingRange(i: number): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets the function to determine whether the entity can pick up loot.
         * 
         * @param canPickUpLoot A Function accepting a {@link Mob} parameter,
         *                      defining the condition for the entity to pick up loot.
         * 
         * Example usage:
         * ```javascript
         * mobBuilder.canPickUpLoot(entity => {
         *     // Custom logic to determine whether the entity can pick up loot based on the provided mob.
         *     return true;
         * });
         * ```
        */
        canPickUpLoot(canPickUpLoot: Internal.Function_<Internal.Mob, any>): Internal.MobBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets a callback function to be executed when a player interacts with the entity.
         * The provided Consumer accepts a {@link ContextUtils.PlayerEntityContext} parameter,
         * representing the context of the player's interaction with the entity.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.playerTouch(context => {
         *     // Define custom logic for handling player interaction with the entity
         *     // Use information about the PlayerEntityContext provided by the context.
         * });
         * ```
        */
        playerTouch(consumer: Internal.Consumer_<Internal.ContextUtils$PlayerEntityContext>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Adds an extra hitbox to the mob. Aka part-entities.
         * Vanilla ticks extra hitboxes(for example the ender dragon's) with the
         * .tickPart method which specifies which hitbox to move to the entity and
         * its offset. This method is available off of the parent entity anywhere
         * including non EntityJS callbacks. (Usually used in the entity's aiStep method)
         * For example: `entity.tickPart("head", 0, 1, 0)`
         * 
         * Creation of the hitbox:
         * ```javascript
         * entityBuilder.addPartEntity("head", 1, 2, builder => {
         *     // Can also be null
         *     builder.isPickable(true)
         * });
         * ```
         * @param name The name of the part
         * @param width The width of the part
         * @param height The height of the part
         * @param builderConsumer The builder for the part, very similar to the normal builder callbacks
        */
        addPartEntity(name: string, width: number, height: number, builderConsumer: Internal.Consumer_<Internal.PartBuilder<Internal.GuardianEntityJS>>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * @param defaultGoals Sets whether the mob should inherit it's goals from it's superclass
         * Defaults to true.
         * 
         * Example usage:
         * ```javascript
         * builder.defaultGoals(false);
         * ```
        */
        defaultGoals(defaultGoals: boolean): this;
        /**
         * Sets the function to determine the squared melee attack range for the entity.
         * 
         * @param meleeAttackRangeSqr A Function accepting a {@link Mob} parameter,
         *                           defining the squared melee attack range based on the entity's state.
         *                           Returns a 'Double' value representing the squared melee attack range.
         * Example usage:
         * ```javascript
         * mobBuilder.meleeAttackRangeSqr(entity => {
         *     // Custom logic to calculate the squared melee attack range based on the provided mob.
         *     return 2;
         * });
         * ```
        */
        meleeAttackRangeSqr(meleeAttackRangeSqr: Internal.Function_<Internal.Mob, any>): Internal.MobBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets a callback function to be executed when the entity is hurt.
         * The provided Consumer accepts a {@link ContextUtils.EntityDamageContext} parameter,
         * representing the context of the entity being hurt.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onHurt(context => {
         *     // Define custom logic for handling when the entity is hurt
         *     // Use information about the EntityDamageContext provided by the context.
         * });
         * ```
        */
        onHurt(predicate: Internal.Consumer_<Internal.ContextUtils$EntityDamageContext>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets whether the entity is always considered as an experience dropper.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.isAlwaysExperienceDropper(true);
         * ```
        */
        isAlwaysExperienceDropper(b: boolean): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        getBuilderTranslationKey(): string;
        /**
         * Sets a callback function to be executed when the entity's target changes.
         * 
         * @param setTarget A Consumer accepting a ContextUtils.TargetChangeContext parameter,
         *                  defining the behavior to be executed when the entity's target changes.
         * 
         * Example usage:
         * ```javascript
         * mobBuilder.onTargetChanged(context => {
         *     // Custom logic to handle the entity's target change
         *     // Access information about the target change using the provided context.
         * });
         * ```
        */
        onTargetChanged(setTarget: Internal.Consumer_<Internal.ContextUtils$TargetChangeContext>): Internal.MobBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets a function to calculate fall damage for the entity.
         * The provided Function accepts a {@link ContextUtils.CalculateFallDamageContext} parameter,
         * representing the context of the fall damage calculation.
         * It returns an Integer representing the calculated fall damage.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.calculateFallDamage(context => {
         *     // Define logic to calculate and return the fall damage for the entity
         *     // Use information about the CalculateFallDamageContext provided by the context.
         *     return // Some Integer value representing the calculated fall damage;
         * });
         * ```
        */
        calculateFallDamage(calculation: Internal.Function_<Internal.ContextUtils$CalculateFallDamageContext, any>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        wait(): void;
        /**
         * Sets a callback function to be executed when the entity starts sprinting.
         * The provided Consumer accepts a {@link LivingEntity} parameter,
         * representing the entity that has started sprinting.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onSprint(entity => {
         *     // Define custom logic for handling when the entity starts sprinting
         *     // Use information about the LivingEntity provided by the context.
         * });
         * ```
        */
        onSprint(consumer: Internal.Consumer_<Internal.LivingEntity>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        createObject(): Internal.EntityType<Internal.GuardianEntityJS>;
        /**
         * Sets a predicate to determine whether the living entity dampens vibrations.
         * 
         * @param predicate The predicate to determine whether the living entity dampens vibrations.
         * 
         * The predicate should take a LivingEntity as a parameter and return a boolean value indicating whether the living entity dampens vibrations.
         * 
         * Example usage:
         * ```javascript
         * baseLivingEntityBuilder.dampensVibrations(entity => {
         *     // Determine whether the living entity dampens vibrations
         *     // Return true if the entity dampens vibrations, false otherwise
         * });
         * ```
        */
        dampensVibrations(predicate: Internal.Function_<Internal.LivingEntity, any>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets the swim splash sound for the entity using either a string representation or a ResourceLocation object.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.setSwimSplashSound("minecraft:entity.generic.splash");
         * ```
        */
        setSwimSplashSound(sound: any): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Adds a new AnimationController to the entity, with the ability to add event listeners
         * @param name The name of the controller
         * @param translationTicksLength How many ticks it takes to transition between different animations
         * @param predicate The predicate for the controller, determines if an animation should continue or not
         * @param soundListener A sound listener, used to execute actions when the json requests a sound to play. May be null
         * @param particleListener A particle listener, used to execute actions when the json requests a particle. May be null
         * @param instructionListener A custom instruction listener, used to execute actions based on arbitrary instructions provided by the json. May be null
        */
        addKeyAnimationController(name: string, translationTicksLength: number, predicate: Internal.BaseLivingEntityBuilder$IAnimationPredicateJS_<Internal.GuardianEntityJS>, soundListener: Internal.BaseLivingEntityBuilder$ISoundListenerJS_<Internal.GuardianEntityJS>, particleListener: Internal.BaseLivingEntityBuilder$IParticleListenerJS_<Internal.GuardianEntityJS>, instructionListener: Internal.BaseLivingEntityBuilder$ICustomInstructionListenerJS_<Internal.GuardianEntityJS>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        get(): Internal.EntityType<T>;
        /**
         * Sets the ingredient required for the entity to fire a projectile weapon.
         * 
         * @param canFireProjectileWeapon An Ingredient representing the required item for firing a projectile weapon.
         * 
         * Example usage:
         * ```javascript
         * mobBuilder.canFireProjectileWeapon([
         *     'minecraft:bow',
         *     'minecraft:crossbow'
         * ]);
         * ```
        */
        canFireProjectileWeapon(canFireProjectileWeapon: Internal.Ingredient_): Internal.MobBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets a predicate function to determine whether the entity can change dimensions.
         * The provided Predicate accepts a {@link LivingEntity} parameter,
         * representing the entity that may attempt to change dimensions.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.canChangeDimensions(entity => {
         *     // Define the conditions for the entity to be able to change dimensions
         *     // Use information about the LivingEntity provided by the context.
         *     return false // Some boolean condition indicating if the entity can change dimensions;
         * });
         * ```
        */
        canChangeDimensions(supplier: Internal.Function_<Internal.LivingEntity, any>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets the hit box of the entity type.
         * 
         * @param width The width of the entity, defaults to 1.
         * @param height The height of the entity, defaults to 1.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.sized(2, 3);
         * ```
        */
        sized(width: number, height: number): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets a callback function to be executed during each tick when the entity is being ridden.
         * The provided Consumer accepts a {@link LivingEntity} parameter,
         * representing the entity that is being ridden.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.rideTick(entity => {
         *     // Define custom logic for handling each tick when the entity is being ridden
         *     // Use information about the LivingEntity provided by the context.
         * });
         * ```
        */
        rideTick(callback: Internal.Consumer_<Internal.LivingEntity>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets a predicate function to determine whether the entity may interact with something.
         * The provided Predicate accepts a {@link ContextUtils.MayInteractContext} parameter,
         * representing the context of the potential interaction, and returns a boolean.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.mayInteract(context => {
         *     // Define conditions for the entity to be allowed to interact
         *     // Use information about the MayInteractContext provided by the context.
         *     return false // Some boolean condition indicating if the entity may interact;
         * });
         * ```
        */
        mayInteract(predicate: Internal.Function_<Internal.ContextUtils$MayInteractContext, any>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets a function to determine the animation resource for the entity.
         * The provided Function accepts a parameter of type T (the entity),
         * allowing changing the animations based on information about the entity.
         * The default behavior returns <namespace>:animations/<path>.animation.json.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.animationResource(entity => {
         *     // Define logic to determine the animation resource for the entity
         *     // Use information about the entity provided by the context.
         *     //return some ResourceLocation representing the animation resource;
         *     return "kubejs:animations/entity/wyrm.animation.json" // Some ResourceLocation representing the animation resource;
         * });
         * ```
        */
        animationResource(function_: Internal.Function_<Internal.GuardianEntityJS, any>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        wait(arg0: number, arg1: number): void;
        generateDataJsons(generator: Internal.DataJsonGenerator_): void;
        /**
         * Makes displayName() override language files.
        */
        formattedDisplayName(): Internal.BuilderBase<Internal.EntityType<T>>;
        /**
         * Sets the minimum fall distance for the entity before taking damage.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.setMaxFallDistance(entity => {
         *     // Define custom logic to determine the maximum fall distance
         *     // Use information about the LivingEntity provided by the context.
         *     return 3;
         * });
         * ```
        */
        setMaxFallDistance(maxFallDistance: Internal.Function_<Internal.LivingEntity, any>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets a predicate function to determine whether the entity can attack a specific entity type.
         * The provided Predicate accepts a {@link ContextUtils.EntityTypeEntityContext} parameter,
         * representing the context of the entity attacking a specific entity type.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.canAttackType(context => {
         *     // Define conditions to check if the entity can attack the specified entity type
         *     // Use information about the EntityTypeEntityContext provided by the context.
         *     return // Some boolean condition indicating if the entity can attack the specified entity type;
         * });
         * ```
        */
        canAttackType(canAttackType: Internal.Function_<Internal.ContextUtils$EntityTypeEntityContext, any>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Creates a spawn egg item for this entity type
        */
        eggItem(eggItem: Internal.Consumer_<Internal.SpawnEggItemBuilder>): Internal.MobBuilder<Internal.GuardianEntityJS>;
        /**
         * Boolean determining whether the passenger is able to steer the entity while riding.
         * Defaults to true.
         * Example usage:
         * ```javascript
         * entityBuilder.canSteer(false);
         * ```
        */
        canSteer(canSteer: boolean): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets a callback function to be executed when the entity is added to the world.
         * The provided Consumer accepts a {@link LivingEntity} parameter,
         * representing the entity that is added to the world.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onAddedToWorld(entity => {
         *     // Define custom logic for handling when the entity is added to the world
         *     // Use information about the LivingEntity provided by the context.
         * });
         * ```
        */
        onAddedToWorld(onAddedToWorldCallback: Internal.Consumer_<Internal.LivingEntity>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets the render type for the entity.
         * 
         * @param type The render type to be set. Acceptable values are:
         *              - "solid
         *              - "cutout"
         *              - "translucent"
         *              - RenderType.SOLID
         *              - RenderType.CUTOUT
         *              - RenderType.TRANSLUCENT
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.setRenderType("translucent");
         * ```
        */
        setRenderType(type: any): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets a callback function to be executed when the entity performs an eating action.
         * The provided Consumer accepts a {@link ContextUtils.EntityItemLevelContext} parameter,
         * representing the context of the entity's interaction with a specific item during eating.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.eat(context => {
         *     // Custom logic to handle the entity's eating action
         *     // Access information about the item being consumed using the provided context.
         * });
         * ```
        */
        eat(function_: Internal.Consumer_<Internal.ContextUtils$EntityItemLevelContext>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets a predicate function to determine whether the entity can undergo freezing.
         * The provided Predicate accepts a {@link LivingEntity} parameter,
         * representing the entity that may be subjected to freezing.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.canFreeze(entity => {
         *     // Define the conditions for the entity to be able to freeze
         *     // Use information about the LivingEntity provided by the context.
         *     return true //someBoolean;
         * });
         * ```
        */
        canFreeze(predicate: Internal.Function_<Internal.LivingEntity, any>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets a predicate to determine if a passenger can be added to the entity.
         * 
         * @param predicate The predicate to check if a passenger can be added.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.canAddPassenger(context => {
         *     // Custom logic to determine if a passenger can be added to the entity
         *     return true;
         * });
         * ```
        */
        canAddPassenger(predicate: Internal.Function_<Internal.ContextUtils$PassengerEntityContext, any>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets the translation key for this object, e.g. `block.minecraft.stone`.
        */
        translationKey(key: string): Internal.BuilderBase<Internal.EntityType<T>>;
        /**
         * Consumer overriding the tickDeath responsible to counting down
         * the ticks it takes to remove the entity when it dies.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.tickDeath(entity => {
         *     // Override the tickDeath method in the entity
         * });
         * ```
        */
        tickDeath(tickDeath: Internal.Consumer_<Internal.LivingEntity>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets whether the entity is immune to fire damage.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.fireImmune(true);
         * ```
        */
        fireImmune(isFireImmune: boolean): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets a callback function to be executed during each tick of the entity.
         * The provided Consumer accepts a {@link LivingEntity} parameter,
         * representing the entity that is being ticked.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.tick(entity => {
         *     // Define custom logic for handling during each tick of the entity
         *     // Use information about the LivingEntity provided by the context.
         * });
         * ```
        */
        tick(tickCallback: Internal.Consumer_<Internal.LivingEntity>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets a callback function to be executed when the entity jumps.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onLivingJump(entity => {
         *     // Custom logic to handle the entity's jump action
         * });
         * ```
        */
        onLivingJump(onJump: Internal.Consumer_<Internal.LivingEntity>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets a predicate function to determine whether the entity is currently sleeping.
         * The provided Predicate accepts a {@link LivingEntity} parameter,
         * representing the entity that may be checked for its sleeping state.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.isSleeping(entity => {
         *     // Define conditions to check if the entity is currently sleeping
         *     // Use information about the LivingEntity provided by the context.
         *     return // Some boolean condition indicating if the entity is sleeping;
         * });
         * ```
        */
        isSleeping(supplier: Internal.Function_<Internal.LivingEntity, any>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets whether the entity can spawn far from the player.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.canSpawnFarFromPlayer(true);
         * ```
        */
        canSpawnFarFromPlayer(canSpawnFar: boolean): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets the function to determine whether the entity should stay close to its leash holder.
         * 
         * @param predicate A Function accepting a {@link Mob} parameter,
         *                  defining the condition for the entity to stay close to its leash holder.
         * 
         * Example usage:
         * ```javascript
         * mobBuilder.shouldStayCloseToLeashHolder(entity => {
         *     // Custom logic to determine whether the entity should stay close to its leash holder.
         *     return true;
         * });
         * ```
        */
        shouldStayCloseToLeashHolder(predicate: Internal.Function_<Internal.Mob, any>): Internal.PathfinderMobBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets a predicate to determine whether to show the vehicle health for the living entity.
         * 
         * @param predicate The predicate to determine whether to show the vehicle health.
         * 
         * The predicate should take a LivingEntity as a parameter and return a boolean value indicating whether to show the vehicle health.
         * 
         * Example usage:
         * ```javascript
         * baseLivingEntityBuilder.showVehicleHealth(entity => {
         *     // Determine whether to show the vehicle health for the living entity
         *     // Return true to show the vehicle health, false otherwise
         * });
         * ```
        */
        showVehicleHealth(predicate: Internal.Function_<Internal.LivingEntity, any>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets a predicate function to determine whether the rider of the entity should face forward.
         * The provided Predicate accepts a {@link ContextUtils.PlayerEntityContext} parameter,
         * representing the context of the player entity riding the main entity.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.shouldRiderFaceForward(context => {
         *     // Define the conditions for the rider to face forward
         *     // Use information about the player entity provided by the context.
         *     return true //someBoolean;
         * });
         * ```
        */
        shouldRiderFaceForward(predicate: Internal.Function_<Internal.ContextUtils$PlayerEntityContext, any>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets a callback function to be executed when the entity leaves combat.
         * The provided Consumer accepts a {@link LivingEntity} parameter,
         * representing the entity that has left combat.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onLeaveCombat(entity => {
         *     // Define custom logic for handling the entity leaving combat
         *     // Use information about the LivingEntity provided by the context.
         * });
         * ```
        */
        onLeaveCombat(runnable: Internal.Consumer_<Internal.LivingEntity>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets a predicate function to determine whether the entity is sensitive to water.
         * The provided Predicate accepts a {@link LivingEntity} parameter,
         * representing the entity that may be checked for sensitivity to water.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.isSensitiveToWater(entity => {
         *     // Define conditions to check if the entity is sensitive to water
         *     // Use information about the LivingEntity provided by the context.
         *     return // Some boolean condition indicating if the entity is sensitive to water;
         * });
         * ```
        */
        isSensitiveToWater(predicate: Internal.Function_<Internal.LivingEntity, any>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets the sound resource locations for small and large falls of the entity using either string representations or ResourceLocation objects.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.fallSounds("minecraft:entity.generic.small_fall",
         *     "minecraft:entity.generic.large_fall");
         * ```
        */
        fallSounds(smallFallSound: any, largeFallSound: any): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * @param scaleModelForRender A Consumer to determing logic for model scaling and rendering
         *     without affecting core logic such as hitbox sizing.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.scaleModelForRender(context => {
         *     const { entity, widthScale, heightScale, poseStack, model, isReRender, partialTick, packedLight, packedOverlay } = context
         *     if (entity.isBaby()) {
         *         poseStack.scale(0.5, 0.5, 0.5)
         *     }
         * });
         * ```
        */
        scaleModelForRender(scaleModelForRender: Internal.Consumer_<Internal.ContextUtils$ScaleModelRenderContext<Internal.GuardianEntityJS>>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        hashCode(): number;
        /**
         * Sets the function to determine whether the entity can hold an item.
         * 
         * @param canHoldItem A Function accepting a {@link ContextUtils.EntityItemStackContext} parameter,
         *                    defining the condition for the entity to hold an item.
         * 
         * Example usage:
         * ```javascript
         * mobBuilder.canHoldItem(context => {
         *     // Custom logic to determine whether the entity can hold an item based on the provided context.
         *     return true;
         * });
         * ```
        */
        canHoldItem(canHoldItem: Internal.Function_<Internal.ContextUtils$EntityItemStackContext, any>): Internal.MobBuilder<Internal.GuardianEntityJS>;
        /**
         * Defines the Mob's Type
         * Examples: 'undead', 'water', 'arthropod', 'undefined', 'illager'
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.mobType('undead');
         * ```
        */
        mobType(mt: any): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets whether the entity is summonable.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.setSummonable(true);
         * ```
        */
        setSummonable(b: boolean): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets the walk target value function for the entity.
         * 
         * @param function A Function accepting a {@link ContextUtils.EntityBlockPosLevelContext} parameter,
         *                 defining the walk target value based on the entity's interaction with a specific block.
         * 
         * Example usage:
         * ```javascript
         * mobBuilder.walkTargetValue(context => {
         *     // Custom logic to calculate the walk target value based on the provided context.
         *     // Access information about the block position and level using the provided context.
         *     return 10;
         * });
         * ```
        */
        walkTargetValue(function_: Internal.Function_<Internal.ContextUtils$EntityBlockPosLevelContext, any>): Internal.PathfinderMobBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets a predicate function to determine whether the entity can take an item.
         * The provided Predicate accepts a {@link ContextUtils.EntityItemLevelContext} parameter,
         * representing the context of the entity potentially taking an item.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.canTakeItem(context => {
         *     // Define conditions for the entity to be able to take an item
         *     // Use information about the EntityItemLevelContext provided by the context.
         *     return // Some boolean condition indicating if the entity can take the item;
         * });
         * ```
        */
        canTakeItem(predicate: Internal.Function_<Internal.ContextUtils$EntityItemLevelContext, any>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets whether the entity can breathe underwater.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.canBreatheUnderwater(true);
         * ```
        */
        canBreatheUnderwater(canBreatheUnderwater: boolean): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets a predicate to determine whether the entity is immobile.
         * The provided Predicate accepts a {@link LivingEntity} parameter,
         * representing the entity whose immobility is being determined.
         * It returns a Boolean indicating whether the entity is immobile.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.isImmobile(entity => {
         *     // Define logic to determine whether the entity is immobile
         *     // Use information about the LivingEntity provided by the context.
         *     return // Some Boolean value indicating whether the entity is immobile;
         * });
         * ```
        */
        isImmobile(b: Internal.Function_<Internal.LivingEntity, any>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets a callback function to be executed when the entity is removed from the world.
         * The provided Consumer accepts a {@link LivingEntity} parameter,
         * representing the entity that is being removed from the world.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onRemovedFromWorld(entity => {
         *     // Define custom logic for handling the removal of the entity from the world
         *     // Use information about the LivingEntity provided by the context.
         * });
         * ```
        */
        onRemovedFromWorld(consumer: Internal.Consumer_<Internal.LivingEntity>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Boolean determining whether the entity can jump while mounted by a player.
         * (Currently experimental jumping logic subject to change in the future)
         * Defaults to false.
         * Example usage:
         * ```javascript
         * entityBuilder.mountJumpingEnabled(true);
         * ```
        */
        mountJumpingEnabled(mountJumpingEnabled: boolean): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        /**
         * Sets a function to determine the custom hitbox scale of the entity.
         * The provided Function accepts a {@link LivingEntity} parameter,
         * representing the entity whose scale is being determined.
         * It returns a Float representing the custom scale.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.scale(entity => {
         *     // Define logic to calculate and return the custom scale for the entity
         *     // Use information about the LivingEntity provided by the context.
         *     return // Some Float value;
         * });
         * ```
        */
        scale(customScale: Internal.Function_<Internal.LivingEntity, any>): Internal.BaseLivingEntityBuilder<Internal.GuardianEntityJS>;
        equals(arg0: any): boolean;
        generateAssetJsons(generator: Internal.AssetJsonGenerator_): void;
        /**
         * Sets the death sound for the entity.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.setDeathSound("minecraft:entity.generic.death");
         * ```
        */
        set deathSound(sound: any)
        /**
         * Sets the sound to play when the entity is ambient using either a string representation or a ResourceLocation object.
         * 
         * Example usage:
         * ```javascript
         * mobBuilder.setAmbientSound("minecraft:entity.zombie.ambient");
         * ```
        */
        set ambientSound(ambientSound: any)
        /**
         * Sets the water slowdown factor for the entity. Defaults to 0.8.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.setWaterSlowDown(0.6);
         * ```
        */
        set waterSlowDown(slowdownFactor: number)
        get class(): typeof any
        /**
         * Sets the overall sound volume for the entity.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.setSoundVolume(0.5);
         * ```
        */
        set soundVolume(volume: number)
        /**
         * Sets the swim sound for the entity using a string representation.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.setSwimSound("minecraft:entity.generic.swim");
         * ```
        */
        set swimSound(sound: any)
        /**
         * Sets the block jump factor for the entity.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.setBlockJumpFactor(entity => {
         *     //Set the jump factor for the entity through context
         *     return 1 //some float value;
         * });
         * ```
        */
        set blockJumpFactor(blockJumpFactor: Internal.Function_<Internal.LivingEntity, any>)
        /**
         * Sets a function to determine the standing eye height of the entity.
         * The provided Function accepts a {@link ContextUtils.EntityPoseDimensionsContext} parameter,
         * representing the context of the entity's pose and dimensions when standing.
         * It returns a Float representing the standing eye height.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.setStandingEyeHeight(context => {
         *     // Define logic to calculate and return the standing eye height for the entity
         *     // Use information about the EntityPoseDimensionsContext provided by the context.
         *     return // Some Float value representing the standing eye height;
         * });
         * ```
        */
        set standingEyeHeight(setStandingEyeHeight: Internal.Function_<Internal.ContextUtils$EntityPoseDimensionsContext, any>)
        get translationKeyGroup(): string
        /**
         * Sets a function to determine the custom hurt sound of the entity.
         * The provided Function accepts a {@link ContextUtils.HurtContext} parameter,
         * ```javascript
         * entityBuilder.setHurtSound(context => {
         *     // Custom logic to determine the hurt sound for the entity
         *     // You can use information from the HurtContext to customize the sound based on the context
         *     const { entity, damageSource } = context;
         *     // Determine the hurt sound based on the type of damage source
         *     switch (damageSource.getType()) {
         *         case "fire":
         *             return "minecraft:entity.generic.burn";
         *         case "fall":
         *             return "minecraft:entity.generic.hurt";
         *         case "drown":
         *             return "minecraft:entity.generic.hurt";
         *         case "explosion":
         *             return "minecraft:entity.generic.explode";
         *         default:
         *             return "minecraft:entity.generic.explode";
         *     }
         * })
         * ```
        */
        set hurtSound(sound: Internal.Function_<Internal.ContextUtils$HurtContext, any>)
        get builderTranslationKey(): string
        /**
         * Sets the swim splash sound for the entity using either a string representation or a ResourceLocation object.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.setSwimSplashSound("minecraft:entity.generic.splash");
         * ```
        */
        set swimSplashSound(sound: any)
        /**
         * Sets the minimum fall distance for the entity before taking damage.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.setMaxFallDistance(entity => {
         *     // Define custom logic to determine the maximum fall distance
         *     // Use information about the LivingEntity provided by the context.
         *     return 3;
         * });
         * ```
        */
        set maxFallDistance(maxFallDistance: Internal.Function_<Internal.LivingEntity, any>)
        /**
         * Sets the render type for the entity.
         * 
         * @param type The render type to be set. Acceptable values are:
         *              - "solid
         *              - "cutout"
         *              - "translucent"
         *              - RenderType.SOLID
         *              - RenderType.CUTOUT
         *              - RenderType.TRANSLUCENT
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.setRenderType("translucent");
         * ```
        */
        set renderType(type: any)
        /**
         * Sets whether the entity is summonable.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.setSummonable(true);
         * ```
        */
        set summonable(b: boolean)
    }
    type GuardianJSBuilder_ = GuardianJSBuilder;
    class LootPool$Builder implements Internal.FunctionUserBuilder<Internal.LootPool$Builder>, Internal.ConditionUserBuilder<Internal.LootPool$Builder> {
        constructor()
        getClass(): typeof any;
        when<E>(arg0: Internal.Iterable_<E>, arg1: Internal.Function_<E, Internal.LootItemCondition$Builder>): this;
        toString(): string;
        setBonusRolls(arg0: Internal.NumberProvider_): this;
        apply<E>(arg0: E[], arg1: Internal.Function_<E, Internal.LootItemFunction$Builder>): this;
        apply(arg0: Internal.LootItemFunction$Builder_): this;
        notifyAll(): void;
        build(): Internal.LootPool;
        apply<E>(arg0: Internal.Iterable_<E>, arg1: Internal.Function_<E, Internal.LootItemFunction$Builder>): this;
        unwrap(): this;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        setRolls(arg0: Internal.NumberProvider_): this;
        "apply(java.lang.Object[],java.util.function.Function)"<E>(arg0: E[], arg1: Internal.Function_<E, Internal.LootItemFunction$Builder>): this;
        name(arg0: string): this;
        when(arg0: Internal.LootItemCondition$Builder_): Internal.ConditionUserBuilder<any>;
        add(arg0: Internal.LootPoolEntryContainer$Builder_<any>): this;
        wait(): void;
        wait(arg0: number): void;
        "apply(java.lang.Iterable,java.util.function.Function)"<E>(arg0: Internal.Iterable_<E>, arg1: Internal.Function_<E, Internal.LootItemFunction$Builder>): this;
        equals(arg0: any): boolean;
        get class(): typeof any
        set bonusRolls(arg0: Internal.NumberProvider_)
        set rolls(arg0: Internal.NumberProvider_)
    }
    type LootPool$Builder_ = LootPool$Builder;
    interface IInputDisable {
        abstract getDisabledFlags(): Internal.EnumSet<Internal.IInputDisable$InputMask>;
        getDisableMask(): number;
        get disabledFlags(): Internal.EnumSet<Internal.IInputDisable$InputMask>
        get disableMask(): number
        (): Internal.EnumSet_<Internal.IInputDisable$InputMask>;
    }
    type IInputDisable_ = IInputDisable | (()=> Internal.EnumSet_<Internal.IInputDisable$InputMask>);
    class RecipeBookCategories extends Internal.Enum<Internal.RecipeBookCategories> implements Internal.IExtensibleEnum {
        getClass(): typeof any;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        static getCategories(arg0: Internal.RecipeBookType_): Internal.List<Internal.RecipeBookCategories>;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.RecipeBookCategories>>;
        getDeclaringClass(): typeof Internal.RecipeBookCategories;
        static valueOf(arg0: string): Internal.RecipeBookCategories;
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        static create(arg0: string, ...arg1: Internal.ItemStack_[]): Internal.RecipeBookCategories;
        static createCodecForExtensibleEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, E>): Internal.Codec<E>;
        toString(): string;
        /**
         * @deprecated
        */
        init(): void;
        notifyAll(): void;
        static values(): Internal.RecipeBookCategories[];
        name(): string;
        hashCode(): number;
        getIconItems(): Internal.List<Internal.ItemStack>;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        "compareTo(net.minecraft.client.RecipeBookCategories)"(arg0: Internal.RecipeBookCategories_): number;
        compareTo(arg0: Internal.RecipeBookCategories_): number;
        get class(): typeof any
        get declaringClass(): typeof Internal.RecipeBookCategories
        get iconItems(): Internal.List<Internal.ItemStack>
        static readonly CRAFTING_SEARCH: (Internal.RecipeBookCategories) & (Internal.RecipeBookCategories);
        static readonly SMOKER_SEARCH: (Internal.RecipeBookCategories) & (Internal.RecipeBookCategories);
        static readonly SMOKER_CATEGORIES: ([Internal.RecipeBookCategories, Internal.RecipeBookCategories]) & (Internal.List<Internal.RecipeBookCategories>);
        static readonly BLAST_FURNACE_SEARCH: (Internal.RecipeBookCategories) & (Internal.RecipeBookCategories);
        static readonly CRAFTING_BUILDING_BLOCKS: (Internal.RecipeBookCategories) & (Internal.RecipeBookCategories);
        static readonly STONECUTTER: (Internal.RecipeBookCategories) & (Internal.RecipeBookCategories);
        static readonly CRAFTING_MISC: (Internal.RecipeBookCategories) & (Internal.RecipeBookCategories);
        static readonly CRAFTING_REDSTONE: (Internal.RecipeBookCategories) & (Internal.RecipeBookCategories);
        static readonly SMOKER_FOOD: (Internal.RecipeBookCategories) & (Internal.RecipeBookCategories);
        static readonly AGGREGATE_CATEGORIES: ({[key: Internal.RecipeBookCategories]: [Internal.RecipeBookCategories], [key: Internal.RecipeBookCategories]: [Internal.RecipeBookCategories, Internal.RecipeBookCategories, Internal.RecipeBookCategories], [key: Internal.RecipeBookCategories]: [Internal.RecipeBookCategories, Internal.RecipeBookCategories, Internal.RecipeBookCategories, Internal.RecipeBookCategories], [key: Internal.RecipeBookCategories]: [Internal.RecipeBookCategories, Internal.RecipeBookCategories]}) & (Internal.Map<Internal.RecipeBookCategories, Internal.List<Internal.RecipeBookCategories>>);
        static readonly UNKNOWN: (Internal.RecipeBookCategories) & (Internal.RecipeBookCategories);
        static readonly CRAFTING_EQUIPMENT: (Internal.RecipeBookCategories) & (Internal.RecipeBookCategories);
        static readonly FURNACE_BLOCKS: (Internal.RecipeBookCategories) & (Internal.RecipeBookCategories);
        static readonly BLAST_FURNACE_MISC: (Internal.RecipeBookCategories) & (Internal.RecipeBookCategories);
        static readonly BLAST_FURNACE_CATEGORIES: ([Internal.RecipeBookCategories, Internal.RecipeBookCategories, Internal.RecipeBookCategories]) & (Internal.List<Internal.RecipeBookCategories>);
        static readonly CRAFTING_CATEGORIES: ([Internal.RecipeBookCategories, Internal.RecipeBookCategories, Internal.RecipeBookCategories, Internal.RecipeBookCategories, Internal.RecipeBookCategories]) & (Internal.List<Internal.RecipeBookCategories>);
        static readonly FURNACE_SEARCH: (Internal.RecipeBookCategories) & (Internal.RecipeBookCategories);
        static readonly FURNACE_MISC: (Internal.RecipeBookCategories) & (Internal.RecipeBookCategories);
        static readonly SMITHING: (Internal.RecipeBookCategories) & (Internal.RecipeBookCategories);
        static readonly FURNACE_FOOD: (Internal.RecipeBookCategories) & (Internal.RecipeBookCategories);
        static readonly CAMPFIRE: (Internal.RecipeBookCategories) & (Internal.RecipeBookCategories);
        static readonly FURNACE_CATEGORIES: ([Internal.RecipeBookCategories, Internal.RecipeBookCategories, Internal.RecipeBookCategories, Internal.RecipeBookCategories]) & (Internal.List<Internal.RecipeBookCategories>);
        static readonly BLAST_FURNACE_BLOCKS: (Internal.RecipeBookCategories) & (Internal.RecipeBookCategories);
    }
    type RecipeBookCategories_ = "crafting_misc" | "smoker_search" | "furnace_misc" | "smithing" | "crafting_building_blocks" | "crafting_search" | RecipeBookCategories | "blast_furnace_misc" | "stonecutter" | "furnace_search" | "campfire" | "blast_furnace_search" | "smoker_food" | "blast_furnace_blocks" | "unknown" | "furnace_food" | "crafting_equipment" | "furnace_blocks" | "crafting_redstone";
    interface BiomeFilter extends Internal.Predicate<Internal.BiomeModifications$BiomeContext> {
        idFilter(cx: Internal.Context_, s: string): this;
        test(arg0: any): boolean;
        not<T>(arg0: Internal.Predicate_<T>): Internal.Predicate<T>;
        of(cx: Internal.Context_, o: any): this;
        abstract test(arg0: Internal.BiomeModifications$BiomeContext_): boolean;
        and(arg0: Internal.Predicate_<Internal.BiomeModifications$BiomeContext>): Internal.Predicate<Internal.BiomeModifications$BiomeContext>;
        "test(java.lang.Object)"(arg0: any): boolean;
        negate(): Internal.Predicate<Internal.BiomeModifications$BiomeContext>;
        abstract "test(dev.architectury.registry.level.biome.BiomeModifications$BiomeContext)"(arg0: Internal.BiomeModifications$BiomeContext_): boolean;
        or(arg0: Internal.Predicate_<Internal.BiomeModifications$BiomeContext>): Internal.Predicate<Internal.BiomeModifications$BiomeContext>;
        isEqual<T>(arg0: any): Internal.Predicate<T>;
        readonly ALWAYS_FALSE: Internal.BiomeFilter;
        readonly ALWAYS_TRUE: Internal.BiomeFilter;
    }
    type BiomeFilter_ = Internal.Biome_ | Special.Biome | Internal.BiomeFilter_[] | RegExp | {tag?: `#${Special.BiomeTag}`, id?: Special.Biome, type?: Special.Biome, not?: Internal.BiomeFilter_, or?: Internal.BiomeFilter_} | `#${Special.BiomeTag}` | "-" | {not?: Internal.BiomeFilter_, or?: Internal.BiomeFilter_} | "*" | BiomeFilter | Internal.Biome_[];
    class ZipFile implements Internal.Closeable, Internal.ZipConstants {
        constructor(arg0: Internal.File_, arg1: number)
        constructor(arg0: Internal.File_)
        constructor(arg0: Internal.File_, arg1: number, arg2: Internal.Charset_)
        constructor(arg0: string, arg1: Internal.Charset_)
        constructor(arg0: Internal.File_, arg1: Internal.Charset_)
        constructor(arg0: string)
        getClass(): typeof any;
        getComment(): string;
        toString(): string;
        notifyAll(): void;
        getEntry(arg0: string): Internal.ZipEntry;
        notify(): void;
        stream(): Internal.Stream<Internal.ZipEntry>;
        wait(arg0: number, arg1: number): void;
        entries(): Internal.Enumeration<Internal.ZipEntry>;
        size(): number;
        hashCode(): number;
        wait(): void;
        getName(): string;
        close(): void;
        wait(arg0: number): void;
        getInputStream(arg0: Internal.ZipEntry_): Internal.InputStream;
        equals(arg0: any): boolean;
        get class(): typeof any
        get comment(): string
        get name(): string
        static readonly OPEN_READ: (1) & (number);
        static readonly OPEN_DELETE: (4) & (number);
    }
    type ZipFile_ = ZipFile;
    class WeaponAttributes$Attack {
        constructor()
        constructor(conditions: any_[], hitbox: Internal.WeaponAttributes$HitBoxShape_, damage_multiplier: number, angle: number, upswing: number, animation: string, swing_sound: Internal.WeaponAttributes$Sound_, impact_sound: Internal.WeaponAttributes$Sound_)
        getClass(): typeof any;
        toString(): string;
        impactSound(): Internal.WeaponAttributes$Sound;
        angle(): number;
        notifyAll(): void;
        upswing(): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        conditions(): any[];
        hashCode(): number;
        damageMultiplier(): number;
        animation(): string;
        swingSound(): Internal.WeaponAttributes$Sound;
        wait(): void;
        wait(arg0: number): void;
        hitbox(): Internal.WeaponAttributes$HitBoxShape;
        equals(obj: any): boolean;
        get class(): typeof any
    }
    type WeaponAttributes$Attack_ = WeaponAttributes$Attack;
    class BookContents extends Internal.AbstractReadStateHolder {
        constructor(arg0: Internal.Book_, arg1: Internal.ImmutableMap_<ResourceLocation, Internal.BookCategory>, arg2: Internal.ImmutableMap_<ResourceLocation, Internal.BookEntry>, arg3: Internal.ImmutableMap_<Internal.ItemStackUtil$StackWrapper, com.mojang.datafixers.util.Pair<Internal.BookEntry, number>>, arg4: Internal.BookCategory_)
        getClass(): typeof any;
        toString(): string;
        isErrored(): boolean;
        notifyAll(): void;
        getEntryForStack(arg0: Internal.ItemStack_): com.mojang.datafixers.util.Pair<Internal.BookEntry, number>;
        markReadStateDirty(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        static empty(arg0: Internal.Book_, arg1: Internal.Exception_): Internal.BookContents;
        setTopEntry(arg0: ResourceLocation_, arg1: number): void;
        hashCode(): number;
        getCurrentGui(): Internal.GuiBook;
        wait(): void;
        getReadState(): Internal.EntryDisplayState;
        getException(): Internal.Exception;
        wait(arg0: number): void;
        openLexiconGui(arg0: Internal.GuiBook_, arg1: boolean): void;
        equals(arg0: any): boolean;
        checkValidCurrentEntry(): void;
        static mostImportantState(arg0: Internal.Stream_<Internal.EntryDisplayState>): Internal.EntryDisplayState;
        get class(): typeof any
        get errored(): boolean
        get currentGui(): Internal.GuiBook
        get readState(): Internal.EntryDisplayState
        get exception(): Internal.Exception
        readonly categories: Internal.Map<ResourceLocation, Internal.BookCategory>;
        currentGui: Internal.GuiBook;
        readonly guiStack: Internal.Deque<Internal.GuiBook>;
        static readonly addonTemplates: ({}) & (Internal.Map<ResourceLocation, Internal.Supplier<Internal.BookTemplate>>);
        readonly entries: Internal.Map<ResourceLocation, Internal.BookEntry>;
        readonly pamphletCategory: Internal.BookCategory;
    }
    type BookContents_ = BookContents;
    class AnimationProcessor$QueuedAnimation extends Internal.Record {
        constructor(animation: software.bernie.geckolib.core.animation.Animation_, loopType: Internal.Animation$LoopType_)
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        animation(): software.bernie.geckolib.core.animation.Animation;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        loopType(): Internal.Animation$LoopType;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
    }
    type AnimationProcessor$QueuedAnimation_ = AnimationProcessor$QueuedAnimation;
    class WaySignStructure extends Internal.Structure {
        constructor(config: Internal.Structure$StructureSettings_, startPool: Internal.Holder_<Internal.StructureTemplatePool>, startJigsawName: Internal.Optional_<ResourceLocation>, minY: number, maxY: number)
        static simpleCodec<S extends Internal.Structure>(arg0: Internal.Function_<Internal.Structure$StructureSettings, S>): Internal.Codec<S>;
        getClass(): typeof any;
        generate(arg0: Internal.RegistryAccess_, arg1: Internal.ChunkGenerator_, arg2: Internal.BiomeSource_, arg3: Internal.RandomState_, arg4: Internal.StructureTemplateManager_, arg5: number, arg6: Internal.ChunkPos_, arg7: number, arg8: Internal.LevelHeightAccessor_, arg9: Internal.Predicate_<Internal.Holder<Internal.Biome>>): Internal.StructureStart;
        static recomputeValidStructureCache(access: Internal.RegistryAccess_): void;
        biomes(): Internal.HolderSet<Internal.Biome>;
        findValidGenerationPoint(arg0: Internal.Structure$GenerationContext_): Internal.Optional<Internal.Structure$GenerationStub>;
        step(): Internal.GenerationStep$Decoration;
        notify(): void;
        m_214086_(context: Internal.Structure$GenerationContext_): Internal.Optional<Internal.Structure$GenerationStub>;
        wait(arg0: number, arg1: number): void;
        type(): Internal.StructureType<any>;
        modifiableStructureInfo(): Internal.ModifiableStructureInfo;
        static clearCache(): void;
        toString(): string;
        spawnOverrides(): Internal.Map<Internal.MobCategory, Internal.StructureSpawnOverride>;
        notifyAll(): void;
        terrainAdaptation(): Internal.TerrainAdjustment;
        adjustBoundingBox(arg0: Internal.BoundingBox_): Internal.BoundingBox;
        hashCode(): number;
        static settingsCodec<S extends Internal.Structure>(arg0: Internal.RecordCodecBuilder$Instance_<S>): Internal.RecordCodecBuilder<S, Internal.Structure$StructureSettings>;
        wait(): void;
        wait(arg0: number): void;
        afterPlace(arg0: Internal.WorldGenLevel_, arg1: Internal.StructureManager_, arg2: Internal.ChunkGenerator_, arg3: Internal.RandomSource_, arg4: Internal.BoundingBox_, arg5: Internal.ChunkPos_, arg6: Internal.PiecesContainer_): void;
        equals(arg0: any): boolean;
        getModifiedStructureSettings(): Internal.Structure$StructureSettings;
        get class(): typeof any
        set tingsCodec(arg0: Internal.RecordCodecBuilder$Instance_<S>)
        get modifiedStructureSettings(): Internal.Structure$StructureSettings
        static readonly CODEC: Internal.Codec<Internal.WaySignStructure>;
    }
    type WaySignStructure_ = WaySignStructure;
    class SleepingBagItem extends Internal.BaseComfortsItem {
        constructor(arg0: Internal.Block_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        setRarity(arg0: Internal.Rarity_): void;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        static setBlockEntityData(arg0: Internal.ItemStack_, arg1: Internal.BlockEntityType_<any>, arg2: Internal.CompoundTag_): void;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
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
        abstract moonlight$getClientAnimationExtension(): any;
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
        abstract moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        abstract moonlight$setClientAnimationExtension(arg0: any): void;
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
        syncedUseOn(arg0: Internal.UseOnContext_): void;
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
        get block(): Internal.Block
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
    type SleepingBagItem_ = SleepingBagItem;
    class BoardBlock$Companion {
        constructor($constructor_marker: any_)
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
    }
    type BoardBlock$Companion_ = BoardBlock$Companion;
    class TooltipFlag$Default extends Internal.Record implements Internal.TooltipFlag {
        constructor(arg0: boolean, arg1: boolean)
        getClass(): typeof any;
        toString(): string;
        asCreative(): this;
        isAdvanced(): boolean;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        advanced(): boolean;
        hashCode(): number;
        creative(): boolean;
        isCreative(): boolean;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        get advanced(): boolean
        get creative(): boolean
    }
    type TooltipFlag$Default_ = TooltipFlag$Default;
    interface IFocus <V> {
        abstract getTypedValue(): Internal.ITypedIngredient<V>;
        abstract checkedCast<T>(arg0: Internal.IIngredientType_<T>): Internal.Optional<Internal.IFocus<T>>;
        abstract getRole(): Internal.RecipeIngredientRole;
        get typedValue(): Internal.ITypedIngredient<V>
        get role(): Internal.RecipeIngredientRole
    }
    type IFocus_<V> = IFocus<V>;
    class RegisterCuriosRendererEventJS extends Internal.EventJS {
        constructor()
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
        register(item: Internal.Item_, renderer: Internal.Consumer_<Internal.RendererCurios$RenderContext>): void;
        get class(): typeof any
    }
    type RegisterCuriosRendererEventJS_ = RegisterCuriosRendererEventJS;
    class SmitingRingItem extends Internal.ChargeableItem implements Internal.IPreEnchantedItem<Internal.BlackCatBraceletItem> {
        constructor()
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        getMaxIre(): number;
        getDrinkingSound(): Internal.SoundEvent;
        setRarity(arg0: Internal.Rarity_): void;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        moonlight$addAdditionalBehavior(placementOverride: Internal.AdditionalItemPlacement_): void;
        usedByPlayer(arg0: Internal.Player_): void;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        isFireResistant(): boolean;
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
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        asItem(): Internal.Item;
        getTypeData(): Internal.CompoundTag;
        getDefaultInstance(): Internal.ItemStack;
        hasEffect(arg0: Internal.ItemStack_): boolean;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getBarColor(arg0: Internal.ItemStack_): number;
        getItem(): Internal.Item;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: Internal.DamageSource_): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getItemBuilder(): Internal.ItemBuilder;
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
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
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
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
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
        getTier(arg0: Internal.Level_, arg1: Internal.ItemStack_): number;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getMinIre(): number;
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
        isEquippedAndHasMana(arg0: Internal.LivingEntity_, arg1: number, arg2: boolean): boolean;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        resolveTier(arg0: Internal.Level_, arg1: Internal.ItemStack_): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        setCachedTier(arg0: number): void;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        getFaction(): Internal.IFaction;
        getMana(arg0: Internal.ItemStack_): number;
        getCachedTier(): number;
        applyEffect(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Level_, arg3: number, arg4: number, arg5: boolean): boolean;
        handler$dpg000$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        setSneakBypass(): com.mna.api.items.TieredItem;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        refundMana(arg0: Internal.ItemStack_, arg1: number, arg2: Internal.Player_): number;
        getMaxMana(): number;
        setFireResistant(arg0: boolean): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        getEatingSound(): Internal.SoundEvent;
        canBeDepleted(): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        getDamage(arg0: Internal.ItemStack_): number;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        wait(arg0: number, arg1: number): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        setNameKey(arg0: string): void;
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
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        consumeMana(arg0: Internal.ItemStack_, arg1: number, arg2: Internal.Player_): boolean;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        shouldOverrideMultiplayerNbt(): boolean;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        setCraftingRemainder(arg0: Internal.Item_): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        get maxIre(): number
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
        get minIre(): number
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
        set cachedTier(arg0: number)
        get faction(): Internal.IFaction
        get cachedTier(): number
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        get maxMana(): number
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
    type SmitingRingItem_ = SmitingRingItem;
    interface IBlockMatcher {
        MatchStateProperties(arg0: Internal.BlockState_, arg1: Internal.BlockState_, ...arg2: string[]): boolean;
        abstract getId(): ResourceLocation;
        abstract match(arg0: Internal.Level_, arg1: BlockPos_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockState_, arg5: boolean): boolean;
        abstract getValidBlocks(arg0: Internal.Block_): Internal.ArrayList<Internal.ItemStack>;
        getValidItems(arg0: Internal.Block_): Internal.ArrayList<Internal.ItemStack>;
        get id(): ResourceLocation
    }
    type IBlockMatcher_ = IBlockMatcher;
    interface JadeRenderBackgroundCallback {
        abstract onRender(arg0: Internal.ITooltipRenderer_, arg1: Internal.Rect2i_, arg2: Internal.GuiGraphics_, arg3: Internal.Accessor_<any>, arg4: Internal.JadeBeforeRenderCallback$ColorSetting_): boolean;
        (arg0: Internal.ITooltipRenderer, arg1: Internal.Rect2i, arg2: Internal.GuiGraphics, arg3: Internal.Accessor<any>, arg4: Internal.JadeBeforeRenderCallback$ColorSetting): boolean;
    }
    type JadeRenderBackgroundCallback_ = JadeRenderBackgroundCallback | ((arg0: Internal.ITooltipRenderer, arg1: Internal.Rect2i, arg2: Internal.GuiGraphics, arg3: Internal.Accessor<any>, arg4: Internal.JadeBeforeRenderCallback$ColorSetting)=> boolean);
}
declare namespace com.yungnickyoung.minecraft.betteroceanmonuments.mixin.accessor {
    interface WorldGenRegionAccessor {
        abstract getFirstPos(): Internal.ChunkPos;
        abstract getSize(): number;
        abstract getCache(): Internal.List<Internal.ChunkAccess>;
        abstract getStructureManager(): Internal.StructureManager;
        abstract getLastPos(): Internal.ChunkPos;
        get firstPos(): Internal.ChunkPos
        get size(): number
        get cache(): Internal.List<Internal.ChunkAccess>
        get structureManager(): Internal.StructureManager
        get lastPos(): Internal.ChunkPos
    }
    type WorldGenRegionAccessor_ = WorldGenRegionAccessor;
}
declare namespace io.netty.util.concurrent {
    interface Future <V> extends Internal.Future<V> {
        abstract isSuccess(): boolean;
        abstract isDone(): boolean;
        abstract cancel(arg0: boolean): boolean;
        abstract addListener(arg0: Internal.GenericFutureListener_<io.netty.util.concurrent.Future<V>>): this;
        abstract awaitUninterruptibly(arg0: number, arg1: Internal.TimeUnit_): boolean;
        abstract cause(): Internal.Throwable;
        abstract get(): V;
        abstract getNow(): V;
        abstract await(arg0: number, arg1: Internal.TimeUnit_): boolean;
        abstract awaitUninterruptibly(): this;
        abstract syncUninterruptibly(): this;
        abstract await(arg0: number): boolean;
        abstract removeListener(arg0: Internal.GenericFutureListener_<io.netty.util.concurrent.Future<V>>): this;
        abstract removeListeners(...arg0: Internal.GenericFutureListener_<io.netty.util.concurrent.Future<V>>[]): this;
        abstract await(): this;
        abstract isCancellable(): boolean;
        abstract addListeners(...arg0: Internal.GenericFutureListener_<io.netty.util.concurrent.Future<V>>[]): this;
        abstract get(arg0: number, arg1: Internal.TimeUnit_): V;
        abstract sync(): this;
        abstract awaitUninterruptibly(arg0: number): boolean;
        abstract isCancelled(): boolean;
        get success(): boolean
        get done(): boolean
        get now(): V
        get cancellable(): boolean
        get cancelled(): boolean
    }
    type Future_<V> = Future<V>;
}
declare namespace icyllis.modernui.view {
    abstract class ViewGroup extends icyllis.modernui.view.View implements Internal.ViewParent, Internal.ViewManager {
        constructor(context: icyllis.modernui.core.Context_)
        callOnClick(): boolean;
        getLocationInWindow(outLocation: number[]): void;
        updateViewLayout(view: icyllis.modernui.view.View_, params: Internal.ViewGroup$LayoutParams_): void;
        isTextDirectionInherited(): boolean;
        isDuplicateParentStateEnabled(): boolean;
        removeAllViews(): void;
        setPivotY(pivotY: number): void;
        requestRectangleOnScreen(rectangle: Internal.Rect_): boolean;
        performLongClick(x: number, y: number): boolean;
        setVisibility(visibility: number): void;
        removeOnLayoutChangeListener(listener: Internal.View$OnLayoutChangeListener_): void;
        clearDisappearingChildren(): void;
        setHasTranslationTransientState(hasTranslationTransientState: boolean): void;
        setScaleX(scaleX: number): void;
        setRotation(rotation: number): void;
        onDrawForeground(canvas: Internal.Canvas_): void;
        isHorizontalFadingEdgeEnabled(): boolean;
        setScrollY(value: number): void;
        addView(child: icyllis.modernui.view.View_, width: number, height: number): void;
        getViewRoot(): Internal.ViewRoot;
        onNestedPreScroll(target: icyllis.modernui.view.View_, dx: number, dy: number, consumed: number[], type: number): void;
        startActionModeForChild(originalView: icyllis.modernui.view.View_, callback: Internal.ActionMode$Callback_, type: number): Internal.ActionMode;
        onDragEvent(event: Internal.DragEvent_): boolean;
        onStopNestedScroll(target: icyllis.modernui.view.View_, type: number): void;
        getElevation(): number;
        setTop(top: number): void;
        getMeasuredWidthAndState(): number;
        dispatchKeyEvent(event: icyllis.modernui.view.KeyEvent_): boolean;
        setNextFocusLeftId(nextFocusLeftId: number): void;
        setClickable(clickable: boolean): void;
        getFocusables(direction: number): Internal.ArrayList<icyllis.modernui.view.View>;
        setKeyboardNavigationCluster(isCluster: boolean): void;
        setForegroundGravity(gravity: number): void;
        isHapticFeedbackEnabled(): boolean;
        startActionMode(callback: Internal.ActionMode$Callback_): Internal.ActionMode;
        removeAllViewsInLayout(): void;
        pointInView(localX: number, localY: number, slop: number): boolean;
        getMeasuredHeightAndState(): number;
        hasOnClickListeners(): boolean;
        setPivotX(pivotX: number): void;
        canScrollHorizontally(direction: number): boolean;
        getVerticalScrollbarThumbDrawable(): icyllis.modernui.graphics.drawable.Drawable;
        abstract canResolveTextDirection(): boolean;
        setScaleY(scaleY: number): void;
        isInScrollingContainer(): boolean;
        isTransitionGroup(): boolean;
        abstract canResolveLayoutDirection(): boolean;
        setHapticFeedbackEnabled(hapticFeedbackEnabled: boolean): void;
        resolveTextAlignment(): boolean;
        onInterceptTouchEvent(ev: Internal.MotionEvent_): boolean;
        cancelLongPress(): void;
        clearFocus(): void;
        childHasTransientStateChanged(child: icyllis.modernui.view.View_, childHasTransientState: boolean): void;
        hasFocus(): boolean;
        getClipChildren(): boolean;
        addTouchables(views: Internal.ArrayList_<icyllis.modernui.view.View>): void;
        setNextFocusDownId(nextFocusDownId: number): void;
        forceLayout(): void;
        dispatchStartTemporaryDetach(): void;
        setOnLongClickListener(l: Internal.View$OnLongClickListener_): void;
        wait(arg0: number): void;
        computeScroll(): void;
        "addView(icyllis.modernui.view.View,icyllis.modernui.view.ViewGroup$LayoutParams)"(child: icyllis.modernui.view.View_, params: Internal.ViewGroup$LayoutParams_): void;
        isShowingLayoutBounds(): boolean;
        getScaleY(): number;
        setScrollX(value: number): void;
        layout(l: number, t: number, r: number, b: number): void;
        onGenericMotionEvent(event: Internal.MotionEvent_): boolean;
        offsetDescendantRectToMyCoords(descendant: icyllis.modernui.view.View_, rect: Internal.Rect_): void;
        getLocationOnScreen(outLocation: number[]): void;
        getNextFocusForwardId(): number;
        invalidateDrawable(drawable: icyllis.modernui.graphics.drawable.Drawable_): void;
        getTooltipText(): Internal.CharSequence;
        postInvalidateDelayed(delayMilliseconds: number): void;
        getLocalVisibleRect(r: Internal.Rect_): boolean;
        startViewTransition(view: icyllis.modernui.view.View_): void;
        setStateListAnimator(stateListAnimator: Internal.StateListAnimator_): void;
        getPaddingRight(): number;
        setNextClusterForwardId(nextClusterForwardId: number): void;
        getGlobalVisibleRect(r: Internal.Rect_): boolean;
        static generateViewId(): number;
        dispatchWindowVisibilityChanged(visibility: number): void;
        setLayoutTransition(transition: Internal.LayoutTransition_): void;
        "addView(icyllis.modernui.view.View,int,icyllis.modernui.view.ViewGroup$LayoutParams)"(child: icyllis.modernui.view.View_, index: number, params: Internal.ViewGroup$LayoutParams_): void;
        dispatchGenericMotionEvent(event: Internal.MotionEvent_): boolean;
        getScrollBarFadeDuration(): number;
        setFocusedInCluster(): void;
        abstract canResolveTextAlignment(): boolean;
        resolvePadding(): void;
        resolveLayoutParams(): void;
        resolveTextDirection(): boolean;
        getNextClusterForwardId(): number;
        performContextClick(x: number, y: number): boolean;
        postDelayed(action: Internal.Runnable_, delayMillis: number): boolean;
        hasFocusable(): boolean;
        toLocalMotionEvent(ev: Internal.MotionEvent_): boolean;
        setTextAlignment(textAlignment: number): void;
        getId(): number;
        getFadingEdge(): number;
        addOnLayoutChangeListener(listener: Internal.View$OnLayoutChangeListener_): void;
        addView(child: icyllis.modernui.view.View_, index: number, params: Internal.ViewGroup$LayoutParams_): void;
        onFinishTemporaryDetach(): void;
        getTransientView(position: number): icyllis.modernui.view.View;
        hasExplicitFocusable(): boolean;
        setOnHoverListener(l: Internal.View$OnHoverListener_): void;
        postInvalidate(): void;
        isForegroundInsidePadding(): boolean;
        endViewTransition(view: icyllis.modernui.view.View_): void;
        requestChildRectangleOnScreen(child: icyllis.modernui.view.View_, rectangle: Internal.Rect_, immediate: boolean): boolean;
        hasOnLongClickListeners(): boolean;
        removeViewInLayout(view: icyllis.modernui.view.View_): void;
        equals(arg0: any): boolean;
        getBottom(): number;
        setVerticalFadingEdgeEnabled(verticalFadingEdgeEnabled: boolean): void;
        abstract getParent(): Internal.ViewParent;
        getTransientViewCount(): number;
        clearChildFocus(child: icyllis.modernui.view.View_): void;
        unscheduleDrawable(who: icyllis.modernui.graphics.drawable.Drawable_): void;
        getVisibility(): number;
        getBoundsOnScreen(outRect: Internal.Rect_, clipToParent: boolean): void;
        getScrollBarSize(): number;
        getPivotX(): number;
        setScrollBarDefaultDelayBeforeFade(scrollBarDefaultDelayBeforeFade: number): void;
        mapRectFromViewToScreenCoords(rect: Internal.RectF_, clipToParent: boolean): void;
        isVerticalScrollBarEnabled(): boolean;
        getMeasuredHeight(): number;
        setLayoutParams(params: Internal.ViewGroup$LayoutParams_): void;
        bringChildToFront(child: icyllis.modernui.view.View_): void;
        removeView(view: icyllis.modernui.view.View_): void;
        getHasOverlappingRendering(): boolean;
        dispatchNestedFling(velocityX: number, velocityY: number, consumed: boolean): boolean;
        getAlpha(): number;
        getWidth(): number;
        setForeground(foreground: icyllis.modernui.graphics.drawable.Drawable_): void;
        isClickable(): boolean;
        setAnimationMatrix(matrix: icyllis.modernui.graphics.Matrix_): void;
        getAnimationMatrix(): icyllis.modernui.graphics.Matrix;
        setOnCreateContextMenuListener(l: Internal.View$OnCreateContextMenuListener_): void;
        findViewByPredicate<T extends icyllis.modernui.view.View>(predicate: Internal.Predicate_<icyllis.modernui.view.View>): T;
        setHorizontalScrollbarThumbDrawable(drawable: icyllis.modernui.graphics.drawable.Drawable_): void;
        playSoundEffect(soundConstant: number): void;
        indexOfChild(child: icyllis.modernui.view.View_): number;
        getChildVisibleRect(child: icyllis.modernui.view.View_, r: Internal.Rect_, offset: icyllis.modernui.graphics.Point_, forceParentCheck: boolean): boolean;
        getBackground(): icyllis.modernui.graphics.drawable.Drawable;
        getPaddingEnd(): number;
        dispatchDrawableHotspotChanged(x: number, y: number): void;
        dispatchTouchEvent(ev: Internal.MotionEvent_): boolean;
        suppressLayout(suppress: boolean): void;
        getChildCount(): number;
        onHoverChanged(hovered: boolean): void;
        setTextDirection(textDirection: number): void;
        getRotation(): number;
        dispatchPointerEvent(event: Internal.MotionEvent_): boolean;
        getPivotY(): number;
        performContextClick(): boolean;
        getFocusedRect(r: Internal.Rect_): void;
        findFocus(): icyllis.modernui.view.View;
        getInverseMatrix(): icyllis.modernui.graphics.Matrix;
        getContext(): icyllis.modernui.core.Context;
        onVisibilityAggregated(isVisible: boolean): void;
        onKeyUp(keyCode: number, event: icyllis.modernui.view.KeyEvent_): boolean;
        showContextMenuForChild(originalView: icyllis.modernui.view.View_, x: number, y: number): boolean;
        getScrollBarStyle(): number;
        getX(): number;
        getHorizontalScrollbarThumbDrawable(): icyllis.modernui.graphics.drawable.Drawable;
        getNextFocusLeftId(): number;
        setMinimumHeight(minHeight: number): void;
        addKeyboardNavigationClusters(views: Internal.Collection_<icyllis.modernui.view.View>, direction: number): void;
        setOnGenericMotionListener(l: Internal.View$OnGenericMotionListener_): void;
        requestFocus(direction: number, previouslyFocusedRect: Internal.Rect_): boolean;
        requestTransitionStart(transition: Internal.LayoutTransition_): void;
        abstract getLayoutDirection(): number;
        setNestedScrollingEnabled(enabled: boolean): void;
        getRawTextDirection(): number;
        scrollBy(x: number, y: number): void;
        addView(child: icyllis.modernui.view.View_, params: Internal.ViewGroup$LayoutParams_): void;
        hasWindowFocus(): boolean;
        setSelected(selected: boolean): void;
        focusSearch(focused: icyllis.modernui.view.View_, direction: number): icyllis.modernui.view.View;
        isShown(): boolean;
        requestChildFocus(child: icyllis.modernui.view.View_, focused: icyllis.modernui.view.View_): void;
        notify(): void;
        startActionMode(callback: Internal.ActionMode$Callback_, type: number): Internal.ActionMode;
        isScrollbarFadingEnabled(): boolean;
        resolveLayoutDirection(): boolean;
        setTransitionAlpha(alpha: number): void;
        getViewTreeObserver(): Internal.ViewTreeObserver;
        setOnContextClickListener(l: Internal.View$OnContextClickListener_): void;
        getLayoutParams(): Internal.ViewGroup$LayoutParams;
        postInvalidateOnAnimation(): void;
        getTransitionName(): string;
        getRotationX(): number;
        setScrollIndicators(indicators: number): void;
        setRotationX(rotationX: number): void;
        onResolvePointerIcon(event: Internal.MotionEvent_): Internal.PointerIcon;
        isTextAlignmentInherited(): boolean;
        setNextFocusForwardId(nextFocusForwardId: number): void;
        abstract getTextAlignment(): number;
        setIsRootNamespace(isRoot: boolean): void;
        setFocusable(focusable: number): void;
        setFocusedByDefault(isFocusedByDefault: boolean): void;
        isContextClickable(): boolean;
        hasTranslationTransientState(): boolean;
        isActivated(): boolean;
        drawableHotspotChanged(x: number, y: number): void;
        isPressed(): boolean;
        getScaleX(): number;
        "setFocusable(int)"(focusable: number): void;
        setHorizontalScrollBarEnabled(enabled: boolean): void;
        offsetChildrenTopAndBottom(offset: number): void;
        onInterceptHoverEvent(event: Internal.MotionEvent_): boolean;
        getChildAt(index: number): icyllis.modernui.view.View;
        getTouchables(): Internal.ArrayList<icyllis.modernui.view.View>;
        isRootNamespace(): boolean;
        getChildDrawingOrder(drawingPosition: number): number;
        removeCallbacks(action: Internal.Runnable_): void;
        isEnabled(): boolean;
        isLayoutDirectionInherited(): boolean;
        hasIdentityMatrix(): boolean;
        isInLayout(): boolean;
        setOnFocusChangeListener(l: Internal.View$OnFocusChangeListener_): void;
        transformMatrixToLocal(matrix: icyllis.modernui.graphics.Matrix_): void;
        getHorizontalScrollbarTrackDrawable(): icyllis.modernui.graphics.drawable.Drawable;
        getMinimumHeight(): number;
        dispatchFinishTemporaryDetach(): void;
        setTooltipText(tooltipText: Internal.CharSequence_): void;
        getVerticalScrollbarWidth(): number;
        static getDefaultSize(size: number, measureSpec: number): number;
        isHorizontalScrollBarEnabled(): boolean;
        setScrollIndicators(indicators: number, mask: number): void;
        getRotationY(): number;
        setRotationY(rotationY: number): void;
        transformFromViewToWindowSpace(inOutLocation: number[]): void;
        getOnLongClickListener(): Internal.View$OnLongClickListener;
        dispatchKeyShortcutEvent(event: icyllis.modernui.view.KeyEvent_): boolean;
        hashCode(): number;
        setHorizontalFadingEdgeEnabled(horizontalFadingEdgeEnabled: boolean): void;
        getMatrix(): icyllis.modernui.graphics.Matrix;
        isLongClickable(): boolean;
        onHoverEvent(event: Internal.MotionEvent_): boolean;
        getScrollIndicators(): number;
        onWindowFocusChanged(hasWindowFocus: boolean): void;
        stopNestedScroll(type: number): void;
        dp(value: number): number;
        getVerticalScrollbarTrackDrawable(): icyllis.modernui.graphics.drawable.Drawable;
        setScrollBarSize(scrollBarSize: number): void;
        setElevation(elevation: number): void;
        requestFocus(): boolean;
        setBackground(background: icyllis.modernui.graphics.drawable.Drawable_): void;
        findViewById<T extends icyllis.modernui.view.View>(id: number): T;
        getLayoutTransition(): Internal.LayoutTransition;
        isFocusableInTouchMode(): boolean;
        setScrollbarFadingEnabled(fadeScrollbars: boolean): void;
        getBaseline(): number;
        getScrollX(): number;
        setAlpha(alpha: number): void;
        removeTransientView(view: icyllis.modernui.view.View_): void;
        setTransitionGroup(isTransitionGroup: boolean): void;
        getTooltipView(): icyllis.modernui.view.View;
        transformMatrixToGlobal(matrix: icyllis.modernui.graphics.Matrix_): void;
        removeViews(start: number, count: number): void;
        getTranslationX(): number;
        getPaddingTop(): number;
        focusableViewAvailable(v: icyllis.modernui.view.View_): void;
        abstract isLayoutRequested(): boolean;
        addOnAttachStateChangeListener(listener: Internal.View$OnAttachStateChangeListener_): void;
        static getChildMeasureSpec(spec: number, padding: number, childDimension: number): number;
        onNestedScroll(target: icyllis.modernui.view.View_, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number, type: number, consumed: number[]): void;
        getRight(): number;
        setTag(key: number, tag: any): void;
        getBoundsOnScreen(outRect: Internal.Rect_): void;
        setClipChildren(clipChildren: boolean): void;
        dispatchNestedPreScroll(dx: number, dy: number, consumed: number[], offsetInWindow: number[], type: number): boolean;
        getTouchscreenBlocksFocus(): boolean;
        onStartNestedScroll(child: icyllis.modernui.view.View_, target: icyllis.modernui.view.View_, axes: number, type: number): boolean;
        hasNestedScrollingParent(type: number): boolean;
        getClass(): typeof any;
        setDescendantFocusability(focusability: number): void;
        removeViewsInLayout(start: number, count: number): void;
        getStateListAnimator(): Internal.StateListAnimator;
        addTransientView(view: icyllis.modernui.view.View_, index: number): void;
        setLeft(left: number): void;
        getScrollY(): number;
        onStartTemporaryDetach(): void;
        setActivated(activated: boolean): void;
        getOverScrollMode(): number;
        getGlobalVisibleRect(r: Internal.Rect_, globalOffset: icyllis.modernui.graphics.Point_): boolean;
        getHeight(): number;
        setContextClickable(contextClickable: boolean): void;
        getTag(key: number): any;
        onNestedPreFling(target: icyllis.modernui.view.View_, velocityX: number, velocityY: number): boolean;
        setScrollBarStyle(style: number): void;
        getTranslationY(): number;
        scheduleDrawable(who: icyllis.modernui.graphics.drawable.Drawable_, what: Internal.Runnable_, when: number): void;
        setLongClickable(longClickable: boolean): void;
        performLongClick(): boolean;
        willNotDraw(): boolean;
        getForeground(): icyllis.modernui.graphics.drawable.Drawable;
        setTransitionName(transitionName: string): void;
        setMinimumWidth(minWidth: number): void;
        abstract isTextAlignmentResolved(): boolean;
        getFadingEdgeLength(): number;
        postOnAnimation(action: Internal.Runnable_): void;
        removeOnAttachStateChangeListener(listener: Internal.View$OnAttachStateChangeListener_): void;
        getHitRect(outRect: Internal.Rect_): void;
        addView(child: icyllis.modernui.view.View_, index: number): void;
        forceHasOverlappingRendering(hasOverlappingRendering: boolean): void;
        setHasTransientState(hasTransientState: boolean): void;
        draw(canvas: Internal.Canvas_): void;
        cancelPendingInputEvents(): void;
        setRight(right: number): void;
        setClipToPadding(clipToPadding: boolean): void;
        setY(y: number): void;
        scrollTo(x: number, y: number): void;
        getY(): number;
        getTranslationZ(): number;
        static resolveSize(size: number, measureSpec: number): number;
        abstract keyboardNavigationClusterSearch(arg0: icyllis.modernui.view.View_, arg1: number): icyllis.modernui.view.View;
        canScrollVertically(direction: number): boolean;
        setLayoutDirection(layoutDirection: number): void;
        getFocusable(): number;
        jumpDrawablesToCurrentState(): void;
        wait(): void;
        setBottom(bottom: number): void;
        setNextFocusRightId(nextFocusRightId: number): void;
        setWillNotDraw(willNotDraw: boolean): void;
        resetPivot(): void;
        abstract getTextDirection(): number;
        setVerticalScrollBarEnabled(enabled: boolean): void;
        getDrawingRect(outRect: Internal.Rect_): void;
        refreshDrawableState(): void;
        setPressed(pressed: boolean): void;
        onKeyShortcut(keyCode: number, event: icyllis.modernui.view.KeyEvent_): boolean;
        static resolveSizeAndState(size: number, measureSpec: number, childMeasuredState: number): number;
        dispatchNestedPreFling(velocityX: number, velocityY: number): boolean;
        setZ(z: number): void;
        "addView(icyllis.modernui.view.View,int,int)"(child: icyllis.modernui.view.View_, width: number, height: number): void;
        isKeyboardNavigationCluster(): boolean;
        isVerticalFadingEdgeEnabled(): boolean;
        setOnDragListener(l: Internal.View$OnDragListener_): void;
        dispatchSetActivated(activated: boolean): void;
        isLayoutRtl(): boolean;
        getZ(): number;
        addFocusables(views: Internal.ArrayList_<icyllis.modernui.view.View>, direction: number): void;
        getLeft(): number;
        setHovered(hovered: boolean): void;
        getClipToPadding(): boolean;
        getRevealOnFocusHint(): boolean;
        setOnKeyListener(l: Internal.View$OnKeyListener_): void;
        setHorizontalScrollbarTrackDrawable(drawable: icyllis.modernui.graphics.drawable.Drawable_): void;
        isInTouchMode(): boolean;
        setSoundEffectsEnabled(soundEffectsEnabled: boolean): void;
        requestRectangleOnScreen(rectangle: Internal.Rect_, immediate: boolean): boolean;
        setEnabled(enabled: boolean): void;
        onNestedFling(target: icyllis.modernui.view.View_, velocityX: number, velocityY: number, consumed: boolean): boolean;
        setOnScrollChangeListener(l: Internal.View$OnScrollChangeListener_): void;
        requireViewById<T extends icyllis.modernui.view.View>(id: number): T;
        getFocusedChild(): icyllis.modernui.view.View;
        getMeasuredState(): number;
        requestFocus(direction: number): boolean;
        setAddStatesFromChildren(addsStates: boolean): void;
        abstract requestLayout(): void;
        isNestedScrollingEnabled(): boolean;
        getNextFocusDownId(): number;
        setVerticalScrollbarTrackDrawable(drawable: icyllis.modernui.graphics.drawable.Drawable_): void;
        setTranslationY(translationY: number): void;
        setPadding(left: number, top: number, right: number, bottom: number): void;
        performClick(): boolean;
        findViewByPredicateInsideOut<T extends icyllis.modernui.view.View>(start: icyllis.modernui.view.View_, predicate: Internal.Predicate_<icyllis.modernui.view.View>): T;
        abstract isTextDirectionResolved(): boolean;
        getScrollBarDefaultDelayBeforeFade(): number;
        toGlobalMotionEvent(ev: Internal.MotionEvent_): boolean;
        focusSearch(direction: number): icyllis.modernui.view.View;
        removeViewAt(index: number): void;
        setTransitionVisibility(visibility: number): void;
        isFocused(): boolean;
        setX(x: number): void;
        isTemporarilyDetached(): boolean;
        setOnClickListener(l: Internal.View$OnClickListener_): void;
        "addView(icyllis.modernui.view.View,int)"(child: icyllis.modernui.view.View_, index: number): void;
        onNestedScrollAccepted(child: icyllis.modernui.view.View_, target: icyllis.modernui.view.View_, axes: number, type: number): void;
        isAttachedToWindow(): boolean;
        getDescendantFocusability(): number;
        isFocusedByDefault(): boolean;
        "setFocusable(boolean)"(focusable: boolean): void;
        onTouchEvent(event: Internal.MotionEvent_): boolean;
        unscheduleDrawable(who: icyllis.modernui.graphics.drawable.Drawable_, what: Internal.Runnable_): void;
        onKeyDown(keyCode: number, event: icyllis.modernui.view.KeyEvent_): boolean;
        getPaddingStart(): number;
        performHapticFeedback(feedbackConstant: number): boolean;
        setFocusableInTouchMode(focusableInTouchMode: boolean): void;
        hasTransientState(): boolean;
        isFocusable(): boolean;
        setTranslationZ(translationZ: number): void;
        getPaddingLeft(): number;
        restoreDefaultFocus(): boolean;
        toString(): string;
        notifyAll(): void;
        getTransitionAlpha(): number;
        invalidate(): void;
        setScrollBarFadeDuration(scrollBarFadeDuration: number): void;
        getNextFocusUpId(): number;
        shouldDelayChildPressedState(): boolean;
        abstract isLayoutDirectionResolved(): boolean;
        offsetTopAndBottom(offset: number): void;
        static combineMeasuredStates(curState: number, newState: number): number;
        setOverScrollMode(overScrollMode: number): void;
        getChildVisibleRect(child: icyllis.modernui.view.View_, r: Internal.Rect_, offset: icyllis.modernui.graphics.Point_): boolean;
        showContextMenu(): boolean;
        getHandler(): Internal.Handler;
        setVerticalScrollbarThumbDrawable(drawable: icyllis.modernui.graphics.drawable.Drawable_): void;
        getForegroundGravity(): number;
        setTouchscreenBlocksFocus(touchscreenBlocksFocus: boolean): void;
        isPivotSet(): boolean;
        setOnTouchListener(l: Internal.View$OnTouchListener_): void;
        requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
        setId(id: number): void;
        onCancelPendingInputEvents(): void;
        getNextFocusRightId(): number;
        sp(value: number): number;
        setDuplicateParentStateEnabled(enabled: boolean): void;
        performHapticFeedback(feedbackConstant: number, flags: number): boolean;
        addStatesFromChildren(): boolean;
        addView(child: icyllis.modernui.view.View_): void;
        isHovered(): boolean;
        getRawTextAlignment(): number;
        getVerticalFadingEdgeLength(): number;
        onResolveDrawables(layoutDirection: number): void;
        abstract createContextMenu(arg0: Internal.ContextMenu_): void;
        getMinimumWidth(): number;
        getRawLayoutDirection(): number;
        dispatchSetSelected(selected: boolean): void;
        isPaddingRelative(): boolean;
        isLayoutSuppressed(): boolean;
        startNestedScroll(axes: number, type: number): boolean;
        getRootView(): icyllis.modernui.view.View;
        getPaddingBottom(): number;
        childDrawableStateChanged(child: icyllis.modernui.view.View_): void;
        setNextFocusUpId(nextFocusUpId: number): void;
        wait(arg0: number, arg1: number): void;
        measure(widthMeasureSpec: number, heightMeasureSpec: number): void;
        hasOverlappingRendering(): boolean;
        isSoundEffectsEnabled(): boolean;
        dispatchNestedScroll(dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number, offsetInWindow: number[], type: number, consumed: number[]): boolean;
        getNestedScrollAxes(): number;
        getTop(): number;
        addFocusables(views: Internal.ArrayList_<icyllis.modernui.view.View>, direction: number, focusableMode: number): void;
        getWindowVisibility(): number;
        showContextMenu(x: number, y: number): boolean;
        resolveRtlPropertiesIfNeeded(): boolean;
        getMeasuredWidth(): number;
        post(action: Internal.Runnable_): boolean;
        setTranslationX(translationX: number): void;
        startDragAndDrop(localState: any, shadow: Internal.View$DragShadow_, flags: number): boolean;
        getTransientViewIndex(position: number): number;
        isSelected(): boolean;
        dispatchWindowFocusChanged(hasFocus: boolean): void;
        getOnFocusChangeListener(): Internal.View$OnFocusChangeListener;
        isLaidOut(): boolean;
        postOnAnimationDelayed(action: Internal.Runnable_, delayMillis: number): void;
        getKeyDispatcherState(): Internal.KeyEvent$DispatcherState;
        offsetLeftAndRight(offset: number): void;
        setFocusable(focusable: boolean): void;
        setPaddingRelative(start: number, top: number, end: number, bottom: number): void;
        offsetRectIntoDescendantCoords(descendant: icyllis.modernui.view.View_, rect: Internal.Rect_): void;
        getDrawableState(): number[];
        setRevealOnFocusHint(revealOnFocus: boolean): void;
        get textDirectionInherited(): boolean
        get duplicateParentStateEnabled(): boolean
        set pivotY(pivotY: number)
        set visibility(visibility: number)
        set hasTranslationTransientState(hasTranslationTransientState: boolean)
        set scaleX(scaleX: number)
        set rotation(rotation: number)
        get horizontalFadingEdgeEnabled(): boolean
        set scrollY(value: number)
        get viewRoot(): Internal.ViewRoot
        get elevation(): number
        set top(top: number)
        get measuredWidthAndState(): number
        set nextFocusLeftId(nextFocusLeftId: number)
        set clickable(clickable: boolean)
        set keyboardNavigationCluster(isCluster: boolean)
        set foregroundGravity(gravity: number)
        get hapticFeedbackEnabled(): boolean
        get measuredHeightAndState(): number
        set pivotX(pivotX: number)
        get verticalScrollbarThumbDrawable(): icyllis.modernui.graphics.drawable.Drawable
        set scaleY(scaleY: number)
        get inScrollingContainer(): boolean
        get transitionGroup(): boolean
        set hapticFeedbackEnabled(hapticFeedbackEnabled: boolean)
        get clipChildren(): boolean
        set nextFocusDownId(nextFocusDownId: number)
        set onLongClickListener(l: Internal.View$OnLongClickListener_)
        get showingLayoutBounds(): boolean
        get scaleY(): number
        set scrollX(value: number)
        get nextFocusForwardId(): number
        get tooltipText(): Internal.CharSequence
        set stateListAnimator(stateListAnimator: Internal.StateListAnimator_)
        get paddingRight(): number
        set nextClusterForwardId(nextClusterForwardId: number)
        set layoutTransition(transition: Internal.LayoutTransition_)
        get scrollBarFadeDuration(): number
        get nextClusterForwardId(): number
        set textAlignment(textAlignment: number)
        get id(): number
        get fadingEdge(): number
        set onHoverListener(l: Internal.View$OnHoverListener_)
        get foregroundInsidePadding(): boolean
        get bottom(): number
        set verticalFadingEdgeEnabled(verticalFadingEdgeEnabled: boolean)
        get parent(): Internal.ViewParent
        get transientViewCount(): number
        get visibility(): number
        get scrollBarSize(): number
        get pivotX(): number
        set scrollBarDefaultDelayBeforeFade(scrollBarDefaultDelayBeforeFade: number)
        get verticalScrollBarEnabled(): boolean
        get measuredHeight(): number
        set layoutParams(params: Internal.ViewGroup$LayoutParams_)
        get hasOverlappingRendering(): boolean
        get alpha(): number
        get width(): number
        set foreground(foreground: icyllis.modernui.graphics.drawable.Drawable_)
        get clickable(): boolean
        set animationMatrix(matrix: icyllis.modernui.graphics.Matrix_)
        get animationMatrix(): icyllis.modernui.graphics.Matrix
        set onCreateContextMenuListener(l: Internal.View$OnCreateContextMenuListener_)
        set horizontalScrollbarThumbDrawable(drawable: icyllis.modernui.graphics.drawable.Drawable_)
        get background(): icyllis.modernui.graphics.drawable.Drawable
        get paddingEnd(): number
        get childCount(): number
        set textDirection(textDirection: number)
        get rotation(): number
        get pivotY(): number
        get inverseMatrix(): icyllis.modernui.graphics.Matrix
        get context(): icyllis.modernui.core.Context
        get scrollBarStyle(): number
        get x(): number
        get horizontalScrollbarThumbDrawable(): icyllis.modernui.graphics.drawable.Drawable
        get nextFocusLeftId(): number
        set minimumHeight(minHeight: number)
        set onGenericMotionListener(l: Internal.View$OnGenericMotionListener_)
        get layoutDirection(): number
        set nestedScrollingEnabled(enabled: boolean)
        get rawTextDirection(): number
        set selected(selected: boolean)
        get shown(): boolean
        get scrollbarFadingEnabled(): boolean
        set transitionAlpha(alpha: number)
        get viewTreeObserver(): Internal.ViewTreeObserver
        set onContextClickListener(l: Internal.View$OnContextClickListener_)
        get layoutParams(): Internal.ViewGroup$LayoutParams
        get transitionName(): string
        get rotationX(): number
        set scrollIndicators(indicators: number)
        set rotationX(rotationX: number)
        get textAlignmentInherited(): boolean
        set nextFocusForwardId(nextFocusForwardId: number)
        get textAlignment(): number
        set isRootNamespace(isRoot: boolean)
        set focusable(focusable: number)
        set focusedByDefault(isFocusedByDefault: boolean)
        get contextClickable(): boolean
        get activated(): boolean
        get pressed(): boolean
        get scaleX(): number
        set "focusable(int)"(focusable: number)
        set horizontalScrollBarEnabled(enabled: boolean)
        get touchables(): Internal.ArrayList<icyllis.modernui.view.View>
        get rootNamespace(): boolean
        get enabled(): boolean
        get layoutDirectionInherited(): boolean
        get inLayout(): boolean
        set onFocusChangeListener(l: Internal.View$OnFocusChangeListener_)
        get horizontalScrollbarTrackDrawable(): icyllis.modernui.graphics.drawable.Drawable
        get minimumHeight(): number
        set tooltipText(tooltipText: Internal.CharSequence_)
        get verticalScrollbarWidth(): number
        get horizontalScrollBarEnabled(): boolean
        get rotationY(): number
        set rotationY(rotationY: number)
        get onLongClickListener(): Internal.View$OnLongClickListener
        set horizontalFadingEdgeEnabled(horizontalFadingEdgeEnabled: boolean)
        get matrix(): icyllis.modernui.graphics.Matrix
        get longClickable(): boolean
        get scrollIndicators(): number
        get verticalScrollbarTrackDrawable(): icyllis.modernui.graphics.drawable.Drawable
        set scrollBarSize(scrollBarSize: number)
        set elevation(elevation: number)
        set background(background: icyllis.modernui.graphics.drawable.Drawable_)
        get layoutTransition(): Internal.LayoutTransition
        get focusableInTouchMode(): boolean
        set scrollbarFadingEnabled(fadeScrollbars: boolean)
        get baseline(): number
        get scrollX(): number
        set alpha(alpha: number)
        set transitionGroup(isTransitionGroup: boolean)
        get tooltipView(): icyllis.modernui.view.View
        get translationX(): number
        get paddingTop(): number
        get layoutRequested(): boolean
        get right(): number
        set clipChildren(clipChildren: boolean)
        get touchscreenBlocksFocus(): boolean
        get class(): typeof any
        set descendantFocusability(focusability: number)
        get stateListAnimator(): Internal.StateListAnimator
        set left(left: number)
        get scrollY(): number
        set activated(activated: boolean)
        get overScrollMode(): number
        get height(): number
        set contextClickable(contextClickable: boolean)
        set scrollBarStyle(style: number)
        get translationY(): number
        set longClickable(longClickable: boolean)
        get foreground(): icyllis.modernui.graphics.drawable.Drawable
        set transitionName(transitionName: string)
        set minimumWidth(minWidth: number)
        get textAlignmentResolved(): boolean
        get fadingEdgeLength(): number
        set hasTransientState(hasTransientState: boolean)
        set right(right: number)
        set clipToPadding(clipToPadding: boolean)
        set y(y: number)
        get y(): number
        get translationZ(): number
        set layoutDirection(layoutDirection: number)
        get focusable(): number
        set bottom(bottom: number)
        set nextFocusRightId(nextFocusRightId: number)
        set willNotDraw(willNotDraw: boolean)
        get textDirection(): number
        set verticalScrollBarEnabled(enabled: boolean)
        set pressed(pressed: boolean)
        set z(z: number)
        get keyboardNavigationCluster(): boolean
        get verticalFadingEdgeEnabled(): boolean
        set onDragListener(l: Internal.View$OnDragListener_)
        get layoutRtl(): boolean
        get z(): number
        get left(): number
        set hovered(hovered: boolean)
        get clipToPadding(): boolean
        get revealOnFocusHint(): boolean
        set onKeyListener(l: Internal.View$OnKeyListener_)
        set horizontalScrollbarTrackDrawable(drawable: icyllis.modernui.graphics.drawable.Drawable_)
        get inTouchMode(): boolean
        set soundEffectsEnabled(soundEffectsEnabled: boolean)
        set enabled(enabled: boolean)
        set onScrollChangeListener(l: Internal.View$OnScrollChangeListener_)
        get focusedChild(): icyllis.modernui.view.View
        get measuredState(): number
        set addStatesFromChildren(addsStates: boolean)
        get nestedScrollingEnabled(): boolean
        get nextFocusDownId(): number
        set verticalScrollbarTrackDrawable(drawable: icyllis.modernui.graphics.drawable.Drawable_)
        set translationY(translationY: number)
        get textDirectionResolved(): boolean
        get scrollBarDefaultDelayBeforeFade(): number
        set transitionVisibility(visibility: number)
        get focused(): boolean
        set x(x: number)
        get temporarilyDetached(): boolean
        set onClickListener(l: Internal.View$OnClickListener_)
        get attachedToWindow(): boolean
        get descendantFocusability(): number
        get focusedByDefault(): boolean
        set "focusable(boolean)"(focusable: boolean)
        get paddingStart(): number
        set focusableInTouchMode(focusableInTouchMode: boolean)
        get focusable(): boolean
        set translationZ(translationZ: number)
        get paddingLeft(): number
        get transitionAlpha(): number
        set scrollBarFadeDuration(scrollBarFadeDuration: number)
        get nextFocusUpId(): number
        get layoutDirectionResolved(): boolean
        set overScrollMode(overScrollMode: number)
        get handler(): Internal.Handler
        set verticalScrollbarThumbDrawable(drawable: icyllis.modernui.graphics.drawable.Drawable_)
        get foregroundGravity(): number
        set touchscreenBlocksFocus(touchscreenBlocksFocus: boolean)
        get pivotSet(): boolean
        set onTouchListener(l: Internal.View$OnTouchListener_)
        set id(id: number)
        get nextFocusRightId(): number
        set duplicateParentStateEnabled(enabled: boolean)
        get hovered(): boolean
        get rawTextAlignment(): number
        get verticalFadingEdgeLength(): number
        get minimumWidth(): number
        get rawLayoutDirection(): number
        get paddingRelative(): boolean
        get layoutSuppressed(): boolean
        get rootView(): icyllis.modernui.view.View
        get paddingBottom(): number
        set nextFocusUpId(nextFocusUpId: number)
        get soundEffectsEnabled(): boolean
        get nestedScrollAxes(): number
        get top(): number
        get windowVisibility(): number
        get measuredWidth(): number
        set translationX(translationX: number)
        get selected(): boolean
        get onFocusChangeListener(): Internal.View$OnFocusChangeListener
        get laidOut(): boolean
        get keyDispatcherState(): Internal.KeyEvent$DispatcherState
        set focusable(focusable: boolean)
        get drawableState(): number[]
        set revealOnFocusHint(revealOnFocus: boolean)
        static readonly FOCUS_BLOCK_DESCENDANTS: (393216) & (number);
        static readonly FOCUS_AFTER_DESCENDANTS: (262144) & (number);
        static readonly FOCUS_BEFORE_DESCENDANTS: (131072) & (number);
    }
    type ViewGroup_ = ViewGroup;
}
declare namespace com.mojang.datafixers.types {
    abstract class Type <A> implements Internal.App<Internal.Type$Mu, A> {
        constructor()
        findType<FT, FR>(arg0: com.mojang.datafixers.types.Type_<FT>, arg1: com.mojang.datafixers.types.Type_<FR>, arg2: Internal.Type$TypeMatcher_<FT, FR>, arg3: boolean): Internal.Either<Internal.TypedOptic<A, any, FT, FR>, Internal.Type$FieldNotFoundException>;
        codec(): Internal.Codec<A>;
        getClass(): typeof any;
        findChoiceType(arg0: string, arg1: number): Internal.Optional<Internal.TaggedChoice$TaggedChoiceType<any>>;
        readTyped<T>(arg0: Internal.DynamicOps_<T>, arg1: T): Internal.DataResult<com.mojang.datafixers.util.Pair<Internal.Typed<A>, T>>;
        writeDynamic<T>(arg0: Internal.DynamicOps_<T>, arg1: A): Internal.DataResult<Internal.Dynamic<T>>;
        all(arg0: Internal.TypeRewriteRule_, arg1: boolean, arg2: boolean): Internal.RewriteResult<A, any>;
        getSetType<FT, FR>(arg0: Internal.OpticFinder_<FT>, arg1: com.mojang.datafixers.types.Type_<FR>): com.mojang.datafixers.types.Type<any>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        readAndWrite<T>(arg0: Internal.DynamicOps_<T>, arg1: com.mojang.datafixers.types.Type_<any>, arg2: Internal.TypeRewriteRule_, arg3: Internal.PointFreeRule_, arg4: T): Internal.DataResult<T>;
        rewrite(arg0: Internal.TypeRewriteRule_, arg1: Internal.PointFreeRule_): Internal.Optional<Internal.RewriteResult<A, any>>;
        findField(arg0: string): Internal.OpticFinder<any>;
        ifSame<B>(arg0: com.mojang.datafixers.types.Type_<B>, arg1: B): Internal.Optional<A>;
        one(arg0: Internal.TypeRewriteRule_): Internal.Optional<Internal.RewriteResult<A, any>>;
        everywhere(arg0: Internal.TypeRewriteRule_, arg1: Internal.PointFreeRule_, arg2: boolean, arg3: boolean): Internal.Optional<Internal.RewriteResult<A, any>>;
        pointTyped(arg0: Internal.DynamicOps_<any>): Internal.Optional<Internal.Typed<A>>;
        point(arg0: Internal.DynamicOps_<any>): Internal.Optional<A>;
        static unbox<A>(arg0: Internal.App_<Internal.Type$Mu, A>): com.mojang.datafixers.types.Type<A>;
        readTyped<T>(arg0: Internal.Dynamic_<T>): Internal.DataResult<com.mojang.datafixers.util.Pair<Internal.Typed<A>, T>>;
        abstract equals(arg0: any, arg1: boolean, arg2: boolean): boolean;
        findTypeCached<FT, FR>(arg0: com.mojang.datafixers.types.Type_<FT>, arg1: com.mojang.datafixers.types.Type_<FR>, arg2: Internal.Type$TypeMatcher_<FT, FR>, arg3: boolean): Internal.Either<Internal.TypedOptic<A, any, FT, FR>, Internal.Type$FieldNotFoundException>;
        findTypeInChildren<FT, FR>(arg0: com.mojang.datafixers.types.Type_<FT>, arg1: com.mojang.datafixers.types.Type_<FR>, arg2: Internal.Type$TypeMatcher_<FT, FR>, arg3: boolean): Internal.Either<Internal.TypedOptic<A, any, FT, FR>, Internal.Type$FieldNotFoundException>;
        ifSame<B>(arg0: com.mojang.datafixers.types.Type_<B>, arg1: Internal.RewriteResult_<B, any>): Internal.Optional<Internal.RewriteResult<A, any>>;
        static opticView<S, T, A, B>(arg0: com.mojang.datafixers.types.Type_<S>, arg1: Internal.RewriteResult_<A, B>, arg2: Internal.TypedOptic_<S, T, A, B>): Internal.RewriteResult<S, T>;
        toString(): string;
        read<T>(arg0: Internal.DynamicOps_<T>, arg1: Internal.TypeRewriteRule_, arg2: Internal.PointFreeRule_, arg3: T): Internal.DataResult<com.mojang.datafixers.util.Pair<Internal.Optional<any>, T>>;
        notifyAll(): void;
        findCheckedType(arg0: number): Internal.Optional<com.mojang.datafixers.types.Type<any>>;
        "ifSame(com.mojang.datafixers.types.Type,java.lang.Object)"<B>(arg0: com.mojang.datafixers.types.Type_<B>, arg1: B): Internal.Optional<A>;
        findFieldTypeOpt(arg0: string): Internal.Optional<com.mojang.datafixers.types.Type<any>>;
        hashCode(): number;
        read<T>(arg0: Internal.Dynamic_<T>): Internal.DataResult<com.mojang.datafixers.util.Pair<A, Internal.Dynamic<T>>>;
        findFieldType(arg0: string): com.mojang.datafixers.types.Type<any>;
        wait(): void;
        rewriteOrNop(arg0: Internal.TypeRewriteRule_): Internal.RewriteResult<A, any>;
        ifSame<B>(arg0: Internal.Typed_<B>): Internal.Optional<A>;
        wait(arg0: number): void;
        finder(): Internal.OpticFinder<A>;
        "ifSame(com.mojang.datafixers.types.Type,com.mojang.datafixers.RewriteResult)"<B>(arg0: com.mojang.datafixers.types.Type_<B>, arg1: Internal.RewriteResult_<B, any>): Internal.Optional<Internal.RewriteResult<A, any>>;
        equals(arg0: any): boolean;
        write<T>(arg0: Internal.DynamicOps_<T>, arg1: A): Internal.DataResult<T>;
        abstract buildTemplate(): Internal.TypeTemplate;
        updateMu(arg0: Internal.RecursiveTypeFamily_): com.mojang.datafixers.types.Type<any>;
        template(): Internal.TypeTemplate;
        get class(): typeof any
    }
    type Type_<A> = Type<A>;
}
