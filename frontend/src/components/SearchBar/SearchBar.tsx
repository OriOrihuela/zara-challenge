import { useEffect, useState } from 'react';
import { useSearch } from '../../hooks/useSearch';
import './SearchBar.scss';

export const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const { searchState, setSearchTerm, setLoading, clearSearch } = useSearch();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (searchQuery.trim()) {
        setLoading(true);
        setSearchTerm(searchQuery.trim());
      } else if (hasUserInteracted) {
        clearSearch();
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchQuery, setLoading, setSearchTerm, clearSearch, hasUserInteracted]);

  return (
    <section
      className="search-bar"
      role="search"
      aria-label="Search for phones"
    >
      <label htmlFor="phone-search" className="sr-only">
        Search for smartphones
      </label>
      <input
        id="phone-search"
        type="text"
        value={searchQuery}
        onChange={e => {
          setSearchQuery(e.target.value);
          setHasUserInteracted(true);
        }}
        placeholder="Search for a smartphone..."
        className="search-bar__input"
        aria-describedby="search-results"
        autoComplete="off"
      />
      <p
        id="search-results"
        className="search-bar__total"
        aria-live="polite"
        aria-atomic="true"
      >
        {searchState.total} RESULTS
      </p>
    </section>
  );
};
