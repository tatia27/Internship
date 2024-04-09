import { Link, NavLink } from "react-router-dom";
import email from "./../../../assets/icons/email.svg";
import vk from "./../../../assets/icons/vk.svg";
import "./footerContacts.css";

function FooterContacts() {
  return (
    <div className="footer__right-part">
      <span className="footer__title">Контакты</span>
      <div className="footer__right-part__contacts">
        <p className="footer__text">internship@gmail.com</p>
        <p className="footer__text">+7 (999) 999-99-99</p>
      </div>
      <div className="footer__icons">
        <img src={email} alt="Почта" />
        <img src={vk} alt="Вконтакте" />
      </div>
    </div>
  );
}

export default FooterContacts;