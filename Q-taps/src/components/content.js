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
import logo from "../../src/logo192.png";
import Question from "./question";
import Dquestion from "./dquestion"

export default function Content() {
        return (
            <>
            <Grid className="d-flex">
                <Grid className="col-2 d-flex justify-content-center p-5 d-none d-md-block">
                <Grid item >
                    <img className="w-50" src={logo} alt="Profile" style={{border:"2px solid #66FCF1" , borderRadius:"100px"}}/>
                    </Grid>
                </Grid>
                <Grid classname="col-10 col-md-12" xs={12}>
                    <Question/>
                    <Dquestion/>
                </Grid>
                <Grid className="d-flex justify-content-center p-3 d-none d-md-block col-2" style={{height: "90vh"}}>
                    <p>Rewards</p>
                </Grid>
            </Grid>
            </>
        );
 
}