import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import FinoraCaseStudy from './pages/FinoraCaseStudy.jsx'
import KavaroCaseStudy from './pages/KavaroCaseStudy.jsx'
import './App.css'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/finora" element={<FinoraCaseStudy />} />
      <Route path="/projects/kavaro-agency" element={<KavaroCaseStudy />} />
    </Routes>
  )
}
