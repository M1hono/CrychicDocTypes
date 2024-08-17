package me.jellysquid.mods.sodium.client.gui.options.control;

import me.jellysquid.mods.sodium.client.gui.options.Option;
import me.jellysquid.mods.sodium.client.util.Dim2i;

public interface Control<T> {

    Option<T> getOption();

    ControlElement<T> createElement(Dim2i var1);

    int getMaxWidth();
}