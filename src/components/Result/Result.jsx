import s from "./Result.module.scss"
import { Link} from 'react-router-dom'
import React from "react";

const Result = ({correct, all, restartQuiz}) => { 


    React.useEffect(() => {
        return () => {
            restartQuiz()
        }
      }, []);

      document.title = `У тебя ${correct} из ${all}`;
    
    return(
            
            <div className={s.wrapper}>
                <h1>Конец</h1>
                <p >Ты ответила правильно на {correct} из {all}!</p>
                <Link className={s.again} to="/test" >Пройти заново</Link>
                <Link className={s.back} to="/">На главную</Link>
            </div>
          
    );

    
    
}

export default Result