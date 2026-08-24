import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import PageLayout from '../../../components/layout/PageLayout'
import { Sparkles, Calendar, BookOpen, UserCheck, ArrowRight, X, Globe, CheckCircle2, Share2, Award, Clock } from 'lucide-react'

const programsData = [
  {
    id: 'summer-2026',
    region: 'virtual',
    title: 'FYC Global Summer Program 2026',
    category: 'Selective Flagship Cohort',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'A highly selective 4-week virtual immersion for 150 ambitious finance students across 35+ countries.',
    duration: '4 Weeks (July - August 2026)',
    mentors: 'J.P. Morgan, Goldman Sachs, Harvard & LSE Mentors',
    blogTitle: 'Inside the FYC Summer Program 2026: Democratizing High-Finance Careers for Global Youth',
    blogAuthor: 'Adan Shahzad (Founder, FYC)',
    blogDate: 'August 2026',
    blogContent: `Financial Youth Club's flagship Summer Program is designed to level the playing field in competitive finance. Selecting only 150 candidates out of 5,000+ applicants globally, this 100% free virtual program gives students unprecedented access to wall street professionals, private equity partners, and Ivy League scholars.

### What Makes This Program Unique?
Unlike traditional online courses, FYC Summer Program pairs students directly with industry practitioners from top-tier firms. Participants engage in live interactive valuation workshops, financial modeling sessions, and exclusive small-group mentorship chats.

### Curriculum Overview:
- **Week 1: Fundamentals of Corporate Finance & Financial Statement Analysis**
  Mastering balance sheets, income statements, and cash flows with real-world case studies.
- **Week 2: Investment Banking & M&A Deal Dynamics**
  Valuation methods (DCF, LBO, Comparable Companies) and live transaction breakdowns.
- **Week 3: Venture Capital, Private Equity & Emerging Tech**
  How startup investing works, cap tables, term sheets, and DeFi/Fintech trends.
- **Week 4: Career Mentorship, Mock Interviews & Capstone Pitching**
  One-on-one resume reviews, networking strategies, and presenting investment decks to guest judges.`,
    stats: ['150 Scholars Selected', '5,000+ Applicants', '100% Free Tuition', 'Certificate Awarded']
  },

  {
    id: 'pakistan-workshop',
    region: 'pakistan',
    title: 'Financial Literacy Workshops Across Pakistan',
    category: 'Local Community Initiative',
    image: '/images/hero/hero_pakistan.jpg',
    shortDesc: 'Delivering 90+ free financial literacy sessions for high schoolers, university youth & stay-at-home mothers.',
    duration: 'Ongoing Regional Bootcamps',
    mentors: 'Local Finance Leaders & Deloitte Auditors',
    blogTitle: 'Empowering Communities in Pakistan: How FYC is Bridging the Economic Knowledge Gap',
    blogAuthor: 'Hooria Riasat & Local Chapter Leads',
    blogDate: 'Ongoing Campaign',
    blogContent: `In Pakistan, access to practical personal finance education remains a major challenge—especially for young women and stay-at-home mothers. Financial Youth Club has conducted over 90+ grassroot workshops in schools, colleges, and community centers across Karachi, Lahore, Islamabad, and rural districts.

### Key Focus Areas:
- **Budgeting & Savings Strategies for Families**: Practical methods to manage household expenses, avoid inflation traps, and build emergency funds.
- **Digital Financial Services & Mobile Banking Safety**: Teaching digital literacy, secure banking apps, and avoiding online fraud.
- **Micro-Entrepreneurship for Women**: Equipping stay-at-home mothers with pricing strategies, bookkeeping, and economic independence.
- **Young Women Empowerment**: Dismantling financial taboos and encouraging women to take active roles in family financial planning.`,
    stats: ['90+ Workshops', '12,000+ Students', '4 Major Cities', 'Translated to Urdu & Sindhi']
  },

  {
    id: 'uk-mentorship',
    region: 'uk',
    title: 'UK & Europe Mentorship Circle',
    category: 'University & Corporate Alliance',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Connecting London & European university students with senior investment bankers and management consultants.',
    duration: 'Bi-Weekly Virtual AMAs & Mentorship',
    mentors: 'LSE, Cambridge & London Finance Professionals',
    blogTitle: 'Unlocking Wall Street & Canary Wharf: The FYC UK Mentorship Network Story',
    blogAuthor: 'FYC European Chapter Lead',
    blogDate: 'June 2026',
    blogContent: `Navigating the competitive recruitment landscape in London and European financial hubs requires clear guidance and insider perspective. The FYC UK Mentorship Circle connects undergraduate students from LSE, Imperial, King's College, and European universities with seasoned analysts and directors.

### Highlights of the UK Chapter:
- **Spring Insight & Internship Prep**: Detailed breakdowns of UK investment banking application timelines, online tests, and assessment centers.
- **Commercial Awareness Webinars**: Weekly discussions on European central bank policy, macroeconomic trends, and market movements.
- **Women in Finance Roundtable**: Partnered with Girls for Change to promote female representation in UK audit, asset management, and trading.`,
    stats: ['500+ Mentees', '25+ Guest Lecturers', 'London & Oxbridge Network', '100% Free Access']
  },

  {
    id: 'usa-partner',
    region: 'usa',
    title: 'USA Economics & Youth Entrepreneurship Initiative',
    category: 'High School & College Immersion',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Partnered with USA Economics Olympiad (USAEO) to nurture young economists and fintech founders.',
    duration: 'Semester-Long Challenge & Bootcamps',
    mentors: 'Wall Street Analysts & Silicon Valley VC Partners',
    blogTitle: 'Building Tomorrow’s Economists: FYC’s Strategic Partnership with USAEO',
    blogAuthor: 'FYC US Academic Director',
    blogDate: 'July 2026',
    blogContent: `In collaboration with the USA Economics Olympiad (USAEO) and ECONFLOW, FYC provides high school and college students across North America with hands-on exposure to quantitative economics, venture creation, and capital markets.

### Core Pillars:
- **Case Competition Prep**: Mentoring students on real-world economic policy solutions and corporate case studies.
- **Fintech & Founder Talks**: Fireside chats with founders of venture-backed startups discussing pitch decks and fundraising.
- **College Application Mentorship**: Guiding high school students on pursuing finance, economics, and business degrees at Top US institutions.`,
    stats: ['Partnered with USAEO', '3,500+ Participants', '50+ High School Chapters', 'Ivy League Mentors']
  },

  {
    id: 'uae-gcc',
    region: 'uae',
    title: 'Middle East & GCC Financial Inclusion Summit',
    category: 'Regional Summit & Workshops',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Promoting youth economic literacy and Islamic Banking awareness across UAE, Qatar & Saudi Arabia.',
    duration: 'Quarterly Summits & Virtual Webinars',
    mentors: 'Dubai International Financial Centre (DIFC) Experts',
    blogTitle: 'Financial Innovation in Dubai & GCC: Empowering Youth in the Middle East',
    blogAuthor: 'FYC GCC Regional Chapter',
    blogDate: 'May 2026',
    blogContent: `As the Middle East rapidly transforms into a global financial and fintech powerhouse, FYC's GCC chapter conducts specialized workshops in Dubai, Abu Dhabi, and Doha focusing on economic diversification, Islamic Finance basics, and sustainable investing.

### Key Workshop Modules:
- **Principles of Islamic Finance & Sukuk Bonds**: Understanding ethical finance, asset-backed structures, and Middle Eastern banking.
- **Fintech Trends in the GCC**: Real-time payments, open banking, and crypto regulation in the UAE.
- **Gen-Z Wealth Management**: Smart budgeting for young professionals entering the GCC workforce.`,
    stats: ['Dubai & GCC Reach', '15+ Regional Events', 'DIFC Speaker Panel', 'Arabic & English Tracks']
  },

  {
    id: 'girls-change-campaign',
    region: 'virtual',
    title: 'Girls for Change: Pink Tax & Price Transparency Campaign',
    category: 'Special Economic Advocacy',
    image: '/images/founders/hooria_riasat.jpg',
    shortDesc: 'A global campaign advocating for gender economic equality, price transparency, and female financial independence.',
    duration: 'Global Year-Round Campaign',
    mentors: 'Hooria Riasat & Deloitte/KPMG Audit Associates',
    blogTitle: 'Dismantling the Pink Tax: Why Price Transparency Matters for Gender Economic Equality',
    blogAuthor: 'Hooria Riasat (Founder, Girls for Change)',
    blogDate: 'Campaign Highlight',
    blogContent: `Did you know that products marketed toward women often cost up to 13% more than identical items marketed toward men? This subtle markup, known as the "Pink Tax", places an unfair financial burden on women worldwide.

Spearheaded by Co-Founder Hooria Riasat, **Girls for Change** is FYC’s flagship advocacy initiative tackling gendered economic inequality.

### Campaign Goals & Achievements:
1. **Price Transparency Research**: Publishing educational reports showing retail price disparities in personal care and clothing.
2. **Financial Literacy for Mothers**: Hosting workshops specifically tailored for stay-at-home mothers to achieve personal financial autonomy.
3. **Corporate Mentorship Circles**: Connecting young female graduates with audit associates, CFOs, and female tech leaders.`,
    stats: ['10,000+ Women Reached', 'Global Campaign', 'Price Transparency Advocate', '100% Free Workshops']
  }
]

