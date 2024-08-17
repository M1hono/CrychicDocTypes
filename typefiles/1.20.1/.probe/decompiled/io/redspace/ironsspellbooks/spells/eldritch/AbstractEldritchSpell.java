package io.redspace.ironsspellbooks.spells.eldritch;

import io.redspace.ironsspellbooks.api.magic.MagicData;
import io.redspace.ironsspellbooks.api.spells.AbstractSpell;
import io.redspace.ironsspellbooks.api.spells.CastResult;
import io.redspace.ironsspellbooks.api.spells.CastSource;
import io.redspace.ironsspellbooks.player.ClientMagicData;
import net.minecraft.ChatFormatting;
import net.minecraft.network.chat.Component;
import net.minecraft.network.chat.MutableComponent;
import net.minecraft.network.chat.Style;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.entity.player.Player;

public abstract class AbstractEldritchSpell extends AbstractSpell {

    public static final Style ELDRITCH_OBFUSCATED_STYLE = Style.EMPTY.withObfuscated(true).withFont(new ResourceLocation("alt"));

    @Override
    public MutableComponent getDisplayName(Player player) {
        boolean obfuscateName = player != null && this.obfuscateStats(player);
        return super.getDisplayName(player).withStyle(obfuscateName ? ELDRITCH_OBFUSCATED_STYLE : Style.EMPTY);
    }

    @Override
    public boolean allowLooting() {
        return false;
    }

    @Override
    public boolean canBeCraftedBy(Player player) {
        return this.isLearned(player);
    }

    @Override
    public boolean obfuscateStats(Player player) {
        return !this.isLearned(player);
    }

    @Override
    public CastResult canBeCastedBy(int spellLevel, CastSource castSource, MagicData playerMagicData, Player player) {
        return !this.isLearned(player) ? new CastResult(CastResult.Type.FAILURE, Component.translatable("ui.irons_spellbooks.cast_error_unlearned").withStyle(ChatFormatting.RED)) : super.canBeCastedBy(spellLevel, castSource, playerMagicData, player);
    }

    @Override
    public boolean isLearned(Player player) {
        if (player == null) {
            return false;
        } else {
            return player.f_19853_.isClientSide ? ClientMagicData.getSyncedSpellData(player).isSpellLearned(this) : MagicData.getPlayerMagicData(player).getSyncedData().isSpellLearned(this);
        }
    }

    @Override
    public boolean needsLearning() {
        return true;
    }
}