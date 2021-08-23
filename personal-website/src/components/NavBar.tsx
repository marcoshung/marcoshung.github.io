import './NavBar.css'
import { Link } from 'react-router-dom'
export const NavBar = () =>{
    return (
        <ul className="container">
            <li className="item"><Link to="/about">About</Link></li>
            <li className="item"><Link to="/work">Experience</Link></li>
            <li className="item"><Link to="/projects">Projects</Link></li>
            <li className="item"><Link to="/contact">Contact</Link></li>
        </ul>
    )
}