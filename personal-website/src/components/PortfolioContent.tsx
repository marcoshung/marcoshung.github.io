import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import './PortfolioContent.css'
interface ContentProps {
    title: string,
    description:ReactJSXElement,
    picture:string, 
    style? : React.CSSProperties
}

export const ProjectContent = (props:ContentProps) => {
    return (
        <div className={`project-content ${props.title}`}>
                <div className="project-description">
                    <b style={{fontSize:"2.5rem"}}> {props.title}</b>
                    <img className ="picture" src={props.picture} style={props.style}/>
                    <i style={{fontSize:"1.5rem", textAlign: "left"}}>{props.description}</i>
                </div>
        </div>
    );
}