import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageLayout from '../../../components/layout/PageLayout'
import { Sparkles, Search, Clock, ArrowRight, BookOpen, Tag, Filter } from 'lucide-react'
import { blogService } from '../services/blogService'

const categories = [
  'All',
  'Financial Literacy',
  'M&A & Career Guides',
  'Financial Inclusion & Equality',
  'Webinar Recaps'
]

const BlogHubPage = () => {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    loadBlogs()
  }, [])

  const loadBlogs = async () => {
    setLoading(true)
    try {
      const data = await blogService.getPublishedBlogs()
      setBlogs(data)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  const filteredBlogs = blogs.filter(b => {
    const matchesCategory = selectedCategory === 'All' || b.category === selectedCategory
    const matchesSearch = b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          b.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          b.category.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredBlog = blogs.find(b => b.featured) || blogs[0]

  return (
    <PageLayout
      title="FYC Articles & Financial Insights"
      subtitle="Expert career advice, financial literacy guides, and global impact updates written by FYC founders & mentors."
      badge="Knowledge Hub"
    >
      {/* Search & Category Filter Bar */}
      <div style={{
        background: '#FFFFFF',
        border: '1px solid #E2E8F0',
        borderRadius: '16px',
        padding: '1.25rem 1.5rem',
        boxShadow: '0 4px 14px rgba(15, 23, 42, 0.04)',
        marginBottom: '2.5rem',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1rem',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        {/* Category Pills */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                background: selectedCategory === cat ? '#0F172A' : '#F8FAFC',
                color: selectedCategory === cat ? '#FFFFFF' : '#475569',
                border: selectedCategory === cat ? '1px solid #0F172A' : '1px solid #CBD5E1',
                padding: '0.45rem 1rem',
                borderRadius: '9999px',
                fontSize: '0.82rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div style={{ position: 'relative', minWidth: '260px', flex: 1, maxWidth: '380px' }}>
          <Search size={16} color="#94A3B8" style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)' }} />
          <input
            type="text"
            placeholder="Search articles & topics..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '0.55rem 0.85rem 0.55rem 2.35rem',
              borderRadius: '10px',
              border: '1px solid #CBD5E1',
              background: '#F8FAFC',
              fontSize: '0.85rem',
              outline: 'none'
            }}
          />
        </div>
      </div>

      {/* Featured Article Card */}
      {featuredBlog && selectedCategory === 'All' && !searchQuery && (
        <div style={{ marginBottom: '3rem' }}>
          <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#D97706', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.65rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <Sparkles size={14} color="#D97706" /> FEATURED ARTICLE
          </div>

          <Link
            to={`/blog/${featuredBlog.slug}`}
            className="pop-card"
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(300px, 1fr) 1.2fr',
              gap: '2rem',
              background: '#FFFFFF',
              border: '1px solid #E2E8F0',
              borderRadius: '18px',
              overflow: 'hidden',
              textDecoration: 'none',
              boxShadow: '0 6px 24px rgba(15, 23, 42, 0.06)'
            }}
          >
            <div style={{ height: '320px', overflow: 'hidden', position: 'relative' }}>
              <img
                src={featuredBlog.coverImage}
                alt={featuredBlog.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div style={{ padding: '2rem 2rem 2rem 0', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span style={{
                background: '#E0F2FE',
                color: '#0284C7',
                fontSize: '0.72rem',
                fontWeight: 800,
                padding: '0.25rem 0.75rem',
                borderRadius: '9999px',
                width: 'fit-content',
                marginBottom: '0.75rem'
              }}>
                {featuredBlog.category}
              </span>

              <h2 style={{
                fontFamily: 'var(--font-heading)',
                color: '#0F172A',
                fontSize: '1.75rem',
                fontWeight: 900,
                lineHeight: 1.25,
                marginBottom: '0.75rem'
              }}>
                {featuredBlog.title}
              </h2>

              <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                {featuredBlog.excerpt}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#64748B', fontSize: '0.8rem', borderTop: '1px solid #F1F5F9', paddingTop: '1rem' }}>
                <div>
                  <strong style={{ color: '#0F172A' }}>{featuredBlog.author}</strong> • {featuredBlog.date}
                </div>
                <div style={{ color: '#0EA5E9', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  Read Full Article <ArrowRight size={15} />
                </div>
              </div>
            </div>
          </Link>
        </div>
      )}

      {/* Articles Grid */}
      {filteredBlogs.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '4rem 1rem', background: '#F8FAFC', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
          <BookOpen size={36} color="#94A3B8" style={{ marginBottom: '0.75rem' }} />
          <h3 style={{ color: '#0F172A', fontSize: '1.2rem', fontWeight: 800 }}>No articles found</h3>
          <p style={{ color: '#64748B', fontSize: '0.9rem' }}>Try searching with a different keyword or category.</p>
        </div>
      ) : (
        <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 1fr))', gap: '1.5rem' }}>
          {filteredBlogs.map(blog => (
            <Link
              key={blog.id}
              to={`/blog/${blog.slug}`}
              className="pop-card"
              style={{
                background: '#FFFFFF',
                border: '1px solid #E2E8F0',
                borderRadius: '14px',
                overflow: 'hidden',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 4px 14px rgba(15, 23, 42, 0.05)'
              }}
            >
              <div style={{ height: '190px', width: '100%', overflow: 'hidden', position: 'relative' }}>
                <img
                  src={blog.coverImage}
                  alt={blog.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <span style={{
                  position: 'absolute',
                  top: '0.75rem',
                  left: '0.75rem',
                  background: 'rgba(15, 23, 42, 0.85)',
                  backdropFilter: 'blur(4px)',
                  color: '#FFFFFF',
                  fontSize: '0.68rem',
                  fontWeight: 800,
                  padding: '0.2rem 0.65rem',
                  borderRadius: '6px'
                }}>
                  {blog.category}
                </span>
              </div>

              <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#64748B', fontSize: '0.75rem', marginBottom: '0.5rem' }}>
                  <Clock size={13} color="#94A3B8" /> {blog.readTime} • {blog.date}
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-heading)',
                  color: '#0F172A',
                  fontSize: '1.15rem',
                  fontWeight: 800,
                  lineHeight: 1.35,
                  marginBottom: '0.65rem'
                }}>
                  {blog.title}
                </h3>

                <p style={{ color: '#475569', fontSize: '0.85rem', lineHeight: 1.5, marginBottom: '1.25rem', flexGrow: 1 }}>
                  {blog.excerpt}
                </p>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #F1F5F9', paddingTop: '0.75rem', marginTop: 'auto' }}>
                  <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#334155' }}>By {blog.author}</span>
                  <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#0EA5E9' }}>Read Post →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </PageLayout>
  )
}

export default BlogHubPage
