import React, { useState, useEffect } from 'react'

const CinematicIntroLoader = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isSwirling, setIsSwirling] = useState(false)

  useEffect(() => {
    // Check if intro has already been shown in this browser session
    const hasSeenIntro = sessionStorage.getItem('fyc_intro_seen')
    
    if (!hasSeenIntro) {
      setIsVisible(true)

      // Trigger swirl & continuous zoom sequence
      const animationTimer = setTimeout(() => {
        setIsSwirling(true)
      }, 50)

      // Finish animation & unmount overlay at 2.4s
      const endTimer = setTimeout(() => {
        setIsVisible(false)
        sessionStorage.setItem('fyc_intro_seen', 'true')
      }, 2450)

      return () => {
        clearTimeout(animationTimer)
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
        opacity: isSwirling ? 1 : 0,
        pointerEvents: 'none'
      }}
    >
      {/* Prominent Bright Golden Gradient Aura Trail */}
      <div
        style={{
          position: 'absolute',
          width: '380px',
          height: '380px',
          borderRadius: '50%',
          background: 'conic-gradient(from 0deg, #F59E0B, #FBBF24, #FEF08A, #38BDF8, #F59E0B)',
          filter: 'blur(35px)',
          opacity: 0.85,
          animation: 'fycGoldenSwirlAura 2.4s cubic-bezier(0.25, 1, 0.5, 1) forwards',
          pointerEvents: 'none'
        }}
      />

      {/* Secondary Bright Golden Flare Ring */}
      <div
        style={{
          position: 'absolute',
          width: '260px',
          height: '260px',
          borderRadius: '50%',
          boxShadow: '0 0 80px 30px rgba(245, 158, 11, 0.75), 0 0 140px 60px rgba(251, 191, 36, 0.4)',
          animation: 'fycGoldenPulse 2.4s cubic-bezier(0.25, 1, 0.5, 1) forwards',
          pointerEvents: 'none'
        }}
      />

      {/* Main Swirling & Continuously Zooming Logo */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          animation: 'fycSwirlZoomLogo 2.4s cubic-bezier(0.22, 1, 0.36, 1) forwards',
          transformOrigin: 'center center'
        }}
      >
        <div style={{ position: 'relative', width: '150px', height: '150px' }}>
          <img
            src="/images/fyc_official_logo.png"
            alt="Financial Youth Club Official Logo"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              filter: 'drop-shadow(0 0 30px rgba(245, 158, 11, 0.9)) drop-shadow(0 0 60px rgba(14, 165, 233, 0.6))'
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes fycSwirlZoomLogo {
          0% {
            opacity: 0;
            transform: rotate(0deg) scale(0.2);
          }
          20% {
            opacity: 1;
            transform: rotate(240deg) scale(0.9);
          }
          50% {
            opacity: 1;
            transform: rotate(540deg) scale(2.2);
          }
          80% {
            opacity: 0.95;
            transform: rotate(900deg) scale(12);
          }
          95% {
            opacity: 0.3;
            transform: rotate(1050deg) scale(32);
          }
          100% {
            opacity: 0;
            transform: rotate(1120deg) scale(48);
          }
        }

        @keyframes fycGoldenSwirlAura {
          0% {
            opacity: 0;
            transform: rotate(0deg) scale(0.3);
          }
          25% {
            opacity: 0.9;
            transform: rotate(360deg) scale(1);
          }
          75% {
            opacity: 0.95;
            transform: rotate(1080deg) scale(6);
          }
          100% {
            opacity: 0;
            transform: rotate(1440deg) scale(25);
          }
        }

        @keyframes fycGoldenPulse {
          0% {
            opacity: 0;
            transform: scale(0.2);
          }
          30% {
            opacity: 1;
            transform: scale(1);
          }
          80% {
            opacity: 0.8;
            transform: scale(8);
          }
          100% {
            opacity: 0;
            transform: scale(20);
          }
        }
      `}</style>
    </div>
  )
}

export default CinematicIntroLoader
