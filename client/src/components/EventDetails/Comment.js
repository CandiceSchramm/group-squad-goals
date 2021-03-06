import React, { Component } from "react";
import API from "../../utils/API";
import ChatBox from "./CommentFeed";

class Chat extends Component {

    state = {
        chat:[]
    }
    loadChat = () => {
        API.getActivity(this.props.id).
        then(res => {
            console.log(res)
            //this.setState({chat: res.data})
        }).catch(err => console.log(err))
    }

    render(){
        return (
            <div>
                {this.state.chat.length ? 
                (
                    <div>
                        {this.state.chat.map(talk => (
                            <ChatBox
                                username = {talk.username}
                                message = {talk.message}
                            >
                            </ChatBox>
                        ))}
                    </div>
                ):(
                    <div>
                        No messages yet for this activity
                    </div>
                )}
            </div>
        )
    }
}

export default Chat;