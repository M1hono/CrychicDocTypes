package dev.shadowsoffire.placebo.config;

import com.google.common.base.CharMatcher;
import com.google.common.base.Splitter;
import com.google.common.collect.ImmutableList;
import com.google.common.collect.ImmutableMap;
import com.google.common.collect.ImmutableSet;
import java.io.BufferedWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.Map.Entry;

public class ConfigCategory implements Map<String, Property> {

    public static final String COMMENT_SEPARATOR = "##########################################################################################################";

    public static final String NEW_LINE = System.getProperty("line.separator");

    public static final String ALLOWED_CHARS = "._-";

    public static final CharMatcher allowedProperties = Configuration.allowedProperties;

    private String name;

    private String comment;

    private String languagekey;

    private ArrayList<ConfigCategory> children = new ArrayList();

    private Map<String, Property> properties = new LinkedHashMap();

    public final ConfigCategory parent;

    private boolean changed = false;

    private boolean requiresWorldRestart = false;

    private boolean showInGui = true;

    private boolean requiresMcRestart = false;

    private List<String> propertyOrder = null;

    public ConfigCategory(String name) {
        this(name, null);
    }

    public ConfigCategory(String name, ConfigCategory parent) {
        this.name = name;
        this.parent = parent;
        if (parent != null) {
            parent.children.add(this);
        }
    }

    public boolean equals(Object obj) {
        return !(obj instanceof ConfigCategory cat) ? false : this.name.equals(cat.name) && this.children.equals(cat.children);
    }

    public String getName() {
        return this.name;
    }

    public String getQualifiedName() {
        return getQualifiedName(this.name, this.parent);
    }

    public static String getQualifiedName(String name, ConfigCategory parent) {
        return parent == null ? name : parent.getQualifiedName() + "." + name;
    }

    public ConfigCategory getFirstParent() {
        return this.parent == null ? this : this.parent.getFirstParent();
    }

    public boolean isChild() {
        return this.parent != null;
    }

    public Map<String, Property> getValues() {
        return ImmutableMap.copyOf(this.properties);
    }

    public List<Property> getOrderedValues() {
        if (this.propertyOrder != null) {
            ArrayList<Property> set = new ArrayList();
            for (String key : this.propertyOrder) {
                if (this.properties.containsKey(key)) {
                    set.add((Property) this.properties.get(key));
                }
            }
            return ImmutableList.copyOf(set);
        } else {
            return ImmutableList.copyOf(this.properties.values());
        }
    }

    public ConfigCategory setLanguageKey(String languagekey) {
        this.languagekey = languagekey;
        return this;
    }

