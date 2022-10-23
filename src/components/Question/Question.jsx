import React from "react";
import QuestionVariants from "../QuestionVariants/QuestionVariants";
import ResComment from "../ResComment/ResComment";

import ProgressBar from "../ProgressBar/ProgressBar";

import { CSSTransition, TransitionGroup } from "react-transition-group";
import s from "./Question.module.scss"

const Question = ({questions, state,questionState,correctRes, onClickVariant,onClickNext}) => {
    
    
    
    const appearQuestion = true;
    document.title = `${state+1} вопрос`;
    const question = questions[state];

    return (
        <div className={s.wrapper}>
           
            <> 
                <TransitionGroup>
                        { questionState===0 ? (
                        <CSSTransition
                        in={appearQuestion}
                        appear={true}
                        timeout={600}
                        classNames="fade"
                        >
                            <div className={s.questionField}>
                                <QuestionVariants question={question} onClickVariant={onClickVariant}/>    
                                    <>
                                        {
                                            state!==questions.length && 
                                                <ProgressBar 
                                                step={state+1}
                                                length={questions.length}
                                                />
                                            
                                        }
                                    </>      
                            </div>
                            </CSSTransition>
                        ) : (
                            <>
                                { correctRes ? (
                                    <CSSTransition
                                    in={appearQuestion}
                                    appear={true}
                                    timeout={600}
                                    classNames="fade"
                                    >
                                    <ResComment 
                                    image={question.imageCorrect} 
                                    comment={question.commentCorrect} 
                                    onClickNext={onClickNext}
                                    finalCond={state === questions.length-1}/> 
                                </CSSTransition>
                                ) : (
                                
                                    <CSSTransition
                                    in={appearQuestion}
                                    appear={true}
                                    timeout={600}
                                    classNames="fade"
                                    >
                                    <ResComment 
                                    image={question.imageWrong} 
                                    comment={question.commentWrong} 
                                    onClickNext={onClickNext}
                                    finalCond={state === questions.length-1}/> 
                                </CSSTransition>
                                )}
                            </>
                        )}
                </TransitionGroup>
            </> 
        </div>
    );
}
  
export default Question;