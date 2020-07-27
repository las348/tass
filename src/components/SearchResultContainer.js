import React, { useState, useEffect } from "react";
import SearchResult from "./SearchResult";
import SearchBar from "./SearchBar";
import axios from "axios";


function ResultContainer() {
    const [users, setUsers] = useState([]);
    const [filterOption, setFilterOption] = useState("");
    const [filteredState, setFilteredState] = useState([]);
    // const [sortBy, setSortBy] = useState({});


    useEffect(() => {
        loadUsers();
    }, [])

    const loadUsers = () => {
        axios.get("https://randomuser.me/api/?results=20&nat=us")
            .then(res => {
                const employee = res.data.results
                console.log(employee);
                setUsers(employee)
            });
    }

    // const headings = [
    //     { name: "Image", order: "descend" },
    //     { name: "Name", order: "descend" },
    //     { name: "Phone Number", order: "descend" },
    //     { name: "Email", order: "descend" },
    //     { name: "Age", order: "descend" }
    // ]

    // const handleSort = (headings) => {

    //     if (currentOrder === "descend") {
    //         currentOrder = "ascend";
    //     } else {
    //         currentOrder = "descend";
    //     }

    //     const compareFnc = (a, b) => {
    //         if (currentOrder === "ascend") {
    //             if (a[headings] === undefined) {
    //                 return 1;
    //             } else if (b[headings] === undefined) {
    //                 return -1;
    //             }
    //             else if (heading === "name") {
    //                 return a[headings].localeCompare(b[headings]);
    //             } else {
    //                 return a[headings] - b[headings];
    //             }
    //         } else {
    //             if (a[headings] === undefined) {
    //                 return 1;
    //             } else if (b.heading === undefined) {
    //                 return -1;
    //             }

    //             else if (headings === "name") {
    //                 return b[headings].localeCompare(a[headings]);
    //             } else {
    //                 return b[headings] - a[headings];
    //             }
    //         }
    //     }
    //     const sortedUsers = sortBy.sort(compareFnc);

    //     setSortBy(
    //         sortedUsers
    //     );
    // };


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
                        // handleSort={handleSort}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ResultContainer;