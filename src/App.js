
import React,{ useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';





function App() {
  const[mode,setMode] = useState('light')
  const[alert,setAlert] = useState(null);
  
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }
  const toggleMode = ()=>{
    if(mode==='light'){
    setMode('dark')
    document.body.style.backgroundColor='black'
    showAlert("DarkMode enable", "success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("LightMode enable", "success")
    } 
  }

  return (
    <>
      
      <Navbar title="TextUtils" aboutme="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <TextForm showAlert={showAlert} titlename="Enter text" mode={mode}  />
    </>
  );


}

export default App;
