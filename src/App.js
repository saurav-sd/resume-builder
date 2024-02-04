import React from "react";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { Route } from "react-router-dom";
import Education from "./components/education";
import Contacts from "./components/contact";
import LandingPage from "./components/landingPage";
import GettingStarted from "./components/gettingStarted";
import Finalize from "./components/finalizePage";
import Login from "./components/login";
import Register from "./components/register";
import AboutUs from "./components/aboutUs";
import "./static/scss/app.scss";
import PrivateRoute from './components/privateRoute';
import { Switch } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <>
      <Header></Header>

      <Switch>
          <PrivateRoute path="/education" component={Education}></PrivateRoute>
          <PrivateRoute path="/contact" component={Contacts}></PrivateRoute>
          <Route path="/getting-started" component={GettingStarted}></Route>
          <PrivateRoute path="/resume-templates" component={GettingStarted}></PrivateRoute>
          <Route path="/about-us"     component={AboutUs}></Route>
          <PrivateRoute path="/finalize" component={Finalize}></PrivateRoute>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>             
          <Route path="/" component={LandingPage}></Route>
      </Switch>
      <Footer></Footer>
    </>
  );
}

export default App;
