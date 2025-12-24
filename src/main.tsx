import { StrictMode } from 'react';
import CalculatorApp from './CalculatorApp.tsx';
import { createRoot } from 'react-dom/client';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CalculatorApp></CalculatorApp>
  </StrictMode>
)
