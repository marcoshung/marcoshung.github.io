import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import './ExperienceContent.css'
interface ContentProps {
    company:string, 
    time:string, 
    description:ReactJSXElement,
    logo:string, 
    setBackground?:boolean
}

export const ExperienceContent = (
    props:ContentProps
) => {
    return (
        <>
            <div className="experience-title">
                <i style={{"textAlign":"left"}}> {props.company}</i>
                <i style={{"textAlign":"right"}}>{props.time}</i>
            </div>
            <img className ="logo" src={props.logo} style={{backgroundColor: props.setBackground? "white" : "none"}}/>
            <div className="description">
                {props.description}
            </div>
        </>
    );
};