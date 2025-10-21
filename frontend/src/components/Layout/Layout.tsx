import type { PropsWithChildren } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { SVGIcon } from '../SVGIcon/SVGIcon';
import { SearchBar } from '../SearchBar/SearchBar';
import { BackButton } from '../BackButton/BackButton';
import { useCart } from '../../hooks/useCart';
import './Layout.scss';

export const Layout = ({ children }: PropsWithChildren) => {
  const location = useLocation();
  const { cartState } = useCart();

  const isPhoneListPage = location.pathname === '/';
  const isPhoneDetailPage =
    location.pathname.startsWith('/') &&
    location.pathname !== '/' &&
    location.pathname !== '/cart';

  return (
    <div className="layout">
      <header className="layout__header">
        <nav className="layout__nav">
          <Link to="/" className="layout__nav-logo">
            <SVGIcon src="/src/assets/mbst.svg" width="96px" height="32px" />
          </Link>
          <Link to="/cart" className="layout__nav-cart">
            <SVGIcon src="/src/assets/bag.svg" width="18px" height="22px" />
            <span className="layout__nav-cart-items">
              {cartState.items.length}
            </span>
          </Link>
        </nav>
      </header>
      {isPhoneListPage && <SearchBar />}
      {isPhoneDetailPage && <BackButton />}
      <main className="layout__main">{children}</main>
    </div>
  );
};
