import React from "react";
// import Moment from 'moment';
import "../styles/table.css";

function ResultList(props) {

    return (
        <div>        
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>DOB</th>
                        </tr>
                    </thead>
                    {props.results.map(item => (
                    <tbody key={item.email} >
                        <tr>
                            <td><img src={item.picture.thumbnail} alt={item.name.first} /></td>
                            <td>{item.name.first} {item.name.last}</td>
                            <td>{item.phone}</td>
                            <td>{item.email}</td>
                            <td>{item.dob.date}</td>
                        </tr>
                    </tbody>
                      ))}
                </table>
          
        </div>
    );
}

export default ResultList;