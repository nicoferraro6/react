import React from "react";
import ItemListContainer from "../../componentes/ItemListContainer/ItemsListContainer";
import s from "./Home.css";

export default function Home() {
  return (
    <div className={s.Home}>
      <ItemListContainer />
    </div>
  );
}