import React from 'react'
import { Shield, Sparkles, ExternalLink, Cpu } from 'lucide-react'

const VorexCorePartnershipSection = () => {
  return (
    <section style={{ padding: '4.5rem 0', background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)', borderTop: '1px solid #E2E8F0' }}>
      <div className="container">
        
        {/* Main Card Container (Matching User's Reference Screenshot) */}
        <div style={{
          maxWidth: '920px',
          margin: '0 auto',
          background: '#FFFFFF',
          border: '1px solid #E2E8F0',
          borderRadius: '24px',
          padding: '3rem 2rem',
          boxShadow: '0 20px 50px rgba(15, 23, 42, 0.06)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Top Decorative Border Accent */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, #0EA5E9 0%, #38BDF8 50%, #A855F7 100%)'
          }} />

          {/* Subtitle Badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem' }}>
            <span style={{ height: '1px', width: '28px', background: '#94A3B8' }} />
            <span style={{
              fontSize: '0.78rem',
              fontWeight: 800,
              color: '#64748B',
              letterSpacing: '0.12em',
              textTransform: 'uppercase'
            }}>
              IN PARTNERSHIP WITH
            </span>
            <span style={{ height: '1px', width: '28px', background: '#94A3B8' }} />
          </div>

          {/* Main Headline */}
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            color: '#0F172A',
            fontSize: '2rem',
            fontWeight: 900,
            letterSpacing: '-0.02em',
            lineHeight: 1.25,
            marginBottom: '2.5rem',
            maxWidth: '650px',
            margin: '0 auto 2.5rem auto',
            textTransform: 'uppercase'
          }}>
            BACKED BY TEAMS THAT BELIEVE IN THE MISSION
          </h2>

          {/* Partners Showcase Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem'
          }} className="grid-3">

            {/* VOREXCORE SOLUTIONS - HIGHLIGHTED PRIMARY TECH PARTNER */}
            <div style={{
              background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
              border: '2px solid #38BDF8',
              borderRadius: '18px',
              padding: '1.75rem 1.25rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxShadow: '0 12px 30px rgba(56, 189, 248, 0.2)',
              position: 'relative',
              overflow: 'hidden'
            }} className="pop-card">
              {/* Highlight Badge */}
              <div style={{
                position: 'absolute',
                top: '0.75rem',
                right: '0.75rem',
                background: 'linear-gradient(135deg, #38BDF8, #A855F7)',
                color: '#FFFFFF',
                fontSize: '0.62rem',
                fontWeight: 900,
                padding: '0.2rem 0.55rem',
                borderRadius: '9999px',
                textTransform: 'uppercase',
                letterSpacing: '0.04em'
              }}>
                Lead Tech Partner
              </div>

              {/* VorexCore Logo */}
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '16px',
                overflow: 'hidden',
                marginBottom: '1rem',
                background: '#000000',
                border: '2px solid rgba(56, 189, 248, 0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 14px rgba(0,0,0,0.5)'
              }}>
                <img
                  src="/images/vorexcore_logo.png"
                  alt="VorexCore Solutions Logo"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              {/* Title */}
              <h3 style={{
                fontFamily: 'var(--font-heading)',
                color: '#FFFFFF',
                fontSize: '1.15rem',
                fontWeight: 900,
                letterSpacing: '0.02em',
                marginBottom: '0.25rem'
              }}>
                VOREXCORE SOLUTIONS
              </h3>

              {/* Role */}
              <div style={{
                color: '#38BDF8',
                fontSize: '0.75rem',
                fontWeight: 800,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '0.85rem'
              }}>
                TECHNOLOGY PARTNER
              </div>

              {/* Description */}
              <p style={{
                color: '#94A3B8',
                fontSize: '0.82rem',
                lineHeight: 1.5,
                margin: 0
              }}>
                Engineering FYC's modern digital infrastructure, web apps & global learning platforms.
              </p>
            </div>

            {/* KPMG & DELOITTE */}
            <div style={{
              background: '#F8FAFC',
              border: '1px solid #E2E8F0',
              borderRadius: '18px',
              padding: '1.75rem 1.25rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }} className="pop-card">
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '14px',
                background: '#E0F2FE',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem'
              }}>
                <Shield size={28} color="#0EA5E9" />
              </div>

              <h3 style={{
                fontFamily: 'var(--font-heading)',
                color: '#0F172A',
                fontSize: '1.15rem',
                fontWeight: 900,
                letterSpacing: '0.02em',
                marginBottom: '0.25rem'
              }}>
                KPMG & DELOITTE
              </h3>

              <div style={{
                color: '#64748B',
                fontSize: '0.75rem',
                fontWeight: 800,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '0.85rem'
              }}>
                ADVISORY PARTNER
              </div>

              <p style={{
                color: '#475569',
                fontSize: '0.82rem',
                lineHeight: 1.5,
                margin: 0
              }}>
                Guiding financial literacy workshops, audit governance & corporate mentorship.
              </p>
            </div>

            {/* USA ECONOMICS OLYMPIAD */}
            <div style={{
              background: '#F8FAFC',
              border: '1px solid #E2E8F0',
              borderRadius: '18px',
              padding: '1.75rem 1.25rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }} className="pop-card">
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '14px',
                background: '#FEF3C7',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem'
              }}>
                <Sparkles size={28} color="#D97706" />
              </div>

              <h3 style={{
                fontFamily: 'var(--font-heading)',
                color: '#0F172A',
                fontSize: '1.15rem',
                fontWeight: 900,
                letterSpacing: '0.02em',
                marginBottom: '0.25rem'
              }}>
                USAEO & ECONFLOW
              </h3>

              <div style={{
                color: '#64748B',
                fontSize: '0.75rem',
                fontWeight: 800,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '0.85rem'
              }}>
                ACADEMIC ALLIANCE
              </div>

              <p style={{
                color: '#475569',
                fontSize: '0.82rem',
                lineHeight: 1.5,
                margin: 0
              }}>
                Co-hosting youth economics olympiads & academic challenges globally.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default VorexCorePartnershipSection
