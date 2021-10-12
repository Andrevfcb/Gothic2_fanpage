import React from 'react';

import {
    VALIDATOR_REQUIRE
  } from '../../util/validators';

import ImageUpload from "../../FormElements/ImageUpload"
import Button from "../../FormElements/Button"
import Input from '../../FormElements/Input';


const AdminAddItem = ({ itemSubmitHandler, inputHandler, formState }) => {
    

    return (
        <React.Fragment>
                <h2>ADD ITEM</h2>
                <form
                onSubmit={itemSubmitHandler}
                >
                    <Input 
                    id="name"
                    element="input"
                    type="text"
                    label="name"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a valid item name."
                    onInput={inputHandler}
                    />
                    <ImageUpload
                    center
                    id="images"
                    idd="images"
                    onInput={inputHandler}
                    errorText="Please provide an image."
                    />
                    <Input 
                    id="description"
                    element="textarea"
                    type="text"
                    label="description"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a valid item description."
                    onInput={inputHandler}
                    />
                    <Input 
                    id="price"
                    element="input"
                    type="number"
                    label="price"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a valid item price."
                    onInput={inputHandler}
                    />
                    <Input 
                    id="quantity"
                    element="input"
                    type="number"
                    label="quantity"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a valid item quantity."
                    onInput={inputHandler}
                    />
                    <Input 
                    id="main"
                    element="input"
                    type="text"
                    label="main category"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a valid item category."
                    onInput={inputHandler}
                    />
                    <Button type="submit"
                    disabled={!formState.isValid}>
                    ADD
                    </Button>
                </form>
                </React.Fragment>
    )
}

export default AdminAddItem
