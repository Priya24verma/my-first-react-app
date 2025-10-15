
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//import About from './components/About';     
import React,{useState} from 'react';
//import {
//BrowserRouter as Router,
//Switch,
//Route,
//Link
//} from "react-router-dom";

function App() {

  const[mode, setMode] = useState('light'); // whether dark mode is enableed or not 
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=> {
    setAlert({
      msg:message,
      type: type
    })
    setTimeout(() =>{
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode is enabled", "success ");
      document.title = 'Textutils - Dark mode ';
   
      setInterval(() =>{
         document.title = 'Textutil is Amazing mode ';
      },2000);

      setInterval(() =>{
         document.title = 'Install textutil now !! ';
      },1500);
      

    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode is enabled","success");
      document.title = 'Textutils - Light mode ';
    }
  }
  return (
    <>
    {/*<Router>*/}
    <Navbar title="TextUtils"mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
              {/*<Switch>*/}
               {/* /user --> component 1
                /users /home --> component 2 */}
          {/*<Route exact path="/about">
            <About />
          </Route>*/}
          {/*<Route exact path="/">*/}
                  <TextForm showAlert={showAlert} heading="Enter your text to analyze below" mode={mode} />
          {/*</Route>*/}
        {/*</Switch>*/}
    </div>
    {/*</Router>*/}

</>
  );
}

export default App;


