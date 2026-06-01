import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Adventures', path: '/adventures' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, background: 'rgba(250,250,250,0.9)', backdropFilter: 'blur(10px)', borderBottom: '1px solid #E5E5E5' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '20px 42px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Logo */}
        <Link to="/" style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.3rem', fontWeight: 700, color: '#111', textDecoration: 'none', letterSpacing: '-0.01em' }}>
          Ronast Acharya<span style={{ fontStyle: 'italic', fontWeight: 400 }}></span>
        </Link>

        {/* Desktop Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '36px' }} className="hidden md:flex">
          {links.map(link => (
            <Link key={link.name} to={link.path} style={{
              color: location.pathname === link.path ? '#111' : '#999',
              textDecoration: 'none', fontSize: '0.8rem',
              letterSpacing: '0.08em', textTransform: 'uppercase',
              fontWeight: location.pathname === link.path ? 500 : 400,
              borderBottom: location.pathname === link.path ? '1px solid #111' : '1px solid transparent',
              paddingBottom: '2px', transition: 'all 0.2s'
            }}>
              {link.name}
            </Link>
          ))}
        </div>

        {/* Hire Me */}
        <a href="/contact" style={{ border: '1px solid #111', color: '#111', padding: '8px 20px', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none' }}
          className="hidden md:block">
          Hire Me
        </a>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{ background: '#FAFAFA', borderTop: '1px solid #E5E5E5', padding: '24px 32px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {links.map(link => (
            <Link key={link.name} to={link.path} onClick={() => setMenuOpen(false)} style={{
              color: location.pathname === link.path ? '#111' : '#999',
              textDecoration: 'none', fontSize: '0.8rem',
              letterSpacing: '0.1em', textTransform: 'uppercase'
            }}>
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}