import React from "react"
import {Link} from "react-router-dom"
import styled from "styled-components"

const NavbarWrapper=styled.div`
display:flex;
// align-items:center;
justify-content:center;
background-color:#cecece;
padding:10px;
&>*{
    margin-left:20px;
};`

const StyledLink=styled(Link)`
text-decoration:none;
color:Green`

function Navbar(){
    return(
        <NavbarWrapper>
<StyledLink to="/Home">Home</StyledLink>
<StyledLink to="/About">About</StyledLink>
<StyledLink to="/Contact">Contact</StyledLink>
<StyledLink to="/Users">Users</StyledLink>
<StyledLink to="/Login">Login</StyledLink>

        </NavbarWrapper>
    )
}
export {Navbar}