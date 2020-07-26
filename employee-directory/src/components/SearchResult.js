import React from 'react'
import "./../styles/table.css"


function TableData(props) {
    const { users } = props;

    const message = () => {
        alert("Sorry, sorting is not currently available")
    }

    return (
        <div>
            <div className="row justify-content-center table">
                <div className="col-md-8">
                    <table className="table">
                        <thead >
                            <tr>
                                <th>Picture</th>
                                <th onClick={message} id="name">Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Age</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (<tr key={index}>
                                <td><img alt={user.name.first} src={user.picture.thumbnail} className="img-fluid" /></td>
                                <td>{user.name.first} {user.name.last}</td>                              
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.dob.age}</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default TableData;