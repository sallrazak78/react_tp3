import React from 'react'
import {Link, NavLink,withRouter} from 'react-router-dom'
const Navbar=(props)=>{
    setTimeout(()=>{
        props.history.push('/about')
    },200000)
    return(
        <nav className="nav-wrapper red darken-3">
            <div className="container"> 
                <Link to="/">Poke times</Link>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}
export default withRouter(Navbar)