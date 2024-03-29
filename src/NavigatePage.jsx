// ===================================================== STATE =================================================
// import { BrowserRouter, Route, Routes } from "react-router-dom";

// import Home from "./PracticeComponent/Home";
// import Login from "./PracticeComponent/Login";
// import React from "react";

// const NavigatePage=()=> {
//     return (
//         <BrowserRouter>
//             <Routes>
//                 <Route path="/" element={<Login/>}/>
//                 <Route path="/Home" element={<Home/>}/>
//             </Routes>
//         </BrowserRouter>

//     )
// }
// export default NavigatePage;



// ================================================== VALIDATE FORM BY FORMIK ========================================

// import "./NavigatePage.css"

// import { BrowserRouter, Route, Routes } from "react-router-dom";

// import Home from "./PracticeComponent/Home";
// import Login from "./PracticeComponent/Login";
// import React from "react";

// const NavigatePage=()=> {
//     return (
//         <BrowserRouter>
//             <Routes>
//                 <Route path="/" element={<Login/>}/>
//                 <Route path="/Home" element={<Home/>}/>
//             </Routes>
        
//         </BrowserRouter>

//     )
// }
// export default NavigatePage


// ================================================== VALIDATE FORM BY FORMIK YUP========================================

import './NavigatePage.css'

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./PracticeComponent/Home";
import Login from "./PracticeComponent/Login";
import React from "react";

const NavigatePage=()=> {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/Home" element={<Home/>}/>
            </Routes>
        </BrowserRouter>

    )
}
export default NavigatePage;