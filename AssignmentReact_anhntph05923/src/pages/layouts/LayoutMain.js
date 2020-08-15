import React, { useEffect, useState } from "react";
import Header from "../../components/Main/Header";
import Footer from "../../components/Main/Footer";
import Navbar from "../../components/Main/NavBar";

import Slide from "../../components/Main/Silde";
import products, { ProductsManager } from "../views/Admin/Products";
import LayoutMain from "./LayoutMain";
export default ({ children }) => {
  console.log("render Main");

  // Danh Sách Sản phẩm

  return (
    <div className="user-page">
      <Header />

      <Navbar />

      <Slide />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
};
