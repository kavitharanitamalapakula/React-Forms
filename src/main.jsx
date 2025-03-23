import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "./App.css"
import { Forms } from './App'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Forms />
  </StrictMode>,
)
