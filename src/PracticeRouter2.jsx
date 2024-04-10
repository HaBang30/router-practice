import './PracticeRouter2.css'

import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Employee from './PracticeRouter2/Employee';
import EmployeeList from './PracticeRouter2/EmployeeList';
import Login from './PracticeRouter2/Login';
import React from "react";

const PracticeRouter2=()=> {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/EmployeeList' element={<EmployeeList/>}/>
                <Route path='/Employee/:id' element={<Employee/>}/>
            </Routes>
        </BrowserRouter>

    )
}
export default PracticeRouter2;