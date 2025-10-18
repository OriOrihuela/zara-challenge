import type { PropsWithChildren } from 'react';
import { SVGIcon } from '../SVGIcon/SVGIcon';

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="layout">
      <header className="layout-header">
        <div className="header-content">
          <nav className="navigation">
            <a href="/" className="nav-link">
              <SVGIcon src="/src/assets/mbst.svg" width="96px" height="32px" />
            </a>
            <a href="/cart" className="nav-link">
              <SVGIcon src="/src/assets/bag.svg" width="18px" height="22px" />
            </a>
          </nav>
        </div>
      </header>
      <main className="main-content">{children}</main>
    </div>
  );
};
