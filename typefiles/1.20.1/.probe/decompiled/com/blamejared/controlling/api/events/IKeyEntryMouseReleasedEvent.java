package com.blamejared.controlling.api.events;

import com.blamejared.controlling.client.NewKeyBindsList;

public interface IKeyEntryMouseReleasedEvent {

    NewKeyBindsList.KeyEntry getEntry();

    double getMouseX();

    double getMouseY();

    int getButtonId();

    boolean isHandled();

    void setHandled(boolean var1);
}