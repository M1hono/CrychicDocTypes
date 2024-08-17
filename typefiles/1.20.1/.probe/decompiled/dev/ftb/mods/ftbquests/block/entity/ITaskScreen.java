package dev.ftb.mods.ftbquests.block.entity;

import java.util.Optional;
import java.util.UUID;
import net.minecraft.world.item.ItemStack;
import org.jetbrains.annotations.NotNull;

public interface ITaskScreen {

    Optional<TaskScreenBlockEntity> getCoreScreen();

    @NotNull
    UUID getTeamId();

    boolean isInputOnly();

    boolean isIndestructible();

    ItemStack getSkin();
}