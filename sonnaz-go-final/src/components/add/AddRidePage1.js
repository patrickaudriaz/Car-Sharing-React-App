import React, { Component } from "react";
import DirectionChoice from "../misc/DirectionChoice";
import { NavLink } from "react-router-dom";
import DriverMenu from "../driver/MenuDriver";
import Icon from "@material-ui/core/Icon";
import Fab from "@material-ui/core/Fab";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";

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

class AddRidePage1 extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { classes } = this.props;
    return (
      <div className="App container">
        <div className="reservation-wrapper">
          <DriverMenu />
          <div className="reservation-header">
            <div className="col s2 m1 l1">
              <NavLink className="reservation-back" to="/driver">
                <Icon className="reservation-back">keyboard_arrow_left</Icon>
              </NavLink>
            </div>
          </div>
          <DirectionChoice />
        </div>
        <NavLink to="/add/2">
          <div className="reservation-next">
            <Fab classes={{ root: classes.button }}>
              <Icon>arrow_forward</Icon>
            </Fab>
          </div>{" "}
        </NavLink>
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

export default connect(mapStateToProps)(withStyles(styles)(AddRidePage1));
