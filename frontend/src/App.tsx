import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { SearchProvider } from './context/SearchContext.tsx';
import { CartProvider } from './context/CartContext.tsx';
import { PhoneListPage } from './pages/PhoneListPage/PhoneListPage';
import { PhoneDetailPage } from './pages/PhoneDetailPage/PhoneDetailPage';
import { CartPage } from './pages/CartPage/CartPage';

export const App = () => {
  return (
    <SearchProvider>
      <CartProvider>
        <Router
          future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
        >
          <Layout>
            <Routes>
              <Route path="/" element={<PhoneListPage />} />
              <Route path="/:id" element={<PhoneDetailPage />} />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
          </Layout>
        </Router>
      </CartProvider>
    </SearchProvider>
  );
};
