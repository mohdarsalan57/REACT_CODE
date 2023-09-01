import React from 'react'
import { Link,useNavigate } from 'react-router-dom';
function Home() {
   
    const navigate = useNavigate();
    const navToPage= (url)=>{
            navigate(url)
    }
    return(
        <div>   
        <h1>Home Page.</h1>
        <p> this is Home page in react use and </p>
        <p>I'm MOHD ARSLAN DEVELOPER OF THIS CODE  ...</p>
        <Link to="/About"> Go to About page</Link>
        <br />
        <br />
        <button onClick={()=> navToPage ('/about')}> Go to About page  </button>
        <br /> <br />
        <button onClick={()=> navToPage ('/filter')}> Go to Filter. page  </button>
        </div>
    );
}
export default Home;
//if u r ask about event click so u said 'useNavigate' hook can be done the 
//task through button and navigate
//clip 55 done