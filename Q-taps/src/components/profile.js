import React, { Component, useState} from 'react'
import {
  Button,
  Grid,
  Hidden,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import logo from "../../src/logo192.png"

export default function Profile() {
    const[name,setName]=useState('srk')
    const[email,setEmail] = useState('ramakrishnasiva128@gmail.com')
    const[phone,setPhone] = useState('9959732632')
    const[d,setD]=useState(false)
        return (
            <>
            <Grid container justifyContent="center" direction="column" alignItems="center" style={{marginTop:"50px"}}>
                <Grid item >
                <img src={logo} alt="" style={{border:"2px solid #66FCF1" , borderRadius:"100px"}}/>
                </Grid>
            </Grid>
            <Paper className="m-2">
            <Grid container className="d-flex flex-column justify-content-center align-items-center">
            <Grid item  xs={3} className="text-center">
            <h1 style = {{fontSize:"20px",color:"grey"}}>Name</h1>
            <input type="text" className="form-control" value={name} onChange={(e)=>setName(e.target.value)} disabled={d?false:true} />
            </Grid>
            <Grid item xs={3} className="text-center">
            <h1 style = {{fontSize:"20px",color:"grey"}}>Email</h1>
            <input type="email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} disabled={d?false:true} />
            </Grid>
            <Grid item xs={3} className="text-center">
            <h1 style = {{fontSize:"20px",color:"grey"}}>Phone Number</h1>
            <input type="text" pattern="[1-9]{1}[0-9]{9}" maxLength="10" className="form-control" value={phone} onChange={(e)=>setPhone(e.target.value)} disabled={d?false:true} />
            </Grid>
        </Grid>
        </Paper>
        
            <Grid item className="d-flex flex-row justify-content-center">
            <button class="btn btn-primary m-3" onClick={()=>setD(true)}>Edit</button>
            </Grid>
            
        </>
        );
 
}
