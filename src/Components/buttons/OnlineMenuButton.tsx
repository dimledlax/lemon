import { Link } from "react-router-dom";

export default function OnlineMenuButton() {
  return (
    <>
      <Link to={`/menu`}>
        <button className="onlineMenuButton">Online Menu</button>
      </Link>
    </>
  )
}