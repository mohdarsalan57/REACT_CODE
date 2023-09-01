import React from 'react'
const User = (props) => {
    const {data } =props 
    console.warn(data)
    return(
        <div>
            <h2>User compo</h2>
            <h4>{data.name} </h4>
            <h4>{data.age} </h4>
        </div>
    )
}
export default User;
//clip 76 runs props revised and it in the react-redux preration 
// 72-75  clllips are theory and installation clip ..









// import React from 'react';
// import {} from 'react-router-dom';
// function withRouterUser(props)
// {
//     console.warn(props.match.params.id)
//     return(
//     <div><h1>User No {props.match.params.id}</h1>
//     <h1>User Name {props.match.params.name}</h1></div>
//     )
// }
// export default withRouterUser;