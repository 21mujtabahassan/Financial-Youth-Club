import React from 'react'
import { Link } from 'react-router-dom'
import { Globe, ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section style={{
      position: 'relative',
      background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
      color: '#0F172A',
      padding: '4.5rem 0 5.5rem 0',
      overflow: 'hidden'
    }}>
      <div className="container">
        
        {/* 2-Column Split Hero Layout - Matching Design Reference Sheet */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          alignItems: 'center'
        }} className="grid-2">
          
          {/* Left Column: Typography & Button Styles */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            
            {/* NGO Registered Tag */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              background: '#E0F2FE',
              border: '1px solid #93C5FD',
              color: '#0284C7',
              padding: '0.4rem 1.1rem',
              borderRadius: '9999px',
              fontSize: '0.82rem',
              fontWeight: 800,
              marginBottom: '1.5rem',
              letterSpacing: '0.03em'
            }}>
              <Globe size={15} color="#0284C7" /> REGISTERED NGO • 35+ COUNTRIES WORLDWIDE
            </div>

            {/* Headline */}
            <h1 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '3.1rem',
              fontWeight: 900,
              color: '#0F172A',
              margin: '0 0 1.25rem 0',
              lineHeight: 1.15,
              letterSpacing: '-0.03em'
            }}>
              Empowering the Next Generation of Financial Leaders Globally
            </h1>

            {/* Subheadline */}
            <p style={{
              color: '#475569',
              fontSize: '1.1rem',
              lineHeight: 1.65,
              margin: '0 0 2.25rem 0',
              maxWidth: '560px',
              fontWeight: 400
            }}>
              Connecting students with world-class mentors from <strong>J.P. Morgan, Goldman Sachs, Harvard, and LSE</strong>.
            </p>

            {/* Action Button Styles (#be600 Primary Amber/Orange & #26300c Secondary Navy Outline) */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', width: '100%' }}>
              <a
                href="https://forms.gle/onzeGaNhv4eywexr9"
                target="_blank"
                rel="noreferrer"
                style={{
                  background: '#D97706',
                  color: '#FFFFFF',
                  padding: '0.95rem 1.75rem',
                  borderRadius: '10px',
                  fontWeight: 800,
                  fontSize: '0.92rem',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 4px 18px rgba(217, 119, 6, 0.25)',
                  transition: 'all 0.25s ease'
                }}
              >
                Apply for Summer Program 2026 <ArrowRight size={18} />
              </a>

              <Link
                to="/founders"
                style={{
                  background: '#FFFFFF',
                  color: '#0F172A',
                  border: '1.5px solid #0F172A',
                  padding: '0.95rem 1.75rem',
                  borderRadius: '10px',
                  fontWeight: 800,
                  fontSize: '0.92rem',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.25s ease'
                }}
              >
                Become a Mentor
              </Link>
            </div>


          </div>

          {/* Right Column: Hero Reference Image (Full Height 100% Fit) */}
          <div style={{ position: 'relative', width: '100%' }}>
            <div style={{
              width: '100%',
              height: '460px',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid #E2E8F0',
              boxShadow: '0 16px 36px rgba(15, 23, 42, 0.08)'
            }}>
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
                alt="Gen-Z students collaborating over tablet in modern lounge"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Hero


