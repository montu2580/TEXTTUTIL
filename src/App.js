
import './App.css';
import Navbar from './MyComponents/Navbar';
import TextForm from './MyComponents/TextForm';
import About from './MyComponents/About';
import React, { useState } from 'react'; //imrs->dont't work??
import Alert from './MyComponents/Alert';
//⭐⭐ ROUTER KO (npm install react-router-dom) IS COMMAND SE USE KRNE PER SWITCH KI ERROR AAHEGI THI USE THIS COMMAND (npm install react-router-dom@5.3.0)
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); //Whether dark mode is enabled or not

  const [about, setAbout] = useState("About");

  // ✨✨✨✨✨✨✨✨✨✨✨✨
  const [label, setLabel] = useState("⚫Enable DarkMode")

  const [bstyle, sbstyle] = useState({
    color: 'black',
    // backgroundColor: 'black'
  })

  const [texareStyle, setTexareStyle] = useState({
    backgroundColor: 'white',
    color: 'black'
  })
  // ✨✨✨✨✨✨✨✨✨✨✨✨

  // ALERT KO HUM EK OBJECT BNA RHE H 
  const [alert, setAlert] = useState(null)

  // showAlert ek function h OR type =4 trh k msg h bootstrap m
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      showAlert(" Dark mode has been enabled", "success");
      // document.title = "TEXTUTILS-HOME DarkMode";


      // setInterval(() => {
      //   document.title = "TEXTUTILS IS AMAZING MODE";
      // }, 2000);
      // setInterval(() => {
      //   document.title = " INSTAL TEXTUTILS NOW";
      // }, 1500);



      // SELF ADD✨✨✨✨✨✨✨✨

      sbstyle({
        color: 'white',
        // backgroundColor: 'black'
      })

      setTexareStyle({
        color: 'white',
        backgroundColor: 'black'
      })
      setLabel("⚪Enable LightMode ")

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert(" Light mode has been enabled", "success");
      // document.title = "TEXTUTILS-HOME LightMode"
      




      // SELF ADD✨✨✨✨✨✨✨✨

      sbstyle({
        color: 'black',
        // backgroundColor: 'black'
      })

      setTexareStyle({
        color: 'black',
        backgroundColor: 'white'
      })
      // 🌃🌄
      setLabel("⚫Enable DarkMode")

    }
  }

  return ( //JSX return krwani h
    <>

      {/* <Navbar title="TextUtils" About="About TextUtils" /> */}
      {/* <Navbar  /> -->AISA KRNE SE DEFAULTE PROPS PASS HOGA */}
      <Router>
        <Navbar title="TextUtils" about={about} mode={mode} label={label} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <div className="container my-3">

          <Switch>
            {/* exact use for exact match
            /users---> Component-1
            /users/home --->Component-2 */}
            <Route exact path="/about">
              <About mode={mode} />
            </Route>
            <Route exact path="/">
              <TextForm heading=" Try TextUtiles -Word Counter, Character Counting, Remove Extra Spaces" mode={mode} bstyle={bstyle} texareStyle={texareStyle} showAlert={showAlert} />
            </Route>
          </Switch>
          {/* <About /> */}
        </div>
      </Router>
    </>
  );
}

export default App;

























/*
// ⚪⚪⚪⚪STARTING CODE⚪⚪⚪⚪
import logo from './logo.svg';
import './App.css';

// FUNCTION BASE COMPONENTS:(classNameBASE BHI HOTA H)
function App() {
  return ( //JSX return krwani h
  // This is a JSX.... 
  // THIS IS A JSX FREGMENT<></>
  <>
  <h1>hkdsh</h1>
  <div classNameName="App">
  <header classNameName="App-header">
  <img src={logo} classNameName="App-logo" alt="logo" />
  <p>
  Edit <code>src/App.js</code> and save to reload.
  </p>
        <a
          classNameName="App-link"
          href="/ttps://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
          Learn React With Harry
          </a>
          </header>
          </div>
          </>
          );
        }

        export default App;
        
        */