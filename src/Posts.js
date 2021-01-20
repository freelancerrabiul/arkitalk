import React from "react";
import ShowMoreText from "react-show-more-text";
import "./StyleSheets/Posts.css";
import { Button, IconButton } from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";
import AddCommentIcon from "@material-ui/icons/AddComment";
import SentimentSatisfiedIcon from "@material-ui/icons/SentimentSatisfied";
import PanoramaIcon from "@material-ui/icons/Panorama";

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
        <div className="card-footer pl-0 pr-0">
          <div className="posts__socialActionBar">
            <Button
              variant="outlined"
              className="ml-2"
              startIcon={
                <ThumbUpAltIcon
                  variant="contained"
                  htmlColor="green"
                  fontSize="inherit"
                />
              }
            >
              <span className="posts__likeCounter">111</span>
            </Button>
            <Button
              variant="outlined"
              className="ml-2"
              startIcon={
                <ThumbDownAltIcon
                  variant="contained"
                  fontSize="inherit"
                  htmlColor="red"
                />
              }
            >
              <span className="posts__disLikeCounter">204</span>
            </Button>

            <Button
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
              variant="outlined"
              className="ml-2"
              startIcon={<AddCommentIcon fontSize="inherit" />}
            >
              <span className="posts__commentCounter">125</span>
            </Button>
          </div>

          <div className="collapse" id="collapseExample">
            <div style={{ display: "flex" }}>
              <div>
                <img
                  className=" img-fluid rounded-circle mt-2 mr-1 ml-1"
                  style={{ width: "3.252125vw", objectFit: "contain" }}
                  src="
                https://media-exp1.licdn.com/dms/image/C5603AQHUn5fTuUibIA/profile-displayphoto-shrink_100_100/0/1582719381976?e=1616630400&v=beta&t=KHW8cMMK6H8ZG6PYRsaqKXVr3I130N6E9YbDMTjzUi8                    
                    "
                  alt="cap"
                />
              </div>
              <div className="posts__commentWritingDiv ml-1 pl-2 mr-1">
                <div>
                  <textarea
                    style={{ resize: "none" }}
                    cols="40"
                    rows="1"
                    className="p-1 mt-1 border-0"
                    type="text"
                    placeholder="Add a comment"
                  ></textarea>
                </div>
                <div>
                  <IconButton>
                    <SentimentSatisfiedIcon fontSize="small" />
                  </IconButton>
                  <IconButton>
                    <PanoramaIcon fontSize="small" />
                  </IconButton>
                </div>
              </div>
            </div>
            <div className="card card-body p-1 d-flex">
              <div className="d-flex">
                <div style={{ width: "3.90625vw", objectFit: "contain" }}>
                  <img
                    className="img-fluid rounded-circle"
                    src="
                    https://media-exp1.licdn.com/dms/image/C5603AQHUn5fTuUibIA/profile-displayphoto-shrink_100_100/0/1582719381976?e=1616630400&v=beta&t=KHW8cMMK6H8ZG6PYRsaqKXVr3I130N6E9YbDMTjzUi8                    
                    "
                    alt="cap"
                  />
                </div>
                <div className="d-flex flex-column pl-1">
                  <small
                    className="text-dark"
                    style={{ fontSize: "12px", fontWeight: "bold" }}
                  >
                    Amr Ala
                  </small>

                  <small
                    style={{
                      fontSize: "12px",
                      fontWeight: "400",
                      color: "#0009",
                    }}
                  >
                    Data analyst | python automation expert
                  </small>
                  <div>
                    <p style={{ fontSize: "14px", fontWeight: "400" }}>
                      Well done, Amr! Keep up the great work.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
