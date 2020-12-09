import React from "react";
import "./Header.css"

function TableBody({ name, email, address, created, balance }) {
    return (

        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{address}</td>
            <td>{created}</td>
            <td>{balance}</td>
        </tr>
    )
 
}

export default TableBody;