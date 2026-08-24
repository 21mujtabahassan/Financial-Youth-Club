import React from 'react'
import { Link } from 'react-router-dom'
import { Building2, GraduationCap, ArrowRight } from 'lucide-react'
import { guestSpeakers } from '../../speakers/data/speakersData'

const FeaturedSpeakers = () => {
  // Select top featured speakers
  const featured = guestSpeakers.slice(0, 6)

  return (
    <section className="container" style={{ padding: '3.5rem 1.5rem' }}>
      <div className="section-header">
        <span className="pill-badge">Industry Experts</span>
        <h2 className="section-title">Featured Guest Speakers</h2>
        <p className="section-subtitle">
          Learn directly from charterholders, venture analysts, and experienced advisors.
        </p>
      </div>

      <div className="grid-3">
        {featured.map((s) => (
          <div key={s.id} className="clean-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <div style={{ 
                width: '48px', 
                height: '48px', 
                borderRadius: '50%', 
                overflow: 'hidden',
                border: '2px solid var(--fyc-cyan)',
                background: 'linear-gradient(135deg, #0EA5E9, #A855F7)',
                display: 'flex',
                alignItems: 'center',
                justify: 'center'
              }}>
                <img 
                  src={s.image} 
                  alt={s.name} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentNode.innerText = s.name.charAt(0);
                  }}
                />
              </div>
              <span className="pill-badge" style={{ fontSize: '0.72rem' }}>Speaker</span>
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', color: '#fff', fontSize: '1.15rem', marginBottom: '0.35rem' }}>{s.name}</h3>
            <div style={{ color: 'var(--fyc-cyan)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <Building2 size={13} /> {s.role} at {s.org}
            </div>
            <div style={{ color: 'var(--fyc-purple)', fontSize: '0.8rem', marginBottom: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <GraduationCap size={13} /> {s.uni}
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--fyc-text-muted)', paddingTop: '0.75rem', borderTop: '1px solid var(--fyc-border)' }}>
              <strong style={{ color: '#fff' }}>Topic:</strong> {s.topic}
            </div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '2.25rem' }}>
        <Link to="/speakers" className="btn-outline">Explore All 14 Guest Speakers <ArrowRight size={15}/></Link>
      </div>
    </section>
  )
}

export default FeaturedSpeakers

