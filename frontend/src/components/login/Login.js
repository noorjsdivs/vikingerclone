import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Login.css";
import { rocketImg } from "../../assets";

const Login = () => {
  return (
    <div className="login">
      <div>
        <h2>Account Login</h2>
      </div>
      <div>
        <form>
          <TextField className="inputField" label="Username or Email" />
          <TextField className="inputField" label="Password" />

          <Button className="formBtn" variant="contained">
            Log In
          </Button>
          <img src={rocketImg} alt="rocketImg" />
        </form>
      </div>
    </div>
  );
};

export default Login;
