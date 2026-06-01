import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import photo from '../assets/20250530_054229.jpg'

const roles = ['Full Stack Developer', 'Traveller', 'Trekker', 'Footballer', 'Explorer']

export default function Home() {
    const [currentRole, setCurrentRole] = useState(0)
    const [displayed, setDisplayed] = useState('')
    const [typing, setTyping] = useState(true)

    useEffect(() => {
        const word = roles[currentRole]
        let i = typing ? 0 : word.length
        const interval = setInterval(() => {
            if (typing) {
                setDisplayed(word.slice(0, i + 1))
                i++
                if (i === word.length) { clearInterval(interval); setTimeout(() => setTyping(false), 1500) }
            } else {
                setDisplayed(word.slice(0, i - 1))
                i--
                if (i === 0) { clearInterval(interval); setCurrentRole(prev => (prev + 1) % roles.length); setTyping(true) }
            }
        }, 80)
        return () => clearInterval(interval)
    }, [currentRole, typing])

    return (
        <main style={{ minHeight: '100vh', background: '#FAFAFA', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 32px', paddingTop: '100px', paddingBottom: '80px' }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%' }}>

                {/* Two column layout */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '64px', alignItems: 'center' }} className="hero-grid">

                    {/* Left — content */}
                    <div>
                        {/* Tag */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
                            <div style={{ width: '32px', height: '1px', background: '#111' }} />
                            <span style={{ fontSize: '0.75rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#888' }}>
                                CS Graduate · Nepal
                            </span>
                        </div>

                        {/* Name */}
                        <h1 style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: 'clamp(3rem, 7vw, 5.5rem)',
                            fontWeight: 500,
                            lineHeight: 0.95,
                            color: '#111',
                            marginBottom: '24px',
                            letterSpacing: '-0.02em'
                        }}>
                            <span style={{ fontStyle: 'italic', fontWeight: 400 }}>Ronast</span><br />
                            <span style={{ fontStyle: 'italic', fontWeight: 400 }}>Acharya</span>
                        </h1>

                        {/* Typing */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '28px', height: '32px' }}>
                            <span style={{ color: '#999', fontSize: '1rem' }}>I am a</span>
                            <span style={{ color: '#111', fontSize: '1rem', fontWeight: 500 }}>{displayed}</span>
                            <span style={{ color: '#111', animation: 'blink 1s infinite' }}>|</span>
                        </div>

                        {/* Description */}
                        <p style={{ color: '#666', fontSize: '1rem', maxWidth: '420px', lineHeight: 1.8, marginBottom: '44px', fontWeight: 300 }}>
                            CS grad who builds things for the web and seeks adventures in the mountains.
                            Clean code, open trails, and everything in between.
                        </p>

                        {/* CTAs */}
                        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '64px' }}>
                            <Link to="/projects" style={{
                                background: '#111', color: '#fff', padding: '13px 30px',
                                fontWeight: 500, fontSize: '0.8rem', letterSpacing: '0.1em',
                                textTransform: 'uppercase', textDecoration: 'none'
                            }}>
                                View Projects
                            </Link>
                            <Link to="/adventures" style={{
                                border: '1px solid #ccc', color: '#111', padding: '13px 30px',
                                fontWeight: 400, fontSize: '0.8rem', letterSpacing: '0.1em',
                                textTransform: 'uppercase', textDecoration: 'none'
                            }}>
                                My Adventures
                            </Link>
                        </div>

                        {/* Divider */}
                        <div style={{ width: '100%', height: '1px', background: '#E5E5E5', marginBottom: '36px' }} />

                        {/* Stats */}
                        <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap' }}>
                            {[
                                { number: '4+', label: 'Treks Completed' },
                                { number: '5+', label: 'Projects Built' },
                                { number: '2+', label: 'Years Coding' },
                            ].map(stat => (
                                <div key={stat.label}>
                                    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', fontWeight: 700, color: '#111', lineHeight: 1 }}>
                                        {stat.number}
                                    </div>
                                    <div style={{ color: '#999', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: '6px' }}>
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right — photo */}
                    <div style={{ alignSelf: 'center' }}>
                        <img
                            src={photo}
                            alt="Ronast Acharya"
                            style={{
                                width: '100%',
                                height: '520px',
                                objectFit: 'cover',
                                objectPosition: 'center top',
                                display: 'block',
                            }}
                        />
                        <div style={{ marginTop: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <div style={{ width: '20px', height: '1px', background: '#aaa' }} />
                            <span style={{ fontSize: '0.7rem', color: '#aaa', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                                Somewhere in the Himalayas
                            </span>
                        </div>
                    </div>

                </div>
            </div>

            <style>{`
                @keyframes blink { 0%, 100% { opacity: 1 } 50% { opacity: 0 } }
                @media (max-width: 768px) {
                    .hero-grid { grid-template-columns: 1fr !important; }
                    .hero-grid > div:last-child { display: none; }
                }
            `}</style>
        </main>
    )
}