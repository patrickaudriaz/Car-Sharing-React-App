import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import PassengerMenu from "../passenger/MenuPassenger";
import Icon from "@material-ui/core/Icon";
import Fab from "@material-ui/core/Fab";
import { connect } from "react-redux";
import BookForm from "../misc/BookForm";

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

class BookRidePage3 extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { classes } = this.props;
    return (
      <div className="App container">
        <div className="reservation-wrapper">
          <PassengerMenu />
          <div className="reservation-header">
            <div className="col s2 m1 l1">
              <NavLink className="reservation-back" to="/book/2">
                <Icon className="reservation-back">keyboard_arrow_left</Icon>
              </NavLink>
            </div>
            <BookForm />
          </div>
        </div>
        <NavLink to="/book/4">
          <div className="reservation-next">
            <Fab classes={{ root: classes.button }}>
              <Icon>search</Icon>
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

export default connect(mapStateToProps)(withStyles(styles)(BookRidePage3));
