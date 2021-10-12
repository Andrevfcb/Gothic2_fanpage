import React from 'react';

import {
    VALIDATOR_EMAIL,
    VALIDATOR_REQUIRE
  } from '../util/validators';

import ImageUpload from "../FormElements/ImageUpload"
import Button from "../FormElements/Button"
import Input from '../FormElements/Input';

const Auth = ({ userSubmitHandler, isLoginModal, inputHandler, formState }) => {

    return (
        <React.Fragment>
                
                <form 
                onSubmit={userSubmitHandler}
                >
                    {!isLoginModal && <Input 
                    id="userName"
                    element="input"
                    type="text"
                    label="username"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a valid username."
                    onInput={inputHandler}
                    />}
                    {!isLoginModal && <ImageUpload
                    center
                    id="avatar"
                    onInput={inputHandler}
                    errorText="Please provide an image."
                    />}
                    <Input 
                    id="email"
                    element="input"
                    type="email"
                    label="email"
                    validators={[VALIDATOR_EMAIL()]}
                    errorText="Please enter a valid email."
                    onInput={inputHandler}
                    />
                    <Input 
                    id="password"
                    element="input"
                    type="password"
                    label="password"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a valid password."
                    onInput={inputHandler}
                    />
                    <Button type="submit" onClick={userSubmitHandler} disabled={!formState.isValid}>
                    {isLoginModal ? "LOGIN" : "SIGNUP"}
                    </Button>
                </form>
                </React.Fragment>
    )
}

export default Auth
