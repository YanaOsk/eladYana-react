import React from 'react'
import { useRouter } from 'next/router';
import Exam from './Exam'

export default function HomePage() {
    const router = useRouter();
    const goToExam = () => {
        router.push('/Exam');
    }
  return (
    <div>
        <div>HomePage</div>
        <div>
            <button onClick={()=>{goToExam()}}> GO TO EXAM </button>
        </div>
    </div>
  )
}
