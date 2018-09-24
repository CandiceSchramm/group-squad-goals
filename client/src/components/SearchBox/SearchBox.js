import React from "react";

const SearchBox = props => (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
         
        />
        <br />
        <button>
        {/* <button onClick={props.handleFormSubmit} className="btn btn-primary"> */}
          Search
        </button>
      </div>
    </form>
  );
  
export default SearchBox;