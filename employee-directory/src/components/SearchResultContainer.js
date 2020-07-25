import React, { useState, useEffect } from "react";
import SearchResult from "./SearchResult";
import SearchBar from "./SearchBar";
import axios from "axios";

function ResultContainer() {
    const [users, setUsers] = useState([])
    const [filterOption, setFilterOption] = useState("");
    const [filteredState, setFilteredState] = useState([]);
    const [sortState, setSortState] = useState([]);

    useEffect(() => {
        loadUsers();
    }, [])

    const loadUsers = () => {
        axios.get("https://randomuser.me/api/?results=20&nat=us")
            .then(res => {
                const employee = res.data.results
                setUsers(employee)
            });
    }

    // function handleSort() {
       
    //     sortState.sort(function (a, b) {
    //         console.log(a.name.last);
    //         if (a.name.last > b.name.last) {
    //           return -1;
    //         }
    //         if (a.name.last < b.name.last) {
    //           return 1;
    //         }
    //         // names must be equal
    //         return 0;
    //     })
    //     // setSortState([...sortState, users]);
    //     setSortState(users);
    //     console.log(setSortState);
    // }

    const handleSort = (event) => {
        event.preventDefault();

        sortState.sort(function (a, b) {
            console.log(b.name.last);
            if (a.name.last > b.name.last) {
              return -1;
            }
            if (a.name.last < b.name.last) {
              return 1;
            }
            // names must be equal
            return 0;
        })
        // setSortState([...sortState, users]);
        setSortState(users);
        // console.log(sortState);
    }
 
    //compare function for tel #

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
            if (value === users[i].name.first.toLowerCase() || value === users[i].name.last.toLowerCase()
                || value === users[i].name.first || value === users[i].name.last) {
                setFilteredState([...filteredState, users[i]
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
                            handleFilterChange={handleFilterChange}
                        />
                    </div>
                </div>
                <div id="tableRow" className="row">
                    <div className="col-12">
                        <SearchResult
                            users={filteredState.length > 0 ? filteredState : users}
                            handleSort={handleSort}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ResultContainer;