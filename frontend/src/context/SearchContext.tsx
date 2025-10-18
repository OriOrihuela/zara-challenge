import type { PropsWithChildren } from 'react';
import { useState } from 'react';
import { SearchContext, type SearchState } from './SearchContext';

export const SearchProvider = ({ children }: PropsWithChildren) => {
  const [searchState, setSearchState] = useState<SearchState>({
    searchTerm: '',
    isLoading: false
  });

  const setSearchTerm = (searchTerm: string) => {
    setSearchState(prev => ({
      ...prev,
      searchTerm
    }));
  };

  const setLoading = (isLoading: boolean) => {
    setSearchState(prev => ({
      ...prev,
      isLoading
    }));
  };

  const clearSearch = () => {
    setSearchState({
      searchTerm: '',
      isLoading: false
    });
  };

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
