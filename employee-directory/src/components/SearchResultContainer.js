import React, { useState, useEffect } from "react";
import SearchResult from "./SearchResult";
import SearchBar from "./SearchBar";
import axios from "axios";

function ResultContainer() {
    const [users, setUsers] = useState([])
    // const [sortOption, setSortOption] = useState("name");
    const [filterOption, setFilterOption] = useState("");
    const [filteredState, setFilteredState] = useState([]);

    useEffect(() => {
        loadUsers();
    }, [])

    const loadUsers = () => {
        axios.get("https://randomuser.me/api/?results=200&nat=us")
            .then(res => {
                const employee = res.data.results
                setUsers(employee)
            });
    }

    // const handleSortChange = (event) => {
    //     event.preventDefault();
    //     const { name, value } = event.target;
    //     console.log(value)

    //     if (value === "age") {
    //         setSortOption([
    //             ...sortOption,

    //             users.sort(function (a, b) {
    //                 return a.dob.age - b.dob.age
    //             })
    //         ])
    //     }
    // }

    const handleFilterChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setFilterOption(
            {
                ...filterOption,
                [name]: value
            }
        )
        console.log(value)


        for (let i = 0; i < users.length; i++) {
            if (value === users[i].name.first.toLowerCase() || value === users[i].name.last.toLowerCase()) {
                setFilteredState([

                    ...filteredState,
                    users[i]
                ])
                console.log("Found employee")
            }
            else if (value === "") {

                setFilteredState([])
                console.log("Employee not found")
            }
        }
    }


    return (
        <>
            <div id="container" className="container-fluid">
                <div className="row">
                    <div id="searchRow" className="col-12">
                        <SearchBar
                            // handleSortChange={handleSortChange}
                            handleFilterChange={handleFilterChange}
                        />
                    </div>
                </div>
                <div id="tableRow" className="row">
                    <div className="col-12">
                        <SearchResult
                            users={filteredState.length > 0 ? filteredState : users}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ResultContainer;