import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { MenuStorage } from './contexts/menusContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MenuStorage>
      <App />
    </MenuStorage>
  </StrictMode>,
)
