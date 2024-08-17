package mezz.jei.gui.search;

import java.util.Collection;
import java.util.Collections;
import java.util.IdentityHashMap;
import java.util.Map;
import java.util.Set;
import mezz.jei.core.search.CombinedSearchables;
import mezz.jei.core.search.ISearchStorage;
import mezz.jei.core.search.ISearchable;
import mezz.jei.core.search.PrefixInfo;
import mezz.jei.core.search.PrefixedSearchable;
import mezz.jei.core.search.SearchMode;
import mezz.jei.gui.ingredients.IListElementInfo;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class ElementSearch implements IElementSearch {

    private static final Logger LOGGER = LogManager.getLogger();

    private final Map<PrefixInfo<IListElementInfo<?>>, PrefixedSearchable<IListElementInfo<?>>> prefixedSearchables = new IdentityHashMap();

    private final CombinedSearchables<IListElementInfo<?>> combinedSearchables = new CombinedSearchables<>();

    public ElementSearch(ElementPrefixParser elementPrefixParser) {
        for (PrefixInfo<IListElementInfo<?>> prefixInfo : elementPrefixParser.allPrefixInfos()) {
            ISearchStorage<IListElementInfo<?>> storage = prefixInfo.createStorage();
            PrefixedSearchable<IListElementInfo<?>> prefixedSearchable = new PrefixedSearchable<>(storage, prefixInfo);
            this.prefixedSearchables.put(prefixInfo, prefixedSearchable);
            this.combinedSearchables.addSearchable(prefixedSearchable);
        }
    }

    @Override
    public Set<IListElementInfo<?>> getSearchResults(ElementPrefixParser.TokenInfo tokenInfo) {
        String token = tokenInfo.token();
        if (token.isEmpty()) {
            return Set.of();
        } else {
            Set<IListElementInfo<?>> results = Collections.newSetFromMap(new IdentityHashMap());
            PrefixInfo<IListElementInfo<?>> prefixInfo = tokenInfo.prefixInfo();
            if (prefixInfo == ElementPrefixParser.NO_PREFIX) {
                this.combinedSearchables.getSearchResults(token, results::addAll);
                return results;
            } else {
                ISearchable<IListElementInfo<?>> searchable = (ISearchable<IListElementInfo<?>>) this.prefixedSearchables.get(prefixInfo);
                if (searchable != null && searchable.getMode() != SearchMode.DISABLED) {
                    searchable.getSearchResults(token, results::addAll);
                    return results;
                } else {
                    this.combinedSearchables.getSearchResults(token, results::addAll);
                    return results;
                }
            }
        }
    }

    @Override
    public void add(IListElementInfo<?> info) {
        for (PrefixedSearchable<IListElementInfo<?>> prefixedSearchable : this.prefixedSearchables.values()) {
            SearchMode searchMode = prefixedSearchable.getMode();
            if (searchMode != SearchMode.DISABLED) {
                Collection<String> strings = prefixedSearchable.getStrings(info);
                ISearchStorage<IListElementInfo<?>> searchable = prefixedSearchable.getSearchStorage();
                for (String string : strings) {
                    searchable.put(string, info);
                }
            }
        }
    }

    public Set<IListElementInfo<?>> getAllIngredients() {
        Set<IListElementInfo<?>> results = Collections.newSetFromMap(new IdentityHashMap());
        PrefixedSearchable<IListElementInfo<?>> noPrefixSearchables = (PrefixedSearchable<IListElementInfo<?>>) this.prefixedSearchables.get(ElementPrefixParser.NO_PREFIX);
        noPrefixSearchables.getAllElements(results::addAll);
        return results;
    }

    @Override
    public void logStatistics() {
        this.prefixedSearchables.forEach((prefixInfo, value) -> {
            if (prefixInfo.getMode() != SearchMode.DISABLED) {
                ISearchStorage<IListElementInfo<?>> storage = value.getSearchStorage();
                LOGGER.info("ElementSearch {} Storage Stats: {}", prefixInfo, storage.statistics());
            }
        });
    }
}