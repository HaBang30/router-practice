import React from "react";
import { useParams } from "react-router-dom";

const Employee=()=> {
    const {id} = useParams()
    return (
        <div>
            <h1>Employee Detail</h1>
            <table className="detail-table">
                <thead>
                    {id&&   
                        <tr >
                            <td>{id.id}</td>
                            <td>{id.name}</td>
                            <td>{id.age}</td>
                        </tr>   
                    }
                </thead>
                
            </table>
        </div>
      

    )
}
export default Employee;