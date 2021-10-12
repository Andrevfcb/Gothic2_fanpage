import React, { useState, useEffect } from 'react';
import "./Character.css";

import { useHttpClient } from '../hooks/http-hook';
import LoadingSpinner from "../UIElements/LoadingSpinner"
import Button from "../FormElements/Button"

import {
    Link,
    useParams
  } from "react-router-dom";
  

const Character = () => {

    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [character, setCharacter] = useState();
    const [characterDescription, setCharacterDescription] = useState([]);

    let { cid } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0)
        const fetchCharacter = async () => {
                try {
                    const responseData = await sendRequest(
                    `${process.env.REACT_APP_BACKEND_URL}/api/characters/${cid}`
                  );
                setCharacter(responseData.character)
                } catch (err) {}
            }
            fetchCharacter()
    }, [sendRequest])

    useEffect(() => {
        let character_informations
        let obj
        if(character) {
            obj = character.description
            character_informations = Object.values(obj);
    } return setCharacterDescription(character_informations)
    }, [character])
    
    return (
        <React.Fragment>
        {isLoading && <LoadingSpinner asOverlay />}
        <div className="character">
            
            <div className="character-image">
                <h1>{character && character.name}</h1>
            </div>
            
            <div className="character-container">
                <div className="character-container__image">
                    {character && <img src={`${process.env.REACT_APP_BACKEND_URL}/${character.image}`} alt={character.name}></img>}
                </div>
                <div className="character-container__info">
                    {characterDescription && !(characterDescription[0] === "brak") && <h2>General informations</h2>}
                    {characterDescription && !(characterDescription[0] === "brak") && <p>{characterDescription[0]}</p>}
                    {characterDescription && !(characterDescription[1] === "brak") && <h2>Character</h2>}
                    {characterDescription && !(characterDescription[1] === "brak") && <p>{characterDescription[1]}</p>}
                    {characterDescription && !(characterDescription[2] === "brak") && <h2>Before Gothic</h2>}
                    {characterDescription && !(characterDescription[2] === "brak") && <p>{characterDescription[2]}</p>}
                    {characterDescription && !(characterDescription[3] === "brak") && <h2>Gothic II</h2>}
                    {characterDescription && !(characterDescription[3] === "brak") && <p>{characterDescription[3]}</p>}
                    {character && !(character.interesting_facts === "brak") && <h2>Interesting facts</h2>}
                    {character && !(character.interesting_facts === "brak") && <p>{character.interesting_facts}</p>}
                </div>
                <Link to="/characters"><Button>Back to Characters</Button></Link>
            </div>
        </div>
        </React.Fragment>
    )
}

export default Character
