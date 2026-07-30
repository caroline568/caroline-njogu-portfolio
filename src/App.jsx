import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import FinoraCaseStudy from './pages/FinoraCaseStudy.jsx'
import KavaroCaseStudy from './pages/KavaroCaseStudy.jsx'
import WeddingPlannerCaseStudy from './pages/WeddingPlannerCaseStudy.jsx'
import SmartMartCaseStudy from './pages/SmartMartCaseStudy.jsx'
import './App.css'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/finora" element={<FinoraCaseStudy />} />
      <Route path="/projects/kavaro-agency" element={<KavaroCaseStudy />} />
      <Route path="/projects/wedding-planner-app" element={<WeddingPlannerCaseStudy />} />
      <Route path="/projects/smart-mart" element={<SmartMartCaseStudy />} />
    </Routes>
  )
}
