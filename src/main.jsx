import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Experience from './pages/three/Experience.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Experience/>
  </StrictMode>,
)
