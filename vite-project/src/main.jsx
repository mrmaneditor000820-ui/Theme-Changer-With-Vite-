import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import Themeprovider from './Themeprovider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Themeprovider>
   <App />
</Themeprovider>
   </StrictMode>,
)
