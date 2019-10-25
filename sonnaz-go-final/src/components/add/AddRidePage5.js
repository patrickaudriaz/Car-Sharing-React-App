import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import DriverMenu from "../driver/MenuDriver";
import Icon from "@material-ui/core/Icon";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { addRide } from "../../actions/rides";
import RideForm from "../misc/RideForm";
import AddRideItem from "../misc/AddRideItem";

//CSS injection for Material UI override
const styles = theme => ({
  button: {
    margin: "50px 0 50px 0",
    float: "right",
    color: "white",
    background: "#64bda4",
    "&:hover": {
      background: "#549c88"
    }
  }
});

class AddRidePage5 extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="App container">
        <div className="reservation-wrapper">
          <DriverMenu />
          <div className="reservation-header">
            <div className="col s2 m1 l1">
              <NavLink className="reservation-back" to="/add/4">
                <Icon className="reservation-back">keyboard_arrow_left</Icon>
              </NavLink>
            </div>
            {/* send parameters as props to child component for confirmation page */}
            <AddRideItem
              driver={this.props.filters.driverName}
              direction={this.props.filters.direction}
              outside={this.props.filters.outsideValue}
              inside={this.props.filters.insideValue}
              places={this.props.filters.places}
              createdAt={this.props.filters.createdAt}
            />
          </div>
        </div>
        {/* create the new ride with selected informations*/}
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

export default connect(mapStateToProps)(withStyles(styles)(AddRidePage5));
