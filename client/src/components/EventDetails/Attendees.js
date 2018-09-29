import React, { Component } from "react";
import API from "../../utils/API";

class PotentailSquad extends Component {
    state = {
        eventID: this.props.id,
        SquadMates: []
    }
    // componentDidMount = () => {
    //     this.loadSquad(this.state.eventID);
    // }
    // loadSquad = eventID => {
    //     API.getInterested(eventID)
    //     .then(res =>
    //         console.log(res)
    //         // this.setState({SquadMates: res.data})
    //     ).catch(err => console.log(err));
    // }

    render() {
        return (
            <div>
                {this.state.SquadMates.length ? (
                    <div>
                        {this.state.SquadMates.map(Squad => (
                            <div>
                                {Squad.username}
                            </div>
                        ))}
                    </div>
                ):(
                    <div>
                        Nobody Users Currently Planning on Attending
                    </div>
                )}
            </div>
        )
    }
}

export default PotentailSquad;