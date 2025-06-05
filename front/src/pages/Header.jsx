import React, { useState } from 'react';
import '../styles/Header.css';
import { Menu, Home, Tv, Newspaper, Globe } from 'lucide-react';

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <header className="header">
      <button className="menu-icon" onClick={toggleMenu} aria-label="Abrir menu">
       <Menu size={28} color="#fff" />
      </button>


      <h1 className="logo">g1</h1>

      {open && (
        <nav className="dropdown-menu">
          <a href="https://g1.globo.com" target="_blank" rel="noopener noreferrer">
            <Home size={18} /> <span>Início</span>
          </a>
          <a href="https://g1.globo.com/tv-e-famosos/" target="_blank" rel="noopener noreferrer">
            <Tv size={18} /> <span>TV e Famosos</span>
          </a>
          <a href="https://g1.globo.com/politica/" target="_blank" rel="noopener noreferrer">
            <Newspaper size={18} /> <span>Política</span>
          </a>
          <a href="https://g1.globo.com/mundo/" target="_blank" rel="noopener noreferrer">
            <Globe size={18} /> <span>Mundo</span>
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
