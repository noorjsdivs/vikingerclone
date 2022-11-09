import React, { useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import ShareIcon from "@mui/icons-material/Share";
// import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import {
  profileImg,
  profileImgDarkBg,
  likebtn,
  lovebtn,
  dislikebtn,
  happybtn,
  funnybtn,
  wowbtn,
  angrybtn,
  sadbtn,
} from "../../../../../assets";
import "./subpost.css";

const Subpost = () => {
  let [showComments, setShowComments] = useState(false);

  return (
    <div className="subPost">
      {/* ============= First Post start here ========= */}
      <div className="post">
        <div className="postDes">
          <div className="profile">
            <div className="profileInfo">
              <img src={profileImg} alt="profileImg" />
              <p>
                Noor Mohammad <span>29 minutes ago</span>
              </p>
            </div>
            <div>
              <MoreHorizIcon />
            </div>
          </div>
          <div className="des">
            <p>
              I have great news to share with you all! I've been officially made
              a game streaming verified partner by Streamy
              https://noormohammad.live. What does this mean? I'll be uploading
              new content every day, improving the quality and I'm gonna have
              access to games a month before the official release. This is a
              dream come true, thanks to all for the support!!!
            </p>
          </div>
          <div className="reactions">
            <div className="icons">
              <div className="images">
                <img src={likebtn} alt="likebtn" />
                <img src={lovebtn} alt="lovebtn" />
                <img src={wowbtn} alt="wowbtn" />
              </div>
              <div className="stats">
                <p>13</p>
              </div>
            </div>
            <div className="info">
              <p>13 Comments</p>
              <p>2 Shares</p>
            </div>
          </div>
        </div>
        <div className="likebtn">
          <div className="likebtnTab">
            <div className="reactionTab">
              <p>
                <ThumbUpIcon />
                <span>Like</span>
              </p>
              <div className="reactionIcons">
                <div className="icons">
                  <div className="icon">
                    <img src={likebtn} alt="likebtn" /> <span>Like</span>
                  </div>
                  <div className="icon">
                    <img src={lovebtn} alt="lovebtn" /> <span>Love</span>
                  </div>
                  <div className="icon">
                    <img src={dislikebtn} alt="dislikebtn" />{" "}
                    <span>Dislike</span>
                  </div>
                  <div className="icon">
                    <img src={happybtn} alt="happybtn" /> <span>Happy</span>
                  </div>
                  <div className="icon">
                    <img src={funnybtn} alt="funnybtn" />
                    <span>Funny</span>
                  </div>
                  <div className="icon">
                    <img src={wowbtn} alt="wowbtn" />
                    <span>Wow</span>
                  </div>
                  <div className="icon">
                    <img src={angrybtn} alt="angrybtn" />
                    <span>Angry</span>
                  </div>
                  <div className="icon">
                    <img src={sadbtn} alt="sadbtn" />
                    <span>Sad</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              onClick={() => setShowComments(!showComments)}
              className="showComments"
            >
              <p>
                <ChatBubbleIcon />
                <span>Comment</span>
              </p>
            </div>
            <div>
              <p>
                <ShareIcon />
                <span>Share</span>
              </p>
            </div>
          </div>
        </div>

        {showComments && (
          <>
            <div className="showCommentsBox">
              <div className="comments">
                <div className="comment">
                  <div className="title">
                    <img src={profileImgDarkBg} alt="profileImgDarkBg" />
                    <p>
                      Robert jr.
                      <span>
                        It's a always pleasure to do this streams with you. If
                        we have at least half half the fun than last time it
                        will be an incredible success!
                      </span>
                    </p>
                  </div>
                  <div className="info">
                    <div className="react">
                      <div className="images">
                        <img src={lovebtn} alt="lovebtn" />
                        <img src={wowbtn} alt="wowbtn" />
                      </div>
                      <div className="text">
                        <h4>10</h4>
                      </div>
                    </div>
                    <div>
                      <p>React!</p>
                    </div>
                    <div>
                      <p>Reply</p>
                    </div>
                    <div>
                      <p>15 minutes ago</p>
                    </div>
                    <div>
                      <p className="icon">
                        <MoreHorizIcon />
                      </p>
                    </div>
                  </div>
                </div>
                <div className="comment">
                  <div className="title">
                    <img src={profileImg} alt="profileImgDarkBg" />
                    <p>
                      Ahmed Reza
                      <span>It's great oppurtunity</span>
                    </p>
                  </div>
                  <div className="info">
                    <div className="react">
                      <div className="images">
                        <img src={likebtn} alt="likebtn" />
                        <img src={wowbtn} alt="wowbtn" />
                      </div>
                      <div className="text">
                        <h4>6</h4>
                      </div>
                    </div>
                    <div>
                      <p>React!</p>
                    </div>
                    <div>
                      <p>Reply</p>
                    </div>
                    <div>
                      <p>25 minutes ago</p>
                    </div>
                    <div>
                      <p className="icon">
                        <MoreHorizIcon />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="moreComments">
                <p>
                  Load more comments <span>9+</span>
                </p>
              </div>
              <div className="commentsReply">
                <img src={profileImg} alt="profileImg" />
                <input type="text" placeholder="Your reply" />
              </div>
            </div>
          </>
        )}
      </div>
      {/* ============= Second Post start here ========= */}
      {/* <div className="post">
        <div className="postDes">
          <div className="profile">
            <div className="profileInfo">
              <img src={profileImg} alt="profileImg" />
              <p>
                Noor Mohammad <span>29 minutes ago</span>
              </p>
            </div>
            <div>
              <MoreHorizIcon />
            </div>
          </div>
          <div className="des">
            <div>
              <p>
                I have great news to share with you all! I've been officially
                made a game streaming verified partner by Streamy
                https://noormohammad.live. What does this mean? I'll be
                uploading new content every day, improving the quality and I'm
                gonna have access to games a month before the official release.
                This is a dream come true, thanks to all for the support!!!
              </p>
            </div>
            <div className="desImages">
              <div className="icon">
                <span>
                  <PlayArrowIcon />
                </span>
              </div>
            </div>
          </div>
          <div className="reactions">
            <div className="icons">
              <div className="images">
                <img src={likebtn} alt="likebtn" />
                <img src={lovebtn} alt="lovebtn" />
                <img src={wowbtn} alt="wowbtn" />
              </div>
              <div className="stats">
                <p>13</p>
              </div>
            </div>
            <div className="info">
              <p>13 Comments</p>
              <p>2 Shares</p>
            </div>
          </div>
        </div>
        <div className="likebtn">
          <div className="likebtnTab">
            <div className="reactionTab">
              <p>
                <ThumbUpIcon />
                <span>Like</span>
              </p>
              <div className="reactionIcons">
                <div className="icons">
                  <div className="icon">
                    <img src={likebtn} alt="likebtn" /> <span>Like</span>
                  </div>
                  <div className="icon">
                    <img src={lovebtn} alt="lovebtn" /> <span>Love</span>
                  </div>
                  <div className="icon">
                    <img src={dislikebtn} alt="dislikebtn" />{" "}
                    <span>Dislike</span>
                  </div>
                  <div className="icon">
                    <img src={happybtn} alt="happybtn" /> <span>Happy</span>
                  </div>
                  <div className="icon">
                    <img src={funnybtn} alt="funnybtn" />
                    <span>Funny</span>
                  </div>
                  <div className="icon">
                    <img src={wowbtn} alt="wowbtn" />
                    <span>Wow</span>
                  </div>
                  <div className="icon">
                    <img src={angrybtn} alt="angrybtn" />
                    <span>Angry</span>
                  </div>
                  <div className="icon">
                    <img src={sadbtn} alt="sadbtn" />
                    <span>Sad</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p>
                <ChatBubbleIcon />
                <span>Comment</span>
              </p>
            </div>
            <div>
              <p>
                <ShareIcon />
                <span>Share</span>
              </p>
            </div>
          </div>
        </div>

        <div className="comments">
          <div className="comment">
            <div className="title">
              <img src={profileImgDarkBg} alt="profileImgDarkBg" />
              <p>
                Amur Al Hearthy
                <span>It's great oppurtunity</span>
              </p>
            </div>
            <div className="info">
              <div className="react">
                <div className="images">
                  <img src={likebtn} alt="likebtn" />
                  <img src={wowbtn} alt="wowbtn" />
                </div>
                <div className="text">
                  <h4>6</h4>
                </div>
              </div>
              <div>
                <p>React!</p>
              </div>
              <div>
                <p>Reply</p>
              </div>
              <div>
                <p>25 minutes ago</p>
              </div>
              <div>
                <p className="icon">
                  <MoreHorizIcon />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="moreComments">
          <p>
            Load more comments <span>9+</span>
          </p>
        </div>
        <div className="commentsReply">
          <img src={profileImg} alt="profileImg" />
          <input type="text" placeholder="Your reply" />
        </div>
      </div> */}
      {/* ============= Third Post start here ========= */}
      {/* <div className="post">
        <div className="postDes">
          <div className="profile">
            <div className="profileInfo">
              <img src={profileImg} alt="profileImg" />
              <p>
                Noor Mohammad <span>29 minutes ago</span>
              </p>
            </div>
            <div>
              <MoreHorizIcon />
            </div>
          </div>
          <div className="des">
            <div>
              <p>
                I have great news to share with you all! I've been officially
                made a game streaming verified partner by Streamy
                https://noormohammad.live. What does this mean? I'll be
                uploading new content every day, improving the quality and I'm
                gonna have access to games a month before the official release.
              </p>
            </div>
            <div className="desImages"></div>
          </div>
          <div className="reactions">
            <div className="icons">
              <div className="images">
                <img src={likebtn} alt="likebtn" />
                <img src={lovebtn} alt="lovebtn" />
                <img src={wowbtn} alt="wowbtn" />
              </div>
              <div className="stats">
                <p>13</p>
              </div>
            </div>
            <div className="info">
              <p>13 Comments</p>
              <p>2 Shares</p>
            </div>
          </div>
        </div>
        <div className="likebtn">
          <div className="likebtnTab">
            <div className="reactionTab">
              <p>
                <ThumbUpIcon />
                <span>Like</span>
              </p>
              <div className="reactionIcons">
                <div className="icons">
                  <div className="icon">
                    <img src={likebtn} alt="likebtn" /> <span>Like</span>
                  </div>
                  <div className="icon">
                    <img src={lovebtn} alt="lovebtn" /> <span>Love</span>
                  </div>
                  <div className="icon">
                    <img src={dislikebtn} alt="dislikebtn" />{" "}
                    <span>Dislike</span>
                  </div>
                  <div className="icon">
                    <img src={happybtn} alt="happybtn" /> <span>Happy</span>
                  </div>
                  <div className="icon">
                    <img src={funnybtn} alt="funnybtn" />
                    <span>Funny</span>
                  </div>
                  <div className="icon">
                    <img src={wowbtn} alt="wowbtn" />
                    <span>Wow</span>
                  </div>
                  <div className="icon">
                    <img src={angrybtn} alt="angrybtn" />
                    <span>Angry</span>
                  </div>
                  <div className="icon">
                    <img src={sadbtn} alt="sadbtn" />
                    <span>Sad</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p>
                <ChatBubbleIcon />
                <span>Comment</span>
              </p>
            </div>
            <div>
              <p>
                <ShareIcon />
                <span>Share</span>
              </p>
            </div>
          </div>
        </div>

        <div className="comments">
          <div className="comment">
            <div className="title">
              <img src={profileImgDarkBg} alt="profileImgDarkBg" />
              <p>
                Christina
                <span>Looking forward for the group project !</span>
              </p>
            </div>
            <div className="info">
              <div className="react">
                <div className="images">
                  <img src={lovebtn} alt="lovebtn" />
                  <img src={angrybtn} alt="angrybtn" />
                </div>
                <div className="text">
                  <h4>8</h4>
                </div>
              </div>
              <div>
                <p>React!</p>
              </div>
              <div>
                <p>Reply</p>
              </div>
              <div>
                <p>25 minutes ago</p>
              </div>
              <div>
                <p className="icon">
                  <MoreHorizIcon />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="moreComments">
          <p>
            Load more comments <span>9+</span>
          </p>
        </div>
        <div className="commentsReply">
          <img src={profileImg} alt="profileImg" />
          <input type="text" placeholder="Your reply" />
        </div>
      </div> */}
    </div>
  );
};

export default Subpost;
