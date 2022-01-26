import React, { Component } from 'react'
import {
  Button,
  Grid,
  Hidden,
  Paper,
  TextField,
  Typography,
}
from "@material-ui/core";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container} from "react-bootstrap";
import {Home,Whatshot,ImportContacts,Person} from "@material-ui/icons";
import logo from "../../src/logo192.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamation, faExclamationTriangle, faShare, faShareAlt, faShareAltSquare } from '@fortawesome/free-solid-svg-icons';
import data from '../dbquestions.json';

export default function Dquestion() {
    // console.log(data)
        return (
            <>
            {data.user_questions[0].questions.map(q=>(

            <ContainerBox q={q} />
            
            ))}
            </>
        );
 
}

function ContainerBox({q}){
    return(
<div className="container">
                <div className="row">
                <div className="d-flex flex-column flex-md-row justify-content-around col-12 qtapcontainer">
                <div className="qbox col-12 col-md-6 d-flex flex-column justify-content-between p-2">
                    <div className="qtop d-flex flex-row justify-content-between">
                        <p className="qauthor">Written by {q.userName}</p>
                        <p className="votecount" id="vote">5</p>
                    </div>
                    

                    <div className="question-container">
                        <h5 className="question">{q.ques}</h5></div>
                   
                    <div className="qbottom d-flex flex-row justify-content-between">
                        <p className="icon red"><FontAwesomeIcon icon={faExclamationTriangle}/></p>
                        <p className="icon blue"><FontAwesomeIcon icon={faShareAlt}/></p>
                    </div>
                </div>
                

               
                <div class="obox col-12 col-md-6 d-flex flex-column justify-content-centers pt-2">
                {q.options.map(opt=>(
                    <button class="btn btn-dark m-1" onclick="myFun(this)">{opt}</button>
                  ))}
                  <input class="form-control bg-dark text-light mt-1" placeholder="Add Your option" />
                  </div>
            </div>
                </div>
            </div>
    )
}