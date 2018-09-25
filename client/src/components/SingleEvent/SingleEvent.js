import React from "react";

const SingleEvent = props => (
    <div className="EventPic" {...props}>
        <div className="EventTitle">
            {props.eventtitle}
        </div>
        <div className="EventDate">
            {props.eventtime}
        </div>
        <div className="EventLocation">
            {props.eventaddress}
        </div>
        <button /*onClick={props.HandleFormSubmit}*/ className="">
            Click for More Detail
        </button>
    </div>
);

export default SingleEvent;
