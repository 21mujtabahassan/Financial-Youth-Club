import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../features/home/pages/HomePage'
import AboutPage from '../features/about/pages/AboutPage'
import FoundersPage from '../features/founders/pages/FoundersPage'
import FinancialLiteracyPage from '../features/financial-literacy/pages/FinancialLiteracyPage'
import ProgramsPage from '../features/programs/pages/ProgramsPage'
import WebinarsPage from '../features/webinars/pages/WebinarsPage'
import ParticipantsPage from '../features/participants/pages/ParticipantsPage'
import ActivitiesPage from '../features/activities/pages/ActivitiesPage'
import CampaignsPage from '../features/campaigns/pages/CampaignsPage'
import CollaborationsPage from '../features/collaborations/pages/CollaborationsPage'
import PrivacyPolicyPage from '../features/legal/pages/PrivacyPolicyPage'
import TermsPage from '../features/legal/pages/TermsPage'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/founders" element={<FoundersPage />} />
      <Route path="/financial-literacy" element={<FinancialLiteracyPage />} />
      <Route path="/programs" element={<ProgramsPage />} />
      <Route path="/webinars" element={<WebinarsPage />} />
      <Route path="/participants" element={<ParticipantsPage />} />
      <Route path="/activities" element={<ActivitiesPage />} />
      <Route path="/campaigns" element={<CampaignsPage />} />
      <Route path="/collaborations" element={<CollaborationsPage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      <Route path="/terms" element={<TermsPage />} />
    </Routes>
  )
}


export default AppRoutes
