
import s from "./QuestionVariants.module.scss"

const QuestionVariants = ({question, onClickVariant}) => { 
    

    return(
        <div className={s.wrapper}>
            <h2 className={s.title}> {question.title} </h2>
            <ul>
                {question.variants.map(
                (variant, index) => <li className={s.answer} key={variant} 
                    onClick={() => onClickVariant(index)}
                    ><button className={s.variant}>{variant}</button></li>
                )}
            </ul>



        </div>
    );
}

export default QuestionVariants