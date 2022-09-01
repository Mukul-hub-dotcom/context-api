import React from "react"
import './App.css';
import {Navbar} from "./Components/Navbar.jsx"
import {Routes,Route}from "react-router-dom"
import {Home} from "./Pages/Home"
import {About} from "./Pages/About"
import {Contact} from "./Pages/Contact"
import {Login} from "./Pages/Login"
import {Users} from "./Pages/Users"
import {NotFound} from "./Pages/NotFound"
import {UserDetails} from "./Pages/UserDetails"

function App() {
  return (
  <div className="App">
  <Navbar/>
  <Routes>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/home" element={<Home/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/users" element={<Users/>}></Route>
    <Route path="/Users/:id" element={<UserDetails/>}></Route>
    {/* <Route path="*" element={<NotFound/>}></Route> */}
  </Routes>
    </div>
  )
}

export default App;
