import { about, skills, interests } from '../data'

export default function About() {
  return (
    <section id="about">
      <h3 className="section-title">About</h3>
      {about.map((para, i) => (
        <p key={i}>{para}</p>
      ))}
      <h4 className="subheading">Skills</h4>
      <ul className="skills">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
      <h4 className="subheading">Outside of work</h4>
      <ul className="skills">
        {interests.map((interest) => (
          <li key={interest}>{interest}</li>
        ))}
      </ul>
    </section>
  )
}
