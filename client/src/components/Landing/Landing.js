import React, { Component } from "react";
import "./Landing.css";
import Signup from "../Signup/Signup";
import LoginNav from "../Nav/LoginNav";

class Landing extends Component {
  render() {
    return (
      <div>
        <LoginNav navbarTitle="#SquadGoals"></LoginNav>
        <Signup />
      </div>
    );
  }
}

export default Landing;
