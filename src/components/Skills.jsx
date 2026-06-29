import React from 'react'
import './Skills.css'

const skillIcons = {
  Python: 'python',
  C: 'c',
  'C++': 'cplusplus',
  Java: 'openjdk',
  'HTML / CSS': ['html5', 'css'],
  JavaScript: 'javascript',
  TypeScript: 'typescript',
  'SQL (SQLite)': 'sqlite',
  Numpy: 'numpy',
  Pandas: 'pandas',
  Pytorch: 'pytorch',
  TensorFlow: 'tensorflow',
  'Scikit-learn': 'scikitlearn',
  'Three.js': 'three.js',
  React: 'react',
  'Node.js': 'nodedotjs',
  CMake: 'cmake',
  'Linux / Unix CLI': 'linux',
  Github: 'github',
}

function SkillIcon({ icons }) {
  const iconList = Array.isArray(icons) ? icons : [icons]

  return (
    <span className="skill-icon-group">
      {iconList.map((icon) => (
        <img
          key={icon}
          src={`https://cdn.simpleicons.org/${icon}`}
          alt=""
          className="skill-icon"
          loading="lazy"
        />
      ))}
    </span>
  )
}

function Skills() {
  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: [
        'Python',
        'C',
        'C++',
        'Java',
        'HTML / CSS',
        'JavaScript',
        'TypeScript',
        'SQL (SQLite)'
      ]
    },
    {
      category: 'Libraries, Frameworks & Tools',
      skills: [
        'Numpy',
        'Pandas',
        'Pytorch',
        'TensorFlow',
        'Scikit-learn',
        'CMake',
        'React',
        'Node.js',
        'Three.js',
        'Linux / Unix CLI',
        'Github'
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
              {category.skills.map((skill) => (
                <div key={skill} className="skill-item">
                  <SkillIcon icons={skillIcons[skill]} />
                  <span className="skill-name">{skill}</span>
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
