import { React, useState } from "react";
import "./Style.css";
import Logo from "./Logo.svg";

// meterial ui Icons
import SearchIcon from "@material-ui/icons/Search";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import PeopleRoundedIcon from "@material-ui/icons/PeopleRounded";
import LocalMallRoundedIcon from "@material-ui/icons/LocalMallRounded";
import ChatRoundedIcon from "@material-ui/icons/ChatRounded";
import NotificationsActiveRoundedIcon from "@material-ui/icons/NotificationsActiveRounded";
import MenuIcon from "@material-ui/icons/Menu";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";

import {
  FormControlLabel,
  FormGroup,
  IconButton,
  Switch,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  withStyles,
  Link,
} from "@material-ui/core";

function Navbar() {
  const [auth, setAuth] = useState(true);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const [menuList, setMenuList] = useState(null);
  const StyledMenu = withStyles({
    paper: {
      border: "1px solid #d3d4d5",
    },
  })((props) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      {...props}
    />
  ));
  const StyledMenuItem = withStyles((theme) => ({
    root: {
      "&:focus": {
        backgroundColor: theme.palette.primary.main,

        "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
          color: theme.palette.common.white,
        },
      },
    },
  }))(MenuItem);
  return (
    <div className="navBar">
      <div className="navBar__left">
        <img src={Logo} alt="logo" />

        {/* onLy visible in small displays */}
        <div className="navBar__leftMenuIcon">
          <IconButton
            onClick={(e) => {
              setMenuList(e.currentTarget);
            }}
            edge="start"
            color="primary"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <StyledMenu
            id="simple-menu"
            menuList={menuList}
            keepMounted
            open={Boolean(menuList)}
            onClose={() => {
              setMenuList(null);
            }}
          >
            <StyledMenuItem>
              <ListItemIcon>
                <HomeRoundedIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </StyledMenuItem>

            <StyledMenuItem>
              <ListItemIcon>
                <SearchRoundedIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Search" />
            </StyledMenuItem>

            <StyledMenuItem>
              <ListItemIcon>
                <PeopleRoundedIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="People" />
            </StyledMenuItem>

            <StyledMenuItem>
              <ListItemIcon>
                <LocalMallRoundedIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Explore" />
            </StyledMenuItem>

            <StyledMenuItem>
              <ListItemIcon>
                <ChatRoundedIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Chat" />
            </StyledMenuItem>

            <StyledMenuItem>
              <ListItemIcon>
                <NotificationsActiveRoundedIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Notification" />
            </StyledMenuItem>
          </StyledMenu>
        </div>
        {/* onLy visible in small displays */}
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
          <ChatRoundedIcon />
        </div>
        <div className="navBar__rightItem">
          <NotificationsActiveRoundedIcon />
        </div>
        {auth && (
          <div className="navBar__rightUserAvatar">
            <img
              src="https://tbsnews.net/sites/default/files/styles/big_3/public/images/2020/04/18/markruffalo.jpg?itok=kIhgmTrr"
              alt=""
            />
          </div>
        )}
        <div>
          <FormGroup>
            <FormControlLabel
              labelPlacement="start"
              control={
                <Switch
                  size="small"
                  checked={auth}
                  onChange={handleChange}
                  aria-label="login switch"
                />
              }
              label={
                auth ? (
                  <small style={{ fontWeight: "bold" }}>Logout</small>
                ) : (
                  <Link href="/signin">
                    <small style={{ fontWeight: "bold" }}>Sign in</small>
                  </Link>
                )
              }
            />
          </FormGroup>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
