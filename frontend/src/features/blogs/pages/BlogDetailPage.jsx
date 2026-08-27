import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import PageLayout from '../../../components/layout/PageLayout'
import { ArrowLeft, Clock, Calendar, User, Share2, Bookmark } from 'lucide-react'
import { blogService } from '../services/blogService'

const BlogDetailPage = () => {
  const { slug } = useParams()
  const [blog, setBlog] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadBlog()
  }, [slug])

  const loadBlog = async () => {
    setLoading(true)
    try {
      const data = await blogService.getBlogBySlug(slug)
      setBlog(data)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <PageLayout title="Loading Article..." subtitle="Fetching FYC insights...">
        <div style={{ textAlign: 'center', padding: '5rem 0', color: '#64748B' }}>Loading content...</div>
      </PageLayout>
    )
  }

  if (!blog) {
    return (
      <PageLayout title="Article Not Found" subtitle="The requested blog post could not be found.">
        <div style={{ textAlign: 'center', padding: '4rem 0' }}>
          <Link to="/blog" className="btn-navy" style={{ padding: '0.65rem 1.4rem' }}>
            ← Back to Blog Hub
          </Link>
        </div>
      </PageLayout>
    )
  }

  return (
    <PageLayout
      title={blog.title}
      subtitle={blog.excerpt}
      badge={blog.category}
    >
      <div style={{ maxWidth: '820px', margin: '0 auto' }}>
        
        {/* Navigation & Metadata Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <Link to="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#0EA5E9', fontWeight: 800, fontSize: '0.88rem', textDecoration: 'none' }}>
            <ArrowLeft size={16} /> Back to All Articles
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', color: '#64748B', fontSize: '0.82rem' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <Calendar size={14} color="#94A3B8" /> {blog.date}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <Clock size={14} color="#94A3B8" /> {blog.readTime}
            </span>
          </div>
        </div>

        {/* Cover Image */}
        <div style={{ width: '100%', height: '380px', borderRadius: '18px', overflow: 'hidden', marginBottom: '2rem', boxShadow: '0 8px 24px rgba(15, 23, 42, 0.08)' }}>
          <img src={blog.coverImage} alt={blog.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>

        {/* Author Info Bar */}
        <div style={{
          background: '#F8FAFC',
          border: '1px solid #E2E8F0',
          borderRadius: '12px',
          padding: '1rem 1.25rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.85rem',
          marginBottom: '2rem'
        }}>
          <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#0EA5E9', color: '#FFFFFF', fontWeight: 900, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem' }}>
            {blog.author.charAt(0)}
          </div>
          <div>
            <div style={{ fontWeight: 800, color: '#0F172A', fontSize: '0.95rem' }}>Written by {blog.author}</div>
            <div style={{ color: '#64748B', fontSize: '0.8rem' }}>{blog.authorRole || 'FYC Contributor'}</div>
          </div>
        </div>

        {/* Article Body Content */}
        <div
          style={{
            color: '#334155',
            fontSize: '1.05rem',
            lineHeight: 1.8,
            marginBottom: '3rem'
          }}
          dangerouslySetInnerHTML={{
            __html: blog.content.includes('<h2') || blog.content.includes('<p')
              ? blog.content
              : blog.content.replace(/^#+\s+/gm, '').replace(/\n/g, '<br/>')
          }}
        />

        {/* Footer CTA */}
        <div style={{
          background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
          color: '#FFFFFF',
          padding: '2.5rem',
          borderRadius: '18px',
          textAlign: 'center',
          marginTop: '4rem'
        }}>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 900, marginBottom: '0.5rem' }}>
            Join the Financial Youth Club Community
          </h3>
          <p style={{ color: '#94A3B8', fontSize: '0.92rem', maxWidth: '540px', margin: '0 auto 1.5rem auto' }}>
            Get direct access to free financial literacy workshops, case study bootcamps, and bulge-bracket mentorship.
          </p>
          <a
            href="https://chat.whatsapp.com/HzUA3qjzlweGWUhhOJtraC"
            target="_blank"
            rel="noreferrer"
            className="btn-gold"
            style={{ padding: '0.75rem 1.8rem', fontSize: '0.9rem' }}
          >
            Join WhatsApp Community
          </a>
        </div>

      </div>
    </PageLayout>
  )
}

export default BlogDetailPage
