import React from "react";
import s from "./IconMenu.css";

export default function IconMenu({ onClick }) {
  
  return (
    <div className={s.IconMenuContainer} onClick={onClick}>
      <i className="bx bx-dots-vertical-rounded"></i>
    </div>
  );
}