import React, { Component } from 'react'
import {
  Button,
  Grid,
  Hidden,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container} from "react-bootstrap";
import {Home,Whatshot,ImportContacts,Person} from "@material-ui/icons";

export default function TopBar() {
  let activeLink = window.location.href.split("/");
  let activeButton = activeLink[activeLink.length-1];
  let check = (ro) => {
    if (activeButton === ro){
      return true;
    }
  }
        return (
            <>
  <Navbar className="d-none d-md-block" bg="dark" variant="dark" sticky="top">
    <Container>
    <Navbar.Brand href="/" title="Q-Taps" style={{color:"#66FCF1",fontFamily:"Montserrat", fontWeight:"800", padding:"10px", borderRadius:"10px"}}> Q-taps </Navbar.Brand>
    <Nav className="ml-auto d-flex flex-row justify-content-around w-100">
      <Nav.Link title="HOME"><Link to="/dashboard"><Home style={{color:check("dashboard")?"#66FCF1":"#45A29E"}}/></Link></Nav.Link>
      <Nav.Link title="TRENDING"><Link to="/trending"><Whatshot style={{color:check("trending")?"#66FCF1":"#45A29E"}}/></Link></Nav.Link>
      <Nav.Link title="MY BOOKS"><Link to="/mybooks"><ImportContacts style={{color:check("mybooks")?"#66FCF1":"#45A29E"}}/></Link></Nav.Link>
      <Nav.Link title="My PROFILE"><Link to="/profile"><Person style={{color:check("profile")?"#66FCF1":"#45A29E"}}/></Link></Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  <Navbar className="d-block d-md-none" bg="dark" variant="dark" fixed="bottom">
    <Container>
    <Nav className="ml-auto d-flex flex-row justify-content-around w-100">
      <Nav.Link title="Dashboard"><Link to="/dashboard"><Home style={{color:check("dashboard")?"#66FCF1":"#45A29E"}}/></Link></Nav.Link>
      <Nav.Link title="Trending"><Link to="/trending"><Whatshot style={{color:check("trending")?"#66FCF1":"#45A29E"}}/></Link></Nav.Link>
      <Nav.Link title="My Books"><Link to="/mybooks"><ImportContacts style={{color:check("mybooks")?"#66FCF1":"#45A29E"}}/></Link></Nav.Link>
      <Nav.Link title="My Profile"><Link to="/profile"><Person style={{color:check("profile")?"#66FCF1":"#45A29E"}}/></Link></Nav.Link>
    </Nav>
    </Container>
  </Navbar>
</>
        );
 
}
