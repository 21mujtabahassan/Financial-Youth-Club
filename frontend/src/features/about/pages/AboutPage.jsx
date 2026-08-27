import React from 'react'
import PageLayout from '../../../components/layout/PageLayout'
import { Sparkles, Globe, Heart, Award, CheckCircle2, ShieldCheck, ArrowRight, Radio, Users, Briefcase, BookOpen } from 'lucide-react'
import { Link } from 'react-router-dom'

const AboutPage = () => {

  return (
    <PageLayout
      title="About Financial Youth Club"
      subtitle="Youth-Led. Purpose-Driven. Impact-Focused. Connecting global youth with world-class finance leaders."
      badge="Registered NGO"
    >
      
      {/* 5 Core Metrics */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1rem', marginBottom: '3.5rem' }} className="grid-4">
        <div className="pop-stat">
          <div style={{ fontSize: '2rem', fontWeight: 900, color: '#0EA5E9' }}>35+</div>
          <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase' }}>Global Mentors</div>
        </div>
        <div className="pop-stat">
          <div style={{ fontSize: '2rem', fontWeight: 900, color: '#D97706' }}>20+</div>
          <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase' }}>Countries</div>
        </div>
        <div className="pop-stat">
          <div style={{ fontSize: '2rem', fontWeight: 900, color: '#DB2777' }}>4</div>
          <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase' }}>Continents</div>
        </div>
        <div className="pop-stat">
          <div style={{ fontSize: '2rem', fontWeight: 900, color: '#7C3AED' }}>90+</div>
          <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase' }}>Workshops</div>
        </div>
        <div className="pop-stat">
          <div style={{ fontSize: '2rem', fontWeight: 900, color: '#10B981' }}>21+</div>
          <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase' }}>NGO Alliances</div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="grid-2" style={{ marginBottom: '3.5rem', gap: '2rem' }}>
        <div className="white-card pop-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#E0F2FE', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Globe color="#0EA5E9" size={24} />
            </div>
            <h2 style={{ fontFamily: 'var(--font-heading)', color: '#0F172A', fontSize: '1.5rem', fontWeight: 800 }}>Our Core Mission</h2>
          </div>
          <p style={{ color: '#475569', lineHeight: 1.7, fontSize: '0.98rem' }}>
            Financial Youth Club is a registered non-profit organization dedicated to democratizing financial literacy for students, stay-at-home mothers, and aspiring young entrepreneurs across 35+ countries by connecting them with leaders from J.P. Morgan, Goldman Sachs, Harvard, and LSE.
          </p>
        </div>

        <div className="white-card pop-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#FEF3C7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Award color="#D97706" size={24} />
            </div>
            <h2 style={{ fontFamily: 'var(--font-heading)', color: '#0F172A', fontSize: '1.5rem', fontWeight: 800 }}>Financial Autonomy & Inclusion</h2>
          </div>
          <p style={{ color: '#475569', lineHeight: 1.7, fontSize: '0.98rem' }}>
            Co-Led by <strong>Hooria Riasat</strong> (Audit Associate @ Deloitte/KPMG), our community drives advocate for financial price transparency, budgeting tools for stay-at-home mothers, and early financial literacy for young women.
          </p>
        </div>
      </div>

      {/* Media & Podcast Features */}
      <div className="white-card pop-card" style={{ padding: '2.5rem', marginBottom: '3.5rem', background: '#F8FAFC' }}>
        <h3 style={{ fontFamily: 'var(--font-heading)', color: '#0F172A', fontSize: '1.6rem', fontWeight: 900, marginBottom: '1rem', textAlign: 'center' }}>
          Media & Podcast Features
        </h3>
        <p style={{ color: '#475569', textAlign: 'center', maxWidth: '640px', margin: '0 auto 1.5rem auto' }}>
          Founder Adan Shahzad has been featured across global platforms speaking on youth leadership and financial democratization.
        </p>

        <div className="grid-4" style={{ gap: '1rem' }}>
          <div className="pop-stat">
            <div style={{ fontWeight: 800, color: '#0F172A', fontSize: '0.9rem' }}>The World in Us</div>
            <div style={{ fontSize: '0.75rem', color: '#64748B' }}>501(c)3 Global Podcast</div>
          </div>
          <div className="pop-stat">
            <div style={{ fontWeight: 800, color: '#0F172A', fontSize: '0.9rem' }}>The Capstone Program</div>
            <div style={{ fontSize: '0.75rem', color: '#64748B' }}>Featured Interview</div>
          </div>
          <div className="pop-stat">
            <div style={{ fontWeight: 800, color: '#0F172A', fontSize: '0.9rem' }}>The Professor Kev Show</div>
            <div style={{ fontSize: '0.75rem', color: '#64748B' }}>Keynote Discussion</div>
          </div>
          <div className="pop-stat">
            <div style={{ fontWeight: 800, color: '#0F172A', fontSize: '0.9rem' }}>USAEO & ECONFLOW</div>
            <div style={{ fontSize: '0.75rem', color: '#64748B' }}>Academic Alliance</div>
          </div>
        </div>
      </div>

      {/* Call to action */}
      <div style={{ textAlign: 'center', padding: '1rem 0' }}>
        <Link to="/programs" className="btn-gold" style={{ padding: '0.85rem 2rem', fontSize: '0.92rem' }}>
          Explore Summer Program 2026 <ArrowRight size={18} />
        </Link>
      </div>

    </PageLayout>
  )
}

export default AboutPage
