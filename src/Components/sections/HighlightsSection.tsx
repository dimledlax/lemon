import OnlineMenuButton from "../buttons/OnlineMenuButton"
import greekSaladImage from "../../assets/greek_salad.jpg"
import bruchettaImage from "../../assets/bruchetta.svg"
import lemonDessertImage from "../../assets/lemon_dessert.jpg"
import MenuCard from "../../components/cards/MenuCard"


export default function HighlightsSection() {
    const menuItem1 = {
      name: 'Greeek Salad',
      image: <img src={greekSaladImage} alt="greek salad" className="menuImage"/>,
      price: '$ 12.99',
      description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    }
    const menuItem2 = {
      name: 'Bruchetta',
      image: <img src={bruchettaImage} alt="bruchetta" className="menuImage"/>,
      price: '$ 5.99',
      description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
    }
    const menuItem3 = {
      name: 'Lemon Dessert',
      image: <img src={lemonDessertImage} alt="lemon dessert" className="menuImage"/>,
      price: '$ 5.00',
      description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    }

  return (
    <div className="highlights">
      <div className="highlightsContainer">
        <div className="highlightsTitle">
          <h1>This weeks specials!</h1>
          <OnlineMenuButton />
        </div>
        <div className="highlightsItems">
          <MenuCard {...menuItem1}/>
          <MenuCard {...menuItem2}/>
          <MenuCard {...menuItem3}/>
        </div>
      </div>
    </div>
  )
}