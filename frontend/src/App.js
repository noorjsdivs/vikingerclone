import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
import Prime from "./Prime";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Prime />}></Route>
      <Route path="/landingPage" element={<LandingPage />}></Route>
      {/* <Route path="/login" element={<Login />}></Route> */}
    </Routes>
  );
}

export default App;
