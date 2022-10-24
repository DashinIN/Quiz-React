import Parallax from 'parallax-js'
import s from "./Paralax.module.scss"
import React from 'react'

import cake from "../../assets/imagesParalax/cake1.png"
import cake2 from "../../assets/imagesParalax/cake2.png"
import shar from "../../assets/imagesParalax/shari.png"

const Paralax = ({image}) => {

    React.useEffect(() => {
        let scene = document.getElementById('scene');
        let parallaxInstance = new Parallax(scene);
    }, [])
    

    return(
        <div id="scene">
        <img data-depth="0.2" className={s.backImage} src={image} alt=""  />
        <img data-depth="0.1" src={cake} className={s.cakeImage1}  alt="" />
        <img data-depth="0.1" src={cake2} className={s.cakeImage2}  alt="" />
        <img data-depth="0.05" src={shar} className={s.shar}  alt="" />
        </div>
    );
}

export default Paralax