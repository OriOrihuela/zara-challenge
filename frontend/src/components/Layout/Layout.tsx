import type { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import { SVGIcon } from '../SVGIcon/SVGIcon';
import './Layout.scss';

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="layout">
      <header className="layout__header">
        <nav className="layout__nav">
          <Link to="/" className="layout__nav-link">
            <SVGIcon src="/src/assets/mbst.svg" width="96px" height="32px" />
          </Link>
          <Link to="/cart" className="layout__nav-cart">
            <SVGIcon src="/src/assets/bag.svg" width="18px" height="22px" />
            <span className="layout__nav-cart-items">0</span>
          </Link>
        </nav>
      </header>
      <main className="layout__main">{children}</main>
    </div>
  );
};
