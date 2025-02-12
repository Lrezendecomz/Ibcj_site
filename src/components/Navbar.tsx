import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false); // Fecha o menu ao clicar em um link
  };

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold" onClick={closeMenu}>
          Minha Igreja
        </Link>

        {/* Botão de menu para mobile */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Links de navegação */}
        <ul className={`md:flex md:space-x-6 absolute md:static top-16 left-0 w-full bg-blue-600 md:bg-transparent p-4 md:p-0 transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}>
          <li>
            <Link to="/" className="text-white block py-2 md:py-0" onClick={closeMenu}>
              Início
            </Link>
          </li>
          <li>
            <Link to="/membros" className="text-white block py-2 md:py-0" onClick={closeMenu}>
              Membros
            </Link>
          </li>
          <li>
            <Link to="/horarios" className="text-white block py-2 md:py-0" onClick={closeMenu}>
              Horários
            </Link>
          </li>
          <li>
            <Link to="/videos" className="text-white block py-2 md:py-0" onClick={closeMenu}>
              Vídeos
            </Link>
          </li>
          <li>
            <Link to="/aovivo" className="text-white block py-2 md:py-0" onClick={closeMenu}>
              Ao Vivo
            </Link>
          </li>
          <li>
            <Link to="/calendario" className="text-white block py-2 md:py-0" onClick={closeMenu}>
              Calendário
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
