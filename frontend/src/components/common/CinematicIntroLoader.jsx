import React, { useState, useEffect } from 'react'

const CinematicIntroLoader = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isZooming, setIsZooming] = useState(false)

  useEffect(() => {
    // Check if intro has already been shown in this browser session
    const hasSeenIntro = sessionStorage.getItem('fyc_intro_seen')
    
    if (!hasSeenIntro) {
      setIsVisible(true)
      
      // Start zoom-through effect at 1.4s
      const zoomTimer = setTimeout(() => {
        setIsZooming(true)
      }, 1400)

      // Unmount splash screen and set session storage flag at 2.1s
      const endTimer = setTimeout(() => {
        setIsVisible(false)
        sessionStorage.setItem('fyc_intro_seen', 'true')
      }, 2100)

      return () => {
        clearTimeout(zoomTimer)
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
        background: '#090D16',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        opacity: isZooming ? 0 : 1,
        transition: isZooming ? 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)' : 'none',
        pointerEvents: isZooming ? 'none' : 'all'
      }}
    >
      {/* Background Radial Glow */}
      <div
        style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(14, 165, 233, 0.25) 0%, rgba(217, 119, 6, 0.12) 40%, rgba(9, 13, 22, 0) 70%)',
          animation: 'fycPulseGlow 2s ease-in-out infinite alternate',
          pointerEvents: 'none'
        }}
      />

      {/* Main Logo Container with Zoom Keyframes */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          transform: isZooming ? 'scale(24)' : 'scale(1)',
          transition: isZooming ? 'transform 0.75s cubic-bezier(0.7, 0, 0.3, 1)' : 'none',
          animation: isZooming ? 'none' : 'fycLogoEntry 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
          transformOrigin: 'center center'
        }}
      >
        <div style={{ position: 'relative', width: '130px', height: '130px', marginBottom: '1.25rem' }}>
          <img
            src="/images/fyc_official_logo.png"
            alt="Financial Youth Club Logo"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              filter: 'drop-shadow(0 8px 24px rgba(14, 165, 233, 0.4))'
            }}
          />
        </div>

        <div style={{ textAlign: 'center', opacity: isZooming ? 0 : 1, transition: 'opacity 0.2s ease' }}>
          <h1 style={{
            fontFamily: 'var(--font-heading, sans-serif)',
            fontSize: '1.65rem',
            fontWeight: 900,
            color: '#FFFFFF',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            margin: '0 0 0.4rem 0',
            background: 'linear-gradient(135deg, #FFFFFF 0%, #38BDF8 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Financial Youth Club
          </h1>
          <p style={{
            color: '#94A3B8',
            fontSize: '0.85rem',
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            margin: 0
          }}>
            Empowering Youth Globally
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fycLogoEntry {
          0% {
            opacity: 0;
            transform: scale(0.65);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fycPulseGlow {
          0% {
            transform: scale(0.85);
            opacity: 0.6;
          }
          100% {
            transform: scale(1.15);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}

export default CinematicIntroLoader
