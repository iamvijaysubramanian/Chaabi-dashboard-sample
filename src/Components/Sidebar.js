import React from "react";
import logo from "../Assets/logo.png";
import "../Styles/Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <img src={logo} alt="logo" />
      <ul>
        <li>
          <img
            src="../Assets/SidebarIcon/Category.png"
            alt=""
            className="sidebar-icon"
          />
          Dashboard
        </li>
        <li>
          <img
            src="../Assets/SidebarIcon/Game.png"
            alt=""
            className="sidebar-icon"
          />
          Trainings
        </li>
        <li>
          <img
            src="../Assets/SidebarIcon/Ticket Star.png"
            alt=""
            className="sidebar-icon"
          />
          Users
        </li>
        <li>
          <img
            src="../Assets/SidebarIcon/Location.png"
            alt=""
            className="sidebar-icon"
          />
          Analytics
        </li>
        <li>
          <img
            src="../Assets/SidebarIcon/Location.png"
            alt=""
            className="sidebar-icon"
          />
          My account
        </li>
        <li>
          <img
            src="../Assets/SidebarIcon/Location.png"
            alt=""
            className="sidebar-icon"
          />
          Support
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
