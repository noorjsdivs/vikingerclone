import React from "react";
import Grid from "@mui/material/Grid";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { profileImg, bannerImg } from "../../../assets";
import "./newsfeed.css";
import About from "./about/About";
import Post from "./post/Post";
import AddFriendBtn from "./buttons/AddFriendBtn";
import SendMessages from "./buttons/SendMessages";

const Newsfeed = () => {
  return (
    <div className="newsfeed">
      <div className="newsfeedInfo">
        <div className="profile">
          <div className="profileTop">
            <img src={bannerImg} alt="bannerImg" />
          </div>
          <div className="profileImg">
            <img src={profileImg} alt="profileImg" />
          </div>
          <div className="buttons">
            <AddFriendBtn />
            <SendMessages />
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
      <div className="newsfeedPost">
        <Grid container spacing={2}>
          <Grid item xl={3}>
            <About />
          </Grid>
          <Grid item xl={6.5}>
            <Post />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Newsfeed;
