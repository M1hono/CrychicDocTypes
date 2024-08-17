package org.violetmoon.zeta.mixin.plugin;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Target({ ElementType.TYPE })
@Retention(RetentionPolicy.RUNTIME)
public @interface DelegateInterfaceMixin {

    Class<?> delegate();

    DelegateReturnValueModifier[] methods();
}