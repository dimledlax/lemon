import chefImage from "../../assets/restaurant_chef_B.jpg"
import restaurantImage from "../../assets/restaurant.jpg"

export default function About() {
  return (
    <div className="about">
      <div className="aboutContainer">
        <div className="aboutLeft">
          <div className="aboutLeftUpper">
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
          </div>
          <div className="aboutLeftLower">
            <p>At Little Lemon, we pride ourselves on using fresh, locally-sourced ingredients to create dishes that transport you to the sunny shores of the Mediterranean. Join us for a culinary experience that will tantalize your taste buds and leave you craving more.</p>
          </div>
        </div>
        <div className="aboutRight">
          <img src={restaurantImage} alt="Restaurant image" />
          <img src={chefImage} alt="Chef image"/>
        </div>
      </div>
    </div>
  )
}