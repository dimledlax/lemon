import Restaurantfood from "../images/restauranfood.jpg"
import ReserveTableButton from "./ReserveTableButton"
import OnlineMenuButton from "./OnlineMenuButton"

export default function Main() {
  return (
    <main>
      <div className="hero">
        <div className="heroContainer">
          <div className="heroLeftPart">
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>
              We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
            </p>
            <ReserveTableButton />
          </div>
          <div>
            <img src={Restaurantfood} className="heroImage"/>
          </div>
        </div>
      </div>
      <div className="highlights">
        <div className="highlightsContainer">
          hello
        </div>
      </div>
      <div className="testimonials"></div>
      <div className="about"></div>
      <div className="footer"></div>
    </main>
  )
}