import React, { Component } from "react";
import "./Profile.css";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ProfileNav from "../Nav/ProfileNav";
import Background from "../Background/Background"

class Profile extends Component {
  render() {
    return (
      <div>
        <ProfileNav />
        <Grid container spacing={12}>
        <Background/>
        </Grid>
      </div>
    );
  }
}

export default Profile;
