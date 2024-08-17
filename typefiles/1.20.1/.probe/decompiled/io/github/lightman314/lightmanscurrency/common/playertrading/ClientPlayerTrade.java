package io.github.lightman314.lightmanscurrency.common.playertrading;

import io.github.lightman314.lightmanscurrency.api.money.value.MoneyValue;
import io.github.lightman314.lightmanscurrency.util.InventoryUtil;
import java.util.UUID;
import javax.annotation.Nonnull;
import net.minecraft.network.FriendlyByteBuf;
import net.minecraft.network.chat.Component;
import net.minecraft.world.Container;

public class ClientPlayerTrade implements IPlayerTrade {

    private final UUID hostID;

    private final UUID guestID;

    private final Component hostName;

    private final Component guestName;

    private final MoneyValue hostMoney;

    private final MoneyValue guestMoney;

    private final Container hostItems;

    private final Container guestItems;

    private final int hostState;

    private final int guestState;

    @Override
    public boolean isCompleted() {
        return false;
    }

    @Nonnull
    @Override
    public UUID getHostID() {
        return this.hostID;
    }

    @Nonnull
    @Override
    public UUID getGuestID() {
        return this.guestID;
    }

    @Nonnull
    @Override
    public Component getHostName() {
        return this.hostName;
    }

    @Nonnull
    @Override
    public Component getGuestName() {
        return this.guestName;
    }

    @Nonnull
    @Override
    public MoneyValue getHostMoney() {
        return this.hostMoney;
    }

    @Nonnull
    @Override
    public MoneyValue getGuestMoney() {
        return this.guestMoney;
    }

    @Nonnull
    @Override
    public Container getHostItems() {
        return this.hostItems;
    }

    @Nonnull
    @Override
    public Container getGuestItems() {
        return this.guestItems;
    }

    @Override
    public int getHostState() {
        return this.hostState;
    }

    @Override
    public int getGuestState() {
        return this.guestState;
    }

    public ClientPlayerTrade(UUID hostID, UUID guestID, Component hostName, Component guestName, MoneyValue hostMoney, MoneyValue guestMoney, Container hostItems, Container guestItems, int hostState, int guestState) {
        this.hostID = hostID;
        this.guestID = guestID;
        this.hostName = hostName;
        this.guestName = guestName;
        this.hostMoney = hostMoney;
        this.guestMoney = guestMoney;
        this.hostItems = hostItems;
        this.guestItems = guestItems;
        this.hostState = hostState;
        this.guestState = guestState;
    }

    public final void encode(FriendlyByteBuf data) {
        data.writeUUID(this.hostID);
        data.writeUUID(this.guestID);
        data.writeComponent(this.hostName);
        data.writeComponent(this.guestName);
        this.hostMoney.encode(data);
        this.guestMoney.encode(data);
        InventoryUtil.encodeItems(this.hostItems, data);
        InventoryUtil.encodeItems(this.guestItems, data);
        data.writeInt(this.hostState);
        data.writeInt(this.guestState);
    }

    public static ClientPlayerTrade decode(FriendlyByteBuf data) {
        UUID hostID = data.readUUID();
        UUID guestID = data.readUUID();
        Component hostName = data.readComponent();
        Component guestName = data.readComponent();
        MoneyValue hostMoney = MoneyValue.decode(data);
        MoneyValue guestMoney = MoneyValue.decode(data);
        Container hostItems = InventoryUtil.decodeItems(data);
        Container guestItems = InventoryUtil.decodeItems(data);
        int hostState = data.readInt();
        int guestState = data.readInt();
        return new ClientPlayerTrade(hostID, guestID, hostName, guestName, hostMoney, guestMoney, hostItems, guestItems, hostState, guestState);
    }
}