// import { link } from "react-router-dom";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import "./home.css";
import Photo from "../../img/kate.jpg";
import Slider from "../../components/slider/Slider";

export const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 800, disable: "mobile" });
  }, []);

  return (
    <div className="home">
      <div className="home__top top">
        <div className="top__about" data-aos="fade-right">
          <h1 className="top__title">
            Привет, меня зовут <br /> <span>Катерина Вареник</span>
          </h1>
          <h2>Junior Front-end Developer</h2>
        </div>

        <div className="top__photo" data-aos="fade-left">
          <img src={Photo} alt="Катерина Вареник" />
        </div>
      </div>

      <div className="home__contacts">
        <div data-aos="zoom-in" data-aos-delay="600">
          Phone: <a href="tel:+375296948912">+375(29)694-89-12</a>
        </div>
        <div data-aos="zoom-in" data-aos-delay="800">
          E-mail: <a href="mailto:katyavarenik@mail.ru">katyavarenik@mail.ru</a>
        </div>
      </div>

      <Slider dataAos="fade-up" dataAosDelay="1200" />
    </div>
  );
};

export default Home;
