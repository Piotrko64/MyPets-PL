import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../Img/Icon/Logo.png';
import '../styles/Nav.css';



class Nav extends Component {
    state={
        classActive: ''
    }
    handleActiveUl = () => {
        window.scrollTo(0, 0);
        console.log('xdd')
        if(this.state.classActive===''){
        this.setState({
            classActive: 'active'
        })}
        else{
            this.setState({
                classActive: ''
            })
        }
        }
        handleActiveUlwithout = () => {
            
            
            if(this.state.classActive===''){
            this.setState({
                classActive: 'active'
            })}
            else{
                this.setState({
                    classActive: ''
                })
            }
            }




    render() {
        return (
            <>
                 <div className="logo"><a href="http://piotrko88.ct8.pl">

<img className ="logo__img" src={logo} alt="logo"/> My Pets </a>
</div>
<ul className={this.state.classActive}>
<li onClick={this.handleActiveUl} ><NavLink to="/" exact> Start</NavLink></li>
         <li onClick={this.handleActiveUl} ><NavLink to="/Photo">Zdjęcia</NavLink></li>
         <li onClick={this.handleActiveUl} ><NavLink to="/Pets" >Pupile</NavLink></li>
         <li onClick={this.handleActiveUl} ><NavLink to="/Blog">Blog</NavLink></li>
         
         </ul>
         <div class="nav__btn" onClick={this.handleActiveUlwithout}>

<div className={this.state.classActive==='active' ? "nav__line nav__line--first acti" : "nav__line nav__line--first"}  >

</div>
<div className={this.state.classActive==='active' ? "nav__line nav__line--second acti" : "nav__line nav__line--second"}>

</div>
<div className={this.state.classActive==='active' ? "nav__line nav__line--third acti" : "nav__line nav__line--third"}>

</div>
</div>
            </>
        );
    }
}

export default Nav;


