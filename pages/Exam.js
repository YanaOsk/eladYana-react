import React, { useEffect, useState } from 'react'
import Exercise from './Exercise'
import axios from 'axios';
// import HomePage from './HomePage';
import { Inter } from '@next/font/google'
// import styles from '../styles/Home.module.css'


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
  const[examData,setExamData] = useState(null)
  const[countRightAnswers,setCountRightAnswers] = useState(0)
  const[startTime,setStartTime] = useState(null)
  const[endTime,setEndTime] = useState(null)
  const[isExamOver, setIsExamOver] = useState(false)
  const[visibleIndex,setVisibleIndex] = useState(0)

  useEffect(()=>{ 
    createQuestions()
    // onlyIntNumbers()
  },[])

  function createQuestions(){
    const arrayQuestions = []
    const signs = ['-','+','/','*']
    for (let i = 0; i < 10; i++) {
        var question = {}
        question.userAnswer=''
        question.id = i;
        question.firstNumber = Math.floor(Math.random()*10);
        question.secondNumber = Math.floor(Math.random()*10);
        question.sign = signs[Math.floor(Math.random()*4)];
        if(question.sign === '/'){
            
            while(question.firstNumber%question.secondNumber!==0 || question.secondNumber===0){
                console.log("the numbers that don't divides are  ",question.firstNumber ,"/",question.secondNumber ,'and they are from question id ',question.id);
                question.firstNumber = Math.floor(Math.random()*10);
                question.secondNumber = Math.floor(Math.random()*10);
            }
        } 

        question.answer = getAnswer(question.firstNumber,question.secondNumber,question.sign);
        question.isVisible = false;
        arrayQuestions.push(question)
    }
    arrayQuestions[0].isVisible = true;
    
    setQuestions(arrayQuestions);
    
}

// const onlyIntNumbers = () => {
//     for(let i = 0; i<questions.length-1 ;i++){
      
//     }
// }



const makeTheNextExVisible = () =>{
  
    if(questions[visibleIndex].userAnswer === '') {
        alert("Answer the question before moving to a next one")
        return
    }
    if(visibleIndex<questions.length-1){
        const newQuestions = [...questions]
        newQuestions[visibleIndex+1].isVisible = true;
        setQuestions(newQuestions)
        setVisibleIndex(visibleIndex+1)
    }
}
console.log(questions);
    function submitAnswer(){
        let newGrade = 0;
        let countRightAnswer = 0;
        questions.forEach(question => {
            if(question.answer === Number(question.userAnswer)){
                countRightAnswer+=1;
                newGrade+=10;
            }
        });
       
        setCountRightAnswers(countRightAnswer)
        setGrade(newGrade);
        setIsShowGrade(true);
        setIsExamOver(true)
    }

    console.log('EXAM DATA', examData)
    
    useEffect(() => {
        if(!isExamOver) return
        let savedData = [];
        savedData.push({
            examId:Math.floor(Math.random()*10000),
            amountOfRightAnswers:countRightAnswers,
            grade,
            startTime,
            endTime
        })
        setExamData(savedData)
        
        
    }, [isExamOver])

     function postData(){
        axios.post('http://localhost:3000/api/exam',examData[0]).then((response)=>{
                console.log("the response is ",response);
            })
            .catch((error)=>{
                console.log("The error is ",error);
            })
    }
     
    function resetQuestions(){
        createQuestions();
        setGrade(0);
        setIsShowGrade(false);
        setCountRightAnswers(0);
        setIsExamOver(false);
        setStartTime(null);
        setEndTime(null);
        setExamData(null)

    }
    function getStartTimeOfExam () {
        let startDate = new Date()
        setStartTime(startDate)
    }
    function getEndTimeOfExam(){
        let endDate = new Date()
        setEndTime(endDate)
    }

    function deleteData(){

        const inputVal = document.getElementById("inputVal").value
        console.log("the input vlue is ",inputVal);
        axios.delete(`http://localhost:3000/api/exam?examId=${inputVal}`).then((response)=>{
            console.log(response);
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    

  return (
    <div>
        {questions?.map((question)=>{
            if(question.isVisible === true){
                return <div key={question.id}><Exercise makeTheNextExVisible={makeTheNextExVisible}  question={question} setQuestions={setQuestions}></Exercise></div>
            }
        })}
        <button onClick={()=>{makeTheNextExVisible()}}> NEXT QUESTION </button>
        <button onClick={()=>{getStartTimeOfExam()}}>START EXAM</button>
        <button onClick={()=>{getEndTimeOfExam()}}>END EXAM</button>
        <button  style={{color:"green"}} onClick={()=>{
            submitAnswer()
            }}>SUBMIT ANSWER</button>
        {isShowGrade && <div>{grade}</div>}
        <button  onClick={()=>{resetQuestions()}}>RESET QUESTIONS</button>
        <button  onClick={()=>{postData()}}>SEND EXAM TO DATABASE </button>
        <div>
        <label>Insert exam id to delete from database</label>
           <div>
           <input id="inputVal" onChange={(e)=>{console.log(e.target.value)}}/> 

           <button onClick={()=>{deleteData()}}> DELETE EXAM FROM DB </button>
           </div>
        </div>
        
    </div>
  )
}
