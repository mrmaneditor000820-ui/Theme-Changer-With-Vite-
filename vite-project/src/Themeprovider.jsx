import React, { createContext, useState } from 'react'
export const ThemeContext = createContext()

function Themeprovider({children}) {
  const [theme, settheme] = useState("light")
  
  const toggleTheme = () => {
    if(theme=== "light"){
      settheme("Dark")
    }
    if(theme === "Dark"){
      settheme("light")
    }
  };


  return (
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>

  )
}
export default Themeprovider;