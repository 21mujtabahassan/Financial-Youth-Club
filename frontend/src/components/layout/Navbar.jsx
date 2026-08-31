import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const path = location.pathname

  const navLinks = [
    { name: 'Programs', to: '/programs' },
    { name: 'About', to: '/about' },
    { name: 'Impact', to: '/financial-literacy' },
    { name: 'Collaborations', to: '/collaborations' },
    { name: 'Blog', to: '/blog' }
  ]

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      background: '#FFFFFF',
      borderBottom: '1px solid #E2E8F0',
      boxShadow: '0 2px 10px rgba(15, 23, 42, 0.04)',
      transition: 'all 0.3s ease'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '72px',
        padding: '0 1.5rem'
      }}>
        
        {/* Brand Logo - Official Extracted FYC Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none', minWidth: 0 }}>
          <img
            src="/images/fyc_official_logo.png"
            alt="Financial Youth Club Official Logo"
            style={{ width: '40px', height: '40px', objectFit: 'contain', flexShrink: 0 }}
          />
          <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
            <span 
              className="nav-brand-title"
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 900,
                color: '#0A2647',
                fontSize: '1.2rem',
                letterSpacing: '-0.02em',
                lineHeight: 1.15,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}
            >
              Financial Youth Club
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2.25rem' }} className="desktop-only">
          {navLinks.map((link) => {
            const isActive = path === link.to
            return (
              <Link
                key={link.name}
                to={link.to}
                style={{
                  color: isActive ? '#2FA8D8' : '#0F1B2B',
                  textDecoration: 'none',
                  fontSize: '0.92rem',
                  fontWeight: isActive ? 800 : 600,
                  transition: 'all 0.25s ease',
                  position: 'relative',
                  padding: '0.4rem 0'
                }}
              >
                {link.name}
                {isActive && (
                  <span style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '2.5px',
                    background: 'linear-gradient(135deg, #4FC3E8 0%, #2FA8D8 100%)',
                    borderRadius: '2px'
                  }} />
                )}
              </Link>
            )
          })}
        </nav>

        {/* Single Primary Header CTA Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }} className="desktop-only">
          <a
            href="https://chat.whatsapp.com/HzUA3qjzlweGWUhhOJtraC"
            target="_blank"
            rel="noreferrer"
            style={{
              background: 'linear-gradient(135deg, #4FC3E8 0%, #2FA8D8 100%)',
              color: '#071B33',
              padding: '0.6rem 1.4rem',
              borderRadius: '8px',
              fontWeight: 800,
              fontSize: '0.85rem',
              textDecoration: 'none',
              letterSpacing: '0.03em',
              transition: 'all 0.25s ease',
              boxShadow: '0 4px 20px rgba(79, 195, 232, 0.25)'
            }}
          >
            JOIN US
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            display: 'none',
            background: 'transparent',
            border: 'none',
            color: '#0A2647',
            cursor: 'pointer',
            padding: '0.5rem',
            borderRadius: '6px'
          }}
          className="mobile-toggle"
          aria-label="Toggle Navigation Menu"
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div style={{
          background: '#FFFFFF',
          borderTop: '1px solid #EAF7FD',
          padding: '1.25rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          boxShadow: '0 10px 25px rgba(10, 38, 71, 0.08)',
          animation: 'fadeIn 0.2s ease-out'
        }}>
          {navLinks.map((link) => {
            const isActive = path === link.to
            return (
              <Link
                key={link.name}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                style={{
                  color: isActive ? '#2FA8D8' : '#0A2647',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  fontWeight: isActive ? 800 : 700,
                  padding: '0.4rem 0',
                  borderBottom: '1px solid #EAF7FD'
                }}
              >
                {link.name}
              </Link>
            )
          })}
          <div style={{ marginTop: '0.5rem' }}>
            <a
              href="https://chat.whatsapp.com/HzUA3qjzlweGWUhhOJtraC"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileOpen(false)}
              style={{
                display: 'block',
                textAlign: 'center',
                background: 'linear-gradient(135deg, #4FC3E8 0%, #2FA8D8 100%)',
                color: '#071B33',
                padding: '0.75rem',
                borderRadius: '8px',
                fontWeight: 800,
                fontSize: '0.9rem',
                textDecoration: 'none',
                boxShadow: '0 4px 20px rgba(79, 195, 232, 0.25)'
              }}
            >
              JOIN US
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 960px) {
          .desktop-only { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
        @media (max-width: 480px) {
          .nav-brand-title {
            font-size: 1.02rem !important;
          }
        }
      `}</style>
    </header>
  )
}

export default Navbar



