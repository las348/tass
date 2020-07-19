import React from "react";
import Jumbotron from "./components/jumbotron";
import SearchForm from "./components/SearchForm";
import SearchResultContainer from "./components/SearchResultContainer";

function App() {
  return (
    <div>
  <Jumbotron />
  <SearchForm />
  <SearchResultContainer />
  </div>
  );
}

export default App;
