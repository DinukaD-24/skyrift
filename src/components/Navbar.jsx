// SKYRIFT — Navbar Component
import { useState, useEffect, useRef } from 'react';
import '../styles/Navbar.css';

const navLinks = [
  { label: 'HOME', href: '#home' },
  { label: 'FLEET', href: '#fleet' },
  { label: 'EXPERIENCE', href: '#how-it-works' },
  { label: 'RATES', href: '#rates' },
  { label: 'BOOK', href: '#booking' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section
  useEffect(() => {
    const sectionIds = ['home', 'fleet', 'how-it-works', 'rates', 'booking'];
    const observers = [];

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.3 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach(o => o.disconnect());
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} ref={navRef}>
        <div className="navbar__blade">
          <div className="navbar__inner">
            {/* Logo */}
            <a href="#home" className="navbar__logo" onClick={(e) => handleNavClick(e, '#home')}>
              <svg width="24" height="16" viewBox="0 0 24 16" className="navbar__logo-icon">
                <path d="M0,8 Q4,2 8,8 Q12,14 16,8 Q20,2 24,8" fill="none" stroke="var(--sky-horizon)" strokeWidth="2" strokeLinecap="round">
                  <animate attributeName="d" dur="2s" repeatCount="indefinite"
                    values="M0,8 Q4,2 8,8 Q12,14 16,8 Q20,2 24,8;M0,8 Q4,14 8,8 Q12,2 16,8 Q20,14 24,8;M0,8 Q4,2 8,8 Q12,14 16,8 Q20,2 24,8" />
                </path>
              </svg>
              <span>SKYRIFT</span>
            </a>

            {/* Desktop Nav Links */}
            <ul className="navbar__links">
              {navLinks.map(({ label, href }) => {
                const sectionId = href.replace('#', '');
                const isActive = activeSection === sectionId;
                return (
                  <li key={label}>
                    <a
                      href={href}
                      className={`navbar__link ${isActive ? 'is-active' : ''}`}
                      onClick={(e) => handleNavClick(e, href)}
                    >
                      {label}
                      <span className="navbar__link-underline" />
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* CTA Button */}
            <a href="#booking" className="btn-wing btn-wing-primary navbar__cta" onClick={(e) => handleNavClick(e, '#booking')}>
              <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
                <path d="M1,5 L15,5 M10,1 L15,5 L10,9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              BOOK A FLIGHT
            </a>

            {/* Hamburger */}
            <button
              className={`navbar__hamburger ${menuOpen ? 'is-open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay menu */}
      <div className={`nav-overlay ${menuOpen ? 'is-open' : ''}`}>
        <ul className="nav-overlay__links">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a href={href} onClick={(e) => handleNavClick(e, href)}>{label}</a>
            </li>
          ))}
          <li>
            <a href="#booking" className="nav-overlay__cta" onClick={(e) => handleNavClick(e, '#booking')}>
              BOOK A FLIGHT →
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
