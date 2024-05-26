import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
    <ul>
      <li><Link to={`/`}>Home</Link></li>
      <li><Link to={`/menu`}>Menu</Link></li>
      <li><Link to={`/reservations`}>Reservations</Link></li>
      <li><Link to={`/menu`}>Order Online</Link></li>
      <li><a href="#">Login</a></li>
      <li><Link to={`/about`}>About</Link></li>
    </ul>
  </nav>
  )
}