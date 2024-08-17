package fuzs.puzzleslib.impl.core.context;

import com.google.common.base.Preconditions;
import fuzs.puzzleslib.api.core.v1.context.PackRepositorySourcesContext;
import java.util.Objects;
import java.util.function.Consumer;
import net.minecraft.server.packs.repository.RepositorySource;

public record DataPackSourcesContextForgeImpl(Consumer<RepositorySource> consumer) implements PackRepositorySourcesContext {

    @Override
    public void addRepositorySource(RepositorySource... repositorySources) {
        Objects.requireNonNull(repositorySources, "repository sources is null");
        Preconditions.checkPositionIndex(1, repositorySources.length, "repository sources is empty");
        for (RepositorySource repositorySource : repositorySources) {
            Objects.requireNonNull(repositorySource, "repository source is null");
            this.consumer.accept(repositorySource);
        }
    }
}