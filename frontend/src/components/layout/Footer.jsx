import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Globe, Mail, MapPin, Send, Instagram, Linkedin, Youtube, CheckCircle2 } from 'lucide-react'

const Footer = () => {
  const [emailInput, setEmailInput] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (emailInput.trim()) {
      setIsSubscribed(true)
      setEmailInput('')
      setTimeout(() => setIsSubscribed(false), 5000)
    }
  }

  return (
    <footer style={{
      background: '#090D16',
      color: '#F8FAFC',
      borderTop: '1px solid #1E293B',
      paddingTop: '2.25rem',
      paddingBottom: '1.25rem'
    }}>
      <div className="container">
        
        {/* Top Compact Newsletter Section */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.25rem',
          paddingBottom: '1.5rem',
          marginBottom: '1.75rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
        }}>
          <div>
            <h3 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.15rem',
              fontWeight: 700,
              color: '#FFFFFF',
              marginBottom: '0.15rem'
            }}>
              Stay Connected with FYC
            </h3>
            <p style={{ color: '#94A3B8', fontSize: '0.82rem', fontWeight: 400, margin: 0 }}>
              Receive global financial literacy updates, workshop schedules, and program announcements.
            </p>
          </div>

          <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '0.5rem', width: '100%', maxWidth: '380px' }}>
            {isSubscribed ? (
              <div style={{
                background: 'rgba(16, 185, 129, 0.15)',
                border: '1px solid #10B981',
                color: '#10B981',
                padding: '0.55rem 1rem',
                borderRadius: '8px',
                fontSize: '0.82rem',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                width: '100%'
              }}>
                <CheckCircle2 size={16} /> Thank you for subscribing to FYC!
              </div>
            ) : (
              <>
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Enter your email..."
                  required
                  style={{
                    flex: 1,
                    padding: '0.55rem 0.95rem',
                    borderRadius: '8px',
                    border: '1px solid #334155',
                    background: '#0F172A',
                    color: '#FFFFFF',
                    fontSize: '0.82rem',
                    outline: 'none'
                  }}
                />
                <button
                  type="submit"
                  style={{
                    background: '#0EA5E9',
                    color: '#FFFFFF',
                    border: 'none',
                    padding: '0.55rem 1.15rem',
                    borderRadius: '8px',
                    fontWeight: 600,
                    fontSize: '0.82rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    whiteSpace: 'nowrap'
                  }}
                >
                  Subscribe <Send size={13} />
                </button>
              </>
            )}
          </form>
        </div>

        {/* 4 Compact Columns */}
        <div className="grid-4" style={{ gap: '1.75rem', marginBottom: '1.75rem' }}>
          
          {/* Column 1: Brand & Identity */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.65rem' }}>
              <img
                src="/images/fyc_official_logo.png"
                alt="Financial Youth Club Logo"
                style={{ width: '32px', height: '32px', objectFit: 'contain' }}
              />
              <span style={{ fontFamily: 'var(--font-heading)', color: '#FFFFFF', fontSize: '1.05rem', fontWeight: 700 }}>
                Financial Youth Club
              </span>
            </div>
            <p style={{ color: '#94A3B8', fontSize: '0.8rem', lineHeight: 1.5, marginBottom: '0.85rem', fontWeight: 400 }}>
              A registered Non-Governmental Organization (NGO) delivering free financial literacy across 35+ countries.
            </p>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <a href="https://instagram.com/financialyouthclub" target="_blank" rel="noreferrer" 
                 style={{ width: '30px', height: '30px', borderRadius: '6px', background: '#0F172A', border: '1px solid #1E293B', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94A3B8' }}>
                <Instagram size={15} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" 
                 style={{ width: '30px', height: '30px', borderRadius: '6px', background: '#0F172A', border: '1px solid #1E293B', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94A3B8' }}>
                <Linkedin size={15} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" 
                 style={{ width: '30px', height: '30px', borderRadius: '6px', background: '#0F172A', border: '1px solid #1E293B', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94A3B8' }}>
                <Youtube size={15} />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
              <li><Link to="/about" style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.8rem', fontWeight: 400 }}>About FYC</Link></li>
              <li><Link to="/founders" style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.8rem', fontWeight: 400 }}>Founders & Vision</Link></li>
              <li><Link to="/programs" style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.8rem', fontWeight: 400 }}>Summer Program 2026</Link></li>
              <li><Link to="/collaborations" style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.8rem', fontWeight: 400 }}>Global Alliances</Link></li>
              <li><Link to="/speakers" style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.8rem', fontWeight: 400 }}>Guest Speakers</Link></li>
            </ul>
          </div>

          {/* Column 3: Key Initiatives */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              Key Initiatives
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
              <li><Link to="/campaigns" style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.8rem', fontWeight: 400 }}>Girls for Change & Pink Tax</Link></li>
              <li><Link to="/financial-literacy" style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.8rem', fontWeight: 400 }}>Financial Literacy Drives</Link></li>
              <li><Link to="/collaborations" style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.8rem', fontWeight: 400 }}>USA Economics Olympiad</Link></li>
              <li><Link to="/activities" style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.8rem', fontWeight: 400 }}>Case Study Bootcamps</Link></li>
              <li><Link to="/webinars" style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.8rem', fontWeight: 400 }}>Webinars & AMAs</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact & Social Links */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              Global Contact & Community
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', color: '#94A3B8', fontSize: '0.8rem', fontWeight: 400 }}>
              <a href="mailto:contact@financialyouthclub.org" style={{ color: '#94A3B8', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                <Mail size={14} color="#38BDF8" />
                <span>contact@financialyouthclub.org</span>
              </a>
              <a href="https://linktr.ee/financialyouthclub" target="_blank" rel="noreferrer" style={{ color: '#38BDF8', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.45rem', fontWeight: 600 }}>
                <Globe size={14} color="#38BDF8" />
                <span>linktr.ee/financialyouthclub</span>
              </a>
              <a href="https://chat.whatsapp.com/HzUA3qjzlweGWUhhOJtraC" target="_blank" rel="noreferrer" style={{ color: '#10B981', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.45rem', fontWeight: 600 }}>
                <Send size={14} color="#10B981" />
                <span>Join WhatsApp Community</span>
              </a>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem', lineHeight: 1.4 }}>
                <MapPin size={14} color="#38BDF8" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                <span>Outreach HQ across UK, USA, UAE & Pakistan</span>
              </div>
            </div>
          </div>


        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          paddingTop: '1rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.75rem',
          color: '#64748B',
          fontSize: '0.78rem',
          fontWeight: 400
        }}>
          <div>
            &copy; {new Date().getFullYear()} <strong style={{ color: '#94A3B8', fontWeight: 600 }}>Financial Youth Club (FYC)</strong>. All rights reserved.
          </div>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <Link to="/privacy-policy" style={{ color: '#94A3B8', textDecoration: 'none', fontWeight: 500 }}>
              Privacy Policy
            </Link>
            <span>•</span>
            <Link to="/terms" style={{ color: '#94A3B8', textDecoration: 'none', fontWeight: 500 }}>
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer




