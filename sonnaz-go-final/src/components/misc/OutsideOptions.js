import React, { Component } from "react";
import bus_image from "../../assets/bus.png";
import bus_image_focused from "../../assets/busselected.png";
import train_image from "../../assets/train.png";
import train_image_focused from "../../assets/trainselected.png";
import { setOutsideValue } from '../../actions/filters';
import { connect } from 'react-redux';
import Fade from "react-reveal/Fade";

class OutsideDirection extends Component {
  constructor() {
    super();
    this.state = {
      selectedOption: ""
    };
    this.handleClick = this.handleClick.bind(this);
  };
  handleClick(e) {
    this.setState({
      selectedOption: e.currentTarget.id
    });
     this.props.dispatch(setOutsideValue(e.currentTarget.id));
  };
  render() {
    return (
      <div className=" destinations">
        <div className="row">
          <div className="container">
            <Fade>
              
              <div className="col s6 m4 l4 offset-l2 offset-m2 center">
              <a href="#mybutton2">
                {this.state.selectedOption === "Gare de Belfaux CFF" ? (
                  <img
                    id="Gare de Belfaux CFF"
                    src={train_image_focused}
                    alt="Gare de Belfaux CFF"
                    className="dest-img"
                  />
                ) : (
                  <img
                    id="Gare de Belfaux CFF"
                    onClick={this.handleClick}
                    src={train_image}
                    alt="Gare de Belfaux CFF"
                    className="dest-img"
                  />
                )}
              </a>
                <h5 className="destination-label">Gare de Belfaux CFF</h5>
              </div>
              
              <div className="col s6 m4 l4 center">
              <a href="#mybutton2">
                {this.state.selectedOption === "Gare de Belfaux Village" ? (
                  <img
                    id="Gare de Belfaux Village"
                    src={train_image_focused}
                    alt="gare belfaux village"
                    className="dest-img"
                  />
                ) : (
                  <img
                    id="Gare de Belfaux Village"
                    onClick={this.handleClick}
                    src={train_image}
                    alt="Gare de Belfaux Village"
                    className="dest-img"
                  />
                )}
              </a>
                <h5 className="destination-label">Gare de Belfaux Village</h5>
              </div>
              
              <div className="col s6 m4 l4 offset-l2 offset-m2 center">
              <a href="#mybutton2">
                {this.state.selectedOption === "Gare de Pensier" ? (
                  <img
                    id="Gare de Pensier"
                    src={train_image_focused}
                    alt="Gare de Pensier "
                    className="dest-img"
                  />
                ) : (
                  <img
                    id="Gare de Pensier"
                    onClick={this.handleClick}
                    src={train_image}
                    alt="Gare de Pensier"
                    className="dest-img"
                  />
                )}
              </a>
                <h5 className="destination-label">Gare de Pensier</h5>
              </div>
              
              <div className="col s6 m4 l4 center">
              <a href="#mybutton2">
                {this.state.selectedOption === "Arrêt Portes de Fribourg" ? (
                  <img
                    id="Arrêt Portes de Fribourg"
                    src={bus_image_focused}
                    alt="Arrêt Portes de Fribourg"
                    className="dest-img"
                  />
                ) : (
                  <img
                    id="Arrêt Portes de Fribourg"
                    onClick={this.handleClick}
                    src={bus_image}
                    alt="Arrêt Portes de Fribourg"
                    className="dest-img"
                  />
                )}
              </a>
                <h5 className="destination-label">Arrêt Portes de Fribourg</h5>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    );
  };
};

//get values from redux store
const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(OutsideDirection);
