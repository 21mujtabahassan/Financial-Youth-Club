import React from 'react'
import { Link } from 'react-router-dom'
import { Globe, ArrowRight } from 'lucide-react'
import StarfieldBackground from '../../../components/common/StarfieldBackground'

const Hero = () => {
  return (
    <section className="hero-section" style={{
      position: 'relative',
      background: 'linear-gradient(180deg, #123A5E 0%, #0A2647 35%, #071B33 70%, #050F1F 100%)',
      color: '#FFFFFF',
      padding: '4rem 0 4.5rem 0',
      overflow: 'hidden'
    }}>
      {/* Refined Rich Night-Sky Starfield Layer */}
      <StarfieldBackground opacity={0.85} />

      {/* Soft Radial Glow behind Headline / Hero Image */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        left: '20%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(79, 195, 232, 0.10) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 1
      }} />

      {/* Decorative Logo Circle Motif Ring */}
      <div style={{
        position: 'absolute',
        top: '50%',
        right: '-5%',
        transform: 'translateY(-50%)',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        border: '1px solid rgba(79, 195, 232, 0.12)',
        background: 'radial-gradient(circle, rgba(79, 195, 232, 0.05) 0%, transparent 65%)',
        pointerEvents: 'none',
        zIndex: 1
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* 2-Column Split Hero Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2.5rem',
          alignItems: 'center'
        }} className="grid-2 hero-grid">
          
          {/* Left Column: Typography & Button Styles */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            
            {/* NGO Registered Tag */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              background: '#EAF7FD',
              border: '1px solid rgba(79, 195, 232, 0.4)',
              color: '#071B33',
              padding: '0.4rem 1.1rem',
              borderRadius: '9999px',
              fontSize: '0.8rem',
              fontWeight: 800,
              marginBottom: '1.25rem',
              letterSpacing: '0.03em',
              boxShadow: '0 2px 10px rgba(79, 195, 232, 0.15)'
            }}>
              <Globe size={15} color="#2FA8D8" /> REGISTERED NGO • 35+ COUNTRIES WORLDWIDE
            </div>

            {/* Headline */}
            <h1 className="hero-title" style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '3rem',
              fontWeight: 900,
              color: '#FFFFFF',
              margin: '0 0 1.25rem 0',
              lineHeight: 1.15,
              letterSpacing: '-0.03em'
            }}>
              Empowering the Next Generation of Financial Leaders Globally
            </h1>

            {/* Subheadline */}
            <p className="hero-sub" style={{
              color: '#EAF7FD',
              opacity: 0.88,
              fontSize: '1.1rem',
              lineHeight: 1.65,
              margin: '0 0 2rem 0',
              maxWidth: '560px',
              fontWeight: 400
            }}>
              Connecting students with world-class mentors from <strong style={{ color: '#FFFFFF', fontWeight: 700 }}>J.P. Morgan, Goldman Sachs, Harvard, and LSE</strong>.
            </p>

            {/* Action Buttons */}
            <div className="hero-btn-group" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', width: '100%' }}>
              <a
                href="https://forms.gle/onzeGaNhv4eywexr9"
                target="_blank"
                rel="noreferrer"
                className="mobile-full-btn"
                style={{
                  background: 'linear-gradient(135deg, #4FC3E8 0%, #2FA8D8 100%)',
                  color: '#071B33',
                  padding: '0.9rem 1.6rem',
                  borderRadius: '10px',
                  fontWeight: 800,
                  fontSize: '0.9rem',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 4px 20px rgba(79, 195, 232, 0.25)',
                  transition: 'all 0.25s ease'
                }}
              >
                Apply for Summer Program 2026 <ArrowRight size={18} />
              </a>

              <Link
                to="/founders"
                className="mobile-full-btn"
                style={{
                  background: 'rgba(255, 255, 255, 0.06)',
                  color: '#EAF7FD',
                  border: '1.5px solid rgba(79, 195, 232, 0.4)',
                  padding: '0.9rem 1.6rem',
                  borderRadius: '10px',
                  fontWeight: 800,
                  fontSize: '0.9rem',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backdropFilter: 'blur(4px)',
                  transition: 'all 0.25s ease'
                }}
              >
                Become a Mentor
              </Link>
            </div>

          </div>

          {/* Right Column: Hero Reference Image */}
          <div style={{ position: 'relative', width: '100%' }}>
            <div className="hero-img-wrapper" style={{
              width: '100%',
              height: '440px',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid rgba(79, 195, 232, 0.25)',
              boxShadow: '0 20px 40px rgba(7, 27, 51, 0.4)'
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

      <style>{`
        @media (max-width: 960px) {
          .hero-section { padding: 2.5rem 0 3.5rem 0 !important; }
          .hero-title { font-size: 2.1rem !important; }
          .hero-img-wrapper { height: 320px !important; }
        }
        @media (max-width: 640px) {
          .hero-title { font-size: 1.8rem !important; }
          .hero-sub { font-size: 0.95rem !important; margin-bottom: 1.5rem !important; }
          .hero-img-wrapper { height: 240px !important; }
          .hero-btn-group { flex-direction: column !important; gap: 0.75rem !important; }
          .mobile-full-btn { width: 100% !important; text-align: center !important; }
        }
      `}</style>
    </section>
  )
}

export default Hero


