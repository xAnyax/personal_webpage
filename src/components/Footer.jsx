import React from 'react'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="footer-bottom">
      <p>&copy; {currentYear} Tang Ho Him. All rights reserved.</p>
    </div>
  )
}

export default Footer
