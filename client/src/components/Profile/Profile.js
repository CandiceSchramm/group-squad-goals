import React, { Component } from "react";
import "./Profile.css";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ProfileNav from "../Nav/ProfileNav";
import Background from "../Background/Background";
import ImageAvatars from "../Avatar/Avatar";
import UserInfo from "../UserInfo/UserInfo";
import SendDM from "../SendDM/SendDM";

class Profile extends Component {
  render() {
    return (
      <div>
        <ProfileNav />
        <Grid
          container
          spacing={24}
          direction="row"
          justify="center"
          alignItems="center"
        >
          {/* <Background> */}
          <Grid item xs={4}>
            <ImageAvatars />
          </Grid>
          <Grid item xs={4}>
            <UserInfo />
          </Grid>
          <Grid
            container
            spacing={24}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={8}>
              <SendDM />
            </Grid>
            {/* </Background> */}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Profile;
