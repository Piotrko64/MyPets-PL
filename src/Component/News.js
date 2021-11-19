import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';


const Nowe = () => {
    return(
   <h2>NAjsndowsze</h2>)
  
  
  }
  const Stare = () => {
    return(
   <h2>NAsjnowsze jeszcze</h2>)
  
  
  }


const News = () => {
  return(
      <>
 <h2>Nowinki!!!</h2>
 <Nowe/>
 
 </>
 )



}


export default News;