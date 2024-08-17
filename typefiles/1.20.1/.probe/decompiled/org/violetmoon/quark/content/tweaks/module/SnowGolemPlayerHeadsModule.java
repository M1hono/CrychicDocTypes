package org.violetmoon.quark.content.tweaks.module;

import java.util.Arrays;
import java.util.List;
import net.minecraft.server.level.ServerPlayer;
import net.minecraft.world.entity.Entity;
import net.minecraft.world.entity.animal.SnowGolem;
import net.minecraft.world.entity.item.ItemEntity;
import net.minecraft.world.entity.monster.Witch;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.Items;
import net.minecraft.world.phys.Vec3;
import org.violetmoon.zeta.advancement.ManualTrigger;
import org.violetmoon.zeta.event.bus.LoadEvent;
import org.violetmoon.zeta.event.bus.PlayEvent;
import org.violetmoon.zeta.event.load.ZRegister;
import org.violetmoon.zeta.event.play.entity.living.ZLivingDrops;
import org.violetmoon.zeta.module.ZetaLoadModule;
import org.violetmoon.zeta.module.ZetaModule;
import org.violetmoon.zeta.util.Hint;
import org.violetmoon.zeta.util.ItemNBTHelper;

@ZetaLoadModule(category = "tweaks")
public class SnowGolemPlayerHeadsModule extends ZetaModule {

    public static ManualTrigger getOwnHeadTrigger;

    @Hint(key = "snow_golem_player_heads")
    List<Item> items = Arrays.asList(Items.PLAYER_HEAD, Items.NAME_TAG, Items.CARVED_PUMPKIN);

    @LoadEvent
    public final void register(ZRegister event) {
        getOwnHeadTrigger = event.getAdvancementModifierRegistry().registerManualTrigger("own_head");
    }

    @PlayEvent
    public void onDrops(ZLivingDrops event) {
        Entity e = event.getEntity();
        if (e.hasCustomName() && e instanceof SnowGolem snowman && event.getSource().getEntity() != null && event.getSource().getEntity() instanceof Witch && snowman.hasPumpkin()) {
            ItemStack stack = new ItemStack(Items.PLAYER_HEAD);
            String name = e.getCustomName().getString();
            ItemNBTHelper.setString(stack, "SkullOwner", name);
            Vec3 pos = e.position();
            event.getDrops().add(new ItemEntity(e.level(), pos.x, pos.y, pos.z, stack));
            for (Player player : e.level().m_6907_()) {
                String pname = player.getName().getString();
                if (pname.equals(name) && player instanceof ServerPlayer) {
                    ServerPlayer sp = (ServerPlayer) player;
                    if (player.m_20270_(snowman) < 16.0F) {
                        getOwnHeadTrigger.trigger(sp);
                    }
                }
            }
        }
    }
}