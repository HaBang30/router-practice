// ============================================================ STATE ================================================
// import React from "react";
// import { useLocation } from "react-router-dom";

// const Home=()=> {
//     const {state} = useLocation();
//     return (
//         <div>
//             <h1> YOUR ACCOUNT </h1>
//             {state&&
//                 <>
//                     <p>Email: <span style={{color:"blue"}}>{state.email}</span></p>
//                     <p>Password: <span style={{color:"red"}}>{state.password}</span></p>
//                     <p>=== THE END ====</p>
//                 </>
//             }
//         </div>

//     )
// }
// export default Home;

// ================================================== VALIDATE FORM BY FORMIK ========================================

// import React from "react";
// import { useLocation } from "react-router-dom";

// const Home=()=> {
//     const {state}=useLocation();
//     return (
//         <div>
//             <h1 style={{color:"red"}}>YOUR ACCOUNT</h1>
            
//             {state&&
//                 <>
//                     <p>Emai:<span style={{color:"red"}}>{state.email}</span></p>
//                     <p>Password: <span style={{color:"blue"}}>{state.password}</span></p>
//                 </>
//             }
            
//         </div>

//     )
// }
// export default Home;

// ================================================== VALIDATE FORM BY FORMIK YUP========================================

import React from "react";
import { useLocation } from "react-router-dom";

const Home=()=> {
    const {state} = useLocation();
    return(
        <div>
            {state&&
                <>
                    <p>Email: <span style={{color:"red"}}>{state.email}</span></p>
                    <p>Password: <span style={{color:"blue"}}>{state.password}</span></p>
                </>
            }

        </div>
    )
}
export default Home;