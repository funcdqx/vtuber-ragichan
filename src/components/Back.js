import React from "react";
import { Link } from "react-router-dom";

function Back() {
  return (
    <div className="backButton">
      <Link to={"/"} className="back-button-link">
        Back to Home
      </Link>
    </div>
  );
}

export default Back;
