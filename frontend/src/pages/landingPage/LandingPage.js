import React, { useRef, useEffect, useState } from "react";
import Login from "../../components/login/Login";
import Register from "../../components/register/Register";
import "./LandingPage.css";

const LandingPage = () => {
  const ref = useRef(null);
  const [registrationForm, setRegistrationForm] = useState("");
  const [loginForm, setLoginForm] = useState("");
  const [loginButton, setLoginButton] = useState("");
  const [regButton, setRegButton] = useState("");
  useEffect(() => {
    const regiForm = document.getElementById("registrationForm");
    setRegistrationForm(regiForm);
    const logiForm = document.getElementById("loginForm");
    setLoginForm(logiForm);
    const loginBtn = document.getElementById("logBtn");
    setLoginButton(loginBtn);
    const regiBtn = document.getElementById("regBtn");
    setRegButton(regiBtn);
  }, [registrationForm, loginForm, loginButton, regButton]);

  const handleLoginForm = () => {
    registrationForm.style.transform = "translateX(170%)";
    loginForm.style.transform = "translateX(0)";
    loginButton.style.backgroundColor = "white";
    loginButton.style.color = "#444444";
    regButton.style.backgroundColor = "transparent";
    regButton.style.color = "white";
    loginForm.style.transition = "all ease-in-out .7s";
    registrationForm.style.transition = "all ease-in-out .7s";
  };

  const handleRegistrationForm = () => {
    loginForm.style.transform = "translateX(170%)";
    registrationForm.style.transform = "translateX(0)";
    loginButton.style.backgroundColor = "transparent";
    loginButton.style.color = "white";
    regButton.style.backgroundColor = "white";
    regButton.style.color = "#444444";
  };
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
          <button onClick={handleLoginForm} id="logBtn" className="loginBtn">
            Login
          </button>
          <button
            onClick={handleRegistrationForm}
            id="regBtn"
            className="registerBtn"
          >
            Register
          </button>
        </div>
      </div>
      <div className="right">
        <div className="registrationForm" ref={ref} id="registrationForm">
          <Register />
        </div>
        <div
          style={{ transform: "translateX(150%)" }}
          className="loginingForm"
          ref={ref}
          id="loginForm"
        >
          <Login />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
