package vazkii.patchouli.common.item;

import java.util.List;
import net.minecraft.ChatFormatting;
import net.minecraft.core.registries.BuiltInRegistries;
import net.minecraft.nbt.CompoundTag;
import net.minecraft.network.chat.Component;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.server.level.ServerPlayer;
import net.minecraft.sounds.SoundEvent;
import net.minecraft.world.InteractionHand;
import net.minecraft.world.InteractionResult;
import net.minecraft.world.InteractionResultHolder;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.TooltipFlag;
import net.minecraft.world.level.Level;
import vazkii.patchouli.api.PatchouliAPI;
import vazkii.patchouli.client.book.BookEntry;
import vazkii.patchouli.common.base.PatchouliSounds;
import vazkii.patchouli.common.book.Book;
import vazkii.patchouli.common.book.BookRegistry;

public class ItemModBook extends Item {

    public static final String TAG_BOOK = "patchouli:book";

    public ItemModBook() {
        super(new Item.Properties().stacksTo(1));
    }

    public static float getCompletion(ItemStack stack) {
        Book book = getBook(stack);
        float progression = 0.0F;
        if (book != null) {
            int totalEntries = 0;
            int unlockedEntries = 0;
            for (BookEntry entry : book.getContents().entries.values()) {
                if (!entry.isSecret()) {
                    totalEntries++;
                    if (!entry.isLocked()) {
                        unlockedEntries++;
                    }
                }
            }
            progression = (float) unlockedEntries / Math.max(1.0F, (float) totalEntries);
        }
        return progression;
    }

    public static ItemStack forBook(Book book) {
        return forBook(book.id);
    }

    public static ItemStack forBook(ResourceLocation book) {
        ItemStack stack = new ItemStack(PatchouliItems.BOOK);
        CompoundTag cmp = new CompoundTag();
        cmp.putString("patchouli:book", book.toString());
        stack.setTag(cmp);
        return stack;
    }

    public String getCreatorModId(ItemStack stack) {
        Book book = getBook(stack);
        return book != null ? book.owner.getId() : BuiltInRegistries.ITEM.getKey(this).getNamespace();
    }

    public static Book getBook(ItemStack stack) {
        ResourceLocation res = getBookId(stack);
        return res == null ? null : (Book) BookRegistry.INSTANCE.books.get(res);
    }

    private static ResourceLocation getBookId(ItemStack stack) {
        if (stack.hasTag() && stack.getTag().contains("patchouli:book")) {
            String bookStr = stack.getTag().getString("patchouli:book");
            return ResourceLocation.tryParse(bookStr);
        } else {
            return null;
        }
    }

    @Override
    public Component getName(ItemStack stack) {
        Book book = getBook(stack);
        return (Component) (book != null ? Component.translatable(book.name) : super.getName(stack));
    }

    @Override
    public void appendHoverText(ItemStack stack, Level worldIn, List<Component> tooltip, TooltipFlag flagIn) {
        super.appendHoverText(stack, worldIn, tooltip, flagIn);
        ResourceLocation rl = getBookId(stack);
        if (flagIn.isAdvanced()) {
            tooltip.add(Component.literal("Book ID: " + rl).withStyle(ChatFormatting.GRAY));
        }
        Book book = getBook(stack);
        if (book != null && !book.getContents().isErrored()) {
            tooltip.add(book.getSubtitle().withStyle(ChatFormatting.GRAY));
        } else if (book == null) {
            if (rl == null) {
                tooltip.add(Component.translatable("item.patchouli.guide_book.undefined").withStyle(ChatFormatting.DARK_GRAY));
            } else {
                tooltip.add(Component.translatable("item.patchouli.guide_book.invalid", rl).withStyle(ChatFormatting.DARK_GRAY));
            }
        }
    }

    @Override
    public InteractionResultHolder<ItemStack> use(Level worldIn, Player playerIn, InteractionHand handIn) {
        ItemStack stack = playerIn.m_21120_(handIn);
        Book book = getBook(stack);
        if (book == null) {
            return new InteractionResultHolder<>(InteractionResult.FAIL, stack);
        } else {
            if (playerIn instanceof ServerPlayer) {
                PatchouliAPI.get().openBookGUI((ServerPlayer) playerIn, book.id);
                SoundEvent sfx = PatchouliSounds.getSound(book.openSound, PatchouliSounds.BOOK_OPEN);
                playerIn.playSound(sfx, 1.0F, (float) (0.7 + Math.random() * 0.4));
            }
            return new InteractionResultHolder<>(InteractionResult.SUCCESS, stack);
        }
    }
}