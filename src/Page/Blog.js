import React, { useState , useEffect} from 'react';
import '../styles/Blog.css';
import {Link} from 'react-router-dom'
import axios from '../axiosinstance'

const Blog = () => {
  
    
  const [arrays, setArrays] = useState([]);

  async function fetchPosts(){
    const res = await axios.get('/post');
    const posts= res.data;
    console.log(posts)
    await setArrays(posts);
    
  }
  useEffect(()=>{
    fetchPosts();
   
  })
  
  
    return(
   <>
   
        <section className="section__blog">
        { arrays.map(array => (
       <>
       
       <div className="blog__post">
       <div className="blog__img">
       <img src={`./${array.image}`} alt="blog img"/>
     </div>
     <div className="blog__containertext"><div className="blog__title">{array.title}</div> <div className="blog__intro">{array.introduction}</div>
     <Link to={`/post/${array._id}`}><strong>Czytaj dalej</strong></Link>
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