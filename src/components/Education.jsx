import React from 'react'
import './Education.css'

function Education() {
  const education = [
    {
      id: 1,
      degree: 'Bachelor of Engineering',
      field: 'Computer Engineering',
      school: 'The Hong Kong University of Science and Technology (HKUST)',
      location: 'Hong Kong',
      year: '2024 - 2027',
      gpa: 'In Progress',
      description: 'Focusing on web development, data structures, and AI technologies.',
      achievements: [
        'Relevant Coursework: Web Development, OOP, Data Structures, Operating Systems, Machine Learning, Electronic Circuits, Matrix Algebra, Multivariable Calculus',
      ]
    },
    {
      id: 2,
      degree: 'Associate of Engineering',
      field: 'Computer Science',
      school: 'HKU SPACE Community College',
      location: 'Hong Kong',
      year: '2022 - 2024',
      gpa: 'Graduated',
      description: 'Completed foundational courses in computer science and engineering, with a focus on programming and software development.',
      achievements: [
        'Student on Principal’s Honours list',
        'Relevant Coursework: Programming Fundamentals, Algorithms, Linear Algebra, Calculus, Discrete Mathematics, Database, Web Development, Computer Organization, Digitial Logic',
      ]
    }
  ]

  return (
    <section id="education" className="education section">
      <div className="section-title">Education</div>

      <div className="education-timeline">
        {education.map((edu, index) => (
          <div key={edu.id} className="education-item">
            <div className="timeline-marker"></div>
            
            <div className="education-card">
              <div className="education-header">
                <div className="education-main">
                  <h3 className="degree">{edu.degree}</h3>
                  <p className="field">{edu.field}</p>
                  <p className="school">{edu.school}</p>
                </div>
                <div className="education-meta">
                  <span className="year">{edu.year}</span>
                  <span className="gpa">{edu.gpa}</span>
                </div>
              </div>

              <p className="education-description">{edu.description}</p>

              <div className="achievements">
                <h4>Key Achievements:</h4>
                <ul>
                  {edu.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education
