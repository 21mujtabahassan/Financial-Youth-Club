import React from 'react'
import { Link } from 'react-router-dom'
import { Heart, Handshake } from 'lucide-react'

const RecentCampaigns = () => {
  return (
    <section className="container" style={{ padding: '2.5rem 1.5rem' }}>
      <div className="grid-2">
        {/* Pink Tax Campaign - Reserved Warm Pink Accent */}
        <div className="white-card pop-card" style={{ background: '#FFFFFF', border: '1px solid #E2E8F0' }}>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            background: 'rgba(236, 72, 153, 0.12)',
            border: '1px solid rgba(236, 72, 153, 0.3)',
            color: '#DB2777',
            padding: '0.35rem 0.85rem',
            borderRadius: '9999px',
            fontSize: '0.78rem',
            fontWeight: 800,
            marginBottom: '0.75rem',
            textTransform: 'uppercase'
          }}>
            Girls For Change x FYC
          </span>
          <h3 style={{ fontFamily: 'var(--font-heading)', color: '#0A2647', fontSize: '1.4rem', fontWeight: 900, marginBottom: '0.5rem' }}>
            Understanding The Pink Tax
          </h3>
          <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
            Promoting economic transparency regarding gender-based price discrimination where personal care products for women cost $6.29 vs $5.49 for men.
          </p>
          <Link to="/collaborations" className="btn-navy" style={{ fontSize: '0.82rem', padding: '0.55rem 1.2rem' }}>Read Campaign Details →</Link>
        </div>

        {/* Collaborations - Sky Tint Default Accent */}
        <div className="white-card pop-card" style={{ background: '#FFFFFF', border: '1px solid #E2E8F0' }}>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            background: '#EAF7FD',
            border: '1px solid rgba(79, 195, 232, 0.4)',
            color: '#0A2647',
            padding: '0.35rem 0.85rem',
            borderRadius: '9999px',
            fontSize: '0.78rem',
            fontWeight: 800,
            marginBottom: '0.75rem',
            textTransform: 'uppercase'
          }}>
            International Collaborations
          </span>
          <h3 style={{ fontFamily: 'var(--font-heading)', color: '#0A2647', fontSize: '1.4rem', fontWeight: 900, marginBottom: '0.5rem' }}>
            ECONFLOW & USA Economics Olympiad
          </h3>
          <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
            Partnering with premier non-profit economics competitions to deliver accessible, high-impact financial literacy modules worldwide.
          </p>
          <Link to="/collaborations" className="btn-gold" style={{ background: 'linear-gradient(135deg, #4FC3E8 0%, #2FA8D8 100%)', color: '#071B33', fontSize: '0.82rem', padding: '0.55rem 1.2rem' }}>View Partners →</Link>
        </div>
      </div>
    </section>
  )
}

export default RecentCampaigns
