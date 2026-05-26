import React, { createContext } from 'react'
const ThemeContext = createContext()

function usecontext() {
  const [theme, settheme] = useState("light")
  return (
        <ThemeContext.Provider>
            
        </ThemeContext.Provider>

  )
}
export default usecontext