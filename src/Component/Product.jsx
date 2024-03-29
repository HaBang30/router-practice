
//=========================== [ROUTER 2] useNAVIGATE (TRY ONCHANGE)==================================

// import React from 'react';
// import { useParams } from 'react-router-dom';
// const Product =()=> {
//     const {id} = useParams();
//     return (
//         <div>
//             <h1>Congratulation your selected!!!!</h1>
//             <h3 style={{color:"red"}}>You selected {id}</h3>
//         </div>
//     )
// }
// export default Product;

//=========================== [ROUTER 2] useNAVIGATE (TRY ONCLICK)==================================

// import React from "react"

// //import { useLocation } from "react-router-dom";

// const Product=()=> {
//     // const {state} = useLocation(); // {state:  dataToSend}
//     return (
//         <div style={{color:"red"}}>
//             <h1>Display Greeting</h1>
//             <p>Hieu is too funny</p>
//         </div>
//     )
// }
// export default Product;


//=========================== [ROUTER 3] Sử dụng được useNavigate để truyền dữ liệu là một object qua router giữa hai component==================================

import React from "react";
import { useLocation } from "react-router-dom";

const Product=()=> {
    const {state} = useLocation();
    return (
        <div >
            <h1 style={{color:"red"}}>This is param</h1>
            {state&& <p>{state.obj}</p>}
        </div>

    )
}
export default Product;