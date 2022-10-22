import React from "react";
import { Link } from "react-router-dom";

const Prime = () => {
  return (
    <div className="primePage">
      <h1>This is the prime page</h1>
      <Link to="/landingPage">
        <p>Go to Login</p>
      </Link>
    </div>
  );
};

export default Prime;
