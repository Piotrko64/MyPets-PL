import React, { useState , useEffect} from 'react';
import '../styles/Post.css';
import {Link} from 'react-router-dom'
const Post = ({match},props) => {
    const [type] = useState('posts');
    const [arrays, setArrays] = useState([]);
  
    useEffect(()=>{
      fetch('http://piotrko88.ct8.pl/phpconnect.php')
      .then(response => response.json())
      .then(json => setArrays(json))
      .catch(console.log("nie ma"))
     
    },[type])
    
    let thisID = match.params.id;
    console.log(thisID);
    
    
    let newar = arrays.filter(array => array.Id===match.params.id);
    
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
