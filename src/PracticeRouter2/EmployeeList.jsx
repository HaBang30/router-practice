import React, {useState} from "react";

import {useLocation} from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const EmployeeList=()=> {
    const {state} = useLocation();
    const navigate = useNavigate()
    const [detail, setDetail] = useState(state)
    const details =(id, index)=> {
        setDetail({sta: detail.employees[index]})
       
        //console.log(detail.employees[index])
        //navigate('/Employee', {state: detail.employees[index]})
        navigate(`/Employee${id}`)
    }
   
    return (
        <div className="container">
            <h1>Employees List </h1>
            <table className="container-table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {state&&
                        state.employees.map((employee, index) =>
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.name}</td>
                                <td>{employee.age}</td>
                                <td><button onClick={()=>details(employee.id, index)}>Details</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>

        </div>

    )
}
export default EmployeeList;