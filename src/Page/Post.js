import React, { useState , useEffect} from 'react';
import '../styles/Post.css';
import {Link} from 'react-router-dom';
import axios from '../axiosinstance'

const Post = ({match},props) => {
    
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
    
    let thisID = match.params.id;
    console.log(thisID);
    
    
    let newar = arrays.filter(array => array._id===match.params.id);
    
    console.log(newar)
    
    
    return (
        <>
        
        
        {
        newar.map(array=>
            <article className="article__array">
<div className="array__img" style={{ backgroundImage: `url(../${array.Image})` }}>
            <h1 className="array__Title">{array.Title}</h1>
            </div>
            <div className="array__text padding">
            <span className="array__intro">{array.Introduction}</span>
            <hr></hr>
            {array.GeneralText}
            </div>
            <Link to="/Blog"><button> Wróć! </button></Link>
            </article>
        )}
          
        
       
        
       </>
    );
}

export default Post;
