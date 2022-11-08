import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { profileImg, profileImgDarkBg } from "../../../../assets";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      <div className="title">
        <div className="name">
          <h4>About Me</h4>
          <MoreHorizIcon />
        </div>
        <div className="des">
          <p>
            Hi! name goes by Noor Mohammad but some people may know me as
            GameHuntress! I have a Twitch channel where I stream, play and
            review all the newest games.
          </p>
        </div>
        <div className="info">
          <ul>
            <li>
              Joined : <span>22 November 2008</span>
            </li>
            <li>
              City : <span>Muscat</span>
            </li>
            <li>
              Age : <span>25 Years</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="photos">
        <div className="name">
          <h4>
            Photos <span>37</span>
          </h4>
          <MoreHorizIcon />
        </div>
        <div className="photosFrame">
          <div className="left">
            <img src={profileImg} alt="profileImg" />
            <img src={profileImg} alt="profileImg" />
            <img src={profileImg} alt="profileImg" />
          </div>
          <div className="right">
            <img src={profileImgDarkBg} alt="profileImgDarkBg" />
            <img src={profileImgDarkBg} alt="profileImgDarkBg" />
            <span>32+</span>
          </div>
        </div>
      </div>
      <div className="videos">
        <div className="name">
          <h4>
            Videos <span>7</span>
          </h4>
          <MoreHorizIcon />
        </div>
        <div className="videoThumb">
          <div className="images">
            <img src={profileImg} alt="profileImg" />
            <span>
              <PlayArrowIcon />
            </span>
          </div>
          <div className="images">
            <img src={profileImgDarkBg} alt="profileImgDarkBg" />
            <span>
              <PlayArrowIcon />
            </span>
          </div>
          <div className="images">
            <img src={profileImg} alt="profileImg" />
            <span>
              <PlayArrowIcon />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
