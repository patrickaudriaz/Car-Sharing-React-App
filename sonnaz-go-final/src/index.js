import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import "./index.css";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import { addRide } from "./actions/rides";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const store = configureStore();

//Adding some test values to the store
store.dispatch(
  addRide({
    driver: "Nestor Peña",
    places: 4,
    direction: "ext",
    outside_destination: "Gare de Belfaux CFF",
    inside_destination: "Le Sarrazin",
    createdAt: 1500000000000
  })
);
store.dispatch(
  addRide({
    driver: "Patrick Audriaz",
    places: 3,
    direction: "home",
    outside_destination: "Gare de Pensier",
    inside_destination: "Administration communale",
    createdAt: 1502000000000
  })
);
store.dispatch(
  addRide({
    driver: "Sandy Ingram",
    places: 4,
    direction: "home",
    outside_destination: "Gare de Pensier",
    inside_destination: "Administration communale",
    createdAt: 1503000000000
  })
);
store.dispatch(
  addRide({
    driver: "Philippe Joye",
    places: 2,
    direction: "home",
    outside_destination: "Gare de Pensier",
    inside_destination: "Administration communale",
    createdAt: 1505000000000
  })
);
store.dispatch(
  addRide({
    driver: "Patrick Audriaz",
    places: 1,
    direction: "ext",
    outside_destination: "Gare de Pensier",
    inside_destination: "Administration communale",
    createdAt: 1502000000000
  })
);
store.dispatch(
  addRide({
    driver: "Sandy Ingram",
    places: 2,
    direction: "ext",
    outside_destination: "Arrêt Portes de Fribourg",
    inside_destination: "Administration communale",
    createdAt: 1510000000000
  })
);

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);
ReactDOM.render(jsx, document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
