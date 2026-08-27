import React, { useState, useEffect } from 'react'
import { X, Sparkles, Image, Check, AlertCircle } from 'lucide-react'

const categories = [
  'Financial Literacy',
  'M&A & Career Guides',
  'Pink Tax / Girls for Change',
  'Webinar Recaps'
]

const AdminBlogEditorModal = ({ isOpen, onClose, blogToEdit, onSave }) => {
  const [formData, setFormData] = useState({
    title: '',
    category: 'Financial Literacy',
    excerpt: '',
    content: '',
    coverImage: '',
    author: 'FYC Editorial Team',
    authorRole: 'Contributor',
    readTime: '4 min read',
    status: 'published',
    featured: false
  })

  useEffect(() => {
    if (blogToEdit) {
      setFormData({
        title: blogToEdit.title || '',
        category: blogToEdit.category || 'Financial Literacy',
        excerpt: blogToEdit.excerpt || '',
        content: blogToEdit.content || '',
        coverImage: blogToEdit.coverImage || '',
        author: blogToEdit.author || 'FYC Editorial Team',
        authorRole: blogToEdit.authorRole || 'Contributor',
        readTime: blogToEdit.readTime || '4 min read',
        status: blogToEdit.status || 'published',
        featured: Boolean(blogToEdit.featured)
      })
    } else {
      setFormData({
        title: '',
        category: 'Financial Literacy',
        excerpt: '',
        content: '',
        coverImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
        author: 'FYC Editorial Team',
        authorRole: 'Contributor',
        readTime: '4 min read',
        status: 'published',
        featured: false
      })
    }
  }, [blogToEdit, isOpen])

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave(formData)
  }

  return (
    <div className="modal-overlay" onClick={onClose} style={{ zIndex: 99999 }}>
      <div
        className="modal-content"
        onClick={e => e.stopPropagation()}
        style={{ maxWidth: '720px', maxHeight: '90vh', overflowY: 'auto', padding: '2rem' }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute', top: '1.25rem', right: '1.25rem',
            background: '#F1F5F9', border: 'none', borderRadius: '50%',
            width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', color: '#0F172A'
          }}
        >
          <X size={20} />
        </button>

        <h2 style={{ fontFamily: 'var(--font-heading)', color: '#0F172A', fontSize: '1.5rem', fontWeight: 900, marginBottom: '0.25rem' }}>
          {blogToEdit ? 'Edit Article' : 'Create New Article'}
        </h2>
        <p style={{ color: '#64748B', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
          Publish new financial literacy insights, career guides, or campaign updates to FYC Web.
        </p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          
          {/* Title */}
          <div>
            <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.35rem' }}>
              Article Title *
            </label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={e => setFormData({ ...formData, title: e.target.value })}
              placeholder="e.g. Navigating Summer Analyst Recruiting 2026..."
              style={{ width: '100%', padding: '0.65rem', borderRadius: '8px', border: '1px solid #CBD5E1', background: '#F8FAFC', fontSize: '0.88rem', outline: 'none' }}
            />
          </div>

          {/* Category & Status */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.35rem' }}>
                Category
              </label>
              <select
                value={formData.category}
                onChange={e => setFormData({ ...formData, category: e.target.value })}
                style={{ width: '100%', padding: '0.65rem', borderRadius: '8px', border: '1px solid #CBD5E1', background: '#F8FAFC', fontSize: '0.88rem', outline: 'none' }}
              >
                {categories.map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.35rem' }}>
                Publication Status
              </label>
              <select
                value={formData.status}
                onChange={e => setFormData({ ...formData, status: e.target.value })}
                style={{ width: '100%', padding: '0.65rem', borderRadius: '8px', border: '1px solid #CBD5E1', background: '#F8FAFC', fontSize: '0.88rem', outline: 'none' }}
              >
                <option value="published">Published</option>
                <option value="draft">Draft</option>
              </select>
            </div>
          </div>

          {/* Cover Image URL */}
          <div>
            <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.35rem' }}>
              Cover Image URL
            </label>
            <input
              type="url"
              value={formData.coverImage}
              onChange={e => setFormData({ ...formData, coverImage: e.target.value })}
              placeholder="https://images.unsplash.com/..."
              style={{ width: '100%', padding: '0.65rem', borderRadius: '8px', border: '1px solid #CBD5E1', background: '#F8FAFC', fontSize: '0.88rem', outline: 'none' }}
            />
          </div>

          {/* Excerpt Summary */}
          <div>
            <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.35rem' }}>
              Short Excerpt / Summary *
            </label>
            <textarea
              required
              rows={2}
              value={formData.excerpt}
              onChange={e => setFormData({ ...formData, excerpt: e.target.value })}
              placeholder="Brief 1-2 sentence summary of the article..."
              style={{ width: '100%', padding: '0.65rem', borderRadius: '8px', border: '1px solid #CBD5E1', background: '#F8FAFC', fontSize: '0.88rem', outline: 'none' }}
            />
          </div>

          {/* Full Article Content */}
          <div>
            <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.35rem' }}>
              Full Article Content *
            </label>
            <textarea
              required
              rows={8}
              value={formData.content}
              onChange={e => setFormData({ ...formData, content: e.target.value })}
              placeholder="Write or paste your article content here..."
              style={{ width: '100%', padding: '0.65rem', borderRadius: '8px', border: '1px solid #CBD5E1', background: '#F8FAFC', fontSize: '0.88rem', outline: 'none' }}
            />
          </div>

          {/* Author Name & Read Time */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.35rem' }}>
                Author Name
              </label>
              <input
                type="text"
                value={formData.author}
                onChange={e => setFormData({ ...formData, author: e.target.value })}
                placeholder="e.g. Adan Shahzad"
                style={{ width: '100%', padding: '0.65rem', borderRadius: '8px', border: '1px solid #CBD5E1', background: '#F8FAFC', fontSize: '0.88rem', outline: 'none' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.35rem' }}>
                Estimated Read Time
              </label>
              <input
                type="text"
                value={formData.readTime}
                onChange={e => setFormData({ ...formData, readTime: e.target.value })}
                placeholder="e.g. 5 min read"
                style={{ width: '100%', padding: '0.65rem', borderRadius: '8px', border: '1px solid #CBD5E1', background: '#F8FAFC', fontSize: '0.88rem', outline: 'none' }}
              />
            </div>
          </div>

          {/* Featured Checkbox */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', margin: '0.5rem 0' }}>
            <input
              type="checkbox"
              id="featured"
              checked={formData.featured}
              onChange={e => setFormData({ ...formData, featured: e.target.checked })}
              style={{ width: '18px', height: '18px', cursor: 'pointer' }}
            />
            <label htmlFor="featured" style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0F172A', cursor: 'pointer' }}>
              Mark as Featured Article on Blog Hub
            </label>
          </div>

          {/* Submit buttons */}
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end', marginTop: '1rem', borderTop: '1px solid #F1F5F9', paddingTop: '1.25rem' }}>
            <button
              type="button"
              onClick={onClose}
              style={{ background: '#F1F5F9', border: 'none', color: '#475569', padding: '0.65rem 1.25rem', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 700, cursor: 'pointer' }}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn-navy"
              style={{ padding: '0.65rem 1.5rem', fontSize: '0.85rem', borderRadius: '8px', cursor: 'pointer' }}
            >
              {blogToEdit ? 'Save Changes' : 'Publish Article'}
            </button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default AdminBlogEditorModal
