import React from 'react'
import PageLayout from '../../../components/layout/PageLayout'
import { guestSpeakers } from '../data/speakersData'
import { Building2, GraduationCap } from 'lucide-react'

const SpeakersPage = () => {
  return (
    <PageLayout title="Guest Speakers Roster" subtitle="Learn directly from charterholders, venture analysts, and global advisors." badge="Mentors">
      <div className="grid-3">
        {guestSpeakers.map((s) => (
          <div key={s.id} className="clean-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <div style={{ 
                width: '64px', 
                height: '64px', 
                borderRadius: '50%', 
                overflow: 'hidden',
                border: '2px solid var(--fyc-cyan)',
                background: 'linear-gradient(135deg, #0EA5E9, #A855F7)',
                flexShrink: 0,
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
              <div>
                <h3 style={{ fontFamily: 'var(--font-display)', color: '#fff', fontSize: '1.15rem', marginBottom: '0.2rem', lineHeight: '1.3' }}>{s.name}</h3>
                <div style={{ color: 'var(--fyc-cyan)', fontSize: '0.82rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <Building2 size={13} /> {s.role}
                </div>
                <div style={{ color: 'var(--fyc-text-muted)', fontSize: '0.78rem' }}>{s.org}</div>
              </div>
            </div>

            <div style={{ color: 'var(--fyc-purple)', fontSize: '0.8rem', marginBottom: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <GraduationCap size={14} /> {s.uni}
            </div>

            {s.bio && (
              <p style={{ fontSize: '0.82rem', color: 'var(--fyc-text-muted)', marginBottom: '0.85rem', lineHeight: '1.5', flexGrow: 1 }}>
                {s.bio}
              </p>
            )}

            <div style={{ fontSize: '0.8rem', color: 'var(--fyc-text-muted)', paddingTop: '0.75rem', borderTop: '1px solid var(--fyc-border)', marginTop: 'auto' }}>
              <strong style={{ color: '#fff' }}>Topic:</strong> {s.topic}
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  )
}

export default SpeakersPage

