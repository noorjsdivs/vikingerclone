import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Select from "@mui/material/Select";
import Alert from "@mui/material/Alert";
import "./Register.css";
import { rocketImg } from "../../assets";

const Register = () => {
  const [day, setDay] = useState("");
  const handleChange = (event) => {
    setDay(event.target.value);
  };

  // ============== From validation start here ===================
  let [firstname, setFirstname] = useState("");
  let [lastname, setLastname] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  // error validation ===============
  let [errfirstname, setErrfirstname] = useState("");
  let [errlastname, setErrlastname] = useState("");
  let [erremail, setErremail] = useState("");
  let [errpassword, setErrpassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (firstname === "") {
      setErrfirstname("First Name is required!");
    } else if (lastname === "") {
      setErrlastname("Last Name is required!");
    } else if (email === "") {
      setErremail("Email is required!");
    } else if (password === "") {
      setErrpassword("Password is required!");
    } else {
      setErrfirstname("");
      setErrlastname("");
      setErremail("");
      setErrpassword("");
    }
  };
  // ============== From validation end here =====================

  return (
    <div className="register">
      <div>
        <h2>Create your Account!</h2>
      </div>
      <div>
        <form>
          <TextField
            onChange={(e) => setFirstname(e.target.value)}
            className="inputField"
            type="text"
            label="First Name"
          />

          {errfirstname ? (
            <Alert className="errMessage" variant="filled" severity="error">
              {errfirstname}
            </Alert>
          ) : (
            ""
          )}
          <TextField
            onChange={(e) => setLastname(e.target.value)}
            className="inputField"
            type="text"
            label="Last Name"
          />
          {errlastname ? (
            <Alert className="errMessage" variant="filled" severity="error">
              {errlastname}
            </Alert>
          ) : (
            ""
          )}
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            className="inputField"
            type="email"
            label="Your Email"
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
            className="inputField"
            type="password"
            label="Password"
          />
          {errpassword ? (
            <Alert className="errMessage" variant="filled" severity="error">
              {errpassword}
            </Alert>
          ) : (
            ""
          )}
          <div>
            <p>Birthday</p>
            <div className="birthday">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Day</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={day}
                  label="Day"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Month</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={day}
                  label="Day"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Year</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={day}
                  label="Day"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div>
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Gender
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>
          </div>
          <Button
            onClick={handleRegister}
            className="formBtn"
            variant="contained"
          >
            Register Now!
          </Button>
          <img src={rocketImg} alt="rocketImg" />
        </form>
      </div>
    </div>
  );
};

export default Register;
