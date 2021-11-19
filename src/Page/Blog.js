import React, { useState , useEffect} from 'react';
import '../styles/Blog.css';
import {Link} from 'react-router-dom'


const Blog = ({match}) => {
  
    const [type] = useState('posts');
  const [arrays, setArrays] = useState([]);

  useEffect(()=>{
    fetch('http://piotrko88.ct8.pl/phpconnect.php')
    .then(response => response.json())
    .then(json => setArrays(json))
   
  },[type])
  
  
    return(
   <>
   
        <section className="section__blog">
        { arrays.map(array => (
       <>
       
       <div className="blog__post">
       <div className="blog__img">
       <img src={`./${array.Image}`} alt="blog img"/>
     </div>
     <div className="blog__containertext"><div className="blog__title">{array.Title}</div> <div className="blog__intro">{array.Introduction}</div>
     <Link to={`/post/${array.Id}`}><strong>Czytaj dalej</strong></Link>
     </div>
     </div>
     
       </>
     ))


     }
        </section>
        
   </>


    )
}


export default Blog;