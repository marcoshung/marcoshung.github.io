import Typewriter from 'typewriter-effect';
import './About.css'
import pfp from '../../images/pfp.jpg';
import { motion } from 'framer-motion'
import linkedin from '../../images/linkedIn.png';
import github from '../../images/github.png';

const message = "\"Hi! My name is Marcos and welcome to my portfolio!\""
const welcome_messages = [
    `print(${message})`,
    `echo ${message}`,
    `System.out.println(${message});`,
    `console.log(${message})`,
    `Console.WriteLine(${message});`,
    `fmt.Println(${message})`
]

export const About = () => {
    return (
        <motion.div className={"about_header"}
        initial={{scale: 0}}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}>
            <div className="intro">
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
            <div className="basicInfo">
                <h3>Name : <i>Marcos Hung</i></h3>
                <h3>Location : <i>San Fransico Bay Area</i></h3>
                <h3>Education : <i>San Jose State University</i></h3>
                <h3>Expected Graduation : <i>May 2022</i></h3>
            </div>
            <div className="contact_bar">
                <a href="https://www.linkedin.com/in/mhung927/" ><img className="icon" src={linkedin}/> </a>
                <a href="https://github.com/marcoshung"><img  className="icon" id ={"github"} src={github}/> </a>
            </div>
        </motion.div>
    )
} 