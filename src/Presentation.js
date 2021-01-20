import React from "react";
import "./StyleSheets/Presentation.css";
import PriorityHighRoundedIcon from "@material-ui/icons/PriorityHighRounded";
import AddRoundedIcon from "@material-ui/icons/AddRounded";



function Presentation() {
  return (
    <div className="presentation">
      <div className="presentation__title">
        <div style={{ marginTop: "0.5vh" }}>
          <h6>Add to your feed</h6>
        </div>
        <div>
          <PriorityHighRoundedIcon fontSize="inherit" />
        </div>
      </div>

      <div className="presentation__list">
        <div>
          <img
            style={{ width: "55px", borderRadius: "50%", objectFit: "contain" }}
            src="https://material-ui.com/static/images/avatar/1.jpg"
            alt=""
          />
        </div>
        <div>
          <div>
            <button className="presentation__listItemHashtag">#Coding</button>
          </div>
          <div className="presentation__listItemButton">
            <button>
              <AddRoundedIcon />
              Follow
            </button>
          </div>
        </div>
      </div>

      <div className="presentation__list">
        <div>
          <img
            style={{ width: "55px", borderRadius: "50%", objectFit: "contain" }}
            src="https://material-ui.com/static/images/avatar/1.jpg"
            alt=""
          />
        </div>
        <div>
          <div>
            <button className="presentation__listItemHashtag">#Coding</button>
          </div>
          <div className="presentation__listItemButton">
            <button>
              <AddRoundedIcon />
              Follow
            </button>
          </div>
        </div>
      </div>

      <div className="presentation__list">
        <div>
          <img
            style={{ width: "55px", borderRadius: "50%", objectFit: "contain" }}
            src="https://material-ui.com/static/images/avatar/1.jpg"
            alt=""
          />
        </div>
        <div>
          <div>
            <button className="presentation__listItemHashtag">#Coding</button>
          </div>
          <div className="presentation__listItemButton">
            <button>
              <AddRoundedIcon />
              Follow
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Presentation;
