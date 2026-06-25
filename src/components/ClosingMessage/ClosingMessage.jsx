import './ClosingMessage.scss'
import lineColorFlower from '../../assets/Vectors/line-vector-color-flower.png'
import cornerOutlineSage from '../../assets/Vectors/corner-otline-sage.png'
import cornerOutlineGold from '../../assets/Vectors/corner-otline-gold.png'

function ClosingMessage() {
  return (
    <section className="closing">
      <img src={cornerOutlineSage} className="closing__corner closing__corner--tl" alt="" aria-hidden="true" />
      <img src={cornerOutlineGold} className="closing__corner closing__corner--br" alt="" aria-hidden="true" />
      <div className="closing__inner">
        <img src={lineColorFlower} className="vec-divider closing__divider" alt="" aria-hidden="true" />
        <p className="closing__arabic arabic">
          مَا شَاءَ ٱللَّٰهُ لَا قُوَّةَ إِلَّا بِٱللَّٰهِ
        </p>
        <p className="closing__message serif">
          Insha Allah, your presence and duas will make this day even more beautiful.
        </p>
        <p className="closing__sub">
          We warmly welcome you and your family to celebrate with us.
        </p>
        <p className="section-kicker closing__signoff">With best compliments</p>
        <p className="closing__family serif">From our families to yours</p>
      </div>
    </section>
  )
}

export default ClosingMessage
