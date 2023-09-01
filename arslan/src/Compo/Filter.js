import { useSearchParams } from 'react-router-dom';
import React from 'react';
function Filter() {
    const [searchParams, setSearchParams ]= useSearchParams();
    console.warn(searchParams.get('age'))
    console.warn(searchParams.get('city'))
    const age= searchParams.get('age');
    const city = searchParams.get('city')

    return(
        <div>
            <h2>filter page</h2>
            <h2>Age is : {age}</h2>
            <h2>city is : {city}</h2>
            <input type="text" onChange={(e)=>setSearchParams({text:e.target.value,age:19})} 
            placeholder='set text in Query'></input>
            <button onClick={()=>setSearchParams({age:40})}>set Age in Query param</button>
        </div>
    );
}
export default Filter;
//clip 54 filter page make in all file 