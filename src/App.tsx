import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Members from './pages/Members';
import Schedule from './pages/Schedule';
import Videos from './pages/Videos';
import Live from './pages/Live';
import CalendarPage from './pages/Calendar';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
       <ScrollToTop />
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/membros" element={<Members />} />
            <Route path="/horarios" element={<Schedule />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/aovivo" element={<Live />} />
            <Route path="/calendario" element={<CalendarPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">IBCJ</h3>
            <p className="text-gray-400">Transformando vidas através do amor de Cristo</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contato:</h3>
            <p className="text-gray-400">Telefone: (11) 1234-5678</p>
            <p className="text-gray-400">Email: contato@ibcjdiasdavila.com</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Endereço:</h3>
            <p className="text-gray-400">Av. Perimetral Sul, 150 - Urbis</p>
            <p className="text-gray-400">Dias Davila - BA</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default App;
