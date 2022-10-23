import React, { useRef, useEffect, useState } from "react";
import Login from "../../components/login/Login";
import Register from "../../components/register/Register";
import "./LandingPage.css";

const LandingPage = () => {
  const [form, setForm] = useState("");
  const [loginForm, setLoginForm] = useState("");
  const ref = useRef(null);
  const ref2 = useRef(null);
  useEffect(() => {
    const regiForm = document.getElementById("regiForm");
    const loginForm = document.getElementById("logForm");
    setForm(regiForm);
    setLoginForm(loginForm);
    // loginForm.style.transform = "translateX(170%)";
  }, []);

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
          <button
            onClick={(e) => {
              e.preventDefault();
              form.style.transform = "translateX(170%)";
              loginForm.style.transform = "translateX(0)";
              form.style.transition = "all ease-in-out .6s";
            }}
            className="loginBtn"
          >
            Login
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              loginForm.style.transition = "all ease-in-out .6s";
              loginForm.style.transform = "translateX(170%)";
              form.style.transform = "translateX(0)";

              // form.style.transform = "translateX(0)";
              // loginForm.style.transform = "translateX(170%)";
              // form.style.transition = "all ease-in-out .6s";
            }}
            className="registerBtn"
          >
            Register
          </button>
        </div>
      </div>
      <div className="right">
        <div className="registrationForm" ref={ref} id="regiForm">
          <Register />
        </div>
        <div className="loginingForm" ref={ref2} id="logForm">
          <Login />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
