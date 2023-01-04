import logo from "./logo.svg";
import "./App.css";
import Test from "./component";
import { useEffect, useState } from "react";
import FirstNumInput from "./FirstNumInput";
import SecondNumInput from "./SecondNumInput";
import RandomSign from "./RandomSign";
import Calculate from "./Calculate";

function App() {
  const [firstNumber, setFirstNumber] = useState(0)
  const [secondNumber, setSecondNumber] = useState(0)
  const [sign, setSign] = useState(null)
  const [calcObj, setCalcObj] = useState(null)
  
  function randFirstNumber(){
    const random = Math.floor(Math.random()*10)
    setFirstNumber(random)
  }
  function randSecondNumber(){
    const random = Math.floor(Math.random()*10)
    setSecondNumber(random)
  }
  

  useEffect(() => {
    if(!firstNumber || !secondNumber || !sign) return; 

    const updatedCalcObj = {
      firstNumber, secondNumber, sign
    }

    setCalcObj(updatedCalcObj)
  }, [firstNumber, secondNumber, sign])

  return (
    <div>
      {/* {pageData && <h1>i GOT {pageData.number} EARS</h1>}
      <button onClick={() => {setN(n + 1)}}>ada</button> */}
      <FirstNumInput number={firstNumber}></FirstNumInput>
      <button className="ranFirstBttn" onClick={()=>{randFirstNumber()}}>Random First Number</button>
      <SecondNumInput number={secondNumber}></SecondNumInput>
      <button className="ranSecBttn" onClick={()=>{randSecondNumber()}}>Random Second Number</button>
      <RandomSign sign={sign} setSign={setSign}></RandomSign>
      {/* <Calculate sign={sign} firstNumber={firstNumber} secondNumber={secondNumber}></Calculate> */}
      <Calculate calcObj={calcObj}></Calculate>
    </div>
  );
}

export default App;

