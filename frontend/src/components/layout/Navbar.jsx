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
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', textDecoration: 'none' }}>
          <img
            src="/images/fyc_official_logo.png"
            alt="Financial Youth Club Official Logo"
            style={{ width: '44px', height: '44px', objectFit: 'contain' }}
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 900,
              color: '#0F172A',
              fontSize: '1.25rem',
              letterSpacing: '-0.02em',
              lineHeight: 1.1
            }}>
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
                  color: isActive ? '#0EA5E9' : '#334155',
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
                    height: '2px',
                    background: '#0EA5E9',
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
              background: '#0F172A',
              color: '#FFFFFF',
              padding: '0.6rem 1.4rem',
              borderRadius: '8px',
              fontWeight: 800,
              fontSize: '0.85rem',
              textDecoration: 'none',
              letterSpacing: '0.03em',
              transition: 'all 0.25s ease',
              boxShadow: '0 4px 12px rgba(15, 23, 42, 0.15)'
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
            color: '#0F172A',
            cursor: 'pointer',
            padding: '0.5rem'
          }}
          className="mobile-toggle"
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div style={{
          background: '#FFFFFF',
          borderTop: '1px solid #E2E8F0',
          padding: '1.25rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              style={{
                color: '#0F172A',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: 700
              }}
            >
              {link.name}
            </Link>
          ))}
          <div style={{ marginTop: '0.5rem' }}>
            <a
              href="https://chat.whatsapp.com/HzUA3qjzlweGWUhhOJtraC"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileOpen(false)}
              style={{
                display: 'block',
                textAlign: 'center',
                background: '#0F172A',
                color: '#FFFFFF',
                padding: '0.75rem',
                borderRadius: '8px',
                fontWeight: 800,
                fontSize: '0.9rem',
                textDecoration: 'none'
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
      `}</style>
    </header>
  )
}

export default Navbar



