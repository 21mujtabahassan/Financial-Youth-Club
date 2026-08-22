import React from 'react'
import { Building2, GraduationCap, CheckCircle2 } from 'lucide-react'

const GlobalImpact = () => {
  const institutions = [
    { name: "J.P. Morgan", location: "New York, London, Frankfurt" },
    { name: "Goldman Sachs", location: "New York, London" },
    { name: "Bank of America", location: "London, UK" },
    { name: "Barclays", location: "Dubai, UAE" },
    { name: "Bain & Company", location: "Boston, USA" },
    { name: "KPMG", location: "Hong Kong, London, New York" },
    { name: "PwC", location: "USA, India, London" },
    { name: "Deloitte", location: "London, England" }
  ]

  const universities = [
    "Harvard University", "University of Pennsylvania (UPenn)", "Duke University",
    "UC Berkeley", "London School of Economics (LSE)", "University of Cambridge",
    "University of Warwick", "University of Bristol", "Imperial College London",
    "LUMS", "NUST", "University of Hong Kong (HKU)"
  ]

  return (
    <section className="container" style={{ padding: '3.5rem 1.5rem' }}>
      <div className="section-header">
        <span className="pill-badge">Global Mentorship Network</span>
        <h2 className="section-title">World-Class Institutions & Universities</h2>
        <p className="section-subtitle">
          Our mentors represent leading global financial institutions and world-renowned academic universities.
        </p>
      </div>

      <div className="grid-2">
        <div className="clean-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
            <Building2 color="var(--fyc-cyan)" size={22} />
            <h3 style={{ fontFamily: 'var(--font-display)', color: '#fff', fontSize: '1.25rem' }}>Leading Institutions & Companies</h3>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.85rem' }}>
            {institutions.map((item, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.02)', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--fyc-border)' }}>
                <div style={{ color: '#fff', fontWeight: 600, fontSize: '0.88rem' }}>{item.name}</div>
                <div style={{ color: 'var(--fyc-text-muted)', fontSize: '0.75rem' }}>{item.location}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="clean-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
            <GraduationCap color="var(--fyc-purple)" size={22} />
            <h3 style={{ fontFamily: 'var(--font-display)', color: '#fff', fontSize: '1.25rem' }}>Leading Global Universities</h3>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.65rem' }}>
            {universities.map((uni, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--fyc-text-muted)', fontSize: '0.84rem' }}>
                <CheckCircle2 size={14} color="var(--fyc-cyan)" /> {uni}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default GlobalImpact
