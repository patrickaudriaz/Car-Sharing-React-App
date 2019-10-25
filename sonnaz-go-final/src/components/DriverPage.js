import React, { Component } from "react";
import RidesList from "./misc/RidesList";
import RideListFilters from "./misc/RideListFilters";
import AddRideButton from "./driver/AddRideButton";
import DriverMenu from "./driver/MenuDriver";

class DriverPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      role: "driver"
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="App driver-medium-small Driver">
        <div className="container">
          <div className="driver-wrapper">
            <DriverMenu />
            <RideListFilters />
            <RidesList role={this.state.role} />
          </div>
          <AddRideButton />
        </div>
      </div>
    );
  }
}

export default DriverPage;
