import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import Page from './Page.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Page />
  </StrictMode>
)
