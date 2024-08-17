package net.mehvahdjukaar.supplementaries.common.items;

import java.util.function.Supplier;
import net.mehvahdjukaar.moonlight.api.client.ICustomItemRendererProvider;
import net.mehvahdjukaar.moonlight.api.client.ItemStackRenderer;
import net.mehvahdjukaar.supplementaries.client.renderers.items.EndermanHeadItemRenderer;
import net.minecraft.core.Direction;
import net.minecraft.world.entity.monster.EnderMan;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.StandingAndWallBlockItem;
import net.minecraft.world.level.block.Block;

public class EndermanHeadItem extends StandingAndWallBlockItem implements ICustomItemRendererProvider {

    public EndermanHeadItem(Block block, Block block2, Item.Properties properties) {
        super(block, block2, properties, Direction.DOWN);
    }

    public boolean isEnderMask(ItemStack stack, Player player, EnderMan endermanEntity) {
        return true;
    }

    @Override
    public Supplier<ItemStackRenderer> getRendererFactory() {
        return EndermanHeadItemRenderer::new;
    }
}