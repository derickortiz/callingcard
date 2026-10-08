import { ArrowUpRight, Mail } from 'lucide-react'

export default function Page() {
  return (
    <main className="calling-card-page">
      <div className="ambient-mark ambient-mark-top" aria-hidden="true" />
      <div className="ambient-mark ambient-mark-bottom" aria-hidden="true" />

      <section className="calling-card" aria-labelledby="name-heading">
        <div className="card-topline">
          <span className="card-label">Personal calling card</span>
          <span className="card-index" aria-hidden="true">01</span>
        </div>

        <div className="card-intro">
          <p className="eyebrow">Data, patterns, possibility</p>
          <h1 id="name-heading">Derick Ortiz</h1>
          <p className="role-list">Mathematics <span>/</span> Economics <span>/</span> Data Analysis <span>/</span> Data Modeling</p>
        </div>

        <div className="card-divider" />

        <div className="card-lower">
          <div className="statement-block">
            <p className="section-label">A little more</p>
            <p className="statement">
              I love working with data and drawing observations from it. I work to model and predict outcomes based on the current track. Making preemptive changes to achieve desired results is what I enjoy doing.
            </p>
          </div>

        </div>

        <a className="contact-link" href="mailto:derick.ortiz1206@gmail.com">
          <span className="contact-icon" aria-hidden="true"><Mail /></span>
          <span>derick.ortiz1206@gmail.com</span>
          <ArrowUpRight className="contact-arrow" aria-hidden="true" />
        </a>
      </section>
    </main>
  )
}
