import React from "react";
import s from "./Header.css";
import Navbar from "./Navbar/NavBar";

export default function Header() {
  return (
    <div className={s.Header}>
      <div className={s.HeaderContainer}>
        <Navbar />
      </div>
    </div>
  );
}