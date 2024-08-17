package snownee.kiwi.network;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Retention(RetentionPolicy.RUNTIME)
@Target({ ElementType.TYPE })
public @interface KiwiPacket {

    String value();

    KiwiPacket.Direction dir() default KiwiPacket.Direction.PLAY_TO_SERVER;

    public static enum Direction {

        PLAY_TO_SERVER, PLAY_TO_CLIENT, LOGIN_TO_SERVER, LOGIN_TO_CLIENT
    }
}