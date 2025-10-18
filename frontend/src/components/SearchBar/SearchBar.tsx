import { useEffect, useState } from 'react';
import { useSearch } from '../../hooks/useSearch';
import './SearchBar.scss';

export const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { searchState, setSearchTerm, setLoading, clearSearch } = useSearch();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (searchQuery.trim()) {
        setLoading(true);
        setSearchTerm(searchQuery.trim());
      } else {
        clearSearch();
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchQuery, setLoading, setSearchTerm, clearSearch]);

  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        placeholder="Search for a smartphone..."
        className="search-bar__input"
      />
      <p className="search-bar__total">{searchState.total} RESULTS</p>
    </div>
  );
};
