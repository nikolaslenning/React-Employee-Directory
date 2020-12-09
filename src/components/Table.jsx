import React from "react"
import "./Table.css"
import TableHead from "./TableHead"
import TableBody from "./TableBody"

function Table({ employees }) {

    const columns = [
        { colName: "Name" },
        { colName: "Title" },
        { colName: "Address" },
        { colName: "Hired Date" },
        { colName: "401k" },
    ]

    return (
        <div>
            <table>
                <TableHead columns={columns}/>
                <tbody>
                    {employees.map(employee => {
                        return <TableBody key={employee.id} {...employee} data={employees} />
                    })

                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table;