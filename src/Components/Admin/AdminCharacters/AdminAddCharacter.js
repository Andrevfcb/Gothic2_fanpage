import React from 'react';

import {
    VALIDATOR_REQUIRE
  } from '../../util/validators';

import ImageUpload from "../../FormElements/ImageUpload"
import Button from "../../FormElements/Button"
import Input from '../../FormElements/Input';

const AdminAddCharacter = ({ characterSubmitHandler, inputHandler, formState }) => {

    return (
        <React.Fragment>
                <h2>ADD CHARACTER</h2>
                <form 
                onSubmit={characterSubmitHandler}
                >
                    <Input 
                    id="name"
                    element="input"
                    type="text"
                    label="name"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a valid character name."
                    onInput={inputHandler}
                    />
                    <ImageUpload
                    center
                    id="image"
                    onInput={inputHandler}
                    errorText="Please provide an image."
                    />
                    <Input 
                    id="general"
                    element="textarea"
                    type="text"
                    label="general"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a valid character description."
                    onInput={inputHandler}
                    />
                    <Input 
                    id="character"
                    element="textarea"
                    type="text"
                    label="character"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a valid character description."
                    onInput={inputHandler}
                    />
                    <Input 
                    id="before"
                    element="textarea"
                    type="text"
                    label="before"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a valid character description."
                    onInput={inputHandler}
                    />
                    <Input 
                    id="g2"
                    element="textarea"
                    type="text"
                    label="g2"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a valid character description."
                    onInput={inputHandler}
                    />
                    <Input 
                    id="interesting_facts"
                    element="textarea"
                    type="text"
                    label="interesting_facts"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a valid character description."
                    onInput={inputHandler}
                    />
                    <Button type="submit" onClick={characterSubmitHandler} disabled={!formState.isValid}>
                    ADD
                    </Button>
                </form>
                </React.Fragment>
    )
}

export default AdminAddCharacter
