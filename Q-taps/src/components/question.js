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
import logo from "../../src/logo192.png"
import OptionInput from "./createOptions"
export default function Question() {
        return (
            <>
            <div className="container">
                <div className="row" >
                <form className="d-flex flex-column col-12 writeq p-3">
                    <input className="input-blue wq mb-1 text-light w-75" type="text" placeholder="Write Your Question"/>
                    {/* <input className="input-blue wo mb-1 text-light" type="text" placeholder="Write Your Options"/> */}
                    <OptionInput className="input-blue wo mb-1 text-light"/>
                    <div className="d-flex flex-row justify-content-end">
                        <input className="ws but btn btn-light mt-2 d-inline" type="submit" value="submit"/>
                    </div>
                </form>
                </div>
            </div>
            </>
        );
 
}