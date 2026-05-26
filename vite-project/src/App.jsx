import React, { useContext } from 'react'
import { ThemeContext } from './Themeprovider'


const App = () => {

  const {theme,toggleTheme} = useContext(ThemeContext)
  console.log("theme=>", theme,toggleTheme);
  

  return (
    <div style={{
      backgroundColor:theme === "dark" ? "black" : "white",
      color: theme === "light" ? "black" : "white",
      height:"100vh"
    }}>
    <h1>ABDUL ---------- REHMAN</h1>
    <button onClick={toggleTheme}>change theme{theme}</button>
    </div>
  
  )
}

export default App