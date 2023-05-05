
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import bgImage from './Images/bgImage.jpg'
import Header from './components/Header/Header';
import Footer from './components/Header/Footer/Footer';
import Home from './pages/Home/Home';
import Quiz from './pages/Quiz/Quiz';
import Result from './pages/Result/Result';
import { useState } from 'react';
import axios from 'axios';


function App() {
  const [name, setName] = useState();
  const [questions,setQuestions]=useState([])
  const [score,setScore]=useState(0)

  const fetchQuestions=async(category,difficulty)=>{
  const {data}=await axios.get(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`)
  console.log(data.results)
  setQuestions(data.results)

  }
  return (
    <BrowserRouter>
    <div className="app"
      style={{
      backgroundImage:`url(${bgImage})`,
      backgroundSize:"cover",
      backgroundPosition:"center",
      position:"relative"
    }}
    >
     <Header/>
     <Routes>
        <Route exact path="/" element={
        <Home  
        name={name}
        setName={setName}
        fetchQuestions={fetchQuestions}/>} />
        <Route path="/quiz" element={
        <Quiz 
        name={name}
        questions={questions && questions}
        score={score}
        setScore={setScore}
        setQuestions={setQuestions}
        />} 
        />

        <Route path="/result" element={<Result score={score} />} />
      </Routes>
    </div>

    <Footer/>
    </BrowserRouter>
    
  );
}

export default App;
