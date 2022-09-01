import React from "react"
import {useParams}from "react-router-dom"
import styled from "styled-components"

const Wrapper=styled.div`
border:1px solid red;
width:25%;
margin:auto;`
export const UserDetails=()=>{
    const{id}=useParams();
    const [user,setUser]=React.useState({})
    const [loading,setLoading]=React.useState(false)
    const [error,setError]=React.useState(false)
    React.useEffect(()=>{
        const getData=()=>{
            setLoading(true);
            fetch(`https://reqres.in/api/users/${id}`)
            .then((res)=>res.json())
            .then((res)=>setUser(res.data))
            .catch(()=>setError(true))
            .finally(()=>setLoading(false))
        }
    
    getData()
},[])
return(
    loading?
   <div>Loading...</div>
   :error?
   <div>Error:something went wrong</div>
   :(
    <Wrapper>
    <h1>User Related Data</h1>
    <img src={user.avatar} alt="" />
    <h1>Email:{user.email}</h1>
        </Wrapper>
    ))
   }