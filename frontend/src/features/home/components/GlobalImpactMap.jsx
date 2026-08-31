import React from 'react'
import { Link } from 'react-router-dom'

const GlobalImpactMap = () => {
  return (
    <section className="container" style={{ padding: '4.5rem 1.5rem' }}>
      <div className="grid-2" style={{ alignItems: 'center' }}>
        
        {/* Left Side: Interactive World Map */}
        <div>
          <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-navy)', fontSize: '1.5rem', fontWeight: 800, marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            GLOBAL REACH & IMPACT
          </h2>

          <div style={{
            position: 'relative',
            background: 'linear-gradient(135deg, #0A2647 0%, #071B33 100%)',
            border: '1px solid rgba(79, 195, 232, 0.3)',
            borderRadius: '16px',
            padding: '2rem 1.5rem',
            textAlign: 'center',
            boxShadow: '0 8px 30px rgba(7, 27, 51, 0.2)'
          }}>
            {/* World Map Vector Illustration */}
            <svg viewBox="0 0 1000 500" style={{ width: '100%', height: 'auto', display: 'block' }}>
              {/* Simplified Continents SVG paths */}
              <path d="M150,150 Q200,100 280,120 T320,250 T200,300 Z" fill="#2FA8D8" opacity="0.25" />
              <path d="M450,120 Q520,80 600,120 T620,240 T500,280 Z" fill="#2FA8D8" opacity="0.25" />
              <path d="M650,100 Q780,80 850,150 T800,280 Z" fill="#2FA8D8" opacity="0.25" />
              <path d="M280,320 Q350,300 380,420 T290,450 Z" fill="#2FA8D8" opacity="0.2" />
              <path d="M750,340 Q850,330 880,420 T780,440 Z" fill="#2FA8D8" opacity="0.2" />

              {/* Pulsing Pin Markers */}
              {/* USA */}
              <circle cx="220" cy="160" r="8" fill="#4FC3E8" className="map-pin" />
              <circle cx="220" cy="160" r="4" fill="#071B33" />

              {/* UK & Europe */}
              <circle cx="490" cy="140" r="8" fill="#4FC3E8" className="map-pin" />
              <circle cx="490" cy="140" r="4" fill="#071B33" />

              {/* UAE / Middle East */}
              <circle cx="590" cy="220" r="8" fill="#2FA8D8" className="map-pin" />
              <circle cx="590" cy="220" r="4" fill="#071B33" />

              {/* Pakistan / South Asia */}
              <circle cx="660" cy="210" r="8" fill="#4FC3E8" className="map-pin" />
              <circle cx="660" cy="210" r="4" fill="#071B33" />

              {/* East Asia */}
              <circle cx="780" cy="220" r="8" fill="#4FC3E8" className="map-pin" />
              <circle cx="780" cy="220" r="4" fill="#071B33" />

              {/* Australia */}
              <circle cx="820" cy="380" r="8" fill="#4FC3E8" className="map-pin" />
              <circle cx="820" cy="380" r="4" fill="#071B33" />
            </svg>
          </div>
        </div>

        {/* Right Side: Impact Counters matching screenshot */}
        <div>
          <h2 style={{ fontFamily: 'var(--font-heading)', color: '#0A2647', fontSize: '1.5rem', fontWeight: 800, marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            IMPACT COUNTERS
          </h2>

          <div className="impact-counters-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginBottom: '1.75rem' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem', fontWeight: 800, color: '#0A2647', lineHeight: 1 }}>20+</div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0A2647', marginTop: '0.35rem', textTransform: 'uppercase' }}>COUNTRIES</div>
            </div>

            <div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem', fontWeight: 800, color: '#2FA8D8', lineHeight: 1 }}>150K+</div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0A2647', marginTop: '0.35rem', textTransform: 'uppercase' }}>YOUTH SERVED</div>
            </div>

            <div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem', fontWeight: 800, color: '#4FC3E8', lineHeight: 1 }}>500+</div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0A2647', marginTop: '0.35rem', textTransform: 'uppercase' }}>MENTORS</div>
            </div>

            <div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem', fontWeight: 800, color: '#071B33', lineHeight: 1 }}>1200+</div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0A2647', marginTop: '0.35rem', textTransform: 'uppercase' }}>WORKSHOPS</div>
            </div>
          </div>

          <p style={{ color: '#475569', fontSize: '0.95rem', marginBottom: '2rem', lineHeight: 1.6 }}>
            Access free, impactful financial education and mentorship across borders. Join our growing global network today.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/programs" className="btn-gold mobile-full-btn" style={{ minWidth: '170px' }}>
              JOIN AS STUDENT
            </Link>
            <Link to="/founders" className="btn-navy mobile-full-btn" style={{ minWidth: '170px' }}>
              BECOME A MENTOR
            </Link>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 640px) {
          .impact-counters-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.25rem 0.75rem !important;
          }
        }
      `}</style>
    </section>
  )
}

export default GlobalImpactMap
