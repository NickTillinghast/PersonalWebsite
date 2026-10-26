import { experience } from '../data'

export default function Experience() {
  return (
    <section id="experience">
      <h3 className="section-title">Experience</h3>
      <ol className="timeline">
        {experience.map((job) => (
          <li key={job.company} className="timeline-item">
            <div className="timeline-header">
              <h4>
                {job.role} <span className="company">@ {job.company}</span>
              </h4>
              <span className="dates">{job.dates}</span>
            </div>
            <p className="location">{job.location}</p>
            <ul className="highlights">
              {job.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  )
}
