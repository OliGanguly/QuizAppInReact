import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import "./Quiz.css"
import Question from '../../Questions/Question';
function Quiz({name,questions,score,setScore,setQuestions})
{
    const [options, setOptions] = useState();
    const [currQues, setCurrQues] = useState(0);
    // Handle suffel tales the current Question and if 
    // Question available then take corrent ans out of it
    // and list of incorrect answers in spread opearator
    console.log(questions)
    useEffect(() => {
      setOptions(handleShuffle(questions && [questions[currQues].correct_answer,...questions[currQues].incorrect_answers]))
      }, [currQues, questions]);
   
    //setAll in opions
    const handleShuffle = (options) => {
        // console.log("optionsssssssssss",options)
        // console.log("suffel",options.sort(() => Math.random() - 0.5))
        return options.sort(() => Math.random() - 0.5);
      };
      // console.log("questions[currQues].category?",questions[currQues].category)
    return (
        <div className='quiz'>
            <span className='subTitle'>Hi {name} </span>
            
            {
                questions ?(
                  <>
                  <div className='quizinfo'>
                    {/* <span>{questions[currQues].category?questions[currQues].category:"Na"}</span> */}
                    <span>Score: {score}</span>
                  </div>
                  <Question
                  currQues={currQues}
                  setCurrQues={setCurrQues}
                  questions={questions}
                  options={options}
                  correct={questions[currQues]?.correct_answer}
                  score={score}
                  setScore={setScore}
                  setQuestions={setQuestions}
                  />
                  </>
                ):(
                    <CircularProgress />
                )
            }
        </div>
    );
}

export default Quiz;