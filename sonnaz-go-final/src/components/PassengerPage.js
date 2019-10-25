import React, { Component } from "react";
import RidesList from "./misc/RidesList";
import PassengerMenu from "./passenger/MenuPassenger";
import BookRideButton from "./passenger/BookRideButton";
import RideListFilters from "./misc/RideListFilters";

class PassengerPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      role: "passenger"
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="App passenger-medium-small Passenger">
        <div className="container">
          <div className="passenger-wrapper">
            <PassengerMenu />
            <RideListFilters />
            <RidesList role={this.state.role} />
          </div>
          <BookRideButton />
        </div>
      </div>
    );
  }
}

export default PassengerPage;
