import React , {useState} from 'react'
export default function TextForm(props) {
    const UpCase = ()=>
    {
        let newText = text.toUpperCase();
        useText(newText) 
        props.showAlert("changed to uppercase","success")
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
      props.showAlert("Text cleard","warning")
    }
    // let newStyle={
    //   color : 'red'

    // }
    const[text,useText] = useState("")
    const[newStyle,setNewStyle] = useState({
        color : 'black'
    })
    // const len = text.length;
    // len===0?(text.split(" ").length)-1:text.split(" ").length    My method to count the number of words
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h3>{props.titlename}</h3>
        <div className="mb-3">
        <textarea className="form-control" style={newStyle} value={text} onChange={HandelOnChange} id="exampleFormControlTextarea1" rows="6"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={UpCase}>Change to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={ChangeColor}>Change Color</button>
        <button className="btn btn-primary mx-2" onClick={Clear}>Clear</button>
    </div>
    <div className="container my-4" style={{color: props.mode==='dark'?'white':'black'}}>
      <h2>Text Summary: </h2>
      <p>{text.length>0 ? text.trim().split(" ").length : 0} words and {text.length} characters</p>
    </div>

    </>
  )
  }
