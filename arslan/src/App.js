import React from 'react'
import User from './User'
function App() {
    return(
        <div>
            <h1>App Compo</h1>
<User  data= {{name:'Arslan' , age:23}} />
        </div>
    )
}
export default  App;












// import React from 'react'
// function App(){
//   const [data,setData] =React.useState({name:'Arslan' ,age:24})
//   return (
//     <div className="App">
//     <h1>State Object with Hooks</h1>
//     <input type="text"  placeholder='enter name' value={data.name}
//      onChange={(e)=>{setData({...data,name:e.target.value})}}></input>
//      <input type="text"  placeholder='enter age' value={data.age}
//      onChange={(e)=>{setData({...data,age:e.target.value})}}></input>
//   <h1>{data.name}</h1>
//   <h1>{data.age}</h1>
//     </div>
//   );
// }
// //clip 71 done running
// export default App;











// import React from 'react'
// import Child from './Child'
// function App() {
//   const [count,setCount]=React.useState(0)
//   return (
//     <div className="App">
//       <Child count={count} />
//       <button onClick={()=>{setCount( Math.floor(Math.random()*10) )}} >Update Counter</button>
//     </div>
//   );
// }
// //clip 70 done and runns.
///...part 2 code...
// export default App;
// import React,{useEffect,useRef} from 'react'
// function Child(props)
// {
//     const lastVal=useRef();
//     useEffect(()=>{
//         lastVal.current=props.count
//     })
//     const previousProps=lastVal.current
//     return(
//         <div>
//             <h1>Count is  : {props.count}</h1>
//             <h1>previous Props is  : {previousProps}</h1>

//         </div>
//     )
// }

// export default Child;













//import './App.css';
// import React, { useState } from 'react'
// function App() {
//   const [count,setCount]=useState(0)
//   function updateCounter()
//   {
//     // let item=Math.floor(Math.random()*10)
//     // setCount((pre)=>{
//     //   if(pre<3)
//     //   {
//     //     alert("last value is very low")
//     //   }
//     //   return item
//     // })
//     for(let i=0;i<5;i++)
//     {
//       setCount((pre)=>pre+1)
//     }
//   }
//   return (
//     <div className="App">
//       <h1>{count}</h1>
//       <button  onClick={updateCounter}>Click Me to Update counter</button>
//     </div>
//   );
// }
//clip 69
// export default App;















// import './style.css'
// import React, {  useState } from 'react'
// function App() {
//  const [name,setName]=useState("");
//  const [email,setEmail]=useState("");
//  const [mobile,setMobile]=useState("");
// function saveUser (){
//   console.log({name,email,mobile});
//   let data= {name,email,mobile}
//   fetch("https://dummyjson.com/todos",{
//     method:'POST',
//     headers:{
//       'Accept' : 'application/json',
//       'Content-Type' :'application/json'
//     },
//     body:JSON.stringify(data)
//   }).then((result)=>{
//     result.json().then((resp) =>{
//       console.log("resp",resp);
//     })
//   })
// }


// return (
//  <div className="App">
//  <h1>POST API Example </h1>  
//  <input type="text" name="name" value={name} onChange={(e)=>{setName(e.target.value)}}  /> <br /> <br />
//  <input type="text" name="email"  value={email} onChange={(e)=>{setEmail(e.target.value)}} /> <br /> <br />
//  <input type="text" name="mobile"  value={mobile} onChange={(e)=>{setMobile(e.target.value)}}/> <br /> <br />
//  <button type="button" onClick={saveUser} >Save New User</button>
// </div>
// );
// }
      //REST API METHOD FOR DATA ADD-ON ON API AND FETCH THE RESULT BUT 
       //API IS NOT WORKING AS SAME VIDEO TUORIAL
   //OTHER CODE IS WORKING AND DISPLAY THE RESULTS
           //CLIP 65 CMPLT RUNNABLE
       //export default App;






