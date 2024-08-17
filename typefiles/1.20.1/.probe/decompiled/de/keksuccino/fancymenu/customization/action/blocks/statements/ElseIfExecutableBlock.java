package de.keksuccino.fancymenu.customization.action.blocks.statements;

import de.keksuccino.fancymenu.customization.action.Executable;
import de.keksuccino.fancymenu.customization.action.blocks.AbstractExecutableBlock;
import de.keksuccino.fancymenu.customization.loadingrequirement.internal.LoadingRequirementContainer;
import de.keksuccino.fancymenu.util.properties.PropertyContainer;
import java.util.Objects;
import java.util.Map.Entry;
import java.util.function.Supplier;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

public class ElseIfExecutableBlock extends AbstractExecutableBlock {

    @NotNull
    public LoadingRequirementContainer condition = new LoadingRequirementContainer().forceRequirementsMet(true);

    @Nullable
    protected AbstractExecutableBlock child;

    public ElseIfExecutableBlock() {
    }

    public ElseIfExecutableBlock(@NotNull LoadingRequirementContainer condition) {
        this.condition = (LoadingRequirementContainer) Objects.requireNonNull(condition);
    }

    @Override
    public String getBlockType() {
        return "else-if";
    }

    @Override
    public void execute() {
        if (this.check()) {
            super.execute();
        } else if (this.child != null) {
            this.child.execute();
        }
    }

    @Override
    public void setAppendedBlock(@Nullable AbstractExecutableBlock appended) {
        super.setAppendedBlock(appended);
        this.child = appended;
    }

    @Nullable
    @Override
    public AbstractExecutableBlock getAppendedBlock() {
        return this.child;
    }

    @Override
    public void addValuePlaceholder(@NotNull String placeholder, @NotNull Supplier<String> replaceWithSupplier) {
        super.addValuePlaceholder(placeholder, replaceWithSupplier);
        this.condition.addValuePlaceholder(placeholder, replaceWithSupplier);
    }

    @NotNull
    public ElseIfExecutableBlock copy(boolean unique) {
        ElseIfExecutableBlock b = new ElseIfExecutableBlock();
        if (!unique) {
            b.identifier = this.identifier;
        }
        if (this.getAppendedBlock() != null) {
            b.setAppendedBlock((AbstractExecutableBlock) this.getAppendedBlock().copy(unique));
        }
        for (Executable e : this.executables) {
            b.addExecutable(e.copy(unique));
        }
        b.condition = this.condition.copy(unique);
        b.valuePlaceholders.putAll(this.valuePlaceholders);
        return b;
    }

    public boolean check() {
        return this.condition.requirementsMet();
    }

    @NotNull
    @Override
    public PropertyContainer serialize() {
        PropertyContainer container = super.serialize();
        String key = "[else_if_executable_block_body:" + this.getIdentifier() + "]";
        container.putProperty(key, this.condition.identifier);
        this.condition.serializeToExistingPropertyContainer(container);
        return container;
    }

    public static ElseIfExecutableBlock deserializeEmptyWithIdentifier(@NotNull PropertyContainer serialized, @NotNull String identifier) {
        ElseIfExecutableBlock b = new ElseIfExecutableBlock();
        b.identifier = identifier;
        for (Entry<String, String> m : serialized.getProperties().entrySet()) {
            if (((String) m.getKey()).equals("[else_if_executable_block_body:" + identifier + "]")) {
                LoadingRequirementContainer lrc = LoadingRequirementContainer.deserializeWithIdentifier((String) m.getValue(), serialized);
                if (lrc != null) {
                    b.condition = lrc;
                }
                break;
            }
        }
        return b;
    }
}