const projects = [
  {
    id: 1,
    title: 'FitFusion',
    subtitle: 'Gym Management System',
    description: 'A full-stack gym management platform built as my Final Year Project. Members can manage subscriptions, chat directly with trainers, shop fitness products with real payment integration, generate personalized diet plans, calculate BMI, and get video workout suggestions.',
    role: 'Full Stack Developer',
    type: 'Final Year Project',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'eSewa', 'Khalti'],
    features: ['Membership Management', 'Trainer Chat', 'Fitness Shop', 'eSewa & Khalti Payments', 'Diet Plan Generator', 'BMI Calculator', 'Video Suggestions'],
    githubUrl: 'https://github.com/Ronast10/Fitfusion-FYP/tree/main',
    status: 'Completed',
    featured: true,
  },
  {
    id: 2,
    title: 'Adelaide Weather',
    subtitle: 'Real-time Weather Dashboard',
    description: 'A weather website built specifically for Adelaide, Australia. Displays real-time weather data along with forecasts for the upcoming month, all fetched from live weather APIs. Clean dashboard with detailed climate insights.',
    role: 'Frontend Developer',
    type: 'Web Application',
    techStack: ['React', 'Weather API', 'JavaScript', 'CSS'],
    features: ['Real-time Weather Data', 'Monthly Forecast', 'Live API Integration', 'Adelaide Specific', 'Detailed Climate Stats'],
    githubUrl: 'https://github.com/Ronast10/WeatherWebsite',
    status: 'Completed',
    featured: false,
  },
  {
    id: 3,
    title: 'GhumnaJam',
    subtitle: 'Travel Discovery Platform',
    description: 'A TripAdvisor-style travel discovery platform for Nepal. Users can explore destinations, read reviews, and plan trips. I contributed as a Business Analyst — defining requirements, user flows, and feature specifications for the development team.',
    role: 'Business Analyst',
    type: 'Team Project',
    techStack: ['Requirements Analysis', 'User Stories', 'Wireframing', 'Documentation'],
    features: ['Destination Discovery', 'User Reviews', 'Trip Planning', 'Nepal Focused', 'BA Documentation'],
    githubUrl: 'https://github.com/StalkYy-06/GhumGham',
    status: 'Completed',
    featured: false,
  },
]

export default function Projects() {
  return (
    <main style={{ minHeight: '100vh', background: '#FAFAFA', paddingTop: '100px', paddingBottom: '80px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 32px' }}>

        {/* Header */}
        <div style={{ marginBottom: '64px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{ width: '32px', height: '1px', background: '#111' }} />
            <span style={{ fontSize: '0.75rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#888' }}>
              What I've Built
            </span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 700, color: '#111', lineHeight: 1, marginBottom: '16px' }}>
            Projects
          </h1>
          <p style={{ color: '#666', fontSize: '1rem', maxWidth: '480px', lineHeight: 1.8, fontWeight: 300 }}>
            A mix of full-stack apps, real-time dashboards, and team projects — each one solving a real problem.
          </p>
        </div>

        {/* Featured Project — FitFusion */}
        <div style={{ marginBottom: '48px' }}>
          <div style={{ background: '#fff', border: '1px solid #E5E5E5', overflow: 'hidden', transition: 'all 0.3s' }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.08)'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}>

            {/* Featured banner */}
            <div style={{ background: '#111', padding: '10px 32px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#fff' }} />
              <span style={{ fontSize: '0.7rem', color: '#fff', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                Featured — Final Year Project
              </span>
            </div>

            <div style={{ padding: '40px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'start' }} className="project-featured-grid">

              {/* Left */}
              <div>
                <div style={{ marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.7rem', color: '#aaa', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                    {projects[0].type}
                  </span>
                </div>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', fontWeight: 700, color: '#111', lineHeight: 1, marginBottom: '8px' }}>
                  {projects[0].title}
                </h2>
                <p style={{ color: '#888', fontSize: '0.9rem', marginBottom: '20px', fontStyle: 'italic' }}>
                  {projects[0].subtitle}
                </p>
                <p style={{ color: '#555', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '28px', fontWeight: 300 }}>
                  {projects[0].description}
                </p>

                {/* Tech stack */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
                  {projects[0].techStack.map(tech => (
                    <span key={tech} style={{ fontSize: '0.72rem', padding: '5px 12px', background: '#F5F5F5', color: '#555', letterSpacing: '0.05em' }}>
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div style={{ display: 'flex', gap: '16px' }}>
                  
                  <a href={projects[0].githubUrl} style={{ border: '1px solid #111', color: '#111', padding: '11px 24px', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none' }}>
                    GitHub
                  </a>
                </div>
              </div>

              {/* Right — features */}
              <div>
                <h4 style={{ fontSize: '0.7rem', color: '#aaa', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '20px' }}>
                  Key Features
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {projects[0].features.map((f, i) => (
                    <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '12px 16px', background: '#FAFAFA', border: '1px solid #F0F0F0' }}>
                      <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '0.8rem', color: '#ccc', fontWeight: 700 }}>
                        0{i + 1}
                      </span>
                      <span style={{ fontSize: '0.88rem', color: '#444', fontWeight: 400 }}>{f}</span>
                    </div>
                  ))}
                </div>

                {/* Role badge */}
                <div style={{ marginTop: '24px', padding: '16px', border: '1px solid #E5E5E5', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.7rem', color: '#aaa', letterSpacing: '0.1em', textTransform: 'uppercase' }}>My Role</span>
                  <span style={{ fontSize: '0.85rem', color: '#111', fontWeight: 500 }}>{projects[0].role}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other projects */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(480px, 1fr))', gap: '24px' }}>
          {projects.slice(1).map(project => (
            <div key={project.id}
              style={{ background: '#fff', border: '1px solid #E5E5E5', padding: '36px', transition: 'all 0.3s' }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.08)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}>

              {/* Top */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <div>
                  <span style={{ fontSize: '0.68rem', color: '#aaa', letterSpacing: '0.15em', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
                    {project.type}
                  </span>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.6rem', fontWeight: 700, color: '#111', lineHeight: 1 }}>
                    {project.title}
                  </h3>
                </div>
                <span style={{ fontSize: '0.68rem', padding: '4px 10px', background: '#F5F5F5', color: '#888', letterSpacing: '0.05em', whiteSpace: 'nowrap' }}>
                  {project.role}
                </span>
              </div>

              <p style={{ color: '#888', fontSize: '0.82rem', fontStyle: 'italic', marginBottom: '14px' }}>
                {project.subtitle}
              </p>

              <p style={{ color: '#555', fontSize: '0.9rem', lineHeight: 1.75, marginBottom: '24px', fontWeight: 300 }}>
                {project.description}
              </p>

              {/* Tech */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                {project.techStack.map(tech => (
                  <span key={tech} style={{ fontSize: '0.7rem', padding: '4px 10px', background: '#F5F5F5', color: '#666', letterSpacing: '0.04em' }}>
                    {tech}
                  </span>
                ))}
              </div>

              {/* Divider */}
              <div style={{ height: '1px', background: '#F0F0F0', marginBottom: '20px' }} />

              {/* Links */}
              <div style={{ display: 'flex', gap: '16px' }}>
                
                <a href={project.githubUrl} style={{ color: '#111', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', borderBottom: '1px solid #ddd', paddingBottom: '2px' }}>
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .project-featured-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  )
}