// import React,{useEffect,useState} from 'react'
// function App() {
//   const [users,setUsers]=useState([])
//   useEffect(()=>{
//     fetch("https://dummyjson.com/todos").then((result)=>{
//       result.json().then((resp)=>{
//         console.warn(resp)
//         setUsers(resp)
//       })
//     })
//   },[])
//   console.warn(users)
//   return (
//     <div className="App">
//       <h1>Get API Call </h1>
//       <table border="3">
//        <tbody>
//        <tr>
//           <td>id</td><br /> <br />
//           <td>todo</td><br /> <br />
//           <td>completed</td>
//           <td>userid</td>
//         </tr>
//         {
//           users.map((item,i)=>
//             <tr key={i}>
//             <td>{item.id}</td>
//           <td>{item.todo}</td>
//           <td>{item.completed}</td>
//             <td>{item.userId}</td>
//           </tr>
//           )
//         }
//        </tbody>
//       </table>

//     </div>
//   );
// }
// export default App;
//clip 63,64





















// import './style.css'
// import React from 'react'
// import Home from './Compo/Home'
// import About from './Compo/About'
// import NavBar from './Compo/NavBar'
// import User from './Compo/User'
// import Filter from './Compo/Filter'
// import Contact from './Compo/Contact'
// import Company from './Compo/Company'
// import Channel from './Compo/Channel'
// import Others from './Compo/Others'
// import Login from './Compo/Login'
// import Protected from './Compo/Protected'
// //import Page404 from './Compo/Page404'
// import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
// function App() {
//   return ( 
//    <div className="App">    
//     <BrowserRouter>
//     <NavBar />   
// <Routes>
// <Route path="/" element={<Protected Component={Home} />} />

// <Route path="/login" element={<Login />}/>

// <Route path="/about" element={<Protected Component={About} />} />
// <Route path="/filter" element={<Protected Component={Filter} />} />
// <Route path="/*" element ={<Navigate to ="/"/>} />
// <Route path="/user/:name" element={<User />}/>
// <Route path="/contact/" element={<Contact />}>
//     <Route path="company"  element={<Company />}   /> 
//     <Route path="channel"  element={<Channel />}   /> 
//     <Route path="others"  element={<Others />}   /> 


// </Route>
// </Routes>
//     </BrowserRouter>
//     </div> 
//   );
// // clip 50 , 51(params) routing instllation and usage .code running <Route path="/*" element ={<Page404 />} /> 
// // run the code and page404 and navbar file also use in this ..
// }
// export default App;
























// import React,{useEffect,useState} from 'react'
// //import TaApi from './TaApi'
// function App() {
//   const [users,setUser]=useState([])
//   useEffect(()=>{
//     fetch("http://localhost:3001").then((result)=>{
//       result.json().then((resp)=>{
//          console.warn(resp)
//         setUser(resp)
//       })
//     })
//   },[] ,[])
//   console.warn(users)
//   return (
//     <div className="App">
//       <h1>Get API Call </h1>
//       <table border="1">
//        <tbody>
//        <tr>
//           <td>ID</td>
//           <td>Name</td>
//           <td>Email</td>
//           <td>Mobile</td>
//         </tr>
//         {
//           users.map((item,i)=>
//             <tr key={i}>
//             <td>{item.userId}</td>
//           <td>{item.name}</td>
//           <td>{item.email}</td>
//             <td>{item.mobile}</td>
//           </tr>
//           )
//         }
//        </tbody>
//       </table>

//     </div>
//   );
// }
// export default App;
















// import React from 'react'
// import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
// import User from './User'
// function App() {
//   let user=[
//     {name:'arslan',id:1},
//     {name:'zaid',id:2},
//     {name:'nishu',id:3},
//     {name:'athar',id:4},
//   ]
//   return (
//     <div className="App">
//       <Router>
//       <h1>React Dynamic Routing</h1>
//       {
//         user.map((item)=>
//       <div><Link to={"/user/"+item.id+"/"+item.name}>{item.name}</Link></div>)
//       }
//       <Route path="/user/:id/:name" ><User /></Route>
//       </Router>
//     </div>
//   );
// }
// export default App;

















// import './style.css'
// import React from 'react'
// import Home from './Compo/Home'
// import About from './Compo/About'
// import NavBar from './Compo/NavBar'
// import User from './Compo/User'
// import Filter from './Compo/Filter'
// import Contact from './Compo/Contact'
// import Company from './Compo/Company'
// import Channel from './Compo/Channel'
// import Others from './Compo/Others'
// import Login from './Compo/Login'
// import Protected from './Compo/Protected'
// //import Page404 from './Compo/Page404'
// import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
// function App() {
//   return ( 
//    <div className="App">    
//     <BrowserRouter>
//     <NavBar />   
// <Routes>
// <Route path="/" element={<Protected Component={Home} />} />

