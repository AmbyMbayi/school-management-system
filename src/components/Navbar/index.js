import React from "react";
import "../../styles/styles.scss";
import logo from "../../assets/logo.png";

export default function Navbar() {
  return (
    <div>
      <div className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="">
              <i className="fa fa-bars"></i>
            </a>
          </li>
          <li className="nav-item">
            <img src={logo} alt="" className="logo" />
            <img src="" alt="" />
          </li>
        </ul>
        <form>
          <input type="text" placeholder="what are you looking for..." />
        </form>
        <ul className="navbar-nav">
          <li>
            <a href="">link one</a>
          </li>
          <li>
            <a href="">link two</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
