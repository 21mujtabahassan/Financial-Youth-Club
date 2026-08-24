import React from 'react'
import PageLayout from '../../../components/layout/PageLayout'
import { ShieldCheck, Lock, Eye, FileText, Globe, CheckCircle2 } from 'lucide-react'

const PrivacyPolicyPage = () => {
  return (
    <PageLayout
      title="Privacy Policy & Data Transparency"
      subtitle="Financial Youth Club (FYC) is committed to preserving student data privacy, security, and full non-profit transparency worldwide."
      badge="Legal & Compliance"
    >
      <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        
        {/* NGO Security Banner */}
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
          <ShieldCheck size={48} color="#38BDF8" style={{ flexShrink: 0 }} />
          <div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: 900, marginBottom: '0.35rem' }}>
              100% Non-Profit Zero Data Selling Pledge
            </h3>
            <p style={{ color: '#94A3B8', fontSize: '0.92rem', lineHeight: 1.6 }}>
              FYC does not sell, rent, monetize, or trade student or mentor personal information to third parties or commercial entities. All data is exclusively used to deliver free financial education.
            </p>
          </div>
        </div>

        {/* Section 1: Overview */}
        <div className="white-card" style={{ padding: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem', color: '#0EA5E9' }}>
            <Globe size={22} />
            <h3 style={{ fontFamily: 'var(--font-heading)', color: '#0F172A', fontSize: '1.35rem', fontWeight: 900 }}>
              1. Global Non-Governmental Data Standards
            </h3>
          </div>
          <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1rem' }}>
            This Privacy Policy outlines how Financial Youth Club ("FYC", "we", "us", or "our") collects, protects, and handles personal information across our global workshops, virtual summer programs, and online web platforms across 35+ countries.
          </p>
          <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7 }}>
            By accessing our educational services or registering as a student or mentor, you agree to the collection and use of information in accordance with this policy.
          </p>
        </div>

        {/* Section 2: Information Collection */}
        <div className="white-card" style={{ padding: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem', color: '#0EA5E9' }}>
            <FileText size={22} />
            <h3 style={{ fontFamily: 'var(--font-heading)', color: '#0F172A', fontSize: '1.35rem', fontWeight: 900 }}>
              2. Information We Collect
            </h3>
          </div>
          <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1rem' }}>
            We collect minimal, purpose-driven information required to verify student enrollment and coordinate mentorship sessions:
          </p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', color: '#334155', fontSize: '0.92rem' }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
              <CheckCircle2 size={18} color="#0EA5E9" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
              <div><strong>Student Registration Data:</strong> Full Name, Email Address, Country, Academic Institution, and field of interest.</div>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
              <CheckCircle2 size={18} color="#0EA5E9" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
              <div><strong>Mentor Onboarding Data:</strong> Full Name, Professional Affiliation (Firm/University), LinkedIn profile URL, and availability.</div>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
              <CheckCircle2 size={18} color="#0EA5E9" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
              <div><strong>Technical Analytics:</strong> Anonymized browser type, country of access, and page load telemetry used solely to optimize website loading speeds.</div>
            </li>
          </ul>
        </div>

        {/* Section 3: Data Security */}
        <div className="white-card" style={{ padding: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem', color: '#0EA5E9' }}>
            <Lock size={22} />
            <h3 style={{ fontFamily: 'var(--font-heading)', color: '#0F172A', fontSize: '1.35rem', fontWeight: 900 }}>
              3. Data Security & Storage
            </h3>
          </div>
          <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1rem' }}>
            All user data is encrypted in transit via SSL/TLS encryption. We enforce strict role-based access controls ensuring only authorized executive directors have access to student and mentor records for administrative purposes.
          </p>
        </div>

        {/* Section 4: Contact & Inquiries */}
        <div className="white-card" style={{ padding: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem', color: '#0EA5E9' }}>
            <Eye size={22} />
            <h3 style={{ fontFamily: 'var(--font-heading)', color: '#0F172A', fontSize: '1.35rem', fontWeight: 900 }}>
              4. Contact Privacy Officer
            </h3>
          </div>
          <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1rem' }}>
            If you have questions regarding this Privacy Policy or wish to request data deletion, please contact our administrative team:
          </p>
          <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '1rem 1.25rem', borderRadius: '10px', fontWeight: 700, color: '#0F172A', fontSize: '0.9rem' }}>
            📧 Contact Email: <a href="mailto:financialyouthclub@gmail.com" style={{ color: '#0EA5E9', textDecoration: 'none' }}>financialyouthclub@gmail.com</a>
          </div>
        </div>

      </div>
    </PageLayout>
  )
}

export default PrivacyPolicyPage
