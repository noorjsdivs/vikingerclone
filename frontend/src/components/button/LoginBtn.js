import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import "./buttonStyle.css";

const BtnLogin = styled(Button)({
  fontSize: 18,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1.8,
  backgroundColor: "#1877f2",
  borderColor: "#0063cc",
  fontFamily: "Poppins",
  "&:hover": {
    backgroundColor: "#1565c0",
  },
  "&:active": {
    borderColor: "#1877f2",
  },
});

const LoginBtn = () => (
  <div>
    <BtnLogin className="loginBtn" variant="contained" disableRipple>
      Log In
    </BtnLogin>
  </div>
);

export default LoginBtn;
