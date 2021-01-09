import { React, useState } from "react";
import Logo from "./Logo.svg";
import { Link } from "react-router-dom";
import "./StyleSheets/NavBar.css";

// meterial ui Icons
import SearchIcon from "@material-ui/icons/Search";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import PeopleRoundedIcon from "@material-ui/icons/PeopleRounded";
import ExploreRoundedIcon from "@material-ui/icons/ExploreRounded";
import SmsRoundedIcon from "@material-ui/icons/SmsRounded";
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';
import MenuIcon from "@material-ui/icons/Menu";
import { Badge } from "@material-ui/core";

// reactsrap
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
} from "reactstrap";

function Navbar() {
  const [showProfile, setShowProfile] = useState(false);

  const toggle = () => setShowProfile((prevState) => !prevState);
  return (
    <div className="navBar">
      <div className="navBar__left">
        <img src={Logo} alt="logo" />

        {/* onLy visible in small displays */}
        <div className="navBar__leftMenuResponsiveDiv">
          <UncontrolledDropdown>
            <DropdownToggle
              className="navBar__leftMenuResponsiveDiv"
              color="black"
            >
              <MenuIcon color="primary" />
            </DropdownToggle>
            <DropdownMenu>
              <Link to="/feed">
                <DropdownItem>Home</DropdownItem>
              </Link>

              <Link to="/mynetwork">
                <DropdownItem>My Network</DropdownItem>
              </Link>

              <Link to="/messaging">
                <DropdownItem>Messaging</DropdownItem>
                <DropdownItem divider />
              </Link>

              <Link to="/notification">
                <DropdownItem>Notification</DropdownItem>
              </Link>

              <Link to="/explore">
                <DropdownItem>Explore</DropdownItem>
              </Link>

              <Link to="/login">
                <DropdownItem>Login</DropdownItem>
              </Link>

              <DropdownItem>Log Out</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
        {/* onLy visible in small displays */}

        <div className="navBar__leftItems">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="navBar__right">
        <div className="navBar__rightItem">
          <Link to="/feed">
            <HomeRoundedIcon />
          </Link>
        </div>

        <div className="navBar__rightItem">
          <Link to="/mynetwork">
            <PeopleRoundedIcon />
          </Link>
        </div>

        <div className="navBar__rightItem">
          <Link to="/explore">
            <ExploreRoundedIcon />
          </Link>
        </div>

        <div className="navBar__rightItem">
          <Link to="/messaging">
            <SmsRoundedIcon />
          </Link>
        </div>
        <div className="navBar__rightItem">
          <Link to="/notification">
            <Badge
              badgeContent={4}
              color="error"
            >
              <NotificationsRoundedIcon />
            </Badge>
          </Link>
        </div>
        <div>
          <Dropdown isOpen={showProfile} toggle={toggle}>
            <DropdownToggle
              tag="span"
              data-toggle="dropdown"
              aria-expanded={showProfile}
            >
              <div className="navBar__rightUserAvatar">
                <img
                  src="https://tbsnews.net/sites/default/files/styles/big_3/public/images/2020/04/18/markruffalo.jpg?itok=kIhgmTrr"
                  alt=""
                />
              </div>
            </DropdownToggle>
            <DropdownMenu className="dropDownMenuDiv" right>
              <div style={{ marginTop: "2vh" }}>
                <DropdownItem onClick={toggle}> dropdown item</DropdownItem>
                <DropdownItem onClick={toggle}> dropdown item</DropdownItem>
                <DropdownItem onClick={toggle}> dropdown item</DropdownItem>
                <DropdownItem onClick={toggle}> dropdown item</DropdownItem>
              </div>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
