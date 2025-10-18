import { createContext } from 'react';

export interface SearchState {
  searchTerm: string;
  isLoading: boolean;
  total: number;
}

export interface SearchContextType {
  searchState: SearchState;
  // eslint-disable-next-line no-unused-vars
  setSearchTerm: (searchTerm: string) => void;
  // eslint-disable-next-line no-unused-vars
  setLoading: (isLoading: boolean) => void;
  // eslint-disable-next-line no-unused-vars
  setTotal: (total: number) => void;
  clearSearch: () => void;
}

export const SearchContext = createContext<SearchContextType | undefined>(
  undefined
);
