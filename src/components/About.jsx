import React from 'react'
import './About.css'

function About() {
  return (
    <section id="about" className="about section">
      <div className="section-title">About Me</div>
      
      <div className="about-content">
        <div className="about-text">
          <h3>Passion, Problem-Solver</h3>
          <p>
            I’m a motivated student with a deep passion for technology and innovation. Currently pursuing my bachelor’s degree at HKUST, I’m focused on developing my skills in computer engineering, artificial intelligence, and web development. I thrive in challenging environments, where complex problems inspire me to push boundaries and create impactful solutions.
          </p>
        </div>

        <div className="about-features">
          <div className="feature-card">
            <div className="feature-icon">🤖</div>
            <h4>AI & Engineering</h4>
            <p>Developing intelligent systems and exploring the cutting edge of technology</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🌐</div>
            <h4>Web Development</h4>
            <p>Building performant, responsive applications that deliver great user experiences</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔧</div>
            <h4>Problem Solving</h4>
            <p>Tackling complex challenges with innovative and scalable solutions</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🤝</div>
            <h4>Collaboration</h4>
            <p>Working effectively in teams and communicating ideas clearly</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
