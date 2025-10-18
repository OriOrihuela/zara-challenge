import type { PropsWithChildren } from 'react';
import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useSearch } from '../../hooks/useSearch';
import { SVGIcon } from '../SVGIcon/SVGIcon';
import { SearchBar } from '../SearchBar/SearchBar';
import './Layout.scss';

export const Layout = ({ children }: PropsWithChildren) => {
  const { searchState, setSearchTerm, setLoading, clearSearch } = useSearch();

  const handleSearch = useCallback(
    (searchTerm: string) => {
      setLoading(true);
      setSearchTerm(searchTerm);
    },
    [setLoading, setSearchTerm]
  );

  return (
    <div className="layout">
      <header className="layout__header">
        <nav className="layout__nav">
          <Link to="/" className="layout__nav-logo">
            <SVGIcon src="/src/assets/mbst.svg" width="96px" height="32px" />
          </Link>
          <Link to="/cart" className="layout__nav-cart">
            <SVGIcon src="/src/assets/bag.svg" width="18px" height="22px" />
            <span className="layout__nav-cart-items">0</span>
          </Link>
        </nav>
      </header>
      <SearchBar
        onSearch={handleSearch}
        onClear={clearSearch}
        isLoading={searchState.isLoading}
      />
      <main className="layout__main">{children}</main>
    </div>
  );
};
