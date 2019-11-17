import React from 'react';

import Comment from '../Comment'
import './styles.css';

const Post = ({ data }) => {
  return (
    <>
    {data.map(elem =>      
      <div key={elem.id}>
      <div className="post" >                      
        <img src={elem.avatar} alt="Avatar" />
          <div className="post-info">                   
            <strong>{elem.name}</strong>
            <span>{elem.date}</span>
          </div>                    
    </div>
        <div className="tweet">
          <p>{elem.content}</p>
        </div>

        <div className="line"> </div>
          {elem.comments ? <Comment data={elem.comments} /> : []}
          
        </div>
      )} 
      </>
        
     
  );
}

export default Post
