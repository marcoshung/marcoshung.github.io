import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import './ExperienceContent.css'
interface ContentProps {
    company:string, 
    title: string,
    time:string, 
    description:ReactJSXElement,
    logo:string, 
    setBackground?:boolean
}

export const ExperienceContent = (
    props:ContentProps
) => {
    return (
        <div className={`experience-content ${props.company}`}>
            <div className="experience-header">
                <img className ="logo" src={props.logo} style={{backgroundColor: props.setBackground? "white" : "none"}}/>
                <div className="experience-title">
                    <b style={{fontSize:"2.5rem"}}> {props.company}</b>
                    <p style={{fontSize:"2rem", margin:"0"}}> {props.title}</p>
                    <i style={{fontSize:"1.5rem"}}>{props.time}</i>
                </div>

            </div>
            <div className="description">
                {props.description}
            </div>
        </div>
    );
};