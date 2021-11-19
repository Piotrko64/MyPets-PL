import React from 'react';
import ReactDOM from 'react-dom';
import App from './Component/App';

ReactDOM.render(<App />, document.getElementById('root'));
// 
// Dla addEventListener
// 
const nav= document.querySelector('nav');
document.addEventListener('scroll', ()=>{
    if(window.pageYOffset>100){
    nav.classList.add("white_nav");
    }
    else if(window.pageYOffset<=100){
        nav.classList.remove("white_nav");
    }
})