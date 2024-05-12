import Nav from "./Nav"
import Logo from "../images/Logo.svg"

export default function Header() {
  return (
    <header>
      <div className="headerContainer">
      <img src={Logo} alt="Logo" width="190px"/>
      <Nav />
      </div>

    </header>
  );
}