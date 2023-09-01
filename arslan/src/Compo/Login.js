import { useNavigate} from 'react-router-dom';
import React from 'react';
import { useEffect } from 'react';
function Login() {
    const login =() => {
        localStorage.setItem('login', true);
        navigate('/')
    }
    const navigate = useNavigate();
    useEffect (() => {
        let login = localStorage.getItem('login');
        if (login) {
           navigate('/')
           
        }
    });
    return(
        <div>
            <h2>Login page</h2>
            <input  type ="text"  /> <br /><br />
            <input type="text"  /><br /> <br />
            <button onClick={login}>Login</button>
            
        </div>
    );
}
export default Login;
