import React, { useState } from 'react'
import PageLayout from '../../../components/layout/PageLayout'
import { Sparkles, Globe, Heart, Award, CheckCircle2, ShieldCheck, ArrowRight, Radio, Users, Briefcase, BookOpen, X } from 'lucide-react'
import { Link } from 'react-router-dom'

const guestSpeakersList = [
  {
    name: 'Sabrina Manero',
    role: 'Incoming Analyst at Goldman Sachs',
    school: 'Duke University (Neuroscience & Economics)',
    topic: 'Breaking into Goldman Sachs: Internship Experience & Recruitment Process',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    details: 'Former PE Intern at OMERS & Investment Research Intern at Summit Ridge Water. Shares actionable strategies on securing top investment banking internships.'
  },
  {
    name: 'Jeevan Deep',
    role: 'Finance Professional at J.P. Morgan Chase',
    school: 'University of Mannheim (CFA Level II Candidate)',
    topic: 'Building a Global Career in Finance',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
    details: 'Experienced across investment management, ESG research, and financial consulting. Guides international students on breaking into global bulge-bracket banks.'
  },
  {
    name: 'Caroline Gao',
    role: 'Former Corporate Development at Coca-Cola',
    school: 'Harvard University (Government & Economics)',
    topic: 'Corporate Journey from Harvard to Consulting',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    details: 'US Presidential Scholar & Coca-Cola Scholar. Associate Director at Harvard Undergraduate Consulting Group.'
  },
  {
    name: 'Jason Lum',
    role: 'Founder & MD at JHL Consulting Group',
    school: 'Former M&A Banker @ CIBC Capital Markets',
    topic: 'Breaking into Investment Banking & Global Finance Careers',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    details: 'Helped 300+ students secure offers at Morgan Stanley, Deloitte, McKinsey, and top global institutions.'
  },
  {
    name: 'Sana Imran',
    role: 'Management Consulting Associate at PwC',
    school: 'UC Berkeley (BSc Economics & Data Science)',
    topic: 'A Day in the Life of a PwC Consultant',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80',
    details: 'Helped Fortune 500 clients solve complex problems using AI, machine learning, and data-driven corporate strategy.'
  },
  {
    name: 'Iskandar Vanblarcum',
    role: 'VP Business Development & Global Head at OKX',
    school: 'Former MD @ Barclays',
    topic: 'Traditional Finance vs. Decentralized Finance (DeFi)',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    details: '20+ years executive experience across institutional sales, Wall Street banking, and leading digital asset exchanges.'
  }
]

const AboutPage = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null)

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
            <h2 style={{ fontFamily: 'var(--font-heading)', color: '#0F172A', fontSize: '1.5rem', fontWeight: 800 }}>Girls for Change & Pink Tax</h2>
          </div>
          <p style={{ color: '#475569', lineHeight: 1.7, fontSize: '0.98rem' }}>
            Spearheaded by Co-Founder <strong>Hooria Riasat</strong> (Audit Associate @ Deloitte/KPMG), Girls for Change fights gendered price markups ("For Her $6.29 vs. For Him $5.49"), advocates for economic price transparency, and empowers mothers with financial autonomy.
          </p>
        </div>
      </div>

      {/* Guest Speakers Section */}
      <div style={{ marginBottom: '3.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <span style={{ color: '#D97706', fontWeight: 800, fontSize: '0.82rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            MENTOR NETWORK
          </span>
          <h3 style={{ fontFamily: 'var(--font-heading)', color: '#0F172A', fontSize: '1.8rem', fontWeight: 900, marginTop: '0.25rem' }}>
            Guest Speakers & Industry Practitioners
          </h3>
        </div>

        <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
          {guestSpeakersList.map((spk, idx) => (
            <div key={idx} className="white-card pop-card" onClick={() => setSelectedSpeaker(spk)} style={{ padding: '1.25rem', cursor: 'pointer' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '50%', overflow: 'hidden', border: '2px solid #0EA5E9' }}>
                  <img src={spk.image} alt={spk.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div>
                  <div style={{ fontWeight: 900, color: '#0F172A', fontSize: '1rem' }}>{spk.name}</div>
                  <div style={{ color: '#0EA5E9', fontWeight: 800, fontSize: '0.78rem' }}>{spk.role}</div>
                </div>
              </div>
              <div style={{ fontSize: '0.82rem', color: '#64748B', marginBottom: '0.5rem' }}>{spk.school}</div>
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0F172A' }}>"{spk.topic}"</div>
            </div>
          ))}
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

      {/* Speaker Modal */}
      {selectedSpeaker && (
        <div className="modal-overlay" onClick={() => setSelectedSpeaker(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setSelectedSpeaker(null)}
              style={{
                position: 'absolute', top: '1.25rem', right: '1.25rem',
                background: '#F1F5F9', border: 'none', borderRadius: '50%',
                width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', color: '#0F172A'
              }}
            >
              <X size={20} />
            </button>

            <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center', marginBottom: '1.5rem' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', overflow: 'hidden', border: '3px solid #0EA5E9' }}>
                <img src={selectedSpeaker.image} alt={selectedSpeaker.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div>
                <span style={{ background: '#0EA5E9', color: '#FFF', fontSize: '0.7rem', fontWeight: 800, padding: '0.2rem 0.6rem', borderRadius: '9999px' }}>
                  FYC Guest Speaker
                </span>
                <h3 style={{ fontFamily: 'var(--font-heading)', color: '#0F172A', fontSize: '1.4rem', fontWeight: 900, marginTop: '0.25rem' }}>
                  {selectedSpeaker.name}
                </h3>
                <div style={{ color: '#0284C7', fontWeight: 800, fontSize: '0.88rem' }}>{selectedSpeaker.role}</div>
                <div style={{ color: '#64748B', fontSize: '0.8rem' }}>{selectedSpeaker.school}</div>
              </div>
            </div>

            <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '1rem', borderRadius: '10px', marginBottom: '1.25rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#D97706', textTransform: 'uppercase' }}>Keynote Workshop Topic:</div>
              <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A', marginTop: '0.25rem' }}>"{selectedSpeaker.topic}"</div>
            </div>

            <p style={{ color: '#475569', fontSize: '0.92rem', lineHeight: 1.65, marginBottom: '1.5rem' }}>
              {selectedSpeaker.details}
            </p>

            <div style={{ textAlign: 'center' }}>
              <button onClick={() => setSelectedSpeaker(null)} className="btn-navy" style={{ padding: '0.65rem 1.5rem', fontSize: '0.85rem' }}>
                Close Speaker Profile
              </button>
            </div>
          </div>
        </div>
      )}

    </PageLayout>
  )
}

export default AboutPage
