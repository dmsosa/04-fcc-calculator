import * as React from 'react';

export interface ICalculatorProps {
}

const keys = [
  { text: 'AC', id: 'clear', klazz: 'bg-danger'},
  { text: '<', id: 'delete', klazz: 'bg-danger'},
  { text: '%', id: 'percentage', klazz: 'key-gray'},
  { text: '/', id: 'divide', klazz: 'key-gray'},
  { text: '7', id: 'seven', klazz: 'key-black'},
  { text: '8', id: 'eight', klazz: 'key-black'},
  { text: '9', id: 'nine', klazz: 'key-black'},
  { text: 'x', id: 'multiply', klazz: 'key-gray'},
  { text: '4', id: 'four', klazz: 'key-black'},
  { text: '5', id: 'five', klazz: 'key-black'},
  { text: '6', id: 'six', klazz: 'key-black'},
  { text: '-', id: 'substract', klazz: 'key-gray'},
  { text: '1', id: 'one', klazz: 'key-black'},
  { text: '2', id: 'two', klazz: 'key-black'},
  { text: '3', id: 'three', klazz: 'key-black'},
  { text: '+', id: 'add', klazz: 'key-gray'},
  { text: '+/-', id: 'sign', klazz: 'key-black'},
  { text: '0', id: 'zero', klazz: 'key-black'},
  { text: '.', id: 'decimal', klazz: 'key-black'},
  { text: '=', id: 'equals', klazz: 'bg-info'},
]
const digits = ['1','2','3','4','5','6','7','8','9'];
//Wenn Ziffer, dann key-1
//Wenn top, dann key-2
//Wenn side, dann key-3
//Wenn A oder C, rot

//Key haben handler
//Ziffer, Operatoren changeInput

export function CalculatorKeyboard({}) {
  return (
    <div id='calculator-keyboard' className='keyboard'>
      {keys.map((key) => {
        return ( <div key={key.id} className={`calculator-key ${key.klazz}`} id={key.id}>
          <span>{key.text}</span>
        </div> )})}
      </div>
    );
}
