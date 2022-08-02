import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="toparea">
      <p className="head">Soaring to new Heights! </p>
      <p className="subhead">Deploying code to create great applications!</p>
      <img className="imgpic" src="../assets/clouds.jpeg" alt="logo" />
    </div>
  );
}

export default Header;