// <Route path="/login" element={<Login />}/>

// <Route path="/about" element={<Protected Component={About} />} />
// <Route path="/filter" element={<Protected Component={Filter} />} />
// <Route path="/*" element ={<Navigate to ="/"/>} />
// <Route path="/user/:name" element={<User />}/>
// <Route path="/contact/" element={<Contact />}>
//     <Route path="company"  element={<Company />}   /> 
//     <Route path="channel"  element={<Channel />}   /> 
//     <Route path="others"  element={<Others />}   /> 


// </Route>
// </Routes>
//     </BrowserRouter>
//     </div> 
//   );
// // clip 50 , 51(params) routing instllation and usage .code running <Route path="/*" element ={<Page404 />} /> 
// // run the code and page404 and navbar file also use in this ..
// }
// export default App;











// import './style.css'
// import React from 'react'
// import Home from './Compo/Home'
// import About from './Compo/About'
// import NavBar from './Compo/NavBar'
// import { BrowserRouter, Route, Routes,  } from 'react-router-dom';
// function App() {
//   return ( 
//    <div className="App">    
//     <BrowserRouter>
//     <NavBar />
// <Routes>

// <Route path="/" element={<Home />}/>
// <Route path="/About" element={<About />}/>
// </Routes>
//     </BrowserRouter>
//     </div> 
//   );
// // clip 48 , 49 routing instllation and usage .. code running ......
// }
// export default App;














// import './style.css';
// import React, { useRef, useState } from 'react'
// function App() {
//   return (
//     <div className="App">
//       <h1>HOC </h1>
//       <HOCRed cmp={Counter} />
//       <HOCGreen cmp={Counter} />
//       <HOCBlue cmp={Counter} />

//     </div>
//   );
// }
// function HOCRed(props)
// {
//   return <h2 style={{backgroundColor:'red',width:100}}>Red<props.cmp /></h2>
// }
// function HOCGreen(props)
// {
//   return <h2 style={{backgroundColor:'green',width:100}}>Grren<props.cmp /></h2>
// }
// function HOCBlue(props)
// {
//   return <h2 style={{backgroundColor:'blue',width:100}}>blue <props.cmp /></h2>
// }
// function Counter()
// {
//   const [count,setCount]=useState(0)
//   return<div>
//     <h3>{count}</h3>
//     <button onClick={()=>setCount(count+1)}>Update</button>
//   </div>
// }
// // clip 47 and dunning code HOC
// export default App;











// import './style.css';
// import React, { useRef } from 'react'
// function App() {
//   let inputRef = useRef(null)
//   let inputRef2 = useRef(null)

//   function submitForm(e) {
//     e.preventDefault()
//     console.warn("input field 1 value : ", inputRef.current.value)
//     console.warn("input field 2 value : ", inputRef2.current.value)
//     let input3 = document.getElementById('input3').value
//     console.warn("input field 3 value : ", input3)

//   }
//   return (
//     <div className="App">
//       <h1>Uncontrolled Component </h1>
//       <form onSubmit={submitForm} >
//         <input ref={inputRef} type="text" /> <br /> <br />
//         <input ref={inputRef2} type="text" /> <br /> <br />
//         <input id="input3" type="text" /> <br /> <br />

//         <button>Submit</button>
//       </form>
//     </div>
//   );
// // clip 46 compt and running code ...
// }
// export default App;











// import './style.css';
// import React,{useState} from 'react'
// import User2 from './User2'
// function App() {
//   const [val,setVal]=useState("000")

//    return (
//     <div className="App">
//       <h1>Controlled Component </h1>
//       <input type="text" value={val} onChange={(e)=>setVal(e.target.value)} />
//    <h1>{val}</h1>
//    <User2 />
//     </div>
//   );

// }
// export default  App;











