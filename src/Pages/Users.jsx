import React from "react"
import {Link,Navigate} from "react-router-dom"
export const Users=()=>{
    const [users,setUsers]=React.useState([])
    const [loading,setLoading]=React.useState(false)
    const [error,setError]=React.useState(false)
    React.useEffect(()=>{
        const getData=()=>{
            setLoading(true);
            fetch(`https://reqres.in/api/users?page=2`)
            .then((res)=>res.json())
            .then((res)=>setUsers(res.data))
            .catch(()=>setError(true))
            .finally(()=>setLoading(false))
        }
    
    getData()
},[])

const isAuth=true
if(!isAuth){
    return <Navigate to="/login"/>
}

    return(
        loading?
       <div>Loading...</div>
       :error?
       <div>Error:something went wrong</div>
       :(
        <div>
        {users.map((user)=>(
            <div key={user.id}>
            <img src={user.avatar} alt="" />
            <Link to={`/users/${user.id}`}>More Details</Link>
            </div>
        ))}
        </div>
       )
    )
}