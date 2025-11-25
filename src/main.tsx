import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ErrorBoundary } from "react-error-boundary";

import './index.css'
import "./styles/colors.css"
import "./styles/shadows.css"
import "./styles/shapes.css"
import "./styles/typography.css"
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>,
)
