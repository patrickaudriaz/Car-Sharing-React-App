import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFoundPage from "./components/NotFoundPage";
import LoginPage from "./components/LoginPage";
import ProfilPage from "./components/ProfilPage";
import ContactPage from "./components/ContactPage";
import AddRidePage1 from "./components/add/AddRidePage1";
import AddRidePage2 from "./components/add/AddRidePage2";
import AddRidePage3 from "./components/add/AddRidePage3";
import AddRidePage4 from "./components/add/AddRidePage4";
import AddRidePage5 from "./components/add/AddRidePage5";
import BookRidePage1 from "./components/book/BookRidePage1";
import BookRidePage2 from "./components/book/BookRidePage2";
import BookRidePage3 from "./components/book/BookRidePage3";
import BookRidePage4 from "./components/book/BookRidePage4";
import DriverPage from "./components/DriverPage";
import PassengerPage from "./components/PassengerPage";
import "./App.scss";

//defines all the routes in our application
const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={LoginPage} exact={true} />
      <Route path="/driver" component={DriverPage} exact />
      <Route path="/passenger" component={PassengerPage} exact />
      <Route path="/add/1" component={AddRidePage1} exact />
      <Route path="/add/2" component={AddRidePage2} exact />
      <Route path="/add/3" component={AddRidePage3} exact />
      <Route path="/add/4" component={AddRidePage4} exact />
      <Route path="/add/5" component={AddRidePage5} exact />
      <Route path="/book/1" component={BookRidePage1} exact />
      <Route path="/book/2" component={BookRidePage2} exact />
      <Route path="/book/3" component={BookRidePage3} exact />
      <Route path="/book/4" component={BookRidePage4} exact />
      <Route path="/profil" component={ProfilPage} exact />
      <Route path="/contact" component={ContactPage} exact />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

export default App;
