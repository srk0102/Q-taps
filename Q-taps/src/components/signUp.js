import React, { Component,useState} from "react";
// import "./styles/signup.css" 
import {
  Button,
  Grid,
  Hidden,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import UserController from "../controllers/userController"

export default function SignUp() {

  const[firstName, setFirstName] = useState("")
  const[lastName, setLastName] = useState("")
  const[email,setEmail] = useState("")
  const[userId,setUserId] = useState("")
  const[pass,setPass] = useState("")
  const[phone,setPhone] = useState("")

  function onSubmitData(){
    let jsonData = {
      first_name: firstName,
      last_name:lastName,
      user_id: userId,
      email: email,
      password: pass,
      phone_no:phone
    }
    const sucess = data => {
      console.log(data)
    }
    const failure = err => {
      console.log(err)
    }
    UserController.userSignUp(jsonData,sucess,failure)
  }

  return (
    <div>
      
      <Grid container justify="center" className = "container1">
        <Grid item>
          <Paper style={{ padding: "4rem", width: "30rem" }} className="mt-5 mb-5">
            <Grid
              item
              container
              spacing={2}
              direction="column"
              // alignItems="center"
            >
              <Grid item>
                <Typography
                  variant="h5"
                  component="h4"
                  style={{ textAlign: "center",color:"blue",fontWeight:"bold",fontSize:"40px" }}
                  className = "signUp"
                >
                  Sign Up
                </Typography>
              </Grid>
              <Grid item>
                <Grid container direction="row">
                  <Grid item xs={6}>
                    <TextField
                      variant="outlined"
                      name="first name"
                      placeholder="first name"
                      autoFocus
                      value={firstName}
                      onChange={(e)=>setFirstName(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      variant="outlined"
                      name="last name"
                      placeholder="last name"
                     
                      value={lastName}
                      onChange={(e)=>setLastName(e.target.value)}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                    <TextField
                      variant="outlined"
                      placeholder="User Name"
                      fullWidth
                      value={userId}
                      onChange={(e)=>setUserId(e.target.value)}
                    />
                  </Grid>
              <Grid item>
                <TextField
                  fullWidth
                  variant="outlined"
                  
                  name="email id"
                  type="email"
                  placeholder=" email id"
                  autoFocus
                  value = {email}
                  onChange = {(event)=>setEmail(event.target.value)}
                />
              </Grid>
              <Grid item>
                <TextField
                  fullWidth
                  variant="outlined"
                  
                  name="phone no"
                  type="number"
                  placeholder=" phone no"
                  autoFocus
                  value = {phone}
                  onChange={(event)=>setPhone(event.target.value)}
                />
              </Grid>
              <Grid item>
                <TextField
                  fullWidth
                  variant="outlined"
                  
                  name="password"
                  type="password"
                  placeholder=" create password"
                  autoFocus
                  value = {pass}
                  onChange={(event)=>setPass(event.target.value)}
                />
              </Grid>
              <br />
              <Grid
                container
                direction="row"
                style={{ justifyContent: "space-between" }}
              >
                <Link to="/login">
                  <p>Already have an account?</p>
                </Link>

                <Button type='submit'
                  variant="contained"
                  color="primary"
                  onClick = {()=>onSubmitData()}
                >
                  Sign up
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
     
    </div>
  );
}
