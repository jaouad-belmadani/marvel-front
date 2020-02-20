import React from "react";
import Logo from "../img/Logo.svg.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="logo">
      <img src={Logo} alt="Logo Marvel" />
      <div className="search">
        <input type="search" />
        <button className="button-search">Search</button>
      </div>

      <nav>
        <ul>
          <Link className="link-nav" to="/">
            <li>Characters</li>
          </Link>
          <Link className="link-nav" to="/comics">
            <li>Comics</li>
          </Link>
          <li>Favoris</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
