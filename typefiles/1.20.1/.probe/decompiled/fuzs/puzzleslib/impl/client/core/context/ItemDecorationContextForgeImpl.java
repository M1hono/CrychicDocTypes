package fuzs.puzzleslib.impl.client.core.context;

import com.google.common.base.Preconditions;
import fuzs.puzzleslib.api.client.core.v1.context.ItemDecorationContext;
import fuzs.puzzleslib.api.client.init.v1.DynamicItemDecorator;
import java.util.Objects;
import java.util.function.BiConsumer;
import net.minecraft.client.gui.Font;
import net.minecraft.client.gui.GuiGraphics;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.level.ItemLike;
import net.minecraftforge.client.IItemDecorator;

public record ItemDecorationContextForgeImpl(BiConsumer<ItemLike, IItemDecorator> consumer) implements ItemDecorationContext {

    @Override
    public void registerItemDecorator(final DynamicItemDecorator decorator, ItemLike... items) {
        Objects.requireNonNull(decorator, "decorator is null");
        Objects.requireNonNull(items, "items is null");
        Preconditions.checkPositionIndex(1, items.length, "items is empty");
        for (ItemLike item : items) {
            Objects.requireNonNull(item, "item is null");
            this.consumer.accept(item, new IItemDecorator() {

                @Override
                public boolean render(GuiGraphics guiGraphics, Font font, ItemStack stack, int xOffset, int yOffset) {
                    return decorator.renderItemDecorations(guiGraphics, font, stack, xOffset, yOffset);
                }
            });
        }
    }
}