import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'

const FeaturedPrograms = () => {
  return (
    <section className="container" style={{ padding: '2.5rem 1.5rem' }}>
      <div className="section-header" style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <span style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.4rem',
          background: '#EAF7FD',
          color: '#0A2647',
          padding: '0.35rem 1rem',
          borderRadius: '9999px',
          fontSize: '0.82rem',
          fontWeight: 800,
          marginBottom: '0.75rem',
          textTransform: 'uppercase',
          letterSpacing: '0.04em',
          border: '1px solid rgba(79, 195, 232, 0.4)'
        }}>
          Flagship Initiative
        </span>
        <h2 style={{ fontFamily: 'var(--font-heading)', color: '#0A2647', fontSize: '2.2rem', fontWeight: 900, marginBottom: '0.5rem' }}>
          FYC Summer Program 2026
        </h2>
        <p style={{ color: '#475569', fontSize: '1.02rem', maxWidth: '650px', margin: '0 auto' }}>
          An exclusive, highly selective 4-week virtual program for aspiring finance leaders across the globe.
        </p>
      </div>

      <div className="dark-card featured-card" style={{ padding: '2.5rem 2rem' }}>
        <div className="grid-2" style={{ alignItems: 'center' }}>
          <div>
            <span style={{
              display: 'inline-block',
              background: '#EAF7FD',
              color: '#071B33',
              padding: '0.35rem 0.85rem',
              borderRadius: '9999px',
              fontSize: '0.78rem',
              fontWeight: 800,
              marginBottom: '0.85rem'
            }}>
              150 Candidates Selected from 5,000+ Applicants
            </span>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', color: '#FFFFFF', fontWeight: 900, marginBottom: '0.85rem' }}>
              Real-World Finance & Investment Immersion
            </h3>
            <p style={{ color: '#EAF7FD', opacity: 0.85, marginBottom: '1.25rem', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Selected students gain direct exposure to Investment Banking, Venture Capital, Private Equity, Hedge Funds, Asset Management, and Fintech/DeFi.
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.75rem', color: '#EAF7FD', fontSize: '0.88rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="#4FC3E8"/> 100% Free & Highly Competitive</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="#4FC3E8"/> Live Virtual Sessions, AMAs & Small-Group Coffee Chats</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="#4FC3E8"/> Hands-on Stock Analysis & Startup Valuation Modules</li>
            </ul>
            <Link to="/programs" className="btn-primary" style={{ background: 'linear-gradient(135deg, #4FC3E8 0%, #2FA8D8 100%)', color: '#071B33', fontWeight: 800 }}>
              View Program Curriculum <ArrowRight size={15}/>
            </Link>
          </div>

          <div style={{ background: 'rgba(7, 27, 51, 0.6)', border: '1px solid rgba(79, 195, 232, 0.25)', borderRadius: '16px', padding: '1.5rem' }}>
            <h4 style={{ color: '#4FC3E8', marginBottom: '0.85rem', fontSize: '1rem', fontWeight: 800 }}>Program Modules:</h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.65rem', color: '#EAF7FD', fontSize: '0.85rem', opacity: 0.9 }}>
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
