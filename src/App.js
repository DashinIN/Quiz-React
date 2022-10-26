import React from "react";

import Hero from "./components/Hero/Hero";

import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import questions from "./assets/questions"

import "./App.scss"


import { CSSTransition, TransitionGroup } from "react-transition-group";
const Result = React.lazy(() => import("./components/Result/Result"));
const Question = React.lazy(() => import("./components/Question/Question"));

function App() {

  const [questionState, setQuestionState]  = React.useState(0);//СТАДИЯ ВОПРОСА
    const [correct, setCorrect] = React.useState(0); //СЧЕТЧИК ПРАВИЛЬНЫХ ОТВЕТОВ
    const [correctRes, setCorrectRes] = React.useState(0); //ПРАВИЛЬНЫЙ ЛИ ОТВЕТ
    const [state, setState]  = React.useState(0); //НОМЕР ВОПРОСА
    

    

    const onClickVariant = (index) => { 
      setQuestionState(prevState => prevState+=1);
      if (index===questions[state].correct) {
          setCorrect(prevState => prevState+=1);
          setCorrectRes(1);
        
      }
  }

  const onClickNext = () => {
      setQuestionState(prevState => prevState-=1);
      setState(prevState => prevState+=1);
      document.title = `${state+1} вопрос`;
      setCorrectRes(0);
    
  }
  
  const restartQuiz = () => {
            setQuestionState(0);
            setState(0);
            setCorrect(0);
            setCorrectRes(0);
  }






  const location = useLocation();
  return (
    
    <TransitionGroup>
      
      <CSSTransition key={location.key} classNames="change" appear={true}  >
      <div className="wrapper">
        <Routes location={location}>
          <Route path="/Quiz-React"  element={<Hero />}/>  
          <Route path="Quiz-React/test" element={
          <React.Suspense fallback={<></>}>
            <Question
            questions={questions}
            state={state}
            questionState={questionState} 
            correctRes={correctRes} 
            onClickVariant={onClickVariant}
            onClickNext={onClickNext}
            />
          </React.Suspense>

          } />
          <Route path="/Quiz-React/result" element={
            <React.Suspense fallback={<></>}>
              <Result
              correct={correct}
              all={questions.length}
              restartQuiz={restartQuiz}
              />
          </React.Suspense>
           }/>
           <Route path="*" element={<Navigate replace to="/Quiz-React" />} />
        </Routes>
        </div>
        </CSSTransition>
        
       </TransitionGroup>
   
       
  );
}

export default App;
