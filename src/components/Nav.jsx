import { useState } from 'react'
import { profile } from '../data'

const links = ['about', 'experience', 'projects', 'contact']

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="nav">
      <a href="#top" className="nav-logo" aria-label={`${profile.name} — back to top`}>
        <span className="logo-open">&lt;</span>
        NT
        <span className="logo-close">/&gt;</span>
      </a>
      <button
        className="nav-toggle"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>
      <nav className={open ? 'nav-links open' : 'nav-links'}>
        {links.map((id) => (
          <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
            {id}
          </a>
        ))}
      </nav>
    </header>
  )
}
