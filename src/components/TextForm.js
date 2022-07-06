import React , {useState} from 'react'
export default function TextForm(props) {
    const UpCase = ()=>
    {
        let newText = text.toUpperCase();
        useText(newText) 
    }
    const HandelOnChange = (event)=>
    {
        useText(event.target.value)
    }
    const ChangeColor = ()=>
    {
      if(newStyle.color === 'black'){
      setNewStyle({
        color: 'red'
      })
    }
      else{
        setNewStyle({
          color:'black'
        })
      }
      
    }
    const Clear = ()=>
    {
      let newText = ""
      useText(newText)
    }
    // let newStyle={
    //   color : 'red'

    // }
    const[text,useText] = useState("")
    const[newStyle,setNewStyle] = useState({
        color : 'black'
    })
  return (
    <>
    <div className="container">
        <h3>{props.titlename}</h3>
        <div className="mb-3">
        <textarea className="form-control" style={newStyle} value={text} onChange={HandelOnChange} id="exampleFormControlTextarea1" rows="6"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={UpCase}>Change to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={ChangeColor}>Change Color</button>
        <button className="btn btn-primary mx-2" onClick={Clear}>Clear</button>
    </div>
    <div className="container my-4">
      <h2>Text Summary: </h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
    </div>

    </>
  )
  }
