import React, { Component } from "react";
import Icon from "@material-ui/core/Icon";
import Fab from "@material-ui/core/Fab";
import { withStyles } from "@material-ui/core/styles";
import Fade from "react-reveal/Fade";
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

class DirectionChoice extends Component {
  constructor() {
    super();
    this.state = {
      direction: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }
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
        <div className="direction">
          <div className="direction-label ">Vers où allez-vous ?</div>
        </div>
        <div className="direction-choice">
          <Fade>
            <span className="direction-button">
              {this.state.direction === "home" ? (
                <Fab value="home" classes={{ root: classes.buttonfocused }}>
                  <Icon>check</Icon>
                </Fab>
              ) : (
                <Fab
                  value="home"
                  onClick={this.handleClick}
                  classes={{ root: classes.button }}
                >
                  <Icon>home</Icon>
                </Fab>
              )}
              <div className="choice-label">Rentrer à la maison</div>
            </span>
            <span className="direction-button">
              {this.state.direction === "ext" ? (
                <Fab value="ext" classes={{ root: classes.buttonfocused }}>
                  <Icon>check</Icon>
                </Fab>
              ) : (
                <Fab
                  value="ext"
                  onClick={this.handleClick}
                  classes={{ root: classes.button }}
                >
                  <Icon>time_to_leave</Icon>
                </Fab>
              )}
              <div className="choice-label">Partir de la Sonnaz</div>
            </span>
          </Fade>
        </div>
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

export default connect(mapStateToProps)(withStyles(styles)(DirectionChoice));
