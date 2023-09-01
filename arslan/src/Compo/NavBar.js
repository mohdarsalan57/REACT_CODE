
import { NavLink, } from 'react-router-dom';
import React from 'react'

function Navbar()
{ 
    return(
        <div>
        {/* style={{backgroundColor:'red'}} */}
            <ul className="NavBa">
                
                {/* style={({isActive})=>{return {backgroundColor: isAcive ? "green" : 'red'}}} */}
                <li><NavLink className="nav-bar-link" to="/">Home</NavLink></li>
                <li><NavLink 
                style={({isActive})=>{return {backgroundColor: isActive ? "pink" : 'skyblue'}}}
                 className="nav-bar-link"  to="/about">About</NavLink></li>

                <li><NavLink className="nav-bar-link" to="/contact">Contact</NavLink></li> 
                <li><NavLink className="nav-bar-link" to="/filter">Filter</NavLink></li> 
                <li><NavLink className="nav-bar-link" to="/login">Login</NavLink></li>                          
            </ul>
        </div>
    );
}
export default Navbar;
//it;s also works in this file but this ancle tags load whole the web page's 
// and the link page is use for single page loading of pages.. so link using is good technique
//<li><a href="/"> Home</a></li>
 //                           <li><a href="/abour"> About</a></li>