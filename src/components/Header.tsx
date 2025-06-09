'use client';

import { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#creators", label: "Discover Creators" },
    { href: "#pricing", label: "Pricing" },
    { href: "#dashboard", label: "Dashboard" },
    { href: "#founder", label: "Meet the Founder" }
  ];

  return (
    <>
      <style jsx>{`
        .header {
          position: sticky;
          top: 0;
          z-index: 50;
          backdrop-filter: blur(16px);
          background: linear-gradient(to right, rgba(249, 115, 22, 0.95), rgba(234, 88, 12, 0.95), rgba(239, 68, 68, 0.95));
          border-bottom: 1px solid rgba(251, 146, 60, 0.2);
          box-shadow: 0 10px 15px -3px rgba(249, 115, 22, 0.1), 0 4px 6px -2px rgba(249, 115, 22, 0.05);
        }

        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        @media (min-width: 640px) {
          .container {
            padding: 0 1.5rem;
          }
        }

        @media (min-width: 1024px) {
          .container {
            padding: 0 2rem;
          }
        }

        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 4rem;
        }

        @media (min-width: 1024px) {
          .header-content {
            height: 5rem;
          }
        }

        .logo-container {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .logo-container:hover {
          transform: scale(1.02);
        }

        .logo-icon {
          width: 2rem;
          height: 2rem;
          background: white;
          border-radius: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          transition: all 0.3s ease;
        }

        .logo-container:hover .logo-icon {
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          transform: scale(1.05);
        }

        .logo-text {
          font-size: 1.25rem;
          font-weight: 700;
          color: white;
          letter-spacing: -0.025em;
        }

        @media (min-width: 1024px) {
          .logo-text {
            font-size: 1.5rem;
          }
        }

        .logo-wealth {
          color: rgba(254, 215, 170, 1);
          margin-left: 0.25rem;
        }

        .logo-society {
          color: rgba(253, 186, 116, 1);
          margin-left: 0.25rem;
          font-weight: 500;
          display: none;
        }

        @media (min-width: 640px) {
          .logo-society {
            display: inline;
          }
        }

        .desktop-nav {
          display: none;
          align-items: center;
          gap: 0.25rem;
        }

        @media (min-width: 1024px) {
          .desktop-nav {
            display: flex;
          }
        }

        .nav-link {
          padding: 0.5rem 1rem;
          color: rgba(255, 255, 255, 0.9);
          font-weight: 500;
          border-radius: 0.5rem;
          text-decoration: none;
          transition: all 0.2s ease;
          position: relative;
          overflow: hidden;
        }

        .nav-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.1);
          transition: left 0.3s ease;
          z-index: -1;
        }

        .nav-link:hover {
          color: white;
          transform: scale(1.05);
        }

        .nav-link:hover::before {
          left: 0;
        }

        .nav-link:active {
          transform: scale(0.95);
        }

        .cta-container {
          display: none;
          align-items: center;
          gap: 1rem;
        }

        @media (min-width: 1024px) {
          .cta-container {
            display: flex;
          }
        }

        .cta-button {
          background: white;
          color: rgb(234, 88, 12);
          padding: 0.625rem 1.5rem;
          border-radius: 0.75rem;
          font-weight: 600;
          text-decoration: none;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          border: 1px solid rgba(251, 146, 60, 0.2);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          transition: left 0.6s ease;
        }

        .cta-button:hover {
          color: rgb(194, 65, 12);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          transform: scale(1.05);
        }

        .cta-button:hover::before {
          left: 100%;
        }

        .cta-button:active {
          transform: scale(0.95);
        }

        .mobile-menu-btn {
          display: block;
          padding: 0.5rem;
          color: white;
          background: transparent;
          border: none;
          border-radius: 0.5rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        @media (min-width: 1024px) {
          .mobile-menu-btn {
            display: none;
          }
        }

        .mobile-menu-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: scale(1.1);
        }

        .mobile-menu {
          display: block;
          transition: all 0.3s ease-in-out;
          overflow: hidden;
        }

        @media (min-width: 1024px) {
          .mobile-menu {
            display: none;
          }
        }

        .mobile-menu.open {
          max-height: 24rem;
          opacity: 1;
          padding-bottom: 1.5rem;
        }

        .mobile-menu.closed {
          max-height: 0;
          opacity: 0;
        }

        .mobile-nav {
          padding-top: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .mobile-nav-link {
          display: block;
          padding: 0.75rem 1rem;
          color: rgba(255, 255, 255, 0.9);
          font-weight: 500;
          border-radius: 0.5rem;
          text-decoration: none;
          transition: all 0.2s ease;
          position: relative;
          overflow: hidden;
        }

        .mobile-nav-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.1);
          transition: left 0.3s ease;
          z-index: -1;
        }

        .mobile-nav-link:hover {
          color: white;
        }

        .mobile-nav-link:hover::before {
          left: 0;
        }

        .mobile-cta-container {
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.2);
          margin-top: 1rem;
        }

        .mobile-cta {
          display: block;
          width: 100%;
          text-align: center;
          background: white;
          color: rgb(234, 88, 12);
          padding: 0.75rem 1.5rem;
          border-radius: 0.75rem;
          font-weight: 600;
          text-decoration: none;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .mobile-cta::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          transition: left 0.6s ease;
        }

        .mobile-cta:hover {
          color: rgb(194, 65, 12);
          transform: scale(1.05);
        }

        .mobile-cta:hover::before {
          left: 100%;
        }

        .mobile-cta:active {
          transform: scale(0.95);
        }

        @keyframes slideInDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .header {
          animation: slideInDown 0.6s ease-out;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }

        .logo-icon {
          animation: pulse 2s infinite;
        }

        .logo-container:hover .logo-icon {
          animation: none;
        }
      `}</style>

      <header className="header">
        <div className="container">
          <div className="header-content">
            {/* Logo */}
            <div className="logo-container">
              <div className="logo-icon">
                <Sparkles style={{ width: '1.25rem', height: '1.25rem', color: 'rgb(249, 115, 22)' }} />
              </div>
              <div className="logo-text">
                Creative
                <span className="logo-wealth">Wealth</span>
                <span className="logo-society">Society</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="desktop-nav">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="nav-link"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* CTA Button - Desktop */}
            <div className="cta-container">
              <a href="/register" className="cta-button">
                Try It Free
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="mobile-menu-btn"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X style={{ width: '1.5rem', height: '1.5rem' }} />
              ) : (
                <Menu style={{ width: '1.5rem', height: '1.5rem' }} />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`mobile-menu ${isMenuOpen ? 'open' : 'closed'}`}>
            <nav className="mobile-nav">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="mobile-nav-link"
                >
                  {item.label}
                </a>
              ))}
              
              {/* Mobile CTA */}
              <div className="mobile-cta-container">
                <a
                  href="/register"
                  onClick={() => setIsMenuOpen(false)}
                  className="mobile-cta"
                >
                  Try It Free
                </a>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}