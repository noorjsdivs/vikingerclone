import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { profileImg } from "../../../assets";
import "./newsfeed.css";

const Newsfeed = () => {
  return (
    <div className="newsfeed">
      <div className="profile">
        <div className="profileTop"></div>
        <div className="profileImg">
          <img src={profileImg} alt="profileImg" />
        </div>
      </div>
      <div className="banner">
        <div className="stats">
          <div className="left">
            <p>
              930 <br /> <span>Friends</span>
            </p>
          </div>
          <div className="middle">
            <p>
              87 <br />
              <span>Posts</span>
            </p>
          </div>
          <div className="right">
            <p>
              1k <br />
              <span>Followers</span>
            </p>
          </div>
        </div>
        <div className="profileName">
          <h4>Noor Mohammad</h4>
          <p>www.noor.com</p>
        </div>
        <div className="icons">
          <span>
            <FacebookIcon />
          </span>
          <span>
            <InstagramIcon />
          </span>
          <span>
            <TwitterIcon />
          </span>
          <span>
            <YouTubeIcon />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Newsfeed;
