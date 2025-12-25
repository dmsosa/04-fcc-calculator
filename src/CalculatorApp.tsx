

// import { useState } from "react";

import { useState } from "react";

// export default function App() {
//   const [display, setDisplay] = useState("0");

//   const handleClick = (value) => {
//     if (display === "0") {
//       setDisplay(value);
//     } else {
//       setDisplay(display + value);
//     }
//   };

//   const calculate = () => {
//     try {
//       // eslint-disable-next-line no-eval
//       setDisplay(String(eval(display)));
//     } catch {
//       setDisplay("Error");
//     }
//   };

//   const clear = () => setDisplay("0");

//   const Button = ({ children, onClick }) => (
//     <button
//       onClick={onClick}
//       className="bg-gray-200 hover:bg-gray-300 text-xl font-semibold p-4 rounded-2xl shadow"
//     >
//       {children}
//     </button>
//   );

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-6 rounded-2xl shadow-xl w-80">
//         <div className="bg-black text-white text-right text-3xl p-4 rounded-xl mb-4">
//           {display}
//         </div>

//         <div className="grid grid-cols-4 gap-3">
//           <Button onClick={clear}>C</Button>
//           <Button onClick={() => handleClick("/")}>÷</Button>
//           <Button onClick={() => handleClick("*")}>×</Button>
//           <Button onClick={() => handleClick("-")}>−</Button>

//           <Button onClick={() => handleClick("7")}>7</Button>
//           <Button onClick={() => handleClick("8")}>8</Button>
//           <Button onClick={() => handleClick("9")}>9</Button>
//           <Button onClick={() => handleClick("+")}>+</Button>

//           <Button onClick={() => handleClick("4")}>4</Button>
//           <Button onClick={() => handleClick("5")}>5</Button>
//           <Button onClick={() => handleClick("6")}>6</Button>
//           <Button onClick={calculate}>=</Button>

//           <Button onClick={() => handleClick("1")}>1</Button>
//           <Button onClick={() => handleClick("2")}>2</Button>
//           <Button onClick={() => handleClick("3")}>3</Button>
//           <Button onClick={() => handleClick("0")} className="col-span-4">0</Button>
//         </div>
//       </div>
//     </div>
//   );
// }


const DIGITS = ['7','8','9','4','5','6', '1','2','3', '+/-', '0', '.', ];
const OPERATIONS  = ['+','-','×','÷', '='];
const SYMBOLS = ['%', 'AC', '<', '1/x', 'x^2', 'sqr'];

//Ersts, input als undefinded setzen
function CalculatorApp() {
  const [input, setInput] = useState<string>('');
  const [prevInput, setPrevInput] = useState<string>('');
  const [operation, setOperation] = useState<string | undefined>(undefined);
  const [display, setDisplay] = useState<string>('0');

  const handleNumberClick = (digit: string) => {
    setInput((prev) => (prev === '0' ? digit : prev + digit));
    setDisplay((prev) => (prev === '0' ? digit : prev + digit));
  };

  const clear = () => {
    setInput('');
    setPrevInput('');
    setOperation(undefined);
    setDisplay('0');
  };

  const handleOperationClick = (op: string) => {
    if (!input) return;
    setOperation(op);
    setPrevInput(input);
    setInput('');
    setDisplay('');
  };

  const handleSymbolClick = (symbol: string) => {
    switch (symbol) {
      case '%': ; break;
      case 'AC': clear(); break;
      case '<': ; break;
      case '1/x': ; break;
      case 'x^2':  ; break;
      case 'sqr': ; break;
      default: return;
    }

    setPrevInput('');
    setOperation(undefined);
  };

  const handleEquals = () => {
    if (!prevInput || !input || !operation) return;
    const a = parseFloat(prevInput);
    const b = parseFloat(input);
    let result: number | string = 0;

    switch (operation) {
      case '+': result = a + b; break;
      case '-': result = a - b; break;
      case '×': result = a * b; break;
      case '÷': result = b === 0 ? 'Error' : a / b; break;
      default: return;
    }

    setDisplay(String(result));
    setInput(String(result));
    setPrevInput('');
    setOperation(undefined);
  };



  

  return (
    <section className="container-fluid vh-100 bg-body-secondary d-flex align-items-center justify-content-center">
      <div className="calculator w-fit position-relative border border-width-1 border-primary">
          <div className="bg-body-tertiary w-100">
            <h1 className="text-end">{display}</h1>
            <h4 className="text-end text-secondary">{display}</h4>
          </div>
          <div className="d-flex calculator-keys">
            <div className="h-100">
              <div className="calculator-keys--symbols grid">
              {SYMBOLS.map((symbol) => (
                <button className="g-col btn btn-secondary rounded-0" key={symbol} onClick={() => handleSymbolClick(symbol)}>
                  {symbol}
                </button>
              ))}
              </div>
              <div className="calculator-keys--digits grid">
                {DIGITS.map((digit) => (
                <button className="g-col btn btn-secondary rounded-0" key={digit} onClick={() => handleNumberClick(digit)}>
                  {digit}
                </button>
                ))}
              </div>
            </div>
            <div className="calculator-keys--operations grid">
              {OPERATIONS.map((op) => (
                <button className={`btn btn-info rounded-0 ${op === '=' ? 'g-col span-2' : 'g-col'}`} key={op} onClick={op === '=' ? () => handleEquals() : () => handleOperationClick(op)}>
                  {op}
                </button>
              ))}
            </div></div>
        </div>
    </section>
    
  );
}

export default CalculatorApp;
