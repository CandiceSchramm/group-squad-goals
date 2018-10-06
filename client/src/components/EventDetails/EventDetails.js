import React, { Component } from "react";
import EventDescription from "./EventDescription";
import Attendees from "./Attendees";
import Comment from "./Comment";
import API from "../../utils/API";
import ReusableNav from "../Nav/ReusableNav";
import Grid from "@material-ui/core/Grid";
import { Button } from "../../../node_modules/@material-ui/core";

// imports for nav and footer needed

class EventDetails extends Component {
  state = {
    info: [],
    id: this.props.match.params.id,
    SquadMates: [],
    Attendees: []
    //currentUser: localStorage.getItem(user)
  };
  componentDidMount() {
    API.searchSingle(this.props.match.params.id)
      .then(res => this.setState({ info: res.data }))
      .catch(err => console.log(err));
    this.loadSquad();
  }

  handleInterested(){
    API.addInterest(this.state.id, "5bafaa82c3540ae8aa833b7b")
    .then(res => { console.log(res) })
    .catch(err => console.log(err));
  }
  loadSquad = () => {
    API.getActivity(this.state.id)
    .then(res => {
      this.setState({SquadMates: res.data.users});
      this.state.SquadMates.map(id =>(
        this.getNames(id)
      ))
    }).catch(err => console.log(err));
  }
  getNames = (id) => {
    API.getUser(id)
    .then(res => this.setState({Attendees:[...this.state.Attendees, res.data]})
  )
    .catch(err => console.log(err))
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
            <Button
              onClick={()=>this.handleInterested()}
            >
              #IwannaGo
            </Button>
          </Grid>
          <Grid item xs={8}>
            {console.log(this.state.Attendees)}
            <Attendees squad={this.state.Attendees} />
          </Grid>
        </Grid>
        <Comment id={this.state.id} />
        {/* Footer will go here */}
      </div>
    );
  }
}

export default EventDetails;
