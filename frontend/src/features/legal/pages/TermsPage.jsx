import React from 'react'
import PageLayout from '../../../components/layout/PageLayout'
import { ShieldCheck, BookOpen, AlertCircle, Scale, Award } from 'lucide-react'

const TermsPage = () => {
  return (
    <PageLayout
      title="Terms of Service & Non-Profit Disclaimer"
      subtitle="Official terms governing the use of Financial Youth Club (FYC) educational programs, digital toolkits, and mentorship networks."
      badge="Terms & Governance"
    >
      <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        
        {/* NGO Disclaimer Header */}
        <div style={{
          background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
          color: '#FFFFFF',
          borderRadius: '16px',
          padding: '2rem',
          border: '1px solid #334155',
          boxShadow: '0 10px 30px rgba(15, 23, 42, 0.15)',
          display: 'flex',
          alignItems: 'center',
          gap: '1.25rem'
        }}>
          <Scale size={48} color="#F59E0B" style={{ flexShrink: 0 }} />
          <div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: 900, marginBottom: '0.35rem' }}>
              Educational Non-Profit Disclaimer
            </h3>
            <p style={{ color: '#94A3B8', fontSize: '0.92rem', lineHeight: 1.6 }}>
              FYC is a registered Non-Governmental Organization providing educational workshops. FYC does not provide licensed commercial investment advice or financial advisory services.
            </p>
          </div>
        </div>

        {/* Section 1: Non-Profit Mission Terms */}
        <div className="white-card" style={{ padding: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem', color: '#0EA5E9' }}>
            <Award size={22} />
            <h3 style={{ fontFamily: 'var(--font-heading)', color: '#0F172A', fontSize: '1.35rem', fontWeight: 900 }}>
              1. Non-Profit Educational Scope
            </h3>
          </div>
          <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1rem' }}>
            Financial Youth Club ("FYC") provides 100% free educational workshops, case study bootcamps, and guest speaker seminars. All content, financial templates, and case studies are created strictly for educational enrichment and personal financial literacy.
          </p>
          <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7 }}>
            No material on this platform constitutes an offer, solicitation, or recommendation to buy, sell, or hold any security, commodity, or financial instrument.
          </p>
        </div>

        {/* Section 2: Code of Conduct */}
        <div className="white-card" style={{ padding: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem', color: '#0EA5E9' }}>
            <BookOpen size={22} />
            <h3 style={{ fontFamily: 'var(--font-heading)', color: '#0F172A', fontSize: '1.35rem', fontWeight: 900 }}>
              2. Student & Mentor Code of Conduct
            </h3>
          </div>
          <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1rem' }}>
            Participants in FYC webinars, Discord channels, and 1-on-1 coffee chats are expected to maintain professional integrity, mutual respect, and ethical communication. Harassment, discrimination, or commercial solicitation is strictly prohibited and results in immediate removal.
          </p>
        </div>

        {/* Section 3: Intellectual Property */}
        <div className="white-card" style={{ padding: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem', color: '#0EA5E9' }}>
            <ShieldCheck size={22} />
            <h3 style={{ fontFamily: 'var(--font-heading)', color: '#0F172A', fontSize: '1.35rem', fontWeight: 900 }}>
              3. Intellectual Property & Open Distribution
            </h3>
          </div>
          <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7 }}>
            FYC curricula, research toolkits, and Pink Tax advocacy materials are distributed under open non-profit educational licenses. Educational institutions and non-profits may share materials with proper attribution to Financial Youth Club.
          </p>
        </div>

        {/* Section 4: Contact Information */}
        <div className="white-card" style={{ padding: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem', color: '#0EA5E9' }}>
            <AlertCircle size={22} />
            <h3 style={{ fontFamily: 'var(--font-heading)', color: '#0F172A', fontSize: '1.35rem', fontWeight: 900 }}>
              4. Contact Governance Board
            </h3>
          </div>
          <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '1rem 1.25rem', borderRadius: '10px', fontWeight: 700, color: '#0F172A', fontSize: '0.9rem' }}>
            📧 Legal & Governance Inquiries: <a href="mailto:financialyouthclub@gmail.com" style={{ color: '#0EA5E9', textDecoration: 'none' }}>financialyouthclub@gmail.com</a>
          </div>
        </div>

      </div>
    </PageLayout>
  )
}

export default TermsPage
