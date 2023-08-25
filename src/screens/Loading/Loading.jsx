import React from "react";
import "./loading.css";

export default function Loading() {
  return (
    <div className="loadingScreenContainer">
      <div className="gooey">
        <span className="dot"></span>
        <div className="dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="loadingScreenText">Loading...</div>
    </div>
  );
}
