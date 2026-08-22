import React from 'react'
import { Calendar, Sparkles } from 'lucide-react'

const WorkHistoryTimeline = () => {
  const milestones = [
    { year: "2024", title: "NGO Foundation & Launch", desc: "Founded by Adan Shahzad & Hooria Riasat to democratize financial literacy globally." },
    { year: "2025", title: "Girls for Change & Pink Tax Campaign", desc: "Launched international campaign on economic price transparency and female financial empowerment." },
    { year: "2025", title: "90+ Global Workshops & 21+ Collaborations", desc: "Partnered with ECONFLOW and USA Economics Olympiad (USAEO) reaching 35+ countries." },
    { year: "2026", title: "FYC Summer Program 2026", desc: "Selective 4-week virtual immersion accepting 150 candidates from 5,000+ global applicants." }
  ]

  return (
    <section style={{ padding: '4.5rem 0', background: '#FFFFFF', borderTop: '1px solid #E2E8F0' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            background: '#F1F5F9',
            color: '#0F172A',
            padding: '0.35rem 1rem',
            borderRadius: '9999px',
            fontSize: '0.82rem',
            fontWeight: 800,
            marginBottom: '0.75rem',
            textTransform: 'uppercase',
            letterSpacing: '0.04em'
          }}>
            <Sparkles size={14} color="#0EA5E9" /> OUR JOURNEY
          </span>
          <h2 style={{ fontFamily: 'var(--font-heading)', color: '#0F172A', fontSize: '2.2rem', fontWeight: 900, letterSpacing: '-0.02em' }}>
            Work History & NGO Milestones
          </h2>
          <p style={{ color: '#64748B', fontSize: '1.05rem', maxWidth: '600px', margin: '0.5rem auto 0 auto' }}>
            Driven by youth passion to create sustainable economic literacy around the world.
          </p>
        </div>

        {/* Clean Unboxed Timeline Grid */}
        <div className="grid-2" style={{ gap: '2rem' }}>
          {milestones.map((m, i) => (
            <div key={i} style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start', padding: '1rem 0' }}>
              <div style={{
                background: '#0F172A',
                color: '#38BDF8',
                padding: '0.6rem 1.1rem',
                borderRadius: '10px',
                fontWeight: 900,
                fontSize: '1.05rem',
                fontFamily: 'var(--font-heading)',
                boxShadow: '0 4px 12px rgba(15,23,42,0.15)',
                minWidth: '76px',
                textAlign: 'center'
              }}>
                {m.year}
              </div>
              <div style={{ borderLeft: '2px solid #E2E8F0', paddingLeft: '1.25rem' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', color: '#0F172A', fontSize: '1.15rem', fontWeight: 800, marginBottom: '0.35rem' }}>
                  {m.title}
                </h3>
                <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.6 }}>
                  {m.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default WorkHistoryTimeline

