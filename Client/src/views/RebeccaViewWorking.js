import React from 'react'
// import { View, Text } from 'react-native'
import logo from './logo.svg';
import './App.css';
import Form from './Components/Form.js';
import React, {useState, useEffect} from "react";

function RebeccaGView () {

    const [exObjs, setExObjs] = useState([]); 

    const getExObjs = () => {
        fetch("/exercises")
        .then(res => res.json())
        .then(json => {
            setExObjs(json);
            console.log(json);
        })
        .catch(error => {
            console.log(error);
        });
    }

    useEffect(() => {
        getExObjs();
    }, []);



    return (
        <div>
            <h2>Rebecca G</h2>
            <Form/>
        </div>
    )
}

export default RebeccaGView;
