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

export default function Landing() {
    
        return (
            <>
            <Grid container alignItems='center' direction = "column" style = {{height:"100vh",backgroundColor:"rgb(131, 143, 163)"}}>
            <Paper style={{ minWidth:"500px", display:"flex", flexDirection: "column", alignItems:"center",marginTop:"10rem",minHeight:"20rem",backgroundColor:"white"}}>
                <Grid item xs={6}>
                    <h1 style={{marginTop:"60px",marginBottom:"10px",color:"blue"}}>Q-TAPS</h1>
                </Grid>
                <Grid item xs={6}>
                    <Link to="/Login">
                    <Button variant="contained" 
                        style={{backgroundColor:"blue", color:"white",width:"100px", margin:"5px", textDecoration:"none"}} >Login</Button>
                    </Link> 
                </Grid>
                <Grid item xs={6}>
                    <Link to="/sign-up">
                    <Button variant="contained"
                        style={{backgroundColor:"red", color:"white",width:"100px", margin:"5px", textDecoration:"none"}}>Signup</Button>
                    </Link>
                </Grid>
                </Paper>
            </Grid>
            </>
        );
 
}
