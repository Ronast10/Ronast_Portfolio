export default function About() {
  const education = [
    {
      level: 'Bachelor\'s Degree',
      field: 'Computer Science (BSc)',
      institution: 'Herald College Kathmandu',
      location: 'Naxal, Kathmandu',
      period: '2021 – Present',
      detail: 'Affiliated with University of Wolverhampton, UK. 3-year degree program. Graduating soon.',
      gpa: 'Graduating Soon',
    },
    {
      level: 'Higher Secondary (+2)',
      field: 'Management',
      institution: 'Chanakya College of Management',
      location: 'Madhyapur, Thimi',
      period: '2078 – 2080 BS  |  2021 – 2023 AD',
      detail: 'Completed higher secondary education in Management stream.',
      gpa: 'GPA 3.51',
    },
    {
      level: 'Secondary Education (SEE)',
      field: 'General Education',
      institution: 'Shree Sanjay Sai Vidhya Mandir',
      location: 'Balkot',
      period: '2077 BS  |  2021 AD',
      detail: 'Completed secondary education with distinction.',
      gpa: 'GPA 3.90',
    },
  ]

  const skills = [
    { category: 'Frontend', items: ['React.js', 'HTML & CSS', 'Tailwind CSS', 'JavaScript'] },
    { category: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB'] },
    { category: 'Tools', items: ['Git & GitHub', 'VS Code', 'Postman', 'MongoDB Atlas'] },
    { category: 'Interests', items: ['Trekking', 'Cycling', 'Football', 'Basketball', 'Travel'] },
  ]

  return (
    <main style={{ minHeight: '100vh', background: '#FAFAFA', paddingTop: '100px', paddingBottom: '80px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 32px' }}>

        {/* Header */}
        <div style={{ marginBottom: '72px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{ width: '32px', height: '1px', background: '#111' }} />
            <span style={{ fontSize: '0.75rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#888' }}>
              Who I Am
            </span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 700, color: '#111', lineHeight: 1, marginBottom: '32px' }}>
            About Me
          </h1>

          {/* Intro block */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'start' }} className="about-grid">
            <div>
              <p style={{ color: '#444', fontSize: '1.05rem', lineHeight: 1.9, fontWeight: 300, marginBottom: '20px' }}>
                Hey, I'm <strong style={{ fontWeight: 600, color: '#111' }}>Ronast Acharya</strong> — a 21-year-old CS graduate from Bhaktapur, Nepal. I build things for the web and spend my free time chasing trails, mountain roads, and football pitches.
              </p>
              <p style={{ color: '#444', fontSize: '1.05rem', lineHeight: 1.9, fontWeight: 300, marginBottom: '20px' }}>
                I studied Computer Science at Herald College Kathmandu, affiliated with the University of Wolverhampton — a 3-year degree that shaped how I think about software, systems, and problem solving.
              </p>
              <p style={{ color: '#444', fontSize: '1.05rem', lineHeight: 1.9, fontWeight: 300 }}>
                When I'm not coding, you'll find me on a trek to some remote lake, grinding up a mountain on my cycle, or playing football on a Sunday morning. Life's too short to just sit behind a screen.
              </p>
            </div>

            {/* Quick facts */}
            <div style={{ background: '#fff', border: '1px solid #E5E5E5', padding: '32px' }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', fontWeight: 700, color: '#111', marginBottom: '24px' }}>
                Quick Facts
              </h3>
              {[
                { label: 'Age', value: '21 years old' },
                { label: 'Location', value: 'Bhaktapur, Nepal' },
                { label: 'Degree', value: 'BSc Computer Science' },
                { label: 'University', value: 'Herald College (UoW)' },
                { label: 'Status', value: 'Graduating Soon 🎓' },
                { label: 'Hobbies', value: 'Trekking, Cycling, Football' },
              ].map(fact => (
                <div key={fact.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid #F5F5F5' }}>
                  <span style={{ fontSize: '0.8rem', color: '#999', letterSpacing: '0.05em', textTransform: 'uppercase' }}>{fact.label}</span>
                  <span style={{ fontSize: '0.9rem', color: '#111', fontWeight: 500 }}>{fact.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education */}
        <div style={{ marginBottom: '72px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '40px' }}>
            <div style={{ width: '32px', height: '1px', background: '#111' }} />
            <span style={{ fontSize: '0.75rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#111' }}>
              Education
            </span>
          </div>

          {/* Timeline */}
          <div style={{ position: 'relative', paddingLeft: '32px', borderLeft: '1px solid #E5E5E5' }}>
            {education.map((edu, index) => (
              <div key={index} style={{ position: 'relative', marginBottom: index !== education.length - 1 ? '48px' : '0' }}>
                {/* Dot */}
                <div style={{ position: 'absolute', left: '-39px', top: '6px', width: '14px', height: '14px', borderRadius: '50%', background: index === 0 ? '#111' : '#fff', border: '1px solid #111' }} />

                <div style={{ background: '#fff', border: '1px solid #E5E5E5', padding: '28px 32px', transition: 'all 0.3s' }}
                  onMouseEnter={e => e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.08)'}
                  onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
                    <div>
                      <span style={{ fontSize: '0.7rem', color: '#999', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{edu.level}</span>
                      <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.2rem', fontWeight: 700, color: '#111', marginTop: '4px' }}>
                        {edu.institution}
                      </h3>
                    </div>
                    <span style={{ fontSize: '0.75rem', background: '#F5F5F5', color: '#111', padding: '4px 12px', fontWeight: 500 }}>
                      {edu.gpa}
                    </span>
                  </div>

                  <p style={{ color: '#888', fontSize: '0.8rem', marginBottom: '8px' }}>
                    📍 {edu.location} &nbsp;·&nbsp; {edu.period}
                  </p>
                  <p style={{ color: '#666', fontSize: '0.85rem', fontWeight: 400 }}>{edu.field} &nbsp;—&nbsp; {edu.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '40px' }}>
            <div style={{ width: '32px', height: '1px', background: '#111' }} />
            <span style={{ fontSize: '0.75rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#111' }}>
              Skills & Interests
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '24px' }}>
            {skills.map(group => (
              <div key={group.category} style={{ background: '#fff', border: '1px solid #E5E5E5', padding: '28px' }}>
                <h4 style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#999', marginBottom: '16px' }}>
                  {group.category}
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {group.items.map(item => (
                    <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#111', flexShrink: 0 }} />
                      <span style={{ fontSize: '0.9rem', color: '#444', fontWeight: 300 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </main>
  )
}