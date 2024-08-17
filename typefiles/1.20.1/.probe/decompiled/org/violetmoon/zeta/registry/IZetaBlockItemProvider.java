package org.violetmoon.zeta.registry;

import net.minecraft.world.item.BlockItem;
import net.minecraft.world.item.Item;
import net.minecraft.world.level.block.Block;

public interface IZetaBlockItemProvider {

    BlockItem provideItemBlock(Block var1, Item.Properties var2);
}