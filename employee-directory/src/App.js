import React from "react";
import Jumbotron from "./components/jumbotron";
import Search from "./components/search-directory";
import Table from "./components/table";


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData2: [
        { 'Name': 'Abc', 'Age': 15, 'Location': 'Bangalore' },
        { 'Name': 'Def', 'Age': 43, 'Location': 'Mumbai' },
        { 'Name': 'Uff', 'Age': 30, 'Location': 'Chennai' },
        { 'Name': 'Ammse', 'Age': 87, 'Location': 'Delhi' },
        { 'Name': 'Yysse', 'Age': 28, 'Location': 'Hyderabad' }
      ]
    }
  }


  render() {

    return (
      <div className="App">
        <Jumbotron />
        <Search />
        <Table data={this.state.tableData2} />
      </div>

    );
  }


}

