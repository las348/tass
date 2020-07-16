import React from "react";
// import axios from "axios";
import Jumbotron from "./components/jumbotron";
// import Table from "./components/table";
import "./App.css";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      results: []
    };
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=10&nat=us")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            results: result.results
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, results } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <Jumbotron />
          {results.map(item => (
            <table key={item.email}>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>DOB</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{item.picture.thumbnail} </td>
                  <td>{item.name.first}{item.name.last}</td>
                  <td>{item.phone}</td>
                  <td>{item.email}</td>
                  <td>{item.dob.date}</td>
                </tr>
              </tbody>
            </table>
          ))}
        </div>
      );
    }
  }
}
export default App;
