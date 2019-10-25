import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import DriverMenu from "../driver/MenuDriver";
import Icon from "@material-ui/core/Icon";
import Fab from "@material-ui/core/Fab";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import OutsideChoice from "../misc/OutsideChoice";

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

class AddRidePage3 extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  };
  render() {
    const { classes } = this.props;
    return (
      <div className="App container">
        <div className="reservation-wrapper">
          <DriverMenu />
          <div className="reservation-header">
            <div className="col s2 m1 l1">
              <NavLink className="reservation-back" to="/add/2">
                <Icon className="reservation-back">keyboard_arrow_left</Icon>
              </NavLink>
            </div>
            <OutsideChoice />
          </div>
        </div>
        <NavLink to="/add/4">
          <div className="reservation-next" id="mybutton2">
            <Fab classes={{ root: classes.button }}>
              <Icon>arrow_forward</Icon>
            </Fab>
          </div>
        </NavLink>
      </div>
    );
  };
};

//get values from redux store
const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(withStyles(styles)(AddRidePage3));
