import React, { useState } from 'react';
import "./Home.css"
import quiz from '../../Images/quiz.jpg'
import { Button, MenuItem, TextField } from '@mui/material';
import Categories from '../../Data/Categories';
import { useNavigate } from 'react-router-dom';
import ErrorMessage from '../../components/Header/ErrorMessage/ErrorMessage';


function Home({name,setName,fetchQuestions}) {
    const navigate=useNavigate()
    // const [name, setName] = useState("");
    const [category, setCategory] = useState("")
    const [difficulty, setDifficulty] = useState("")
    const [error,setError]=useState(false)
    const handleClick = () =>{
    setError(false)
    if(!name || !category || !difficulty){
        setError(true) 
        return
    }
    else{
        setError(false)
        fetchQuestions(category,difficulty)
        // navigate("/quiz")
       setTimeout(()=>navigate("/quiz"),2000)
    }
    }
    
    return (
        <div className='content'>
            <div className='settings'>
                <span style={{
                    fontSize: 30
                }}>Quiz Settings</span>

                <div className='settings-select'>
                <TextField
            style={{ marginBottom: 25 }}
            label="Enter Your Name"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
          />

                    <TextField
                        select
                        label="Select Categories"
                        variant='outlined'
                        value={category}
                        onChange={(e)=>setCategory(e.target.value)}
                        style={{ marginBottom: '25px' }}
                    >
                        {Categories.map((option) => (
                            <MenuItem
                                key={option.category}
                                value={option.value}>
                                {option.category}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        select
                        label="Select Difficulty"
                        variant='outlined'
                        value={difficulty}
                        onChange={(e)=>setDifficulty(e.target.value)}
                        style={{ marginBottom: '25px' }}
                    >
                        <MenuItem key="Easy" value="easy">Easy</MenuItem>
                        <MenuItem key="Medium" value="medium">Medium</MenuItem>
                        <MenuItem key="Hard" value="hard">Hard</MenuItem>
                    </TextField>

                    <Button variant="contained" size='large' onClick={handleClick}>Start</Button>
                     { error && <ErrorMessage errorMsg="Please Fill all Fields to Start"/>}
                </div>
            </div>

            <img
                className='banner'
                src={quiz} />
        </div>
    );
}

export default Home;