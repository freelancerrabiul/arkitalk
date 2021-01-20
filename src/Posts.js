import React from "react";
import ShowMoreText from "react-show-more-text";
import "./StyleSheets/Posts.css";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { Button } from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";
import AddCommentIcon from "@material-ui/icons/AddComment";

function Posts() {
  const executeOnClick = (isExpanded) => {};

  return (
    <div className="posts">
      <div className="card text-left">
        <div className="card-header">
          <div className="d-flex">
            <div className="m-0 p-0">
              <img
                style={{ width: "49px", objectFit: "contain" }}
                className="img-fluid rounded-circle"
                src="https://media-exp1.licdn.com/dms/image/C5603AQHUn5fTuUibIA/profile-displayphoto-shrink_100_100/0/1582719381976?e=1616630400&v=beta&t=KHW8cMMK6H8ZG6PYRsaqKXVr3I130N6E9YbDMTjzUi8"
                alt="per"
              />
            </div>
            <div className="pl-1">
              <div>
                <span>
                  <b>Md.Rabiul</b>
                </span>
              </div>
              <div className="bg-light m-0 p-0">
                <span
                  className="bg-light m-0 p-0"
                  style={{ fontSize: "small" }}
                >
                  Program Coordinator at AdvantEdge Solutions Ltd.
                </span>
              </div>
            </div>
          </div>
          <div>
            <ShowMoreText
              lines={3}
              more="Show more"
              less="Show less"
              className="content-css"
              anchorClass="my-anchor-css-class"
              onClick={executeOnClick}
              expanded={false}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
              facilis suscipit ex, dignissimos nobis pariatur? Est nostrum quia,
              placeat a, perspiciatis possimus laboriosam molestias illo odit
              dicta aliquid consequatur assumenda!
            </ShowMoreText>
          </div>
        </div>
        <div className="card-body p-0">
          <img
            className="img-fluid"
            src="https://media-exp1.licdn.com/dms/image/sync/C4E27AQEeH8uRSO_xkQ/articleshare-shrink_800/0/1611067041628?e=1611201600&v=beta&t=gIAX0rXzr4CbVjuds99IS1EcQiu0Na47UHRvDAtC-pw"
            alt="port"
          />
        </div>
        <div className="card-footer">
          <div className="posts__socialActionBar d-flex ">
            <Button
              className="ml-2"
              startIcon={
                <ThumbUpAltIcon htmlColor="green" fontSize="inherit" />
              }
            >
              <span>111</span>
            </Button>
            <Button
              className="ml-2"
              variant="outlined"
              startIcon={
                <ThumbDownAltIcon fontSize="inherit" htmlColor="red" />
              }
            >
              <span>204</span>
            </Button>
            <Button
              className="ml-2"
              variant="outlined"
              startIcon={<AddCommentIcon fontSize="inherit" />}
            >
              <span>125</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
