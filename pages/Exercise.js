import React from 'react'

export default function Exercise({question,setQuestions}) {
    function setUserAnswer(e){
        const newQuestion = {...question};
        const val = e.target.value;
        newQuestion.userAnswer = val;
        setQuestions((prevState)=>{
            const index = prevState.findIndex((prevStateQuestion)=>prevStateQuestion.id === question.id);
            prevState[index] = newQuestion;
            return [...prevState];
        })
    }
    // console.log("userAns ",question.userAnswer);
  return (
    
    <div className='exercise'>
        <h1>{question.firstNumber} {question.sign} {question.secondNumber} = 
        <input 
        onChange={setUserAnswer} value={question.userAnswer ||  ''} type='text'/>
        </h1>
    </div>
  )
}