// import React, {useRef} from 'react'
// import './style.css';
// import User2 from './User2'
// function App()
// {
//    let inputRef= useRef(null)
//    function updateInput()
//    {
//       inputRef.current.value="1000";
//       inputRef.current.style.color="red"
//       inputRef.current.focus()
//    }
//  return (
//     <div className="App">
//     <h5>arslan</h5>
//     <User2 ref={inputRef} />
// <button onClick={updateInput}>Update Input Box </button>
//     </div>
//  );
// }
// //clip 43 forward ref ... running code..
// export default  App;











// import React,{useRef} from 'react'
// function App()
// {
// let inputRef=useRef(null)
// function handleInput()
// {
//     console.log("IT's ok func Running")
//     inputRef.current.value="10000"
//     inputRef.current.focus();
//     inputRef.current.style.display="none"
// }
// return(
//     <div className="App">
//     <h2>UseRef In React Arslan</h2>
//     <input type="text"  ref={inputRef}></input>
//     <button onClick={handleInput}> HAndle Input </button>
//     </div>
    
// );
// }
// //clip 43 code is running
// export default App;














// import React,{createRef} from 'react'
// class App extends React.Component {
//     constructor(){
//         super();
//         this.inputRef=createRef();
//     }
//     componentDidMount()
//     {
//         //console.warn(this.inputRef.current.value="10000")
//     }
//     getVal()
//     {
//         console.warn(this.inputRef.current.value)
//         this.inputRef.current.style.color="red"
//         this.inputRef.current.style.backgroundColor="pink"

//     }
//     render(){
//         return(
        
//             <div className="App">
//             <h2>Ref in React Arslan make file</h2>
//             <input type="text" ref={this.inputRef}></input>
//             <button onClick={()=> this.getVal() }> Check Ref </button>
//             </div>
//         );
        
//     }
// }
// //running code clip 42 ..Save 
// export default App;









// not running code
// import React , {useState , useMemo} from 'react'
// function App() {
//     const [count, setCount]= useState(3);
//     const [item, setItem] = useState(10);
//     const multiCountMemo  = useMemo(function multiCount() {
//         console.warn("hello")
//         return count * 5
//     },[count])
//     return (
//         <div className="App">
//         <h1>useMemo Hook In React</h1>
//         <h2>Count : {count}</h2>
//         <h2>Item : {item}</h2>
//         <h2>{multiCountMemo}</h2>
    
//             <button onClick ={() => setCount=(count + 6)}> Update </button>
//             <button onClick ={() => setItem=(item * 10)}> Update Im</button>
//             </div>
//            );
//            }
//            export default App;
















//clip 39 -40 Pure component running.....
// import React from 'react'
// import Users from './Users'
// class  App extends React.Component {
//   constructor()
//   {
//     super();
//     this.state={
//       count:1
//     }
//   }
//  render()
//  {
//   return (
//     <div className="App">
//      <Users count={this.state.count} />
//       <button 
//       onClick={()=>{this.setState({count:this.state.count+1})}}
//       >Update Count</button>
//     </div>
//   );
//  }
// }

// export default App;










// //clip 38 runs .... send data parent to child and return also back
// import React from 'react'
// import Cols from  './Cols'
// function App () {
// function getName(name) {
//   alert(name)

// }
// return (
//   <div className="App">
// <h2>Lifting State</h2>
// <Cols getData={getName} />
//   </div>
// );
// }

// export default App;










// import React from 'react'
// import Cols from './Cols'
// function App() {
//   return (
//     <>
//       <h1>React Fragment</h1>
//      <table>
//        <tbody>
//          <tr className="Abs">
//           <Cols />  
//           <Cols /> 
//           <Cols />  
//          </tr>
//        </tbody>
//      </table>

//       </>
      
//   );
// }

// export default App;













