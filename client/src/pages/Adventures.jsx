import { useState } from 'react'
import gosaikunda from '../assets/adventures/Gos.jpg'
import langtang from '../assets/adventures/tserkori.jpg'
import panchpokhari from '../assets/adventures/panchpokhari.JPG'
import bhairav from '../assets/adventures/bhairav.jpg'
import nuwakot from '../assets/adventures/nuwakot.webp'
import chitlang from '../assets/adventures/chitlang.JPG'
import sailung from '../assets/adventures/sailung.webp'
import chinaborder from '../assets/adventures/chinaborder.jpg'
import football from '../assets/adventures/football.jpg'
import basketball from '../assets/adventures/basketball.jpg'

const adventures = {
  treks: [
    {
      id: 1,
      title: 'Gosaikunda',
      location: 'Langtang National Park, Nepal',
      elevation: '4,380m',
      duration: '3 Days',
      distance: '15-17 km',
      description: 'A sacred alpine lake trek through rhododendron forests and high mountain passes. One of the most spiritual trails in Nepal.',
      highlights: ['Lauribinayak Pass', 'Sacred Gosaikunda Lake', 'Himalayan Views', 'Rhododendron Forests'],
      difficulty: 'Moderate',
      image: gosaikunda,
    },
    {
      id: 2,
      title: 'Tserko Ri - Langtang',
      location: 'Langtang, Nepal',
      elevation: '4,984m',
      duration: '5 Days',
      distance: '70-80 km',
      description: 'Through the valley of glaciers — dense forests, yak pastures, and the warmth of Tamang culture make this an unforgettable journey.',
      highlights: ['Kyanjin Gompa', 'Langtang Village', 'Tsergo Ri', 'Cheese Factory'],
      difficulty: 'Difficult',
      image: langtang,
    },
    {
      id: 3,
      title: 'Panch Pokhari',
      location: 'Sindhupalchok, Nepal',
      elevation: '4,100m',
      duration: '2 Days',
      distance: '14-20 km',
      description: 'Five sacred ponds nestled in the high Himalayas. A hidden gem off the beaten path with raw, untouched beauty.',
      highlights: ['Five Sacred Lakes', 'Remote Trails', 'Tamang Villages', 'Panoramic Peaks'],
      difficulty: 'Moderate',
      image: panchpokhari,
    },
    {
      id: 4,
      title: 'Bhairav Kunda',
      location: 'Sindhupalchok, Nepal',
      elevation: '4,250m',
      duration: '2 Days',
      distance: '4-6 km',
      description: 'A mystical trek to the sacred Bhairav Kunda lake, deep in the mountains of Sindhupalchok. Spiritual, wild and raw.',
      highlights: ['Sacred Kunda', 'Dense Pine Forests', 'Remote Villages', 'Wildlife'],
      difficulty: 'Easy',
      image: bhairav,
    },
  ],
  rides: [
    {
      id: 5,
      title: 'Nuwakot Ride',
      location: 'Kathmandu to Nuwakot',
      distance: '75 km',
      duration: '3 hours',
      description: 'A historic ride to the ancient town of Nuwakot, passing through rivers, hills and old trade routes. Raw Nepali countryside at its best.',
      highlights: ['Nuwakot Durbar', 'Trishuli River', 'Hill Roads', 'Historic Town'],
      difficulty: 'Moderate',
      image: nuwakot,
    },
    {
      id: 6,
      title: 'Chitlang & Kulekhani Ride',
      location: 'Kathmandu to Chitlang to Kulekhani',
      distance: '90 km',
      duration: '3 hours',
      description: 'One of the most scenic rides out of the valley — through the peaceful village of Chitlang and down to the stunning Kulekhani reservoir.',
      highlights: ['Chitlang Village', 'Kulekhani Reservoir', 'Valley Descents', 'Forest Trails'],
      difficulty: 'Challenging',
      image: chitlang,
    },
    {
      id: 7,
      title: 'Sailung Ride',
      location: 'Kathmandu to Sailung',
      distance: '120 km',
      duration: '6 hours',
      description: 'A serious mountain ride to Sailung hill — steep climbs, thin air and a 360 degree panorama of the Himalayas waiting at the top.',
      highlights: ['Himalayan Panorama', 'Steep Climbs', 'Remote Roads', 'Sunrise Point'],
      difficulty: 'Challenging',
      image: sailung,
    },
    {
      id: 8,
      title: 'China Border Ride',
      location: 'Kathmandu to Tatopani',
      distance: '115 km',
      duration: '6 hours',
      description: 'A scenic journey to the Tatopani border crossing with China through the Araniko Highway, offering dramatic views of the Bhote Koshi River and steep mountain canyons.',
      highlights: ['Tatopani Border', 'Bhote Koshi River', 'Araniko Highway', 'Mountain Canyons'],
      difficulty: 'Moderate',
      image: chinaborder,
    },
  ],
  sports: [
    {
      id: 9,
      title: 'Football',
      description: 'Playing football since school — midfield is home. Always up for a game.',
      icon: '⚽',
      image: football,
    },
    {
      id: 10,
      title: 'Basketball',
      description: 'Court sessions, pickup games, and weekend tournaments. Point guard energy.',
      icon: '🏀',
      image: basketball,
    },
  ],
}

