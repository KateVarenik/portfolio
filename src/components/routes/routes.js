import { Switch, Route } from "react-router-dom";

import PageNotFound from "../../pages/404";
import Home from "../../pages/home";
import Portfolio from "../../pages/portfolio";
import Contacts from "../../pages/contacts";

export const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>

    <Route path="/portfolio">
      <Portfolio />
    </Route>

    <Route path="/contacts">
      <Contacts />
    </Route>

    <Route
      path="/linkedin"
      component={() => {
        window.location.href =
          "https://www.linkedin.com/in/екатерина-вареник-2b2472186";
      }}
    />

    <Route
      path="/github"
      component={() => {
        window.location.href = "https://github.com/KateVarenik";
      }}
    />

    <Route
      path="/instagram"
      component={() => {
        window.location.href = "https://www.instagram.com/garnetwinkle/";
      }}
    />

    <Route
      path="/telegram"
      component={() => {
        window.location.href = "https://t.me/katevarenik";
      }}
    />

    <Route
      path="/vk"
      component={() => {
        window.location.href = "https://vk.com/id36323651";
      }}
    />
    <Route
      path="/audiofree"
      component={() => {
        window.location.href = "https://katevarenik.github.io/AudioFree/";
      }}
    />
    <Route
      path="/waxom"
      component={() => {
        window.location.href = "https://katevarenik.github.io/landing-Waxom/";
      }}
    />
    <Route
      path="/odigo"
      component={() => {
        window.location.href =
          "https://katevarenik.github.io/travel-landing-page/";
      }}
    />
    <Route
      path="/hungry"
      component={() => {
        window.location.href =
          "https://katevarenik.github.io/landing-hungry-people/";
      }}
    />
    <Route
      path="/dreammaker"
      component={() => {
        window.location.href = "https://katevarenik.github.io/Dreammaker/";
      }}
    />
    <Route
      path="/webovio"
      component={() => {
        window.location.href = "https://katevarenik.github.io/webovio/";
      }}
    />
    <Route
      path="/coffee"
      component={() => {
        window.location.href =
          "https://katevarenik.github.io/responsive-landing-page-coffee/";
      }}
    />
    <Route
      path="/basket_catalog"
      component={() => {
        window.location.href = "https://katevarenik.github.io/product_catalog/";
      }}
    />
    <Route
      path="/login_form"
      component={() => {
        window.location.href =
          "https://katevarenik.github.io/Responsive-Login-Form/";
      }}
    />
    <Route
      path="/christmas_landing"
      component={() => {
        window.location.href =
          "https://katevarenik.github.io/Christmas-landing";
      }}
    />
    <Route
      path="/barbershop"
      component={() => {
        window.location.href = "https://katevarenik.github.io/Barbershop/";
      }}
    />

    <Route path="*">
      <PageNotFound />
    </Route>
  </Switch>
);

export default Routes;
