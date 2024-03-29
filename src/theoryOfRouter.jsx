import { Link, Route, Routes } from "react-router-dom";

import About from "./Component/About";
import Contact from "./Component/Contact";
import Home from "./Component/Home";
import React from "react";

const TheoryOfRouter=()=> {
    return(
        <div>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                </ul>
                <ul>
                    <li><Link to="/About">About</Link></li>
                </ul>
                <ul>
                    <li><Link to="/Contact">Contact</Link></li>
                </ul>
            </div>
            <hr />
            <div>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/About" element={<About/>}/>
                    <Route path="/Contact" element={<Contact/>}/>
                </Routes>

            </div>
        </div>

    )
}
export default TheoryOfRouter;