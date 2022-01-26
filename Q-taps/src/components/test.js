import React, { Component, useState, useEffect } from 'react'
import TopBar from './navbar'
import Content from './content'



export default function Test() {

    useEffect(() => {
        let url = "http://localhost:5000/api";
        let options = {
            method: "GET",
            headers: { 
                "Content-Type": "application/json; charset=UTF-8",
                'Access-Control-Allow-Origin': 'http://localhost:5000' // to remove cors error
              },
        };
        fetch(url, options)
        .then(response => {
            response = response.json();
            return(response)
        })
        .then(function(jsondata) {
            setData(jsondata)
        });
    },[])

    const [data,setData] = useState("")

        return (
            <>
            <p>{data?.message}</p>
            </>
        );
 
}
