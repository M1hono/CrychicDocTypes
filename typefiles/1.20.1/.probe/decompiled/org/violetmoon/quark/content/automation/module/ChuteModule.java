package org.violetmoon.quark.content.automation.module;

import net.minecraft.core.registries.Registries;
import net.minecraft.world.level.block.Block;
import net.minecraft.world.level.block.SoundType;
import net.minecraft.world.level.block.entity.BlockEntityType;
import net.minecraft.world.level.block.state.BlockBehaviour;
import net.minecraft.world.level.material.MapColor;
import org.violetmoon.quark.base.Quark;
import org.violetmoon.quark.content.automation.block.ChuteBlock;
import org.violetmoon.quark.content.automation.block.be.ChuteBlockEntity;
import org.violetmoon.zeta.event.bus.LoadEvent;
import org.violetmoon.zeta.event.load.ZRegister;
import org.violetmoon.zeta.module.ZetaLoadModule;
import org.violetmoon.zeta.module.ZetaModule;
import org.violetmoon.zeta.util.Hint;

@ZetaLoadModule(category = "automation")
public class ChuteModule extends ZetaModule {

    public static BlockEntityType<ChuteBlockEntity> blockEntityType;

    @Hint
    Block chute;

    @LoadEvent
    public final void register(ZRegister event) {
        this.chute = new ChuteBlock("chute", this, BlockBehaviour.Properties.of().mapColor(MapColor.WOOD).strength(2.5F).sound(SoundType.WOOD).ignitedByLava());
        blockEntityType = BlockEntityType.Builder.<ChuteBlockEntity>of(ChuteBlockEntity::new, this.chute).build(null);
        Quark.ZETA.registry.register(blockEntityType, "chute", Registries.BLOCK_ENTITY_TYPE);
    }
}