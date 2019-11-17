import React from 'react';

import './styles.css';

export default function Comment({ data }) {
  return (
    <> 
    {
      data.map(elem =>           
        <div className="post-comments" key={elem.id}>          
          <img src={elem.avatar} alt="Avatar" />
          <div className="comment">
            <p>
              <strong>{elem.name}  </strong>
              {elem.content}
            </p>
        </div>
      </div>
        )
    } 
        
    </>      
        
    
  );
}
