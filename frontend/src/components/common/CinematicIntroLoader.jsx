import React, { useState, useEffect } from 'react'

const CinematicIntroLoader = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check session storage
    const hasSeenIntro = sessionStorage.getItem('fyc_intro_seen')
    
    if (!hasSeenIntro) {
      setIsVisible(true)

      // Auto dismiss intro overlay (2.4s on mobile, 4.2s on desktop)
      const isMobile = window.innerWidth <= 640
      const duration = isMobile ? 2400 : 4200

      const endTimer = setTimeout(() => {
        setIsVisible(false)
        sessionStorage.setItem('fyc_intro_seen', 'true')
      }, duration)

      return () => clearTimeout(endTimer)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div
      className="fyc-intro-overlay"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 999999,
        background: 'radial-gradient(circle at center, #0F172A 0%, #0A0F1D 60%, #050811 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        animation: 'fycOverlayFadeOut 3.8s ease-in-out forwards',
        pointerEvents: 'none'
      }}
    >
      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 5
        }}
      >
        {/* Compact Golden Gradient Aura */}
        <div
          className="intro-aura"
          style={{
            position: 'absolute',
            top: '40%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '180px',
            height: '180px',
            borderRadius: '50%',
            background: 'conic-gradient(from 0deg, #D97706, #F59E0B, #FBBF24, #FEF08A, #F59E0B, #D97706)',
            filter: 'blur(16px)',
            animation: 'fycGoldenSingleRoundAura 3.8s ease-in-out forwards',
            pointerEvents: 'none'
          }}
        />

        {/* Main Swirling Circular FYC Logo */}
        <div
          className="intro-logo-box"
          style={{
            position: 'relative',
            width: '160px',
            height: '160px',
            borderRadius: '50%',
            overflow: 'hidden',
            clipPath: 'circle(49% at 50% 50%)',
            animation: 'fycSingleRoundSwirl 3.8s cubic-bezier(0.25, 1, 0.4, 1) forwards',
            transformOrigin: 'center center',
            zIndex: 5,
            boxShadow: '0 0 30px rgba(245, 158, 11, 0.8)'
          }}
        >
          <img
            src="/images/fyc_official_logo.png"
            alt="Financial Youth Club Official Logo"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '50%',
              clipPath: 'circle(49% at 50% 50%)',
              display: 'block'
            }}
          />
        </div>

        {/* Crystal Glass Powered Badge */}
        <div
          className="intro-badge"
          style={{
            marginTop: '2rem',
            position: 'relative',
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem',
            background: 'rgba(15, 23, 42, 0.85)',
            border: '1px solid rgba(56, 189, 248, 0.5)',
            backdropFilter: 'blur(14px)',
            WebkitBackdropFilter: 'blur(14px)',
            padding: '0.55rem 1.35rem',
            borderRadius: '9999px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.6), 0 0 20px rgba(56, 189, 248, 0.25)',
            animation: 'fycCrystalGlassFade 3.8s ease-in-out forwards'
          }}
        >
          <img
            src="/images/vorexcore_logo.png"
            alt="VorexCore Solutions"
            style={{ width: '22px', height: '22px', borderRadius: '5px', objectFit: 'cover' }}
          />
          <span style={{ fontSize: '0.82rem', fontWeight: 900, color: '#94A3B8', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            POWERED BY <strong style={{ background: 'linear-gradient(135deg, #38BDF8 0%, #C084FC 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>VOREXCORE SOLUTIONS</strong>
          </span>
        </div>
      </div>

      <style>{`
        @keyframes fycSingleRoundSwirl {
          0% {
            opacity: 0;
            transform: rotate(0deg) scale(0.08);
          }
          15% {
            opacity: 1;
            transform: rotate(360deg) scale(1);
          }
          85% {
            opacity: 1;
            transform: rotate(360deg) scale(1);
          }
          100% {
            opacity: 0;
            transform: rotate(360deg) scale(1.05);
          }
        }

        @keyframes fycGoldenSingleRoundAura {
          0% {
            opacity: 0;
            transform: rotate(0deg) scale(0.1);
          }
          15% {
            opacity: 0.95;
            transform: rotate(90deg) scale(1.15);
          }
          85% {
            opacity: 0.95;
            transform: rotate(360deg) scale(1.15);
          }
          100% {
            opacity: 0;
            transform: rotate(360deg) scale(1.2);
          }
        }

        @keyframes fycCrystalGlassFade {
          0% {
            opacity: 0;
            transform: translateY(12px) scale(0.92);
          }
          15% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          85% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateY(-6px) scale(0.96);
          }
        }

        @keyframes fycOverlayFadeOut {
          0% { opacity: 1; }
          85% { opacity: 1; }
          100% { opacity: 0; }
        }

        @media (max-width: 640px) {
          .fyc-intro-overlay {
            animation-duration: 2.4s !important;
          }
          .intro-logo-box {
            width: 130px !important;
            height: 130px !important;
            animation-duration: 2.4s !important;
          }
          .intro-aura {
            width: 140px !important;
            height: 140px !important;
            animation-duration: 2.4s !important;
          }
          .intro-badge {
            margin-top: 1.5rem !important;
            padding: 0.45rem 1rem !important;
            font-size: 0.72rem !important;
            animation-duration: 2.4s !important;
          }
        }
      `}</style>
    </div>
  )
}

export default CinematicIntroLoader
