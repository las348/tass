import React, { useState, useEffect } from "react";
import SearchResult from "./SearchResult";
import SearchBar from "./SearchBar";
import axios from "axios";


function ResultContainer() {
    // const [users, setUsers] = useState({
    //     users: [],
    //     order: "descend",
    //     filteredUsers: []
    // });
    const [users, setUsers] = useState([])
    const [filterOption, setFilterOption] = useState("");
    const [filteredState, setFilteredState] = useState([]);
    

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

    const headings = [
        { name: "Picture", width: "10%", order: "descend" },
        { name: "Name", width: "10%", order: "descend" },
        { name: "Phone Number", width: "20%", order: "descend" },
        { name: "Email", width: "20%", order: "descend" },
        { name: "Age", width: "10%", order: "descend" }
    ]

   

    const handleSort = (heading) => {

        if ((users.order) === "descend") {
            setUsers({...users, order: "ascend"});
        } else {
            setUsers({...users, order: "descend"});
        }

        const compareFnc = (a, b) => {
            if ((users.order) === "ascend") {
                if (a[heading] === undefined) {
                    return 1;
                } else if (b[heading] === undefined) {
                    return -1;
                }
                else if (heading === "name") {
                    return a[heading].first.localeCompare(b[heading].first);
                } else {
                    return a[heading] - b[heading];
                }
            } else {
                if (a[heading] === undefined) {
                    return 1;
                } else if (b.heading === undefined) {
                    return -1;
                }

                else if (heading === "name") {
                    return b[heading].first.localeCompare(a[heading].first);
                } else {
                    return b[heading] - a[heading];
                }
            }
        }
        const sortedUsers = (users.filteredUsers).sort(compareFnc);

        setUsers({
          ...users, 
          filteredUsers: sortedUsers,
          users: (users.filteredUsers)
        });
    };


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
                            // users={filteredUsers}
                            // headings={headings}
                            picture={headings[0].name}
                            name={headings[1].name}
                            phone={headings[2].name}
                            email={headings[3].name}
                            age={headings[4].name}
                            headings={headings}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ResultContainer;

