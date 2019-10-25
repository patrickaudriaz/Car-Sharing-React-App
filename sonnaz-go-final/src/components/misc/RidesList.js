import React from "react";
import { connect } from "react-redux";
import RideListItemDriver from "./RideListItemDriver";
import RideListItemPassenger from "./RideListItemPassenger";
import selectRides from "../../selectors/rides";

const RidesList = props => (
  <div className="driver-rides">
    <div className="container">
      <div className="row">
        <div className="col s12 m10 l10" />
        <div className="col s12 m10 l10 offset-l1 offset-m1">
          <div className="driver-label ">MES PROCHAINS TRAJETS</div>
          {props.role === "driver" &&
            (props.rides.length ? (
              props.rides.map(ride => {
                return <RideListItemDriver key={ride.id} {...ride} />;
              })
            ) : (
              <div className="driver-label no-rides ">Aucun trajet</div>
            ))}
          {props.role === "passenger" &&
            (props.rides.length ? (
              props.rides.map(ride => {
                return <RideListItemPassenger key={ride.id} {...ride} />;
              })
            ) : (
              <div className="driver-label no-rides ">Aucun trajet</div>
            ))}
        </div>
        <div className="col s12 m12 l4" />
      </div>
    </div>
  </div>
);

//get values from redux stores
const mapStateToProps = state => {
  return {
    rides: selectRides(state.rides, state.filters)
  };
};

export default connect(mapStateToProps)(RidesList);
