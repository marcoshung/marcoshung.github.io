import Typewriter from 'typewriter-effect';
import './About.css'
import pfp from '../../images/pfp.jpg';
const message = "'Hi! My name is Marcos and welcome to my portfolio!'"
const welcome_messages = [
    `print(${message})`,
    `echo ${message}`,
    `System.out.println(${message})`,
    `console.log(${message})`
]

export const About = () => {
    return (
        <div className="about_header">
            <div className="typewriter" style={{backgroundColor:"black", width:"500px"}}>
                <Typewriter
                    options={{
                    strings: welcome_messages,
                    autoStart: true,
                    loop: true,
                    }}
                />
            </div>
            <img className ="pfp" src={pfp}></img>
        </div>
    )
} 