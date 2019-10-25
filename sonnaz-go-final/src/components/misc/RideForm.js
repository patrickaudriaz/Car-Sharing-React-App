import React, { Component } from "react";
import Icon from "@material-ui/core/Icon";
import { connect } from "react-redux";
import "react-dates/lib/css/_datepicker.css";

class RideForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      driver: props.ride ? props.ride.driver : props.driver,
      places: props.places,
      outside_destination: props.ride
        ? props.ride.outside_destination.toString()
        : props.outside,
      inside_destination: props.ride
        ? props.ride.inside_destination.toString()
        : props.inside,
      createdAt: props.createdAt,
      direction: props.direction,
      error: ""
    };
  }
  onDriverChange = e => {
    const driver = e.target.value;
    this.setState(() => ({ driver }));
  };
  onDirectionChange = e => {
    const direction = e.target.value;
    this.setState(() => ({ direction }));
  };
  onOutsideChange = e => {
    const outside_destination = e.target.value;
    this.setState(() => ({ outside_destination }));
  };
  onInsideChange = e => {
    const inside_destination = e.target.value;
    this.setState(() => ({ inside_destination }));
  };
  onPlacesChange = e => {
    const places = e.target.value;
    if (!places || places.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ places }));
    }
  };
  onDateChange = createdAt => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  onSubmit = e => {
    e.preventDefault();
    if (
      !this.state.driver ||
      !this.state.places ||
      !this.state.direction ||
      !this.state.outside_destination ||
      !this.state.inside_destination
    ) {
      this.setState(() => ({
        error:
          "S'il vous plaît fournissez votre nom, direction, nombre de places, les deux destinations ainsi que la date et l'heure du trajet"
      }));
    } else {
      this.setState(() => ({ error: "" }));
      this.props.onSubmit({
        driver: this.state.driver,
        direction: this.state.direction,
        outside_destination: this.state.outside_destination,
        inside_destination: this.state.inside_destination,
        places: this.state.places,
        createdAt: this.state.createdAt
      });
    }
  };
  render() {
    return (
      <div>
        <div className="error">
          {this.state.error && <p>{this.state.error}</p>}
        </div>
        <div>
          <form onSubmit={this.onSubmit} className="col s12">
            <input
              hidden
              id="driver_name"
              type="text"
              autoFocus
              value={this.props.driver}
              onChange={this.onDriverChange}
              readOnly
            />
            <input
              hidden
              id="direction"
              type="text"
              autoFocus
              value={this.props.direction}
              onChange={this.onDirectionChange}
              readOnly
            />
            <input
              hidden
              type="text"
              id="arret_exterieure"
              autoFocus
              value={this.props.outside}
              onChange={this.onOutsideChange}
              readOnly
            />
            <input
              hidden
              type="text"
              id="arret_commune"
              autoFocus
              value={this.props.inside}
              onChange={this.onInsideChange}
              readOnly
            />
            <input
              hidden
              id="places"
              type="text"
              value={this.props.places}
              onChange={this.onDateChange}
              readOnly
            />
            <input
              hidden
              id="day"
              type="text"
              value={this.props.createdAt}
              onChange={this.onDateChange}
              readOnly
            />
            <input
              hidden
              id="hour"
              type="text"
              value={this.props.createdAt}
              onChange={this.onPlacesChange}
              readOnly
            />
            <button className="reservation-next fab">
              <Icon>save</Icon>
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default connect()(RideForm);
