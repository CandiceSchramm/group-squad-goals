import React, { Component } from "react";
import EventInfo from "./EventInfo";
import PotentialSquad from "./PotentialSquad";
import Chat from "./Chat";
// imports for nav and footer needed
class EventDetails extends Component {

    render(){
        return(
            <div>
                {/* Nav will go here */}
                <EventInfo>
                </EventInfo>
                <PotentialSquad>
                </PotentialSquad>
                <Chat>
                </Chat>
                {/* Footer will go here */}
            </div>
        )
    }
}

export default EventDetails;