import { initialBlogs } from '../data/blogsData'

const LOCAL_STORAGE_KEY = 'fyc_blogs_data'

// Helper to retrieve all stored blogs (merged with initial starter blogs)
const getStoredBlogs = () => {
  const data = localStorage.getItem(LOCAL_STORAGE_KEY)
  if (!data) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(initialBlogs))
    return initialBlogs
  }
  try {
    return JSON.parse(data)
  } catch (e) {
    return initialBlogs
  }
}

// Helper to save blogs array to local storage
const saveStoredBlogs = (blogs) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(blogs))
}

export const blogService = {
  // Get all published blogs for public visitors
  async getPublishedBlogs() {
    const blogs = getStoredBlogs()
    return blogs.filter(b => b.status === 'published')
  },

  // Get single blog by slug
  async getBlogBySlug(slug) {
    const blogs = getStoredBlogs()
    return blogs.find(b => b.slug === slug || b.id === slug)
  },

  // Get all blogs for Admin (Drafts & Published)
  async getAllBlogsAdmin() {
    return getStoredBlogs()
  },

  // Create new blog post
  async createBlog(newBlogData) {
    const blogs = getStoredBlogs()
    const slug = newBlogData.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '') || `blog-${Date.now()}`

    const newBlog = {
      id: `blog-${Date.now()}`,
      slug,
      title: newBlogData.title || 'Untitled Article',
      excerpt: newBlogData.excerpt || '',
      content: newBlogData.content || '',
      category: newBlogData.category || 'Financial Literacy',
      author: newBlogData.author || 'FYC Team',
      authorRole: newBlogData.authorRole || 'Contributor',
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      readTime: newBlogData.readTime || '4 min read',
      coverImage: newBlogData.coverImage || 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
      status: newBlogData.status || 'published',
      featured: Boolean(newBlogData.featured)
    }

    const updated = [newBlog, ...blogs]
    saveStoredBlogs(updated)
    return newBlog
  },

  // Update existing blog
  async updateBlog(id, updatedData) {
    const blogs = getStoredBlogs()
    const index = blogs.findIndex(b => b.id === id)
    if (index === -1) throw new Error('Blog post not found')

    const updatedBlog = {
      ...blogs[index],
      ...updatedData
    }

    blogs[index] = updatedBlog
    saveStoredBlogs(blogs)
    return updatedBlog
  },

  // Delete blog
  async deleteBlog(id) {
    const blogs = getStoredBlogs()
    const updated = blogs.filter(b => b.id !== id)
    saveStoredBlogs(updated)
    return true
  }
}
