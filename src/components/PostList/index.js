import React, { Component } from 'react';

import Post from '../Post'

import './style.css';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,        
        name: "Julio Alcantara",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSitszoOe367Y9WMgqhiGbYxeZRMxJGt6DVDsYc9fgfiVhDlJPS",        
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe o que é budismo?",
        comments: [
          {
            id: 1,            
            name: "Bruna Alves",
            avatar: "https://osegredo.com.br/wp-content/uploads/2018/02/pessoas-que-superam-a-depress%C3%A3o-830x450.jpg",
            content: "O budismo é uma filosofia. ou religião não teísta que surgiu originalmente na Índia por volta do século VI A.C. e abrange diversas tradições, crenças e práticas baseadas nos ensinamentos, o Darma, de Siddhartha Gautama, intitulado de Buddha."
          },
          {
            id: 2,            
            name: "Marco Antonio",
            avatar: "https://ogimg.infoglobo.com.br/in/23861842-e39-443/FT1086A/652/xjair.jpg.pagespeed.ic.grEKOyz0wF.jpg",
            content: "O budismo é uma religião baseada nos ensinamentos deixados pelo Buda Sakyamuni."
          }
        ]
      },
      
    ]
  };


  render() {
    return (
      <main>
          <div className="content">
              <Post data={this.state.posts}/>   
          </div>
           
      </main>
    );
  }
  
}

export default PostList
