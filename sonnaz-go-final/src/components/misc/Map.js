import React, { Component } from "react";
import { Button } from "react-materialize";
import mapboxgl from "mapbox-gl";
import { setInsideValue } from "../../actions/filters";
import { connect } from "react-redux";

//API key
mapboxgl.accessToken =
  "pk.eyJ1IjoiamFja2VubiIsImEiOiJjanE2am1tZ3gxOHY1NDNxaDR4dGFqYXo5In0.kGiYv0GCpu_kH9H1t0bHUg";

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: 7.110337,
      lat: 46.830371,
      zoom: 12,
      stop: ""
    };
  }

  //passing inside value to redux store
  componentWillUnmount = () => {
    this.props.dispatch(setInsideValue(this.state.stop));
  };

  componentDidMount = () => {
    //markers that will be displayed om the map
    var geojson = {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [7.112046, 46.830576]
          },
          properties: {
            title: "Administration communale"
          }
        },

        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [7.099866, 46.838253]
          },
          properties: {
            title: "Le Sarrazin"
          }
        }
      ]
    };
    const { lng, lat, zoom } = this.state;
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom
    });
    map.on("move", () => {
      const { lng, lat } = map.getCenter();
      this.setState({
        lng: lng.toFixed(4),
        lat: lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });
    // Add zoom and rotation controls to the map.
    map.addControl(new mapboxgl.NavigationControl());
    // Add geolocate control to the map.
    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: true
      })
    );
    document.getElementById("fit").addEventListener("click", function() {
      map.flyTo({ center: [lng, lat], zoom: zoom });
    });

    //set custom map style (customised from https://studio.mapbox.com/)
    map.setStyle("mapbox://styles/jackenn/cjq6js6u3blli2rqaiviaeqcw");

    //allow acces to "this" inside foreach
    var component = this;

    // add markers to map
    geojson.features.forEach(function(marker) {
      // create a HTML element for each feature
      var el = document.createElement("div");
      el.addEventListener("click", () => {
        component.setState(() => {
          return {
            stop: marker.properties.title
          };
        });
        el.className = "marker-selected";
        var delayInMilliseconds = 700; //0.7 second

        setTimeout(function() {
          el.className = "marker";
        }, delayInMilliseconds);

        console.log(component.state.stop);
      });

      if (component.state.stop === "") {
        el.className = "marker";
      }

      el.value = marker.properties.title;
      el.title = marker.properties.title;
      // add popups
      var popup = new mapboxgl.Popup({
        offset: 25,
        closeButton: false
      }).setHTML(
        '<p class="popup-text center"><b>Sélectionné :</b><br />' +
          marker.properties.title
          +'<br /><button><a href="#mybutton" class="select-marker">Confirmer</></button>'
      );

      // make a marker for each feature and add to the map
      new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .setPopup(popup)
        .addTo(map);
    });
  };
  render() {
    return (
      <div className="map">
        <div
          ref={el => (this.mapContainer = el)}
          className=" map absolute right left top bottom"
        >
          <Button waves="light" className="black-text map-button" id="fit">
            Recentrer
          </Button>
        </div>
      </div>
    );
  }
}

export default connect()(Map);