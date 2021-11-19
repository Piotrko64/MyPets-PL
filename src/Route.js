import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';
import header1 from './header3.jpg';
import header2 from './header4.jpg'

const Pierwsza = () => {
    return(
    <>
    Pierwsza
    <img src={header1}/>
    </>
    )
 
 
 }
 const Druga = () => {
     return(
    <>
    Druga
    <img src={header2}/>
    </>
     )
 
 
 }
const Routem = () => {
    return(
   <>
   <Switch>
            <Route path="/" exact component={Pierwsza}/>
            <Route path="/news"  component={Pierwsza}/>
            <Route path="/contact"  component={Druga}/>
            
            
            </Switch>
   </>


    )
}


export default Routem;