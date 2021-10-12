import React, {useState, useEffect, useContext } from 'react';

import { useHttpClient } from '../../hooks/http-hook';

import { useForm } from "../../hooks/form-hook"
import ErrorModal from "../../UIElements/ErrorModal"
import { AuthContext } from '../../context/auth-context';

import LoadingSpinner from "../../UIElements/LoadingSpinner"
import AdminAddCharacter from './AdminAddCharacter';
import AdminDeleteCharacter from './AdminDeleteCharacter';

const AdminCharacters = () => {

    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [isSendRequest, setIsSendRequest] = useState(true);
    const [characters, setCharacters] = useState([]);
    const [characterId, setCharacterId] = useState(false);
    const auth = useContext(AuthContext);
   

    const [formState, inputHandler] = useForm(
      {
        name: {
          value: '',
          isValid: false
      },
          general: {
              value: '',
              isValid: false
      },
          character: {
              value: '',
              isValid: false
      },
          before: {
              value: '',
              isValid: false
      },
          g2: {
              value: '',
              isValid: false
      },
        image: {
          value: null,
          isValid: false
        },
        interesting_facts: {
          value: '',
          isValid: false
      }
      },
      false
    );

    useEffect(() => {
      const fetchCharacters = async () => {
          try {
            const responseData = await sendRequest(
              `${process.env.REACT_APP_BACKEND_URL}/api/characters`
            );
    
            setCharacters(responseData.characters);
          } catch (err) {}
        
      };
        fetchCharacters();
    }, [sendRequest, isSendRequest])

    const characterSubmitHandler = async event => {
      event.preventDefault();
        try { 
          const formData = new FormData();
          formData.append('name', formState.inputs.name.value);
          formData.append('interesting_facts', formState.inputs.interesting_facts.value);
          formData.append('general', formState.inputs.general.value);
          formData.append('character', formState.inputs.character.value);
          formData.append('before', formState.inputs.before.value);
          formData.append('g2', formState.inputs.g2.value);
          formData.append('image', formState.inputs.image.value);
          await sendRequest(
            `${process.env.REACT_APP_BACKEND_URL}/api/characters/`,
            'POST',
            formData,
            {
              Authorization: 'Bearer ' + auth.token
            }
          );
              alert("create character works")
              setIsSendRequest(prevIsSendRequest =>
                !prevIsSendRequest)
        } catch (err) {}
    };

      const deleteCharacterSubmitHandler = async event => {
        event.preventDefault();
            try {
              await sendRequest(
                `${process.env.REACT_APP_BACKEND_URL}/api/characters/${characterId}`,
                'DELETE',
                null,
                {
                  Authorization: 'Bearer ' + auth.token
                }
              );
            alert("deleting character works")
            setIsSendRequest(prevIsSendRequest =>
              !prevIsSendRequest)
            } catch (err) {}
        }

        const choseDeletedCharacterId = (e) => {
            setCharacterId(e.target.value)
        }
      
        const setOptions = characters.map(char => <option value={char.id}>{char.name}</option>)

    return (
        <React.Fragment>
          <ErrorModal error={error} onClear={clearError} />
            {isLoading && <LoadingSpinner asOverlay />}
            <AdminAddCharacter 
            characterSubmitHandler={characterSubmitHandler}
            inputHandler={inputHandler}
            formState={formState}
            />
            <AdminDeleteCharacter 
            setOptions={setOptions}
            choseDeletedCharacterId={choseDeletedCharacterId}
            deleteCharacterSubmitHandler={deleteCharacterSubmitHandler}
            characterId={characterId}
            />
        </React.Fragment>
    )
}

export default AdminCharacters
