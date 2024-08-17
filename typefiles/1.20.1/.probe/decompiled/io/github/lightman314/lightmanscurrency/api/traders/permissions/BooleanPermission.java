package io.github.lightman314.lightmanscurrency.api.traders.permissions;

import io.github.lightman314.lightmanscurrency.client.gui.widget.button.PlainButton;
import io.github.lightman314.lightmanscurrency.client.gui.widget.easy.EasyButton;
import io.github.lightman314.lightmanscurrency.client.util.IconAndButtonUtil;
import java.util.function.Consumer;

public class BooleanPermission extends PermissionOption {

    PlainButton checkmark;

    protected BooleanPermission(String permission) {
        super(permission);
    }

    @Override
    protected void createWidget(int x, int y, Consumer<Object> addWidgets) {
        this.checkmark = IconAndButtonUtil.checkmarkButton(x, y + 5, this::TogglePermission, this::hasPermission);
        addWidgets.accept(this.checkmark);
    }

    @Override
    public void tick() {
    }

    @Override
    public int widgetWidth() {
        return 12;
    }

    private void TogglePermission(EasyButton button) {
        this.setValue(!this.hasPermission());
    }

    public static BooleanPermission of(String permission) {
        return new BooleanPermission(permission);
    }
}