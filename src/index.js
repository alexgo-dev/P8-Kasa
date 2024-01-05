import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Logement from './pages/logement/logement';
import About from './pages/about/about';
import NotFound from './pages/notFound/notFound';
import Footer from './components/footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="/about" element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </React.StrictMode>
  </Router>
);
