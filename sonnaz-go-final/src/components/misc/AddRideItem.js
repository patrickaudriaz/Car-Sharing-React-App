import React, { Component } from "react";
import { connect } from "react-redux";
import Icon from "@material-ui/core/Icon";
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

class AddRideItem extends Component {
  render() {
    return (
      <div>
        <div className="check">
          <div className="direction-label ">
            Confirmez que les informations sont correctes
          </div>
          <div className="center driver-item">
            {this.props.direction === "ext" ? (
              <div>
                <Icon className="white-text driver-item-icon">
                  time_to_leave
                </Icon>
                <p className="white-text driver-item-label-b">
                  Arrêt desservi :
                </p>
                <div className="white-text driver-item-label">
                  {this.props.inside}
                </div>
                <p className="white-text driver-item-label-b">
                  En direction de :
                </p>
                <p>
                  <span className="white-text driver-item-label">
                    {this.props.outside}
                  </span>
                </p>
              </div>
            ) : (
              <div>
                <Icon className="white-text driver-item-icon">home</Icon>
                <p className="white-text driver-item-label-b">
                  Arrêt desservi :
                </p>
                <div className="white-text driver-item-label">
                  {this.props.outside}
                </div>
                <p className="white-text driver-item-label-b">
                  En direction de :
                </p>
                <p>
                  <span className="white-text driver-item-label">
                    {this.props.inside}
                  </span>
                </p>
              </div>
            )}
            <h3 hidden>{this.props.driver}</h3>

            <p className="white-text driver-item-label-t">
              <span className="white-text driver-item-label">
                {moment(this.props.createdAt).format("dddd, Do MMMM YYYY")}
              </span>
            </p>
            <span className="white-text driver-item-label">
              <Icon className="white-text driver-item-icon">access_time</Icon>
              {moment(this.props.createdAt).format("HH:mm")}
            </span>
            <span className="white-text driver-item-label driver-item-label-icon">
              <Icon className="white-text driver-item-icon">person</Icon>
              {this.props.places}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(withStyles(styles)(AddRideItem));
