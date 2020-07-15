import React from "react";
import "../styles/search.css";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Search was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="search">
        <label>
          <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Search"/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Search;