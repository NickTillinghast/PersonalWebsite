import { profile } from '../data'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <p className="eyebrow">Hi, I'm</p>
      <h1>{profile.name}</h1>
      <h2>{profile.role}</h2>
      <p className="tagline">{profile.tagline}</p>
      <div className="hero-actions">
        <a href="#projects" className="btn btn-primary">
          View my work
        </a>
        {profile.resumeUrl && (
          <a href={profile.resumeUrl} className="btn">
            Resume
          </a>
        )}
      </div>
    </section>
  )
}
