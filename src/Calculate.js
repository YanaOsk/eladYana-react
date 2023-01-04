import React, { useEffect, useState } from 'react'  
import Answer from './Answer';


export default function Calculate({calcObj}) {
    const [ans,setAns] = useState(0);
   
    const checkAnswer = () => {
        if(calcObj.sign === '-'){
            setAns(calcObj.firstNumber-calcObj.secondNumber);
        }
        else if(calcObj.sign === '+'){
            setAns(calcObj.firstNumber+calcObj.secondNumber)
        }
        else if(calcObj.sign === '/'){
            setAns(calcObj.firstNumber/calcObj.secondNumber)
        }
        else if(calcObj.sign === '*'){
            setAns(calcObj.firstNumber*calcObj.secondNumber)
        }
    }
   
    
  return (
    <div>
        <Answer ans={ans} checkAnswer={checkAnswer}></Answer>
    </div>
  )
}
