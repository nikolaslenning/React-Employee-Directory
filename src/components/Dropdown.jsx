import React from "react"
import "./Dropdown.css"


function Dropdown({ sortValue, handleSortValue }) {
    return (
        <div>
            <label
                htmlFor="sortby"
            >Sort By: </label>
            <select name='sortBy' value={sortValue} onChange={handleSortValue}>
                <option value="" disabled hidden>Select One</option>
                <option value ="Name (A-Z)">Name: A-Z</option>
                <option value ="Name (Z-A)">Name: Z-A</option>
                <option value ="Email (A-Z)">Email: A-Z</option>
                <option value ="Email (Z-A)">Email: Z-A</option>
                <option value ="None">None</option>
            </select>
        </div>
    )
}

export default Dropdown