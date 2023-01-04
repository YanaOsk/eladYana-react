import React, { useState } from 'react'

const abc = {a:1, b:2 ,c:3}

const {a} = abc
export default function RandomSign({setSign, sign}) {
    const signs = ['+','-','/','*']

    function randomSign(){
        const index = Math.floor(Math.random()*4)
        setSign(signs[index])
    }
  return ( 
    
    <div>
        <h1>{sign}</h1>
        <button className='ranSignBttn' onClick={()=>{randomSign()}}>SET RANDOM SIGN</button>
    </div>
  )
}
