package net.mehvahdjukaar.amendments.common;

import net.minecraft.util.StringRepresentable;

public interface IBellConnections {

    IBellConnections.BellConnection amendments$getConnected();

    void amendments$setConnected(IBellConnections.BellConnection var1);

    public static enum BellConnection implements StringRepresentable {

        NONE, CHAIN, ROPE;

        public boolean isRope() {
            return this == ROPE;
        }

        public boolean isEmpty() {
            return this == NONE;
        }

        public boolean isChain() {
            return this == CHAIN;
        }

        @Override
        public String getSerializedName() {
            return switch(this) {
                case NONE ->
                    "none";
                case ROPE ->
                    "rope";
                case CHAIN ->
                    "chain";
            };
        }
    }
}