import { NavLink } from "react-router-dom";
import FooterContacts from "../footerContacts/footerContacts";
import FooterLogo from "../footerLogo/footerLogo";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__nav">
          <div className="footer__left-part">
            <FooterLogo />
            <div className="footer__menu">
              <ul>
                <li>
                  <NavLink to="/login">Войти</NavLink>
                </li>
                <li>
                  <NavLink to="/internships">Стажировки</NavLink>
                </li>
              </ul>
            </div>
          </div>

          <FooterContacts />
        </div>
        <p className="footer_info">© 2024 Internship portal</p>
      </div>
    </footer>
  );
}

export default Footer;