import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'

const FeaturedPrograms = () => {
  return (
    <section className="container" style={{ padding: '2.5rem 1.5rem' }}>
      <div className="section-header">
        <span className="pill-badge-purple">Flagship Initiative</span>
        <h2 className="section-title">FYC Summer Program 2026</h2>
        <p className="section-subtitle">
          An exclusive, highly selective 4-week virtual program for aspiring finance leaders across the globe.
        </p>
      </div>

      <div className="clean-card" style={{ padding: '2.5rem 2rem' }}>
        <div className="grid-2" style={{ alignItems: 'center' }}>
          <div>
            <span className="pill-badge" style={{ marginBottom: '0.85rem' }}>150 Candidates Selected from 5,000+ Applicants</span>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: '#fff', marginBottom: '0.85rem' }}>
              Real-World Finance & Investment Immersion
            </h3>
            <p style={{ color: 'var(--fyc-text-muted)', marginBottom: '1.25rem', fontSize: '0.95rem' }}>
              Selected students gain direct exposure to Investment Banking, Venture Capital, Private Equity, Hedge Funds, Asset Management, and Fintech/DeFi.
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.75rem', color: '#E2E8F0', fontSize: '0.88rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="var(--fyc-cyan)"/> 100% Free & Highly Competitive</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="var(--fyc-cyan)"/> Live Virtual Sessions, AMAs & Small-Group Coffee Chats</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="var(--fyc-cyan)"/> Hands-on Stock Analysis & Startup Valuation Modules</li>
            </ul>
            <Link to="/programs" className="btn-primary">View Program Curriculum <ArrowRight size={15}/></Link>
          </div>

          <div className="clean-card" style={{ background: 'rgba(7, 10, 18, 0.4)' }}>
            <h4 style={{ color: 'var(--fyc-cyan)', marginBottom: '0.85rem', fontSize: '1rem' }}>Program Modules:</h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.65rem', color: 'var(--fyc-text-muted)', fontSize: '0.85rem' }}>
              <div>• Investment Banking</div>
              <div>• Venture Capital</div>
              <div>• Private Equity</div>
              <div>• Hedge Funds</div>
              <div>• Asset Management</div>
              <div>• Fintech & Web3</div>
              <div>• Corporate Finance</div>
              <div>• Strategy Consulting</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedPrograms
