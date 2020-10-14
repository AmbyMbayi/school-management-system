import React from "react";
import "../../styles/styles.scss";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="sidebar-nav">
        <li className="sidebar-nav-item">
          <a href="" className="sidebar-nav-link active">
            <div>
              <i class="fa fa-tachometer"></i>
            </div>
            <span>Dashboard</span>
          </a>
        </li>
        <li className="sidebar-nav-item">
          <a href="" className="sidebar-nav-link">
            <div>
              <i class="fa fa-tachometer"></i>
            </div>
            <span>Dashboard</span>
          </a>
        </li>
        <li className="sidebar-nav-item">
          <a href="" className="sidebar-nav-link">
            <div>
              <i class="fa fa-tachometer"></i>
            </div>
            <span>Dashboard</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
