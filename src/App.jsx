import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { profile } from './data'

const year = new Date().getFullYear()

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <div className="grid-zone">
          <Projects />
          <Contact />
        </div>
      </main>
      <footer>
        © {year} {profile.name}
      </footer>
    </>
  )
}
