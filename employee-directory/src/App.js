import React from "react";
import Jumbotron from "./components/jumbotron";
import Search from "./components/search-directory";


function App() {
  return (
    <div className="container">
      <Jumbotron />
      <Search />
    </div>
  );
}

export default App;
