import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { logoTransparent } from "../../assets";
import "./login.css";
import LoginBtn from "../../components/button/LoginBtn";
import CreateNewAccount from "../../components/button/CreateNewAccount";

const Login = () => {
  return (
    <div className="login">
      <Container maxWidth="lg">
        <div className="loginPage">
          <Grid container spacing={10}>
            <Grid item xs={6}>
              <div className="logingLeft">
                <img src={logoTransparent} alt="logoTransparent" />
                <p>
                  Connect with friends and the world around you on Facebook.
                </p>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="loginRight">
                <form className="loginForm">
                  <TextField
                    label="Email or phone number"
                    type="email"
                    variant="outlined"
                  />
                  <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                  />
                  <LoginBtn />
                  <p>Forgot password?</p>
                  <CreateNewAccount />
                </form>
                <p className="bottomText">
                  <span>Create a Page</span> for a celebrity, brand or business.
                </p>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default Login;
