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
            <li>personnages</li>
          </Link>
          <Link className="link-nav" to="/comics">
            <li>comics</li>
          </Link>
          <li>favoris</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
