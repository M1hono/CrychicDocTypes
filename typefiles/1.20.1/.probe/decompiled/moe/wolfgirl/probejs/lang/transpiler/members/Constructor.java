package moe.wolfgirl.probejs.lang.transpiler.members;

import java.util.ArrayList;
import java.util.List;
import moe.wolfgirl.probejs.lang.java.clazz.members.ConstructorInfo;
import moe.wolfgirl.probejs.lang.java.type.impl.VariableType;
import moe.wolfgirl.probejs.lang.transpiler.TypeConverter;
import moe.wolfgirl.probejs.lang.typescript.code.member.ConstructorDecl;
import moe.wolfgirl.probejs.lang.typescript.code.type.TSVariableType;

public class Constructor extends Converter<ConstructorInfo, ConstructorDecl> {

    private final Param param;

    public Constructor(TypeConverter converter) {
        super(converter);
        this.param = new Param(converter);
    }

    public ConstructorDecl transpile(ConstructorInfo input) {
        List<TSVariableType> variableTypes = new ArrayList();
        for (VariableType variableType : input.variableTypes) {
            variableTypes.add((TSVariableType) this.converter.convertType(variableType));
        }
        return new ConstructorDecl(variableTypes, input.params.stream().map(this.param::transpile).toList());
    }
}