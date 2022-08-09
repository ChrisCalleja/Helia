import "./Header.css";
import logoUrl from "../assets/helia-logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="Header">
      <h1>
        <Link to="/">
          <img src={logoUrl} alt="helia-logo" className="header-logo" />
        </Link>
      </h1>
    </div>
  );
};
export default Header;
