import React from "react"

const EventInfo = props => (
    <div>   
        <div>
            {props.title ? (
                <div>
                    {props.title}
                </div>) : (
                <div>
                    No title abalible avalible at this time
                </div>)    
            }
        </div>
        <div>
            {props.description ? ( 
                <div>
                    {props.description}
                </div>) : (
                <div>
                    No description avalible at this time
                </div>)
            }
        </div>
        <div>
            {/* <Map/> */} This is where a map will go
        </div>
        <button>
            Not Interested
        </button>
        <button>
            Definitly Going
        </button>
    </div>  
);

export default EventInfo;