import React, { Component,useState } from 'react'
import "./styles/login.css"
import {
  Button,
  Grid,
  Hidden,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { Link,Redirect } from "react-router-dom";
import UserController from '../controllers/userController';
import Dashboard from './dashboard'

function Login() {
  const [userName,setUserName]=useState('')
  const [password,setPassword]=useState('')

  const handleSubmit=()=>{ 
    if(userName && password){
      var requestBody = {
        email: userName,
        password 
      }; 
      console.log(requestBody)
      const success=(data)=>{
        let rec
        if(data){
          console.log(data)
          window.location.href = "/dashboard"
        }
      }
      const failure=(err)=>{
        console.log(err)
      }
      UserController.userLogin(requestBody,success,failure)
    }
  }

        return (
          <div>
            <Grid container justify="center" className = "container1">
              <Grid item>
                <Paper style={{ padding: "4rem", width: "30rem" }} className="mt-5 mb-5">
                  <Grid
                    item
                    container
                    spacing={4}
                    direction="column"
                    // alignItems="center"
                  >
                    <Grid item>
                      <Typography
                        variant="h5"
                        component="h4"
                        style={{ textAlign: "center",color:"blue",fontWeight:"bold",fontSize:"40px" }}
                        className = "login"

                      >
                        Login
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        variant="outlined"
                        id="email"
                        name="email"
                        type="email"
                        placeholder="email"
                        autoFocus
                        value={userName}
                        onChange={(e)=>setUserName(e.target.value)}
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        fullWidth
                        variant="outlined"
                        id="password"
                        name="password"
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        
                      />
                    </Grid>
                    <br />
                    <Grid
                      container
                      direction="row"
                      style={{ justifyContent: "space-between" }}
                    >
                      <Link to="/sign-up">
                        <p>Create account</p>
                      </Link>
                      
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={()=>handleSubmit()}
                      >
                        Login
                      </Button>
                    
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </div>
        );
 
}

export default Login