package dev.latvian.mods.rhino.util;

import dev.latvian.mods.rhino.Context;
import dev.latvian.mods.rhino.Scriptable;

@FunctionalInterface
public interface ValueUnwrapper {

    ValueUnwrapper DEFAULT = (cx, scope, value) -> cx.getWrapFactory().wrap(cx, scope, value, value.getClass());

    Object unwrap(Context var1, Scriptable var2, Object var3);
}