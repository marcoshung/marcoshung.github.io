import './ExperienceContent.css'
interface ContentProps {
    company:string, 
    time:string, 
    description:string,
    logo:string, 
    setBackground?:boolean
}

export const ExperienceContent = (
    props:ContentProps
) => {
    return (
        <>
        <div className="experience-title">
            <h5><i>{props.company}</i></h5>
            <h5><i>{props.time}</i></h5>
        </div>
        <img className ="logo" src={props.logo} style={{backgroundColor: props.setBackground? "white" : "none"}}/>
        <div className="description">
            {props.description}
        </div>
        </>
    );
};