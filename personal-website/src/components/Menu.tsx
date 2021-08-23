import React, { useState } from "react";
import './Menu.css'
import { Link } from 'react-router-dom'

export const Menu = () => {
    const [open, setOpen] = useState(true)
    const sideBarStyle = {
        width : open ? '250px' : '50px'
    }
    return (
        <div className={`sidebar`} style={sideBarStyle}>
            <button 
                className="controlBtn"
                style={open ? {}: {position:'relative', textAlign:'center', margin:0, right: 0}}
                onClick={
                    ()=>setOpen(!open)
                }
            >
                {open ? (<>&times;</>) : (<>&#9776;</>)}
            </button>
            {open ? (
                <ul className="items">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/work">Experience</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            ) : null
            }
        </div>
    )
}