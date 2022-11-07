import React from "react";
import Grid from "@mui/material/Grid";
import "./home.css";
import Leftnav from "./leftnav/Leftnav";
import Newsfeed from "./newsfeed/Newsfeed";
import Rightnav from "./rightnav/Rightnav";
const Home = () => {
  return (
    <div className="home">
      <Grid container spacing={3}>
        <Grid item xl={2}>
          <Leftnav />
        </Grid>
        <Grid item xl={9}>
          <Newsfeed />
        </Grid>
        <Grid item xl={1}>
          <Rightnav />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
