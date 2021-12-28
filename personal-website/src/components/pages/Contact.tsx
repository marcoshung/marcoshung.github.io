import {Message} from "../../twilio"
import { ChakraProvider, Button } from "@chakra-ui/react"
import React, { useState } from 'react';
import './Contact.css'
import linkedin from '../../images/linkedIn.png';
import github from '../../images/github.png';
import { useForm, ValidationError } from '@formspree/react';

export const Contact= ()=> {
    const [state, handleSubmit] = useForm("xayvnqky");
    const [name, SetName] = useState('')
    return (
        <div className="contact">  
            <h3>Contact</h3>
            <form onSubmit={handleSubmit}>
                <div className="contact-header">
                    <div className="contact-content" style={{"marginRight": "8px"}}>
                        <label htmlFor="name">
                            Name
                        </label>
                        <br></br>
                        <input
                            id="name"
                            name="name"
                            onChange={(event) => SetName(event?.target.value)}
                        />
                    </div>
                    <div className="contact-content" style={{"marginLeft": "8px"}}>
                        <label htmlFor="email">
                            Email
                        </label>
                        <br></br>
                        <input
                            id="email"
                            type="email" 
                            name="email"
                        />
                        <ValidationError 
                            prefix="Email" 
                            field="email"
                            errors={state.errors}
                        />
                    </div>
                </div>
                <div className="contact-message">
                    <label htmlFor="message">
                        Message
                    </label>
                    <br></br>
                    <textarea
                        id="message"
                        name="message"
                        style={{"fontSize":"medium"}}
                        rows={5}
                    />
                    <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                    />
                </div>
                    <ChakraProvider>
                        <Button 
                            colorScheme="blue" 
                            size="lg"
                            type="submit"
                        >
                            Send Message
                            </Button>
                    </ChakraProvider>
                </form>

            <div className="contact_bar">
                <a href="https://www.linkedin.com/in/mhung927/" className="icon"><img src={linkedin}/> </a>
                <a href="https://github.com/marcoshung" className="icon"><img id ={"github"} src={github}/> </a>
            </div>
        </div>
    )
}