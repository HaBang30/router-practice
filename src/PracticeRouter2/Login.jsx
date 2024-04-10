import React, {useState} from "react";

import {useNavigate} from 'react-router-dom';

const Login =()=> {
    const navigate = useNavigate();
    const [user, setUser] = useState({email:"", password:""});
    const handleChange=(event)=> {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })

    }
    
    const [userData, setUserData] = useState({
         employees : [
            {
                id: 1,
                name: "Hieu",
                age: 30,
            },
            {
                id: 2,
                name: "Tung",
                age: 38,
            },
            {
                id: 3,
                name: "Bang",
                age: 1,
            }
        ]
    })
    const submitForm=(e)=> {
        e.preventDefault();
        if(user.email ==="admin@gmail.com" && user.password === "letmein") {
            navigate('/EmployeeList', {state: userData})
        } else {
            alert("Please login information all the field")
        }


    }
    return (
        <form onSubmit={submitForm} className="form-container">
            <div>
                <label htmlFor="email">Email:</label>
                <input type="text" value={user.email} name="email" onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="email">Password:</label>
                <input type="text" value={user.password} name="password" onChange={handleChange}/>
            </div>
            <button type="submit">Submit</button>
        </form>

    )
}
export default Login;