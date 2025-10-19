import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { SearchProvider } from './context/SearchContext.tsx';
import { PhoneListPage } from './pages/PhoneListPage/PhoneListPage';
import { PhoneDetailPage } from './pages/PhoneDetailPage/PhoneDetailPage';

export const App = () => {
  return (
    <SearchProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<PhoneListPage />} />
            <Route path="/:id" element={<PhoneDetailPage />} />
            <Route path="/cart" element={<div>Cart page coming soon...</div>} />
          </Routes>
        </Layout>
      </Router>
    </SearchProvider>
  );
};
