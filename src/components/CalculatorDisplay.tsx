import * as React from 'react';

export interface ICalculatorProps {
}

export function CalculatorDisplay({display, result}) {
  return (
    <div  className='calculator-display'>
      <input id='display' className='text-right h3' value={display} readOnly/>
      <input id='display' className='text-right h1' value={`= ${result}`} readOnly/>
    </div>
  );
}
