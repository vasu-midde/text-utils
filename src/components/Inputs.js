import { useState } from "react";
import React from 'react';


export default function Inputs(props) {
    const handleUpClick = ()=>{
        //console.log("you have clicked the button");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowClick = ()=>{
        //console.log("you have clicked the button");
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClrClick = ()=>{
        //console.log("you have clicked the button");
        let newText =("");
        setText(newText);
    }

    const handleOnSpaces = () =>{
        let newText=text.split(/[ ]+/)
        setText(newText.join(' '))
    }



    const handleOnChange =(event)=>{
        setText(event.target.value);
    }

    const handleOnCopy =(event)=>{
        var text = document.getElementById("TextBox");
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);

    }

    const [text,setText]=useState("Enter the text");
  return (
    <>
    <div className="container1">
    <h1>{props.heading}</h1>
    <div className="mb-3">

        <textarea className="form-control" value={text} onChange={handleOnChange} id="TextBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-1" onClick={handleUpClick}>convert to uppercase</button>
    <button className="btn btn-primary mx-1" onClick={handleLowClick}>convert to lowercase</button>
    <button className="btn btn-primary mx-1" onClick={handleOnSpaces}>remove extra spaces</button>
    <button className="btn btn-primary mx-1" onClick={handleOnCopy}>copy text</button>
    </div>
    <div className="clear my-3">
    <button className="btn btn-danger mx-1" onClick={handleClrClick}>clear text</button>
    </div>
    
    <div className="container2 my-2" >
        <h2>Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
    </div>
    <div className="container3">
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
