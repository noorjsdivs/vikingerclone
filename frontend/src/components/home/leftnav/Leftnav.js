import React from "react";
import FeedIcon from "@mui/icons-material/Feed";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import GroupIcon from "@mui/icons-material/Group";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import LogoutIcon from "@mui/icons-material/Logout";
import "./leftnav.css";
import { profileImg } from "../../../assets";

const Leftnav = () => {
  return (
    <div className="leftnav">
      <div className="profile">
        <div className="profileTop"></div>
        <div className="profileImg">
          <img src={profileImg} alt="profileImg" />
        </div>
        <div className="profileName">
          <h4>Noor Mohammad</h4>
          <p>www.noor.com</p>
        </div>
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
        <div className="feed">
          <ul>
            <li>
              <FeedIcon />
              Newsfeed
            </li>
            <li>
              <PlayCircleIcon />
              Videos
            </li>
            <li>
              <PeopleOutlineIcon />
              Groups
            </li>
            <li>
              <PhotoSizeSelectActualIcon />
              Photos
            </li>
            <li>
              <GroupIcon />
              Friends
            </li>
            <li>
              <SyncAltIcon />
              Friends Request
            </li>
            <li>
              <LogoutIcon />
              Logout
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Leftnav;
