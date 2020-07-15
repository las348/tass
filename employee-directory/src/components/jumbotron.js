import React from "react";

const styles = {
    background: 'navy',
    color: 'white',
    borderBottom: 'solid red',
    textAlign: 'center',
    padding: 30
}

function Jumbotron() {
    return (
        <div className="jumbotron" style={styles}>
        <h1>Employee Directory</h1>
        <p>Click on carrots to filter by heading or use the search box to narrow your results.
        </p>
      </div>       
    )
}

export default Jumbotron;