import React from 'react'
import { Link } from 'react-router-dom'

const CharacterCard = ({id, name, image}) => {
    return (
        <Link to={`/characters/${id}`}>
            <div className="character-card">
                <img src={`${process.env.REACT_APP_BACKEND_URL}/${image}`} alt={name}></img>
                <p>{name}</p>
            </div>
        </Link>
    )
}

export default CharacterCard
