import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import "./Login.css";
import { rocketImg } from "../../assets";

const Login = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [erremail, setErremail] = useState("");
  let [errpassword, setErrpassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "") {
      setErremail("Email is required!");
    } else if (password === "") {
      setErrpassword("Password is required!");
    } else {
      setErremail("");
      setErrpassword("");
    }
  };
  return (
    <div className="login">
      <div>
        <h2>Account Login</h2>
      </div>
      <div className="loginForm">
        <form>
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            className="inputField"
            label="Username or Email"
          />
          {erremail ? (
            <Alert className="errMessage" variant="filled" severity="error">
              {erremail}
            </Alert>
          ) : (
            ""
          )}
          <TextField
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="inputField"
            label="Password"
          />
          {errpassword ? (
            <Alert className="errMessage" variant="filled" severity="error">
              {errpassword}
            </Alert>
          ) : (
            ""
          )}
          <Button onClick={handleLogin} className="formBtn" variant="contained">
            Log In
          </Button>
          <img src={rocketImg} alt="rocketImg" />
        </form>
      </div>
    </div>
  );
};

export default Login;
