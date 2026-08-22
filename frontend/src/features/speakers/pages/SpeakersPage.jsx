import React from 'react'
import PageLayout from '../../../components/layout/PageLayout'

const SpeakersPage = () => {
  const speakers = [
    { name: "Jimmy Zhang", role: "Investment Analyst", org: "ZhenFund / Hearst", uni: "LSE", topic: "How AI Startups Get Funded in Venture Capital" },
    { name: "Mahad Mirza", role: "Business Analyst", org: "Sherman Securities", uni: "University of Bristol", topic: "Stocks & Investments Comprehensive Analysis" },
    { name: "Muhammad Usman", role: "Assistant Manager", org: "KPMG", uni: "4.5+ yrs in Audit", topic: "From Financial Statements to Strategic Decisions" },
    { name: "Lixu Chen", role: "Founder & Speaker", org: "Global NGO", uni: "10K+ LinkedIn", topic: "Personal Branding & Global Networking in Finance" },
    { name: "Jeevan Deep", role: "Finance Professional", org: "J.P. Morgan Chase", uni: "CFA Level II Candidate", topic: "Building a Global Career in Corporate Finance" },
    { name: "Ali Ammar, CFA", role: "Chartered Financial Analyst", org: "ACCA & CPA", uni: "Youngest Charterholder", topic: "Cracking ACCA, CPA & CFA by Age 20" },
    { name: "Megan Kong", role: "Consulting Associate", org: "KPMG Hong Kong", uni: "MSc LSE", topic: "Applications & Lessons Learned in Management Consulting" },
    { name: "Sabrina Manero", role: "Incoming Analyst", org: "Goldman Sachs", uni: "Duke University", topic: "Breaking into Investment Banking Internships" }
  ]

  return (
    <PageLayout title="Guest Speakers Roster" subtitle="Learn directly from charterholders, venture analysts, and global advisors." badge="Mentors">
      <div className="grid-3">
        {speakers.map((s, i) => (
          <div key={i} className="clean-card">
            <h3 style={{ fontFamily: 'var(--font-display)', color: '#fff', fontSize: '1.2rem', marginBottom: '0.35rem' }}>{s.name}</h3>
            <div style={{ color: 'var(--fyc-cyan)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem' }}>{s.role} at {s.org}</div>
            <div style={{ color: 'var(--fyc-purple)', fontSize: '0.8rem', marginBottom: '0.75rem' }}>{s.uni}</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--fyc-text-muted)', paddingTop: '0.65rem', borderTop: '1px solid var(--fyc-border)' }}>
              <strong style={{ color: '#fff' }}>Topic:</strong> {s.topic}
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  )
}

export default SpeakersPage
