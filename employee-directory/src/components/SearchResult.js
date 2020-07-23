import React from 'react'

function TableData(props) {
    const { users } = props;


    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <table className="table table-striped">
                        <thead >
                            <tr>
                                <th>Picture</th>
                                <th>Name</th>
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