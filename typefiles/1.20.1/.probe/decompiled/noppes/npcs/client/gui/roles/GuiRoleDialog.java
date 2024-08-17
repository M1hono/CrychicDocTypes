package noppes.npcs.client.gui.roles;

import java.util.HashMap;
import net.minecraft.client.gui.screens.Screen;
import net.minecraft.nbt.CompoundTag;
import noppes.npcs.client.gui.util.GuiNPCInterface2;
import noppes.npcs.entity.EntityNPCInterface;
import noppes.npcs.packets.Packets;
import noppes.npcs.packets.server.SPacketNpcRoleSave;
import noppes.npcs.roles.RoleDialog;
import noppes.npcs.shared.client.gui.GuiTextAreaScreen;
import noppes.npcs.shared.client.gui.components.GuiButtonNop;
import noppes.npcs.shared.client.gui.components.GuiLabel;
import noppes.npcs.shared.client.gui.components.GuiTextFieldNop;

public class GuiRoleDialog extends GuiNPCInterface2 {

    private RoleDialog role;

    private int slot = 0;

    public GuiRoleDialog(EntityNPCInterface npc) {
        super(npc);
        this.role = (RoleDialog) npc.role;
    }

    @Override
    public void init() {
        super.init();
        this.addLabel(new GuiLabel(0, "dialog.starttext", this.guiLeft + 4, this.guiTop + 10));
        this.addButton(new GuiButtonNop(this, 0, this.guiLeft + 60, this.guiTop + 5, 50, 20, "selectServer.edit"));
        this.addLabel(new GuiLabel(100, "dialog.options", this.guiLeft + 4, this.guiTop + 34));
        for (int i = 1; i <= 6; i++) {
            int y = this.guiTop + 24 + i * 23;
            this.addLabel(new GuiLabel(i, i + ":", this.guiLeft + 4, y + 5));
            String text = (String) this.role.options.get(i);
            if (text == null) {
                text = "";
            }
            this.addTextField(new GuiTextFieldNop(i, this, this.guiLeft + 16, y, 280, 20, text));
            this.addButton(new GuiButtonNop(this, i, this.guiLeft + 310, y, 50, 20, "selectServer.edit"));
        }
    }

    @Override
    public void buttonEvent(GuiButtonNop guibutton) {
        if (guibutton.id <= 6) {
            this.save();
            this.slot = guibutton.id;
            String text = this.role.dialog;
            if (this.slot >= 1) {
                text = (String) this.role.optionsTexts.get(this.slot);
            }
            if (text == null) {
                text = "";
            }
            this.setSubGui(new GuiTextAreaScreen(text));
        }
    }

    @Override
    public void save() {
        HashMap<Integer, String> map = new HashMap();
        for (int i = 1; i <= 6; i++) {
            String text = this.getTextField(i).m_94155_();
            if (!text.isEmpty()) {
                map.put(i, text);
            }
        }
        this.role.options = map;
        Packets.sendServer(new SPacketNpcRoleSave(this.role.save(new CompoundTag())));
    }

    @Override
    public void subGuiClosed(Screen subgui) {
        if (subgui instanceof GuiTextAreaScreen text) {
            if (this.slot == 0) {
                this.role.dialog = text.text;
            } else if (text.text.isEmpty()) {
                this.role.optionsTexts.remove(this.slot);
            } else {
                this.role.optionsTexts.put(this.slot, text.text);
            }
        }
    }
}