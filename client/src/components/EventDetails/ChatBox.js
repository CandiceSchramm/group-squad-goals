import React from "react";

const ChatBox = props => (
    <div>
        <div>
            {props.username}
        </div>
        <div>
            {props.message}
        </div>
    </div>
);

export default ChatBox;