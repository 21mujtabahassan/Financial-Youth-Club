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
      {/* Prominent Compact Golden Gradient Aura Trail */}
      <div
        style={{
          position: 'absolute',
          width: '180px',
          height: '180px',
          borderRadius: '50%',
          background: 'conic-gradient(from 0deg, #D97706, #F59E0B, #FBBF24, #FEF08A, #F59E0B, #D97706)',
          filter: 'blur(16px)',
          animation: 'fycGoldenSingleRoundAura 2.2s ease-in-out forwards',
          pointerEvents: 'none'
        }}
      />

      {/* Main Swirling FYC Logo (Only the logo spins) */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          animation: 'fycSingleRoundSwirl 2.2s cubic-bezier(0.25, 1, 0.4, 1) forwards',
          transformOrigin: 'center center',
          zIndex: 5
        }}
      >
        <div style={{ position: 'relative', width: '160px', height: '160px' }}>
          <img
            src="/images/fyc_official_logo.png"
            alt="Financial Youth Club Official Logo"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              filter: 'drop-shadow(0 0 30px rgba(245, 158, 11, 0.95)) drop-shadow(0 0 60px rgba(217, 119, 6, 0.8))'
            }}
          />
        </div>
      </div>

      {/* STATIC Curved VorexCore Arc (Perfectly Centered Horizontally & Curved Underneath Globe) */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '380px',
          height: '380px',
          pointerEvents: 'none',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          animation: 'fycStaticArcFade 2.2s ease-in-out forwards'
        }}
      >
        <svg width="380" height="380" viewBox="0 0 380 380" style={{ overflow: 'visible' }}>
          <defs>
            <linearGradient id="vorexStaticTextGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="50%" stopColor="#C084FC" />
              <stop offset="100%" stopColor="#38BDF8" />
            </linearGradient>

            <filter id="vorexTextShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000000" floodOpacity="0.95" />
              <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#0EA5E9" floodOpacity="0.8" />
            </filter>

            {/* Symmetrical Bottom Arc centered at (190, 190), Radius R=130 */}
            <path id="vorexStaticArc" d="M 60,190 A 130,130 0 0,0 320,190" />
          </defs>

          {/* Large, High-Legibility Curved Text Path */}
          <text
            fill="url(#vorexStaticTextGrad)"
            fontSize="15.5"
            fontWeight="900"
            letterSpacing="3.5"
            textAnchor="middle"
            filter="url(#vorexTextShadow)"
            style={{ fontFamily: 'var(--font-heading), sans-serif' }}
          >
            <textPath href="#vorexStaticArc" startOffset="50%">
              • POWERED BY VOREXCORE SOLUTIONS •
            </textPath>
          </text>
        </svg>
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
