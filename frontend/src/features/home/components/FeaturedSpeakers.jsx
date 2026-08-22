import React from 'react'
import { Link } from 'react-router-dom'
import { Building2, GraduationCap, ArrowRight } from 'lucide-react'

const FeaturedSpeakers = () => {
  const speakers = [
    { name: "Mahad Mirza", role: "Business Analyst", org: "Sherman Securities", uni: "University of Bristol", topic: "Stocks & Investments Comprehensive Analysis" },
    { name: "Jimmy Zhang", role: "Investment Analyst", org: "ZhenFund / Hearst", uni: "LSE Board Director", topic: "How AI Startups Get Funded in Venture Capital" },
    { name: "Muhammad Usman", role: "Assistant Manager", org: "KPMG (4.5+ yrs)", uni: "External Audit & Assurance", topic: "From Financial Statements to Strategic Decisions" }
  ]

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
        {speakers.map((s, i) => (
          <div key={i} className="clean-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, #0EA5E9, #A855F7)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#fff' }}>
                {s.name.charAt(0)}
              </div>
              <span className="pill-badge" style={{ fontSize: '0.72rem' }}>Speaker</span>
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', color: '#fff', fontSize: '1.2rem', marginBottom: '0.35rem' }}>{s.name}</h3>
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
        <Link to="/speakers" className="btn-outline">Explore All 12+ Guest Speakers <ArrowRight size={15}/></Link>
      </div>
    </section>
  )
}

export default FeaturedSpeakers
