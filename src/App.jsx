import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'
import './App.css'

export default function App() {
  return (
    <div className="page">
      <Nav />
      <main>
        <Hero />
        <Projects />
        <About />
        <Skills />
      </main>
      <Contact />
    </div>
  )
}
