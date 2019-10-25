import React from "react";
import { Row, Input, Icon, Button } from "react-materialize";
import { NavLink } from "react-router-dom";

const Formular = () => (
  <div className="formular">
    <div className="container">
      <div className="row">
        <div className="col s12 m10 l10" />
        <div className="col s12 m10 l10 offset-l1 offset-m1">
          <div className="driver-label ">SIGNALER UN PROBLEME</div>
          <Row>
            <Input s={6} label="Nom complet" validate>
              <Icon>account_circle</Icon>
            </Input>
            <Input s={6} label="Email" validate type="email">
              <Icon>mail</Icon>
            </Input>
            <Input
              s={6}
              label="Date"
              name="on"
              type="date"
              onChange={function(e, value) {}}
            >
              <Icon>date_range</Icon>
            </Input>
            <Input
              s={6}
              label="Heure"
              name="on"
              type="time"
              onChange={function(e, value) {}}
            >
              <Icon>watch_later</Icon>
            </Input>
            <Input s={12} label="Description de l'incident" type="textarea" />
          </Row>
          <NavLink to="/contact">
            <Button
              waves="light"
              className="black-text driver-new-button right"
              floating
              large
              icon="send"
            />
          </NavLink>
        </div>
        <div className="col s12 m10 l10" />
      </div>
    </div>
  </div>
);

export default Formular;
