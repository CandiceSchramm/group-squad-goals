import React, { Component } from "react";
import "./Profile.css";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ProfileNav from "../Nav/ProfileNav";

class Profile extends Component {
  render() {
    return (
      <div>
        <ProfileNav />
        <Grid container spacing={12} />
      </div>
    );
  }
}

export default Profile;
