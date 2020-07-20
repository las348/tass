import React from "react";
import ResultList from "./ResultList";
import SearchForm from "./SearchForm";


class SearchResultContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            results: []
        };
    }

    handleSearch = event => {
        const name = event.target.value;

        const sortedName = this.state.results.filter(result => {
            let item = Object.values(result).join("").toLowerCase();

            return item.indexOf(name.toLowerCase());
        })
        this.setState({ results: sortedName });
    }

    handleResults = event => {

    }

    componentDidMount() {
        fetch("https://randomuser.me/api/?results=10&nat=us")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        results: result.results,
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
                <SearchForm handleSearch={this.handleSearch} />
                <ResultList results={this.state.results} />
            </div>
        );
    }
}


export default SearchResultContainer;
