package mezz.jei.core.search;

import java.util.Collection;
import java.util.function.Consumer;

public class PrefixedSearchable<T> implements ISearchable<T> {

    private final ISearchStorage<T> searchStorage;

    private final PrefixInfo<T> prefixInfo;

    public PrefixedSearchable(ISearchStorage<T> searchStorage, PrefixInfo<T> prefixInfo) {
        this.searchStorage = searchStorage;
        this.prefixInfo = prefixInfo;
    }

    public ISearchStorage<T> getSearchStorage() {
        return this.searchStorage;
    }

    public Collection<String> getStrings(T element) {
        return this.prefixInfo.getStrings(element);
    }

    @Override
    public SearchMode getMode() {
        return this.prefixInfo.getMode();
    }

    @Override
    public void getSearchResults(String token, Consumer<Collection<T>> resultsConsumer) {
        this.searchStorage.getSearchResults(token, resultsConsumer);
    }

    @Override
    public void getAllElements(Consumer<Collection<T>> resultsConsumer) {
        this.searchStorage.getAllElements(resultsConsumer);
    }
}