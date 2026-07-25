import Nav from '../components/Nav.jsx'
import Hero from '../components/Hero.jsx'
import Projects from '../components/Projects.jsx'
import About from '../components/About.jsx'
import Process from '../components/Process.jsx'
import Skills from '../components/Skills.jsx'
import Contact from '../components/Contact.jsx'

export default function Home() {
  return (
    <div className="page">
      <Nav />
      <main>
        <Hero />
        <Projects />
        <About />
        <Process />
        <Skills />
      </main>
      <Contact />
    </div>
  )
}
