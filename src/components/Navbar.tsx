import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Church } from 'lucide-react';
import BackButton from './BackButton';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const showBackButton = location.pathname !== '/';

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-blue-600 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            {showBackButton && <BackButton />}
            <Link to="/" className="flex items-center space-x-2" onClick={handleLinkClick}>
              <Church className="w-8 h-8 text-white" />
              <span className="text-xl font-bold text-white hidden sm:inline">Igreja Batista Carvalhos de Justiça</span>
              <span className="text-xl font-bold text-white sm:hidden">IBCJ</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/membros" className="text-white hover:text-blue-100">Membros</Link>
            <Link to="/horarios" className="text-white hover:text-blue-100">Horários</Link>
            <Link to="/videos" className="text-white hover:text-blue-100">Vídeos</Link>
            <Link to="/aovivo" className="text-white hover:text-blue-100">Ao Vivo</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link to="/membros" className="text-white hover:text-blue-100" onClick={handleLinkClick}>Membros</Link>
              <Link to="/horarios" className="text-white hover:text-blue-100" onClick={handleLinkClick}>Horários</Link>
              <Link to="/videos" className="text-white hover:text-blue-100" onClick={handleLinkClick}>Vídeos</Link>
              <Link to="/aovivo" className="text-white hover:text-blue-100" onClick={handleLinkClick}>Ao Vivo</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
