import './App.css';
import React, {useState} from 'react';


function App() {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [currentOperation, setCurrentOperaton] = useState("");
  const [result, setResult] = useState(0);

  const inicioEstado = JSON.parse(localStorage.getItem("historial")) || [];
  const [historial, setHistorial] = useState(inicioEstado); // Se inicializa el state con la variable anterior

  function allClear(){

    const lista={num1:number1,num2:number2,op:currentOperation,res:result}
    const nuevoArreglo = [...historial, lista]
    setHistorial([...nuevoArreglo]);
    localStorage.setItem("resu", JSON.stringify(nuevoArreglo));

    setNumber1("");
    setNumber2("");
    setCurrentOperaton("");
    setResult("");

    
  }
  function clickNumber (val) {
    if (currentOperation === ""){
      setNumber1(number1 + val);
    } else {
      setNumber2(number2 + val);
     }
    
  }

  function clickOperation (val){
    setCurrentOperaton(val);
  }

  function getResult () {
    switch (currentOperation) {
      case "+":
        setResult(Number(number1) + Number(number2));
        break;
      case "-":
        setResult(Number(number1) - Number(number2));
        break;
      case "*":
        setResult(Number(number1) * Number(number2));
        break;
      case "/":
        setResult(Number(number1) / Number(number2));
        break;
        
    }
  }


  const deleteNumber = () => {
    if (currentOperation === " ") {
      setNumber1(number1.toString().slice(0, -1));
    } else {
      setNumber2(number2.toString().slice(0, -1));
    }
  };
  return (
    <div className="App">
      <h1 className=  'title'><center> <br></br><br></br> CALCULADORA </center></h1>
     <div className='calculadora-grid'>
       <div className='output'>
         <div className='previous-operand'>{currentOperation ? number1 + currentOperation : ""}</div>
           <div className='current-operand'>{result ? result : (!currentOperation ? number1 : number2) }</div>
       </div>

       <button onClick={allClear} className="span-two" >AC</button>
       <button onClick={()  =>  {}}>DEL</button>
       <button onClick={()  =>  {clickOperation("/")}}>/</button>
       <button onClick={()  =>  {clickNumber(7)}}>7</button>
       <button onClick={()  =>  {clickNumber(8)}}>8</button>
       <button onClick={()  =>  {clickNumber(9)}}>9</button>
       <button onClick={()  =>  {clickOperation("*")}}>*</button>
       <button onClick={()  =>  {clickNumber(4)}}>4</button>
       <button onClick={()  =>  {clickNumber(5)}}>5</button>
       <button onClick={()  =>  {clickNumber(6)}}>6</button>
       <button onClick={()  =>  {clickOperation("+")}}>+</button>
       <button onClick={()  =>  {clickNumber(1)}}>1</button>
       <button onClick={()  =>  {clickNumber(2)}}>2</button>
       <button onClick={()  =>  {clickNumber(3)}}>3</button>
       <button onClick={()  =>  {clickOperation("-")}}>-</button>
       <button onClick={()  =>  {clickOperation(".")}}>.</button>
       <button onClick={()  =>  {clickNumber(0)}}>0</button>
       <button onClick={getResult}className="span-two">=</button>
     </div>

     <div
            className="row card m-4 p-3 shadow"
            style={{ width: 400, left: 0 }}
          >
            <h3>Historial de operaciones</h3>

            {historial.length === 0 ? (
              "Vacío"
            ) : (
              <ul>
                {historial.map((item, index) => {
                  return (
                    <li className="fs-5">
                      {item.num1}{item.op}{item.num2} = {item.res} &nbsp;
                    </li>
                  );
                })}
              </ul>
            )}
          </div>



    </div>
  );
}

export default App;