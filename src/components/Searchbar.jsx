import React from 'react'

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
        </div>
    )
}

export default Seachbar;