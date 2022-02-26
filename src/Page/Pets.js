import React, { useEffect } from 'react';
import Luna from '../Img/Luna.png'
import Luka from '../Img/Luka.png'
import Brysiu from '../Img/Brysiu.png'
import Gumball from '../Img/Gumball.png'
import BigGumball from '../Img/BigGumball.png'
import BigLuka from '../Img/BigLuka.png'
import BigLuna from '../Img/BigLuna.png'
import BigBrysiu from '../Img/BigBrysiu.png'

const Pets = () => {
     useEffect(() => {

         const allPets = document.querySelectorAll('.Pets__img');
        
         function checkSlide() {
          allPets.forEach(pets => {
            console.log(pets.getBoundingClientRect().y);
            if(pets.getBoundingClientRect().y < 500 && pets.getBoundingClientRect().y > -100){
                 pets.classList.add('active');
            }
            else{
               pets.classList.remove('active');
            }
          });
        }
        window.addEventListener('scroll', checkSlide);
     }, []);
    return(
   <>
 <section className="Pets">
<div className="Pets__one padding" style={{ backgroundImage: `url(${BigBrysiu})` }}><div className="Pets__width"><div className="Pets__name">Bryś! </div> <div className="Pets__picture"> <img src={Brysiu} className="Pets__img" alt="my dog"/></div> </div>
</div>
<div className="Pets__one padding" style={{ backgroundImage: `url(${BigLuka})` }}><div className="Pets__width"><div className="Pets__picture"> <img src={Luka} className="Pets__img" alt="my dog"/></div><div className="Pets__name">Luka </div>  </div>
     </div>
<div className="Pets__one padding" style={{ backgroundImage: `url(${BigGumball})` }}><div className="Pets__width"><div className="Pets__name">Gumball </div> <div className="Pets__picture"> <img src={Gumball} className="Pets__img" alt="my cat"/></div></div>
     </div>
<div className="Pets__one padding" style={{ backgroundImage: `url(${BigLuna})` }}><div className="Pets__width"><div className="Pets__picture"> <img src={Luna} className="Pets__img" alt="my cat"/></div><div className="Pets__name">Luna </div> </div>
     </div>
 </section>
   </>


    )
}


export default Pets;
