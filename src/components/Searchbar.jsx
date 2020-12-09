import React from 'react'
import "./Searchbar.css"

function Seachbar({ inputValue, handleInput, handleInputChange }) {
    return (
        <div>
            <input
                id="name"
                name="name"
                onChange={handleInputChange}
                placeholder="search employees"
                type="text"
                value={inputValue}
            />
            <button
                onClick={handleInput}
            >Seach</button>
        </div>

    )
}

export default Seachbar;