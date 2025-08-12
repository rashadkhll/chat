import "./Header.scss";
import { Link } from "react-router";
import { CiChat1 } from "react-icons/ci";
const Header = () => {
  return (
    <div className="app__header">
      <div className="app__header__left">
        <Link to="/">
          <h1>
            <CiChat1 />
            Live Chat
          </h1>
        </Link>
      </div>
      <div className="app__header__right">
        <ul>
          <li>
            <Link to="/features">Features</Link>
          </li>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
          <li>
            <Link to="/resources">Resources</Link>
          </li>
          <li>
            <Link to="/login" id="loginBtn">Sign In</Link>
          </li>
          <li>
            <Link to="/register" id="registerBtn">Sign Up</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
