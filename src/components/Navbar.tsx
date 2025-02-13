import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Church } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Church className="w-8 h-8 text-white" />
            <span className="text-xl font-bold text-white">IBCJ</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/membros" className="text-white hover:text-gray-200">Membros</Link>
            <Link to="/horarios" className="text-white hover:text-gray-200">Horários</Link>
            <Link to="/videos" className="text-white hover:text-gray-200">Vídeos</Link>
            <Link to="/aovivo" className="text-white hover:text-gray-200">Ao Vivo</Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link to="/membros" className="text-white hover:text-gray-200">Membros</Link>
              <Link to="/horarios" className="text-white hover:text-gray-200">Horários</Link>
              <Link to="/videos" className="text-white hover:text-gray-200">Vídeos</Link>
              <Link to="/aovivo" className="text-white hover:text-gray-200">Ao Vivo</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
