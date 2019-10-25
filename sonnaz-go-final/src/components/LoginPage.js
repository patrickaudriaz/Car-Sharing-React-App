import React, { Component } from "react";
import Fab from "@material-ui/core/Fab";
import Icon from "@material-ui/core/Icon";
import { withStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import { setTextFilter, setDriverName, setRole } from "../actions/filters";

//CSS injection for Material UI override
const styles = theme => ({
  button: {
    color: "#64bda4",
    background: "white",
    "&:hover": {
      background: "#e5e5e5"
    },
    "&:focus": {
      background: "white"
    }
  }
});

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openDriver: false,
      openPassenger: false,
      role: ""
    };
  }
  componentWillUnmount() {
    this.props.dispatch(setRole(this.state.role));
  }
  handleClickOpenDriver = () => {
    this.setState({ openDriver: true });
    this.setState({ role: "driver" });
  };
  handleCloseDriver = () => {
    this.setState({ openDriver: false });
    this.setState({ role: "" });
  };
  handleClickOpenPassenger = () => {
    this.setState({ openPassenger: true });
    this.setState({ role: "passenger" });
  };
  handleClosePassenger = () => {
    this.setState({ openPassenger: false });
    this.setState({ role: "" });
  };
  onKeyPress = e => {
    if (e.key === "Enter") {
      this.props.dispatch(setTextFilter(e.target.value));
      this.props.dispatch(setDriverName(e.target.value));
      this.setState({ redirect: true });
    }
  };

  render() {
    const { classes } = this.props;
    if (this.state.redirect) {
      if (this.state.role === "driver") {
        return <Redirect push to="/driver" />;
      } else {
        return <Redirect push to="/passenger" />;
      }
    }
    return (
      <div className="App Login">
        <div className="login-item">
          <Fab
            classes={{ root: classes.button }}
            onClick={this.handleClickOpenDriver}
          >
            <Icon>directions_car</Icon>
          </Fab>
          <Dialog
            open={this.state.openDriver}
            onClose={this.handleCloseDriver}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">
              Connexion en tant que conducteur
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                Veuillez entrer votre Prénom afin de vous identifier.
              </DialogContentText>
              <TextField
                autoFocus
                fullWidth
                autoComplete="off"
                name="name"
                label="Prénom"
                value={this.props.filters.text}
                onKeyPress={this.onKeyPress}
                onChange={e => {
                  this.props.dispatch(setTextFilter(e.target.value));
                  this.props.dispatch(setDriverName(e.target.value));
                }}
                margin="normal"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleCloseDriver}>Annuler</Button>
              <NavLink to="/driver">
                <Button>Se connecter</Button>
              </NavLink>
            </DialogActions>
          </Dialog>
          <div className="login-label">Conducteur</div>
        </div>
        <div className="login-item">
          <Fab
            classes={{ root: classes.button }}
            onClick={this.handleClickOpenPassenger}
          >
            <Icon>person</Icon>
          </Fab>
          <Dialog
            open={this.state.openPassenger}
            onClose={this.handleClosePassenger}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">
              Connexion en tant que passager
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                Veuillez entrer votre Prénom afin de vous identifier.
              </DialogContentText>
              <TextField
                autoFocus
                fullWidth
                autoComplete="off"
                name="name"
                label="Prénom"
                value={this.props.filters.text}
                onKeyPress={this.onKeyPress}
                onChange={e => {
                  this.props.dispatch(setTextFilter(e.target.value));
                  this.props.dispatch(setDriverName(e.target.value));
                }}
                margin="normal"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClosePassenger}>Annuler</Button>
              <NavLink to="/passenger">
                <Button>Se connecter</Button>
              </NavLink>
            </DialogActions>
          </Dialog>
          <div className="login-label">Passager</div>
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

export default connect(mapStateToProps)(withStyles(styles)(LoginPage));
