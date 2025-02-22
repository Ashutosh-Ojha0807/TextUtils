import { useState } from "react"


function TextForm(props) {
  const handleUpClick=()=>{
    console.log("Uppercase was clicked"+text);
    let newText=text.toUpperCase();
    setText(newText);
  }

  const handleLoClick=()=>{
    console.log("Lowercase was clicked"+text);
    let newText=text.toLowerCase();
    setText(newText);
  }

  const handleClearText=()=>{
    let newText='';
    setText(newText);
  }


  const handleOnChange=(event)=>{
    console.log("On Change");
    setText(event.target.value);
  }
  const[text , setText]=useState('Enter text here');
  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
        <div className="mb-3">
            <label for="My Box" class="form-label">Text Area</label>
            <textarea className="form-control" value={text} onChange={handleOnChange} id="My Box" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>

    </div>
    <div className="container my-2">
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words , {text.length} characters</p>
      <p>{0.008*text.split(" ").length} Minutes to read </p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>  
  )
}

export default TextForm;