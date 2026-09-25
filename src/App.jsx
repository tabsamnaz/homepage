
import { useState } from 'react'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={`site ${darkMode ? 'dark' : ''}`}>

      {/* Header */}
      <header className="header">
        <a href="#home" className="logo">
          Tabsam
        </a>

        <nav className="nav">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Main */}
      <main>

        {/* Hero */}
        <section id="home" className="hero">
          <p className="eyebrow">
            PROJECT MANAGER · TECHNICAL · CREATIVE
          </p>

          <h1>
            Hi, I'm Tabsam.
          </h1>

          <p className="hero-text">
            I organize ideas, solve problems, and help turn
            complicated projects into finished things.
          </p>
        </section>

        {/* Work */}
        <section id="work" className="section">
          <p className="eyebrow">
            SELECTED WORK
          </p>

          <div className="section-heading">
            <h2>
              Things I've worked on.
            </h2>
          </div>

          <div className="projects">

            <article className="project">
              <span className="project-number">
                01
              </span>

              <h3>
                Project One
              </h3>

              <p>
                A project description will go here. We'll replace
                this with one of your actual projects.
              </p>

              <a href="#">
                View project →
              </a>
            </article>

            <article className="project">
              <span className="project-number">
                02
              </span>

              <h3>
                Project Two
              </h3>

              <p>
                Another project description will go here.
              </p>

              <a href="#">
                View project →
              </a>
            </article>

            <article className="project">
              <span className="project-number">
                03
              </span>

              <h3>
                Project Three
              </h3>

              <p>
                Another project or experience we'll highlight.
              </p>

              <a href="#">
                View project →
              </a>
            </article>

          </div>
        </section>

        {/* About */}
        <section id="about" className="section about">
          <p className="eyebrow">
            ABOUT
          </p>

          <h2>
            A little about me.
          </h2>

          <p>
            I'm interested in the space between people, technology,
            organization, and execution.
          </p>
        </section>

        {/* Contact */}
        <section id="contact" className="section contact">
          <p className="eyebrow">
            CONTACT
          </p>

          <h2>
            Let's talk.
          </h2>

          <a href="mailto:hello@tabsam.com">
            hello@tabsam.com →
          </a>
        </section>

      </main>

      {/* Footer */}
      <footer className="footer">
        <span>
          © 2026 Tabsam
        </span>

        <span>
          Built with React
        </span>
      </footer>

      {/* Theme button */}
      <button
        className="theme-button"
        aria-label="Change theme"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? '☼' : '◐'}
      </button>

    </div>
  )
}

export default App