// import React from 'react'
// import { Table } from 'react-bootstrap'
// function App() {
//   const users = [
//     {
//       name: 'Anil', email: 'anil@test.com', address: [
//         { hm: '101', city: 'Noida', country: 'India' },
//         { hm: '10', city: 'Gurgaon', country: 'India' },
//         { hm: '23', city: 'Noida', country: 'India' },
//         { hm: '45', city: 'Delhi', country: 'India' },
//       ]
//     },
//     {
//       name: 'Burce', email: 'bruce@test.com', address: [
//         { hm: '101', city: 'Noida', country: 'India' },
//         { hm: '10', city: 'Gurgaon', country: 'India' },
//         { hm: '23', city: 'Noida', country: 'India' },
//         { hm: '45', city: 'Delhi', country: 'India' },
//       ]
//     },
//     {
//       name: 'Peter', email: 'peter@test.com', address: [
//         { hm: '101', city: 'Noida', country: 'India' },
//         { hm: '10', city: 'Gurgaon', country: 'India' },
//         { hm: '23', city: 'Noida', country: 'India' },
//         { hm: '45', city: 'Delhi', country: 'India' },
//       ]
//     },
//     {
//       name: 'Sam', email: 'sam@test.com', address: [
//         { hm: '101', city: 'Noida', country: 'India' },
//         { hm: '10', city: 'Gurgaon', country: 'India' },
//         { hm: '23', city: 'Noida', country: 'India' },
//         { hm: '45', city: 'Delhi', country: 'India' },
//       ]
//     },
//   ]
//   return (
//     <div className="App">
//       <h1>List with Nested Array</h1>
//       <Table variant="dark"  >
//         <tbody>
//           <tr>
//           <td>S.N</td>
//             <td>Name</td>
//             <td>Email</td>
//             <td>Address</td>
//           </tr>
//           {
//             users.map((item,i)=>
//             <tr key={i}>
//                <td>{i+1}</td>
//             <td>{item.name}</td>
//           <td>{item.email}</td>
//             <td>
//               {/*  */}
//               <Table variant="dark"  >
//         <tbody>
//               {
//                 item.address.map((data)=>

//                 <tr>
//                   <td>{data.hm}</td>
//                   <td>{data.city}</td>
//                   <td>{data.country}</td>
//                 </tr>
//                 )
//               }
//               </tbody>
//               </Table>
//               {/*  */}
//             </td>
//           </tr>
//           )
//           }
//         </tbody>
//       </Table>

//     </div>
//   );
// }

// export default App;














// import React from 'react'
// import {Table} from 'react-bootstrap'
// function App() {
//   const users = [
//     { name: 'Anil', email: 'anil@test.com', contact: '111' },
//     { name: 'Burce', email: 'bruce@test.com', contact: '222' },
//     { name: 'Peter', email: 'peter@test.com', contact: '111' },
//     { name: 'Sam', email: 'sam@test.com', contact: '777' },
//   ]
//   return (
  
//     <div className="App">
//       <h1>List With Bootstrap Table</h1>
//       <Table striped variant="dark" >
//         <tbody>
//         <tr>
//           <td>Name</td>
         
//           <td>Email</td>
//           <td>Contacts</td>
//         </tr>
//         {
//           users.map((item,i)=>
          
//           <tr key={i}>
//           <td>{item.name}</td>
//           <td>{item.email}</td>
//         <td>{item.contact}</td>
//         </tr>
//           )
//         }
//         </tbody>
//       </Table>
//     </div>
   
//   );
  
// }

// export default App;



















// import React from 'react'
// function App() {
//   //const students = ['Anil', 'Sidhu', 'Sam', 'Peter'];
//   const Stu =[
//     {name: "Arslan" , email : 'arsla@gmail', contact : 4555 },
//     {name: "Arslan" , email : 'arsla@gmail', contact : 45335 },
//     {name: "Arslan" , email : 'arsla@gmail', contact : 222 }
//   ]
//   return (
//     <div className ="App">
//     <h1> Handle Array with List    </h1>
//     <table border="1">
//       {
//     Stu.map((data) =>
//        <tr>
//     <td>{data.name}</td>
//     <td>{data.email}</td>
//     <td>{data.contact}</td>
    
//        </tr>  
//   )    
// </table>
       
//   </div>
//   )
// }

// export default App;















// import React from 'react'
// //import './style.css'
// //import style from './custom.module.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
/* // import {Button} from 'react-bootstrap' */
// function App(){
//   return(
//     <div  className="App">
//     <h1>bootstrap</h1>
// <Button onClick={()=>alert("hello i m button")}>Click Me</Button>
//     </div>
//   );
// }

// export default App;















