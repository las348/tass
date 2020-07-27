import React, { useState, useEffect } from "react";
import SearchResult from "./SearchResult";
import SearchBar from "./SearchBar";
import axios from "axios";


function ResultContainer() {
    const [users, setUsers] = useState([]);
    const [filterOption, setFilterOption] = useState("");
    const [filteredState, setFilteredState] = useState([]);
    // const [sortBy, setSortBy] = useState({key: null, order: '>' });
   

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


// function handleSort() {
//     sortBy.sort(function(a,b){
//         if (a.name.last > b.name.last) {
//             return -1;
//         }
//         if (b.name.last > a.name.last) {
//             return 1;
//         }
//         return 0;
//     })
//     setSortBy(users);
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