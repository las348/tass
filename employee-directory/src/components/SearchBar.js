import React from 'react'


function SearchUser(props) {
  const { handleFilterChange } = props;

  return (
    <div id="searchForm" className="row justify-content-center">

      <div className="form-inline input-group-sm mb-3">
        <div className="input-group-prepend">
        
        </div>
        <input
          id="myInput"
          onChange={handleFilterChange}
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
          placeholder="Search" />
      </div>

    </div>
  )
}

export default SearchUser