import React, { Component } from 'react';

// import { Container } from './styles';

export default class TechList extends Component {
  state ={
    techs: [
      'node',
      'native',
      'react',
      'angular'
    ]
  }
  render() {
    return <ul>
    <li>Node.js</li>
    <li>Reactjs</li>
    <li>Native</li>
    </ul>;
  }
}
