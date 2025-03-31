import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Main from './pages/Main';
import Product from './pages/Product';
import Product2 from './pages/Product2';
import Ticket from './pages/Ticket';
import Ticket2 from './pages/Ticket2';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product2" element={<Product2 />} />
        <Route path="/ticket" element={<Ticket />} />
        <Route path="/ticket2" element={<Ticket2 />} />
      </Routes>
    </Router>

  );
}

export default App;
