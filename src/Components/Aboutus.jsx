import Poster from '../Assets/poter1.png';
import './Aboutus.css';
import Poster3 from '../Assets/poster3.png'
import Poster4 from '../Assets/poster4.png'
import Poster6 from '../Assets/poster9.jpg'
import Header from './Header';
import Footer from './Footer';
export default function Aboutus() {
  return (
    <div style={{display:"flex", flexDirection:"column"}}>
      <Header />
      <div className='aboutus'>
      <div className="greatthings">
        <img src={Poster} alt="Poster" />
      </div>
      <div className="reviews">
        <div className="review">
          <div className="part1">
            <img src={Poster3} alt="" />
          </div>
          <div className="part2">
            <h2>Largest Assortment</h2>
            <p>Green Kart has the largest assortment of fruits
              and vegetables you can find online. Along with various kitchen es
              sentials like village staples, atta, flowers, cold pressed oils, M
              om's Kitchen snacks, ready-to eat salads, pan-mixes and more. Availa
              ble conveniently at a top, whenever you want.</p>

          </div>
        </div>
        <div className="review">
          <div className="part2">
            <h2>Highest Quality</h2>
            <p>Stay assured of the highest quality on your orders.
              We combine soil testing, traditional farming methods,
              and modern technology to bring out the highest nutrition
              in our produce. Which then undergoes quality checks before
              reaching your doorstep.</p>

          </div>
          <div className="part1">
            <img src={Poster4} alt="" />
          </div>
        </div>
        <div className="review" style={{border:"none",}}>
          <div className="part1">
            <img src={Poster6} alt="" />
          </div>
          <div className="part2">
            <h2>Purely Organic Farming</h2>
            <p>At Green Kart, we believe in growing food the natural way.
               Our farms never use synthetic fertilizers or harmful chemicals 
               — only organic and eco-friendly inputs that keep the soil healthy 
               and the produce fresh. Every fruit and vegetable is cultivated with 
               care to ensure you receive safe, chemical-free, and nutrient-rich
                food straight from our farms.</p>
          </div>
        </div>
      </div>
      
    </div>
    <Footer />
    </div>
  )
}
