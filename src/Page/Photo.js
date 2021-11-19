import React ,{ Component }from 'react';
import { SRLWrapper } from "simple-react-lightbox";
import cat from '../Img/cat-favourite.jpg';
import dog from '../Img/dog-favourite.jpg'
import kira from '../Img/Kira.png';
import kira3 from '../Img/kira3.png';
import golden from '../Img/golden.jpg';
import Luna from '../Img/Luna.png'
import Luka2 from '../Img/Luka2.png'
import Brysiu from '../Img/Brysiu.png'
import gumball2 from '../Img/gumball2.png'
import gumball3 from '../Img/gumball3.png'
import gumball4 from '../Img/gumball4.png'
import dog2 from '../Img/header-dog.jpg'
import cat2 from '../Img/header-cat.jpg'


class Photo extends Component {

        
    render() {
        
        return (
            <>
             <div className="photo__gallery">
             <SRLWrapper>
            <a href={cat} className="photo__photos down"> <img src={cat} alt="CATS!"/></a>
            <a href={dog} className="photo__photos down"> <img src={dog} alt="pets dog"/></a>
            <a href={golden} className="photo__photos down"> <img src={golden} alt="pets dog"/></a>
            <a href={Luna} className="photo__photos down"> <img src={Luna} alt="pets black"/></a>
            <a href={Luka2} className="photo__photos down"> <img src={Luka2} alt="pets dog"/></a>
            <a href={cat2} className="photo__photos down"> <img src={cat2} alt="pets dog"/></a>
            <a href={Brysiu} className="photo__photos down"> <img src={Brysiu} alt="pets dog"/></a>
            <a href={dog2} className="photo__photos down"> <img src={dog2} alt="pets dog"/></a>
            <a href={kira3} className="photo__photos down"> <img src={kira3} alt="pets cat"/></a>
            <a href={dog2} className="photo__photos down"> <img src={dog2} alt="pets dog"/></a>
            <a href={Brysiu} className="photo__photos down"> <img src={Brysiu} alt="pets dog"/></a>
            <a href={Luna} className="photo__photos down"> <img src={Luna} alt="pets cat"/></a>
            <a href={kira} className="photo__photos down"> <img src={kira} alt="pets cat"/></a>
            <a href={gumball2} className="photo__photos down"> <img src={gumball2} alt="pets cat"/></a>
            <a href={gumball3} className="photo__photos down"> <img src={gumball3} alt="pets cat"/></a>
            <a href={gumball4} className="photo__photos down"> <img src={gumball4} alt="pets cat"/></a>
           
           
            
            </SRLWrapper>
            
        </div>   
            </>
        );
    
}
}
export default Photo;

