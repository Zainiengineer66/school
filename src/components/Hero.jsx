import { Reveal } from './useReveal.jsx'
import './MediaSections.css'

const toPublicAssetUrl = (path) => encodeURI(path.startsWith('/') ? path : `/${path}`)
const heroImage = toPublicAssetUrl('/h.jpg')

export default function Hero() {
  return (
    <>
      <section id="home" className="hero">
        <i className="orb a" />
        <i className="orb b" />
        <div className="container hero-grid">
          <Reveal>
            <span className="eyebrow">
              <i className="dot" />A place to learn & shine
            </span>
            <h1>
              Small hands.<br />
              <span>Bright futures.</span>
            </h1>
            <p className="lead">
              Welcome to Little Friends Secondary School, Zainab Campus — nurturing confident learners from Nursery to Matric in Sadhar, Faisalabad.
            </p>
            <div className="actions">
              <a className="button gold" href="#admissions">
                Apply for Admission →
              </a>
              <a className="button outline" href="#contact">
                Contact Us
              </a>
            </div>
          </Reveal>

          <Reveal>
            <div className="hero-media">
              <img className="hero-visual" src={heroImage} alt="Zainab Campus school building" />
              <aside className="hero-card">
                <b className="year">
                  2020<small>EST.</small>
                </b>
                <h3>Zainab Campus</h3>
                <p>A warm, purposeful environment where each child is encouraged to grow with confidence.</p>
              </aside>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="stats container">
        <div className="stat">
          <strong>6</strong>
          <span>Key Facilities</span>
        </div>
        <div className="stat">
          <strong>2020</strong>
          <span>Established</span>
        </div>
        <div className="stat">
          <strong>Nursery–10</strong>
          <span>Classes Offered</span>
        </div>
      </div>
    </>
  )
}

