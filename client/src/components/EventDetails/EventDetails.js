import React, { Component } from "react";
import EventInfo from "./EventDescription";
import PotentialSquad from "./Attendees";
import Chat from "./Comment";
import API from "../../utils/API";
// imports for nav and footer needed

class EventDetails extends Component {
    state = {
        info: [],
        id: this.props.match.params.id
    };
    componentWillMount() {
        API.searchSingle(this.props.match.params.id)
          .then(res => this.setState({ info: res.data}))
          .catch(err => console.log(err));
    }

    render(){
        return(
            <div>
                {/* Nav will go here */}
                <EventInfo
                title={this.state.info.title}
                description={this.state.info.description}
                >
                </EventInfo>
                <PotentialSquad
                id={this.state.id}>
                </PotentialSquad>
                <Chat
                id={this.state.id}>
                </Chat>
                {/* Footer will go here */}
            </div>
        )
    }
}

export default EventDetails;