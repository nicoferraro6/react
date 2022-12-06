import React from "react";
import "./IconMenu.css";

export default function IconMenu({ onClick }) {
  
  return (
    <div className="IconMenuContainer" onClick={onClick}>
      <i className="bx bx-dots-vertical-rounded"></i>
    </div>
  );
}