import { useState } from 'react'
import RandomQuotes from './components/RandomQuotes'
import { Calculator } from './components/Calculator';

function App() {
  const [ theme, setTheme ] = useState('theme-1');
  return (
    <div id={`app-wrapper`} className={`app-wrapper ${theme}`} onClick={() => console.log(setTheme())}>
      <Calculator/>
    </div>
  )
}

export default App
