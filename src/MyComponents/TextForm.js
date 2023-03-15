// rfc

import React, { useState } from "react";

export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log("Uppercase was clicked:" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert(" Converted to uppercase", "success");

    };
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert(" Converted to lowercase", "success");

    };


    const handleCopy = () => {
        // console.log("copy");
        // var text = document.getElementById("myBox");
        // text.select();
        // navigator.clipboard.writeText(text.value);
        // document.getSelection().removeAllRanges();
        // props.showAlert(" Copy to clip board", "success");

        // ⚪⚪⚪SAME WORK
        navigator.clipboard.writeText(text);
        props.showAlert(" Copy to clip board", "success");

    };

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert(" Remove extra space", "success");


    }

    const handleDeClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert(" Delete text", "success");


    };
    const handleOnChange = (event) => {
        setText(event.target.value); //value typ kr pahenge
        // console.log(event.target.value);
    };

    // let bstyle = {
    //     color: 'red',
    //     backgroundColor: 'black'
    // }



    // const [text, setText] = useState("Enter text here");
    const [text, setText] = useState("");
    // text = "New Text"; //WRONG WAY TO CHANGE THE STATE
    // setText("New Text"); //RIGHT WAY TO CHANGE THE STATE -->ye work nhi kr rha setText se text ki value change gohi
    // ✨setText change krna mtlb text ko hi change krna hai

    return (
        <>
            <div className="shadow-lg p-3 rounded-4">

            <div className="container1 ">
                <h2 className="pb-2"><strong>{props.heading}</strong></h2>
                <div className="mb-2">
                    <textarea className="form-control" style={props.texareStyle} value={text} onChange={handleOnChange} id="myBox" rows="7">
                        {/* YOU CAN ADD STYLE LIKE:-style={{ backgroundColor: "red" } */}
                    </textarea>
                </div>

                <button className="btn btn-primary m-1 " onClick={handleUpClick} style={props.bstyle} disabled={text.length === 0} >
                    CONVERT TO UPPERCASE
                </button>
                <button className="btn btn-secondary m-1 " onClick={handleLoClick} style={props.bstyle} disabled={text.length === 0}>
                    convert to lowercase
                </button>
                <button className="btn btn-primary m-1 " onClick={handleCopy} style={props.bstyle} disabled={text.length === 0}>
                    Copy text
                </button>
                <button className="btn btn-secondary m-1  " onClick={handleExtraSpace} style={props.bstyle} disabled={text.length === 0}>
                    Remove Extra Spaces
                </button>
                <button className="btn btn-danger m-1  " onClick={handleDeClick} style={props.bstyle} disabled={text.length === 0}>
                    {/* YOU CAN ADD TEXT COLOR LIKE;text-dark */}
                    Delete Text
                </button>

            </div>
            <div className="container2 my-3">
                <h2>Your text summary</h2>
                {/* <p>{text.split(" ").length} words, {text.length} characters</p> -->1 word show ho rha tha tho  change kiya (/\s+/)->mean white space and inclued new line*/}
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words, {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes read</p>
                <hr />
                <h2>Preview</h2>
                {/* <p className="border border-primary p-2 ">{text}</p> */}
                <p className="border border-primary p-2 ">{text.length > 0 ? text : "Nothing to preview!"}</p>
                
            </div>
            
            </div>
                
        </>
    );
}

/*
⚪⚪WITH COMMENTS
// rfc
// import {useState} from "react"
import React, { useState } from "react";


export default function TextForm(props) {
    const handleUpClick = () => {
        console.log(text);
        let newText = text.toUpperCase();
        setText(newText);
    };
    const handleOnChange = (event) => {
        console.log("ON CHANGE");
        setText(event.target.value);//value typ kr pahenge
    };
    
    // Yha humne state vaiable is trh se bnaya h setText k ander jo bhi chiz aahegi wo usko text k braber set kr degi.
    // yha text default value(Enter text here) hai or setText ek function h jo jum use kr skte h kabi bhi textState ko change krne m
    const [text, setText] = useState("Enter text here");
    // text = "New Text"; //WRONG WAY TO CHANGE THE STATE
    // setText("New Text"); //RIGHT WAY TO CHANGE THE STATE -->ye work nhi kr rha setText se text ki value change gohi
     // ✨setText change krna mtlb text ko hi change krna hai
    
    return (
        <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea
        className="form-control"
        value={text}
        onChange={handleOnChange}
        id="myBox"
        rows="8"
        ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
                Convert to Uppercase
            </button>
            </div>
            );
        }
        
        */
