import { useState } from 'react'
import { sendMessage } from '../utils/api'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null) // 'sending' | 'success' | 'error'

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      setStatus('fill')
      return
    }
    setStatus('sending')
    try {
      await sendMessage(form)
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const inputStyle = {
    width: '100%',
    padding: '14px 16px',
    border: '1px solid #E5E5E5',
    background: '#fff',
    fontSize: '0.9rem',
    color: '#111',
    fontFamily: 'Inter, sans-serif',
    fontWeight: 300,
    outline: 'none',
    transition: 'border 0.2s',
    boxSizing: 'border-box',
  }

  return (
    <main style={{ minHeight: '100vh', background: '#FAFAFA', paddingTop: '100px', paddingBottom: '80px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 32px' }}>

        {/* Header */}
        <div style={{ marginBottom: '64px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{ width: '32px', height: '1px', background: '#111' }} />
            <span style={{ fontSize: '0.75rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#888' }}>
              Get In Touch
            </span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 700, color: '#111', lineHeight: 1, marginBottom: '16px' }}>
            Contact
          </h1>
          <p style={{ color: '#666', fontSize: '1rem', maxWidth: '440px', lineHeight: 1.8, fontWeight: 300 }}>
            Whether it's a project, a job opportunity, or just want to talk about trails and football — my inbox is open.
          </p>
        </div>

        {/* Two column layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '64px', alignItems: 'start' }} className="contact-grid">

          {/* Left — info */}
          <div>
            <div style={{ marginBottom: '48px' }}>
              {[
                { icon: '📍', label: 'Location', value: 'Bhaktapur, Nepal' },
                { icon: '🎓', label: 'College', value: 'Herald College Kathmandu' },
                { icon: '💻', label: 'Stack', value: 'MERN — MongoDB, Express, React, Node' },
                { icon: '⚡', label: 'Available For', value: 'Internships, Freelance, Full-time' },
              ].map(info => (
                <div key={info.label} style={{ display: 'flex', gap: '16px', marginBottom: '28px' }}>
                  <span style={{ fontSize: '1.2rem', marginTop: '2px' }}>{info.icon}</span>
                  <div>
                    <div style={{ fontSize: '0.7rem', color: '#aaa', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '4px' }}>{info.label}</div>
                    <div style={{ fontSize: '0.9rem', color: '#333', fontWeight: 400 }}>{info.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div style={{ width: '100%', height: '1px', background: '#E5E5E5', marginBottom: '32px' }} />

            {/* Social links */}
            <div>
              <div style={{ fontSize: '0.7rem', color: '#aaa', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>Find me on</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  { label: 'GitHub', url: 'https://github.com/Ronast10' },
                  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/ronastacharya10/' },
                  { label: 'Instagram', url: 'https://www.instagram.com/ronastttt/' },
                ].map(link => (
                  <a key={link.label} href={link.url} target="_blank" rel="noreferrer"
                    style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#111', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 400, transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#888'}
                    onMouseLeave={e => e.currentTarget.style.color = '#111'}>
                    <div style={{ width: '24px', height: '1px', background: '#111' }} />
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div style={{ background: '#fff', border: '1px solid #E5E5E5', padding: '40px' }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.4rem', fontWeight: 700, color: '#111', marginBottom: '32px' }}>
              Send a Message
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
              <div>
                <label style={{ fontSize: '0.7rem', color: '#aaa', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>Name *</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder=""
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = '#111'}
                  onBlur={e => e.target.style.borderColor = '#E5E5E5'}
                />
              </div>
              <div>
                <label style={{ fontSize: '0.7rem', color: '#aaa', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>Email *</label>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder=""
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = '#111'}
                  onBlur={e => e.target.style.borderColor = '#E5E5E5'}
                />
              </div>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <label style={{ fontSize: '0.7rem', color: '#aaa', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>Subject</label>
              <input
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder=""
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = '#111'}
                onBlur={e => e.target.style.borderColor = '#E5E5E5'}
              />
            </div>

            <div style={{ marginBottom: '28px' }}>
              <label style={{ fontSize: '0.7rem', color: '#aaa', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>Message *</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder=""
                rows={6}
                style={{ ...inputStyle, resize: 'vertical' }}
                onFocus={e => e.target.style.borderColor = '#111'}
                onBlur={e => e.target.style.borderColor = '#E5E5E5'}
              />
            </div>

            {/* Status messages */}
            {status === 'fill' && (
              <p style={{ color: '#ef4444', fontSize: '0.85rem', marginBottom: '16px' }}>Please fill in all required fields.</p>
            )}
            {status === 'success' && (
              <p style={{ color: '#22c55e', fontSize: '0.85rem', marginBottom: '16px' }}>Message sent! I'll get back to you soon.</p>
            )}
            {status === 'error' && (
              <p style={{ color: '#ef4444', fontSize: '0.85rem', marginBottom: '16px' }}>Something went wrong. Try emailing me directly.</p>
            )}

            <button
              onClick={handleSubmit}
              disabled={status === 'sending'}
              style={{
                width: '100%', background: '#111', color: '#fff',
                padding: '14px', border: 'none', cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase',
                fontFamily: 'Inter, sans-serif', fontWeight: 500,
                opacity: status === 'sending' ? 0.6 : 1, transition: 'opacity 0.2s'
              }}>
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </main>
  )
}