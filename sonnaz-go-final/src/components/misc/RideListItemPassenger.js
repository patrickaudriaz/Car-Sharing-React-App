import React, { Component } from "react";
import { connect } from "react-redux";
import Icon from "@material-ui/core/Icon";
import Fab from "@material-ui/core/Fab";
import { removeRide } from "../../actions/rides";
import { withStyles } from "@material-ui/core/styles";
import moment from "moment"; //date formatting
import "moment/locale/fr"; //import french language
moment.locale("fr"); //use french instead english

//CSS injection for Material UI override
const styles = theme => ({
  button: {
    margin: "25px 0 0 0",
    width: "50px",
    height: "50px",
    color: "black",
    background: "white",
    "&:hover": {
      background: "#ff9393"
    },
    "&:focus": {
      background: "#ff9393"
    }
  }
});

class RideListItem extends Component {
  render() {
    const {
      classes,
      dispatch,
      id,
      driver,
      direction,
      inside_destination,
      outside_destination,
      createdAt
    } = this.props;
    return (
      <div className="center driver-item">
        {direction === "ext" ? (
          <div>
            <Icon className="white-text driver-item-icon">time_to_leave</Icon>
            <p className="white-text driver-item-label-b">Conducteur :</p>
            <div className="white-text driver-item-label">{driver}</div>
            <p className="white-text driver-item-label-b">Arrêt desservi :</p>
            <div className="white-text driver-item-label">
              {inside_destination}
            </div>
            <p className="white-text driver-item-label-b">En direction de :</p>
            <p>
              <span className="white-text driver-item-label">
                {outside_destination}
              </span>
            </p>
          </div>
        ) : (
          <div>
            <Icon className="white-text driver-item-icon">home</Icon>
            <p className="white-text driver-item-label-b">Conducteur :</p>
            <div className="white-text driver-item-label">{driver}</div>
            <p className="white-text driver-item-label-b">Arrêt desservi :</p>
            <div className="white-text driver-item-label">
              {outside_destination}
            </div>
            <p className="white-text driver-item-label-b">En direction de :</p>
            <p>
              <span className="white-text driver-item-label">
                {inside_destination}
              </span>
            </p>
          </div>
        )}
        <p className="white-text driver-item-label-t">
          <span className="white-text driver-item-label">
            {moment(createdAt).format("dddd, Do MMMM YYYY")}
          </span>
        </p>
        <span className="white-text driver-item-label">
          <Icon className="white-text driver-item-icon">access_time</Icon>
          {moment(createdAt).format("HH:mm")}
        </span>
        <div>
          <Fab
            onClick={() => {
              dispatch(removeRide({ id }));
            }}
            title="Supprimer trajet"
            classes={{ root: classes.button }}
          >
            <Icon>delete</Icon>
          </Fab>
        </div>
      </div>
    );
  }
}

export default connect()(withStyles(styles)(RideListItem));
