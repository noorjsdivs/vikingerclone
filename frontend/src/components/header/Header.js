import React from "react";
import ReorderIcon from "@mui/icons-material/Reorder";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "./header.css";
import { logo } from "../../assets";

const Header = () => {
  return (
    <header>
      {/*================ Left part start here ====================*/}
      <div className="left">
        <img src={logo} alt="logo" />
        <h4>MERNIAN</h4>
      </div>
      {/*================ Left part end here ====================*/}
      {/*================ Middle part start here ====================*/}
      <div className="middle">
        <div className="list">
          <ul>
            <li>
              <ReorderIcon />
            </li>
            <li>Careers</li>
            <li>Store</li>
            <li>FAQ</li>
            <li>
              <MoreHorizIcon />
            </li>
          </ul>
        </div>
        <div className="search">
          <input type="text" placeholder="Search here ..." />
          <div className="icon">
            <SearchIcon />
          </div>
        </div>
        {/*================ Middle part end here ====================*/}
      </div>
      {/*================ Right part start here ====================*/}
      <div className="right">
        <div className="left">
          <div className="text">
            <p>Next</p>
            <p>35 EXP</p>
          </div>
          <div className="line">
            <div className="line2"></div>
          </div>
        </div>
        <div className="middle">
          <div className="icons">
            <ShoppingCartIcon />
            <ChatIcon />
            <NotificationsIcon />
          </div>
        </div>
        <div className="right"></div>
      </div>
      {/*================ Right part end here ====================*/}
    </header>
  );
};

export default Header;
