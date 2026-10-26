import { profile } from '../data'

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <h3 className="section-title">Contact</h3>
      <p>I'm open to new opportunities. Have a question or just want to say hi? My inbox is open.</p>
      <a href={`mailto:${profile.email}`} className="btn btn-primary">
        Say hello
      </a>
      <ul className="socials">
        {profile.socials.map((s) => (
          <li key={s.label}>
            <a href={s.url} target="_blank" rel="noreferrer">
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
