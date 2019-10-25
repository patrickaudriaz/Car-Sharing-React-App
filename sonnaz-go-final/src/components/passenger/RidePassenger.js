import React, { Component } from "react";
import Icon from "@material-ui/core/Icon";
import Fab from "@material-ui/core/Fab";
import { withStyles } from "@material-ui/core/styles";

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

class Ride extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="center">
        {Rides.map(rideDetails => {
          return (
            <div key={rideDetails.id} className="center passenger-item">
              {rideDetails.direction === "Partir de la Sonnaz" ? (
                <div>
                  <Icon className="white-text passenger-item-icon">
                    time_to_leave
                  </Icon>
                  <p className="white-text passenger-item-label-b">
                    Conducteur :
                  </p>
                  <p>
                    <span className="white-text passenger-item-label">
                      {rideDetails.driver}
                    </span>
                  </p>
                  <p className="white-text passenger-item-label-b">
                    En direction de :{" "}
                  </p>

                  <span className="white-text passenger-item-label">
                    {rideDetails.outsideDest}
                  </span>
                  <p className="white-text passenger-item-label-b">Départ :</p>

                  <div className="white-text passenger-item-label">
                    {rideDetails.insideDest}
                  </div>
                </div>
              ) : (
                <div>
                  <Icon className="white-text passenger-item-icon">home</Icon>
                  <p className="white-text passenger-item-label-b">
                    Conducteur :
                  </p>
                  <p>
                    <span className="white-text passenger-item-label">
                      {rideDetails.driver}
                    </span>
                  </p>
                  <p className="white-text passenger-item-label-b">
                    En direction de :{" "}
                  </p>
                  <div className="white-text passenger-item-label">
                    {rideDetails.insideDest}
                  </div>
                  <p className="white-text passenger-item-label-b">Départ :</p>
                  <p>
                    <span className="white-text passenger-item-label">
                      {rideDetails.outsideDest}
                    </span>
                  </p>
                </div>
              )}
              <p className="white-text passenger-item-label-t">
                {" "}
                <span className="white-text passenger-item-label">
                  {rideDetails.day}
                </span>
              </p>{" "}
              <span className="white-text passenger-item-label">
                <Icon className="white-text passenger-item-icon">
                  access_time
                </Icon>{" "}
                {rideDetails.time}
              </span>
              <div>
                <Fab
                  title="Supprimer trajet"
                  classes={{ root: classes.button }}
                >
                  <Icon>delete</Icon>
                </Fab>
              </div>
            </div>
          );
        })}
      </div>
    );
  };
};

export default withStyles(styles)(Ride);
