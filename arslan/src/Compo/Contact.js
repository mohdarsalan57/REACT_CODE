import {Link ,Outlet  } from 'react-router-dom';
import React from 'react';
function Contact() {
    
    return(
        <div>
            <h2>Contact page</h2>
            <h2> now in this we dispaly nested routing </h2>
            <Link to="company">Company</Link>
            <Link to="channel">Channel</Link>
            <Link to="others">Others</Link>
            <Outlet />
        </div>
    );
}
export default Contact;
//clip 56 filter page make in all file 