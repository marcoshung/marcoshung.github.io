import {Message} from "../../twilio"
import { ChakraProvider, Button } from "@chakra-ui/react"
import React, { useState } from 'react';
import './Contact.css'
import linkedin from '../../images/linkedIn.png';
import github from '../../images/github.png';
export const Contact= ()=> {
    const [phoneMessage, setPhoneMessage] = useState('')
    
    return (
        <>  
            <div>
            <h3>Send Me a Text!</h3>
                <textarea 
                    className="phoneMessage"
                    onChange={(event) => setPhoneMessage(event?.target.value)}
                    placeholder="Write me a message!"
                    style={{resize:"both"}}
                    rows={4}
                    cols={64}
                />
                
            </div>
            <ChakraProvider>
                <Button 
                    colorScheme="blue" 
                    size="lg"
                    onClick={() =>Message(phoneMessage)}
                >
                    Send Message
                    </Button>
            </ChakraProvider>
            <div className="contact_bar">
                <a href="https://www.linkedin.com/in/mhung927/" className="icon"><img src={linkedin}/> </a>
                <a href="https://github.com/marcoshung" className="icon"><img id ={"github"} src={github}/> </a>
            </div>
        </>
    )
}