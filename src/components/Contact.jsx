import React, { useState } from 'react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    
    setTimeout(() => {
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section id="contact" className="contact section">
      <div className="section-title">Get In Touch</div>

      <div className="contact-content">
        <div className="contact-info">
          <h3>Contact Me</h3>

          <div className="contact-methods">
            <div className="contact-method">
              <span className="icon">📧</span>
              <div>
                <h4>Email</h4>
                <a href="mailto:tanghohim710@gmail.com">tanghohim710@gmail.com</a>
              </div>
            </div>
          </div>

          <div className="contact-methods">
            <div className="contact-method">
              <span className="icon">🎓</span>
              <div>
                <h4>Email</h4>
                <a href="mailto:hhtangad@connect.ust.hk">hhtangad@connect.ust.hk</a>
              </div>
            </div>
          </div>

          <div className="contact-methods">
            <div className="contact-method">
              <span className="icon">💻</span>
              <div>
                <h4>Github</h4>
                <a href="https://github.com/xAnyax" target="_blank" rel="noopener noreferrer">Click here</a>
              </div>           
            </div>
          </div>

          <div className="contact-methods">
            <div className="contact-method">
              <span className="icon">💼</span>
              <div>
                <h4>LinkedIn</h4>
                <a href="https://linkedin.com/in/ho-him-tang-444957311" target="_blank" rel="noopener noreferrer">Click here</a>
              </div>               
            </div>
          </div>
        </div>

        {/*}
        <form className="contact-form" onSubmit={handleSubmit}>
          {submitted && (
            <div className="success-message">
              ✓ Thank you! Your message has been sent successfully.
            </div>
          )}
          
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your message here..."
              rows="6"
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
        */}
      </div>
    </section>
  )
}

export default Contact
