
//=========================== [ROUTER 2] useNAVIGATE (TRY ONCHANGE)==================================


// import React, {useState} from 'react';

// import { useNavigate } from "react-router-dom";

// const Nevigate=()=> {
//     const [selectValue, setSelectValue] = useState("");
//     const nevigate = useNavigate();
//     const handleChangeValue=(event)=> {
//         let selectedId = event.target.value;
//         setSelectValue(selectedId);
//         nevigate(`/Product/${selectedId}`)

//     }
//     return (
//         <div>
//             <h1>useNavigation</h1>
//             <select value={selectValue} onChange={handleChangeValue}>
//                 <option value="default">Select your car</option>
//                 <option value="HONDA">Honda</option>
//                 <option value=" SUZUKI">Suzuki</option>
//                 <option value="YAMAHA">Yamaha</option>
//             </select>
//         </div>

//     )
// }
// export default Nevigate;


//=========================== [ROUTER 2] useNAVIGATE (TRY onCLICK)==================================

// import React from "react";
// import { useNavigate } from "react-router-dom";

// const Nevigate=()=> {
//     const navigate = useNavigate();
//     const handleChangeProduct=()=> {
//         //const dataToSend = {message:"Hello world!!!"}
//         navigate('/Product') //{state: dataToSend}
//     }
//     const handleChangeItem=()=> {
//         //const dataToSend = {message:"Hello world!!!"}
//         navigate('/Item') //{state: dataToSend}
//     }
   
//     return (
//         <div>
//             <h1>This is nevigation!!!!</h1>
//             <button className="productBtn" onClick={handleChangeProduct}>Product Page</button>
//             <button className="itemBtn" onClick={handleChangeItem}>item Page</button>

//         </div>

//     )
// }
// export default Nevigate;



//=========================== [ROUTER 3] Sử dụng được useNavigate để truyền dữ liệu là một object qua router giữa hai component==================================

import React, {useState} from "react";

import { useNavigate } from "react-router-dom";

const Nevigate=()=> {
    const [selectValue, setSelectValue] = useState("")
    const navigate = useNavigate();
    const handleChangeSelect=(event)=> {
        let values = {obj: event.target.value}
        setSelectValue(values)
        navigate('/Product', {state: values})
    }
    const comeItemComponent=()=> {
        let message = {greeting: "Hello My Love"}
        navigate('/Item', {state: message})

    }
    return (
        <div>
        <select value={selectValue} onChange={handleChangeSelect}>
            <option value="default" hiden>Selected your car</option>
            <option style={{color:"blue"}} value="toyota">Toyota</option>
            <option style={{color:"Red"}} value="yamaha">Yamaha</option>
            <option style={{color:"purple"}} value="suzuki">Suzuki</option>
            <option style={{color:"greenYellow"}} value="honda">Honda</option>
        </select>

        <button onClick={comeItemComponent}>Click to item component</button>

        </div>


    )
}
export default Nevigate;