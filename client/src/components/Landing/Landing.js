import React, { Component } from "react";
import "./Landing.css";
import Signup from "../Signup/Signup";
import ReusableNav from "../Nav/ReusableNav";

class Landing extends Component {
  render() {
    return (
      <div>
        <ReusableNav navbarTitle="#SquadGoals"></ReusableNav>
        <Signup />
      </div>
    );
  }
}

export default Landing;
