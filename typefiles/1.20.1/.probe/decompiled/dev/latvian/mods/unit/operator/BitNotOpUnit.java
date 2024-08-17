package dev.latvian.mods.unit.operator;

import dev.latvian.mods.unit.Unit;
import dev.latvian.mods.unit.UnitVariables;
import dev.latvian.mods.unit.token.UnitSymbol;

public class BitNotOpUnit extends UnaryOpUnit {

    public BitNotOpUnit(Unit unit) {
        super(UnitSymbol.BIT_NOT, unit);
    }

    @Override
    public double get(UnitVariables variables) {
        return (double) this.getInt(variables);
    }

    @Override
    public int getInt(UnitVariables variables) {
        return ~this.unit.getInt(variables);
    }

    @Override
    public boolean getBoolean(UnitVariables variables) {
        return !this.unit.getBoolean(variables);
    }
}