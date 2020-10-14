import React from "react";
import "../../styles/styles.scss";
import Logo from "../../assets/logo.png";
import Profile from "../../assets/profile.jpg";

export default function Navbar() {
  return (
    <div>
      <div className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link">
              <i className="fa fa-bars"></i>
            </a>
          </li>
          <li className="nav-item">
            <img src={Logo} alt="" className="logo" />
            <img src="" alt="" />
          </li>
        </ul>
        <form className="navbar-search">
          <input
            type="text"
            placeholder="what are you looking for..."
            className="navbar-search-input"
          />
          <i className="fa fa-search"></i>
        </form>
        <ul className="navbar-nav nav-right">
          <li className="nav-item dropdown">
            <a className="nav-link">
              <i className="fa fa-bell"></i>
              <span className="navbar-badge">15</span>
            </a>
            <ul className="dropdown-menu notification-menu">
              <div className="dropdown-menu-header">
                <span>Notification</span>
              </div>
              <div className="dropdown-menu-content">
                <li className="dropdown-menu-item">
                  <a href="" className="dropdown-menu-link">
                    <div>
                      <i className="fa fa-gift"></i>
                    </div>
                    <span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptate aut facere expedita atque ex laudantium alias
                      nesciunt, similique ab ea molestiae ratione id consectetur
                      cumque facilis nemo. Natus, quibusdam vel. <br />
                      <span>15/07/2020</span>
                    </span>
                  </a>
                </li>
              </div>
              <div className="dropdown-menu-footer">
                <span>View all notification</span>
              </div>
            </ul>
          </li>
          <li className="nav-item avt-wrapper">
            <div className="avt dropdown">
              <img src={Profile} alt="" />
              <ul className="dropdown-menu">
                <li className="dropdown-menu-item">
                  <a className="dropdown-menu-link">
                    <div>
                      <i className="fa fa-user"></i>
                    </div>
                    <span>Profile</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
