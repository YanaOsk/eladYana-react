import React, { useEffect, useState } from 'react'

export default function Answer({ans,checkAnswer}) {
    const [inputVal,setInputVal] = useState(null)
    const [trueOrFalse,setTrueOrFalse] = useState(false)
    
   
    const saveInput = (val) => {
        setInputVal(parseInt(val))
        console.log("the input value ",val);
    }
  

    const check = () => {
        console.log("the comp ans is" ,ans);
        console.log("the input val is ",inputVal);
        if(inputVal === ans){
            console.log("i am at the if");
            console.log(inputVal === ans);
            setTrueOrFalse(true)
        }
        else{
            console.log("i am at the else");
            setTrueOrFalse(false)
        }
    }
 
    useEffect(()=>{
        check()
    },[ans,inputVal])

    
    
  return (
    <div><label>Write your answer here : </label>
        <input onChange={(e)=>{saveInput(e.target.value);}} id='inputId'/>
        <button onClick={
            ()=>{
                checkAnswer();
                // check(); 
            }
            }>check if  your answer is correct </button>
        <h2>{trueOrFalse ?'true':'false'}</h2>
    </div>
  )
}
