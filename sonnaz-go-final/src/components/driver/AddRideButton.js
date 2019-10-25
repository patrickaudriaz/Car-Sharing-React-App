import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Icon from "@material-ui/core/Icon";
import Fab from "@material-ui/core/Fab";
import { withStyles } from "@material-ui/core/styles";
import Zoom from "react-reveal/Zoom";

//CSS injection for Material UI override
const styles = theme => ({
  button: {
    color: "white",
    background: "#64bda4",
    "&:hover": {
      background: "#549c88"
    }
  }
});

class AddRideButton extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="driver-new">
        <div className="row">
          <div className="col s12 m12 l4" />
          <div className="col s12 m12 l4 center">
            <h2 className="driver-label">PROPOSER UN NOVUEAU TRAJET</h2>
            <Zoom>
              <NavLink to="/add/1">
                <Fab classes={{ root: classes.button }}>
                  <Icon>add</Icon>
                </Fab>
              </NavLink>
            </Zoom>
          </div>
          <div className="col s12 m12 l4" />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(AddRideButton);
