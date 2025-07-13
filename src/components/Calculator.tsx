import * as React from 'react';
import { CalculatorDisplay } from './CalculatorDisplay';
import { CalculatorKeyboard } from './CalculatorKeyboard';

export interface ICalculatorProps {
}

export function Calculator({}) {
    const [ input, setInput ] = React.useState('22');
    const [ output, setOutput ] = React.useState('');
  return (
    <div id='calculator'>
      <CalculatorDisplay input={input} output={`= ${output}`}/>
      <CalculatorKeyboard/>
    </div>
  );
}
