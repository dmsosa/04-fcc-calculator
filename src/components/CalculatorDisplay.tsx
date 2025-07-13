import * as React from 'react';

export interface ICalculatorProps {
}

export function CalculatorDisplay({input, output}) {
  return (
    <div id='display' className='calculator-display'>
      <h3 className='text-right'>{input}</h3>
      <h1 className='text-right'>{output}</h1>
    </div>
  );
}
