import React from "react";
// import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
// import API from "./API";


class SearchResultContainer extends React.Component {
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
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        return (
            <div>
              <ResultList results={this.state.results} />
            </div>
          );
        }
      }

      
export default SearchResultContainer;
