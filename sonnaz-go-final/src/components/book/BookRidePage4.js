import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import PassengerMenu from "../passenger/MenuPassenger";
import Icon from "@material-ui/core/Icon";
import { connect } from "react-redux";
import { addRide } from "../../actions/rides";
import RideForm from "../misc/RideForm";
import MatchingList from "../misc/MatchingList";
const role = "passenger";
class BookRidePage4 extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="App container">
        <div className="reservation-wrapper">
          <PassengerMenu />
          <div className="reservation-header">
            <div className="col s2 m1 l1">
              <NavLink className="reservation-back" to="/book/3">
                <Icon className="reservation-back">keyboard_arrow_left</Icon>
              </NavLink>
            </div>
            <div>
              <MatchingList role={role} />
            </div>
          </div>
        </div>
        {/* create the new reservation with selected informations*/}
        <RideForm
          driver={this.props.filters.driverName}
          direction={this.props.filters.direction}
          outside={this.props.filters.outsideValue}
          inside={this.props.filters.insideValue}
          places={this.props.filters.places}
          createdAt={this.props.filters.createdAt}
          onSubmit={ride => {
            this.props.dispatch(addRide(ride));
            this.props.history.push("/driver");
          }}
        />
      </div>
    );
  }
}

//get values from redux store
const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(BookRidePage4);
