import { useState } from 'react'
import { profile } from '../data'

const links = ['about', 'projects', 'contact']

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="nav">
      <a href="#top" className="nav-logo">
        {profile.name}
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
