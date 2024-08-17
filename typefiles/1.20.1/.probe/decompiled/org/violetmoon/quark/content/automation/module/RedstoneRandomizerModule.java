package org.violetmoon.quark.content.automation.module;

import net.minecraft.world.level.block.Block;
import net.minecraft.world.level.block.SoundType;
import net.minecraft.world.level.block.state.BlockBehaviour;
import net.minecraft.world.level.material.PushReaction;
import org.violetmoon.quark.content.automation.block.RedstoneRandomizerBlock;
import org.violetmoon.zeta.event.bus.LoadEvent;
import org.violetmoon.zeta.event.load.ZRegister;
import org.violetmoon.zeta.module.ZetaLoadModule;
import org.violetmoon.zeta.module.ZetaModule;
import org.violetmoon.zeta.util.Hint;

@ZetaLoadModule(category = "automation")
public class RedstoneRandomizerModule extends ZetaModule {

    @Hint
    Block redstone_randomizer;

    @LoadEvent
    public final void register(ZRegister event) {
        this.redstone_randomizer = new RedstoneRandomizerBlock("redstone_randomizer", this, BlockBehaviour.Properties.of().pushReaction(PushReaction.DESTROY).strength(0.0F).sound(SoundType.WOOD));
    }
}