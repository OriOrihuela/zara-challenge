import type { PropsWithChildren } from 'react';
import { useCallback, useState } from 'react';
import { SearchContext, type SearchState } from './SearchContext';

export const SearchProvider = ({ children }: PropsWithChildren) => {
  const [searchState, setSearchState] = useState<SearchState>({
    searchTerm: '',
    isLoading: false
  });

  const setSearchTerm = useCallback((searchTerm: string) => {
    setSearchState(prev => ({
      ...prev,
      searchTerm
    }));
  }, []);

  const setLoading = useCallback((isLoading: boolean) => {
    setSearchState(prev => ({
      ...prev,
      isLoading
    }));
  }, []);

  const clearSearch = useCallback(() => {
    setSearchState({
      searchTerm: '',
      isLoading: false
    });
  }, []);

  return (
    <SearchContext.Provider
      value={{
        searchState,
        setSearchTerm,
        setLoading,
        clearSearch
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
