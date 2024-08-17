package com.corosus.coroutil.util;

import com.corosus.coroutil.repack.de.androidpit.colorthief.ColorThief;
import it.unimi.dsi.fastutil.ints.IntArrays;
import java.awt.image.BufferedImage;
import net.minecraft.client.Minecraft;
import net.minecraft.client.renderer.texture.MissingTextureAtlasSprite;
import net.minecraft.client.renderer.texture.TextureAtlasSprite;
import net.minecraft.client.resources.model.BakedModel;
import net.minecraft.world.level.block.state.BlockState;

public class CoroUtilColor {

    public static int[] getColors(BlockState state) {
        BakedModel model = Minecraft.getInstance().getBlockRenderer().getBlockModelShaper().getBlockModel(state);
        if (model != null && !model.isCustomRenderer()) {
            TextureAtlasSprite sprite = model.getParticleIcon();
            if (sprite != null && !sprite.contents().name().equals(MissingTextureAtlasSprite.getLocation())) {
                return getColors(sprite);
            }
        }
        return IntArrays.EMPTY_ARRAY;
    }

    public static int getPixelRGBA(TextureAtlasSprite textureAtlasSprite, int frameIndex, int x, int y) {
        if (textureAtlasSprite.contents().animatedTexture != null) {
            x += textureAtlasSprite.contents().animatedTexture.getFrameX(frameIndex) * textureAtlasSprite.contents().width();
            y += textureAtlasSprite.contents().animatedTexture.getFrameY(frameIndex) * textureAtlasSprite.contents().height();
        }
        return textureAtlasSprite.contents().originalImage.getPixelRGBA(x, y);
    }

    public static int[] getColors(TextureAtlasSprite sprite) {
        int width = sprite.contents().width();
        int height = sprite.contents().height();
        int frames = sprite.contents().getFrameCount();
        BufferedImage img = new BufferedImage(width, height * frames, 6);
        for (int i = 0; i < frames; i++) {
            for (int x = 0; x < width; x++) {
                for (int y = 0; y < height; y++) {
                    int abgr = getPixelRGBA(sprite, i, x, y);
                    int red = abgr & 0xFF;
                    int green = abgr >> 8 & 0xFF;
                    int blue = abgr >> 16 & 0xFF;
                    int alpha = abgr >> 24 & 0xFF;
                    img.setRGB(x, y + i * height, alpha << 24 | red << 16 | green << 8 | blue);
                }
            }
        }
        int[][] colorData = ColorThief.getPalette(img, 6, 5, true);
        if (colorData == null) {
            return IntArrays.EMPTY_ARRAY;
        } else {
            int[] ret = new int[colorData.length];
            for (int i = 0; i < ret.length; i++) {
                ret[i] = getColor(colorData[i]);
            }
            return ret;
        }
    }

    private static int getColor(int[] colorData) {
        float mr = 1.0F;
        float mg = 1.0F;
        float mb = 1.0F;
        return 0xFF000000 | (int) ((float) colorData[0] * mr) << 16 | (int) ((float) colorData[1] * mg) << 8 | (int) ((float) colorData[2] * mb);
    }
}