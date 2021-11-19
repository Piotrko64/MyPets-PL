import React from 'react';
import {Route, Switch } from 'react-router-dom';
import Start from '../Page/Start.js'
import Photo from '../Page/Photo.js'
import Pets from '../Page/Pets.js'
import Blog from '../Page/Blog.js'
import Post from '../Page/Post.js'





const Main = (props) => {

  
    
    return(
   <>
   
   <Switch >
            <Route path="/" exact component={() => <Start chooseCat={props.chooseCat} chooseDog={props.chooseDog} prefer={props.prefer}  />} />
            <Route path="/Photo"  component={Photo}/>
            <Route path="/Pets"  component={Pets}/>
            <Route path="/Blog"  component={Blog}/>
            <Route path="/Post/:id"  component={Post} />
            
            <Route path="*" component={Start}/>
            </Switch>
            
   </>


    )
}


export default Main;