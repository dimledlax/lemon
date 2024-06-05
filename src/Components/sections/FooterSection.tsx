import LogoGreen from "../../assets/Logo_green.png"
import Instagram from "../../assets/instagram.png"
import YouTube from "../../assets/youtube.png"
import Facebook from "../../assets/facebook.png"
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer>
      <div className="footerContainer">
        <div className="footerLeft">
          <div className="footerLogo">
            <img src={LogoGreen} alt="Logo"/>
          </div>
        </div>
        <div className="footerRight">
          <div className="footerNav">
            <h4>Navigation</h4>
            <ul>
              <li><Link to={`/`}>Home</Link></li>
              <li><Link to={`/menu`}>Menu</Link></li>
              <li><Link to={`/reservations`}>Reservations</Link></li>
              <li><Link to={`/menu`}>Order Online</Link></li>
              <li><Link to={`/about`}>About</Link></li>
            </ul>
            </div>
          <div className="footerContacts">
            <h4>Contacts</h4>
            <p>Address: 123 Main Street, Mediterranean Plaza, Seaside Heights, CA 90210 <br/>Tel. (555) 123-4567
            </p>
          </div>
          <div className="footerSocial">
            <h4>Social Media Links</h4>
              <div>
                <a href="https://www.instagram.com/" target="_blank"><img src={Instagram} alt="Instagram" /></a>
                <a href="https://www.facebook.com/" target="_blank"><img src={Facebook} alt="Facebook" /></a>
                <a href="https://www.youtube.com/" target="_blank"><img src={YouTube} alt="YouTube" /></a>
              </div>
            </div>
        </div>
      </div>
    </footer>
  )
}