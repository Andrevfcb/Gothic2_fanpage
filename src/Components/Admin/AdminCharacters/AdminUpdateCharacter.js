import React, {useState, useEffect} from 'react';

import { useHttpClient } from '../hooks/http-hook';

import { useForm } from "../hooks/form-hook"
import ErrorModal from "../UIElements/ErrorModal"
import Modal from "../UIElements/Modal"
import LoadingSpinner from "../UIElements/LoadingSpinner"
import {
    VALIDATOR_EMAIL,
    VALIDATOR_REQUIRE,
    VALIDATOR_MINLENGTH
  } from '../util/validators';

import ImageUpload from "../FormElements/ImageUpload"
import Button from "../FormElements/Button"
import Input from '../FormElements/Input';

const AdminUpdateCharacter = ({ characters }) => {

    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [isAddMode, setIsAddMode] = useState(true);
    // const [characters, setCharacters] = useState([]);
    const [characterId, setCharacterId] = useState(false);

    const [formState, inputHandler, setFormData] = useForm(
        {
          name: {
            value: '',
            isValid: false
          },
          description: {
            value: '',
            isValid: false
          }
        },
        false
      );

    const characterSubmitHandler = async event => {
        event.preventDefault();
          try { 
            const formData = new FormData();
            formData.append('name', formState.inputs.name.value);
            formData.append('description', formState.inputs.description.value);
            formData.append('image', formState.inputs.image.value);
            const responseData = await sendRequest(
              `${process.env.REACT_APP_BACKEND_URL}/api/characters/`,
              'POST',
              formData
            );
          } catch (err) {}
      };
    
    const setOptions = characters.map(char => <option value={char.id}>{char.name}</option>)
        
    const test = (e) => {
        e.preventDefault()
        setFormData(
            {
              ...formState.inputs,
              name: {
                value: "null",
                isValid: true
              }
            },
            formState.inputs.name.isValid && formState.inputs.description.isValid
          );
          console.log(formState);
          
      }
      

    return (
        <React.Fragment>
                
                <h2>UPDATE CHARACTER</h2>
                {characters && <select name="characters" id="characters" onChange={(e) => {setCharacterId(e.target.value)
                }} >{setOptions}</select>}
                {characterId && <form 
                onSubmit={characterSubmitHandler}
                >
                    <input type="text" value="test"></input>
                    <Input 
                    id="name"
                    element="input"
                    type="text"
                    label="name"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a valid character name."
                    onInput={inputHandler}
                    />
                    <Input 
                    id="description"
                    element="textarea"
                    type="text"
                    label="description"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a valid character description."
                    onInput={inputHandler}
                    />
                    
                    <Button type="submit" 
                    
                    // onClick={characterSubmitHandler} 
                    // disabled={!formState.isValid}
                    >
                    UPDATE
                    </Button>
                    <button onClick={test}>test</button>
                    
                </form>}
                </React.Fragment>
    )
}

export default AdminUpdateCharacter
