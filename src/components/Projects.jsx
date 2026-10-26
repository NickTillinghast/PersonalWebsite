import { projects } from '../data'

export default function Projects() {
  return (
    <section id="projects">
      <h3 className="section-title">Projects</h3>
      <div className="project-grid">
        {projects.map((project) => (
          <article key={project.title} className="card">
            <h4>{project.title}</h4>
            <p>{project.description}</p>
            <ul className="tech">
              {project.tech.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <div className="card-links">
              <a href={project.liveUrl} target="_blank" rel="noreferrer">
                Live ↗
              </a>
              <a href={project.repoUrl} target="_blank" rel="noreferrer">
                Code ↗
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
