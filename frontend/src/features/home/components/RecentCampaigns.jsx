import React from 'react'
import { Link } from 'react-router-dom'
import { Heart, Handshake } from 'lucide-react'

const RecentCampaigns = () => {
  return (
    <section className="container" style={{ padding: '2.5rem 1.5rem' }}>
      <div className="grid-2">
        {/* Pink Tax Campaign */}
        <div className="clean-card">
          <span className="pill-badge-purple" style={{ marginBottom: '0.75rem' }}>Girls For Change x FYC</span>
          <h3 style={{ fontFamily: 'var(--font-display)', color: '#fff', fontSize: '1.4rem', marginBottom: '0.5rem' }}>
            Understanding The Pink Tax
          </h3>
          <p style={{ color: 'var(--fyc-text-muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
            Promoting economic transparency regarding gender-based price discrimination where personal care products for women cost $6.29 vs $5.49 for men.
          </p>
          <Link to="/campaigns" className="btn-outline" style={{ fontSize: '0.85rem' }}>Read Campaign Details</Link>
        </div>

        {/* Collaborations */}
        <div className="clean-card">
          <span className="pill-badge" style={{ marginBottom: '0.75rem' }}>International Collaborations</span>
          <h3 style={{ fontFamily: 'var(--font-display)', color: '#fff', fontSize: '1.4rem', marginBottom: '0.5rem' }}>
            ECONFLOW & USA Economics Olympiad
          </h3>
          <p style={{ color: 'var(--fyc-text-muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
            Partnering with premier non-profit economics competitions to deliver accessible, high-impact financial literacy modules worldwide.
          </p>
          <Link to="/collaborations" className="btn-outline" style={{ fontSize: '0.85rem' }}>View Partners</Link>
        </div>
      </div>
    </section>
  )
}

export default RecentCampaigns
