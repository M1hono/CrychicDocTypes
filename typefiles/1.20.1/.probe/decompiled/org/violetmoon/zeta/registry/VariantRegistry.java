package org.violetmoon.zeta.registry;

import java.util.LinkedList;
import java.util.List;
import java.util.function.Function;
import net.minecraft.core.registries.BuiltInRegistries;
import net.minecraft.resources.ResourceKey;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.item.CreativeModeTab;
import net.minecraft.world.level.block.Block;
import net.minecraft.world.level.block.Blocks;
import net.minecraft.world.level.block.FlowerPotBlock;
import net.minecraft.world.level.block.state.BlockBehaviour;
import net.minecraft.world.level.material.PushReaction;
import org.jetbrains.annotations.Nullable;
import org.violetmoon.zeta.Zeta;
import org.violetmoon.zeta.block.IZetaBlock;
import org.violetmoon.zeta.block.ZetaSlabBlock;
import org.violetmoon.zeta.block.ZetaStairsBlock;
import org.violetmoon.zeta.block.ZetaWallBlock;

public class VariantRegistry {

    protected final Zeta zeta;

    public final List<Block> slabs = new LinkedList();

    public final List<Block> stairs = new LinkedList();

    public final List<Block> walls = new LinkedList();

    public VariantRegistry(Zeta zeta) {
        this.zeta = zeta;
    }

    public Block addSlabStairsWall(IZetaBlock block, @Nullable ResourceKey<CreativeModeTab> tab) {
        this.addWall(block, tab);
        this.addSlabAndStairs(block, tab);
        return block.getBlock();
    }

    public IZetaBlock addSlabAndStairs(IZetaBlock block, @Nullable ResourceKey<CreativeModeTab> tab) {
        this.addSlab(block, tab);
        this.addStairs(block, tab);
        return block;
    }

    public IZetaBlock addSlab(IZetaBlock block, @Nullable ResourceKey<CreativeModeTab> tab) {
        this.slabs.add(new ZetaSlabBlock(block, tab).setCondition(block::doesConditionApply));
        return block;
    }

    public IZetaBlock addStairs(IZetaBlock block, @Nullable ResourceKey<CreativeModeTab> tab) {
        this.stairs.add(new ZetaStairsBlock(block, tab).setCondition(block::doesConditionApply));
        return block;
    }

    public IZetaBlock addWall(IZetaBlock block, @Nullable ResourceKey<CreativeModeTab> tab) {
        this.walls.add(new ZetaWallBlock(block, tab).setCondition(block::doesConditionApply));
        return block;
    }

    public FlowerPotBlock addFlowerPot(Block block, String name, Function<BlockBehaviour.Properties, BlockBehaviour.Properties> propertiesFunc) {
        BlockBehaviour.Properties props = BlockBehaviour.Properties.of().strength(0.0F).pushReaction(PushReaction.DESTROY);
        props = (BlockBehaviour.Properties) propertiesFunc.apply(props);
        FlowerPotBlock potted = new FlowerPotBlock(() -> (FlowerPotBlock) Blocks.FLOWER_POT, () -> block, props);
        this.zeta.renderLayerRegistry.put(potted, RenderLayerRegistry.Layer.CUTOUT);
        ResourceLocation resLoc = this.zeta.registry.getRegistryName(block, BuiltInRegistries.BLOCK);
        if (resLoc == null) {
            resLoc = new ResourceLocation("missingno");
        }
        this.zeta.registry.registerBlock(potted, "potted_" + name, false);
        this.zeta.pottedPlantRegistry.addPot(resLoc, potted);
        return potted;
    }

    public static BlockBehaviour.Properties realStateCopy(IZetaBlock parent) {
        BlockBehaviour.Properties props = BlockBehaviour.Properties.copy(parent.getBlock());
        if (parent instanceof VariantRegistry.IVariantsShouldBeEmissive) {
            props = props.emissiveRendering((s, r, p) -> true);
        }
        return props;
    }

    public interface IVariantsShouldBeEmissive {
    }
}