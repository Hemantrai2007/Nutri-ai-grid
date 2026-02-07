
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import NutriLens from './pages/NutriLens';
import Vendors from './pages/Vendors';
import HistoryPage from './pages/History';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/scan" element={<NutriLens />} />
          <Route path="/vendors" element={<Vendors />} />
          <Route path="/history" element={<HistoryPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
