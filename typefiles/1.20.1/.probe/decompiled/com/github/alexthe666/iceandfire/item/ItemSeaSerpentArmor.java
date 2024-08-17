package com.github.alexthe666.iceandfire.item;

import com.github.alexthe666.citadel.server.item.CustomArmorMaterial;
import com.github.alexthe666.iceandfire.client.model.armor.ModelSeaSerpentArmor;
import com.github.alexthe666.iceandfire.enums.EnumSeaSerpent;
import java.util.List;
import java.util.function.Consumer;
import javax.annotation.Nullable;
import net.minecraft.ChatFormatting;
import net.minecraft.client.model.HumanoidModel;
import net.minecraft.network.chat.Component;
import net.minecraft.world.effect.MobEffectInstance;
import net.minecraft.world.effect.MobEffects;
import net.minecraft.world.entity.Entity;
import net.minecraft.world.entity.EquipmentSlot;
import net.minecraft.world.entity.LivingEntity;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.item.ArmorItem;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.TooltipFlag;
import net.minecraft.world.level.Level;
import net.minecraftforge.client.extensions.common.IClientItemExtensions;
import org.jetbrains.annotations.NotNull;

public class ItemSeaSerpentArmor extends ArmorItem {

    public EnumSeaSerpent armor_type;

    public ItemSeaSerpentArmor(EnumSeaSerpent armorType, CustomArmorMaterial material, ArmorItem.Type slot) {
        super(material, slot, new Item.Properties());
        this.armor_type = armorType;
    }

    @NotNull
    @Override
    public String getDescriptionId() {
        switch(this.f_265916_) {
            case HELMET:
                return "item.iceandfire.sea_serpent_helmet";
            case CHESTPLATE:
                return "item.iceandfire.sea_serpent_chestplate";
            case LEGGINGS:
                return "item.iceandfire.sea_serpent_leggings";
            case BOOTS:
                return "item.iceandfire.sea_serpent_boots";
            default:
                return "item.iceandfire.sea_serpent_helmet";
        }
    }

    public void initializeClient(Consumer<IClientItemExtensions> consumer) {
        consumer.accept(new IClientItemExtensions() {

            @NotNull
            @Override
            public HumanoidModel<?> getHumanoidArmorModel(LivingEntity LivingEntity, ItemStack itemStack, EquipmentSlot armorSlot, HumanoidModel<?> _default) {
                return new ModelSeaSerpentArmor(armorSlot == EquipmentSlot.LEGS || armorSlot == EquipmentSlot.HEAD);
            }
        });
    }

    public String getArmorTexture(ItemStack stack, Entity entity, EquipmentSlot slot, String type) {
        return "iceandfire:textures/models/armor/armor_tide_" + this.armor_type.resourceName + (slot == EquipmentSlot.LEGS ? "_legs.png" : ".png");
    }

    public void onArmorTick(ItemStack stack, Level world, Player player) {
        super.onArmorTick(stack, world, player);
        player.m_7292_(new MobEffectInstance(MobEffects.WATER_BREATHING, 50, 0, false, false));
        if (player.m_20070_()) {
            int headMod = player.getItemBySlot(EquipmentSlot.HEAD).getItem() instanceof ItemSeaSerpentArmor ? 1 : 0;
            int chestMod = player.getItemBySlot(EquipmentSlot.CHEST).getItem() instanceof ItemSeaSerpentArmor ? 1 : 0;
            int legMod = player.getItemBySlot(EquipmentSlot.LEGS).getItem() instanceof ItemSeaSerpentArmor ? 1 : 0;
            int footMod = player.getItemBySlot(EquipmentSlot.FEET).getItem() instanceof ItemSeaSerpentArmor ? 1 : 0;
            player.m_7292_(new MobEffectInstance(MobEffects.DAMAGE_BOOST, 50, headMod + chestMod + legMod + footMod - 1, false, false));
        }
    }

    @Override
    public void appendHoverText(@NotNull ItemStack stack, @Nullable Level worldIn, List<Component> tooltip, @NotNull TooltipFlag flagIn) {
        tooltip.add(Component.translatable("sea_serpent." + this.armor_type.resourceName).withStyle(this.armor_type.color));
        tooltip.add(Component.translatable("item.iceandfire.sea_serpent_armor.desc_0").withStyle(ChatFormatting.GRAY));
        tooltip.add(Component.translatable("item.iceandfire.sea_serpent_armor.desc_1").withStyle(ChatFormatting.GRAY));
    }
}