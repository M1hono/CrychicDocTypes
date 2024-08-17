package com.almostreliable.lootjs.forge.gametest;

import com.almostreliable.lootjs.core.ILootContextData;
import net.minecraft.gametest.framework.GameTest;
import net.minecraft.gametest.framework.GameTestHelper;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.Items;
import net.minecraft.world.level.storage.loot.LootContext;
import net.minecraftforge.gametest.GameTestHolder;
import net.minecraftforge.gametest.PrefixGameTestTemplate;

@GameTestHolder("lootjs")
@PrefixGameTestTemplate(false)
public class GameTestUtilsTests {

    @GameTest(m_177046_ = "empty_test_structure")
    public void fillExampleLoot(GameTestHelper helper) {
        helper.succeedIf(() -> {
            Player p = helper.makeMockPlayer();
            LootContext ctx = GameTestUtils.chestContext(helper.getLevel(), p.m_20182_(), p);
            ILootContextData data = GameTestUtils.fillExampleLoot(ctx);
            ItemStack diamond = (ItemStack) data.getGeneratedLoot().get(0);
            ItemStack netherBrick = (ItemStack) data.getGeneratedLoot().get(1);
            ItemStack goldenChestPlate = (ItemStack) data.getGeneratedLoot().get(2);
            GameTestUtils.assertEquals(helper, diamond.getItem(), Items.DIAMOND);
            GameTestUtils.assertEquals(helper, netherBrick.getItem(), Items.NETHER_BRICK);
            GameTestUtils.assertEquals(helper, netherBrick.getCount(), 10);
            GameTestUtils.assertEquals(helper, goldenChestPlate.getItem(), Items.GOLDEN_CHESTPLATE);
            GameTestUtils.assertTrue(helper, data.getGeneratedLoot().size() == 3, "Should contain 3 items");
        });
    }
}