package dev.latvian.mods.rhino.mod.wrapper;

import java.util.UUID;
import org.jetbrains.annotations.Nullable;

public interface UUIDWrapper {

    static String toString(@Nullable UUID id) {
        if (id != null) {
            long msb = id.getMostSignificantBits();
            long lsb = id.getLeastSignificantBits();
            StringBuilder sb = new StringBuilder(32);
            digits(sb, msb >> 32, 8);
            digits(sb, msb >> 16, 4);
            digits(sb, msb, 4);
            digits(sb, lsb >> 48, 4);
            digits(sb, lsb, 12);
            return sb.toString();
        } else {
            return "";
        }
    }

    static void digits(StringBuilder sb, long val, int digits) {
        long hi = 1L << digits * 4;
        String s = Long.toHexString(hi | val & hi - 1L);
        sb.append(s, 1, s.length());
    }

    @Nullable
    static UUID fromString(Object o) {
        if (o instanceof UUID) {
            return (UUID) o;
        } else if (o == null) {
            return null;
        } else {
            String s = String.valueOf(o);
            if (o != null && (s.length() == 32 || s.length() == 36)) {
                try {
                    if (s.indexOf(45) != -1) {
                        return UUID.fromString(s);
                    } else {
                        int l = s.length();
                        StringBuilder sb = new StringBuilder(36);
                        for (int i = 0; i < l; i++) {
                            sb.append(s.charAt(i));
                            if (i == 7 || i == 11 || i == 15 || i == 19) {
                                sb.append('-');
                            }
                        }
                        return UUID.fromString(sb.toString());
                    }
                } catch (Exception var5) {
                    var5.printStackTrace();
                    return null;
                }
            } else {
                return null;
            }
        }
    }
}