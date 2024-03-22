import "./Footer.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__address">
        <div className="footer__address-title">address</div>
        <div className="footer__address-text">503 Parkway Green</div>
        <div className="footer__address-city">London</div>
      </div>
      <div className="footer__hours">
        <div className="footer__hours-title">hours</div>
        <div className="footer__hours-text">
          <span className="footer__hours-day">Monday-Friday: </span> 9am - 7pm
        </div>
        <div className="footer__hours-text">
          <span className="footer__hours-day">Saturday-Sunday: </span> 10am -
          5pm
        </div>
      </div>
      <div className="footer__social">
        <div className="footer__social-title">social</div>
        <div className="footer__social-icon"></div>
      </div>
    </div>
  );
}

export default Footer;
