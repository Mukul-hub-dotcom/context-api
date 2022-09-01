import React from "react"
import {useNavigate}from "react-router-dom"
export const Login=()=>{
    const [userDetails,setUserDetails]=      
    
    
    React.useState({email:"",password:""})
    
    const navigate = useNavigate()
    const{email,password}=userDetails
    const handleChange=(e)=>{ 
        const {name,value}=e.target
        setUserDetails({...userDetails,[name]:value})
      }
    const handleLogin=()=>{  
        navigate("/Home")
     }
    return(
        <div>
            <h1>Login Page</h1>
            <input type="text" placeholder="Email" value={email} 
            onChange="handleChange"/>
            <br /><br />
            <input type="text" placeholder="Password" value={password} 
            onChange="handleChange"/>
            <button onClick={handleLogin}>Login</button>
            
        </div>
    )
}