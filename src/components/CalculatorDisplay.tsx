import * as React from 'react';

export interface ICalculatorProps {
}

export function CalculatorDisplay({display, result}) {
  return (
    <div id='display' className='calculator-display'>
      <input className='text-right h3' value={display} readOnly/>
      <input className='text-right h1' value={result} readOnly/>
    </div>
  );
}
