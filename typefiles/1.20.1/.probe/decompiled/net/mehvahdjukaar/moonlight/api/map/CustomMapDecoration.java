package net.mehvahdjukaar.moonlight.api.map;

import java.util.Objects;
import net.mehvahdjukaar.moonlight.api.map.type.MapDecorationType;
import net.mehvahdjukaar.moonlight.api.util.Utils;
import net.minecraft.network.FriendlyByteBuf;
import net.minecraft.network.chat.Component;
import org.jetbrains.annotations.Nullable;

public class CustomMapDecoration {

    private final MapDecorationType<?, ?> type;

    private Component displayName;

    private byte x;

    private byte y;

    private byte rot;

    boolean isClientOnly;

    public CustomMapDecoration(MapDecorationType<?, ?> type, byte x, byte y, byte rot, @Nullable Component displayName) {
        this.type = type;
        this.x = x;
        this.y = y;
        this.rot = rot;
        this.displayName = displayName;
    }

    public MapDecorationType<?, ?> getType() {
        return this.type;
    }

    public byte getX() {
        return this.x;
    }

    public byte getY() {
        return this.y;
    }

    public byte getRot() {
        return this.rot;
    }

    public void setDisplayName(Component displayName) {
        this.displayName = displayName;
    }

    public void setRot(byte rot) {
        this.rot = rot;
    }

    public void setX(byte x) {
        this.x = x;
    }

    public void setY(byte y) {
        this.y = y;
    }

    @Nullable
    public Component getDisplayName() {
        return this.displayName;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        } else if (obj instanceof CustomMapDecoration mapDecoration) {
            if (this.type != mapDecoration.type) {
                return false;
            } else if (this.rot != mapDecoration.rot) {
                return false;
            } else if (this.x != mapDecoration.x) {
                return false;
            } else {
                return this.y != mapDecoration.y ? false : Objects.equals(this.displayName, mapDecoration.displayName);
            }
        } else {
            return false;
        }
    }

    public int hashCode() {
        int i = Utils.getID(this.type).hashCode();
        i = 31 * i + this.x;
        i = 31 * i + this.y;
        i = 31 * i + this.rot;
        return 31 * i + Objects.hashCode(this.displayName);
    }

    public void saveToBuffer(FriendlyByteBuf buffer) {
        buffer.writeByte(this.getX());
        buffer.writeByte(this.getY());
        buffer.writeByte(this.getRot() & 15);
        if (this.getDisplayName() != null) {
            buffer.writeBoolean(true);
            buffer.writeComponent(this.getDisplayName());
        } else {
            buffer.writeBoolean(false);
        }
    }

    public CustomMapDecoration(MapDecorationType<?, ?> type, FriendlyByteBuf buffer) {
        this(type, buffer.readByte(), buffer.readByte(), (byte) (buffer.readByte() & 15), buffer.readBoolean() ? buffer.readComponent() : null);
    }
}