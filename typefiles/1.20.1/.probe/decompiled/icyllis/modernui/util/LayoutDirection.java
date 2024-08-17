package icyllis.modernui.util;

import org.jetbrains.annotations.ApiStatus.Internal;

public final class LayoutDirection {

    @Internal
    public static final int UNDEFINED = -1;

    public static final int LTR = 0;

    public static final int RTL = 1;

    public static final int INHERIT = 2;

    public static final int LOCALE = 3;

    private LayoutDirection() {
    }
}