    public String getLanguagekey() {
        return this.languagekey != null ? this.languagekey : this.getQualifiedName();
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public String getComment() {
        return this.comment;
    }

    public ConfigCategory setRequiresWorldRestart(boolean requiresWorldRestart) {
        this.requiresWorldRestart = requiresWorldRestart;
        return this;
    }

    public boolean requiresWorldRestart() {
        return this.requiresWorldRestart;
    }

    public ConfigCategory setShowInGui(boolean showInGui) {
        this.showInGui = showInGui;
        return this;
    }

    public boolean showInGui() {
        return this.showInGui;
    }

    public ConfigCategory setRequiresMcRestart(boolean requiresMcRestart) {
        this.requiresMcRestart = this.requiresWorldRestart = requiresMcRestart;
        return this;
    }

    public boolean requiresMcRestart() {
        return this.requiresMcRestart;
    }

    public ConfigCategory setPropertyOrder(List<String> propertyOrder) {
        this.propertyOrder = propertyOrder;
        for (String s : this.properties.keySet()) {
            if (!propertyOrder.contains(s)) {
                propertyOrder.add(s);
            }
        }
        return this;
    }

    public List<String> getPropertyOrder() {
        return this.propertyOrder != null ? ImmutableList.copyOf(this.propertyOrder) : ImmutableList.copyOf(this.properties.keySet());
    }

    public boolean containsKey(String key) {
        return this.properties.containsKey(key);
    }

    public Property get(String key) {
        return (Property) this.properties.get(key);
    }

    private void write(BufferedWriter out, String... data) throws IOException {
        this.write(out, true, data);
    }

    private void write(BufferedWriter out, boolean new_line, String... data) throws IOException {
        for (int x = 0; x < data.length; x++) {
            out.write(data[x]);
        }
        if (new_line) {
            out.newLine();
        }
    }

    public void write(BufferedWriter out, int indent) throws IOException {
        String pad0 = this.getIndent(indent);
        String pad1 = this.getIndent(indent + 1);
        String pad2 = this.getIndent(indent + 2);
        if (this.comment != null && !this.comment.isEmpty()) {
            this.write(out, pad0, "##########################################################################################################");
            this.write(out, pad0, "# ", this.name);
            this.write(out, pad0, "#--------------------------------------------------------------------------------------------------------#");
            Splitter splitter = Splitter.onPattern("\r?\n");
            for (String line : splitter.split(this.comment)) {
                this.write(out, pad0, "# ", line);
            }
            this.write(out, pad0, "##########################################################################################################", NEW_LINE);
        }
        String displayName = this.name;
        if (!allowedProperties.matchesAllOf(this.name)) {
            displayName = "\"" + this.name + "\"";
        }
        this.write(out, pad0, displayName, " {");
        Property[] props = (Property[]) this.getOrderedValues().toArray(new Property[0]);
        for (int x = 0; x < props.length; x++) {
            Property prop = props[x];
            if (prop.getComment() != null && !prop.getComment().isEmpty()) {
                if (x != 0) {
                    out.newLine();
                }
                Splitter splitter = Splitter.onPattern("\r?\n");
                for (String commentLine : splitter.split(prop.getComment())) {
                    this.write(out, pad1, "# ", commentLine);
                }
            }
            String propName = prop.getName();
            if (!allowedProperties.matchesAllOf(propName)) {
                propName = "\"" + propName + "\"";
            }
            if (!prop.isList()) {
                if (prop.getType() == null) {
                    this.write(out, pad1, propName, "=", prop.getString());
                } else {
                    char type = prop.getType().getID();
                    this.write(out, pad1, String.valueOf(type), ":", propName, "=", prop.getString());
                }
            } else {
                char type = prop.getType().getID();
                this.write(out, pad1, String.valueOf(type), ":", propName, " <");
                for (String line : prop.getStringList()) {
                    this.write(out, pad2, line);
                }
                this.write(out, pad1, " >");
            }
            prop.resetChangedState();
        }
        if (this.children.size() > 0) {
            out.newLine();
        }
        for (ConfigCategory child : this.children) {
            child.write(out, indent + 1);
        }
        this.write(out, pad0, "}", NEW_LINE);
    }

    private String getIndent(int indent) {
        StringBuilder buf = new StringBuilder("");
        for (int x = 0; x < indent; x++) {
            buf.append("    ");
        }
        return buf.toString();
    }

    public boolean hasChanged() {
        if (this.changed) {
            return true;
        } else {
            for (Property prop : this.properties.values()) {
                if (prop.hasChanged()) {
                    return true;
                }
            }
            return false;
        }
    }

    void resetChangedState() {
        this.changed = false;
        for (Property prop : this.properties.values()) {
            prop.resetChangedState();
        }
    }

    public int size() {
        return this.properties.size();
    }

    public boolean isEmpty() {
        return this.properties.isEmpty();
    }

    public boolean containsKey(Object key) {
        return this.properties.containsKey(key);
    }

    public boolean containsValue(Object value) {
        return this.properties.containsValue(value);
    }

    public Property get(Object key) {
        return (Property) this.properties.get(key);
    }

    public Property put(String key, Property value) {
        this.changed = true;
        if (this.propertyOrder != null && !this.propertyOrder.contains(key)) {
            this.propertyOrder.add(key);
        }
        return (Property) this.properties.put(key, value);
    }

    public Property remove(Object key) {
        this.changed = true;
        return (Property) this.properties.remove(key);
    }

    public void putAll(Map<? extends String, ? extends Property> m) {
        this.changed = true;
        if (this.propertyOrder != null) {
            for (String key : m.keySet()) {
                if (!this.propertyOrder.contains(key)) {
                    this.propertyOrder.add(key);
                }
            }
        }
        this.properties.putAll(m);
    }

    public void clear() {
        this.changed = true;
        this.properties.clear();
    }

    public Set<String> keySet() {
        return this.properties.keySet();
    }

    public Collection<Property> values() {
        return this.properties.values();
    }

    public Set<Entry<String, Property>> entrySet() {
        return ImmutableSet.copyOf(this.properties.entrySet());
    }

    public Set<ConfigCategory> getChildren() {
        return ImmutableSet.copyOf(this.children);
    }

    public void removeChild(ConfigCategory child) {
        if (this.children.contains(child)) {
            this.children.remove(child);
            this.changed = true;
        }
    }
}