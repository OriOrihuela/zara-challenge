import { useEffect, useState } from 'react';
import './SearchBar.scss';

interface SearchBarProps {
  // eslint-disable-next-line no-unused-vars
  onSearch: (searchTerm: string) => void;
  onClear: () => void;
  isLoading?: boolean;
}

export const SearchBar = ({
  onSearch,
  onClear,
  isLoading = false
}: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (searchQuery.trim()) {
        onSearch(searchQuery.trim());
      } else {
        onClear();
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchQuery, onSearch, onClear]);

  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        placeholder="Search for a smartphone..."
        className="search-bar__input"
      />
      {isLoading && (
        <div className="search-bar__loading">
          <div className="search-bar__loading-bar"></div>
        </div>
      )}
    </div>
  );
};
