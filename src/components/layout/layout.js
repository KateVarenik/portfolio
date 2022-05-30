import { useEffect } from "react";

import Menu from "../menu";
import "./layout.css";
import Logo from "../icons/logo";

export const Layout = ({ children }) => {
  useEffect(() => {
    window.addEventListener("load", () => {
      setTimeout(function () {
        const preloader = document.getElementById("page-preloader");
        if (!preloader.classList.contains("done")) {
          preloader.classList.add("done");
        }
      }, 1000);
    });
  }, []);

  return (
    <div className="layout">
      <div className="layout__preloader" id="page-preloader">
        <div className="layout__loader"></div>
      </div>
      <Menu />

      {children}

      <Logo className="layout__logo" />
    </div>
  );
};

export default Layout;
