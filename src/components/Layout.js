import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
// import "./layout.css"
import "normalize.css"
import "./../assets/css/main.css"

function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
