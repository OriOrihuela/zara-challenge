import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { PhoneList } from './pages/PhoneList/PhoneList';

export const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<PhoneList />} />
          <Route path="/cart" element={<div>Cart page coming soon...</div>} />
        </Routes>
      </Layout>
    </Router>
  );
};
