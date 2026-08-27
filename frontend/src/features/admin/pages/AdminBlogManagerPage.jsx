import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import PageLayout from '../../../components/layout/PageLayout'
import { Plus, Edit3, Trash2, Eye, EyeOff, LogOut, CheckCircle2, FileText, Search, Sparkles } from 'lucide-react'
import { blogService } from '../../blogs/services/blogService'
import AdminBlogEditorModal from '../components/AdminBlogEditorModal'

const AdminBlogManagerPage = () => {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [blogToEdit, setBlogToEdit] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    // Auth check
    const isAuth = sessionStorage.getItem('fyc_admin_authenticated')
    if (!isAuth) {
      navigate('/admin/login')
      return
    }
    loadBlogs()
  }, [])

  const loadBlogs = async () => {
    setLoading(true)
    try {
      const data = await blogService.getAllBlogsAdmin()
      setBlogs(data)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    sessionStorage.removeItem('fyc_admin_authenticated')
    sessionStorage.removeItem('fyc_admin_email')
    navigate('/admin/login')
  }

  const handleOpenCreate = () => {
    setBlogToEdit(null)
    setIsModalOpen(true)
  }

  const handleOpenEdit = (blog) => {
    setBlogToEdit(blog)
    setIsModalOpen(true)
  }

  const handleSaveBlog = async (formData) => {
    try {
      if (blogToEdit) {
        await blogService.updateBlog(blogToEdit.id, formData)
      } else {
        await blogService.createBlog(formData)
      }
      setIsModalOpen(false)
      loadBlogs()
    } catch (e) {
      alert('Error saving blog: ' + e.message)
    }
  }

  const handleToggleStatus = async (blog) => {
    const newStatus = blog.status === 'published' ? 'draft' : 'published'
    await blogService.updateBlog(blog.id, { status: newStatus })
    loadBlogs()
  }

  const handleDelete = async (blog) => {
    if (window.confirm(`Are you sure you want to delete "${blog.title}"?`)) {
      await blogService.deleteBlog(blog.id)
      loadBlogs()
    }
  }

  const filteredBlogs = blogs.filter(b =>
    b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    b.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    b.author.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <PageLayout
      title="FYC Blog Portal Manager"
      subtitle="Create, edit, publish, or remove blog posts across the Financial Youth Club platform."
      badge="Admin Dashboard"
    >
      {/* Top Admin Action Bar */}
      <div style={{
        background: '#FFFFFF',
        border: '1px solid #E2E8F0',
        borderRadius: '16px',
        padding: '1.25rem 1.5rem',
        marginBottom: '2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem',
        boxShadow: '0 4px 14px rgba(15, 23, 42, 0.04)'
      }}>
        {/* Search */}
        <div style={{ position: 'relative', minWidth: '260px', flex: 1, maxWidth: '400px' }}>
          <Search size={16} color="#94A3B8" style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)' }} />
          <input
            type="text"
            placeholder="Search admin articles..."
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

        {/* Buttons */}
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          <button
            onClick={handleOpenCreate}
            className="btn-gold"
            style={{ padding: '0.6rem 1.3rem', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem', borderRadius: '8px', cursor: 'pointer' }}
          >
            <Plus size={16} /> Create New Article
          </button>
          <button
            onClick={handleLogout}
            style={{
              background: '#F1F5F9',
              border: '1px solid #CBD5E1',
              color: '#475569',
              padding: '0.6rem 1rem',
              borderRadius: '8px',
              fontSize: '0.82rem',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem'
            }}
          >
            <LogOut size={15} /> Sign Out
          </button>
        </div>
      </div>

      {/* Admin Articles Table */}
      <div style={{
        background: '#FFFFFF',
        border: '1px solid #E2E8F0',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 4px 16px rgba(15, 23, 42, 0.05)',
        marginBottom: '4rem'
      }}>
        <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid #E2E8F0', background: '#F8FAFC', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontWeight: 800, color: '#0F172A', fontSize: '0.95rem' }}>
            All Blog Articles ({filteredBlogs.length})
          </span>
          <span style={{ fontSize: '0.78rem', color: '#64748B' }}>
            Drafts are hidden from public `/blog` route
          </span>
        </div>

        {filteredBlogs.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '3.5rem', color: '#64748B' }}>
            <FileText size={36} color="#94A3B8" style={{ marginBottom: '0.5rem' }} />
            <div>No articles found in Admin manager.</div>
          </div>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.88rem' }}>
              <thead>
                <tr style={{ background: '#F1F5F9', color: '#475569', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  <th style={{ padding: '0.85rem 1.25rem' }}>Article Info</th>
                  <th style={{ padding: '0.85rem 1rem' }}>Category</th>
                  <th style={{ padding: '0.85rem 1rem' }}>Author & Date</th>
                  <th style={{ padding: '0.85rem 1rem' }}>Status</th>
                  <th style={{ padding: '0.85rem 1.25rem', textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredBlogs.map(blog => (
                  <tr key={blog.id} style={{ borderBottom: '1px solid #E2E8F0', transition: 'background 0.2s' }}>
                    
                    {/* Article Info */}
                    <td style={{ padding: '1rem 1.25rem' }}>
                      <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'center' }}>
                        <img
                          src={blog.coverImage}
                          alt={blog.title}
                          style={{ width: '48px', height: '48px', borderRadius: '8px', objectFit: 'cover', flexShrink: 0 }}
                        />
                        <div>
                          <div style={{ fontWeight: 800, color: '#0F172A', fontSize: '0.92rem', lineHeight: 1.3 }}>
                            {blog.title}
                          </div>
                          {blog.featured && (
                            <span style={{ fontSize: '0.68rem', background: '#FEF3C7', color: '#D97706', fontWeight: 800, padding: '0.1rem 0.4rem', borderRadius: '4px', marginTop: '0.2rem', display: 'inline-block' }}>
                              ★ Featured
                            </span>
                          )}
                        </div>
                      </div>
                    </td>

                    {/* Category */}
                    <td style={{ padding: '1rem' }}>
                      <span style={{ background: '#E0F2FE', color: '#0284C7', fontSize: '0.72rem', fontWeight: 800, padding: '0.2rem 0.6rem', borderRadius: '9999px' }}>
                        {blog.category}
                      </span>
                    </td>

                    {/* Author & Date */}
                    <td style={{ padding: '1rem', color: '#64748B', fontSize: '0.82rem' }}>
                      <div style={{ fontWeight: 700, color: '#334155' }}>{blog.author}</div>
                      <div>{blog.date}</div>
                    </td>

                    {/* Status */}
                    <td style={{ padding: '1rem' }}>
                      <span style={{
                        background: blog.status === 'published' ? '#DCFCE7' : '#F1F5F9',
                        color: blog.status === 'published' ? '#15803D' : '#64748B',
                        fontSize: '0.72rem',
                        fontWeight: 800,
                        padding: '0.25rem 0.65rem',
                        borderRadius: '9999px',
                        textTransform: 'uppercase'
                      }}>
                        {blog.status}
                      </span>
                    </td>

                    {/* Actions */}
                    <td style={{ padding: '1rem 1.25rem', textAlign: 'right' }}>
                      <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
                        <button
                          onClick={() => handleToggleStatus(blog)}
                          title={blog.status === 'published' ? 'Unpublish to Draft' : 'Publish Article'}
                          style={{ background: '#F8FAFC', border: '1px solid #CBD5E1', padding: '0.4rem', borderRadius: '6px', cursor: 'pointer', color: '#475569' }}
                        >
                          {blog.status === 'published' ? <EyeOff size={15} /> : <Eye size={15} color="#0EA5E9" />}
                        </button>
                        <button
                          onClick={() => handleOpenEdit(blog)}
                          title="Edit Article"
                          style={{ background: '#F8FAFC', border: '1px solid #CBD5E1', padding: '0.4rem', borderRadius: '6px', cursor: 'pointer', color: '#0F172A' }}
                        >
                          <Edit3 size={15} />
                        </button>
                        <button
                          onClick={() => handleDelete(blog)}
                          title="Delete Article"
                          style={{ background: '#FEF2F2', border: '1px solid #FCA5A5', padding: '0.4rem', borderRadius: '6px', cursor: 'pointer', color: '#DC2626' }}
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Editor Modal */}
      <AdminBlogEditorModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        blogToEdit={blogToEdit}
        onSave={handleSaveBlog}
      />
    </PageLayout>
  )
}

export default AdminBlogManagerPage
