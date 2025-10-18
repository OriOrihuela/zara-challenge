import type { PropsWithChildren } from 'react';

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="layout">
      <header className="layout-header">
        <div className="header-content">
          <nav className="navigation">
            <a href="/" className="nav-link">
              Logo here
            </a>
            <a href="/cart" className="nav-link">
              Cart here
            </a>
          </nav>
        </div>
      </header>
      <main className="main-content">{children}</main>
    </div>
  );
};
