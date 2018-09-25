import React, { Component } from "react";
import "./Landing.css";
import Signup from "../Signup/Signup";

class Landing extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="jumbotron col-md-12">
            <h2 className="display-4">
              Let us help you connect and find friends and hang out!
            </h2>
          </div>
        </div>
        <Signup />
      </div>
    );
  }
}

export default Landing;
