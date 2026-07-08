/**
 * Точка входа приложения: монтирует React в <div id="root"> из index.html
 * и подключает глобальные стили (Tailwind).
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
