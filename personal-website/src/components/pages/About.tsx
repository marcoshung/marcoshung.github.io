import React from 'react'
import Typewriter from 'typewriter-effect';
const message = "\'Hi! My name is Marcos and welcome to my portfolio!\'"
const welcome_messages = [
    `print(${message})`,
    `echo ${message}`,
    `System.out.println(${message})`,
    `console.log(${message})`
]

export const About = () => {
    return (
        <>
        <Typewriter
            options={{
            strings: welcome_messages,
            autoStart: true,
            loop: true,
            }}
        />
        </>
    )
}