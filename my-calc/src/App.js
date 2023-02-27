/* eslint-disable no-undef */
import React,{useState} from 'react';
import './App.css';

function App() {
  const [result,setaResult]=useState("");
  const Hclick=(e)=>{
    setaResult(result.concat(e.target.name))
  }
  const clear=()=>{
    setaResult("")
  }
  const DELETE=()=>{
    setaResult(result.slice(0,result.length-1))
  }
  const evaluate=()=>{
    // eslint-disable-next-line no-eval
    try{
    setaResult(eval(result).toString());
    }catch (err){
    setaResult("");
    }
  }
  return (
    <div className="calculator-grid">
    <div className="output">
    <div className="previous-operand" ></div>
    <div className="current-operand" >{result}</div>
    </div>
    <button  onClick={clear} className="span-two">AC</button>
    <button  onClick={DELETE}>DEL</button>
    <button name='/' onClick={Hclick}>/</button>
    <button name='1'  onClick={Hclick}>1</button>
    <button name='2' onClick={Hclick}>2</button>
    <button name='3' onClick={Hclick}>3</button>
    <button name='*' onClick={Hclick}>*</button>
    <button name='4' onClick={Hclick}>4</button>
    <button name='5' onClick={Hclick}>5</button>
    <button name='6' onClick={Hclick}>6</button>
    <button name='+' onClick={Hclick}>+</button>
    <button name='7' onClick={Hclick}>7</button>
    <button name='8' onClick={Hclick}>8</button>
    <button name='9' onClick={Hclick}>9</button>
    <button name='-' onClick={Hclick}>-</button>
    <button name='.' onClick={Hclick}>.</button>
    <button name='0' onClick={Hclick}>0</button>
    <button name='=' onClick={evaluate} className="span-two">=</button>
    </div>
  );
}

export default App;
