import { Link } from "react-router-dom";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import TitleBcg from "../../components/addings/titlebcg/titlebcg";
import HouseIcon from "../../components/icons/house";
import MailIcon from "../../components/icons/mail";
import PhoneIcon from "../../components/icons/phone";
import InstagramIcon from "../../components/icons/instagram";
import Linkedin from "../../components/icons/linkedin";
import GitHub from "../../components/icons/github";
import "./contacts.css";
import TelegramIcon from "../../components/icons/telegram";
import VkIcon from "../../components/icons/vk";
import CircleStroke from "../../components/addings/stroke/circle-stroke";

export const Сontacts = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, disable: "mobile" });
  }, []);

  return (
    <div className="contacts">
      <TitleBcg className="contacts__titlebcg">contacts</TitleBcg>
      <ul className="contacts__list" data-aos="fade-in">
        <li>
          <HouseIcon />
          &nbsp;Minsk, Belarus
        </li>
        <li className="contacts__tel">
          <PhoneIcon />
          &nbsp;<a href="tel:+375296948912">+375(29)694-89-12</a>
          <span>(vel)</span>
        </li>
        <li>
          <MailIcon />
          &nbsp;
          <a href="mailto:katyavarenik@mail.ru">katyavarenik@mail.ru</a>
        </li>
      </ul>
      <div className="contacts__media">
        <Link
          to="/instagram"
          target="_blank"
          title="Instagram"
          data-aos="fade-up"
        >
          <InstagramIcon />
          <CircleStroke />
        </Link>
        <Link
          to="/linkedin"
          target="_blank"
          title="LinkedIn"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <Linkedin />
          <CircleStroke />
        </Link>
        <Link
          to="/github"
          target="_blank"
          title="GitHub"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <GitHub />
          <CircleStroke />
        </Link>
        <Link
          to="/telegram"
          target="_blank"
          title="Telegram"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <TelegramIcon />
          <CircleStroke />
        </Link>
        <Link
          to="/vk"
          target="_blank"
          title="VK"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <VkIcon />
          <CircleStroke />
        </Link>
      </div>
    </div>
  );
};

export default Сontacts;
