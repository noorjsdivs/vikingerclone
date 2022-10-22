import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Prime from "./Prime";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Prime />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
}

export default App;
