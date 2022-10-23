
import s from "./ProgressBar.module.scss"

const ProgressBar = ({ step, length}) => {
    return(
        <>
        <div className={s.bar}>
        <div style={{width: `${(step/length)*100}%`}} className={s.barDone}></div>
        </div>
        <div className={s.progressIndicator}>{step} из {length}</div>
       
        </>
    );
}

export default ProgressBar