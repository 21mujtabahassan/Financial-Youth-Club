const LOCAL_STORAGE_SUBSCRIBERS_KEY = 'fyc_newsletter_subscribers_list'

const initialSubscribers = [
  { id: 'sub-1', email: 'adanshahzad@gmail.com', date: 'August 24, 2026', status: 'Active' },
  { id: 'sub-2', email: 'hooriariasat@gmail.com', date: 'August 25, 2026', status: 'Active' },
  { id: 'sub-3', email: 'sarah.khan@lse.ac.uk', date: 'August 26, 2026', status: 'Active' }
]

const getStoredSubscribers = () => {
  const data = localStorage.getItem(LOCAL_STORAGE_SUBSCRIBERS_KEY)
  if (!data) {
    localStorage.setItem(LOCAL_STORAGE_SUBSCRIBERS_KEY, JSON.stringify(initialSubscribers))
    return initialSubscribers
  }
  try {
    return JSON.parse(data)
  } catch (e) {
    return initialSubscribers
  }
}

const saveStoredSubscribers = (list) => {
  localStorage.setItem(LOCAL_STORAGE_SUBSCRIBERS_KEY, JSON.stringify(list))
}

export const newsletterService = {
  getSubscribers() {
    return getStoredSubscribers()
  },

  addSubscriber(email) {
    const formatted = (email || '').trim().toLowerCase()
    if (!formatted) throw new Error('Email is required')

    const list = getStoredSubscribers()
    if (list.some(s => s.email.toLowerCase() === formatted)) {
      return false // Already subscribed
    }

    const newSub = {
      id: `sub-${Date.now()}`,
      email: formatted,
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      status: 'Active'
    }

    const updated = [newSub, ...list]
    saveStoredSubscribers(updated)
    return newSub
  },

  deleteSubscriber(id) {
    const list = getStoredSubscribers()
    const updated = list.filter(s => s.id !== id)
    saveStoredSubscribers(updated)
    return true
  },

  exportCSV() {
    const list = getStoredSubscribers()
    const csvContent = "data:text/csv;charset=utf-8," +
      ["ID,Email,Date Subscribed,Status", ...list.map(s => `"${s.id}","${s.email}","${s.date}","${s.status}"`)].join("\n")
    const encodedUri = encodeURI(csvContent)
    const link = document.createElement("a")
    link.setAttribute("href", encodedUri)
    link.setAttribute("download", `FYC_Subscribers_${new Date().toISOString().slice(0, 10)}.csv`)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
}
