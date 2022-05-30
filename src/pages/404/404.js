import { Link } from "react-router-dom";
import "./404.css";
import PageNotPoundImg from "../../img/404.svg";

export const PageNotFound = () => {
  return (
    <div className="PageNotFound">
      <img src={PageNotPoundImg} alt="Page Not Found" />
      <Link to="/">Попасть на главную</Link>
    </div>
  );
};

export default PageNotFound;
