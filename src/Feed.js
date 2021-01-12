import { React } from "react";
import "./StyleSheets/feed.css";
import {
  Card,
  CardMedia,
  Typography,
  Avatar,
  CardActionArea,
  IconButton,
  Button,
} from "@material-ui/core";

import BookmarkIcon from "@material-ui/icons/Bookmark";
import PeopleOutlineRoundedIcon from "@material-ui/icons/PeopleOutlineRounded";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import AddIcon from "@material-ui/icons/Add";
import HorizontalSplitIcon from "@material-ui/icons/HorizontalSplit";
import YouTubeIcon from "@material-ui/icons/YouTube";
import PhotoSizeSelectActualOutlinedIcon from "@material-ui/icons/PhotoSizeSelectActualOutlined";
import AssignmentTurnedInOutlinedIcon from "@material-ui/icons/AssignmentTurnedInOutlined";
import DeveloperBoardOutlinedIcon from "@material-ui/icons/DeveloperBoardOutlined";
import ArrowDropDownSharpIcon from "@material-ui/icons/ArrowDropDownSharp";
import Post from "./Post";

function Feed() {
  return (
    <div className="feed">
      <div className="feed__left">
        <Card>
          <div className="feed__leftCardProfile">
            <div>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="55"
                image="https://media-exp1.licdn.com/dms/image/C4D16AQEMT_4qqL7C3w/profile-displaybackgroundimage-shrink_200_800/0/1598512993199?e=1615420800&v=beta&t=i_mxVvZwN-NEpX0KLynbqJKCsmF7_WhDd9BNHQ3WUow"
                title="Contemplative Reptile"
              />
            </div>
            <div>
              <Avatar
                alt="Remy Sharp"
                src="https://material-ui.com/static/images/avatar/1.jpg"
              />
            </div>
          </div>

          <div className="feed__leftCardTitle">
            <Typography gutterBottom component="p">
              Md.Rabiul
            </Typography>
            <div>
              <div className="feed__leftCardDescription">
                <Typography gutterBottom color="textSecondary" component="p">
                  Full Stack Developer
                </Typography>
              </div>
            </div>
          </div>
          <hr />
          <div className="feed__leftCardDetail">
            <div>
              <p className="feed__leftCardDetail__headLine">
                Who viewed your profile
              </p>
            </div>
            <div>
              <p className=" feed__leftCardDetail__numbers ">12</p>
            </div>
          </div>

          <div className="feed__leftCardDetail">
            <div className="shit">
              <p className="feed__leftCardDetail__headLine">
                Views of your post
              </p>
            </div>
            <div>
              <p className="feed__leftCardDetail__numbers">98</p>
            </div>
          </div>
          <hr style={{ marginBottom: "0px", paddingBottom: "none" }} />
          <CardActionArea>
            <div className="feed__leftCardDetail__myItem">
              <p>
                <BookmarkIcon fontSize="small" />
                <span className=" feed__leftCardDetail__myItemObject">
                  My items
                </span>
              </p>
            </div>
          </CardActionArea>
        </Card>

        <Card>
          <div className="feed__leftCommunityCard">
            <div className="feed__leftCommunityCard__recentActivity">
              <h2>Recent</h2>
              <ul>
                <li>
                  <PeopleOutlineRoundedIcon fontSize="inherit" color="action" />{" "}
                  <span>fiber knowledge sharing</span>
                </li>
                <li>
                  <WhatshotIcon fontSize="inherit" color="action" />{" "}
                  <span>Ipwork</span>
                </li>
              </ul>
            </div>

            <div className="feed__leftCommunityCard__groupsActivity">
              <h2>Groups</h2>
              <ul>
                <li>
                  <PeopleOutlineRoundedIcon fontSize="inherit" color="action" />{" "}
                  <span>fiber knowledge sharing</span>
                </li>
                <li>
                  <span style={{ marginLeft: "2vw" }}>See all</span>
                </li>
              </ul>
            </div>
            <div className="feed__leftCommunityCard__events">
              <div className="feed__leftCommunityCard__eventsHeadLine">
                <h6>Events</h6>
              </div>
              <div style={{ marginBottom: "1vw" }}>
                <IconButton size="small">
                  <AddIcon fontSize="small" color="action" />
                </IconButton>
              </div>
            </div>
            <div className="feed__leftCommunityCard__hashtags">
              <div className="feed__leftCommunityCard__hashtags__headLines">
                <div>
                  <span>Followed hashtags</span>
                </div>
                <div id="addIcon">
                  <IconButton size="small">
                    <AddIcon fontSize="inherit" color="action" />
                  </IconButton>
                </div>
              </div>
              <ul>
                <li>
                  <PeopleOutlineRoundedIcon fontSize="inherit" color="action" />{" "}
                  <span>fiber knowledge sharing</span>
                </li>
                <li>
                  <HorizontalSplitIcon fontSize="inherit" color="action" />{" "}
                  <span>fiverr</span>
                </li>
                <li>
                  <span style={{ marginLeft: "2vw" }}>See all</span>
                </li>
              </ul>
            </div>
            <CardActionArea
              style={{ paddingBottom: "1vh", borderTop: "1px solid lightgrey" }}
            >
              <small
                style={{
                  color: "#363636",
                  fontSize: "12px",
                  fontWeight: "600",
                }}
              >
                iscover More
              </small>
            </CardActionArea>
          </div>
        </Card>
      </div>

      <div className="feed__center">
        <div className="feed__center__postBox">
          <div>
            <Post />
          </div>
          <div className="feed__center__postBox__options">
            <div>
              <Button
                variant="text"
                color="default"
                size="small"
                startIcon={
                  <PhotoSizeSelectActualOutlinedIcon
                    htmlColor="#2196f3"
                    fontSize="small"
                  />
                }
              >
                Photo
              </Button>
            </div>
            <div>
              <Button
                variant="text"
                color="default"
                startIcon={<YouTubeIcon htmlColor="#e7a33e" fontSize="small" />}
              >
                Video
              </Button>
            </div>
            <div>
              <Button
                variant="text"
                color="default"
                startIcon={
                  <AssignmentTurnedInOutlinedIcon
                    htmlColor="#cfa2cd"
                    fontSize="small"
                  />
                }
              >
                Goal
              </Button>
            </div>
            <div>
              <Button
                variant="text"
                color="default"
                startIcon={
                  <DeveloperBoardOutlinedIcon
                    htmlColor="#f6987e"
                    fontSize="small"
                  />
                }
              >
                Write article
              </Button>
            </div>
          </div>
        </div>
        <div className="feed__postListOrderByTrigger">
          <hr style={{ width: "75%" }} />
          <small>
            ShortBy<b>: Top</b>
            <ArrowDropDownSharpIcon fontSize="small" htmlColor="Black" />
          </small>
        </div>
      </div>

      <div className="feed__right">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.Vero fuga
          xercitationem sequi blanditiis perferendis, eaque iusto quos illum
          orro assumenda, aut nobis.Adipisci vitae incidunt quos blanditiis,
          vero dicta corrupti.
        </p>
      </div>
    </div>
  );
}

export default Feed;
