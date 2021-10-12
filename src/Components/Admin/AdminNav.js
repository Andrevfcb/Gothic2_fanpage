import React from 'react'

const AdminNav = ({ changeToHome, changeToCharacters, changeToShoop }) => {
    return (
        
            <ul>
                <li onClick={changeToHome}>Start</li>
                <li onClick={changeToCharacters}>Characters</li>
                <li onClick={changeToShoop}>Shoop</li>
            </ul>
        
    )
}

export default AdminNav