//css styles and types in react uses
// first u=i simple
//second import class file in css
//third is help as module type use in css
// import React from 'react'
// import './style.css'
// import style from './custom.module.css'
// function App(){
//   return(
//     <div  className="App">
//     <h1 className="primary"> fisrt style in React css File</h1>
// <h1 style={{color:'red' , backgroundColor:"black"}}>  Second style in React css File</h1>
// <h1 className={style.success}> 3rd style -- React File</h1>
//     </div>
//   )
// }
// export default App;

















// import React, { useEffect, useState } from 'react'
// import Users from './Users'
// function App() {
//   const [data, setData] = useState(10)
//   const [count, setCount] = useState(100)
  
//   return (
//     <div className="App">
// <Users count={count} data= {data} />
//       <h1>useEffect in React {count}</h1>
//       <button onClick={() => setCount(count + 1)}>Update Counter</button>
//       <button onClick={() => setData(data + 1)}>Data  Counter</button>
//     </div>
//   );
// }
// export default App;




















//import './App.css';
// import React, { useEffect, useState } from 'react'
// function App() {
//   const [count, setCount] = useState(0)
//   useEffect(() => {
//     console.warn("use effect")
//   })
  
//   return (
//     <div className="App">
//       <h1>useEffect in React {count}</h1>
//       <button onClick={() => setCount(count + 1)}>Update Counter</button>
//     </div>
//   );
// }

// export default App;
















// import React,{useState} from 'react'
// function App()
// {
//   const [data,setData]=useState("Arslan....")
//   return(
//     <div className="App">
//     <h1>{data}</h1>
// <buttton onClick={()=>setData("MOHD ARSLAN")}>Update Hook </buttton>
//     </div>
//   );
// }
//React hook working code.........
// export default App;








//import './App.css';
// import React from 'react'
// import Student from './Student'
// class App extends React.Component {
//   constructor()
//   {
//     super();
//     this.state={
//       show:true
//     }
//   }
//   render() {
//     return (
//       <div className="App">
//         {
//           this.state.show?<Student />
//           :<h4>Component is removed</h4>
//         }
//         <button onClick={()=>this.setState({show:false})}> Toogle Student Component</button>
//       </div>
//     )
//   }
// }
// // will unmount functionality
// export default App;









// should mount technologies
// import React from 'react'
// class App extends React.Component {
//     constructor() {
//       super();
//       this.state={
//         count:0
//       }
//     }
//     shouldComponentUpdate()
//     {
//       console.warn("shouldComponentUpdate",this.state.count)
//      if(this.state.count<5)
//      {
//        return true;
//      }
  
//     }
  
//     render() {
//       return (
//         <div className="App">
//           <h1> Should Component Update  {this.state.count}</h1>
//           <button onClick={()=>this.setState({count:this.state.count+1})}>Update Counter</button>
//         </div>
//       );
//     }
//   }
  
//   export default App;










// import React from 'react'
// class App extends React.Component {
//   constructor()
//   {
//     super();
//     console.warn("constructor")
//     this.state={count:0}//{name:"Arslan"}
//   }
//   componentDidUpdate(preProps,preState,snapshot)
//   {
//     console.warn("componentDidUpdate",preState.count,this.state.count)
//     if(preState.count===this.state.count)
//     {
//         alert("data is already same")
//     }
//   }
//   render()
//   {
//     console.warn("render")
//     return (
//       <div className="App">
//         <h1>Component Did Mount {this.state.count}</h1>
//         <button onClick={()=>this.setState({count:1})}>Update</button>
//       </div>
//     );
//   }
// }
// export default App;












// import React from 'react'

// class App extends React.Component {
//   constructor()
//   {
//     super();
//     console.warn("constructor")
//     this.state={name:"Arslan"}
//   }
//   componentDidMount()
//   {
//     console.warn("componentDidMount")

//   }
//   render()
//   {
//     console.warn("render")

//     return (
//       <div className="App">
//         <h1>Component Did Mount {this.state.name}</h1>
//         <button onClick={()=>this.setState({name:"MOHD ARSLAN"})}>Update</button>
//       </div>
//     );
//   }
// }

// export default App;



















