import { MenuCardProps } from "../../models"


export default function MenuCard({ name, image, price, description }: MenuCardProps) {
  return (
    <div className="menuItemContainer">
      {image}
      <div className="menuItemDescription">
        <div className="menuTitle">
          <h4>{name}</h4>
          <span>{price}</span>
        </div>
        <p>{description}</p>
        <h4>Order delivery 🛵</h4>
      </div>

    </div>
  )
}