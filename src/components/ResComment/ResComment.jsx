import React from "react";
import s from "./ResComment.module.scss"
import { NavLink} from 'react-router-dom'

const ResComment = ({ image, comment,onClickNext, finalCond}) => { 
    
    return(
        <div className={s.wrapper}>
       
        <img className={s.questionImage} src={image} alt="anwspic" />
        <p>{comment}</p>
        {finalCond ?
            (<NavLink to="/Quiz-React/result">Узнать результат!</NavLink>) :
            (<button className={s.next} onClick={() => onClickNext()}>Дальше</button>)
            }
        
       
        </div>
    );
}

export default ResComment