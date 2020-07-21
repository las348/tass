import React from "react";
import "../styles/search.css";

function SearchForm(props) {
    return (
      <form className="form-inline justify-content-center">
        <div className="form-group">
          <input
            handleInputChange={props.handleInputChange}
            name="search"
            type="text"
            className="form-control"
            placeholder="Search"
            id="search"
            className = "inputClass"
          />
        </div>
      </form>
    );
  }
export default SearchForm;