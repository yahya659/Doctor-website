import React, { Fragment } from "react";
import Navbar from "../Nav/navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

function Layout() {
  return (
    <Fragment>
      <Navbar />
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </Fragment>
  );
}

export default Layout;
