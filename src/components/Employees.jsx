import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Employees() {

    let [employees, setEmployees] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/employees')
            .then((response) => {
                setEmployees(response.data)
            }).catch(err => { console.log(err) })
    }, [])

    let onEditEmployee = (e) => {
        console.log("eeeeee = ", e);
        navigate(`/employees/${e.employeeId}`)
    }

    return (
        <>
            <div className='text-center'><h3>Employees Details</h3></div>
            <hr />

            <div className='test'>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>Employee Id</th>
                            <th>Employee Name</th>
                            <th>Employee EMail</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    {employees.map((emp) => {
                        return (<tbody>
                            <tr>
                                <td>{emp.employeeId}</td>
                                <td>{emp.firstName}</td>
                                <td>{emp.email}</td>
                                <td>
                                    <button className='btn btn-sm btn-primary' onClick={() => onEditEmployee(emp)}>Edit</button>
                                    <button className='btn btn-sm btn-danger ms-1'>Delete</button>
                                </td>
                            </tr>
                        </tbody>)
                    })}
                </table>
            </div>
        </>
    )
}

export default Employees