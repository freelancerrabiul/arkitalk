import React from "react";
import "./Style.css";

import Logo from "./Logo.svg";

// meterial ui Icons
import SearchIcon from "@material-ui/icons/Search";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import PeopleRoundedIcon from "@material-ui/icons/PeopleRounded";
import LocalMallRoundedIcon from "@material-ui/icons/LocalMallRounded";
import ChatRoundedIcon from "@material-ui/icons/ChatRounded";
import NotificationsActiveRoundedIcon from "@material-ui/icons/NotificationsActiveRounded";

function Navbar() {
  return (
    <div className="navBar">
      <div className="navBar__left">
        <img src={Logo} alt="logo" />
        <div className="navBar__leftItems">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="navBar__right">
        <div className="navBar__rightItem">
          <HomeRoundedIcon />
        </div>

        <div className="navBar__rightItem">
          <PeopleRoundedIcon />
        </div>

        <div className="navBar__rightItem">
          <LocalMallRoundedIcon />
        </div>

        <div className="navBar__rightItem">
          <HomeRoundedIcon />
        </div>

        <div className="navBar__rightItem">
          <ChatRoundedIcon />
        </div>
        <div className="navBar__rightItem">
          <NotificationsActiveRoundedIcon />
        </div>

        <div className="navBar__rightUserAvatar">
          <img
            src="https://tbsnews.net/sites/default/files/styles/big_3/public/images/2020/04/18/markruffalo.jpg?itok=kIhgmTrr"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
