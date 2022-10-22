import React from "react";
import Register from "../../components/register/Register";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landingPage">
      <div className="left">
        <div className="text">
          <h3>Welcome to</h3>
          <h1>vikinger</h1>
          <p>
            The next generation social network & community! Connect with your
            friends and play with our quests and badges gamification system!
          </p>
        </div>
        <div className="buttons">
          <button className="loginBtn">Login</button>
          <button className="registerBtn">Register</button>
        </div>
      </div>
      <div className="right">
        <Register />
      </div>
    </div>
  );
};

export default LandingPage;
