import React from "react";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import styled from "styled-components";
import TortasAdmin from "../../images/tortaslogo.svg";

const AdminNavbar = () => {
  return (
    <NavbarContainer>
      <div className="topbar">
        <div className="topbarWrapper">
          <div className="topLeft">
            <span className="logo">TortasAdmin</span>
          </div>
          <div className="topRight">
            <div className="topbarIconContainer">
              <NotificationsNone />
              <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
              <Language />
              <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
              <Settings />
            </div>
            <img src={TortasAdmin} alt="" className="topAvatar" />
          </div>
        </div>
      </div>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.div`
  .topbar {
    width: 100%;
    height: 50px;
    background-color: white;
    position: sticky;
    top: 0;
    z-index: 999;
  }

  .topbarWrapper {
    height: 100%;
    padding: 0px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    font-weight: bold;
    font-size: 30px;
    color: darkblue;
    cursor: pointer;
  }

  .topRight {
    display: flex;
    align-items: center;
  }

  .topbarIconContainer {
    position: relative;
    cursor: pointer;
    margin-right: 10px;
    color: #555;
  }

  .topIconBadge {
    width: 15px;
    height: 15px;
    position: absolute;
    top: -5px;
    right: 0px;
    background-color: red;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
  }

  .topAvatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
  }
`;

export default AdminNavbar;
