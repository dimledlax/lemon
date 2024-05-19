import Restaurantfood from "../../assets/restauranfood.jpg"
import ReserveTableButton from "../buttons/ReserveTableButton"

export default function HeroSection() {
  return (
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
  )
}