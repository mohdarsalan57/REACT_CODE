import React from 'react';
import  {useParams, useLocation}  from 'react-router-dom';
function User (){
    const loaction  = useLocation();
console.log(loaction);
const params = useParams();
const {name} =params;
console.warn (name);
    return(<>
<h3> this is {name}'s page</h3>
<h5>check in console use location hook</h5>
    </>

    );
}
export default User;