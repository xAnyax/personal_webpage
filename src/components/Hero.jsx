import React from 'react'
import './Hero.css'
import SocialIcon from './SocialIcon'
import heroImage from '../components/img.jpg'

function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const downloadCV = () => {
    // Replace 'your-cv.pdf' with the actual path to your CV file
    const link = document.createElement('a')
    link.href = '/your-cv.pdf'
    link.download = 'CV.pdf'
    link.click()
  }

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="gradient-text">Tang Ho Him</span>
          </h1>
          <p className="hero-subtitle">
            A Computer Engineering student at HKUST, building the future through AI, web development, and innovative problem-solving.
          </p>
          <div className="hero-buttons">
            <button onClick={downloadCV} className="btn btn-primary">Download CV</button>
            <button onClick={() => scrollToSection('contact')} className="btn btn-secondary">Get In Touch</button>
          </div>
          <div className="social-links">
            <SocialIcon platform="github" />
            <SocialIcon platform="linkedin" />
            <SocialIcon platform="email" />
          </div>
        </div>
        <div className="hero-image">
          <div className="avatar">
            <img src={heroImage} alt="Personal Photo" />
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <span>Scroll to explore</span>
        <div className="mouse"></div>
      </div>
    </section>
  )
}

export default Hero
