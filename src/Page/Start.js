

import '../styles/Main.css'

import React, { useEffect } from 'react';
import cat from '../Img/cat-favourite.jpg';
import dog from '../Img/dog-favourite.jpg'
import kira from '../Img/Kira.png';
import golden from '../Img/golden.jpg';
import book from '../Img/Icon/book.png'
import love from '../Img/Icon/love.png'
import group from '../Img/Icon/group.png'


const Cattheme = () =>{
    
    return(
    <>
<div className="about__interesting" >
           <span className="about__title">Czy wiedziałeś że...</span> <br/>
           <div className="about__textgeneral">
           
               <li>Mózg kota jest w 90% podobny do ludzkiego – bardziej podobny niż do psa.</li>
               <li>Koty wykorzystują swoje wąsy do wykrywania, czy mogą się zmieścić w przestrzeni.</li>
               <li>Koty mają gruczoły zapachowe wzdłuż ogona, czoła, pyska, podbródka i na spodzie przednich łap.</li>
               <li>Miłośnicy kotów są jednak bardziej otwarci na nowe doświadczenia niż miłośnicy psów.</li>
           
           </div>
       </div>
       <div className="about__img">
           <img src={kira} alt="pets"/>
       </div>
       </>
    )
}
const Dogtheme = () =>{
    
    return(
    <>
    <div className="about__interesting">
               <span className="about__title">Czy wiedziałeś że...</span> <br/>
               <div className="about__textgeneral">
               
                   <li>Niedawno odkryto, że psy widzą kolor, chociaż nie tak intensywnie jak my widzimy.</li>
                   <li>Nie ma dwóch takich samych psich nosów. Każdy jest inny tak jak u ludzi, każdy odciska palca również jest unikalny.</li>
                   <li>Psy mają gruczoły potowe w opuszkach łap. Jednak aby się schłodzić po prostu dyszą.</li>
                   <li>Psy potrafią lokalizować źródło dźwięku w ciągu 6 setnej sekundy, używając swoich obracanych uszu</li>
               
               </div>
           </div>
           <div className="about__img">
               <img src={golden} alt="pets"/>
           </div>
           </>)
    }
const Start = (props) => {
    useEffect(() => {
        const favourite = document.querySelectorAll('.favourite');
        const about = document.querySelector('.about');
        favourite.forEach(favourite=>{
            favourite.addEventListener('click', ()=>{
                about.scrollIntoView({ behavior: 'smooth', block: 'start' })
     console.log('xdd')
            })
        })
        
    }, []);
        
    return (
        
             <>
   
   <section className="section__choose" >
       <div className="favourite__general">Koty czy psy?</div>
       <div className="section__favourite">
       <div className="favourite favourite__dog left" onClick={props.chooseDog}> <img src={dog} alt="pets dog"/>
       <div className="favourite__text"> Psy!</div>
       </div>
       <div className="favourite favourite__dog" onClick={props.chooseCat}> <img src={cat} alt="pets cat"/>
       <div className="favourite__text"> Koty!</div>
       </div>
       </div>
       <div className="favourite__general">{props.prefer==='dog' ? 'Hau hau' : 'Miau!'}</div>
   </section>
   <section className="about padding">
      {props.prefer==='dog' ? <Dogtheme/> : <Cattheme/>} 
       
   </section>
   <section className="benefits">
       <div className="benefits__background"> Dlaczego kochamy zwierzęta? </div>
       <div className="benefits__all">
<div className="benefits__one">
    <img src={love} alt="pets love"/>
    One kochają Nas
    </div>
<div className="benefits__one">
<img src={book} alt="pets responsibility"/>
    Uczą odpowiedzialności
    </div>
<div className="benefits__one">
<img src={group} alt="pets froup"/>
    Są naszymi przyjaciółmi
    </div>
       </div>
   </section>
   </>
        
    );
}

export default Start;


