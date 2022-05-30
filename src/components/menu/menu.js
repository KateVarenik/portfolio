import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

import "./menu.css";
import Linkedin from "../icons/linkedin";
import GitHub from "../icons/github";
import CV from "../icons/cv";
import Stroke from "../addings/stroke/stroke";
import Delimetr from "../icons/delimetr";
import Logo from "../icons/logo";

export const Menu = () => {
  useEffect(() => {
    const toggle = document.querySelector(".menu__toggle");
    const menuToShow = document.querySelector(".menu__maincontent");
    const menuLink = document.querySelectorAll(".menu__link");

    if (toggle && menuToShow) {
      toggle.addEventListener("click", () => {
        menuToShow.classList.toggle("show-menu");
        toggle.classList.toggle("active");
      });
    }

    function linkAction() {
      menuToShow.classList.remove("show-menu");
      toggle.classList.remove("active");
    }
    menuLink.forEach((n) => n.addEventListener("click", linkAction));
  }, []);

  return (
    <div className="menu">
      <Logo className="menu__logo" />
      <div className="menu__maincontent">
        <div className="menu__social">
          <Link
            to="/linkedin"
            target="_blank"
            title="LinkedIn"
            className="menu__link"
          >
            <Linkedin />
            <Stroke />
          </Link>
          <Link
            to="/github"
            target="_blank"
            title="GitHub"
            className="menu__link"
          >
            <GitHub />
            <Stroke />
          </Link>
          <Link
            to="/CV.pdf"
            target="_blank"
            download
            className="menu__social-cv menu__link"
          >
            <CV /> <span>CV</span>
            <Stroke className="menu__social-cv-stroke" />
          </Link>
        </div>
        <div className="menu__delimiter">
          <Delimetr />
        </div>
        <div className="menu__navbar">
          <NavLink
            exact
            to="/"
            activeStyle={{ textDecoration: "overline" }}
            className="menu__link"
          >
            home
          </NavLink>
          <NavLink
            to="/portfolio"
            activeStyle={{ textDecoration: "overline" }}
            className="menu__link"
          >
            portfolio
          </NavLink>
          <NavLink
            to="/contacts"
            activeStyle={{ textDecoration: "overline" }}
            className="menu__link"
          >
            contacts
          </NavLink>
        </div>
      </div>

      <div className="menu__toggle">
        <span></span>
      </div>
    </div>
  );
};

export default Menu;
