import React, { useEffect, useState } from 'react'
import Exercise from './Exercise'
const getAnswer = (num1,num2,sign) => {

    if(sign === '-'){
        return(num1-num2);
    }
    else if(sign === '+'){
        return(num1+num2)
    }
    else if(sign === '/'){
        return(Math.floor(num1/num2))
    }
    else if(sign === '*'){
        return(num1*num2)
    }
}

export default function Exam() {
  const[questions,setQuestions] = useState(null)
  const[grade,setGrade] = useState(0)
  const[isShowGrade,setIsShowGrade] = useState(false)
  

  useEffect(()=>{
    createQuestions()
  },[])

  function createQuestions(){
    const arrayQuestions = []
    const signs = ['-','+','/','*']
    for (let i = 0; i < 10; i++) {
        var question = {}
        question.id = i;
        question.firstNumber = Math.floor(Math.random()*10);
        question.secondNumber = Math.floor(Math.random()*10);
        question.sign = signs[Math.floor(Math.random()*4)];
        question.answer = getAnswer(question.firstNumber,question.secondNumber,question.sign);
        arrayQuestions.push(question)
    }
    setQuestions(arrayQuestions);
}
    function submitAnswer(){
        let newGrade = 0;
        questions.forEach(question => {
            if(question.answer === Number(question.userAnswer)){
                newGrade+=10;
            }
        });
        setGrade(newGrade);
        setIsShowGrade(true);
    }
     
    function resetQuestions(){
        createQuestions();
        setGrade(0);
        setIsShowGrade(false);
    }

  return (
    <div>
        {questions?.map((question)=>{
            return <Exercise key={question.id} question={question} setQuestions={setQuestions}></Exercise>
        })}
        <button style={{color:"green"}} onClick={()=>{submitAnswer()}}>SUBMIT ANSWER</button>
        {isShowGrade && <div>{grade}</div>}
        <button onClick={()=>{resetQuestions()}}>RESET QUESTIONS</button>
    </div>
  )
}
