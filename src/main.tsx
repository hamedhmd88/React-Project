import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ErrorBoundary } from "react-error-boundary";
import ErrorPage from './pages/ErrorPage/ErrorPage.tsx';

import './index.css'
import "./styles/colors.css"
import "./styles/shadows.css"
import "./styles/shapes.css"
import "./styles/typography.css"
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary fallback={<ErrorPage/>}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>,
)
