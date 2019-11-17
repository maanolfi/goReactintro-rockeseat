import React, { Component } from 'react';

import TechItem from './TechItem'
// import { Container } from './styles';

export default class TechList extends Component {
  state ={
    newTech: '',
    techs: [
      'node',
      'native',
      'react',
      'angular'
    ]
  }

  handleInput = e => {
    this.setState({
       newTech: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState({
      newTech: '',
      techs: [...this.state.techs, this.state.newTech]
    })
  }

  handleDelete = (tech) => {
    this.setState({
      techs: this.state.techs.filter(t => t !== tech)
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <h1>{this.state.newTech}</h1>
      <ul>
        {this.state.techs.map( tech => 
          <TechItem key={tech} tech={tech}
          onDelete={() => this.handleDelete(tech)}
          />         
          )}
      </ul>
      <input type='text' 
      onChange={this.handleInput}
      value={this.state.newTech} ></input>
      <button type='submit'>Adicionar</button>
      </form>
    );
  }
}
