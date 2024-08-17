package de.keksuccino.fancymenu.customization.variables;

import de.keksuccino.fancymenu.util.properties.PropertyContainer;
import java.lang.invoke.StringConcatFactory;
import java.util.Objects;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

public class Variable {

    @NotNull
    protected final String name;

    @NotNull
    protected String value = "";

    protected boolean resetOnLaunch = false;

    public Variable(@NotNull String name) {
        this.name = (String) Objects.requireNonNull(name);
    }

    @NotNull
    public String getName() {
        return this.name;
    }

    @NotNull
    public String getValue() {
        return this.value;
    }

    public void setValue(@Nullable String value) {
        if (value == null) {
            value = "";
        }
        this.value = value;
        VariableHandler.writeToFile();
    }

    public boolean isResetOnLaunch() {
        return this.resetOnLaunch;
    }

    public void setResetOnLaunch(boolean resetOnLaunch) {
        this.resetOnLaunch = resetOnLaunch;
        VariableHandler.writeToFile();
    }

    @NotNull
    public PropertyContainer serialize() {
        PropertyContainer c = new PropertyContainer("variable");
        c.putProperty("name", (String) Objects.requireNonNull(this.name));
        c.putProperty("value", StringConcatFactory.makeConcatWithConstants < "makeConcatWithConstants", "\u0001" > (this.value));
        c.putProperty("reset_on_launch", this.resetOnLaunch + "");
        return c;
    }

    @Nullable
    public static Variable deserialize(@NotNull PropertyContainer c) {
        String name = c.getValue("name");
        if (name != null) {
            Variable v = new Variable(name);
            v.value = c.getValue("value");
            String resetOnLaunch = c.getValue("reset_on_launch");
            if (resetOnLaunch != null && resetOnLaunch.equals("true")) {
                v.resetOnLaunch = true;
            }
            return v;
        } else {
            return null;
        }
    }
}