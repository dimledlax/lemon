import MenuCard from "../cards/MenuCard";
import { useMenu } from "../context/MenuContext"

export default function HomePage() {
  const { menu } = useMenu()

  return (
    <>
      <div className="highlights">
        <div className="menuPageContainer">
          <div className="menuTitle">
            <h1>Menu</h1>
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
    </>
  )
}