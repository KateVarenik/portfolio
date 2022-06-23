import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import TitleBcg from "../../components/addings/titlebcg/titlebcg";
import PortfolioCard from "../../components/portfilio-card";
import "./portfolio.css";
import Audiofree from "../../img/audiofree.jpg";
import Waxom from "../../img/waxom.jpg";
import Webovio from "../../img/webovio.jpg";
import Coffee from "../../img/coffee.jpg";
import Odigo from "../../img/odigo.jpg";
import Hungry from "../../img/hungry.jpg";
import Dreammaker from "../../img/dreammaker.jpg";
import BasketCatalog from "../../img/basket_catalog.jpeg";
import LoginForm from "../../img/login_form.jpg";
import Christmas from "../../img/christmas_gift.jpg";
import Barbershop from "../../img/barbershop.jpg";

export const Portfolio = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const list = [
    {
      title: "Audiofree",
      img: Audiofree,
      desc: [
        "Многостраничник",
        "React, HTML, CSS, Swiper js, Material ui",
        "Адаптив - мобильная версия",
      ],
      link: "/audiofree",
      delay: "100",
    },
    {
      title: "Waxom",
      img: Waxom,
      desc: [
        "Лендинг",
        "HTML, CSS, Swiper js, MixItUp, jQuery",
        "Отзывчивая вёрстка",
      ],
      link: "/waxom",
      delay: "200",
    },
    {
      title: "Dreammaker",
      img: Dreammaker,
      desc: [
        "Лендинг",
        "HTML, CSS, jQuery, Smooth-scroll",
        "Отзывчивая вёрстка",
      ],
      link: "/dreammaker",
      delay: "300",
    },
    {
      title: "Christmas landing",
      img: Christmas,
      desc: [
        "Лендинг",
        "HTML, CSS, Scroll reveal",
        "Отзывчивая вёрстка, тёмная тема",
      ],
      link: "/christmas_landing",
      delay: "400",
    },
    {
      title: "Coffee",
      img: Coffee,
      desc: [
        "Первый экран",
        "HTML, CSS, GSAP animation, mousemove img",
        "Адаптив",
      ],
      link: "/coffee",
      delay: "100",
    },
    {
      title: "Webovio",
      img: Webovio,
      desc: ["Лендинг", "HTML, CSS"],
      link: "/webovio",
      delay: "200",
    },

    {
      title: "Odigo",
      img: Odigo,
      desc: ["Лендинг", "HTML, CSS"],
      link: "/odigo",
      delay: "300",
    },
    {
      title: "Barbershop",
      img: Barbershop,
      desc: ["Лендинг", "HTML, CSS, SmoothScroll", "Отзывчивая вёрстка"],
      link: "/barbershop",
      delay: "400",
    },
    {
      title: "Hungry",
      img: Hungry,
      desc: ["Лендинг", "HTML, CSS, SmoothScroll, pop-up"],
      link: "/hungry",
      delay: "100",
    },
    {
      title: "Basket catalog",
      img: BasketCatalog,
      desc: ["Каталог товаров с корзиной", "HTML, CSS, JS"],
      link: "/basket_catalog",
      delay: "200",
    },
    {
      title: "Login form",
      img: LoginForm,
      desc: ["Страница формы", "HTML, CSS, JS", "Отзывчивая вёрстка"],
      link: "/login_form",
      delay: "300",
    },
  ];

  return (
    <div className="portfolio">
      <TitleBcg className="portfolio__title">Portfolio</TitleBcg>

      <div className="portfolio__items">
        {list.map((item) => (
          <PortfolioCard
            key={item.title}
            {...item}
            dataAos="fade-up"
            dataAosDelay={item.delay}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
