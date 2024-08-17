package moe.wolfgirl.probejs.docs;

import java.util.Collection;
import java.util.List;
import moe.wolfgirl.probejs.GlobalStates;
import moe.wolfgirl.probejs.lang.snippet.SnippetDump;
import moe.wolfgirl.probejs.lang.snippet.parts.Variable;
import moe.wolfgirl.probejs.plugin.ProbeJSPlugin;
import net.minecraft.core.registries.Registries;

public class Snippets extends ProbeJSPlugin {

    @Override
    public void addVSCodeSnippets(SnippetDump dump) {
        dump.snippet("uuid").prefix("#uuid").description("Generates a random version 4 UUID.").literal("\"").variable(Variable.UUID).literal("\"");
        dump.snippet("recipes").prefix("#recipes").literal("ServerEvents.recipes(event => {").newline().literal("    const { ").tabStop(1).literal(" } = event.recipes").newline().literal("    ").tabStop(0).newline().literal("})");
        defineHeader(dump, "priority", "0");
        defineHeader(dump, "packmode", null);
        dump.snippet("ignored").prefix("#ignored").description("Creates the file header for `ignored`.").literal("// ignored: ").choices(List.of("true", "false"));
        dump.snippet("requires").prefix("#requires").description("Creates the file header for `requires`.").literal("// requires: ").choices((Collection<String>) GlobalStates.MODS.get());
        dump.snippet("itemstack").prefix("#itemstack").description("Creates a `nx item string.").literal("\"").tabStop(1, "1").literal("x ").registry(Registries.ITEM).literal("\"");
    }

    private static void defineHeader(SnippetDump dump, String symbol, String defaultValue) {
        dump.snippet(symbol).prefix("#" + symbol).description("Creates the file header for `%s`.".formatted(symbol)).literal("// %s: ".formatted(symbol)).tabStop(0, defaultValue);
    }
}