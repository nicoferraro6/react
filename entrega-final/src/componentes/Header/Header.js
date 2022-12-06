import React from "react";
import "./Header.css";
import Navbar from "./Navbar/NavBar";

export default function Header() {
  return (
    <div className="Header">
      <div className="HeaderContainer">
        <Navbar />
      </div>
    </div>
  );
}