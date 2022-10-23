import s from "./Hero.module.scss"
import { NavLink} from 'react-router-dom'

const Hero = ({}) => { 

    document.title = `Алена с днем рождения!`;
    return(
     
            <div className={s.wrapper}>
              
              <div className={s.nav__item}><NavLink to="/test" >text</NavLink></div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, blanditiis sapiente obcaecati aspernatur ducimus magnam sequi amet quisquam reprehenderit, dolorum doloribus commodi numquam deleniti sed? Dolore et vel quisquam accusantium!
              Et aliquam sint facere ipsam, repellendus blanditiis, ut voluptatibus esse obcaecati est sunt autem accusantium distinctio illum molestiae voluptate? Ratione voluptate obcaecati, consequuntur sint id tenetur at fuga blanditiis possimus!
              Illum, rerum! Dolorem nostrum vel mollitia unde molestias placeat? Non culpa totam iste doloremque natus atque. Voluptatum corporis nihil sed iste voluptatibus. Obcaecati autem, esse aspernatur consectetur quidem minima odio?
              Consequuntur eos, aliquam labore cumque dolorem animi sapiente maxime omnis eveniet eius iusto voluptates doloribus fugiat nulla praesentium voluptatibus possimus expedita facilis. Commodi velit minima non sapiente illum illo obcaecati?
              Aliquam obcaecati error praesentium natus placeat beatae necessitatibus impedit excepturi, harum ut incidunt veritatis possimus adipisci facere minus recusandae non commodi expedita repellendus amet voluptatem dolorem atque voluptatum! Voluptas, optio.
              Quas recusandae cumque labore! Praesentium recusandae perspiciatis eaque nulla, quod et tempora hic inventore quam doloribus, voluptatibus soluta fugit, numquam cumque beatae deserunt. Dolor a voluptatibus dicta veniam assumenda sunt?
              Iure repudiandae voluptatum, repellat similique nulla perferendis architecto ratione mollitia, quisquam animi iste. Commodi eaque quibusdam voluptate cumque consectetur exercitationem, doloribus praesentium, fugiat suscipit, odio ullam nihil minus voluptates quasi.
              Officia suscipit nisi itaque, ut perspiciatis porro tempore? Reiciendis iure deleniti alias, quia, officiis inventore consequuntur dicta provident maxime iste neque delectus laborum excepturi, facere commodi blanditiis fuga pariatur debitis?
              Numquam autem nobis similique, impedit minus consequuntur sint vero error voluptas, rerum veniam cum natus laboriosam magnam adipisci officia debitis maiores soluta. Veniam fugit quis commodi porro dolores, ad cupiditate!
              Dolorum nobis ducimus consectetur saepe, perferendis, sequi illo at excepturi, reprehenderit soluta minima voluptatibus veritatis nostrum. Unde eum ducimus aspernatur enim eaque, sequi minima officiis quam corrupti quae, beatae deserunt!</p>
            </div>
       
    );
}

export default Hero