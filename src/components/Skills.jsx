import React from 'react'
import './Skills.css'

function Skills() {
  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: [
        { name: 'Python', level: 80 },
        { name: 'C', level: 70 },
        { name: 'C++', level: 75 },
        { name: 'Java', level: 50 },
        { name: 'HTML / CSS', level: 90 },
        { name: 'JavaScript', level: 80 },
        { name: 'SQL (SQLite)', level: 60 }
      ]
    },
    {
      category: 'Libraries, Frameworks & Tools',
      skills: [
        { name: 'Numpy', level: 65 },
        { name: 'Pandas', level: 65 },
        { name: 'Pytorch', level: 60 },
        { name: 'React', level: 80 },
        { name: 'Git', level: 75 },
        { name: 'CMake', level: 70 },
        { name: 'Linux / Unix CLI', level: 75 }
      ]
    }
  ]

  return (
    <section id="skills" className="skills section">
      <div className="section-title">My Skills</div>

      <div className="skills-grid">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="skill-category">
            <h3>{category.category}</h3>
            <div className="skills-list">
              {category.skills.map((skill, skillIdx) => (
                <div key={skillIdx} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="languages">
        <h3>Languages</h3>
        <div className="language-tags">
          <span className="tag">Cantonese - Native</span>
          <span className="tag">English - Fluent</span>
          <span className="tag">Mandarin - Fluent</span>
          <span className="tag">Japanese - Beginner</span>
        </div>
      </div>
    </section>
  )
}

export default Skills
