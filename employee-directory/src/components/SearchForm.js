import React from "react";
import "../styles/search.css";

function SearchForm({handleSearch}) {

    return (
        <form className="form-inline justify-content-center">
            <div className="form-group">
                <input
                    onChange={event => handleSearch(event)}
                    type="search"
                    className="form-control"
                    placeholder="Search"
                    id="search"
                />
            </div>
        </form>
    );
}

export default SearchForm;