import React from 'react'
import { GraduationCap, Heart, Building2, Award } from 'lucide-react'

const HeroFeaturesGrid = () => {
  const features = [
    {
      icon: <GraduationCap color="#0EA5E9" size={28} />,
      title: 'Free Financial Education',
      description: 'Delivering 90+ workshops & Summer Program 2026 across 35+ countries.',
      bg: '#F0F9FF',
      borderColor: '#BAE6FD'
    },
    {
      icon: <Heart color="#EC4899" size={28} />,
      title: 'Girls For Change',
      description: 'Advocating for economic price transparency & Pink Tax campaign.',
      bg: '#FDF2F8',
      borderColor: '#FBCFE8'
    },
    {
      icon: <Building2 color="#D97706" size={28} />,
      title: 'Global Mentors',
      description: '35+ mentors from J.P. Morgan, Goldman Sachs & Ivy League.',
      bg: '#FFFBEB',
      borderColor: '#FDE68A'
    },
    {
      icon: <Award color="#7C3AED" size={28} />,
      title: '100,000+ Reach',
      description: 'Empowering youth across 35+ countries & 4 continents.',
      bg: '#F5F3FF',
      borderColor: '#DDD6FE'
    }
  ]

  return (
    <section style={{
      background: '#F8FAFC',
      borderTop: '1px solid #E2E8F0',
      borderBottom: '1px solid #E2E8F0',
      padding: '3rem 0'
    }}>
      <div className="container">
        <div className="grid-4" style={{ gap: '1.5rem' }}>
          {features.map((item, idx) => (
            <div
              key={idx}
              className="pop-card"
              style={{
                background: '#FFFFFF',
                border: `1px solid ${item.borderColor}`,
                borderRadius: '16px',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                boxShadow: '0 4px 16px rgba(15, 23, 42, 0.03)'
              }}
            >
              <div style={{
                width: '52px',
                height: '52px',
                borderRadius: '12px',
                background: item.bg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                {item.icon}
              </div>
              <div>
                <h4 style={{
                  fontFamily: 'var(--font-heading)',
                  color: '#0F172A',
                  fontSize: '1.1rem',
                  fontWeight: 800,
                  marginBottom: '0.35rem'
                }}>
                  {item.title}
                </h4>
                <p style={{
                  color: '#64748B',
                  fontSize: '0.88rem',
                  lineHeight: 1.55,
                  margin: 0,
                  fontWeight: 400
                }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HeroFeaturesGrid
