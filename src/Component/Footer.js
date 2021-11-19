import React from 'react';
import catpaw from '../Img/Icon/cat-paw.png';
import dogpaw from '../Img/Icon/dog-paw.png';

const Footer = (props) => {
    return(
   <>
   <div className="footer__paw" onClick={props.Choose}>
   <img src={props.prefer==='dog' ? dogpaw : catpaw} alt="footer"/>
   <span>{props.prefer==='dog' ? 'Psia' : 'Kocia'} stopka!</span>
   </div>
   <div className="advert"> Podoba ci się strona? Napisz  <span className="email__underline">Piotrko64@gmail.com</span></div>
  <div className="advert"> Lub odwiedź moją stronę! <a href="http://piotrko67.ct8.pl"> Piotrko67</a></div>
   </>


    )
}


export default Footer;