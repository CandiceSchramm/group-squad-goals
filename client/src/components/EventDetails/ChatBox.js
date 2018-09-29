import React from "react";

const ChatBox = props => (
    <div>
        <div>
            {props.username ? (
                <div>
                    {props.username}
                </div>) : (
                <div>
                    No username avalible
                </div>
                )
            }
        </div>
        <div>
            {props.message ? (
                <div>
                    {props.message}
                </div>) : (
                <div>
                    No message avalible
                </div>
                )
            }
        </div>
        <button>
            delete button
        </button>
    </div>
);

export default ChatBox;