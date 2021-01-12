import React from "react";
import "./StyleSheets/Post.css";
import RateReviewOutlinedIcon from "@material-ui/icons/RateReviewOutlined";
import CloseIcon from "@material-ui/icons/Close";
import { Button, Chip, IconButton } from "@material-ui/core";
import PublicIcon from "@material-ui/icons/Public";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AddSharpIcon from "@material-ui/icons/AddSharp";

import PanoramaOutlinedIcon from "@material-ui/icons/PanoramaOutlined";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import SpeakerNotesIcon from "@material-ui/icons/SpeakerNotes";

function Post() {
  return (
    <div className="post">
      <div className="post__modalDialogOpenSwitch">
        <Button
          type="button"
          disableFocusRipple={true}
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          <RateReviewOutlinedIcon
            style={{ marginRight: "0.8vw", marginLeft: "1vw" }}
            fontSize="small"
          />
          <input
            className="post__modalDialogOpenSwitch--input"
            readOnly={true}
            placeholder="Start a post"
          />
        </Button>
      </div>
      <div
        className="modal"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Create a post
              </h5>
              <IconButton
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                size="small"
              >
                <CloseIcon fontSize="medium" />
              </IconButton>
            </div>
            <div className="modal-body">
              <div
                style={{
                  display: "flex",
                  justifyContent: "left",
                  alignItems: "center",
                  alignContent: "center",
                  padding: "1rem",
                }}
              >
                <div>
                  <img
                    style={{
                      borderRadius: "50%",
                      width: "50px",
                      height: "50px",
                    }}
                    src="https://media-exp1.licdn.com/dms/image/C4D35AQHu1ZmOBcqo-Q/profile-framedphoto-shrink_100_100/0/1598427490730?e=1610528400&v=beta&t=UN_h4E2-Cel393_80s6-P45JlgFDmMXgkcuUf8l3HBQ"
                    alt="R"
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "left",
                    paddingLeft: "0.8vw",
                  }}
                >
                  <div>
                    <h6>Md. Rabiul</h6>
                  </div>
                  <div>
                    <Chip
                      icon={<PublicIcon />}
                      label="Anyone"
                      clickable
                      onDelete={() => console.log("hello")}
                      deleteIcon={<ArrowDropDownIcon />}
                      variant="outlined"
                    />
                  </div>
                </div>
              </div>
              <div
                style={{
                  alignItems: "left",
                  alignContent: "left",
                  textAlign: "left",
                  paddingTop: "2vh",
                  paddingLeft: "1rem",
                  paddingRight: "1rem",
                }}
              >
                <textarea
                  style={{ border: "none", resize: "none" }}
                  cols="60"
                  rows="6"
                  placeholder="What do you want to talk about?"
                ></textarea>
                <div
                  style={{
                    display: "flex",
                    alignContent: "center",
                    alignItems: "left",
                    textAlign: "center",
                  }}
                >
                  <div>
                    <Button color="primary" style={{ textTransform: "none" }}>
                      <strong> Add hashtag </strong>
                    </Button>
                  </div>
                  <div style={{ display: "none" }}>
                    <Button color="primary" style={{ textTransform: "none" }}>
                      <strong> Its hidden  </strong>
                    </Button>
                  </div>
                </div>

                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div
                    style={{
                      display: "flex",
                      flex: "0.4",
                      justifyContent: "left",
                    }}
                  >
                    <div>
                      <IconButton aria-label="delete" color="primary">
                        <AddSharpIcon />
                      </IconButton>
                    </div>
                    <div>
                      <IconButton aria-label="delete">
                        <PanoramaOutlinedIcon />
                      </IconButton>
                    </div>
                    <div>
                      <IconButton aria-label="add an alarm">
                        <YouTubeIcon />
                      </IconButton>
                    </div>
                    <div>
                      <IconButton aria-label="add to shopping cart">
                        <InsertDriveFileIcon />
                      </IconButton>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flex: "0.5",
                      justifyContent: "space-between",
                      alignItems: "center",
                      textAlign: "center",
                      alignContent: "center",
                    }}
                  >
                    <div>
                      <Button
                        variant="text"
                        color="inherit"
                        size="small"
                        startIcon={<SpeakerNotesIcon />}
                        style={{ textTransform: "none" }}
                      >
                        Anyone
                      </Button>
                    </div>

                    <div>
                      <button className="post__submit">Post</button>
                    </div>
                  </div>
                </div>
              </div>

              <div
                style={{
                  backgroundColor: "#f3f2ee",
                  width: "100%",
                  paddingTop: "3vh",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <div className="post__optionalword">
                    <p>Celebrete an occation</p>
                  </div>
                  <div className="post__optionalword">
                    <p>Sure that you are hiring</p>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <div className="post__optionalword">
                    <p>Share a goal</p>
                  </div>
                  <div className="post__optionalword">
                    <p>Offer help</p>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <div className="post__optionalword">
                    <p>find an expert</p>
                  </div>
                  <div className="post__optionalword">
                    <p>Create a poll</p>
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

export default Post;
