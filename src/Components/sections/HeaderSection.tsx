import Nav from "./Nav"
import Logo from "../../assets/Logo.jpg"
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="headerContainer">
        <Link to={`/`}>
          <img src={Logo} alt="Logo" width="190px"/>
        </Link>
        <Nav />
      </div>
    </header>
  );
}