

// import { useState } from "react";

import { useState, type MouseEvent } from "react";

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

function CalculatorApp() {
  const [ input, setInput ] = useState<string | null>(null);
  const [ prevInput, setPrevInput ] = useState<string | null>(null);
  const [ display, setDisplay ] = useState<string | null>(null);
  const [ op, setOp ] = useState(null);
  const handleNumberClick = (e: MouseEvent<HTMLButtonElement>) => {
    const pressedKey = e.currentTarget.dataset.value as string;
    if (input && input.includes(".") && pressedKey === ".") return;
    if (!input) setInput(pressedKey);
    setInput((prev) => (prev + input));
  }
  
  return (
    
    <div>Hello</div>
        
  )
}

export default CalculatorApp;
