import { Gem } from 'lucide-react'
import './Hero.scss'
import heroImage from '../../assets/Images/Image-1.webp'
import cornerSage from '../../assets/Vectors/corner-fill-sage.png'
import cornerGold from '../../assets/Vectors/corner-fill-gold.png'
import line1Gold from '../../assets/Vectors/line-1-gold.png'

function Hero() {
  return (
    <section className="hero">
      {/* Top-left corner of the whole section */}

      <div className="hero__inner">

        {/* ── Left: Text ── */}
        <div className="hero__text">
          {/* Bottom-right corner of the text column */}
          <img src={cornerGold} className="vec-corner vec-corner--tl hero__corner-tl" alt="" aria-hidden="true" />
          <img src={cornerSage} className="vec-corner vec-corner--br hero__corner-br" alt="" aria-hidden="true" />
          {/* <div className="hero__gem-wrap fade-up delay-1">
            <div className="hero__gem-icon">
              <Gem size={20} />
            </div>
          </div> */}

          <p className="section-kicker fade-up delay-1 hero__eyebrow">
            We Are Getting Married
          </p>

          <div className="fade-up delay-2">
            <h1 className="hero__name-1 serif">Ijju &amp; Ayshu</h1>
            <div className="hero__divider">
              <span className="hero__divider-line" />
              <span className="hero__heart">♡</span>
              <span className="hero__divider-line" />
            </div>
            <h2 className="hero__name-2 serif">Fida &amp; Lulu</h2>
          </div>

          <p className="hero__tagline fade-up delay-3">
            A joyful floral celebration
          </p>

          <div className="fade-up delay-4 hero__ornament-wrap">
            <img src={line1Gold} className="hero__ornament-img" alt="" aria-hidden="true" />
          </div>

          {/* ── Scroll indicator — bottom-center of text card ── */}
          <div className="hero__scroll-hint" aria-hidden="true">
            <span className="hero__scroll-label">Scroll</span>
            <span className="hero__scroll-arrow" />
          </div>
        </div>

        {/* ── Right: Image ── */}
        <div className="hero__image-wrap fade-up delay-2">
          <div className="hero__arch">
            <img
              src={heroImage}
              alt="Couple portrait"
              className="hero__img"
              loading="lazy"
            />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero
