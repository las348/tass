import React from "react";
import "../styles/search.css";

function SearchForm(props) {

    return (
        <form className="form-inline justify-content-center">
            <div className="form-group">
                <input
                    onChange={props.handleInputChange}
                    value={props.search}
                    name="search"
                    type="text"
                    className="form-control"
                    placeholder="Search"
                    id="search"
                />
                <button onClick={props.handleFormSubmit} className="btn btn-primary">
                    Search </button>
            </div>
        </form>
    );
}

export default SearchForm;