import "./Header.css";
import logoUrl from "../assets/helia-logo.png";

const Header = () => {
  return (
    <div className="Header">
      <h1>
        <img src={logoUrl} alt="helia-logo" className="header-logo" />
      </h1>
    </div>
  );
};

export default Header;
