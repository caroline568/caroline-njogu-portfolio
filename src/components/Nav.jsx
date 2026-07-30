export default function Nav() {
  return (
    <header className="nav">
      <a href="#top" className="nav-mark">
        CN<span className="cursor">_</span>
      </a>
      <nav className="nav-links">
        <a href="#projects">Projects</a>
        <a href="#design-work">Design</a>
        <a href="#about">About</a>
        <a href="#process">Process</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
      <a
        className="nav-gh"
        href="https://github.com/caroline568"
        target="_blank"
        rel="noreferrer"
      >
        github.com/caroline568
      </a>
    </header>
  )
}
