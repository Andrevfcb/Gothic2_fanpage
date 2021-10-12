import React, {useState, useEffect} from 'react';
import "./Characters.css";
import CharacterCard from "./CharacterCard";
import Input from '../FormElements/Input';
import { useHttpClient } from '../hooks/http-hook';
import LoadingSpinner from "../UIElements/LoadingSpinner"



const Characters = () => {

    const { isLoading, error, sendRequest, clearError } = useHttpClient();

    const [characters, setCharacters] = useState([]);
    const [allCharacters, setAllCharacters] = useState();
    const [charactersSearchValue, setCharactersSearchValue] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0)
        const fetchCharacters = async () => {
                try {
                    const responseData = await sendRequest(
                    `${process.env.REACT_APP_BACKEND_URL}/api/characters/`
                  );
                setCharacters(responseData.characters)
                setAllCharacters(responseData.characters)
                } catch (err) {}
            }
            fetchCharacters()
    }, [sendRequest])

    const characterList = () => {
        let characters_informations
        let sortCharacters
        if(characters) {
        sortCharacters = characters.sort((a, b) => a.name > b.name ? 1 : -1)
        characters_informations = sortCharacters.map(char => {
            return (<CharacterCard key={char.id} id={char.id} name={char.name} image={char.image} description={char.description} intresting_facts={char.intresting_facts}  />)
    })
    } return characters_informations
    }

    const inputChange = (e) => {
        setCharactersSearchValue(e.target.value)
        const inputValue = e.target.value.toLowerCase()
        const filteredCharacters = allCharacters.filter(char => char.name.toLowerCase().includes(inputValue))
        setCharacters(filteredCharacters)
    }

    return (
        <div className="characters">
            <div className="characters-image">
                <h1>Characters</h1>
            </div>
            {/* <Input element="input" value={charactersSearchValue} placeholder="search" onInput={inputChange} /> */}
            <input value={charactersSearchValue} placeholder="search" onChange={inputChange} />
            <div className="characters-list">
            {isLoading && <LoadingSpinner asOverlay />}
                {characters.length > 0 ? characterList() : (<p>No characters found</p>)}
            </div>
        </div>
    )
}

export default Characters
