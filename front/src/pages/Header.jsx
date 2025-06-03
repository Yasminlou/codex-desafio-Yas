import React, { useState } from 'react';
import '../styles/Header.css';
import { MdOutlineArticle, MdVideoLibrary, MdLiveTv } from 'react-icons/md';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="g1-header">
      <div className="g1-header-content">
        <button
          className="hamburger-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          ☰
        </button>
        <h1 className="g1-logo">g1</h1>
      </div>

      {menuOpen && (
        <nav className="g1-mobile-menu">
          <a href="/" title="Notícias">
            <MdOutlineArticle size={24} />
          </a>
          <a href="/" title="Vídeos">
            <MdVideoLibrary size={24} />
          </a>
          <a href="/" title="Ao vivo">
            <MdLiveTv size={24} />
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
