import Nav from '../components/Nav.jsx'
import Hero from '../components/Hero.jsx'
import Projects from '../components/Projects.jsx'
import DesignWork from '../components/DesignWork.jsx'
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
        <DesignWork />
        <About />
        <Process />
        <Skills />
      </main>
      <Contact />
    </div>
  )
}
