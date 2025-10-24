import React,{useState} from 'react'


export default function TextForm(props) {


    const handleUpClick = ()=>{
        console.log("Uppercase was clicked"+ text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase","success");
    }
    const handleLoClick = ()=>{
        console.log("Lowercaase was clicked"+ text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase","success");
    }
    const handleClearClick = ()=>{
        console.log("Clear was clicked"+ text);
        let newText = '';
        setText(newText)
        props.showAlert("Text has been cleared ","success");
    }
    const handleCopy = () =>{
      let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text is copied","success");
      
    }
    const handleExtraSpaces = () =>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Extra space has been removed","success");
    }
     /*const handleTitleClick = ()=>{
        console.log("Title was clicked"+ text);
        let newText = text.toTitleCase();
        setText(newText)z
    }*/
    


    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value);
    }

    const [text, setText]= useState('Enter the text here');
    // text = "new text"; wrong way to set the text
   // setText =("new text"); correct way to set the text
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1> 
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white',color: props.mode==='dark'?'white':'#042743'}}id="myBox" rows="8"></textarea>
</div>
  <button type="button" disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to uppercase</button>
  <button type="button" disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to lowercase </button>
  <button type="button" disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear the text </button>
  {/* <button type="button" className="btn btn-primary mx-2" onClick={handleTitleClick}>Title the text </button> */}
    <button type="button" disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy the text </button>
    <button type="button" disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove the extra space </button>
  </div>

    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>your text summary</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Write something above to preview here"}</p>
    </div>
    
    </>
  )
} 