const ProgramsPage = () => {
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const initialRegion = queryParams.get('region') || 'all'

  const [activeRegion, setActiveRegion] = useState(initialRegion)
  const [selectedProgram, setSelectedProgram] = useState(null)

  useEffect(() => {
    const regionParam = queryParams.get('region')
    if (regionParam) {
      setActiveRegion(regionParam.toLowerCase())
    }
  }, [location.search])

  const filteredPrograms = activeRegion === 'all'
    ? programsData
    : programsData.filter(p => p.region.toLowerCase() === activeRegion.toLowerCase() || p.region === 'virtual')

  return (
    <PageLayout
      title="FYC Global Programs & Educational Initiatives"
      subtitle="100% Free Financial Literacy Workshops, Bootcamps & Virtual Immersion."
      badge="Global Non-Profit"
    >

      {/* Filter Tabs */}
      <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
        {[
          { key: 'all', label: 'All Programs' },
          { key: 'pakistan', label: '🇵🇰 Pakistan Chapter' },
          { key: 'uk', label: '🇬🇧 UK & Europe' },
          { key: 'usa', label: '🇺🇸 USA Chapter' },
          { key: 'uae', label: '🇦🇪 UAE & GCC' },
          { key: 'virtual', label: '🌐 Virtual Summer 2026' }
        ].map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveRegion(tab.key)}
            style={{
              background: activeRegion === tab.key ? '#0F172A' : '#FFFFFF',
              color: activeRegion === tab.key ? '#FFFFFF' : '#0F172A',
              border: activeRegion === tab.key ? '1px solid #0F172A' : '1px solid #CBD5E1',
              padding: '0.6rem 1.4rem',
              borderRadius: '9999px',
              fontSize: '0.88rem',
              fontWeight: 800,
              cursor: 'pointer',
              boxShadow: activeRegion === tab.key ? '0 4px 14px rgba(15,23,42,0.2)' : '0 2px 8px rgba(0,0,0,0.03)',
              transition: 'all 0.25s ease'
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Program Boxes Grid (With Dropping Animation!) */}
      <div className="grid-2" style={{ gap: '2rem', marginBottom: '4rem' }}>
        {filteredPrograms.map((prog, index) => (
          <div
            key={prog.id}
            className="white-card pop-card drop-box"
            onClick={() => setSelectedProgram(prog)}
            style={{
              animationDelay: `${index * 120}ms`,
              display: 'flex',
              flexDirection: 'column',
              padding: '0',
              overflow: 'hidden',
              cursor: 'pointer'
            }}
          >
            {/* Image Banner */}
            <div style={{ height: '200px', position: 'relative', overflow: 'hidden', background: '#F8FAFC' }}>
              <img
                src={prog.image}
                alt={prog.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                background: 'linear-gradient(to top, rgba(15,23,42,0.85) 0%, rgba(15,23,42,0.2) 60%)'
              }} />
              <div style={{ position: 'absolute', top: '1rem', left: '1rem' }}>
                <span style={{
                  background: '#0EA5E9',
                  color: '#FFFFFF',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.3)'
                }}>
                  {prog.category}
                </span>
              </div>
              <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', right: '1rem' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', color: '#FFFFFF', fontSize: '1.25rem', fontWeight: 900, lineHeight: 1.25 }}>
                  {prog.title}
                </h3>
              </div>
            </div>

            {/* Box Body */}
            <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1, gap: '0.85rem' }}>
              <p style={{ color: '#475569', fontSize: '0.92rem', lineHeight: 1.6 }}>
                {prog.shortDesc}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.82rem', color: '#64748B', borderTop: '1px solid #E2E8F0', paddingTop: '0.85rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Clock size={15} color="#0EA5E9" /> <strong style={{ color: '#0F172A' }}>Duration:</strong> {prog.duration}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Award size={15} color="#D97706" /> <strong style={{ color: '#0F172A' }}>Mentors:</strong> {prog.mentors}
                </div>
              </div>

              {/* Action Link */}
              <div style={{ marginTop: 'auto', paddingTop: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#0EA5E9', fontWeight: 800, fontSize: '0.88rem' }}>
                <span>Read Full Program Blog & Curriculum</span>
                <ArrowRight size={18} />
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Interactive Blog Modal Popup */}
      {selectedProgram && (
        <div className="modal-overlay" onClick={() => setSelectedProgram(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedProgram(null)}
              style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.25rem',
                background: '#F1F5F9',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#0F172A'
              }}
            >
              <X size={20} />
            </button>

            {/* Category Tag */}
            <span style={{
              background: '#0EA5E9',
              color: '#FFFFFF',
              fontSize: '0.75rem',
              fontWeight: 800,
              padding: '0.3rem 0.85rem',
              borderRadius: '9999px',
              display: 'inline-block',
              marginBottom: '0.85rem'
            }}>
              {selectedProgram.category}
            </span>

            {/* Blog Title */}
            <h2 style={{ fontFamily: 'var(--font-heading)', color: '#0F172A', fontSize: '1.8rem', fontWeight: 900, lineHeight: 1.25, marginBottom: '0.75rem' }}>
              {selectedProgram.blogTitle}
            </h2>

            {/* Meta info */}
            <div style={{ display: 'flex', gap: '1.25rem', color: '#64748B', fontSize: '0.85rem', marginBottom: '1.5rem', borderBottom: '1px solid #E2E8F0', paddingBottom: '1rem' }}>
              <div>✍️ By <strong>{selectedProgram.blogAuthor}</strong></div>
              <div>📅 Published: <strong>{selectedProgram.blogDate}</strong></div>
              <div>🏛️ Mentorship Track</div>
            </div>

            {/* Featured Image */}
            <div style={{ borderRadius: '12px', overflow: 'hidden', height: '280px', marginBottom: '1.5rem' }}>
              <img
                src={selectedProgram.image}
                alt={selectedProgram.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Stats Chips */}
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
              {selectedProgram.stats.map((st, i) => (
                <div key={i} style={{ background: '#F0F9FF', border: '1px solid #BAE6FD', color: '#0284C7', padding: '0.4rem 0.85rem', borderRadius: '8px', fontSize: '0.82rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={15} color="#0EA5E9" /> {st}
                </div>
              ))}
            </div>

            {/* Blog Article Content */}
            <div style={{ color: '#334155', fontSize: '0.98rem', lineHeight: 1.75, whiteSpace: 'pre-line', marginBottom: '2rem' }}>
              {selectedProgram.blogContent}
            </div>

            {/* Registration CTA */}
            <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '14px', padding: '1.5rem', textAlign: 'center' }}>
              <h4 style={{ fontFamily: 'var(--font-heading)', color: '#0F172A', fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.5rem' }}>
                Interested in Joining This Program?
              </h4>
              <p style={{ color: '#64748B', fontSize: '0.88rem', marginBottom: '1rem' }}>
                All FYC workshops, mentorship sessions, and Summer Program tracks are 100% free of cost.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="mailto:financialyouthclub@gmail.com" className="btn-gold" style={{ padding: '0.75rem 1.75rem', fontSize: '0.88rem' }}>
                  Apply for Admission <ArrowRight size={16} />
                </a>
                <button onClick={() => setSelectedProgram(null)} className="btn-navy" style={{ padding: '0.75rem 1.75rem', fontSize: '0.88rem' }}>
                  Close Blog Reader
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </PageLayout>
  )
}

export default ProgramsPage
