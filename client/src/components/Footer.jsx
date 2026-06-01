export default function Footer() {
  const year = new Date().getFullYear()

  const socials = [
    { label: 'GitHub', url: 'https://github.com/Ronast10' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/ronastacharya10/' },
    { label: 'Instagram', url: 'https://www.instagram.com/ronastacharya10/' },
  ]

  return (
    <footer style={{ background: '#fff', borderTop: '1px solid #E5E5E5', padding: '28px 32px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>

        <span style={{ color: '#aaa', fontSize: '0.8rem', fontWeight: 300 }}>
          © {year} Ronast Acharya. All rights reserved.
        </span>

        <div style={{ display: 'flex', gap: '24px' }}>
          {socials.map(s => (
            <a key={s.label} href={s.url} target="_blank" rel="noreferrer"
              style={{ color: '#aaa', textDecoration: 'none', fontSize: '0.78rem', letterSpacing: '0.08em', textTransform: 'uppercase', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#111'}
              onMouseLeave={e => e.currentTarget.style.color = '#aaa'}>
              {s.label}
            </a>
          ))}
        </div>

        <span style={{ color: '#aaa', fontSize: '0.8rem', fontWeight: 300 }}>
          Built with MERN Stack
        </span>

      </div>
    </footer>
  )
}