import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { NavItem, Navbar } from "react-materialize";
import logo from "../../assets/logo.png";
import driver_image from "../../assets/driver.svg";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

//get logo image
const Img = <img src={logo} className="brand-img" alt={"Sonnaz Go"} />;

class MenuPassenger extends Component {
  state = {
    open: false
  };
  handleClickOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    return (
      <div className="menu">
        <div className="row">
          <div className="col s10 m11 l11">
            <Navbar className="nav" brand={Img} right>
              <li className="menu-link">
                <NavLink className="menu-link" to="/passenger">
                  Modifier mon profil
                </NavLink>
              </li>
              <li className="menu-link">
                <NavLink to="/contact"> Contacter l'admin </NavLink>
              </li>
              <NavItem className="menu-link" href="/">
                Déconnexion
              </NavItem>
            </Navbar>
          </div>
          <div className="col s2 m1 l1">
            {/* To driver page button */}
            <div title="Devenir conducteur" className="driver-icon">
              <img
                onClick={this.handleClickOpen}
                src={driver_image}
                width="35"
                alt={"Driver"}
              />
              <Dialog
                open={this.state.open}
                onClose={this.handleClose}
                aria-labelledby="form-dialog-title"
              >
                <DialogTitle id="form-dialog-title">
                  Devenir conducteur ?
                </DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    Vous allez changer d'interface et aller à l'accueil
                    conducteur
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={this.handleClose}>Annuler</Button>
                  <NavLink to="/driver">
                    <Button>OK</Button>
                  </NavLink>
                </DialogActions>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MenuPassenger;
