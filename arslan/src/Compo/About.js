import React from 'react'
import {Link} from 'react-router-dom';
function About  () {
    return(
        <div>  
        <h1>About Page...</h1>
        <p> this is about page in react use and </p>
        <p>I'm mohd arslan  creater of this code </p>
        <Link to="/"> Go to home page</Link>
        <li><Link to="/user/arslan" state={{name:"MOHD ARSLAN",age:'24'}}>Arslan</Link></li>
                <li><Link to="/user/peter">Peter</Link></li>
        </div>
    )
}
export default About;