import React, { useEffect } from 'react';
import './Contact.css'
import { useForm } from "../hooks/form-hook"

import {
    VALIDATOR_REQUIRE
  } from '../util/validators';

import Button from "../FormElements/Button"
import Input from '../FormElements/Input';


const Contact = () => {

    const [formState, inputHandler] = useForm(
        {
          name: {
            value: '',
            isValid: false
        },
            email: {
                value: '',
                isValid: false
        },
            message: {
                value: '',
                isValid: false
        }
        },
        false
      );

      useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

      const sendMessage = () => {
        alert("Sorry, it's just demonstration app :)")
    }

    return (
        <div className='contact'>
            <div className='contact-image'>
                <h1>Contact</h1>
            </div>
            <div className="contact-container">
                <div className="contact-container__description">
                    <h3>Are you a Gothic fan too?</h3>
                    <p>Write to us!</p>
                    <p>You can send us anything you want <span class="fas fa-grin-stars"></span></p>
                    <p>For example:</p>
                    <ul>
                        <li>new items to our store!</li>
                        <li>new character with description!</li>
                        <li>interesting informations about Gothic II!</li>
                    </ul>
                    <p>or maybe you just want to say Hi! <span class="fas fa-hand-paper"></span></p>
                    <p>Use the form on the right side <span class="fas fa-hand-point-right"></span> </p>
                </div>
                <div className="contact-container__form">
                    <h2>SEND US A MESSAGE</h2>
                <form
                onSubmit={sendMessage}
                >
                    <Input 
                    id="name"
                    element="input"
                    type="text"
                    label="name"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter your name."
                    onInput={inputHandler}
                    />
                    <Input 
                    id="email"
                    element="input"
                    type="email"
                    label="email"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter your email."
                    onInput={inputHandler}
                    />
                    <Input 
                    id="message"
                    element="textarea"
                    type="text"
                    label="message"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a message."
                    onInput={inputHandler}
                    />
                    <Button type="submit" disabled={!formState.isValid}>
                    SEND MESSAGE
                    </Button>
                    
                </form>
                    
                </div>
            </div>
            <div className="contact-map">
                <h2>You can find us here!</h2>
                <iframe title="te" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2461.7601600680596!2d21.600438315784526!3d51.90184087970191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4718c62846790d6d%3A0x3df2baba21c7a40f!2sRoman%C3%B3wka%2014%2C%2008-400%20Garwolin!5e0!3m2!1spl!2spl!4v1633435898923!5m2!1spl!2spl" width="100%" height="450" style={{border: "0", borderRadius: "5px"}} allowfullscreen="" loading="lazy"></iframe>
            </div>
        </div>
    )
}

export default Contact
