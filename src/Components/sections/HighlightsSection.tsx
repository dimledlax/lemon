import OnlineMenuButton from "../buttons/OnlineMenuButton"
import MenuCard from "../../components/cards/MenuCard"
import { useMenu } from "../context/MenuContext"


export default function HighlightsSection() {
  const { menu } = useMenu()

  return (
    <div className="highlights">
      <div className="highlightsContainer">
        <div className="highlightsTitle">
          <h1>This weeks specials!</h1>
          <OnlineMenuButton />
        </div>
        <div className="highlightsItems">
          {
            menu.map((item) => (
              <MenuCard key={item.id} {...item}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}