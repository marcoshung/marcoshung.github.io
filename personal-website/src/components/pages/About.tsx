import Typewriter from 'typewriter-effect';
import './About.css'

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
        <div style={{backgroundColor:"black"}}>
            <Typewriter
                options={{
                strings: welcome_messages,
                autoStart: true,
                loop: true,
                }}
            />
        </div>
        </>
    )
}