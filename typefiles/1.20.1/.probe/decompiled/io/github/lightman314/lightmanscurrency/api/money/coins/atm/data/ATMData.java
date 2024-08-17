package io.github.lightman314.lightmanscurrency.api.money.coins.atm.data;

import com.google.common.collect.ImmutableList;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.google.gson.JsonSyntaxException;
import io.github.lightman314.lightmanscurrency.LightmansCurrency;
import io.github.lightman314.lightmanscurrency.api.money.coins.data.ChainData;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;
import javax.annotation.Nonnull;
import net.minecraft.ResourceLocationException;
import net.minecraft.util.GsonHelper;

public class ATMData {

    public final ChainData chain;

    private final List<ATMExchangeButtonData> exchangeButtons;

    public final List<ATMExchangeButtonData> getExchangeButtons() {
        return this.exchangeButtons;
    }

    private ATMData(@Nonnull JsonObject jsonData, ChainData chain) throws JsonSyntaxException, ResourceLocationException {
        this.chain = chain;
        List<ATMExchangeButtonData> temp = new ArrayList();
        JsonArray exchangeButtonDataList = GsonHelper.getAsJsonArray(jsonData, "ConversionButtons", GsonHelper.getAsJsonArray(jsonData, "ExchangeButtons"));
        for (int i = 0; i < exchangeButtonDataList.size(); i++) {
            try {
                temp.add(ATMExchangeButtonData.parse(exchangeButtonDataList.get(i).getAsJsonObject()));
            } catch (ResourceLocationException | JsonSyntaxException var7) {
                LightmansCurrency.LogError("Error parsing Exchange Button #" + (i + 1) + ".", var7);
            }
        }
        this.exchangeButtons = ImmutableList.copyOf(temp);
    }

    private ATMData(@Nonnull List<ATMExchangeButtonData> exchangeButtons, @Nonnull ChainData chain) {
        this.exchangeButtons = ImmutableList.copyOf(exchangeButtons);
        this.chain = chain;
    }

    @Nonnull
    public JsonObject save() {
        JsonObject data = new JsonObject();
        JsonArray exchangeButtonDataList = new JsonArray();
        for (ATMExchangeButtonData exchangeButton : this.exchangeButtons) {
            exchangeButtonDataList.add(exchangeButton.save());
        }
        data.add("ExchangeButtons", exchangeButtonDataList);
        return data;
    }

    public static ATMData parse(@Nonnull JsonObject json, @Nonnull ChainData chain) throws JsonSyntaxException, ResourceLocationException {
        return new ATMData(json, chain);
    }

    public static ATMData.Builder builder(ChainData.Builder parent) {
        return new ATMData.Builder(parent);
    }

    @Deprecated(since = "2.2.0.0")
    public static void parseDeprecated(@Nonnull ChainData.Builder builder) {
        File file = new File("config/lightmanscurrency/ATMData.json");
        if (file.exists()) {
            try {
                JsonObject fileData = GsonHelper.parse(Files.readString(file.toPath()));
                ATMData data = new ATMData(fileData, null);
                ATMData.Builder atmBuilder = builder.atmBuilder();
                for (ATMExchangeButtonData b : data.getExchangeButtons()) {
                    atmBuilder.addButton(b);
                }
            } catch (JsonSyntaxException | IOException var7) {
            }
        }
    }

    public static final class Builder {

        private final ChainData.Builder parent;

        private final List<ATMExchangeButtonData> exchangeButtons = new ArrayList();

        private Builder(@Nonnull ChainData.Builder parent) {
            this.parent = parent;
        }

        public ChainData.Builder back() {
            return this.parent;
        }

        public List<ATMExchangeButtonData> viewExchangeButtons() {
            return ImmutableList.copyOf(this.exchangeButtons);
        }

        public ATMData.Builder addButton(@Nonnull ATMExchangeButtonData button) {
            this.exchangeButtons.add(button);
            return this;
        }

        public ATMData.Builder addButtons(@Nonnull List<ATMExchangeButtonData> list) {
            this.exchangeButtons.addAll(list);
            return this;
        }

        public ATMData.Builder removeButton(int index) {
            this.exchangeButtons.remove(index);
            return this;
        }

        public ATMData.Builder accept(@Nonnull Consumer<ATMData.Builder> consumer) {
            consumer.accept(this);
            return this;
        }

        public ATMData build(@Nonnull ChainData chain) {
            return new ATMData(this.exchangeButtons, chain);
        }
    }
}