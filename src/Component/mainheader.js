import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import header1 from '../Img/header1.jpg'
import header2 from '../Img/header2.jpg'
import header3 from '../Img/header4.jpg'
import header4 from '../Img/header3.jpg';
import {
    TransitionGroup,
    CSSTransition
  } from "react-transition-group";
const mainheader1 = () => {
    
    return(
   <>
  <div className="header--start" style={{ backgroundImage: `url(${header1})` }}>
   
   <div className="header--contain">
   <div className="header--textmain">My Pets </div>
   <div className="header--text">Koty i Psy</div>
   </div>
   </div>
   </>


    )
}
const mainheader4 = () => {
    return(
   <>
  <div className="header--start" style={{ backgroundImage: `url(${header4})` }}>
   
   <div className="header--contain">
   <div className="header--textmain">Blog </div>
   <div className="header--text">o Zwierzakach</div>
   </div>
   </div>
   </>


    )
}
const mainheader2 = () => {
    return(
   <>
  <div className="header--start" style={{ backgroundImage: `url(${header2})` }}>
   
   <div className="header--contain">
   <div className="header--textmain">Zdjęcia </div>
   <div className="header--text">Naszych ulubieńców</div>
   </div>
   </div>
   </>


    )
}
const mainheader3 = () => {
    return(
   <>
  <div className="header--start" style={{ backgroundImage: `url(${header3})` }}>
   
   <div className="header--contain">
   <div className="header--textmain">Pupile</div>
   <div className="header--text">poznaj ich</div>
   </div>
   </div>
   </>


    )
}

const FotoMain = () => {
    let location = useLocation();

    return(
   <>
   <TransitionGroup>
          
          <CSSTransition
            key={location.key}
            classNames="photo"
            timeout={300}
          >
   
   <Switch location={location}>
            <Route path="/" exact component={mainheader1}/>
            <Route path="/Photo"  component={mainheader2}/>
            <Route path="/Pets"  component={mainheader3}/>
            <Route path="/Blog"  component={mainheader4}/>
            <Route path="/Post"  component={''}/>
            <Route path="*"  component={mainheader1}/>

            
            
            
            </Switch>
            </CSSTransition>
            </TransitionGroup>
   </>


    )
}


export default FotoMain;