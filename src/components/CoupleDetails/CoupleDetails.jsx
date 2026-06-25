import './CoupleDetails.scss'
import flowerLineSage from '../../assets/Vectors/flower-line-sage.png'
import couple1 from '../../assets/Images/Couple-1.webp'
import couple2 from '../../assets/Images/Couple-2.webp'

function CoupleDetails() {
  return (
    <section className="couples">
      <div className="couples__inner">

        <div className="couples__header">
          <img src={flowerLineSage} className="couples__strip" alt="" aria-hidden="true" />
          <p className="section-kicker couples__kicker">Together With Our Families</p>
          <h2 className="couples__title serif">Two Hearts Joined in Love</h2>
        </div>

        <div className="couples__grid">

          {/* ── Couple 1 — Ijju & Ayshu (portrait — standing) ── */}
          <article className="couples__card couples__card--landscape">
            <img src={couple1} alt="Ijju & Ayshu" className="couples__card-img portrait" />
            <div className="couples__card-overlay" />
            <div className="couples__card-text">
              <p className="section-kicker couples__card-kicker">With Joy</p>
              <h3 className="couples__name serif">Mohamed Rizwan</h3>
              <p className="couples__and serif">&amp;</p>
              <h3 className="couples__name serif">Ayshath Noufeera</h3>
            </div>
          </article>

          {/* ── Couple 2 — Fida & Lulu (landscape — sitting) ── */}
          <article className="couples__card couples__card--landscape">
            <img src={couple2} alt="Fida & Lulu" className="couples__card-img landscape" />
            <div className="couples__card-overlay" />
            <div className="couples__card-text">
              <p className="section-kicker couples__card-kicker">And With Love</p>
              <h3 className="couples__name serif">Mariyam Fida</h3>
              <p className="couples__and serif">&amp;</p>
              <h3 className="couples__name serif">Mohammed Akther Lulu</h3>
            </div>
          </article>

        </div>
      </div>
    </section>
  )
}

export default CoupleDetails
