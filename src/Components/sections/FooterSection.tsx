import LogoGreen from "../../assets/Logo_green.png"
import Instagram from "../../assets/instagram.png"
import YouTube from "../../assets/youtube.png"
import Facebook from "../../assets/facebook.png"

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
              <li><a href="#">Home</a></li>
              <li><a href="#">Menu</a></li>
              <li><a href="#">Reservations</a></li>
              <li><a href="#">Order Online</a></li>
              <li><a href="#">Login</a></li>
              <li><a href="#">About</a></li>
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
                <img src={Instagram} alt="Instagram" />
                <img src={Facebook} alt="Facebook" />
                <img src={YouTube} alt="YouTube" />
              </div>
            </div>
        </div>
      </div>
    </footer>
  )
}