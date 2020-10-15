import React from "react";

export default function Notification() {
  return (
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              aut facere expedita atque ex laudantium alias nesciunt, similique
              ab ea molestiae ratione id consectetur cumque facilis nemo. Natus,
              quibusdam vel. <br />
              <span>15/07/2020</span>
            </span>
          </a>
        </li>
      </div>
      <div className="dropdown-menu-footer">
        <span>View all notification</span>
      </div>
    </ul>
  );
}
