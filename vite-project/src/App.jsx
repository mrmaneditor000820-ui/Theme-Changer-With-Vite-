import React, { useContext } from 'react'
import { ThemeContext } from './Themeprovider'
import "./App.css"


const App = () => {

  const {theme,toggleTheme} = useContext(ThemeContext)
  console.log("theme=>", theme,toggleTheme);
  

  return (
    <div id='main'>
      <div id='main2'>
        <h5>NAVBAR</h5>
      </div>
    
    <div style={{
      backgroundColor:theme === "dark" ? "black" : "white",
      color: theme === "light" ? "black" : "white",
      height:"780px",margin:"0px",padding:"0px",
      border:"2px solid blue"
    }}>
    <h1>ABDUL ---------- REHMAN</h1>
    <button onClick={toggleTheme}>change theme{theme}</button>
    </div>
    </div>
  
  )
}

export default App