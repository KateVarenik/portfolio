import { Link } from "react-router-dom";
import "./portfolio-card.css";

export const PortfolioCard = ({
  title,
  img,
  desc,
  link,
  dataAos,
  dataAosDelay,
}) => (
  <Link
    to={link}
    target="_blank"
    className="portfolio-card"
    data-aos={dataAos}
    data-aos-delay={dataAosDelay}
  >
    <img className="portfolio-card__image" src={img} alt={title} />

    <div className="portfolio-card__desc">
      {desc.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  </Link>
);

export default PortfolioCard;
