import React from 'react'
import { GraduationCap, Heart, Building2, Award } from 'lucide-react'

const HeroFeaturesGrid = () => {
  const features = [
    {
      icon: <GraduationCap color="#2FA8D8" size={28} />,
      title: 'Free Financial Education',
      description: 'Delivering 90+ workshops & Summer Program 2026 across 35+ countries.',
      cardBg: '#EAF7FD',
      borderColor: 'rgba(79, 195, 232, 0.4)',
      iconBg: '#FFFFFF',
      titleColor: '#0A2647',
      descColor: '#0F1B2B'
    },
    {
      icon: <Heart color="#071B33" size={28} />,
      title: 'Financial Inclusion',
      description: 'Budgeting & financial independence drives for stay-at-home mothers & youth.',
      cardBg: 'linear-gradient(135deg, #4FC3E8 0%, #2FA8D8 100%)',
      borderColor: 'rgba(79, 195, 232, 0.5)',
      iconBg: 'rgba(255, 255, 255, 0.4)',
      titleColor: '#071B33',
      descColor: '#071B33'
    },
    {
      icon: <Building2 color="#4FC3E8" size={28} />,
      title: 'Global Mentors',
      description: '35+ mentors from J.P. Morgan, Goldman Sachs & Ivy League.',
      cardBg: 'linear-gradient(135deg, #0A2647 0%, #071B33 100%)',
      borderColor: 'rgba(79, 195, 232, 0.3)',
      iconBg: 'rgba(79, 195, 232, 0.15)',
      titleColor: '#FFFFFF',
      descColor: '#EAF7FD'
    },
    {
      icon: <Award color="#2FA8D8" size={28} />,
      title: '100,000+ Reach',
      description: 'Empowering youth across 35+ countries & 4 continents.',
      cardBg: '#FFFFFF',
      borderColor: '#E2E8F0',
      iconBg: '#EAF7FD',
      titleColor: '#0A2647',
      descColor: '#475569'
    }
  ]

  return (
    <section style={{
      background: '#FFFFFF',
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
                background: item.cardBg,
                border: `1px solid ${item.borderColor}`,
                borderRadius: '16px',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                boxShadow: '0 4px 16px rgba(30, 42, 74, 0.05)'
              }}
            >
              <div style={{
                width: '52px',
                height: '52px',
                borderRadius: '12px',
                background: item.iconBg,
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
                  color: item.titleColor,
                  fontSize: '1.1rem',
                  fontWeight: 800,
                  marginBottom: '0.35rem'
                }}>
                  {item.title}
                </h4>
                <p style={{
                  color: item.descColor,
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
