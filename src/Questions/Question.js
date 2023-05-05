import React, { useState } from 'react';
import './Question.css'
import { useNavigate } from 'react-router-dom';
import ErrorMessage from '../components/Header/ErrorMessage/ErrorMessage';
function Question({currQues,setCurrQues,questions,options,correct,score,setScore,setQuestions}) {
    const navigate=useNavigate()
    const [selected,setSelected]=useState()
    const [error,setError]=useState(false)
    const handleNext=()=>{
        console.log("currQues",currQues)
        if(currQues>8){
            navigate("/result")
        }
        if(selected){
            setCurrQues(currQues+1)
        setSelected("")
        }else{
            setError(true)
        }
        
    }
    const handleCheck=(i)=>{
        // console.log(i,correct)
        if(i===correct){
            setScore(score+1)
        }
        setSelected(i)
        setError(false)
    }
    //for changing color
    const handleSelect =(i)=>{
    if(selected===i && i===correct) return "select";
    else if(selected===i && i!== correct) return "wrong"
    else if (i===correct) return "select"

    }
    return (
        <div className='question'>
            <p>Question {currQues+1}</p>
            <div className='singleQuestion'>
                <h2>{questions[currQues].question}</h2>
                <div className='options'>
                    {
                        options && options.map((item)=>{
                         return <button 
                         className={`singleoption  ${selected && handleSelect(item)}`}
                         key={item}
                         disabled={selected}
                         onClick={()=>{handleCheck(item)}}>
                            {item}
                         </button>
                        })
                    }
                </div>

                    <button className='button' onClick={handleNext}>Next</button>
                    { error && <ErrorMessage errorMsg="Select Answer to move forward"/>}
                
            </div>
        </div>
    );
}

export default Question;