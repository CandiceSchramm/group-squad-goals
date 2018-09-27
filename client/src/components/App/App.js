import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GoogleMap from "../../components/GoogleMap/GoogleMap";
import Landing from "../Landing/Landing";
import Profile from "../Profile/Profile";
import * as actions from "../../redux/actions/auth";
import { connect } from "react-redux";
import Events from "../CategoryBox";
import Single from "../EventDetails";
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
      <Router>
      <div className="container">
        <Switch>
          <Route exact path="/events" component={Events}/>
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/single" component={Single}/>
          <Route exact path="/" component={Landing} />
            {haveLocation ? (
              <GoogleMap location={userLocation} />
            ) : (
              <GoogleMap location={defaultLocation} />
            )}
        </Switch>
      </div>
      </Router>
    );
  }
}
export default connect(
  null,
  actions
)(App);
