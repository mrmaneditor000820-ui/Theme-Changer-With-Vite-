import React, { createContext } from 'react'
const ThemeContext = createContext()

function usecontext() {
  const [theme, settheme] = useState("light")
  return (
        
    <div>
        <ThemeContext.Provider>
            
        </ThemeContext.Provider>
    </div>

  )
}

export default usecontext