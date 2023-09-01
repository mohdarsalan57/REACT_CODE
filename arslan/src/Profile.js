
import {useState} from 'react'
 function Profile ()
{
    const [loggedIn]=useState(2)
    return (
        <div>
            {loggedIn===1?
            <h1>Welcome Arslan5</h1> 
            :loggedIn===2?<h1>Welcome Arslan2</h1>
            :<h1>Welcome Guest 3</h1>}
        </div>
    )
    //if and else sondition and multiple if also use in this
}
export default Profile;