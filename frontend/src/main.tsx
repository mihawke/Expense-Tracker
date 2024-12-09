import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BudgetsProvider } from './contexts/BudgetContext.tsx'

createRoot(document.getElementById('root')!).render(
  <BudgetsProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </BudgetsProvider>
)
