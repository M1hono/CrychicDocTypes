package noobanidus.mods.lootr.client.item;

import com.mojang.blaze3d.vertex.PoseStack;
import net.minecraft.client.Minecraft;
import net.minecraft.client.model.geom.EntityModelSet;
import net.minecraft.client.renderer.BlockEntityWithoutLevelRenderer;
import net.minecraft.client.renderer.MultiBufferSource;
import net.minecraft.client.renderer.blockentity.BlockEntityRenderDispatcher;
import net.minecraft.core.BlockPos;
import net.minecraft.world.item.ItemDisplayContext;
import net.minecraft.world.item.ItemStack;
import noobanidus.mods.lootr.block.entities.LootrShulkerBlockEntity;
import noobanidus.mods.lootr.init.ModBlocks;

public class LootrShulkerItemRenderer extends BlockEntityWithoutLevelRenderer {

    private static LootrShulkerItemRenderer INSTANCE = null;

    private final BlockEntityRenderDispatcher blockEntityRenderDispatcher;

    private final LootrShulkerBlockEntity tile;

    public LootrShulkerItemRenderer(BlockEntityRenderDispatcher pBlockEntityRenderDispatcher, EntityModelSet pEntityModelSet) {
        super(pBlockEntityRenderDispatcher, pEntityModelSet);
        this.blockEntityRenderDispatcher = pBlockEntityRenderDispatcher;
        this.tile = new LootrShulkerBlockEntity(BlockPos.ZERO, ModBlocks.CHEST.get().m_49966_());
    }

    public LootrShulkerItemRenderer() {
        this(Minecraft.getInstance().getBlockEntityRenderDispatcher(), Minecraft.getInstance().getEntityModels());
    }

    public static LootrShulkerItemRenderer getInstance() {
        if (INSTANCE == null) {
            INSTANCE = new LootrShulkerItemRenderer();
        }
        return INSTANCE;
    }

    @Override
    public void renderByItem(ItemStack stack, ItemDisplayContext mode, PoseStack matrixStack, MultiBufferSource buffer, int combinedLight, int combinedOverlay) {
        this.blockEntityRenderDispatcher.renderItem(this.tile, matrixStack, buffer, combinedLight, combinedOverlay);
    }
}