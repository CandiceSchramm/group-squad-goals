import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GoogleMap from "./components/GoogleMap";



const getLocation = () => {
  const geolocation = navigator.geolocation;

  const location = new Promise((resolve, reject) => {
    if (!geolocation) {
      reject(new Error('Not Supported!'));
    }

    geolocation.getCurrentPosition((position) => {
      resolve(position);
    }, () => {
      reject(new Error('Permission denied'));
    })
  })
  console.log(location);
  return location;
}

class App extends Component {
  state = {
    haveLocation: false,
    userLocation: {},
    defaultLocation: { coords: { lat: 40.7608, lng: -111.8910 } }
  };

  componentDidMount() {
    getLocation().then((location) => {
      this.setState({
        ...this.state,
        userLocation: location,
        haveLocation: true
      })
    });
  }
  render() {
    const { haveLocation, userLocation, defaultLocation } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {haveLocation
          ? <GoogleMap location={userLocation} />
          : <GoogleMap location={defaultLocation} />
        }
      </div>
    );
  }
}

export default App;
