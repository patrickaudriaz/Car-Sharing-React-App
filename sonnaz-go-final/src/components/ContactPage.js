import React from "react";
import Formular from "./misc/Formular";
import MenuDriver from "./driver/MenuDriver";
import MenuPassenger from "./passenger/MenuPassenger";
import { connect } from "react-redux";

const ContactPage = props => (
  <div className="App driver-medium-small Driver">
    <div className="container">
      <div className="driver-wrapper">
        {props.filters.role === "driver" && <MenuDriver />}
        {props.filters.role === "passenger" && <MenuPassenger />}
      </div>
      <div>
        <Formular />
      </div>
    </div>
  </div>
);

//get values from redux stores
const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ContactPage);
