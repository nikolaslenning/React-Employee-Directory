import React from "react";

function TableHead({columns}) {
    return (
        <thead>
            <tr>{columns.map((columns, i) => <th key={i} >{columns.colName}</th>)}</tr>
        </thead>

    )
}

export default TableHead;