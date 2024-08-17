package io.github.lightman314.lightmanscurrency.common.blocks.traderblocks;

import com.google.common.collect.ImmutableList;
import io.github.lightman314.lightmanscurrency.LCText;
import io.github.lightman314.lightmanscurrency.api.traders.blocks.TraderBlockRotatable;
import io.github.lightman314.lightmanscurrency.common.blockentity.trader.ItemTraderBlockEntity;
import io.github.lightman314.lightmanscurrency.common.core.ModBlockEntities;
import io.github.lightman314.lightmanscurrency.common.items.TooltipItem;
import java.util.List;
import javax.annotation.Nullable;
import net.minecraft.core.BlockPos;
import net.minecraft.network.chat.Component;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.TooltipFlag;
import net.minecraft.world.level.BlockGetter;
import net.minecraft.world.level.block.entity.BlockEntity;
import net.minecraft.world.level.block.entity.BlockEntityType;
import net.minecraft.world.level.block.state.BlockBehaviour;
import net.minecraft.world.level.block.state.BlockState;
import org.jetbrains.annotations.NotNull;

public class NetworkItemTraderBlock extends TraderBlockRotatable {

    public static final int TRADER_COUNT_SMALL = 4;

    public static final int TRADER_COUNT_MEDIUM = 8;

    public static final int TRADER_COUNT_LARGE = 12;

    public static final int TRADER_COUNT_XLARGE = 16;

    private final int tradeCount;

    public NetworkItemTraderBlock(BlockBehaviour.Properties properties, int tradeCount) {
        super(properties);
        this.tradeCount = tradeCount;
    }

    @Override
    protected boolean isBlockOpaque() {
        return false;
    }

    @Override
    protected BlockEntity makeTrader(BlockPos pos, BlockState state) {
        return new ItemTraderBlockEntity(pos, state, this.tradeCount, true);
    }

    @Override
    protected BlockEntityType<?> traderType() {
        return ModBlockEntities.ITEM_TRADER.get();
    }

    @Override
    protected List<BlockEntityType<?>> validTraderTypes() {
        return ImmutableList.of(ModBlockEntities.ITEM_TRADER.get());
    }

    @Override
    public void appendHoverText(@NotNull ItemStack stack, @Nullable BlockGetter level, @NotNull List<Component> tooltip, @NotNull TooltipFlag flagIn) {
        TooltipItem.addTooltip(tooltip, LCText.TOOLTIP_ITEM_TRADER_NETWORK.asTooltip(this.tradeCount));
        super.m_5871_(stack, level, tooltip, flagIn);
    }
}