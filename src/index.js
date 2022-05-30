import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./reset.css";
import "./style.css";
import Layout from "./components/layout";
import Routes from "./components/routes";
import ScrollToTop from "./components/addings/scroll-to-top";

ReactDOM.render(
  <StrictMode>
    <Router>
      <ScrollToTop>
        <Layout>
          <Routes />
        </Layout>
      </ScrollToTop>
    </Router>
  </StrictMode>,
  document.getElementById("root")
);