// import {useState} from 'react'
// function App(){
//     const  [name, setName]=useState("");
//     const[tnc,setTnc]=useState(false);
//     const[interest,setInterest]=useState("");
//     function getFormData(e)
//     {
//         console.warn(name,tnc,interest);
//         e.preventDefault()
//     }
//     return(
//         <div className="App">
//         <h1>Handle Form in React</h1>
//          <form onSubmit={getFormData}>
//         <input  type="text" placeholder="Enter name"  value={name} onChange={(e)=>setName(e.target.value)}></input> <br></br> <br></br>
//         <select onChange={(e)=>setInterest(e.target.value)}>
//     <option>Select Option..</option>
//     <option>Marvel</option>
//     <option>JK</option>
//          </select> <br></br> <br></br>
//     <input type="checkbox"  onChange={(e)=>setTnc(e.target.checked)}/> <span>Accept Terms And Conditions</span> <br></br> <br></br>
//      <button type="submit">Submit </button>
// <button>Clear </button> 
//     </form>
//         </div>
//     );
// }
// export default App;



// import React from 'react'
// //hide and show toggle in react
// function App(){
//   let [status,setStatus] =React.useState(false)
//   return(
//     <div className ="App">
//     {
//       status? <h2> My Dear Love</h2> :null
//     }
//   {/* <button onClick={()=>setStatus(false)}>Hide</button>
//   <button onClick={()=>setStatus(true)}>Show</button> */}
//   <button onClick={()=>setStatus(!status)}>Toggle</button>
//     </div>
//   );
// }
// export default App;


//print the value with  button pressing in screen 
// import React, {useState} from 'react'
// function App(){
//   const [data,setData]= useState(null)
//   const [print,setPrint]= useState(false)

//   function getData(val)
//   {
//     console.log(val.target.value)
//     setData(val.target.value)
//     setPrint(false)
//   }
// return (
//   <div className="App">
//     {
//       print?
//       <h1>{data}</h1>
//       :null
//     }
//     <input type="text"  onChange={getData} />
//     <button onClick={()=>setPrint(true)}>Print data</button>
//   </div>
// );
//   }
//   export default App;



// import React from 'react'
// import Student from './Student'
// class  App extends React.Component{
//   constructor ()
//   {
//     super();
//     this.state={
//       name:"Mohd"
//     }
//   }
//   render()
//   {
//   return (
//     <div className="App">
//       <h1>Props !</h1>
//       <Student name="anil" email="mohdarsmeh@gmial" ></Student >
//       <button onClick={()=>this.setState({name:"arslan"})}>Update </button>
//     </div>
//   );
// }
// }

// export default App;











// import React from 'react'
// import Student from './Student'
// function App(){
//   return (
//     <div className="App">
//       <h1>Props !</h1>
//       <Student name="anil" email="mohdarsmeh@gmial" ></Student >
//     </div>
//   );
// }
// export default App;







// use props with funtional component
// import React,{useState} from 'react';
// import Student from './Student'
// function App()
// {
//   const [name,setName]=useState("Arslan")
//   return(
//     <div className="App">
//   <h1>Props in React :: </h1>
//   <Student name={name} />
//   <button onClick={()=>{setName("future w name")}}>Update Name</button>
//   {/* // email="mohdarslan57@gmail.com" other={{address:'delhi',mobile:'000'}}/>
//   // <Student name={"Mehwish"} /> 
//   // <Student name={"tm hi tm ho"} /> */}

//     </div>
//   );
// }
// export default App;




// import React from 'react';
// // import Test  from './Test'

// export const App = () => {
//   let data = "Mohd Arslan";
//   function apple()
//   {
//     data= "Mehwish";
//     alert(data);
//   }
//   return (
//     <div className ="App">
//       <h1>    {data}</h1>
//       <button onClick={apple}> click please</button> <br></br>
//       <button onClick={()=>alert("arslan")}> click please</button>
//     </div>
//   )
// };
//  export default App;



// import React ,{Component} from 'react'
// class App extends Component {
//         constructor()
//         {
//             super();
//             this.state={
//                 data:"arslan"
//             }
//         }
//         apple()
//         {
//             this.setState({data:"aslanmm"})
//         }
//         render()
//         {
//     return (
//         <div className="App">
//             <h1>{this.state.data}</h1>
//             <button onClick={()=>this.apple()}>Update Data</button>

//         </div>
//     );
// }
// }
// export default App;
