import { Outlet } from "react-router-dom";

import React from "react";
import Header from "../componentes/Header/Header";
import Footer from "../componentes/Footer/Footer";

import "./Layout.css";

export default function Layout() {
  return (
    <div className="Layout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}