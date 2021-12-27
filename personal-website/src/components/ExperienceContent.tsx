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
                <b style={{"textAlign":"left"}}><i>{props.company}</i></b>
                <b style={{"textAlign":"right"}}><i>{props.time}</i></b>
            </div>
            <img className ="logo" src={props.logo} style={{backgroundColor: props.setBackground? "white" : "none"}}/>
            <div className="description">
                {props.description}
            </div>
        </>
    );
};