import { about, skills } from '../data'

export default function About() {
  return (
    <section id="about">
      <h3 className="section-title">About</h3>
      {about.map((para, i) => (
        <p key={i}>{para}</p>
      ))}
      <ul className="skills">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  )
}
