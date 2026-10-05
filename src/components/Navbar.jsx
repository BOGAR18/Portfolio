import { useState } from 'react'

function Navbar({ items, active, brand, photo, name }) {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#top" className="brand" aria-label="Back to top" onClick={close}>
          <span className="brand-mark">
            {photo ? <img src={photo} alt={`Photo of ${name}`} /> : brand}
          </span>
        </a>
        <button
          className="nav-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? '✕' : '☰'}
        </button>
        <nav className={open ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
          {items.map(([id, label]) => (
            <a key={id} href={`#${id}`} className={active === id ? 'active' : ''} onClick={close}>
              {label}
            </a>
          ))}
          <a href="#contact" className="nav-cta" onClick={close}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar