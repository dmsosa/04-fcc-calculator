import * as React from 'react';

export interface ICalculatorProps {
}

const keys = [
  { text: 'AC', id: 'clear', klazz: 'bg-danger'},
  { text: 'C', id: 'delete', klazz: 'bg-danger'},
  { text: '%', id: 'percentage', klazz: 'bg-secondary'},
  { text: '/', id: 'divide', klazz: 'bg-secondary'},
  { text: '7', id: 'seven', klazz: 'bg-dark text-light'},
  { text: '8', id: 'eight', klazz: 'bg-dark text-light'},
  { text: '9', id: 'nine', klazz: 'bg-dark text-light'},
  { text: 'x', id: 'multiply', klazz: 'bg-secondary'},
  { text: '4', id: 'four', klazz: 'bg-dark text-light'},
  { text: '5', id: 'five', klazz: 'bg-dark text-light'},
  { text: '6', id: 'six', klazz: 'bg-dark text-light'},
  { text: '-', id: 'substract', klazz: 'bg-secondary'},
  { text: '1', id: 'one', klazz: 'bg-dark text-light'},
  { text: '2', id: 'two', klazz: 'bg-dark text-light'},
  { text: '3', id: 'three', klazz: 'bg-dark text-light'},
  { text: '+', id: 'add', klazz: 'bg-secondary'},
  { text: '+/-', id: 'toggler', klazz: 'bg-dark text-light'},
  { text: '0', id: 'zero', klazz: 'bg-dark text-light'},
  { text: '.', id: 'decimal', klazz: 'bg-dark text-light'},
  { text: '=', id: 'equals', klazz: 'bg-info'},
]
const operators = ['+', 'x', '-', '/'];
//Wenn Ziffer, dann key-1
//Wenn top, dann key-2
//Wenn side, dann key-3
//Wenn A oder C, rot

//Key haben handler
//Ziffer, Operatoren changeInput

export function CalculatorKeyboard({ display, setDisplay, firstOperand, secondOperant, setSecondOperant, setFirstOperand, operator, setOperator, result,  setResult }) {
  const handleClear = () => {
    setDisplay('0');
    setResult('0');
  };
  const handleDelete = () => {
    if (display.length === 1) {
      setDisplay('0');
    } else {
      setDisplay((prev) => prev.slice(0, prev.length-1));
    }
  };
  const handlePercentage = () => {
    if (result.length > 0) {
      const resultNumber = parseFloat(result);
      setResult((resultNumber/100).toString()) 
    } 
  };
  const handleTogglerSign = () => {
    
  };
  const handleEquals = () => {
    // wenn second number has not changed, dann return;
    const displayDigits = display.split(operator);
    const secondNum = parseFloat(displayDigits[displayDigits.length-1]);
    if (secondNum === secondOperant) return;

    setSecondOperant(secondNum);
    console.log(firstOperand, secondOperant, display, operator, result)
    switch (operator) {
      case '+': {
        setResult((firstOperand + secondOperant));
        setFirstOperand((firstOperand + secondOperant));
        break;
      }
      case '-': {
          setResult((firstOperand - secondOperant));
          setFirstOperand((firstOperand - secondOperant));
          break;
        }
      case 'x': {
          setResult((firstOperand * secondOperant));
          setFirstOperand((firstOperand * secondOperant));
          break;
        }
      case '/': {
          setResult((firstOperand / secondOperant));
          setFirstOperand((firstOperand / secondOperant));
          break;
        }
      }
  };
  const handleOperator = (key) => {
    setOperator(key.text);
    if (result != 0) {
      setFirstOperand(result);
    } else {
      setFirstOperand(display);
    }

    const lastDigit = display[display.length-1];

    if (operators.includes(lastDigit)) {
      setDisplay((prev) => (prev.slice(0,prev.length-1)+key.text));
    } else {
      setDisplay((prev) => (prev+=key.text));
    }
  }
  const handleInput = (key) => {
    if (key.text === '.') {
      if ( !display.includes('.')) {
        setDisplay((prev) => (prev+=key.text));
      } else return;
    } else if (display === '0') {
      if (key.text === '.') {
        setDisplay('0.');
      } else {
        setDisplay(key.text);
      }
    } else {
      setDisplay((prev) => (prev+=key.text));
    }
  };
  return (
    <div id='calculator-keyboard' className='keyboard'>
      {keys.map((key) => {
        return ( <div key={key.id} className={`calculator-key ${key.klazz}`} id={key.id} onClick={(e) => {
          switch (key.text) {
            case 'AC': { 
              handleClear();
              break;
            }
            case 'C': { 
              handleDelete();
              break;
            }
            case '%': { 
              handlePercentage();
              break;
            }
            case '+/-': { 
              handleTogglerSign();
              break;
            }
            case '=': { 
              handleEquals();
              break;
            }
            default: {
              if (operators.includes(key.text)) {
                handleOperator(key);
              } else {
                handleInput(key);
              }
              break;
            }
          }
        }}>
          <span>{key.text}</span>
        </div> )})}
      </div>
    );
}
