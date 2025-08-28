// src/components/layout/Layout.jsx
import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";

import Header from "../header/Header";
import Footer from "../footer/Footer";
import Routers from "../../routers/Routers";

const Layout = () => {
  const location = useLocation();

  // Define paths where Header/Footer should be hidden
  const noHeaderFooterPaths = ["/login", "/signup"];
  const hideHeaderFooter = noHeaderFooterPaths.includes(location.pathname.toLowerCase());

  return (
    <Fragment>
      {!hideHeaderFooter && <Header />}
      
      <div>
        <Routers />
      </div>
      
      {!hideHeaderFooter && <Footer />}
    </Fragment>
  );
};

export default Layout;
