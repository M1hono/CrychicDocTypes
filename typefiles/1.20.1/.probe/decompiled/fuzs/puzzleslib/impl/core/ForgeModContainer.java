package fuzs.puzzleslib.impl.core;

import com.google.common.collect.ImmutableMap;
import com.google.common.collect.Lists;
import com.google.common.collect.ImmutableMap.Builder;
import fuzs.puzzleslib.api.core.v1.ModContainer;
import java.net.URI;
import java.net.URL;
import java.nio.file.Files;
import java.nio.file.LinkOption;
import java.nio.file.Path;
import java.util.Collection;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;
import net.minecraftforge.common.util.MavenVersionStringHelper;
import net.minecraftforge.fml.loading.moddiscovery.ModFileInfo;
import net.minecraftforge.forgespi.language.IModInfo;
import org.jetbrains.annotations.Nullable;

public final class ForgeModContainer implements ModContainer {

    private final IModInfo metadata;

    private final List<ModContainer> children;

    @Nullable
    private ModContainer parent;

    public ForgeModContainer(IModInfo metadata) {
        this.metadata = metadata;
        this.children = Lists.newArrayList();
    }

    @Override
    public String getModId() {
        return this.metadata.getModId();
    }

    @Override
    public String getDisplayName() {
        return this.metadata.getDisplayName();
    }

    @Override
    public String getDescription() {
        return this.metadata.getDescription();
    }

    @Override
    public String getVersion() {
        return MavenVersionStringHelper.artifactVersionToString(this.metadata.getVersion());
    }

    @Override
    public Collection<String> getLicenses() {
        return List.of(this.metadata.getOwningFile().getLicense());
    }

    @Override
    public Collection<String> getAuthors() {
        return this.getConfigElement("authors");
    }

    @Override
    public Collection<String> getCredits() {
        return this.getConfigElement("credits");
    }

    @Override
    public Map<String, String> getContactTypes() {
        Builder<String, String> builder = ImmutableMap.builder();
        this.metadata.getConfig().getConfigElement(new String[] { "displayURL" }).or(() -> this.metadata.getModURL().map(URL::toString)).ifPresent(s -> builder.put("homepage", s));
        if (this.metadata.getOwningFile() instanceof ModFileInfo modFileInfo) {
            Optional.ofNullable(modFileInfo.getIssueURL()).map(URL::toString).ifPresent(s -> builder.put("issues", s));
        }
        return builder.build();
    }

    @Override
    public Optional<Path> findResource(String... path) {
        return Optional.of(this.metadata.getOwningFile().getFile().findResource(path)).filter(x$0 -> Files.exists(x$0, new LinkOption[0]));
    }

    @Override
    public Collection<ModContainer> getChildren() {
        return Collections.unmodifiableList(this.children);
    }

    @Nullable
    @Override
    public ModContainer getParent() {
        return this.parent;
    }

    public void setParent(@Nullable ForgeModContainer parent) {
        if (parent != null && parent != this) {
            this.parent = parent;
            parent.addChild(this);
        }
    }

    private void addChild(ModContainer modContainer) {
        Objects.requireNonNull(modContainer, "child is null");
        if (!this.children.contains(modContainer)) {
            this.children.add(modContainer);
            this.children.sort(Comparator.comparing(ModContainer::getModId));
        }
    }

    private List<String> getConfigElement(String configKey) {
        return (List<String>) this.metadata.getConfig().getConfigElement(new String[] { configKey }).map(authors -> authors instanceof Collection<?> collection ? collection.stream().map(Object::toString).toList() : List.of(authors.toString())).orElseGet(List::of);
    }

    public URI getURI() {
        return this.metadata.getOwningFile().getFile().getSecureJar().moduleDataProvider().uri();
    }
}