import { Link } from "react-router-dom";

export default function ReserveTableButton() {
  return (
    <>
      <Link to={`/reservations`}>
        <button className="reserveTableButton">Reserve a Table</button>
      </Link>
    </>
  )
}