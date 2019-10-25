import React from "react";
import { NavLink } from "react-router-dom";

const NotFoundPage = () => (
  <div className="App notfound-bg">
    <div className="notfound-container">
      <NavLink to="/">
           <div className="notfound-label ">RETOUR A L'ACCUEIL</div>
      </NavLink>
    </div>
  </div>
);

export default NotFoundPage;
