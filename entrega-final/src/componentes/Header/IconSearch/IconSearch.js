import React, { Component } from "react";
import s from "./IconSearch.css";

export default class IconSearch extends Component {
  render() {
    return (
      <div className={s.IconSearch}>
        <i class="bx bx-search"></i>
      </div>
    );
  }
}