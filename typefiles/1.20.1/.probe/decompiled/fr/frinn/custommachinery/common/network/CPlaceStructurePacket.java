package fr.frinn.custommachinery.common.network;

import dev.architectury.networking.NetworkManager;
import dev.architectury.networking.simple.BaseC2SMessage;
import dev.architectury.networking.simple.MessageType;
import dev.architectury.utils.Env;
import fr.frinn.custommachinery.api.codec.NamedCodec;
import fr.frinn.custommachinery.api.component.MachineComponentType;
import fr.frinn.custommachinery.common.init.Registration;
import fr.frinn.custommachinery.common.util.BlockStructure;
import fr.frinn.custommachinery.common.util.MachineList;
import fr.frinn.custommachinery.common.util.PartialBlockState;
import fr.frinn.custommachinery.common.util.ingredient.IIngredient;
import fr.frinn.custommachinery.impl.codec.DefaultCodecs;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import net.minecraft.network.FriendlyByteBuf;
import net.minecraft.resources.ResourceLocation;

public class CPlaceStructurePacket extends BaseC2SMessage {

    public static final NamedCodec<List<List<String>>> PATTERN_CODEC = NamedCodec.STRING.listOf().listOf();

    public static final NamedCodec<Map<Character, IIngredient<PartialBlockState>>> KEYS_CODEC = NamedCodec.unboundedMap(DefaultCodecs.CHARACTER, IIngredient.BLOCK, "Map<Character, Block>");

    private final ResourceLocation machine;

    private final List<List<String>> pattern;

    private final Map<Character, IIngredient<PartialBlockState>> keys;

    public CPlaceStructurePacket(ResourceLocation machine, List<List<String>> pattern, Map<Character, IIngredient<PartialBlockState>> keys) {
        this.machine = machine;
        this.pattern = pattern;
        this.keys = keys;
    }

    @Override
    public MessageType getType() {
        return PacketManager.PLACE_STRUCTURE;
    }

    @Override
    public void write(FriendlyByteBuf buf) {
        buf.writeResourceLocation(this.machine);
        PATTERN_CODEC.toNetwork(this.pattern, buf);
        KEYS_CODEC.toNetwork(this.keys, buf);
    }

    public static CPlaceStructurePacket read(FriendlyByteBuf buf) {
        return new CPlaceStructurePacket(buf.readResourceLocation(), PATTERN_CODEC.fromNetwork(buf), KEYS_CODEC.fromNetwork(buf));
    }

    @Override
    public void handle(NetworkManager.PacketContext context) {
        if (context.getEnvironment() == Env.SERVER && context.getPlayer().getAbilities().instabuild) {
            context.queue(() -> MachineList.findNearest(context.getPlayer(), this.machine, 20).flatMap(tile -> tile.getComponentManager().getComponent((MachineComponentType) Registration.STRUCTURE_MACHINE_COMPONENT.get())).ifPresent(component -> {
                BlockStructure.Builder builder = BlockStructure.Builder.start();
                for (List<String> levels : this.pattern) {
                    builder.aisle((String[]) levels.toArray(new String[0]));
                }
                for (Entry<Character, IIngredient<PartialBlockState>> key : this.keys.entrySet()) {
                    builder.where((Character) key.getKey(), (IIngredient<PartialBlockState>) key.getValue());
                }
                BlockStructure structure = builder.build();
                component.placeStructure(structure, false);
            }));
        }
    }
}