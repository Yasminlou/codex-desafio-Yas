// src/components/Navbar.js
import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="g1-header">
      <div className="g1-header-container">
        <h1 className="g1-logo">g1</h1>
        <nav className="g1-nav">
          <a href="/">notícias</a>
          <a href="/">vídeos</a>
          <a href="/">ao vivo</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

