import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <div className="nav__logo">
        <Link to="/" className="nav__logo-link">
          <h3 className="nav__logo-text">the bakery.</h3>
        </Link>
      </div>
      <ul className="nav__list">
        <li className="nav__list-item">about</li>
        <li className="nav__list-item">menu</li>
        <li className="nav__list-item">shop now</li>
      </ul>
    </nav>
  );
};

export default Header;
