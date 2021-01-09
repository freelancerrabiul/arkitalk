import React from "react";
import "./StyleSheets/feed.css";
import {
  Card,
  CardMedia,
  Typography,
  Avatar,
  CardActionArea,
  IconButton,
} from "@material-ui/core";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import PeopleOutlineRoundedIcon from "@material-ui/icons/PeopleOutlineRounded";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import AddIcon from "@material-ui/icons/Add";
import HorizontalSplitIcon from "@material-ui/icons/HorizontalSplit";

const Feed = () => {
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
              Md. Rabiul
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
                <IconButton small="true">
                  <AddIcon fontSize="small" color="action" />
                </IconButton>
              </div>
            </div>
            <div className="feed__leftCommunityCard__hashtags">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  textAlign: "left",
                }}
              >
                <div>
                  <h2 style={{fontSize:"12px"}}>Followed hashtags</h2>
                </div>
                <div>
                  <AddIcon fontSize="small" color="action" />
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
          </div>
        </Card>
      </div>

      <div className="feed__center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero fuga
        exercitationem sequi blanditiis perferendis, eaque iusto quos illum
        porro assumenda, aut nobis. Adipisci vitae incidunt quos blanditiis,
        vero dicta corrupti.
      </div>

      <div className="feed__right">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero fuga
          exercitationem sequi blanditiis perferendis, eaque iusto quos illum
          porro assumenda, aut nobis. Adipisci vitae incidunt quos blanditiis,
          vero dicta corrupti.
        </p>
      </div>
    </div>
  );
};

export default Feed;
