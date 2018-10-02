import React, { Component } from "react";
import EventDescription from "./EventDescription";
import Attendees from "./Attendees";
import Comment from "./Comment";
import API from "../../utils/API";
import ReusableNav from "../Nav/ReusableNav";
import Grid from "@material-ui/core/Grid";

// imports for nav and footer needed

class EventDetails extends Component {
  state = {
    info: [],
    id: this.props.match.params.id
  };
  componentWillMount() {
    API.searchSingle(this.props.match.params.id)
      .then(res => this.setState({ info: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <ReusableNav navbarTitle="#GetOutMore" />
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={8}>
            <EventDescription
              title={this.state.info.title}
              description={this.state.info.description}
            />
          </Grid>
          <Grid item xs={8}>
            <Attendees id={this.state.id} />
          </Grid>
        </Grid>
        <Comment id={this.state.id} />
        {/* Footer will go here */}
      </div>
    );
  }
}

export default EventDetails;
