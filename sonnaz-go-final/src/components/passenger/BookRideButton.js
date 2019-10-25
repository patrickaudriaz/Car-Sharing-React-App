import React, { Component } from "react";
import Icon from "@material-ui/core/Icon";
import Fab from "@material-ui/core/Fab";
import { withStyles } from "@material-ui/core/styles";
import Zoom from "react-reveal/Zoom";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { setDirectionValue } from "../../actions/filters";

//CSS injection for Material UI override
const styles = theme => ({
  button: {
    color: "white",
    background: "#64bda4",
    "&:hover": {
      background: "#549c88"
    },
    "&:focus": {
      background: "#64bda4"
    }
  },
  buttonfocused: {
    color: "white",
    background: "#3d3d3c",
    "&:hover": {
      background: "#2d2d2d"
    },
    "&:focus": {
      background: "#3d3d3c"
    }
  }
});

class BookRideButton extends Component {
  constructor() {
    super();
    this.state = {
      direction: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }
  //set selected direction in redux store
  handleClick(e) {
    this.setState({
      direction: e.currentTarget.value
    });
    this.props.dispatch(setDirectionValue(e.currentTarget.value));

    console.log(e.currentTarget.value);
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <h2 className="passenger-label">RESERVER UN NOUVEAU TRAJET</h2>
        <div className="passenger-direction-choice">
          <Zoom>
            <span className="direction-button">
              <NavLink to="/book/1">
                <Fab
                  value="home"
                  onClick={this.handleClick}
                  classes={{ root: classes.button }}
                >
                  <Icon>home</Icon>
                </Fab>
              </NavLink>

              <div className="choice-label">Rentrer à la maison</div>
            </span>
            <span className="direction-button">
              <NavLink to="/book/1">
                <Fab
                  value="ext"
                  onClick={this.handleClick}
                  classes={{ root: classes.button }}
                >
                  <Icon>time_to_leave</Icon>
                </Fab>
              </NavLink>

              <div className="choice-label">Partir de la Sonnaz</div>
            </span>
          </Zoom>
        </div>
      </div>
    );
  }
}

//get values from redux stores
const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(withStyles(styles)(BookRideButton));
