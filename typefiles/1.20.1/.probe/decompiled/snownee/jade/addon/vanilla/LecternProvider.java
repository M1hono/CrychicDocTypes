package snownee.jade.addon.vanilla;

import net.minecraft.client.resources.language.I18n;
import net.minecraft.nbt.CompoundTag;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.Items;
import net.minecraft.world.level.block.LecternBlock;
import net.minecraft.world.level.block.entity.LecternBlockEntity;
import net.minecraft.world.level.block.state.BlockState;
import snownee.jade.api.BlockAccessor;
import snownee.jade.api.IBlockComponentProvider;
import snownee.jade.api.IServerDataProvider;
import snownee.jade.api.ITooltip;
import snownee.jade.api.Identifiers;
import snownee.jade.api.config.IPluginConfig;
import snownee.jade.api.ui.IDisplayHelper;
import snownee.jade.api.ui.IElementHelper;

public enum LecternProvider implements IBlockComponentProvider, IServerDataProvider<BlockAccessor> {

    INSTANCE;

    @Override
    public void appendTooltip(ITooltip tooltip, BlockAccessor accessor, IPluginConfig config) {
        BlockState state = accessor.getBlockState();
        if ((Boolean) state.m_61143_(LecternBlock.HAS_BOOK) && accessor.getServerData().contains("Book")) {
            ItemStack stack = ItemStack.of(accessor.getServerData().getCompound("Book"));
            if (!stack.isEmpty()) {
                IElementHelper helper = IElementHelper.get();
                tooltip.add(helper.smallItem(stack));
                tooltip.append(helper.text(IDisplayHelper.get().stripColor(stack.getHoverName())).message(I18n.get("narration.jade.bookName", stack.getHoverName().getString())));
            }
        }
    }

    public void appendServerData(CompoundTag data, BlockAccessor accessor) {
        ItemStack stack = ((LecternBlockEntity) accessor.getBlockEntity()).getBook();
        if (!stack.isEmpty() && (stack.hasCustomHoverName() || stack.getItem() != Items.WRITABLE_BOOK)) {
            data.put("Book", stack.save(new CompoundTag()));
        }
    }

    @Override
    public ResourceLocation getUid() {
        return Identifiers.MC_LECTERN;
    }
}