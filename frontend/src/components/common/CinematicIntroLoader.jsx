import React, { useState, useEffect } from 'react'

const CinematicIntroLoader = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if intro has already been shown in this browser session
    const hasSeenIntro = sessionStorage.getItem('fyc_intro_seen')
    
    if (!hasSeenIntro) {
      setIsVisible(true)

      // Unmount splash overlay and set session flag at 2.2s
      const endTimer = setTimeout(() => {
        setIsVisible(false)
        sessionStorage.setItem('fyc_intro_seen', 'true')
      }, 2200)

      return () => {
        clearTimeout(endTimer)
      }
    }
  }, [])

  if (!isVisible) return null

  return (
    <div
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
        animation: 'fycOverlayFadeOut 2.2s ease-in-out forwards',
        pointerEvents: 'none'
      }}
    >
      {/* Single Flex Container for Globe + Compact Aura + Crystal Glass Tag */}
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
        {/* Compact Golden Gradient Aura (Stays tight behind the globe) */}
        <div
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
            animation: 'fycGoldenSingleRoundAura 2.2s ease-in-out forwards',
            pointerEvents: 'none'
          }}
        />

        {/* Main Swirling FYC Logo */}
        <div
          style={{
            position: 'relative',
            width: '160px',
            height: '160px',
            animation: 'fycSingleRoundSwirl 2.2s cubic-bezier(0.25, 1, 0.4, 1) forwards',
            transformOrigin: 'center center',
            zIndex: 5
          }}
        >
          <img
            src="/images/fyc_official_logo.png"
            alt="Financial Youth Club Official Logo"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              filter: 'drop-shadow(0 0 25px rgba(245, 158, 11, 0.95)) drop-shadow(0 0 50px rgba(217, 119, 6, 0.8))'
            }}
          />
        </div>

        {/* CRYSTAL GLASS VOREXCORE BADGE (Positioned Statically Beneath Globe, Clear of Gradient) */}
        <div
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
            animation: 'fycCrystalGlassFade 2.2s ease-in-out forwards'
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
            transform: rotate(50deg) scale(0.25);
          }
          75% {
            opacity: 1;
            transform: rotate(320deg) scale(1.15);
          }
          90% {
            opacity: 1;
            transform: rotate(360deg) scale(1.25);
          }
          100% {
            opacity: 0;
            transform: rotate(360deg) scale(1.3);
          }
        }

        @keyframes fycGoldenSingleRoundAura {
          0% {
            opacity: 0;
            transform: rotate(0deg) scale(0.1);
          }
          20% {
            opacity: 0.95;
            transform: rotate(70deg) scale(0.4);
          }
          80% {
            opacity: 0.95;
            transform: rotate(360deg) scale(1.15);
          }
          100% {
            opacity: 0;
            transform: rotate(360deg) scale(1.2);
          }
        }

        @keyframes fycStaticArcFade {
          0% {
            opacity: 0;
            transform: scale(0.85);
          }
          25% {
            opacity: 1;
            transform: scale(1);
          }
          85% {
            opacity: 1;
            transform: scale(1);
          }
          100% {
            opacity: 0;
            transform: scale(1.05);
          }
        }

        @keyframes fycCrystalGlassFade {
          0% {
            opacity: 0;
            transform: translateY(12px) scale(0.92);
          }
          25% {
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
          0% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}

export default CinematicIntroLoader
