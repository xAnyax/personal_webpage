import React from 'react'
import './Projects.css'

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Personal Portfolio Website',
      description: 'A portfolio website showcasing my skills, projects, and contact information.',
      technologies: ['React', 'CSS', 'JavaScript', 'Personal project'],
      image: '💻',
      link: '#'
    },
    {
      id: 2,
      title: '3D Navigation Map',
      description: 'An interactive 3D map for web-based navigation with real-time updates and user-friendly interface.',
      technologies: ['Three.js', 'CSS', 'JavaScript', 'Group project'],
      image: '🗺️',
      link: 'https://github.com/xAnyax/3D-Navigation-Map'
    },
    {
      id: 3,
      title: 'AI Chatbot',
      description: 'A conversational AI assistant for handling inquiries and providing automated support.',
      technologies: ['React', 'Python', 'OpenAI API', 'Personal project'],
      image: '💬',
      link: '#'
    }
  ]

  return (
    <section id="projects" className="projects section">
      <div className="section-title">Featured Projects</div>

      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <span>{project.image}</span>
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
              <a href={project.link} className="project-link">
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
