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
          spacing={12}
          direction="row"
          justify="flex-end"
          alignItems="center"
        >
          {/* <Background> */}
          <Grid item xs={6}>
            <ImageAvatars />
          </Grid>
          <Grid item xs={6}>
            <UserInfo />
          </Grid>
            <Grid item xs={2} />
            <Grid item xs={8}>
              <SendDM />
            </Grid>
            <Grid item xs={2} />
          {/* </Background> */}
        </Grid>
      </div>
    );
  }
}

export default Profile;
