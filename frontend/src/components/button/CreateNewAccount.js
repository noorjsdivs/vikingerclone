import React, { useState } from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import CloseIcon from "@mui/icons-material/Close";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

import "./buttonStyle.css";

const BtnLogin = styled(Button)({
  fontSize: 16,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 2,
  backgroundColor: "#42b72a",
  borderColor: "#42b72a",
  fontFamily: "Poppins",
  "&:hover": {
    backgroundColor: "#36a420",
  },
  "&:active": {
    borderColor: "#36a420",
  },
});

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  pb: 2,
  pt: 2,
};

const CreateNewAccount = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [age, setAge] = useState("");

  const handleChange = (e) => {
    setAge(e.target.value);
  };
  return (
    <div>
      <div className="createNewAccountBtn">
        <BtnLogin onClick={handleOpen} variant="contained" disableRipple>
          Create new account
        </BtnLogin>
      </div>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="registrationModal" sx={style}>
            <div className="boxTitle">
              <div>
                <h2>Sign Up</h2>
                <p>It's quick and easy.</p>
              </div>
              <div>
                <CloseIcon onClick={handleClose} className="boxcrossIcon" />
              </div>
            </div>
            <div className="boxForm">
              <div className="nameInput">
                <TextField
                  className="input"
                  size="small"
                  label="Frist name"
                  type="text"
                  variant="outlined"
                />
                <TextField
                  className="input"
                  size="small"
                  label="Last name"
                  type="text"
                  variant="outlined"
                />
              </div>
              <div className="emailPassInput">
                <TextField
                  className="input"
                  size="small"
                  label="Mobile number or email"
                  type="email"
                  variant="outlined"
                />
                <TextField
                  className="input"
                  size="small"
                  label="New password"
                  type="text"
                  variant="outlined"
                />
              </div>
              <div className="birthday">
                <div className="birthdayTitle">
                  <p>Birthday</p>
                  <QuestionMarkIcon
                    style={{
                      width: "13px",
                      height: "13px",
                      color: "white",
                      background: "gray",
                      borderRadius: "50%",
                    }}
                  />
                </div>
                <div className="birthdaySelect">
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default CreateNewAccount;
