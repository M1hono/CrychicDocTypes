package net.mehvahdjukaar.supplementaries.common.entities.trades;

import com.mojang.serialization.Codec;
import java.util.function.Supplier;
import net.mehvahdjukaar.moonlight.api.trades.ModItemListing;
import net.mehvahdjukaar.supplementaries.common.block.tiles.PresentBlockTile;
import net.mehvahdjukaar.supplementaries.common.utils.MiscUtils;
import net.mehvahdjukaar.supplementaries.reg.ModRegistry;
import net.minecraft.core.BlockPos;
import net.minecraft.util.RandomSource;
import net.minecraft.world.entity.Entity;
import net.minecraft.world.item.DyeColor;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.trading.MerchantOffer;
import net.minecraft.world.level.ItemLike;
import net.minecraft.world.level.block.Block;

public record PresentItemListing(ModItemListing original) implements ModItemListing {

    public static final Codec<PresentItemListing> CODEC = ModItemListing.CODEC.xmap(PresentItemListing::new, w -> w.original).fieldOf("trade").codec();

    @Override
    public MerchantOffer getOffer(Entity entity, RandomSource random) {
        MerchantOffer originalOffer = this.original.m_213663_(entity, random);
        if (MiscUtils.FESTIVITY.isChristmas()) {
            PresentBlockTile dummyTile = new PresentBlockTile(BlockPos.ZERO, ((Block) ((Supplier) ModRegistry.PRESENTS.get(null)).get()).defaultBlockState());
            if (originalOffer == null) {
                return null;
            } else {
                dummyTile.m_6836_(0, originalOffer.getResult());
                dummyTile.setSender(entity.getName().getString());
                dummyTile.setPublic();
                ItemStack stack = dummyTile.getPresentItem((ItemLike) ((Supplier) ModRegistry.PRESENTS.get(DyeColor.values()[random.nextInt(DyeColor.values().length)])).get());
                return new MerchantOffer(originalOffer.getBaseCostA(), originalOffer.getCostB(), stack, originalOffer.getUses(), originalOffer.getMaxUses(), originalOffer.getXp(), originalOffer.getPriceMultiplier(), originalOffer.getDemand());
            }
        } else {
            return originalOffer;
        }
    }

    @Override
    public Codec<? extends ModItemListing> getCodec() {
        return CODEC;
    }

    @Override
    public int getLevel() {
        return this.original.getLevel();
    }

    @Override
    public boolean isValid() {
        return this.original.isValid();
    }
}