const tabs = ['All', 'Treks', 'Rides', 'Sports']

const difficultyColor = {
  'Easy': '#22c55e',
  'Moderate': '#f59e0b',
  'Challenging': '#ef4444',
  'Difficult': '#ef4444',
}

export default function Adventures() {
  const [activeTab, setActiveTab] = useState('All')

  const showTreks = activeTab === 'All' || activeTab === 'Treks'
  const showRides = activeTab === 'All' || activeTab === 'Rides'
  const showSports = activeTab === 'All' || activeTab === 'Sports'

  const CardImage = ({ src, alt, height = '200px' }) => (
    <div style={{ width: '100%', height, overflow: 'hidden' }}>
      <img src={src} alt={alt}
        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', transition: 'transform 0.4s' }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
    </div>
  )

  return (
    <main style={{ minHeight: '100vh', background: '#FAFAFA', paddingTop: '100px', paddingBottom: '80px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 32px' }}>

        {/* Header */}
        <div style={{ marginBottom: '56px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{ width: '32px', height: '1px', background: '#111' }} />
            <span style={{ fontSize: '0.75rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#888' }}>
              Life Beyond the Screen
            </span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 700, color: '#111', lineHeight: 1, marginBottom: '16px' }}>
            Adventures
          </h1>
          <p style={{ color: '#666', fontSize: '1rem', maxWidth: '480px', lineHeight: 1.8, fontWeight: 300 }}>
            Treks, rides, and sports — the other half of my life. Every trail has a story.
          </p>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: '4px', marginBottom: '48px', borderBottom: '1px solid #E5E5E5' }}>
          {tabs.map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              padding: '10px 24px', fontSize: '0.8rem', letterSpacing: '0.08em',
              textTransform: 'uppercase', fontFamily: 'Inter, sans-serif',
              color: activeTab === tab ? '#111' : '#999',
              fontWeight: activeTab === tab ? 500 : 400,
              borderBottom: activeTab === tab ? '2px solid #111' : '2px solid transparent',
              marginBottom: '-1px', transition: 'all 0.2s'
            }}>
              {tab}
            </button>
          ))}
        </div>

        {/* Treks */}
        {showTreks && (
          <section style={{ marginBottom: '64px' }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.8rem', fontWeight: 700, color: '#111', marginBottom: '32px', fontStyle: 'italic' }}>
              Treks
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(480px, 1fr))', gap: '24px' }}>
              {adventures.treks.map(trek => (
                <div key={trek.id} style={{ background: '#fff', border: '1px solid #E5E5E5', overflow: 'hidden', transition: 'all 0.3s' }}
                  onMouseEnter={e => e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.08)'}
                  onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}>

                  <CardImage src={trek.image} alt={trek.title} height="220px" />

                  <div style={{ padding: '28px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                      <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.4rem', fontWeight: 700, color: '#111' }}>
                        {trek.title}
                      </h3>
                      <span style={{ fontSize: '0.7rem', padding: '4px 10px', background: '#f5f5f5', color: difficultyColor[trek.difficulty], fontWeight: 500 }}>
                        {trek.difficulty}
                      </span>
                    </div>

                    <p style={{ color: '#888', fontSize: '0.8rem', marginBottom: '12px' }}>📍 {trek.location}</p>

                    <p style={{ color: '#555', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: '20px', fontWeight: 300 }}>
                      {trek.description}
                    </p>

                    <div style={{ display: 'flex', gap: '24px', marginBottom: '16px', paddingTop: '16px', borderTop: '1px solid #F0F0F0' }}>
                      {[
                        { label: 'Elevation', value: trek.elevation },
                        { label: 'Duration', value: trek.duration },
                        { label: 'Distance', value: trek.distance },
                      ].map(stat => (
                        <div key={stat.label}>
                          <div style={{ fontSize: '0.65rem', color: '#aaa', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '2px' }}>{stat.label}</div>
                          <div style={{ fontSize: '0.85rem', fontWeight: 500, color: '#111' }}>{stat.value}</div>
                        </div>
                      ))}
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {trek.highlights.map(h => (
                        <span key={h} style={{ fontSize: '0.68rem', padding: '3px 10px', border: '1px solid #E5E5E5', color: '#666' }}>{h}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Rides */}
        {showRides && (
          <section style={{ marginBottom: '64px' }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.8rem', fontWeight: 700, color: '#111', marginBottom: '32px', fontStyle: 'italic' }}>
              Rides
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(460px, 1fr))', gap: '24px' }}>
              {adventures.rides.map(ride => (
                <div key={ride.id} style={{ background: '#fff', border: '1px solid #E5E5E5', overflow: 'hidden', transition: 'all 0.3s' }}
                  onMouseEnter={e => e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.08)'}
                  onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}>

                  <CardImage src={ride.image} alt={ride.title} height="200px" />

                  <div style={{ padding: '28px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                      <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.3rem', fontWeight: 700, color: '#111' }}>{ride.title}</h3>
                      <span style={{ fontSize: '0.7rem', padding: '4px 10px', background: '#f5f5f5', color: difficultyColor[ride.difficulty], fontWeight: 500 }}>{ride.difficulty}</span>
                    </div>
                    <p style={{ color: '#888', fontSize: '0.8rem', marginBottom: '12px' }}>📍 {ride.location}</p>
                    <p style={{ color: '#555', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: '16px', fontWeight: 300 }}>{ride.description}</p>
                    <div style={{ display: 'flex', gap: '24px', paddingTop: '16px', borderTop: '1px solid #F0F0F0', marginBottom: '16px' }}>
                      <div>
                        <div style={{ fontSize: '0.65rem', color: '#aaa', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '2px' }}>Distance</div>
                        <div style={{ fontSize: '0.85rem', fontWeight: 500, color: '#111' }}>{ride.distance}</div>
                      </div>
                      <div>
                        <div style={{ fontSize: '0.65rem', color: '#aaa', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '2px' }}>Duration</div>
                        <div style={{ fontSize: '0.85rem', fontWeight: 500, color: '#111' }}>{ride.duration}</div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {ride.highlights.map(h => (
                        <span key={h} style={{ fontSize: '0.68rem', padding: '3px 10px', border: '1px solid #E5E5E5', color: '#666' }}>{h}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Sports */}
        {showSports && (
          <section>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.8rem', fontWeight: 700, color: '#111', marginBottom: '32px', fontStyle: 'italic' }}>
              Sports
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', gap: '24px' }}>
              {adventures.sports.map(sport => (
                <div key={sport.id} style={{ background: '#fff', border: '1px solid #E5E5E5', overflow: 'hidden', transition: 'all 0.3s' }}
                  onMouseEnter={e => e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.08)'}
                  onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}>
                  <CardImage src={sport.image} alt={sport.title} height="220px" />
                  <div style={{ padding: '28px' }}>
                    <div style={{ fontSize: '2rem', marginBottom: '12px' }}>{sport.icon}</div>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.3rem', fontWeight: 700, color: '#111', marginBottom: '10px' }}>{sport.title}</h3>
                    <p style={{ color: '#555', fontSize: '0.9rem', lineHeight: 1.7, fontWeight: 300 }}>{sport.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

      </div>
    </main>
  )
}