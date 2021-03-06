import React, { Component } from "react";
import "./Profile.css";
import Grid from "@material-ui/core/Grid";
import ReusableNav from "../Nav/ReusableNav";
import Background from "../Background/Background";
import ImageAvatars from "../Avatar/Avatar";
import UserInfo from "../UserInfo/UserInfo";
import SendDM from "../SendDM/SendDM";
import DmThreads from "../DmThreads/DmThreads";
import DigitRequestThread from "../DigitRequests/DigitRequestThread";
import axios from "axios";

class Profile extends Component {
  render() {
    return (
      <div>
        <ReusableNav navbarTitle="#GETATME" />
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
          <Grid item xs={5}>
            <DmThreads />
          </Grid>
          <Grid item xs={3}>
            <DigitRequestThread />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Profile;
