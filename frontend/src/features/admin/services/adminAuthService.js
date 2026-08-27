const LOCAL_STORAGE_ADMINS_KEY = 'fyc_authorized_admins_list'

const initialAdmins = [
  {
    id: 'admin-super-1',
    email: '21mujtabahassan@gmail.com',
    name: 'Mujtaba Hassan',
    role: 'Super Admin',
    isSuperAdmin: true,
    addedDate: 'August 27, 2026'
  },
  {
    id: 'admin-2',
    email: 'hooriariasat@financialyouthclub.org',
    name: 'Hooria Riasat',
    role: 'Co-Founder & Admin',
    isSuperAdmin: false,
    addedDate: 'August 27, 2026'
  }
]

export const getAuthorizedAdmins = () => {
  const data = localStorage.getItem(LOCAL_STORAGE_ADMINS_KEY)
  if (!data) {
    localStorage.setItem(LOCAL_STORAGE_ADMINS_KEY, JSON.stringify(initialAdmins))
    return initialAdmins
  }
  try {
    return JSON.parse(data)
  } catch (e) {
    return initialAdmins
  }
}

export const saveAuthorizedAdmins = (adminsList) => {
  localStorage.setItem(LOCAL_STORAGE_ADMINS_KEY, JSON.stringify(adminsList))
}

export const adminAuthService = {
  getAdmins() {
    return getAuthorizedAdmins()
  },

  authenticate(email, passcode) {
    const formattedEmail = (email || '').trim().toLowerCase()
    const admins = getAuthorizedAdmins()
    
    // Check if email exists in authorized list & passcode matches
    const foundAdmin = admins.find(a => a.email.toLowerCase() === formattedEmail)
    const isValidPasscode = passcode === 'fycadmin2026'

    if (foundAdmin && isValidPasscode) {
      return { success: true, admin: foundAdmin }
    }
    return { success: false, error: 'Access Denied: Email is not authorized or passcode is incorrect.' }
  },

  addAdmin(newEmail, name, role) {
    const formattedEmail = (newEmail || '').trim().toLowerCase()
    if (!formattedEmail) throw new Error('Email is required')

    const admins = getAuthorizedAdmins()
    if (admins.some(a => a.email.toLowerCase() === formattedEmail)) {
      throw new Error('This email is already an authorized admin.')
    }

    const newAdminObj = {
      id: `admin-${Date.now()}`,
      email: formattedEmail,
      name: name || 'FYC Team Member',
      role: role || 'Admin',
      isSuperAdmin: false,
      addedDate: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    }

    const updated = [...admins, newAdminObj]
    saveAuthorizedAdmins(updated)
    return newAdminObj
  },

  removeAdmin(emailToRemove) {
    const formattedEmail = (emailToRemove || '').trim().toLowerCase()
    const admins = getAuthorizedAdmins()

    const target = admins.find(a => a.email.toLowerCase() === formattedEmail)
    if (target && target.isSuperAdmin) {
      throw new Error('Super Admin access cannot be revoked.')
    }

    const updated = admins.filter(a => a.email.toLowerCase() !== formattedEmail)
    saveAuthorizedAdmins(updated)
    return true
  }
}
