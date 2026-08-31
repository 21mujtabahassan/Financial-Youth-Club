import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Globe, Mail, MapPin, Send, Instagram, Linkedin, CheckCircle2 } from 'lucide-react'
import { newsletterService } from '../../features/newsletter/services/newsletterService'
import StarfieldBackground from '../common/StarfieldBackground'

const Footer = () => {
  const [emailInput, setEmailInput] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (emailInput.trim()) {
      newsletterService.addSubscriber(emailInput.trim())
      setIsSubscribed(true)
      setEmailInput('')
      setTimeout(() => setIsSubscribed(false), 5000)
    }
  }

  return (
    <footer style={{
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(180deg, #123A5E 0%, #0A2647 35%, #071B33 70%, #050F1F 100%)',
      color: '#F8FAFC',
      borderTop: '1px solid rgba(79, 195, 232, 0.25)',
      boxShadow: '0 -4px 20px rgba(79, 195, 232, 0.1)',
      paddingTop: '2.25rem',
      paddingBottom: '1.25rem'
    }}>
      {/* Exact Hero Night-Sky Starfield Background Layer */}
      <StarfieldBackground opacity={0.85} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Top Compact Newsletter Section */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.25rem',
          paddingBottom: '1.5rem',
          marginBottom: '1.75rem',
          borderBottom: '1px solid rgba(79, 195, 232, 0.12)'
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
            <p style={{ color: '#EAF7FD', opacity: 0.8, fontSize: '0.82rem', fontWeight: 400, margin: 0 }}>
              Receive global financial literacy updates, workshop schedules, and program announcements.
            </p>
          </div>

          <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '0.5rem', width: '100%', maxWidth: '380px' }}>
            {isSubscribed ? (
              <div style={{
                background: 'rgba(79, 195, 232, 0.15)',
                border: '1px solid #4FC3E8',
                color: '#4FC3E8',
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
                    border: '1px solid rgba(79, 195, 232, 0.3)',
                    background: 'rgba(7, 27, 51, 0.8)',
                    color: '#FFFFFF',
                    fontSize: '0.82rem',
                    outline: 'none'
                  }}
                />
                <button
                  type="submit"
                  style={{
                    background: 'linear-gradient(135deg, #4FC3E8 0%, #2FA8D8 100%)',
                    color: '#071B33',
                    border: 'none',
                    padding: '0.55rem 1.15rem',
                    borderRadius: '8px',
                    fontWeight: 800,
                    fontSize: '0.82rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    whiteSpace: 'nowrap',
                    boxShadow: '0 4px 14px rgba(79, 195, 232, 0.25)'
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
            <p style={{ color: '#EAF7FD', opacity: 0.8, fontSize: '0.8rem', lineHeight: 1.5, marginBottom: '0.85rem', fontWeight: 400 }}>
              A registered Non-Governmental Organization (NGO) delivering free financial literacy across 35+ countries.
            </p>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <a href="https://instagram.com/financialyouthclub" target="_blank" rel="noreferrer" className="footer-social-icon"
                 style={{ width: '30px', height: '30px', borderRadius: '6px', background: 'rgba(79, 195, 232, 0.1)', border: '1px solid rgba(79, 195, 232, 0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4FC3E8' }}>
                <Instagram size={15} />
              </a>
              <a href="https://www.linkedin.com/company/financial-youth-club-adanshahzad/" target="_blank" rel="noreferrer" className="footer-social-icon"
                 style={{ width: '30px', height: '30px', borderRadius: '6px', background: 'rgba(79, 195, 232, 0.1)', border: '1px solid rgba(79, 195, 232, 0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4FC3E8' }}>
                <Linkedin size={15} />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
              <li><Link to="/about" className="footer-link">About FYC</Link></li>
              <li><Link to="/founders" className="footer-link">Founders & Vision</Link></li>
              <li><Link to="/programs" className="footer-link">Summer Program 2026</Link></li>
              <li><Link to="/collaborations" className="footer-link">Global Alliances</Link></li>
              <li><Link to="/blog" className="footer-link">FYC Blog & Insights</Link></li>
            </ul>
          </div>

          {/* Column 3: Key Initiatives */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              Key Initiatives
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
              <li><Link to="/programs" className="footer-link">Financial Inclusion Drives</Link></li>
              <li><Link to="/financial-literacy" className="footer-link">Financial Literacy Drives</Link></li>
              <li><Link to="/collaborations" className="footer-link">USA Economics Olympiad</Link></li>
              <li><Link to="/activities" className="footer-link">Case Study Bootcamps</Link></li>
              <li><Link to="/webinars" className="footer-link">Webinars & AMAs</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact & Social Links */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              Global Contact & Community
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', color: '#EAF7FD', fontSize: '0.8rem', fontWeight: 400 }}>
              <a href="mailto:financialyouthclub@gmail.com" className="footer-link" style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                <Mail size={14} color="#4FC3E8" />
                <span>financialyouthclub@gmail.com</span>
              </a>
              <a href="https://linktr.ee/financialyouthclub" target="_blank" rel="noreferrer" className="footer-link" style={{ color: '#4FC3E8', display: 'flex', alignItems: 'center', gap: '0.45rem', fontWeight: 600 }}>
                <Globe size={14} color="#4FC3E8" />
                <span>linktr.ee/financialyouthclub</span>
              </a>
              <a href="https://chat.whatsapp.com/HzUA3qjzlweGWUhhOJtraC" target="_blank" rel="noreferrer" className="footer-link" style={{ color: '#4FC3E8', display: 'flex', alignItems: 'center', gap: '0.45rem', fontWeight: 600 }}>
                <Send size={14} color="#4FC3E8" />
                <span>Join WhatsApp Community</span>
              </a>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem', lineHeight: 1.4, opacity: 0.85 }}>
                <MapPin size={14} color="#4FC3E8" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                <span>Outreach HQ across UK, USA, UAE & Pakistan</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(79, 195, 232, 0.12)',
          paddingTop: '1.25rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          color: '#94A3B8',
          fontSize: '0.78rem',
          fontWeight: 400
        }}>
          <div>
            &copy; {new Date().getFullYear()} <strong style={{ color: '#EAF7FD', fontWeight: 600 }}>Financial Youth Club (FYC)</strong>. All rights reserved.
          </div>

          {/* VorexCore Watermark Badge (Live Instagram Link) */}
          <a
            href="https://www.instagram.com/vorexcoresolutions/"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit VorexCore Solutions Instagram"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.55rem',
              background: 'rgba(7, 27, 51, 0.9)',
              border: '1px solid rgba(79, 195, 232, 0.4)',
              padding: '0.35rem 0.85rem',
              borderRadius: '9999px',
              boxShadow: '0 2px 10px rgba(79, 195, 232, 0.2)',
              textDecoration: 'none',
              cursor: 'pointer'
            }}
          >
            <img src="/images/vorexcore_logo.png" alt="VorexCore Solutions" style={{ width: '16px', height: '16px', borderRadius: '3px', objectFit: 'cover' }} />
            <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#94A3B8' }}>
              Engineered by <strong style={{ background: 'linear-gradient(135deg, #4FC3E8 0%, #A855F7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 900 }}>VOREXCORE SOLUTIONS</strong> ↗
            </span>
          </a>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <Link to="/privacy-policy" className="footer-link">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link to="/terms" className="footer-link">
              Terms of Service
            </Link>
            <span>•</span>
            <Link to="/admin/login" className="footer-link">
              Admin Portal
            </Link>
          </div>
        </div>

      </div>

      <style>{`
        .footer-link {
          color: #94A3B8;
          text-decoration: none;
          font-size: 0.8rem;
          font-weight: 400;
          transition: all 0.2s ease;
        }
        .footer-link:hover {
          color: #4FC3E8 !important;
        }
        .footer-social-icon {
          transition: all 0.25s ease;
        }
        .footer-social-icon:hover {
          background: rgba(79, 195, 232, 0.25) !important;
          color: #FFFFFF !important;
          transform: translateY(-2px);
        }
        @media (max-width: 640px) {
          .footer-newsletter-header { text-align: center; }
          .footer-bottom-bar {
            flex-direction: column !important;
            text-align: center !important;
            gap: 0.85rem !important;
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer




