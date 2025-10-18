import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { SearchProvider } from './context/SearchContext.tsx';
import { PhoneList } from './pages/PhoneList/PhoneList';

export const App = () => {
  return (
    <SearchProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<PhoneList />} />
            <Route path="/cart" element={<div>Cart page coming soon...</div>} />
          </Routes>
        </Layout>
      </Router>
    </SearchProvider>
  );
};
