import React from 'react'
import "./../styles/table.css"


function TableData(props) {
    const { users, picture, name, phone, email, age } = props;

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
                                <th>{picture}</th>
                                <th onClick={message} id="name">{name}</th>
                                <th>{phone}</th>
                                <th>{email}</th>
                                <th>{age}</th>
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