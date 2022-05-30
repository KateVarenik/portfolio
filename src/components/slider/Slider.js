import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import { Pagination } from "swiper";

import "./Slider.css";
import LessIcon from "../icons/less";
import SassIcon from "../icons/sass";
import JavascriptIcon from "../icons/javascript";
import ReactIcon from "../icons/react";
import GitIcon from "../icons/git";
import HtmlIcon from "../icons/html";
import CssIcon from "../icons/css";
import PhotosopIcon from "../icons/photoshop";
import FigmaIcon from "../icons/figma";
import CheckIcon from "../icons/check";
import TitleBcg from "../addings/titlebcg/titlebcg";

export default function Slider({ dataAos, dataAosDelay }) {
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      grabCursor="true"
      className="slider"
      data-aos={dataAos}
      data-aos-delay={dataAosDelay}
    >
      <SwiperSlide>
        <TitleBcg>about</TitleBcg>
        <div className="slider__content">
          <p>
            Привет, я Катя, мне 25 лет. Родилась и живу в Минске. Изучаю и
            практикую веб-разработку на протяжении 2-х лет.
          </p>
          <p>
            До того, как стать front-end разработчиком, я закончила
            экономический университет и работала маркетологом. В прочем, именно
            там я поняла, что технические вещи мне нравятся больше :)
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <TitleBcg>skills</TitleBcg>
        <div className="slider__content">
          <ul>
            <li>
              <HtmlIcon /> html5, <CssIcon /> ccs3
            </li>
            <li>
              <JavascriptIcon /> javascript, <ReactIcon /> react js
            </li>
            <li>
              <LessIcon />
              less, <SassIcon /> sass
            </li>
            <li>
              <GitIcon /> git
            </li>
            <li>
              <PhotosopIcon /> photoshop, <FigmaIcon /> figma
            </li>
          </ul>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <TitleBcg>qualities</TitleBcg>
        <div className="slider__content qualities">
          <ul>
            <li>
              <CheckIcon /> добросовестность
            </li>
            <li>
              <CheckIcon />
              самостоятельность
            </li>
            <li>
              <CheckIcon />
              перфекционизм
            </li>
            <li>
              <CheckIcon />
              усердность
            </li>
            <li>
              <CheckIcon />
              дружелюбие
            </li>
            <li>
              <CheckIcon />
              открытость к новым знаниям
            </li>
          </ul>
          <p>
            английский язык - <span>Intermediate</span>
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
