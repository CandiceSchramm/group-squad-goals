import React from "react";

const SearchCategories = props => {
    return(
    <div>
        <button onClick={(event)=>props.onClick(event, props.categoryinfo)} >
            {props.categoryinfo}
        </button>
    </div>
    )
};
  
export default SearchCategories;