import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes'
import { AppProvider } from './providers/AppProvider'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import ScrollToTop from '../components/common/ScrollToTop'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppProvider>

        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: 'var(--fyc-navy-dark)' }}>
          <Navbar />
          <main style={{ flex: 1 }}>
            <AppRoutes />
          </main>
          <Footer />
        </div>
      </AppProvider>
    </BrowserRouter>
  )
}

export default App
