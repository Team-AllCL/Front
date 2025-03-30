
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Main from './pages/Main';
import Product from './pages/Product';
import Ticket from './pages/Ticket';
import TicketSuccess from './pages/TicketSuccess';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/product" element={<Product />} />
        <Route path="/ticket" element={<Ticket />} />
        <Route path="/ticket-success" element={<TicketSuccess />} />
      </Routes>
    </Router>
  );
}

export default App;
