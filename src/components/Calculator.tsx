import * as React from 'react';
import { CalculatorDisplay } from './CalculatorDisplay';
import { CalculatorKeyboard } from './CalculatorKeyboard';

export interface ICalculatorProps {
}

export function Calculator({}) {
    const [ display, setDisplay ] = React.useState('0');
    const [ firstOperand, setFirstOperand ] = React.useState(0);
    const [ secondOperand, setSecondOperand ] = React.useState(0);
    const [ operator, setOperator ] = React.useState('');
    const [ result, setResult ] = React.useState(0);
  return (
    <div id='calculator'>
      <CalculatorDisplay display={display} result={`= ${result}`}/>
      <CalculatorKeyboard 
        display={display} setDisplay={setDisplay}
        firstOperand={firstOperand} setFirstOperand={setFirstOperand }
        secondOperant={secondOperand} setSecondOperant={setSecondOperand }
        operator={operator} setOperator={setOperator}
        result={result} setResult={setResult} />
    </div>
  );
}
