import React from "react";
import ResultList from "./ResultList";
import SearchForm from "./SearchForm";


class SearchResultContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            results: [],
            search: ""
        };
    }

    handleInputChange = event => {
        const name = event.target.value;

        const sortedName = this.state.results.filter(result => {
            let item = Object.values(result).join("").toLowerCase();

            return item.indexOf(name.toLowerCase());
        })
        this.setState({ results: sortedName });
    }

    handleFormSubmit = event => {
        event.preventDefault();
        return this.state.search;
    };

    handleSort = event => {
       const sortResults = this.state.results.sort((a,b) => {
       return a.name.last > b.name.first ? 1:-1;
       });
       this.setState({results:sortResults})
    }

    componentDidMount() {
        fetch("https://randomuser.me/api/?results=50&nat=us")
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
                <SearchForm handleInputChange={this.handleInputChange} />
                <ResultList results={this.state.results} 
                sort = {this.handleSort}
                />
            </div>
        );
    }
}


export default SearchResultContainer;