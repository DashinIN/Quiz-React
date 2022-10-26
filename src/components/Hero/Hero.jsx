import s from "./Hero.module.scss"
import React from 'react'
import { NavLink} from 'react-router-dom'
import Paralax from "../Paralax/Paralax"

import fire from "../../assets/imagesParalax/fire.gif"

const Hero = ({}) => { 



    document.title = `Алена с днем рождения!`;
    return(
          
            <div className={s.wrapper}>
             <Paralax className={s.paralax} image={fire}/>
              
              <div className={s.intro}>
              <h1 className={s.header} >Поздравляем с днем рождения!</h1>
              <p className={s.paragraph}>Поздравляем Болотникову Алену Алексеевну с двадцати с чем то летием, пусть все дела будут по плотной программе! Желаем плюс сто константу морали, чтобы всегда быть на чилычах а жизнь была не на дауничах.</p>
              <p className={s.paragraph}>Предлагаем поучавствовать в днерождественской викторине</p>
              <NavLink className={s.nav__item} to="/Quiz-React/test" >Пройти викторину</NavLink>
              </div>
              

            </div>
       
    );
}

export default Hero