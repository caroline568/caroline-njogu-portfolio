import { Navigate, Route, Routes, useParams } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import More from './pages/More.jsx'
import NotFound from './pages/NotFound.jsx'
import { PROJECTS } from './data/projects.js'

/* Old case-study URLs (/projects/kavaro-agency) now open the matching project in the workspace. */
function LegacyProject() {
  const { slug } = useParams()
  const known = PROJECTS.some((p) => p.slug === slug)
  return <Navigate to={known ? `/projects#${slug}` : '/projects'} replace />
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<LegacyProject />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/more" element={<More />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
