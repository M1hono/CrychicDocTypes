package com.yungnickyoung.minecraft.yungsapi.world.util;

import com.yungnickyoung.minecraft.yungsapi.mixin.accessor.BoundingBoxAccessor;
import net.minecraft.core.Direction;
import net.minecraft.world.level.levelgen.structure.BoundingBox;

public class BoundingBoxHelper {

    public static BoundingBox boxFromCoordsWithRotation(int x, int y, int z, int secondaryAxisLen, int yLen, int mainAxisLen, Direction mainAxis) {
        BoundingBox boundingBox = new BoundingBox(x, y, z, x, y + yLen - 1, z);
        switch(mainAxis) {
            case SOUTH:
                ((BoundingBoxAccessor) boundingBox).setMinX(x - (secondaryAxisLen - 1));
                ((BoundingBoxAccessor) boundingBox).setMaxZ(z + (mainAxisLen - 1));
                break;
            case WEST:
                ((BoundingBoxAccessor) boundingBox).setMinX(x - (mainAxisLen - 1));
                ((BoundingBoxAccessor) boundingBox).setMinZ(z - (secondaryAxisLen - 1));
                break;
            case EAST:
                ((BoundingBoxAccessor) boundingBox).setMaxX(x + (mainAxisLen - 1));
                ((BoundingBoxAccessor) boundingBox).setMaxZ(z + (secondaryAxisLen - 1));
                break;
            default:
                ((BoundingBoxAccessor) boundingBox).setMaxX(x + (secondaryAxisLen - 1));
                ((BoundingBoxAccessor) boundingBox).setMinZ(z - (mainAxisLen - 1));
        }
        return boundingBox;
    }
}