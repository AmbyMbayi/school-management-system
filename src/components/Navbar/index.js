import React, { useState, useEffect } from "react";

import Logo from "../../assets/logo.png";
import Profile from "../Profile";
import Notification from "../Notification";
import Avatar from "../../assets/profile.jpg";

import "../../styles/styles.scss";

export default function Navbar(props) {
  const [showNotification, setShowNotification] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  function toggleNotification() {
    setShowNotification((showNotification) => !showNotification);
  }
  function toggleProfile() {
    setShowProfile((showProfile) => !showProfile);
  }

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
            <a className="nav-link" onClick={toggleNotification}>
              <i className="fa fa-bell"></i>
              <span className="navbar-badge">15</span>
            </a>
            {showNotification && <Notification />}
          </li>
          <li className="nav-item avt-wrapper">
            <div className="avt dropdown">
              <img src={Avatar} alt="" onClick={toggleProfile} />
              {showProfile && <Profile />}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
