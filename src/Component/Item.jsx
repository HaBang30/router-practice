
//=========================== [ROUTER 2] useNAVIGATE (TRY ONCLICK)==================================

// import React from "react"

// //import { useLocation } from "react-router-dom";

// const Item=()=> {
//     // const {state} = useLocation(); // {state:  dataToSend}
//     return (
//         <div style={{color:"blue"}}>
//             <h1>Display Greeting</h1>
//             <p>Hieu is too pretty</p>
//         </div>
//     )
// }
// export default Item;


//=========================== [ROUTER 3] Sử dụng được useNavigate để truyền dữ liệu là một object qua router giữa hai component==================================

import React from "react";
import { useLocation } from "react-router-dom";

const Item =()=> {
    let {state} = useLocation();
    return (
        <div>
            <h1>This is Hieu</h1>
            {state&& <p style={{color:"red", fontWeight:"bold"}}>{state.greeting}</p>}
        </div>


    )

}
export default Item;