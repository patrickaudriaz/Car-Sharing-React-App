import React from "react";
import { connect } from "react-redux";
import MatchingRideListItem from "./MatchingRideListItem";
import selectRides from "../../selectors/rides";

const MatchingRidesList = (props) => (
  <div className="driver-rides">
    <div className="container">
      <div className="row">
        <div className="col s12 m10 l10" />
        <div className="col s12 m10 l10 offset-l1 offset-m1">
          <div className="driver-label ">Choisissez un des trajets correspondants</div>
          {props.role === "passenger" &&
            (props.rides.length ? (
              props.rides.map(ride => {
                return <MatchingRideListItem key={ride.id} {...ride} />;
              })
            ) : (
              <div className="driver-label no-rides ">Aucun trajet correspond à vos critères</div>
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

export default connect(mapStateToProps)(MatchingRidesList);
