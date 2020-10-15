import React from "react";

export default function Profile() {
  return (
    <ul className="dropdown-menu">
      <li className="dropdown-menu-item">
        <a className="dropdown-menu-link">
          <div>
            <i class="fa fa-user-circle-o"></i>
          </div>
          <span>Profile</span>
        </a>
      </li>
      <li className="dropdown-menu-item">
        <a className="dropdown-menu-link">
          <div>
            <i class="fa fa-sign-out"></i>
          </div>
          <span>logout</span>
        </a>
      </li>
    </ul>
  );
}
