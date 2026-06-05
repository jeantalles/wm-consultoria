"use client";
import { useState, useEffect } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav id="topo">
      <div className="nav-inner">
        <a href="/#hero" className="nav-logo" onClick={closeMenu}>
          <img src="/img/logo-dark.png" alt="WM Consultoria" />
        </a>
        
        <div className="nav-links desktop-only">
          <a href="/#servicos">Serviços</a>
          <a href="/#projetos">Projetos</a>
          <a href="/#clientes">Clientes</a>
          <a href="/#contato" className="btn-contato">Contato</a>

        </div>

        <button 
          className={`hamburger ${isOpen ? "open" : ""}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <div className={`mobile-menu-overlay ${isOpen ? "open" : ""}`} onClick={closeMenu}></div>
        <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
          <div className="mobile-menu-inner">
            <a href="/#servicos" onClick={closeMenu} className="mobile-link" style={{ "--delay": "1" } as React.CSSProperties}>Serviços</a>
            <a href="/#projetos" onClick={closeMenu} className="mobile-link" style={{ "--delay": "2" } as React.CSSProperties}>Projetos</a>
            <a href="/#clientes" onClick={closeMenu} className="mobile-link" style={{ "--delay": "3" } as React.CSSProperties}>Clientes</a>
            <a href="/#contato" onClick={closeMenu} className="btn-contato mobile-cta" style={{ "--delay": "4" } as React.CSSProperties}>Contato</a>

          </div>
        </div>
      </div>
    </nav>
  );
}
