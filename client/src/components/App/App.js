import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import GoogleMap from "../../components/GoogleMap/GoogleMap";
import Landing from "../Landing/Landing";
import * as actions from "../../redux/actions/auth";
import { connect } from "react-redux";
import Nav from "../Nav/Nav";
import Header from "../Header/Header";

const getLocation = () => {
  const geolocation = navigator.geolocation;

  const location = new Promise((resolve, reject) => {
    if (!geolocation) {
      reject(new Error("Not Supported!"));
    }

    geolocation.getCurrentPosition(
      position => {
        resolve(position);
      },
      () => {
        reject(new Error("Permission denied"));
      }
    );
  });
  console.log(location);
  return location;
};

class App extends Component {
  state = {
    haveLocation: false,
    userLocation: {},
    defaultLocation: { coords: { lat: 40.7608, lng: -111.891 } }
  };

  componentDidMount() {
    // this.props.fetchUser();
    getLocation().then(location => {
      this.setState({
        ...this.state,
        userLocation: location,
        haveLocation: true
      });
    });
  }
  render() {
    const { haveLocation, userLocation, defaultLocation } = this.state;
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            {haveLocation ? (
              <GoogleMap location={userLocation} />
            ) : (
              <GoogleMap location={defaultLocation} />
            )}
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default connect(
  null,
  actions
)(App);
