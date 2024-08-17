package com.corosus.coroutil.util;

import java.lang.reflect.Field;

public class OldUtil {

    static Field field_modifiers = null;

    public static Object getPrivateValue(Class var0, Object var1, String var2) {
        try {
            Field var3 = var0.getDeclaredField(var2);
            var3.setAccessible(true);
            return var3.get(var1);
        } catch (Exception var41) {
            return null;
        }
    }

    public static <T, E> void setPrivateValue(Class<? super T> classToAccess, T instance, String fieldName, E value) {
        ReflectionHelper.setPrivateValue(classToAccess, instance, value, fieldName);
    }
}