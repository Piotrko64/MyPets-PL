import React, { Component } from 'react';
import SimpleReactLightbox from 'simple-react-lightbox'
import Main from './Main.js';
import '../App.css';
import Footer from './Footer.js';
import Nav from './Nav.js';
import FotoMain from './mainheader'
import { BrowserRouter as Router} from 'react-router-dom';





class App extends Component {
  state={
    prefer: 'dog',
  };


 handleChooseDog = () => {
  const thisPet = document.querySelector('.section__choose');
  thisPet.scroll(0,0);

    this.setState({
      prefer: 'dog'
          })
          
   
  }

  handleChooseCat = () => {
   
    this.setState({
      prefer: 'cat'
          })
          
   
  }
  

  render() {
    return (
      <SimpleReactLightbox>
      
    
      <Router>
        <div>
          <header id="look">
            <nav className="padding" >
              
                {/* <li><a href="/">Start</a></li>
                <li><a href="/news">Aktualności</a></li>
                <li><a href="/contact">Kontakt</a></li> */}
                
                <Nav look={this.handleLook}/>
              
            </nav>
            <FotoMain/>
          </header>
          <main id="first">
           
              <Main chooseDog={this.handleChooseDog} chooseCat={this.handleChooseCat} prefer={this.state.prefer} />
          </main>
          <footer>
            
         <Footer prefer={this.state.prefer} />
          </footer>
        </div>
      </Router>
      </SimpleReactLightbox>
    );
  }
}

export default App;